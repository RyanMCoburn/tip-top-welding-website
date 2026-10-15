import { createHmac, timingSafeEqual } from 'node:crypto'
import { getStore } from '@netlify/blobs'

const ACCOUNT = 'acct_1RgVReGPsss6A6XT'
const EVENTS = new Set(['checkout.session.completed', 'checkout.session.async_payment_succeeded'])

export function verifySignature(body, signature, secret, now = Date.now()) {
  if (!secret || !signature) return false
  const parts = signature.split(',').map(part => part.split('='))
  const timestamp = parts.find(([key]) => key === 't')?.[1]
  if (!/^\d+$/.test(timestamp ?? '') || Math.abs(now / 1000 - Number(timestamp)) > 300) return false
  const expected = createHmac('sha256', secret).update(`${timestamp}.${body}`).digest()
  return parts.some(([key, value]) => {
    if (key !== 'v1' || !/^[a-f0-9]{64}$/i.test(value ?? '')) return false
    const actual = Buffer.from(value, 'hex')
    return actual.length === expected.length && timingSafeEqual(actual, expected)
  })
}

export function createHandler({ secret, store, now = Date.now }) {
  return async request => {
    const headers = { 'Cache-Control': 'no-store' }
    if (request.method !== 'POST') return new Response('Method not allowed', { status: 405, headers: { ...headers, Allow: 'POST' } })
    if (!secret) return new Response('Payment event recording is not configured', { status: 503, headers })
    // Bound memory usage before reading an unauthenticated body.
    const reader = request.body?.getReader()
    if (!reader) return new Response('Missing payload', { status: 400, headers })
    const chunks = []
    let size = 0
    while (true) {
      const { value, done } = await reader.read()
      if (done) break
      size += value.byteLength
      if (size > 1024 * 1024) {
        await reader.cancel()
        return new Response('Payload too large', { status: 413, headers })
      }
      chunks.push(Buffer.from(value))
    }
    const body = Buffer.concat(chunks).toString('utf8')
    if (!verifySignature(body, request.headers.get('stripe-signature'), secret, now())) {
      return new Response('Invalid signature', { status: 400, headers })
    }
    let event
    try { event = JSON.parse(body) } catch { return new Response('Invalid JSON', { status: 400, headers }) }
    if (!EVENTS.has(event.type) || event.livemode !== true || (event.account && event.account !== ACCOUNT)) {
      return new Response('Ignored', { headers })
    }
    const session = event.data?.object
    if (!/^evt_[a-zA-Z0-9]+$/.test(event.id ?? '') || !/^cs_live_[a-zA-Z0-9]+$/.test(session?.id ?? '')) {
      return new Response('Invalid event', { status: 400, headers })
    }
    // An authorized delayed payment is not yet a paid order.
    if (session.payment_status !== 'paid' || session.status !== 'complete' || session.livemode !== true || !session.payment_link) {
      return new Response('Not a paid Payment Link order', { headers })
    }
    try {
      // One atomic record per session, even for retries or concurrent events.
      // Customer contact details and card information remain in Stripe.
      const result = await store().setJSON(`paid/${session.id}`, {
        sessionId: session.id,
        eventId: event.id,
        paymentLinkId: session.payment_link,
        paymentIntentId: typeof session.payment_intent === 'string' ? session.payment_intent : null,
        amountTotal: session.amount_total,
        currency: session.currency,
        paidAt: event.created,
        status: 'paid-awaiting-owner-review',
        dashboardUrl: `https://dashboard.stripe.com/${ACCOUNT}/payments/${typeof session.payment_intent === 'string' ? session.payment_intent : ''}`,
      }, { onlyIfNew: true })
      console.info('Paid order recorded', { sessionId: session.id, newRecord: result.modified })
      return new Response('Recorded', { headers })
    } catch {
      console.error('Paid order storage failed', { eventId: event.id })
      // Stripe retries failed deliveries; never acknowledge lost orders.
      return new Response('Please retry', { status: 500, headers })
    }
  }
}

export default async function handler(request) {
  return createHandler({
    secret: process.env.STRIPE_WEBHOOK_SECRET,
    store: () => getStore({ name: 'stripe-paid-orders', consistency: 'strong' }),
  })(request)
}

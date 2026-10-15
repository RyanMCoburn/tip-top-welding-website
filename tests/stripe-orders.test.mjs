import { test } from 'node:test'
import assert from 'node:assert/strict'
import { createHmac } from 'node:crypto'
import { createHandler, verifySignature } from '../netlify/functions/stripe-orders.mjs'

const secret = 'test-only-webhook-secret'
const now = 1800000000000
const timestamp = now / 1000
const event = {
  id: 'evt_verified1', type: 'checkout.session.completed', livemode: true, created: timestamp,
  data: { object: { id: 'cs_live_verified1', livemode: true, status: 'complete', payment_status: 'paid',
    payment_link: 'plink_verified1', payment_intent: 'pi_verified1', amount_total: 388725, currency: 'usd',
    customer_details: { email: 'must-not-be-stored@example.com' } } },
}
const sign = (body, time = timestamp) => `t=${time},v1=${createHmac('sha256', secret).update(`${time}.${body}`).digest('hex')}`
const request = (value = event, time = timestamp) => {
  const body = JSON.stringify(value)
  return new Request('https://example.test/.netlify/functions/stripe-orders', {
    method: 'POST', body, headers: { 'stripe-signature': sign(body, time) },
  })
}
function setup() {
  const records = new Map()
  const handler = createHandler({ secret, now: () => now, store: () => ({ setJSON: async (key, value) => {
    if (records.has(key)) return { modified: false }
    records.set(key, value)
    return { modified: true }
  } }) })
  return { handler, records }
}

test('signature rejects tampering, expired/future signatures, and malformed values', () => {
  const body = JSON.stringify(event)
  assert.equal(verifySignature(body, sign(body), secret, now), true)
  assert.equal(verifySignature(body + ' ', sign(body), secret, now), false)
  assert.equal(verifySignature(body, sign(body, timestamp - 301), secret, now), false)
  assert.equal(verifySignature(body, sign(body, timestamp + 301), secret, now), false)
  assert.equal(verifySignature(body, 't=bad,v1=oops', secret, now), false)
  assert.equal(verifySignature(body, `t=${timestamp},v1=oops,${sign(body).split(',')[1]}`, secret, now), true)
})
test('concurrent repeated events record one paid order without customer details', async () => {
  const { handler, records } = setup()
  const results = await Promise.all([handler(request()), handler(request())])
  assert.ok(results.every(response => response.status === 200))
  assert.equal(records.size, 1)
  assert.equal(records.values().next().value.amountTotal, 388725)
  assert.equal(JSON.stringify([...records]).includes('must-not-be-stored'), false)
})
test('unpaid, test-mode, foreign-account, and unrelated events do not create orders', async () => {
  for (const change of [
    value => { value.data.object.payment_status = 'unpaid' },
    value => { value.livemode = false },
    value => { value.account = 'acct_someoneElse' },
    value => { value.type = 'checkout.session.async_payment_failed' },
  ]) {
    const { handler, records } = setup()
    const value = structuredClone(event); change(value)
    assert.equal((await handler(request(value))).status, 200)
    assert.equal(records.size, 0)
  }
})
test('delayed payment creates order only after success', async () => {
  const { handler, records } = setup()
  const value = structuredClone(event)
  value.data.object.payment_status = 'unpaid'
  await handler(request(value))
  assert.equal(records.size, 0)
  value.type = 'checkout.session.async_payment_succeeded'
  value.data.object.payment_status = 'paid'
  await handler(request(value))
  assert.equal(records.size, 1)
})
test('storage failure returns 500 so Stripe retries', async () => {
  const handler = createHandler({ secret, now: () => now, store: () => ({ setJSON: async () => { throw Error('storage unavailable') } }) })
  assert.equal((await handler(request())).status, 500)
})
test('missing configuration, unsigned requests, oversized bodies and GET are rejected', async () => {
  const { handler } = setup()
  assert.equal((await createHandler({ secret: '', store: () => null })(request())).status, 503)
  assert.equal((await handler(new Request('https://example.test', { method: 'POST', body: '{}' }))).status, 400)
  assert.equal((await handler(new Request('https://example.test', { method: 'POST', body: 'a'.repeat(1024 * 1024 + 1) }))).status, 413)
  assert.equal((await handler(new Request('https://example.test'))).status, 405)
})

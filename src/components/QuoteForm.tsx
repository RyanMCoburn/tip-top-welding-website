import { useMemo, useState, type FormEvent } from 'react'
import { useSearchParams } from 'react-router-dom'
import CTAButton from './CTAButton'
import { DISCLAIMERS } from '../config/legal'
import {
  isQuoteFormConfigured,
  QUOTE_FORM_ENDPOINT,
  QUOTE_FORM_SOURCE,
} from '../config/forms'
import { formatStorePrice, getStoreProductById } from '../config/store'
import { CTAS, CONTACT, PROJECT_TYPES, SITE } from '../data/siteContent'

interface QuoteFormProps {
  id?: string
  compact?: boolean
}

type FormStatus = 'idle' | 'loading' | 'success' | 'error' | 'demo-success'

function ContactFallback() {
  return (
    <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
      <CTAButton href={CONTACT.tel} size="lg">
        Call {SITE.phone}
      </CTAButton>
      <CTAButton href={CONTACT.sms} variant="outline" size="lg">
        {CTAS.secondary}
      </CTAButton>
    </div>
  )
}

function defaultProjectTypeForStoreProduct(title: string): string {
  const lower = title.toLowerCase()
  if (lower.includes('pool rail')) return 'Pool Railings'
  if (lower.includes('mailbox') || lower.includes('mail box')) return 'Custom Metal Projects'
  if (lower.includes('powder')) return 'Custom Metal Projects'
  return 'Custom Metal Projects'
}

function buildStoreProductMessage(title: string, price: number): string {
  return `I'm interested in the following store item:\n\n${title} (${formatStorePrice(price)})\n\nProject details:\n`
}

export default function QuoteForm({ id = 'quote-form', compact = false }: QuoteFormProps) {
  const [searchParams] = useSearchParams()
  const storeProductId = searchParams.get('product')?.trim() ?? ''
  const storeProduct = useMemo(
    () => (storeProductId ? getStoreProductById(storeProductId) : undefined),
    [storeProductId],
  )

  const [status, setStatus] = useState<FormStatus>('idle')
  const [message, setMessage] = useState(() =>
    storeProduct ? buildStoreProductMessage(storeProduct.title, storeProduct.price) : '',
  )
  const [projectType, setProjectType] = useState(() =>
    storeProduct ? defaultProjectTypeForStoreProduct(storeProduct.title) : '',
  )
  const formConfigured = isQuoteFormConfigured()

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const form = e.currentTarget
    const data = new FormData(form)

    const payload = {
      name: String(data.get('name') ?? '').trim(),
      phone: String(data.get('phone') ?? '').trim(),
      email: String(data.get('email') ?? '').trim(),
      projectType: String(data.get('projectType') ?? '').trim(),
      message: String(data.get('message') ?? '').trim(),
      source: QUOTE_FORM_SOURCE,
      ...(storeProductId ? { storeProductId, storeProduct: storeProduct?.title ?? storeProductId } : {}),
    }

    if (!formConfigured) {
      setStatus('demo-success')
      return
    }

    setStatus('loading')

    try {
      const response = await fetch(QUOTE_FORM_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(payload),
      })

      if (response.ok) {
        setStatus('success')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="card-premium rounded-xl border border-accent/30 p-8 text-center md:p-12">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent/20">
          <svg className="h-8 w-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-white">Quote Request Sent</h3>
        <p className="mx-auto mt-3 max-w-md text-steel-400 leading-relaxed">
          Thanks — we got your message and will follow up soon. Need a faster answer? Call or text
          Tip Top Welding directly.
        </p>
        <ContactFallback />
      </div>
    )
  }

  if (status === 'demo-success') {
    return (
      <div className="card-premium rounded-xl border border-accent/30 p-8 text-center md:p-12">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent/20">
          <svg className="h-8 w-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-white">Demo Form Only</h3>
        <p className="mx-auto mt-3 max-w-md text-steel-400 leading-relaxed">
          This demo form is ready to connect to email before launch. Paste your Formspree endpoint
          into <code className="text-steel-300">src/config/forms.ts</code>. For now, please call or
          text Tip Top Welding directly.
        </p>
        <ContactFallback />
      </div>
    )
  }

  if (status === 'error') {
    return (
      <div className="card-premium rounded-xl border border-red-500/30 p-8 text-center md:p-12">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-red-500/15">
          <svg className="h-8 w-8 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-white">Could Not Send</h3>
        <p className="mx-auto mt-3 max-w-md text-steel-400 leading-relaxed">
          Something went wrong sending your quote request. Please call or text Tip Top Welding
          directly and we will help from there.
        </p>
        <ContactFallback />
        <button
          type="button"
          onClick={() => setStatus('idle')}
          className="mt-6 text-sm font-medium text-accent hover:text-white"
        >
          Try the form again
        </button>
      </div>
    )
  }

  const inputClass =
    'w-full min-h-[48px] rounded-sm border border-navy-700 bg-navy-900 px-4 py-3 text-base text-white placeholder-steel-600 transition-colors focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent disabled:opacity-60'
  const labelClass = 'mb-2 block text-sm font-medium text-steel-300'
  const isLoading = status === 'loading'

  return (
    <form id={id} onSubmit={handleSubmit} className="space-y-5" noValidate>
      {!formConfigured && (
        <p className="rounded-sm border border-navy-700/80 bg-navy-900/50 px-4 py-3 text-xs text-steel-500">
          Demo form — submissions are not sent until{' '}
          <code className="text-steel-400">QUOTE_FORM_ENDPOINT</code> is set in{' '}
          <code className="text-steel-400">src/config/forms.ts</code>.
        </p>
      )}

      {storeProduct && (
        <div
          className="rounded-lg border border-accent/25 bg-accent/8 px-4 py-3"
          role="status"
          aria-live="polite"
        >
          <p className="text-sm font-medium text-white">Store item selected</p>
          <p className="mt-1 text-sm text-steel-300">
            {storeProduct.title} — {formatStorePrice(storeProduct.price)}
          </p>
        </div>
      )}

      <input type="hidden" name="source" value={QUOTE_FORM_SOURCE} />
      {storeProductId ? <input type="hidden" name="storeProductId" value={storeProductId} /> : null}

      <div className={`grid gap-5 ${compact ? 'md:grid-cols-2' : 'md:grid-cols-2 lg:grid-cols-3'}`}>
        <div>
          <label htmlFor={`${id}-name`} className={labelClass}>
            Name <span className="text-accent">*</span>
          </label>
          <input
            type="text"
            id={`${id}-name`}
            name="name"
            required
            disabled={isLoading}
            className={inputClass}
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor={`${id}-phone`} className={labelClass}>
            Phone <span className="text-accent">*</span>
          </label>
          <input
            type="tel"
            id={`${id}-phone`}
            name="phone"
            required
            disabled={isLoading}
            className={inputClass}
            placeholder={SITE.phone}
          />
        </div>
        <div className={compact ? 'md:col-span-2' : 'lg:col-span-1'}>
          <label htmlFor={`${id}-email`} className={labelClass}>
            Email <span className="text-accent">*</span>
          </label>
          <input
            type="email"
            id={`${id}-email`}
            name="email"
            required
            disabled={isLoading}
            className={inputClass}
            placeholder="you@email.com"
          />
        </div>
      </div>

      <div>
        <label htmlFor={`${id}-project-type`} className={labelClass}>
          Project Type <span className="text-accent">*</span>
        </label>
        <select
          id={`${id}-project-type`}
          name="projectType"
          required
          disabled={isLoading}
          value={projectType}
          onChange={(e) => setProjectType(e.target.value)}
          className={`${inputClass} cursor-pointer`}
        >
          <option value="">Select a service...</option>
          {PROJECT_TYPES.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor={`${id}-description`} className={labelClass}>
          Project Description <span className="text-accent">*</span>
        </label>
        <textarea
          id={`${id}-description`}
          name="message"
          required
          disabled={isLoading}
          rows={compact ? 4 : 5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className={`${inputClass} min-h-[120px] resize-y`}
          placeholder="Describe your project — boat make/model, location, timeline, and any specific requirements..."
        />
      </div>

      <div>
        <label className={labelClass}>Project Photos (Optional)</label>
        <div
          className="flex cursor-default flex-col items-center justify-center rounded-sm border-2 border-dashed border-navy-700 bg-navy-900/50 px-6 py-10"
          aria-disabled="true"
        >
          <svg className="mb-3 h-10 w-10 text-steel-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
          </svg>
          <p className="text-sm font-medium text-steel-400">Photo upload coming soon</p>
          <p className="mt-1 text-xs text-steel-600">
            For now, text project photos to {SITE.phone} using the button below.
          </p>
        </div>
      </div>

      <p className="text-xs leading-relaxed text-steel-500">{DISCLAIMERS.quote}</p>

      <CTAButton type="submit" size="lg" className="w-full sm:w-auto" disabled={isLoading}>
        {isLoading ? 'Sending…' : CTAS.quoteSubmit}
      </CTAButton>
    </form>
  )
}

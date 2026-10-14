import { useState, type FormEvent } from 'react'
import { useSearchParams } from 'react-router-dom'
import CTAButton from './ctabutton'
import { DISCLAIMERS } from '../config/legal'
import { CTAS, CONTACT, PROJECT_TYPES, SITE } from '../data/sitecontent'

interface QuoteFormProps { id?: string; compact?: boolean }
type FormStatus = 'idle' | 'loading' | 'success' | 'error'
const FORM_NAME = 'project-quote'

export default function QuoteForm({ id = 'quote-form', compact = false }: QuoteFormProps) {
  const [searchParams] = useSearchParams()
  const [status, setStatus] = useState<FormStatus>('idle')
  const [error, setError] = useState('')
  const initialDetails = searchParams.get('details') ?? ''
  const [message, setMessage] = useState(initialDetails)
  const [projectType, setProjectType] = useState(initialDetails.toLowerCase().includes('pool rail') ? 'Pool Railings' : initialDetails ? 'Custom Metal Projects' : '')
  const isLoading = status === 'loading'
  const inputClass = 'w-full min-h-[48px] rounded-lg border border-navy-700 bg-navy-900 px-4 py-3 text-base text-white placeholder-steel-600 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent disabled:opacity-60'
  const labelClass = 'mb-2 block text-sm font-medium text-steel-300'

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (isLoading) return
    const form = event.currentTarget
    if (!form.reportValidity()) return
    const data = new FormData(form)
    const uploads = Array.from(data.values()).filter((value): value is File => value instanceof File && value.size > 0)
    if (uploads.reduce((total, file) => total + file.size, 0) > 7 * 1024 * 1024) {
      setError('Please keep your photos under 7 MB total, or text them to us instead.')
      setStatus('error')
      return
    }
    for (const [key, value] of Array.from(data.entries())) {
      if (value instanceof File && value.size === 0) data.delete(key)
    }
    setStatus('loading')
    setError('')
    try {
      const response = await fetch('/quote-request.html', { method: 'POST', body: data })
      if (!response.ok) throw new Error('Submission failed')
      setStatus('success')
    } catch {
      setError('We couldn’t send your request. Your details are still here. Please try again, or call or text us.')
      setStatus('error')
    }
  }

  if (status === 'success') return <section id={id} className="card-premium rounded-xl p-8 text-center md:p-12" role="status" aria-live="polite">
    <h2 className="text-2xl font-bold text-white">Quote request received</h2>
    <p className="mt-4 text-steel-300">Thank you. We’ll review your project and contact you to discuss the details. Fabrication, price, and timing are confirmed before work begins.</p>
    <div className="mt-6 flex flex-wrap justify-center gap-3"><CTAButton href={CONTACT.tel}>Call {SITE.phone}</CTAButton><CTAButton href={CONTACT.sms} variant="outline">Text Project Photos</CTAButton></div>
  </section>

  return <form id={id} name={FORM_NAME} method="POST" action="/quote-request.html" encType="multipart/form-data" data-netlify="true" data-netlify-honeypot="bot-field" onSubmit={handleSubmit} className="space-y-5">
    <input type="hidden" name="form-name" value={FORM_NAME} />
    <input type="hidden" name="source" value="Tip Top Welding Website" />
    <div hidden><label>Leave this field empty<input name="bot-field" tabIndex={-1} autoComplete="off" /></label></div>
    <div className={`grid gap-5 ${compact ? 'md:grid-cols-2' : 'md:grid-cols-2 lg:grid-cols-3'}`}>
      <div><label htmlFor={`${id}-name`} className={labelClass}>Name <span className="text-accent">*</span></label><input id={`${id}-name`} name="name" required maxLength={120} autoComplete="name" disabled={isLoading} className={inputClass} placeholder="Your name" /></div>
      <div><label htmlFor={`${id}-phone`} className={labelClass}>Phone <span className="text-accent">*</span></label><input type="tel" id={`${id}-phone`} name="phone" required maxLength={40} autoComplete="tel" disabled={isLoading} className={inputClass} placeholder={SITE.phone} /></div>
      <div><label htmlFor={`${id}-email`} className={labelClass}>Email <span className="text-accent">*</span></label><input type="email" id={`${id}-email`} name="email" required maxLength={200} autoComplete="email" disabled={isLoading} className={inputClass} placeholder="you@email.com" /></div>
    </div>
    <div><label htmlFor={`${id}-location`} className={labelClass}>Project location</label><input id={`${id}-location`} name="location" maxLength={200} autoComplete="address-level2" disabled={isLoading} className={inputClass} placeholder="City, marina, or shipping destination" /></div>
    <div><label htmlFor={`${id}-project-type`} className={labelClass}>Project type <span className="text-accent">*</span></label><select id={`${id}-project-type`} name="projectType" required disabled={isLoading} value={projectType} onChange={event=>setProjectType(event.target.value)} className={inputClass}><option value="">Select a service…</option>{PROJECT_TYPES.map(type=><option key={type} value={type}>{type}</option>)}</select></div>
    <div><label htmlFor={`${id}-description`} className={labelClass}>Project details <span className="text-accent">*</span></label><textarea id={`${id}-description`} name="message" required maxLength={6000} disabled={isLoading} rows={compact ? 4 : 5} value={message} onChange={event=>setMessage(event.target.value)} className={`${inputClass} resize-y`} placeholder="Describe your project, measurements, finish, and preferred timing…" /></div>
    <fieldset disabled={isLoading} className="rounded-lg border border-navy-700 p-4"><legend className="px-2 text-sm font-medium text-steel-300">Project photos (optional)</legend><p className="mb-4 text-sm text-steel-400">Add up to three JPG, PNG, or WebP photos, under 7 MB total. You can also text photos to {SITE.phone}.</p><div className="grid gap-4 sm:grid-cols-3">{[1,2,3].map(number=><div key={number}><label htmlFor={`${id}-photo${number}`} className={labelClass}>Photo {number}</label><input type="file" id={`${id}-photo${number}`} name={`photo${number}`} accept="image/jpeg,image/png,image/webp" className="w-full text-sm text-steel-300 file:mr-2 file:rounded file:border-0 file:bg-navy-700 file:px-3 file:py-2 file:text-white" /></div>)}</div></fieldset>
    <p className="text-xs leading-relaxed text-steel-400">{DISCLAIMERS.quote} Your contact details and photos are used to respond to your request. <a href="/privacy" className="text-accent underline">Privacy policy</a>.</p>
    {status === 'error' && <p role="alert" className="rounded-lg border border-red-500/40 p-4 text-red-300">{error}</p>}
    <CTAButton type="submit" size="lg" className="w-full sm:w-auto" disabled={isLoading}>{isLoading ? 'Sending…' : CTAS.quoteSubmit}</CTAButton>
    <div className="flex flex-wrap gap-4 text-sm"><a href={CONTACT.tel} className="text-accent">Call {SITE.phone}</a><a href={CONTACT.sms} className="text-accent">Text project photos</a><a href={CONTACT.mailto} className="text-accent">Email us</a></div>
  </form>
}

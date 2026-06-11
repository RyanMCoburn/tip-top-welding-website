import { Link } from 'react-router-dom'
import { CONTACT, CTAS } from '../data/siteContent'

export default function MobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-navy-700 bg-navy-950/98 backdrop-blur-md md:hidden">
      <div className="grid grid-cols-3 divide-x divide-navy-700 pb-[env(safe-area-inset-bottom)]">
        <a
          href={CONTACT.tel}
          className="flex min-h-[56px] flex-col items-center justify-center gap-1 px-2 py-3 text-center transition-colors active:bg-navy-800"
        >
          <svg className="h-5 w-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          <span className="text-xs font-semibold text-white">{CTAS.phone}</span>
        </a>

        <a
          href={CONTACT.sms}
          className="flex min-h-[56px] flex-col items-center justify-center gap-1 px-2 py-3 text-center transition-colors active:bg-navy-800"
        >
          <svg className="h-5 w-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <span className="text-xs font-semibold text-white">Text Photos</span>
        </a>

        <Link
          to="/contact#quote-form"
          className="flex min-h-[56px] flex-col items-center justify-center gap-1 px-2 py-3 text-center transition-colors active:bg-navy-800"
        >
          <svg className="h-5 w-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          <span className="text-xs font-semibold text-white">Request Quote</span>
        </Link>
      </div>
    </div>
  )
}

import { VERIFIED_CLAIMS, DEMO_MODE, CAPABILITY_STRIP } from '../data/siteContent'

function StripIcon({ type }: { type: string }) {
  const cls = 'h-6 w-6 text-accent'

  switch (type) {
    case 'map':
      return (
        <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
        </svg>
      )
    case 'onsite':
      return (
        <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085" />
        </svg>
      )
    case 'water':
      return (
        <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882-.265-4.185-.75M12 20.25c1.472 0 2.882-.265 4.185-.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a45.008 45.008 0 01-5.051 1.287 45.008 45.008 0 01-5.051-1.287 1.152 1.152 0 01-.589-1.202L5.25 4.97m13.5 0C15.98 4.5 14.02 4.5 12 4.5s-3.98 0-5.75.47" />
        </svg>
      )
    default:
      return (
        <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
        </svg>
      )
  }
}

const STAGGER = [
  'animate-in-delay-1',
  'animate-in-delay-2',
  'animate-in-delay-3',
  'animate-in-delay-4',
] as const

export default function CapabilityStrip() {
  return (
    <section className="border-y border-navy-700/60 bg-navy-900">
      <div className="mx-auto max-w-7xl px-4 py-8 md:px-6 lg:px-8">
        {DEMO_MODE && (
          <p className="mb-6 text-center text-xs text-steel-500 md:text-left">
            Verify before launch: {VERIFIED_CLAIMS.claimVerificationNote}
          </p>
        )}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {CAPABILITY_STRIP.map((item, i) => (
            <div
              key={item.id}
              className={`card-premium flex flex-col items-center rounded-xl px-4 py-5 text-center md:items-start md:px-5 md:text-left animate-in ${STAGGER[i] ?? STAGGER[0]}`}
            >
              <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-lg border border-navy-700 bg-navy-950/60">
                <StripIcon type={item.icon} />
              </div>
              <p className="text-sm font-bold leading-snug text-white md:text-base">{item.label}</p>
              {item.detail && (
                <p className="mt-1 text-xs leading-relaxed text-steel-500">{item.detail}</p>
              )}
            </div>
          ))}
        </div>
        {DEMO_MODE && (
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 border-t border-navy-700/60 pt-6 md:justify-start">
            <span className="rounded-lg border border-navy-700 bg-navy-800/50 px-3 py-1.5 text-sm font-medium text-steel-300">
              {VERIFIED_CLAIMS.experienceClaim}
            </span>
            <span className="rounded-lg border border-navy-700 bg-navy-800/50 px-3 py-1.5 text-sm font-medium text-steel-300">
              {VERIFIED_CLAIMS.licenseInsuranceClaim}
            </span>
          </div>
        )}
      </div>
    </section>
  )
}

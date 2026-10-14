import type { ReactNode } from 'react'
import SectionHeading from './sectionheading'
import { WHY_CLIENTS_CALL } from '../data/sitecontent'

const STAGGER = [
  'animate-in-delay-1',
  'animate-in-delay-2',
  'animate-in-delay-3',
  'animate-in-delay-4',
  'animate-in-delay-5',
  'animate-in-delay-6',
] as const

function ReasonIcon({ type }: { type: string }) {
  const cls = 'h-7 w-7 text-accent'

  const icons: Record<string, ReactNode> = {
    mobile: (
      <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
    marine: (
      <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882-.265-4.185-.75M12 20.25c1.472 0 2.882-.265 4.185-.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a45.008 45.008 0 01-5.051 1.287 45.008 45.008 0 01-5.051-1.287 1.152 1.152 0 01-.589-1.202L5.25 4.97m13.5 0C15.98 4.5 14.02 4.5 12 4.5s-3.98 0-5.75.47" />
      </svg>
    ),
    metal: (
      <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
      </svg>
    ),
    fabrication: (
      <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085" />
      </svg>
    ),
    waterfront: (
      <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008H17.25v-.008zm0 3h.008v.008H17.25v-.008zm0 3h.008v.008H17.25v-.008z" />
      </svg>
    ),
    response: (
      <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  }

  return icons[type] ?? icons.metal
}

export default function WhyClientsCall() {
  return (
    <section className="section-space bg-navy-900">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <SectionHeading
          title="Why Clients Call Tip Top"
          subtitle="Mobile welding and custom fab in Southwest Florida. Aluminum and stainless work for boats, docks, pools, and custom metal projects."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {WHY_CLIENTS_CALL.map((item, i) => (
            <article
              key={item.title}
              className={`card-premium rounded-xl p-6 md:p-8 animate-in ${STAGGER[i] ?? STAGGER[0]}`}
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-lg border border-navy-700 bg-navy-950/50">
                <ReasonIcon type={item.icon} />
              </div>
              <h3 className="text-lg font-semibold text-white">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-steel-400">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

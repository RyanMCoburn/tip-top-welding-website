import { CONTACT_CARDS } from '../data/siteContent'

function CardIcon({ id }: { id: string }) {
  const cls = 'h-7 w-7 text-accent'

  if (id === 'call') {
    return (
      <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
      </svg>
    )
  }
  if (id === 'text') {
    return (
      <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  }
  return (
    <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
    </svg>
  )
}

export default function ContactCards() {
  return (
    <div className="grid gap-4 sm:grid-cols-3">
      {CONTACT_CARDS.map((card) => (
        <a
          key={card.id}
          href={card.href}
          className="card-premium group flex flex-col rounded-xl p-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-navy-900"
        >
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-sm border border-navy-700 bg-navy-900 transition-colors group-hover:border-accent/30">
            <CardIcon id={card.id} />
          </div>
          <h3 className="text-lg font-semibold text-white">{card.title}</h3>
          <p className="mt-2 flex-1 text-sm leading-relaxed text-steel-400">{card.description}</p>
          <p className="mt-4 text-sm font-semibold text-accent group-hover:text-white">{card.value}</p>
          <span className="mt-2 text-xs font-medium uppercase tracking-wider text-steel-500 group-hover:text-steel-400">
            {card.action} →
          </span>
        </a>
      ))}
    </div>
  )
}

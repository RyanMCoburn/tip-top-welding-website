import { Link } from 'react-router-dom'

interface ServiceCardProps {
  title: string
  description: string
  icon: string
  slug?: string
  compact?: boolean
}

function ServiceIcon({ type }: { type: string }) {
  const iconClass = 'h-8 w-8 text-accent'

  switch (type) {
    case 'aluminum':
      return (
        <svg className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
        </svg>
      )
    case 'stainless':
      return (
        <svg className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
        </svg>
      )
    case 'mobile':
      return (
        <svg className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a49.902 49.902 0 00-2.659-5.484 1.125 1.125 0 00-1.12-.688h-.001M19.5 7.125c0 .621-.504 1.125-1.125 1.125H5.625c-.621 0-1.125-.504-1.125-1.125v-1.5c0-.621.504-1.125 1.125-1.125h12.75c.621 0 1.125.504 1.125 1.125v1.5z" />
        </svg>
      )
    default:
      return (
        <svg className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
        </svg>
      )
  }
}

const cardClass =
  'card-premium group flex h-full flex-col rounded-xl p-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-navy-900'

function CardContent({ title, description, icon, compact, slug }: ServiceCardProps) {
  return (
    <>
      <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-lg border border-navy-700 bg-navy-900 transition-all duration-300 group-hover:border-accent/30 group-hover:shadow-md group-hover:shadow-accent/5">
        <ServiceIcon type={icon} />
      </div>
      <h3 className="mb-3 text-xl font-semibold text-white">{title}</h3>
      <p className={`flex-1 leading-relaxed text-steel-400 ${compact ? 'text-sm' : 'text-base'}`}>
        {description}
      </p>
      {!compact && slug && (
        <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent group-hover:text-white">
          Learn more
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </span>
      )}
    </>
  )
}

export default function ServiceCard(props: ServiceCardProps) {
  if (props.slug) {
    return (
      <Link to={`/services/${props.slug}`} className={cardClass}>
        <CardContent {...props} />
      </Link>
    )
  }

  return (
    <div className={cardClass}>
      <CardContent {...props} />
    </div>
  )
}

import { Link } from 'react-router-dom'
import CTAButton from './CTAButton'
import MediaPlaceholder from './MediaPlaceholder'

interface ServiceDetailProps {
  id: string
  slug?: string
  title: string
  description: string
  commonUseCases: readonly string[]
  reversed?: boolean
}

export default function ServiceDetail({
  id,
  slug,
  title,
  description,
  commonUseCases,
  reversed = false,
}: ServiceDetailProps) {
  return (
    <article
      id={id}
      className="scroll-mt-28 border-b border-navy-700/60 py-16 last:border-b-0 md:py-20"
    >
      <div
        className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${
          reversed ? 'lg:[&>*:first-child]:order-2' : ''
        }`}
      >
        <div>
          <MediaPlaceholder label="Replace with real Tip Top service photo" compact />
        </div>

        <div>
          <h2 className="text-2xl font-bold text-white md:text-3xl">{title}</h2>
          <p className="mt-4 text-lg leading-relaxed text-steel-400">{description}</p>

          <h3 className="mt-8 text-sm font-semibold uppercase tracking-wider text-steel-300">
            Types of Work
          </h3>
          <ul className="mt-4 space-y-3">
            {commonUseCases.map((useCase) => (
              <li key={useCase} className="flex items-start gap-3 text-steel-400">
                <svg
                  className="mt-1 h-4 w-4 shrink-0 text-accent"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                {useCase}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap gap-4">
            <CTAButton to="/contact#quote-form">Get a Quote for {title}</CTAButton>
            {slug && (
              <Link
                to={`/services/${slug}`}
                className="inline-flex items-center text-sm font-medium text-accent hover:text-white"
              >
                Full service page →
              </Link>
            )}
          </div>
        </div>
      </div>
    </article>
  )
}

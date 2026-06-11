import CTAButton from './CTAButton'
import { WHY_CHOOSE_TIPTOP } from '../data/siteContent'

interface WhyChooseTipTopProps {
  showCta?: boolean
}

export default function WhyChooseTipTop({ showCta = true }: WhyChooseTipTopProps) {
  const { title, subtitle, reasons } = WHY_CHOOSE_TIPTOP

  return (
    <section className="bg-navy-900 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="mb-12 md:mb-16">
          <div className="mb-4 h-1 w-16 bg-accent" aria-hidden="true" />
          <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
            {title}
          </h2>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-steel-400">{subtitle}</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="rounded-sm border border-navy-700/80 bg-navy-800/40 p-8 transition-colors hover:border-navy-700"
            >
              <h3 className="text-lg font-semibold text-white">{reason.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-steel-400">{reason.description}</p>
            </div>
          ))}
        </div>

        {showCta && (
          <div className="mt-12 text-center">
            <CTAButton to="/contact#quote-form" size="lg">
              Discuss Your Project
            </CTAButton>
          </div>
        )}
      </div>
    </section>
  )
}

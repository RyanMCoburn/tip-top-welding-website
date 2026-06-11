import { Link } from 'react-router-dom'
import CTAButton from '../components/CTAButton'
import SectionHeading from '../components/SectionHeading'
import ServiceDetail from '../components/ServiceDetail'
import TrustSection from '../components/TrustSection'
import {
  CONTACT,
  CTAS,
  NAUTICAL_METAL_ART,
  SERVICES,
  SPECIALIST_REASONS,
} from '../data/siteContent'

export default function Services() {
  return (
    <>
      <section className="relative overflow-hidden bg-navy-900 py-20 md:py-28">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <SectionHeading
            title="Our Services"
            subtitle="Mobile welding and custom fabrication for aluminum and stainless — boats, bow rails, pontoons, docks, marinas, and custom metal projects."
            align="left"
          />
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-steel-400">
            General service descriptions below — not specific completed jobs. Contact us with photos
            and details for a preliminary quote after project review.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <CTAButton to="/contact#quote-form">{CTAS.primary}</CTAButton>
            <CTAButton href={CONTACT.tel} variant="outline">
              {CTAS.phone}
            </CTAButton>
          </div>

          <nav className="mt-10 flex flex-wrap gap-2" aria-label="Browse services">
            {SERVICES.map((service) => (
              <Link
                key={service.id}
                to={`/services/${service.slug}`}
                className="rounded-sm border border-navy-700 bg-navy-800/50 px-3 py-1.5 text-sm text-steel-400 transition-colors hover:border-accent/40 hover:text-white"
              >
                {service.title}
              </Link>
            ))}
          </nav>
        </div>
      </section>

      <section className="bg-navy-950">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          {SERVICES.map((service, index) => (
            <ServiceDetail
              key={service.id}
              id={service.id}
              slug={service.slug}
              title={service.title}
              description={service.description}
              commonUseCases={service.commonUseCases}
              reversed={index % 2 === 1}
            />
          ))}
        </div>
      </section>

      <section className="bg-navy-900 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <SectionHeading title={NAUTICAL_METAL_ART.title} subtitle={NAUTICAL_METAL_ART.subtitle} />
          <div className="grid gap-6 sm:grid-cols-2">
            {NAUTICAL_METAL_ART.items.map((item) => (
              <div key={item.title} className="rounded-sm border border-navy-700/80 bg-navy-800/40 p-8">
                <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-3 leading-relaxed text-steel-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy-950 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <SectionHeading
            title="Why Stainless & Aluminum Work Needs the Right Fabricator"
            subtitle="Coastal environments and custom fitment require experience with stainless, aluminum, and on-site conditions."
          />
          <div className="grid gap-6 md:grid-cols-2">
            {SPECIALIST_REASONS.map((reason) => (
              <div key={reason.title} className="rounded-sm border border-navy-700/80 bg-navy-800/40 p-8">
                <h3 className="text-lg font-semibold text-white">{reason.title}</h3>
                <p className="mt-3 leading-relaxed text-steel-400">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TrustSection />

      <section className="border-t border-navy-700/60 bg-navy-900 py-16">
        <div className="mx-auto max-w-7xl px-4 text-center md:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white md:text-3xl">Ready to discuss your project?</h2>
          <p className="mx-auto mt-4 max-w-xl text-steel-400">
            Send photos or describe your welding and fabrication needs for a preliminary quote.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <CTAButton to="/contact#quote-form" size="lg">
              {CTAS.primary}
            </CTAButton>
            <CTAButton
              href={CONTACT.sms}
              variant="outline"
              size="lg"
            >
              {CTAS.secondary}
            </CTAButton>
          </div>
        </div>
      </section>
    </>
  )
}

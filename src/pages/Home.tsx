import CTAButton from '../components/CTAButton'
import HeroBanner from '../components/HeroBanner'
import CapabilityStrip from '../components/CapabilityStrip'
import WhyClientsCall from '../components/WhyClientsCall'
import SectionHeading from '../components/SectionHeading'
import ServiceCard from '../components/ServiceCard'
import WorkPreviewCard from '../components/WorkPreviewCard'
import QuoteForm from '../components/QuoteForm'
import { getHomeFeaturedWork } from '../content/loaders'
import {
  CONTACT,
  CTAS,
  HOMEPAGE,
  HOW_IT_WORKS,
  SERVICES,
  SITE,
} from '../data/siteContent'

export default function Home() {
  const featuredServices = SERVICES.slice(0, 6)
  const featuredWork = getHomeFeaturedWork()
  const stagger = ['animate-in-delay-1', 'animate-in-delay-2', 'animate-in-delay-3', 'animate-in-delay-4', 'animate-in-delay-5', 'animate-in-delay-6'] as const

  return (
    <>
      <HeroBanner />

      <CapabilityStrip />

      {/* Services preview */}
      <section className="section-space bg-navy-900">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <SectionHeading
            title={HOMEPAGE.servicesPreview.title}
            subtitle={HOMEPAGE.servicesPreview.subtitle}
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredServices.map((service, i) => (
              <div key={service.id} className={`animate-in ${stagger[i % stagger.length]}`}>
                <ServiceCard
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                  slug={service.slug}
                  compact
                />
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <CTAButton to="/services" variant="outline">
              {CTAS.viewServices}
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Recent real work / types of work */}
      <section className="section-space bg-navy-950">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <SectionHeading
            title={HOMEPAGE.realWorkPreview.title}
            subtitle={HOMEPAGE.realWorkPreview.subtitle}
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredWork.map((item, i) => (
              <div key={item.id} className={`animate-in ${stagger[i % stagger.length]}`}>
                <WorkPreviewCard {...item} />
              </div>
            ))}
          </div>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <CTAButton to="/projects" variant="outline">
              {CTAS.viewProjects}
            </CTAButton>
            <CTAButton to="/gallery" variant="ghost">
              {CTAS.viewGallery}
            </CTAButton>
          </div>
        </div>
      </section>

      <WhyClientsCall />

      {/* How it works */}
      <section className="section-space bg-navy-900">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <SectionHeading
            title={HOMEPAGE.howItWorks.title}
            subtitle={HOMEPAGE.howItWorks.subtitle}
          />
          <div className="grid gap-6 md:grid-cols-3">
            {HOW_IT_WORKS.map((step, i) => (
              <div key={step.step} className={`card-premium rounded-xl p-6 md:p-8 animate-in ${stagger[i % stagger.length]}`}>
                <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-accent text-lg font-bold text-navy-950">
                  {step.step}
                </span>
                <h3 className="text-lg font-semibold text-white">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-steel-400">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final quote CTA */}
      <section className="section-space bg-navy-950">
        <div className="mx-auto max-w-3xl px-4 md:px-6 lg:px-8">
          <SectionHeading
            title={HOMEPAGE.quoteCta.title}
            subtitle={HOMEPAGE.quoteCta.subtitle}
          />
          <div className="card-premium rounded-xl p-6 md:p-10">
            <QuoteForm compact />
          </div>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <CTAButton href={CONTACT.tel} variant="outline">
              {CTAS.phone} — {SITE.phone}
            </CTAButton>
            <CTAButton href={CONTACT.sms} variant="outline">
              {CTAS.secondary}
            </CTAButton>
          </div>
        </div>
      </section>
    </>
  )
}

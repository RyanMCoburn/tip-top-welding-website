import DesignCollection from '../components/designcollection'
import CTAButton from '../components/ctabutton'
import HeroBanner from '../components/herobanner'
import CapabilityStrip from '../components/capabilitystrip'
import WhyClientsCall from '../components/whyclientscall'
import SectionHeading from '../components/sectionheading'
import ServiceCard from '../components/servicecard'
import WorkPreviewCard from '../components/workpreviewcard'
import QuoteForm from '../components/quoteform'
import { getHomeFeaturedWork } from '../content/loaders'
import {
  CONTACT,
  CTAS,
  HOMEPAGE,
  HOW_IT_WORKS,
  SERVICES,
  SITE,
} from '../data/sitecontent'

export default function Home() {
  const featuredServiceIds = ['bow-rail-repairs','marine-welding','stainless-steel','decorative-rails','custom-gates','pool-railings']
  const featuredServices = featuredServiceIds.flatMap(id=>SERVICES.filter(service=>service.id===id))
  const featuredWork = getHomeFeaturedWork().slice(0,6)
  const stagger = ['animate-in-delay-1', 'animate-in-delay-2', 'animate-in-delay-3', 'animate-in-delay-4', 'animate-in-delay-5', 'animate-in-delay-6'] as const

  return (
    <>
      <HeroBanner />

      <section className="section-space bg-navy-900" aria-labelledby="community-art-heading">
        <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 md:px-6 lg:grid-cols-2 lg:gap-12 lg:px-8">
          <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">Giving Back to Cape Coral</p>
          <h2 id="community-art-heading" className="mt-3 text-3xl font-bold text-white md:text-4xl">Love Lock Sculpture at Cultural Park</h2>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-steel-300">
            Tip Top Welding LLC donated, fabricated, and installed a custom red double-heart love lock sculpture
            at Cultural Park in Cape Coral on October 29, 2026. A public dedication is anticipated around
            Thanksgiving; the date is pending confirmation.
          </p>
          <div className="mt-7">
            <CTAButton to="/projects#love-lock-sculpture" variant="outline">See the Community Sculpture</CTAButton>
          </div>
        </div>
          <figure className="mx-auto w-full max-w-xl">
            <a href="/images/portfolio/love-lock-sculpture-cultural-park.webp" aria-label="View the full Love Lock Sculpture photograph">
              <img
                src="/images/portfolio/love-lock-sculpture-cultural-park.webp"
                srcSet="/images/portfolio/love-lock-sculpture-cultural-park-600.webp 600w, /images/portfolio/love-lock-sculpture-cultural-park.webp 1152w"
                sizes="(min-width: 1024px) 50vw, 100vw"
                width={1152}
                height={1536}
                alt="Tip Top Welding's completed red double-heart Love Lock Sculpture at Cultural Park in Cape Coral, with its heart-shaped Tip Top Welding plaque"
                className="h-auto w-full rounded-2xl border border-navy-700 object-contain shadow-xl"
                loading="eager"
                decoding="async"
              />
            </a>
            <figcaption className="mt-3 text-sm leading-relaxed text-steel-400">The finished Love Lock Sculpture at Cultural Park, fabricated and installed by Tip Top Welding LLC.</figcaption>
          </figure>
        </div>
      </section>

      <CapabilityStrip />
      <DesignCollection compact />

      {/* Recent real work / types of work */}
      <section id="selected-work" className="section-space scroll-mt-28 bg-navy-950">
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



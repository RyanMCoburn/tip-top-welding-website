import CTAButton from '../components/ctabutton'
import SectionHeading from '../components/sectionheading'
import WhyChooseTipTop from '../components/whychoosetiptop'
import TrustSection from '../components/trustsection'
import ServiceArea from '../components/servicearea'
import ServiceAreaMap from '../components/serviceareamap'
import {
  BRAND,
  COASTAL_SECTION,
  SITE,
  WATERFRONT_LIVING,
} from '../data/sitecontent'

export default function About() {
  return (
    <>
      <section className="relative overflow-hidden bg-navy-900 py-20 md:py-28">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <SectionHeading
            title="About Tip Top Welding"
            subtitle="Mobile welding and fabrication for stainless and aluminum projects in Southwest Florida."
            align="left"
          />
        </div>
      </section>

      <section className="bg-navy-950 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
            <div>
              <h2 className="text-2xl font-bold text-white md:text-3xl">Who We Are</h2>
              <div className="mt-6 space-y-4 text-steel-400 leading-relaxed">
                <p>
                  {BRAND.legalName} is a mobile welding and fabrication business based in Cape Coral,
                  Florida. We specialize in stainless and aluminum work for boats, pools, docks, and
                  custom projects across Southwest Florida.
                </p>
                <p>
                  Services include marine fabrication, pool railings, nautical metal art, aluminum boat
                  repairs, dock and waterfront metalwork, on-site welding, and custom stainless and
                  aluminum fabrication.
                </p>
                <p>
                  Every project is discussed individually. Send photos and a description of what you need
                  — we will review the scope and provide a preliminary quote.
                </p>
              </div>
            </div>

            <div>
              <figure><img src="/images/portfolio/workshop-sculpture.webp" alt="Fabricating a dolphin sculpture in the Tip Top Welding workshop" className="w-full rounded-xl object-cover" loading="lazy" /><figcaption className="mt-3 text-sm text-steel-400">Custom coastal metalwork taking shape in the workshop.</figcaption></figure>
              <div className="mt-8 grid grid-cols-2 gap-4">
                {[
                  { stat: 'Mobile', label: 'On-Site Service' },
                  { stat: 'SW FL', label: 'Service Region' },
                  { stat: 'Stainless', label: '& Aluminum' },
                  { stat: 'Custom', label: 'Fabrication' },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-sm border border-navy-700 bg-navy-800/50 p-5 text-center"
                  >
                    <p className="text-2xl font-bold text-accent">{item.stat}</p>
                    <p className="mt-1 text-sm text-steel-400">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-navy-900 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <SectionHeading title={COASTAL_SECTION.title} subtitle={COASTAL_SECTION.subtitle} />
          <div className="grid gap-6 sm:grid-cols-2">
            {COASTAL_SECTION.points.map((point) => (
              <div key={point.title} className="rounded-sm border border-navy-700/80 bg-navy-800/40 p-8">
                <h3 className="text-xl font-semibold text-white">{point.title}</h3>
                <p className="mt-3 leading-relaxed text-steel-400">{point.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy-950 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <SectionHeading title={WATERFRONT_LIVING.title} subtitle={WATERFRONT_LIVING.subtitle} />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {WATERFRONT_LIVING.environments.map((env) => (
              <div key={env.title} className="border-l-2 border-accent bg-navy-800/30 px-6 py-5">
                <h3 className="font-semibold text-white">{env.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-steel-400">{env.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WhyChooseTipTop />

      <TrustSection />

      <ServiceArea />

      <ServiceAreaMap />

      <section className="bg-navy-900 py-16">
        <div className="mx-auto max-w-7xl px-4 text-center md:px-6 lg:px-8">
          <CTAButton to="/contact#quote-form" size="lg">
            Get in Touch — {SITE.location}
          </CTAButton>
        </div>
      </section>
    </>
  )
}

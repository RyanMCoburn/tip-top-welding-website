import CTAButton from '../components/CTAButton'
import SectionHeading from '../components/SectionHeading'
import QuoteForm from '../components/QuoteForm'
import ContactCards from '../components/ContactCards'
import SocialCTAs from '../components/SocialCTAs'
import ServiceAreaMap from '../components/ServiceAreaMap'
import MarineWeldingSEO from '../components/MarineWeldingSEO'
import { SITE, CONTACT } from '../data/siteContent'

export default function Contact() {
  return (
    <>
      <section className="bg-navy-900 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <SectionHeading
            title="Contact Us"
            subtitle="Request a quote, send project photos, or call to discuss your marine fabrication project."
          />

          <ContactCards />

          <div className="mt-16 grid gap-12 lg:grid-cols-5">
            <div className="lg:col-span-2">
              <div className="rounded-sm border border-navy-700/80 bg-navy-800/50 p-6">
                <h3 className="flex items-center gap-2 text-lg font-semibold text-white">
                  <svg className="h-5 w-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Location
                </h3>
                <p className="mt-2 text-steel-300">{SITE.fullAddress}</p>
                <p className="mt-1 text-sm text-steel-500">Serving all of Southwest Florida</p>
              </div>
            </div>

            <div className="lg:col-span-3">
              <div className="rounded-sm border border-navy-700/80 bg-navy-800/30 p-6 md:p-10">
                <h2 className="mb-6 text-2xl font-bold text-white">Request a Quote</h2>
                <QuoteForm id="quote-form" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-navy-950 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <SectionHeading
            title="Connect With Us"
            subtitle="Follow our work and leave feedback — links will be active once profiles are confirmed."
          />
          <SocialCTAs />
        </div>
      </section>

      <ServiceAreaMap />

      <MarineWeldingSEO />

      <section className="bg-navy-900 py-16">
        <div className="mx-auto max-w-7xl px-4 text-center md:px-6 lg:px-8">
          <CTAButton href={CONTACT.tel} size="lg">
            Call {SITE.phone}
          </CTAButton>
        </div>
      </section>
    </>
  )
}

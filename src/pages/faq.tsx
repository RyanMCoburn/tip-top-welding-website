import { Link } from 'react-router-dom'
import CTAButton from '../components/ctabutton'
import SectionHeading from '../components/sectionheading'
import FaqList from '../components/faqlist'
import { CONTACT, CTAS, DEMO_MODE } from '../config/brand'
import { FAQ_ITEMS } from '../data/faq'
import PlaceholderNotice from '../components/placeholdernotice'

export default function FAQ() {
  return (
    <>
      <section className="bg-navy-900 py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-4 md:px-6 lg:px-8">
          <SectionHeading
            as="h1"
            title="Frequently Asked Questions"
            subtitle="Answers about mobile welding, aluminum and stainless fabrication, quoting, and on-site service in Southwest Florida."
          />
          {DEMO_MODE && (
            <PlaceholderNotice className="mb-8">
              Some answers include placeholders — verify license, pricing, and policy details before launch.
            </PlaceholderNotice>
          )}
          <FaqList items={FAQ_ITEMS} />
          <div className="mt-12 rounded-sm border border-navy-700 bg-navy-800/40 p-8 text-center">
            <h2 className="text-xl font-bold text-white">Still have questions?</h2>
            <p className="mt-3 text-steel-400">
              Call, text project photos, or send us a message — we are happy to discuss your fabrication project.
            </p>
            <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
              <CTAButton href={CONTACT.tel}>{CTAS.phone}</CTAButton>
              <CTAButton to="/contact#quote-form" variant="outline">
                {CTAS.primary}
              </CTAButton>
            </div>
          </div>
          <p className="mt-8 text-center text-sm text-steel-500">
            Browse our{' '}
            <Link to="/services" className="text-accent hover:text-white">
              services
            </Link>{' '}
            or view{' '}
            <Link to="/projects" className="text-accent hover:text-white">
              recent projects
            </Link>
            .
          </p>
        </div>
      </section>
    </>
  )
}

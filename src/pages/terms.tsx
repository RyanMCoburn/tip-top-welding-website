import { Link } from 'react-router-dom'
import { BRAND, CONTACT } from '../config/brand'
import { LEGAL_LAST_UPDATED, TERMS_OF_SERVICE } from '../config/legal'

export default function Terms() {
  return (
    <section className="bg-navy-950 py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-4 md:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-white md:text-4xl">{TERMS_OF_SERVICE.title}</h1>
        <p className="mt-4 text-sm text-steel-500">Last updated: {LEGAL_LAST_UPDATED}</p>

        {/* TODO: Have legal counsel review before publishing */}
        <div className="prose-invert mt-10 space-y-6 text-steel-400 leading-relaxed">
          <p>{TERMS_OF_SERVICE.intro}</p>

          {TERMS_OF_SERVICE.sections.map((section) => (
            <div key={section.title}>
              <h2 className="text-xl font-semibold text-white">{section.title}</h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 48)} className="mt-3">
                  {paragraph}
                </p>
              ))}
            </div>
          ))}

          <h2 className="text-xl font-semibold text-white">Contact</h2>
          <p>
            Questions about these terms? Contact {BRAND.legalName} at{' '}
            <a href={CONTACT.mailto} className="text-accent hover:text-white">
              {BRAND.email}
            </a>
            ,{' '}
            <a href={CONTACT.tel} className="text-accent hover:text-white">
              {BRAND.phone}
            </a>
            , or {BRAND.fullAddress}.
          </p>
        </div>

        <p className="mt-12">
          <Link to="/" className="text-sm text-accent hover:text-white">
            &larr; Back to Home
          </Link>
        </p>
      </div>
    </section>
  )
}

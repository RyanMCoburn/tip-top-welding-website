import { Link } from 'react-router-dom'
import { BRAND } from '../config/brand'
import { CONTACT, FOOTER_LINKS, FOOTER_SERVICES, LEGAL_LINKS, NAV_LINKS, SERVICE_AREAS, SITE, SOCIAL_LINKS } from '../data/siteContent'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-navy-700/60 bg-navy-950">
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block">
              <span className="text-xl font-bold text-white">Tip Top Welding</span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-steel-400">
              Mobile welding and custom fabrication for aluminum and stainless across Southwest Florida.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              {Object.entries(SOCIAL_LINKS).map(([key, link]) => (
                <span
                  key={key}
                  className="text-xs text-steel-500"
                  title={link.placeholder ? 'TODO: Add URL in siteContent.ts' : link.label}
                >
                  {link.label}
                  {link.placeholder && ' (soon)'}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-steel-300">
              Navigation
            </h3>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-steel-400 transition-colors hover:text-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-steel-300">
              Services
            </h3>
            <ul className="space-y-2">
              {FOOTER_SERVICES.map((service) => (
                <li key={service} className="text-sm text-steel-400">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-steel-300">
              Service Area
            </h3>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-1">
              {SERVICE_AREAS.map((area) => (
                <li key={area} className="text-sm text-steel-400">
                  {area}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-steel-300">
              Contact
            </h3>
            <address className="space-y-3 not-italic">
              <p className="text-sm text-steel-400">
                <span className="block font-medium text-white">{BRAND.legalName}</span>
                {BRAND.streetAddress}
                <br />
                {BRAND.city}, {BRAND.region} {BRAND.postalCode}
              </p>
              <p>
                <a
                  href={CONTACT.tel}
                  className="text-sm text-steel-400 transition-colors hover:text-accent"
                >
                  {SITE.phone}
                </a>
              </p>
              <p>
                <a
                  href={CONTACT.mailto}
                  className="text-sm text-steel-400 transition-colors hover:text-accent"
                >
                  {SITE.email}
                </a>
              </p>
              <p className="text-sm text-steel-500">{SITE.domain}</p>
            </address>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-navy-700/60 pt-8 md:flex-row">
          <p className="text-sm text-steel-500">
            &copy; {year} {BRAND.legalName}. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 md:justify-end">
            {FOOTER_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-xs text-steel-500 transition-colors hover:text-accent"
              >
                {link.label}
              </Link>
            ))}
            {LEGAL_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-xs text-steel-500 transition-colors hover:text-accent"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

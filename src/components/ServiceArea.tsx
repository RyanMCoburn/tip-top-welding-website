import { DISCLAIMERS } from '../config/legal'
import { SEO_COPY, SERVICE_AREAS, SITE } from '../data/siteContent'

export default function ServiceArea() {
  return (
    <section className="bg-navy-950 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="mb-12 md:mb-16">
          <div className="mb-4 h-1 w-16 bg-accent" aria-hidden="true" />
          <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
            Mobile Welding &amp; Custom Fabrication Service Area
          </h2>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-steel-400">
            Based in {SITE.location} — mobile welding and on-site fabrication for boats, docks, marinas, and properties across Southwest Florida.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-5 text-steel-400 leading-relaxed">
            <p>{SEO_COPY.intro}</p>
            <p>{SEO_COPY.capeCoral}</p>
            <p>{SEO_COPY.aluminum}</p>
            <p>{SEO_COPY.stainless}</p>
            <p>{SEO_COPY.fabrication}</p>
          </div>

          <div>
            <h3 className="mb-6 text-sm font-semibold uppercase tracking-wider text-steel-300">
              Communities We Serve
            </h3>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {SERVICE_AREAS.map((area) => (
                <div
                  key={area}
                  className="rounded-sm border border-navy-700 bg-navy-800/50 px-4 py-3 text-center text-sm font-medium text-steel-300"
                >
                  {area}
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm text-steel-500">
              On-site fabrication available at waterfront properties, marinas, boatyards, and private docks throughout the region.
            </p>
            <p className="mt-3 text-xs text-steel-600">{DISCLAIMERS.serviceArea}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

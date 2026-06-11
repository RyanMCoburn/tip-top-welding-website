import { DISCLAIMERS } from '../config/legal'
import { SERVICE_AREAS, SERVICE_AREA_MAP } from '../data/siteContent'

export default function ServiceAreaMap() {
  const { title, subtitle, placeholderNote, embedUrl } = SERVICE_AREA_MAP

  return (
    <section className="bg-navy-950 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="mb-10">
          <div className="mb-4 h-1 w-16 bg-accent" aria-hidden="true" />
          <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">{title}</h2>
          <p className="mt-4 max-w-2xl text-lg text-steel-400">{subtitle}</p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            {embedUrl ? (
              <iframe
                title="Tip Top Welding service area map"
                src={embedUrl}
                className="aspect-[16/9] w-full rounded-sm border border-navy-700"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            ) : (
              /* TODO: Replace with Google Maps embed — set SERVICE_AREA_MAP.embedUrl in siteContent.ts */
              <div className="flex aspect-[16/9] flex-col items-center justify-center rounded-sm border border-navy-700 bg-navy-800 px-6 text-center">
                <svg className="h-16 w-16 text-steel-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
                <p className="mt-4 text-lg font-medium text-steel-400">Service Area Map Placeholder</p>
                <p className="mt-2 max-w-md text-sm text-steel-600">{placeholderNote}</p>
              </div>
            )}
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-steel-300">
              Communities We Serve
            </h3>
            <ul className="space-y-2">
              {SERVICE_AREAS.map((area) => (
                <li
                  key={area}
                  className="rounded-sm border border-navy-700 bg-navy-800/50 px-4 py-2.5 text-sm text-steel-300"
                >
                  {area}
                </li>
              ))}
            </ul>
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

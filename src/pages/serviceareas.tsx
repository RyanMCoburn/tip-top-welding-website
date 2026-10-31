import { Link } from 'react-router-dom'
import CTAButton from '../components/ctabutton'
import { BRAND, CONTACT } from '../config/brand'

const areas = [
  { title: 'Cape Coral & Fort Myers', text: 'Based in Cape Coral, we quote aluminum and stainless steel repairs for local boats, docks, marinas, homes, and businesses. Pontoon leak repairs, bow rails, brackets, gates, and custom fabrication are assessed from your photos and project details.' },
  { title: 'Fort Myers Beach, Sanibel & Captiva', text: 'For island and waterfront projects, send the marina or property location along with photos of the repair and access route. We assess dock access, power availability, surrounding surfaces, and whether parts can be removed for shop fabrication before scheduling mobile work.' },
  { title: 'Estero & Bonita Springs', text: 'Custom stainless pool rails, aluminum mailbox stands, gates, and property metalwork are quoted to your dimensions and finish. For a replacement rail, include the existing mounting points and a wide photo of the deck or steps so we can discuss fit and installation.' },
  { title: 'Naples & Marco Island', text: 'We serve yacht, marina, and coastal property projects farther south by arrangement. Bow rail repairs, stainless fabrication, boarding stairs, and custom assemblies are reviewed for material, mounting details, travel, and whether on-site work or shop fabrication best fits the job.' },
]
const services = [
  ['/services/mobile-welding', 'Mobile welding', 'On-site aluminum and stainless repairs when location and access allow.'],
  ['/services/pontoon-repairs', 'Pontoon repairs', 'Leak inspection, crack repairs, drain plugs, and aluminum repair work.'],
  ['/services/bow-rail-repairs', 'Boat & yacht rail repairs', 'Repair or replace damaged bow rails and stainless or aluminum railing sections.'],
  ['/services/skeg-repairs', 'Skeg & lower-unit repairs', 'Assess damaged aluminum skegs and cavitation plates from clear photos.'],
  ['/services/pool-railings', 'Custom pool rails', 'Nautical stainless rails planned around your pool deck and mounting layout.'],
  ['/store', 'Coastal mailbox stands', 'Browse individual designs, prices, and finish options for custom metalwork.'],
]

export default function ServiceAreas() {
  return <>
    <section className="bg-navy-900 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-widest text-accent">Based in Cape Coral · Serving Southwest Florida</p>
        <h1 className="mt-4 max-w-4xl text-3xl font-bold text-white md:text-5xl">Mobile Welding &amp; Marine Repair Service Areas</h1>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-steel-300">Tip Top Welding LLC specializes in aluminum and stainless steel welding, fabrication, and repair. We work with boat owners, marinas, homeowners, and businesses from Cape Coral and Fort Myers to Naples and Marco Island.</p>
        <p className="mt-4 max-w-3xl leading-relaxed text-steel-400">Mobile work is scheduled after reviewing the repair, location, and access. Travel, installation, and fabrication requirements are included in your individual quote.</p>
        <div className="mt-8 flex flex-wrap gap-4"><CTAButton href={CONTACT.sms}>Text Project Photos</CTAButton><CTAButton href={CONTACT.tel} variant="outline">Call {BRAND.phone}</CTAButton></div>
      </div>
    </section>
    <section className="bg-navy-950 py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white">Plan a project in your area</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">{areas.map(area => <article key={area.title} className="rounded-xl border border-navy-700 p-6 md:p-8"><h3 className="text-xl font-semibold text-white">{area.title}</h3><p className="mt-4 leading-relaxed text-steel-400">{area.text}</p></article>)}</div>
        <p className="mt-6 text-sm text-steel-400">These are service areas, not additional shop locations. For a location outside this area, call to discuss the project before planning a visit or transporting a boat.</p>
      </div>
    </section>
    <section className="bg-navy-900 py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white">Find the welding or fabrication service you need</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{services.map(([path,title,text]) => <article key={path} className="rounded-xl border border-navy-700 p-6"><h3 className="text-xl font-semibold text-white"><Link to={path} className="hover:text-accent">{title}</Link></h3><p className="mt-3 leading-relaxed text-steel-400">{text}</p><Link to={path} className="mt-5 inline-block text-accent underline">View details</Link></article>)}</div>
      </div>
    </section>
    <section className="bg-navy-950 py-16 md:py-20">
      <div className="mx-auto max-w-3xl px-4 md:px-6">
        <h2 className="text-3xl font-bold text-white">What to send for a useful estimate</h2>
        <ul className="mt-6 list-disc space-y-3 pl-5 leading-relaxed text-steel-300"><li>Close-up photos of the damage and a wider view of the surrounding area.</li><li>Your city, marina, or property location and how we can reach the work.</li><li>The boat make and model, material, or approximate measurements, if known.</li><li>Your preferred timing and whether the part can be removed or the boat transported.</li></ul>
        <p className="mt-6 leading-relaxed text-steel-400">Photos help us plan the next step. Final repair scope, price, and timing depend on inspection and the requirements of your project.</p>
        <div className="mt-8 flex flex-wrap gap-4"><CTAButton to="/contact#quote-form">Request a Quote</CTAButton><CTAButton to="/gallery" variant="outline">See Our Work</CTAButton></div>
      </div>
    </section>
  </>
}

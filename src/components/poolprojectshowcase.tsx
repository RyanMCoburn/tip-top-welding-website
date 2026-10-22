import { Link } from 'react-router-dom'
import { FEATURED_POOL_INSTALLATIONS } from '../config/pool-installations'

export default function PoolProjectShowcase() {
  return <section id="pool-rail-projects" className="section-space scroll-mt-28 bg-navy-950">
    <div className="mx-auto max-w-7xl px-4 md:px-8">
      <p className="text-sm font-semibold uppercase tracking-widest text-accent">Completed Tip Top installations</p>
      <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">Installed Pool Rails</h2>
      <p className="mt-4 max-w-2xl text-steel-300">Dolphin, Nautilus, and Sea Turtle rails, permanently mounted beside our customers’ pools.</p>
      <div className="mt-8 grid gap-6 md:grid-cols-3">{FEATURED_POOL_INSTALLATIONS.map(photo =>
        <article key={photo.id} className="overflow-hidden rounded-xl border border-navy-700">
          <a href={photo.src} target="_blank" rel="noopener noreferrer" aria-label={`View installed ${photo.name} pool rail`} className="block focus-visible:outline-2 focus-visible:outline-accent">
            <img src={photo.src} alt={photo.alt} className="aspect-[3/4] w-full object-contain" loading="lazy" decoding="async" width={1152} height={1536}/>
          </a>
          <div className="p-5"><h3 className="text-xl font-semibold text-white">{photo.name}</h3><p className="mt-2 text-sm text-steel-400">{photo.caption}</p><Link to={`/store?pool=${photo.design}#pool`} className="mt-4 inline-block font-semibold text-accent">Shop this design →</Link></div>
        </article>
      )}</div>
    </div>
  </section>
}

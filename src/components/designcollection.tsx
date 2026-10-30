import { Link } from 'react-router-dom'
import { getCmsGalleryPhotos } from '../content/loaders'
import { SHOP } from '../config/shop'

export default function DesignCollection({ compact = false }: { compact?: boolean }) {
  const groups = [
    { title: 'Sculptural Pool Rails', key: 'pool' as const, description: 'Polished stainless designs inspired by coastal life.' },
    { title: 'Coastal Mailbox Stands', key: 'mailbox' as const, description: 'Custom aluminum stands with distinctive nautical forms.' },
  ]
  const photos = getCmsGalleryPhotos()
  return <section id="design-collection" className="section-space scroll-mt-28 bg-navy-900"><div className="mx-auto max-w-7xl px-4 md:px-8">
    <p className="text-sm font-semibold uppercase tracking-widest text-accent">The Tip Top Collection</p>
    <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">Pool Rails &amp; Mailbox Designs</h2>
    <p className="mt-4 max-w-2xl text-steel-300">Explore the collection, choose a design, and request a fabrication quote or view its listed price.</p>
    <div className={compact ? 'mt-8 grid gap-6 md:grid-cols-2' : 'mt-10 space-y-14'}>{groups.map(group => <section key={group.key} aria-label={group.title}>
      {compact ? <Link to={`/store#${group.key}`} className="card-premium block rounded-2xl p-8 focus-visible:outline-2 focus-visible:outline-accent"><h3 className="text-2xl font-semibold text-white">{group.title}</h3><p className="mt-3 text-steel-400">{group.description}</p><p className="mt-6 font-semibold text-accent">Explore designs &amp; pricing →</p></Link> : <>
        <h3 className="mb-5 text-2xl font-semibold text-white">{group.title}</h3>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{SHOP[group.key].designs.map(design => {
          const imageSlug = group.key === 'mailbox' ? design.id + '-stand' : design.id
          const photo = photos.find(photo => (photo.slug ?? photo.id) === imageSlug)
          if (!photo?.image) return null
          return <article key={design.id} className="overflow-hidden rounded-xl border border-navy-700 bg-navy-950">
            <a href={photo.image} target="_blank" rel="noopener noreferrer" aria-label={`Open design image: ${photo.title}`}><img src={photo.image} alt={photo.alt ?? photo.title} loading="lazy" className="aspect-[3/4] w-full object-contain" /></a>
            <div className="p-5"><h4 className="text-lg font-semibold text-white">{photo.title}</h4><p className="mt-2 text-xs text-steel-400">Design / promotional image</p><Link to={`/store?${group.key}=${encodeURIComponent(design.id)}#${group.key}`} className="mt-4 inline-flex rounded-lg bg-accent px-4 py-3 font-semibold text-navy-950">Choose this design →</Link></div>
          </article>
        })}</div>
      </>}
    </section>)}</div>
  </div></section>
}

import { Link } from 'react-router-dom'
import { getCmsGalleryPhotos } from '../content/loaders'

export default function DesignCollection({ compact = false }: { compact?: boolean }) {
  const photos = getCmsGalleryPhotos().filter(photo => photo.image?.startsWith('/images/gallery/') && ['Pool Rails', 'Mailbox Stands'].includes(photo.category))
  const groups = [{ category: 'Pool Rails', title: 'Sculptural Pool Rails', key: 'pool', image: '/images/gallery/nautilus-pool-rail.webp' }, { category: 'Mailbox Stands', title: 'Coastal Mailbox Stands', key: 'mailbox', image: '/images/gallery/sea-turtle-mailbox-stand.webp' }]
  return <section id="design-collection" className="section-space scroll-mt-28 bg-navy-900"><div className="mx-auto max-w-7xl px-4 md:px-8">
    <p className="text-sm font-semibold uppercase tracking-widest text-accent">The Tip Top Collection</p>
    <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">Pool Rails &amp; Mailbox Designs</h2>
    <p className="mt-4 max-w-2xl text-steel-300">Distinctive designs made to order. Explore the collection, choose your piece, and view its price or request a custom quote.</p>
    <div className={compact ? 'mt-8 grid gap-8 md:grid-cols-2' : 'mt-10 space-y-14'}>{groups.map(group => <section key={group.key} aria-label={group.title}>
      {compact ? <Link to={`/store#${group.key}`} className="block overflow-hidden rounded-2xl border border-navy-700 bg-navy-950 focus-visible:outline-2 focus-visible:outline-accent"><img src={group.image} alt={`${group.title} — design collection promotional image`} loading="lazy" className="aspect-[4/3] w-full object-contain"/><div className="p-6"><h3 className="text-2xl font-semibold text-white">{group.title}</h3><p className="mt-3 text-accent">Explore designs &amp; shop →</p></div></Link> : <><h3 className="mb-5 text-2xl font-semibold text-white">{group.title}</h3><div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{photos.filter(photo => photo.category === group.category).map(photo => {
        const design = (photo.slug ?? photo.id).replace(/-stand$/, '').replace(/-2$/, '')
        return <article key={photo.id} className="overflow-hidden rounded-xl border border-navy-700 bg-navy-950"><a href={photo.image} target="_blank" rel="noopener noreferrer" aria-label={`Open design image: ${photo.title}`}><img src={photo.image} alt={photo.alt ?? photo.title} loading="lazy" className="aspect-[3/4] w-full object-contain"/></a><div className="p-5"><h4 className="text-lg font-semibold text-white">{photo.title}</h4><p className="mt-2 text-xs text-steel-400">Design / promotional image</p><Link to={`/store?${group.key}=${encodeURIComponent(design)}#${group.key}`} className="mt-4 inline-flex rounded-lg bg-accent px-4 py-3 font-semibold text-navy-950">Choose this design →</Link></div></article>
      })}</div></>}
    </section>)}</div>
    {compact && <p className="mt-5 text-xs text-steel-400">Design and promotional images. See individual listings and completed project photographs for details.</p>}
  </div></section>
}


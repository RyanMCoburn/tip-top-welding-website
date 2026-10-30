import { Link } from 'react-router-dom'
import CTAButton from '../components/ctabutton'
import GalleryPhotoCard from '../components/galleryphotocard'
import { getCmsGalleryPhotos, getGallerySections } from '../content/loaders'
import { SERVICES } from '../data/sitecontent'

export default function Gallery() {
  const sculpture = getCmsGalleryPhotos().find(photo => photo.slug === 'fibonacci-nautilus-sculpture')
  const sections = getGallerySections().map(section => ({ ...section, photos: section.photos.filter(photo => photo.id !== sculpture?.id) })).filter(section => section.photos.length > 0)
  return <>
    <section className="bg-navy-900 py-20 md:py-28"><div className="mx-auto max-w-7xl px-4 md:px-8">
      <p className="text-sm font-semibold uppercase tracking-widest text-accent">Tip Top Welding Portfolio</p>
      <h1 className="mt-4 text-4xl font-bold text-white md:text-5xl">Project Gallery</h1>
      <p className="mt-5 max-w-2xl text-lg text-steel-400">Explore custom metalwork, finished details, and work in progress. Each photograph is captioned for the project and stage shown.</p>
      <div className="mt-8 flex flex-wrap gap-4"><CTAButton to="/projects#before-after">Before &amp; After Repairs</CTAButton><CTAButton to="/store#design-collection" variant="outline">Pool Rail &amp; Mailbox Designs</CTAButton></div>
    </div></section>
    {sculpture && <section id="fibonacci-nautilus" aria-labelledby="fibonacci-nautilus-heading" className="section-space scroll-mt-28 bg-navy-950">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 md:px-8 lg:grid-cols-2 lg:gap-16">
        <figure className="mx-auto w-full max-w-xl">
          <a href={sculpture.image} aria-label="View the full Fibonacci Nautilus sculpture photograph"><img src={sculpture.image} alt={sculpture.alt} width={1536} height={2048} loading="eager" decoding="async" className="h-auto w-full rounded-2xl border border-navy-700 object-contain" /></a>
          <figcaption className="mt-3 text-sm text-steel-400">Fibonacci Nautilus — 316L stainless steel with a flame-kissed patina.</figcaption>
        </figure>
        <div><p className="text-sm font-semibold uppercase tracking-widest text-accent">Featured Custom Sculpture</p>
          <h2 id="fibonacci-nautilus-heading" className="mt-4 text-3xl font-bold text-white md:text-4xl">Fibonacci Nautilus</h2>
          <p className="mt-3 text-xl text-accent">316L stainless steel. Flame-kissed patina.</p>
          <p className="mt-6 text-lg leading-relaxed text-steel-300">{sculpture.description}</p>
          <p className="mt-5 leading-relaxed text-steel-400">Curved ribs trace the Nautilus form, while the heat-colored finish shifts through blue, violet, and bronze. A custom piece of coastal metal art, fabricated by Tip Top Welding LLC.</p>
          <div className="mt-8"><CTAButton to="/contact?details=I%20would%20like%20to%20discuss%20a%20custom%20316L%20stainless%20steel%20Nautilus%20sculpture%20with%20a%20flame-kissed%20patina.#quote-form">Discuss a Custom Sculpture</CTAButton></div>
        </div>
      </div>
    </section>}
    <section className="section-space bg-navy-950"><div className="mx-auto max-w-7xl px-4 md:px-8">
      <nav aria-label="Browse photograph categories" className="mb-10 flex flex-wrap gap-2">{sections.map(section => <a key={section.id} href={`#${section.id}`} className="rounded-full border border-navy-700 px-4 py-2 text-sm text-steel-300 hover:border-accent">{section.label}</a>)}</nav>
      <div className="space-y-14">{sections.map(section => <section key={section.id} id={section.id} className="scroll-mt-28">
        <h2 className="mb-6 text-2xl font-semibold text-white">{section.label}</h2><div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{section.photos.map(photo => <GalleryPhotoCard key={photo.id} fullImageLink src={photo.image} alt={photo.alt ?? photo.title} label={photo.title} caption={photo.description?.trim() || photo.title} className="gallery-photo-card" />)}</div>
      </section>)}</div>
    </div></section>
    <section className="section-space bg-navy-900"><div className="mx-auto max-w-7xl px-4 md:px-8">
      <h2 className="text-3xl font-bold text-white">Explore More Work</h2><p className="mt-4 max-w-2xl text-steel-400">Specialist project photographs and fabrication details are collected with their services.</p>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{SERVICES.map(service => <Link key={service.id} to={`/services/${service.slug}`} className="rounded-xl border border-navy-700 px-6 py-5 font-semibold text-white hover:border-accent hover:text-accent">{service.title} →</Link>)}</div>
      <div className="mt-10"><CTAButton to="/contact#quote-form">Discuss Your Project</CTAButton></div>
    </div></section>
  </>
}

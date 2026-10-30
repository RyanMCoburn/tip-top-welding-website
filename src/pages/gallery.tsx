import { Link } from 'react-router-dom'
import CTAButton from '../components/ctabutton'
import GalleryPhotoCard from '../components/galleryphotocard'
import { getGallerySections } from '../content/loaders'
import { SERVICES } from '../data/sitecontent'

export default function Gallery() {
  const sections = getGallerySections().filter(section => section.photos.length > 0)
  return <>
    <section className="bg-navy-900 py-20 md:py-28"><div className="mx-auto max-w-7xl px-4 md:px-8">
      <p className="text-sm font-semibold uppercase tracking-widest text-accent">Tip Top Welding Portfolio</p>
      <h1 className="mt-4 text-4xl font-bold text-white md:text-5xl">Project Gallery</h1>
      <p className="mt-5 max-w-2xl text-lg text-steel-400">Explore custom metalwork, finished details, and work in progress. Each photograph is captioned for the project and stage shown.</p>
      <div className="mt-8 flex flex-wrap gap-4"><CTAButton to="/projects#before-after">Before &amp; After Repairs</CTAButton><CTAButton to="/store#design-collection" variant="outline">Pool Rail &amp; Mailbox Designs</CTAButton></div>
    </div></section>
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

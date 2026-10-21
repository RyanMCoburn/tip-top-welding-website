import PoolProjectShowcase from '../components/poolprojectshowcase'
import CTAButton from '../components/ctabutton'
import GalleryPhotoCard from '../components/galleryphotocard'
import BeforeAfterShowcase from '../components/beforeaftershowcase'
import WorkPreviewCard from '../components/workpreviewcard'
import { getBeforeAfterProjects, getGallerySections, getHomeFeaturedWork } from '../content/loaders'
import { CTAS, CONTACT, GALLERY_PAGE, SITE } from '../data/sitecontent'

export default function Gallery() {
  const sections = getGallerySections().filter((section) => section.photos.length > 0).sort((a,b) => (['Pool Rails','Mailbox Stands'].includes(a.label)?0:1) - (['Pool Rails','Mailbox Stands'].includes(b.label)?0:1))
  const beforeAfterProjects = getBeforeAfterProjects()
  const selectedWork = getHomeFeaturedWork()

  return (
    <>
      <PoolProjectShowcase />
      <section className="section-space bg-navy-900">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <div className="mb-14 text-center">
            <h1 className="text-4xl font-bold text-white">{GALLERY_PAGE.title}</h1>
            <p className="mx-auto mt-4 max-w-2xl text-steel-400">{GALLERY_PAGE.subtitle}</p>
          </div>

          <div className="mb-10 flex flex-wrap justify-center gap-4"><CTAButton to="/store#pool">Shop Pool Rail Designs</CTAButton><CTAButton to="/store#mailbox" variant="outline">Shop Mailbox Designs</CTAButton></div><section aria-labelledby="selected-work-title" className="mb-16">
            <h2 id="selected-work-title" className="mb-6 text-3xl font-bold text-white">Selected Yacht &amp; Architectural Work</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {selectedWork.map(item => <WorkPreviewCard key={item.id} {...item} />)}
            </div>
          </section>

          <nav aria-label="Browse project categories" className="mb-12 flex flex-wrap justify-center gap-2">
            <a href="#before-after" className="rounded-full border border-navy-700 px-4 py-2 text-sm text-steel-300 hover:border-accent hover:text-white focus-visible:outline-2 focus-visible:outline-accent">Before &amp; After</a>
            {sections.map(section => <a key={section.id} href={`#${section.id}`} className="rounded-full border border-navy-700 px-4 py-2 text-sm text-steel-300 hover:border-accent hover:text-white focus-visible:outline-2 focus-visible:outline-accent">{section.label}</a>)}
          </nav>

          <div className="space-y-14">
            {sections.map((section, i) => (
              <div
                id={section.id}
                key={section.id}
                className={`scroll-mt-28 animate-in ${['animate-in-delay-1', 'animate-in-delay-2', 'animate-in-delay-3', 'animate-in-delay-4'][i % 4]}`}
              >
                <h2 className="mb-5 text-xl font-semibold text-white">{section.label}</h2>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {section.photos.length > 0 ? (
                    section.photos.map((photo) => (
                      <GalleryPhotoCard
                        key={photo.id}
                        fullImageLink
                        src={photo.image}
                        alt={photo.alt ?? photo.title}
                        label={photo.title}
                        caption={photo.description?.trim() || photo.title}
                        placeholder={!photo.image}
                        className="gallery-photo-card"
                      />
                    ))
                  ) : (
                    <GalleryPhotoCard
                      src={section.fallbackImage}
                      alt={section.fallbackAlt}
                      label={section.label}
                      caption={section.fallbackImage ? section.label : undefined}
                      placeholder={section.placeholder ?? !section.fallbackImage}
                      className="gallery-photo-card"
                    />
                  )}
                </div>
              </div>
            ))}
          </div>
          {beforeAfterProjects.length > 0 && (
            <section id="before-after" aria-labelledby="before-after-title" className="mt-20 scroll-mt-28">
              <h2 id="before-after-title" className="text-3xl font-bold text-white">Marine Repairs: Before &amp; After</h2>
              <p className="mt-3 mb-8 max-w-2xl text-steel-400">Bow-rail, pontoon, and cavitation-plate repairs. Captions identify the work shown and any finishing still to follow. Select a photo to see it full size.</p>
              <div className="grid gap-8">
                {beforeAfterProjects.map(project => <BeforeAfterShowcase key={project.id} project={project} />)}
              </div>
            </section>
          )}

        </div>
      </section>

      <section className="border-t border-navy-700/60 bg-navy-950 py-16">
        <div className="mx-auto max-w-7xl px-4 text-center md:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white">Ready to discuss your project?</h2>
          <p className="mx-auto mt-4 max-w-xl text-steel-400">
            Call or text photos of your boat, pool, dock, or custom metalwork needs.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <CTAButton to="/contact#quote-form" size="lg">
              {CTAS.primary}
            </CTAButton>
            <CTAButton href={CONTACT.tel} variant="outline" size="lg">
              Call {SITE.phone}
            </CTAButton>
          </div>
        </div>
      </section>
    </>
  )
}




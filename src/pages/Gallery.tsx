import CTAButton from '../components/CTAButton'
import GalleryPhotoCard from '../components/GalleryPhotoCard'
import SectionHeading from '../components/SectionHeading'
import { getGallerySections } from '../content/loaders'
import { CTAS, CONTACT, GALLERY_PAGE, SITE } from '../data/siteContent'

export default function Gallery() {
  const sections = getGallerySections()

  return (
    <>
      <section className="section-space bg-navy-900">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <SectionHeading title={GALLERY_PAGE.title} subtitle={GALLERY_PAGE.subtitle} />

          <div className="space-y-14">
            {sections.map((section, i) => (
              <div
                key={section.id}
                className={`animate-in ${['animate-in-delay-1', 'animate-in-delay-2', 'animate-in-delay-3', 'animate-in-delay-4'][i % 4]}`}
              >
                <h3 className="mb-5 text-lg font-semibold text-white">{section.label}</h3>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {section.photos.length > 0 ? (
                    section.photos.map((photo) => (
                      <GalleryPhotoCard
                        key={photo.id}
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

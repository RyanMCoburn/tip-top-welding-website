import CTAButton from '../components/ctabutton'
import BeforeAfterShowcase from '../components/beforeaftershowcase'
import SectionHeading from '../components/sectionheading'
import WorkCategoryCard from '../components/workcategorycard'
import {
  getBeforeAfterProjects,
} from '../content/loaders'
import {
  CONTACT,
  CTAS,
  SITE,
  TYPES_OF_WORK,
  WORK_TYPES_PAGE,
} from '../data/sitecontent'

export default function Projects() {
  const beforeAfterProjects = getBeforeAfterProjects()

  return (
    <>
      <section className="relative overflow-hidden bg-navy-900 py-24 md:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            {WORK_TYPES_PAGE.eyebrow}
          </p>
          <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
            {WORK_TYPES_PAGE.title}
          </h1>
          <p className="mt-6 max-w-2xl text-2xl font-medium text-steel-200">
            {WORK_TYPES_PAGE.headline}
          </p>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-steel-400">
            {WORK_TYPES_PAGE.description}
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <CTAButton to="/contact#quote-form" size="lg">
              {CTAS.primary}
            </CTAButton>
            <CTAButton href={CONTACT.sms} variant="outline" size="lg">
              {CTAS.secondary}
            </CTAButton>
          </div>
        </div>
      </section>

      <section id="love-lock-sculpture" className="section-space scroll-mt-28 bg-navy-950">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-accent">Community Public Art | October 2026</p>
          <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">Love Lock Sculpture - Cultural Park, Cape Coral</h2>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-steel-300">
            Tip Top Welding LLC proudly donated, fabricated, and installed this custom red double-heart sculpture
            at Cultural Park in Cape Coral. Its welded metal mesh invites visitors to celebrate love,
            friendship, family, and lasting memories with personalized locks.
          </p>
          <p className="mt-4 max-w-3xl text-steel-400">
            Installed October 29, 2026. A public dedication is anticipated around Thanksgiving 2026;
            the date has not yet been confirmed.
          </p>
          <div className="mt-7 flex flex-wrap gap-4">
            <CTAButton to="/#community-art-heading" variant="outline">View the Finished Sculpture</CTAButton>
            <CTAButton to="/contact#quote-form" variant="outline">Discuss a Custom Fabrication Project</CTAButton>
          </div>
        </div>

        </div>
      </section>

      {beforeAfterProjects.length > 0 && (
        <section id="before-after" className="section-space scroll-mt-28 bg-navy-950">
          <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
            <SectionHeading
              title="Before & After"
              subtitle="Bow-rail, pontoon, and cavitation-plate repairs, with the repair stage described for each photo."
            />
            <div className="grid gap-8">
              {beforeAfterProjects.map((project) => (
                <BeforeAfterShowcase key={project.id} project={project} />
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="section-space bg-navy-950">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <div className="mb-12 md:mb-16">
            <div className="mb-4 h-1 w-16 bg-accent" aria-hidden="true" />
            <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
              {WORK_TYPES_PAGE.typesHeading}
            </h2>
            <p className="mt-4 max-w-2xl text-lg text-steel-400">
              {WORK_TYPES_PAGE.typesSubtitle}
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {TYPES_OF_WORK.map((item) => (
              <WorkCategoryCard key={item.title} {...item} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy-900 py-16">
        <div className="mx-auto max-w-7xl px-4 text-center md:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white md:text-3xl">Have a project in mind?</h2>
          <p className="mx-auto mt-4 max-w-xl text-steel-400">
            Send photos and a description of your welding or fabrication needs for a preliminary quote.
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

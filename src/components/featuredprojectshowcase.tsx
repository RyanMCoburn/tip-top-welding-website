import CTAButton from './ctabutton'
import { FEATURED_PROJECTS } from '../data/sitecontent'

interface FeaturedProjectShowcaseProps {
  limit?: number
  showHeading?: boolean
}

export default function FeaturedProjectShowcase({
  limit,
  showHeading = true,
}: FeaturedProjectShowcaseProps) {
  const projects = limit ? FEATURED_PROJECTS.slice(0, limit) : FEATURED_PROJECTS
  const hero = projects.find((p) => p.featured) ?? projects[0]

  return (
    <section className="bg-navy-900 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        {showHeading && (
          <div className="mb-12 md:mb-16">
            <div className="mb-4 h-1 w-16 bg-accent" aria-hidden="true" />
            <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
              Featured Project Showcase
            </h2>
            <p className="mt-4 max-w-2xl text-lg text-steel-400">
              Real Tip Top project photos will be added here before launch.
              {/* TODO: Wire FEATURED_PROJECTS in siteContent.ts when real photos exist */}
            </p>
          </div>
        )}

        {/* Primary featured */}
        {hero && (
          <div className="mb-10 overflow-hidden rounded-sm border border-navy-700 lg:grid lg:grid-cols-5">
            <div className="lg:col-span-3">
              <img
                src={hero.image}
                alt={hero.imageAlt}
                className="h-full min-h-[300px] w-full object-cover lg:min-h-[480px]"
                loading="lazy"
              />
            </div>
            <div className="flex flex-col justify-center bg-navy-800/60 p-8 md:p-10 lg:col-span-2">
              <span className="mb-2 inline-block w-fit rounded-sm bg-accent/20 px-2.5 py-1 text-xs font-semibold uppercase tracking-wider text-accent">
                {hero.category}
              </span>
              <p className="text-xs font-semibold uppercase tracking-wider text-steel-500">
                {hero.scope}
              </p>
              <h3 className="mt-2 text-2xl font-bold text-white md:text-3xl">{hero.title}</h3>
              <p className="mt-2 text-sm text-steel-500">{hero.location}</p>
              <p className="mt-4 leading-relaxed text-steel-400">{hero.description}</p>
              <ul className="mt-6 space-y-2">
                {hero.highlights.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-steel-300">
                    <svg className="mt-0.5 h-4 w-4 shrink-0 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {/* Additional featured cards */}
        {projects.length > 1 && (
          <div className="grid gap-6 md:grid-cols-2">
            {projects
              .filter((p) => p.id !== hero?.id)
              .map((project) => (
                <div
                  key={project.id}
                  className="overflow-hidden rounded-sm border border-navy-700 bg-navy-800/40"
                >
                  <img
                    src={project.image}
                    alt={project.imageAlt}
                    className="aspect-[16/9] w-full object-cover"
                    loading="lazy"
                  />
                  <div className="p-6">
                    <span className="text-xs font-semibold uppercase tracking-wider text-accent">
                      {project.category}
                    </span>
                    <h3 className="mt-2 text-lg font-bold text-white">{project.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-steel-400">{project.description}</p>
                  </div>
                </div>
              ))}
          </div>
        )}

        {limit === 1 ? (
          <div className="mt-10 text-center">
            <CTAButton to="/projects" variant="outline">
              View All Projects
            </CTAButton>
          </div>
        ) : null}
      </div>
    </section>
  )
}

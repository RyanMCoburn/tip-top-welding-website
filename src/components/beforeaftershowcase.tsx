import MediaPlaceholder from './mediaplaceholder'
import type { BeforeAfterProject } from '../data/models/project'

interface BeforeAfterShowcaseProps {
  project: BeforeAfterProject
}

function ProjectImage({
  src,
  alt,
  label,
}: {
  src?: string
  alt: string
  label: string
}) {
  if (!src) {
    return <MediaPlaceholder label={label} aspect="4/3" compact />
  }

  return (
    <a href={src} aria-label={`View full image: ${label}`} className="block h-full focus-visible:outline-2 focus-visible:outline-accent">
    <img
      src={src}
      alt={alt}
      className="gallery-photo-img h-full w-full object-contain"
      loading="lazy"
      decoding="async"
    />
    </a>
  )
}

export default function BeforeAfterShowcase({ project }: BeforeAfterShowcaseProps) {
  return (
    <article className="card-premium overflow-hidden rounded-xl">
      <div className="border-b border-navy-700/60 px-6 py-5 md:px-8">
        <p className="text-xs font-semibold uppercase tracking-wider text-accent">{project.category}</p>
        <h3 className="mt-1 text-2xl font-bold text-white">{project.title}</h3>
        {project.solution && (
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-steel-400">{project.solution}</p>
        )}
      </div>
      <div className="grid gap-4 p-4 sm:grid-cols-2 md:p-6">
        <figure>
          <div className="gallery-photo-frame aspect-[4/3] overflow-hidden rounded-lg">
            <ProjectImage src={project.beforeImage} alt={project.beforeAlt} label={`Before — ${project.title}`} />
          </div>
          <figcaption className="mt-2 text-center text-xs font-semibold uppercase tracking-wider text-steel-500">
            Before
          </figcaption>
        </figure>
        <figure>
          <div className="gallery-photo-frame aspect-[4/3] overflow-hidden rounded-lg">
            <ProjectImage src={project.afterImage} alt={project.afterAlt} label={`After — ${project.title}`} />
          </div>
          <figcaption className="mt-2 text-center text-xs font-semibold uppercase tracking-wider text-steel-500">
            After
          </figcaption>
        </figure>
      </div>
    </article>
  )
}

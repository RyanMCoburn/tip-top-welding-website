import MediaPlaceholder from './MediaPlaceholder'

interface ProjectCardProps {
  title?: string
  category?: string
  large?: boolean
}

/** Honest gallery slot — no stock imagery */
export default function ProjectCard({
  title,
  category,
  large = false,
}: ProjectCardProps) {
  return (
    <article className="overflow-hidden rounded-sm border border-navy-700/80 bg-navy-800/40">
      <MediaPlaceholder aspect={large ? '16/10' : '4/3'} />
      {(title || category) && (
        <div className="p-4">
          {category && (
            <span className="mb-2 inline-block rounded-sm bg-navy-900 px-2 py-0.5 text-xs font-semibold uppercase tracking-wider text-steel-500">
              {category}
            </span>
          )}
          {title && <h3 className="font-semibold text-white">{title}</h3>}
        </div>
      )}
    </article>
  )
}

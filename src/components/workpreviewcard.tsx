import { Link } from 'react-router-dom'
import GalleryPhotoCard from './galleryphotocard'

interface WorkPreviewCardProps {
  title: string
  category: string
  image?: string
  imageAlt?: string
  placeholder?: boolean
  link?: string
}

export default function WorkPreviewCard({
  title,
  category,
  image,
  imageAlt,
  placeholder = false,
  link,
}: WorkPreviewCardProps) {
  const card = (
    <article className="card-premium overflow-hidden rounded-xl">
      <GalleryPhotoCard
        src={image}
        alt={imageAlt}
        label={title}
        placeholder={placeholder || !image}
      />
      <div className="border-t border-navy-700/60 px-5 py-4">
        <p className="text-xs font-semibold uppercase tracking-wider text-accent">{category}</p>
        <h3 className="mt-1 text-lg font-semibold text-white">{title}</h3>
      </div>
    </article>
  )

  if (link?.startsWith('/')) {
    return (
      <Link to={link} className="block transition-opacity hover:opacity-95">
        {card}
      </Link>
    )
  }

  if (link?.startsWith('http')) {
    return (
      <a href={link} className="block transition-opacity hover:opacity-95" rel="noopener noreferrer">
        {card}
      </a>
    )
  }

  return card
}

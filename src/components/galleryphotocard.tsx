import { useState } from 'react'
import MediaPlaceholder from './mediaplaceholder'

interface GalleryPhotoCardProps {
  src?: string
  alt?: string
  label: string
  caption?: string
  placeholder?: boolean
  className?: string
  fullImageLink?: boolean
  landscape?: boolean
  hideCaption?: boolean
}

export default function GalleryPhotoCard({
  src,
  alt,
  label,
  caption,
  placeholder = false,
  className = '',
  fullImageLink = false,
  landscape = false,
  hideCaption = false,
}: GalleryPhotoCardProps) {
  const [failedSrc, setFailedSrc] = useState<string>()
  if (placeholder || !src || failedSrc === src) {
    return <MediaPlaceholder label={label} aspect="4/3" compact className={className} />
  }

  const image = <img
          src={src}
          alt={alt ?? label}
          className="gallery-photo-img h-full w-full object-contain"
          loading="lazy"
          decoding="async"
          onError={() => setFailedSrc(src)}
        />
  const frameClass = `gallery-photo-frame block ${fullImageLink || landscape ? 'aspect-[4/3]' : 'aspect-[3/4]'} overflow-hidden rounded-xl bg-navy-950 focus-visible:outline-2 focus-visible:outline-accent`
  return (
    <figure className={`gallery-photo-card group ${className}`}>
      {fullImageLink ? (
        <a href={src} target="_blank" rel="noopener noreferrer" aria-label={`View full image: ${label}`} className={frameClass}>{image}</a>
      ) : (
        <div className={frameClass}>{image}</div>
      )}
      {!hideCaption && (caption || label) && (
        <figcaption className="mt-3 text-sm text-steel-300">
          <span className="block font-semibold">{label}</span>
          {caption && caption !== label ? <span className="mt-1 block text-steel-400">{caption}</span> : null}
        </figcaption>
      )}
    </figure>
  )
}

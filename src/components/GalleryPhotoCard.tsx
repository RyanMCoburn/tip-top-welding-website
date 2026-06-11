import MediaPlaceholder from './MediaPlaceholder'

interface GalleryPhotoCardProps {
  src?: string
  alt?: string
  label: string
  caption?: string
  placeholder?: boolean
  className?: string
}

export default function GalleryPhotoCard({
  src,
  alt,
  label,
  caption,
  placeholder = false,
  className = '',
}: GalleryPhotoCardProps) {
  if (placeholder || !src) {
    return <MediaPlaceholder label={label} aspect="4/3" compact className={className} />
  }

  return (
    <figure className={`gallery-photo-card group ${className}`}>
      <div className="gallery-photo-frame aspect-[4/3] overflow-hidden rounded-xl">
        <img
          src={src}
          alt={alt ?? label}
          className="gallery-photo-img h-full w-full object-cover"
          loading="lazy"
        />
      </div>
      {(caption || label) && (
        <figcaption className="mt-3 text-sm font-medium text-steel-300">{caption ?? label}</figcaption>
      )}
    </figure>
  )
}

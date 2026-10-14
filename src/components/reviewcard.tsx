interface ReviewCardProps {
  name: string
  location: string
  rating: number
  text: string
  isPlaceholder?: boolean
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`h-5 w-5 ${i < rating ? 'text-accent' : 'text-navy-700'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

export default function ReviewCard({ name, location, rating, text, isPlaceholder = false }: ReviewCardProps) {
  return (
    <blockquote className="flex h-full flex-col rounded-sm border border-navy-700/80 bg-navy-800/50 p-6 md:p-8">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <StarRating rating={rating} />
        {isPlaceholder && (
          <span className="rounded-sm bg-navy-700 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-steel-500">
            Demo
          </span>
        )}
      </div>
      <p className="mt-4 flex-1 leading-relaxed text-steel-300">&ldquo;{text}&rdquo;</p>
      <footer className="mt-6 border-t border-navy-700 pt-4">
        <cite className="not-italic">
          <span className="block font-semibold text-white">{name}</span>
          <span className="text-sm text-steel-500">{location}</span>
        </cite>
      </footer>
    </blockquote>
  )
}

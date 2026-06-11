import type { GalleryFilterId } from '../data/siteContent'
import { GALLERY_FILTERS } from '../data/siteContent'

interface GalleryFilterProps {
  active: GalleryFilterId
  onChange: (filter: GalleryFilterId) => void
}

export default function GalleryFilter({ active, onChange }: GalleryFilterProps) {
  return (
    <div className="mb-10 flex flex-wrap gap-2" role="tablist" aria-label="Filter projects by category">
      {GALLERY_FILTERS.map((filter) => (
        <button
          key={filter.id}
          type="button"
          role="tab"
          aria-selected={active === filter.id}
          onClick={() => onChange(filter.id)}
          className={`rounded-sm px-4 py-2 text-sm font-medium transition-colors ${
            active === filter.id
              ? 'bg-accent text-navy-950'
              : 'border border-navy-700 bg-navy-800/50 text-steel-400 hover:border-steel-600 hover:text-white'
          }`}
        >
          {filter.label}
        </button>
      ))}
    </div>
  )
}

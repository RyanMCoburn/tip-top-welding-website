export const GALLERY_FILTERS = [
  { id: 'all', label: 'All' },
  { id: 'marine', label: 'Marine' },
  { id: 'aluminum', label: 'Aluminum' },
  { id: 'stainless', label: 'Stainless' },
  { id: 'bow-rails', label: 'Bow Rails' },
  { id: 'pontoons', label: 'Pontoons' },
  { id: 'skegs', label: 'Skegs' },
  { id: 'pool-railings', label: 'Pool Railings' },
  { id: 'decorative', label: 'Decorative' },
  { id: 'nautical-art', label: 'Nautical Art' },
  { id: 'mobile-welding', label: 'Mobile Welding' },
] as const

export type GalleryFilterId = (typeof GALLERY_FILTERS)[number]['id']

export interface ServiceSeo {
  title: string
  description: string
  keywords: readonly string[]
}

export interface Service {
  id: string
  slug: string
  title: string
  description: string
  icon: string
  commonUseCases: readonly string[]
  filterTags: readonly GalleryFilterId[]
  seo: ServiceSeo
  seoContent: readonly string[]
}

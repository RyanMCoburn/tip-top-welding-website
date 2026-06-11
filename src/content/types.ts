// =============================================================================
// Decap CMS content types — Tip Top Welding LLC
// =============================================================================

export const GALLERY_CATEGORY_OPTIONS = [
  'Marine Repairs',
  'Bow Rails',
  'Pool Railings',
  'Mailboxes',
  'Custom Fabrication',
  'Dock & Marina',
  'Nautical Metal Art',
  'Aluminum & Stainless',
] as const

export type GalleryCategoryOption = (typeof GALLERY_CATEGORY_OPTIONS)[number]

export interface CmsGalleryPhoto {
  title: string
  slug?: string
  category: string
  image?: string
  alt?: string
  description?: string
  featured?: boolean
  sortOrder?: number
}

export interface CmsGalleryPhotoEntry extends CmsGalleryPhoto {
  id: string
}

export interface CmsProject {
  title: string
  slug?: string
  category: string
  image?: string
  description?: string
  beforeImage?: string
  afterImage?: string
  featured?: boolean
  sortOrder?: number
}

export interface CmsProjectEntry extends CmsProject {
  id: string
}

export interface CmsFeaturedWork {
  title: string
  slug?: string
  image?: string
  alt?: string
  description?: string
  link?: string
  sortOrder?: number
}

export interface CmsFeaturedWorkEntry extends CmsFeaturedWork {
  id: string
}

export interface SiteSettingsFile {
  businessName?: string
  phone?: string
  email?: string
  address?: string
  serviceAreas?: Array<string | { area?: string }>
  facebookUrl?: string
  instagramUrl?: string
  googleReviewsUrl?: string
  formspreeEndpoint?: string
}

export interface ResolvedSiteSettings {
  businessName: string
  phone: string
  email: string
  address: string
  serviceAreas: readonly string[]
  facebookUrl: string
  instagramUrl: string
  googleReviewsUrl: string
  formspreeEndpoint: string
}

export interface SocialLinkItem {
  label: string
  cta: string
  description: string
  url: string
  placeholder: boolean
}

export interface SocialLinksMap {
  googleReviews: SocialLinkItem
  facebook: SocialLinkItem
  instagram: SocialLinkItem
}

export interface GalleryCategorySection {
  id: string
  label: GalleryCategoryOption
  photos: CmsGalleryPhotoEntry[]
  fallbackImage?: string
  fallbackAlt?: string
  placeholder: boolean
}

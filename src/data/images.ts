// =============================================================================
// Image registry — real Tip Top assets only; no stock URLs
// =============================================================================

export const PLACEHOLDER_PHOTO_LABEL = 'Add real Tip Top photo' as const

export const PLACEHOLDER_LAUNCH_NOTE =
  'Real Tip Top photography will be added here.' as const

export const IMAGE_PATHS = {
  logo: {
    dark: '/images/logo/logo-dark.png',
    light: '/images/logo/logo-light.png',
    default: '/images/logo/logo.png',
  },
  hero: {
    /** Real marina welding photo — homepage hero background */
    marinaHero: '/images/hero/tip-top-welding-marina-hero.jpg',
  },
  ogImage: '/images/hero/tip-top-welding-marina-hero.jpg',
  gallery: (filename: string) => `/images/gallery/${filename}`,
  projects: (filename: string) => `/images/projects/${filename}`,
  brand: (filename: string) => `/images/brand/${filename}`,
  services: (slug: string) => `/images/services/${slug}.jpg`,
  team: (filename: string) => `/images/team/${filename}`,
} as const

/** Real gallery photos on disk */
export const GALLERY_ASSETS = {
  bowRailWork: IMAGE_PATHS.gallery('bow-rail-work.jpg'),
  customMailboxWork: IMAGE_PATHS.gallery('custom-mailbox-work.jpg'),
} as const

export const PROJECT_ASSETS = {
  boatRailBefore: IMAGE_PATHS.projects('boat-rail-before.jpg'),
  boatRailAfter: IMAGE_PATHS.projects('boat-rail-after.jpg'),
  mailboxFabrication: IMAGE_PATHS.projects('mailbox-fabrication.jpg'),
} as const

export const BRAND_ASSETS = {
  flyerWithBoatRail: IMAGE_PATHS.brand('flyer-with-boat-rail.jpg'),
  flyerServices: IMAGE_PATHS.brand('flyer-services.jpg'),
  mailboxSocialPost: IMAGE_PATHS.brand('mailbox-social-post.jpg'),
} as const

export const ASSET_FOLDERS = {
  logo: 'public/images/logo',
  hero: 'public/images/hero',
  projects: 'public/images/projects',
  gallery: 'public/images/gallery',
  brand: 'public/images/brand',
  services: 'public/images/services',
  team: 'public/images/team',
} as const

export interface GalleryCategoryAsset {
  id: string
  label: string
  image?: string
  imageAlt?: string
  placeholder?: boolean
}

/** Gallery categories — real photo when available, honest placeholder otherwise */
export const GALLERY_CATEGORIES: readonly GalleryCategoryAsset[] = [
  {
    id: 'marine-repairs',
    label: 'Marine Repairs',
    image: GALLERY_ASSETS.bowRailWork,
    imageAlt: 'Boat rail repair work by Tip Top Welding LLC',
  },
  {
    id: 'bow-rails',
    label: 'Bow Rails',
    image: GALLERY_ASSETS.bowRailWork,
    imageAlt: 'Bow rail work on a boat',
  },
  {
    id: 'pool-railings',
    label: 'Pool Rails',
    placeholder: true,
  },
  {
    id: 'mailboxes',
    label: 'Mailbox Stands',
    image: GALLERY_ASSETS.customMailboxWork,
    imageAlt: 'Custom mailbox fabrication in Cape Coral',
  },
  {
    id: 'custom-fabrication',
    label: 'Custom Fabrication',
    placeholder: true,
  },
  {
    id: 'dock-marina',
    label: 'Dock & Marina',
    placeholder: true,
  },
  {
    id: 'nautical-art',
    label: 'Nautical Metal Art',
    placeholder: true,
  },
  {
    id: 'aluminum-stainless',
    label: 'Aluminum & Stainless',
    placeholder: true,
  },
] as const

export interface WorkPreviewItem {
  id: string
  title: string
  category: string
  image?: string
  imageAlt?: string
  placeholder?: boolean
  link?: string
}

/** Homepage work preview — real photos where available, metal placeholders otherwise */
export const REAL_WORK_PREVIEW: readonly WorkPreviewItem[] = [
  {
    id: 'boat-rail',
    title: 'Boat Rail Work',
    category: 'Marine Welding',
    image: GALLERY_ASSETS.bowRailWork,
    imageAlt: 'Boat rail repair work by Tip Top Welding LLC',
  },
  {
    id: 'mailbox',
    title: 'Custom Mailbox Fabrication',
    category: 'Custom Metal Project',
    image: PROJECT_ASSETS.mailboxFabrication,
    imageAlt: 'Custom welded mailbox installation in Cape Coral',
  },
  {
    id: 'pool-railings',
    title: 'Pool Rails',
    category: 'Custom Fabrication',
    placeholder: true,
  },
  {
    id: 'dock-marina',
    title: 'Dock & Marina Work',
    category: 'Marine Welding',
    placeholder: true,
  },
] as const

import photoPlacements from '../config/photo-placements.json'
import { BRAND, SERVICE_AREAS } from '../config/brand'
import { GALLERY_CATEGORIES, REAL_WORK_PREVIEW } from '../data/images'
import {
  BEFORE_AFTER_PROJECTS,
} from '../data/projects'
import type {
  BeforeAfterProject,
  FeaturedProject,
} from '../data/models/project'
import type { WorkPreviewItem } from '../data/images'
import siteSettingsFile from './settings/site.json'
import type {
  CmsFeaturedWork,
  CmsFeaturedWorkEntry,
  CmsGalleryPhoto,
  CmsGalleryPhotoEntry,
  CmsProject,
  CmsProjectEntry,
  GalleryCategoryOption,
  GalleryCategorySection,
  ResolvedSiteSettings,
  SiteSettingsFile,
  SocialLinksMap,
} from './types'
import { GALLERY_CATEGORY_OPTIONS } from './types'

// =============================================================================
// Load JSON content files written by Decap CMS at build time
// =============================================================================

const galleryModules = import.meta.glob<CmsGalleryPhoto>('./gallery/*.json', {
  eager: true,
  import: 'default',
})

const projectModules = import.meta.glob<CmsProject>('./projects/*.json', {
  eager: true,
  import: 'default',
})

const featuredWorkModules = import.meta.glob<CmsFeaturedWork>('./featured-work/*.json', {
  eager: true,
  import: 'default',
})

function slugFromModulePath(path: string): string {
  const match = path.match(/\/([^/]+)\.json$/)
  return match?.[1] ?? path
}

function sortByOrder<T extends { sortOrder?: number; title: string }>(items: readonly T[]): T[] {
  return [...items].sort((a, b) => {
    const orderA = a.sortOrder ?? 999
    const orderB = b.sortOrder ?? 999
    if (orderA !== orderB) return orderA - orderB
    return a.title.localeCompare(b.title)
  })
}

function normalizeImagePath(path?: string): string | undefined {
  if (!path?.trim()) return undefined
  const trimmed = path.trim()
  return trimmed.startsWith('/') ? trimmed : `/${trimmed}`
}

function hasUsableImage(path?: string): boolean {
  return Boolean(normalizeImagePath(path))
}

function entriesFromModules<T extends { title: string; slug?: string }>(
  modules: Record<string, T>,
): Array<T & { id: string }> {
  return Object.entries(modules).map(([path, item]) => ({
    ...item,
    id: item.slug?.trim() || slugFromModulePath(path),
  }))
}

function normalizeServiceAreas(
  areas: SiteSettingsFile['serviceAreas'],
): readonly string[] {
  if (!areas?.length) return SERVICE_AREAS
  const normalized = areas
    .map((entry) => (typeof entry === 'string' ? entry : entry.area?.trim() ?? ''))
    .filter(Boolean)
  return normalized.length > 0 ? normalized : SERVICE_AREAS
}

const cmsSettings = siteSettingsFile as SiteSettingsFile

export function getSiteSettings(): ResolvedSiteSettings {
  return {
    businessName: cmsSettings.businessName?.trim() || BRAND.legalName,
    phone: cmsSettings.phone?.trim() || BRAND.phone,
    email: cmsSettings.email?.trim() || BRAND.email,
    address: cmsSettings.address?.trim() || BRAND.fullAddress,
    serviceAreas: normalizeServiceAreas(cmsSettings.serviceAreas),
    facebookUrl: cmsSettings.facebookUrl?.trim() || 'https://facebook.com/tiptopwelding',
    instagramUrl: cmsSettings.instagramUrl?.trim() || 'https://instagram.com/tip_top_welding_llc',
    googleReviewsUrl: cmsSettings.googleReviewsUrl?.trim() || '',
    formspreeEndpoint: cmsSettings.formspreeEndpoint?.trim() || '',
  }
}

export function getSocialLinks(): SocialLinksMap {
  const settings = getSiteSettings()

  return {
    googleReviews: {
      label: 'Google Reviews',
      cta: 'View on Google',
      description: 'Google Business Profile link for Tip Top Welding LLC.',
      url: settings.googleReviewsUrl || '#',
      placeholder: !settings.googleReviewsUrl,
    },
    facebook: {
      label: 'Facebook',
      cta: 'Follow on Facebook',
      description: 'Follow Tip Top Welding on Facebook for updates.',
      url: settings.facebookUrl,
      placeholder: false,
    },
    instagram: {
      label: 'Instagram',
      cta: 'Follow on Instagram',
      description: 'Follow Tip Top Welding LLC on Instagram.',
      url: settings.instagramUrl,
      placeholder: false,
    },
  }
}

export function getCmsGalleryPhotos(): CmsGalleryPhotoEntry[] {
  return sortByOrder(
    entriesFromModules(galleryModules).filter((item) => item.title?.trim() && item.published !== false),
  )
}

export function getCmsProjects(): CmsProjectEntry[] {
  return sortByOrder(
    entriesFromModules(projectModules).filter((item) => item.title?.trim() && item.published !== false),
  )
}

export function getCmsFeaturedWork(): CmsFeaturedWorkEntry[] {
  return sortByOrder(
    entriesFromModules(featuredWorkModules).filter((item) => item.title?.trim()),
  )
}

function fallbackCategoryId(label: string): string {
  return label.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
}

function mapFallbackCategories(): GalleryCategorySection[] {
  return GALLERY_CATEGORY_OPTIONS.map((label) => {
    const fallback = GALLERY_CATEGORIES.find(
      (item) => item.label === label || item.id === fallbackCategoryId(label),
    )

    return {
      id: fallback?.id ?? fallbackCategoryId(label),
      label,
      photos: [],
      fallbackImage: fallback?.image,
      fallbackAlt: fallback?.imageAlt,
      placeholder: fallback?.placeholder ?? !fallback?.image,
    }
  })
}

export function getGallerySections(): GalleryCategorySection[] {
  const seen = new Set<string>()
  const cmsPhotos = getCmsGalleryPhotos().filter((photo) => {
    const image = normalizeImagePath(photo.image)
    if (!image || seen.has(image) || ((photoPlacements as Record<string, string>)[image] && (photoPlacements as Record<string, string>)[image] !== '/gallery')) return false
    seen.add(image)
    return true
  })
  const sections = mapFallbackCategories()

  return sections.map((section) => {
    const photos = cmsPhotos
      .filter((photo) => photo.category === section.label)
      .map((photo) => ({
        ...photo,
        image: normalizeImagePath(photo.image),
      }))

    if (photos.length > 0) {
      return {
        ...section,
        photos,
        placeholder: false,
      }
    }

    return section
  })
}

function mapCmsProjectToBeforeAfter(project: CmsProjectEntry): BeforeAfterProject | null {
  if (!hasUsableImage(project.beforeImage) || !hasUsableImage(project.afterImage)) {
    return null
  }

  return {
    id: project.id,
    slug: project.slug ?? project.id,
    kind: 'before-after',
    title: project.title,
    category: project.category,
    location: 'Southwest Florida',
    status: 'published',
    problem: project.description ?? '',
    solution: project.description ?? '',
    beforeImage: normalizeImagePath(project.beforeImage)!,
    afterImage: normalizeImagePath(project.afterImage)!,
    beforeAlt: `Before — ${project.title}`,
    afterAlt: `After — ${project.title}`,
  }
}

function mapCmsProjectToFeatured(project: CmsProjectEntry): FeaturedProject | null {
  if (!hasUsableImage(project.image)) return null

  return {
    id: project.id,
    slug: project.slug ?? project.id,
    kind: 'featured',
    title: project.title,
    category: project.category,
    location: 'Southwest Florida',
    status: 'published',
    scope: project.description ?? '',
    description: project.description ?? '',
    highlights: [],
    image: normalizeImagePath(project.image)!,
    imageAlt: project.title,
    featured: true,
  }
}

export function getBeforeAfterProjects(): BeforeAfterProject[] {
  const cms = getCmsProjects()
    .map(mapCmsProjectToBeforeAfter)
    .filter((project): project is BeforeAfterProject => project !== null)

  if (cms.length > 0) return cms
  return [...BEFORE_AFTER_PROJECTS]
}

export function getFeaturedProject(): FeaturedProject | undefined {
  const cmsFeatured = getCmsProjects()
    .filter((project) => project.featured && hasUsableImage(project.image))
    .map(mapCmsProjectToFeatured)
    .filter((project): project is FeaturedProject => project !== null)

  if (cmsFeatured.length > 0) return cmsFeatured[0]
  return undefined
}

export interface WorkExampleCard {
  id: string
  title: string
  category: string
  description: string
  image?: string
  placeholder: boolean
}

export function getWorkExampleCards(): WorkExampleCard[] {
  const cms = getCmsProjects()
    .filter(
      (project) =>
        !project.featured &&
        hasUsableImage(project.image) &&
        !(hasUsableImage(project.beforeImage) && hasUsableImage(project.afterImage)),
    )
    .map((project) => ({
      id: project.id,
      title: project.title,
      category: project.category,
      description: project.description ?? '',
      image: normalizeImagePath(project.image),
      placeholder: false,
    }))

  if (cms.length > 0) return cms
  return []
}

function mapFeaturedWorkToPreview(item: CmsFeaturedWorkEntry): WorkPreviewItem {
  const image = normalizeImagePath(item.image)
  return {
    id: item.id,
    title: item.title,
    category: item.description?.trim() || 'Tip Top Welding',
    image,
    imageAlt: item.alt?.trim() || item.title,
    placeholder: !image,
    link: item.link?.trim() || undefined,
  }
}

export function getHomeFeaturedWork(): WorkPreviewItem[] {
  const cms = getCmsFeaturedWork()
    .filter((item) => hasUsableImage(item.image))
    .map(mapFeaturedWorkToPreview)

  if (cms.length > 0) return cms
  return [...REAL_WORK_PREVIEW]
}

export function isGalleryCategoryOption(value: string): value is GalleryCategoryOption {
  return (GALLERY_CATEGORY_OPTIONS as readonly string[]).includes(value)
}

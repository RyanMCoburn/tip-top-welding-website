import type { BeforeAfterProject, FeaturedProject, GalleryProject, Project } from './models/project'
import { GALLERY_ASSETS, PROJECT_ASSETS } from './images'

// =============================================================================
// Project registry — real Tip Top work only; conservative labels and descriptions
// =============================================================================

export const BEFORE_AFTER_PROJECTS: readonly BeforeAfterProject[] = [
  {
    id: 'boat-rail-repair',
    slug: 'boat-rail-repair',
    kind: 'before-after',
    title: 'Boat Rail Repair',
    category: 'Marine Welding',
    location: 'Southwest Florida',
    status: 'published',
    serviceSlug: 'bow-rail-repairs',
    problem: 'Damaged bow rail on a boat — repair and fabrication work needed.',
    solution: 'Boat rail repair and fabrication work by Tip Top Welding LLC.',
    beforeImage: PROJECT_ASSETS.boatRailBefore,
    afterImage: PROJECT_ASSETS.boatRailAfter,
    beforeAlt: 'Boat with damaged bow rail before repair',
    afterAlt: 'Boat bow rail after repair work',
  },
]

export const FEATURED_PROJECTS: readonly FeaturedProject[] = [
  {
    id: 'mailbox-makeover',
    slug: 'custom-mailbox-makeover',
    kind: 'featured',
    title: 'Custom Mailbox Makeover',
    category: 'Custom Metal Project',
    location: 'Cape Coral, FL',
    status: 'published',
    serviceSlug: 'custom-metal-projects',
    scope: 'Custom welded mailbox installation for a Cape Coral homeowner.',
    description:
      'Custom welded mailbox installation for a Cape Coral homeowner. Replaced an older mailbox setup with a modern welded upgrade.',
    highlights: [
      'Custom-designed and welded mailbox structure',
      'Installed for a Cape Coral homeowner',
    ],
    image: PROJECT_ASSETS.mailboxFabrication,
    imageAlt: 'Custom welded mailbox installation in Cape Coral',
    featured: true,
  },
]

export const GALLERY_PROJECTS: readonly GalleryProject[] = [
  {
    id: 'gallery-bow-rail',
    slug: 'boat-rail-work',
    kind: 'gallery',
    title: 'Boat Rail Work',
    category: 'Marine Welding',
    location: 'Southwest Florida',
    status: 'published',
    serviceSlug: 'bow-rail-repairs',
    description: 'Boat rail repair and fabrication work by Tip Top Welding LLC.',
    image: GALLERY_ASSETS.bowRailWork,
    imageAlt: 'Boat rail work by Tip Top Welding LLC',
    filterTags: ['bow-rails', 'marine', 'stainless'],
  },
  {
    id: 'gallery-mailbox',
    slug: 'custom-mailbox-fabrication',
    kind: 'gallery',
    title: 'Custom Mailbox Fabrication',
    category: 'Custom Metal Project',
    location: 'Cape Coral, FL',
    status: 'published',
    serviceSlug: 'custom-metal-projects',
    description: 'Custom welded mailbox installation for a Cape Coral homeowner.',
    image: GALLERY_ASSETS.customMailboxWork,
    imageAlt: 'Custom mailbox fabrication in Cape Coral',
    filterTags: ['decorative', 'stainless', 'aluminum'],
  },
]

export const ALL_PROJECTS: readonly Project[] = [
  ...GALLERY_PROJECTS,
  ...FEATURED_PROJECTS,
  ...BEFORE_AFTER_PROJECTS,
]

/** @deprecated Legacy gallery card shape */
export const PROJECTS = GALLERY_PROJECTS.map((p, i) => ({
  id: i + 1,
  title: p.title,
  category: p.category,
  filterTags: p.filterTags,
  slug: p.slug,
}))

export function getProjectBySlug(slug: string): Project | undefined {
  return ALL_PROJECTS.find((p) => p.slug === slug)
}

export function getProjectsByServiceSlug(serviceSlug: string): readonly Project[] {
  return ALL_PROJECTS.filter((p) => p.serviceSlug === serviceSlug)
}

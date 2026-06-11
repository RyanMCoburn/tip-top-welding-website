import type { GalleryFilterId } from './service'

export type ProjectStatus = 'placeholder' | 'published'
export type ProjectKind = 'gallery' | 'featured' | 'before-after'

export interface ProjectBase {
  id: string
  slug: string
  title: string
  category: string
  location: string
  status: ProjectStatus
  serviceSlug?: string
}

export interface GalleryProject extends ProjectBase {
  kind: 'gallery'
  description: string
  image: string
  imageAlt: string
  filterTags: GalleryFilterId[]
  materials?: readonly string[]
}

export interface FeaturedProject extends ProjectBase {
  kind: 'featured'
  scope: string
  description: string
  highlights: readonly string[]
  image: string
  imageAlt: string
  featured: boolean
  materials?: readonly string[]
}

export interface BeforeAfterProject extends ProjectBase {
  kind: 'before-after'
  problem: string
  solution: string
  beforeImage: string
  afterImage: string
  beforeAlt: string
  afterAlt: string
}

export type Project = GalleryProject | FeaturedProject | BeforeAfterProject

export function isGalleryProject(p: Project): p is GalleryProject {
  return p.kind === 'gallery'
}

export function isFeaturedProject(p: Project): p is FeaturedProject {
  return p.kind === 'featured'
}

export function isBeforeAfterProject(p: Project): p is BeforeAfterProject {
  return p.kind === 'before-after'
}

import type { GalleryFilterId, Service } from './models/service'

function seo(
  title: string,
  description: string,
  keywords: string[],
): Service['seo'] {
  return { title: `${title} | Tip Top Welding LLC`, description, keywords }
}

export const SERVICES: readonly Service[] = [
  {
    id: 'mobile-welding',
    slug: 'mobile-welding',
    title: 'Mobile Welding Repairs',
    description:
      'On-site welding and repair at your boat, dock, marina, or property across Southwest Florida — when location, access, and scope allow.',
    icon: 'mobile',
    commonUseCases: [
      'Dock-side and marina repairs',
      'On-site aluminum and stainless fixes',
      'Mobile repair calls',
      'Property and waterfront welding',
    ],
    filterTags: ['mobile-welding', 'marine'],
    seo: seo(
      'Mobile Welding Repairs Southwest Florida',
      'Mobile welding repairs in Cape Coral and Southwest Florida. On-site aluminum and stainless work at boats, docks, marinas, and properties.',
      ['mobile welding Cape Coral', 'on-site welding Southwest Florida', 'marina mobile welding'],
    ),
    seoContent: [
      'Tip Top Welding LLC provides mobile welding and on-site repair throughout Southwest Florida. We come to your boat, dock, marina, or property when the project allows.',
      'Text or call with photos and your location to discuss whether mobile service fits your repair or fabrication needs.',
    ],
  },
  {
    id: 'aluminum-welding',
    slug: 'aluminum-welding',
    title: 'Aluminum Welding',
    description:
      'Aluminum welding and fabrication for boats, pontoons, marine structures, brackets, and custom aluminum builds — built clean and built for salt air.',
    icon: 'aluminum',
    commonUseCases: [
      'Hull and structural aluminum repairs',
      'Pontoon and deck aluminum work',
      'Custom aluminum plates and brackets',
      'Marine hardware and assemblies',
    ],
    filterTags: ['aluminum', 'marine'],
    seo: seo(
      'Aluminum Welding Southwest Florida',
      'Aluminum welding and fabrication in Cape Coral and Southwest Florida for boats, pontoons, and marine projects.',
      ['aluminum welding Cape Coral', 'marine aluminum welding Florida', 'aluminum fabrication SW Florida'],
    ),
    seoContent: [
      'We handle aluminum welding and fabrication for boats, pontoons, and marine structures across Southwest Florida. Send photos for a preliminary quote.',
      'Work is scoped individually based on your vessel, damage, or fabrication needs.',
    ],
  },
  {
    id: 'stainless-steel',
    slug: 'stainless-steel-welding',
    title: 'Stainless Steel Welding',
    description:
      'Stainless steel welding and fabrication for railings, hardware, pool work, and custom stainless features — built strong for coastal use.',
    icon: 'stainless',
    commonUseCases: [
      'Stainless railing fabrication',
      'Pool and deck stainless work',
      'Hardware, fittings, and custom pieces',
      'Stainless repair and reinforcement',
    ],
    filterTags: ['stainless', 'pool-railings'],
    seo: seo(
      'Stainless Steel Welding Southwest Florida',
      'Stainless steel welding and fabrication in Southwest Florida. Pool railings, boat rails, decorative stainless, and custom metalwork.',
      ['stainless welding Southwest Florida', 'stainless fabrication Cape Coral', 'pool railing welding Florida'],
    ),
    seoContent: [
      'Stainless steel welding for pool railings, boat rails, decorative work, and custom features throughout Cape Coral, Fort Myers, Naples, and surrounding areas.',
      'Send photos of your project for a preliminary quote. Final scope is confirmed after review.',
    ],
  },
  {
    id: 'marine-welding',
    slug: 'marine-welding',
    title: 'Marine Welding',
    description:
      'Marine welding for boats and vessels — from everyday repairs to high-end vessels and waterfront properties. Aluminum and stainless, on-site when possible.',
    icon: 'marine',
    commonUseCases: [
      'Boat structural repairs',
      'Transom and hull welding',
      'Marina and boatyard work',
      'Vessel hardware and fabrication',
    ],
    filterTags: ['marine', 'aluminum', 'stainless'],
    seo: seo(
      'Marine Welding Cape Coral',
      'Marine welding in Southwest Florida for boats, vessels, and waterfront properties. Aluminum and stainless on-site and in-shop.',
      ['marine welding Cape Coral', 'boat welding Southwest Florida', 'yacht welding Florida'],
    ),
    seoContent: [
      'Marine welding covers a wide range of boat and vessel work in Southwest Florida — repairs, fabrication, and on-site service at marinas and docks when access allows.',
      'From everyday boat repairs to high-end vessels, projects are quoted individually after photos and scope discussion.',
    ],
  },
  {
    id: 'bow-rail-repairs',
    slug: 'bow-rail-repairs',
    title: 'Bow Rail Repairs',
    description:
      'Bow rail repair, replacement, and stainless or aluminum railing work for boats — custom-fitted to your vessel.',
    icon: 'railing',
    commonUseCases: [
      'Bow rail damage repair',
      'Rail section replacement',
      'Stainless and aluminum bow rails',
      'Grab rail and side rail fixes',
    ],
    filterTags: ['bow-rails', 'stainless', 'marine'],
    seo: seo(
      'Bow Rail Repairs Southwest Florida',
      'Bow rail repair and fabrication in Cape Coral and Southwest Florida. Stainless and aluminum boat railing work.',
      ['bow rail repair Florida', 'boat railing welding Cape Coral', 'stainless bow rail repair'],
    ),
    seoContent: [
      'Bow rail repairs and railing work are quoted per vessel after reviewing photos and measurements. We work in stainless and aluminum depending on your boat.',
      'On-site marina or dock work may be available when conditions allow.',
    ],
  },
  {
    id: 'pontoon-repairs',
    slug: 'pontoon-repairs',
    title: 'Pontoon Repairs',
    description:
      'Structural aluminum repair for pontoon boats — log repair, deck reinforcement, railing fixes, and restoration work.',
    icon: 'pontoon',
    commonUseCases: [
      'Pontoon log repair',
      'Deck support reinforcement',
      'Railing and gate repairs',
      'Aluminum panel replacement',
    ],
    filterTags: ['pontoons', 'aluminum', 'marine'],
    seo: seo(
      'Pontoon Repairs Southwest Florida',
      'Pontoon aluminum repair and structural restoration in Southwest Florida.',
      ['pontoon repair welding Florida', 'pontoon aluminum repair Cape Coral', 'pontoon structural repair'],
    ),
    seoContent: [
      'Pontoon repair scope depends on damage and access. We review photos and discuss the work needed before providing a quote.',
      'On-site repair may be available at your dock or storage location when conditions allow.',
    ],
  },
  {
    id: 'skeg-repairs',
    slug: 'skeg-repairs',
    title: 'Skeg Repairs',
    description:
      'Skeg damage repair, lower unit guard work, and related protection for outboards and sterndrives.',
    icon: 'skeg',
    commonUseCases: [
      'Skeg impact damage repair',
      'Lower unit guard fabrication',
      'Skeg reinforcement',
      'Transom protection brackets',
    ],
    filterTags: ['skegs', 'marine', 'aluminum'],
    seo: seo(
      'Skeg Repairs Cape Coral',
      'Skeg damage repair and lower unit work in Cape Coral and Southwest Florida.',
      ['skeg repair Florida', 'lower unit repair welding', 'boat skeg welding Cape Coral'],
    ),
    seoContent: [
      'Skeg work is evaluated from photos and a description of the damage. Repair approach and pricing depend on severity and access.',
      'Marina or boatyard on-site work may be available for qualifying projects.',
    ],
  },
  {
    id: 'decorative-rails',
    slug: 'decorative-rails-gates-stairs',
    title: 'Decorative Rails, Gates & Stairs',
    description:
      'Custom decorative rails, gates, and stair metalwork in aluminum and stainless — for homes, docks, and waterfront properties.',
    icon: 'decorative',
    commonUseCases: [
      'Decorative entry and porch rails',
      'Custom gates and gate frames',
      'Stair rails and handrails',
      'Waterfront property metalwork',
    ],
    filterTags: ['decorative', 'stainless', 'aluminum'],
    seo: seo(
      'Decorative Rails, Gates & Stairs Southwest Florida',
      'Custom decorative rails, gates, and stair metalwork in Southwest Florida. Aluminum and stainless fabrication.',
      ['decorative railing fabrication Florida', 'custom gate welding Cape Coral', 'stair railing welding'],
    ),
    seoContent: [
      'Decorative rails, gates, and stairs are scoped per property after photos and measurements. We work in aluminum and stainless suited for coastal exposure.',
      'Send photos and a brief description for a preliminary quote.',
    ],
  },
  {
    id: 'pool-railings',
    slug: 'pool-railings',
    title: 'Pool Railings',
    description:
      'Custom pool railing systems in stainless and aluminum — built for your pool deck layout and Southwest Florida conditions.',
    icon: 'railing',
    commonUseCases: [
      'Pool deck railing systems',
      'Stainless pool rails',
      'Railing repair and replacement',
      'Custom pool gate hardware',
    ],
    filterTags: ['pool-railings', 'stainless'],
    seo: seo(
      'Pool Railing Fabrication Southwest Florida',
      'Custom pool railing welding and fabrication in Cape Coral and Southwest Florida.',
      ['pool railing welding Florida', 'stainless pool rails Cape Coral', 'pool deck railing fabrication'],
    ),
    seoContent: [
      'Pool railing projects are quoted individually after photos and layout details are reviewed.',
      'On-site work at your property may be available depending on scope and access.',
    ],
  },
  {
    id: 'dock-marina',
    slug: 'dock-marina-fabrication',
    title: 'Dock & Marina Fabrication',
    description:
      'Aluminum and stainless fabrication for docks and marinas — ladders, handrails, gates, frames, and custom hardware.',
    icon: 'dock',
    commonUseCases: [
      'Dock ladders and handrails',
      'Dock gates and access structures',
      'Marina brackets and hardware',
      'Waterfront custom metalwork',
    ],
    filterTags: ['marine', 'aluminum', 'stainless'],
    seo: seo(
      'Dock & Marina Fabrication Southwest Florida',
      'Dock and marina metal fabrication in Southwest Florida. Ladders, handrails, gates, and custom hardware.',
      ['dock fabrication Cape Coral', 'marina welding Southwest Florida', 'dock welding Florida'],
    ),
    seoContent: [
      'Dock and marina work is quoted per property after reviewing site photos, measurements, and access.',
      'Serving waterfront homeowners, dock owners, and marinas across Southwest Florida.',
    ],
  },
  {
    id: 'custom-metal',
    slug: 'custom-metal-projects',
    title: 'Custom Metal Projects',
    description:
      'Custom aluminum and stainless fabrication — mailbox makeovers, brackets, one-off builds, and specialty metal projects.',
    icon: 'fabrication',
    commonUseCases: [
      'Custom mailbox installations',
      'One-off aluminum and stainless builds',
      'Brackets, plates, and hardware',
      'Specialty fabrication requests',
    ],
    filterTags: ['aluminum', 'stainless', 'decorative'],
    seo: seo(
      'Custom Metal Projects Southwest Florida',
      'Custom aluminum and stainless fabrication in Southwest Florida. Mailboxes, brackets, and specialty metal projects.',
      ['custom metal fabrication Cape Coral', 'custom welding Southwest Florida', 'custom aluminum fabrication'],
    ),
    seoContent: [
      'Custom metal projects are scoped individually — from mailbox makeovers to specialty aluminum and stainless builds.',
      'Text or email photos and a description of what you need for a preliminary quote.',
    ],
  },
  {
    id: 'nautical-metal-art',
    slug: 'nautical-metal-art',
    title: 'Nautical Metal Art',
    description:
      'Custom nautical metal art and decorative stainless pieces — marine motifs and one-of-a-kind metalwork for waterfront homes and docks.',
    icon: 'art',
    commonUseCases: [
      'Nautical-themed stainless art',
      'Marine motif metalwork',
      'Decorative coastal pieces',
      'Custom artistic metal installations',
    ],
    filterTags: ['nautical-art', 'stainless', 'decorative'],
    seo: seo(
      'Nautical Metal Art Southwest Florida',
      'Custom nautical metal art and decorative stainless work in Southwest Florida.',
      ['nautical metal art Florida', 'stainless metal art Cape Coral', 'marine metal art fabrication'],
    ),
    seoContent: [
      'Nautical metal art and decorative stainless pieces are custom-scoped based on your design, size, and installation location.',
      'Send reference photos or a description of the piece you have in mind.',
    ],
  },
] as const

export function getServiceBySlug(slug: string): Service | undefined {
  return SERVICES.find((s) => s.slug === slug)
}

export function getServiceById(id: string): Service | undefined {
  return SERVICES.find((s) => s.id === id)
}

export const PROJECT_TYPES = [
  ...SERVICES.map((s) => s.title),
  'Other',
] as const

export type { GalleryFilterId }
export { GALLERY_FILTERS } from './models/service'

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
    title: 'Bow Rail Repair & Replacement',
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
      'Pontoon pressure checks, aluminum welding, dent repairs, and drain-plug work — evaluated for the condition of your pontoons.',
    icon: 'pontoon',
    commonUseCases: [
      'Pontoon pressure checks',
      'Crack, leak, and aluminum weld repairs',
      'Dent repair through a cut access window: press the pontoon back into shape, then weld the window back in',
      'Pontoon drain-plug installation and repair',
    ],
    filterTags: ['pontoons', 'aluminum', 'marine'],
    seo: seo(
      'Pontoon Repairs Southwest Florida',
      'Pontoon pressure checks, dent repair, drain plugs, and aluminum welding in Southwest Florida.',
      ['pontoon repair welding Florida', 'pontoon aluminum repair Cape Coral', 'pontoon structural repair'],
    ),
    seoContent: [
      'Pontoon work includes pressure checks, crack and leak repairs, and drain plugs. For suitable dent repairs, we cut an access window, press the pontoon back into shape, and weld the window back in. We review the damage and access before quoting.',
      'On-site repair may be available at your dock or storage location when conditions allow.',
    ],
  },
  {
    id: 'skeg-repairs',
    slug: 'skeg-repairs',
    title: 'Lower Units — Skegs & Cavitation Plates',
    description:
      'Aluminum weld repairs to damaged skegs and cavitation plates on outboard and sterndrive lower units.',
    icon: 'skeg',
    commonUseCases: [
      'Broken or damaged skeg repair',
      'Welded replacement skeg sections',
      'Cavitation-plate edge repair and rebuilding',
      'Weld shaping and repair-area finishing',
    ],
    filterTags: ['skegs', 'marine', 'aluminum'],
    seo: seo(
      'Skeg Repairs Cape Coral',
      'Skeg and cavitation-plate weld repairs for outboard and sterndrive lower units in Cape Coral and Southwest Florida.',
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
    title: 'Architectural Railings & Stairs',
    description:
      'Custom decorative rails, gates, and stair metalwork in aluminum and stainless — for homes, docks, and waterfront properties.',
    icon: 'decorative',
    commonUseCases: [
      'Decorative entry and porch rails',
      'Custom gates and gate frames',
      'Straight and curved stair railings',
        'Decorative landing rails and handrails',
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
  {
    id: "t-top-fabrication-repairs",
    slug: "t-top-fabrication-repairs",
    title: "T-Tops — New Builds & Repairs",
    description: "Custom aluminum T-top fabrication and repairs for boats, fitted to your console and deck layout.",
    icon: "marine",
    commonUseCases: ["New custom T-top frames","T-top frame repairs and reinforcement","Mounting and fitment work","Integrated rod-holder layouts"],
    filterTags: ['aluminum', 'stainless', 'marine'],
    seo: seo("T-Tops — New Builds & Repairs Southwest Florida", "Custom aluminum T-top fabrication and repairs for boats, fitted to your console and deck layout.", ["T-Tops — New Builds & Repairs Cape Coral","T-Tops — New Builds & Repairs Southwest Florida"]),
    seoContent: ["Send photos of your boat, console, mounting area, and any existing damage. We discuss the layout and scope before quoting a new T-top or repair."],
  },
  {
    id: "custom-rod-holders",
    slug: "custom-rod-holders",
    title: "Custom Rod Holders",
    description: "Custom boat rod holders and welded rod-holder assemblies, arranged for your fishing setup and available space.",
    icon: "marine",
    commonUseCases: ["Custom rod-holder assemblies","T-top mounted rod holders","Layout and spacing to suit your boat","Aluminum and stainless fabrication"],
    filterTags: ['aluminum', 'stainless', 'marine'],
    seo: seo("Custom Rod Holders Southwest Florida", "Custom boat rod holders and welded rod-holder assemblies, arranged for your fishing setup and available space.", ["Custom Rod Holders Cape Coral","Custom Rod Holders Southwest Florida"]),
    seoContent: ["Send photos of the mounting area and tell us how many rods you want to carry. Each assembly is quoted for its layout, material, and fitment."],
  },
  {
    id: "swim-platform-railings",
    slug: "swim-platform-railings",
    title: "Swim Platform Railings & Davits",
    description: "Custom swim-platform railings, removable stainless stern rails, grab rails, and davit fabrication or repair for boats and yachts.",
    icon: "railing",
    commonUseCases: ["Stainless swim-platform and stern railings","Removable rails and mounting arrangements","Davit fabrication and repair","Custom grab rails and damaged rail replacement"],
    filterTags: ['aluminum', 'stainless', 'marine'],
    seo: seo("Swim Platform Railings Southwest Florida", "Custom swim-platform railings, removable stainless stern rails, grab rails, and davit fabrication or repair for boats and yachts.", ["Swim Platform Railings Cape Coral","Swim Platform Railings Southwest Florida"]),
    seoContent: ["Send photos of the swim platform, mounting points, and the railing you want repaired or replaced. We review measurements and access before quoting."],
  },
  {
    id: "fuel-tanks",
    slug: "fuel-tanks",
    title: "Aluminum Fuel Tanks",
    description: "Custom aluminum fuel tanks fabricated to fit your boat and its available tank space.",
    icon: "fabrication",
    commonUseCases: ["Custom tank shapes and dimensions","Aluminum tank fabrication","Fill, vent, and sender fitting layouts","Replacement tank fabrication"],
    filterTags: ['aluminum', 'stainless', 'marine'],
    seo: seo("Aluminum Fuel Tanks Southwest Florida", "Custom aluminum fuel tanks fabricated to fit your boat and its available tank space.", ["Aluminum Fuel Tanks Cape Coral","Aluminum Fuel Tanks Southwest Florida"]),
    seoContent: ["Send dimensions, photos of the tank space, and the fitting layout. Tank shape, access, and installation requirements are reviewed before quoting."],
  },
  {
    id: "water-tanks",
    slug: "water-tanks",
    title: "Custom Water Tanks",
    description: "Custom water-tank fabrication, including stainless steel tanks built around the space available aboard your boat or yacht.",
    icon: "fabrication",
    commonUseCases: ["Stainless steel water tanks","Custom shapes for confined spaces","Tank fitting layouts","Replacement water-tank fabrication"],
    filterTags: ['aluminum', 'stainless', 'marine'],
    seo: seo("Custom Water Tanks Southwest Florida", "Custom water-tank fabrication, including stainless steel tanks built around the space available aboard your boat or yacht.", ["Custom Water Tanks Cape Coral","Custom Water Tanks Southwest Florida"]),
    seoContent: ["We build custom water tanks around the available space and access aboard your vessel. Send dimensions and photos so we can discuss materials, fittings, and the project scope."],
  },
  {
    id: "louvers-privacy-screens",
    slug: "louvers-privacy-screens",
    title: "Louvers & Privacy Screens",
    description: "Custom metal louvers, equipment enclosures, and privacy screens for homes and waterfront properties.",
    icon: "decorative",
    commonUseCases: ["Louvered equipment enclosures","Matching access gates","Custom privacy-screen panels","Fabrication to suit the opening"],
    filterTags: ['aluminum', 'stainless', 'decorative'],
    seo: seo("Louvers & Privacy Screens Southwest Florida", "Custom metal louvers, equipment enclosures, and privacy screens for homes and waterfront properties.", ["Louvers & Privacy Screens Cape Coral","Louvers & Privacy Screens Southwest Florida"]),
    seoContent: ["Send photos and dimensions of the opening or equipment area. We plan the panel layout and access requirements before quoting."],
  },
  {
    id: "custom-gates",
    slug: "custom-gates",
    title: "Custom Gates",
    description: "Custom aluminum and stainless steel gates, from decorative garden entrances to substantial entry gates.",
    icon: "decorative",
    commonUseCases: ["Decorative entry gates","Garden and walkway gates","Custom aluminum gates","Stainless steel gate fabrication"],
    filterTags: ['aluminum', 'stainless', 'decorative'],
    seo: seo("Custom Gates Southwest Florida", "Custom aluminum and stainless steel gates, from decorative garden entrances to substantial entry gates.", ["Custom Gates Cape Coral","Custom Gates Southwest Florida"]),
    seoContent: ["Custom gates are quoted for the opening, design, material, and mounting requirements. Send photos and measurements to discuss your project."],
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

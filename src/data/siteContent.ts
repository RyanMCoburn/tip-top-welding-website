// =============================================================================
// Site content barrel — marketing copy & re-exports
// Brand/config: src/config/brand.ts, src/config/seo.ts
// Data models:  src/data/services.ts, projects.ts, faq.ts
// =============================================================================

import { getSocialLinks } from '../content/loaders'

export { BRAND, SITE, CTAS, CONTACT, DEMO_MODE, SERVICE_AREAS, VERIFIED_CLAIMS, FOOTER_SERVICES } from '../config/brand'
export {
  STORE_PAGE,
  STORE_PRODUCTS,
  STORE_FAQ_ITEMS,
  getStoreCheckoutUrl,
  getStoreProductById,
  formatStorePrice,
  isStoreCheckoutConfigured,
} from '../config/store'
export type { StoreProduct } from '../config/store'
export { DISCLAIMERS, LEGAL_LAST_UPDATED, PRIVACY_POLICY, TERMS_OF_SERVICE } from '../config/legal'
export { DEFAULT_SEO, ROUTE_SEO, getRouteMeta, absoluteUrl } from '../config/seo'
export type { PageMeta } from '../config/seo'

export { SERVICES, PROJECT_TYPES, GALLERY_FILTERS, getServiceBySlug, getServiceById } from './services'
export type { Service, GalleryFilterId } from './models/service'

export {
  GALLERY_PROJECTS,
  FEATURED_PROJECTS,
  BEFORE_AFTER_PROJECTS,
  ALL_PROJECTS,
  PROJECTS,
  getProjectBySlug,
  getProjectsByServiceSlug,
} from './projects'
export type { Project, GalleryProject, FeaturedProject, BeforeAfterProject } from './models/project'

export { FAQ_ITEMS, getFaqByCategory, getFaqForService, getFaqById } from './faq'
export type { FaqItem, FaqCategory } from './models/faq'
export { FAQ_CATEGORIES } from './models/faq'

export {
  IMAGE_PATHS,
  GALLERY_ASSETS,
  PROJECT_ASSETS,
  BRAND_ASSETS,
  GALLERY_CATEGORIES,
  REAL_WORK_PREVIEW,
  PLACEHOLDER_PHOTO_LABEL,
  PLACEHOLDER_LAUNCH_NOTE,
} from './images'

import { BRAND, CONTACT, CTAS } from '../config/brand'

export const HOMEPAGE = {
  servicesPreview: {
    title: 'Our Services',
    subtitle:
      'Mobile welding and custom fabrication for aluminum and stainless — boats, bow rails, pontoons, docks, marinas, and custom metal projects.',
  },
  workPreview: {
    title: 'Types of Work',
    subtitle:
      'Real project photos coming soon. These cards describe work we handle — not completed Tip Top projects until photos are added.',
  },
  realWorkPreview: {
    title: 'Recent Work',
    subtitle:
      'Real Tip Top project photos where we have them. Placeholder cards mark work types we handle — more photos coming as jobs get documented.',
  },
  knownWorkTypes: {
    title: 'Known Work Types',
    subtitle: 'Types of welding and fabrication we discuss and quote — not a portfolio of completed jobs.',
    items: [
      'Bow rail repairs',
      'Pontoon and skeg repairs',
      'Decorative rails and gates',
      'Pool railings',
      'Custom mailbox installations',
      'Aluminum and stainless repairs',
      'Marina/dock hardware',
      'Nautical metal art',
    ] as const,
  },
  howItWorks: {
    title: 'How It Works',
    subtitle: 'Send photos for a quote — three straightforward steps.',
  },
  quoteCta: {
    title: 'Request a Quote',
    subtitle: 'Tell us about your project. Photos help us respond faster with a preliminary estimate.',
  },
} as const

export const WORK_TYPES_PAGE = {
  title: 'Types of Work',
  eyebrow: 'What We Do',
  headline: 'Real project photos coming soon.',
  description:
    'The sections below describe types of welding and fabrication Tip Top Welding handles. Photos will be added as real projects are documented — nothing here represents a completed Tip Top job until replaced with client photography.',
  typesHeading: 'Types of Work',
  typesSubtitle:
    'Bow rails, pontoons, skegs, pool railings, decorative work, marina hardware, and custom aluminum and stainless fabrication across Southwest Florida.',
} as const

/** @deprecated Use WORK_TYPES_PAGE */
export const WORK_EXAMPLES_PAGE = WORK_TYPES_PAGE

export const DEMO_CONTENT_BANNER =
  'Demo content only — real project photos and reviews will be added before launch.' as const

export const CAPABILITY_STRIP = [
  { id: 'coverage', label: 'SW Florida Coverage', icon: 'map', detail: 'Cape Coral to Naples & marinas' },
  { id: 'mobile', label: 'Mobile Service', icon: 'onsite', detail: 'We come to you when the job allows' },
  { id: 'environments', label: 'Boats • Docks • Pools', icon: 'water', detail: 'Marine & waterfront work' },
  { id: 'materials', label: 'Aluminum • Stainless', icon: 'metal', detail: 'Our core specialties' },
] as const

export const WHY_CLIENTS_CALL = [
  {
    title: 'Mobile Service',
    icon: 'mobile',
    description: 'We come to your boat, dock, marina, or property for a lot of welding and fab work across Southwest Florida — when access and scope allow.',
  },
  {
    title: 'Marine Experience',
    icon: 'marine',
    description: 'Boat rails, pontoon work, skeg repairs, dock hardware, and marine welding. Every job gets quoted after we see photos and talk through the work.',
  },
  {
    title: 'Aluminum & Stainless Specialists',
    icon: 'metal',
    description: 'We weld aluminum and stainless — the metals most SW Florida boat, dock, and pool jobs need.',
  },
  {
    title: 'Custom Fabrication',
    icon: 'fabrication',
    description: 'Pool railings, decorative rails, mailboxes, gates, and one-off metal projects built to your layout.',
  },
  {
    title: 'Waterfront Properties',
    icon: 'waterfront',
    description: 'Pool decks, docks, marinas, and waterfront homes — metalwork built for salt air and daily use.',
  },
  {
    title: 'Fast Response',
    icon: 'response',
    description: 'Text or call with photos for a quicker preliminary quote. We keep it direct — no runaround.',
  },
] as const

export const TYPES_OF_WORK = [
  { title: 'Bow Rail Repairs', description: 'Stainless and aluminum bow rail repair, replacement, and railing work for boats.', icon: 'railing' },
  { title: 'Pontoon & Skeg Repairs', description: 'Structural aluminum pontoon repair and skeg damage repair for outboards and sterndrives.', icon: 'pontoon' },
  { title: 'Decorative Rails & Gates', description: 'Custom decorative rails, gates, and stair metalwork for homes and waterfront properties.', icon: 'decorative' },
  { title: 'Pool Railings', description: 'Custom stainless and aluminum pool railing systems built for your deck layout.', icon: 'railing' },
  { title: 'Marina & Dock Hardware', description: 'Ladders, handrails, gates, frames, and custom hardware for docks and marinas.', icon: 'dock' },
  { title: 'Mobile Welding Repairs', description: 'On-site welding at your boat, dock, marina, or property across Southwest Florida.', icon: 'mobile' },
  { title: 'Custom Metal Projects', description: 'Mailbox makeovers, brackets, and one-off aluminum and stainless fabrication.', icon: 'fabrication' },
  { title: 'Nautical Metal Art', description: 'Custom nautical metal art and decorative stainless pieces for waterfront homes and docks.', icon: 'art' },
] as const

export const GALLERY_PAGE = {
  title: 'Project Gallery',
  subtitle:
    'Real Tip Top Welding photography where available. Placeholder slots remain for categories still being documented.',
} as const

export const NAUTICAL_METAL_ART = {
  title: 'Nautical Metal Art & Custom Stainless',
  subtitle:
    'Decorative stainless work, pool railings, nautical artwork, and custom metal pieces for waterfront homes, pools, and docks.',
  items: [
    {
      title: 'Decorative Stainless Work',
      description:
        'Custom stainless accents and architectural details for waterfront homes, entry features, and outdoor spaces.',
    },
    {
      title: 'Pool Railings',
      description:
        'Stainless and aluminum pool railing systems built for your pool deck layout and Southwest Florida conditions.',
    },
    {
      title: 'Nautical Artwork',
      description:
        'Custom nautical metal art — marine motifs, anchors, compass roses, and one-of-a-kind stainless pieces.',
    },
    {
      title: 'Custom Fabrication',
      description:
        'One-off aluminum and stainless projects — from functional coastal hardware to artistic installations.',
    },
  ],
} as const

export const WATERFRONT_LIVING = {
  title: 'Built for Southwest Florida Waterfront Living',
  subtitle:
    'We work on boats, docks, pools, waterfront homes, and marinas across Cape Coral and surrounding communities.',
  environments: [
    {
      title: 'Waterfront Homes',
      description:
        'Stainless and aluminum features for coastal homes — railings, entry details, and outdoor metalwork.',
    },
    {
      title: 'Docks',
      description:
        'Dock ladders, handrails, gates, frames, and hardware for private slips and waterfront properties.',
    },
    {
      title: 'Pools',
      description:
        'Pool railing systems, deck hardware, and stainless accents fitted to your pool and patio layout.',
    },
    {
      title: 'Boats',
      description:
        'T-tops, towers, railings, swim platforms, and aluminum repairs for local boats and vessels.',
    },
    {
      title: 'Marinas',
      description:
        'Ladders, frames, brackets, and custom hardware for boatyards and high-traffic dock areas.',
    },
  ],
} as const

export const WHY_CHOOSE_TIPTOP = {
  title: 'Why Choose Tip Top Welding',
  subtitle:
    'Mobile welding and fabrication focused on stainless and aluminum work for boats, pools, docks, and custom projects across Southwest Florida.',
  reasons: [
    { title: 'Stainless & Aluminum Focus', description: 'We specialize in stainless and aluminum welding and fabrication for marine, pool, dock, and custom coastal work.' },
    { title: 'Mobile & On-Site Service', description: 'On-site welding and fabrication available when location, access, and project scope allow.' },
    { title: 'Coastal Project Experience', description: 'Based in Cape Coral — familiar with the conditions waterfront and marine projects face in Southwest Florida.' },
    { title: 'Clear Communication', description: 'Photo-based preliminary quotes, defined scope discussion, and straightforward follow-up before work begins.' },
    { title: 'Custom Work Welcome', description: 'From repairs and railings to one-off fabrication and nautical metal art — projects are scoped individually.' },
    { title: 'Local Southwest Florida Business', description: 'Serving Cape Coral, Fort Myers, Naples, Marco Island, Estero, Bonita Springs, Sanibel, and surrounding areas.' },
  ],
} as const

export const MARINE_WELDING_SEO = {
  title: 'Mobile Welding & Custom Fabrication in Southwest Florida',
  paragraphs: [
    'Tip Top Welding LLC is a mobile welding and custom fabrication business based in Cape Coral, Florida. We specialize in aluminum and stainless steel work for boats, bow rails, pontoons, skeg repairs, pool railings, docks, marinas, and custom metal projects.',
    'Services include mobile welding repairs, marine welding, bow rail repairs, pontoon and skeg repairs, decorative rails and gates, pool railings, dock and marina fabrication, custom metal projects, and nautical metal art.',
    'We serve Cape Coral, Fort Myers, Sanibel, Captiva, Bonita Springs, Naples, surrounding marinas, and Southwest Florida.',
  ],
  keywords: ['mobile welding Cape Coral', 'aluminum welding Southwest Florida', 'stainless welding Florida', 'marine welding SW Florida', 'bow rail repair Cape Coral'],
} as const

export const SEO_COPY = {
  intro: 'Tip Top Welding LLC provides mobile welding and custom fabrication in Cape Coral for aluminum and stainless projects across Southwest Florida — boats, bow rails, pontoons, skeg repairs, pool railings, docks, marinas, and custom metal work.',
  capeCoral: 'Based in Cape Coral, we handle mobile and on-site welding for boats, docks, marinas, and custom aluminum or stainless work throughout the area and nearby communities.',
  aluminum: 'Aluminum welding and fabrication for boat repairs, pontoons, marine structures, and custom aluminum builds — send photos for a quote.',
  stainless: 'Stainless welding and fabrication for pool railings, bow rails, decorative work, nautical metal art, and custom stainless features along the Gulf Coast.',
  fabrication: 'Custom fabrication for mailbox makeovers, decorative rails, and one-off aluminum and stainless projects throughout Southwest Florida.',
} as const

export const SOCIAL_LINKS = getSocialLinks()

export const CONTACT_CARDS = [
  { id: 'call', title: 'Call', description: 'Talk through your project, timeline, and what you need welded or fabricated.', action: CTAS.phone, href: CONTACT.tel, value: BRAND.phone },
  { id: 'text', title: 'Text Photos', description: 'Send project photos for a faster preliminary quote.', action: CTAS.secondary, href: CONTACT.sms, value: BRAND.phone },
  { id: 'email', title: 'Email', description: 'Email project details, drawings, or questions.', action: 'Send Email', href: CONTACT.mailto, value: BRAND.email },
] as const

export const SERVICE_AREA_MAP = {
  title: 'Service Area',
  subtitle: `Based in ${BRAND.location} — on-site fabrication throughout Southwest Florida waterfront communities.`,
  placeholderNote: 'Google Maps embed placeholder — set embedUrl in siteContent.ts when map is ready.',
  embedUrl: null as string | null,
} as const

export const HOW_IT_WORKS = [
  { step: 1, title: 'Send Photos of Your Project', description: 'Text or email photos of your boat, damage, or fabrication area. Include make, model, and a brief description of what you need.' },
  { step: 2, title: 'Get a Clear Quote', description: 'We review your project details and provide a straightforward estimate — scope, materials, and timeline.' },
  { step: 3, title: 'We Fabricate, Repair, or Install', description: 'Work is completed in-shop or on-site at your boat, dock, marina, or property — depending on the project.' },
] as const

export const COMMON_PROJECTS = [
  { title: 'Bow Rail Repairs', description: 'Stainless and aluminum bow rail repair and replacement — quoted per vessel after photos and measurements.' },
  { title: 'Pontoon & Skeg Repairs', description: 'Structural pontoon aluminum repair and skeg damage repair for outboards and sterndrives.' },
  { title: 'Pool & Decorative Railings', description: 'Custom pool railings, decorative rails, and gate metalwork for homes and waterfront properties.' },
  { title: 'Custom Mailbox Installations', description: 'Mailbox makeovers and custom metal mailbox projects in aluminum and stainless.' },
  { title: 'Dock & Marina Hardware', description: 'Dock ladders, handrails, gates, and custom hardware for marinas and private slips.' },
  { title: 'Nautical Metal Art', description: 'Custom nautical metal art and decorative stainless pieces for waterfront homes and docks.' },
] as const

export const SPECIALIST_REASONS = [
  { title: 'Built for Salt Air', description: 'Southwest Florida salt air, sun, and humidity wear on the wrong materials fast. We work in aluminum and stainless suited for coastal use.' },
  { title: 'Built Clean', description: 'Good fabrication shows in fitment, weld quality, and a finished look that matches your boat or property — not overbuilt corporate metalwork.' },
  { title: 'Built Strong', description: 'Railings, platforms, and dock hardware carry real loads. Builds are planned for how the piece will actually be used.' },
  { title: 'On-Site When It Makes Sense', description: 'Mobile welding at boats, docks, marinas, and properties across Southwest Florida — when access and scope allow.' },
] as const

export const TRUST_ITEMS = [
  { id: 'materials', title: 'Stainless & Aluminum', description: 'We specialize in stainless and aluminum welding and fabrication for marine, pool, dock, and custom coastal work.', icon: 'metal' },
  { id: 'mobile', title: 'Mobile & On-Site', description: 'Mobile welding and on-site fabrication available across Southwest Florida — location and scope permitting.', icon: 'mobile' },
  { id: 'coastal', title: 'Coastal Southwest Florida', description: 'Based in Cape Coral and serving boat owners, waterfront properties, and coastal projects throughout the region.', icon: 'water' },
  { id: 'photo-quote', title: 'Photo-Based Quoting', description: 'Send photos of your project for a faster, more accurate preliminary quote. Final scope is confirmed after review.', icon: 'camera' },
  { id: 'communication', title: 'Straightforward Communication', description: 'We discuss scope, timing, and pricing clearly before work begins — no fabricated claims or hidden promises.', icon: 'chat' },
] as const

export const NAV_LINKS = [
  { label: 'Home', path: '/' },
  { label: 'Services', path: '/services' },
  { label: 'Types of Work', path: '/projects' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Store', path: '/store' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
] as const

export const FOOTER_LINKS = [{ label: 'FAQ', path: '/faq' }] as const

export const LEGAL_LINKS = [
  { label: 'Privacy Policy', path: '/privacy' },
  { label: 'Terms of Service', path: '/terms' },
] as const

export const COASTAL_SECTION = {
  title: 'Working in Coastal Conditions',
  subtitle: 'Southwest Florida salt air, sun, and humidity affect how stainless and aluminum hold up. We plan for that on every job.',
  points: [
    { title: 'Salt Air & Humidity', description: 'Coastal exposure wears on the wrong materials fast. We work with stainless and aluminum suited for Gulf Coast conditions.' },
    { title: 'Sun & Weather', description: 'Heat, storms, and seasonal weather affect outdoor metalwork. We account for drainage, expansion, and long-term exposure.' },
    { title: 'Structural Use', description: 'Railings, platforms, T-tops, and dock hardware carry real loads. Builds are planned for how the piece will actually be used.' },
    { title: 'Clean Fit & Finish', description: 'Good fabrication shows in the details — fitment, weld quality, and a finished look that matches your boat or property.' },
  ],
} as const

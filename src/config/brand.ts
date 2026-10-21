// =============================================================================
// Brand & global flags — edit before client handoff
// =============================================================================

/** When true, demo banners, placeholder forms, and unverified trust claims are shown */
export const DEMO_MODE = false as const

const SMS_PREFILL = 'Hi, I would like a fabrication quote. I can send project photos.'

/** Claims from brand reference — verify with owner before treating as final site copy */
export const VERIFIED_CLAIMS = {
  experienceClaim: '25+ Years Experience',
  licenseInsuranceClaim: 'Licensed & Insured',
  claimVerificationNote: 'Confirm with owner before launch',
} as const

export const BRAND = {
  /** Marketing / display name */
  name: 'Tip Top Welding',
  /** Legal entity name — use in copyright, policies, and formal references */
  legalName: 'Tip Top Welding LLC',
  phone: '(239) 209-4929',
  phoneRaw: '2392094929',
  email: 'tiptopwelding@outlook.com',
  streetAddress: '1218 SE 9th Terrace Unit B',
  city: 'Cape Coral',
  location: 'Cape Coral, FL',
  postalCode: '33990',
  fullAddress: '1218 SE 9th Terrace Unit B, Cape Coral, FL 33990',
  region: 'FL',
  country: 'US',
  domain: 'tiptopwelding.com',
  url: 'https://tiptopwelding.com',
  /** Homepage H1 */
  tagline: 'Custom Metalwork for Yachts & Coastal Homes',
  subheadline:
    'Custom stainless and aluminum work for luxury yachts and coastal homes. Yacht railings, architectural metalwork, and distinctive commissions, with attention to fit, line, and finish.',
  headerTagline: 'Mobile Welding & Custom Fabrication',
  heroServiceLine:
    'Yacht railwork · Architectural fabrication · Custom coastal designs',
  heroTags: [
    'Custom Fabrication',
    'Aluminum & Stainless Steel',
    'Yacht & Coastal Metalwork',
    'Southwest Florida',
  ] as const,
  themeColor: '#0a0a0a',
  logo: {
    useImage: true,
    dark: '/images/logo/logo-dark.png',
    light: '/images/logo/logo-light.png',
    src: '/images/logo/logo-dark.png',
    alt: 'Tip Top Welding LLC',
  },
} as const

/** Centralized contact links — use everywhere for consistency */
export const CONTACT = {
  tel: `tel:${BRAND.phoneRaw}`,
  sms: `sms:${BRAND.phoneRaw}?body=${encodeURIComponent(SMS_PREFILL)}`,
  mailto: `mailto:${BRAND.email}`,
} as const

/** @deprecated Use BRAND — kept for backward compatibility */
export const SITE = BRAND

export const CTAS = {
  primary: 'Request a Quote',
  secondary: 'Text Project Photos',
  phone: 'Call Now',
  quoteSubmit: 'Submit Quote Request',
  viewServices: 'View All Services',
  viewGallery: 'View Gallery',
  viewProjects: 'View Types of Work',
} as const

export const SERVICE_AREAS = [
  'Cape Coral',
  'Fort Myers',
  'Sanibel',
  'Captiva',
  'Bonita Springs',
  'Naples',
  'Marco Island',
  'Estero',
  'Southwest Florida',
] as const

export const FOOTER_SERVICES = [
  'Mobile Welding',
  'Marine Welding',
  'Aluminum Welding',
  'Stainless Steel Welding',
  'Custom Fabrication',
  'Pool Railings',
  'Nautical Metal Art',
] as const

// =============================================================================
// Store / online ordering — products, copy, checkout env mapping
// =============================================================================

import type { FaqItem } from '../data/models/faq'
import { BRAND, SERVICE_AREAS, VERIFIED_CLAIMS } from './brand'

export interface StoreProduct {
  id: string
  title: string
  price: number
  description: string
  bestFor: string
  includes: readonly string[]
  confirmationRequired: boolean
  series?: string
}

export const STORE_PAGE = {
  hero: {
    headline: 'Custom Marine Welding & Metalwork You Can Order Online',
    subheadline:
      'Choose a service, submit your details, and Tip Top Welding will confirm measurements, materials, timeline, and installation before work begins.',
    trustLine: `Cape Coral, FL • Southwest Florida • Stainless & Aluminum Welding • ${VERIFIED_CLAIMS.licenseInsuranceClaim}`,
  },
  ordering: {
    title: 'How Ordering Works',
    subtitle:
      'Online checkout starts your order — Tip Top Welding confirms every custom detail before fabrication or installation begins.',
    disclaimer:
      'Online payment does not replace final confirmation for custom work. Measurements, materials, site access, and scheduling are confirmed with Tip Top Welding before work is scheduled.',
    steps: [
      {
        step: 1,
        title: 'Choose a service or product',
        description: 'Pick the installation, finish, or fabricated piece that matches your project.',
      },
      {
        step: 2,
        title: 'Tip Top confirms details and measurements',
        description: 'We review your order, discuss layout, materials, and site conditions before work is approved.',
      },
      {
        step: 3,
        title: 'Fabrication and installation are scheduled',
        description: 'After confirmation, fabrication or on-site installation is scheduled for your Southwest Florida property.',
      },
    ] as const,
  },
  products: {
    title: 'Order Online',
    subtitle:
      'Fixed-price services and signature fabricated pieces from Tip Top Welding LLC. Custom marine and coastal metalwork built for Southwest Florida.',
    checkoutNotice:
      'Online checkout is available for standard items. Custom measurements, site conditions, and final scope are confirmed before work begins.',
  },
  conversionLine: 'Final details confirmed before fabrication or installation.',
  customQuote: {
    title: 'Need Something Custom?',
    description:
      'Boat work, dock hardware, railings, gates, brackets, repairs, and one-off fabrication jobs are quoted after reviewing the project details.',
    primaryCta: 'Request Custom Quote',
    secondaryCta: 'Call Tip Top Welding',
  },
  faq: {
    title: 'Store & Ordering FAQ',
    subtitle: 'Common questions about ordering welding and fabrication services online.',
  },
} as const

export const STORE_PRODUCTS: readonly StoreProduct[] = [
  {
    id: 'mailbox-installation-coastal',
    title: 'Mail Box Installation — Coastal Series',
    series: 'Coastal Series',
    price: 250,
    description:
      'Professional mailbox installation using coastal-grade aluminum post and embedment — ideal when your stand is ready and placement needs to be confirmed on site.',
    bestFor: 'Customers who already have a mailbox stand and need professional installation.',
    includes: [
      'On-site installation',
      '3" SCH 40 aluminum post',
      '18" ground embedment',
      'Final placement confirmation',
    ],
    confirmationRequired: true,
  },
  {
    id: 'pool-rail-installation-nautical',
    title: 'Pool Rail Installation — Nautical Series',
    series: 'Nautical Series',
    price: 500,
    description:
      'On-site pool rail installation with nautilus or dolphin design options in 316 stainless — placement and mounting method confirmed before install day.',
    bestFor: 'Pool owners adding a custom stainless rail.',
    includes: [
      'Core-drilled or flange-mounted installation',
      'Nautilus or Dolphin design options',
      '316 stainless steel rail installation',
      'Placement confirmation',
    ],
    confirmationRequired: true,
  },
  {
    id: 'powder-coat',
    title: 'Powder Coat',
    price: 250,
    description:
      'Marine-grade powder coating in coastal-ready colors — prep and coating coordination for durable finish on qualifying metalwork.',
    bestFor: 'Customers who want a durable coastal finish.',
    includes: [
      'Marine-grade powder coating',
      'Basic colors: black, white, or bronze',
      'Finish prep and coating coordination',
    ],
    confirmationRequired: false,
  },
  {
    id: 'dolphin-pool-rail',
    title: 'Dolphin Pool Rail',
    price: 3500,
    description:
      'Signature dolphin pool rail fabricated in polished 316L stainless round tube — designed for waterfront pools and coastal properties.',
    bestFor: 'Waterfront homes, pools, and coastal properties.',
    includes: [
      '1-1/4" polished 316L stainless steel round tube',
      'Dolphin design',
      'Fabrication',
      'Installation confirmation required',
    ],
    confirmationRequired: true,
  },
  {
    id: 'nautilus-pool-rail',
    title: 'Nautilus Pool Rail',
    price: 3500,
    description:
      'Nautilus pool rail in polished 316L stainless — a nautical centerpiece for pool decks and custom waterfront layouts.',
    bestFor: 'Nautical pool areas and custom waterfront designs.',
    includes: [
      '1-1/4" polished 316L stainless steel round tube',
      'Nautilus design',
      'Fabrication',
      'Installation confirmation required',
    ],
    confirmationRequired: true,
  },
  {
    id: 'dolphin-mailbox-stand',
    title: 'Dolphin Mail Box Stand',
    price: 2800,
    description:
      'Handcrafted leaping dolphin mailbox stand in aluminum pipe with scroll-style eye detail — built for standout coastal curb appeal.',
    bestFor: 'Custom coastal curb appeal.',
    includes: [
      'Handcrafted leaping dolphin design',
      'Aluminum pipe construction',
      'Scroll-style eye detail',
      'Installation confirmation required',
    ],
    confirmationRequired: true,
  },
  {
    id: 'burrowing-owl-mailbox-stand',
    title: 'Burrowing Owl Mailbox Stand',
    price: 3200,
    description:
      'Custom welded aluminum mailbox stand featuring a burrowing owl design with scroll eyes and flat bar detail — unique Southwest Florida character.',
    bestFor: 'Unique Southwest Florida curb appeal.',
    includes: [
      'Custom welded aluminum mailbox stand',
      'Burrowing owl design',
      'Scroll eyes and flat bar details',
      'Installation confirmation required',
    ],
    confirmationRequired: true,
  },
] as const

/** Vite env keys: VITE_STORE_CHECKOUT_<PRODUCT_ID_UPPER_SNAKE> */
export const CHECKOUT_ENV_PREFIX = 'VITE_STORE_CHECKOUT_' as const

/** Product id → env var name (kept in sync with STORE_PRODUCTS) */
export const STORE_CHECKOUT_ENV_KEYS: Record<StoreProduct['id'], string> = Object.fromEntries(
  STORE_PRODUCTS.map((product) => [product.id, productIdToEnvKey(product.id)]),
) as Record<StoreProduct['id'], string>

export function productIdToEnvKey(productId: string): string {
  return `${CHECKOUT_ENV_PREFIX}${productId.toUpperCase().replace(/-/g, '_')}`
}

function isValidCheckoutUrl(url: string): boolean {
  try {
    const parsed = new URL(url)
    return parsed.protocol === 'https:' || parsed.protocol === 'http:'
  } catch {
    return false
  }
}

/** Safe at runtime — never throws; returns null when unset or invalid */
export function getStoreCheckoutUrl(productId: string): string | null {
  try {
    const id = productId?.trim()
    if (!id) return null

    const envKey = productIdToEnvKey(id)
    const raw = import.meta.env[envKey as keyof ImportMetaEnv]
    if (typeof raw !== 'string') return null

    const url = raw.trim()
    if (!url || !isValidCheckoutUrl(url)) return null

    return url
  } catch {
    return null
  }
}

export function isStoreCheckoutConfigured(productId: string): boolean {
  return getStoreCheckoutUrl(productId) !== null
}

export function formatStorePrice(amount: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(amount)
}

export function getStoreProductById(productId: string): StoreProduct | undefined {
  return STORE_PRODUCTS.find((product) => product.id === productId)
}

export function getStoreQuoteUrl(productId: string): string {
  return `/contact?product=${encodeURIComponent(productId)}#quote-form`
}

const serviceAreaSummary = SERVICE_AREAS.slice(0, 6).join(', ') + ', and surrounding Southwest Florida communities.'

export const STORE_FAQ_ITEMS: readonly FaqItem[] = [
  {
    id: 'store-buy-online',
    category: 'pricing',
    question: 'Can I buy custom welding work online?',
    answer:
      'You can start fixed-price services and signature fabricated pieces online through the Tip Top Welding store. Fully custom boat work, dock hardware, repairs, and one-off fabrication are quoted after project details and photos are reviewed.',
  },
  {
    id: 'store-installation-included',
    category: 'pricing',
    question: 'Do prices include installation?',
    answer:
      'Installation is included where listed in the product details — such as mailbox installation and pool rail installation items. Fabricated pieces like pool rails and mailbox stands include fabrication; on-site installation is scheduled after placement and measurements are confirmed with Tip Top Welding.',
  },
  {
    id: 'store-measurements',
    category: 'process',
    question: 'Do you confirm measurements before fabrication?',
    answer:
      'Yes. Custom metalwork requires confirmation of measurements, materials, mounting method, and site access before fabrication or installation is scheduled. Online payment reserves your order — final details are confirmed with Tip Top Welding before work begins.',
  },
  {
    id: 'store-service-area',
    category: 'general',
    question: 'What areas do you serve?',
    answer: `Tip Top Welding LLC is based in ${BRAND.location} and serves ${serviceAreaSummary}`,
  },
  {
    id: 'store-materials',
    category: 'services',
    question: 'What materials do you work with?',
    answer:
      'Tip Top Welding specializes in aluminum and stainless steel welding and fabrication for marine, pool, dock, and coastal metalwork — including 316 and 316L stainless for pool and waterfront applications.',
  },
  {
    id: 'store-custom-design',
    category: 'services',
    question: 'Can I request a custom design?',
    answer:
      'Yes. Use the custom quote request for boat work, dock hardware, railings, gates, brackets, repairs, and one-off fabrication. Send photos and layout details so Tip Top Welding can scope materials, timeline, and pricing.',
  },
] as const

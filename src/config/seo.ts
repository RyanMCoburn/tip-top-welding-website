import { BRAND } from './brand'
import { getServiceBySlug } from '../data/services'

export interface PageMeta {
  title: string
  description: string
  path: string
  ogType?: 'website' | 'article'
  noindex?: boolean
}

const DEFAULT_DESCRIPTION =
  'Mobile welding and custom fabrication in Southwest Florida. Aluminum and stainless steel welding for boats, bow rails, pontoons, skeg repairs, pool railings, docks, marinas, and custom metal projects.'

export const DEFAULT_SEO: PageMeta = {
  title: `${BRAND.legalName} | Mobile Welding & Custom Fabrication in Southwest Florida`,
  description: DEFAULT_DESCRIPTION,
  path: '/',
}

function page(title: string, description: string, path: string, noindex = false): PageMeta {
  return {
    title: `${title} | ${BRAND.legalName}`,
    description,
    path,
    noindex,
  }
}

/** Static route metadata — add an entry for every public route */
export const ROUTE_SEO: Record<string, PageMeta> = {
  '/': DEFAULT_SEO,
  '/services': page(
    'Mobile Welding & Custom Fabrication Services',
    'Mobile welding, marine welding, aluminum and stainless fabrication, bow rail repairs, pontoon and skeg repairs, pool railings, dock work, and custom metal projects in Southwest Florida.',
    '/services',
  ),
  '/projects': page(
    'Types of Work',
    'Types of welding and fabrication Tip Top Welding handles — bow rails, pontoons, skegs, pool railings, decorative work, and custom aluminum and stainless projects in Southwest Florida.',
    '/projects',
  ),
  '/gallery': page(
    'Project Gallery',
    'Tip Top Welding project gallery — real photos coming soon. Mobile welding and custom fabrication in Cape Coral and Southwest Florida.',
    '/gallery',
  ),
  '/store': page(
    'Store | Order Marine Welding & Custom Metalwork Online',
    'Shop mailbox installation, pool rails, powder coating, and signature dolphin and nautilus metalwork from Tip Top Welding LLC. Cape Coral and Southwest Florida — measurements confirmed before fabrication or installation.',
    '/store',
  ),
  '/about': page(
    'About Us',
    'Mobile welding and custom fabrication in Cape Coral — aluminum and stainless work for boats, docks, marinas, and waterfront properties across Southwest Florida.',
    '/about',
  ),
  '/contact': page(
    'Contact & Quote Request',
    'Contact Tip Top Welding for mobile welding and fabrication quotes. Call, text project photos, or email — Cape Coral and Southwest Florida.',
    '/contact',
  ),
  '/faq': page(
    'Frequently Asked Questions',
    'FAQ about mobile welding, marine fabrication, aluminum and stainless work, quoting, and on-site service in Cape Coral and Southwest Florida.',
    '/faq',
  ),
  '/privacy': page('Privacy Policy', `Privacy policy for ${BRAND.legalName} — ${BRAND.domain}.`, '/privacy', true),
  '/terms': page('Terms of Service', `Terms of service for ${BRAND.legalName} — ${BRAND.domain}.`, '/terms', true),
}

export function getRouteMeta(pathname: string): PageMeta {
  if (pathname.startsWith('/services/')) {
    const slug = pathname.replace('/services/', '').split('/')[0]
    const service = getServiceBySlug(slug)
    if (service) {
      return {
        title: service.seo.title,
        description: service.seo.description,
        path: `/services/${service.slug}`,
      }
    }
  }

  const normalized = pathname.replace(/\/$/, '') || '/'
  return ROUTE_SEO[normalized] ?? {
    title: `Page Not Found | ${BRAND.legalName}`,
    description: DEFAULT_DESCRIPTION,
    path: normalized,
    noindex: true,
  }
}

export function absoluteUrl(path: string): string {
  return `${BRAND.url}${path === '/' ? '' : path}`
}

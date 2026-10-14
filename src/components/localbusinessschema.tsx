import { BRAND } from '../config/brand'
import { IMAGE_PATHS } from '../data/images'

/** Shared LocalBusiness description — matches homepage SEO */
export const LOCAL_BUSINESS_DESCRIPTION =
  'Mobile aluminum and stainless TIG welding, yacht and marina welding, bow rail repairs, pontoon repairs, skeg repairs, fuel tank work, pool railings, gates, stairs, decorative rails, and custom coastal metal art.'

export default function LocalBusinessSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: BRAND.legalName,
    url: BRAND.url,
    telephone: '+1-239-209-4929',
    email: BRAND.email,
    address: {
      '@type': 'PostalAddress',
      addressLocality: BRAND.city,
      addressRegion: BRAND.region,
      addressCountry: BRAND.country,
    },
    areaServed: ['Cape Coral FL', 'Fort Myers FL', 'Southwest Florida'],
    priceRange: '$$$',
    description: LOCAL_BUSINESS_DESCRIPTION,
    image: `${BRAND.url}${IMAGE_PATHS.hero.marinaHero}`,
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

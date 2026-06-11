import { BRAND, DEMO_MODE, SERVICE_AREAS } from '../config/brand'
import { SERVICES } from '../data/services'

export default function LocalBusinessSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${BRAND.url}/#business`,
    name: BRAND.legalName,
    description: BRAND.subheadline,
    url: BRAND.url,
    telephone: BRAND.phone,
    email: BRAND.email,
    image: `${BRAND.url}/apple-touch-icon.png`,
    areaServed: SERVICE_AREAS.map((area) => ({
      '@type': 'City',
      name: area,
      containedInPlace: { '@type': 'State', name: 'Florida' },
    })),
    address: BRAND.streetAddress
      ? {
          '@type': 'PostalAddress',
          streetAddress: BRAND.streetAddress,
          addressLocality: BRAND.city,
          addressRegion: BRAND.region,
          postalCode: BRAND.postalCode ?? undefined,
          addressCountry: BRAND.country,
        }
      : {
          '@type': 'PostalAddress',
          addressLocality: BRAND.city,
          addressRegion: BRAND.region,
          addressCountry: BRAND.country,
        },
    geo: undefined as undefined,
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Mobile Welding & Custom Fabrication',
      itemListElement: SERVICES.map((service) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: service.title,
          description: service.description,
          url: `${BRAND.url}/services/${service.slug}`,
        },
      })),
    },
    ...(DEMO_MODE
      ? { additionalProperty: { '@type': 'PropertyValue', name: 'demoMode', value: 'true' } }
      : {}),
  }

  return (
    <script
      type="application/ld+json"
      // TODO: Add geo coordinates when confirmed
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

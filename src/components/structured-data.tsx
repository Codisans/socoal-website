/**
 * Structured Data (JSON-LD) component for SEO
 * This helps search engines understand your business information better
 */

export interface StructuredDataProps {
  type: 'organization' | 'website' | 'breadcrumb'
  data?: Record<string, unknown>
}

export function StructuredData({ type, data }: StructuredDataProps) {
  let structuredData: Record<string, unknown> = {}

  switch (type) {
    case 'organization':
      structuredData = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'Socoal SpA',
        url: 'https://www.socoalchile.cl',
        logo: 'https://www.socoalchile.cl/socoal-logo.png',
        description:
          'Más de 70 años brindando soluciones en servicios industriales, mineros y gestión integral de residuos en Chile.',
        address: {
          '@type': 'PostalAddress',
          addressCountry: 'CL',
          addressRegion: 'Antofagasta',
        },
        sameAs: [
          // Add your social media URLs here
          // 'https://www.facebook.com/socoal',
          // 'https://www.linkedin.com/company/socoal',
        ],
        ...data,
      }
      break

    case 'website':
      structuredData = {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'Socoal',
        url: 'https://www.socoalchile.cl',
        description:
          'Más de 70 años brindando soluciones en servicios industriales, mineros y gestión integral de residuos en Chile.',
        ...data,
      }
      break

    case 'breadcrumb':
      structuredData = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        ...data,
      }
      break
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}

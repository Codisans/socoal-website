import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.socoalchile.cl' // Update with your actual domain

  const routes = [
    '',
    '/nosotros',
    '/servicios',
    '/comunidad',
    '/contacto',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  return routes
}


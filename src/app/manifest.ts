import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Socoal SpA - Forjados en sol y cobre',
    short_name: 'Socoal',
    description:
      'Más de 70 años brindando soluciones en servicios industriales, mineros y gestión integral de residuos en Chile.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#1a1a1a',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}


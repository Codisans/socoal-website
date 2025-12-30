import { SubNav } from '@/components/sub-nav'
import '@/styles/tailwind.css'
import type { Metadata } from 'next'
import { League_Spartan } from 'next/font/google'
import localFont from 'next/font/local'

// Load League Spartan from Google Fonts
const leagueSpartan = League_Spartan({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-league-spartan',
  display: 'swap',
})

// Load Gidole as a local font (not available on Google Fonts)
// Note: You'll need to add Gidole font files to your public/fonts directory
// If Gidole is not critical, consider using an alternative from Google Fonts
const gidole = localFont({
  src: [
    {
      path: '../../public/fonts/Gidole-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-gidole',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.socoalchile.cl'), // Update with your actual domain
  title: {
    template: '%s - Socoal',
    default: 'Socoal - Forjados en sol y cobre',
  },
  description:
    'Más de 70 años brindando soluciones en servicios industriales, mineros y gestión integral de residuos en Chile. Expertos en la industria minera y municipal.',
  keywords: [
    'servicios industriales',
    'servicios mineros',
    'gestión de residuos',
    'aseo industrial',
    'minería Chile',
    'servicios municipales',
    'Socoal',
    'relleno sanitario',
    'residuos peligrosos',
  ],
  authors: [{ name: 'Socoal SpA' }],
  creator: 'Socoal SpA',
  publisher: 'Socoal SpA',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'es_CL',
    url: 'https://www.socoalchile.cl',
    siteName: 'Socoal',
    title: 'Socoal - Forjados en sol y cobre',
    description:
      'Más de 70 años brindando soluciones en servicios industriales, mineros y gestión integral de residuos en Chile.',
    images: [
      {
        url: '/hero-cover.webp',
        width: 1200,
        height: 630,
        alt: 'Socoal - Servicios Industriales y Mineros',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Socoal - Forjados en sol y cobre',
    description:
      'Más de 70 años brindando soluciones en servicios industriales, mineros y gestión integral de residuos en Chile.',
    images: ['/hero-cover.webp'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add your verification codes when available
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
    // bing: 'your-bing-verification-code',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${leagueSpartan.variable} ${gidole.variable}`}>
      <body className="text-gray-950 antialiased">
        <SubNav />
        {children}
      </body>
    </html>
  )
}

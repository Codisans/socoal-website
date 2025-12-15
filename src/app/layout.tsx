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
  title: {
    template: '%s - Socoal',
    default: 'Socoal - Forjados en sol y cobre',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${leagueSpartan.variable} ${gidole.variable}`}>
      <body className="text-gray-950 antialiased">{children}</body>
    </html>
  )
}

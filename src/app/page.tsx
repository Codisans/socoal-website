import { ContactForm } from '@/blocks/ContactForm'
import { Header } from '@/blocks/Header'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { GradientBackground } from '@/components/gradient'
import LeafletMap from '@/components/LeafletMap'
import { Navbar } from '@/components/navbar'
import { Subheading } from '@/components/text'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  description:
    'Radiant helps you sell more by revealing sensitive information about your customers.',
}

export default function Home() {
  return (
    <main className="overflow-hidden">
      <GradientBackground />
      <Container>
        <Navbar />
      </Container>
      <Header
        title="Estamos en mantenimiento"
        description="Por favor, contactanos para más información."
      />
      <Container className="my-24">
        <ContactForm className="max-w-3xl" />
      </Container>

      <Container className="my-24">
        <div className="flex w-full flex-row gap-4 sm:gap-8">
          <LeafletMap />
          <div className="w-max">
            <Subheading>Dirección</Subheading>
            <p className="mt-8">
              Camino Chiu-Chiu 276 Lote B, <br />
              Puerto Seco, <br />
              Calama
            </p>
          </div>
        </div>
      </Container>
      <Footer />
    </main>
  )
}

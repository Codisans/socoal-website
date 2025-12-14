import { ContactForm } from '@/blocks/ContactForm'
import { Header } from '@/blocks/Header'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { GradientBackground } from '@/components/gradient'
import { Navbar } from '@/components/navbar'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contacto',
  description: 'Contactanos para más información.',
}

export default function Login() {
  return (
    <main className="overflow-hidden">
      <GradientBackground />
      <Container>
        <Navbar />
      </Container>
      <Header
        title="Contacto"
        description="Contactanos para más información."
      />
      <Container className="my-24">
        <ContactForm className="max-w-3xl" />
      </Container>
      <Footer />
    </main>
  )
}

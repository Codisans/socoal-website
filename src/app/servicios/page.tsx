import { Header } from '@/blocks/Header'
import { ProfileList } from '@/blocks/ProfileList'
import { ServiceCards } from '@/blocks/ServiceCards'
import { Testimonial } from '@/blocks/Testimonial'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { GradientBackground } from '@/components/gradient'
import { Navbar } from '@/components/navbar'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Servicios',
  description: 'Expertos en servicios industriales mineros y municipales.',
}

const services = [
  {
    name: 'Servicios Industriales y Mineros',
    slug: 'industriales-mineros',
    description:
      'Enfocados en operaciones dentro de faenas mineras e instalaciones industriales.',
    image: '/servicio-mineros.webp',
    items: [
      'Aseo industrial tecnificado',
      'Carguío de cargas varias en la gran minería',
      'Montaje industrial',
      'Mantención y reparación de bodegas en la minería',
      'Construcción y operación de relleno de residuos peligrosos',
      'Manejo y retiro de residuos peligrosos',
      'Perforación',
    ],
  },
  {
    name: 'Gestión Integral de Residuos',
    slug: 'gestion-residuos',
    description:
      'Servicios asociados al manejo, transporte y disposición final de residuos.',
    image: '/servicio-residuos.webp',
    items: [
      'Construcción y operación de rellenos sanitarios',
      'Recolección y transporte de residuos domiciliarios',
      'Recolección y transporte de residuos no peligrosos',
    ],
  },
  {
    name: 'Servicios de Limpieza Urbana y Especializada',
    slug: 'limpieza-urbana',
    image: '/servicio-limpieza.webp',
    description:
      'Orientados a espacios públicos y entornos urbanos o industriales.',
    items: ['Barrido de calles especializado'],
  },
]

export default async function Servicios() {
  return (
    <main className="overflow-hidden">
      <GradientBackground />
      <Container>
        <Navbar />
      </Container>
      <Header
        title="Servicios"
        description="Generamos valor sostenible en entornos exigentes."
      />
      <ServiceCards services={services} />
      <ProfileList
        title="Compromiso profesional"
        subheading="Certificaciones"
        description="La seguridad es una prioridad fundamental para nosotros, implementamos estrictos protocolos y estándares de seguridad en todas nuestras operaciones, garantizando un ambiente de trabajo seguro para todos."
        items={[
          {
            name: 'ISO 9001',
            description: 'Certificación de calidad',
            img: '/iso//iso-9001.png',
          },
          {
            name: 'ISO 14001',
            description: 'Certificación de medio ambiente',
            img: '/iso/iso-14001.png',
          },
          {
            name: 'ISO 45001',
            description: 'Certificación de seguridad',
            img: '/iso/iso-45001.png',
          },
        ]}
      />
      <Testimonial
        className="mt-36 lg:mt-52"
        image="/tito-alvarez.webp"
        quote="No se asombre de nuestro éxito si no conoce el esfuerzo, el sacrificio y el trabajo bien hecho que hay detrás de esta empresa"
        name="Tito Alvarez"
        title="Fundador de SOCOAL"
      />
      <Footer />
    </main>
  )
}

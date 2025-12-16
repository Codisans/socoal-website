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
    image: '/mining-3.jpg',
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
    image: '/mining-2.jpg',
    items: [
      'Construcción y operación de rellenos sanitarios',
      'Recolección y transporte de residuos domiciliarios',
      'Recolección y transporte de residuos no peligrosos',
    ],
  },
  {
    name: 'Servicios de Limpieza Urbana y Especializada',
    slug: 'limpieza-urbana',
    image: '/mining-1.jpg',
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
      <Header title="Servicios" description="Servicios para tu negocio." />
      <ServiceCards services={services} />
      <ProfileList
        title="Compromiso profesional"
        subheading="Certificaciones"
        description="La seguridad de las personas es una prioridad fundamental para la empresa, que implementa estrictos protocolos y estándares de seguridad en todas sus operaciones, garantizando un ambiente de trabajo seguro para todos. Se encuentran certificados con ISO: 45001 Salud y seguridad en el trabajo, 14001 medio ambiente y 16001 calidad."
        items={[
          {
            name: 'ISO 9001',
            description: 'Certificación de calidad',
            img: '/company/iso-9001.png',
          },
          {
            name: 'ISO 14001',
            description: 'Certificación de medio ambiente',
            img: '/company/iso-14001.png',
          },
          {
            name: 'ISO 45001',
            description: 'Certificación de seguridad',
            img: '/company/iso-45001.png',
          },
        ]}
      />
      <Testimonial
        className="mt-36 lg:mt-52"
        image="/company/1.png"
        quote="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."
        name="Tito Alvarez"
        title="Fundador de SOCOAL"
      />
      <Footer />
    </main>
  )
}

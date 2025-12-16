import { CardCarousel } from '@/blocks/CardCarousel'
import { DarkBentoSection } from '@/blocks/DarkBentoSection'
import { Hero } from '@/blocks/Hero'
import { TextAndVideo } from '@/blocks/TextAndVideo'
import { BentoCard } from '@/components/bento-card'
import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { LogoCloud } from '@/components/logo-cloud'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  description:
    'Radiant helps you sell more by revealing sensitive information about your customers.',
}

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Hero
        title={
          <>
            Mas que un proveedor,
            <br />
            un socio estratégico.
          </>
        }
        description="Transformamos desafíos operativos en resultados sostenibles."
        image="/office.webp"
        buttons={
          <>
            <Button href="/contacto">Contáctanos</Button>
            <Button variant="secondary" href="/servicios">
              Nuestros servicios
            </Button>
          </>
        }
      />
      <main>
        <Container className="mt-10">
          <LogoCloud />
        </Container>
        <div className="bg-linear-to-b from-white from-50% to-gray-100 py-32">
          <TextAndVideo
            heading="Más de 70 Años Brindando Soluciones"
            subheading="Presentación Corporativa"
            description="Conoce Socoal, expertos en prestaciones de servicios en la Industria Minera y Municipal."
            body={
              <p className="mt-8 flex gap-4">
                <Button variant="primary" href="/nosotros">
                  Nosotros
                </Button>
                <Button variant="secondary" href="/servicios">
                  Servicios
                </Button>
              </p>
            }
            posterImage="/mining-1.jpg"
            videoId="-9QKCC8pFyU"
          />
        </div>
        <DarkBentoSection
          title="Socio Estratégico"
          subheading="Minería"
          rows={1}
        >
          <BentoCard
            dark
            eyebrow="Seguridad"
            title="Cultura de prevención"
            description="Aplicamos estrictos protocolos de prevención y promovemos una cultura de seguridad en toda la organización."
            graphic={
              <div className="h-80 bg-[url(/mining-1.jpg)] bg-cover bg-center" />
            }
            fade={['bottom']}
            className="lg:col-span-2 lg:rounded-bl-4xl"
          />
          <BentoCard
            dark
            eyebrow="Eficiencia"
            title="Optimización continua"
            description="Optimizamos permanentemente procesos y recursos para garantizar resultados oportunos y eficientes."
            graphic={
              <div className="absolute inset-0 bg-[url(/mining-1.jpg)] bg-cover bg-center" />
            }
            fade={['bottom']}
            className="lg:col-span-2"
          />
          <BentoCard
            dark
            eyebrow="Eficacia"
            title="Cumplimiento riguroso"
            description="Cumplimos rigurosamente los requisitos solicitados por nuestros clientes."
            graphic={
              <div className="absolute inset-0 bg-[url(/mining-1.jpg)] bg-cover bg-center" />
            }
            fade={['bottom']}
            className="max-lg:rounded-b-4xl lg:col-span-2 lg:rounded-br-4xl"
          />
        </DarkBentoSection>

        <CardCarousel
          heading="Conoce nuestros servicios"
          subheading="Servicios"
          callToAction={{
            description: 'Descubre más sobre nuestros servicios',
            linkText: 'Ver más',
            linkHref: '/servicios',
          }}
          cards={[
            {
              img: '/mining-1.jpg',
              eyebrow: 'Servicios Industriales y Mineros',
              title: 'Aseo industrial tecnificado',
            },
            {
              img: '/mining-2.jpg',
              eyebrow: 'Servicios Industriales y Mineros',
              title: 'Carguío de cargas varias en la gran minería',
            },
            {
              img: '/mining-3.jpg',
              eyebrow: 'Servicios Industriales y Mineros',
              title: 'Montaje industrial',
            },
            {
              img: '/mining-4.jpg',
              eyebrow: 'Servicios Industriales y Mineros',
              title: 'Mantención y reparación de bodegas en la minería',
            },
            {
              img: '/mining-1.jpg',
              eyebrow: 'Servicios Industriales y Mineros',
              title:
                'Construcción y operación de relleno de residuos peligrosos',
            },
            {
              img: '/mining-2.jpg',
              eyebrow: 'Servicios Industriales y Mineros',
              title: 'Manejo y retiro de residuos peligrosos',
            },
            {
              img: '/mining-3.jpg',
              eyebrow: 'Servicios Industriales y Mineros',
              title: 'Perforación',
            },
            {
              img: '/mining-4.jpg',
              eyebrow: 'Gestión Integral de Residuos',
              title: 'Construcción y operación de rellenos sanitarios',
            },
            {
              img: '/mining-1.jpg',
              eyebrow: 'Gestión Integral de Residuos',
              title: 'Recolección y transporte de residuos domiciliarios',
            },
            {
              img: '/mining-2.jpg',
              eyebrow: 'Gestión Integral de Residuos',
              title: 'Recolección y transporte de residuos no peligrosos',
            },
            {
              img: '/mining-3.jpg',
              eyebrow: 'Servicios de Limpieza Urbana y Especializada',
              title: 'Barrido de calles especializado',
            },
          ]}
        />
      </main>
      <Footer />
    </div>
  )
}

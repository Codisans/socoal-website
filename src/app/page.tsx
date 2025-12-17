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
  description: 'Transformamos desafíos operativos en resultados sostenibles.',
}

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Hero
        title={
          <>
            Más que un proveedor,
            <br />
            un socio estratégico.
          </>
        }
        description="Transformamos desafíos operativos en resultados sostenibles."
        image="/hero-cover.webp"
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
            posterImage="/nosotros-2.webp"
            videoId="-9QKCC8pFyU"
          />
        </div>
        <DarkBentoSection
          title="Excelencia Operativa"
          subheading="Socoal SpA"
          rows={1}
        >
          <BentoCard
            dark
            eyebrow="Seguridad"
            title="Cultura de prevención"
            description="Aplicamos estrictos protocolos de prevención y promovemos una cultura de seguridad en toda la organización."
            graphic={
              <div className="h-80 bg-[url(/seguridad.webp)] bg-cover bg-center" />
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
              <div className="absolute inset-0 bg-[url(/eficiencia.webp)] bg-cover bg-center" />
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
              <div className="absolute inset-0 bg-[url(/eficacia.webp)] bg-cover bg-center" />
            }
            fade={['bottom']}
            className="max-lg:rounded-b-4xl lg:col-span-2 lg:rounded-br-4xl"
          />
        </DarkBentoSection>

        <CardCarousel
          heading="Conoce nuestros servicios"
          subheading="Servicios"
          callToAction={{
            href: '/servicios',
            text: 'Ver más',
          }}
          cards={[
            {
              img: '/servicios/aseo.webp',
              eyebrow: 'Servicios Industriales y Mineros',
              title: 'Aseo Industrial Tecnificado',
            },
            {
              img: '/servicios/carga.webp',
              eyebrow: 'Servicios Industriales y Mineros',
              title: 'Carguío de Cargas Varias en la Gran Minería',
            },
            {
              img: '/servicios/residuos-domiciliarios.webp',
              eyebrow: 'Gestión Integral de Residuos',
              title: 'Recolección y Transporte de Residuos Domiciliarios',
              description: '+45 años de serivicio continuo',
            },
            {
              img: '/servicios/relleno-sanitario.webp',
              eyebrow: 'Gestión Integral de Residuos',
              title: 'Construcción y Operación de Rellenos Sanitarios',
              description: '+25 años de serivicio continuo',
            },
            {
              img: '/servicios/barrido.webp',
              eyebrow: 'Servicios de Limpieza Urbana y Especializada',
              title: 'Barrido de Calles Especializado',
            },
            {
              img: '/servicios/montaje.webp',
              eyebrow: 'Servicios Industriales y Mineros',
              title: 'Montaje Industrial',
            },
            {
              img: '/servicios/bodega.webp',
              eyebrow: 'Servicios Industriales y Mineros',
              title: 'Mantención y Reparación de Bodegas en la Minería',
            },
            {
              img: '/servicios/residuos-peligrosos-3.webp',
              eyebrow: 'Servicios Industriales y Mineros',
              title:
                'Construcción y Operación de Relleno de Residuos Peligrosos',
            },
            {
              img: '/servicios/residuos-peligrosos-2.webp',
              eyebrow: 'Servicios Industriales y Mineros',
              title: 'Manejo y Retiro de Residuos Peligrosos',
            },
            {
              img: '/servicios/perforacion.webp',
              eyebrow: 'Servicios Industriales y Mineros',
              title: 'Perforación',
            },
          ]}
        />
      </main>
      <Footer />
    </div>
  )
}

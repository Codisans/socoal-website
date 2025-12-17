import { TwoColumn } from '@/blocks/TwoColumn'
import { AnimatedNumber } from '@/components/animated-number'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { GradientBackground } from '@/components/gradient'
import { Navbar } from '@/components/navbar'
import { Heading, Lead, Subheading } from '@/components/text'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Nosotros',
  description: 'Conoce a nuestra empresa y a nuestro equipo de trabajo.',
}

function Header() {
  return (
    <Container className="mt-16">
      <Heading as="h1">Quienes somos?</Heading>
      <Lead className="mt-6 max-w-3xl">
        Socoal Spa es una empresa familiar calameña fundada en 1954 por don
        Héctor “Tito” Álvarez, con el objetivo principal de satisfacer las
        necesidades de sus clientes, apoyando los procesos de la gran minería
        chilena y las municipalidades del país.
      </Lead>

      <section className="mt-16 grid grid-cols-1 lg:grid-cols-2 lg:gap-12">
        <div className="max-w-lg">
          <p className="mt-8 text-lg text-gray-600">
            Actualmente, Socoal es liderada por la segunda y tercera generación
            de la familia, comprometidas con un futuro más limpio y sostenible
            para nuestra ciudad y trabajando activamente en la preservación del
            bienestar de las futuras generaciones.
          </p>
        </div>
        <div className="pt-20 lg:row-span-2 lg:-mr-16 xl:mr-auto">
          <div className="-mx-8 grid grid-cols-2 gap-4 sm:-mx-16 sm:grid-cols-4 lg:mx-0 lg:grid-cols-2 lg:gap-4 xl:gap-8">
            <div className="aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10">
              <img
                alt="Tito Alvarez"
                src="/tito-alvarez.webp"
                className="block size-full object-cover"
              />
            </div>
            <div className="-mt-8 aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10 lg:-mt-32">
              <img
                alt="Personas Socoal"
                src="/nosotros/2.webp"
                className="block size-full object-cover"
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10">
              <img
                alt="Personas Socoal"
                src="/nosotros/3.webp"
                className="block size-full object-cover"
              />
            </div>
            <div className="-mt-8 aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10 lg:-mt-32">
              <img
                alt="Personas Socoal"
                src="/nosotros/4.webp"
                className="block size-full object-cover"
              />
            </div>
          </div>
        </div>
        <div className="max-lg:mt-16 lg:col-span-1">
          <Subheading>Nuestros números</Subheading>
          <hr className="mt-6 border-t border-gray-200" />
          <dl className="mt-6 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
            <div className="flex flex-col gap-y-2 border-b border-dotted border-gray-200 pb-4">
              <dt className="text-sm/6 text-gray-600">Equipos propios</dt>
              <dd className="order-first font-serif text-6xl font-medium tracking-tight text-dark-blue">
                +<AnimatedNumber start={1} end={100} />
              </dd>
            </div>
            <div className="flex flex-col gap-y-2 border-b border-dotted border-gray-200 pb-4">
              <dt className="text-sm/6 text-gray-600">Colaboradores</dt>
              <dd className="order-first font-serif text-6xl font-medium tracking-tight text-dark-blue">
                +<AnimatedNumber start={100} end={500} />
              </dd>
            </div>
            <div className="flex flex-col gap-y-2 max-sm:border-b max-sm:border-dotted max-sm:border-gray-200 max-sm:pb-4">
              <dt className="text-sm/6 text-gray-600">Años de experiencia</dt>
              <dd className="order-first font-serif text-6xl font-medium tracking-tight text-dark-blue">
                +<AnimatedNumber start={5} end={70} />
              </dd>
            </div>
            {/* <div className="flex flex-col gap-y-2">
              <dt className="text-sm/6 text-gray-600">Leads Generated</dt>
              <dd className="order-first text-6xl font-medium tracking-tight text-dark-blue">
                <AnimatedNumber start={150} end={200} />M
              </dd>
            </div> */}
          </dl>
        </div>
      </section>
    </Container>
  )
}

export default function Nosotros() {
  return (
    <main className="overflow-hidden">
      <GradientBackground />
      <Container>
        <Navbar />
      </Container>
      <Header />
      <TwoColumn
        className="mb-32"
        title="Cultura y valores"
        items={[
          {
            title: 'Misión',
            description:
              'Mantener y fortalecer nuestros valores familiares a través del profesionalismo de nuestro equipo, entregando servicios de excelencia y soluciones integrales que respondan a las necesidades específicas de cada cliente. Operamos cumpliendo los más altos estándares de calidad, seguridad y responsabilidad social, contribuyendo al desarrollo sostenible y al progreso de las comunidades donde trabajamos.',
            // image: '/company/5.png',
          },
          {
            title: 'Visión',
            description:
              'Ser una empresa familiar líder, competitiva y sostenible, destacándonos en la industria minera y en la gestión de residuos municipales. Aspiramos a consolidarnos como el socio estratégico preferido por nuestros clientes, entregando confianza, eficiencia y resultados de excelencia.',
            // image: '/company/1.png',
          },
        ]}
      />
      <Container>
        <img
          src="/panoramic.webp"
          alt="Socoal"
          className="w-full rounded-xl object-cover shadow-xl outline-1 -outline-offset-1 outline-black/10"
        />
      </Container>
      <Footer />
    </main>
  )
}

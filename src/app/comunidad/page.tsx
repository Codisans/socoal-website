import { TextAndImage } from '@/blocks/TextAndImage'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { GradientBackground } from '@/components/gradient'
import { Navbar } from '@/components/navbar'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Comunidad',
  description: 'Conoce a nuestra comunidad de clientes y colaboradores.',
}

export default function Comunidad() {
  return (
    <main className="overflow-hidden">
      <GradientBackground />
      <Container>
        <Navbar />
      </Container>
      {/* <Header
        title="Comunidad"
        description="Para la familia Socoal, es un orgullo mantener un vínculo sólido
              con la ciudad que nos vio nacer y en la que continuamos
              desarrollando nuestras actividades."
      /> */}
      {/* <Careers /> */}
      <TextAndImage
        className="mt-16"
        heading="Comunidad"
        // subheading="Comunidad"
        level="h1"
        description="Para la familia Socoal, es un orgullo mantener un vínculo sólido
              con la ciudad que nos vio nacer y en la que continuamos
              desarrollando nuestras actividades."
        body={
          <div>
            <p>
              Creemos firmemente en la responsabilidad social empresarial y en
              el impacto positivo que una compañía puede generar en su entorno.
              Participamos activamente en iniciativas de apoyo comunitario,
              colaborando con organizaciones sin fines de lucro, instituciones
              educativas y actores locales para identificar necesidades y
              aportar ayuda donde más se requiere. Ponemos a disposición
              nuestros recursos, capacidades y experiencia para contribuir al
              bienestar y desarrollo de la comunidad.
            </p>
            <p className="mt-8">
              Además, estamos abiertos a establecer alianzas estratégicas con
              distintas entidades locales para impulsar proyectos que beneficien
              a la ciudadanía. En Socoal estamos convencidos de que el progreso
              se construye en conjunto, y trabajamos día a día para ser un
              agente positivo dentro de nuestra región.
            </p>
          </div>
        }
        image="/comunidad.webp"
      />
      <Footer />
    </main>
  )
}

// function Careers() {
//   return (
//     <Container className="my-24">
//       <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1fr_24rem]">
//         <div className="lg:max-w-2xl">
//           <div>
//             <p>
//               Creemos firmemente en la responsabilidad social empresarial y en
//               el impacto positivo que una compañía puede generar en su entorno.
//               Participamos activamente en iniciativas de apoyo comunitario,
//               colaborando con organizaciones sin fines de lucro, instituciones
//               educativas y actores locales para identificar necesidades y
//               aportar ayuda donde más se requiere. Ponemos a disposición
//               nuestros recursos, capacidades y experiencia para contribuir al
//               bienestar y desarrollo de la comunidad.
//             </p>
//             <p className="mt-8">
//               Además, estamos abiertos a establecer alianzas estratégicas con
//               distintas entidades locales para impulsar proyectos que beneficien
//               a la ciudadanía. En Socoal estamos convencidos de que el progreso
//               se construye en conjunto, y trabajamos día a día para ser un
//               agente positivo dentro de nuestra región.
//             </p>
//             {/* <Lead className="mt-8">Socoal, forjados en sol y cobre.</Lead> */}
//           </div>
//         </div>
//         <TestimonialCard
//           name="Héctor German Álvarez"
//           title="Fundador"
//           img="/company/5.png"
//           quote="Trabajamos para la excelencia operativa en la industria minera y servicios municipales."
//         />
//       </div>
//     </Container>
//   )
// }

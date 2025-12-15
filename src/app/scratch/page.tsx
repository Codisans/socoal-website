import { ContactForm } from '@/blocks/ContactForm'
import { DarkBentoSection } from '@/blocks/DarkBentoSection'
import { Header } from '@/blocks/Header'
import { TestimonialCard } from '@/blocks/TestimonialCard'
import { BentoCard } from '@/components/bento-card'
import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { GradientBackground } from '@/components/gradient'
import { LinkedAvatars } from '@/components/linked-avatars'
import { LogoTimeline } from '@/components/logo-timeline'
import { Navbar } from '@/components/navbar'
import { Heading, Lead, Subheading } from '@/components/text'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contacto',
  description: 'Contactanos para más información.',
}

export default function Scratch() {
  return (
    <main className="overflow-hidden">
      <GradientBackground />
      <Container>
        <Navbar />
      </Container>
      <Header title="Scratch Page" description="Elementos de ejemplo" />
      <Container className="my-24">
        <ContactForm className="max-w-3xl" />
      </Container>
      <Careers />
      <DarkBentoSection title="60 años de trayectoria" subheading="Mineria">
        <BentoCard
          dark
          eyebrow="Networking"
          title="Sell at the speed of light"
          description="Our RadiantAI chat assistants analyze the sentiment of your conversations in real time, ensuring you're always one step ahead."
          graphic={
            <div className="h-80 bg-[url(/screenshots/networking.png)] bg-size-[851px_344px] bg-no-repeat" />
          }
          fade={['top']}
          className="max-lg:rounded-t-4xl lg:col-span-4 lg:rounded-tl-4xl"
        />
        <BentoCard
          dark
          eyebrow="Integrations"
          title="Meet leads where they are"
          description="With thousands of integrations, no one will be able to escape your cold outreach."
          graphic={<LogoTimeline />}
          // `overflow-visible!` is needed to work around a Chrome bug that disables the mask on the graphic.
          className="z-10 overflow-visible! lg:col-span-2 lg:rounded-tr-4xl"
        />
        <BentoCard
          dark
          eyebrow="Meetings"
          title="Smart call scheduling"
          description="Automatically insert intro calls into your leads' calendars without their consent."
          graphic={<LinkedAvatars />}
          className="lg:col-span-2 lg:rounded-bl-4xl"
        />
        <BentoCard
          dark
          eyebrow="Engagement"
          title="Become a thought leader"
          description="RadiantAI automatically writes LinkedIn posts that relate current events to B2B sales, helping you build a reputation as a thought leader."
          graphic={
            <div className="h-80 bg-[url(/screenshots/engagement.png)] bg-size-[851px_344px] bg-no-repeat" />
          }
          fade={['top']}
          className="max-lg:rounded-b-4xl lg:col-span-4 lg:rounded-br-4xl"
        />
      </DarkBentoSection>
      <Footer />
    </main>
  )
}

function Careers() {
  return (
    <Container className="my-32">
      <Subheading>Careers</Subheading>
      <Heading as="h3" className="mt-2">
        Join our fully remote team.
      </Heading>
      <Lead className="mt-6 max-w-3xl">
        We work together from all over the world, mainly from locations without
        extradition agreements.
      </Lead>
      <div className="mt-24 grid grid-cols-1 gap-16 lg:grid-cols-[1fr_24rem]">
        <div className="lg:max-w-2xl">
          <Subheading as="h3">Open positions</Subheading>
          <div>
            <table className="w-full text-left">
              <colgroup>
                <col className="w-2/3" />
                <col className="w-1/3" />
                <col className="w-0" />
              </colgroup>
              <thead className="sr-only">
                <tr>
                  <th scope="col">Title</th>
                  <th scope="col">Location</th>
                  <th scope="col">Read more</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="colgroup" colSpan={3} className="px-0 pt-10 pb-0">
                    <div className="-mx-4 rounded-lg bg-gray-50 px-4 py-3 text-sm/6 font-semibold">
                      Engineering
                    </div>
                  </th>
                </tr>
                <tr className="border-b border-dotted border-gray-200 text-sm/6 font-normal">
                  <td className="px-0 py-4">iOS Developer</td>
                  <td className="px-0 py-4 text-gray-600">Remote</td>
                  <td className="px-0 py-4 text-right">
                    <Button variant="outline" href="#">
                      View listing
                    </Button>
                  </td>
                </tr>
                <tr className="border-b border-dotted border-gray-200 text-sm/6 font-normal">
                  <td className="px-0 py-4">Backend Engineer</td>
                  <td className="px-0 py-4 text-gray-600">Remote</td>
                  <td className="px-0 py-4 text-right">
                    <Button variant="outline" href="#">
                      View listing
                    </Button>
                  </td>
                </tr>
                <tr className="text-sm/6 font-normal">
                  <td className="px-0 py-4">Product Engineer</td>
                  <td className="px-0 py-4 text-gray-600">Remote</td>
                  <td className="px-0 py-4 text-right">
                    <Button variant="outline" href="#">
                      View listing
                    </Button>
                  </td>
                </tr>
                <tr>
                  <th scope="colgroup" colSpan={3} className="px-0 pt-5 pb-0">
                    <div className="-mx-4 rounded-lg bg-gray-50 px-4 py-3 text-sm/6 font-semibold">
                      Design
                    </div>
                  </th>
                </tr>
                <tr className="border-b border-dotted border-gray-200 text-sm/6 font-normal">
                  <td className="px-0 py-4">Principal Designer</td>
                  <td className="px-0 py-4 text-gray-600">Remote</td>
                  <td className="px-0 py-4 text-right">
                    <Button variant="outline" href="#">
                      View listing
                    </Button>
                  </td>
                </tr>
                <tr className="border-b border-dotted border-gray-200 text-sm/6 font-normal">
                  <td className="px-0 py-4">Designer</td>
                  <td className="px-0 py-4 text-gray-600">Remote</td>
                  <td className="px-0 py-4 text-right">
                    <Button variant="outline" href="#">
                      View listing
                    </Button>
                  </td>
                </tr>
                <tr className="text-sm/6 font-normal">
                  <td className="px-0 py-4">Senior Designer</td>
                  <td className="px-0 py-4 text-gray-600">Remote</td>
                  <td className="px-0 py-4 text-right">
                    <Button variant="outline" href="#">
                      View listing
                    </Button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <TestimonialCard
          name="Héctor German Álvarez"
          title="Fundador"
          img="/company/5.png"
          quote="Trabajamos para la excelencia operativa en la industria minera y servicios municipales."
        />
      </div>
    </Container>
  )
}

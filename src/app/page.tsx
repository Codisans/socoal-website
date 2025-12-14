import { BentoSection } from '@/blocks/BentoSection'
import { DarkBentoSection } from '@/blocks/DarkBentoSection'
import { Hero } from '@/blocks/Hero'
import { MediaSection } from '@/blocks/MediaSection'
import { BentoCard } from '@/components/bento-card'
import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Keyboard } from '@/components/keyboard'
import { LinkedAvatars } from '@/components/linked-avatars'
import { LogoCloud } from '@/components/logo-cloud'
import { LogoTimeline } from '@/components/logo-timeline'
import { Testimonials } from '@/components/testimonials'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  description:
    'Radiant helps you sell more by revealing sensitive information about your customers.',
}

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Hero
        title="Socoal SPA"
        description="Radiant helps you sell more by revealing sensitive information about your customers."
        buttons={
          <>
            <Button href="/contacto">Contactanos</Button>
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
          <MediaSection
            title="60 años de trayectoria"
            image="/screenshots/app.png"
          />
          <BentoSection title="Socio Estratégico" subheading="Mineria" rows={1}>
            <BentoCard
              eyebrow="Insight"
              title="Get perfect clarity"
              description="Radiant uses social engineering to build a detailed financial picture of your leads. Know their budget, compensation package, social security number, and more."
              graphic={
                <div className="h-80 bg-[url(/screenshots/profile.png)] bg-size-[1000px_560px] bg-position-[left_-109px_top_-112px] bg-no-repeat" />
              }
              fade={['bottom']}
           className="lg:col-span-2 lg:rounded-bl-4xl"
            />
            <BentoCard
              eyebrow="Analysis"
              title="Undercut your competitors"
              description="With our advanced data mining, you’ll know which companies your leads are talking to and exactly how much they’re being charged."
              graphic={
                <div className="absolute inset-0 bg-[url(/screenshots/competitors.png)] bg-size-[1100px_650px] bg-position-[left_-38px_top_-73px] bg-no-repeat" />
              }
              fade={['bottom']}
          className="lg:col-span-2"
            />
            <BentoCard
              eyebrow="Speed"
              title="Built for power users"
              description="It’s never been faster to cold email your entire contact list using our streamlined keyboard shortcuts."
              graphic={
                <div className="flex size-full pt-10 pl-10">
                  <Keyboard highlighted={['LeftCommand', 'LeftShift', 'D']} />
                </div>
              }
             className="max-lg:rounded-b-4xl lg:col-span-2 lg:rounded-br-4xl"
            />
          </BentoSection>
          {/* <BentoSection title="60 años de trayectoria" subheading="Mineria">
            <BentoCard
              eyebrow="Insight"
              title="Get perfect clarity"
              description="Radiant uses social engineering to build a detailed financial picture of your leads. Know their budget, compensation package, social security number, and more."
              graphic={
                <div className="h-80 bg-[url(/screenshots/profile.png)] bg-size-[1000px_560px] bg-position-[left_-109px_top_-112px] bg-no-repeat" />
              }
              fade={['bottom']}
              className="max-lg:rounded-t-4xl lg:col-span-3 lg:rounded-tl-4xl"
            />
            <BentoCard
              eyebrow="Analysis"
              title="Undercut your competitors"
              description="With our advanced data mining, you’ll know which companies your leads are talking to and exactly how much they’re being charged."
              graphic={
                <div className="absolute inset-0 bg-[url(/screenshots/competitors.png)] bg-size-[1100px_650px] bg-position-[left_-38px_top_-73px] bg-no-repeat" />
              }
              fade={['bottom']}
              className="lg:col-span-3 lg:rounded-tr-4xl"
            />
            <BentoCard
              eyebrow="Speed"
              title="Built for power users"
              description="It’s never been faster to cold email your entire contact list using our streamlined keyboard shortcuts."
              graphic={
                <div className="flex size-full pt-10 pl-10">
                  <Keyboard highlighted={['LeftCommand', 'LeftShift', 'D']} />
                </div>
              }
              className="lg:col-span-2 lg:rounded-bl-4xl"
            />
            <BentoCard
              eyebrow="Source"
              title="Get the furthest reach"
              description="Bypass those inconvenient privacy laws to source leads from the most unexpected places."
              graphic={<LogoCluster />}
              className="lg:col-span-2"
            />
            <BentoCard
              eyebrow="Limitless"
              title="Sell globally"
              description="Radiant helps you sell in locations currently under international embargo."
              graphic={<Map />}
              className="max-lg:rounded-b-4xl lg:col-span-2 lg:rounded-br-4xl"
            />
          </BentoSection> */}
        </div>
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
      </main>
      <Testimonials />
      <Footer />
    </div>
  )
}

import { PlusGrid, PlusGridItem, PlusGridRow } from '@/components/plus-grid'
import { Button } from './button'
import { Container } from './container'
import { Gradient } from './gradient'
import { Link } from './link'
import { Logo } from './logo'
import { Subheading } from './text'

function CallToAction() {
  return (
    <div className="relative pt-20 pb-16 text-center sm:py-24">
      <hgroup>
        <Subheading>Trabajemos juntos</Subheading>
        <p className="mt-6 text-3xl font-medium tracking-tight text-dark-blue sm:text-5xl">
          Socoal, forjados en sol y cobre.
        </p>
      </hgroup>
      <p className="mx-auto mt-6 max-w-xs text-sm/6 text-gray-500">
        Expertos en servicios industriales y municipales.
      </p>
      <div className="mt-6">
        <Button className="w-full sm:w-auto" href="/contacto">
          Contacto
        </Button>
      </div>
    </div>
  )
}

// function SitemapHeading({ children }: { children: React.ReactNode }) {
//   return <h3 className="text-sm/6 font-medium text-gray-950/50">{children}</h3>
// }

function SitemapLinks({ children }: { children: React.ReactNode }) {
  return <ul className="mt-6 space-y-4 text-sm/6">{children}</ul>
}

function SitemapLink(props: React.ComponentPropsWithoutRef<typeof Link>) {
  return (
    <li>
      <Link
        {...props}
        className="font-medium text-gray-950 data-hover:text-gray-950/75 dark:text-white dark:data-hover:text-white/75"
      />
    </li>
  )
}

function Sitemap() {
  return (
    <>
      <div>
        <SitemapLinks>
          <SitemapLink href="/nosotros">Nosotros</SitemapLink>
        </SitemapLinks>
      </div>
      <div>
        <SitemapLinks>
          <SitemapLink href="/servicios">Servicios</SitemapLink>
        </SitemapLinks>
      </div>
      <div>
        <SitemapLinks>
          <SitemapLink href="/comunidad">Comunidad</SitemapLink>
        </SitemapLinks>
      </div>
      <div>
        <SitemapLinks>
          <SitemapLink href="/contacto">Contacto</SitemapLink>
        </SitemapLinks>
      </div>
    </>
  )
}

function SocialIconInstagram(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg fill="none" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z"
        clipRule="evenodd"
      />
    </svg>
  )
}

function SocialIconLinkedIn(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" {...props}>
      <path d="M14.82 0H1.18A1.169 1.169 0 000 1.154v13.694A1.168 1.168 0 001.18 16h13.64A1.17 1.17 0 0016 14.845V1.15A1.171 1.171 0 0014.82 0zM4.744 13.64H2.369V5.996h2.375v7.644zm-1.18-8.684a1.377 1.377 0 11.52-.106 1.377 1.377 0 01-.527.103l.007.003zm10.075 8.683h-2.375V9.921c0-.885-.015-2.025-1.234-2.025-1.218 0-1.425.966-1.425 1.968v3.775H6.233V5.997H8.51v1.05h.032c.317-.601 1.09-1.235 2.246-1.235 2.405-.005 2.851 1.578 2.851 3.63v4.197z" />
    </svg>
  )
}

function SocialLinks() {
  return (
    <>
      <Link
        href="https://www.instagram.com/socoal.spa"
        target="_blank"
        aria-label="Visit us on X"
        className="text-gray-950 data-hover:opacity-75 dark:text-white"
      >
        <span className="flex size-5 items-center justify-center rounded-xs bg-white text-blue">
          <SocialIconInstagram className="size-5" />
        </span>
      </Link>
      <Link
        href="https://www.linkedin.com/company/80778540"
        target="_blank"
        aria-label="Visit us on LinkedIn"
        className="text-gray-950 data-hover:text-gray-950/75 dark:text-white dark:data-hover:text-white/75"
      >
        <SocialIconLinkedIn className="size-5" />
      </Link>
    </>
  )
}

function Copyright() {
  return (
    <div className="text-sm/6 text-gray-950 dark:text-white">
      &copy; {new Date().getFullYear()} SOCOAL SpA.
    </div>
  )
}

export function Footer() {
  return (
    <footer>
      <CallToAction />
      <Gradient className="dark relative bg-none! pt-16">
        <div className="absolute inset-2 rounded-4xl bg-white/80 dark:bg-blue dark:text-white" />
        <Container className="dark">
          <PlusGrid className="pb-16">
            <PlusGridRow>
              <div className="grid grid-cols-2 gap-y-10 pb-6 lg:grid-cols-6 lg:gap-8">
                <div className="col-span-2 flex">
                  <PlusGridItem className="pt-6 lg:pb-6">
                    <Logo className="h-9 dark:brightness-0 dark:invert" />
                  </PlusGridItem>
                </div>
                <div className="col-span-2 grid grid-cols-2 gap-x-8 gap-y-12 lg:col-span-4 lg:grid-cols-subgrid lg:pt-6">
                  <Sitemap />
                </div>
              </div>
            </PlusGridRow>
            <PlusGridRow className="flex justify-between">
              <div>
                <PlusGridItem className="py-3">
                  <Copyright />
                </PlusGridItem>
              </div>
              <div className="flex">
                <PlusGridItem className="flex items-center gap-8 py-3">
                  <SocialLinks />
                </PlusGridItem>
              </div>
            </PlusGridRow>
          </PlusGrid>
        </Container>
      </Gradient>
    </footer>
  )
}

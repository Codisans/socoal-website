import { Container } from '@/components/container'
import { Gradient } from '@/components/gradient'
import { Navbar } from '@/components/navbar'

export function Hero({
  title,
  description,
  buttons,
}: {
  title: string | React.ReactNode
  description: string
  buttons: React.ReactNode
}) {
  return (
    <div className="relative">
      <Gradient className="absolute inset-2 bottom-0 rounded-4xl ring-1 ring-black/5 ring-inset" />
      {/* <Gradient className="absolute inset-2 bottom-0 rounded-4xl bg-none! ring-3 ring-blue ring-inset" /> */}
      <Container className="dark relative">
        <Navbar dark />
        <div className="pt-16 pb-24 sm:pt-24 sm:pb-32 md:pt-32 md:pb-48">
          <h1 className="font-serif text-6xl/[0.9] font-medium tracking-tight text-balance text-dark-blue uppercase sm:text-8xl/[0.8] md:text-7xl dark:text-white">
            {title}
          </h1>
          <p className="mt-8 max-w-lg text-xl/7 font-medium text-gray-950/75 sm:text-2xl/8 dark:text-white">
            {description}
          </p>
          <div className="mt-12 flex flex-col gap-x-6 gap-y-4 sm:flex-row">
            {buttons}
          </div>
        </div>
      </Container>
    </div>
  )
}

import { Container } from '@/components/container'
import { Gradient } from '@/components/gradient'
import { Navbar } from '@/components/navbar'

export function Hero({
  title,
  description,
  image,
  buttons,
}: {
  title: string | React.ReactNode
  description: string
  image?: string
  buttons: React.ReactNode
}) {
  return (
    <div className="relative">
      <Gradient className="absolute inset-2 bottom-0 rounded-4xl ring-1 ring-black/5 ring-inset" />
      {/* <Gradient className="absolute inset-2 bottom-0 rounded-4xl bg-none! ring-3 ring-blue ring-inset" /> */}
      {image && (
        <div className="absolute inset-2 bottom-0 flex items-end justify-end overflow-hidden rounded-4xl">
          <div className="relative aspect-1200/640 min-h-1/2 w-2/3">
            <svg
              width="1200"
              height="640"
              className="absolute inset-0 z-10 h-full w-full -translate-y-full"
              viewBox="0 0 1200 640"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M600 320L300 0H1199.4L1200 640H900L600 320Z"
                fill="#072E5B"
              />
            </svg>
            {/* <svg
              className="absolute inset-0 z-10 h-full w-full -translate-y-full"
              width="900"
              height="640"
              viewBox="0 0 900 640"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M300 320L0 0H899.404L900 640H600L300 320Z"
                fill="#072E5B"
              />
            </svg> */}

            <svg
              className="absolute inset-0 h-full w-full"
              // width="1200"
              // height="640"
              viewBox="0 0 1200 640"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <clipPath id="hero-mask" clipPathUnits="objectBoundingBox">
                  <path d="M0.25,0.5 L0.5,0.5 L0.75,0 L1,0 L0.9995,1 L0.5,1 L0,1 L0.25,0.5 Z" />
                </clipPath>
              </defs>
            </svg>

            <img
              src={image}
              alt="Hero"
              className="h-full w-full object-cover"
              style={{ clipPath: 'url(#hero-mask)' }}
            />
          </div>
        </div>
      )}
      <Container className="dark relative z-50">
        <Navbar dark />
        <div className="pt-16 pb-24 sm:pt-24 sm:pb-32 md:pt-32 md:pb-40">
          <h1 className="font-serif text-4xl font-bold tracking-tight text-balance text-dark-blue uppercase sm:text-5xl lg:text-7xl dark:text-white">
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

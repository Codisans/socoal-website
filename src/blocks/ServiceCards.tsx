import { Container } from '@/components/container'
import { Gradient } from '@/components/gradient'
import { LogoCloud } from '@/components/logo-cloud'
import { Heading } from '@/components/text'
import { CheckIcon } from '@heroicons/react/16/solid'

export type ServiceCardProps = {
  name: string
  description: string
  items: string[]
  image: string
}

export function ServiceCards({ services }: { services: ServiceCardProps[] }) {
  return (
    <div className="relative py-24">
      <Gradient className="absolute inset-x-2 top-48 bottom-0 rounded-4xl ring-1 ring-black/5 ring-inset" />
      <Container className="relative">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {services.map((service, serviceIndex) => (
            <ServiceCard key={serviceIndex} service={service} />
          ))}
        </div>
        <LogoCloud className="mt-24" />
      </Container>
    </div>
  )
}

export function ServiceCard({ service }: { service: ServiceCardProps }) {
  return (
    <div className="-m-2 grid grid-cols-1 rounded-4xl shadow-[inset_0_0_2px_1px_#ffffff4d] ring-1 ring-black/5 max-lg:mx-auto max-lg:w-full max-lg:max-w-md">
      <div className="grid grid-cols-1 rounded-4xl p-2 shadow-md shadow-black/5">
        <div className="rounded-3xl bg-white p-10 pb-9 shadow-2xl ring-1 ring-black/5">
          <Heading
            className={`text-2xl! ${service.name.length < 30 ? 'lg:pr-4' : ''}`}
            as="h3"
          >
            {service.name}
          </Heading>
          <p className="mt-2 text-sm/6 text-gray-950/75">
            {service.description}
          </p>
          <div className="mt-8 flex items-center gap-4">
            <img
              alt={service.name}
              src={service.image}
              className="aspect-video rounded-xl object-cover shadow-xl outline-1 -outline-offset-1 outline-black/10"
            />
          </div>
          {/* <div className="mt-8">
              <Button href={tier.href}>Start a free trial</Button>
            </div> */}
          <div className="mt-8">
            <h3 className="text-sm/6 font-medium text-gray-950">
              Expertos en:
            </h3>
            <ul className="mt-3 space-y-3">
              {service.items.map((item, i) => (
                <FeatureItem key={i} description={item} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

function FeatureItem({
  description,
  disabled = false,
}: {
  description: string
  disabled?: boolean
}) {
  return (
    <li
      data-disabled={disabled ? true : undefined}
      className="flex items-start gap-4 text-sm/6 font-semibold text-blue data-disabled:text-gray-950/25"
    >
      <span className="inline-flex h-6 items-center">
        <CheckIcon className="size-5 shrink-0 fill-gray-950/25" />
      </span>
      {disabled && <span className="sr-only">Not included:</span>}
      {description}
    </li>
  )
}

import { AnimatedNumber } from '@/components/animated-number'
import { Subheading } from '@/components/text'

export function Statistics({
  heading,
  stats,
}: {
  heading: string
  stats: {
    label: string
    value: { start: number; end: number }
    prefix?: string
  }[]
}) {
  return (
    <div className="max-lg:mt-16 lg:col-span-1">
      <Subheading>{heading}</Subheading>
      <hr className="mt-6 border-t border-gray-200" />
      <dl className="mt-6 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
        {stats.map((stat, i) => (
          <div
            key={i}
            className="flex flex-col gap-y-2 border-b border-dotted border-gray-200 pb-4"
          >
            <dt className="text-sm/6 text-gray-600">{stat.label}</dt>
            <dd className="order-first text-6xl font-medium tracking-tight">
              {stat.prefix && <>{stat.prefix}</>}
              <AnimatedNumber start={stat.value.start} end={stat.value.end} />
            </dd>
          </div>
        ))}
      </dl>
    </div>
  )
}

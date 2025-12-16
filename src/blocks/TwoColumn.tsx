import { Container } from '@/components/container'
import { Subheading } from '@/components/text'
import clsx from 'clsx'

export function TwoColumn({
  title,
  items,
  className,
}: {
  title?: string
  className?: string
  items: {
    title?: string
    description?: string
    image?: string
  }[]
}) {
  return (
    <Container className={clsx('mt-32', className)}>
      {title && <Subheading as="h3">{title}</Subheading>}
      <hr className="mt-6 border-t border-gray-200" />
      <ul
        role="list"
        className="mx-auto mt-10 grid grid-cols-1 gap-8 lg:grid-cols-2"
      >
        {items.map((item) => (
          <li key={item.title}>
            {item.title && (
              <p className="font-serif text-2xl/8 font-bold tracking-tight text-dark-blue uppercase">
                {item.title}
              </p>
            )}
            {item.image && (
              <img alt={item.title} src={item.image} className="h-14" />
            )}
            {item.description && (
              <p className="mt-6 max-w-lg text-sm/6 text-gray-500">
                {item.description}
              </p>
            )}
          </li>
        ))}
      </ul>
    </Container>
  )
}

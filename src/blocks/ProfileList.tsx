import { Lead } from '@/components/text'

import { Heading } from '@/components/text'

import { Container } from '@/components/container'
import { Subheading } from '@/components/text'
import clsx from 'clsx'

export function ProfileList({
  className,
  title,
  subheading,
  description,
  items,
}: {
  className?: string
  title?: string
  subheading?: string
  description?: string
  items: {
    name: string
    description: string
    img: string
  }[]
}) {
  return (
    <Container className={clsx('mt-32', className)}>
      {title && (
        <Heading as="h3" className="mt-2">
          {title}
        </Heading>
      )}
      {description && <Lead className="mt-6 max-w-3xl">{description}</Lead>}
      {subheading && (
        <Subheading as="h3" className="mt-24">
          {subheading}
        </Subheading>
      )}
      <hr className="mt-6 border-t border-gray-200" />
      {items && (
        <ul
          role="list"
          className="mx-auto mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {items?.map((item, index) => (
            <ProfileItem key={index} {...item} />
          ))}
        </ul>
      )}
    </Container>
  )
}

export function ProfileItem({
  name,
  description,
  img,
}: {
  name: string
  description: string
  img: string
}) {
  return (
    <li className="flex items-center gap-4">
      <img alt={name} src={img} className="size-12 rounded-full" />
      <div className="text-sm/6">
        <h3 className="font-medium">{name}</h3>
        <p className="text-gray-500">{description}</p>
      </div>
    </li>
  )
}

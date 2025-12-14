import { Container } from '@/components/container'
import { Heading, Subheading } from '@/components/text'
import clsx from 'clsx'

export function BentoSection({
  title,
  subheading,
  children,
  rows = 2,
}: {
  title: string
  subheading: string
  children: React.ReactNode
  rows?: number
}) {
  return (
    <Container>
      <Subheading>{subheading}</Subheading>
      <Heading as="h3" className="mt-2 max-w-3xl">
        {title}
      </Heading>

      <div
        className={clsx(
          'mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6',
          rows === 2 && 'lg:grid-rows-2',
        )}
      >
        {children}
      </div>
    </Container>
  )
}

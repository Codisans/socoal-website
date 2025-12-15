import { Container } from '@/components/container'
import { Heading, Subheading } from '@/components/text'
import clsx from 'clsx'

export function DarkBentoSection({
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
    <div className="mx-2 mt-2 rounded-4xl bg-dark-blue py-32">
      <Container>
        <Subheading dark>{subheading}</Subheading>
        <Heading as="h3" dark className="mt-2 max-w-3xl">
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
    </div>
  )
}

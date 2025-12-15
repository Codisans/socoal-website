import { Container } from '@/components/container'
import { Heading, Lead, Subheading } from '@/components/text'
import { clsx } from 'clsx'

export function Header({
  title,
  subheading,
  description,
  className,
  level = 'h1',
}: {
  title: string
  subheading?: string
  description?: string
  className?: string
  level?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}) {
  return (
    <Container className={clsx('mt-16', className)}>
      {subheading && <Subheading>{subheading}</Subheading>}
      <Heading as={level}>{title}</Heading>
      {description && <Lead className="mt-6 max-w-3xl">{description}</Lead>}
    </Container>
  )
}

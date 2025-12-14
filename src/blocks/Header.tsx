import { Container } from '@/components/container'
import { Heading, Lead } from '@/components/text'
import { clsx } from 'clsx'

export function Header({
  title,
  description,
  className,
}: {
  title: string
  description?: string
  className?: string
}) {
  return (
    <Container className={clsx('mt-16', className)}>
      {title && <Heading as="h1">{title}</Heading>}
      {description && <Lead className="mt-6 max-w-3xl">{description}</Lead>}
    </Container>
  )
}

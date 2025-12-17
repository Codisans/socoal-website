import { Container } from '@/components/container'
import { Heading, Lead, Subheading } from '@/components/text'
import clsx from 'clsx'

export function TextAndImage({
  heading,
  subheading,
  description,
  body,
  image,
  containImage = false,
  level = 'h3',
  className,
}: {
  heading: string | React.ReactNode
  subheading?: string
  description?: string
  body: React.ReactNode
  image: string
  containImage?: boolean
  level?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  className?: string
}) {
  return (
    <Container className={className}>
      {subheading && <Subheading>{subheading}</Subheading>}
      <Heading as={level} className="mt-2">
        {heading}
      </Heading>
      {description && <Lead className="mt-6 max-w-3xl">{description}</Lead>}
      <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-2">
        <div className="max-w-lg">{body}</div>
        <div
          className={clsx(
            'max-lg:order-first',
            containImage
              ? 'max-w-48 sm:max-w-64 lg:max-w-96'
              : 'max-lg:max-w-lg',
          )}
        >
          <div
            className={clsx(
              'aspect-3/2',
              containImage
                ? ''
                : 'overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10',
            )}
          >
            <img
              alt={typeof heading === 'string' ? heading : 'Socoal'}
              src={image}
              className={clsx(
                'block size-full',
                containImage ? 'object-contain object-left' : 'object-cover',
              )}
            />
          </div>
        </div>
      </div>
    </Container>
  )
}

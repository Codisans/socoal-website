import { Container } from '@/components/container'
import { Heading, Lead, Subheading } from '@/components/text'

export function TextAndImage({
  heading,
  subheading,
  description,
  body,
  image,
}: {
  heading: string
  subheading: string
  description: string
  body: React.ReactNode
  image: string
}) {
  return (
    <Container className="mt-32">
      <Subheading>{subheading}</Subheading>
      <Heading as="h3" className="mt-2">
        {heading}
      </Heading>
      <Lead className="mt-6 max-w-3xl">{description}</Lead>
      <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-2">
        <div className="max-w-lg">{body}</div>
        <div className="max-lg:order-first max-lg:max-w-lg">
          <div className="aspect-3/2 overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10">
            <img
              alt={heading}
              src={image}
              className="block size-full object-cover"
            />
          </div>
        </div>
      </div>
    </Container>
  )
}

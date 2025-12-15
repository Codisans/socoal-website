import { Container } from '@/components/container'
import { Screenshot } from '@/components/screenshot'
import { Heading, Lead } from '@/components/text'

export function MediaSection({
  title,
  description,
  image,
}: {
  title: string
  description: string
  image: string
}) {
  return (
    <div className="overflow-hidden">
      <Container className="pb-24">
        <Heading as="h2" className="max-w-3xl">
          {title}
        </Heading>
        {description && <Lead className="mt-6 max-w-3xl">{description}</Lead>}
        <Screenshot
          width={1216}
          height={768}
          src={image}
          className="mt-16 h-144 sm:h-auto sm:w-304"
        />
      </Container>
    </div>
  )
}

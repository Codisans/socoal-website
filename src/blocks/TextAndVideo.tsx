import { Container } from '@/components/container'
import { Heading, Lead, Subheading } from '@/components/text'
import { YoutubeEmbed } from '@/components/youtube-embed'

export function TextAndVideo({
  heading,
  subheading,
  description,
  body,
  videoId,
  posterImage,
  className,
}: {
  heading: string
  subheading: string
  description: string
  body: React.ReactNode
  videoId: string
  posterImage: string
  className?: string
}) {
  return (
    <Container className={className}>
      <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-2">
        <div className="max-w-lg">
          <Subheading>{subheading}</Subheading>
          <Heading as="h3" className="mt-2">
            {heading}
          </Heading>
          <Lead className="mt-6 max-w-3xl">{description}</Lead>
          {body}
        </div>
        <div className="max-lg:max-w-lg">
          <YoutubeEmbed videoId={videoId} posterImage={posterImage} />
        </div>
      </div>
    </Container>
  )
}

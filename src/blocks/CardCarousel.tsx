'use client'

import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Link } from '@/components/link'
import { Heading, Subheading } from '@/components/text'
import { ArrowLongRightIcon } from '@heroicons/react/20/solid'
import { clsx } from 'clsx'
import {
  MotionValue,
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring,
  type HTMLMotionProps,
} from 'framer-motion'
import { useCallback, useLayoutEffect, useRef, useState } from 'react'
import useMeasure, { type RectReadOnly } from 'react-use-measure'

export interface CardCarouselProps {
  cards: CarouselCard[]
  subheading: string
  heading: string
  callToAction?: CallToActionProps
  className?: string
}

export function CardCarousel({
  cards,
  subheading,
  heading,
  callToAction,
  className,
}: CardCarouselProps) {
  let scrollRef = useRef<HTMLDivElement | null>(null)
  let { scrollX } = useScroll({ container: scrollRef })
  let [setReferenceWindowRef, bounds] = useMeasure()
  let [activeIndex, setActiveIndex] = useState(0)

  useMotionValueEvent(scrollX, 'change', (x) => {
    setActiveIndex(Math.floor(x / scrollRef.current!.children[0].clientWidth))
  })

  function scrollTo(index: number) {
    let gap = 32
    let width = (scrollRef.current!.children[0] as HTMLElement).offsetWidth
    scrollRef.current!.scrollTo({ left: (width + gap) * index })
  }

  return (
    <div className={clsx('overflow-hidden pt-32', className)}>
      <Container>
        <div
          ref={setReferenceWindowRef}
          className="flex flex-row items-end justify-between"
        >
          <div>
            <Subheading>{subheading}</Subheading>
            <Heading as="h3" className="mt-2">
              {heading}
            </Heading>
          </div>
          {callToAction && (
            <Button variant="primary" href={callToAction.linkHref}>
              {callToAction.linkText}
            </Button>
          )}
        </div>
      </Container>
      <div
        ref={scrollRef}
        className={clsx([
          'mt-16 flex gap-8 px-(--scroll-padding)',
          '[scrollbar-width:none] [&::-webkit-scrollbar]:hidden',
          'snap-x snap-mandatory overflow-x-auto overscroll-x-contain scroll-smooth',
          '[--scroll-padding:max(--spacing(6),calc((100vw-(var(--container-2xl)))/2))] lg:[--scroll-padding:max(--spacing(8),calc((100vw-(var(--container-7xl)))/2))]',
        ])}
      >
        {cards.map(({ img, eyebrow, title, description }, cardIndex) => (
          <CarouselCard
            key={cardIndex}
            eyebrow={eyebrow}
            description={description}
            title={title}
            img={img}
            bounds={bounds}
            scrollX={scrollX}
            onClick={() => scrollTo(cardIndex)}
          />
        ))}
      </div>
    </div>
  )
}

export interface CarouselCard {
  img: string
  eyebrow: string
  title: string
  description?: string
}

function CarouselCard({
  eyebrow,
  title,
  description,
  img,
  bounds,
  scrollX,
  ...props
}: {
  img: string
  eyebrow: string
  title: string
  description?: string
  bounds: RectReadOnly
  scrollX: MotionValue<number>
} & HTMLMotionProps<'div'>) {
  let ref = useRef<HTMLDivElement | null>(null)

  let computeOpacity = useCallback(() => {
    let element = ref.current
    if (!element || bounds.width === 0) return 1

    let rect = element.getBoundingClientRect()

    if (rect.left < bounds.left) {
      let diff = bounds.left - rect.left
      let percent = diff / rect.width
      return Math.max(0.5, 1 - percent)
    } else if (rect.right > bounds.right) {
      let diff = rect.right - bounds.right
      let percent = diff / rect.width
      return Math.max(0.5, 1 - percent)
    } else {
      return 1
    }
  }, [ref, bounds.width, bounds.left, bounds.right])

  let opacity = useSpring(computeOpacity(), {
    stiffness: 154,
    damping: 23,
  })

  useLayoutEffect(() => {
    opacity.set(computeOpacity())
  }, [computeOpacity, opacity])

  useMotionValueEvent(scrollX, 'change', () => {
    opacity.set(computeOpacity())
  })

  return (
    <motion.div
      ref={ref}
      style={{ opacity }}
      {...props}
      className="relative flex aspect-9/16 w-72 shrink-0 snap-start scroll-ml-(--scroll-padding) flex-col justify-end overflow-hidden rounded-3xl sm:aspect-3/4 sm:w-96"
    >
      <img
        alt={title}
        src={img}
        className="absolute inset-x-0 top-0 aspect-square w-full object-cover"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 rounded-3xl bg-linear-to-t from-black from-[calc(7/16*100%)] ring-1 ring-gray-950/10 ring-inset sm:from-25%"
      />
      <div className="relative p-10">
        <p className="relative text-xl/7 text-white">{title}</p>
        {description && (
          <p className="mt-2 text-sm/6 font-medium text-white">{description}</p>
        )}
        <div className="mt-6 border-t border-white/20 pt-6">
          <p className="text-sm/6 font-medium text-white">{eyebrow}</p>
        </div>
      </div>
    </motion.div>
  )
}

export interface CallToActionProps {
  description: string
  linkText: string
  linkHref: string
}

function CallToAction({ description, linkText, linkHref }: CallToActionProps) {
  return (
    <Link
      href={linkHref}
      className="inline-flex items-center gap-2 text-sm/6 font-medium text-blue"
    >
      {linkText}
      <ArrowLongRightIcon className="size-5" />
    </Link>
  )
}

'use client'

import Image from 'next/image'
import { useState } from 'react'

interface YoutubeEmbedProps {
  videoId: string
  posterImage: string
  title?: string
}

export function YoutubeEmbed({
  videoId,
  posterImage,
  title = 'YouTube video player',
}: YoutubeEmbedProps) {
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <div className="aspect-video w-full overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10">
      {isPlaying ? (
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="block size-full"
        />
      ) : (
        <button
          onClick={() => setIsPlaying(true)}
          className="group relative size-full focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none"
          aria-label={`Play video: ${title}`}
        >
          <Image
            src={posterImage}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
          {/* Play button overlay */}
          <div className="absolute inset-0 flex items-center justify-center bg-black/20 transition-colors group-hover:bg-black/30">
            <svg
              className="ml-1 h-24 w-24 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </button>
      )}
    </div>
  )
}

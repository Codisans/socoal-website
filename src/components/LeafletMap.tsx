'use client'
import { useEffect, useRef } from 'react'

const markerCoordinates: [number, number] = [-22.4396, -68.8873]

export default function LeafletMap() {
  const mapRef = useRef<unknown>(null)

  useEffect(() => {
    // Dynamically import Leaflet only on the client side
    const initMap = async () => {
      if (mapRef.current) return // Map already initialized

      const L = await import('leaflet')
      // @ts-expect-error - CSS import
      await import('leaflet/dist/leaflet.css')

      // Fix default marker icon paths for Next.js
      delete (L.Icon.Default.prototype as unknown as { _getIconUrl: unknown })
        ._getIconUrl
      L.Icon.Default.mergeOptions({
        iconRetinaUrl:
          'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
        iconUrl:
          'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
        shadowUrl:
          'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
      })

      // Get the map container element
      const mapContainer = document.getElementById('map')
      if (!mapContainer) return

      // Check if the container already has a Leaflet map instance
      // @ts-expect-error - Leaflet adds _leaflet_id to DOM elements it initializes
      if (mapContainer._leaflet_id) return

      const map = L.map('map', {
        center: [-22.4396, -68.8873],
        zoom: 10,
        zoomControl: false,
        layers: [
          L.tileLayer(
            'https://tile.jawg.io/jawg-light/{z}/{x}/{y}{r}.png?access-token=aLubrUOI0qXUjCvyXl3vQ1LuXliuWTFUesHv3khs8Itsxx4KicQleQFUarz6QpKe',
          ),
        ],
      })

      // Add marker at the specified coordinates
      L.marker(markerCoordinates).addTo(map)

      mapRef.current = map
    }

    initMap()

    // Cleanup function
    return () => {
      if (mapRef.current) {
        // @ts-expect-error - mapRef.current is of type unknown
        mapRef.current.remove()
        mapRef.current = null
      }
    }
  }, [])

  return (
    <div className="relative aspect-video w-full max-w-3xl overflow-hidden rounded-lg">
      <div id="map" className="absolute inset-0 h-full w-full"></div>
    </div>
  )
}

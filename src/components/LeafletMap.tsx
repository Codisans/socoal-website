'use client'
import { useEffect, useRef } from 'react'

export default function LeafletMap() {
  const mapRef = useRef<unknown>(null)

  useEffect(() => {
    // Dynamically import Leaflet only on the client side
    const initMap = async () => {
      if (mapRef.current) return // Map already initialized

      const L = await import('leaflet')
      // @ts-expect-error - CSS import
      await import('leaflet/dist/leaflet.css')

      console.log('leaflet map imported')

      // Get the map container element
      const mapContainer = document.getElementById('map')
      if (!mapContainer) return

      // Check if the container already has a Leaflet map instance
      // @ts-expect-error - Leaflet adds _leaflet_id to DOM elements it initializes
      if (mapContainer._leaflet_id) {
        console.log(
          'Map container already has Leaflet instance, skipping initialization',
        )
        return
      }

      // const marker = new L.Icon({
      //   iconUrl: '/mining-1.png',
      //   iconSize: [32, 32],
      //   iconAnchor: [16, 16],
      // })

      mapRef.current = L.map('map', {
        center: [-33.4489, -70.6693],
        zoom: 10,
        zoomControl: false,
        layers: [
          L.tileLayer(
            'https://tile.jawg.io/jawg-light/{z}/{x}/{y}{r}.png?access-token=aLubrUOI0qXUjCvyXl3vQ1LuXliuWTFUesHv3khs8Itsxx4KicQleQFUarz6QpKe',
          ),
        ],
      })
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

<script setup lang="ts">
import { ref, shallowRef, onMounted, watch } from 'vue'
import maplibregl from 'maplibre-gl'
import 'maplibre-gl/dist/maplibre-gl.css'
import { usePropertyStore } from '@/stores/propertyStore'
import LayerControl from './LayerControl.vue'
import type { Map } from 'maplibre-gl'

const mapContainer = ref<HTMLElement | null>(null)
const map = shallowRef<Map | null>(null)
const is3DMode = ref(false)
const propertyStore = usePropertyStore()

const OSLO_CENTER: [number, number] = [10.7522, 59.9139]
const DEFAULT_ZOOM = 13

onMounted(() => {
  if (!mapContainer.value) return

  // Initialize map with base tiles
  map.value = new maplibregl.Map({
    container: mapContainer.value,
    style: {
      version: 8,
      sources: {
        'osm': {
          type: 'raster',
          tiles: [
            'https://a.tile.openstreetmap.org/{z}/{x}/{y}.png',
            'https://b.tile.openstreetmap.org/{z}/{x}/{y}.png',
            'https://c.tile.openstreetmap.org/{z}/{x}/{y}.png'
          ],
          tileSize: 256,
          attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }
      },
      layers: [
        {
          id: 'osm-layer',
          type: 'raster',
          source: 'osm'
        }
      ]
    },
    center: OSLO_CENTER,
    zoom: DEFAULT_ZOOM,
    pitch: 0,
    bearing: 0
  }) as Map

  // Add navigation controls
  map.value.addControl(new maplibregl.NavigationControl(), 'top-right')

  // Load properties when map is ready
  map.value.on('load', () => {
    addPropertyLayer()
  })
})

const addPropertyLayer = () => {
  if (!map.value) return

  // Add property GeoJSON source (for potential future use)
  map.value.addSource('properties', {
    type: 'geojson',
    data: propertyStore.getGeoJSON()
  })

  // Note: We're NOT adding fill or border layers - only using home icon markers for visualization

  // Create a marker for each property
  propertyStore.properties.forEach((property) => {
    const el = document.createElement('div')
    el.className = 'property-marker-default'
    el.innerHTML = `
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="filter: drop-shadow(0 2px 4px rgba(0,0,0,0.2)); display: block;">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
        <polyline points="9 22 9 12 15 12 15 22"></polyline>
      </svg>
    `

    // Create popup for tooltip
    const popup = new maplibregl.Popup({
      offset: 15,
      closeButton: false,
      closeOnClick: false,
      className: 'property-popup'
    }).setHTML(`
      <div style="font-weight: 600; font-size: 0.75rem; color: #1f2937;">${property.address}</div>
      <div style="font-size: 0.75rem; opacity: 0.8; color: #4b5563;">${property.details.price.toLocaleString('nb-NO')} kr</div>
    `)

    const marker = new maplibregl.Marker({ element: el, anchor: 'center' })
      .setLngLat(property.coordinates)
      .addTo(map.value!)

    // Set popup on marker
    marker.setPopup(popup)

    el.addEventListener('click', () => propertyStore.selectProperty(property.id))

    el.addEventListener('mouseenter', () => {
      if (!propertyStore.selectedPropertyIds.includes(property.id)) el.classList.add('property-marker-hover')
      marker.togglePopup()
    })

    el.addEventListener('mouseleave', () => {
      if (!propertyStore.selectedPropertyIds.includes(property.id)) el.classList.remove('property-marker-hover')
      if (popup.isOpen()) popup.remove()
    })

    // Store marker reference for later updates
    ;(property as any).marker = { element: el, marker, popup }
  })

  // No polygon click handlers needed - only using markers
}

// Watch for property selection changes and update markers
watch(() => propertyStore.selectedPropertyIds, () => {
  propertyStore.properties.forEach((property) => {
    const markerEl = (property as any).marker?.element
    if (!markerEl) return

    const svg = markerEl.querySelector('svg')
    const isSelected = propertyStore.selectedPropertyIds.includes(property.id)

    markerEl.classList.remove('property-marker-default', 'property-marker-selected', 'property-marker-hover')
    markerEl.classList.add(isSelected ? 'property-marker-selected' : 'property-marker-default')

    if (svg) svg.setAttribute('fill', isSelected ? '#0ea5e9' : 'none')
  })
}, { deep: true })

const flyTo = (coordinates: [number, number], zoom = 16) => {
  map.value?.flyTo({ center: coordinates, zoom, duration: 1500 })
}

const toggle3D = () => {
  if (!map.value) return
  is3DMode.value = !is3DMode.value
  map.value.easeTo({ pitch: is3DMode.value ? 60 : 0, bearing: 0, duration: 1000 })
}

defineExpose({ flyTo })
</script>

<template>
  <div class="relative h-full">
    <div ref="mapContainer" class="h-full" />

    <!-- Bottom controls -->
    <div class="absolute bottom-4 left-4 flex items-center gap-2">
      <!-- 3D Toggle button -->
      <button
        @click="toggle3D"
        :class="[
          'px-3 py-1.5 rounded-lg shadow-lg transition-all',
          'text-xs font-semibold border backdrop-blur-sm',
          is3DMode
            ? 'bg-primary-600 text-white border-primary-600 hover:bg-primary-700'
            : 'bg-white/90 text-gray-700 border-gray-200 hover:bg-white'
        ]"
      >
        {{ is3DMode ? '2D' : '3D' }}
      </button>

      <!-- Layer control -->
      <LayerControl
        v-if="map"
        :map="map"
      />
    </div>

    <!-- Property count badge -->
    <div class="absolute bottom-12 right-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-lg shadow-lg border border-gray-200 text-xs font-medium text-gray-700">
      {{ propertyStore.properties.length }} eiendommer
    </div>
  </div>
</template>

<style>
.property-marker-default {
  color: #0ea5e9;
  cursor: pointer;
  transition: transform 0.2s ease-out;
  transform: scale(1);
  will-change: transform;
  background: none !important;
  background-color: transparent !important;
  border: none !important;
  outline: none !important;
  padding: 0 !important;
  margin: 0 !important;
  width: auto !important;
  height: auto !important;
  line-height: 0 !important;
}

.property-marker-hover {
  transform: scale(1.15);
}

.property-marker-selected {
  color: #0ea5e9;
  cursor: pointer;
  transition: transform 0.2s ease-out;
  transform: scale(1.3);
  will-change: transform;
  background: none !important;
  background-color: transparent !important;
  border: none !important;
  outline: none !important;
  padding: 0 !important;
  margin: 0 !important;
  width: auto !important;
  height: auto !important;
  line-height: 0 !important;
}
</style>

<style>
/* Remove ALL default MapLibre marker styles */
.maplibregl-marker,
.maplibregl-marker * {
  background: none !important;
  background-color: transparent !important;
  border: none !important;
  outline: none !important;
  padding: 0 !important;
  margin: 0 !important;
  box-shadow: none !important;
  width: auto !important;
  height: auto !important;
}

.maplibregl-marker svg {
  display: block !important;
  background: transparent !important;
}

/* MapLibre Popup styling */
:deep(.property-popup .maplibregl-popup-content) {
  padding: 8px 12px;
  border-radius: 6px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  border: 1px solid rgba(14, 165, 233, 0.2);
}

:deep(.property-popup .maplibregl-popup-tip) {
  border-top-color: white;
}
</style>

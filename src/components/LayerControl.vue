<script setup lang="ts">
import { ref } from 'vue'
import type { Map } from 'maplibre-gl'
import type { MapLayerConfig, MapLayer } from '@/types/property'

const { map } = defineProps<{ map: Map }>()

const activeLayer = ref<MapLayer>('topo')

const layers: MapLayerConfig[] = [
  { id: 'topo', name: 'Standard', tiles: 'osm' },
  { id: 'grey', name: 'Humanitarian', tiles: 'hot' },
  { id: 'terrain', name: 'CyclOSM', tiles: 'cyclosm' }
]

const tileUrls: Record<string, string[]> = {
  osm: [
    'https://a.tile.openstreetmap.org/{z}/{x}/{y}.png',
    'https://b.tile.openstreetmap.org/{z}/{x}/{y}.png',
    'https://c.tile.openstreetmap.org/{z}/{x}/{y}.png'
  ],
  hot: [
    'https://a.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png',
    'https://b.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png'
  ],
  cyclosm: [
    'https://a.tile-cyclosm.openstreetmap.fr/cyclosm/{z}/{x}/{y}.png',
    'https://b.tile-cyclosm.openstreetmap.fr/cyclosm/{z}/{x}/{y}.png',
    'https://c.tile-cyclosm.openstreetmap.fr/cyclosm/{z}/{x}/{y}.png'
  ]
}

const switchLayer = (layerId: MapLayer, tiles: string) => {
  activeLayer.value = layerId
  const source = map.getSource('osm') as any
  if (!source) return

  source.tiles = tileUrls[tiles]
  map.style.sourceCaches['osm'].clearTiles()
  map.style.sourceCaches['osm'].update(map.transform)
  map.triggerRepaint()
}
</script>

<template>
  <div class="bg-white/90 backdrop-blur-sm rounded-lg shadow-lg border border-gray-200/80 overflow-hidden flex">
    <button
      v-for="(layer, index) in layers"
      :key="layer.id"
      @click="switchLayer(layer.id, layer.tiles)"
      :class="[
        'flex-1 px-3 py-2 text-xs font-medium transition-all relative leading-none',
        activeLayer === layer.id
          ? 'bg-primary-600 text-white'
          : 'bg-white text-gray-600 hover:bg-gray-50',
        index === 0 ? '' : 'border-l border-gray-200'
      ]"
    >
      {{ layer.name }}
    </button>
  </div>
</template>

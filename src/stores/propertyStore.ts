import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { Property } from '@/types/property'
import { mockProperties } from '@/data/mockProperties'
import type { FeatureCollection } from 'geojson'

export const usePropertyStore = defineStore('property', () => {
  // State
  const properties = ref<Property[]>(mockProperties)
  const selectedPropertyIds = ref<string[]>([])

  // Getters
  const selectedProperties = computed(() =>
    properties.value.filter(p => selectedPropertyIds.value.includes(p.id))
  )

  // For backward compatibility - returns the first selected property
  const selectedPropertyId = computed(() =>
    selectedPropertyIds.value.length > 0 ? selectedPropertyIds.value[0] : null
  )

  const selectedProperty = computed(() =>
    selectedProperties.value.length > 0 ? selectedProperties.value[0] : null
  )

  // Actions
  function selectProperty(id: string) {
    if (!selectedPropertyIds.value.includes(id)) {
      selectedPropertyIds.value.push(id)
    }
  }

  function deselectProperty(id: string) {
    selectedPropertyIds.value = selectedPropertyIds.value.filter(pid => pid !== id)
  }

  function clearSelection() {
    selectedPropertyIds.value = []
  }

  function getGeoJSON(): FeatureCollection {
    return {
      type: 'FeatureCollection',
      features: properties.value.map(p => ({
        type: 'Feature',
        properties: {
          id: p.id,
          address: p.address,
          ...p.details
        },
        geometry: p.polygon
      }))
    }
  }

  return {
    properties,
    selectedProperty,
    selectedProperties,
    selectedPropertyId,
    selectedPropertyIds,
    selectProperty,
    deselectProperty,
    clearSelection,
    getGeoJSON
  }
})

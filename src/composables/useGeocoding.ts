import { ref } from 'vue'
import type { GeocodingResult, GeocodingResponse } from '@/types/property'

export function useGeocoding() {
  const results = ref<GeocodingResult[]>([])
  const loading = ref(false)
  const error = ref<string | null>(null)

  const search = async (query: string) => {
    if (!query || query.length < 3) {
      results.value = []
      return
    }

    loading.value = true
    error.value = null

    try {
      const response = await fetch(
        `https://ws.geonorge.no/adresser/v1/sok?sok=${encodeURIComponent(query)}&treffPerSide=10`
      )

      if (!response.ok) {
        throw new Error('Geocoding failed')
      }

      const data: GeocodingResponse = await response.json()
      results.value = data.adresser || []
    } catch (e) {
      error.value = 'Kunne ikke søke etter adresse'
      console.error('Geocoding error:', e)
    } finally {
      loading.value = false
    }
  }

  const clearResults = () => {
    results.value = []
  }

  return {
    results,
    loading,
    error,
    search,
    clearResults
  }
}

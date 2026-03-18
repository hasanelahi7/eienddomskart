<script setup lang="ts">
import { ref, watch } from 'vue'
import { Search, X } from 'lucide-vue-next'
import { useGeocoding } from '@/composables/useGeocoding'

const emit = defineEmits<{ 'select-location': [coordinates: [number, number], address: string] }>()

const query = ref('')
const showResults = ref(false)
const { results, loading, search, clearResults } = useGeocoding()

let searchTimeout: number | undefined

watch(query, (newQuery) => {
  clearTimeout(searchTimeout)
  if (newQuery.length >= 3) {
    searchTimeout = setTimeout(() => {
      search(newQuery)
      showResults.value = true
    }, 300) as unknown as number
  } else {
    clearResults()
    showResults.value = false
  }
})

const selectAddress = (result: any) => {
  const { lon, lat } = result.representasjonspunkt
  query.value = result.adressetekst
  showResults.value = false
  clearResults()
  emit('select-location', [lon, lat], result.adressetekst)
}

const clearSearch = () => {
  query.value = ''
  showResults.value = false
  clearResults()
}
</script>

<template>
  <div class="relative">
    <div class="relative">
      <Search
        class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
        :size="20"
      />
      <input
        v-model="query"
        type="text"
        placeholder="Søk etter adresse i Oslo..."
        class="w-full pl-10 pr-10 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
      />
      <button
        v-if="query"
        @click="clearSearch"
        class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
      >
        <X :size="18" />
      </button>
    </div>

    <!-- Results dropdown -->
    <div
      v-if="showResults && results.length > 0"
      class="absolute z-50 w-full mt-2 bg-white rounded-lg shadow-xl border border-gray-200 max-h-64 overflow-y-auto"
    >
      <button
        v-for="(result, index) in results"
        :key="index"
        @click="selectAddress(result)"
        class="w-full px-4 py-3 text-left hover:bg-primary-50 transition-colors border-b border-gray-100 last:border-b-0"
      >
        <p class="text-sm font-medium text-gray-900">{{ result.adressetekst }}</p>
      </button>
    </div>

    <!-- Loading indicator -->
    <div
      v-if="loading"
      class="absolute z-50 w-full mt-2 bg-white rounded-lg shadow-lg border border-gray-200 px-4 py-3"
    >
      <p class="text-sm text-gray-500">Søker...</p>
    </div>

    <!-- No results -->
    <div
      v-if="showResults && !loading && results.length === 0 && query.length >= 3"
      class="absolute z-50 w-full mt-2 bg-white rounded-lg shadow-lg border border-gray-200 px-4 py-3"
    >
      <p class="text-sm text-gray-500">Ingen adresser funnet</p>
    </div>
  </div>
</template>

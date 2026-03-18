<script setup lang="ts">
import { ref } from 'vue'
import { ChevronLeft, ChevronRight } from 'lucide-vue-next'
import MapView from './components/MapView.vue'
import PropertyDetails from './components/PropertyDetails.vue'
import SearchBar from './components/SearchBar.vue'
import { usePropertyStore } from './stores/propertyStore'

const propertyStore = usePropertyStore()
const sidebarOpen = ref(true)
const mapViewRef = ref<InstanceType<typeof MapView>>()

const toggleSidebar = () => sidebarOpen.value = !sidebarOpen.value
const handleLocationSelect = (coordinates: [number, number]) => mapViewRef.value?.flyTo(coordinates, 16)
</script>

<template>
  <div class="h-screen flex overflow-hidden bg-gray-100">
    <!-- Sidebar -->
    <aside
      v-if="sidebarOpen"
      class="w-96 bg-white shadow-lg overflow-y-auto z-10 flex flex-col"
    >
      <!-- Header -->
      <div class="bg-white border-b border-gray-100 px-5 py-4 sticky top-0 z-20">
        <div class="flex items-center justify-between mb-3">
          <h1 class="text-xl font-bold text-gray-900">
            EiendomsKart
          </h1>
          <button
            @click="toggleSidebar"
            class="p-1.5 hover:bg-gray-100 rounded-md transition-colors"
            title="Skjul sidepanel"
          >
            <ChevronLeft :size="18" class="text-gray-500" />
          </button>
        </div>

        <SearchBar @select-location="handleLocationSelect" />
      </div>

      <!-- Content -->
      <div class="flex-1 px-5 py-4 space-y-3 overflow-y-auto">
        <!-- Property Details - Multiple Selection -->
        <div v-if="propertyStore.selectedProperties.length > 0" class="space-y-3">
          <div
            v-for="property in propertyStore.selectedProperties"
            :key="property.id"
          >
            <PropertyDetails
              :property="property"
              @close="propertyStore.deselectProperty(property.id)"
            />
          </div>
        </div>

        <!-- Welcome message -->
        <div v-else class="space-y-4">
          <div class="bg-gray-50 rounded-lg border border-gray-200 p-4">
            <div class="flex items-start gap-3 mb-3">
              <div class="p-2 bg-primary-100 rounded-lg flex-shrink-0">
                <svg class="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h3 class="font-semibold text-sm text-gray-900 mb-1">Utforsk eiendommer</h3>
                <p class="text-xs text-gray-600 leading-relaxed">
                  Klikk på en eiendom i kartet eller søk etter en adresse for å komme i gang.
                </p>
              </div>
            </div>
            <div class="pt-3 border-t border-gray-200 space-y-1.5 text-xs text-gray-600">
              <div class="flex items-center gap-2">
                <div class="w-1 h-1 bg-primary-500 rounded-full"></div>
                <span><span class="font-medium text-gray-900">{{ propertyStore.properties.length }}</span> eiendommer i Oslo</span>
              </div>
              <div class="flex items-center gap-2">
                <div class="w-1 h-1 bg-primary-500 rounded-full"></div>
                <span>Bytt kartlag i hjørnet</span>
              </div>
              <div class="flex items-center gap-2">
                <div class="w-1 h-1 bg-primary-500 rounded-full"></div>
                <span>Aktiver 3D-visning</span>
              </div>
            </div>
          </div>

          <!-- Stats -->
          <div class="grid grid-cols-2 gap-2">
            <div class="bg-gray-50 rounded-lg p-3 border border-gray-200">
              <p class="text-xs text-gray-600 mb-1">Total</p>
              <p class="text-lg font-bold text-gray-900">{{ propertyStore.properties.length }}</p>
            </div>
            <div class="bg-gray-50 rounded-lg p-3 border border-gray-200">
              <p class="text-xs text-gray-600 mb-1">Område</p>
              <p class="text-lg font-bold text-gray-900">Oslo</p>
            </div>
          </div>
        </div>
      </div>
    </aside>

    <!-- Sidebar toggle button (when closed) -->
    <button
      v-if="!sidebarOpen"
      @click="toggleSidebar"
      class="absolute left-4 top-4 z-30 bg-white p-3 rounded-lg shadow-lg hover:shadow-xl transition-all hover:scale-105"
      title="Vis sidepanel"
    >
      <ChevronRight :size="20" class="text-gray-600" />
    </button>

    <!-- Map -->
    <main class="flex-1 relative">
      <MapView ref="mapViewRef" />
    </main>
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body, #app {
  height: 100%;
  width: 100%;
  overflow: hidden;
}
</style>

<script setup lang="ts">
import { X } from 'lucide-vue-next'
import type { Property } from '@/types/property'

const { property } = defineProps<{ property: Property }>()
const emit = defineEmits<{ close: [] }>()
</script>

<template>
  <div class="relative bg-white border border-gray-200 hover:border-gray-300 transition-colors rounded-lg">
    <!-- Close -->
    <button
      @click="emit('close')"
      class="absolute top-2 right-2 z-10 w-6 h-6 flex items-center justify-center hover:bg-gray-100 rounded transition-colors"
      aria-label="Close"
    >
      <X :size="12" class="text-gray-400" />
    </button>

    <!-- Content -->
    <div class="p-4">
      <!-- Address -->
      <h3 class="text-sm font-medium text-gray-900 mb-1 pr-7">
        {{ property.address }}
      </h3>

      <!-- Type -->
      <div class="text-xs text-gray-500 mb-4">
        {{ property.details.type }}
      </div>

      <!-- Price -->
      <div class="mb-4">
        <div class="text-xl font-semibold text-gray-900 mb-0.5">
          {{ property.details.price.toLocaleString('nb-NO') }} kr
        </div>
        <div class="text-xs text-gray-500">
          {{ Math.round(property.details.price / property.details.size).toLocaleString('nb-NO') }} kr/m²
        </div>
      </div>

      <!-- Info -->
      <div class="space-y-2 text-xs">
        <div class="flex justify-between py-1.5 border-t border-gray-100">
          <span class="text-gray-500">Størrelse</span>
          <span class="text-gray-900 font-medium">{{ property.details.size }} m²</span>
        </div>
        <div class="flex justify-between py-1.5 border-t border-gray-100">
          <span class="text-gray-500">Rom</span>
          <span class="text-gray-900 font-medium">{{ property.details.rooms }}</span>
        </div>
        <div class="flex justify-between py-1.5 border-t border-gray-100">
          <span class="text-gray-500">Byggeår</span>
          <span class="text-gray-900 font-medium">{{ property.details.yearBuilt }}</span>
        </div>
        <div class="flex justify-between py-1.5 border-t border-gray-100">
          <span class="text-gray-500">Solgt</span>
          <span class="text-gray-900 font-medium">{{ new Date(property.details.lastSold).toLocaleDateString('nb-NO', { year: 'numeric', month: 'short' }) }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

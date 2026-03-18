# EiendomsKart

A modern property exploration tool built with Vue 3, TypeScript, and MapLibre GL JS. Displays Oslo properties with interactive mapping, address search, and multiple map layers.

## Quick Start

```bash
npm install
npm run dev
```

## Features

- **Interactive Map**: Click home icons to select properties, hover for tooltips
- **Multiple Selection**: Select multiple properties, cards appear in scrollable sidebar
- **Address Search**: Real-time search using Kartverket's geocoding API
- **Map Layers**: Switch between Standard (OSM), Humanitarian (HOT), and CyclOSM
- **3D View**: Toggle between 2D and 3D perspective
- **Property Details**: Price, size, rooms, year built, last sold date

## Tech Stack

- Vue 3.5 (Composition API)
- TypeScript 5.5
- MapLibre GL JS 4.x
- Pinia (State Management)
- Tailwind CSS 3.x
- Vite 6

## Project Structure

```
src/
├── components/
│   ├── MapView.vue          # Map with home icon markers
│   ├── PropertyDetails.vue  # Property card component
│   ├── SearchBar.vue        # Address search
│   └── LayerControl.vue     # Map layer switcher
├── stores/
│   └── propertyStore.ts     # Property state management
├── composables/
│   └── useGeocoding.ts      # Kartverket API integration
├── data/
│   └── mockProperties.ts    # 20 Oslo properties
└── types/
    └── property.ts          # TypeScript interfaces
```

## Map Tiles

Uses free OpenStreetMap tiles:
- **Standard**: OpenStreetMap default style
- **Humanitarian**: High-contrast HOT style
- **CyclOSM**: Cycling-focused map with terrain

Note: Free tiles are suitable for demos/development. Production apps should use paid services (Mapbox, MapTiler, etc.) for reliability and SLA.

## Build

```bash
npm run build
npm run preview
```

---

Built for Ambita frontend developer interview

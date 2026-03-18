import type { Polygon } from 'geojson'

export type PropertyType = 'Leilighet' | 'Enebolig' | 'Rekkehus' | 'Tomannsbolig'

export interface Property {
  id: string
  address: string
  coordinates: [number, number] // [lng, lat]
  polygon: Polygon
  details: {
    type: PropertyType
    size: number // m²
    price: number // NOK
    lastSold: string // ISO date
    yearBuilt: number
    rooms: number
  }
}

export interface GeocodingResult {
  adressetekst: string
  representasjonspunkt: {
    lon: number
    lat: number
  }
}

export interface GeocodingResponse {
  adresser: GeocodingResult[]
}

export type MapLayer = 'topo' | 'grey' | 'terrain'

export interface MapLayerConfig {
  id: MapLayer
  name: string
  tiles: string
}

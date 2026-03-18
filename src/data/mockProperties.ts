import type { Property } from '@/types/property'

export const mockProperties: Property[] = [
  {
    id: '1',
    address: 'Grünerløkka 15, 0552 Oslo',
    coordinates: [10.7585, 59.9225],
    polygon: {
      type: 'Polygon',
      coordinates: [[
        [10.7580, 59.9223],
        [10.7590, 59.9223],
        [10.7590, 59.9227],
        [10.7580, 59.9227],
        [10.7580, 59.9223]
      ]]
    },
    details: {
      type: 'Leilighet',
      size: 85,
      price: 6500000,
      lastSold: '2023-05-15',
      yearBuilt: 2018,
      rooms: 3
    }
  },
  {
    id: '2',
    address: 'Thorvald Meyers gate 45, 0555 Oslo',
    coordinates: [10.7612, 59.9242],
    polygon: {
      type: 'Polygon',
      coordinates: [[
        [10.7607, 59.9240],
        [10.7617, 59.9240],
        [10.7617, 59.9244],
        [10.7607, 59.9244],
        [10.7607, 59.9240]
      ]]
    },
    details: {
      type: 'Leilighet',
      size: 72,
      price: 5800000,
      lastSold: '2024-02-10',
      yearBuilt: 2015,
      rooms: 2
    }
  },
  {
    id: '3',
    address: 'Markveien 32, 0554 Oslo',
    coordinates: [10.7545, 59.9213],
    polygon: {
      type: 'Polygon',
      coordinates: [[
        [10.7540, 59.9211],
        [10.7550, 59.9211],
        [10.7550, 59.9215],
        [10.7540, 59.9215],
        [10.7540, 59.9211]
      ]]
    },
    details: {
      type: 'Enebolig',
      size: 145,
      price: 9800000,
      lastSold: '2022-11-20',
      yearBuilt: 2010,
      rooms: 5
    }
  },
  {
    id: '4',
    address: 'Sofienberggata 22, 0558 Oslo',
    coordinates: [10.7631, 59.9195],
    polygon: {
      type: 'Polygon',
      coordinates: [[
        [10.7626, 59.9193],
        [10.7636, 59.9193],
        [10.7636, 59.9197],
        [10.7626, 59.9197],
        [10.7626, 59.9193]
      ]]
    },
    details: {
      type: 'Leilighet',
      size: 95,
      price: 7200000,
      lastSold: '2023-08-05',
      yearBuilt: 2020,
      rooms: 3
    }
  },
  {
    id: '5',
    address: 'Olaf Ryes plass 7, 0552 Oslo',
    coordinates: [10.7598, 59.9218],
    polygon: {
      type: 'Polygon',
      coordinates: [[
        [10.7593, 59.9216],
        [10.7603, 59.9216],
        [10.7603, 59.9220],
        [10.7593, 59.9220],
        [10.7593, 59.9216]
      ]]
    },
    details: {
      type: 'Leilighet',
      size: 68,
      price: 5200000,
      lastSold: '2024-01-12',
      yearBuilt: 2012,
      rooms: 2
    }
  },
  {
    id: '6',
    address: 'Birkelunden 12, 0555 Oslo',
    coordinates: [10.7568, 59.9232],
    polygon: {
      type: 'Polygon',
      coordinates: [[
        [10.7563, 59.9230],
        [10.7573, 59.9230],
        [10.7573, 59.9234],
        [10.7563, 59.9234],
        [10.7563, 59.9230]
      ]]
    },
    details: {
      type: 'Rekkehus',
      size: 118,
      price: 8500000,
      lastSold: '2023-03-22',
      yearBuilt: 2016,
      rooms: 4
    }
  },
  {
    id: '7',
    address: 'Sannergata 8, 0557 Oslo',
    coordinates: [10.7612, 59.9205],
    polygon: {
      type: 'Polygon',
      coordinates: [[
        [10.7607, 59.9203],
        [10.7617, 59.9203],
        [10.7617, 59.9207],
        [10.7607, 59.9207],
        [10.7607, 59.9203]
      ]]
    },
    details: {
      type: 'Leilighet',
      size: 92,
      price: 6900000,
      lastSold: '2023-10-18',
      yearBuilt: 2019,
      rooms: 3
    }
  },
  {
    id: '8',
    address: 'Seilduksgata 25, 0553 Oslo',
    coordinates: [10.7555, 59.9248],
    polygon: {
      type: 'Polygon',
      coordinates: [[
        [10.7550, 59.9246],
        [10.7560, 59.9246],
        [10.7560, 59.9250],
        [10.7550, 59.9250],
        [10.7550, 59.9246]
      ]]
    },
    details: {
      type: 'Tomannsbolig',
      size: 135,
      price: 10200000,
      lastSold: '2022-09-14',
      yearBuilt: 2008,
      rooms: 5
    }
  },
  {
    id: '9',
    address: 'Helgesens gate 34, 0553 Oslo',
    coordinates: [10.7525, 59.9238],
    polygon: {
      type: 'Polygon',
      coordinates: [[
        [10.7520, 59.9236],
        [10.7530, 59.9236],
        [10.7530, 59.9240],
        [10.7520, 59.9240],
        [10.7520, 59.9236]
      ]]
    },
    details: {
      type: 'Leilighet',
      size: 78,
      price: 6100000,
      lastSold: '2024-03-08',
      yearBuilt: 2017,
      rooms: 2
    }
  },
  {
    id: '10',
    address: 'Fredensborgveien 18, 0177 Oslo',
    coordinates: [10.7485, 59.9198],
    polygon: {
      type: 'Polygon',
      coordinates: [[
        [10.7480, 59.9196],
        [10.7490, 59.9196],
        [10.7490, 59.9200],
        [10.7480, 59.9200],
        [10.7480, 59.9196]
      ]]
    },
    details: {
      type: 'Leilighet',
      size: 105,
      price: 7800000,
      lastSold: '2023-06-25',
      yearBuilt: 2021,
      rooms: 4
    }
  },
  {
    id: '11',
    address: 'Schous plass 3, 0552 Oslo',
    coordinates: [10.7642, 59.9215],
    polygon: {
      type: 'Polygon',
      coordinates: [[
        [10.7637, 59.9213],
        [10.7647, 59.9213],
        [10.7647, 59.9217],
        [10.7637, 59.9217],
        [10.7637, 59.9213]
      ]]
    },
    details: {
      type: 'Leilighet',
      size: 88,
      price: 6700000,
      lastSold: '2023-12-05',
      yearBuilt: 2014,
      rooms: 3
    }
  },
  {
    id: '12',
    address: 'Nordre gate 11, 0551 Oslo',
    coordinates: [10.7502, 59.9222],
    polygon: {
      type: 'Polygon',
      coordinates: [[
        [10.7497, 59.9220],
        [10.7507, 59.9220],
        [10.7507, 59.9224],
        [10.7497, 59.9224],
        [10.7497, 59.9220]
      ]]
    },
    details: {
      type: 'Enebolig',
      size: 156,
      price: 11500000,
      lastSold: '2022-07-18',
      yearBuilt: 2005,
      rooms: 6
    }
  },
  {
    id: '13',
    address: 'Toftes gate 42, 0556 Oslo',
    coordinates: [10.7595, 59.9188],
    polygon: {
      type: 'Polygon',
      coordinates: [[
        [10.7590, 59.9186],
        [10.7600, 59.9186],
        [10.7600, 59.9190],
        [10.7590, 59.9190],
        [10.7590, 59.9186]
      ]]
    },
    details: {
      type: 'Leilighet',
      size: 62,
      price: 4800000,
      lastSold: '2024-02-28',
      yearBuilt: 2011,
      rooms: 2
    }
  },
  {
    id: '14',
    address: 'Rodeløkka 28, 0554 Oslo',
    coordinates: [10.7562, 59.9202],
    polygon: {
      type: 'Polygon',
      coordinates: [[
        [10.7557, 59.9200],
        [10.7567, 59.9200],
        [10.7567, 59.9204],
        [10.7557, 59.9204],
        [10.7557, 59.9200]
      ]]
    },
    details: {
      type: 'Rekkehus',
      size: 125,
      price: 9200000,
      lastSold: '2023-04-10',
      yearBuilt: 2013,
      rooms: 4
    }
  },
  {
    id: '15',
    address: 'Fossveien 14, 0551 Oslo',
    coordinates: [10.7518, 59.9255],
    polygon: {
      type: 'Polygon',
      coordinates: [[
        [10.7513, 59.9253],
        [10.7523, 59.9253],
        [10.7523, 59.9257],
        [10.7513, 59.9257],
        [10.7513, 59.9253]
      ]]
    },
    details: {
      type: 'Leilighet',
      size: 98,
      price: 7400000,
      lastSold: '2023-09-20',
      yearBuilt: 2022,
      rooms: 3
    }
  },
  {
    id: '16',
    address: 'Bentsebrugata 5, 0476 Oslo',
    coordinates: [10.7658, 59.9228],
    polygon: {
      type: 'Polygon',
      coordinates: [[
        [10.7653, 59.9226],
        [10.7663, 59.9226],
        [10.7663, 59.9230],
        [10.7653, 59.9230],
        [10.7653, 59.9226]
      ]]
    },
    details: {
      type: 'Leilighet',
      size: 75,
      price: 5900000,
      lastSold: '2024-01-22',
      yearBuilt: 2016,
      rooms: 2
    }
  },
  {
    id: '17',
    address: 'Sandakerveien 88, 0484 Oslo',
    coordinates: [10.7465, 59.9242],
    polygon: {
      type: 'Polygon',
      coordinates: [[
        [10.7460, 59.9240],
        [10.7470, 59.9240],
        [10.7470, 59.9244],
        [10.7460, 59.9244],
        [10.7460, 59.9240]
      ]]
    },
    details: {
      type: 'Tomannsbolig',
      size: 142,
      price: 10800000,
      lastSold: '2022-12-15',
      yearBuilt: 2007,
      rooms: 5
    }
  },
  {
    id: '18',
    address: 'Løkkeveien 23, 0585 Oslo',
    coordinates: [10.7625, 59.9252],
    polygon: {
      type: 'Polygon',
      coordinates: [[
        [10.7620, 59.9250],
        [10.7630, 59.9250],
        [10.7630, 59.9254],
        [10.7620, 59.9254],
        [10.7620, 59.9250]
      ]]
    },
    details: {
      type: 'Leilighet',
      size: 82,
      price: 6300000,
      lastSold: '2023-11-08',
      yearBuilt: 2019,
      rooms: 3
    }
  },
  {
    id: '19',
    address: 'Geitmyrsveien 45, 0455 Oslo',
    coordinates: [10.7535, 59.9268],
    polygon: {
      type: 'Polygon',
      coordinates: [[
        [10.7530, 59.9266],
        [10.7540, 59.9266],
        [10.7540, 59.9270],
        [10.7530, 59.9270],
        [10.7530, 59.9266]
      ]]
    },
    details: {
      type: 'Enebolig',
      size: 168,
      price: 12300000,
      lastSold: '2022-10-12',
      yearBuilt: 2003,
      rooms: 6
    }
  },
  {
    id: '20',
    address: 'Møllerveien 17, 0179 Oslo',
    coordinates: [10.7448, 59.9215],
    polygon: {
      type: 'Polygon',
      coordinates: [[
        [10.7443, 59.9213],
        [10.7453, 59.9213],
        [10.7453, 59.9217],
        [10.7443, 59.9217],
        [10.7443, 59.9213]
      ]]
    },
    details: {
      type: 'Leilighet',
      size: 91,
      price: 6850000,
      lastSold: '2023-07-14',
      yearBuilt: 2020,
      rooms: 3
    }
  }
]

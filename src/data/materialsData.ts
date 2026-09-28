import { TruckOption, SandType, FutureMaterial } from '../types/materials';

export const TRUCK_OPTIONS: TruckOption[] = [
  {
    id: 'aboboya',
    name: 'Aboboya (Tricycle)',
    price: 250,
    subtitle: 'Compact Site Delivery',
    capacityText: '~1.0 m³ Payload',
    tonnageEstimate: '~1 Ton',
    bestFor: 'Narrow compound access, perimeter repairs, small plastering patches, or paving fixes.',
    badge: 'Best for Tight Access',
    iconType: 'tricycle',
    image: '/images/truck-aboboya.jpg',
    gateAccess: 'Min 1.5m Gate • Alley Access',
    tier: 'standard'
  },
  {
    id: 'kia-small',
    name: 'Kia Small',
    price: 250,
    subtitle: 'Light Duty Tipper Truck',
    capacityText: '~1.8 m³ Payload',
    tonnageEstimate: '~1.5 - 2 Tons',
    bestFor: 'Small residential projects, septic tank casing, room flooring, and quick topping up.',
    badge: 'Economical',
    iconType: 'light-truck',
    image: '/images/truck-kia-small.jpg',
    gateAccess: 'Min 2.2m Gate • Residential Standard',
    tier: 'standard'
  },
  {
    id: 'kia-medium',
    name: 'Kia Bongo (Medium)',
    price: 500,
    subtitle: 'Medium Bongo Tipper Truck',
    capacityText: '~3.5 m³ Payload',
    tonnageEstimate: '~3 - 4 Tons',
    bestFor: 'Fence walls, lintels, decking support, pillar casting, and standard room foundations.',
    badge: 'Popular Choice',
    isPopular: true,
    iconType: 'medium-truck',
    image: '/images/truck-kia-medium.jpg',
    gateAccess: 'Min 2.5m Gate • Compounds & Sites',
    tier: 'standard'
  },
  {
    id: 'kia-mighty',
    name: 'Kia Mighty (Large)',
    price: 700,
    subtitle: 'Large Commercial Dump Tipper',
    capacityText: '~5.5 m³ Payload',
    tonnageEstimate: '~6 - 7 Tons',
    bestFor: 'Complete building foundations, substantial block molding, and major concrete slabs.',
    badge: 'Best Value per Trip',
    isPopular: true,
    iconType: 'heavy-tipper',
    image: '/images/truck-kia-mighty.jpg',
    gateAccess: 'Min 3.0m Gate • Wide Commercial Road',
    tier: 'bulk'
  },
  {
    id: 'kia-rhino',
    name: 'Kia Rhino (Extra Large)',
    price: 1500,
    subtitle: 'Extra Large 6-Wheeler Bulk Tipper',
    capacityText: '~8 - 10 m³ Payload',
    tonnageEstimate: '~8 - 10 Tons',
    bestFor: 'Multi-story structures, massive commercial developments, estate foundations, and bulk site stock.',
    badge: 'Maximum Bulk Volume',
    iconType: 'super-tipper',
    image: '/images/truck-kia-rhino.jpg',
    gateAccess: 'Min 3.4m Gate • Clear Overhead Cables',
    tier: 'bulk'
  }
];

export const SAND_TYPES: SandType[] = [
  {
    id: 'sharp',
    name: 'Sharp Sand (Washed / River)',
    description: 'Coarse, clean, high-strength sand free of silt and clay. Essential for concrete casting, columns, beams, and high-tensile block production.',
    recommendedUse: 'Foundations, Concrete Slabs, Pillars, Sandcrete Blocks',
    colorGrade: 'Amber Golden'
  },
  {
    id: 'plastering',
    name: 'Plastering / Soft Sand',
    description: 'Fine-grained, smoothly screened sand that yields ultra-smooth rendering, wall plastering, mortar jointing, and fine masonry work.',
    recommendedUse: 'Wall Plastering, Screeding, Interior Rendering',
    colorGrade: 'Warm Tan'
  },
  {
    id: 'filling',
    name: 'Filling Sand / Red Earth',
    description: 'Dense, compactable earth sand specifically engineered for solid foundation backfilling, ground leveling, and road base preparation.',
    recommendedUse: 'Foundation Backfilling, Compaction, Site Leveling',
    colorGrade: 'Terracotta Red'
  }
];

export const FUTURE_MATERIALS: FutureMaterial[] = [
  {
    id: 'cement',
    name: 'Portland Cement (32.5R & 42.5R)',
    category: 'Binding Agents',
    description: 'Top grade bagged cement from trusted manufacturers (Ghacem, Dangote, CIMAF) for structural durability.',
    status: 'Coming Soon',
    badgeColor: '#3b82f6',
    icon: 'Package'
  },
  {
    id: 'rebar',
    name: 'High-Tensile Iron Rods & Steel',
    category: 'Structural Steel',
    description: 'Certified deformed steel rebar (10mm, 12mm, 16mm, 20mm, 25mm), binding wire, and heavy BRC mesh.',
    status: 'Coming Soon',
    badgeColor: '#10b981',
    icon: 'Layers'
  },
  {
    id: 'stones',
    name: 'Quarry Stones & Chippings',
    category: 'Aggregates',
    description: 'Granite quarry stones (1/4", 1/2", 3/4") and quarry dust for high-load structural concrete mixes.',
    status: 'On Request',
    badgeColor: '#f59e0b',
    icon: 'Boxes'
  },
  {
    id: 'blocks',
    name: 'Solid & Hollow Concrete Blocks',
    category: 'Masonry',
    description: 'Machine-vibrated 5-inch and 6-inch solid and hollow sandcrete blocks with verified load bearing specs.',
    status: 'Coming Soon',
    badgeColor: '#8b5cf6',
    icon: 'Grid'
  },
  {
    id: 'roofing',
    name: 'Aluzinc Roofing & Structural Timber',
    category: 'Roofing & Wood',
    description: 'Corrugated and IBR roofing sheets, treated hardwood rafters, 2x4s, and premium marine plywood.',
    status: 'Coming Soon',
    badgeColor: '#ec4899',
    icon: 'Home'
  }
];

export const DISPATCH_CONTACT = {
  phoneDisplay: '+233 55 199 3820',
  phoneRaw: '233551993820',
  whatsappUrl: 'https://wa.me/233551993820',
  dispatchEmail: 'philipkone45@gmail.com',
  serviceAreas: 'Greater Accra, Kasoa, Tema, Dawhenya, Amasaman & Surrounding Environs',
  deliveryTime: 'Same-Day & Scheduled 24h Site Dispatch'
};

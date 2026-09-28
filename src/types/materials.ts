export type SandCategory = 'sharp' | 'plastering' | 'filling';

export interface TruckOption {
  id: string;
  name: string;
  price: number; // in GHS
  subtitle: string;
  capacityText: string;
  tonnageEstimate: string;
  bestFor: string;
  badge?: string;
  isPopular?: boolean;
  iconType: 'tricycle' | 'light-truck' | 'medium-truck' | 'heavy-tipper' | 'super-tipper';
  image: string;
  gateAccess?: string;
  tier?: 'standard' | 'bulk';
}

export interface SandType {
  id: SandCategory;
  name: string;
  description: string;
  recommendedUse: string;
  colorGrade: string;
}

export interface OrderFormState {
  truckId: string;
  sandType: SandCategory;
  quantity: number;
  fullName: string;
  phoneNumber: string;
  siteLocation: string;
  landmark: string;
  deliveryDate: string;
  additionalNotes: string;
}

export interface FutureMaterial {
  id: string;
  name: string;
  category: string;
  description: string;
  status: 'In-Stock' | 'Coming Soon' | 'On Request';
  badgeColor: string;
  icon: string;
}

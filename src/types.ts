export type NavigationTab = 
  | 'home' 
  | 'how-it-works' 
  | 'campaigns' 
  | 'bundles' 
  | 'growers' 
  | 'impact' 
  | 'member-hub'
  | 'academic-plan';

export interface CrateBundle {
  id: string;
  name: string;
  subtitle: string;
  targetPersona: string;
  price: number;
  estimatedSupermarketCost: number;
  servesHousehold: string;
  weightApprox: string;
  items: string[];
  image: string;
  saOrigin: string[];
  isPopular?: boolean;
  category: 'family' | 'sharehouse' | 'budget' | 'solidarity';
}

export interface GrowerProfile {
  id: string;
  name: string;
  farmName: string;
  region: string;
  distanceFromAdelaide: number; // in km
  specialtyProduce: string[];
  bio: string;
  image: string;
  farmingPractices: string;
  yearsSupplying: number;
}

export interface CampaignPool {
  id: string;
  cycleNumber: number;
  deliveryDate: string;
  cutoffDate: string;
  targetAmount: number;
  currentAmount: number;
  householdsPledged: number;
  targetHouseholds: number;
  status: 'funding' | 'locked' | 'harvesting' | 'ready-for-pickup';
  pickupLocation: {
    name: string;
    address: string;
    suburb: string;
    operatingHours: string;
  };
}

export interface MemberPersona {
  id: 'tanya' | 'jordan';
  name: string;
  role: string;
  age: number;
  suburb: string;
  householdContext: string;
  weeklyGrocerySpend: number;
  preferredBundleId: string;
  painPoints: string[];
  keyBenefits: string[];
  avatarInitial: string;
}

export interface ShareHouseRoommate {
  id: string;
  name: string;
  sharePercentage: number;
  paid: boolean;
  avatar: string;
}

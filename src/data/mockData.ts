import { CrateBundle, GrowerProfile, CampaignPool, MemberPersona } from '../types';

import heroImg from '../assets/images/crate_mates_hero_1794212693827.jpg';
import growerHillsImg from '../assets/images/adelaide_grower_hills_1794212694441.jpg';
import familyCrateImg from '../assets/images/family_crate_bundle_1794212694383.jpg';
import collectionPointImg from '../assets/images/enfield_collection_point_1794212695152.jpg';

export const ASSET_IMAGES = {
  hero: heroImg,
  growerHills: growerHillsImg,
  familyCrate: familyCrateImg,
  collectionPoint: collectionPointImg,
};

export const CRATE_BUNDLES: CrateBundle[] = [
  {
    id: 'family-staples',
    name: 'Enfield Family Staples Crate',
    subtitle: 'Abundant seasonal vegetables, fruit & staples for hungry households',
    targetPersona: 'Tanya Brooks (Parent of 3, Enfield)',
    price: 78.00,
    estimatedSupermarketCost: 114.50,
    servesHousehold: '3–5 people (approx. 5–7 days)',
    weightApprox: '14.5 kg produce + bakery & eggs',
    category: 'family',
    isPopular: true,
    image: familyCrateImg,
    saOrigin: ['Adelaide Hills', 'Barossa Valley', 'Riverland', 'Virginia Plains'],
    items: [
      '2.5kg Adelaide Hills Pink Lady & Royal Gala Apples',
      '2.0kg Riverland Navel Oranges',
      '3.0kg Barossa Valley Washed Dutch Cream Potatoes',
      '1.5kg Adelaide Plains Brown Onions',
      '1.0kg Local Carrots & Sweet Corn (4 cobs)',
      '1x Large Broccoli head & Cauliflower half',
      '1x Crisp Cos Lettuce & 250g English Spinach',
      '1kg Hydroponic Truss Tomatoes (Virginia)',
      '1 Dozen Pasture-Raised Eggs (Adelaide Hills)',
      '1x Fresh Sourdough Batch Loaf (Port Adelaide artisan bakery)'
    ]
  },
  {
    id: 'sharehouse-box',
    name: 'Prospect Share-House Fresh Box',
    subtitle: 'Balanced healthy produce portioned for quick meals with zero food waste',
    targetPersona: 'Jordan Tran (Student / Café worker, Prospect)',
    price: 44.00,
    estimatedSupermarketCost: 65.00,
    servesHousehold: '2–3 flatmates (approx. 4–5 days)',
    weightApprox: '8.2 kg fresh produce + eggs',
    category: 'sharehouse',
    isPopular: false,
    image: heroImg,
    saOrigin: ['Northern Adelaide Plains', 'Riverland', 'Fleurieu'],
    items: [
      '1.5kg Mixed Seasonal Fruit (Riverland mandarins & bananas)',
      '1.0kg Baby Chat Potatoes (Nuriootpa)',
      '500g Dutch Carrots & Zucchini (Adelaide Plains)',
      '1x Lebanese Cucumbers & Red Bell Pepper pack',
      '250g Cherry Tomatoes (Virginia glasshouses)',
      '1x Tuscan Kale bunch & Fresh Basil pot',
      '1/2 Dozen Pasture Eggs (Fleurieu Peninsula)',
      '1x Share-House recipe card with 3 budget meals'
    ]
  },
  {
    id: 'midweek-topup',
    name: 'Mid-Week Veggie Top-Up',
    subtitle: 'Crisp greens, cooking essentials & salad staples to refresh the fridge',
    targetPersona: 'Solo cooks & budget-conscious couples',
    price: 32.00,
    estimatedSupermarketCost: 46.50,
    servesHousehold: '1–2 people (mid-week replenishment)',
    weightApprox: '5.5 kg mixed vegetables',
    category: 'budget',
    isPopular: false,
    image: heroImg,
    saOrigin: ['Adelaide Plains', 'Barossa'],
    items: [
      '1x Crisp Butterhead Lettuce',
      '1x Broccoli head',
      '500g Roma Tomatoes',
      '1.0kg Carrots & Celery half',
      '1.0kg Red Sweet Potatoes',
      'Fresh Rosemary & Continental Parsley sprigs'
    ]
  },
  {
    id: 'solidarity-crate',
    name: 'Pay-It-Forward Solidarity Crate',
    subtitle: 'Full nutritious crate donated to an Enfield/Prospect family facing hardship',
    targetPersona: 'Community support via Enfield Community Centre',
    price: 50.00,
    estimatedSupermarketCost: 85.00,
    servesHousehold: '1 local family in financial stress',
    weightApprox: '12.0 kg nutritious staples',
    category: 'solidarity',
    isPopular: false,
    image: collectionPointImg,
    saOrigin: ['100% South Australian Growers'],
    items: [
      'Fresh fruit box (Apples & Oranges)',
      'Potatoes, Onions, Carrots & Greens',
      '1 Dozen fresh local eggs',
      'Wholesome artisan fresh bread loaf',
      'Zero admin fees deducted: 100% goes to local produce'
    ]
  }
];

export const GROWER_PROFILES: GrowerProfile[] = [
  {
    id: 'adelaide-hills-orchards',
    name: 'David & Merrilyn Schultz',
    farmName: 'Forest Range Orchard Collective',
    region: 'Adelaide Hills, SA',
    distanceFromAdelaide: 28,
    specialtyProduce: ['Pink Lady Apples', 'Fuji Apples', 'Packham Pears', 'Plums'],
    farmingPractices: 'Integrated Pest Management (IPM), low spray, solar cold storage',
    yearsSupplying: 34,
    bio: 'Fourth-generation orchardists nestled in the cool microclimate of Forest Range. By cutting out supermarket distribution centres that hold fruit in cold gas storage for months, Crate Mates members get apples harvested within 48 hours of eating.',
    image: growerHillsImg
  },
  {
    id: 'riverland-citrus',
    name: 'Gianni & Rosa Cavallaro',
    farmName: 'Renmark Riverbend Citrus',
    region: 'Riverland, SA',
    distanceFromAdelaide: 254,
    specialtyProduce: ['Washington Navels', 'Imperial Mandarins', 'Eureka Limes'],
    farmingPractices: 'Drip micro-irrigation using Murray River allocations with zero waste runoff',
    yearsSupplying: 22,
    bio: 'Family run farm along the Murray. They produce sweet, naturally ripened oranges that do not undergo artificial ethylene de-greening or supermarket wax coatings.',
    image: heroImg
  },
  {
    id: 'adelaide-plains-greens',
    name: 'Thanh & Mai Nguyen',
    farmName: 'Virginia Hydro & Glasshouse Greens',
    region: 'Northern Adelaide Plains, SA',
    distanceFromAdelaide: 32,
    specialtyProduce: ['Truss Tomatoes', 'Baby Cucumbers', 'Cos Lettuce', 'Asian Greens'],
    farmingPractices: 'Recirculating water hydroponics, biological insect controls (beneficial wasps)',
    yearsSupplying: 18,
    bio: 'Situated right on Adelaide’s northern doorstep. Their daily harvests travel straight down Main North Road to our Enfield hub with almost zero transport lag.',
    image: heroImg
  },
  {
    id: 'barossa-earth-roots',
    name: 'Jock & Sarah Lindner',
    farmName: 'Barossa Earth & Roots',
    region: 'Nuriootpa, Barossa Valley, SA',
    distanceFromAdelaide: 72,
    specialtyProduce: ['Dutch Cream Potatoes', 'Heirloom Carrots', 'Beetroot', 'Brown Onions'],
    farmingPractices: 'Organic compost enrichment, no synthetic fungicides, regenerative soil cover cropping',
    yearsSupplying: 12,
    bio: 'Dedicated to living soils in the Barossa. Their unwashed, farm-fresh spuds retain natural protective soil layers, lasting 3x longer in customer pantries than supermarket bleached potatoes.',
    image: familyCrateImg
  }
];

export const CURRENT_CAMPAIGN: CampaignPool = {
  id: 'pool-cycle-04',
  cycleNumber: 4,
  deliveryDate: 'Thursday, 12 November 2026',
  cutoffDate: 'Monday, 9 November 2026 (11:59 PM ACST)',
  targetAmount: 10000,
  currentAmount: 7620,
  householdsPledged: 76,
  targetHouseholds: 100,
  status: 'funding',
  pickupLocation: {
    name: 'Enfield Community Centre & Verandah',
    address: '540 Regency Road',
    suburb: 'Enfield SA 5085',
    operatingHours: 'Thursday: 8:00 AM – 11:30 AM & 4:30 PM – 6:30 PM'
  }
};

export const MEMBER_PERSONAS: MemberPersona[] = [
  {
    id: 'tanya',
    name: 'Tanya Brooks',
    role: 'Part-time Aged-Care Worker & Parent of 3',
    age: 38,
    suburb: 'Enfield SA',
    householdContext: 'Partner is an electrical apprentice; rents a 3-bedroom home near Regency Road.',
    weeklyGrocerySpend: 240,
    preferredBundleId: 'family-staples',
    avatarInitial: 'TB',
    painPoints: [
      'Supermarket fresh produce keeps rising in price while spoiling within 2-3 days.',
      'Skeptical of paying upfront without guarantee the food will arrive.',
      'Strict Thursday schedule around work shifts and school drop-offs.'
    ],
    keyBenefits: [
      'Saves ~$36 per week ($1,870/yr) compared to standard supermarket baskets.',
      'Produce lasts twice as long because it is farm-fresh within 48 hours.',
      'Dedicated escrow funds and automatic refund if pool threshold is not met.',
      'Fast 2-minute drive-through QR pickup on her afternoon commute.'
    ]
  },
  {
    id: 'jordan',
    name: 'Jordan Tran',
    role: 'Part-time Student & Prospect Café Barista',
    age: 24,
    suburb: 'Prospect SA',
    householdContext: 'Shares a 3-bedroom rental on Prospect Road with 2 university mates.',
    weeklyGrocerySpend: 85,
    preferredBundleId: 'sharehouse-box',
    avatarInitial: 'JT',
    painPoints: [
      'Irregular fortnightly casual income and tight shared-house budget.',
      'Supermarket portion sizes lead to half-empty bags rotting in the fridge.',
      'Hates awkward conversations chasing flatmates for shared grocery money.'
    ],
    keyBenefits: [
      'Prospect Share-House Box costs $44 total ($14.65 per flatmate).',
      'Shared Roommate Wallet splits payments automatically before cutoff.',
      'Zero lock-in contracts; can pause during university exam weeks.',
      'Supports local SA growers rather than multinational supermarket duopolies.'
    ]
  }
];

export const IMPACT_METRICS = {
  dollarsKeptInSA: 42850,
  averageHouseholdAnnualSavings: 1420,
  co2KgsPrevented: 3180,
  averageSupplyKm: 78,
  supermarketSupplyKm: 2400,
  payItForwardCratesDistributed: 48,
  participatingGrowers: 11
};

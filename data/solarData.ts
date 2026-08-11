export interface SolarTier {
  id: string;
  name: string;
  capacity: string;
  badge?: string;
  priceRaw: number; // in INR
  subsidyRaw: number; // PM Surya Ghar subsidy
  finalPriceRaw: number;
  dailyGeneration: string;
  annualSavings: string;
  paybackPeriod: string;
  roofArea: string;
  recommendedFor: string;
  appliances: string[];
  specs: {
    panelType: string;
    inverterEfficiency: string;
    warranty: string;
    monitoring: string;
    batterySupport: string;
  };
}

export const SOLAR_TIERS: SolarTier[] = [
  {
    id: '3kw',
    name: 'Essential Home',
    capacity: '3 kW System',
    badge: 'Best for 2-3 BHK',
    priceRaw: 175000,
    subsidyRaw: 78000,
    finalPriceRaw: 97000,
    dailyGeneration: '12 – 15 kWh / day',
    annualSavings: '₹55,000 / year',
    paybackPeriod: '2.4 Years',
    roofArea: '300 sq. ft',
    recommendedFor: 'Apartments, 2-3 BHK Independent Homes',
    appliances: [
      '1x 1.5 Ton Inverter AC',
      'Double Door Refrigerator',
      'Washing Machine & Microwave',
      '10x LED Lights & 4x Fans',
      'Water Geyser (Timed)'
    ],
    specs: {
      panelType: '550W TOPCon Monocrystalline Bifacial',
      inverterEfficiency: '98.6% MPPT Smart Hybrid',
      warranty: '25 Year Linear Power Warranty',
      monitoring: 'AI Mobile App + Real-time Grid Telemetry',
      batterySupport: 'Lithium LFP Ready (5kWh Optional)'
    }
  },
  {
    id: '5kw',
    name: 'Executive Family',
    capacity: '5 kW System',
    badge: '⭐ Most Popular',
    priceRaw: 285000,
    subsidyRaw: 78000,
    finalPriceRaw: 207000,
    dailyGeneration: '22 – 26 kWh / day',
    annualSavings: '₹1,02,000 / year',
    paybackPeriod: '2.8 Years',
    roofArea: '500 sq. ft',
    recommendedFor: '3-4 BHK Villas, Dual Floor Homes, Light EV Owners',
    appliances: [
      '2x 1.5 Ton ACs Simultaneously',
      'Full Home Lighting & Entertainment',
      'Heavy Appliances (Dishwasher, Oven)',
      'Submersible Water Pump (2 HP)',
      'Single EV Charger (Level 1/2)'
    ],
    specs: {
      panelType: '575W N-Type TOPCon Dual-Glass Panels',
      inverterEfficiency: '98.9% High Voltage Hybrid',
      warranty: '25 Year Performance + 12 Year Product Warranty',
      monitoring: '24/7 Cellular + Wi-Fi Cloud Diagnostic',
      batterySupport: 'Modular Stackable LFP (up to 15kWh)'
    }
  },
  {
    id: '8kw',
    name: 'Luxury Estate',
    capacity: '8 kW System',
    badge: 'High Performance',
    priceRaw: 430000,
    subsidyRaw: 78000,
    finalPriceRaw: 352000,
    dailyGeneration: '36 – 42 kWh / day',
    annualSavings: '₹1,68,000 / year',
    paybackPeriod: '3.1 Years',
    roofArea: '800 sq. ft',
    recommendedFor: 'Large Independent Estates, Home Elevators, Fast EV Charging',
    appliances: [
      '4x Inverter Air Conditioners',
      'Home Elevator / Pool Pump',
      'Dual EV Charging Stations (7.4 kW)',
      'Full Smart Automation & HVAC',
      'Complete Grid Independence'
    ],
    specs: {
      panelType: '600W+ Ultra-Efficient Glass-Glass Modules',
      inverterEfficiency: '99.1% Dual-MPPT Commercial Grade',
      warranty: '30 Year Guaranteed Power Output (>87.4%)',
      monitoring: 'Enterprise AI Predictive Maintenance',
      batterySupport: 'Included 10kWh High-Voltage Battery Bank'
    }
  },
  {
    id: '12kw',
    name: 'Commercial Powerhouse',
    capacity: '12+ kW System',
    badge: 'Max ROI & Battery',
    priceRaw: 650000,
    subsidyRaw: 78000,
    finalPriceRaw: 572000,
    dailyGeneration: '55 – 65+ kWh / day',
    annualSavings: '₹2,55,000 / year',
    paybackPeriod: '3.2 Years',
    roofArea: '1,200+ sq. ft',
    recommendedFor: 'Boutique Offices, Farmhouses, Commercial Buildings, Micro-grids',
    appliances: [
      'Centralized VRF/VRV Air Conditioning',
      'Industrial Machinery & Server Racks',
      'Multi-Vehicle EV Fleet Charging',
      '100% Zero Electricity Bill Target',
      'Grid Export Net-Metering'
    ],
    specs: {
      panelType: 'Aiko Neostar ABC N-Type 620W Modules',
      inverterEfficiency: '99.4% Commercial Three-Phase Inverter',
      warranty: '25 Year Comprehensive Triple Protection',
      monitoring: 'Dedicated Operations Center Remote Sync',
      batterySupport: 'Industrial Scalable Storage (20kWh – 50kWh)'
    }
  }
];

export const INSTALLATION_STEPS = [
  {
    step: '01',
    title: 'Professional Site Visit & Solar Feasibility Study',
    subtitle: 'Engineering Site Survey',
    description: 'Our certified solar engineers conduct a detailed professional site visit to evaluate roof structural capacity, sun angles, shading patterns, and electrical feasibility for solar installation.',
    duration: '24 Hours',
    icon: 'Scan'
  },
  {
    step: '02',
    title: 'Smart Permitting & KSEB Net-Metering Approval',
    subtitle: 'Zero Hassle Govt Approvals',
    description: 'We handle 100% of Kerala State Electricity Board (KSEB) liaisoning, PM Surya Ghar subsidy application paperwork, grid interconnect permissions, and bi-directional net-metering approvals on your behalf.',
    duration: '3 - 5 Days',
    icon: 'FileCheck'
  },
  {
    step: '03',
    title: 'Tier-1 Hardware Installation & Safety Rigging',
    subtitle: 'Master Certified Installation',
    description: 'Galvanized iron structural mounting designed for 170 km/h wind speeds, monsoon protection, lightning surge suppressors, and IP67 waterproof DC wiring installed by certified solar technicians.',
    duration: '1 - 2 Days',
    icon: 'Wrench'
  },
  {
    step: '04',
    title: 'System Activation & Service Guarantee',
    subtitle: '25-Year Performance Assurance',
    description: 'System commissioning with real-time mobile app telemetry, live generation dashboards, KSEB net-meter sync, and comprehensive 25-year service guarantee with instant PM Surya Ghar subsidy verification.',
    duration: 'Instant',
    icon: 'Zap'
  }
];

export const COMPANY_STATS = [
  { label: 'Installed Capacity', value: '45+ MW', subtext: 'Across 12,500+ Rooftops' },
  { label: 'Customer Lifetime Savings', value: '₹140+ Cr', subtext: 'Guaranteed 25-Year Yield' },
  { label: 'CO2 Offset Equivalent', value: '850K Tons', subtext: 'Equal to 3.8M Trees' },
  { label: 'System Uptime', value: '99.8%', subtext: '24/7 Remote Monitoring' }
];

export const WHY_SOLAR_REASONS = [
  {
    title: 'Hedge Against 8-12% Annual Tariff Hikes',
    description: 'Traditional utility grid prices rise consistently every year. Solar locks in your electricity production cost at ₹0/unit for 25+ years.',
    tag: 'Financial Freedom',
    metric: '100%',
    metricLabel: 'Protection from Inflation'
  },
  {
    title: 'PM Surya Ghar Govt Subsidy up to ₹78,000',
    description: 'Direct Benefit Transfer (DBT) deposited directly into your bank account under the Central Government solar scheme, lowering your initial investment significantly.',
    tag: 'Govt Backed',
    metric: '₹78K',
    metricLabel: 'Direct Subsidy'
  },
  {
    title: '25-Year Guaranteed Performance Warranty',
    description: 'Our Tier-1 N-Type TOPCon panels are engineered to retain at least 87.4% generation efficiency even after 25 years of continuous exposure.',
    tag: 'Tier-1 Engineering',
    metric: '25 Yrs',
    metricLabel: 'Performance Shield'
  },
  {
    title: '100% Green Energy & Grid Independence',
    description: 'Produce your own clean, renewable power daily and insulate your home from KSEB power cuts with seamless hybrid solar storage.',
    tag: 'Energy Independence',
    metric: '100%',
    metricLabel: 'Clean Energy'
  }
];

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
    id: '2-3kw',
    name: 'Essential Home',
    capacity: '2–3 kW System',
    badge: 'Bill Reduction Focus',
    priceRaw: 165000,
    subsidyRaw: 60000,
    finalPriceRaw: 105000,
    dailyGeneration: '8 – 12 kWh / day',
    annualSavings: '₹40,000 / year',
    paybackPeriod: '2.6 Years',
    roofArea: '200–300 sq. ft',
    recommendedFor: 'Smaller homes with lower electricity consumption',
    appliances: [
      '1x Inverter AC',
      'Refrigerator',
      'Washing Machine',
      'LED Lights & Fans',
      'TV & Basic Electronics'
    ],
    specs: {
      panelType: '550W TOPCon Monocrystalline Bifacial',
      inverterEfficiency: '98.6% MPPT Smart Hybrid',
      warranty: '25 Year Linear Power Warranty',
      monitoring: 'AI Mobile App Telemetry',
      batterySupport: 'Lithium LFP Ready'
    }
  },
  {
    id: '3-5kw',
    name: 'Common Starting Range',
    capacity: '3–5 kW System',
    badge: '⭐ Featured / Most Popular',
    priceRaw: 275000,
    subsidyRaw: 78000,
    finalPriceRaw: 197000,
    dailyGeneration: '12 – 22 kWh / day',
    annualSavings: '₹85,000 / year',
    paybackPeriod: '2.8 Years',
    roofArea: '300–500 sq. ft',
    recommendedFor: 'Family homes with moderate-to-higher residential electricity profiles',
    appliances: [
      '2x 1.5 Ton ACs',
      'Double Door Refrigerator',
      'Washing Machine & Microwave',
      'Submersible Water Pump',
      'Future EV Charger Ready'
    ],
    specs: {
      panelType: '575W N-Type TOPCon Dual-Glass Panels',
      inverterEfficiency: '98.9% High Voltage Hybrid',
      warranty: '25 Year Performance + 12 Year Product Warranty',
      monitoring: '24/7 Cellular + Wi-Fi Cloud Diagnostic',
      batterySupport: 'Modular Stackable LFP'
    }
  },
  {
    id: '5-10kw',
    name: 'Large Home',
    capacity: '5–10 kW System',
    badge: 'Higher Loads Rationale',
    priceRaw: 450000,
    subsidyRaw: 78000,
    finalPriceRaw: 372000,
    dailyGeneration: '22 – 45 kWh / day',
    annualSavings: '₹1,50,000 / year',
    paybackPeriod: '3.0 Years',
    roofArea: '500–1,000 sq. ft',
    recommendedFor: 'Large homes when electricity demand, roof area and future loads justify larger capacity',
    appliances: [
      '3-4x Air Conditioners',
      'Heavy Home Appliances',
      'Water Heaters & Pumps',
      'Full Home Lighting & Automation',
      'Level 2 EV Fast Charger'
    ],
    specs: {
      panelType: '600W+ Ultra-Efficient Glass-Glass Modules',
      inverterEfficiency: '99.1% Dual-MPPT Grade',
      warranty: '30 Year Guaranteed Power Output (>87.4%)',
      monitoring: 'Enterprise AI Predictive Maintenance',
      batterySupport: 'High-Voltage Battery Bank Support'
    }
  },
  {
    id: '10kw-plus',
    name: 'Business / EPC',
    capacity: '10 kW+ System',
    badge: 'Commercial Load Optimisation',
    priceRaw: 650000,
    subsidyRaw: 78000,
    finalPriceRaw: 572000,
    dailyGeneration: '45 – 100+ kWh / day',
    annualSavings: '₹2,50,000+ / year',
    paybackPeriod: '3.2 Years',
    roofArea: '1,000+ sq. ft',
    recommendedFor: 'Business & EPC requiring load, roof, electrical and project-specific engineering',
    appliances: [
      'Commercial HVAC & VRF Units',
      'Industrial Equipment & Machinery',
      'Office IT Infrastructure & Server Rooms',
      'Commercial Lighting & Elevators',
      'Fleet EV Charging Network'
    ],
    specs: {
      panelType: 'Aiko Neostar ABC N-Type 620W Modules',
      inverterEfficiency: '99.4% Commercial Three-Phase Inverter',
      warranty: '25 Year Comprehensive Protection',
      monitoring: 'Operations Center Sync',
      batterySupport: 'Industrial Scalable Storage'
    }
  }
];

export const INSTALLATION_STEPS = [
  {
    step: '01',
    title: 'Site Survey',
    subtitle: 'Understand',
    description: 'Review electricity use, roof geometry, shade, electrical configuration, access and future loads before proposing capacity.',
    duration: '24 Hours',
    icon: 'Scan'
  },
  {
    step: '02',
    title: 'System Design',
    subtitle: 'Engineer',
    description: 'Select system architecture, capacity, module layout, inverter approach, mounting and protection based on the site.',
    duration: '1 - 2 Days',
    icon: 'Wrench'
  },
  {
    step: '03',
    title: 'KSEB & Documentation',
    subtitle: 'Coordinate',
    description: 'Support the applicable application, technical-feasibility and documentation workflow. The exact process depends on the project and scheme.',
    duration: '3 - 5 Days',
    icon: 'FileCheck'
  },
  {
    step: '04',
    title: 'Installation & Commissioning',
    subtitle: 'Build',
    description: 'Install the system, complete electrical checks and commissioning, and prepare the documentation required for the next stage.',
    duration: '1 - 2 Days',
    icon: 'Zap'
  },
  {
    step: '05',
    title: 'Monitor & Maintain',
    subtitle: 'Operate',
    description: 'Track performance, address maintenance needs and provide a support path for the system over its operating life.',
    duration: 'Ongoing',
    icon: 'ShieldCheck'
  }
];

export const COMPANY_STATS = [
  { label: 'Years in Business*', value: '15+', subtext: 'Established Expertise' },
  { label: 'Installations Completed*', value: '500+', subtext: 'Across Kerala' },
  { label: 'kW Capacity Installed*', value: '2200+', subtext: 'Clean Energy Generated' },
  { label: 'Kerala Service Coverage*', value: 'Local', subtext: 'Kottayam HQ & Districts' }
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

export const WHY_SUNLITE_POINTS = [
  {
    step: '01',
    title: 'Local team',
    description: 'Kottayam-based team and service coverage across selected Kerala districts.'
  },
  {
    step: '02',
    title: 'End-to-end support',
    description: 'Site assessment, design, installation and documentation support.'
  },
  {
    step: '03',
    title: 'Subsidy & KSEB guidance',
    description: 'Prototype claim retained; verify current eligibility and process before launch.'
  },
  {
    step: '04',
    title: 'After-sales',
    description: 'Maintenance and support options for installed systems.'
  }
];

export const SOLAR_EDUCATION_CARDS = [
  {
    tag: '01 · Generation',
    title: 'How much can a rooftop system generate?',
    description: "KSEB's rooftop guidance notes that a 1 kWp system on a south-facing roof may generate roughly 4–6 units per day, but actual output varies with weather, orientation, shading, equipment and system design. Treat any annual estimate as a site-specific engineering calculation, not a promise."
  },
  {
    tag: '02 · Roof',
    title: 'Does your roof have enough usable area?',
    description: "A practical assessment considers shade-free area, roof geometry, structural condition, access, equipment location and cable routing. KSEB's public guidance uses about 100 sq ft as a reference for a 1 kW plant, while actual module layout and technology can change the requirement."
  },
  {
    tag: '03 · Grid',
    title: 'What happens to excess solar?',
    description: 'With a grid-interactive system, solar can serve the property first. Excess generation can be exported to the grid under the applicable regulatory and metering arrangement. Net-metering rules, technical feasibility and settlement mechanisms should always be checked against the current KSEB process.'
  },
  {
    tag: '04 · Backup',
    title: 'Will solar work during a power cut?',
    description: 'A standard grid-tied system is not the same as a backup system. During a grid outage, a grid-connected inverter generally stops supplying the building for safety. Battery-backed hybrid designs can be engineered to support selected loads when configured for backup operation.'
  },
  {
    tag: '05 · Monsoon',
    title: "Does Kerala's monsoon stop solar generation?",
    description: "No. Panels can generate under cloudy conditions, but output is normally lower than during stronger sunlight. A realistic design should use local weather, roof orientation, shading and historical consumption rather than assuming every day will produce the same amount of energy."
  },
  {
    tag: '06 · Commercial',
    title: 'Why is commercial solar a different calculation?',
    description: 'Businesses often have stronger daytime loads, different tariff structures, larger system sizes and more complex electrical requirements. The value of solar depends on load profile, sanctioned demand, roof availability, operating hours, export rules and the project economics.'
  }
];

export const TESTIMONIALS = [
  {
    id: 1,
    featured: true,
    rating: 5,
    role: 'Verified Google Review',
    text: '“I have installed solar from sunlite solutions before 6 months... and I\'m completely satisfied with their after sale service and the performance of the system is also fine until now...”',
    name: 'Krishnakumar Anju',
    location: '5 months ago · Verified Customer'
  },
  {
    id: 2,
    featured: false,
    rating: 5,
    role: 'Verified Google Review',
    text: '“Reasonable price. Excellent service from the Sunlite Solutions team. They explained everything clearly and completed the installation on time. Highly recommended.”',
    name: 'Renny Thomas',
    location: 'Local Guide · 28 reviews'
  },
  {
    id: 3,
    featured: false,
    rating: 5,
    role: 'Verified Google Review',
    text: '“The service from Sunlight Solutions was excellent. The installation was completed on time. All queries were answered clearly and support was excellent. Very happy with the service. Definitely recommend.”',
    name: 'Sebin Justin',
    location: 'Verified Customer'
  },
  {
    id: 4,
    featured: false,
    rating: 5,
    role: 'Verified Google Review',
    text: '“Nalla service aanu. Team ellam timeinu vannu installation complete cheythu. Billing um subsidy process um ellam explain cheythu. Happy with the overall experience.”',
    name: 'Maya Jovin',
    location: 'Verified Customer'
  },
  {
    id: 5,
    featured: false,
    rating: 5,
    role: 'Verified Google Review',
    text: '“Excel land service in solar installation and service.”',
    name: 'INSTAGMAER',
    location: '5 months ago · Verified Customer'
  },
  {
    id: 6,
    featured: false,
    rating: 5,
    role: 'Verified Google Review',
    text: '“Solar panel system installation, excellent service.”',
    name: 'Gopa Kumar',
    location: '5 months ago · Verified Customer'
  }
];

export const FAQS = [
  {
    q: 'How much does a solar system cost in Kerala?',
    a: 'There is no responsible single price for every property. Cost depends on system capacity, module and inverter selection, mounting, electrical work, roof conditions, approvals, metering, backup requirements and commercial terms. The production calculator should show a range only after its assumptions are verified.'
  },
  {
    q: 'How much government subsidy can I receive?',
    a: "PM Surya Ghar's published residential CFA structure has commonly been shown as ₹30,000/kW for the first 2 kW plus ₹18,000/kW for the next kW, capped at ₹78,000. Final eligibility, scheme status and applicable CFA must be checked through the current official process before quoting a customer."
  },
  {
    q: 'Does solar work during the Kerala monsoon?',
    a: 'Yes. Solar panels still generate under diffuse/cloudy light, but output can be lower than during strong sunlight. Good system design should account for seasonal variation rather than assuming a fixed daily output.'
  },
  {
    q: 'What is the difference between on-grid, hybrid and off-grid solar?',
    a: 'On-grid systems work with the utility grid and are generally optimised for bill reduction. Hybrid systems add battery storage and can be designed for backup loads. Off-grid systems are designed around independent operation and therefore require a more complete storage and load strategy.'
  },
  {
    q: 'Will an on-grid solar system work during a power cut?',
    a: 'Normally, a standard grid-tied inverter shuts down during a grid outage for safety. Backup operation requires an appropriately designed hybrid or battery-backed architecture with suitable protection and load management.'
  },
  {
    q: 'How much roof area do I need?',
    a: "Roof requirement depends on module technology, layout, spacing, shading and access. KSEB's public guidance uses roughly 100 sq ft as a reference for 1 kW, but the actual usable area should be confirmed during site assessment."
  },
  {
    q: 'How does KSEB net metering work?',
    a: 'For an applicable grid-interactive system, solar is first used by the property and surplus can be exported to the grid under the applicable metering and settlement arrangement. The current KSEB portal and regulations should control the exact process.'
  },
  {
    q: 'How long does installation take?',
    a: 'Project duration depends on site readiness, system size, material availability, approvals, technical feasibility, installation scheduling and utility testing. Avoid publishing fixed turnaround promises until Sunlite has verified internal timelines.'
  },
  {
    q: 'What should I check before choosing a solar installer?',
    a: 'Look for evidence of completed installations, engineering capability, clear scope, component documentation, electrical protection, warranty terms, after-sales support, utility-process familiarity and transparent commercial assumptions.'
  },
  {
    q: 'Can solar be designed around future loads such as an EV?',
    a: 'Yes. Future loads can be considered during system design, but the right capacity depends on the expected load, sanctioned connection, roof availability, daytime charging pattern and the economics of generating additional electricity.'
  }
];

export const SOLAR_GUIDES = [
  {
    tag: 'Subsidy',
    title: 'PM Surya Ghar Subsidy in Kerala',
    description: 'Understand the residential CFA structure, eligibility, application pathway and what must be verified before installation.',
    href: '/solar-subsidy-kerala'
  },
  {
    tag: 'Solar basics',
    title: 'On-Grid vs Off-Grid vs Hybrid Solar',
    description: 'Compare grid connection, batteries, backup behaviour, economics and where each architecture makes sense.',
    href: '/on-grid-vs-hybrid-solar'
  },
  {
    tag: 'Cost & savings',
    title: 'How Much Does Rooftop Solar Cost in Kerala?',
    description: 'Explain the real drivers of EPC pricing instead of publishing one misleading universal price.',
    href: '/solar-cost-kerala'
  },
  {
    tag: 'KSEB',
    title: 'KSEB Solar & Net Metering: A Practical Guide',
    description: 'Walk through application, technical feasibility, installation, testing, metering and the documents customers should expect.',
    href: '/kseb-net-metering'
  },
  {
    tag: 'Kerala guide',
    title: 'Does Solar Work During Kerala\'s Monsoon?',
    description: 'Set realistic expectations for cloudy weather, seasonal variation, system sizing and backup requirements.',
    href: '/solar-monsoon-kerala'
  },
  {
    tag: 'Maintenance',
    title: 'Solar Panel Maintenance & Cleaning Guide',
    description: 'Explain cleaning, inspections, inverter checks, monitoring and when professional service is useful.',
    href: '/solar-maintenance'
  },
  {
    tag: 'Planning',
    title: 'How Much Roof Space Does Solar Need?',
    description: 'Explain usable area, shade, roof geometry, access, structural considerations and future expansion.',
    href: '/solar-roof-area'
  },
  {
    tag: 'Economics',
    title: 'Solar ROI & Payback in Kerala',
    description: 'Explain self-consumption, tariff, export, capex, subsidy, degradation and why payback differs by customer.',
    href: '/solar-roi-kerala'
  }
];

export const SERVICE_AREAS = [
  { name: 'Solar Company · Kottayam', href: '/solar-company-kottayam' },
  { name: 'Solar Company · Changanassery', href: '/solar-company-changanassery' },
  { name: 'Solar Company · Ernakulam', href: '/solar-company-ernakulam' },
  { name: 'Solar Company · Alappuzha', href: '/solar-company-alappuzha' },
  { name: 'Solar Company · Idukki', href: '/solar-company-idukki' },
  { name: 'Solar Company · Pathanamthitta', href: '/solar-company-pathanamthitta' }
];

export const PROJECTS = [
  {
    type: 'residential',
    title: 'Residential Rooftop',
    location: '5 kW · Chingavanam',
    description: 'Prototype case study placeholder.'
  },
  {
    type: 'residential',
    title: 'Family Home',
    location: '3 kW · Kottayam',
    description: 'Prototype case study placeholder.'
  },
  {
    type: 'commercial',
    title: 'Commercial Rooftop',
    location: '10 kW · Ernakulam',
    description: 'Prototype case study placeholder.'
  },
  {
    type: 'commercial',
    title: 'Business Solar',
    location: 'Commercial · Alappuzha',
    description: 'Prototype case study placeholder.'
  },
  {
    type: 'industrial',
    title: 'Industrial / Large Roof',
    location: '8 kW · Idukki',
    description: 'Prototype case study placeholder.'
  },
  {
    type: 'residential',
    title: 'Large Home',
    location: '8 kW · Kerala',
    description: 'Prototype case study placeholder.'
  }
];


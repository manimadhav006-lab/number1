export interface NavDropdownItem {
  title: string;
  description?: string;
  path: string;
  badge?: string;
}

export interface NavCategory {
  title: string;
  id: string;
  featured?: {
    title: string;
    description: string;
    tag: string;
  };
  items: NavDropdownItem[];
}

export const COMPANY_INFO = {
  name: 'Review Growth Partners',
  shortName: 'RGP',
  tagline: 'Build. Create. Connect. Grow.',
  alternativeLine: 'Where Reviews Turn Into Results.',
  phoneNumber: '+91 7892041582',
  phoneDisplay: '+91 7892041582',
  email: 'reviewgrowthpartners@gmail.com',
  locations: ['Bangalore', 'Dubai', 'Singapore'],
};

export const SOCIAL_LINKS = {
  linkedin: 'https://www.linkedin.com/company/review-growth-partners/?viewAsMember=true',
  instagram: 'https://www.instagram.com/reviewgrowthpartners?stkn=MTZ0ZzFwbWltbzZvcw==',
  facebook: 'https://www.facebook.com/share/19b3d7GNxe/',
  threads: 'https://www.threads.net/@reviewgrowthpartners',
};

export const NAVIGATION_DATA: NavCategory[] = [
  {
    title: 'Digital Marketing',
    id: 'digital-marketing',
    items: [],
  },
  {
    title: 'Design',
    id: 'design',
    items: [],
  },
  {
    title: 'Content',
    id: 'content',
    items: [],
  },
  {
    title: 'Production',
    id: 'production',
    items: [],
  },
  {
    title: 'Technology',
    id: 'technology',
    items: [],
  },
  {
    title: 'Resources',
    id: 'resources',
    items: [],
  },
];

export const CAREER_ROLES = [
  {
    title: 'Creative Lead',
    department: 'Design & Creative',
    location: 'Bangalore / Hybrid',
    type: 'Full-time',
    experience: '5-8 Years',
    overview: 'Lead multidisciplinary design teams to formulate visual strategies and creative campaigns for global brands.',
  },
  {
    title: 'Reputation & Growth Manager',
    department: 'Growth & Strategy',
    location: 'Bangalore / Dubai',
    type: 'Full-time',
    experience: '4-7 Years',
    overview: 'Drive customer review acceleration systems, retention funnels, and enterprise brand reputation portfolios.',
  },
  {
    title: 'Digital Marketing Manager',
    department: 'Marketing',
    location: 'Bangalore / Hybrid',
    type: 'Full-time',
    experience: '4-7 Years',
    overview: 'Direct omnichannel digital campaigns, client accounts, and performance marketing budgets across global markets.',
  },
  {
    title: 'Digital Marketer Lead',
    department: 'Marketing',
    location: 'Bangalore / Dubai',
    type: 'Full-time',
    experience: '3-6 Years',
    overview: 'Execute high-impact paid search, social campaigns, and strategic conversion optimization initiatives.',
  },
  {
    title: 'Lead Copywriter',
    department: 'Content',
    location: 'Bangalore / Remote',
    type: 'Full-time',
    experience: '4-6 Years',
    overview: 'Drive brand storytelling, advertising concept scripts, and overarching brand messaging strategies.',
  },
  {
    title: 'Copywriter',
    department: 'Content',
    location: 'Bangalore / Remote',
    type: 'Full-time',
    experience: '2-4 Years',
    overview: 'Produce persuasive ad copy, editorial articles, and email sequences that drive high engagement.',
  },
  {
    title: 'Business Growth Manager',
    department: 'Sales & Growth',
    location: 'Bangalore / Dubai',
    type: 'Full-time',
    experience: '3-6 Years',
    overview: 'Build relationships with enterprise clients, expand agency market presence, and manage client partnerships.',
  },
  {
    title: 'Group Account Manager',
    department: 'Client Relations',
    location: 'Bangalore',
    type: 'Full-time',
    experience: '5-8 Years',
    overview: 'Oversee key strategic enterprise accounts, campaign delivery timelines, and client satisfaction.',
  },
  {
    title: 'UI Designer',
    department: 'Design',
    location: 'Bangalore / Remote',
    type: 'Full-time',
    experience: '2-5 Years',
    overview: 'Design pixel-perfect interfaces, design systems, and responsive interactive prototypes.',
  },
  {
    title: 'Graphic Designer',
    department: 'Design',
    location: 'Bangalore',
    type: 'Full-time',
    experience: '2-4 Years',
    overview: 'Create captivating social media visuals, brand marketing collateral, and digital advertising assets.',
  },
  {
    title: 'UX Designer',
    department: 'Design',
    location: 'Bangalore / Hybrid',
    type: 'Full-time',
    experience: '3-6 Years',
    overview: 'Conduct deep user research, user testing, wireframing, and intuitive architectural flows for web apps.',
  },
];

export const RELATED_LINKS = {
  column1: [
    'RGP Academy – Review & Growth Institute',
    'Review Acceleration Company in Bangalore',
    'PR & Reputation Agency in Bangalore',
    'SEO Company in Bangalore',
    'B2B Marketing Company in Bangalore',
    'Performance Marketing Company in Bangalore',
    'SEO Link Building Services in Bangalore',
    'Email Marketing Services in Bangalore',
  ],
  column2: [
    'Google My Business Optimization in Bangalore',
    'Social Media Marketing Company in Bangalore',
    'PPC Company in Bangalore',
    'Creative Advertising Agency in Bangalore',
    'UI / UX Design Company in Bangalore',
    'Content Marketing Services in Bangalore',
  ],
  column3: [
    'Website Development Company in Bangalore',
    'Customer Testimonial Video Production',
    'Content Writing Company in Bangalore',
    'App Store Optimization Company in Bangalore',
    'Real Estate Marketing Companies in Bangalore',
    'Logo Design Company in Bangalore',
  ],
};

export const CASE_STUDIES = [
  {
    client: 'Apex Health Centers',
    category: 'Healthcare & Multisite Clinics',
    outcome: '+420% 5-Star Reviews & +310% Bookings',
    metrics: 'From 3.8 to 4.9 Stars Across 18 Locations',
    description: 'Deployed RGP Automated Review Ingestion, Google Maps 3-Pack optimization, and patient conversion funnels.',
  },
  {
    client: 'FinEdge Global Technologies',
    category: 'Fintech & B2B SaaS',
    outcome: '+310% Inbound Enterprise Pipeline',
    metrics: '$3.4M New Annual Contract Value in 9 months',
    description: 'Complete website redesign, targeted enterprise SEO overhaul, and account-based PPC marketing across US & APAC.',
  },
  {
    client: 'LuxeLiving Interior Group',
    category: 'Real Estate & Luxury Retail',
    outcome: '4.6x Return on Ad Spend',
    metrics: '8,200+ Qualified High-Net-Worth Inquiries',
    description: 'Full-funnel digital transformation, authentic customer video stories, and hyper-targeted Meta & Google Search funnels.',
  },
];

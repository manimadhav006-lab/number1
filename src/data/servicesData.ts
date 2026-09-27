export interface ServiceDetail {
  slug: string;
  name: string;
  categorySlug: string;
  categoryName: string;
  subcategorySlug: string;
  subcategoryName: string;
  url: string;
  seoTitle: string;
  metaDescription: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  heroHeadline: string;
  shortDescription: string;
  whatIs: string;
  problemSolution: {
    problem: string;
    solution: string;
  };
  capabilities: {
    title: string;
    description: string;
  }[];
  benefits: {
    title: string;
    description: string;
  }[];
  process: {
    step: string;
    title: string;
    description: string;
  }[];
  targetAudience: string[];
  useCases: {
    title: string;
    scenario: string;
    outcome: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
  relatedServiceSlugs: string[];
  visualType: 'analytics' | 'code' | 'design' | 'video' | 'crm' | 'brand' | 'mobile' | 'cloud' | 'marketing';
}

export function toSlug(str: string): string {
  return str
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

// Complete Hierarchy Definition
export interface ServiceHierarchyCategory {
  title: string;
  slug: string;
  subcategories: {
    title: string;
    slug: string;
    services: string[];
  }[];
}

export const SERVICE_HIERARCHY: ServiceHierarchyCategory[] = [
  {
    title: 'Digital Marketing',
    slug: 'digital-marketing',
    subcategories: [
      {
        title: 'Performance Marketing',
        slug: 'performance-marketing',
        services: [
          'Google Ads',
          'Meta Ads',
          'PPC Campaigns',
          'Lead Generation Campaigns',
          'Conversion Campaigns',
          'Retargeting Campaigns',
        ],
      },
      {
        title: 'Search Engine Marketing',
        slug: 'search-engine-marketing',
        services: [
          'SEO',
          'Local SEO',
          'On-Page SEO',
          'Technical SEO',
          'SEO Audit',
          'Keyword Research',
          'Content SEO',
        ],
      },
      {
        title: 'Social Media Marketing',
        slug: 'social-media-marketing',
        services: [
          'Social Media Marketing',
          'Instagram Marketing',
          'Facebook Marketing',
          'LinkedIn Marketing',
          'YouTube Marketing',
          'Social Media Management',
        ],
      },
      {
        title: 'Content Marketing',
        slug: 'content-marketing',
        services: [
          'Content Strategy',
          'Website Content',
          'Social Media Content',
          'Blog Content',
          'Promotional Content',
          'Marketing Copywriting',
        ],
      },
      {
        title: 'Email & CRM Marketing',
        slug: 'email-crm-marketing',
        services: [
          'Email Marketing',
          'Business Email Campaigns',
          'Lead Nurturing',
          'Customer Follow-ups',
          'CRM Marketing',
        ],
      },
      {
        title: 'Lead Generation',
        slug: 'lead-generation',
        services: [
          'B2B Lead Generation',
          'B2C Lead Generation',
          'Website Lead Generation',
          'Landing Page Campaigns',
          'Lead Management',
        ],
      },
    ],
  },
  {
    title: 'Design',
    slug: 'design',
    subcategories: [
      {
        title: 'Brand Identity',
        slug: 'brand-identity',
        services: [
          'Logo Design',
          'Brand Identity',
          'Brand Guidelines',
          'Business Card Design',
          'Letterhead Design',
          'Corporate Branding',
        ],
      },
      {
        title: 'Graphic Design',
        slug: 'graphic-design',
        services: [
          'Poster Design',
          'Advertisement Design',
          'Social Media Creatives',
          'Promotional Designs',
          'Marketing Materials',
          'Digital Creatives',
        ],
      },
      {
        title: 'UI/UX Design',
        slug: 'ui-ux-design',
        services: [
          'Website UI Design',
          'Mobile App UI Design',
          'Dashboard Design',
          'Landing Page Design',
          'User Experience Design',
          'Wireframes & Prototypes',
        ],
      },
      {
        title: 'Social Media Design',
        slug: 'social-media-design',
        services: [
          'Instagram Post Design',
          'Instagram Story Design',
          'YouTube Thumbnail Design',
          'Reel Covers',
          'LinkedIn Creatives',
          'Campaign Creatives',
        ],
      },
      {
        title: 'Presentation & Business Design',
        slug: 'presentation-business-design',
        services: [
          'Pitch Deck Design',
          'Company Profile',
          'Brochure Design',
          'Proposal Design',
          'Certificate Design',
          'Business Documents',
        ],
      },
    ],
  },
  {
    title: 'Content',
    slug: 'content',
    subcategories: [
      {
        title: 'Content Creation',
        slug: 'content-creation',
        services: [
          'Social Media Content',
          'Website Content',
          'Blog Content',
          'Promotional Content',
          'Business Content',
          'Brand Content',
        ],
      },
      {
        title: 'Copywriting',
        slug: 'copywriting',
        services: [
          'Website Copywriting',
          'Ad Copywriting',
          'Social Media Copy',
          'Email Copywriting',
          'Product Descriptions',
          'Marketing Copy',
        ],
      },
      {
        title: 'Social Media Content',
        slug: 'social-media-content-hub',
        services: [
          'Instagram Content',
          'LinkedIn Content',
          'Facebook Content',
          'YouTube Content',
          'Reels Content',
          'Content Calendars',
        ],
      },
      {
        title: 'Video Content',
        slug: 'video-content',
        services: [
          'Short-Form Content',
          'Reels',
          'YouTube Videos',
          'Promotional Videos',
          'Business Videos',
          'Educational Videos',
        ],
      },
      {
        title: 'SEO Content',
        slug: 'seo-content',
        services: [
          'SEO Blog Writing',
          'Keyword-Based Content',
          'Website SEO Content',
          'Local SEO Content',
          'Content Optimization',
          'AI Search Content',
        ],
      },
    ],
  },
  {
    title: 'Production',
    slug: 'production',
    subcategories: [
      {
        title: 'Video Production',
        slug: 'video-production',
        services: [
          'Video Editing',
          'Reels Editing',
          'YouTube Video Editing',
          'Promotional Video Editing',
          'Corporate Video Editing',
          'Short-Form Video Editing',
        ],
      },
      {
        title: 'Creative Production',
        slug: 'creative-production',
        services: [
          'Advertisement Creatives',
          'Social Media Creatives',
          'Campaign Creatives',
          'Promotional Materials',
          'Digital Campaign Assets',
        ],
      },
      {
        title: 'Motion & Visuals',
        slug: 'motion-visuals',
        services: [
          'Motion Graphics',
          'Animated Posts',
          'Logo Animation',
          'Promotional Animations',
          'Video Effects',
        ],
      },
      {
        title: 'Thumbnail & Visual Editing',
        slug: 'thumbnail-visual-editing',
        services: [
          'YouTube Thumbnails',
          'Social Media Covers',
          'Image Editing',
          'Product Image Editing',
          'Promotional Visuals',
        ],
      },
      {
        title: 'Media Management',
        slug: 'media-management',
        services: [
          'Content Production',
          'Content Scheduling',
          'Social Media Publishing',
          'Digital Asset Management',
          'Campaign Asset Management',
        ],
      },
    ],
  },
  {
    title: 'Technology',
    slug: 'technology',
    subcategories: [
      {
        title: 'Website Development',
        slug: 'website-development',
        services: [
          'Business Websites',
          'Corporate Websites',
          'Landing Pages',
          'Portfolio Websites',
          'E-commerce Websites',
          'Custom Websites',
        ],
      },
      {
        title: 'Web Application Development',
        slug: 'web-application-development',
        services: [
          'Custom Web Applications',
          'SaaS Applications',
          'CRM Systems',
          'Admin Dashboards',
          'Business Management Systems',
          'Database Applications',
        ],
      },
      {
        title: 'Mobile App Development',
        slug: 'mobile-app-development',
        services: [
          'Android App Development',
          'iOS App Development',
          'Cross-Platform Apps',
          'App UI/UX',
          'App Testing',
          'Play Store Launch',
          'App Store Launch',
        ],
      },
      {
        title: 'AI & Automation',
        slug: 'ai-automation',
        services: [
          'AI-Powered Websites',
          'AI Applications',
          'AI Chatbots',
          'AI Automation',
          'AI API Integration',
          'Business Process Automation',
        ],
      },
      {
        title: 'API & Database',
        slug: 'api-database',
        services: [
          'API Integration',
          'Database Integration',
          'Payment Gateway Integration',
          'Third-Party Integrations',
          'Cloud Database',
          'Data Management',
        ],
      },
      {
        title: 'Business Technology',
        slug: 'business-technology',
        services: [
          'CRM Development',
          'Lead Management Systems',
          'Customer Management Systems',
          'Internal Business Tools',
          'Workflow Automation',
          'Custom Software Solutions',
        ],
      },
      {
        title: 'Hosting & Deployment',
        slug: 'hosting-deployment',
        services: [
          'Domain Setup',
          'Web Hosting',
          'Business Email Setup',
          'Website Deployment',
          'Cloud Deployment',
          'Maintenance & Support',
        ],
      },
    ],
  },
];

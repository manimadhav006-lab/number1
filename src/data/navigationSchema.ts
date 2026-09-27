export interface SubItem {
  id: string;
  title: string;
  description: string;
}

export interface MiniHeading {
  id: string;
  title: string;
  description: string;
  subItems: string[];
}

export interface MainCategory {
  id: string;
  title: string;
  description: string;
  miniHeadings: MiniHeading[];
}

export const MAIN_NAV_CATEGORIES: MainCategory[] = [
  {
    id: 'digital-marketing',
    title: 'Digital Marketing',
    description: 'Data-driven performance campaigns, search engine optimization, and multi-channel marketing to drive qualified leads and revenue.',
    miniHeadings: [
      {
        id: 'performance-marketing',
        title: 'Performance Marketing',
        description: 'Scalable paid advertising campaigns focused on quantifiable ROI, customer acquisition, and conversion optimization.',
        subItems: [
          'Google Ads',
          'Meta Ads',
          'PPC Campaigns',
          'Lead Generation Campaigns',
          'Conversion Campaigns',
          'Retargeting Campaigns',
        ],
      },
      {
        id: 'search-engine-marketing',
        title: 'Search Engine Marketing',
        description: 'Holistic organic and local search strategies to dominate search results and capture high-intent buyers.',
        subItems: [
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
        id: 'social-media-marketing',
        title: 'Social Media Marketing',
        description: 'Multi-platform social presence, community engagement, and brand loyalty across Instagram, LinkedIn, Facebook, and YouTube.',
        subItems: [
          'Social Media Marketing',
          'Instagram Marketing',
          'Facebook Marketing',
          'LinkedIn Marketing',
          'YouTube Marketing',
          'Social Media Management',
        ],
      },
      {
        id: 'content-marketing',
        title: 'Content Marketing',
        description: 'Strategic content planning and creation that educates audiences, builds trust, and moves prospects through the sales funnel.',
        subItems: [
          'Content Strategy',
          'Website Content',
          'Social Media Content',
          'Blog Content',
          'Promotional Content',
          'Marketing Copywriting',
        ],
      },
      {
        id: 'email-crm-marketing',
        title: 'Email & CRM Marketing',
        description: 'Automated lifecycle messaging, nurture sequences, and retention campaigns to convert leads into repeat buyers.',
        subItems: [
          'Email Marketing',
          'Business Email Campaigns',
          'Lead Nurturing',
          'Customer Follow-ups',
          'CRM Marketing',
        ],
      },
      {
        id: 'lead-generation',
        title: 'Lead Generation',
        description: 'High-converting inbound and outbound acquisition funnels engineered for consistent pipeline velocity.',
        subItems: [
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
    id: 'design',
    title: 'Design',
    description: 'Distinctive visual identities, intuitive user interfaces, and high-impact marketing collateral crafted for modern brands.',
    miniHeadings: [
      {
        id: 'brand-identity',
        title: 'Brand Identity',
        description: 'Complete visual foundation and brand identity kits that make your company instantly recognizable and authoritative.',
        subItems: [
          'Logo Design',
          'Brand Identity',
          'Brand Guidelines',
          'Business Card Design',
          'Letterhead Design',
          'Corporate Branding',
        ],
      },
      {
        id: 'graphic-design',
        title: 'Graphic Design',
        description: 'Eye-catching graphic assets, print designs, and digital creatives that elevate your everyday brand communication.',
        subItems: [
          'Poster Design',
          'Advertisement Design',
          'Social Media Creatives',
          'Promotional Designs',
          'Marketing Materials',
          'Digital Creatives',
        ],
      },
      {
        id: 'ui-ux-design',
        title: 'UI/UX Design',
        description: 'User-centered design architecture, interactive wireframes, and polished responsive UI for web and mobile products.',
        subItems: [
          'Website UI Design',
          'Mobile App UI Design',
          'Dashboard Design',
          'Landing Page Design',
          'User Experience Design',
          'Wireframes & Prototypes',
        ],
      },
      {
        id: 'social-media-design',
        title: 'Social Media Design',
        description: 'High-converting, aesthetic visual templates, reel covers, and thumbnail designs tailored for every major platform.',
        subItems: [
          'Instagram Post Design',
          'Instagram Story Design',
          'YouTube Thumbnail Design',
          'Reel Covers',
          'LinkedIn Creatives',
          'Campaign Creatives',
        ],
      },
      {
        id: 'presentation-business-design',
        title: 'Presentation & Business Design',
        description: 'Executive-level pitch decks, company profiles, brochures, and investor presentations designed to win deals.',
        subItems: [
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
    id: 'content',
    title: 'Content',
    description: 'Persuasive storytelling, conversion copywriting, editorial articles, and video scripts that position your brand as a market leader.',
    miniHeadings: [
      {
        id: 'content-creation',
        title: 'Content Creation',
        description: 'Engaging storytelling across digital touchpoints to capture audience attention and communicate your value proposition.',
        subItems: [
          'Social Media Content',
          'Website Content',
          'Blog Content',
          'Promotional Content',
          'Business Content',
          'Brand Content',
        ],
      },
      {
        id: 'copywriting',
        title: 'Copywriting',
        description: 'High-conversion sales copy, ad headlines, and landing page messaging designed to elicit decisive user action.',
        subItems: [
          'Website Copywriting',
          'Ad Copywriting',
          'Social Media Copy',
          'Email Copywriting',
          'Product Descriptions',
          'Marketing Copy',
        ],
      },
      {
        id: 'social-media-content-hub',
        title: 'Social Media Content',
        description: 'Structured editorial calendars and bespoke creative content engineered for viral reach and community building.',
        subItems: [
          'Instagram Content',
          'LinkedIn Content',
          'Facebook Content',
          'YouTube Content',
          'Reels Content',
          'Content Calendars',
        ],
      },
      {
        id: 'video-content',
        title: 'Video Content',
        description: 'Short-form scripts, brand narratives, educational video content, and commercial treatments tailored for modern video platforms.',
        subItems: [
          'Short-Form Content',
          'Reels',
          'YouTube Videos',
          'Promotional Videos',
          'Business Videos',
          'Educational Videos',
        ],
      },
      {
        id: 'seo-content',
        title: 'SEO Content',
        description: 'Keyword-optimized articles and localized search content that ranks on search engines and generative AI search engines.',
        subItems: [
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
    id: 'production',
    title: 'Production',
    description: 'Full-cycle video editing, dynamic motion graphics, visual effects, and media scheduling for viral brand presence.',
    miniHeadings: [
      {
        id: 'video-production',
        title: 'Video Production',
        description: 'Polished post-production, color grading, sound design, and narrative pacing for corporate and social video formats.',
        subItems: [
          'Video Editing',
          'Reels Editing',
          'YouTube Video Editing',
          'Promotional Video Editing',
          'Corporate Video Editing',
          'Short-Form Video Editing',
        ],
      },
      {
        id: 'creative-production',
        title: 'Creative Production',
        description: 'Scalable creative production pipelines for continuous advertising testing and multi-format promotional campaigns.',
        subItems: [
          'Advertisement Creatives',
          'Social Media Creatives',
          'Campaign Creatives',
          'Promotional Materials',
          'Digital Campaign Assets',
        ],
      },
      {
        id: 'motion-visuals',
        title: 'Motion & Visuals',
        description: 'Kinetic typography, animated explainer graphics, dynamic logo stings, and visual effects that mesmerize viewers.',
        subItems: [
          'Motion Graphics',
          'Animated Posts',
          'Logo Animation',
          'Promotional Animations',
          'Video Effects',
        ],
      },
      {
        id: 'thumbnail-visual-editing',
        title: 'Thumbnail & Visual Editing',
        description: 'High-click-through thumbnail design, product photo retouching, and cover imagery engineered for maximum CTR.',
        subItems: [
          'YouTube Thumbnails',
          'Social Media Covers',
          'Image Editing',
          'Product Image Editing',
          'Promotional Visuals',
        ],
      },
      {
        id: 'media-management',
        title: 'Media Management',
        description: 'Systematic digital asset management, multi-platform publishing schedules, and campaign asset organization.',
        subItems: [
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
    id: 'technology',
    title: 'Technology',
    description: 'Enterprise website architecture, custom web applications, mobile apps, database integrations, and intelligent automation systems.',
    miniHeadings: [
      {
        id: 'website-development',
        title: 'Website Development',
        description: 'Lightning-fast, mobile-responsive corporate websites, landing pages, and e-commerce platforms built to scale.',
        subItems: [
          'Business Websites',
          'Corporate Websites',
          'Landing Pages',
          'Portfolio Websites',
          'E-commerce Websites',
          'Custom Websites',
        ],
      },
      {
        id: 'web-application-development',
        title: 'Web Application Development',
        description: 'Robust SaaS applications, administrative portals, CRM systems, and real-time database management platforms.',
        subItems: [
          'Custom Web Applications',
          'SaaS Applications',
          'CRM Systems',
          'Admin Dashboards',
          'Business Management Systems',
          'Database Applications',
        ],
      },
      {
        id: 'mobile-app-development',
        title: 'Mobile App Development',
        description: 'Native and cross-platform Android and iOS mobile applications engineered for smooth performance and store compliance.',
        subItems: [
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
        id: 'ai-automation',
        title: 'AI & Automation',
        description: 'Intelligent AI chatbots, workflow automation, and custom LLM API integrations that streamline repetitive business tasks.',
        subItems: [
          'AI-Powered Websites',
          'AI Applications',
          'AI Chatbots',
          'AI Automation',
          'AI API Integration',
          'Business Process Automation',
        ],
      },
      {
        id: 'api-database',
        title: 'API & Database',
        description: 'Seamless backend integrations with payment gateways, relational databases, third-party microservices, and CRM APIs.',
        subItems: [
          'API Integration',
          'Database Integration',
          'Payment Gateway Integration',
          'Third-Party Integrations',
          'Cloud Database',
          'Data Management',
        ],
      },
      {
        id: 'business-technology',
        title: 'Business Technology',
        description: 'Tailor-made software tools, internal operational portals, and automated lead capture workflows designed for efficiency.',
        subItems: [
          'CRM Development',
          'Lead Management Systems',
          'Customer Management Systems',
          'Internal Business Tools',
          'Workflow Automation',
          'Custom Software Solutions',
        ],
      },
      {
        id: 'hosting-deployment',
        title: 'Hosting & Deployment',
        description: 'Secure cloud hosting, custom domain configuration, professional Google Workspace setup, and 24/7 technical monitoring.',
        subItems: [
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
  {
    id: 'resources',
    title: 'Resources',
    description: 'Official corporate documentation, company background, career openings, and service consultation channels.',
    miniHeadings: [
      {
        id: 'company-information',
        title: 'Company Information',
        description: 'Legal registration details, company philosophy, mission, and leadership at Review Growth Partners.',
        subItems: [
          'Overview & Vision',
          'Legal Registration',
          'Corporate Address',
          'Contact & Support',
        ],
      },
      {
        id: 'careers-hub',
        title: 'Careers',
        description: 'Explore active internship and full-time career opportunities in tech, digital marketing, and design at RGP.',
        subItems: [
          'Web Development Internships',
          'Digital Marketing Roles',
          'Graphic & UI/UX Design',
          'Business Development',
        ],
      },
      {
        id: 'get-a-quote-hub',
        title: 'Get a Quote',
        description: 'Request a customized project proposal, technical scope, and timeline tailored to your commercial objectives.',
        subItems: [
          'Submit Project Scope',
          'Transparent Deliverables',
          'Consultation Call',
          'Tailored Roadmaps',
        ],
      },
      {
        id: 'about-us-hub',
        title: 'About Us',
        description: 'Discover how Review Growth Partners empowers modern enterprises through technology, branding, and digital growth.',
        subItems: [
          'Our Founding Story',
          'Core Values',
          'Client Success Philosophy',
          'PAN-India Footprint',
        ],
      },
    ],
  },
];

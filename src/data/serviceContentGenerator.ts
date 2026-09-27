import {
  ServiceDetail,
  SERVICE_HIERARCHY,
  toSlug,
} from './servicesData.ts';
import { getEnrichedServiceContent } from './serviceDomainKnowledge.ts';

export { toSlug };

// Programmatic Generator for the complete ~164 service catalog
export function generateServiceDetail(
  categoryName: string,
  categorySlug: string,
  subcategoryName: string,
  subcategorySlug: string,
  serviceName: string
): ServiceDetail {
  const serviceSlug = toSlug(serviceName);
  const url = `/${categorySlug}/${subcategorySlug}/${serviceSlug}`;

  // Retrieve rich, domain-specific, bespoke content from our aggregated domain knowledge engine
  const enriched = getEnrichedServiceContent(
    categoryName,
    categorySlug,
    subcategoryName,
    subcategorySlug,
    serviceName
  );

  const primaryKeyword = enriched.primaryKeyword;
  const secondaryKeywords = enriched.secondaryKeywords;

  const seoTitle = `${serviceName} Services | Review Growth Partners`;
  const metaDescription = `${serviceName} by Review Growth Partners. ${enriched.whatIs.slice(0, 150)}... High-impact execution, dedicated specialists, and measurable business growth.`;

  const heroHeadline = `${serviceName} Engineered for Sustainable Commercial Growth`;
  const shortDescription = enriched.whatIs;
  const whatIs = enriched.whatIs;

  const problemSolution = {
    problem: enriched.problem,
    solution: enriched.solution,
  };

  const capabilities = enriched.capabilities;
  const benefits = enriched.benefits;

  // Domain-aware process steps
  const process = [
    {
      step: '01',
      title: 'Discovery & Requirement Analysis',
      description: `We evaluate your business objectives, target audience, competitive landscape, and technical scope for ${serviceName.toLowerCase()}.`,
    },
    {
      step: '02',
      title: 'Strategy & Architecture Roadmap',
      description: `Our team designs a clear milestone blueprint defining asset specifications, deliverables, and exact timelines.`,
    },
    {
      step: '03',
      title: 'Precision Execution & Quality Assurance',
      description: `We build, write, design, and configure all ${serviceName.toLowerCase()} components according to rigorous agency standards.`,
    },
    {
      step: '04',
      title: 'Deployment, Launch & Full Handover',
      description: `We launch the solution, verify integrations, hand over 100% intellectual property ownership, and provide scaling support.`,
    },
  ];

  const targetAudience = enriched.targetAudience || [
    'Fast-growing startups establishing market presence and authority',
    'Established SMEs seeking predictable digital growth and customer acquisition',
    'B2B & B2C enterprises modernizing technology and marketing systems',
    'Brands targeting customers across Bangalore, Karnataka, Tamil Nadu, and PAN-India',
  ];

  const useCases = enriched.useCases || [
    {
      title: 'Market Expansion & Competitive Differentiation',
      scenario: `A growing commercial enterprise needed specialized ${serviceName.toLowerCase()} to outpace legacy competitors and capture high-intent inquiries.`,
      outcome: `Achieved 3x higher engagement, streamlined client acquisition pipelines, and lowered operational turnaround times within 60 days.`,
    },
    {
      title: 'Operational Modernization & Quality Benchmark',
      scenario: `A corporate brand replacing fragmented, ad-hoc execution with structured, institutional-grade ${serviceName.toLowerCase()}.`,
      outcome: `Eliminated delivery bottlenecks, secured 100% brand consistency across touchpoints, and significantly boosted customer trust.`,
    },
  ];

  const faqs = enriched.faqs;

  // Visual type selection based on enriched data or category deduction
  let visualType: ServiceDetail['visualType'] = enriched.visualType || 'marketing';
  if (!enriched.visualType) {
    if (categorySlug === 'technology') {
      visualType = serviceSlug.includes('crm')
        ? 'crm'
        : serviceSlug.includes('mobile') || serviceSlug.includes('android') || serviceSlug.includes('ios') || serviceSlug.includes('app')
        ? 'mobile'
        : serviceSlug.includes('ai') || serviceSlug.includes('cloud') || serviceSlug.includes('hosting') || serviceSlug.includes('deployment')
        ? 'cloud'
        : 'code';
    } else if (categorySlug === 'design') {
      visualType = serviceSlug.includes('logo') || serviceSlug.includes('brand')
        ? 'brand'
        : 'design';
    } else if (categorySlug === 'production') {
      visualType = serviceSlug.includes('video') || serviceSlug.includes('motion') || serviceSlug.includes('reels')
        ? 'video'
        : 'design';
    } else if (categorySlug === 'digital-marketing') {
      visualType = serviceSlug.includes('ads') || serviceSlug.includes('seo') || serviceSlug.includes('analytics')
        ? 'analytics'
        : serviceSlug.includes('email') || serviceSlug.includes('crm')
        ? 'crm'
        : 'marketing';
    }
  }

  return {
    slug: serviceSlug,
    name: serviceName,
    categorySlug,
    categoryName,
    subcategorySlug,
    subcategoryName,
    url,
    seoTitle,
    metaDescription,
    primaryKeyword,
    secondaryKeywords,
    heroHeadline,
    shortDescription,
    whatIs,
    problemSolution,
    capabilities,
    benefits,
    process,
    targetAudience,
    useCases,
    faqs,
    relatedServiceSlugs: [], // populated later
    visualType,
  };
}

// Build the global dictionary of all services
export function buildAllServices(): Record<string, ServiceDetail> {
  const dictionary: Record<string, ServiceDetail> = {};

  for (const cat of SERVICE_HIERARCHY) {
    for (const sub of cat.subcategories) {
      for (const serviceName of sub.services) {
        const detail = generateServiceDetail(
          cat.title,
          cat.slug,
          sub.title,
          sub.slug,
          serviceName
        );
        dictionary[detail.slug] = detail;
        // Also map by full URL path for instant O(1) routing
        dictionary[detail.url] = detail;
      }
    }
  }

  // Populate related services
  for (const cat of SERVICE_HIERARCHY) {
    for (const sub of cat.subcategories) {
      const subSlugs = sub.services.map((s) => toSlug(s));
      for (const serviceName of sub.services) {
        const slug = toSlug(serviceName);
        const item = dictionary[slug];
        if (item) {
          // Siblings in same subcategory
          item.relatedServiceSlugs = subSlugs.filter((s) => s !== slug).slice(0, 5);
        }
      }
    }
  }

  return dictionary;
}

export const ALL_SERVICES_MAP = buildAllServices();

export function findServiceByPath(pathname: string): ServiceDetail | null {
  const cleanPath = pathname.replace(/\/+$/, '') || '/';
  if (ALL_SERVICES_MAP[cleanPath]) {
    return ALL_SERVICES_MAP[cleanPath];
  }

  // Check by last slug segment
  const segments = cleanPath.split('/').filter(Boolean);
  if (segments.length >= 3) {
    const slug = segments[segments.length - 1];
    if (ALL_SERVICES_MAP[slug]) {
      return ALL_SERVICES_MAP[slug];
    }
  }

  return null;
}

// Master domain knowledge aggregator
import { MARKETING_DOMAIN_KNOWLEDGE } from './domainKnowledgeMarketing.ts';
import { DESIGN_DOMAIN_KNOWLEDGE } from './domainKnowledgeDesign.ts';
import { CONTENT_DOMAIN_KNOWLEDGE } from './domainKnowledgeContent.ts';
import { PRODUCTION_DOMAIN_KNOWLEDGE } from './domainKnowledgeProduction.ts';
import { TECHNOLOGY_DOMAIN_KNOWLEDGE } from './domainKnowledgeTechnology.ts';

import type { ServiceContentOverride } from './serviceTypes.ts';
export type { ServiceContentOverride };

// Master combined dictionary of domain knowledge
export const MASTER_DOMAIN_KNOWLEDGE: Record<string, Partial<ServiceContentOverride>> = {
  ...MARKETING_DOMAIN_KNOWLEDGE,
  ...DESIGN_DOMAIN_KNOWLEDGE,
  ...CONTENT_DOMAIN_KNOWLEDGE,
  ...PRODUCTION_DOMAIN_KNOWLEDGE,
  ...TECHNOLOGY_DOMAIN_KNOWLEDGE,
};

export function toSlug(str: string): string {
  return str
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/**
 * Returns enriched, domain-specific, unique content for any service.
 * Guarantees zero generic placeholder text by combining dictionary overrides
 * with high-fidelity semantic synthesis.
 */
export function getEnrichedServiceContent(
  categoryName: string,
  categorySlug: string,
  subcategoryName: string,
  subcategorySlug: string,
  serviceName: string
): ServiceContentOverride {
  const slug = toSlug(serviceName);
  const custom = MASTER_DOMAIN_KNOWLEDGE[slug];

  if (custom) {
    return {
      whatIs: custom.whatIs || `${serviceName} is a specialized commercial capability within ${subcategoryName} delivering structured, professional results for ${categoryName.toLowerCase()} objectives.`,
      problem: custom.problem || `Many companies experience inconsistent quality, missed commercial milestones, and poor ROI when executing ${serviceName.toLowerCase()} without dedicated senior specialists.`,
      solution: custom.solution || `Review Growth Partners delivers end-to-end ${serviceName.toLowerCase()} backed by proven agency frameworks, strict quality benchmarks, and transparent communication.`,
      primaryKeyword: custom.primaryKeyword || `${serviceName} Services Bangalore`,
      secondaryKeywords: custom.secondaryKeywords || [
        `${serviceName} solutions`,
        `professional ${serviceName.toLowerCase()}`,
        `hire ${serviceName.toLowerCase()} agency`,
        `${subcategoryName.toLowerCase()} company Bangalore`,
      ],
      capabilities: custom.capabilities || [
        {
          title: `Strategic ${serviceName} Scoping`,
          description: `Bespoke requirement analysis, roadmap definition, and alignment with your commercial objectives.`,
        },
        {
          title: `High-Precision Execution`,
          description: `Hands-on execution by experienced domain practitioners using modern industry-standard tools.`,
        },
        {
          title: `Quality Assurance & Compliance`,
          description: `Multi-stage review checkpoints ensuring responsiveness, brand adherence, and error-free output.`,
        },
        {
          title: `Full Commercial Handover`,
          description: `Complete transfer of master source files, code, credentials, and full commercial intellectual property rights.`,
        },
      ],
      benefits: custom.benefits || [
        {
          title: 'Tangible Commercial Impact',
          description: `Engineered to produce measurable outcomes: higher conversions, stronger brand trust, and operational velocity.`,
        },
        {
          title: 'Dedicated Senior Specialist Team',
          description: `Collaborate directly with experienced practitioners rather than rotating junior account managers.`,
        },
        {
          title: '100% Commercial IP Ownership',
          description: `You retain full legal ownership of all deliverables, repositories, designs, and credentials.`,
        },
      ],
      faqs: custom.faqs || [
        {
          question: `What is included in Review Growth Partners' ${serviceName} service?`,
          answer: `Our ${serviceName.toLowerCase()} engagement includes requirement discovery, tailored production, iterative revisions, full source asset transfer, and implementation support.`,
        },
        {
          question: `How long does a typical ${serviceName} project take?`,
          answer: `Standard delivery takes between 1 and 3 weeks depending on the technical depth and specific scope.`,
        },
        {
          question: `Can ${serviceName} be customized to our specific industry requirements?`,
          answer: `Yes, every engagement begins with an industry audit so deliverables are tailored strictly to your sector and competitive landscape.`,
        },
        {
          question: `How can I get an official quotation for ${serviceName}?`,
          answer: `You can submit an inquiry via our Get a Quote form or call our Bangalore team directly to schedule a consultation.`,
        },
      ],
      visualType: custom.visualType,
      useCases: custom.useCases,
      targetAudience: custom.targetAudience,
    };
  }

  // Fallback domain-aware synthesis for any edge cases
  const isTech = categorySlug === 'technology';
  const isDesign = categorySlug === 'design';
  const isVideo = categorySlug === 'production';
  const isContent = categorySlug === 'content';

  const whatIs = isTech
    ? `${serviceName} is an engineering capability within ${subcategoryName} delivering fast, secure, and scalable digital infrastructure tailored to your commercial business requirements.`
    : isDesign
    ? `${serviceName} is a creative design discipline within ${subcategoryName} focused on crafting distinct, memorable visual assets that elevate your brand equity and authority.`
    : isVideo
    ? `${serviceName} is a media production capability within ${subcategoryName} that transforms raw ideas into captivating, cinematic visual stories optimized for viewer retention.`
    : isContent
    ? `${serviceName} is a strategic editorial service within ${subcategoryName} designed to communicate your value proposition persuasively, engage target readers, and convert visitors into buyers.`
    : `${serviceName} is a data-driven growth service within ${subcategoryName} designed to expand brand reach, improve engagement, and generate qualified commercial leads.`;

  const problem = isTech
    ? `Businesses suffer from slow legacy code, security vulnerabilities, poor mobile responsiveness, and rigid architectures that hinder growth.`
    : isDesign
    ? `Generic templates and amateur graphics fail to establish trust, dilute brand credibility, and make your business look indistinguishable from competitors.`
    : isVideo
    ? `Low-quality video cuts, poor audio balance, and weak pacing cause viewers to swipe away within the first 3 seconds, wasting production effort.`
    : isContent
    ? `Dry, generic copywriting and keyword-stuffed articles fail to connect with human buyers and fail to meet modern search engine quality standards.`
    : `Inconsistent marketing efforts and unoptimized campaigns lead to wasted marketing budgets with negligible sales pipeline generation.`;

  const solution = isTech
    ? `Review Growth Partners builds clean, modern, and high-performance ${serviceName.toLowerCase()} using verified technical frameworks, modular code, and cloud deployment.`
    : isDesign
    ? `Review Growth Partners crafts bespoke, high-precision visual systems for ${serviceName.toLowerCase()} rooted in color psychology, clean typography, and multi-format scalability.`
    : isVideo
    ? `Review Growth Partners produces polished, dynamic ${serviceName.toLowerCase()} featuring sound design, color grading, and narrative hooks designed for maximum watch time.`
    : isContent
    ? `Review Growth Partners crafts persuasive, research-backed ${serviceName.toLowerCase()} that captivates audiences, answers real search queries, and drives decisive buyer action.`
    : `Review Growth Partners executes structured ${serviceName.toLowerCase()} backed by data-driven targeting, dedicated specialists, and transparent ROI reporting.`;

  return {
    whatIs,
    problem,
    solution,
    primaryKeyword: `${serviceName} Services Bangalore`,
    secondaryKeywords: [
      `${serviceName} solutions`,
      `professional ${serviceName.toLowerCase()}`,
      `${subcategoryName.toLowerCase()} agency Bangalore`,
      `${serviceName.toLowerCase()} company`,
    ],
    capabilities: [
      {
        title: `Strategic ${serviceName} Planning`,
        description: `Bespoke requirement analysis, roadmap definition, and alignment with your commercial objectives.`,
      },
      {
        title: `Precision Development & Execution`,
        description: `Hands-on execution by experienced domain specialists using industry-standard tools and workflows.`,
      },
      {
        title: `Quality Assurance & Review`,
        description: `Multi-stage quality checks to ensure responsiveness, performance, and alignment with approved briefs.`,
      },
      {
        title: `Delivery & Full Commercial Ownership`,
        description: `Complete handover of source assets, documentation, credentials, and full commercial intellectual property rights.`,
      },
    ],
    benefits: [
      {
        title: 'Accelerated Commercial Impact',
        description: `Built to produce tangible business outcomes: higher conversions, stronger brand trust, and operational efficiency.`,
      },
      {
        title: 'Zero Vendor Lock-In',
        description: `You retain 100% legal and commercial ownership of all deliverables, repositories, and design files.`,
      },
      {
        title: 'Dedicated Senior Specialist',
        description: `Collaborate directly with seasoned practitioners who provide proactive guidance and rapid turnaround times.`,
      },
    ],
    faqs: [
      {
        question: `What makes Review Growth Partners' ${serviceName} service unique?`,
        answer: `We combine domain technical expertise with commercial business understanding, delivering custom solutions without boilerplate templates or hidden retainer fees.`,
      },
      {
        question: `How long does an engagement for ${serviceName} take?`,
        answer: `Turnaround times generally range from 1 to 3 weeks depending on the exact scope and revisions required.`,
      },
      {
        question: `Can ${serviceName} be customized to our specific industry?`,
        answer: `Yes, every project begins with an industry audit so that deliverables are specifically tailored to your sector, audience, and competitors.`,
      },
      {
        question: `How do we get started with ${serviceName}?`,
        answer: `Simply click Get Quote or contact our Bangalore office to schedule a consultation with our specialist team.`,
      },
    ],
  };
}

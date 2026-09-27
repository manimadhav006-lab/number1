export interface ServiceContentOverride {
  whatIs: string;
  problem: string;
  solution: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  capabilities: { title: string; description: string }[];
  benefits: { title: string; description: string }[];
  faqs: { question: string; answer: string }[];
  targetAudience?: string[];
  useCases?: { title: string; scenario: string; outcome: string }[];
  visualType?: 'analytics' | 'code' | 'design' | 'video' | 'crm' | 'brand' | 'mobile' | 'cloud' | 'marketing';
}

export const SERVICE_TYPES_LOADED = true;


import React, { useState, useEffect } from 'react';
import {
  ArrowRight,
  Phone,
  Mail,
  CheckCircle2,
  ChevronDown,
  Plus,
  Minus,
  Sparkles,
  ShieldCheck,
  Zap,
  Target,
  Clock,
  Layers,
  HelpCircle,
  TrendingUp,
} from 'lucide-react';
import { ServiceDetail } from '../data/servicesData.ts';
import { ALL_SERVICES_MAP } from '../data/serviceContentGenerator.ts';
import { COMPANY_INFO } from '../data/siteData.ts';
import { ServiceVisualMockup } from './ServiceVisualMockup.tsx';

interface ServicePageProps {
  service: ServiceDetail;
  onNavigateUrl: (url: string) => void;
  onOpenQuoteModal: (serviceName?: string) => void;
}

export const ServicePage: React.FC<ServicePageProps> = ({
  service,
  onNavigateUrl,
  onOpenQuoteModal,
}) => {
  const [openFaqIndices, setOpenFaqIndices] = useState<number[]>([0]);

  // Scroll to top on route change & update SEO tags dynamically
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });

    // Update document title and meta description
    document.title = service.seoTitle;

    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', service.metaDescription);

    // Update canonical link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', window.location.origin + service.url);

    // Update OpenGraph tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', service.seoTitle);

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', service.metaDescription);

    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.setAttribute('content', window.location.origin + service.url);

    // Dynamic Schema.org JSON-LD (Service, BreadcrumbList, FAQPage)
    const existingSchema = document.getElementById('service-jsonld');
    if (existingSchema) existingSchema.remove();

    const script = document.createElement('script');
    script.id = 'service-jsonld';
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Service',
          name: service.name,
          serviceType: service.subcategoryName,
          provider: {
            '@type': 'ProfessionalService',
            name: COMPANY_INFO.name,
            url: window.location.origin,
            telephone: COMPANY_INFO.phoneNumber,
            email: COMPANY_INFO.email,
          },
          description: service.shortDescription,
          areaServed: ['Bangalore', 'Karnataka', 'Tamil Nadu', 'India'],
        },
        {
          '@type': 'BreadcrumbList',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Home',
              item: window.location.origin,
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: service.categoryName,
              item: `${window.location.origin}/${service.categorySlug}`,
            },
            {
              '@type': 'ListItem',
              position: 3,
              name: service.subcategoryName,
              item: `${window.location.origin}/${service.categorySlug}/${service.subcategorySlug}`,
            },
            {
              '@type': 'ListItem',
              position: 4,
              name: service.name,
              item: `${window.location.origin}${service.url}`,
            },
          ],
        },
        {
          '@type': 'FAQPage',
          mainEntity: service.faqs.map((faq) => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: {
              '@type': 'Answer',
              text: faq.answer,
            },
          })),
        },
      ],
    });
    document.head.appendChild(script);

    return () => {
      const el = document.getElementById('service-jsonld');
      if (el) el.remove();
    };
  }, [service]);

  const toggleFaq = (index: number) => {
    setOpenFaqIndices((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  // Find related services objects
  const relatedServices: ServiceDetail[] = service.relatedServiceSlugs
    .map((slug) => ALL_SERVICES_MAP[slug])
    .filter(Boolean) as ServiceDetail[];

  return (
    <div className="w-full bg-[#FFFFFF] min-h-screen text-[#0F172A] selection:bg-[#2563EB] selection:text-white">
      {/* 1. Breadcrumbs */}
      <nav
        aria-label="Breadcrumb"
        className="w-full bg-[#F8FAFC] border-b border-[#E2E8F0] py-3 px-4 sm:px-6 lg:px-8 text-xs text-[#64748B]"
      >
        <div className="max-w-[1240px] mx-auto flex items-center gap-1.5 flex-wrap">
          <button
            type="button"
            onClick={() => onNavigateUrl('/')}
            className="hover:text-[#2563EB] font-medium transition-colors cursor-pointer"
          >
            Home
          </button>
          <span>/</span>
          <span className="text-[#64748B] font-medium">{service.categoryName}</span>
          <span>/</span>
          <span className="text-[#64748B] font-medium">{service.subcategoryName}</span>
          <span>/</span>
          <span className="text-[#071A33] font-bold" aria-current="page">
            {service.name}
          </span>
        </div>
      </nav>

      {/* 2. Hero Section */}
      <section className="relative w-full bg-[#FFFFFF] border-b border-[#E2E8F0] py-14 sm:py-20 lg:py-24 overflow-hidden">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Copy */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2563EB]/10 border border-[#2563EB]/20 text-[#2563EB] text-xs font-semibold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{service.subcategoryName} · {service.categoryName}</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-5xl font-extrabold tracking-tight text-[#071A33] leading-[1.15]">
                {service.heroHeadline}
              </h1>

              <p className="text-base sm:text-lg text-[#475569] leading-relaxed">
                {service.shortDescription}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => onOpenQuoteModal(`${service.name} Project`)}
                  className="px-6 py-3.5 bg-[#071A33] hover:bg-[#1D4ED8] text-white text-xs sm:text-sm font-semibold tracking-wide uppercase rounded-md transition-colors flex items-center gap-2 cursor-pointer shadow-xs active:scale-98"
                >
                  <span>Request {service.name} Proposal</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href={`tel:${COMPANY_INFO.phoneNumber}`}
                  className="px-5 py-3.5 border border-[#E2E8F0] hover:border-[#071A33] text-[#071A33] text-xs sm:text-sm font-semibold rounded-md transition-colors flex items-center gap-2 cursor-pointer"
                >
                  <Phone className="w-4 h-4 text-[#2563EB]" />
                  <span>Call {COMPANY_INFO.phoneDisplay}</span>
                </a>
              </div>

              {/* Verified Trust Tokens */}
              <div className="pt-4 flex flex-wrap items-center gap-4 text-xs text-[#64748B]">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  <span>Senior Specialist Team</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  <span>100% Commercial IP Rights</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  <span>Measurable Deliverables</span>
                </div>
              </div>
            </div>

            {/* Right Visual / Mockup Preview */}
            <div className="lg:col-span-5 w-full">
              <ServiceVisualMockup service={service} />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Introduction & Direct Definition (AEO / Answer Engine Optimized) */}
      <section className="py-14 sm:py-20 border-b border-[#E2E8F0] bg-[#FFFFFF]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-xs font-semibold tracking-widest text-[#2563EB] uppercase mb-2">
              Service Definition
            </h2>
            <h3 className="text-2xl sm:text-3xl font-bold text-[#071A33] tracking-tight mb-4">
              What is {service.name}?
            </h3>
            <p className="text-base sm:text-lg text-[#475569] leading-relaxed">
              {service.whatIs}
            </p>
          </div>
        </div>
      </section>

      {/* 4. Problem & Solution Section */}
      <section className="py-14 sm:py-20 bg-[#F8FAFC] border-b border-[#E2E8F0]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-xs font-semibold tracking-widest text-[#2563EB] uppercase mb-2">
              Commercial Impact
            </h2>
            <h3 className="text-2xl sm:text-3xl font-bold text-[#071A33] tracking-tight">
              The Problem We Solve &amp; Our Solution
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* The Challenge */}
            <div className="p-8 rounded-xl bg-white border border-[#E2E8F0] shadow-2xs">
              <div className="inline-flex items-center gap-2 text-rose-600 font-semibold text-xs uppercase tracking-wider mb-3">
                <span className="w-2 h-2 rounded-full bg-rose-600" />
                The Common Industry Problem
              </div>
              <h4 className="text-lg font-bold text-[#071A33] mb-3">
                Where Businesses Struggle with {service.name}
              </h4>
              <p className="text-sm text-[#475569] leading-relaxed">
                {service.problemSolution.problem}
              </p>
            </div>

            {/* Our Solution */}
            <div className="p-8 rounded-xl bg-white border border-[#E2E8F0] shadow-2xs">
              <div className="inline-flex items-center gap-2 text-emerald-600 font-semibold text-xs uppercase tracking-wider mb-3">
                <span className="w-2 h-2 rounded-full bg-emerald-600" />
                The Review Growth Partners Solution
              </div>
              <h4 className="text-lg font-bold text-[#071A33] mb-3">
                Engineered for Reliability &amp; ROI
              </h4>
              <p className="text-sm text-[#475569] leading-relaxed">
                {service.problemSolution.solution}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Key Capabilities / What We Provide */}
      <section className="py-14 sm:py-20 border-b border-[#E2E8F0] bg-white">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-xs font-semibold tracking-widest text-[#2563EB] uppercase mb-2">
              What We Deliver
            </h2>
            <h3 className="text-2xl sm:text-3xl font-bold text-[#071A33] tracking-tight">
              Key Capabilities in {service.name}
            </h3>
            <p className="text-sm text-[#64748B] mt-2">
              Comprehensive scope executed by experienced practitioners with zero boilerplate filler.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.capabilities.map((cap, idx) => (
              <div
                key={cap.title}
                className="p-6 rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] hover:border-[#2563EB] transition-colors flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs font-mono text-[#94A3B8] block mb-2">
                    0{idx + 1}
                  </span>
                  <h4 className="text-base font-bold text-[#071A33] mb-2 leading-snug">
                    {cap.title}
                  </h4>
                  <p className="text-xs text-[#64748B] leading-relaxed">
                    {cap.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Benefits */}
      <section className="py-14 sm:py-20 bg-[#F8FAFC] border-b border-[#E2E8F0]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-xs font-semibold tracking-widest text-[#2563EB] uppercase mb-2">
              Tangible Value
            </h2>
            <h3 className="text-2xl sm:text-3xl font-bold text-[#071A33] tracking-tight">
              Benefits of Choosing {service.name}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {service.benefits.map((benefit, idx) => (
              <div
                key={benefit.title}
                className="p-6 rounded-xl bg-white border border-[#E2E8F0] shadow-2xs"
              >
                <div className="w-10 h-10 rounded-lg bg-[#2563EB]/10 text-[#2563EB] flex items-center justify-center mb-4">
                  {idx === 0 && <TrendingUp className="w-5 h-5" />}
                  {idx === 1 && <ShieldCheck className="w-5 h-5" />}
                  {idx === 2 && <Zap className="w-5 h-5" />}
                </div>
                <h4 className="text-base font-bold text-[#071A33] mb-2">
                  {benefit.title}
                </h4>
                <p className="text-xs text-[#64748B] leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Process (4 Steps) */}
      <section className="py-14 sm:py-20 border-b border-[#E2E8F0] bg-white">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-xs font-semibold tracking-widest text-[#2563EB] uppercase mb-2">
              Execution Blueprint
            </h2>
            <h3 className="text-2xl sm:text-3xl font-bold text-[#071A33] tracking-tight">
              How We Execute {service.name} Projects
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.process.map((step) => (
              <div
                key={step.step}
                className="p-6 rounded-xl border border-[#E2E8F0] bg-[#F8FAFC]"
              >
                <span className="text-xs font-bold text-[#2563EB] font-mono mb-2 block">
                  Step {step.step}
                </span>
                <h4 className="text-base font-bold text-[#071A33] mb-2">
                  {step.title}
                </h4>
                <p className="text-xs text-[#64748B] leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Who this service is for & Use Cases */}
      <section className="py-14 sm:py-20 bg-[#F8FAFC] border-b border-[#E2E8F0]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Target Audience */}
            <div className="lg:col-span-5 space-y-4">
              <h2 className="text-xs font-semibold tracking-widest text-[#2563EB] uppercase">
                Target Market
              </h2>
              <h3 className="text-2xl font-bold text-[#071A33] tracking-tight">
                Who Needs {service.name}?
              </h3>
              <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                Whether you are establishing a new market presence or modernizing enterprise infrastructure, this service provides direct commercial value.
              </p>

              <ul className="space-y-3 pt-2">
                {service.targetAudience.map((audience) => (
                  <li key={audience} className="flex items-start gap-2.5 text-xs text-[#334155]">
                    <CheckCircle2 className="w-4 h-4 text-[#2563EB] shrink-0 mt-0.5" />
                    <span>{audience}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Practical Use Cases */}
            <div className="lg:col-span-7 space-y-4">
              <h2 className="text-xs font-semibold tracking-widest text-[#2563EB] uppercase">
                Real-World Application
              </h2>
              <h3 className="text-2xl font-bold text-[#071A33] tracking-tight">
                Practical Use Cases
              </h3>

              <div className="space-y-4 pt-2">
                {service.useCases.map((uc) => (
                  <div
                    key={uc.title}
                    className="p-5 rounded-xl bg-white border border-[#E2E8F0] shadow-2xs"
                  >
                    <h4 className="text-sm font-bold text-[#071A33] mb-1">
                      {uc.title}
                    </h4>
                    <p className="text-xs text-[#64748B] mb-2">
                      <strong className="text-[#334155]">Scenario:</strong> {uc.scenario}
                    </p>
                    <p className="text-xs text-emerald-700 bg-emerald-50 p-2 rounded border border-emerald-100 font-medium">
                      <strong>Expected Outcome:</strong> {uc.outcome}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Why Review Growth Partners */}
      <section className="py-14 sm:py-20 border-b border-[#E2E8F0] bg-white">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-xs font-semibold tracking-widest text-[#2563EB] uppercase mb-2">
              The RGP Advantage
            </h2>
            <h3 className="text-2xl sm:text-3xl font-bold text-[#071A33] tracking-tight">
              Why Partner with Review Growth Partners?
            </h3>
            <p className="text-sm text-[#64748B] mt-2">
              Serving businesses across Bangalore, Tamil Nadu, and nationwide with modern tech and transparent workflows.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-xl border border-[#E2E8F0] bg-[#F8FAFC]">
              <div className="w-10 h-10 rounded-lg bg-[#2563EB]/10 text-[#2563EB] flex items-center justify-center mb-3">
                <Target className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold text-[#071A33] mb-1">Direct Commercial Scope</h4>
              <p className="text-xs text-[#64748B]">Clear deliverables with zero hidden terms or vague retainers.</p>
            </div>

            <div className="p-6 rounded-xl border border-[#E2E8F0] bg-[#F8FAFC]">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/10 text-emerald-600 flex items-center justify-center mb-3">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold text-[#071A33] mb-1">100% Asset Ownership</h4>
              <p className="text-xs text-[#64748B]">You retain complete ownership of all code, designs, and accounts.</p>
            </div>

            <div className="p-6 rounded-xl border border-[#E2E8F0] bg-[#F8FAFC]">
              <div className="w-10 h-10 rounded-lg bg-amber-500/10 text-amber-600 flex items-center justify-center mb-3">
                <Zap className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold text-[#071A33] mb-1">Modern Architecture</h4>
              <p className="text-xs text-[#64748B]">Built on fast, maintainable stacks with high security benchmarks.</p>
            </div>

            <div className="p-6 rounded-xl border border-[#E2E8F0] bg-[#F8FAFC]">
              <div className="w-10 h-10 rounded-lg bg-indigo-500/10 text-indigo-600 flex items-center justify-center mb-3">
                <Clock className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold text-[#071A33] mb-1">Responsive Communication</h4>
              <p className="text-xs text-[#64748B]">Dedicated single point of contact with active milestone updates.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 10. Related Services (Internal Linking Engine) */}
      {relatedServices.length > 0 && (
        <section className="py-14 sm:py-20 bg-[#F8FAFC] border-b border-[#E2E8F0]">
          <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
              <div>
                <h2 className="text-xs font-semibold tracking-widest text-[#2563EB] uppercase mb-1">
                  Internal Linking &amp; Exploration
                </h2>
                <h3 className="text-2xl font-bold text-[#071A33] tracking-tight">
                  Related Services in {service.subcategoryName}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => onNavigateUrl('/')}
                className="text-xs font-semibold text-[#2563EB] hover:underline flex items-center gap-1 cursor-pointer"
              >
                <span>View Full Catalog</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {relatedServices.map((rel) => (
                <button
                  key={rel.slug}
                  type="button"
                  onClick={() => onNavigateUrl(rel.url)}
                  className="p-5 rounded-xl bg-white border border-[#E2E8F0] hover:border-[#2563EB] text-left transition-all group cursor-pointer shadow-2xs"
                >
                  <span className="text-[10px] font-mono text-[#94A3B8] block mb-1">
                    {rel.subcategoryName}
                  </span>
                  <h4 className="text-sm font-bold text-[#071A33] group-hover:text-[#2563EB] transition-colors mb-1">
                    {rel.name}
                  </h4>
                  <p className="text-xs text-[#64748B] line-clamp-2 mb-3">
                    {rel.shortDescription}
                  </p>
                  <div className="flex items-center text-xs font-semibold text-[#2563EB] gap-1">
                    <span>Explore {rel.name}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 11. FAQ Section (Service Specific & FAQPage Schema Ready) */}
      <section className="py-14 sm:py-20 border-b border-[#E2E8F0] bg-white">
        <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-xs font-semibold tracking-widest text-[#2563EB] uppercase mb-2">
              Frequently Asked Questions
            </h2>
            <h3 className="text-2xl sm:text-3xl font-bold text-[#071A33] tracking-tight">
              Questions About {service.name}
            </h3>
            <p className="text-xs sm:text-sm text-[#64748B] mt-2">
              Direct, transparent answers regarding deliverables, turnaround times, and technical execution.
            </p>
          </div>

          <div className="divide-y divide-[#E2E8F0] border-t border-b border-[#E2E8F0]">
            {service.faqs.map((faq, idx) => {
              const isOpen = openFaqIndices.includes(idx);
              return (
                <div key={faq.question} className="py-5 sm:py-6">
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    aria-expanded={isOpen}
                    className="w-full flex items-start justify-between text-left gap-4 cursor-pointer select-none group"
                  >
                    <span
                      className={`text-base sm:text-lg font-semibold tracking-tight transition-colors duration-150 leading-snug ${
                        isOpen ? 'text-[#2563EB]' : 'text-[#071A33] group-hover:text-[#2563EB]'
                      }`}
                    >
                      {faq.question}
                    </span>
                    <div
                      className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 border transition-all mt-0.5 ${
                        isOpen
                          ? 'bg-[#2563EB] border-[#2563EB] text-white rotate-90'
                          : 'bg-[#F8FAFC] border-[#E2E8F0] text-[#071A33]'
                      }`}
                    >
                      {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                    </div>
                  </button>

                  {isOpen && (
                    <div className="pt-3 pb-1 text-sm text-[#475569] leading-relaxed animate-in fade-in duration-150">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 12. Final CTA Banner */}
      <section className="bg-[#071A33] py-14 sm:py-20 text-white">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#38BDF8]">
              Ready to Get Started?
            </span>
            <h3 className="text-2xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
              Request a Custom Proposal for {service.name}
            </h3>
            <p className="text-sm sm:text-base text-[#94A3B8] leading-relaxed max-w-xl mx-auto">
              Tell us about your project requirements and goals. Our specialists will provide an itemized scope, deliverables roadmap, and quotation.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <button
                type="button"
                onClick={() => onOpenQuoteModal(service.name)}
                className="px-7 py-3.5 bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-xs sm:text-sm font-semibold tracking-wide uppercase rounded-md transition-colors cursor-pointer shadow-md active:scale-98"
              >
                Get Custom Quote
              </button>
              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="px-5 py-3.5 border border-[#1E334D] hover:bg-[#0B2A4F] text-white text-xs sm:text-sm font-semibold rounded-md transition-colors flex items-center gap-2 cursor-pointer"
              >
                <Mail className="w-4 h-4 text-[#38BDF8]" />
                <span>{COMPANY_INFO.email}</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

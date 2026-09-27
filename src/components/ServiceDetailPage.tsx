import React from 'react';
import { ArrowRight, Phone, Mail } from 'lucide-react';
import { MainCategory, MiniHeading } from '../data/navigationSchema.ts';
import { COMPANY_INFO } from '../data/siteData.ts';

interface ServiceDetailPageProps {
  category: MainCategory;
  miniHeading: MiniHeading;
  selectedSubItem?: string;
  onBackToHome: () => void;
  onNavigateToMiniHeading: (category: MainCategory, miniHeading: MiniHeading, subItem?: string) => void;
  onOpenQuoteModal: (serviceName?: string) => void;
  onOpenCareerModal?: (role?: string) => void;
}

export const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({
  category,
  miniHeading,
  selectedSubItem,
  onOpenQuoteModal,
}) => {
  // Scroll to top on render
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [miniHeading.id, selectedSubItem]);

  const activeTitle = selectedSubItem || miniHeading.title;

  return (
    <div className="w-full bg-[#FFFFFF] min-h-[75vh] text-[#0F172A]">
      {/* Editorial Practice Header */}
      <section className="border-b border-[#E2E8F0] bg-[#FFFFFF] py-14 sm:py-20 lg:py-24">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            {/* Category Marker */}
            <div className="text-xs font-semibold tracking-widest text-[#2563EB] uppercase mb-3">
              {category.title}
            </div>

            {/* Practice / Subheading Title */}
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#071A33] mb-4 leading-[1.15]">
              {activeTitle}
            </h1>

            {/* Practice Subtitle */}
            <p className="text-base sm:text-lg text-[#475569] leading-relaxed mb-8">
              {miniHeading.description}
            </p>

            {/* Actions */}
            <div className="flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => onOpenQuoteModal(`${miniHeading.title} - ${activeTitle}`)}
                className="px-6 py-3 bg-[#071A33] hover:bg-[#1D4ED8] text-white text-xs sm:text-sm font-semibold tracking-wide uppercase rounded-md transition-colors flex items-center gap-2 cursor-pointer shadow-xs"
              >
                <span>Request Scope &amp; Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={`tel:${COMPANY_INFO.phoneNumber}`}
                className="px-5 py-3 border border-[#E2E8F0] hover:border-[#071A33] text-[#071A33] text-xs sm:text-sm font-semibold rounded-md transition-colors flex items-center gap-2 cursor-pointer"
              >
                <Phone className="w-4 h-4 text-[#2563EB]" />
                <span>Call {COMPANY_INFO.phoneDisplay}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services List / Practice Structure */}
      <section className="py-14 sm:py-20">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-b border-[#E2E8F0] pb-4 mb-8">
            <h2 className="text-lg font-bold text-[#071A33] tracking-tight">
              Practice Capabilities
            </h2>
            <p className="text-xs sm:text-sm text-[#64748B] mt-0.5">
              Available services and specialized deliverables within {miniHeading.title}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {miniHeading.subItems.map((item, idx) => {
              const isSelected = item === selectedSubItem;
              return (
                <div
                  key={item}
                  className={`p-6 rounded-lg border transition-all ${
                    isSelected
                      ? 'border-[#2563EB] bg-[#F8FAFC]'
                      : 'border-[#E2E8F0] bg-white hover:border-[#94A3B8]'
                  }`}
                >
                  <div className="text-xs font-mono text-[#94A3B8] mb-2">
                    {idx < 9 ? `0${idx + 1}` : idx + 1}
                  </div>
                  <h3 className="text-base font-semibold text-[#071A33] mb-2">
                    {item}
                  </h3>
                  <button
                    type="button"
                    onClick={() => onOpenQuoteModal(`${miniHeading.title} - ${item}`)}
                    className="text-xs font-semibold text-[#2563EB] hover:text-[#1D4ED8] flex items-center gap-1 cursor-pointer pt-2 group"
                  >
                    <span>Inquire about {item}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </div>
              );
            })}
          </div>

          {/* Clean consultation box */}
          <div className="mt-14 p-8 rounded-lg bg-[#F8FAFC] border border-[#E2E8F0] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h3 className="text-base sm:text-lg font-bold text-[#071A33]">
                Need custom deliverables for this practice?
              </h3>
              <p className="text-xs sm:text-sm text-[#64748B] mt-1 max-w-xl">
                Share your requirements with our team to receive an itemized proposal, timeline, and commercial terms.
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0 flex-wrap">
              <button
                type="button"
                onClick={() => onOpenQuoteModal(miniHeading.title)}
                className="px-5 py-2.5 bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-xs font-semibold uppercase tracking-wider rounded-md transition-colors cursor-pointer"
              >
                Get Quotation
              </button>
              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="px-4 py-2.5 border border-[#E2E8F0] bg-white text-[#071A33] text-xs font-semibold rounded-md hover:bg-[#F1F5F9] transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                <Mail className="w-3.5 h-3.5 text-[#2563EB]" />
                <span>{COMPANY_INFO.email}</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

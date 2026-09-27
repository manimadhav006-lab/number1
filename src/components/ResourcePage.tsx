import React from 'react';
import {
  Building2,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Briefcase,
  FileText,
} from 'lucide-react';
import { COMPANY_INFO } from '../data/siteData.ts';

interface ResourcePageProps {
  pageType: 'company-info' | 'about-us';
  onBackToHome: () => void;
  onOpenQuoteModal: (serviceName?: string) => void;
  onOpenCareerModal: () => void;
}

export const ResourcePage: React.FC<ResourcePageProps> = ({
  pageType,
  onOpenQuoteModal,
  onOpenCareerModal,
}) => {
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pageType]);

  const isCompanyInfo = pageType === 'company-info';

  return (
    <div className="w-full bg-[#FFFFFF] min-h-[75vh] text-[#0F172A]">
      {/* Editorial Header */}
      <section className="border-b border-[#E2E8F0] bg-[#FFFFFF] py-14 sm:py-20 lg:py-24">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="text-xs font-semibold tracking-widest text-[#2563EB] uppercase mb-3">
              Corporate Resources
            </div>

            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#071A33] mb-4 leading-[1.15]">
              {isCompanyInfo ? 'Company Information' : 'About Review Growth Partners'}
            </h1>

            <p className="text-base sm:text-lg text-[#475569] leading-relaxed mb-8">
              {isCompanyInfo
                ? 'Review Growth Partners Pvt Ltd is a digital growth and technology company delivering strategic branding, modern web development, and performance marketing across India.'
                : 'Helping businesses, startups, and emerging brands build their online footprint, accelerate digital visibility, and generate sustainable commercial results.'}
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => onOpenQuoteModal('Strategic Consultation')}
                className="px-6 py-3 bg-[#071A33] hover:bg-[#1D4ED8] text-white text-xs sm:text-sm font-semibold tracking-wide uppercase rounded-md transition-colors flex items-center gap-2 cursor-pointer shadow-xs"
              >
                <span>Get in Touch</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={onOpenCareerModal}
                className="px-5 py-3 border border-[#E2E8F0] hover:border-[#071A33] text-[#071A33] text-xs sm:text-sm font-semibold rounded-md transition-colors flex items-center gap-2 cursor-pointer"
              >
                <Briefcase className="w-4 h-4 text-[#2563EB]" />
                <span>Careers &amp; Internships</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Body */}
      <section className="py-14 sm:py-20">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Left 2 Cols: Details */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-xl font-bold text-[#071A33] mb-3">
                  Overview &amp; Mission
                </h2>
                <p className="text-sm sm:text-base text-[#475569] leading-relaxed mb-4">
                  Review Growth Partners (RGP) is a digital growth and technology company helping businesses, startups, and individuals build their online presence through websites, software solutions, branding, digital marketing, social media, content, and technology services.
                </p>
                <p className="text-sm sm:text-base text-[#475569] leading-relaxed">
                  From branding and website development to digital marketing, social media, and content creation, we deliver structured, creative, and measurable digital solutions tailored to each business&apos;s stage and commercial goals.
                </p>
              </div>

              {/* Programs for Students & Freshers */}
              <div className="p-6 rounded-lg bg-[#F8FAFC] border border-[#E2E8F0]">
                <h3 className="text-base font-bold text-[#071A33] mb-2 flex items-center gap-2">
                  <Briefcase className="w-4 h-4 text-[#2563EB]" />
                  <span>Programs for Students &amp; Freshers</span>
                </h3>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed mb-3">
                  Review Growth Partners also provides practical learning and internship-oriented programs in areas such as web development, no-code website building, business development, and AI-based technology.
                </p>
                <button
                  type="button"
                  onClick={onOpenCareerModal}
                  className="text-xs font-semibold text-[#2563EB] hover:underline flex items-center gap-1 cursor-pointer"
                >
                  <span>View Open Opportunities</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Right Col: Official Corporate Card */}
            <div>
              <div className="p-6 rounded-lg bg-[#F8FAFC] border border-[#E2E8F0]">
                <h3 className="text-sm font-bold text-[#071A33] mb-4 pb-2 border-b border-[#E2E8F0] flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-[#2563EB]" />
                  <span>Corporate Details</span>
                </h3>

                <div className="space-y-4 text-xs text-[#334155]">
                  <div>
                    <span className="text-[#64748B] block font-medium">Company Name:</span>
                    <strong className="text-[#071A33] text-sm">{COMPANY_INFO.name}</strong>
                  </div>

                  <div>
                    <span className="text-[#64748B] block font-medium">Brand Identity:</span>
                    <span className="text-[#071A33] font-semibold">{COMPANY_INFO.shortName}</span>
                  </div>

                  <div>
                    <span className="text-[#64748B] block font-medium">Email:</span>
                    <a
                      href={`mailto:${COMPANY_INFO.email}`}
                      className="text-[#2563EB] hover:underline font-semibold flex items-center gap-1.5 mt-0.5"
                    >
                      <Mail className="w-3.5 h-3.5 text-[#2563EB]" />
                      <span>{COMPANY_INFO.email}</span>
                    </a>
                  </div>

                  <div>
                    <span className="text-[#64748B] block font-medium">Phone:</span>
                    <a
                      href={`tel:${COMPANY_INFO.phoneNumber}`}
                      className="text-[#2563EB] hover:underline font-semibold flex items-center gap-1.5 mt-0.5"
                    >
                      <Phone className="w-3.5 h-3.5 text-[#2563EB]" />
                      <span>{COMPANY_INFO.phoneDisplay}</span>
                    </a>
                  </div>

                  <div>
                    <span className="text-[#64748B] block font-medium">Location:</span>
                    <span className="text-[#071A33] flex items-center gap-1.5 mt-0.5">
                      <MapPin className="w-3.5 h-3.5 text-[#071A33]" />
                      <span>Bangalore, Karnataka, India</span>
                    </span>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-[#E2E8F0]">
                  <button
                    type="button"
                    onClick={() => onOpenQuoteModal('Corporate Consultation')}
                    className="w-full py-2.5 bg-[#071A33] hover:bg-[#1D4ED8] text-white text-xs font-semibold uppercase tracking-wider rounded-md transition-colors cursor-pointer"
                  >
                    Schedule Consultation
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

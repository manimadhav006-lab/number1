import React from 'react';
import {
  ArrowRight,
  Star,
  Phone,
} from 'lucide-react';
import { COMPANY_INFO } from '../data/siteData.ts';
import { FAQSection } from './FAQSection.tsx';

const HERO_IMG = '/src/assets/images/hero_agency_digital_1790277010915.jpg';

interface HomePageProps {
  onOpenQuoteModal: (service?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenQuoteModal }) => {
  return (
    <div className="w-full max-w-full overflow-x-hidden bg-[#FFFFFF] text-[#0F172A]">
      {/* DASHBOARD / HERO CONTENT - Crisp Architectural Layout */}
      <section className="relative w-full max-w-full overflow-x-hidden pt-12 pb-16 sm:pt-20 sm:pb-24 lg:pt-24 lg:pb-28 bg-[#FFFFFF] text-[#0F172A] border-b border-[#E2E8F0]">
        <div className="w-full max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              
              {/* Eyebrow */}
              <div className="text-xs font-semibold tracking-widest text-[#2563EB] uppercase">
                Digital Growth &amp; Technology Firm
              </div>

              {/* Main Headline: Build. Create. Connect. Grow. */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#071A33] leading-[1.1] text-balance">
                Build. Create. <span className="text-[#2563EB]">Connect. Grow.</span>
              </h1>

              <p className="text-base sm:text-lg font-medium text-[#334155] leading-relaxed max-w-2xl mx-auto lg:mx-0">
                {COMPANY_INFO.alternativeLine}
              </p>

              <p className="text-sm sm:text-base text-[#64748B] leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Review Growth Partners empowers businesses, startups, and emerging brands to build authentic brand equity, dominate high-intent search, deploy custom web applications, and drive measurable customer acquisition.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                {/* Mobile Phone ONLY Get Quote button */}
                <button
                  type="button"
                  onClick={() => onOpenQuoteModal()}
                  className="sm:hidden w-full py-3.5 bg-[#071A33] hover:bg-[#1D4ED8] text-white font-semibold text-xs tracking-wider uppercase rounded-md shadow-sm flex items-center justify-center gap-2 active:scale-98 cursor-pointer transition-colors"
                >
                  <span>GET QUOTE</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                {/* Tablet / Desktop Quote button */}
                <button
                  type="button"
                  onClick={() => onOpenQuoteModal('Digital Marketing')}
                  className="hidden sm:inline-flex w-auto px-7 py-3.5 bg-[#071A33] hover:bg-[#1D4ED8] text-white font-semibold text-xs tracking-wider uppercase rounded-md shadow-xs transition-colors items-center justify-center gap-2 active:scale-98 cursor-pointer"
                >
                  <span>Request Custom Proposal</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                {/* Direct Call Button */}
                <div className="w-full sm:w-auto pt-1 sm:pt-0 sm:pl-4 flex items-center justify-center gap-2 text-xs text-[#64748B]">
                  <Phone className="w-3.5 h-3.5 text-[#2563EB] shrink-0" />
                  <span>Direct:</span>
                  <a
                    href={`tel:${COMPANY_INFO.phoneNumber}`}
                    className="text-[#071A33] font-semibold text-sm hover:text-[#2563EB] hover:underline tabular-nums"
                  >
                    {COMPANY_INFO.phoneDisplay}
                  </a>
                </div>
              </div>

              {/* Metrics Grid */}
              <div className="pt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 border-t border-[#E2E8F0]">
                <div className="p-4 rounded-lg bg-[#F8FAFC] border border-[#E2E8F0] text-center lg:text-left">
                  <div className="text-2xl sm:text-3xl font-bold text-[#071A33] tabular-nums tracking-tight">500+</div>
                  <div className="text-xs text-[#64748B] mt-1 font-medium">Businesses Scaled</div>
                </div>
                <div className="p-4 rounded-lg bg-[#F8FAFC] border border-[#E2E8F0] text-center lg:text-left">
                  <div className="text-2xl sm:text-3xl font-bold text-[#2563EB] tabular-nums tracking-tight">4.9★</div>
                  <div className="text-xs text-[#64748B] mt-1 font-medium">Verified Rating</div>
                </div>
                <div className="p-4 rounded-lg bg-[#F8FAFC] border border-[#E2E8F0] text-center lg:text-left">
                  <div className="text-2xl sm:text-3xl font-bold text-[#071A33] tabular-nums tracking-tight">4.6x</div>
                  <div className="text-xs text-[#64748B] mt-1 font-medium">Average ROAS</div>
                </div>
                <div className="p-4 rounded-lg bg-[#F8FAFC] border border-[#E2E8F0] text-center lg:text-left">
                  <div className="text-2xl sm:text-3xl font-bold text-[#10B981] tabular-nums tracking-tight">98%</div>
                  <div className="text-xs text-[#64748B] mt-1 font-medium">Client Retention</div>
                </div>
              </div>
            </div>

            {/* Right Visual Card */}
            <div className="lg:col-span-5 relative w-full">
              <div className="relative rounded-xl overflow-hidden border border-[#E2E8F0] shadow-md bg-white group max-w-full">
                <img
                  src={HERO_IMG}
                  alt="Review Growth Partners Studio"
                  className="w-full h-72 sm:h-96 lg:h-[460px] object-cover object-center group-hover:scale-101 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071A33]/70 via-transparent to-transparent pointer-events-none" />

                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-lg bg-white/95 backdrop-blur-md border border-[#E2E8F0] shadow-sm">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="text-xs font-bold text-[#071A33]">Review Growth Partners</p>
                      <p className="text-[11px] text-[#64748B]">Digital Growth &amp; Technology Architecture</p>
                    </div>
                    <button
                      type="button"
                      onClick={() => onOpenQuoteModal()}
                      className="text-xs font-semibold text-[#2563EB] hover:text-[#071A33] transition-colors cursor-pointer shrink-0 uppercase tracking-wider"
                    >
                      Get Quote →
                    </button>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Frequently Asked Questions Section */}
      <FAQSection onOpenQuoteModal={onOpenQuoteModal} />
    </div>
  );
};

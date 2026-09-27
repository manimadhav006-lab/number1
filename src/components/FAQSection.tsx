import React, { useState } from 'react';
import { Plus, Minus, Sparkles, ArrowRight, Phone } from 'lucide-react';
import { FAQ_DATA } from '../data/faqData.ts';
import { COMPANY_INFO } from '../data/siteData.ts';

interface FAQSectionProps {
  onOpenQuoteModal: (service?: string) => void;
}

export const FAQSection: React.FC<FAQSectionProps> = ({ onOpenQuoteModal }) => {
  const [openIds, setOpenIds] = useState<number[]>([1]); // First question open by default

  const toggleFAQ = (id: number) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <section id="faq" className="w-full bg-[#FFFFFF] py-16 sm:py-24 border-b border-[#DCE6F2] relative">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with image-matching styling: Red top accent bar, huge background watermark "QUESTIONS", and foreground title */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          {/* Top red accent bar */}
          <div className="w-12 h-1 bg-[#E03616] rounded-full mx-auto mb-3" />

          {/* Background Watermark & Title Overlay */}
          <div className="relative flex items-center justify-center py-4 sm:py-6">
            <span
              aria-hidden="true"
              className="absolute inset-0 flex items-center justify-center text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-widest text-[#0F172A]/[0.05] uppercase select-none pointer-events-none"
            >
              QUESTIONS
            </span>

            <h2 className="relative z-10 text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0B2A4F] tracking-tight">
              FAQ&apos;s on Digital Marketing
            </h2>
          </div>

          <p className="text-sm sm:text-base text-[#475569] mt-1 max-w-2xl mx-auto leading-relaxed">
            Everything you need to know about Review Growth Partners (RGP), our digital solutions, web &amp; mobile technologies, and growth strategies.
          </p>
        </div>

        {/* Professional FAQ Accordion List (Borderless with elegant divider lines) */}
        <div className="divide-y divide-[#E2E8F0] border-t border-b border-[#E2E8F0]">
          {FAQ_DATA.map((faq) => {
            const isOpen = openIds.includes(faq.id);
            return (
              <div
                key={faq.id}
                className="group py-5 sm:py-6 transition-colors duration-150"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(faq.id)}
                  aria-expanded={isOpen}
                  className="w-full flex items-start justify-between text-left gap-4 sm:gap-6 cursor-pointer select-none group"
                >
                  <div className="flex items-start gap-3 sm:gap-4">
                    <span className="text-xs sm:text-sm font-bold text-[#2563EB] tracking-wider pt-0.5 shrink-0 select-none">
                      {faq.id < 10 ? `0${faq.id}` : faq.id}.
                    </span>
                    <h3
                      className={`text-base sm:text-lg font-semibold tracking-tight transition-colors duration-150 leading-snug ${
                        isOpen
                          ? 'text-[#2563EB]'
                          : 'text-[#0B2A4F] group-hover:text-[#2563EB]'
                      }`}
                    >
                      {faq.question}
                    </h3>
                  </div>

                  {/* Plus / Minus indicator button */}
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 border transition-all duration-200 mt-0.5 ${
                      isOpen
                        ? 'bg-[#2563EB] border-[#2563EB] text-white rotate-90 shadow-xs'
                        : 'bg-[#F8FAFC] border-[#DCE6F2] text-[#0B2A4F] group-hover:border-[#2563EB] group-hover:text-[#2563EB]'
                    }`}
                  >
                    {isOpen ? (
                      <Minus className="w-4 h-4 transition-transform duration-200" />
                    ) : (
                      <Plus className="w-4 h-4 transition-transform duration-200" />
                    )}
                  </div>
                </button>

                {isOpen && (
                  <div className="pt-3 pb-2 pr-4 sm:pr-12 pl-7 sm:pl-10 text-sm sm:text-[15px] text-[#475569] leading-relaxed animate-in fade-in duration-200">
                    <p className="text-justify sm:text-left">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Box */}
        <div className="mt-14 sm:mt-18 p-6 sm:p-8 rounded-2xl bg-[#F8FAFC] border border-[#DCE6F2] shadow-sm flex flex-col sm:flex-row items-center justify-between gap-5">
          <div className="text-center sm:text-left space-y-1">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#2563EB] uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Need More Answers?</span>
            </div>
            <h3 className="text-lg font-bold text-[#0B2A4F]">
              Have a specific project or custom requirement?
            </h3>
            <p className="text-xs text-[#475569]">
              Speak directly with our digital growth team or request a customized proposal tailored to your business.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-2.5 shrink-0 w-full sm:w-auto">
            <button
              type="button"
              onClick={() => onOpenQuoteModal()}
              className="w-full sm:w-auto px-5 py-2.5 bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-bold text-xs tracking-wider uppercase rounded-lg shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Get Quote</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
            <a
              href={`tel:${COMPANY_INFO.phoneNumber}`}
              className="w-full sm:w-auto px-4 py-2.5 bg-white hover:bg-[#F1F5F9] text-[#0B2A4F] border border-[#DCE6F2] font-semibold text-xs rounded-lg transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <Phone className="w-3.5 h-3.5 text-[#14B8A6]" />
              <span>{COMPANY_INFO.phoneDisplay}</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

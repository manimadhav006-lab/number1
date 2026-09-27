import React from 'react';
import { X, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO } from '../data/siteData.ts';

interface LegalModalProps {
  type: 'terms' | 'privacy' | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  const isPrivacy = type === 'privacy';
  const title = isPrivacy ? 'Privacy Policy & Data Security' : 'Terms of Partnership & Use';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-[#071A33]/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-white border border-[#DCE6F2] rounded-2xl shadow-2xl p-5 sm:p-8 text-[#0F172A] max-h-[85vh] overflow-y-auto">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-5 sm:right-5 text-[#8292AA] hover:text-[#0F172A] p-1.5 rounded-lg hover:bg-[#F4F8FC] transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 text-[#2563EB] text-xs font-bold uppercase tracking-wider mb-2">
          <ShieldCheck className="w-4 h-4" />
          <span>{COMPANY_INFO.name} ({COMPANY_INFO.shortName}) Governance</span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B2A4F] tracking-tight mb-4">{title}</h2>

        <div className="space-y-4 text-xs sm:text-sm text-[#475569] leading-relaxed">
          {isPrivacy ? (
            <>
              <p>
                At Review Growth Partners Pvt Ltd, we take client privacy, customer review authenticity, and proprietary data security with the highest degree of diligence.
              </p>
              <h3 className="font-bold text-[#0B2A4F] text-sm mt-3">1. Information Governance & Zero Spam Policy</h3>
              <p>
                We only process contact and review invitation datasets specifically authorized under client service agreements. We adhere to Google Review guidelines and do not engage in fake review generation or prohibited review gating.
              </p>
              <h3 className="font-bold text-[#0B2A4F] text-sm mt-3">2. Data Security & Encryption</h3>
              <p>
                All partner communications and review automation pipelines are safeguarded using TLS 1.3 encryption and SOC-2 compliant cloud infrastructure spanning our Bangalore, Dubai, and Singapore offices.
              </p>
              <h3 className="font-bold text-[#0B2A4F] text-sm mt-3">3. Non-Disclosure & Enterprise NDA</h3>
              <p>
                Review Growth Partners never sells or disseminates customer records to third parties. Data is utilized exclusively for authorized review generation, local SEO optimization, and client campaign delivery.
              </p>
            </>
          ) : (
            <>
              <p>
                Welcome to Review Growth Partners. By engaging with our services, consulting tools, or requesting proposals, you agree to comply with our partnership conditions.
              </p>
              <h3 className="font-bold text-[#0B2A4F] text-sm mt-3">1. Intellectual Property & Brand Rights</h3>
              <p>
                All growth strategies, custom review sync widgets, software integrations, and visual assets developed by RGP remain protected and transfer to clients upon execution of master service agreements.
              </p>
              <h3 className="font-bold text-[#0B2A4F] text-sm mt-3">2. Performance & Ethics Guarantee</h3>
              <p>
                Review Growth Partners strictly adheres to FTC, Google Business Profile, and Trustpilot consumer protection standards.
              </p>
              <h3 className="font-bold text-[#0B2A4F] text-sm mt-3">3. Regional Jurisdiction</h3>
              <p>
                Governed under the laws of India, UAE, and Singapore respective to the contracting regional entity, with primary administrative offices in Bangalore, Karnataka.
              </p>
            </>
          )}
        </div>

        <div className="mt-6 pt-4 border-t border-[#DCE6F2] flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-6 py-2.5 bg-[#0B2A4F] text-white font-bold text-xs uppercase tracking-wider rounded hover:bg-[#071A33] transition-colors"
          >
            I Understand
          </button>
        </div>
      </div>
    </div>
  );
};

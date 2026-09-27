import React, { useState, useEffect } from 'react';
import {
  X,
  CheckCircle2,
  User,
  Phone,
  Mail,
  Building2,
  Briefcase,
  Globe,
  LayoutGrid,
  IndianRupee,
  PenLine,
  ChevronDown,
  Loader2,
  Star,
} from 'lucide-react';
import { COMPANY_INFO } from '../data/siteData.ts';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  defaultService = '',
}) => {
  const [fullName, setFullName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [businessEmail, setBusinessEmail] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [designation, setDesignation] = useState('');
  const [website, setWebsite] = useState('');
  const [servicesRequired, setServicesRequired] = useState(defaultService || '');
  const [monthlyBudget, setMonthlyBudget] = useState('');
  const [projectBrief, setProjectBrief] = useState('');
  const [agreedToTerms, setAgreedToTerms] = useState(true);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    if (defaultService) {
      setServicesRequired(defaultService);
    }
  }, [defaultService]);

  if (!isOpen) return null;

  const validate = () => {
    const errs: { [key: string]: string } = {};
    if (!fullName.trim()) errs.fullName = 'Full name is required';
    if (!mobileNumber.trim()) errs.mobileNumber = 'Mobile number is required';
    if (!businessEmail.trim() || !businessEmail.includes('@')) {
      errs.businessEmail = 'Valid business email is required';
    }
    if (!companyName.trim()) errs.companyName = 'Company name is required';
    if (!servicesRequired.trim()) errs.servicesRequired = 'Please select a service';
    if (!monthlyBudget.trim()) errs.monthlyBudget = 'Please select a monthly marketing budget';
    if (!agreedToTerms) errs.agreedToTerms = 'Please agree to the Terms & Conditions';

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    const payload = {
      _subject: `New Enquiry from ${fullName} (${companyName})`,
      _replyto: businessEmail,
      'Full Name': fullName,
      'Mobile Number': mobileNumber,
      'Business Email': businessEmail,
      'Company Name': companyName,
      'Designation': designation || 'Not Specified',
      'Website': website || 'Not Specified',
      'Services Required': servicesRequired,
      'Monthly Marketing Budget': monthlyBudget,
      'Project Brief': projectBrief || 'No additional brief provided',
      sentTo: 'reviewgrowthpartners@gmail.com',
      date: new Date().toLocaleString(),
    };

    try {
      await fetch('https://formsubmit.co/ajax/reviewgrowthpartners@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(payload),
      });
    } catch {
      // Fallback
    } finally {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setIsSubmitting(false);
    setFullName('');
    setMobileNumber('');
    setBusinessEmail('');
    setCompanyName('');
    setDesignation('');
    setWebsite('');
    setServicesRequired(defaultService || '');
    setMonthlyBudget('');
    setProjectBrief('');
    setAgreedToTerms(true);
    setErrors({});
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-[#071A33]/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl bg-white border border-[#DCE6F2] rounded-2xl shadow-2xl p-5 sm:p-7 text-[#0F172A] max-h-[94vh] overflow-y-auto">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-5 sm:right-5 text-[#8292AA] hover:text-[#0F172A] p-1.5 rounded-lg hover:bg-[#F4F8FC] transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          /* Success Screen: Only "Sent Successfully!" and "Back to Site" button as requested */
          <div className="text-center py-10 sm:py-14 space-y-6">
            <div className="w-16 h-16 bg-[#14B8A6]/10 text-[#14B8A6] rounded-full flex items-center justify-center mx-auto border border-[#14B8A6]/30">
              <CheckCircle2 className="w-9 h-9" />
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0B2A4F] tracking-tight">
              Sent Successfully!
            </h3>

            <div className="pt-2">
              <button
                type="button"
                onClick={handleReset}
                className="w-full sm:w-auto px-8 py-3.5 bg-[#2563EB] hover:bg-[#1677FF] text-white font-bold text-xs tracking-wider uppercase rounded-lg shadow-md transition-all active:scale-95 cursor-pointer"
              >
                Back to Site
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-4 sm:mb-5">
              <div className="flex items-center gap-1.5 text-xs font-bold text-[#2563EB] uppercase tracking-wider">
                <Star className="w-3.5 h-3.5 fill-current" />
                <span>Review Growth Partners · Strategic Consultation</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight text-[#0B2A4F] mt-1">
                Get a Custom Growth Proposal
              </h2>
              <p className="text-xs sm:text-sm text-[#475569] mt-0.5">
                {COMPANY_INFO.alternativeLine}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3">
              {/* Row 1: Full name * & Mobile number * */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#2563EB]">
                    <User className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Full name *"
                    className={`w-full pl-10 pr-3 py-2.5 bg-[#F8FAFC] border text-sm rounded-xl text-[#0F172A] placeholder-[#64748B] focus:outline-none transition-all ${
                      errors.fullName
                        ? 'border-red-500 focus:ring-1 focus:ring-red-500'
                        : 'border-[#DCE6F2] focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB]'
                    }`}
                  />
                  {errors.fullName && (
                    <p className="text-[11px] text-red-500 mt-1 pl-1">{errors.fullName}</p>
                  )}
                </div>

                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#2563EB]">
                    <Phone className="w-4 h-4" />
                  </div>
                  <input
                    type="tel"
                    required
                    value={mobileNumber}
                    onChange={(e) => setMobileNumber(e.target.value)}
                    placeholder="Mobile number *"
                    className={`w-full pl-10 pr-3 py-2.5 bg-[#F8FAFC] border text-sm rounded-xl text-[#0F172A] placeholder-[#64748B] focus:outline-none transition-all ${
                      errors.mobileNumber
                        ? 'border-red-500 focus:ring-1 focus:ring-red-500'
                        : 'border-[#DCE6F2] focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB]'
                    }`}
                  />
                  {errors.mobileNumber && (
                    <p className="text-[11px] text-red-500 mt-1 pl-1">{errors.mobileNumber}</p>
                  )}
                </div>
              </div>

              {/* Row 2: Business email * & Company name * */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#2563EB]">
                    <Mail className="w-4 h-4" />
                  </div>
                  <input
                    type="email"
                    required
                    value={businessEmail}
                    onChange={(e) => setBusinessEmail(e.target.value)}
                    placeholder="Business email *"
                    className={`w-full pl-10 pr-3 py-2.5 bg-[#F8FAFC] border text-sm rounded-xl text-[#0F172A] placeholder-[#64748B] focus:outline-none transition-all ${
                      errors.businessEmail
                        ? 'border-red-500 focus:ring-1 focus:ring-red-500'
                        : 'border-[#DCE6F2] focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB]'
                    }`}
                  />
                  {errors.businessEmail && (
                    <p className="text-[11px] text-red-500 mt-1 pl-1">{errors.businessEmail}</p>
                  )}
                </div>

                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#2563EB]">
                    <Building2 className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    required
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    placeholder="Company name *"
                    className={`w-full pl-10 pr-3 py-2.5 bg-[#F8FAFC] border text-sm rounded-xl text-[#0F172A] placeholder-[#64748B] focus:outline-none transition-all ${
                      errors.companyName
                        ? 'border-red-500 focus:ring-1 focus:ring-red-500'
                        : 'border-[#DCE6F2] focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB]'
                    }`}
                  />
                  {errors.companyName && (
                    <p className="text-[11px] text-red-500 mt-1 pl-1">{errors.companyName}</p>
                  )}
                </div>
              </div>

              {/* Row 3: Your designation & Website (optional) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#2563EB]">
                    <Briefcase className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    value={designation}
                    onChange={(e) => setDesignation(e.target.value)}
                    placeholder="Your designation"
                    className="w-full pl-10 pr-3 py-2.5 bg-[#F8FAFC] border border-[#DCE6F2] text-sm rounded-xl text-[#0F172A] placeholder-[#64748B] focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] transition-all"
                  />
                </div>

                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#2563EB]">
                    <Globe className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    value={website}
                    onChange={(e) => setWebsite(e.target.value)}
                    placeholder="Website (optional)"
                    className="w-full pl-10 pr-3 py-2.5 bg-[#F8FAFC] border border-[#DCE6F2] text-sm rounded-xl text-[#0F172A] placeholder-[#64748B] focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] transition-all"
                  />
                </div>
              </div>

              {/* Services Required * */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#2563EB]">
                  <LayoutGrid className="w-4 h-4" />
                </div>
                <select
                  required
                  value={servicesRequired}
                  onChange={(e) => setServicesRequired(e.target.value)}
                  className={`w-full pl-10 pr-10 py-2.5 bg-[#F8FAFC] border text-sm rounded-xl focus:outline-none appearance-none cursor-pointer transition-all ${
                    errors.servicesRequired
                      ? 'border-red-500 focus:ring-1 focus:ring-red-500'
                      : 'border-[#DCE6F2] focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB]'
                  } ${!servicesRequired ? 'text-[#64748B]' : 'text-[#0F172A]'}`}
                >
                  <option value="" disabled>Services Required *</option>
                  <option value="Digital Marketing & SEO">Digital Marketing & SEO</option>
                  <option value="Google Ads & Performance PPC">Google Ads & Performance PPC</option>
                  <option value="UI / UX & Brand Design">UI / UX & Brand Design</option>
                  <option value="Website & App Development">Website & App Development</option>
                  <option value="Social Media & Content Creation">Social Media & Content Creation</option>
                  <option value="Video & Media Production">Video & Media Production</option>
                  <option value="Full Digital Growth Solution">Full Digital Growth Solution</option>
                </select>
                <div className="absolute inset-y-0 right-0 pr-3.5 flex items-center pointer-events-none text-[#2563EB]">
                  <ChevronDown className="w-4 h-4" />
                </div>
                {errors.servicesRequired && (
                  <p className="text-[11px] text-red-500 mt-1 pl-1">{errors.servicesRequired}</p>
                )}
              </div>

              {/* Monthly marketing budget * */}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#2563EB]">
                  <IndianRupee className="w-4 h-4" />
                </div>
                <select
                  required
                  value={monthlyBudget}
                  onChange={(e) => setMonthlyBudget(e.target.value)}
                  className={`w-full pl-10 pr-10 py-2.5 bg-[#F8FAFC] border text-sm rounded-xl focus:outline-none appearance-none cursor-pointer transition-all ${
                    errors.monthlyBudget
                      ? 'border-red-500 focus:ring-1 focus:ring-red-500'
                      : 'border-[#DCE6F2] focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB]'
                  } ${!monthlyBudget ? 'text-[#64748B]' : 'text-[#0F172A]'}`}
                >
                  <option value="" disabled>Monthly marketing budget *</option>
                  <option value="Below ₹25,000">Below ₹25,000</option>
                  <option value="₹25,000 - ₹50,000">₹25,000 - ₹50,000</option>
                  <option value="₹50,000 - ₹1,00,000">₹50,000 - ₹1,00,000</option>
                  <option value="₹1,00,000 - ₹2,50,000">₹1,00,000 - ₹2,50,000</option>
                  <option value="₹2,50,000 - ₹5,00,000">₹2,50,000 - ₹5,00,000</option>
                  <option value="₹5,00,000+">₹5,00,000+</option>
                  <option value="Flexible / Discuss with Team">Flexible / Discuss with Team</option>
                </select>
                <div className="absolute inset-y-0 right-0 pr-3.5 flex items-center pointer-events-none text-[#2563EB]">
                  <ChevronDown className="w-4 h-4" />
                </div>
                {errors.monthlyBudget && (
                  <p className="text-[11px] text-red-500 mt-1 pl-1">{errors.monthlyBudget}</p>
                )}
              </div>

              {/* Share a short brief about your project */}
              <div className="relative">
                <div className="absolute top-3 left-0 pl-3.5 flex items-start pointer-events-none text-[#2563EB]">
                  <PenLine className="w-4 h-4" />
                </div>
                <textarea
                  rows={3}
                  value={projectBrief}
                  onChange={(e) => setProjectBrief(e.target.value)}
                  placeholder="Share a short brief about your project"
                  className="w-full pl-10 pr-3 py-2.5 bg-[#F8FAFC] border border-[#DCE6F2] text-sm rounded-xl text-[#0F172A] placeholder-[#64748B] focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] resize-none transition-all"
                />
              </div>

              {/* Terms & Conditions Agreement */}
              <div className="flex items-center gap-2 pt-0.5">
                <input
                  type="checkbox"
                  id="terms-conditions"
                  checked={agreedToTerms}
                  onChange={(e) => setAgreedToTerms(e.target.checked)}
                  className="w-4 h-4 rounded text-[#2563EB] focus:ring-[#2563EB] border-[#DCE6F2] cursor-pointer accent-[#2563EB]"
                />
                <label htmlFor="terms-conditions" className="text-xs text-[#475569] cursor-pointer select-none">
                  By submitting you agree to our{' '}
                  <span className="text-[#2563EB] font-semibold underline">Terms &amp; Conditions</span>.
                </label>
              </div>
              {errors.agreedToTerms && (
                <p className="text-[11px] text-red-500 pl-1">{errors.agreedToTerms}</p>
              )}

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-extrabold text-sm tracking-wider uppercase py-3.5 rounded-xl shadow-lg shadow-[#2563EB]/25 transition-all cursor-pointer flex items-center justify-center gap-2 active:scale-98 disabled:opacity-60"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>SUBMITTING...</span>
                    </>
                  ) : (
                    <span>SUBMIT ENQUIRY</span>
                  )}
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

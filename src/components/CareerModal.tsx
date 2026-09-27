import React, { useState } from 'react';
import { X, CheckCircle2, Briefcase, MapPin, Clock } from 'lucide-react';
import { CAREER_ROLES, COMPANY_INFO } from '../data/siteData.ts';

interface CareerModalProps {
  roleTitle: string | null;
  onClose: () => void;
}

export const CareerModal: React.FC<CareerModalProps> = ({ roleTitle, onClose }) => {
  const [candidateName, setCandidateName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [linkedin, setLinkedin] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  if (!roleTitle) return null;

  const roleInfo = CAREER_ROLES.find((r) => r.title.toLowerCase() === roleTitle.toLowerCase()) || {
    title: roleTitle,
    department: 'Digital & Growth',
    location: 'Bangalore, India (Hybrid)',
    type: 'Full-time',
    experience: '3+ Years',
    overview: 'Join Review Growth Partners (RGP) in crafting review acceleration systems and growth funnels for industry leaders.',
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!candidateName.trim() || !email.trim() || !email.includes('@')) {
      setError('Please provide your name and a valid email address.');
      return;
    }
    setError('');
    setIsSubmitted(true);
  };

  const handleClose = () => {
    setIsSubmitted(false);
    setCandidateName('');
    setEmail('');
    setPhone('');
    setLinkedin('');
    setMessage('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-[#071A33]/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl bg-white border border-[#DCE6F2] rounded-2xl shadow-2xl p-5 sm:p-8 text-[#0F172A] max-h-[90vh] overflow-y-auto">
        <button
          type="button"
          onClick={handleClose}
          className="absolute top-4 right-4 sm:top-5 sm:right-5 text-[#8292AA] hover:text-[#0F172A] p-1 rounded-lg hover:bg-[#F4F8FC] transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          <div className="text-center py-6 sm:py-8 space-y-4">
            <div className="w-16 h-16 bg-[#14B8A6]/10 text-[#14B8A6] rounded-full flex items-center justify-center mx-auto border border-[#14B8A6]/30">
              <CheckCircle2 className="w-9 h-9" />
            </div>
            <h3 className="text-2xl font-bold text-[#0B2A4F] tracking-tight">Application Submitted</h3>
            <p className="text-sm text-[#475569] max-w-md mx-auto leading-relaxed">
              Thank you, <span className="font-semibold text-[#0F172A]">{candidateName}</span>. Your application for <span className="text-[#2563EB] font-bold">{roleInfo.title}</span> has been dispatched to the Talent Desk at <span className="font-semibold text-[#0B2A4F]">Review Growth Partners</span>. We will reach out to <span className="text-[#0F172A] font-semibold">{email}</span> within 2-3 business days.
            </p>
            <div className="pt-2">
              <button
                type="button"
                onClick={handleClose}
                className="px-6 py-2.5 bg-[#0B2A4F] text-white font-semibold text-xs tracking-wider uppercase rounded hover:bg-[#071A33] transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="border-b border-[#DCE6F2] pb-5 mb-5">
              <span className="text-xs font-bold text-[#2563EB] uppercase tracking-wider bg-[#F4F8FC] px-2 py-0.5 rounded border border-[#DCE6F2]">
                RGP Careers Desk
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B2A4F] mt-1.5">{roleInfo.title}</h2>
              
              <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs text-[#475569] mt-2.5">
                <span className="flex items-center gap-1">
                  <Briefcase className="w-3.5 h-3.5 text-[#2563EB]" />
                  {roleInfo.department}
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-[#06B6D4]" />
                  {roleInfo.location}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-[#14B8A6]" />
                  {roleInfo.type} · {roleInfo.experience}
                </span>
              </div>

              <p className="text-xs sm:text-sm text-[#475569] mt-3 leading-relaxed">
                {roleInfo.overview}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3.5">
              <h3 className="text-sm font-bold text-[#0B2A4F]">Submit Your Candidate Profile</h3>
              
              {error && (
                <p className="text-xs text-red-600 bg-red-50 border border-red-200 p-2.5 rounded-lg">
                  {error}
                </p>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-[#0B2A4F] mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={candidateName}
                    onChange={(e) => setCandidateName(e.target.value)}
                    placeholder="Jane Doe"
                    className="w-full px-3 py-2 bg-[#F8FAFC] border border-[#DCE6F2] text-sm rounded-lg text-[#0F172A] focus:outline-none focus:border-[#2563EB]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#0B2A4F] mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="jane@example.com"
                    className="w-full px-3 py-2 bg-[#F8FAFC] border border-[#DCE6F2] text-sm rounded-lg text-[#0F172A] focus:outline-none focus:border-[#2563EB]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-[#0B2A4F] mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder={COMPANY_INFO.phoneDisplay}
                    className="w-full px-3 py-2 bg-[#F8FAFC] border border-[#DCE6F2] text-sm rounded-lg text-[#0F172A] focus:outline-none focus:border-[#2563EB]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-[#0B2A4F] mb-1">
                    Portfolio / LinkedIn URL
                  </label>
                  <input
                    type="url"
                    value={linkedin}
                    onChange={(e) => setLinkedin(e.target.value)}
                    placeholder="https://linkedin.com/in/username"
                    className="w-full px-3 py-2 bg-[#F8FAFC] border border-[#DCE6F2] text-sm rounded-lg text-[#0F172A] focus:outline-none focus:border-[#2563EB]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#0B2A4F] mb-1">
                  Cover Note / Highlights
                </label>
                <textarea
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Share a brief overview of relevant marketing, reputation, or engineering accomplishments..."
                  className="w-full px-3 py-2 bg-[#F8FAFC] border border-[#DCE6F2] text-sm rounded-lg text-[#0F172A] focus:outline-none focus:border-[#2563EB] resize-none"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                <span className="text-[11px] text-[#8292AA]">
                  Direct Desk: {COMPANY_INFO.phoneDisplay}
                </span>
                <button
                  type="submit"
                  className="w-full sm:w-auto px-6 py-2.5 bg-[#2563EB] hover:bg-[#1677FF] text-white font-bold text-xs tracking-wider uppercase rounded-lg transition-colors shadow-sm"
                >
                  Submit Application
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

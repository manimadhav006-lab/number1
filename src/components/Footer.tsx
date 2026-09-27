import React from 'react';
import { ExternalLink, Star, Award, ShieldCheck } from 'lucide-react';
import { RELATED_LINKS, COMPANY_INFO, SOCIAL_LINKS } from '../data/siteData.ts';

interface FooterProps {
  onSelectCareerRole?: (roleTitle: string) => void;
  onOpenLegalModal?: (type: 'terms' | 'privacy') => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectCareerRole, onOpenLegalModal }) => {
  const careersCol1 = [
    'Creative Lead',
    'Performance Marketing Lead',
    'Digital Marketing Manager',
    'Digital Marketer Lead',
    'Lead Copywriter',
    'Copywriter',
  ];

  const careersCol2 = [
    'Business Growth Manager',
    'Group Account Manager',
    'UI Designer',
    'Graphic Designer',
    'UX Designer',
  ];

  const handleCareerClick = (role: string) => {
    if (onSelectCareerRole) {
      onSelectCareerRole(role);
    }
  };

  return (
    <footer className="w-full max-w-full overflow-x-hidden bg-[#FFFFFF] text-[#0F172A] border-t border-[#DCE6F2]">
      {/* Upper Footer Section */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-14 items-start">
          
          {/* Left Column: Brand & Story Description */}
          <div className="lg:col-span-4 xl:col-span-4 space-y-4">
            <div className="inline-flex items-center flex-wrap text-[#0B2A4F] font-black text-lg sm:text-2xl tracking-tight leading-tight">
              <span>REVIEW GROWTH PARTNERS</span>
              <sup className="text-xs font-bold text-[#1677FF] ml-0.5 -top-2">®</sup>
            </div>

            <div className="flex items-center flex-wrap gap-2 text-xs font-semibold text-[#2563EB]">
              <span>{COMPANY_INFO.tagline}</span>
              <span className="text-[#8292AA]">•</span>
              <span className="text-[#14B8A6]">{COMPANY_INFO.alternativeLine}</span>
            </div>

            <div className="space-y-3">
              <p className="text-sm text-[#475569] leading-relaxed font-normal text-justify">
                <strong className="text-[#0B2A4F] font-semibold">Review Growth Partners (RGP)</strong> is a digital growth and technology company helping businesses build their brand, strengthen their digital presence, and grow online.
              </p>
              <p className="text-sm text-[#475569] leading-relaxed font-normal text-justify">
                From <strong className="text-[#0B2A4F] font-semibold">branding and website development to digital marketing, social media, and content creation</strong>, we deliver simple, creative, and effective digital solutions tailored to your business.
              </p>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-[#475569]">
              <span className="flex items-center gap-1">
                <Star className="w-3.5 h-3.5 fill-[#2563EB] text-[#2563EB]" />
                <strong className="text-[#0F172A]">4.9 / 5.0</strong> Client Satisfaction Rating
              </span>
            </div>
          </div>

          {/* Middle Column: Careers in 2 Columns */}
          <div className="lg:col-span-5 xl:col-span-5">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-[#0B2A4F] tracking-tight">
                Careers at RGP
              </h3>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-sm">
              <ul className="space-y-2">
                {careersCol1.map((role, idx) => (
                  <li key={idx}>
                    <button
                      type="button"
                      onClick={() => handleCareerClick(role)}
                      className="text-[#475569] hover:text-[#2563EB] hover:translate-x-1 transition-all text-left font-normal cursor-pointer flex items-center gap-1 group py-0.5"
                    >
                      <span className="group-hover:font-medium">{role}</span>
                    </button>
                  </li>
                ))}
              </ul>

              <ul className="space-y-2">
                {careersCol2.map((role, idx) => (
                  <li key={idx}>
                    <button
                      type="button"
                      onClick={() => handleCareerClick(role)}
                      className="text-[#475569] hover:text-[#2563EB] hover:translate-x-1 transition-all text-left font-normal cursor-pointer flex items-center gap-1 group py-0.5"
                    >
                      <span className="group-hover:font-medium">{role}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column: Google Partner & Certified Badges */}
          <div className="md:col-span-2 lg:col-span-3 xl:col-span-3 flex flex-row items-center justify-start lg:justify-end gap-6 sm:gap-8 pt-2">
            
            {/* Google Ads Search Certified Badge */}
            <div className="flex flex-col items-center text-center group cursor-pointer">
              <div className="w-20 h-20 rounded-full border border-[#DCE6F2] p-1 flex items-center justify-center bg-[#F8FAFC] shadow-xs group-hover:border-[#2563EB] transition-colors relative">
                <div className="w-full h-full rounded-full border border-dashed border-[#DCE6F2] flex flex-col items-center justify-center p-1 bg-white">
                  <span className="text-[7px] tracking-widest uppercase font-bold text-[#475569] mb-0.5">Google Ads</span>
                  <div className="w-6 h-6 rounded-full border-2 border-amber-400 border-t-red-500 border-r-blue-500 border-b-green-500 flex items-center justify-center">
                    <span className="text-[8px] font-black text-[#2563EB]">G</span>
                  </div>
                  <span className="text-[6px] tracking-wider uppercase font-semibold text-[#8292AA] mt-0.5">Certified</span>
                </div>
              </div>
              <span className="text-[10px] font-bold tracking-tight text-[#0B2A4F] uppercase mt-2.5 max-w-[110px] leading-tight">
                GOOGLE ADS SEARCH CERTIFIED
              </span>
            </div>

            {/* Google Partner Agency Badge */}
            <div className="flex flex-col items-center text-center group cursor-pointer">
              <div className="w-20 h-20 border border-[#DCE6F2] rounded-lg p-2 flex flex-col items-center justify-between bg-[#F8FAFC] shadow-xs group-hover:border-[#2563EB] transition-colors relative">
                <div className="w-full flex justify-end">
                  <ExternalLink className="w-2.5 h-2.5 text-[#8292AA] group-hover:text-[#2563EB]" />
                </div>
                <div className="flex flex-col items-center">
                  <svg className="w-6 h-6" viewBox="0 0 24 24">
                    <path
                      fill="#4285F4"
                      d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"
                    />
                    <path
                      fill="#34A853"
                      d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.34 24 12 24z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.97 0 12s.45 3.82 1.25 5.42l4.03-3.15z"
                    />
                    <path
                      fill="#EA4335"
                      d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.34 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
                    />
                  </svg>
                  <span className="text-[9px] font-semibold text-[#0F172A] tracking-tight mt-1">Google Partner</span>
                </div>
                <div />
              </div>
              <span className="text-[10px] font-bold tracking-tight text-[#0B2A4F] uppercase mt-2.5 max-w-[110px] leading-tight">
                GOOGLE PARTNER AGENCY
              </span>
            </div>

          </div>
        </div>

        {/* Lower Section: Related Links */}
        <div className="mt-12 pt-8 border-t border-[#DCE6F2]">
          <h4 className="text-base font-bold text-[#0B2A4F] mb-6 tracking-tight flex items-center gap-2">
            <span>Related Growth Links & Local Expertise</span>
          </h4>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 text-sm">
            {/* Column 1 */}
            <ul className="space-y-2">
              {RELATED_LINKS.column1.map((link, idx) => (
                <li key={idx}>
                  <a
                    href="#services"
                    className="text-[#475569] hover:text-[#2563EB] transition-colors leading-relaxed block hover:underline"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>

            {/* Column 2 */}
            <ul className="space-y-2">
              {RELATED_LINKS.column2.map((link, idx) => (
                <li key={idx}>
                  <a
                    href="#services"
                    className="text-[#475569] hover:text-[#2563EB] transition-colors leading-relaxed block hover:underline"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>

            {/* Column 3 */}
            <ul className="space-y-2">
              {RELATED_LINKS.column3.map((link, idx) => (
                <li key={idx}>
                  <a
                    href="#services"
                    className="text-[#475569] hover:text-[#2563EB] transition-colors leading-relaxed block hover:underline"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Legal, Socials & Badges Bar */}
      <div className="border-t border-[#DCE6F2] bg-[#F8FAFC] py-6">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#475569]">
          
          {/* Left: Follow Us & Social Icons */}
          <div className="flex items-center gap-3">
            <span className="font-semibold text-[#0B2A4F]">Follows Us</span>
            <div className="flex items-center gap-1.5">
              {/* LinkedIn */}
              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="Follow RGP on LinkedIn"
                className="w-7 h-7 rounded-full bg-[#0B2A4F] text-white flex items-center justify-center hover:bg-[#2563EB] transition-colors shadow-xs"
              >
                <span className="text-[10px] font-bold">in</span>
              </a>

              {/* Instagram */}
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Follow RGP on Instagram"
                className="w-7 h-7 rounded-full bg-[#0B2A4F] text-white flex items-center justify-center hover:bg-[#E1306C] transition-colors shadow-xs"
              >
                <svg className="w-3.5 h-3.5 stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="2">
                  <rect width="18" height="18" x="3" y="3" rx="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>

              {/* Facebook */}
              <a
                href={SOCIAL_LINKS.facebook}
                target="_blank"
                rel="noreferrer"
                aria-label="Follow RGP on Facebook"
                className="w-7 h-7 rounded-full bg-[#0B2A4F] text-white flex items-center justify-center hover:bg-[#1877F2] transition-colors shadow-xs"
              >
                <span className="text-[11px] font-bold">f</span>
              </a>

              {/* Threads */}
              <a
                href={SOCIAL_LINKS.threads}
                target="_blank"
                rel="noreferrer"
                aria-label="Follow RGP on Threads"
                className="w-7 h-7 rounded-full bg-[#0B2A4F] text-white flex items-center justify-center hover:bg-[#000000] transition-colors shadow-xs"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 192 192">
                  <path d="M141.537 88.9883C140.71 88.5919 139.87 88.2104 139.019 87.8451C137.537 60.5382 122.616 44.905 97.5619 44.745C97.4184 44.7441 97.275 44.7432 97.1316 44.7432C82.3761 44.7432 69.8806 51.5283 61.9427 63.8345L74.8876 72.1822C80.7027 63.1663 89.2625 59.988 97.1325 59.988C97.2289 59.988 97.3253 59.9889 97.4208 59.9898C110.137 60.0706 120.301 68.3223 122.25 84.8633C115.011 83.9482 107.245 83.9317 99.1672 84.8213C68.9664 88.1466 50.8123 103.957 53.6496 129.74C55.0838 142.772 63.8407 153.256 76.5492 157.247C88.4069 160.971 101.442 158.82 110.871 151.62C118.889 145.498 123.774 136.786 125.753 125.992C133.09 130.686 138.835 137.608 141.677 146.438L156.241 141.442C151.785 127.604 142.696 116.892 131.066 110.024C133.407 98.7187 131.391 88.6293 126.785 80.999C131.542 83.1706 135.986 86.0694 139.99 89.6014L148.974 76.9942C143.518 72.1841 137.288 68.4022 130.494 65.7523C133.918 55.4379 133.488 44.9752 129.245 35.5392C123.633 23.0583 111.954 15.2443 97.4208 15.2443C73.4912 15.2443 54.0044 26.6975 42.6102 46.8523C31.2584 66.9272 29.3516 93.3087 37.2504 121.218C47.2828 156.666 76.1042 181.756 111.458 181.756C131.879 181.756 150.395 172.956 163.666 156.883L151.996 147.242C141.472 160.007 126.963 166.995 111.458 166.995C82.8845 166.995 59.5694 146.664 51.4882 118.113C44.7571 94.3315 46.3807 71.9366 56.0594 54.8166C65.6989 37.7656 81.9842 28.1884 101.442 28.1884C111.385 28.1884 119.349 33.5235 123.161 42.0019C126.155 48.6521 126.471 56.2415 124.084 63.8161C116.149 61.3503 107.245 59.988 97.8085 59.988C78.4316 59.988 64.9126 71.9935 61.6441 90.3168C58.3756 108.64 66.0747 122.95 81.3387 128.528C93.6338 133.021 106.696 130.638 114.773 122.77C118.064 119.563 120.702 115.549 122.569 111.002C118.06 108.283 112.923 106.666 107.391 106.326C92.0622 105.385 81.5647 112.977 82.5298 121.758C83.2104 127.95 89.284 132.327 96.5053 131.782C106.592 131.021 113.882 121.321 114.502 107.82C122.42 108.761 130.347 110.686 137.958 113.568C140.231 114.428 142.43 115.39 144.545 116.447L154.212 104.425C150.457 101.993 146.216 99.9839 141.537 98.4177V88.9883Z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Center: Copyright & Legal */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 text-center text-[#475569]">
            <span>Copyright © 2026, Review Growth Partners Pvt Ltd. All Rights Reserved.</span>
            <button
              type="button"
              onClick={() => onOpenLegalModal?.('terms')}
              className="text-[#0B2A4F] hover:text-[#2563EB] hover:underline cursor-pointer ml-1 font-medium"
            >
              Terms of Use
            </button>
            <span>|</span>
            <button
              type="button"
              onClick={() => onOpenLegalModal?.('privacy')}
              className="text-[#0B2A4F] hover:text-[#2563EB] hover:underline cursor-pointer font-medium"
            >
              Privacy Policy
            </button>
          </div>

          {/* Right: DMCA & Google Partner Badges */}
          <div className="flex items-center gap-3 shrink-0">
            {/* DMCA Protected Badge */}
            <div className="inline-flex items-center text-[10px] font-bold overflow-hidden rounded shadow-xs border border-[#DCE6F2]">
              <span className="bg-[#0B2A4F] text-white px-2 py-0.5 tracking-wider">DMCA</span>
              <span className="bg-[#2563EB] text-white px-2 py-0.5 tracking-wider">PROTECTED</span>
            </div>

            {/* Mini Google Partner */}
            <div className="flex items-center gap-1 border border-[#DCE6F2] rounded px-2 py-0.5 bg-white text-[10px] shadow-xs">
              <span className="font-bold text-[#4285F4]">G</span>
              <span className="text-[#0F172A] font-semibold">Partner</span>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

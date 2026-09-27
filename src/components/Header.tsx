import React, { useState, useEffect, useRef } from 'react';
import {
  ChevronDown,
  Menu,
  X,
  Phone,
  ArrowRight,
  Building2,
  Briefcase,
  FileText,
  Info,
} from 'lucide-react';
import { COMPANY_INFO } from '../data/siteData.ts';
import { MAIN_NAV_CATEGORIES, MainCategory, MiniHeading } from '../data/navigationSchema.ts';
import { toSlug, ALL_SERVICES_MAP } from '../data/serviceContentGenerator.ts';

interface HeaderProps {
  onOpenQuoteModal: (preselectedService?: string) => void;
  onNavigateSection?: (sectionId: string) => void;
  onNavigateUrl: (url: string) => void;
  onSelectResourcePage: (pageType: 'company-info' | 'about-us') => void;
  onSelectCareerModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenQuoteModal,
  onNavigateUrl,
  onSelectResourcePage,
  onSelectCareerModal,
}) => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileExpandedCat, setMobileExpandedCat] = useState<string | null>(null);
  const [mobileExpandedMini, setMobileExpandedMini] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const closeTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleMouseEnter = (catId: string) => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setActiveDropdown(catId);
  };

  const handleMouseLeave = () => {
    closeTimeoutRef.current = window.setTimeout(() => {
      setActiveDropdown(null);
    }, 250);
  };

  const handleMiniServiceClick = (cat: MainCategory, mini: MiniHeading, subName: string) => {
    setActiveDropdown(null);
    setMobileMenuOpen(false);
    const subSlug = toSlug(subName);
    const targetUrl = `/${cat.id}/${mini.id}/${subSlug}`;
    onNavigateUrl(targetUrl);
  };

  const handleResourceClick = (action: 'company-info' | 'careers' | 'quote' | 'about-us') => {
    setActiveDropdown(null);
    setMobileMenuOpen(false);
    if (action === 'company-info') {
      onSelectResourcePage('company-info');
    } else if (action === 'about-us') {
      onSelectResourcePage('about-us');
    } else if (action === 'careers') {
      onSelectCareerModal();
    } else if (action === 'quote') {
      onOpenQuoteModal('General Consultation');
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full max-w-full bg-[#071A33] border-b border-[#1E334D] text-white shadow-md select-none">
      {/* Main Navigation Bar */}
      <div className="w-full max-w-[1440px] mx-auto px-3 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
        
        {/* Left: Brand Name */}
        <div className="flex items-center shrink-0 min-w-0 pr-2">
          <button
            type="button"
            onClick={() => onNavigateUrl('/')}
            className="flex items-center text-left group transition-transform active:scale-98 cursor-pointer"
            aria-label="Review Growth Partners Home"
          >
            <div className="flex flex-col">
              <div className="flex items-center flex-wrap gap-x-1 text-white font-bold sm:font-extrabold tracking-tight text-xs sm:text-lg md:text-xl lg:text-2xl uppercase leading-tight">
                <span className="text-white whitespace-nowrap">REVIEW GROWTH</span>
                <span className="text-[#38BDF8] font-black whitespace-nowrap">PARTNERS</span>
                <sup className="text-[8px] sm:text-[10px] font-semibold text-[#94A3B8] -top-1">®</sup>
              </div>
              <span className="text-[9px] sm:text-[10px] text-[#94A3B8] tracking-wider uppercase font-medium mt-0.5 hidden md:block">
                {COMPANY_INFO.tagline}
              </span>
            </div>
          </button>
        </div>

        {/* Center: Desktop Mega Navigation Links (xl screens) */}
        <nav 
          ref={dropdownRef}
          className="hidden xl:flex items-center space-x-1 text-sm font-medium"
          aria-label="Main Navigation"
        >
          {MAIN_NAV_CATEGORIES.map((cat: MainCategory) => {
            const isOpen = activeDropdown === cat.id;
            return (
              <div
                key={cat.id}
                className="relative"
                onMouseEnter={() => handleMouseEnter(cat.id)}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  type="button"
                  onClick={() => setActiveDropdown(isOpen ? null : cat.id)}
                  aria-expanded={isOpen}
                  className={`flex items-center gap-1.5 px-3 py-2 text-xs 2xl:text-sm font-medium transition-colors cursor-pointer rounded-md ${
                    isOpen
                      ? 'text-white bg-[#0B2A4F]'
                      : 'text-[#F4F8FC] hover:text-white hover:bg-[#0B2A4F]/60'
                  }`}
                >
                  <span className="tracking-wide uppercase font-semibold text-xs">{cat.title}</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-[#38BDF8]' : 'text-[#94A3B8]'
                    }`}
                  />
                </button>

                {/* Desktop Mega Menu Dropdown */}
                {isOpen && (
                  <div
                    onMouseEnter={() => handleMouseEnter(cat.id)}
                    onMouseLeave={handleMouseLeave}
                    className={`absolute top-full mt-1 bg-[#071A33] border border-[#1E334D] rounded-xl shadow-2xl p-5 z-50 animate-in fade-in slide-in-from-top-1 duration-150 ${
                      cat.id === 'resources'
                        ? 'left-0 w-80'
                        : 'left-1/2 -translate-x-1/2 w-[820px] 2xl:w-[940px]'
                    }`}
                  >
                    {/* Header bar inside dropdown */}
                    <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#1E334D]">
                      <div>
                        <span className="text-[#38BDF8] text-xs font-semibold uppercase tracking-wider">
                          {cat.title} Practices
                        </span>
                        <p className="text-[11px] text-[#94A3B8] mt-0.5 line-clamp-1">{cat.description}</p>
                      </div>

                      {cat.id !== 'resources' && cat.miniHeadings[0] && (
                        <button
                          type="button"
                          onClick={() => handleMiniServiceClick(cat, cat.miniHeadings[0], cat.miniHeadings[0].subItems[0])}
                          className="text-[11px] font-semibold text-[#38BDF8] hover:text-white flex items-center gap-1 shrink-0 ml-4 cursor-pointer transition-colors"
                        >
                          <span>Explore Overview</span>
                          <ArrowRight className="w-3 h-3" />
                        </button>
                      )}
                    </div>

                    {/* Resources Dropdown Content */}
                    {cat.id === 'resources' ? (
                      <div className="space-y-2">
                        <button
                          type="button"
                          onClick={() => handleResourceClick('company-info')}
                          className="w-full text-left p-3 rounded-lg hover:bg-[#0B2A4F] transition-colors flex items-start gap-3 group cursor-pointer"
                        >
                          <div className="w-8 h-8 rounded-lg bg-[#2563EB]/20 text-[#38BDF8] flex items-center justify-center shrink-0 mt-0.5">
                            <Building2 className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="text-xs font-bold text-white group-hover:text-[#38BDF8] transition-colors">
                              Company Information
                            </div>
                            <p className="text-[11px] text-[#94A3B8] mt-0.5">
                              Corporate details, legal entity, and leadership overview.
                            </p>
                          </div>
                        </button>

                        <button
                          type="button"
                          onClick={() => handleResourceClick('careers')}
                          className="w-full text-left p-3 rounded-lg hover:bg-[#0B2A4F] transition-colors flex items-start gap-3 group cursor-pointer"
                        >
                          <div className="w-8 h-8 rounded-lg bg-[#14B8A6]/20 text-[#14B8A6] flex items-center justify-center shrink-0 mt-0.5">
                            <Briefcase className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="text-xs font-bold text-white group-hover:text-[#14B8A6] transition-colors">
                              Careers &amp; Internships
                            </div>
                            <p className="text-[11px] text-[#94A3B8] mt-0.5">
                              Explore active tech, design, and growth roles at RGP.
                            </p>
                          </div>
                        </button>

                        <button
                          type="button"
                          onClick={() => handleResourceClick('quote')}
                          className="w-full text-left p-3 rounded-lg hover:bg-[#0B2A4F] transition-colors flex items-start gap-3 group cursor-pointer"
                        >
                          <div className="w-8 h-8 rounded-lg bg-[#2563EB]/20 text-[#2563EB] flex items-center justify-center shrink-0 mt-0.5">
                            <FileText className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="text-xs font-bold text-white group-hover:text-[#60A5FA] transition-colors">
                              Get a Quote
                            </div>
                            <p className="text-[11px] text-[#94A3B8] mt-0.5">
                              Request a fast, customized project quotation.
                            </p>
                          </div>
                        </button>

                        <button
                          type="button"
                          onClick={() => handleResourceClick('about-us')}
                          className="w-full text-left p-3 rounded-lg hover:bg-[#0B2A4F] transition-colors flex items-start gap-3 group cursor-pointer"
                        >
                          <div className="w-8 h-8 rounded-lg bg-[#8B5CF6]/20 text-[#A78BFA] flex items-center justify-center shrink-0 mt-0.5">
                            <Info className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="text-xs font-bold text-white group-hover:text-[#A78BFA] transition-colors">
                              About Us
                            </div>
                            <p className="text-[11px] text-[#94A3B8] mt-0.5">
                              Our journey, ethos, and digital acceleration mission.
                            </p>
                          </div>
                        </button>
                      </div>
                    ) : (
                      /* Services Mega Grid */
                      <div className="grid grid-cols-2 lg:grid-cols-3 gap-5 max-h-[65vh] overflow-y-auto pr-1">
                        {cat.miniHeadings.map((mini: MiniHeading) => (
                          <div
                            key={mini.id}
                            className="p-3 rounded-lg bg-[#0B2A4F]/30 border border-[#1E334D] hover:border-[#2563EB]/60 transition-colors"
                          >
                            {/* Mini Heading Header */}
                            <div className="w-full text-left font-bold text-xs text-[#38BDF8] flex items-center justify-between mb-2">
                              <span className="tracking-wide uppercase">{mini.title}</span>
                              <span className="text-[10px] text-[#94A3B8] font-mono">
                                {mini.subItems.length}
                              </span>
                            </div>

                            {/* Sub-items list with direct URLs */}
                            <ul className="space-y-1 text-xs">
                              {mini.subItems.map((sub: string) => {
                                const subSlug = toSlug(sub);
                                const targetUrl = `/${cat.id}/${mini.id}/${subSlug}`;
                                return (
                                  <li key={sub}>
                                    <button
                                      type="button"
                                      onClick={() => onNavigateUrl(targetUrl)}
                                      className="w-full text-left py-1 text-[#CBD5E1] hover:text-white hover:underline text-[11px] flex items-center gap-1.5 transition-colors cursor-pointer group"
                                    >
                                      <span className="w-1 h-1 rounded-full bg-[#38BDF8]/60 group-hover:bg-[#38BDF8] shrink-0" />
                                      <span className="truncate">{sub}</span>
                                    </button>
                                  </li>
                                );
                              })}
                            </ul>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        {/* Right: GET QUOTE + Single Phone Number */}
        <div className="flex items-center gap-2 sm:gap-4 lg:gap-6 shrink-0">
          <button
            type="button"
            onClick={() => onOpenQuoteModal()}
            className="hidden sm:inline-flex items-center justify-center bg-[#2563EB] hover:bg-[#1677FF] text-white font-bold text-xs tracking-wider uppercase px-4 sm:px-5 py-2 sm:py-2.5 rounded shadow-sm hover:shadow-[#2563EB]/40 transition-all duration-150 cursor-pointer active:scale-95 whitespace-nowrap"
          >
            GET QUOTE
          </button>

          {/* Single Phone Number: 7892041582 */}
          <div className="hidden sm:flex items-center gap-2 border-l border-[#1E334D] pl-3 sm:pl-4 lg:pl-5 text-[#F4F8FC]">
            <Phone className="w-3.5 h-3.5 text-[#38BDF8] shrink-0" />
            <a
              href={`tel:${COMPANY_INFO.phoneNumber}`}
              className="font-bold text-xs sm:text-sm text-white hover:text-[#38BDF8] hover:underline whitespace-nowrap tabular-nums tracking-wide"
            >
              {COMPANY_INFO.phoneDisplay}
            </a>
          </div>

          {/* Mobile phone quick-dial icon */}
          <a
            href={`tel:${COMPANY_INFO.phoneNumber}`}
            className="sm:hidden p-2 rounded bg-[#0B2A4F] text-[#38BDF8] hover:text-white"
            aria-label="Call 7892041582"
          >
            <Phone className="w-4 h-4" />
          </a>

          {/* Hamburger menu button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-1.5 sm:p-2 text-[#F4F8FC] hover:text-white bg-[#0B2A4F]/60 rounded focus:outline-none cursor-pointer"
            aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
          >
            {mobileMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#071A33] border-t border-[#1E334D] px-4 pt-4 pb-6 space-y-3 max-h-[85vh] overflow-y-auto animate-in slide-in-from-top duration-200">
          {/* Quick Home Link & Search Banner */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onNavigateUrl('/');
              }}
              className="flex-1 text-left px-3 py-2.5 rounded-lg bg-[#0B2A4F] text-xs font-bold text-white uppercase tracking-wider flex items-center justify-between border border-[#1E334D] hover:border-[#38BDF8] transition-colors"
            >
              <span>Home Page</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#38BDF8]" />
            </button>
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuoteModal('Mobile Consultation');
              }}
              className="px-3 py-2.5 rounded-lg bg-[#2563EB] text-xs font-bold text-white uppercase tracking-wider border border-[#2563EB] hover:bg-[#1677FF] transition-colors shrink-0"
            >
              Get Quote
            </button>
          </div>

          {/* Quick Hint: Click Anywhere to Explore */}
          <div className="px-3 py-2 rounded-lg bg-[#0B2A4F]/60 border border-[#1E334D] flex items-center justify-between text-[11px] text-[#94A3B8]">
            <span className="flex items-center gap-1.5 text-[#38BDF8] font-semibold">
              <span>⚡</span>
              <span>Services Directory</span>
            </span>
            <span className="text-[#CBD5E1]">Tap anywhere on any practice to explore</span>
          </div>

          {/* Categories Accordion */}
          <div className="space-y-1">
            {MAIN_NAV_CATEGORIES.map((cat: MainCategory) => {
              const isExpanded = mobileExpandedCat === cat.id;
              return (
                <div key={cat.id} className="rounded-xl border border-[#1E334D] bg-[#0B2A4F]/20 overflow-hidden mb-2">
                  <button
                    type="button"
                    onClick={() => {
                      setMobileExpandedCat(isExpanded ? null : cat.id);
                      setMobileExpandedMini(null);
                    }}
                    className={`w-full flex items-center justify-between p-3.5 text-sm font-bold uppercase tracking-wide cursor-pointer transition-colors ${
                      isExpanded ? 'bg-[#0B2A4F] text-[#38BDF8]' : 'text-white hover:bg-[#0B2A4F]/40'
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      <span className="text-white">{cat.title}</span>
                      <span className="text-[10px] font-mono text-[#94A3B8] font-normal lowercase bg-[#071A33] px-2 py-0.5 rounded border border-[#1E334D]">
                        {cat.id === 'resources' ? '4 resources' : `${cat.miniHeadings.length} practices`}
                      </span>
                    </span>
                    <div className="flex items-center gap-1.5">
                      <span className="text-[10px] text-[#94A3B8] font-semibold uppercase">
                        {isExpanded ? 'Hide' : 'View'}
                      </span>
                      <ChevronDown
                        className={`w-4 h-4 text-[#38BDF8] transition-transform duration-200 ${
                          isExpanded ? 'rotate-180' : ''
                        }`}
                      />
                    </div>
                  </button>

                  {isExpanded && (
                    <div className="p-3 space-y-2 bg-[#071A33]/80 border-t border-[#1E334D]">
                      {cat.id === 'resources' ? (
                        <div className="space-y-2 text-xs">
                          <button
                            type="button"
                            onClick={() => handleResourceClick('company-info')}
                            className="w-full text-left py-1.5 text-[#CBD5E1] hover:text-white block font-semibold cursor-pointer"
                          >
                            Company Information
                          </button>
                          <button
                            type="button"
                            onClick={() => handleResourceClick('careers')}
                            className="w-full text-left py-1.5 text-[#CBD5E1] hover:text-white block font-semibold cursor-pointer"
                          >
                            Careers
                          </button>
                          <button
                            type="button"
                            onClick={() => handleResourceClick('quote')}
                            className="w-full text-left py-1.5 text-[#CBD5E1] hover:text-white block font-semibold cursor-pointer"
                          >
                            Get a Quote
                          </button>
                          <button
                            type="button"
                            onClick={() => handleResourceClick('about-us')}
                            className="w-full text-left py-1.5 text-[#CBD5E1] hover:text-white block font-semibold cursor-pointer"
                          >
                            About Us
                          </button>
                        </div>
                      ) : (
                        cat.miniHeadings.map((mini: MiniHeading) => {
                          const isMiniExpanded = mobileExpandedMini === mini.id;
                          return (
                            <div
                              key={mini.id}
                              className="rounded-lg bg-[#0B2A4F]/40 border border-[#1E334D] overflow-hidden transition-colors"
                            >
                              {/* Entire card is clickable anywhere to explore */}
                              <button
                                type="button"
                                onClick={() => setMobileExpandedMini(isMiniExpanded ? null : mini.id)}
                                className="w-full flex items-center justify-between p-3 text-left transition-colors hover:bg-[#0B2A4F] cursor-pointer group"
                              >
                                <div className="pr-2">
                                  <span className="text-xs font-bold text-[#38BDF8] block group-hover:text-white transition-colors">
                                    {mini.title}
                                  </span>
                                  <span className="text-[10px] text-[#94A3B8]">
                                    {mini.subItems.length} specialized services
                                  </span>
                                </div>
                                <div className="flex items-center gap-1.5 shrink-0">
                                  <span className="text-[10px] font-semibold text-[#38BDF8] bg-[#071A33] px-2 py-0.5 rounded border border-[#1E334D]">
                                    {isMiniExpanded ? 'Close' : 'Explore'}
                                  </span>
                                  <ChevronDown
                                    className={`w-3.5 h-3.5 text-[#38BDF8] transition-transform duration-200 ${
                                      isMiniExpanded ? 'rotate-180' : ''
                                    }`}
                                  />
                                </div>
                              </button>

                              {isMiniExpanded && (
                                <div className="px-3 pb-3 pt-1 border-t border-[#1E334D] bg-[#071A33]/70 space-y-1 animate-in fade-in duration-150">
                                  {mini.subItems.map((sub: string) => {
                                    const subSlug = toSlug(sub);
                                    const targetUrl = `/${cat.id}/${mini.id}/${subSlug}`;
                                    return (
                                      <button
                                        key={sub}
                                        type="button"
                                        onClick={() => {
                                          setMobileMenuOpen(false);
                                          onNavigateUrl(targetUrl);
                                        }}
                                        className="w-full flex items-center justify-between py-2 px-2.5 rounded text-left text-xs text-[#CBD5E1] hover:text-white hover:bg-[#0B2A4F] transition-colors cursor-pointer group"
                                      >
                                        <span className="flex items-center gap-2">
                                          <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8]" />
                                          <span>{sub}</span>
                                        </span>
                                        <ArrowRight className="w-3 h-3 text-[#38BDF8] opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                                      </button>
                                    );
                                  })}
                                </div>
                              )}
                            </div>
                          );
                        })
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Direct Hotline */}
          <div className="p-3 bg-[#0B2A4F] rounded-lg border border-[#1E334D] flex items-center justify-between text-xs mt-3">
            <span className="text-[#94A3B8] flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-[#38BDF8]" />
              Direct Hotline:
            </span>
            <a href={`tel:${COMPANY_INFO.phoneNumber}`} className="text-white font-bold hover:underline tabular-nums text-sm">
              {COMPANY_INFO.phoneDisplay}
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

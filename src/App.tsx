import { useState, useEffect, useCallback } from 'react';
import { Header } from './components/Header.tsx';
import { Footer } from './components/Footer.tsx';
import { HomePage } from './components/HomePage.tsx';
import { ServicePage } from './components/ServicePage.tsx';
import { ResourcePage } from './components/ResourcePage.tsx';
import { QuoteModal } from './components/QuoteModal.tsx';
import { CareerModal } from './components/CareerModal.tsx';
import { LegalModal } from './components/LegalModal.tsx';
import { findServiceByPath } from './data/serviceContentGenerator.ts';
import { ServiceDetail } from './data/servicesData.ts';

type AppView =
  | { type: 'home' }
  | { type: 'service'; service: ServiceDetail }
  | { type: 'resource'; resourceType: 'company-info' | 'about-us' };

export default function App() {
  const [currentView, setCurrentView] = useState<AppView>(() => {
    if (typeof window === 'undefined') return { type: 'home' };
    const path = window.location.pathname;
    if (path === '/company-information') {
      return { type: 'resource', resourceType: 'company-info' };
    }
    if (path === '/about-us') {
      return { type: 'resource', resourceType: 'about-us' };
    }
    const foundService = findServiceByPath(path);
    if (foundService) {
      return { type: 'service', service: foundService };
    }
    return { type: 'home' };
  });

  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string | undefined>(undefined);
  const [selectedCareerRole, setSelectedCareerRole] = useState<string | null>(null);
  const [legalModalType, setLegalModalType] = useState<'terms' | 'privacy' | null>(null);

  // Restore homepage SEO when on home
  const restoreHomeSEO = useCallback(() => {
    document.title = 'Review Growth Partners (RGP) | Build. Create. Connect. Grow.';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        'Review Growth Partners (RGP) is a digital growth and technology company helping businesses build their brand, strengthen their digital presence, and grow online.'
      );
    }
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute('href', `${window.location.origin}/`);
    }
    const existingSchema = document.getElementById('service-jsonld');
    if (existingSchema) existingSchema.remove();
  }, []);

  // Listen to browser Back/Forward (popstate)
  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname;
      if (path === '/' || path === '') {
        setCurrentView({ type: 'home' });
        restoreHomeSEO();
      } else if (path === '/company-information') {
        setCurrentView({ type: 'resource', resourceType: 'company-info' });
      } else if (path === '/about-us') {
        setCurrentView({ type: 'resource', resourceType: 'about-us' });
      } else {
        const found = findServiceByPath(path);
        if (found) {
          setCurrentView({ type: 'service', service: found });
        } else {
          setCurrentView({ type: 'home' });
          restoreHomeSEO();
        }
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [restoreHomeSEO]);

  const handleNavigateUrl = (url: string) => {
    if (url === '/' || url === '') {
      window.history.pushState({}, '', '/');
      setCurrentView({ type: 'home' });
      restoreHomeSEO();
      window.scrollTo({ top: 0, behavior: 'instant' });
      return;
    }

    if (url === '/company-information') {
      window.history.pushState({}, '', url);
      setCurrentView({ type: 'resource', resourceType: 'company-info' });
      window.scrollTo({ top: 0, behavior: 'instant' });
      return;
    }

    if (url === '/about-us') {
      window.history.pushState({}, '', url);
      setCurrentView({ type: 'resource', resourceType: 'about-us' });
      window.scrollTo({ top: 0, behavior: 'instant' });
      return;
    }

    const found = findServiceByPath(url);
    if (found) {
      window.history.pushState({}, '', found.url);
      setCurrentView({ type: 'service', service: found });
      window.scrollTo({ top: 0, behavior: 'instant' });
    } else {
      window.history.pushState({}, '', '/');
      setCurrentView({ type: 'home' });
      restoreHomeSEO();
    }
  };

  const handleOpenQuoteModal = (serviceName?: string) => {
    setSelectedService(serviceName || 'General Consultation');
    setIsQuoteModalOpen(true);
  };

  const handleCloseQuoteModal = () => {
    setIsQuoteModalOpen(false);
  };

  const handleSelectCareerRole = (role: string) => {
    setSelectedCareerRole(role);
  };

  const handleCloseCareerModal = () => {
    setSelectedCareerRole(null);
  };

  const handleNavigateSection = (sectionId: string) => {
    if (currentView.type !== 'home') {
      handleNavigateUrl('/');
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen w-full max-w-full overflow-x-hidden flex flex-col bg-[#F8FAFC] text-[#0F172A] selection:bg-[#2563EB] selection:text-white">
      {/* 1. Global Header */}
      <Header
        onOpenQuoteModal={handleOpenQuoteModal}
        onNavigateSection={handleNavigateSection}
        onNavigateUrl={handleNavigateUrl}
        onSelectResourcePage={(resourceType) => handleNavigateUrl(`/${resourceType === 'company-info' ? 'company-information' : 'about-us'}`)}
        onSelectCareerModal={() => setSelectedCareerRole('General Application')}
      />

      {/* 2. Main Page Render */}
      <main className="flex-1 w-full">
        {currentView.type === 'home' && (
          <HomePage onOpenQuoteModal={handleOpenQuoteModal} />
        )}

        {currentView.type === 'service' && (
          <ServicePage
            service={currentView.service}
            onNavigateUrl={handleNavigateUrl}
            onOpenQuoteModal={handleOpenQuoteModal}
          />
        )}

        {currentView.type === 'resource' && (
          <ResourcePage
            pageType={currentView.resourceType}
            onBackToHome={() => handleNavigateUrl('/')}
            onOpenQuoteModal={handleOpenQuoteModal}
            onOpenCareerModal={() => setSelectedCareerRole('General Application')}
          />
        )}
      </main>

      {/* 3. Global Footer */}
      <Footer
        onSelectCareerRole={handleSelectCareerRole}
        onOpenLegalModal={(type) => setLegalModalType(type)}
      />

      {/* Interactive Modals */}
      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={handleCloseQuoteModal}
        defaultService={selectedService}
      />

      <CareerModal
        roleTitle={selectedCareerRole}
        onClose={handleCloseCareerModal}
      />

      <LegalModal
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />
    </div>
  );
}

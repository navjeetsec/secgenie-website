import React, { useState, useEffect } from 'react';
import { Navbar, NavPage } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { DiscoveryToDefenseSection } from './components/DiscoveryToDefenseSection';
import { RealTimeSecuritySection } from './components/RealTimeSecuritySection';
import { AllianceEcosystemSection } from './components/AllianceEcosystemSection';
import { ExistingStackSection } from './components/ExistingStackSection';
import { ReadyToTurnBanner } from './components/ReadyToTurnBanner';
import { Footer } from './components/Footer';

import { SectionDivider } from './components/Common/SectionDivider';
import { ScrollReveal } from './components/Common/ScrollReveal';
import { CursorSpotlight } from './components/Common/CursorSpotlight';
import { SecGenieChatbot } from './components/Chat/SecGenieChatbot';
import { BackToTopButton } from './components/Navigation/BackToTopButton';
import { WhySecGenieSection } from './components/WhySecGenieSection';
import { SecGenieFaqSection } from './components/SecGenieFaqSection';

// Platform Page Component
import { PlatformPage } from './components/Platform/PlatformPage';
import { ModuleLandingPage, PlatformModule } from './components/Platform/ModuleLandingPage';

// Solutions Page Component
import { SolutionsPage } from './components/Solutions/SolutionsPage';

// Integration Page Component
import { IntegrationPage } from './components/Integration/IntegrationPage';

// Company Page Component
import { CompanyPage } from './components/Company/CompanyPage';

// Research Page Component
import { ResearchPage } from './components/Research/ResearchPage';

// Contact Page Component
import { ContactPage } from './components/Contact/ContactPage';

// Modals
import { LeadershipModal } from './components/Modals/LeadershipModal';
import { PlatformTourModal } from './components/Modals/PlatformTourModal';
import { ContactModal } from './components/Modals/ContactModal';

const getPageFromPath = (pathname: string): NavPage => {
  const path = pathname.replace(/\/+$/, '') || '/';
  const page = path.slice(1);
  const pages: NavPage[] = [
    'platform',
    'exposure-intelligence',
    'ai-soc-automation',
    'ctem-platform',
    'solutions',
    'integration',
    'company',
    'research',
    'contact',
  ];

  return pages.find((candidate) => candidate === page) ?? 'home';
};

const pageMetadata: Record<NavPage, { title: string; description: string }> = {
  home: {
    title: 'SecGenie AI | CTEM Platform & AI SOC Automation',
    description: 'Explore a CTEM platform for threat exposure management, attack path analysis, and AI SOC workflows that complement your existing security tools.',
  },
  platform: {
    title: 'CTEM Platform & AI SOC Automation | SecGenie AI',
    description: 'Explore SecGenie Exposure Intelligence, AI SOC automation, attack path analysis, and the continuous threat exposure management cycle.',
  },
  'exposure-intelligence': {
    title: 'Threat Exposure Management & Attack Path Analysis | SecGenie AI',
    description: 'Explore Exposure Intelligence for threat exposure management, vulnerability prioritization, and attack path analysis across critical assets.',
  },
  'ai-soc-automation': {
    title: 'AI SOC Platform & Security Operations Automation | SecGenie AI',
    description: 'Explore AI SOC automation for alert enrichment, triage, and analyst workflows that complement existing SIEM and EDR tools.',
  },
  'ctem-platform': {
    title: 'CTEM Platform | Continuous Threat Exposure Management | SecGenie AI',
    description: 'Learn how the SecGenie CTEM platform supports discovery, prioritization, validation, mobilization, and measurement of threat exposures.',
  },
  solutions: {
    title: 'AI SOC Platform & Cyber Security Automation Use Cases | SecGenie AI',
    description: 'Explore use cases for AI-assisted SOC triage, alert fatigue reduction, attack surface visibility, and threat exposure prioritization.',
  },
  integration: {
    title: 'Security Integrations | SecGenie AI',
    description: 'Explore security integrations for connecting SecGenie workflows with your existing SIEM, EDR, and security tools.',
  },
  company: {
    title: 'About SecGenie AI | Continuous Cyber Defense',
    description: 'Learn about SecGenie AI, its mission, team, and approach to continuous cyber defense.',
  },
  research: {
    title: 'Cybersecurity Research & Insights | SecGenie AI',
    description: 'Read SecGenie insights on CTEM, threat exposure management, attack paths, and security operations.',
  },
  contact: {
    title: 'Contact SecGenie AI | Book a Technical Demo',
    description: 'Contact SecGenie AI to discuss CTEM, AI SOC automation, integrations, and technical evaluation.',
  },
};

const platformModules: Partial<Record<NavPage, PlatformModule>> = {
  'exposure-intelligence': 'exposure-intelligence',
  'ai-soc-automation': 'ai-soc-automation',
  'ctem-platform': 'ctem-platform',
};

export default function App() {
  const [currentPage, setCurrentPage] = useState<NavPage>(() => getPageFromPath(window.location.pathname));
  const [selectedSolutionTab, setSelectedSolutionTab] = useState<'alert-fatigue' | 'attack-surface'>('alert-fatigue');
  const [isLeadershipModalOpen, setIsLeadershipModalOpen] = useState(false);
  const [isTourModalOpen, setIsTourModalOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const currentPlatformModule = platformModules[currentPage];

  const navigateTo = (page: NavPage) => {
    const path = page === 'home' ? '/' : `/${page}`;
    if (window.location.pathname !== path) {
      window.history.pushState({ page }, '', path);
    }
    setCurrentPage(page);
  };

  useEffect(() => {
    const handlePopState = () => setCurrentPage(getPageFromPath(window.location.pathname));
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  useEffect(() => {
    const metadata = pageMetadata[currentPage];
    document.title = metadata.title;

    const description = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    description?.setAttribute('content', metadata.description);

    const canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    const canonicalPath = window.location.pathname.replace(/\/+$/, '') || '/';
    const canonicalUrl = `${window.location.origin}${canonicalPath}`;
    canonical?.setAttribute('href', canonicalUrl);

    document.querySelector('meta[property="og:title"]')?.setAttribute('content', metadata.title);
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', metadata.description);
    document.querySelector('meta[property="og:url"]')?.setAttribute('content', canonicalUrl);
    document.querySelector('meta[name="twitter:title"]')?.setAttribute('content', metadata.title);
    document.querySelector('meta[name="twitter:description"]')?.setAttribute('content', metadata.description);
  }, [currentPage]);

  // Scroll to top on page switch
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const handleRequestDocs = () => {
    navigateTo('contact');
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans antialiased selection:bg-cyan-500 selection:text-white">
      <CursorSpotlight />
      {/* Navigation Header */}
      <Navbar
        currentPage={currentPage}
        onNavigate={navigateTo}
        onSelectSolutionTab={(tab) => {
          setSelectedSolutionTab(tab);
          navigateTo('solutions');
        }}
        onBookDemo={() => navigateTo('contact')}
        onExplorePlatform={() => setIsTourModalOpen(true)}
        onOpenLeadership={() => navigateTo('company')}
        onOpenConnectors={() => navigateTo('integration')}
        onContactClick={() => navigateTo('contact')}
      />

      {/* Main Content Router */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <>
            {/* Screenshot 1: Hero Section */}
            <ScrollReveal delay={0.05} staggerChildren={0.12}>
              <HeroSection
                onBookDemo={() => navigateTo('contact')}
                onExplorePlatform={() => setIsTourModalOpen(true)}
              />
            </ScrollReveal>

            {/* Subtle Gradient Line Divider */}
            <SectionDivider variant="cyan" />

            {/* Discovery-to-defense stages shown on the homepage */}
            <ScrollReveal scrollProgress staggerChildren={0.08}>
              <DiscoveryToDefenseSection />
            </ScrollReveal>

            {/* Built for Real Time Security */}
            <ScrollReveal staggerChildren={0.08}>
              <RealTimeSecuritySection />
            </ScrollReveal>

            <ScrollReveal>
              <WhySecGenieSection />
            </ScrollReveal>

            {/* Works With Your Existing Security Stack */}
            <ScrollReveal scrollProgress staggerChildren={0.08}>
              <ExistingStackSection
                onOpenConnectors={() => navigateTo('integration')}
              />
            </ScrollReveal>

            {/* Strategic Technology & Alliance Ecosystem */}
            <SectionDivider variant="glow" />
            <ScrollReveal staggerChildren={0.08}>
              <AllianceEcosystemSection />
            </ScrollReveal>

            <SectionDivider variant="light" />
            <ScrollReveal>
              <ReadyToTurnBanner
                onScheduleDemo={() => navigateTo('contact')}
                onExploreArchitecture={() => navigateTo('platform')}
              />
            </ScrollReveal>
            <ScrollReveal>
              <SecGenieFaqSection />
            </ScrollReveal>
          </>
        )}

        {currentPage === 'platform' && (
          <PlatformPage
            onBookDemo={() => navigateTo('contact')}
            onExplorePlatform={() => setIsTourModalOpen(true)}
          />
        )}

        {currentPlatformModule && (
          <ModuleLandingPage
            module={currentPlatformModule}
            onBookDemo={() => navigateTo('contact')}
            onNavigate={navigateTo}
          />
        )}

        {currentPage === 'solutions' && (
          <SolutionsPage
            key={selectedSolutionTab}
            initialTab={selectedSolutionTab}
            onBookDemo={() => navigateTo('contact')}
            onExploreArchitecture={() => navigateTo('platform')}
          />
        )}

        {currentPage === 'integration' && (
          <IntegrationPage
            onRequestDocs={handleRequestDocs}
          />
        )}

        {currentPage === 'company' && (
          <CompanyPage
            onOpenDemo={() => navigateTo('contact')}
            onOpenContact={() => navigateTo('contact')}
            onNavigatePlatform={() => navigateTo('platform')}
          />
        )}

        {currentPage === 'research' && (
          <ResearchPage />
        )}

        {currentPage === 'contact' && (
          <ScrollReveal>
            <ContactPage onBackToHome={() => navigateTo('home')} />
          </ScrollReveal>
        )}
      </main>

      {/* Footer with universal links */}
      <ScrollReveal staggerChildren={0.08}>
        <Footer
          onNavigate={navigateTo}
          onSelectSolutionTab={setSelectedSolutionTab}
        />
      </ScrollReveal>

      {/* Gemini-Powered SecGenie AI Multi-turn Defense Copilot */}
      <SecGenieChatbot />

      {/* Floating Auto-Hiding Back To Top Button */}
      <BackToTopButton />

      {/* Interactive Flow Modals */}
      <LeadershipModal
        isOpen={isLeadershipModalOpen}
        onClose={() => setIsLeadershipModalOpen(false)}
      />

      <PlatformTourModal
        isOpen={isTourModalOpen}
        onClose={() => setIsTourModalOpen(false)}
        onBookDemo={() => navigateTo('contact')}
      />

      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </div>
  );
}

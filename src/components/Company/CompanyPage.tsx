import React from 'react';
import { CompanyHero } from './CompanyHero';
import { CompanyVisionSection } from './CompanyVisionSection';
import { ExecutiveLeadershipSection } from './ExecutiveLeadershipSection';
import { EngineeringPrinciplesSection } from './EngineeringPrinciplesSection';
import { TrustedLeadersSection } from '../TrustedLeadersSection';
import { AllianceEcosystemSection } from '../AllianceEcosystemSection';
import { DeployCtaBanner } from './DeployCtaBanner';
import { GlobalFootprintSection } from './GlobalFootprintSection';
import { ScrollReveal } from '../Common/ScrollReveal';

interface CompanyPageProps {
  onOpenDemo?: () => void;
  onOpenContact?: () => void;
  onNavigatePlatform?: () => void;
}

export const CompanyPage: React.FC<CompanyPageProps> = ({
  onOpenDemo,
  onOpenContact,
  onNavigatePlatform,
}) => {
  return (
    <div className="w-full">
      {/* 1. Hero Section */}
      <ScrollReveal delay={0.05} staggerChildren={0.12}>
        <CompanyHero />
      </ScrollReveal>

      {/* 2. Our Vision & Architectural Foundation */}
      <ScrollReveal staggerChildren={0.08}>
        <CompanyVisionSection />
      </ScrollReveal>

      {/* 3. Executive Leadership */}
      <ScrollReveal staggerChildren={0.08}>
        <ExecutiveLeadershipSection onOpenContact={onOpenContact} />
      </ScrollReveal>

      {/* 4. Guiding Engineering Principles */}
      <ScrollReveal staggerChildren={0.08}>
        <EngineeringPrinciplesSection />
      </ScrollReveal>

      {/* 5. Trusted By Industry Leaders */}
      <ScrollReveal staggerChildren={0.07}>
        <TrustedLeadersSection />
      </ScrollReveal>

      {/* 6. Strategic Technology & Alliance Ecosystem */}
      <ScrollReveal staggerChildren={0.07}>
        <AllianceEcosystemSection />
      </ScrollReveal>

      {/* 7. Global Footprint & Contact Hub */}
      <ScrollReveal staggerChildren={0.08}>
        <GlobalFootprintSection onOpenBriefing={onOpenDemo} />
      </ScrollReveal>

      {/* 8. Deploy Continuous Exposure Management Banner */}
      <ScrollReveal>
        <DeployCtaBanner
          onOpenDemo={onOpenDemo}
          onOpenContact={onOpenContact}
        />
      </ScrollReveal>
    </div>
  );
};

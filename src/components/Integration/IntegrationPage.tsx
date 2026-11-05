import React from 'react';
import { IntegrationHero } from './IntegrationHero';
import { IntegrationCatalogSection } from './IntegrationCatalogSection';
import { CustomExtensibilitySection } from './CustomExtensibilitySection';
import { ScrollReveal } from '../Common/ScrollReveal';

interface IntegrationPageProps {
  onRequestDocs: () => void;
}

export const IntegrationPage: React.FC<IntegrationPageProps> = ({
  onRequestDocs
}) => {
  return (
    <div className="w-full bg-white font-sans text-slate-900">
      {/* Screenshot 182451: Seamless Stack Integration Ecosystem Hero */}
      <IntegrationHero />

      {/* Screenshot 182458 & 182507: Full Connectors Catalog with Search & Filter Pills */}
      <ScrollReveal scrollProgress staggerChildren={0.06}>
        <IntegrationCatalogSection />
      </ScrollReveal>

      {/* Screenshot 182515: Have a Proprietary In-House Tool or Custom SIEM? */}
      <ScrollReveal staggerChildren={0.1}>
        <CustomExtensibilitySection onRequestDocs={onRequestDocs} />
      </ScrollReveal>
    </div>
  );
};

import React from 'react';
import { PlatformHero } from './PlatformHero';
import { PlatformOverviewSection } from './PlatformOverviewSection';
import { ExposureIntelligenceEngineSection } from './ExposureIntelligenceEngineSection';
import { AiSocAutomationEngineSection } from './AiSocAutomationEngineSection';
import { CtemCycleSection } from './CtemCycleSection';
import { ScrollReveal } from '../Common/ScrollReveal';

interface PlatformPageProps {
  onBookDemo: () => void;
  onExplorePlatform: () => void;
}

export const PlatformPage: React.FC<PlatformPageProps> = ({ onBookDemo, onExplorePlatform }) => {
  return (
    <div className="w-full bg-white text-slate-900 font-sans">
      {/* Screenshot 4: AI Autonomous Cyber Defense Platform Hero */}
      <PlatformHero onBookDemo={onBookDemo} />

      {/* Screenshot 3: AI-Powered Cyber Defense Platform overview */}
      <ScrollReveal staggerChildren={0.08}>
        <PlatformOverviewSection
          onSelectEngine={(engineId) => {
            const el = document.getElementById(engineId);
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        />
      </ScrollReveal>

      {/* Screenshot 2: Core Engine 01 - Exposure Intelligence Engine */}
      <ScrollReveal scrollProgress staggerChildren={0.08}>
        <ExposureIntelligenceEngineSection />
      </ScrollReveal>

      {/* Screenshot 1 & 7: AI SOC Automation Engine (Dark Blue Container Card) */}
      <ScrollReveal staggerChildren={0.08}>
        <AiSocAutomationEngineSection />
      </ScrollReveal>

      {/* Screenshot 5: The 5-Stage CTEM Operational Cycle */}
      <ScrollReveal scrollProgress staggerChildren={0.07}>
        <CtemCycleSection />
      </ScrollReveal>
    </div>
  );
};

import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Shield, Layers, Activity, Network, Zap } from 'lucide-react';
import { RevealItem, ScrollReveal } from '../Common/ScrollReveal';
import solutionsHeroImg from '../../assets/images/solutions_hero_lock_1793441963813.jpg';
import laptopMeshImg from '../../assets/images/laptop_hands_security_mesh_1793439823641.jpg';

interface SolutionsPageProps {
  onBookDemo?: () => void;
  onExploreArchitecture?: () => void;
  initialTab?: 'alert-fatigue' | 'attack-surface';
}

export const SolutionsPage: React.FC<SolutionsPageProps> = ({
  onBookDemo,
  onExploreArchitecture,
  initialTab = 'alert-fatigue',
}) => {
  const [activeTab, setActiveTab] = useState<'alert-fatigue' | 'attack-surface'>(initialTab);

  const capabilities = {
    'alert-fatigue': [
      'Eliminates repetitive SOC alert noise with context-aware AI agents',
      'Autonomous triage of low-fidelity alerts with minimal analyst intervention',
      'Comprehensive multi-source enrichment completed in less time',
    ],
    'attack-surface': [
      'Increased Remediation Velocity',
      'Accurate Prioritization',
      'Unmanaged Asset Detection',
    ],
  };

  const solutionDetails = {
    'alert-fatigue': {
      challenge:
        'Tier 1 analysts spend too much time sorting false positives, duplicate alerts, and low priority notifications across disconnected consoles.',
      approach:
        'SecGenie AI enriches and deduplicates incoming alerts with asset and identity context, helping analysts focus on actionable incidents.',
    },
    'attack-surface': {
      challenge:
      'Vulnerability reports can surface many CVEs without showing whether assets are publicly exposed, connected to privileged identities, or linked to critical systems.',
      approach:
      'SecGenie AI correlates vulnerabilities with network reachability, identity privileges, and cloud configurations to show realistic exposure and prioritize remediation.',
    },
  };

  return (
    <div className="w-full bg-white text-slate-900">
      {/* 1. Hero Section matching Screenshot 89 */}
      <ScrollReveal delay={0.05} staggerChildren={0.12}>
      <section className="relative min-h-[85vh] lg:min-h-[90vh] bg-slate-950 text-white flex flex-col justify-center items-center overflow-hidden">
        {/* Background Image with glowing cyber lock hologram */}
        <div className="absolute inset-0 z-0 opacity-40 mix-blend-screen pointer-events-none">
          <img
            src={solutionsHeroImg}
            alt="Tailored Cyber Defense Solutions"
            className="w-full h-full object-cover object-center"
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center flex flex-col items-center">
          {/* Pill Badge matching Screenshot 89 */}
          <RevealItem>
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-slate-900/85 border border-slate-700/80 text-[11px] sm:text-xs font-semibold tracking-wider text-slate-300 uppercase mb-8 shadow-sm backdrop-blur-sm">
            <span>TAILORED ENTERPRISE DEFENSE</span>
          </div>
          </RevealItem>

          {/* Main Headline */}
          <RevealItem className="w-full">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4 sm:mb-5 leading-[1.15] max-w-4xl mx-auto">
            Tailored Cyber Defense{' '}
            <span className="ml-2 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500">
              Solutions
            </span>
          </h1>
          </RevealItem>

          {/* Subtitle */}
          <RevealItem className="w-full">
          <p className="text-base sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-normal">
            Explore AI SOC platform and cyber security automation use cases—from alert triage to attack surface and threat exposure prioritization.
          </p>
          </RevealItem>
        </div>
      </section>
      </ScrollReveal>

      {/* 2. Solutions Blueprint Section matching Screenshots 90, 91, 92 */}
      <ScrollReveal scrollProgress staggerChildren={0.08}>
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tab Switcher matching Screenshots 90 & 92 */}
          <div className="mb-16 flex justify-center">
            <div
              className="flex w-full max-w-3xl flex-col gap-1.5 rounded-2xl border border-slate-200/90 bg-slate-100 p-1.5 shadow-inner sm:flex-row"
              role="tablist"
              aria-label="Security solutions"
            >
              <button
                type="button"
                role="tab"
                aria-selected={activeTab === 'alert-fatigue'}
                onClick={() => setActiveTab('alert-fatigue')}
                className={`flex-1 rounded-xl px-4 py-3 text-sm font-bold leading-tight transition-all cursor-pointer sm:px-7 ${
                  activeTab === 'alert-fatigue'
                    ? 'bg-[#0c2b5e] text-white shadow-md'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
                }`}
              >
                Enterprise Security Operations
              </button>
              <button
                type="button"
                role="tab"
                aria-selected={activeTab === 'attack-surface'}
                onClick={() => setActiveTab('attack-surface')}
                className={`flex-1 rounded-xl px-4 py-3 text-sm font-bold leading-tight transition-all cursor-pointer sm:px-7 ${
                  activeTab === 'attack-surface'
                    ? 'bg-[#0c2b5e] text-white shadow-md'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
                }`}
              >
                Attack Surface Exposure
              </button>
            </div>
          </div>

          {/* Blueprint Content Grid matching Screenshots 90, 91, 92 */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            {/* Left Column: Heading + Cyber Visual */}
            <RevealItem className="lg:col-span-5">
            <div className="space-y-8">
              <div>
                <div className="inline-block px-3.5 py-1 rounded-full text-[11px] font-bold tracking-wider text-slate-700 bg-sky-50 border border-sky-200/80 uppercase mb-4">
                  ENTERPRISE SOLUTION BLUEPRINT
                </div>

                <h2 className="text-3xl sm:text-4xl font-black text-[#0c2b5e] tracking-tight leading-tight mb-4">
                  {activeTab === 'alert-fatigue'
                    ? 'Enterprise Security Operations'
                    : 'Continuous Attack Surface & Exposure Management'}
                </h2>

                <p className="text-base text-slate-600 leading-relaxed font-normal">
                  {activeTab === 'alert-fatigue'
                    ? 'Eliminates repetitive SOC alert noise with context-aware AI agents.'
                    : 'Move beyond static scan reports to dynamic, continuous risk reduction'}
                </p>
              </div>

              {/* Graphic Card with Floating Telemetry Pills matching Screenshots 90 & 92 */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-slate-950 border border-slate-800 aspect-[4/3] group">
                <img
                  src={laptopMeshImg}
                  alt="Security Blueprint Telemetry"
                  className="w-full h-full object-cover object-center opacity-70 group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
            </RevealItem>

            {/* Right Column: Key Capabilities, Comparison Cards, CTAs */}
            <RevealItem className="lg:col-span-7">
            <div className="space-y-8">
              <div>
                <div className="flex items-center gap-3 mb-6" aria-label="Security operations, exposure analysis, and response capabilities">
                  {[Shield, Network, Activity, Zap].map((Icon, index) => (
                    <span
                      key={index}
                      className="w-11 h-11 rounded-xl bg-sky-50 border border-sky-100 text-[#0066f5] flex items-center justify-center"
                    >
                      <Icon className="w-5 h-5" />
                    </span>
                  ))}
                </div>

                {/* Checklist with Green Checkmarks */}
                <ul className="space-y-3.5">
                  {capabilities[activeTab].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-0.5 shrink-0 stroke-[2.2]" />
                      <span className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
                <div className="rounded-2xl p-6 bg-[#f0f8ff] border border-sky-100 shadow-2xs">
                  <h4 className="text-base font-bold text-[#0066f5] mb-2.5">
                    The Operational Challenge
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {solutionDetails[activeTab].challenge}
                  </p>
                </div>
                <div className="rounded-2xl p-6 bg-[#f0f8ff] border border-sky-100 shadow-2xs">
                  <h4 className="text-base font-bold text-[#0066f5] mb-2.5">
                    The SecGenie AI Approach
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {solutionDetails[activeTab].approach}
                  </p>
                </div>
              </div>

              {/* Action Buttons matching Screenshots 90, 91, 92 */}
              <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <button
                  onClick={onBookDemo}
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-sm font-bold text-white bg-[#0b1a32] hover:bg-[#112445] transition-all shadow-md hover:shadow-lg cursor-pointer"
                >
                  <span>Book a Technical Demo</span>
                  <ArrowRight className="w-4 h-4 text-cyan-400" />
                </button>

                <button
                  onClick={onExploreArchitecture}
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm font-bold text-slate-800 bg-white border border-slate-300 hover:border-slate-400 hover:bg-slate-50 transition-all shadow-2xs cursor-pointer"
                >
                  <span>Explore Architecture</span>
                  <ArrowRight className="w-4 h-4 text-slate-500" />
                </button>
              </div>
            </div>
            </RevealItem>
          </div>
        </div>
      </section>
      </ScrollReveal>
    </div>
  );
};

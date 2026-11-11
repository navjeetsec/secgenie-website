import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, ArrowUpRight, Shield, Check } from 'lucide-react';
import { getImageAsset } from '../assets/imageAssets';

interface ExistingStackSectionProps {
  onOpenConnectors: () => void;
}

type ConnectorId = 'ms-sentinel' | 'sentinelone' | 'splunk' | 'azure' | 'crowdstrike' | 'aws';

const connectorMarks: Record<ConnectorId, React.ReactNode> = {
  'ms-sentinel': (
    <g>
      <path fill="#f25022" d="M2 2h9v9H2z" />
      <path fill="#7fba00" d="M13 2h9v9h-9z" />
      <path fill="#00a4ef" d="M2 13h9v9H2z" />
      <path fill="#ffb900" d="M13 13h9v9h-9z" />
    </g>
  ),
  sentinelone: (
    <path fill="currentColor" d="M12 1.5 14.7 8l6.8-1.8-4.1 5.8 4.1 5.8-6.8-1.8L12 22.5 9.3 16l-6.8 1.8 4.1-5.8-4.1-5.8L9.3 8 12 1.5Z" />
  ),
  splunk: (
    <g fill="currentColor">
      <circle cx="12" cy="12" r="3" />
      <circle cx="5" cy="5" r="2" />
      <circle cx="19" cy="5" r="2" />
      <circle cx="5" cy="19" r="2" />
      <circle cx="19" cy="19" r="2" />
      <path d="M7 6.5 10 10M17 6.5 14 10M7 17.5 10 14M17 17.5 14 14" stroke="currentColor" strokeWidth="2" />
    </g>
  ),
  azure: (
    <g fill="currentColor">
      <path d="M12 2 3 19h6l6-11-3-6Z" />
      <path d="m13 13-3 6h12l-6-6h-3Z" opacity=".7" />
    </g>
  ),
  crowdstrike: (
    <path fill="currentColor" d="M12 2 9.3 8.4 3 6l3.3 6L2 16l7-.8L12 22l3-6.8 7 .8-4.3-4L21 6l-6.3 2.4L12 2Z" />
  ),
  aws: (
    <g fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2">
      <path d="M5 8.5 12 4l7 4.5v7L12 20l-7-4.5v-7Z" />
      <path d="M8 13.5h8M10 10.5h4" />
      <path d="M7 21c4 2 9 1.5 12-1" stroke="#ff9900" />
    </g>
  ),
};

const connectorColors: Record<ConnectorId, string> = {
  'ms-sentinel': 'text-[#0078d4] bg-white',
  sentinelone: 'text-[#ef4b35] bg-[#fff1ec]',
  splunk: 'text-[#65a637] bg-[#f3f8ed]',
  azure: 'text-[#0078d4] bg-[#eaf5ff]',
  crowdstrike: 'text-[#e31e24] bg-[#fff0f0]',
  aws: 'text-[#232f3e] bg-[#fff7e6]',
};

const ConnectorLogo: React.FC<{ id: ConnectorId; title: string; expanded?: boolean }> = ({
  id,
  title,
  expanded = false,
}) => (
  <span
    aria-label={`${title} logo`}
    className={`flex shrink-0 items-center justify-center rounded-xl border border-white/15 shadow-sm ${
      expanded ? 'h-12 w-12' : 'h-11 w-11'
    } ${connectorColors[id]}`}
  >
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6">
      {connectorMarks[id]}
    </svg>
    <span className="sr-only">{title}</span>
  </span>
);

export const ExistingStackSection: React.FC<ExistingStackSectionProps> = ({ onOpenConnectors }) => {
  const [expandedId, setExpandedId] = useState<string>('splunk');

  const connectors = [
    {
      id: 'ms-sentinel',
      title: 'Microsoft Sentinel',
      tag: 'SIEM',
      verticalLabel: 'Microsoft Sentinel',
      logoType: 'ms-sentinel' as const,
      bgImg: getImageAsset('cyber_shield_hologram_1793428361136.jpg'),
      desc: 'Seamless ingestion through Microsoft Graph Security API and Log Analytics workspaces with continuous incident syncing in both directions.'
    },
    {
      id: 'sentinelone',
      title: 'SentinelOne',
      tag: 'EDR / XDR',
      verticalLabel: 'SentinelOne',
      logoType: 'sentinelone' as const,
      bgImg: getImageAsset('soc_analyst_command_center_1793428361794.jpg'),
      desc: 'Instant endpoint network quarantine and deep threat telemetry correlation via Singularity Cloud API.'
    },
    {
      id: 'splunk',
      title: 'Splunk Enterprise & Cloud',
      tag: 'SIEM',
      verticalLabel: 'Splunk Enterprise',
      logoType: 'splunk' as const,
      bgImg: getImageAsset('splunk_security_analyst_1793428362169.jpg'),
      desc: 'Real time telemetry ingestion through HTTP Event Collector (HEC), with automated search queries and alert enrichment.'
    },
    {
      id: 'azure',
      title: 'Microsoft Azure',
      tag: 'Cloud Security',
      verticalLabel: 'Azure',
      logoType: 'azure' as const,
      bgImg: getImageAsset('cyber_threat_mesh_hero_1793428361251.jpg'),
      desc: 'Defender for Cloud and Entra ID integration. Maps Azure subscriptions, IAM roles, and storage buckets into the exposure graph.'
    },
    {
      id: 'crowdstrike',
      title: 'CrowdStrike Falcon',
      tag: 'EDR / XDR',
      verticalLabel: 'CROWDSTRIKE',
      logoType: 'crowdstrike' as const,
      bgImg: getImageAsset('cyber_shield_hologram_1793428361136.jpg'),
      desc: 'Real time host isolation and incident response playbook execution through Falcon OAuth2 APIs.'
    },
    {
      id: 'aws',
      title: 'Amazon Web Services',
      tag: 'Cloud Infrastructure',
      verticalLabel: 'aws',
      logoType: 'aws' as const,
      bgImg: getImageAsset('soc_analyst_command_center_1793428361794.jpg'),
      desc: 'AWS Security Hub, Amazon GuardDuty, and CloudTrail signals gathered across accounts through IAM AssumeRole.'
    }
  ];

  const handlePrev = () => {
    const currentIndex = connectors.findIndex((c) => c.id === expandedId);
    const prevIndex = currentIndex <= 0 ? connectors.length - 1 : currentIndex - 1;
    setExpandedId(connectors[prevIndex].id);
  };

  const handleNext = () => {
    const currentIndex = connectors.findIndex((c) => c.id === expandedId);
    const nextIndex = currentIndex >= connectors.length - 1 ? 0 : currentIndex + 1;
    setExpandedId(connectors[nextIndex].id);
  };

  return (
    <section className="relative py-16 sm:py-20 md:py-24 bg-white text-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center px-4 py-1 rounded-full bg-sky-50 border border-sky-200 text-sky-700 text-xs font-bold uppercase tracking-wider mb-4 sm:mb-5">
            ENTERPRISE CYBER DEFENCE ARCHITECTURE
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-3 sm:mb-4">
            Works With Your Existing{' '}
            <span className="text-[#0066f5]">
              Security Stack
            </span>
          </h2>

          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed font-normal">
            SecGenie connects natively via API without requiring sensor reinstalls or architectural re-engineering.
          </p>
        </div>

        {/* Mobile carousel controls */}
        <div className="mb-4 flex justify-between md:hidden">
          <button
            onClick={handlePrev}
            className="p-2.5 rounded-full hover:bg-slate-100 text-slate-500 transition-colors hover:text-cyan-600"
            aria-label="Previous connector"
          >
            <ArrowLeft className="h-6 w-6" />
          </button>
          <button
            onClick={handleNext}
            className="p-2.5 rounded-full hover:bg-slate-100 text-slate-500 transition-colors hover:text-cyan-600"
            aria-label="Next connector"
          >
            <ArrowRight className="h-6 w-6" />
          </button>
        </div>

        {/* Horizontal Accordion / Cards Layout */}
        <div className="flex items-center gap-2 sm:gap-4">
          {/* Desktop controls sit outside the card row */}
          <div className="hidden shrink-0 md:block">
            <button
              onClick={handlePrev}
              className="p-2.5 rounded-full hover:bg-slate-100 text-slate-400 transition-colors hover:text-cyan-600"
              aria-label="Previous connector"
            >
              <ArrowLeft className="h-6 w-6" />
            </button>
          </div>
          <div className="flex w-full flex-col gap-3 md:h-[420px] md:flex-1 md:flex-row md:overflow-hidden">
          {connectors.map((c) => {
            const isExpanded = expandedId === c.id;

            if (isExpanded) {
              return (
                /* Expanded Card with Cyber Image & Details */
                <div
                  key={c.id}
                  className="relative flex flex-[4] min-h-[300px] flex-col justify-between overflow-hidden rounded-2xl bg-slate-950 p-5 text-white shadow-2xl transition-all duration-500 group sm:p-8 md:min-h-0"
                >
                  {/* Photo Background */}
                  <img
                    src={c.bgImg}
                    alt={c.title}
                    className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent" />

                  {/* Top Row: Logo & Arrow */}
                  <div className="relative z-10 flex items-start justify-between">
                    <ConnectorLogo id={c.logoType} title={c.title} expanded />
                    <button
                      onClick={onOpenConnectors}
                      className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-md transition-colors"
                      title="View Connector Details"
                    >
                      <ArrowUpRight className="w-6 h-6 text-white" />
                    </button>
                  </div>

                  {/* Bottom Info */}
                  <div className="relative z-10 mt-auto space-y-3 pt-8">
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                      {c.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 max-w-md leading-relaxed">
                      {c.desc}
                    </p>
                    <div className="flex items-center gap-3 pt-2">
                      <span className="px-3 py-1 rounded bg-blue-600/80 text-white font-bold text-xs">
                        {c.tag}
                      </span>
                      <span className="text-xs text-emerald-400 flex items-center gap-1">
                        <Check className="w-3.5 h-3.5" /> Certified Bi-Directional
                      </span>
                    </div>
                  </div>
                </div>
              );
            }

            return (
              /* Collapsed brand mark card */
              <button
                type="button"
                key={c.id}
                onClick={() => setExpandedId(c.id)}
                aria-label={`Show ${c.title} connector`}
                title={c.title}
                className="relative flex flex-1 min-h-20 min-w-0 cursor-pointer flex-row items-center justify-between gap-4 rounded-2xl border border-slate-800 bg-slate-900 px-4 py-4 text-white shadow-md transition-all duration-300 group hover:bg-slate-800 md:min-h-0 md:min-w-[70px] md:flex-col md:gap-0 md:px-2 md:py-8"
              >
                <span className="w-9 h-9 rounded-full bg-slate-800/80 flex items-center justify-center text-cyan-400 group-hover:bg-white transition-colors">
                  <ArrowUpRight className="w-4 h-4" />
                </span>

                <ConnectorLogo id={c.logoType} title={c.title} />

                <div className="w-2 h-2 rounded-full bg-slate-600 group-hover:bg-cyan-400 transition-colors" />
              </button>
            );
          })}
          </div>
          <div className="hidden shrink-0 md:block">
            <button
              onClick={handleNext}
              className="p-2.5 rounded-full hover:bg-slate-100 text-slate-400 transition-colors hover:text-cyan-600"
              aria-label="Next connector"
            >
              <ArrowRight className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

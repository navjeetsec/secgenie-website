import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export type PlatformModule = 'exposure-intelligence' | 'ai-soc-automation' | 'ctem-platform';

interface ModuleLandingPageProps {
  module: PlatformModule;
  onBookDemo: () => void;
  onNavigate: (page: 'platform' | 'integration') => void;
}

const moduleContent: Record<PlatformModule, {
  eyebrow: string;
  title: string;
  description: string;
  problem: string;
  approach: string;
  capabilities: string[];
  nextStep: string;
}> = {
  'exposure-intelligence': {
    eyebrow: 'THREAT EXPOSURE MANAGEMENT',
    title: 'Exposure Intelligence & Attack Path Analysis',
    description: 'Prioritize real-world exposure by connecting vulnerabilities and security gaps with asset importance, network reachability, identity context, and potential impact.',
    problem: 'A vulnerability list alone may not show whether an issue is reachable, connected to privileged access, or relevant to a critical business asset. Teams need a practical way to investigate how exposures relate.',
    approach: 'SecGenie Exposure Intelligence brings exposure context together to help teams review attack paths, focus remediation, and support a continuous threat exposure management program.',
    capabilities: [
      'Correlate exposure findings with asset and environment context.',
      'Analyze relationships that may create paths to critical systems.',
      'Use exploitability and threat context to inform prioritization.',
      'Track findings through validation and remediation workflows.',
    ],
    nextStep: 'See how Exposure Intelligence fits into the SecGenie platform.',
  },
  'ai-soc-automation': {
    eyebrow: 'AI SOC PLATFORM',
    title: 'AI SOC Automation for Security Operations',
    description: 'Support security analysts with AI-assisted alert enrichment, deduplication, and triage while keeping review and response decisions aligned with team policy.',
    problem: 'SOC analysts often investigate repetitive alerts across separate tools, manually gathering endpoint, identity, asset, and threat context before they can decide what needs attention.',
    approach: 'SecGenie AI SOC Automation is designed to connect that context to alert workflows, helping teams structure investigations and reserve analyst attention for incidents that need it.',
    capabilities: [
      'Enrich alert investigations with available security context.',
      'Group repetitive signals to support alert-fatigue reduction.',
      'Provide structured information for analyst review and triage.',
      'Work alongside existing SIEM and EDR investments.',
    ],
    nextStep: 'Review the platform architecture and its connected security workflows.',
  },
  'ctem-platform': {
    eyebrow: 'CONTINUOUS THREAT EXPOSURE MANAGEMENT',
    title: 'A CTEM Platform for Continuous Risk Reduction',
    description: 'Connect discovery, prioritization, validation, mobilization, and measurement in a repeatable CTEM cycle that adapts as your environment changes.',
    problem: 'Periodic scans and disconnected remediation queues can leave teams with findings but limited context on which exposures matter most or whether risk is changing.',
    approach: 'SecGenie supports a continuous threat exposure management workflow: identify exposures, focus on impact, validate important risks, coordinate action, and review progress.',
    capabilities: [
      'Discover assets, vulnerabilities, misconfigurations, and security gaps.',
      'Prioritize exposures using context and potential business impact.',
      'Validate relationships and attack paths to understand risk.',
      'Mobilize remediation and measure progress over time.',
    ],
    nextStep: 'Explore how the SecGenie platform connects CTEM and AI SOC workflows.',
  },
};

export const ModuleLandingPage: React.FC<ModuleLandingPageProps> = ({
  module,
  onBookDemo,
  onNavigate,
}) => {
  const content = moduleContent[module];

  return (
    <div className="w-full bg-white text-slate-900">
      <section className="relative overflow-hidden bg-slate-950 px-4 py-24 text-white sm:py-32">
        <div aria-hidden="true" className="pointer-events-none absolute -left-20 top-0 h-96 w-96 rounded-full bg-cyan-500/15 blur-3xl" />
        <div aria-hidden="true" className="pointer-events-none absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-blue-600/15 blur-3xl" />
        <div className="relative mx-auto max-w-5xl text-center">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.18em] text-cyan-300">{content.eyebrow}</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-[1.15] tracking-tight max-w-4xl mx-auto">{content.title}</h1>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-slate-300 sm:text-xl">{content.description}</p>
          <button
            type="button"
            onClick={onBookDemo}
            className="mt-9 inline-flex items-center gap-2 rounded-full bg-cyan-400 px-7 py-3.5 text-sm font-bold text-slate-950 transition-colors hover:bg-cyan-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            Book a Technical Demo <ArrowRight aria-hidden="true" className="h-4 w-4" />
          </button>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-24">
        <div>
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-cyan-700">The challenge</p>
          <h2 className="text-2xl font-extrabold tracking-tight text-slate-950 sm:text-3xl">Turn security signals into useful context</h2>
          <p className="mt-5 text-base leading-relaxed text-slate-600">{content.problem}</p>
          <p className="mt-4 text-base leading-relaxed text-slate-600">{content.approach}</p>
        </div>
        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
          <h2 className="text-xl font-bold text-slate-950">What this module supports</h2>
          <ul className="mt-6 space-y-4">
            {content.capabilities.map((capability) => (
              <li key={capability} className="flex items-start gap-3 text-sm leading-relaxed text-slate-700">
                <CheckCircle2 aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-cyan-700" />
                {capability}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-[#030914] px-4 py-14 text-white sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-cyan-300">Explore SecGenie</p>
            <h2 className="mt-2 text-xl font-bold sm:text-2xl">{content.nextStep}</h2>
            <p className="mt-2 text-sm text-slate-400">Check available integrations and discuss your environment with our team.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <button type="button" onClick={() => onNavigate('platform')} className="rounded-full border border-slate-600 px-5 py-3 text-sm font-semibold text-white transition-colors hover:border-cyan-400">
              Platform overview
            </button>
            <button type="button" onClick={() => onNavigate('integration')} className="rounded-full border border-slate-600 px-5 py-3 text-sm font-semibold text-white transition-colors hover:border-cyan-400">
              Integrations
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

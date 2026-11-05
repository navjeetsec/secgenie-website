import React, { useEffect, useState } from 'react';
import {
  Activity,
  ArrowDown,
  ArrowRight,
  CheckCircle2,
  Network,
  ShieldCheck,
  Sparkles,
  X
} from 'lucide-react';

interface PlatformTourModalProps {
  isOpen: boolean;
  onClose: () => void;
  onBookDemo: () => void;
}

type PlatformTab = 'exposure' | 'aisoc' | 'response';

const tabs: { id: PlatformTab; label: string; icon: typeof Network }[] = [
  { id: 'exposure', label: 'Exposure intelligence', icon: Network },
  { id: 'aisoc', label: 'AI SOC automation', icon: Activity },
  { id: 'response', label: 'Investigation & response', icon: ShieldCheck }
];

const FlowCard: React.FC<{
  eyebrow: string;
  title: string;
  description: string;
  icon: typeof Network;
  accent?: boolean;
}> = ({ eyebrow, title, description, icon: Icon, accent = false }) => (
  <div
    className={`flex-1 rounded-2xl border p-5 text-left ${
      accent
        ? 'border-cyan-400/40 bg-cyan-950/40'
        : 'border-slate-700 bg-slate-900'
    }`}
  >
    <div className={`mb-4 flex h-10 w-10 items-center justify-center rounded-xl ${
      accent ? 'bg-cyan-400/15 text-cyan-300' : 'bg-slate-800 text-slate-300'
    }`}>
      <Icon className="h-5 w-5" />
    </div>
    <p className="mb-1 text-xs font-bold uppercase tracking-[0.16em] text-slate-400">
      {eyebrow}
    </p>
    <h4 className="mb-2 text-base font-bold text-white">{title}</h4>
    <p className="text-sm leading-relaxed text-slate-300">{description}</p>
  </div>
);

export const PlatformTourModal: React.FC<PlatformTourModalProps> = ({
  isOpen,
  onClose,
  onBookDemo
}) => {
  const [activeTab, setActiveTab] = useState<PlatformTab>('exposure');

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleBookDemo = () => {
    onClose();
    onBookDemo();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/85 p-3 backdrop-blur-md sm:p-6"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <section
        className="flex h-[min(760px,92vh)] w-full max-w-5xl flex-col overflow-hidden rounded-3xl border border-slate-700 bg-slate-950 text-slate-100 shadow-2xl"
        role="dialog"
        aria-modal="true"
        aria-labelledby="platform-tour-title"
        aria-describedby="platform-tour-description"
      >
        <header className="flex items-start justify-between gap-4 border-b border-slate-800 px-5 py-5 sm:px-7">
          <div className="flex min-w-0 items-start gap-3">
            <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-cyan-400/25 bg-cyan-400/10 text-cyan-300">
              <Network className="h-5 w-5" />
            </div>
            <div>
              <p className="mb-1 text-xs font-bold uppercase tracking-[0.18em] text-cyan-300">
                Platform overview
              </p>
              <h2 id="platform-tour-title" className="text-base font-bold text-white sm:text-xl">
                Interactive SecGenie Platform Architecture
              </h2>
              <p id="platform-tour-description" className="mt-1 max-w-2xl text-sm leading-relaxed text-slate-400">
                Explore how exposure intelligence and AI SOC workflows work together.
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-slate-700 bg-slate-900 text-slate-300 transition-colors hover:border-slate-500 hover:bg-slate-800 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-400"
            aria-label="Close platform overview"
          >
            <X className="h-5 w-5" />
          </button>
        </header>

        <div
          className="flex shrink-0 gap-1 overflow-x-auto border-b border-slate-800 px-4 pt-3 sm:px-7"
          role="tablist"
          aria-label="Platform capabilities"
        >
          {tabs.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              id={`platform-tab-${id}`}
              type="button"
              role="tab"
              aria-selected={activeTab === id}
              aria-controls="platform-panel"
              onClick={() => setActiveTab(id)}
              className={`flex shrink-0 items-center gap-2 border-b-2 px-3 py-3 text-sm font-semibold transition-colors sm:px-4 ${
                activeTab === id
                  ? 'border-cyan-400 text-cyan-300'
                  : 'border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              <Icon className="h-4 w-4" />
              {label}
            </button>
          ))}
        </div>

        <div className="min-h-0 flex-1 overflow-y-auto p-4 sm:p-7">
          <div
            id="platform-panel"
            className="h-[420px] shrink-0 overflow-y-auto rounded-2xl border border-slate-800 bg-slate-900/50 p-4 sm:h-[440px] sm:p-6"
            role="tabpanel"
            aria-labelledby={`platform-tab-${activeTab}`}
          >
            {activeTab === 'exposure' && (
              <div className="mx-auto w-full max-w-4xl">
                <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <h3 className="text-lg font-bold text-white sm:text-xl">Unified exposure graph</h3>
                    <p className="mt-1 max-w-2xl text-sm leading-relaxed text-slate-300">
                      A 2D illustration of how connected assets and exposure context can reveal attack paths.
                    </p>
                  </div>
                  <span className="rounded-lg border border-cyan-500/30 bg-cyan-500/10 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-cyan-300">
                    2D View
                  </span>
                </div>
                <div className="relative h-52 overflow-hidden rounded-xl border border-slate-700 bg-slate-950/80 sm:h-56">
                  <div className="absolute inset-0 bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:20px_20px] opacity-30" />
                  <svg
                    viewBox="0 0 900 240"
                    role="img"
                    aria-label="Two-dimensional illustration of an attack path across connected assets"
                    className="relative h-full w-full"
                  >
                    <g fill="none" stroke="#64748b" strokeWidth="2">
                      <path d="M95 120 L235 65 L375 120 L515 65 L655 120 L805 65" />
                      <path d="M95 120 L235 175 L375 120 L515 175 L655 120 L805 175" />
                      <path d="M235 65 L235 175 M515 65 L515 175 M655 120 L805 65 M655 120 L805 175" strokeDasharray="5 5" />
                    </g>
                    <path d="M95 120 L235 65 L375 120 L515 65 L655 120 L805 120" fill="none" stroke="#ef4444" strokeWidth="3" />
                    {[
                      { x: 95, y: 120, label: 'Public Edge', color: '#60a5fa' },
                      { x: 235, y: 65, label: 'Web App', color: '#f87171' },
                      { x: 235, y: 175, label: 'Endpoint', color: '#a78bfa' },
                      { x: 375, y: 120, label: 'Identity', color: '#fbbf24' },
                      { x: 515, y: 65, label: 'Cloud Workload', color: '#fb7185' },
                      { x: 515, y: 175, label: 'Kubernetes', color: '#34d399' },
                      { x: 655, y: 120, label: 'Privileged Role', color: '#fbbf24' },
                      { x: 805, y: 65, label: 'Log Service', color: '#38bdf8' },
                      { x: 805, y: 175, label: 'Customer DB', color: '#22d3ee' },
                      { x: 805, y: 120, label: 'Crown Jewel', color: '#22d3ee' }
                    ].map((node) => (
                      <g key={node.label}>
                        <circle cx={node.x} cy={node.y} r="9" fill={node.color} stroke="#0f172a" strokeWidth="4" />
                        <text
                          x={node.x}
                          y={node.y + 27}
                          textAnchor="middle"
                          fill="#cbd5e1"
                          fontSize="11"
                          fontFamily="ui-monospace, monospace"
                        >
                          {node.label}
                        </text>
                      </g>
                    ))}
                  </svg>
                </div>
                <div className="mt-3 grid grid-cols-1 gap-2 text-sm sm:grid-cols-3">
                  <div className="rounded-lg border border-slate-800 bg-slate-900 p-3">
                    <span className="text-slate-400">Exposure context</span>
                    <p className="mt-1 font-semibold text-white">Connected assets &amp; identities</p>
                  </div>
                  <div className="rounded-lg border border-slate-800 bg-slate-900 p-3">
                    <span className="text-slate-400">Analysis</span>
                    <p className="mt-1 font-semibold text-cyan-300">Reachability &amp; attack paths</p>
                  </div>
                  <div className="rounded-lg border border-slate-800 bg-slate-900 p-3">
                    <span className="text-slate-400">Outcome</span>
                    <p className="mt-1 font-semibold text-emerald-300">Prioritized remediation</p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'aisoc' && (
              <div className="mx-auto w-full max-w-4xl">
                <div className="mb-4">
                  <h3 className="text-lg font-bold text-white sm:text-xl">Move from alerts to informed investigation</h3>
                  <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-300">
                    AI SOC workflows organize alert triage and enrichment so analysts can investigate with more context.
                  </p>
                </div>
                <div className="flex flex-col items-stretch gap-3 md:flex-row md:items-center">
                  <FlowCard
                    eyebrow="Starting point"
                    title="Security alerts"
                    description="Signals from the security tools already in your environment."
                    icon={Activity}
                  />
                  <ArrowRight className="mx-auto hidden h-5 w-5 shrink-0 text-cyan-400 md:block" />
                  <ArrowDown className="mx-auto h-5 w-5 shrink-0 text-cyan-400 md:hidden" />
                  <FlowCard
                    eyebrow="AI SOC engine"
                    title="Triage & enrichment"
                    description="Adds context and supports consistent alert assessment."
                    icon={Sparkles}
                    accent
                  />
                  <ArrowRight className="mx-auto hidden h-5 w-5 shrink-0 text-cyan-400 md:block" />
                  <ArrowDown className="mx-auto h-5 w-5 shrink-0 text-cyan-400 md:hidden" />
                  <FlowCard
                    eyebrow="Analyst workflow"
                    title="Investigation"
                    description="Helps analysts review relevant context and next steps."
                    icon={ShieldCheck}
                  />
                </div>
              </div>
            )}

            {activeTab === 'response' && (
              <div className="mx-auto w-full max-w-4xl">
                <div className="mb-4">
                  <h3 className="text-lg font-bold text-white sm:text-xl">Keep response workflows clear and controlled</h3>
                  <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-300">
                    Investigation context can guide response planning while keeping analyst review and connected security controls in the workflow.
                  </p>
                </div>
                <div className="flex flex-col items-stretch gap-3 md:flex-row md:items-center">
                  <FlowCard
                    eyebrow="Understand"
                    title="Review investigation"
                    description="Assess the alert and its supporting environment context."
                    icon={Activity}
                  />
                  <ArrowRight className="mx-auto hidden h-5 w-5 shrink-0 text-cyan-400 md:block" />
                  <ArrowDown className="mx-auto h-5 w-5 shrink-0 text-cyan-400 md:hidden" />
                  <FlowCard
                    eyebrow="Human in the loop"
                    title="Analyst review"
                    description="Review findings and decide on an appropriate response."
                    icon={ShieldCheck}
                    accent
                  />
                  <ArrowRight className="mx-auto hidden h-5 w-5 shrink-0 text-cyan-400 md:block" />
                  <ArrowDown className="mx-auto h-5 w-5 shrink-0 text-cyan-400 md:hidden" />
                  <FlowCard
                    eyebrow="Action"
                    title="Coordinated response"
                    description="Use available workflows and connected security controls."
                    icon={CheckCircle2}
                  />
                </div>
              </div>
            )}
          </div>
          <p className="mt-3 text-center text-xs text-slate-500">
            Illustrative platform architecture overview.
          </p>
        </div>

        <footer className="flex flex-col-reverse items-stretch justify-between gap-3 border-t border-slate-800 bg-slate-950 px-5 py-4 sm:flex-row sm:items-center sm:px-7">
          <span className="text-sm text-slate-400">Want to see the platform in your environment?</span>
          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="rounded-xl border border-slate-700 px-4 py-2.5 text-sm font-semibold text-slate-200 transition-colors hover:bg-slate-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-400"
            >
              Close
            </button>
            <button
              type="button"
              onClick={handleBookDemo}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 px-4 py-2.5 text-sm font-bold text-slate-950 transition-colors hover:from-cyan-300 hover:to-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
            >
              Book a demo <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </footer>
      </section>
    </div>
  );
};

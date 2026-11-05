import React, { useState } from "react";
import {
  Search,
  ArrowUpDown,
  Check,
  ArrowDown,
  ChevronRight,
  Sparkles,
  Shield,
  Activity,
} from "lucide-react";

export const CyberResilienceSection: React.FC = () => {
  const [activeItem, setActiveItem] = useState<number>(0);

  const resiliencePillars = [
    {
      title: "Prioritize real exposures",
      icon: Search,
      tag: "Exposure Intelligence",
      metric: "Reduced Noise",
      summary:
        "Distinguish superficial CVEs from critical remediation priorities tied to reachable databases.",
      detail:
        "SecGenie correlates multi-scanner CVEs with actual network topology, reachable ports, and IAM roles to ensure analysts focus on genuine threat vectors.",
    },
    {
      title: "Understand attack paths",
      icon: ArrowUpDown,
      tag: "Graph Intelligence",
      metric: "Attack Path Tracing",
      summary:
        "Trace every lateral pivot an adversary could execute from external assets to crown jewels.",
      detail:
        "Continuously visualizes step-by-step kill chains across active identities, misconfigured S3 buckets, and exposed endpoints.",
    },
    {
      title: "Detect and respond faster",
      icon: Check,
      tag: "Rapid Containment",
      metric: "Faster Response",
      summary:
        "Trigger pre-approved automated containment playbooks before malware executes lateral movement.",
      detail:
        "Isolate compromised workstations in CrowdStrike, revoke Okta tokens, and inject perimeter firewall blocks instantly.",
    },
    {
      title: "Reduce operational overhead",
      icon: ArrowDown,
      tag: "SOC Productivity",
      metric: "Improved Efficiency",
      summary:
        "Free SOC analysts from triage drudgery to focus on high-value threat hunting and architectural hardening.",
      detail:
        "Automates evidence assembly, forensic snapshot collection, and ticket creation across Jira and ServiceNow.",
    },
  ];

  return (
    <section
      id="cyber-resilience"
      className="relative py-24 bg-[#030914] text-white overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-10 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Heading & Value Proposition */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-slate-700 text-[11px] sm:text-xs font-semibold tracking-wider text-slate-300 uppercase">
              OPERATE BEYOND ALERTS WITH RISK-DRIVEN WORKFLOWS
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1]">
              Continuous Cyber Resilience
            </h2>

            <p className="text-base sm:text-lg text-slate-400 font-normal leading-relaxed">
              SecGenie AI enables a continuous approach to cybersecurity
            </p>

            <div className="p-4 bg-slate-900/80 rounded-xl border border-slate-800 text-xs text-slate-400 space-y-2">
              <div className="flex items-center gap-2 text-cyan-400 font-semibold">
                <Sparkles className="w-4 h-4" /> Continuous Threat Exposure
                Management (CTEM)
              </div>
              <p>
                Move from reactive alert-chasing to proactive graph-grounded
                defense. Defend assets before adversary weaponization.
              </p>
            </div>
          </div>

          {/* Right Column: 4 Interactive Floating Pill Cards matching Screenshot 4 */}
          <div className="lg:col-span-7 space-y-4">
            {resiliencePillars.map((item, index) => {
              const Icon = item.icon;
              const isActive = activeItem === index;

              return (
                <div
                  key={item.title}
                  onClick={() => setActiveItem(index)}
                  className={`cursor-pointer rounded-2xl p-5 transition-all duration-200 border ${
                    isActive
                      ? "bg-gradient-to-r from-slate-900 via-slate-900/90 to-cyan-950/40 border-cyan-500/50 shadow-xl shadow-cyan-950/30"
                      : "bg-slate-900/50 hover:bg-slate-900/80 border-slate-800/80 hover:border-slate-700"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      {/* Round White Circle with Dark Icon matching screenshot! */}
                      <div className="w-12 h-12 rounded-full bg-white text-slate-900 flex items-center justify-center shrink-0 shadow-md">
                        <Icon className="w-6 h-6 stroke-[2.5]" />
                      </div>

                      <div>
                        <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                          {item.title}
                        </h3>
                        <p className="text-xs text-slate-400 mt-0.5 line-clamp-1">
                          {item.summary}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="hidden sm:inline-block px-2.5 py-1 rounded text-[11px] font-mono font-semibold bg-cyan-950/80 text-cyan-300 border border-cyan-800/40">
                        {item.metric}
                      </span>
                      <ChevronRight
                        className={`w-5 h-5 text-slate-400 transition-transform ${isActive ? "rotate-90 text-cyan-400" : ""}`}
                      />
                    </div>
                  </div>

                  {/* Expanded Detail Box */}
                  {isActive && (
                    <div className="mt-4 pt-4 border-t border-slate-800/80 text-xs text-slate-300 leading-relaxed space-y-2 animate-in fade-in duration-200">
                      <p>{item.detail}</p>
                      <div className="flex items-center gap-4 text-[11px] text-cyan-400 font-semibold pt-1">
                        <span>Pillar: {item.tag}</span>
                        <span>•</span>
                        <span>Automated Enforcement Ready</span>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

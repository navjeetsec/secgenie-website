import React from 'react';
import { CheckCircle2, ShieldCheck, Database, Layers, Eye, Sparkles, Activity } from 'lucide-react';
import { getImageAsset } from '../../assets/imageAssets';

export const ExposureIntelligenceEngineSection: React.FC = () => {
  return (
    <section id="exposure-engine" className="relative py-24 bg-white text-slate-900 overflow-hidden border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Header Block matching Screenshot 2 */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-100/80 border border-cyan-200 text-cyan-900 text-xs font-bold uppercase tracking-wider mb-5">
            <Sparkles className="w-3.5 h-3.5 text-cyan-700" />
            <span>CORE ENGINE 01</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4">
            <span className="text-blue-600">Exposure</span> Intelligence Engine
          </h2>

          <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-4">
            Discover and prioritize real risks across your entire attack surface
          </h3>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal max-w-3xl mx-auto">
            Rather than treating thousands of CVEs as isolated bullet points, the Exposure Intelligence Engine correlates vulnerabilities with live network accessibility, credential exposure, and asset criticality to calculate real, actionable risk.
          </p>
        </div>

        {/* 2-Column Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch max-w-6xl mx-auto">
          {/* Left Column: Re-architected Clean Multi-Layer Visual Layout (NO CLASHING) */}
          <div className="lg:col-span-7 lg:flex lg:h-full lg:flex-col">
            {/* Main Stage Image Frame */}
            <div className="relative aspect-[16/10] overflow-hidden rounded-3xl border border-slate-200/90 bg-slate-950 shadow-2xl group lg:aspect-auto lg:h-full lg:flex-1">
              <img
                src={getImageAsset('laptop_hands_security_mesh_1793439823641.jpg')}
                alt="Exposure Intelligence Scan on Laptop"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
                referrerPolicy="no-referrer"
              />

              {/* HUD Header Bar */}
              <div className="absolute top-0 inset-x-0 p-4 bg-gradient-to-b from-slate-950/90 via-slate-950/50 to-transparent flex items-center justify-between text-xs text-white">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="font-mono text-[11px] font-bold tracking-wider text-cyan-300">
                    TOPOLOGY SCAN: ACTIVE
                  </span>
                </div>
                <span className="font-mono text-[10px] text-slate-300 bg-slate-900/80 px-2 py-0.5 rounded border border-slate-700">
                  14,820 Assets Mapped
                </span>
              </div>

              {/* Bottom HUD Telemetry Strip */}
              <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-slate-950/95 via-slate-950/70 to-transparent flex items-center justify-between text-[11px] text-slate-300">
                {/* <span className="font-medium">Continuous Multi-Cloud &amp; On-Prem Exposure Graph</span> */}
                {/* <span className="text-cyan-400 font-mono font-bold">Latency: 1.2s</span> */}
              </div>
            </div>
          </div>

          {/* Right Column: Engine Features & Checklist */}
          <div className="lg:col-span-5 space-y-6 lg:h-full lg:pl-4">
            <p className="text-sm text-slate-600 leading-relaxed">
              SecGenie continuously correlates asset metadata with live reachable network topology, Active Directory permissions, and real-world exploit kits.
            </p>

            {/* Checklist matching Screenshot 2 */}
            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3.5 p-3 rounded-2xl hover:bg-slate-50 transition-colors">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                <div>
                  <span className="text-sm font-bold text-slate-900 block">
                    Continuous asset discovery across cloud and on premises environments
                  </span>
                  <span className="text-xs text-slate-500">
                    Automatic discovery of unmanaged cloud buckets, shadow workloads, and Kubernetes clusters.
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-3 rounded-2xl hover:bg-slate-50 transition-colors">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                <div>
                  <span className="text-sm font-bold text-slate-900 block">
                    Dynamic exploitability weighting utilizing CISA KEV and threat intel
                  </span>
                  <span className="text-xs text-slate-500">
                    Cross-references every vulnerability against live in-the-wild exploitation feeds.
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-3 rounded-2xl hover:bg-slate-50 transition-colors">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                <div>
                  <span className="text-sm font-bold text-slate-900 block">
                    Reduces Vulnerability scan noise with Exposure Content
                  </span>
                  <span className="text-xs text-slate-500">
                    Focuses team remediation on critical remediation priorities rather than unreachable lower-tier CVEs.
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-3 rounded-2xl hover:bg-slate-50 transition-colors">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                <div>
                  <span className="text-sm font-bold text-slate-900 block">
                    Comprehensive coverage of unmanaged and shadow IT assets
                  </span>
                  <span className="text-xs text-slate-500">
                    Uncovers forgotten staging servers, exposed APIs, and rogue development certificates.
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

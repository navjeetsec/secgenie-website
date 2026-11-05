import React from 'react';
import { Bot, ShieldCheck, UserCheck } from 'lucide-react';
import { getImageAsset } from '../../assets/imageAssets';

export const AiSocAutomationEngineSection: React.FC = () => {
  return (
    <section id="aisoc-engine" className="relative py-24 bg-white text-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Block matching Screenshot 1 */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-blue-600 tracking-tight mb-4">
            AI SOC Automation Engine
          </h2>

          <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-4">
            Autonomous triage, enrichment, and response for modern security operations
          </h3>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal max-w-3xl mx-auto">
            SecGenie AI deploys explainable AI agents to automate the tedious Tier 1 triage cycle. Incoming security events are enriched with user context, endpoint telemetry, and threat intelligence in seconds, allowing analysts to focus on confirmed, critical incidents.
          </p>
        </div>

        {/* Dark Blue Container Card matching Screenshot 1 & 7 */}
        <div className="relative rounded-3xl bg-[#030E1F] text-white p-8 sm:p-12 lg:p-16 border border-slate-800 shadow-2xl overflow-hidden max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column */}
            <div className="lg:col-span-7 space-y-8">
              {/* Dark Teal Pill matching Screenshot 1 */}
              <div className="inline-block px-5 py-2.5 rounded-2xl bg-cyan-950/80 border border-cyan-800/50 text-white font-bold text-base tracking-wide">
                AI SOC Automation Engine
              </div>

              {/* 3 Pillars matching Screenshot 1 */}
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl sm:text-2xl font-bold text-white mb-2">
                    Autonomous Triage
                  </h4>
                  <p className="text-sm text-slate-300 leading-relaxed font-normal">
                    Deduplicates alerts, performs background enrichment, and resolves benign anomalies with zero human overhead.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl sm:text-2xl font-bold text-white mb-2">
                    Explainable Audit Trails
                  </h4>
                  <p className="text-sm text-slate-300 leading-relaxed font-normal">
                    Every decision produces a transparent reasoning log citing telemetry evidence, removing black-box uncertainty.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl sm:text-2xl font-bold text-white mb-2">
                    Human-in-the-Loop
                  </h4>
                  <p className="text-sm text-slate-300 leading-relaxed font-normal">
                    Execute quarantine actions with one click or use approved automated containment playbooks for high confidence threats.
                  </p>
                </div>
              </div>

              {/* Bottom Support Pill matching Screenshot 7 */}
              <div className="pt-4">
                <div className="inline-block px-4 py-2 rounded-full bg-slate-900/80 border border-slate-700/60 text-xs text-slate-400">
                  Supports native integration with Splunk, Microsoft Sentinel, CrowdStrike, and Slack/Teams.
                </div>
              </div>
            </div>

            {/* Right Column: Hand with Holographic Shield Image matching Screenshot 1 & 7 */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-cyan-500/30 aspect-[4/3] bg-slate-950">
                <img
                  src={getImageAsset('cyber_hand_holding_shield_1793439822954.jpg')}
                  alt="AI SOC Automation Hologram Shield"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

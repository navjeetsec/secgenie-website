import React, { useState } from 'react';
import { Database, AlertCircle, Share2, Zap, CheckCircle2 } from 'lucide-react';

export const DiscoveryToDefenseSection: React.FC = () => {
  const [selectedStep, setSelectedStep] = useState<number>(3);
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);
  const isStageActive = (step: number) => (hoveredStep ?? selectedStep) === step;

  const handleStageKeyDown = (
    event: React.KeyboardEvent<HTMLDivElement>,
    step: number,
  ) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      setSelectedStep(step);
    }
  };

  return (
    <section id="discovery-steps" className="relative py-20 bg-white text-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Subtle connecting dotted curved line running behind cards matching Screenshot 99 */}
        <div className="hidden lg:block absolute top-[45%] left-0 right-0 h-16 pointer-events-none z-0">
          <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 1200 60">
            <path
              d="M 20,30 Q 150,5 300,30 T 600,30 T 900,30 T 1180,30"
              fill="none"
              stroke="#0284c7"
              strokeWidth="2"
              strokeDasharray="6 6"
              className="opacity-70"
            />
          </svg>
        </div>

        {/* Section Header with Click to Inspect Hint */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-sky-800 text-xs font-bold uppercase tracking-wider mb-3 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-sky-500 animate-pulse" />
            <span>Interactive CTEM Defense Pipeline</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-2">
            From Exposure Discovery to Rapid Response
          </h2>
          <p className="text-xs sm:text-sm text-slate-500">
            Explore each stage of the exposure-to-response workflow.
          </p>
        </div>

        {/* 4 Cards Grid matching Screenshot 99 - Fully Clickable & Color Fixed */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch relative z-10">
          {/* ----------------- CARD 01: ASSET DISCOVERY ----------------- */}
          <div
            role="button"
            tabIndex={0}
            aria-pressed={selectedStep === 1}
            onClick={() => setSelectedStep(1)}
            onKeyDown={(event) => handleStageKeyDown(event, 1)}
            onMouseEnter={() => setHoveredStep(1)}
            onMouseLeave={() => setHoveredStep(null)}
            className={`flex flex-col justify-between p-6 sm:p-7 rounded-3xl transition-all duration-300 text-center relative select-none group cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-500 ${
              isStageActive(1)
                ? 'bg-cyan-50/40 text-slate-900 border border-cyan-300 shadow-[0_12px_30px_rgba(6,182,212,0.14)] z-20'
                : 'bg-white text-slate-900 border border-slate-200 shadow-[0_4px_25px_rgba(0,0,0,0.03)] hover:bg-cyan-50/40 hover:border-cyan-300 hover:shadow-[0_12px_30px_rgba(6,182,212,0.14)]'
            }`}
          >
            <div>
              {/* Digit 01 & Top Status */}
              <div className="flex items-center justify-between mb-2">
                <span
                  className="text-5xl sm:text-6xl font-black tracking-tighter select-none text-slate-900"
                >
                  01
                </span>
                <div className="w-9 h-9 rounded-xl flex items-center justify-center bg-blue-50 border border-blue-100 text-blue-600 group-hover:scale-105 transition-transform" aria-label="Asset discovery">
                  <Database className="w-4 h-4" />
                </div>
              </div>

              {/* Icon badge matching Screenshot 99 */}
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 shadow-xs bg-blue-50 border border-blue-200 text-blue-600"
              >
                <Database className="w-6 h-6 stroke-[2]" />
              </div>

              {/* Subheader */}
              <div
                className="text-xs font-black tracking-wider uppercase mb-4 text-blue-700"
              >
                EXPOSURE DISCOVERY
              </div>

              {/* Inner Card UI matching Screenshot 99 */}
              <div
                className="rounded-2xl p-4 border mb-6 text-center space-y-2.5 bg-[#f2f6fa] border-blue-100/60 text-slate-900"
              >
                <div className="text-xs font-bold text-slate-800">
                  Network Inventory
                </div>

                <div
                  className="inline-block px-3 py-0.5 rounded-full text-[10px] font-bold bg-[#dbe8f5] text-blue-700"
                >
                  Scoping Complete
                </div>

                <div
                  className="p-2.5 rounded-xl border text-xs font-bold flex items-center justify-center gap-2 shadow-xs bg-white border-blue-200 text-blue-900"
                >
                  <Database className="w-4 h-4 text-blue-500" />
                  <span>SERVERS &amp; CLOUD ASSETS</span>
                </div>

                <div className="grid grid-cols-2 gap-2 text-[10px] font-medium">
                  <span
                    className="p-1.5 rounded-lg border flex items-center justify-center gap-1 bg-white border-slate-200 text-slate-700"
                  >
                    🗄️ Services (48)
                  </span>
                  <span
                    className="p-1.5 rounded-lg border flex items-center justify-center gap-1 bg-white border-slate-200 text-slate-700"
                  >
                    💻 Devices (1.2k)
                  </span>
                </div>

                <div
                  className="text-[9px] uppercase tracking-wider font-bold pt-2 border-t text-slate-500 border-slate-200"
                >
                  CONTINUOUS ASSET INGESTION
                </div>
              </div>
            </div>

            {/* Bottom Caption matching Screenshot 99 */}
            <div className="pt-2 border-t border-slate-100">
              <h3
                className="text-sm font-black tracking-tight uppercase mb-1 text-slate-950"
              >
                ASSET DISCOVERY
              </h3>
              <p
                className="text-xs leading-relaxed font-normal text-slate-600"
              >
                Identify, fingerprint, and scope every unique asset across cloud and hybrid environments.
              </p>
            </div>
          </div>

          {/* ----------------- CARD 02: EXPOSURE ANALYSIS ----------------- */}
          <div
            role="button"
            tabIndex={0}
            aria-pressed={selectedStep === 2}
            onClick={() => setSelectedStep(2)}
            onKeyDown={(event) => handleStageKeyDown(event, 2)}
            onMouseEnter={() => setHoveredStep(2)}
            onMouseLeave={() => setHoveredStep(null)}
            className={`flex flex-col justify-between p-6 sm:p-7 rounded-3xl transition-all duration-300 text-center relative select-none group cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500 ${
              isStageActive(2)
                ? 'bg-red-50/40 text-slate-900 border border-red-300 shadow-[0_12px_30px_rgba(239,68,68,0.12)] z-20'
                : 'bg-white text-slate-900 border border-slate-200 shadow-[0_4px_25px_rgba(0,0,0,0.03)] hover:bg-red-50/40 hover:border-red-300 hover:shadow-[0_12px_30px_rgba(239,68,68,0.12)]'
            }`}
          >
            <div>
              {/* Digit 02 & Top Status */}
              <div className="flex items-center justify-between mb-2">
                <span
                  className="text-5xl sm:text-6xl font-black tracking-tighter select-none text-slate-900"
                >
                  02
                </span>
                <div className="w-9 h-9 rounded-xl flex items-center justify-center bg-red-50 border border-red-100 text-red-500 group-hover:scale-105 transition-transform" aria-label="Exposure analysis">
                  <AlertCircle className="w-4 h-4" />
                </div>
              </div>

              {/* Red Exclamation Icon Badge matching Screenshot 99 */}
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 shadow-xs bg-red-50 border border-red-200 text-red-500"
              >
                <AlertCircle className="w-6 h-6 stroke-[2]" />
              </div>

              {/* Subheader */}
              <div
                className="text-xs font-black tracking-wider uppercase mb-4 text-[#0d2a4a]"
              >
                RISK ANALYSIS AND PRIORITIZATION
              </div>

              {/* Inner Soft Pink Card UI matching Screenshot 99 */}
              <div
                className="rounded-2xl p-4 border mb-6 text-center space-y-2.5 bg-[#fef2f2] border-red-100 text-slate-900"
              >
                <div
                  className="text-xs font-black flex items-center justify-center gap-1 tracking-wide text-red-600"
                >
                  <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                  <span>MISCONFIGURATIONS FOUND</span>
                </div>

                {/* 4 CVE Numbers with Tags matching Screenshot 99 */}
                <div className="grid grid-cols-4 gap-1.5 pt-1">
                  <div
                    className="p-1 rounded-lg border text-center bg-white border-red-200 text-slate-800"
                  >
                    <div className="text-xs font-bold">1</div>
                    <div className="text-[8px] font-bold text-red-600 bg-red-100 rounded px-1 mt-0.5">CVE-1</div>
                  </div>
                  <div
                    className="p-1 rounded-lg border text-center bg-white border-amber-200 text-slate-800"
                  >
                    <div className="text-xs font-bold">2</div>
                    <div className="text-[8px] font-bold text-amber-700 bg-amber-100 rounded px-1 mt-0.5">WARN</div>
                  </div>
                  <div
                    className="p-1 rounded-lg border text-center bg-white border-emerald-200 text-slate-800"
                  >
                    <div className="text-xs font-bold">3</div>
                    <div className="text-[8px] font-bold text-emerald-700 bg-emerald-100 rounded px-1 mt-0.5">OK</div>
                  </div>
                  <div
                    className="p-1 rounded-lg border text-center bg-white border-red-200 text-slate-800"
                  >
                    <div className="text-xs font-bold">4</div>
                    <div className="text-[8px] font-bold text-red-600 bg-red-100 rounded px-1 mt-0.5">CVE-2</div>
                  </div>
                </div>

                {/* Bottom Pink Pill with Lightning Bolt */}
                <div
                  className="p-2 rounded-xl text-[9px] font-bold tracking-wide uppercase flex items-center justify-center gap-1 bg-red-100/70 text-red-700"
                >
                  <Zap className="w-3.5 h-3.5 shrink-0 text-red-500" />
                  <span>CRITICAL VULNERABILITIES IDENTIFIED</span>
                </div>
              </div>
            </div>

            {/* Bottom Caption matching Screenshot 99 */}
            <div className="pt-2 border-t border-slate-100">
              <h3
                className="text-sm font-black tracking-tight uppercase mb-1 text-slate-950"
              >
                ASSET AND EXPOSURE DISCOVERY
              </h3>
              <p
                className="text-xs leading-relaxed font-normal text-slate-600"
              >
                Identifying vulnerabilities, exploitability factors, and configuration weaknesses.
              </p>
            </div>
          </div>

          {/* ----------------- CARD 03: ATTACK PATH MODELLING ----------------- */}
          <div
            role="button"
            tabIndex={0}
            aria-pressed={selectedStep === 3}
            onClick={() => setSelectedStep(3)}
            onKeyDown={(event) => handleStageKeyDown(event, 3)}
            onMouseEnter={() => setHoveredStep(3)}
            onMouseLeave={() => setHoveredStep(null)}
            className={`flex flex-col justify-between p-6 sm:p-7 rounded-3xl transition-all duration-300 text-center relative select-none group cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-500 ${
              isStageActive(3)
                ? 'bg-cyan-50/40 text-slate-900 border border-cyan-300 shadow-[0_12px_30px_rgba(6,182,212,0.14)] z-20'
                : 'bg-white text-slate-900 border border-slate-200 shadow-[0_4px_25px_rgba(0,0,0,0.03)] hover:bg-cyan-50/40 hover:border-cyan-300 hover:shadow-[0_12px_30px_rgba(6,182,212,0.14)]'
            }`}
          >
            <div>
              {/* Digits 03 + Top Right Network Icon matching Screenshot 99 */}
              <div className="flex items-center justify-between mb-4">
                <span
                  className="text-5xl sm:text-6xl font-black tracking-tighter select-none text-slate-900"
                >
                  03
                </span>
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center bg-slate-100 border border-slate-200 text-slate-700"
                >
                  <Share2 className="w-4 h-4" />
                </div>
              </div>

              {/* Subheader */}
              <div
                className="text-xs font-black tracking-wider uppercase mb-4 text-center text-blue-700"
              >
                RAPID ATTACK MODELLING
              </div>

              {/* Pure White Visual Diagram Card matching Screenshot 99 */}
              <div className="bg-white rounded-2xl mb-4 text-slate-900 shadow-sm relative h-28 border border-slate-200">
                {/* Visual SVG Attack Path with Nodes */}
                <svg
                  className="absolute inset-0 w-full h-full pointer-events-none"
                  viewBox="0 0 300 112"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  {/* Blue solid line from top-left blue node to center black node */}
                  <line x1="30" y1="28" x2="150" y2="56" stroke="#2563eb" strokeWidth="2.5" />
                  {/* Red dotted line from bottom-left red node to center black node */}
                  <line x1="30" y1="84" x2="150" y2="56" stroke="#dc2626" strokeWidth="2.5" strokeDasharray="3 3" />
                  {/* Red solid line from center black node to right node */}
                  <line x1="150" y1="56" x2="270" y2="56" stroke="#dc2626" strokeWidth="2.5" />
                </svg>

                {/* Left 2 Nodes */}
                <div className="absolute left-[10%] top-1/4 z-10 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600 ring-2 ring-blue-300" />
                <div className="absolute left-[10%] top-3/4 z-10 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-600 ring-2 ring-red-300" />

                {/* Center Black Node */}
                <div className="absolute left-1/2 top-1/2 z-10 h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-black shadow-sm ring-2 ring-slate-300" />

                {/* Right Target Node (Blue node inside cyan ring) */}
                <div className="absolute left-[90%] top-1/2 z-10 flex h-6 w-6 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-black bg-cyan-400 shadow-md">
                  <div className="w-2.5 h-2.5 rounded-full bg-black" />
                </div>
              </div>

              {/* Pill: CROWN JEWELS (DATA) */}
              <div
                className="border rounded-xl p-2 text-center text-[10px] font-bold uppercase tracking-wider mb-3 bg-slate-100 border-slate-200 text-slate-700"
              >
                CROWN JEWELS (DATA)
              </div>

              {/* Asset Discovery & Subtext */}
              <div className="text-center space-y-1 mb-5">
                <div
                  className="text-xs font-bold text-slate-800"
                >
                  Lateral Path Tracing ↓
                </div>
                <p
                  className="text-[11px] leading-snug text-slate-600"
                >
                  Mapping critical exposure paths to sensitive assets.
                </p>
              </div>
            </div>

            {/* Bottom Caption matching Screenshot 99 */}
            <div className="text-center pt-2 border-t border-slate-100">
              <h3
                className="text-sm font-black tracking-tight uppercase mb-1 text-slate-950"
              >
                ATTACK PATH MODELLING
              </h3>
              <p
                className="text-xs leading-relaxed font-normal text-slate-600"
              >
                Model every step an attacker could traverse to compromise high-value targets.
              </p>
            </div>
          </div>

          {/* ----------------- CARD 04: AUTOMATED RESPONSE ----------------- */}
          <div
            role="button"
            tabIndex={0}
            aria-pressed={selectedStep === 4}
            onClick={() => setSelectedStep(4)}
            onKeyDown={(event) => handleStageKeyDown(event, 4)}
            onMouseEnter={() => setHoveredStep(4)}
            onMouseLeave={() => setHoveredStep(null)}
            className={`flex flex-col justify-between p-6 sm:p-7 rounded-3xl transition-all duration-300 text-center relative select-none group cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-500 ${
              isStageActive(4)
                ? 'bg-amber-50/40 text-slate-900 border border-amber-300 shadow-[0_12px_30px_rgba(245,158,11,0.14)] z-20'
                : 'bg-white text-slate-900 border border-slate-200 shadow-[0_4px_25px_rgba(0,0,0,0.03)] hover:bg-amber-50/40 hover:border-amber-300 hover:shadow-[0_12px_30px_rgba(245,158,11,0.14)]'
            }`}
          >
            <div>
              {/* Digit 04 & Top Status */}
              <div className="flex items-center justify-between mb-2">
                <span
                  className="text-5xl sm:text-6xl font-black tracking-tighter select-none text-slate-900"
                >
                  04
                </span>
                <div className="w-9 h-9 rounded-xl flex items-center justify-center bg-amber-50 border border-amber-100 text-amber-500 group-hover:scale-105 transition-transform" aria-label="Automated response">
                  <Zap className="w-4 h-4" />
                </div>
              </div>

              {/* Yellow Lightning Icon Badge matching Screenshot 99 */}
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 shadow-xs bg-amber-50 border border-amber-200 text-amber-500"
              >
                <Zap className="w-6 h-6 stroke-[2]" />
              </div>

              {/* Subheader */}
              <div
                className="text-xs font-black tracking-wider uppercase mb-4 text-[#0d2a4a]"
              >
                RAPID RESPONSE
              </div>

              {/* Inner Soft Peach Card UI matching Screenshot 99 */}
              <div
                className="rounded-2xl p-4 border mb-6 text-left space-y-2.5 bg-[#fdf6f0] border-amber-100 text-slate-900"
              >
                {/* 3 Pills Stacked matching Screenshot 99 */}
                <div className="space-y-1 text-center">
                  <div className="py-1 px-3 rounded-lg text-[10px] font-black tracking-wider text-white bg-[#dc2626]">
                    CRITICAL (P0)
                  </div>
                  <div className="py-1 px-3 rounded-lg text-[10px] font-black tracking-wider text-white bg-[#eab308]">
                    HIGH (P1)
                  </div>
                  <div className="py-1 px-3 rounded-lg text-[10px] font-black tracking-wider text-white bg-[#2563eb]">
                    MEDIUM (P2)
                  </div>
                </div>

                {/* Actions Checklist with blue arrows */}
                <div
                  className="space-y-1.5 text-[11px] font-bold pt-1 text-slate-800"
                >
                  <div className="flex items-center gap-1.5">
                    <span className="text-cyan-400 font-bold">→</span> Isolate Endpoint
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-cyan-400 font-bold">→</span> Block Malicious IP
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-cyan-400 font-bold">→</span> Suspend Compromised User
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-cyan-400 font-bold">→</span> Raise High-Priority Ticket
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-cyan-400 font-bold">→</span> Patch or fix exposure
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Caption matching Screenshot 99 */}
            <div className="pt-2 border-t border-slate-100">
              <h3
                className="text-sm font-black tracking-tight uppercase mb-1 text-slate-950"
              >
                AUTOMATED RESPONSE
              </h3>
              <p
                className="text-xs leading-relaxed font-normal text-slate-600"
              >
                Take automated, policy-approved containment actions to eliminate exposure immediately.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

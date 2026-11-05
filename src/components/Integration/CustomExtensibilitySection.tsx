import React from 'react';
import { ArrowRight, Terminal, Code2 } from 'lucide-react';

interface CustomExtensibilitySectionProps {
  onRequestDocs: () => void;
}

export const CustomExtensibilitySection: React.FC<CustomExtensibilitySectionProps> = ({ onRequestDocs }) => {
  return (
    <section className="relative py-20 sm:py-24 bg-[#030914] text-white overflow-hidden border-t border-slate-900">
      {/* Background Subtle Cyber Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Pill Badge matching Screenshot 182515 */}
        <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/80 text-[11px] sm:text-xs font-semibold tracking-wider text-slate-300 uppercase mb-8 shadow-sm">
          <span>CUSTOM EXTENSIBILITY</span>
        </div>

        {/* Heading */}
        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-6 uppercase break-words">
          HAVE A PROPRIETARY IN-HOUSE TOOL OR CUSTOM SIEM?
        </h2>

        {/* Description */}
        <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed mb-10 font-normal">
          SecGenie AI offers a fully documented Webhook and REST API ingestion gateway. Ingest arbitrary JSON logs and custom telemetry schemas in minutes.
        </p>

        {/* Button matching Screenshot 182515 */}
        <div>
          <button
            onClick={onRequestDocs}
            className="inline-flex w-full max-w-sm items-center justify-center gap-2 rounded-full bg-white px-5 py-3.5 text-center text-sm font-bold text-slate-950 shadow-xl transition-all hover:bg-slate-100 sm:w-auto sm:max-w-none sm:px-8 group"
          >
            <span>Request Custom Connector Documentation</span>
            <ArrowRight className="h-4 w-4 shrink-0 text-slate-900 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-blue-600 via-cyan-300 to-blue-600 shadow-[0_-4px_24px_rgba(34,211,238,0.28)]" />
    </section>
  );
};

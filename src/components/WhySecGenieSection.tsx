import React from "react";
import {
  ArrowRight,
  Check,
  LockKeyhole,
  Server,
  ShieldCheck,
} from "lucide-react";

const comparison = [
  {
    area: "Primary focus",
    traditional: "Collects and searches security events across tools",
    secgenie: "Connects event context with asset exposure and business risk",
  },
  {
    area: "Threat exposure",
    traditional: "Often relies on separate vulnerability and asset workflows",
    secgenie:
      "Supports continuous threat exposure management and attack-path analysis",
  },
  {
    area: "Alert handling",
    traditional: "Analysts correlate signals and enrich alerts across consoles",
    secgenie: "AI-assisted enrichment and triage can support analyst workflows",
  },
  {
    area: "How it fits",
    traditional: "May be the central system for monitoring and investigation",
    secgenie: "Designed to complement your existing SIEM and EDR investments",
  },
];

export const WhySecGenieSection: React.FC = () => (
  <section className="bg-[#030914] py-20 text-white sm:py-24">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <header className="mx-auto mb-12 max-w-3xl text-center">
        <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-cyan-300">
          A complementary approach
        </p>
        <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
          Why SecGenie vs. Traditional SOC Tools
        </h2>
        <p className="mt-5 text-sm leading-relaxed text-slate-300 sm:text-base">
          Keep the SIEM and EDR tools your team relies on, while connecting
          alert workflows with continuous exposure and attack-path context.
        </p>
      </header>

      <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl border border-slate-700 bg-slate-950/70">
        <div className="grid grid-cols-2 border-b border-slate-700 bg-slate-900/80 text-xs font-bold uppercase tracking-wide sm:grid-cols-3 sm:text-sm">
          <div className="hidden p-3 text-slate-400 sm:block sm:p-5">
            Capability
          </div>
          <div className="p-3 text-slate-300 sm:p-5">Traditional SOC tools</div>
          <div className="p-3 text-cyan-200 sm:p-5">SecGenie approach</div>
        </div>
        {comparison.map((row) => (
          <div
            key={row.area}
            className="grid grid-cols-2 border-b border-slate-800 last:border-b-0 sm:grid-cols-3"
          >
            <h3 className="col-span-2 p-3 text-xs font-bold text-white sm:col-span-1 sm:p-5 sm:text-sm">
              {row.area}
            </h3>
            <p className="p-3 text-xs leading-relaxed text-slate-400 sm:p-5 sm:text-sm">
              {row.traditional}
            </p>
            <p className="flex gap-2 p-3 text-xs leading-relaxed text-slate-200 sm:p-5 sm:text-sm">
              <Check
                aria-hidden="true"
                className="mt-0.5 h-4 w-4 shrink-0 text-cyan-300"
              />
              {row.secgenie}
            </p>
          </div>
        ))}
      </div>

      <p className="mx-auto mt-5 max-w-5xl text-sm leading-relaxed text-slate-400">
        SecGenie complements existing tools; it is not a claim that traditional
        SOC platforms are obsolete.
      </p>

      <section
        aria-labelledby="security-transparency-heading"
        className="mx-auto mt-20 max-w-6xl"
      >
        <header className="mb-8 max-w-3xl">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-cyan-300">
            Technical trust
          </p>
          <h2
            id="security-transparency-heading"
            className="text-2xl font-extrabold tracking-tight sm:text-3xl"
          >
            Security, privacy, and deployment transparency
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-300">
            We avoid implying certifications or compliance attestations without
            documentation. Ask the team for current assurance materials and
            details applicable to your evaluation.
          </p>
        </header>
        <div className="grid gap-4 md:grid-cols-3">
          <article className="rounded-2xl border border-slate-700 bg-slate-900/60 p-5">
            <ShieldCheck
              aria-hidden="true"
              className="mb-4 h-6 w-6 text-cyan-300"
            />
            <h3 className="font-bold text-white">
              Certifications &amp; compliance
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-400">
              Request current certifications, audit reports, and compliance
              scope from the SecGenie team. No certification is claimed on this
              page.
            </p>
          </article>
          <article className="rounded-2xl border border-slate-700 bg-slate-900/60 p-5">
            <LockKeyhole
              aria-hidden="true"
              className="mb-4 h-6 w-6 text-cyan-300"
            />
            <h3 className="font-bold text-white">Data privacy</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-400">
              In this website’s full-AI demo, chat messages are sent to its
              configured Gemini service; the API key stays server-side. The
              static demo uses local topic answers. Avoid entering sensitive
              data.
            </p>
          </article>
          <article className="rounded-2xl border border-slate-700 bg-slate-900/60 p-5">
            <Server aria-hidden="true" className="mb-4 h-6 w-6 text-cyan-300" />
            <h3 className="font-bold text-white">Deployment options</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-400">
              This website can be served as static assets; full generative chat
              uses a Node.js API. Contact the team to confirm SecGenie product
              deployment, residency, and retention options.
            </p>
          </article>
        </div>
        <a
          href="mailto:info@secgenie.ai?subject=Security%20and%20deployment%20information"
          className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-cyan-300 transition-colors hover:text-white"
        >
          Request security and deployment information{" "}
          <ArrowRight aria-hidden="true" className="h-4 w-4" />
        </a>
      </section>
    </div>
  </section>
);

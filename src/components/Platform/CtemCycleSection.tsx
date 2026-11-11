import React from "react";
import {
  Activity,
  Cloud,
  Network,
  PanelsTopLeft,
  Search,
  ShieldCheck,
  Target,
  Workflow,
} from "lucide-react";

const environments = [
  { name: "Cloud infrastructure", icon: Cloud },
  { name: "Enterprise networks", icon: Network },
  { name: "Applications & identities", icon: PanelsTopLeft },
  { name: "Hybrid environments", icon: Workflow },
];

const ctemStages = [
  {
    name: "Discover",
    description: "Identify assets, exposures, and weak points continuously",
    icon: Search,
  },
  {
    name: "Prioritise",
    description: "Focus on risks that impact critical systems",
    icon: Target,
  },
  {
    name: "Validate",
    description: "Confirm what matters using context and correlation",
    icon: ShieldCheck,
  },
  {
    name: "Mobilise",
    description: "Drive action across teams for faster response",
    icon: Workflow,
  },
  {
    name: "Measure",
    description: "Track risk reduction and remediation progress",
    icon: Activity,
  },
];

export const CtemCycleSection: React.FC = () => (
  <section
    id="ctem-cycle"
    className="relative overflow-hidden bg-[#030914] py-24 pb-32 text-white"
  >
    <div
      aria-hidden="true"
      className="pointer-events-none absolute left-1/3 top-1/2 h-[450px] w-[750px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-600/10 blur-3xl"
    />
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-b from-transparent to-[#020713]"
    />

    <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <header className="mx-auto mb-16 max-w-4xl text-center">
        <p className="mb-5 inline-flex rounded-full border border-cyan-800/60 bg-cyan-950/80 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-cyan-300 shadow-inner">
          Exposure management as a living system
        </p>
        <h2 className="mb-6 text-3xl font-extrabold tracking-tight text-slate-200 sm:text-5xl">
          From Periodic Scans to Continuous Intelligence
        </h2>
        <p className="mx-auto max-w-3xl text-sm font-normal leading-relaxed text-slate-300 sm:text-base">
          Traditional vulnerability management is static and fragmented. CTEM
          introduces a continuous cycle that evolves with your environment.
        </p>
      </header>

      <section
        aria-labelledby="ctem-cycle-heading"
        className="mx-auto mb-16 max-w-6xl"
      >
        <h3
          id="ctem-cycle-heading"
          className="mb-3 text-center text-2xl font-bold text-white"
        >
          The CTEM Cycle
        </h3>
        <p className="text-center text-sm text-slate-400">
          Automating the CTEM lifecycle
        </p>
        <ol className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {ctemStages.map(({ name, description, icon: Icon }, index) => (
            <li
              key={name}
              className="relative rounded-2xl border border-slate-800 bg-slate-950/60 p-5"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-300">
                <Icon aria-hidden="true" className="h-5 w-5" />
              </div>
              <p className="mb-2 text-base font-bold text-white">{name}</p>
              <p className="text-sm leading-relaxed text-slate-400">
                {description}
              </p>
              {index < ctemStages.length - 1 && (
                <span
                  aria-hidden="true"
                  className="absolute -right-3 top-1/2 z-10 hidden h-px w-2 bg-cyan-500/60 lg:block"
                />
              )}
            </li>
          ))}
        </ol>
      </section>

      <section
        aria-labelledby="ctem-intelligence-heading"
        className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2"
      >
        <div className="rounded-3xl border border-slate-800 bg-slate-950/45 p-6 sm:p-8">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-cyan-300">
            Not all vulnerabilities represent real risk in cybersecurity
            services
          </p>
          <h3
            id="ctem-intelligence-heading"
            className="mb-5 text-2xl font-bold text-white"
          >
            Continuous Exposure Intelligence in Practice
          </h3>
          <p className="text-sm leading-relaxed text-slate-300">
            SecGenie AI CTEM helps teams bring together vulnerabilities,
            misconfigurations, security gaps, and operational context into one
            clearer picture of exposure. Instead of reviewing risk in isolation,
            teams can understand how weaknesses relate to assets, identities,
            controls, and broader attack surface conditions.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-slate-300">
            This allows teams to reduce time spent on low-priority remediation,
            focus effort where it matters most, and build a more disciplined
            approach to exposure management over time.
          </p>
        </div>

        <div className="rounded-3xl border border-slate-800 bg-slate-950/45 p-6 sm:p-8">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-cyan-300">
            Across cloud, network, and hybrid infrastructure
          </p>
          <h3 className="mb-5 text-2xl font-bold text-white">
            Built for Modern Environments
          </h3>
          <p className="mb-5 text-sm leading-relaxed text-slate-300">
            SecGenie AI CTEM provides visibility across complex environments,
            enabling cybersecurity organizations to manage exposure across:
          </p>
          <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {environments.map(({ name, icon: Icon }) => (
              <li
                key={name}
                className="flex h-[54px] sm:h-[56px] items-center gap-3 rounded-xl border border-slate-700/80 bg-slate-900/80 px-3.5 sm:px-4 text-xs sm:text-[13px] md:text-sm font-medium text-slate-200 transition-colors hover:border-slate-600 shadow-xs"
              >
                <Icon
                  aria-hidden="true"
                  className="h-5 w-5 shrink-0 text-cyan-300"
                />
                <span className="truncate whitespace-nowrap">{name}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

    </div>

    <div
      aria-hidden="true"
      className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-blue-600 via-cyan-300 to-blue-600 shadow-[0_-4px_24px_rgba(34,211,238,0.3)]"
    />
  </section>
);

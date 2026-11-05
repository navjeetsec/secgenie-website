import React, { useState } from "react";

interface ConnectorItem {
  id: string;
  name: string;
  category:
    | "SIEM"
    | "EDR & XDR"
    | "Cloud Security"
    | "Identity & IAM"
    | "Vulnerability & Posture"
    | "ITSM & Ticketing";
  logoType:
    | "splunk"
    | "ms"
    | "elastic"
    | "google"
    | "crowdstrike"
    | "sentinelone"
    | "defender"
    | "paloalto"
    | "aws"
    | "azure"
    | "gcp"
    | "wiz"
    | "okta"
    | "entra"
    | "qualys"
    | "servicenow";
  badge: string;
  telemetryPills: string[];
}

export const IntegrationCatalogSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = [
    "All",
    "SIEM",
    "EDR & XDR",
    "Cloud Security",
    "Identity & IAM",
    "Vulnerability & Posture",
    "ITSM & Ticketing",
  ];

  const categoryLogos: Partial<
    Record<(typeof categories)[number], ConnectorItem["logoType"]>
  > = {
    SIEM: "splunk",
    "EDR & XDR": "crowdstrike",
    "Cloud Security": "aws",
    "Identity & IAM": "okta",
    "Vulnerability & Posture": "qualys",
    "ITSM & Ticketing": "servicenow",
  };

  // 16 Enterprise Connectors formatted for a practical, compact 4x4 inline grid
  const allConnectors: ConnectorItem[] = [
    // ROW 1: SIEM & Log Telemetry
    {
      id: "splunk",
      name: "Splunk Enterprise & Cloud",
      category: "SIEM",
      logoType: "splunk",
      badge: "SIEM",
      telemetryPills: ["Event Ingestion", "Incident Alerts"],
    },
    {
      id: "sentinel",
      name: "Microsoft Sentinel",
      category: "SIEM",
      logoType: "ms",
      badge: "SIEM",
      telemetryPills: ["Azure Activity", "KQL Telemetry"],
    },
    {
      id: "elastic",
      name: "Elastic Security",
      category: "SIEM",
      logoType: "elastic",
      badge: "SIEM",
      telemetryPills: ["Beats Telemetry", "Audit Logs"],
    },
    {
      id: "google-secops",
      name: "Google SecOps (Chronicle)",
      category: "SIEM",
      logoType: "google",
      badge: "SIEM",
      telemetryPills: ["Chronicle UDM", "Cloud Audit"],
    },

    // ROW 2: EDR & XDR Platforms
    {
      id: "crowdstrike",
      name: "CrowdStrike Falcon",
      category: "EDR & XDR",
      logoType: "crowdstrike",
      badge: "EDR & XDR",
      telemetryPills: ["Process Trees", "Host Isolation"],
    },
    {
      id: "sentinelone",
      name: "SentinelOne Singularity",
      category: "EDR & XDR",
      logoType: "sentinelone",
      badge: "EDR & XDR",
      telemetryPills: ["Storylines", "Quarantine API"],
    },
    {
      id: "defender-endpoint",
      name: "Microsoft Defender XDR",
      category: "EDR & XDR",
      logoType: "defender",
      badge: "EDR & XDR",
      telemetryPills: ["Device Alerts", "Live Response"],
    },
    {
      id: "cortex-xdr",
      name: "Palo Alto Cortex XDR",
      category: "EDR & XDR",
      logoType: "paloalto",
      badge: "EDR & XDR",
      telemetryPills: ["Traps Network", "Incident Dispatch"],
    },

    // ROW 3: Cloud Infrastructure & Posture
    {
      id: "aws-security",
      name: "Amazon Web Services (AWS)",
      category: "Cloud Security",
      logoType: "aws",
      badge: "CLOUD",
      telemetryPills: ["GuardDuty", "Security Hub"],
    },
    {
      id: "azure-cloud",
      name: "Microsoft Azure Security",
      category: "Cloud Security",
      logoType: "azure",
      badge: "CLOUD",
      telemetryPills: ["Defender for Cloud", "NSG Flow"],
    },
    {
      id: "gcp-cloud",
      name: "Google Cloud Platform (GCP)",
      category: "Cloud Security",
      logoType: "gcp",
      badge: "CLOUD",
      telemetryPills: ["Security Command", "IAM Roles"],
    },
    {
      id: "wiz-cloud",
      name: "Wiz Cloud Security",
      category: "Cloud Security",
      logoType: "wiz",
      badge: "CNAPP",
      telemetryPills: ["Exposure Graph", "Toxic Combos"],
    },

    // ROW 4: Identity, Vulnerability & ITSM Ticketing
    {
      id: "okta-identity",
      name: "Okta Workforce Identity",
      category: "Identity & IAM",
      logoType: "okta",
      badge: "IDENTITY",
      telemetryPills: ["User Suspension", "Auth Logs"],
    },
    {
      id: "entra-id",
      name: "Microsoft Entra ID",
      category: "Identity & IAM",
      logoType: "entra",
      badge: "IDENTITY",
      telemetryPills: ["Sign-in Risk", "PIM Escalations"],
    },
    {
      id: "qualys-vmdr",
      name: "Qualys VMDR Posture",
      category: "Vulnerability & Posture",
      logoType: "qualys",
      badge: "VULNERABILITY",
      telemetryPills: ["CVE Exploits", "Patch Telemetry"],
    },
    {
      id: "servicenow",
      name: "ServiceNow SecOps SIR",
      category: "ITSM & Ticketing",
      logoType: "servicenow",
      badge: "ITSM",
      telemetryPills: ["Incident SIR", "Automated Playbook"],
    },
  ];

  const filtered = allConnectors.filter(
    (connector) =>
      selectedCategory === "All" || connector.category === selectedCategory,
  );

  const renderLogo = (
    type: ConnectorItem["logoType"],
    compact = false,
  ) => {
    const marks: Record<ConnectorItem["logoType"], React.ReactNode> = {
      splunk: (
        <g fill="currentColor">
          <circle cx="12" cy="12" r="3" />
          <circle cx="5" cy="5" r="2" />
          <circle cx="19" cy="5" r="2" />
          <circle cx="5" cy="19" r="2" />
          <circle cx="19" cy="19" r="2" />
          <path
            d="M7 6.5 10 10M17 6.5 14 10M7 17.5 10 14M17 17.5 14 14"
            stroke="currentColor"
            strokeWidth="2"
          />
        </g>
      ),
      ms: (
        <g>
          <path fill="#f25022" d="M2 2h9v9H2z" />
          <path fill="#7fba00" d="M13 2h9v9h-9z" />
          <path fill="#00a4ef" d="M2 13h9v9H2z" />
          <path fill="#ffb900" d="M13 13h9v9h-9z" />
        </g>
      ),
      elastic: (
        <g
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
        >
          <path d="M5 7h14M5 17h14M8 7l4 5-4 5M16 7l-4 5 4 5" />
        </g>
      ),
      google: (
        <g fill="none" strokeWidth="3.5" strokeLinecap="round">
          <path d="M18.5 7.5A8 8 0 1 0 20 12h-7" stroke="#4285f4" />
          <path d="M5.2 7.2A8 8 0 0 1 18.5 7.5" stroke="#ea4335" />
          <path d="M5.2 16.8A8 8 0 0 1 3.8 12" stroke="#34a853" />
          <path d="M3.8 12a8 8 0 0 1 1.4-4.8" stroke="#fbbc05" />
        </g>
      ),
      crowdstrike: (
        <g fill="currentColor">
          <path d="M12 2 9.3 8.4 3 6l3.3 6L2 16l7-.8L12 22l3-6.8 7 .8-4.3-4L21 6l-6.3 2.4L12 2Z" />
          <path
            d="m12 6-1.2 5.2L7 12l4 1.1L12 18l1-4.9 4-1.1-3.8-.8L12 6Z"
            fill="white"
          />
        </g>
      ),
      sentinelone: (
        <path
          fill="currentColor"
          d="M12 1.5 14.7 8l6.8-1.8-4.1 5.8 4.1 5.8-6.8-1.8L12 22.5 9.3 16l-6.8 1.8 4.1-5.8-4.1-5.8L9.3 8 12 1.5Z"
        />
      ),
      defender: (
        <path
          d="M12 2 20 5v6c0 5-3.4 9-8 11-4.6-2-8-6-8-11V5l8-3Z"
          fill="currentColor"
        />
      ),
      paloalto: (
        <g fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M12 2 21 7v10l-9 5-9-5V7l9-5Z" />
          <path
            d="m7 14 5-7 5 7M9 12h6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      ),
      aws: (
        <g
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
        >
          <path d="M5 8.5 12 4l7 4.5v7L12 20l-7-4.5v-7Z" />
          <path d="M8 13.5h8M10 10.5h4" />
          <path d="M8 21c4 2 9 1.5 12-1" stroke="#ff9900" />
        </g>
      ),
      azure: (
        <g fill="currentColor">
          <path d="M12 2 3 19h6l6-11-3-6Z" />
          <path d="m13 13-3 6h12l-6-6h-3Z" opacity=".7" />
        </g>
      ),
      gcp: (
        <g fill="none" strokeWidth="3.5" strokeLinecap="round">
          <path
            d="M7 18h10a4 4 0 0 0 0-8 5 5 0 0 0-9-1 4.5 4.5 0 0 0-1 9Z"
            stroke="#4285f4"
          />
          <path d="M8 9a5 5 0 0 1 9 1" stroke="#34a853" />
          <path d="M7 18h4" stroke="#fbbc05" />
          <path d="M17 10a4 4 0 0 1 0 8" stroke="#ea4335" />
        </g>
      ),
      wiz: (
        <path
          d="m3 6 3.2 12h3.1L12 11l2.7 7h3.1L21 6h-3l-1.8 7.1L13.5 6h-3l-2.7 7.1L6 6H3Z"
          fill="currentColor"
        />
      ),
      okta: (
        <g fill="none" stroke="currentColor" strokeWidth="3.5">
          <circle cx="12" cy="12" r="8" />
          <circle cx="12" cy="12" r="2" fill="currentColor" stroke="none" />
        </g>
      ),
      entra: (
        <g fill="currentColor">
          <path d="M12 2 21 7v10l-9 5-9-5V7l9-5Z" opacity=".25" />
          <path d="m12 5 6 3.5v7L12 19l-6-3.5v-7L12 5Zm0 3.2-3.2 1.9v3.8l3.2 1.9 3.2-1.9v-3.8L12 8.2Z" />
        </g>
      ),
      qualys: (
        <g fill="none" stroke="currentColor" strokeWidth="3">
          <circle cx="11" cy="11" r="7" />
          <path d="m16 16 4 4" strokeLinecap="round" />
        </g>
      ),
      servicenow: (
        <g fill="currentColor">
          <path d="M5 16.5a4 4 0 0 1 1.3-7.8 6 6 0 0 1 11.4 1A3.5 3.5 0 1 1 18 17H6a4 4 0 0 1-1-.5Z" />
          <path
            d="M8 13h8"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </g>
      ),
    };
    const colors: Record<ConnectorItem["logoType"], string> = {
      splunk: "text-[#65a637] bg-[#f3f8ed]",
      ms: "bg-white",
      elastic: "text-[#00a9a5] bg-[#e8f8f6]",
      google: "bg-white",
      crowdstrike: "text-[#e31e24] bg-[#fff0f0]",
      sentinelone: "text-[#ef4b35] bg-[#fff1ec]",
      defender: "text-[#0078d4] bg-[#eaf5ff]",
      paloalto: "text-[#fa582d] bg-[#fff1eb]",
      aws: "text-[#232f3e] bg-[#fff7e6]",
      azure: "text-[#0078d4] bg-[#eaf5ff]",
      gcp: "bg-white",
      wiz: "text-[#6c4eff] bg-[#f1efff]",
      okta: "text-[#007dc1] bg-[#eaf6fc]",
      entra: "text-[#6264a7] bg-[#f1f0ff]",
      qualys: "text-[#ed1c24] bg-[#fff0f0]",
      servicenow: "text-[#36a833] bg-[#effaee]",
    };

    return (
      <span
        className={`relative flex shrink-0 items-center justify-center ${compact ? "h-6 w-6 rounded-md border border-white/90 shadow-[0_2px_0_rgba(148,163,184,0.35),0_3px_6px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.9)]" : "h-12 w-12 rounded-xl border border-white/90 shadow-[0_4px_0_rgba(148,163,184,0.4),0_8px_16px_rgba(0,0,0,0.24),inset_0_1px_0_rgba(255,255,255,0.9)] transition-transform duration-200 group-hover:-translate-y-0.5 after:absolute after:inset-x-2 after:top-[2px] after:h-px after:bg-white/80"} ${colors[type]}`}
      >
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          className={`${compact ? "h-4 w-4" : "h-6 w-6 drop-shadow-[0_1px_1px_rgba(15,23,42,0.28)]"}`}
        >
          {marks[type]}
        </svg>
        <span className="sr-only">{type} logo</span>
      </span>
    );
  };

  return (
    <section className="relative overflow-hidden bg-slate-950 py-20 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(8,145,178,0.12),transparent_55%)]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative mb-10 flex flex-col gap-7">
          <div className="max-w-3xl">
            <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-cyan-300">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
              Built for your security stack
            </span>
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              One platform. Your tools.
            </h2>
            <p className="mt-3 max-w-4xl text-sm leading-relaxed text-slate-300 sm:text-base">
              Connect the security products you already use and bring their
              signals into a clearer, <span className="whitespace-nowrap">coordinated workflow.</span>
            </p>
          </div>

          <div className="rounded-2xl border border-white/[0.08] bg-slate-900/55 p-4 shadow-lg shadow-black/10 backdrop-blur-xl sm:p-5">
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-400">
              Filter by category
            </p>
            <div
              className="no-scrollbar flex flex-nowrap gap-2 overflow-x-auto"
              role="group"
              aria-label="Filter integrations by category"
            >
              {categories.map((cat) => {
                const isActive = selectedCategory === cat;
                const categoryLogo = categoryLogos[cat];
                const count =
                  cat === "All"
                    ? allConnectors.length
                    : allConnectors.filter(
                        (connector) => connector.category === cat,
                      ).length;
                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setSelectedCategory(cat)}
                    aria-pressed={isActive}
                    className={`inline-flex shrink-0 items-center gap-2 rounded-lg border px-3 py-2 text-xs font-semibold transition-colors sm:text-sm ${
                      isActive
                        ? "border-cyan-300/40 bg-cyan-300/10 text-cyan-100 shadow-[inset_0_0_0_1px_rgba(103,232,249,0.06)]"
                        : "border-transparent bg-white/[0.035] text-slate-300 hover:border-white/10 hover:bg-white/[0.07] hover:text-white"
                    }`}
                  >
                      {categoryLogo && renderLogo(categoryLogo, true)}
                      {cat}
                    <span
                      className={`min-w-5 rounded-md px-1.5 py-0.5 text-center text-[10px] leading-none ${
                        isActive
                          ? "bg-cyan-200/15 text-cyan-100"
                          : "bg-slate-950/60 text-slate-500"
                      }`}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <div className="relative mb-5 flex items-end justify-between gap-3 border-b border-white/[0.08] pb-3">
          <h3 className="text-base font-bold tracking-tight text-white sm:text-lg">
            {selectedCategory === "All"
              ? "Explore integrations"
              : selectedCategory}
          </h3>
          <span className="text-xs font-medium text-slate-400">
            Showing <span className="text-slate-200">{filtered.length}</span>
          </span>
        </div>

        <div
          className={`relative grid grid-cols-1 gap-4 ${
            selectedCategory === "Vulnerability & Posture"
              ? "mx-auto max-w-sm"
              : "sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          }`}
          aria-label="Integration cards"
        >
          {filtered.map((item) => (
            <article
              key={item.id}
              className="group relative flex min-h-[190px] w-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-5 shadow-[0_8px_32px_rgba(2,8,23,0.18)] backdrop-blur-xl transition-colors duration-300 hover:border-cyan-300/35 hover:bg-white/[0.07] hover:shadow-[0_16px_40px_rgba(6,182,212,0.1)]"
            >
              <div className="pointer-events-none absolute -right-10 -top-12 h-32 w-32 rounded-full bg-cyan-400/0 blur-3xl transition-colors duration-300 group-hover:bg-cyan-400/10" />
              <div className="relative flex items-start justify-between gap-3">
                {renderLogo(item.logoType)}
                <span className="max-w-[65%] rounded-full border border-cyan-300/15 bg-cyan-300/[0.08] px-2.5 py-1 text-right text-[9px] font-bold uppercase leading-relaxed tracking-[0.12em] text-cyan-200">
                  {item.category}
                </span>
              </div>
              <div className="relative mt-5 min-w-0">
                <h4 className="line-clamp-2 text-sm font-bold leading-snug text-white transition-colors group-hover:text-cyan-100 sm:text-base">
                  {item.name}
                </h4>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {item.telemetryPills.slice(0, 2).map((pill) => (
                    <span
                      key={pill}
                      className="rounded-md border border-cyan-300/15 bg-cyan-400/10 px-2 py-1 text-[10px] font-medium leading-tight text-cyan-100"
                    >
                      {pill}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
          {filtered.length === 0 && (
            <div className="col-span-full rounded-2xl border border-dashed border-slate-700 bg-slate-900/60 px-6 py-14 text-center">
              <p className="mt-3 text-sm font-semibold text-white">
                No integrations found
              </p>
              <p className="mt-1 text-sm text-slate-400">
                Choose another category to view available integrations.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

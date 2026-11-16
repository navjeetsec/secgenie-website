import React, { useState } from "react";
import { Layers } from "lucide-react";

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

  const logoAssets: Record<ConnectorItem["logoType"], string> = {
    splunk: "/assets/integrations/splunk.png",
    ms: "/assets/integrations/sentinel.png",
    elastic: "/assets/integrations/elastic.png",
    google: "/assets/integrations/google-secops.png",
    crowdstrike: "/assets/integrations/crowdstrike.png",
    sentinelone: "/assets/integrations/sentinelone.png",
    defender: "/assets/integrations/defender.png",
    paloalto: "/assets/integrations/cortex.png",
    aws: "/assets/integrations/aws.png",
    azure: "/assets/integrations/azure.png",
    gcp: "/assets/integrations/gcp.svg",
    wiz: "/assets/integrations/wiz.png",
    okta: "/assets/integrations/okta.png",
    entra: "/assets/integrations/entra.png",
    qualys: "/assets/integrations/qualys.png",
    servicenow: "/assets/integrations/servicenow.png",
  };

  const renderLogo = (type: ConnectorItem["logoType"], compact = false) => {
    const iconSrc = logoAssets[type];

    return (
      <span
        className={`relative flex shrink-0 items-center justify-center bg-white ${
          compact
            ? "h-5 w-5 rounded-md border border-slate-200/90 shadow-[0_1px_2px_rgba(0,0,0,0.1)] p-0.5"
            : "h-12 w-12 rounded-xl border border-white/90 shadow-[0_4px_12px_rgba(0,0,0,0.25)] transition-transform duration-200 group-hover:-translate-y-0.5 p-2"
        }`}
      >
        <img
          src={iconSrc}
          alt=""
          className="h-full w-full object-contain"
          loading="lazy"
        />
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
              Your tools, unified in one platform
            </h2>
            <p className="mt-3 max-w-4xl text-sm leading-relaxed text-slate-300 sm:text-base">
              Connect the security products you already use and bring their
              signals into a clearer,{" "}
              <span className="whitespace-nowrap">coordinated workflow.</span>
            </p>
          </div>

          <div className="rounded-2xl border border-white/[0.08] bg-slate-900/55 p-3 sm:p-4 shadow-lg shadow-black/10 backdrop-blur-xl">
            <p className="mb-2.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-400">
              Filter by category
            </p>
            <div
              className="no-scrollbar flex flex-nowrap items-center justify-between gap-1.5 sm:gap-2 w-full overflow-x-auto py-0.5"
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
                    className={`inline-flex shrink-0 items-center justify-center gap-1.5 sm:gap-2 rounded-lg border px-2 sm:px-2.5 md:px-3 py-1.5 sm:py-2 text-[11px] sm:text-xs md:text-[13px] font-semibold transition-all whitespace-nowrap ${
                      isActive
                        ? "border-cyan-300/40 bg-cyan-300/10 text-cyan-100 shadow-[inset_0_0_0_1px_rgba(103,232,249,0.06)]"
                        : "border-transparent bg-white/[0.035] text-slate-300 hover:border-white/10 hover:bg-white/[0.07] hover:text-white"
                    }`}
                  >
                    {categoryLogo ? (
                      renderLogo(categoryLogo, true)
                    ) : (
                      <span className="relative flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-cyan-400/30 bg-cyan-950/70 text-cyan-300 shadow-[0_2px_0_rgba(148,163,184,0.35),0_3px_6px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.9)]">
                        <Layers className="h-3.5 w-3.5 text-cyan-300" />
                      </span>
                    )}
                    <span>{cat}</span>
                    <span
                      className={`min-w-4 rounded px-1.5 py-0.5 text-center text-[10px] leading-none shrink-0 ${
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
              className="group relative flex min-h-[190px] w-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-slate-900/70 p-5 transition-all duration-300 hover:border-cyan-300/35 hover:bg-slate-900/90 hover:shadow-[0_12px_30px_rgba(6,182,212,0.12)]"
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

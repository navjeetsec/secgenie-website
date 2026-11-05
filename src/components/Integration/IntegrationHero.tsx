import React from 'react';

export const IntegrationHero: React.FC = () => {
  return (
    <section className="relative flex min-h-[85vh] flex-col justify-center overflow-hidden bg-slate-950 text-white lg:min-h-[90vh]">
      <div className="pointer-events-none absolute inset-0 opacity-40 mix-blend-screen">
        <img
          src="/assets/integration-security-shield.jpg"
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover object-center"
          referrerPolicy="no-referrer"
        />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/75 via-slate-950/55 to-slate-950/80" />

      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center px-4 py-20 text-center sm:px-6 lg:px-8">
        <div className="mb-8 inline-flex items-center rounded-full border border-cyan-400/20 bg-slate-900/80 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-cyan-200 shadow-sm backdrop-blur-sm sm:text-xs">
          <span>UNIFIED CYBER FABRIC</span>
        </div>

        <h1 className="mb-5 text-3xl font-extrabold leading-[1.15] tracking-tight text-white sm:text-4xl md:text-5xl max-w-4xl mx-auto">
          Seamless Stack
          <span> Integration</span>
          <span className="mt-1 block bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 bg-clip-text text-transparent">
            Ecosystem
          </span>
        </h1>
        <p className="max-w-3xl text-base font-normal leading-relaxed text-slate-200 sm:text-lg">
          SecGenie AI integrates with your existing security stack, leveraging the tools you already have in place. It ingests signals and coordinates actions across your enterprise security ecosystem through native APIs that work in both directions.
        </p>
      </div>
    </section>
  );
};

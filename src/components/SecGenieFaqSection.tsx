import React, { useState } from 'react';
import { ChevronDown, ShieldCheck, Sparkles } from 'lucide-react';

const faqs = [
  {
    question: 'What is a CTEM platform?',
    answer: 'A Continuous Threat Exposure Management (CTEM) platform helps teams discover assets and exposures, prioritize what matters, validate risk, mobilize remediation, and measure progress as the environment changes.',
  },
  {
    question: 'How is threat exposure management different from vulnerability scanning?',
    answer: 'Vulnerability scanning identifies known weaknesses. Threat exposure management adds context such as asset importance, reachability, and relationships between systems to help teams prioritize remediation beyond a list of CVEs.',
  },
  {
    question: 'What does attack path analysis show?',
    answer: 'Attack path analysis models how weaknesses, identities, and reachable assets may connect to critical systems. It helps security teams investigate plausible routes and focus on exposures with meaningful impact.',
  },
  {
    question: 'Does an AI SOC platform replace our SIEM or EDR?',
    answer: 'SecGenie is designed to work alongside existing security tools rather than require their replacement. Confirm supported integrations and deployment requirements with the SecGenie team for your environment.',
  },
  {
    question: 'How does cyber security automation keep analysts involved?',
    answer: 'Automation can assist with enrichment, alert grouping, and triage. Teams should define review and approval requirements for response actions based on their operational and risk policies.',
  },
];

export const SecGenieFaqSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
  <section aria-labelledby="secgenie-faq-heading" className="bg-[#f4f8fc] px-4 py-20 text-slate-900 sm:px-6 sm:py-24 lg:px-8">
    <div className="mx-auto max-w-6xl">
      <header className="mb-10 text-center">
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-blue-700">Answers for security teams</p>
        <h2 id="secgenie-faq-heading" className="text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
          AI SOC Platform &amp; CTEM FAQs
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
          Clear answers about threat exposure management, attack path analysis, and cyber security automation.
        </p>
      </header>

      <div className="grid gap-5 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
        <div className="space-y-3" aria-label="Frequently asked questions">
          {faqs.map(({ question }, index) => {
            const isActive = activeIndex === index;

            return (
              <button
                key={question}
                type="button"
                aria-expanded={isActive}
                aria-controls="secgenie-faq-answer"
                onClick={() => setActiveIndex(isActive ? null : index)}
                className={`group flex w-full items-center gap-4 rounded-2xl border px-5 py-5 text-left shadow-sm transition-all sm:px-6 ${
                  isActive
                    ? 'border-blue-200 bg-white shadow-md ring-1 ring-blue-100'
                    : 'border-slate-200 bg-white/70 hover:border-blue-200 hover:bg-white'
                }`}
              >
                <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-xs font-bold ${
                  isActive ? 'bg-blue-700 text-white' : 'bg-blue-50 text-blue-700'
                }`}>
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="flex-1 text-sm font-semibold leading-relaxed text-slate-900 sm:text-base">{question}</span>
                <ChevronDown
                  aria-hidden="true"
                  className={`h-5 w-5 shrink-0 text-slate-500 transition-transform md:-rotate-90 ${
                    isActive ? 'rotate-180 md:rotate-0' : ''
                  }`}
                />
              </button>
            );
          })}
        </div>

        <div
          id="secgenie-faq-answer"
          role="region"
          aria-live="polite"
          aria-label={activeIndex === null ? 'FAQ answer' : `Answer: ${faqs[activeIndex].question}`}
          className="flex min-h-56 flex-col justify-center rounded-2xl border border-blue-100 bg-white p-6 shadow-sm sm:p-8 md:min-h-full"
        >
          {activeIndex === null ? (
            <div className="flex flex-col items-center text-center">
              <div className="relative mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-blue-50">
                <div className="absolute inset-2 rounded-full border border-dashed border-blue-200" />
                <ShieldCheck aria-hidden="true" className="h-11 w-11 text-blue-700" strokeWidth={1.5} />
                <span className="absolute right-0 top-1 flex h-8 w-8 items-center justify-center rounded-full border-4 border-white bg-cyan-100 text-cyan-700">
                  <Sparkles aria-hidden="true" className="h-3.5 w-3.5" />
                </span>
              </div>
              <p className="mb-2 text-xs font-bold uppercase tracking-[0.16em] text-blue-700">Here to help</p>
              <h3 className="mb-2 text-xl font-bold text-slate-950">Your security questions, answered</h3>
              <p className="max-w-sm text-sm leading-relaxed text-slate-500">
                Choose a question from the list to explore clear, practical answers for your team.
              </p>
            </div>
          ) : (
            <>
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.16em] text-blue-700">
                Answer <span className="text-slate-300">/</span> {String(activeIndex + 1).padStart(2, '0')}
              </p>
              <h3 className="mb-4 text-xl font-bold leading-snug text-slate-950 sm:text-2xl">
                {faqs[activeIndex].question}
              </h3>
              <p className="text-sm leading-7 text-slate-600 sm:text-base">{faqs[activeIndex].answer}</p>
            </>
          )}
        </div>
      </div>
    </div>
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: faqs.map(({ question, answer }) => ({
            '@type': 'Question',
            name: question,
            acceptedAnswer: { '@type': 'Answer', text: answer },
          })),
        }),
      }}
    />
  </section>
  );
};

"use client";

import { IconShield, IconLock, IconDoc, IconCheck, IconClock } from "./icons";
import Reveal from "./Reveal";

const COMPLIANCE = [
  {
    icon: IconShield,
    title: "Data Protection Act (2019)",
    body: "We are registered as a Data Controller and Data Processor with the Office of the Data Protection Commissioner (ODPC) — a statutory prerequisite for our annual facility licensing.",
    chip: "ODPC Registered",
  },
  {
    icon: IconLock,
    title: "Encryption & RBAC",
    body: "All electronic records use AES-256 encryption at rest and TLS 1.3 in transit. Staff access health records strictly on a need-to-know basis via Role-Based Access Controls.",
    chip: "AES-256 · TLS 1.3",
  },
  {
    icon: IconDoc,
    title: "Digital Health Act",
    body: "We maintain your health records securely for at least 20 years — physical files in locked archive rooms with restricted access logs; digital records under continuous compliance audit.",
    chip: "20-year retention",
  },
];

const RIGHTS = [
  "Explicit written consent before any sensitive health data is collected or processed.",
  "Transparent privacy notices explaining purpose, storage limits and third-party disclosures.",
  "Personal data breach notification to ODPC within 72 hours — and affected patients without delay.",
  "Annual Data Protection Impact Assessments (DPIAs) to maintain full DPA compliance.",
];

export default function Privacy() {
  return (
    <section id="privacy" className="section relative">
      <div className="absolute inset-0 grid-pattern opacity-40 pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left — Heading + intro */}
          <div className="lg:col-span-5">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-xs font-semibold text-teal-700 uppercase tracking-wider">
              <IconShield className="w-3.5 h-3.5" /> Data Privacy
            </span>
            <h2 className="mt-4 font-display font-extrabold tracking-tight text-ink text-3xl sm:text-4xl lg:text-[2.75rem] leading-[1.1]">
              Your health story{" "}
              <span className="text-gradient">is yours alone.</span>
            </h2>
            <p className="mt-5 text-ink/70 text-base leading-relaxed">
              Patient health records are legally classified as sensitive personal data
              under Kenyan law. We treat that responsibility with the seriousness it
              deserves — implementing full Data Protection Act (2019) and Digital Health
              Act compliance across every paper file, digital record and intake interaction.
            </p>
            <p className="mt-4 text-ink/70 text-base leading-relaxed">
              Under Section 44 of the Data Protection Act, your medical history,
              laboratory results and clinical notes can only be processed with explicit,
              informed written consent — and our compliance framework is audited annually
              to ensure that promise is kept.
            </p>

            <div className="mt-6 glass-card glass rounded-3xl p-5 flex items-center gap-3">
              <div className="flex items-center justify-center w-11 h-11 rounded-2xl bg-teal-500/10 text-teal-700 shrink-0">
                <IconClock className="w-5 h-5" />
              </div>
              <p className="text-xs text-ink/70 leading-snug">
                <span className="font-semibold text-ink">Records retained 20 years.</span>{" "}
                Physical appointment cards, lab registers and consultation logs are stored
                in locked archives with restricted access controls.
              </p>
            </div>
          </div>

          {/* Right — Compliance cards + rights */}
          <div className="lg:col-span-7">
            <div className="grid sm:grid-cols-3 gap-4 mb-5">
              {COMPLIANCE.map((c, i) => (
                <Reveal key={c.title} delay={i * 80}>
                  <article className="glass-card glass rounded-3xl p-5 h-full">
                    <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-teal-500/10 text-teal-700 mb-3">
                      <c.icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-display font-bold text-ink text-sm leading-tight">{c.title}</h3>
                    <p className="mt-2 text-xs text-ink/65 leading-snug">{c.body}</p>
                    <span className="mt-3 inline-flex items-center gap-1 px-2 py-1 rounded-full bg-teal-500/10 text-teal-700 text-[10px] font-semibold">
                      <IconCheck className="w-2.5 h-2.5" />
                      {c.chip}
                    </span>
                  </article>
                </Reveal>
              ))}
            </div>

            {/* Patient rights */}
            <div className="glass-strong rounded-3xl p-6 sm:p-7">
              <h3 className="font-display font-bold text-ink text-lg leading-tight mb-4">
                Your rights as a Wayside patient
              </h3>
              <ul className="grid sm:grid-cols-2 gap-3">
                {RIGHTS.map((r) => (
                  <li key={r} className="flex items-start gap-2.5 text-sm text-ink/75 leading-snug">
                    <span className="mt-0.5 flex items-center justify-center w-5 h-5 rounded-full bg-teal-500/15 text-teal-700 shrink-0">
                      <IconCheck className="w-3.5 h-3.5" />
                    </span>
                    {r}
                  </li>
                ))}
              </ul>
              <div className="mt-5 pt-5 border-t border-ink/8 flex flex-col sm:flex-row items-start sm:items-center gap-3">
                <div>
                  <div className="text-[10px] uppercase tracking-wider font-semibold text-teal-700">Non-compliance risk</div>
                  <p className="text-sm text-ink/65 mt-0.5">Statutory penalties up to KES 3,000,000 or judicial imprisonment.</p>
                </div>
                <a
                  href="#contact"
                  className="sm:ml-auto inline-flex items-center gap-2 text-sm font-semibold text-teal-700 hover:text-teal-800 transition-colors"
                >
                  Request a privacy notice
                  <IconShield className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

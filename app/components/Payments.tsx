"use client";

import {
  IconSmartphone,
  IconWallet,
  IconBuilding,
  IconShield,
  IconCheck,
  IconArrowRight,
} from "./icons";

const CHANNELS = [
  {
    icon: IconSmartphone,
    title: "M-Pesa (Mobile Money)",
    accent: "from-emerald-500 to-emerald-600",
    body: "Till / Paybill processing at reception & pharmacy counters.",
    detail: "Instant transaction confirmation code verified by the cashier prior to service delivery.",
    chips: ["Buy Goods", "Paybill", "Instant receipts"],
  },
  {
    icon: IconWallet,
    title: "Cash Settlement",
    accent: "from-teal-500 to-teal-600",
    body: "Direct physical currency processing at the central cash desk.",
    detail: "Official physical receipt issued for every consultation, lab test and dispensing fee.",
    chips: ["All currencies accepted at counter", "Itemized receipts"],
  },
  {
    icon: IconBuilding,
    title: "Co-op Kwa Jirani Agency Banking",
    accent: "from-sky-500 to-sky-600",
    body: "On-site banking node (Edward Koech Rotich T/A Wayside Medical Clinic).",
    detail: "Withdraw cash or execute bank transfers directly on the premises to settle medical bills.",
    chips: ["Cash withdrawals", "Bank transfers", "No bank visit needed"],
  },
  {
    icon: IconShield,
    title: "SHA & NHIF Insurance",
    accent: "from-sand-400 to-sand-500",
    body: "Accredited for primary care outpatient benefit processing under SHA (legacy NHIF).",
    detail: "Active SHA digital membership verification is required during administrative intake before consultation.",
    chips: ["SHA verified", "Outpatient capitation", "Pre-consult verification"],
  },
];

export default function Payments() {
  return (
    <section id="payments" className="section relative">
      <div className="blob w-[26rem] h-[26rem] bg-emerald-300/30 -top-12 right-1/4" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="grid lg:grid-cols-2 gap-8 items-end mb-12">
          <div>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-xs font-semibold text-teal-700 uppercase tracking-wider">
              <IconWallet className="w-3.5 h-3.5" /> Payments &amp; Insurance
            </span>
            <h2 className="mt-4 font-display font-extrabold tracking-tight text-ink text-3xl sm:text-4xl lg:text-5xl leading-[1.1]">
              Pay the way that{" "}
              <span className="text-gradient">works for you.</span>
            </h2>
          </div>
          <p className="text-ink/70 text-base sm:text-lg leading-relaxed">
            We have built a multi-tiered billing architecture that fits a cash-preferred
            community. From M-Pesa at the pharmacy counter to on-site Co-op Kwa Jirani
            banking and SHA/NHIF insurance processing — your settlement path is flexible,
            transparent and receipt-verified.
          </p>
        </div>

        {/* Channels grid */}
        <div className="grid sm:grid-cols-2 gap-5 lg:gap-6">
          {CHANNELS.map((c, i) => (
            <article
              key={c.title}
              className="glass-card glass rounded-3xl p-6 lg:p-7 reveal"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className={`flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br ${c.accent} text-white shadow-lg shadow-ink/10 shrink-0`}>
                  <c.icon className="w-6 h-6" strokeWidth={1.5} />
                </div>
                <div className="flex-1">
                  <h3 className="font-display font-bold text-ink text-lg leading-tight">{c.title}</h3>
                  <p className="mt-1.5 text-sm text-ink/75 leading-relaxed">{c.body}</p>
                  <p className="mt-2 text-xs text-ink/55 leading-relaxed">{c.detail}</p>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {c.chips.map((ch) => (
                      <span key={ch} className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-teal-500/10 text-teal-700 text-[11px] font-semibold">
                        <IconCheck className="w-3 h-3" />
                        {ch}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Verification CTA */}
        <div className="mt-8 glass-strong rounded-3xl p-6 sm:p-7 flex flex-col sm:flex-row items-start sm:items-center gap-5">
          <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-sand-400/15 text-sand-500 shrink-0">
            <IconShield className="w-6 h-6" />
          </div>
          <div className="flex-1">
            <h3 className="font-display font-bold text-ink text-base sm:text-lg leading-tight">
              Insured under SHA? Bring your active membership details.
            </h3>
            <p className="mt-1 text-sm text-ink/65 leading-relaxed">
              Electronic verification happens during administrative intake — please present
              your active SHA registration before consultation so we can confirm your
              outpatient benefit and route you to the right consultation room faster.
            </p>
          </div>
          <a href="#contact" className="btn-ghost shrink-0">
            Bring your SHA card
            <IconArrowRight className="w-4 h-4 text-teal-700" />
          </a>
        </div>
      </div>
    </section>
  );
}

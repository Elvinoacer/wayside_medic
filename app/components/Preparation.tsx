"use client";

import {
  IconFlask,
  IconBaby,
  IconScalpel,
  IconClipboard,
  IconCheck,
  IconArrowRight,
  IconUsers,
} from "./icons";

const PROTOCOLS = [
  {
    icon: IconFlask,
    title: "Laboratory tests",
    color: "text-sand-500",
    bg: "bg-sand-400/15",
    instructions: [
      "Fast 8–12 hours overnight for blood glucose, lipid panels or comprehensive metabolic tests.",
      "Plain water intake is permitted during the fasting window.",
      "Sterile collection containers are issued at reception for urinalysis and stool exams.",
      "Follow hygienic collection instructions shared by our nursing team.",
    ],
  },
  {
    icon: IconBaby,
    title: "Antenatal & OBGYN visits",
    color: "text-rose-500",
    bg: "bg-rose-500/10",
    instructions: [
      "Carry your physical appointment card every visit.",
      "Bring your maternal health booklet for longitudinal tracking.",
      "Carry previous laboratory reports from external providers.",
      "Bring external ultrasound scans for review by the OBGYN.",
    ],
  },
  {
    icon: IconScalpel,
    title: "Dental & minor surgery",
    color: "text-sky-600",
    bg: "bg-sky-500/10",
    instructions: [
      "Pre-procedure vital signs screening (incl. blood pressure) is mandatory.",
      "Complete standard medical history disclosure with the GP.",
      "Sign informed consent documentation before the procedure.",
      "Arrange a chaperone or escort for after-care where required.",
    ],
  },
  {
    icon: IconClipboard,
    title: "For every visit",
    color: "text-teal-700",
    bg: "bg-teal-500/10",
    instructions: [
      "Adults: present your national ID card at reception.",
      "Minors: birth notification or guardian ID required.",
      "Carry your clinic appointment card (new patients are issued one).",
      "Arrive 15 minutes early for vitals & triage by the nursing team.",
    ],
  },
];

export default function Preparation() {
  return (
    <section id="preparation" className="section relative">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left — sticky heading */}
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-xs font-semibold text-teal-700 uppercase tracking-wider">
                <IconClipboard className="w-3.5 h-3.5" /> Your Visit
              </span>
              <h2 className="mt-4 font-display font-extrabold tracking-tight text-ink text-3xl sm:text-4xl lg:text-[2.75rem] leading-[1.1]">
                Come prepared.{" "}
                <span className="text-gradient">Leave informed.</span>
              </h2>
              <p className="mt-5 text-ink/70 text-base leading-relaxed">
                A few simple steps before your appointment help our nurses and doctors
                serve you faster and more accurately. Here is exactly what to expect,
                organized by the type of visit you are booking.
              </p>

              <div className="mt-6 glass-card glass rounded-2xl p-4 flex items-center gap-3">
                <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-teal-500/10 text-teal-700 shrink-0">
                  <IconUsers className="w-5 h-5" />
                </div>
                <p className="text-xs text-ink/70 leading-snug">
                  <span className="font-semibold text-ink">75% routine</span> ·{" "}
                  <span className="font-semibold text-ink">25% acute</span> — our triage
                  nurse routes every arriving patient to the right consultation room.
                </p>
              </div>

              <a
                href="#location"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-teal-700 hover:text-teal-800 transition-colors group"
              >
                See how to find us
                <IconArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>

          {/* Right — protocol grid */}
          <div className="lg:col-span-8 grid sm:grid-cols-2 gap-5">
            {PROTOCOLS.map((p, i) => (
              <article
                key={p.title}
                className={`glass-card glass rounded-3xl p-6 reveal ${i % 2 === 1 ? "sm:mt-8" : ""}`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`flex items-center justify-center w-11 h-11 rounded-2xl ${p.bg} ${p.color}`}>
                    <p.icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-display font-bold text-ink text-base leading-tight">{p.title}</h3>
                </div>
                <ul className="space-y-2.5">
                  {p.instructions.map((t, j) => (
                    <li key={j} className="flex items-start gap-2.5 text-sm text-ink/75 leading-snug">
                      <span className="mt-0.5 flex items-center justify-center w-4 h-4 rounded-full bg-teal-500/15 text-teal-700 shrink-0">
                        <IconCheck className="w-3 h-3" />
                      </span>
                      {t}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

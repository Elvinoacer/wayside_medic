"use client";

import {
  IconStethoscope,
  IconTooth,
  IconBaby,
  IconLungs,
  IconFlask,
  IconScalpel,
  IconArrowRight,
  IconCheck,
  IconClock,
} from "./icons";

interface ServicesProps {
  onBook: () => void;
}

const SERVICES = [
  {
    icon: IconStethoscope,
    title: "General Outpatient",
    plain: "Walk-in consultations & family doctor care.",
    services: [
      "Primary GP consultations",
      "Chronic disease management",
      "Pediatric care & immunization review",
      "General prescriptions & follow-ups",
    ],
    treats: "Malaria, URI, hypertension, diabetes, gastrointestinal & febrile illness.",
    hours: "Mon–Sat · 8AM–6PM",
    accent: "from-teal-500 to-teal-600",
    chip: "bg-teal-500/10 text-teal-700",
  },
  {
    icon: IconTooth,
    title: "Dental Surgery",
    plain: "Preventive, restorative & minor oral surgery.",
    services: [
      "Dental consultations & examinations",
      "Tooth extractions & restorative fillings",
      "Scaling and polishing",
      "Minor oral surgery",
    ],
    treats: "Dental caries, severe toothache, periodontal disease, oral infections.",
    hours: "Scheduled sessions · emergency on-call",
    accent: "from-sky-500 to-sky-600",
    chip: "bg-sky-500/10 text-sky-600",
  },
  {
    icon: IconBaby,
    title: "Obstetrics & Gynaecology",
    plain: "Mother & baby check-ups · family planning.",
    services: [
      "Antenatal (ANC) clinic check-ups",
      "Postnatal assessments",
      "Family planning counseling",
      "Hormonal implants & contraceptives",
    ],
    treats: "Maternal health monitoring, fetal growth tracking, child spacing.",
    hours: "By appointment · bring maternal booklet",
    accent: "from-rose-500 to-rose-600",
    chip: "bg-rose-500/10 text-rose-500",
  },
  {
    icon: IconLungs,
    title: "Specialist Chest Clinic",
    plain: "Pulmonology · the ‘cough doctor’.",
    services: [
      "Chronic asthma & bronchitis care",
      "Post-TB lung follow-up",
      "Allergy-linked respiratory review",
      "Specialist diagnosis & treatment plans",
    ],
    treats: "Persistent cough, chronic asthma, dust allergies, post-TB lung care.",
    hours: "Bi-weekly scheduled specialist clinic",
    accent: "from-teal-600 to-emerald-600",
    chip: "bg-emerald-500/10 text-emerald-600",
  },
  {
    icon: IconFlask,
    title: "Diagnostic Laboratory",
    plain: "Point-of-care testing on site.",
    services: [
      "Full blood counts & urinalysis",
      "Stool tests & malaria RDTs",
      "Blood glucose & lipid panels",
      "Serology & pregnancy testing",
    ],
    treats: "Rapid evidence-based diagnosis for differential & metabolic monitoring.",
    hours: "Mon–Sat · walk-in before 5PM",
    accent: "from-sand-400 to-sand-500",
    chip: "bg-sand-400/15 text-sand-500",
  },
  {
    icon: IconScalpel,
    title: "Minor Surgery",
    plain: "Small procedures & safe elective surgery.",
    services: [
      "Wound suturing & debridement",
      "Abscess incision & drainage",
      "Minor surgical repairs",
      "Safe male circumcision (local anesthesia)",
    ],
    treats: "Minor trauma, superficial soft-tissue infections, elective procedures.",
    hours: "Scheduled · pre-procedure vitals required",
    accent: "from-sky-600 to-indigo-600",
    chip: "bg-indigo-500/10 text-indigo-600",
  },
];

export default function Services({ onBook }: ServicesProps) {
  return (
    <section id="services" className="section relative">
      {/* Decorative */}
      <div className="blob w-[28rem] h-[28rem] bg-teal-300/30 top-1/4 -left-32" />
      <div className="blob w-[24rem] h-[24rem] bg-sand-200/30 bottom-1/4 -right-24" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-xs font-semibold text-teal-700 uppercase tracking-wider">
            <IconStethoscope className="w-3.5 h-3.5" /> Clinical Services
          </span>
          <h2 className="mt-4 font-display font-extrabold tracking-tight text-ink text-3xl sm:text-4xl lg:text-5xl leading-[1.1]">
            Six departments under one{" "}
            <span className="text-gradient">compassionate roof.</span>
          </h2>
          <p className="mt-5 text-ink/70 text-base sm:text-lg leading-relaxed">
            From everyday GP visits and antenatal check-ups to specialist chest &amp; skin
            clinics, dental surgery and minor procedures — your whole family is cared for
            without leaving the corridor.
          </p>
        </div>

        {/* Grid */}
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {SERVICES.map((s, i) => (
            <article
              key={s.title}
              className="glass-card glass rounded-3xl p-6 lg:p-7 flex flex-col reveal"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              {/* Icon + hours */}
              <div className="flex items-start justify-between mb-5">
                <div className={`flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${s.accent} text-white shadow-lg shadow-ink/10`}>
                  <s.icon className="w-7 h-7" strokeWidth={1.5} />
                </div>
                <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10.5px] font-semibold ${s.chip}`}>
                  <IconClock className="w-3 h-3" />
                  {s.hours}
                </span>
              </div>

              {/* Title */}
              <h3 className="font-display font-bold text-ink text-xl leading-tight">
                {s.title}
              </h3>
              <p className="mt-1 text-sm text-teal-700 font-medium">{s.plain}</p>

              {/* Service list */}
              <ul className="mt-4 space-y-2 flex-1">
                {s.services.map((srv) => (
                  <li key={srv} className="flex items-start gap-2 text-sm text-ink/75 leading-snug">
                    <span className="mt-0.5 flex items-center justify-center w-4 h-4 rounded-full bg-teal-500/15 text-teal-700 shrink-0">
                      <IconCheck className="w-3 h-3" />
                    </span>
                    {srv}
                  </li>
                ))}
              </ul>

              {/* Treats */}
              <div className="mt-5 pt-4 border-t border-ink/8">
                <p className="text-xs text-ink/55 leading-relaxed">
                  <span className="font-semibold text-ink/75 uppercase tracking-wider text-[10px]">Treats</span>
                  <br />
                  {s.treats}
                </p>
              </div>

              {/* CTA */}
              <button
                onClick={onBook}
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-teal-700 hover:text-teal-800 transition-colors group"
              >
                Book this service
                <IconArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </article>
          ))}
        </div>

        {/* Plain-language glossary strip */}
        <div className="mt-12 glass-strong rounded-3xl p-6 sm:p-8">
          <div className="flex items-start gap-3 mb-4">
            <span className="inline-flex items-center justify-center w-9 h-9 rounded-xl bg-teal-500/10 text-teal-700 shrink-0">
              <IconCheck className="w-5 h-5" />
            </span>
            <div>
              <h3 className="font-display font-bold text-ink text-lg">Plain-language clinic glossary</h3>
              <p className="text-sm text-ink/60 mt-0.5">Because understanding your care is the first step to healing.</p>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 mt-4">
            {GLOSSARY.map((g) => (
              <div key={g.term} className="rounded-2xl bg-white/60 backdrop-blur p-3.5 border border-white/60">
                <div className="text-xs font-semibold text-teal-700 uppercase tracking-wider">{g.term}</div>
                <div className="text-sm font-bold text-ink mt-0.5">{g.plain}</div>
                <div className="text-[11.5px] text-ink/60 mt-1 leading-snug">{g.context}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const GLOSSARY = [
  {
    term: "Antenatal Care (ANC)",
    plain: "Mother & Baby Pregnancy Check-up",
    context: "Routine prenatal monitoring, tetanus immunization & nutritional counseling.",
  },
  {
    term: "Pulmonology",
    plain: "Chest & Breathing Clinic · ‘Cough Doctor’",
    context: "Persistent respiratory conditions, chronic cough, asthma, dust allergies.",
  },
  {
    term: "Dermatology",
    plain: "Skin & Rash Clinic",
    context: "Fungal infections, allergic rashes, chronic eczema, complex skin issues.",
  },
  {
    term: "Minor Surgery",
    plain: "Small Procedures & Safe Male Circumcision",
    context: "Wound suturing, dressing, abscess drainage, elective minor procedures.",
  },
];

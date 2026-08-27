"use client";

import { useState } from "react";
import { IconStethoscope, IconTooth, IconBaby, IconLungs, IconFlask, IconScalpel, IconArrowRight, IconCheck } from "./icons";

interface ServicesProps { onBook: () => void; }

const SERVICES = [
  { icon: IconStethoscope, title: "General Outpatient", short: "Everyday family doctor care.", detail: "Primary consultations, chronic disease follow-up, paediatric care and prescriptions.", items: ["GP consultations", "Chronic disease management", "Paediatric care", "Follow-ups"] },
  { icon: IconBaby, title: "Maternity & Family", short: "Mother, baby and family planning.", detail: "ANC, postnatal support, family planning counselling and contraceptive services.", items: ["Antenatal care", "Postnatal reviews", "Family planning", "Contraceptives"] },
  { icon: IconTooth, title: "Dental Care", short: "Preventive & restorative dentistry.", detail: "Examinations, fillings, scaling, extractions and minor oral procedures.", items: ["Dental exams", "Fillings", "Scaling & polishing", "Extractions"] },
  { icon: IconLungs, title: "Chest Specialist", short: "Breathing, asthma & cough clinic.", detail: "Specialist assessment for persistent cough, asthma, allergies and post-TB care.", items: ["Asthma", "Chronic cough", "Allergy review", "Post-TB follow-up"] },
  { icon: IconFlask, title: "Diagnostic Lab", short: "Testing on site.", detail: "Fast point-of-care tests supporting diagnosis and ongoing health monitoring.", items: ["Blood tests", "Urinalysis", "Malaria RDT", "Pregnancy tests"] },
  { icon: IconScalpel, title: "Minor Procedures", short: "Small procedures, done carefully.", detail: "Wound care, suturing, abscess drainage and selected elective procedures.", items: ["Wound suturing", "Dressing & debridement", "Abscess drainage", "Minor repairs"] },
];

export default function Services({ onBook }: ServicesProps) {
  const [active, setActive] = useState(0);

  return (
    <section id="services" className="section-clean relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="section-heading">
          <span className="kicker">Care, organised</span>
          <h2 className="font-display font-extrabold">Everything you need, without making healthcare complicated.</h2>
          <p>Six focused care areas, presented simply so patients can quickly find the right place to start.</p>
        </div>

        <div className="mt-7 flex gap-2 overflow-x-auto pb-1 lg:hidden" aria-label="Choose a service">
          {SERVICES.map((service, i) => <button key={service.title} onClick={() => setActive(i)} className={`shrink-0 rounded-full px-4 py-2 text-xs font-bold border transition-colors ${active === i ? "bg-teal-700 text-white border-teal-700" : "bg-white/70 text-ink/65 border-ink/10"}`}>{service.title}</button>)}
        </div>

        <div className="service-grid">
          {SERVICES.map((s, i) => {
            const Icon = s.icon;
            return (
              <article key={s.title} className={`service-card ${i < 2 ? "featured" : ""} ${active === i ? "ring-2 ring-teal-200 lg:ring-0" : ""}`} onMouseEnter={() => setActive(i)}>
                <span className="number">0{i + 1}</span>
                <div className="iconbox"><Icon className="w-5 h-5" /></div>
                <h3 className="font-display font-extrabold">{s.title}</h3>
                <p className="font-semibold !text-teal-800/80">{s.short}</p>
                <p>{s.detail}</p>
                <ul>
                  {s.items.map(item => <li key={item}><IconCheck className="w-3.5 h-3.5 mt-0.5 text-teal-600 shrink-0" />{item}</li>)}
                </ul>
                <button onClick={onBook} className="mt-5 inline-flex items-center gap-2 text-sm font-extrabold text-teal-700 hover:text-teal-900 group">Book this service <IconArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" /></button>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

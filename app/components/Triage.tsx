"use client";

import { IconEmergency, IconActivity, IconHeart, IconHospital, IconArrowRight } from "./icons";

const TRIAGE = [
  { category: "Category 1 · Red", title: "Immediate Emergency", color: "rose", accent: "from-rose-500 to-rose-600", bg: "bg-rose-500/8", border: "border-rose-500/30", criteria: ["Severe respiratory failure", "Cardiac arrest", "Massive trauma", "Unconsciousness", "Severe burns", "Eclampsia"], action: "Immediate stabilization in treatment suite; continuous vital monitoring; immediate ambulance transport activation.", route: "St. Francis Community Hospital (Level 5)" },
  { category: "Category 2 · Yellow", title: "Urgent Care", color: "amber", accent: "from-amber-500 to-amber-600", bg: "bg-amber-500/8", border: "border-amber-500/30", criteria: ["High fever with moderate dehydration", "Acute asthmatic crisis", "Severe dental pain", "Open minor fractures", "Acute abdominal pain"], action: "Priority GP evaluation; immediate IV fluids, nebulization or parenteral analgesia administered.", route: "On-site stabilization — escalated if patient fails to stabilize within 2 hours." },
  { category: "Category 3 · Green", title: "Non-Urgent Routine", color: "teal", accent: "from-teal-500 to-teal-600", bg: "bg-teal-500/8", border: "border-teal-500/30", criteria: ["Routine dental check-up", "ANC pregnancy visit", "Family planning", "Chronic skin rash", "Elective male circumcision"], action: "Standard reception intake; queue placement for routine outpatient, dental or specialist consultation.", route: "Managed completely on-site." },
];

const INTAKE_STEPS = [
  { n: "01", title: "Arrival", body: "Present your appointment card at reception; new patients are registered and issued a new card." },
  { n: "02", title: "Intake", body: "Staff record Name, OP/NO, Age, Sex & Residence into the central physical register." },
  { n: "03", title: "Triage", body: "Nursing vitals: blood pressure, temperature, pulse, oxygen saturation & weight." },
  { n: "04", title: "Route", body: "Directed to General OPD, Dental, ANC or Specialist (Chest/Skin) consultation room." },
  { n: "05", title: "Care", body: "Proceed to lab, minor surgery suite, or pharmacy counter; settle fees at the cash desk." },
];

export default function Triage() {
  return (
    <section id="triage" className="section relative">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-xs font-semibold text-teal-700 uppercase tracking-wider">
            <IconActivity className="w-3.5 h-3.5" /> Triage &amp; Emergency
          </span>
          <h2 className="mt-4 font-display font-extrabold tracking-tight text-ink text-3xl sm:text-4xl lg:text-5xl leading-[1.1]">
            Structured triage that puts the{" "}<span className="text-gradient">right patient first.</span>
          </h2>
          <p className="mt-5 text-ink/70 text-base sm:text-lg leading-relaxed">
            Walk-ins, emergencies and routine visits all flow through one clear clinical pathway. Our triage nurses use a three-colour protocol to decide who needs immediate stabilization, urgent care, or routine queuing — and exactly where to send critical patients.
          </p>
        </div>

        <div className="mt-8 sm:mt-10 grid lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
          {TRIAGE.map((t) => (
            <article key={t.category} className={`glass-card glass rounded-3xl p-5 sm:p-6 lg:p-7 border ${t.border}`}>
              <div className="flex items-center justify-between gap-3 mb-4">
                <span className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r ${t.accent} text-white text-[10px] sm:text-[11px] font-bold uppercase tracking-wider shadow-lg`}>
                  {t.category}
                </span>
                <div className={`flex items-center justify-center w-9 h-9 rounded-xl ${t.bg} shrink-0`}>
                  <span className={`block w-3 h-3 rounded-full bg-gradient-to-br ${t.accent}`} />
                </div>
              </div>

              <h3 className="font-display font-bold text-ink text-xl leading-tight">{t.title}</h3>

              <div className="mt-4">
                <div className="text-[10px] uppercase tracking-wider font-semibold text-ink/45 mb-2">Clinical criteria</div>
                <ul className="grid grid-cols-1 min-[390px]:grid-cols-2 gap-2">
                  {t.criteria.map((c) => (
                    <li key={c} className="flex items-start gap-2 text-xs sm:text-[13px] text-ink/75 leading-snug">
                      <span className={`mt-1 inline-block w-1.5 h-1.5 rounded-full bg-gradient-to-br ${t.accent} shrink-0`} />
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className={`mt-4 rounded-2xl ${t.bg} p-3.5 sm:p-4 border ${t.border}`}>
                <div className="text-[10px] uppercase tracking-wider font-semibold text-ink/45">Immediate action</div>
                <p className="text-xs sm:text-[13px] text-ink/80 mt-1 leading-relaxed">{t.action}</p>
              </div>

              <div className="mt-3 flex items-start gap-2 text-xs sm:text-[13px]">
                <IconArrowRight className={`w-3.5 h-3.5 mt-0.5 ${t.color === "rose" ? "text-rose-500" : t.color === "amber" ? "text-amber-500" : "text-teal-700"} shrink-0`} />
                <p className="text-ink/70 leading-snug"><span className="font-semibold text-ink">Route:</span> {t.route}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 sm:mt-10 glass-strong rounded-3xl p-5 sm:p-8">
          <div className="flex items-start gap-3 mb-5 sm:mb-6">
            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-teal-500/10 text-teal-700 shrink-0"><IconHeart className="w-5 h-5" /></div>
            <div>
              <h3 className="font-display font-bold text-ink text-lg leading-tight">Your visit journey, step by step</h3>
              <p className="text-sm text-ink/60 mt-0.5">From arrival to settlement — five clear touchpoints.</p>
            </div>
          </div>

          <div className="hidden lg:grid grid-cols-5 gap-3">
            {INTAKE_STEPS.map((s, i) => (
              <div key={s.n} className="relative">
                {i < INTAKE_STEPS.length - 1 && <div className="absolute top-5 left-[60%] right-[-40%] h-px bg-gradient-to-r from-teal-300 to-teal-500/30" />}
                <div className="relative flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-teal-600 to-teal-500 text-white text-sm font-bold shadow-lg shadow-teal-500/20">{s.n}</div>
                <h4 className="mt-3 font-display font-bold text-ink text-sm leading-tight">{s.title}</h4>
                <p className="mt-1 text-xs text-ink/65 leading-snug">{s.body}</p>
              </div>
            ))}
          </div>

          <div className="lg:hidden space-y-2.5">
            {INTAKE_STEPS.map((s) => (
              <div key={s.n} className="flex items-start gap-3 p-3.5 rounded-2xl bg-white/60 backdrop-blur border border-white/60">
                <div className="flex items-center justify-center w-9 h-9 rounded-full bg-gradient-to-br from-teal-600 to-teal-500 text-white text-xs font-bold shrink-0">{s.n}</div>
                <div className="flex-1 min-w-0"><h4 className="font-display font-bold text-ink text-sm leading-tight">{s.title}</h4><p className="mt-0.5 text-xs text-ink/65 leading-snug">{s.body}</p></div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 sm:mt-8 grid lg:grid-cols-12 gap-5 sm:gap-6 items-stretch pb-28 lg:pb-0">
          <div className="lg:col-span-8 glass-card glass rounded-3xl p-5 sm:p-8 bg-gradient-to-br from-sky-500/10 to-transparent">
            <div className="flex items-center gap-3 mb-3">
              <div className="flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-br from-sky-500 to-sky-600 text-white shadow-lg shadow-sky-500/20 shrink-0"><IconHospital className="w-6 h-6" /></div>
              <div><div className="text-[10px] uppercase tracking-wider font-semibold text-sky-600">Primary Referral Partner</div><h3 className="font-display font-bold text-ink text-lg sm:text-xl leading-tight">St. Francis Community Hospital</h3></div>
            </div>
            <p className="text-sm text-ink/70 leading-relaxed">Our Level 5 Teaching &amp; Referral Hospital partner sits approximately 2.5 km west of Sunton Stage along Kasarani-Mwiki Road — equipped with a 24/7 Casualty &amp; Emergency Department, ICU, HDU, operating theatres, renal dialysis, advanced radiology (CT, digital X-ray, ultrasound), inpatient medical/surgical wards, and specialized maternity suites.</p>
            <div className="mt-4 grid sm:grid-cols-2 gap-3">
              <div className="rounded-2xl bg-white/60 backdrop-blur p-3.5 border border-white/60"><div className="text-[10px] uppercase tracking-wider font-semibold text-sky-600">24/7 Emergency</div><a href="tel:+254741689983" className="block mt-1 font-display font-bold text-ink text-base hover:text-sky-600 transition-colors">+254 741 689983</a><a href="tel:+254713969608" className="block text-sm text-ink/65 hover:text-sky-600 transition-colors">+254 713 969608</a></div>
              <div className="rounded-2xl bg-white/60 backdrop-blur p-3.5 border border-white/60"><div className="text-[10px] uppercase tracking-wider font-semibold text-sky-600">Distance</div><div className="mt-1 font-display font-bold text-ink text-base">~2.5 km west</div><div className="text-sm text-ink/65 mt-0.5">Along Kasarani-Mwiki Road</div></div>
            </div>
          </div>

          <div className="lg:col-span-4 glass-card glass rounded-3xl p-5 sm:p-8 flex flex-col justify-center">
            <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-rose-500/10 text-rose-500 mb-3"><IconEmergency className="w-6 h-6" /></div>
            <h3 className="font-display font-bold text-ink text-lg leading-tight">In a critical emergency, dial first.</h3>
            <p className="mt-2 text-sm text-ink/65 leading-relaxed">For Category 1 emergencies, our team stabilizes on-site while activating ambulance transport. Calling ahead saves minutes — and minutes save lives.</p>
            <a href="tel:+254741689983" className="mt-5 inline-flex w-full sm:w-auto items-center justify-center gap-2 px-5 py-3 rounded-full bg-rose-500 text-white text-sm font-semibold hover:bg-rose-600 transition-colors"><IconEmergency className="w-4 h-4" />Call Emergency Line</a>
          </div>
        </div>
      </div>
    </section>
  );
}

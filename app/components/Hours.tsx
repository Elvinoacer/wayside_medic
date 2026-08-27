"use client";

import { IconClock, IconCalendar, IconCheck, IconEmergency, IconHeart } from "./icons";

const SCHEDULE = [
  { day: "Monday", hours: "8:00 AM – 6:00 PM", open: true },
  { day: "Tuesday", hours: "8:00 AM – 6:00 PM", open: true },
  { day: "Wednesday", hours: "8:00 AM – 6:00 PM", open: true },
  { day: "Thursday", hours: "8:00 AM – 6:00 PM", open: true },
  { day: "Friday", hours: "8:00 AM – 6:00 PM", open: true },
  { day: "Saturday", hours: "8:00 AM – 6:00 PM", open: true, note: "Full outpatient, dental & lab services" },
  { day: "Sunday", hours: "Closed", open: false, note: "Emergency scheduled consults only" },
];

const CAPACITY = [
  { label: "Beds", value: "0", note: "Strictly outpatient facility — no overnight admissions" },
  { label: "Cots", value: "0", note: "Pediatric ambulatory stabilization only" },
  { label: "Hours", value: "10h", note: "Daily daytime operating window (Mon–Sat)" },
  { label: "Days", value: "6", note: "Open six days a week for full clinic services" },
];

interface HoursProps {
  onBook: () => void;
}

export default function Hours({ onBook }: HoursProps) {
  return (
    <section id="hours" className="section relative">
      <div className="absolute inset-0 dot-pattern opacity-30 pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          {/* Schedule card */}
          <div className="glass-card glass-strong rounded-3xl p-7 sm:p-9">
            <div className="flex items-center gap-2 mb-4">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 text-teal-700 text-xs font-semibold uppercase tracking-wider">
                <IconClock className="w-3.5 h-3.5" /> Operating Hours
              </span>
            </div>
            <h2 className="font-display font-extrabold tracking-tight text-ink text-3xl sm:text-4xl leading-[1.1]">
              We are open{" "}
              <span className="text-gradient">six days a week.</span>
            </h2>
            <p className="mt-3 text-ink/70 text-base leading-relaxed">
              Wayside operates as a daytime ambulatory outpatient facility. Saturdays run
              full outpatient, dental &amp; laboratory services; Sundays are reserved for
              emergency scheduled consultations only.
            </p>

            {/* Schedule list */}
            <ul className="mt-6 divide-y divide-ink/10">
              {SCHEDULE.map((d) => {
                const iconCls = d.open ? "bg-teal-500/15 text-teal-700" : "bg-rose-500/10 text-rose-500";
                const hoursCls = d.open ? "text-sm font-semibold text-ink" : "text-sm font-semibold text-rose-500";
                return (
                  <li key={d.day} className="flex items-center justify-between py-3 gap-3">
                    <div className="flex items-center gap-3">
                      <span className={`flex items-center justify-center w-7 h-7 rounded-full text-[10px] font-bold ${iconCls}`}>
                        {d.open ? <IconCheck className="w-3.5 h-3.5" /> : "–"}
                      </span>
                      <span className="font-display font-semibold text-ink text-sm sm:text-base">{d.day}</span>
                    </div>
                    <div className="text-right">
                      <div className={hoursCls}>{d.hours}</div>
                      {d.note && <div className="text-[11px] text-ink/55 mt-0.5">{d.note}</div>}
                    </div>
                  </li>
                );
              })}
            </ul>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <button onClick={onBook} className="btn-primary flex-1">
                <IconCalendar className="w-4 h-4" />
                Schedule a Visit
              </button>
              <a href="#location" className="btn-ghost flex-1">
                View Directions
              </a>
            </div>
          </div>

          {/* Capacity + Emergency */}
          <div className="flex flex-col gap-6">
            {/* Capacity stats */}
            <div className="glass-card glass rounded-3xl p-7">
              <h3 className="font-display font-bold text-ink text-lg mb-4">Facility capacity at a glance</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {CAPACITY.map((c) => (
                  <div key={c.label} className="rounded-2xl bg-white/60 backdrop-blur p-3.5 border border-white/60 text-center">
                    <div className="font-display font-extrabold text-ink text-2xl sm:text-3xl leading-none text-gradient">
                      {c.value}
                    </div>
                    <div className="text-[11px] uppercase tracking-wider font-semibold text-teal-700 mt-1">{c.label}</div>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-xs text-ink/60 leading-relaxed">
                As a Level 2 outpatient clinic with zero inpatient beds and zero cots, our
                clinical model is intentionally built around daytime ambulatory care, rapid
                triage and structured emergency referral escalation to Level 5 partners.
              </p>
            </div>

            {/* Emergency strip */}
            <div className="glass-card glass rounded-3xl p-7 bg-gradient-to-br from-rose-500/10 to-rose-500/0">
              <div className="flex items-start gap-3">
                <div className="relative flex items-center justify-center w-12 h-12 rounded-2xl bg-rose-500 text-white shrink-0">
                  <IconEmergency className="w-6 h-6" />
                  <span className="absolute inset-0 rounded-2xl animate-pulse-ring" />
                </div>
                <div className="flex-1">
                  <h3 className="font-display font-bold text-ink text-lg leading-tight">
                    Sudden emergency after hours?
                  </h3>
                  <p className="text-sm text-ink/70 mt-1.5 leading-relaxed">
                    For critical trauma, severe breathing distress, cardiac events or
                    obstetric emergencies, bypass routine registration — call our Level 5
                    referral partner directly.
                  </p>
                  <a
                    href="tel:+254741689983"
                    className="mt-4 inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-rose-500 text-white text-sm font-semibold hover:bg-rose-600 transition-colors"
                  >
                    <IconEmergency className="w-4 h-4" />
                    St. Francis 24/7 · +254 741 689983
                  </a>
                  <p className="mt-2 text-[11px] text-ink/55">
                    Alternate line: <span className="font-semibold text-ink/70">+254 713 969608</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Philosophy mini-strip */}
            <div className="glass-card glass rounded-3xl p-5 flex items-center gap-3">
              <div className="flex items-center justify-center w-11 h-11 rounded-2xl bg-teal-500/10 text-teal-700 shrink-0">
                <IconHeart className="w-5 h-5" />
              </div>
              <p className="text-xs text-ink/70 leading-snug">
                <span className="font-semibold text-ink">Why no overnight beds?</span> We
                focus on what primary care does best — early diagnosis, preventive care,
                and structured escalation when specialty or inpatient care is needed.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

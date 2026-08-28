"use client";

import { IconClock, IconCalendar, IconCheck, IconEmergency, IconHeart } from "./icons";

const SCHEDULE = [
  { day: "Monday", hours: "8:00 AM – 6:00 PM", open: true },
  { day: "Tuesday", hours: "8:00 AM – 6:00 PM", open: true },
  { day: "Wednesday", hours: "8:00 AM – 6:00 PM", open: true },
  { day: "Thursday", hours: "8:00 AM – 6:00 PM", open: true },
  { day: "Friday", hours: "8:00 AM – 6:00 PM", open: true },
  { day: "Saturday", hours: "8:00 AM – 6:00 PM", open: true, note: "Full outpatient, dental & lab services" },
  { day: "Sunday", hours: "Closed", open: false, note: "Emergency scheduled consultations only" },
];

const CAPACITY = [
  { label: "Beds", value: "0" },
  { label: "Cots", value: "0" },
  { label: "Hours", value: "10h" },
  { label: "Days", value: "6" },
];

interface HoursProps {
  onBook: () => void;
}

export default function Hours({ onBook }: HoursProps) {
  return (
    <section id="hours" className="section relative pb-32 sm:pb-10">
      <div className="absolute inset-0 dot-pattern opacity-30 pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-start">
          <div className="glass-card glass-strong rounded-[2rem] p-5 sm:p-8 lg:p-9">
            <div className="flex items-center gap-2 mb-4 sm:mb-5">
              <span className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-teal-500/10 text-teal-700 text-[11px] sm:text-xs font-bold uppercase tracking-[0.14em]">
                <IconClock className="w-3.5 h-3.5" /> Operating Hours
              </span>
            </div>

            <h2 className="font-display font-extrabold tracking-tight text-ink text-[2rem] sm:text-4xl leading-[1.08] max-w-xl">
              We are open <span className="text-gradient">six days a week.</span>
            </h2>

            <p className="mt-4 text-ink/70 text-[15px] sm:text-base leading-7 max-w-2xl">
              Wayside is a daytime ambulatory outpatient facility. Saturdays include full
              outpatient, dental and laboratory services. Sundays are reserved for
              emergency scheduled consultations.
            </p>

            <div className="mt-6 sm:mt-7 overflow-hidden rounded-2xl border border-ink/10 bg-white/35">
              <div className="hidden sm:grid grid-cols-[1fr_auto] px-4 py-2.5 bg-white/45 text-[10px] font-bold uppercase tracking-wider text-ink/45">
                <span>Day</span>
                <span>Hours</span>
              </div>
              <ul className="divide-y divide-ink/10">
                {SCHEDULE.map((d) => (
                  <li key={d.day} className="px-3.5 sm:px-4 py-3 sm:py-3.5">
                    <div className="flex items-center justify-between gap-3 min-w-0">
                      <div className="flex items-center gap-2.5 min-w-0">
                        <span className={`flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full shrink-0 ${d.open ? "bg-teal-500/12 text-teal-700" : "bg-rose-500/10 text-rose-500"}`}>
                          {d.open ? <IconCheck className="w-3.5 h-3.5" /> : "–"}
                        </span>
                        <span className="font-display font-bold text-ink text-sm sm:text-base truncate">{d.day}</span>
                      </div>
                      <span className={`shrink-0 text-right text-[13px] sm:text-sm font-bold ${d.open ? "text-ink" : "text-rose-500"}`}>
                        {d.hours}
                      </span>
                    </div>
                    {d.note && (
                      <p className="mt-1 ml-[2.4rem] sm:ml-[2.75rem] text-[11px] leading-4 text-ink/55">{d.note}</p>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-5 hidden sm:flex gap-3">
              <button onClick={onBook} className="btn-primary flex-1">
                <IconCalendar className="w-4 h-4" /> Schedule a Visit
              </button>
              <a href="#location" className="btn-ghost flex-1">View Directions</a>
            </div>
          </div>

          <div className="flex flex-col gap-5 sm:gap-6">
            <div className="glass-card glass rounded-[2rem] p-5 sm:p-7">
              <div className="flex items-start justify-between gap-4 mb-5">
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-teal-700">At a glance</p>
                  <h3 className="font-display font-bold text-ink text-xl sm:text-2xl mt-1">Our facility</h3>
                </div>
                <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-teal-500/10 text-teal-700 shrink-0">
                  <IconHeart className="w-5 h-5" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-4 sm:gap-3">
                {CAPACITY.map((c) => (
                  <div key={c.label} className="rounded-2xl bg-white/60 border border-white/70 p-3 sm:p-3.5 text-center">
                    <div className="font-display font-extrabold text-ink text-2xl sm:text-3xl leading-none text-gradient">{c.value}</div>
                    <div className="mt-1.5 text-[10px] uppercase tracking-wider font-bold text-teal-700">{c.label}</div>
                  </div>
                ))}
              </div>

              <p className="mt-4 text-xs sm:text-sm text-ink/60 leading-5">
                We focus on daytime ambulatory care, rapid triage and structured referral when specialty or inpatient care is needed.
              </p>
            </div>

            <div className="glass-card glass rounded-[2rem] p-5 sm:p-7 bg-gradient-to-br from-rose-500/10 to-rose-500/0">
              <div className="flex items-start gap-3.5">
                <div className="relative flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-rose-500 text-white shrink-0">
                  <IconEmergency className="w-5 h-5 sm:w-6 sm:h-6" />
                  <span className="absolute inset-0 rounded-2xl animate-pulse-ring" />
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-rose-500">Emergency care</p>
                  <h3 className="font-display font-bold text-ink text-lg sm:text-xl leading-tight mt-1">Need urgent help after hours?</h3>
                  <p className="text-sm text-ink/70 mt-2 leading-6">
                    For critical trauma, severe breathing distress, cardiac events or obstetric emergencies, bypass routine registration and call our Level 5 referral partner.
                  </p>
                  <a href="tel:+254741689983" className="mt-4 w-full sm:w-auto inline-flex justify-center items-center gap-2 px-4 py-3 rounded-xl bg-rose-500 text-white text-sm font-bold hover:bg-rose-600 transition-colors">
                    <IconEmergency className="w-4 h-4" /> St. Francis 24/7 · +254 741 689983
                  </a>
                  <p className="mt-2 text-[11px] text-ink/55">Alternate line: <span className="font-semibold text-ink/70">+254 713 969608</span></p>
                </div>
              </div>
            </div>

            <div className="glass-card glass rounded-2xl p-4 sm:p-5 flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-teal-500/10 text-teal-700 shrink-0">
                <IconClock className="w-4 h-4" />
              </div>
              <p className="text-xs sm:text-sm text-ink/70 leading-5">
                <span className="font-bold text-ink">Clinic hours:</span> Monday–Saturday, 8:00 AM–6:00 PM. Sunday services are limited to emergency scheduled consultations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

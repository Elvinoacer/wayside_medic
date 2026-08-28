"use client";

import { useEffect, useMemo, useState } from "react";
import Reveal from "./Reveal";
import {
  IconClock,
  IconWallet,
  IconEmergency,
  IconCalendar,
  IconArrowUpRight,
} from "./icons";

interface PlanVisitProps { onBook: () => void; }

const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const OPEN_HOUR = 8;
const CLOSE_HOUR = 18;

/** Current time at the clinic (Africa/Nairobi), safe on both server & client. */
function nairobiNow(): { day: number; hour: number; minute: number; label: string } {
  const fmt = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Africa/Nairobi",
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
  const parts = fmt.formatToParts(new Date());
  const get = (t: string) => parts.find((p) => p.type === t)?.value ?? "";
  const day = Math.max(0, DAYS.indexOf(get("weekday")));
  const hour = Number(get("hour")) % 24;
  const minute = Number(get("minute"));
  return { day, hour, minute, label: `${String(hour).padStart(2, "0")}:${String(minute).padStart(2, "0")}` };
}

function openState(day: number, hour: number) {
  const isSunday = day === 6;
  const beforeOpen = hour < OPEN_HOUR;
  const afterClose = hour >= CLOSE_HOUR;
  if (!isSunday && !beforeOpen && !afterClose) {
    return { open: true, text: `Open now · closes ${CLOSE_HOUR % 12 || 12} PM` };
  }
  if (!isSunday && beforeOpen) return { open: false, text: "Opens today · 8:00 AM" };
  return { open: false, text: "Closed · opens Monday 8:00 AM" };
}

export default function PlanVisit({ onBook }: PlanVisitProps) {
  const [now, setNow] = useState(() => nairobiNow());
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    /* eslint-disable react-hooks/set-state-in-effect -- hydration-safe client clock: the server
       renders a neutral placeholder, so live Nairobi time can only attach after mount. */
    setMounted(true);
    setNow(nairobiNow());
    /* eslint-enable react-hooks/set-state-in-effect */
    const t = setInterval(() => setNow(nairobiNow()), 30_000);
    return () => clearInterval(t);
  }, []);

  const state = useMemo(
    () => (mounted ? openState(now.day, now.hour) : { open: true, text: "Mon–Sat · 8 AM–6 PM" }),
    [mounted, now]
  );

  return (
    <section id="plan" className="section !bg-paper-deep border-y-2 border-ink" aria-label="Hours and payments">
      <div className="wrap">
        <Reveal>
          <div className="section-head">
            <p className="kicker"><span className="dash" /> 03 · Plan your visit</p>
            <h2 className="section-title">
              Open six days. <em>Pay your way.</em>
            </h2>
          </div>
        </Reveal>

        <div className="plan-grid">
          {/* Hours card with live status */}
          <Reveal className="plan-card">
            <div className="flex items-start justify-between gap-4 flex-wrap">
              <div>
                <h3 className="font-display text-2xl font-semibold tracking-tight">Clinic hours</h3>
                <p className="text-sm text-ink-soft mt-1">Monday to Saturday · 8:00 AM – 6:00 PM</p>
              </div>
              <span
                className={`open-pill ${state.open ? "is-open" : "is-closed"}`}
                role="status"
                aria-live="polite"
              >
                <span className="pulse-dot" aria-hidden="true" />
                {state.text}
              </span>
            </div>

            <div className="week-dots" aria-label="Opening days">
              {DAYS.map((d, i) => {
                const closed = i === 6;
                const today = mounted && now.day === i;
                return (
                  <div key={d} className={`wd ${closed ? "closed" : ""} ${today ? "today" : ""}`}>
                    <b>{d.slice(0, 1)}</b>
                    <span>{closed ? "×" : "8–6"}</span>
                  </div>
                );
              })}
            </div>

            <p className="text-xs text-ink-soft leading-relaxed flex items-start gap-2">
              <IconClock className="w-4 h-4 text-leaf shrink-0 mt-0.5" />
              Sundays are reserved for scheduled emergency consultations only. Saturdays run the full outpatient, dental &amp; lab service.
            </p>

            <div className="mt-auto flex flex-wrap gap-2.5">
              <button onClick={onBook} className="btn btn-primary flex-1 min-w-40"><IconCalendar className="w-4 h-4" /> Pick a time</button>
              <a href="#find-us" className="btn btn-ghost flex-1 min-w-40">How to get here <IconArrowUpRight className="w-4 h-4" /></a>
            </div>
          </Reveal>

          {/* Payments + emergency column */}
          <div className="grid gap-4">
            <Reveal delay={80} className="plan-card">
              <div className="flex items-center gap-3">
                <span className="grid place-items-center w-10 h-10 rounded-xl bg-sun-tint border-2 border-ink"><IconWallet className="w-5 h-5" /></span>
                <h3 className="font-display text-2xl font-semibold tracking-tight">Payments</h3>
              </div>
              <div className="pay-row">
                <span className="pay-sticker">M-Pesa</span>
                <span className="pay-sticker">Cash</span>
                <span className="pay-sticker">SHA · NHIF</span>
                <span className="pay-sticker">Co-op Kwa Jirani</span>
              </div>
              <p className="text-xs text-ink-soft leading-relaxed">
                Clear prices before you are treated — and SHA verification is done right at the counter.
              </p>
            </Reveal>

            <Reveal delay={140} className="emergency">
              <div className="flex items-center gap-3">
                <span className="grid place-items-center w-10 h-10 rounded-xl bg-coral text-white border-2 border-ink"><IconEmergency className="w-5 h-5" /></span>
                <h3 className="font-display text-xl font-semibold tracking-tight">Urgent, after hours?</h3>
              </div>
              <p className="text-sm text-ink-soft leading-relaxed">
                Our referral partner St. Francis Community Hospital answers 24/7 for emergencies we hand over personally.
              </p>
              <a href="tel:+254741689983" className="em-btn">
                <IconEmergency className="w-4 h-4" /> St. Francis 24/7 · +254 741 689 983
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

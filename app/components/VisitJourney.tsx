"use client";

import { useEffect, useRef, useState } from "react";
import Reveal from "./Reveal";
import { IconClipboard, IconActivity, IconStethoscope, IconPill } from "./icons";

/**
 * "Your visit in four steps" — a scroll-controlled story.
 * The right card stays pinned (sticky) while the four steps scroll past;
 * whichever step is near the centre of the viewport lights up both columns.
 * Replaces the old Triage + Preparation walls of text by *demonstrating* the flow.
 */
const STEPS = [
  {
    icon: IconClipboard,
    title: "Welcome & registration",
    body: "One counter, one card. You leave with a physical appointment card that keeps your health story continuous.",
    chips: ["2-minute check-in", "Walk-ins welcome"],
  },
  {
    icon: IconActivity,
    title: "Triage & vitals",
    body: "A nurse checks temperature, blood pressure and your reason for the visit. Urgent cases are seen first — always.",
    chips: ["Red · Yellow · Green", "Vitals in minutes"],
  },
  {
    icon: IconStethoscope,
    title: "See your clinician",
    body: "A GP, dental surgeon or visiting specialist listens first, explains clearly, and never rushes the questions that matter.",
    chips: ["English & Swahili", "Plain answers"],
  },
  {
    icon: IconPill,
    title: "Lab, treatment & next steps",
    body: "On-site lab results, medication and a clear plan — and if you need a hospital, we arrange the referral ourselves.",
    chips: ["Same-day results", "Referral sorted"],
  },
];

export default function VisitJourney() {
  const [active, setActive] = useState(0);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const idx = Number((e.target as HTMLElement).dataset.index);
            setActive(idx);
          }
        });
      },
      { rootMargin: "-42% 0px -42% 0px", threshold: 0 }
    );

    stepRefs.current.forEach((el) => el && obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const Current = STEPS[active].icon;

  return (
    <section id="visit" className="visit" aria-label="What a visit looks like">
      <div className="wrap">
        <Reveal>
          <div className="section-head">
            <p className="kicker"><span className="dash" /> 02 · How a visit works</p>
            <h2 className="section-title">Four steps. <em>No guesswork.</em></h2>
            <p className="section-sub">
              Keep scrolling — the card follows your progress through a typical visit.
            </p>
          </div>
        </Reveal>

        <div className="visit-grid">
          {/* Steps scroll past… */}
          <div className="visit-steps">
            {STEPS.map((s, i) => (
              <div
                key={s.title}
                data-index={i}
                ref={(el) => { stepRefs.current[i] = el; }}
                className={`visit-step ${active === i ? "is-active" : ""}`}
              >
                <span className="num" aria-hidden="true">0{i + 1}</span>
                <div>
                  <h3>{s.title}</h3>
                  <p>{s.body}</p>
                  <div className="step-chips">
                    {s.chips.map((c) => <span key={c}>{c}</span>)}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* …while this card stays pinned */}
          <div className="visit-visual" aria-hidden="true">
            <div className="visit-card">
              <span className="vc-num">0{active + 1}</span>
              <span className="vc-label">{STEPS[active].title}</span>
              <div key={active} className="vc-icon">
                <Current className="w-12 h-12" strokeWidth={1.4} />
              </div>
              <div className="vc-bar">
                {STEPS.map((_, i) => (
                  <i key={i} className={i <= active ? "on" : ""} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

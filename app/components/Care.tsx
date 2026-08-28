"use client";

import { useEffect, useState } from "react";
import Reveal from "./Reveal";
import {
  IconStethoscope,
  IconTooth,
  IconBaby,
  IconLungs,
  IconFlask,
  IconScalpel,
  IconArrowRight,
} from "./icons";

interface CareProps { onBook: () => void; }

/**
 * "Care, at a glance" — an interactive demonstration instead of six text-heavy cards.
 * Hover / focus / tap a department row and the stage beside it performs the story:
 * icon, one plain-language line, and 3 short capability chips. 3D tilt follows the pointer.
 */
const DEPARTMENTS = [
  {
    icon: IconStethoscope,
    name: "General outpatient",
    tag: "Family doctor",
    line: "Everyday care for the whole family — from fevers and check-ups to chronic conditions like diabetes and blood pressure.",
    points: ["GP consultations", "Chronic care", "Paediatrics"],
    stageBg: "var(--color-leaf-tint)",
  },
  {
    icon: IconBaby,
    name: "Antenatal & family",
    tag: "Mother & child",
    line: "Walk with us from pregnancy test to postnatal review — gentle, continuous care for mother and baby.",
    points: ["ANC clinics", "Postnatal", "Family planning"],
    stageBg: "var(--color-sun-tint)",
  },
  {
    icon: IconTooth,
    name: "Dental surgery",
    tag: "Teeth",
    line: "Check-ups, fillings, scaling and gentle extractions — modern dentistry without the fear factor.",
    points: ["Fillings", "Scaling", "Extractions"],
    stageBg: "var(--color-river-tint)",
  },
  {
    icon: IconLungs,
    name: "Chest clinic",
    tag: "Breathing",
    line: "Specialist reviews for asthma, persistent cough and allergies, with follow-up you can actually keep.",
    points: ["Asthma", "Cough", "Allergies"],
    stageBg: "var(--color-coral-tint)",
  },
  {
    icon: IconFlask,
    name: "On-site lab",
    tag: "Answers, fast",
    line: "Blood, malaria, pregnancy and urine tests done while you wait — results feed straight into your consult.",
    points: ["Blood tests", "Malaria RDT", "Urinalysis"],
    stageBg: "var(--color-leaf-tint)",
  },
  {
    icon: IconScalpel,
    name: "Minor procedures",
    tag: "Done carefully",
    line: "Stitches, dressings and small procedures in a clean, calm theatre — in and out the same day.",
    points: ["Suturing", "Dressings", "Drainage"],
    stageBg: "var(--color-sun-tint)",
  },
];

export default function Care({ onBook }: CareProps) {
  const [active, setActive] = useState(0);
  const current = DEPARTMENTS[active];

  /*
   * Hover-to-preview, driven purely by `pointermove` + elementFromPoint.
   * Real pointer movement activates whichever row is under the cursor.
   * When the page scrolls under a *stationary* cursor the browser fires
   * mouseenter/mouseover but NO pointermove — so the stage never flickers
   * while scrolling. (mouseenter-based activation also races: it can fire
   * before the accompanying pointermove, which is why we don't use it.)
   */
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    const onMove = (e: PointerEvent) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const row = document.elementFromPoint(e.clientX, e.clientY)?.closest(".care-row");
        if (row) {
          const idx = Number((row as HTMLElement).dataset.index);
          if (!Number.isNaN(idx)) setActive(idx);
        }
      });
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => { window.removeEventListener("pointermove", onMove); cancelAnimationFrame(raf); };
  }, []);

  /* 3D tilt on the stage */
  const tilt = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = e.currentTarget;
    const r = el.getBoundingClientRect();
    const dx = (e.clientX - (r.left + r.width / 2)) / r.width;
    const dy = (e.clientY - (r.top + r.height / 2)) / r.height;
    el.style.transform = `rotateX(${(-dy * 4).toFixed(2)}deg) rotateY(${(dx * 5).toFixed(2)}deg)`;
  };
  const untilt = (e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.transform = "rotateX(0deg) rotateY(0deg)";
  };

  return (
    <section id="care" className="section" aria-label="Our care areas">
      <div className="wrap">
        <Reveal>
          <div className="section-head">
            <p className="kicker"><span className="dash" /> 01 · Care at a glance</p>
            <h2 className="section-title">
              Six care areas. <em>One roof.</em>
            </h2>
            <p className="section-sub">
              Point at a service — the picture tells the story. Everything here is walk-in friendly.
            </p>
          </div>
        </Reveal>

        <div className="care-grid">
          {/* Department rows */}
          <Reveal variant="left" className="min-w-0">
            <ul className="care-list" role="tablist" aria-label="Choose a care area">
              {DEPARTMENTS.map((d, i) => (
                <li key={d.name}>
                  <button
                    role="tab"
                    data-index={i}
                    aria-selected={active === i}
                    aria-controls="care-stage"
                    className="care-row"
                    onFocus={() => setActive(i)}
                    onClick={() => setActive(i)}
                  >
                    <span className="idx">0{i + 1}</span>
                    <span className="name">{d.name}</span>
                    <span className="tag">{d.tag}</span>
                  </button>
                </li>
              ))}
            </ul>
          </Reveal>

          {/* Stage — demonstrates the hovered department */}
          <Reveal variant="right" delay={80} className="care-stage-wrap min-w-0">
            <div
              id="care-stage"
              role="tabpanel"
              aria-label={current.name}
              className="care-stage"
              style={{ background: current.stageBg }}
              onMouseMove={tilt}
              onMouseLeave={untilt}
            >
              <div key={active} className="stage-icon">
                <current.icon className="w-10 h-10" strokeWidth={1.5} />
              </div>
              <h3 key={`t-${active}`} className="stage-title">{current.name}</h3>
              <p key={`l-${active}`} className="stage-line">{current.line}</p>
              <div key={`p-${active}`} className="stage-points">
                {current.points.map((p, i) => (
                  <span key={p} style={{ animationDelay: `${0.1 + i * 0.07}s` }}>{p}</span>
                ))}
              </div>

              <button onClick={onBook} className="btn btn-primary mt-5 self-start !shadow-[var(--sticker)]">
                Book {current.name.split(" ")[0].toLowerCase() === "general" ? "a visit" : "this care"} <IconArrowRight className="w-4 h-4" />
              </button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

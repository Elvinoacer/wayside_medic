"use client";

import { useState } from "react";
import Reveal from "./Reveal";
import { IconPlus, IconArrowRight } from "./icons";

interface FaqProps { onBook: () => void; }

const QUESTIONS = [
  {
    q: "Do I need an appointment, or can I walk in?",
    a: "Both work. Walk-ins are seen throughout the day — booking simply reserves your slot so you spend less time in the waiting area.",
  },
  {
    q: "What should I bring for my first visit?",
    a: "Just your ID or birth certificate, and any medication or previous clinic cards you have. SHA members should bring their SHA/NHIF number for verification at the counter.",
  },
  {
    q: "How do payments work?",
    a: "M-Pesa, cash, Co-op Kwa Jirani, SHA and NHIF are all accepted. You are told the expected cost before treatment starts — no surprises.",
  },
  {
    q: "What if I need a hospital or a specialist?",
    a: "We refer directly. Wayside works with St. Francis Community Hospital and other partners, and our team arranges the handover so you are never sent off with just a phone number.",
  },
];

export default function Faq({ onBook }: FaqProps) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="section" aria-label="Frequently asked questions">
      <div className="wrap">
        <Reveal>
          <div className="section-head">
            <p className="kicker"><span className="dash" /> 05 · Quick answers</p>
            <h2 className="section-title">
              Asked <em>all the time.</em>
            </h2>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <div className="faq-list">
            {QUESTIONS.map((item, i) => (
              <div key={item.q} className="faq-item" data-open={open === i}>
                <button
                  className="faq-q"
                  aria-expanded={open === i}
                  aria-controls={`faq-panel-${i}`}
                  onClick={() => setOpen(open === i ? null : i)}
                >
                  {item.q}
                  <span className="pm" aria-hidden="true"><IconPlus className="w-4 h-4" strokeWidth={2.4} /></span>
                </button>
                <div id={`faq-panel-${i}`} className="faq-a" role="region">
                  <div><p>{item.a}</p></div>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={140}>
          <div className="mt-10 card p-6 sm:p-7 flex flex-wrap items-center justify-between gap-4 max-w-46rem">
            <p className="font-display text-xl sm:text-2xl font-semibold tracking-tight max-w-sm">
              Still unsure about something? <em className="text-leaf">Just ask reception.</em>
            </p>
            <div className="flex flex-wrap gap-2.5">
              <button onClick={onBook} className="btn btn-primary">Book a visit <IconArrowRight className="w-4 h-4" /></button>
              <a href="tel:+254700000000" className="btn btn-ghost">Call us</a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import { IconChevron, IconClipboard, IconArrowRight } from "./icons";
import Reveal from "./Reveal";

const FAQ_ITEMS = [
  {
    q: "Do I need an appointment, or can I walk in?",
    a: "Both are welcome. Routine outpatient, dental and antenatal visits are best scheduled ahead via the Book Appointment button or by calling reception — this guarantees your slot and reduces waiting time. Acute care and emergency walk-ins are received through our triage desk and prioritized by clinical urgency, not by arrival time.",
  },
  {
    q: "What should I bring to my first visit?",
    a: "Adults should present a national ID card; minors require a birth notification or guardian ID. If you are visiting for antenatal or OBGYN services, carry your maternal health booklet, previous lab reports and any external ultrasound scans. For dental or minor surgical procedures, expect pre-procedure vital signs screening (including blood pressure) and a signed informed consent form.",
  },
  {
    q: "Is Wayside open on Sundays?",
    a: "No — Sundays are reserved for emergency scheduled consultations only. We operate Monday through Saturday, 8:00 AM to 6:00 PM. Saturdays run full outpatient, dental and laboratory services. For critical emergencies outside our operating hours, please call St. Francis Community Hospital directly on +254 741 689983 or +254 713 969608.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We support M-Pesa (Buy Goods / Paybill) at the reception and pharmacy counters, direct cash settlement at the central cash desk, on-site Co-op Kwa Jirani agency banking (cash withdrawals and bank transfers), and SHA / legacy NHIF outpatient claims processing. Insured patients must present active SHA registration details for electronic verification prior to consultation.",
  },
  {
    q: "Are children welcome at the clinic?",
    a: "Yes — Wayside provides pediatric consultations, immunization reviews and routine child health monitoring within General Outpatient. Please note that as a Level 2 outpatient facility we maintain zero pediatric cots and zero inpatient beds, so acute pediatric emergencies requiring admission are stabilized on-site and escalated to St. Francis Community Hospital under our referral protocol.",
  },
  {
    q: "How is my medical data protected?",
    a: "All your health records are processed under the Data Protection Act (2019), the Data Protection (General) Regulations of 2021, and the Digital Health Act. We are ODPC-registered, retain records for at least 20 years, encrypt all electronic systems with AES-256 (rest) and TLS 1.3 (transit), enforce role-based access controls, and notify the ODPC within 72 hours in the unlikely event of a personal data breach.",
  },
  {
    q: "Can I see a specialist without a GP referral?",
    a: "Our Chest (Pulmonology) and Skin (Dermatology) specialist clinics typically operate on bi-weekly or weekly scheduled sessions and are best accessed after a General Practitioner consultation, so the GP can hand off relevant history, vitals and lab results. Book a GP consultation first — if specialist review is needed, our team will schedule the specialist appointment and brief the specialist on your case.",
  },
  {
    q: "Where exactly are you located?",
    a: "Off Kasarani-Mwiki Road, directly opposite Safe Landing Guest House (also locally known as Safelanding Bar), at the Sunton Stage / Hunters area of Kasarani Constituency, Nairobi. From the CBD, take Route 17B from Accra Road or main OTC stages toward Mwiki and alight at Sunton Stage. The clinic features ground-floor, step-free access for elderly, disabled and stroller-bound patients.",
  },
];

interface FAQProps {
  onBook: () => void;
}

export default function FAQ({ onBook }: FAQProps) {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section id="faq" className="section relative overflow-hidden">
      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 pb-28 sm:pb-16">
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-xs font-semibold text-teal-700 uppercase tracking-wider">
            <IconClipboard className="w-3.5 h-3.5" /> FAQ
          </span>
          <h2 className="mt-4 font-display font-extrabold tracking-tight text-ink text-3xl sm:text-4xl lg:text-5xl leading-[1.1]">
            Answers to the questions we{" "}
            <span className="text-gradient">hear most.</span>
          </h2>
          <p className="mt-5 text-ink/70 text-base sm:text-lg leading-relaxed">
            Still wondering about something specific? Call reception or use the booking
            form — our team is happy to walk you through it in English or Swahili.
          </p>
        </div>

        <div className="mt-8 sm:mt-12 space-y-3">
          {FAQ_ITEMS.map((item, i) => {
            const open = openIdx === i;
            return (
              <Reveal key={i} delay={i * 30}>
                <div
                  className={`accordion-item glass-card rounded-2xl ${open ? "glass-strong" : "glass"}`}
                  data-open={open}
                >
                  <button
                    onClick={() => setOpenIdx(open ? null : i)}
                    className="w-full flex items-center justify-between gap-3 p-4 sm:p-6 text-left"
                    aria-expanded={open}
                  >
                    <span className="font-display font-semibold text-ink text-[15px] sm:text-lg leading-snug">
                      {item.q}
                    </span>
                    <span className={`accordion-icon flex items-center justify-center w-8 h-8 rounded-full shrink-0 ${open ? "bg-teal-600 text-white" : "bg-teal-500/10 text-teal-700"}`}>
                      <IconChevron className="w-4 h-4" />
                    </span>
                  </button>
                  <div className="accordion-content">
                    <div>
                      <p className="px-4 sm:px-6 pb-4 sm:pb-6 text-sm sm:text-[15px] text-ink/70 leading-relaxed">
                        {item.a}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={120}>
          <div className="mt-8 sm:mt-10 glass-strong rounded-3xl p-5 sm:p-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-5 sm:gap-6">
            <div className="flex-1 min-w-0">
              <h3 className="font-display font-bold text-ink text-xl sm:text-lg leading-tight">
                Still have a question?
              </h3>
              <p className="mt-2 text-sm sm:text-base text-ink/65 leading-relaxed max-w-2xl">
                Our reception team is happy to help in English or Swahili — call ahead or
                book online and bring any existing records.
              </p>
            </div>
            <div className="flex w-full sm:w-auto flex-col min-[420px]:flex-row gap-3 shrink-0">
              <a href="tel:+254700000000" className="btn-ghost w-full sm:w-auto justify-center min-h-14 px-5">
                Call reception
              </a>
              <button onClick={onBook} className="btn-primary w-full sm:w-auto justify-center min-h-14 px-5">
                Book a visit
                <IconArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

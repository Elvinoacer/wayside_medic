"use client";

import Image from "next/image";
import {
  IconHeart,
  IconShield,
  IconUsers,
  IconStethoscope,
  IconCheck,
} from "./icons";

export default function About() {
  return (
    <section id="about" className="section relative">
      <div className="absolute inset-0 grid-pattern opacity-50 pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Visual */}
          <div className="relative order-2 lg:order-1">
            <div className="relative aspect-square rounded-[2rem] overflow-hidden glass-strong p-2.5">
              <Image
                src="https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/66ff5c61c751.jpg"
                alt="A doctor gently talking with a patient"
                fill
                className="object-cover rounded-[1.6rem]"
                sizes="(max-width: 1024px) 90vw, 45vw"
              />
            </div>

            {/* Floating badge — care philosophy */}
            <div className="absolute -bottom-6 -right-2 sm:right-6 glass-strong rounded-3xl p-5 max-w-[280px] shadow-xl">
              <div className="flex items-center gap-2.5 mb-2">
                <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-rose-500/10 text-rose-500">
                  <IconHeart className="w-5 h-5" />
                </div>
                <h4 className="font-display font-bold text-ink text-sm">
                  Human-centered care
                </h4>
              </div>
              <p className="text-xs text-ink/65 leading-relaxed">
                We blend clinical excellence with active listening, transparent fees, and clear explanations — in English &amp; Swahili.
              </p>
            </div>
          </div>

          {/* Copy */}
          <div className="order-1 lg:order-2">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-xs font-semibold text-teal-700 uppercase tracking-wider">
              <IconHeart className="w-3.5 h-3.5" /> About Wayside
            </span>
            <h2 className="mt-4 font-display font-extrabold tracking-tight text-ink text-3xl sm:text-4xl lg:text-5xl leading-[1.1]">
              Compassionate, regulator-approved{" "}
              <span className="text-gradient">primary healthcare</span>{" "}
              for the Kasarani-Mwiki community.
            </h2>
            <p className="mt-5 text-ink/70 text-base sm:text-lg leading-relaxed">
              Wayside Medical &amp; Dental Clinic is a KMPDC-licensed Level 2 Private
              Practice Medical Clinic serving the high-density neighbourhoods of Clay City,
              Sunton and Hunters along Kasarani-Mwiki Road. As a first-line ambulatory
              care portal, we ease pressure on regional referral hospitals by handling the
              everyday health needs of families, commuters, and informal workers in the
              corridor — gently, expertly, and affordably.
            </p>
            <p className="mt-4 text-ink/70 text-base leading-relaxed">
              Our multi-disciplinary team brings together General Practitioners, Dental
              Surgeons, visiting Specialist Physicians (Chest &amp; Skin), registered
              nurses, laboratory technologists and pharmaceutical technologists — each
              holding active annual practice licences with KMPDC, NCK and paramedical
              boards. Every encounter is built around empathy, transparency, and
              continuity, anchored by physical appointment cards that preserve your
              longitudinal health story.
            </p>

            {/* Pillars */}
            <div className="mt-8 grid sm:grid-cols-3 gap-4">
              {PILLARS.map((p) => (
                <div key={p.title} className="glass-card glass rounded-2xl p-4">
                  <div className={`flex items-center justify-center w-10 h-10 rounded-xl ${p.bg} ${p.color} mb-3`}>
                    <p.icon className="w-5 h-5" />
                  </div>
                  <h4 className="font-display font-bold text-ink text-sm leading-tight">
                    {p.title}
                  </h4>
                  <p className="mt-1 text-xs text-ink/60 leading-snug">{p.body}</p>
                </div>
              ))}
            </div>

            {/* Bullets */}
            <ul className="mt-6 grid sm:grid-cols-2 gap-2.5">
              {[
                "Active KMPDC & NCK annual licences",
                "Ground-floor, step-free access",
                "Bilingual staff — English & Swahili",
                "20-year secure health records retention",
              ].map((t) => (
                <li key={t} className="flex items-start gap-2 text-sm text-ink/75">
                  <span className="mt-0.5 flex items-center justify-center w-5 h-5 rounded-full bg-teal-500/15 text-teal-700 shrink-0">
                    <IconCheck className="w-3.5 h-3.5" />
                  </span>
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

const PILLARS = [
  {
    title: "Accessible care",
    body: "Ground-floor, stroller-friendly access directly on the matatu corridor.",
    icon: IconUsers,
    color: "text-teal-700",
    bg: "bg-teal-500/10",
  },
  {
    title: "Fully licensed",
    body: "KMPDC Level 2 Private Practice with verified annual practitioner licences.",
    icon: IconShield,
    color: "text-sand-500",
    bg: "bg-sand-400/15",
  },
  {
    title: "Clinical depth",
    body: "Six departments under one roof, with on-site lab and minor surgery suite.",
    icon: IconStethoscope,
    color: "text-sky-600",
    bg: "bg-sky-500/10",
  },
];

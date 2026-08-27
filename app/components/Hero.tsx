"use client";

import Image from "next/image";
import { IconClock, IconLocation, IconShield, IconArrowRight, IconCalendar, IconStethoscope, IconPhone, IconCheck } from "./icons";

interface HeroProps { onBook: () => void; }

export default function Hero({ onBook }: HeroProps) {
  return (
    <section id="top" className="wayside-hero overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="wayside-hero-grid">
          <div>
            <div className="wayside-eyebrow animate-fade-up"><span className="w-2 h-2 rounded-full bg-teal-600 animate-pulse" /> KMPDC licensed · Level 2 clinic</div>
            <h1 className="wayside-headline font-display font-extrabold mt-5 animate-fade-up" style={{ animationDelay: ".05s" }}>
              Healthcare that feels <span className="accent">close to home.</span>
            </h1>
            <p className="wayside-copy mt-5 animate-fade-up" style={{ animationDelay: ".12s" }}>
              Everyday family care, dental, maternity, diagnostics and specialist clinics — thoughtfully brought together on Kasarani–Mwiki Road.
            </p>
            <div className="wayside-hero-actions animate-fade-up" style={{ animationDelay: ".18s" }}>
              <button onClick={onBook} className="wayside-primary"><IconCalendar className="w-4 h-4" /> Book an appointment <IconArrowRight className="w-4 h-4" /></button>
              <a href="tel:+254700000000" className="wayside-secondary"><IconPhone className="w-4 h-4 text-teal-700" /> Talk to reception</a>
            </div>

            <div className="hero-statbar animate-fade-up" style={{ animationDelay: ".24s" }}>
              <div className="hero-stat"><strong>8AM–6PM</strong><span>Mon–Sat</span></div>
              <div className="hero-stat"><strong>6 departments</strong><span>One clinic</span></div>
              <div className="hero-stat"><strong>Sunton / Mwiki</strong><span>Kasarani</span></div>
            </div>
          </div>

          <div className="hero-visual animate-scale-in">
            <div className="hero-orb a" />
            <div className="hero-orb b" />
            <div className="hero-photo">
              <Image src="https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/1edf5f1f9482.png" alt="Friendly clinician ready to assist a patient" fill priority sizes="(max-width: 1024px) 92vw, 44vw" className="object-cover" />
              <div className="absolute bottom-0 left-0 right-0 z-10 p-5 sm:p-7 text-white">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[.14em] opacity-80"><IconStethoscope className="w-4 h-4" /> Compassionate care</div>
                <p className="mt-2 font-display font-bold text-xl sm:text-2xl leading-tight">A calmer, clearer way to visit your clinic.</p>
              </div>
            </div>
            <div className="hero-float trust animate-float-slow">
              <div className="flex items-center gap-1 text-amber-500"><span>★★★★★</span></div>
              <p className="mt-2 font-bold text-sm text-ink">Built around families.</p>
              <p className="tiny mt-1">From Clay City, Sunton, Hunters and nearby estates.</p>
            </div>
            <div className="hero-float badge animate-float-medium">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-teal-50 grid place-items-center text-teal-700 shrink-0"><IconShield className="w-4.5 h-4.5" /></div>
                <div><div className="text-sm font-extrabold text-ink">KMPDC licensed</div><div className="tiny">Level 2 private clinic</div></div>
              </div>
              <div className="mt-3 pt-3 border-t border-ink/8 flex items-center gap-1.5 text-xs font-semibold text-teal-800"><IconCheck className="w-3.5 h-3.5" /> Clear, regulator-approved care</div>
            </div>
          </div>
        </div>

        <div className="mt-8 sm:mt-12 flex flex-wrap justify-center gap-2.5 text-xs font-semibold text-ink/55">
          {["General outpatient","Antenatal","Dental","Diagnostics","Specialist clinics","Minor surgery"].map((item) => <a key={item} href="#services" className="px-3.5 py-2 rounded-full bg-white/65 border border-ink/7 hover:border-teal-200 hover:text-teal-800 transition-colors">{item}</a>)}
        </div>
      </div>
    </section>
  );
}

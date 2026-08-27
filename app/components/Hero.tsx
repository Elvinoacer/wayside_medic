"use client";

import Image from "next/image";
import {
  IconClock,
  IconLocation,
  IconShield,
  IconArrowRight,
  IconCalendar,
  IconStethoscope,
  IconStar,
  IconCheck,
} from "./icons";

interface HeroProps {
  onBook: () => void;
}

export default function Hero({ onBook }: HeroProps) {
  return (
    <section id="top" className="relative pt-32 sm:pt-36 lg:pt-40 pb-20 lg:pb-28 overflow-hidden">
      {/* Decorative blobs */}
      <div className="blob w-[30rem] h-[30rem] bg-teal-300/60 -top-20 -left-32 animate-float-slow" />
      <div className="blob w-[28rem] h-[28rem] bg-sky-300/40 top-40 right-[-12rem] animate-float-medium" />
      <div className="blob w-[22rem] h-[22rem] bg-sand-200/40 bottom-0 left-1/3" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left — Copy */}
          <div className="lg:col-span-6 text-center lg:text-left">
            {/* Trust pill */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs sm:text-sm font-medium text-teal-800 animate-fade-up">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-500 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-600" />
              </span>
              KMPDC Licensed · Level 2 Outpatient · Open Mon–Sat 8AM–6PM
            </div>

            {/* Heading */}
            <h1 className="mt-6 font-display font-extrabold tracking-tight text-ink text-[2.5rem] leading-[1.05] sm:text-6xl lg:text-[4rem] animate-fade-up" style={{ animationDelay: "0.05s" }}>
              Your trusted{" "}
              <span className="text-gradient">family clinic</span>{" "}
              in the heart of Kasarani.
            </h1>

            {/* Sub */}
            <p className="mt-5 sm:mt-7 text-base sm:text-lg text-ink/70 max-w-xl mx-auto lg:mx-0 leading-relaxed animate-fade-up" style={{ animationDelay: "0.15s" }}>
              From routine check-ups and antenatal care to dental surgery, specialist
              chest &amp; skin clinics, lab tests and minor surgery — Wayside brings
              compassionate, regulator-approved primary healthcare right to your
              neighbourhood along Kasarani-Mwiki Road.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start animate-fade-up" style={{ animationDelay: "0.25s" }}>
              <button onClick={onBook} className="btn-primary">
                <IconCalendar className="w-4 h-4" />
                Book Appointment
                <IconArrowRight className="w-4 h-4" />
              </button>
              <a href="#services" className="btn-ghost">
                <IconStethoscope className="w-4 h-4 text-teal-700" />
                Explore Services
              </a>
            </div>

            {/* Quick stats row */}
            <div className="mt-10 grid grid-cols-3 gap-3 sm:gap-4 max-w-md mx-auto lg:mx-0 animate-fade-up" style={{ animationDelay: "0.35s" }}>
              <div className="glass-card glass rounded-2xl p-3 sm:p-4">
                <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-teal-500/10 text-teal-700 mb-2 mx-auto lg:mx-0">
                  <IconClock className="w-4.5 h-4.5" />
                </div>
                <div className="font-display font-bold text-ink text-base sm:text-lg leading-none">8AM–6PM</div>
                <div className="text-[11px] sm:text-xs text-ink/60 mt-1">Mon–Sat</div>
              </div>
              <div className="glass-card glass rounded-2xl p-3 sm:p-4">
                <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-sand-400/15 text-sand-500 mb-2 mx-auto lg:mx-0">
                  <IconShield className="w-4.5 h-4.5" />
                </div>
                <div className="font-display font-bold text-ink text-base sm:text-lg leading-none">6 Depts</div>
                <div className="text-[11px] sm:text-xs text-ink/60 mt-1">Specialties</div>
              </div>
              <div className="glass-card glass rounded-2xl p-3 sm:p-4">
                <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-sky-500/10 text-sky-600 mb-2 mx-auto lg:mx-0">
                  <IconLocation className="w-4.5 h-4.5" />
                </div>
                <div className="font-display font-bold text-ink text-base sm:text-lg leading-none">Sunton</div>
                <div className="text-[11px] sm:text-xs text-ink/60 mt-1">Hunters · Mwiki</div>
              </div>
            </div>
          </div>

          {/* Right — Visual */}
          <div className="lg:col-span-6 relative">
            <div className="relative animate-scale-in" style={{ animationDelay: "0.2s" }}>
              {/* Main image card */}
              <div className="relative aspect-[4/5] sm:aspect-[5/6] rounded-[2rem] overflow-hidden glass-strong p-2.5">
                <Image
                  src="https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/1edf5f1f9482.png"
                  alt="Friendly clinic nurse ready to assist a patient"
                  fill
                  className="object-cover rounded-[1.6rem]"
                  priority
                  sizes="(max-width: 1024px) 90vw, 40vw"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-2.5 rounded-[1.6rem] bg-gradient-to-t from-ink/40 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Floating glass card — rating */}
              <div className="absolute -top-4 -left-4 sm:-left-8 glass-strong rounded-2xl p-3.5 sm:p-4 animate-float-slow shadow-xl w-[200px] sm:w-[230px]">
                <div className="flex items-center gap-1.5 mb-1">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <IconStar key={i} className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                  ))}
                </div>
                <p className="text-xs text-ink/70 leading-snug">
                  Trusted by <span className="font-bold text-ink">families</span> across Clay City, Sunton &amp; Hunters.
                </p>
              </div>

              {/* Floating glass card — accreditation */}
              <div className="absolute -bottom-5 -right-3 sm:-right-6 glass-strong rounded-2xl p-3.5 sm:p-4 animate-float-medium shadow-xl w-[220px] sm:w-[260px]">
                <div className="flex items-center gap-2.5">
                  <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-teal-500/10 text-teal-700 shrink-0">
                    <IconShield className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-display font-bold text-ink text-sm leading-tight">
                      KMPDC Licensed
                    </div>
                    <div className="text-[11px] text-ink/60 leading-tight mt-0.5">
                      Level 2 Private Practice Medical Clinic
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating glass card — services quick */}
              <div className="absolute top-1/2 -right-2 sm:-right-10 glass-strong rounded-2xl px-3.5 py-2.5 animate-bounce-soft shadow-xl hidden sm:block">
                <div className="flex items-center gap-2 text-xs">
                  <IconCheck className="w-3.5 h-3.5 text-teal-600" />
                  <span className="font-semibold text-ink">M-Pesa · SHA · NHIF</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Marquee trust strip */}
        <div className="relative mt-16 lg:mt-20 overflow-hidden">
          <div className="flex items-center gap-3 mb-3 text-xs uppercase tracking-[0.2em] text-ink/50 font-semibold justify-center">
            <span className="h-px w-8 bg-ink/15" />
            Trusted care, every day
            <span className="h-px w-8 bg-ink/15" />
          </div>
          <div className="relative flex overflow-hidden mask-fade">
            <div className="marquee-track gap-4 animate-marquee shrink-0">
              {MARQUEE_ITEMS.map((item, i) => (
                <span key={i} className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-medium text-ink/70 whitespace-nowrap">
                  <IconCheck className="w-3.5 h-3.5 text-teal-600" />
                  {item}
                </span>
              ))}
            </div>
            <div className="marquee-track gap-4 animate-marquee shrink-0" aria-hidden="true">
              {MARQUEE_ITEMS.map((item, i) => (
                <span key={`b-${i}`} className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-medium text-ink/70 whitespace-nowrap">
                  <IconCheck className="w-3.5 h-3.5 text-teal-600" />
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .mask-fade {
          -webkit-mask-image: linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%);
          mask-image: linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%);
        }
      `}</style>
    </section>
  );
}

const MARQUEE_ITEMS = [
  "General Outpatient",
  "Dental Surgery",
  "Antenatal Care",
  "Chest Specialist",
  "Skin Specialist",
  "Lab Tests",
  "Minor Surgery",
  "Family Planning",
  "M-Pesa Accepted",
  "SHA Accredited",
  "KMPDC Licensed",
  "Co-op Kwa Jirani On-site",
];

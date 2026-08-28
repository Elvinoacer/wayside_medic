"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import {
  IconShield,
  IconClock,
  IconLanguage,
  IconArrowRight,
  IconCalendar,
  IconPhone,
  IconCheck,
  IconPlus,
} from "./icons";

interface HeroProps { onBook: () => void; }

export default function Hero({ onBook }: HeroProps) {
  const photoRef = useRef<HTMLDivElement>(null);
  const shapesRef = useRef<HTMLDivElement>(null);

  /* Pointer tilt on the photo card + gentle parallax on floating shapes */
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const photo = photoRef.current;
    const shapes = shapesRef.current;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      const el = photo;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const cx = r.left + r.width / 2;
      const cy = r.top + r.height / 2;
      const dx = (e.clientX - cx) / r.width;
      const dy = (e.clientY - cy) / r.height;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        el.style.transform = `rotateX(${(-dy * 5).toFixed(2)}deg) rotateY(${(dx * 6).toFixed(2)}deg)`;
      });
    };

    const onLeave = () => {
      if (photo) photo.style.transform = "rotateX(0deg) rotateY(0deg)";
    };

    const onScroll = () => {
      if (!shapes) return;
      const y = window.scrollY;
      const kids = shapes.children;
      for (let i = 0; i < kids.length; i++) {
        const speed = Number((kids[i] as HTMLElement).dataset.speed || 0);
        (kids[i] as HTMLElement).style.transform = `translateY(${(y * speed).toFixed(1)}px) rotate(${(y * speed * 0.35).toFixed(1)}deg)`;
      }
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    photo?.addEventListener("mouseleave", onLeave);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMove);
      photo?.removeEventListener("mouseleave", onLeave);
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section id="top" className="hero" aria-label="Welcome">
      <div className="wrap">
        <div className="hero-grid">
          {/* Copy — few words, strong actions */}
          <div>
            <p className="kicker animate-[hero-in_.7s_ease_both]"><span className="dash" /> KMPDC-licensed · Kasarani, Nairobi</p>

            <h1 className="display hero-title mt-5 animate-[hero-in_.7s_ease_.08s_both]">
              Good care,<br />
              <span className="marker">
                close to home.
                <svg viewBox="0 0 220 14" preserveAspectRatio="none" aria-hidden="true">
                  <path d="M3 10 Q 30 4 60 8 T 120 8 T 180 8 T 218 7" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
                </svg>
              </span>
            </h1>

            <p className="hero-copy animate-[hero-in_.7s_ease_.16s_both]">
              See a doctor, dentist or specialist today — walk in, or book in under a minute.
            </p>

            <div className="hero-actions animate-[hero-in_.7s_ease_.24s_both]">
              <button onClick={onBook} className="btn btn-primary">
                <IconCalendar className="w-4.5 h-4.5" /> Book an appointment <IconArrowRight className="w-4.5 h-4.5" />
              </button>
              <a href="tel:+254700000000" className="btn btn-ghost">
                <IconPhone className="w-4.5 h-4.5 text-leaf" /> Call reception
              </a>
            </div>

            <div className="hero-chips animate-[hero-in_.7s_ease_.32s_both]" aria-label="Quick facts">
              <span className="chip"><IconClock className="w-4 h-4 text-leaf" /> Mon–Sat · 8 AM–6 PM</span>
              <span className="chip"><IconShield className="w-4 h-4 text-leaf" /> SHA &amp; M-Pesa accepted</span>
              <span className="chip"><IconLanguage className="w-4 h-4 text-leaf" /> English &amp; Swahili</span>
            </div>

            <p className="scroll-cue animate-[hero-in_.7s_ease_.4s_both]" aria-hidden="true">
              <span className="mouse" /> Scroll to explore
            </p>
          </div>

          {/* Visual — one photo, two floating facts, parallax doodles */}
          <div className="hero-visual animate-[hero-in_.9s_ease_.2s_both]">
            <div ref={shapesRef} aria-hidden="true" className="absolute inset-0">
              <span data-speed="-0.06" className="hero-shape left-0 top-6 text-coral"><IconPlus className="w-8 h-8" strokeWidth={2.4} /></span>
              <span data-speed="0.045" className="hero-shape right-2 top-0 w-14 h-14 rounded-full border-[2.5px] border-ink bg-sun block" />
              <span data-speed="-0.035" className="hero-shape right-6 bottom-10 text-leaf"><IconPlus className="w-10 h-10" strokeWidth={2.4} /></span>
              <span data-speed="0.06" className="hero-shape left-2 bottom-2 w-9 h-9 rounded-full border-[2.5px] border-ink bg-leaf-tint block" />
            </div>

            <div ref={photoRef} className="hero-photo will-change-transform">
              <Image
                src="/images/hero-care.jpg"
                alt="A Wayside nurse gently holding a baby while the smiling mother looks on"
                fill
                priority
                sizes="(max-width: 1024px) 92vw, 44vw"
                className="object-cover"
              />
            </div>

            <div className="hero-float trust left-0 top-2 animate-[float-soft_6s_ease-in-out_infinite]">
              <p className="flex items-center gap-1.5 text-[13px] font-extrabold text-ink">
                <span className="grid place-items-center w-6 h-6 rounded-full bg-leaf text-white"><IconCheck className="w-3.5 h-3.5" strokeWidth={2.6} /></span>
                Open today
              </p>
              <p className="tiny mt-1">8:00 AM – 6:00 PM · walk-ins welcome</p>
            </div>

            <div className="hero-float badge right-0 bottom-8 animate-[float-soft_7s_ease-in-out_1s_infinite]">
              <div className="flex items-center gap-2.5">
                <span className="grid place-items-center w-9 h-9 rounded-lg bg-sun-tint border-2 border-ink text-ink shrink-0"><IconShield className="w-4.5 h-4.5" /></span>
                <span>
                  <span className="block text-[13px] font-extrabold text-ink leading-tight">KMPDC licensed</span>
                  <span className="tiny">Level 2 private clinic</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}

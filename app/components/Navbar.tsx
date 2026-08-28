"use client";

import { useEffect, useState } from "react";
import { IconLogo, IconMenu, IconClose, IconPhone, IconCalendar, IconChevron } from "./icons";

const NAV_LINKS = [
  { label: "Care", href: "#care" },
  { label: "Your visit", href: "#visit" },
  { label: "Hours & pay", href: "#plan" },
  { label: "Find us", href: "#find-us" },
];

interface NavbarProps { onBook: () => void; }

export default function Navbar({ onBook }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const y = window.scrollY;
        const max = document.documentElement.scrollHeight - window.innerHeight;
        setScrolled(y > 14);
        setProgress(max > 0 ? Math.min(1, y / max) : 0);
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => { window.removeEventListener("scroll", onScroll); cancelAnimationFrame(raf); };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <div className="scroll-progress" aria-hidden="true">
        <div className="bar" style={{ transform: `scaleX(${progress})` }} />
      </div>

      <header className="nav-shell">
        <nav className={`nav-bar ${scrolled ? "is-scrolled" : ""}`} aria-label="Main navigation">
          <a href="#top" className="flex items-center gap-2.5 flex-none min-w-0" aria-label="Wayside Medical & Dental Clinic home">
            <IconLogo className="w-9 h-9 sm:w-10 sm:h-10 shrink-0" />
            <span className="leading-tight whitespace-nowrap">
              <span className="block font-display font-semibold text-[15px] sm:text-base tracking-tight text-ink">Wayside</span>
              <span className="block text-[8px] sm:text-[9px] uppercase tracking-[.16em] font-extrabold text-leaf-deep">Medical &amp; Dental</span>
            </span>
          </a>

          <div className="hidden lg:flex items-center ml-auto">
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href} className="nav-link">{link.label}</a>
            ))}
          </div>

          <div className="flex items-center gap-1.5 sm:gap-2 ml-auto lg:ml-3 shrink-0">
            <a href="tel:+254700000000" className="hidden md:flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-bold text-ink-soft hover:text-ink hover:bg-leaf-tint transition-colors" aria-label="Call reception">
              <IconPhone className="w-4 h-4 text-leaf" />
              <span>Call</span>
            </a>
            <button
              onClick={onBook}
              className="btn btn-primary !min-h-0 !py-2.5 !px-4 !text-[13px] hidden sm:inline-flex"
              aria-label="Book an appointment"
            >
              <IconCalendar className="w-4 h-4 shrink-0" />
              <span className="whitespace-nowrap">Book visit</span>
            </button>
            <button
              aria-label="Open navigation menu"
              aria-expanded={open}
              onClick={() => setOpen(true)}
              className="lg:hidden w-11 h-11 grid place-items-center rounded-xl bg-sun-tint text-ink border-2 border-ink"
            >
              <IconMenu className="w-5 h-5" />
            </button>
          </div>
        </nav>
      </header>

      {open && (
        <div className="lg:hidden">
          <div className="drawer-overlay" onClick={close} aria-hidden="true" />
          <aside className={`drawer ${open ? "open" : ""}`} role="dialog" aria-modal="true" aria-label="Navigation menu">
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-2.5 min-w-0">
                <IconLogo className="w-9 h-9 shrink-0" />
                <span className="whitespace-nowrap">
                  <span className="block font-display font-semibold text-[15px]">Wayside</span>
                  <span className="block text-[9px] tracking-[.16em] uppercase font-extrabold text-leaf-deep">Medical &amp; Dental</span>
                </span>
              </div>
              <button aria-label="Close navigation menu" onClick={close} className="w-11 h-11 grid place-items-center rounded-xl bg-card border-2 border-ink"><IconClose className="w-5 h-5" /></button>
            </div>

            <p className="mt-7 rounded-2xl border-2 border-ink bg-sun-tint p-4 text-sm font-semibold leading-relaxed">
              Good care, close to home.<br />
              <span className="font-medium text-ink-soft">Open Mon–Sat, 8 AM–6 PM.</span>
            </p>

            <ul className="mt-6 grid gap-1.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} onClick={close} className="drawer-link">
                    {link.label}
                    <IconChevron className="w-4 h-4 -rotate-90 text-leaf" />
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-auto grid gap-2.5 pb-1">
              <button onClick={() => { close(); onBook(); }} className="btn btn-primary w-full"><IconCalendar className="w-4 h-4" /> Book appointment</button>
              <a href="tel:+254700000000" className="btn btn-ghost w-full"><IconPhone className="w-4 h-4 text-leaf" /> Call reception</a>
            </div>
          </aside>
        </div>
      )}
    </>
  );
}

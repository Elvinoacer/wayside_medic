"use client";

import { useEffect, useState } from "react";
import { IconLogo, IconMenu, IconClose, IconPhone, IconCalendar, IconChevron } from "./icons";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Your Visit", href: "#preparation" },
  { label: "Payments", href: "#payments" },
  { label: "Find Us", href: "#location" },
];

interface NavbarProps { onBook: () => void; }

export default function Navbar({ onBook }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 14);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <header className="fixed top-0 inset-x-0 z-50 px-2.5 sm:px-4 lg:px-8 py-2.5 sm:py-3">
        <nav className={`wayside-nav mx-auto w-full max-w-6xl rounded-2xl sm:rounded-full px-2.5 sm:px-4 py-2.5 flex items-center gap-2 ${scrolled ? "is-scrolled" : ""}`}>
          <a
            href="#top"
            className="flex items-center gap-2.5 flex-none min-w-0"
            aria-label="Wayside Medical & Dental Clinic home"
          >
            <IconLogo className="w-9 h-9 sm:w-10 sm:h-10 shrink-0" />
            <div className="leading-tight whitespace-nowrap">
              <div className="font-display font-extrabold text-[15px] sm:text-[16px] tracking-tight text-ink">Wayside</div>
              <div className="text-[8px] sm:text-[9px] uppercase tracking-[.14em] font-bold text-teal-700">Medical & Dental</div>
            </div>
          </a>

          <div className="hidden lg:flex items-center gap-1 ml-auto shrink-0">
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href} className="px-3.5 py-2 rounded-xl text-[13px] font-semibold text-ink/65 hover:text-teal-800 hover:bg-teal-50 transition-colors">{link.label}</a>
            ))}
          </div>

          <div className="flex items-center gap-1.5 sm:gap-2 ml-auto shrink-0">
            <a href="tel:+254700000000" className="hidden lg:flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-bold text-ink/75 hover:bg-teal-50 transition-colors">
              <IconPhone className="w-4 h-4 text-teal-700" />
              <span>Call us</span>
            </a>

            {/* On phones the fixed bottom dock already provides Call/Book actions.
                Keeping the header to Brand + Menu prevents the controls from ever
                squeezing the brand or being pushed outside the viewport. */}
            <button
              onClick={onBook}
              className="wayside-primary hidden md:inline-flex shrink-0 !px-3 lg:!px-4 !py-2.5 text-xs lg:text-sm min-h-10 lg:min-h-11"
              aria-label="Book an appointment"
            >
              <IconCalendar className="w-4 h-4 shrink-0" />
              <span className="whitespace-nowrap">Book appointment</span>
            </button>

            <button
              aria-label="Open navigation menu"
              onClick={() => setOpen(true)}
              className="lg:hidden w-10 h-10 sm:w-11 sm:h-11 shrink-0 grid place-items-center rounded-xl bg-teal-50 text-teal-800 border border-teal-100"
            >
              <IconMenu className="w-5 h-5" />
            </button>
          </div>
        </nav>
      </header>

      <div className={`fixed inset-0 z-[70] lg:hidden ${open ? "pointer-events-auto" : "pointer-events-none"}`} aria-hidden={!open}>
        <button aria-label="Close menu overlay" className={`absolute inset-0 bg-ink/35 backdrop-blur-sm transition-opacity ${open ? "opacity-100" : "opacity-0"}`} onClick={close} />
        <aside className={`absolute top-0 right-0 h-full w-[88%] max-w-sm bg-[#fbfaf7] shadow-2xl p-5 flex flex-col transition-transform duration-300 ${open ? "translate-x-0" : "translate-x-full"}`}>
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-2.5 min-w-0">
              <IconLogo className="w-9 h-9 shrink-0" />
              <div className="whitespace-nowrap">
                <div className="font-display font-extrabold text-[15px]">Wayside</div>
                <div className="text-[9px] tracking-[.16em] uppercase font-bold text-teal-700">Medical & Dental</div>
              </div>
            </div>
            <button aria-label="Close navigation menu" onClick={close} className="w-10 h-10 shrink-0 grid place-items-center rounded-xl bg-white border border-ink/10"><IconClose className="w-5 h-5" /></button>
          </div>
          <div className="mt-8 rounded-2xl bg-teal-50 border border-teal-100 p-4">
            <p className="text-xs font-bold uppercase tracking-[.12em] text-teal-800">Here when you need us</p>
            <p className="mt-1 text-sm leading-relaxed text-ink/65">Simple care, clear directions, and a quick path to an appointment.</p>
          </div>
          <ul className="mt-6 grid gap-1">
            {NAV_LINKS.map((link) => <li key={link.href}><a href={link.href} onClick={close} className="flex items-center justify-between px-4 py-4 rounded-2xl text-base font-bold text-ink hover:bg-teal-50 transition-colors">{link.label}<IconChevron className="w-4 h-4 -rotate-90 text-teal-700" /></a></li>)}
          </ul>
          <div className="mt-auto grid gap-3">
            <button onClick={() => { close(); onBook(); }} className="wayside-primary w-full"><IconCalendar className="w-4 h-4" /> Book appointment</button>
            <a href="tel:+254700000000" className="wayside-secondary w-full"><IconPhone className="w-4 h-4 text-teal-700" /> Call reception</a>
          </div>
        </aside>
      </div>
    </>
  );
}

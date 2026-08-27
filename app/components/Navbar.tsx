"use client";

import { useEffect, useState } from "react";
import {
  IconLogo,
  IconMenu,
  IconClose,
  IconPhone,
  IconCalendar,
  IconChevron,
} from "./icons";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Your Visit", href: "#preparation" },
  { label: "Payments", href: "#payments" },
  { label: "Find Us", href: "#location" },
  { label: "FAQ", href: "#faq" },
];

interface NavbarProps {
  onBook: () => void;
}

export default function Navbar({ onBook }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled ? "py-2.5" : "py-4"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav
            className={`flex items-center justify-between gap-4 rounded-full px-3 sm:px-4 py-2.5 transition-all duration-500 ${
              scrolled ? "glass-strong shadow-lg" : "glass"
            }`}
          >
            {/* Logo */}
            <a href="#top" className="flex items-center gap-2.5 shrink-0 group">
              <IconLogo className="w-9 h-9 transition-transform group-hover:scale-110" />
              <div className="flex flex-col leading-tight">
                <span className="font-display font-bold text-[15px] text-ink">
                  Wayside
                </span>
                <span className="text-[10px] uppercase tracking-[0.18em] text-teal-700 font-semibold -mt-0.5">
                  Medical & Dental
                </span>
              </div>
            </a>

            {/* Desktop nav */}
            <ul className="hidden lg:flex items-center gap-1">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="px-4 py-2 rounded-full text-sm font-medium text-ink/70 hover:text-teal-700 hover:bg-white/60 transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Actions */}
            <div className="flex items-center gap-2 shrink-0">
              <a
                href="tel:+254700000000"
                className="hidden md:flex items-center gap-2 px-3 py-2 rounded-full text-sm font-medium text-ink/80 hover:bg-white/60 transition-colors"
              >
                <IconPhone className="w-4 h-4 text-teal-600" />
                <span className="hidden xl:inline">Call us</span>
              </a>
              <button
                onClick={onBook}
                className="btn-primary !py-2.5 !px-5 text-sm hidden sm:inline-flex"
              >
                <IconCalendar className="w-4 h-4" />
                Book Appointment
              </button>
              <button
                aria-label="Open menu"
                onClick={() => setOpen(true)}
                className="lg:hidden flex items-center justify-center w-10 h-10 rounded-full glass text-ink"
              >
                <IconMenu className="w-5 h-5" />
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-[60] lg:hidden ${open ? "" : "pointer-events-none"}`}
        aria-hidden={!open}
      >
        <div
          className={`absolute inset-0 bg-ink/40 backdrop-blur-sm transition-opacity duration-300 ${
            open ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setOpen(false)}
        />
        <aside
          className={`mobile-menu absolute top-0 right-0 h-full w-[85%] max-w-sm glass-strong p-6 flex flex-col`}
          data-open={open}
        >
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-2.5">
              <IconLogo className="w-9 h-9" />
              <div className="flex flex-col leading-tight">
                <span className="font-display font-bold text-[15px] text-ink">Wayside</span>
                <span className="text-[10px] uppercase tracking-[0.18em] text-teal-700 font-semibold -mt-0.5">
                  Medical & Dental
                </span>
              </div>
            </div>
            <button
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="flex items-center justify-center w-10 h-10 rounded-full glass text-ink"
            >
              <IconClose className="w-5 h-5" />
            </button>
          </div>

          <ul className="flex flex-col gap-1">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between py-3.5 px-4 rounded-2xl text-base font-medium text-ink hover:bg-white/70 hover:text-teal-700 transition-colors"
                >
                  {l.label}
                  <IconChevron className="w-4 h-4 -rotate-90 text-teal-600" />
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-auto pt-6 space-y-3">
            <button
              onClick={() => {
                setOpen(false);
                onBook();
              }}
              className="btn-primary w-full"
            >
              <IconCalendar className="w-4 h-4" />
              Book Appointment
            </button>
            <a
              href="tel:+254700000000"
              className="btn-ghost w-full"
            >
              <IconPhone className="w-4 h-4 text-teal-700" />
              Call Reception
            </a>
          </div>
        </aside>
      </div>
    </>
  );
}

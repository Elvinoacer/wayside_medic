"use client";

import {
  IconLogo,
  IconLocation,
  IconPhone,
  IconMail,
  IconClock,
  IconShield,
  IconFacebook,
  IconInstagram,
  IconTwitter,
  IconWhatsApp,
  IconArrowRight,
} from "./icons";

const QUICK_LINKS = [
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Your Visit", href: "#preparation" },
  { label: "Operating Hours", href: "#hours" },
  { label: "Payments", href: "#payments" },
  { label: "Triage", href: "#triage" },
  { label: "Find Us", href: "#location" },
  { label: "Privacy", href: "#privacy" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

const SERVICES = [
  "General Outpatient",
  "Dental Surgery",
  "Obstetrics & Gynaecology",
  "Chest Specialist",
  "Skin Specialist",
  "Diagnostic Laboratory",
  "Minor Surgery",
];

interface FooterProps {
  onBook: () => void;
}

export default function Footer({ onBook }: FooterProps) {
  return (
    <footer className="relative mt-10 pt-16 pb-10">
      {/* Top CTA strip */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-14">
        <div className="glass-card glass-strong rounded-3xl p-7 sm:p-10 flex flex-col lg:flex-row items-start lg:items-center gap-6 overflow-hidden relative">
          <div className="absolute -top-12 -right-12 w-60 h-60 rounded-full bg-teal-400/30 blur-3xl" />
          <div className="absolute -bottom-12 -left-12 w-60 h-60 rounded-full bg-sand-400/20 blur-3xl" />
          <div className="relative flex-1">
            <h2 className="font-display font-extrabold tracking-tight text-ink text-2xl sm:text-3xl lg:text-[2.5rem] leading-[1.1]">
              Your family&apos;s health,{" "}
              <span className="text-gradient">just down the road.</span>
            </h2>
            <p className="mt-3 text-ink/70 text-sm sm:text-base leading-relaxed max-w-xl">
              Walk in, book online, or call reception — we are ready to care for you and
              the people you love, six days a week.
            </p>
          </div>
          <div className="relative flex flex-col sm:flex-row gap-3 shrink-0">
            <button onClick={onBook} className="btn-primary">
              Book Appointment
              <IconArrowRight className="w-4 h-4" />
            </button>
            <a href="tel:+254700000000" className="btn-ghost">
              <IconPhone className="w-4 h-4 text-teal-700" />
              Call Reception
            </a>
          </div>
        </div>
      </div>

      {/* Footer main */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-4">
            <a href="#top" className="flex items-center gap-2.5 mb-5">
              <IconLogo className="w-10 h-10" />
              <div className="flex flex-col leading-tight">
                <span className="font-display font-bold text-base text-ink">Wayside</span>
                <span className="text-[10px] uppercase tracking-[0.18em] text-teal-700 font-semibold -mt-0.5">
                  Medical & Dental
                </span>
              </div>
            </a>
            <p className="text-sm text-ink/65 leading-relaxed max-w-sm">
              KMPDC-licensed Level 2 Private Practice Medical Clinic offering compassionate,
              community-centered outpatient &amp; dental care along the Kasarani-Mwiki
              corridor in Nairobi.
            </p>

            {/* Social */}
            <div className="mt-5 flex items-center gap-2">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="flex items-center justify-center w-9 h-9 rounded-full glass text-ink/70 hover:text-teal-700 hover:bg-white/80 transition-colors"
                >
                  <s.icon className="w-4 h-4" />
                </a>
              ))}
            </div>

            {/* Accreditation */}
            <div className="mt-5 inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs font-semibold text-teal-700">
              <IconShield className="w-3.5 h-3.5" />
              KMPDC Licensed · ODPC Registered
            </div>
          </div>

          {/* Quick links */}
          <div className="lg:col-span-3">
            <h4 className="font-display font-bold text-ink text-sm mb-4">Quick Links</h4>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2.5">
              {QUICK_LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-ink/65 hover:text-teal-700 transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-2">
            <h4 className="font-display font-bold text-ink text-sm mb-4">Departments</h4>
            <ul className="space-y-2.5">
              {SERVICES.map((s) => (
                <li key={s}>
                  <a href="#services" className="text-sm text-ink/65 hover:text-teal-700 transition-colors">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h4 className="font-display font-bold text-ink text-sm mb-4">Reach Us</h4>
            <ul className="space-y-3 text-sm text-ink/70">
              <li className="flex items-start gap-2.5">
                <IconLocation className="w-4 h-4 mt-0.5 text-teal-700 shrink-0" />
                <span className="leading-snug">
                  Off Kasarani-Mwiki Road, Opp. Safe Landing Guest House, Sunton Stage / Hunters, Nairobi.
                </span>
              </li>
              <li>
                <a href="tel:+254700000000" className="flex items-center gap-2.5 hover:text-teal-700 transition-colors">
                  <IconPhone className="w-4 h-4 text-teal-700 shrink-0" />
                  +254 700 000 000
                </a>
              </li>
              <li>
                <a href="mailto:info@waysidemedic.co.ke" className="flex items-center gap-2.5 hover:text-teal-700 transition-colors">
                  <IconMail className="w-4 h-4 text-teal-700 shrink-0" />
                  info@waysidemedic.co.ke
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <IconClock className="w-4 h-4 mt-0.5 text-teal-700 shrink-0" />
                <span className="leading-snug">
                  Mon–Sat · 8:00 AM – 6:00 PM
                  <br />
                  <span className="text-ink/55">Sundays: emergency consults only</span>
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-ink/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-ink/55">
          <p>
            © {new Date().getFullYear()} Wayside Medical &amp; Dental Clinic. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href="#privacy" className="hover:text-teal-700 transition-colors">Privacy Policy</a>
            <span className="text-ink/20">·</span>
            <a href="#contact" className="hover:text-teal-700 transition-colors">Contact</a>
            <span className="text-ink/20">·</span>
            <span>Co-op Kwa Jirani · Edward Koech Rotich T/A Wayside</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

const SOCIALS = [
  { icon: IconWhatsApp, label: "WhatsApp", href: "https://wa.me/254700000000" },
  { icon: IconFacebook, label: "Facebook", href: "https://facebook.com" },
  { icon: IconInstagram, label: "Instagram", href: "https://instagram.com" },
  { icon: IconTwitter, label: "Twitter / X", href: "https://twitter.com" },
];

"use client";

import {
  IconLogo,
  IconPhone,
  IconClock,
  IconLocation,
  IconShield,
  IconWhatsApp,
  IconFacebook,
  IconInstagram,
  IconCalendar,
} from "./icons";

interface FooterProps { onBook: () => void; }

export default function Footer({ onBook }: FooterProps) {
  return (
    <footer className="footer" aria-label="Footer">
      <div className="wrap">
        <div className="footer-grid">
          <div>
            <p className="wordmark">
              Wayside<em>.</em>
            </p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed" style={{ color: "rgba(250,246,236,.65)" }}>
              KMPDC-licensed Level 2 medical &amp; dental clinic serving Kasarani, Sunton, Hunters and Mwiki.
            </p>
            <div className="mt-5 flex gap-2.5">
              <a href="https://wa.me/254700000000" target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp" className="grid place-items-center w-10 h-10 rounded-xl border-2 border-[rgba(250,246,236,.35)] hover:border-[var(--color-sun)] hover:text-[var(--color-sun)] transition-colors">
                <IconWhatsApp className="w-5 h-5" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="grid place-items-center w-10 h-10 rounded-xl border-2 border-[rgba(250,246,236,.35)] hover:border-[var(--color-sun)] hover:text-[var(--color-sun)] transition-colors">
                <IconFacebook className="w-5 h-5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="grid place-items-center w-10 h-10 rounded-xl border-2 border-[rgba(250,246,236,.35)] hover:border-[var(--color-sun)] hover:text-[var(--color-sun)] transition-colors">
                <IconInstagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          <nav aria-label="Footer navigation">
            <h4>Visit</h4>
            <ul className="mt-4 grid gap-2.5 text-sm font-semibold">
              <li><a href="#care">Care at a glance</a></li>
              <li><a href="#visit">How a visit works</a></li>
              <li><a href="#plan">Hours &amp; payments</a></li>
              <li><a href="#find-us">Find us</a></li>
              <li><a href="#faq">Quick answers</a></li>
            </ul>
          </nav>

          <div>
            <h4>Talk to us</h4>
            <ul className="mt-4 grid gap-3 text-sm" style={{ color: "rgba(250,246,236,.85)" }}>
              <li className="flex items-start gap-2.5">
                <IconPhone className="w-4 h-4 text-sun shrink-0 mt-0.5" />
                <a href="tel:+254700000000">+254 700 000 000</a>
              </li>
              <li className="flex items-start gap-2.5">
                <IconClock className="w-4 h-4 text-sun shrink-0 mt-0.5" />
                <span>Mon–Sat · 8 AM–6 PM<br />Sun · emergencies only</span>
              </li>
              <li className="flex items-start gap-2.5">
                <IconLocation className="w-4 h-4 text-sun shrink-0 mt-0.5" />
                <span>Kasarani–Mwiki Road, Sunton<br />opposite Safe Landing</span>
              </li>
              <li className="flex items-start gap-2.5">
                <IconShield className="w-4 h-4 text-sun shrink-0 mt-0.5" />
                <span>DPA 2019 compliant · records kept securely for 20 years</span>
              </li>
            </ul>
            <button onClick={onBook} className="btn btn-sun mt-5 !min-h-0 !py-2.5 !px-4 !text-[13px]">
              <IconCalendar className="w-4 h-4" /> Book appointment
            </button>
          </div>
        </div>

        <div className="fine">
          <span>© {new Date().getFullYear()} Wayside Medical &amp; Dental Clinic. All rights reserved.</span>
          <span className="flex items-center gap-1.5">
            <IconLogo className="w-4 h-4" /> Good care, close to home.
          </span>
        </div>
      </div>
    </footer>
  );
}

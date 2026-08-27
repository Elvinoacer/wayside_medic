"use client";

import {
  IconLocation,
  IconPhone,
  IconMail,
  IconClock,
  IconArrowRight,
  IconWhatsApp,
  IconCalendar,
} from "./icons";

interface ContactProps {
  onBook: () => void;
}

const CONTACTS = [
  {
    icon: IconLocation,
    title: "Visit us",
    primary: "Off Kasarani-Mwiki Road",
    secondary: "Opposite Safe Landing Guest House, Sunton Stage / Hunters Area, Kasarani, Nairobi.",
    href: "https://maps.google.com/?q=Kasarani-Mwiki+Road+Sunton",
    accent: "text-teal-700",
    bg: "bg-teal-500/10",
  },
  {
    icon: IconPhone,
    title: "Call reception",
    primary: "+254 700 000 000",
    secondary: "Mon–Sat, 8:00 AM – 6:00 PM. Bilingual support in English & Swahili.",
    href: "tel:+254700000000",
    accent: "text-sky-600",
    bg: "bg-sky-500/10",
  },
  {
    icon: IconWhatsApp,
    title: "WhatsApp us",
    primary: "Chat with reception",
    secondary: "Quick questions on appointments, payments, or medication refills.",
    href: "https://wa.me/254700000000",
    accent: "text-emerald-600",
    bg: "bg-emerald-500/10",
  },
  {
    icon: IconMail,
    title: "Email us",
    primary: "info@waysidemedic.co.ke",
    secondary: "For privacy notices, DPIA requests and partnership enquiries.",
    href: "mailto:info@waysidemedic.co.ke",
    accent: "text-sand-500",
    bg: "bg-sand-400/15",
  },
];

export default function Contact({ onBook }: ContactProps) {
  return (
    <section id="contact" className="section relative">
      <div className="blob w-[30rem] h-[30rem] bg-teal-300/30 top-1/4 left-1/4" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="glass-card glass-strong rounded-[2.5rem] overflow-hidden">
          <div className="grid lg:grid-cols-12 gap-0">
            {/* Left — copy */}
            <div className="lg:col-span-5 p-7 sm:p-10 lg:p-12 bg-gradient-to-br from-teal-600 to-teal-700 text-white relative overflow-hidden">
              {/* Decorative */}
              <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-white/10 blur-2xl" />
              <div className="absolute -bottom-16 -left-10 w-48 h-48 rounded-full bg-sky-400/20 blur-2xl" />

              <div className="relative">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 backdrop-blur text-xs font-semibold uppercase tracking-wider">
                  <IconArrowRight className="w-3.5 h-3.5" /> Get in Touch
                </span>
                <h2 className="mt-4 font-display font-extrabold tracking-tight text-3xl sm:text-4xl lg:text-[2.75rem] leading-[1.1]">
                  We would love to hear from you.
                </h2>
                <p className="mt-4 text-white/85 text-base leading-relaxed">
                  Whether you need to schedule a routine outpatient visit, confirm an
                  antenatal appointment, verify your SHA benefit, or ask a quick question —
                  our reception team is ready to help.
                </p>

                <div className="mt-8 space-y-3">
                  <div className="flex items-center gap-3 p-3 rounded-2xl bg-white/10 backdrop-blur">
                    <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-white/15 shrink-0">
                      <IconClock className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[10px] uppercase tracking-wider font-semibold text-white/70">Hours</div>
                      <div className="text-sm font-semibold">Mon–Sat · 8:00 AM – 6:00 PM</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-2xl bg-white/10 backdrop-blur">
                    <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-white/15 shrink-0">
                      <IconLocation className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[10px] uppercase tracking-wider font-semibold text-white/70">Located</div>
                      <div className="text-sm font-semibold">Opposite Safe Landing, Sunton</div>
                    </div>
                  </div>
                </div>

                <button onClick={onBook} className="mt-8 inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white text-teal-700 font-semibold text-sm hover:bg-white/90 transition-colors shadow-lg">
                  <IconCalendar className="w-4 h-4" />
                  Book an Appointment
                </button>
              </div>
            </div>

            {/* Right — contact cards grid */}
            <div className="lg:col-span-7 p-7 sm:p-10 lg:p-12">
              <h3 className="font-display font-bold text-ink text-lg mb-5">
                Reach us your way
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {CONTACTS.map((c) => (
                  <a
                    key={c.title}
                    href={c.href}
                    className="group glass-card glass rounded-2xl p-5 flex items-start gap-3.5 hover:bg-white/80 transition-colors"
                  >
                    <div className={`flex items-center justify-center w-11 h-11 rounded-xl ${c.bg} ${c.accent} shrink-0`}>
                      <c.icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-[10px] uppercase tracking-wider font-semibold text-teal-700">{c.title}</div>
                      <div className="font-display font-bold text-ink text-sm leading-tight mt-0.5 break-words">
                        {c.primary}
                      </div>
                      <p className="mt-1 text-xs text-ink/60 leading-snug">{c.secondary}</p>
                    </div>
                    <IconArrowRight className="w-4 h-4 text-teal-700 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all shrink-0" />
                  </a>
                ))}
              </div>

              {/* Emergency banner */}
              <div className="mt-6 rounded-2xl bg-gradient-to-br from-rose-500/15 to-rose-500/0 border border-rose-500/20 p-5 flex items-start gap-3">
                <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-rose-500 text-white shrink-0">
                  <IconPhone className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <div className="text-[10px] uppercase tracking-wider font-semibold text-rose-500">Critical Emergency?</div>
                  <p className="text-sm text-ink/75 leading-snug mt-0.5">
                    Call St. Francis Community Hospital 24/7 line directly:
                    <a href="tel:+254741689983" className="font-bold text-rose-600 ml-1.5">+254 741 689983</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

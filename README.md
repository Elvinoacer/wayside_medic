# Wayside Medical & Dental Clinic — Website

A production-ready, mobile-first Next.js 16 website for **Wayside Medical & Dental
Clinic**, a KMPDC-licensed Level 2 Private Practice Medical Clinic located on
Kasarani-Mwiki Road in Sunton, Nairobi.

Built with **Next.js 16 · React 19 · Tailwind CSS v4 · TypeScript**, featuring a custom
glassmorphism design system, gradient-aurora background, scroll-reveal animations,
interactive appointment booking modal, and a fully responsive mobile experience.

## Features

- **Glassmorphic UI** — frosted-glass cards, gradient borders, animated blobs, dot/grid
  pattern overlays.
- **Mobile-first responsive** — every layout collapses cleanly to small screens; a
  slide-in mobile drawer replaces the desktop nav.
- **Interactive appointment modal** — multi-step booking flow with department, date,
  time, contact details, DPA/Digital Health Act consent and animated confirmation.
- **Comprehensive content** drawn from `research.md`:
  - About / care philosophy & KMPDC licensing
  - 6 departments (General OPD, Dental, OBGYN, Chest, Skin, Lab, Minor Surgery)
  - Plain-language clinic glossary
  - Pre-visit preparation protocols (lab, ANC, dental, every visit)
  - Operating hours, capacity stats & emergency escalation
  - Payments — M-Pesa, cash, Co-op Kwa Jirani, SHA / NHIF
  - Triage (Red / Yellow / Green) + intake workflow + St. Francis referral partner
  - Location, matatu routes (17B, 49), landmarks, peak-hour traffic note
  - Data Privacy — DPA 2019, Digital Health Act, AES-256 / TLS 1.3, 20-year retention
  - FAQ accordion
  - Contact & emergency line
- **Accessibility** — focus rings, `prefers-reduced-motion` support, semantic markup,
  keyboard ESC to close modal, aria-labels on icon-only buttons.

## Tech Stack

- [Next.js 16](https://nextjs.org) (App Router)
- [React 19](https://react.dev)
- [Tailwind CSS v4](https://tailwindcss.com) (via `@tailwindcss/postcss`)
- [TypeScript](https://www.typescriptlang.org)
- Inline SVG icon library (no external icon dependency)
- `next/font` (Inter + Plus Jakarta Sans)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
app/
├── layout.tsx               # Root layout, fonts, SEO metadata
├── page.tsx                  # Page composition (client)
├── globals.css              # Design tokens, glassmorphism, animations
└── components/
    ├── icons.tsx             # Inline SVG icon library
    ├── Navbar.tsx            # Sticky glass nav + mobile drawer
    ├── Hero.tsx              # Hero with image, stats, marquee
    ├── About.tsx             # Care philosophy + pillars
    ├── Services.tsx          # 6 department cards + glossary
    ├── Preparation.tsx       # Pre-visit protocols (sticky layout)
    ├── Hours.tsx             # Schedule + capacity + emergency
    ├── Payments.tsx          # 4 channels + SHA verification
    ├── Triage.tsx            # Red/Yellow/Green + workflow + referral
    ├── Location.tsx          # Map image + routes + landmarks
    ├── Privacy.tsx           # DPA/DHA compliance + rights
    ├── FAQ.tsx               # Accordion
    ├── Contact.tsx           # Contact cards + emergency
    ├── Footer.tsx            # Links + contact + social
    ├── AppointmentModal.tsx  # Multi-step booking modal
    └── Reveal.tsx            # IntersectionObserver scroll reveal
public/                       # Static assets
research.md                   # Source research document
next.config.ts                # Image remotePatterns for Unsplash
```

## Customisation

- **Phone numbers** — currently placeholder `+254 700 000 000` (and `+254 741 689983` for
  the St. Francis emergency line, which is real). Replace placeholders in
  `Navbar.tsx`, `Hours.tsx`, `Triage.tsx`, `Contact.tsx`, `Footer.tsx`,
  `AppointmentModal.tsx`.
- **Images** — currently Unsplash URLs. Swap with your own photography by uploading into
  `/public/images/` and updating the `<Image src=... />` paths.
- **Address** — see `Location.tsx` and `Footer.tsx`.
- **Email & social links** — see `Footer.tsx`.

## License

© Wayside Medical & Dental Clinic. All rights reserved.

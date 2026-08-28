# Wayside Medical & Dental Clinic — Website

A production-ready, mobile-first Next.js 16 website for **Wayside Medical & Dental
Clinic**, a KMPDC-licensed Level 2 Private Practice Medical Clinic located on
Kasarani-Mwiki Road in Sunton, Nairobi.

Built with **Next.js 16 · React 19 · Tailwind CSS v4 · TypeScript**, featuring the
**"Paper & Ink"** design system: a warm editorial look with solid surfaces, hard
offset sticker shadows, hand-drawn accents, a scroll-driven visit journey and a
live "Open now" clock. Zero glassmorphism.

## Design system — "Paper & Ink"

- **Warm paper base** (`#faf6ec`) with deep evergreen ink, leaf green, sun amber
  and coral accents — all solid colour, no frosted glass, no blur.
- **Sticker UI** — key cards and CTAs carry chunky 2px ink borders with hard
  offset shadows that compress on press.
- **Editorial type** — Fraunces (display serif, italic accents) + Inter (body).
- **Less text, more demonstration** — content is shown, not narrated:
  - Interactive **Care stage**: hover a department row and an animated card
    demonstrates it (3D pointer tilt, icon + one line + 3 chips).
  - **Sticky scroll journey**: "Your visit in four steps" pins a progress card
    while steps light up as you scroll (replaces old Triage/Preparation walls).
  - **Live hours**: an "Open now / Closed" pill computed from Africa/Nairobi
    time, plus a week-view dot calendar.
  - **Illustrated SVG map**: animated matatu routes 17B & 49 flow toward a
    pulsing clinic pin (replaces paragraphs of transit text).
  - **Marquee ticker** of departments, payment stickers, emergency card.
- **Motion with restraint** — scroll progress bar, staggered reveals, parallax
  hero doodles, spring pop-ins; everything honours `prefers-reduced-motion`.
- **Accessibility** — skip link, focus-visible rings, semantic landmarks, aria
  states on tabs/accordion/modal/dialogs, ESC to close, 44px+ touch targets,
  AA-contrast palette.

## Tech Stack

- [Next.js 16](https://nextjs.org) (App Router)
- [React 19](https://react.dev)
- [Tailwind CSS v4](https://tailwindcss.com) (via `@tailwindcss/postcss`)
- [TypeScript](https://www.typescriptlang.org)
- Inline SVG icon library (no external icon dependency)
- `next/font` (Inter + Fraunces)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
app/
├── layout.tsx               # Root layout, fonts (Fraunces + Inter), SEO metadata
├── page.tsx                 # Page composition (client)
├── globals.css              # "Paper & Ink" design tokens, primitives, motion
└── components/
    ├── icons.tsx            # Inline SVG icon library
    ├── Navbar.tsx           # Solid pill nav + scroll progress bar + drawer
    ├── Hero.tsx             # Few words, one photo, parallax doodles, tilt card
    ├── Ticker.tsx           # Department marquee
    ├── Care.tsx             # Interactive department stage (replaces Services/About)
    ├── VisitJourney.tsx     # Sticky scroll-driven 4-step visit story
    ├── PlanVisit.tsx        # Live open-now clock, week dots, payments, emergency
    ├── FindUs.tsx           # Animated SVG map + route chips (replaces Location)
    ├── Faq.tsx              # 4-question accordion
    ├── Footer.tsx           # Contact + privacy one-liner + socials
    ├── AppointmentModal.tsx # Two-step booking modal, solid skin
    └── Reveal.tsx           # IntersectionObserver scroll reveal
research.md                   # Source research document
next.config.ts                # Image remotePatterns
```

## Customisation

- **Phone numbers** — placeholder `+254 700 000 000` (St. Francis emergency line
  `+254 741 689983` is real). Replace in `Navbar.tsx`, `PlanVisit.tsx`,
  `FindUs.tsx` (none), `Footer.tsx`, `AppointmentModal.tsx`, `page.tsx`.
- **Images** — currently Unsplash/z-cdn URLs in `Hero.tsx`. Swap with your own
  photography in `/public/images/` and update the `<Image src=... />` paths.
- **Address & directions link** — see `FindUs.tsx`.
- **Hours** — `PlanVisit.tsx` (`OPEN_HOUR`, `CLOSE_HOUR`, week dots).

## License

© Wayside Medical & Dental Clinic. All rights reserved.

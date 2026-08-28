"use client";

import Reveal from "./Reveal";
import { IconLocation, IconBus, IconArrowUpRight } from "./icons";

/**
 * "Find us" — a stylised, animated map that *shows* the journey instead of
 * three paragraphs about matatu routes. Route 17B and 49 animate toward the
 * clinic pin; landmarks are reduced to dots with one-word labels.
 */
export default function FindUs() {
  return (
    <section id="find-us" className="section" aria-label="Location and directions">
      <div className="wrap">
        <Reveal>
          <div className="section-head">
            <p className="kicker"><span className="dash" /> 04 · Getting here</p>
            <h2 className="section-title">
              Right on the <em>matatu corridor.</em>
            </h2>
            <p className="section-sub">
              Kasarani–Mwiki Road, Sunton — opposite Safe Landing Guest House. Ground floor, step-free.
            </p>
          </div>
        </Reveal>

        <div className="find-grid">
          {/* Animated map */}
          <Reveal variant="left">
            <div className="map-card" role="img" aria-label="Illustrated map showing Wayside clinic on Kasarani-Mwiki Road, reachable by matatu routes 17B and 49">
              <svg viewBox="0 0 800 560" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* estate blocks */}
                <g fill="#efe6d2" stroke="#17312a" strokeOpacity="0.18" strokeWidth="2">
                  <rect x="60" y="70" width="150" height="110" rx="18" />
                  <rect x="590" y="60" width="150" height="120" rx="18" />
                  <rect x="70" y="380" width="140" height="110" rx="18" />
                  <rect x="620" y="400" width="130" height="100" rx="18" />
                  <rect x="300" y="440" width="170" height="70" rx="16" />
                </g>

                {/* green pockets */}
                <g fill="#e0f0e4" stroke="#1b7a55" strokeOpacity="0.3" strokeWidth="2">
                  <circle cx="250" cy="120" r="26" />
                  <circle cx="560" cy="470" r="22" />
                  <circle cx="120" cy="300" r="18" />
                </g>

                {/* main road: Kasarani–Mwiki */}
                <path d="M-20 520 C 160 430 240 330 400 300 C 560 270 660 180 820 120" stroke="#17312a" strokeWidth="46" strokeLinecap="round" opacity="0.9" />
                <path d="M-20 520 C 160 430 240 330 400 300 C 560 270 660 180 820 120" stroke="#faf6ec" strokeWidth="36" strokeLinecap="round" />
                <path d="M-20 520 C 160 430 240 330 400 300 C 560 270 660 180 820 120" stroke="#17312a" strokeWidth="2" strokeDasharray="14 12" opacity="0.35" />

                {/* route 49 joining from the west */}
                <path d="M-20 210 C 100 228 180 246 240 262 C 280 274 320 286 348 296" stroke="#2e7e8f" strokeWidth="5" strokeLinecap="round" className="dash-move" />
                {/* route 17B along the corridor */}
                <path d="M60 500 C 200 420 280 340 400 300 C 540 254 640 170 760 116" stroke="#1b7a55" strokeWidth="5" strokeLinecap="round" className="dash-move" />

                {/* route labels */}
                <g fontFamily="var(--font-display), Georgia, serif" fontWeight="700">
                  <rect x="640" y="90" width="52" height="34" rx="10" fill="#1b7a55" stroke="#17312a" strokeWidth="2.5" />
                  <text x="666" y="113" textAnchor="middle" fill="#ffffff" fontSize="19">17B</text>
                  <rect x="60" y="182" width="44" height="34" rx="10" fill="#2e7e8f" stroke="#17312a" strokeWidth="2.5" />
                  <text x="82" y="205" textAnchor="middle" fill="#ffffff" fontSize="19">49</text>
                </g>

                {/* interchange + stage labels */}
                <g fontFamily="var(--font-sans), sans-serif" fontSize="13" fontWeight="700" fill="#17312a">
                  <circle cx="240" cy="262" r="7" fill="#2e7e8f" stroke="#17312a" strokeWidth="2" />
                  <text x="240" y="240" textAnchor="middle">Kasarani interchange</text>
                  <circle cx="520" cy="330" r="7" fill="#f0a417" stroke="#17312a" strokeWidth="2" />
                  <text x="520" y="366" textAnchor="middle">Sunton stage</text>
                  <circle cx="452" cy="196" r="7" fill="#f0a417" stroke="#17312a" strokeWidth="2" />
                  <text x="452" y="176" textAnchor="middle">Safe Landing</text>
                </g>

                {/* the clinic */}
                <g transform="translate(400 300)">
                  <circle cx="0" cy="0" r="17" fill="#e0503a" className="pin-pulse" />
                  <circle cx="0" cy="0" r="17" fill="#e0503a" className="pin-pulse" style={{ animationDelay: "0.9s" }} />
                  <path d="M0 -46 C -17 -46 -26 -33 -26 -22 C -26 -8 0 14 0 14 C 0 14 26 -8 26 -22 C 26 -33 17 -46 0 -46 Z" fill="#e0503a" stroke="#17312a" strokeWidth="3" />
                  <path d="M-9 -22 h18 M0 -31 v18" stroke="#ffffff" strokeWidth="4" strokeLinecap="round" />
                </g>
                <g fontFamily="var(--font-display), Georgia, serif" fontSize="20" fontWeight="700" fill="#17312a">
                  <text x="400" y="256" textAnchor="middle">Wayside clinic</text>
                </g>

                {/* compass */}
                <g transform="translate(740 500)" stroke="#17312a" strokeWidth="2.5" fontFamily="var(--font-sans), sans-serif" fontSize="13" fontWeight="800">
                  <circle r="17" fill="#fffdf7" />
                  <path d="M0 -9 L4 5 L0 2 L-4 5 Z" fill="#e0503a" stroke="none" />
                  <text y="-24" textAnchor="middle" fill="#17312a" stroke="none">N</text>
                </g>
              </svg>
            </div>
          </Reveal>

          {/* Side: routes + address + directions action */}
          <Reveal variant="right" delay={90} className="find-side">
            <div className="route-chip">
              <span className="code a">17B</span>
              <span>
                <b>Direct from the CBD</b>
                <p>Boards at Accra Road · drops you at Sunton / Hunters stage · 30–60 min</p>
              </span>
            </div>
            <div className="route-chip">
              <span className="code b">49</span>
              <span>
                <b>Via Kasarani</b>
                <p>Terminates at Kasarani interchange — hop on any Mwiki-bound 17B · +10 min</p>
              </span>
            </div>

            <div className="card p-5 flex items-start gap-3.5">
              <span className="grid place-items-center w-10 h-10 rounded-xl bg-leaf-tint border-2 border-ink shrink-0"><IconLocation className="w-5 h-5 text-leaf-deep" /></span>
              <p className="text-sm leading-relaxed text-ink-soft">
                <span className="font-extrabold text-ink">Off Kasarani–Mwiki Road</span>, opposite Safe Landing Guest House, Sunton / Hunters Area, Nairobi.
                <span className="block mt-1 text-xs">Look for the ground-floor clinic with the green sign — step-free access.</span>
              </p>
            </div>

            <div className="flex flex-wrap gap-2.5">
              <a
                href="https://www.google.com/maps/search/?api=1&query=Kasarani-Mwiki+Road+Sunton+Hunters+Nairobi"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-sun flex-1 min-w-44"
              >
                <IconBus className="w-4.5 h-4.5" /> Get directions <IconArrowUpRight className="w-4 h-4" />
              </a>
            </div>

            <p className="text-xs text-ink-soft flex items-start gap-2">
              <IconLocation className="w-3.5 h-3.5 text-coral shrink-0 mt-0.5" />
              Peak traffic around Kasarani &amp; Seasons junctions at 7–9 AM and 5–7 PM — leave a little earlier.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

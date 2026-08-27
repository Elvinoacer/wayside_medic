"use client";

import Image from "next/image";
import {
  IconLocation,
  IconBus,
  IconClock,
  IconBuilding,
  IconCheck,
  IconArrowRight,
} from "./icons";

const ROUTES = [
  {
    code: "17B",
    board: "Accra Road / main OTC stage, Nairobi CBD",
    path: "Thika Road expressway → Kasarani → Seasons → Hunters → Sunton → Mwiki",
    drop: "‘Sunton Stage’ or ‘Hunters Stage, Opposite Safe Landing’",
    time: "30–60 min",
    accent: "from-teal-500 to-teal-600",
    note: "Most direct route — no transfers required from the CBD.",
  },
  {
    code: "49",
    board: "Nairobi CBD via Thika Road",
    path: "Thika Road → Kasarani Interchange (terminus)",
    drop: "Transfer at Kasarani to Mwiki-bound 17B or local feeder",
    time: "30–45 min + transfer",
    accent: "from-sky-500 to-sky-600",
    note: "Route 49 terminates at Kasarani — transfer required.",
  },
];

const LANDMARKS = [
  { label: "Opposite Safe Landing Guest House", sub: "(also locally known as Safelanding Bar) — the dominant visual marker." },
  { label: "Sunton Stage / Hunters Area", sub: "Pedestrian, matatu & motorist drop-off directly at the clinic entrance." },
  { label: "Kasarani-Mwiki Road, Sunton", sub: "Ground-floor access — step-free for elderly, disabled & stroller-bound patients." },
];

export default function Location() {
  return (
    <section id="location" className="section relative">
      <div className="blob w-[28rem] h-[28rem] bg-sky-300/30 top-1/4 -right-32" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          {/* Map / visual */}
          <div className="relative">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden glass-strong p-2.5">
              <Image
                src="https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/fc019ed909c3.jpg"
                alt="Kasarani-Mwiki Road corridor in Nairobi"
                fill
                className="object-cover rounded-[1.6rem]"
                sizes="(max-width: 1024px) 90vw, 45vw"
              />
              <div className="absolute inset-2.5 rounded-[1.6rem] bg-gradient-to-t from-ink/55 via-transparent to-transparent" />
              {/* Address overlay */}
              <div className="absolute bottom-4 left-4 right-4 glass-strong rounded-2xl p-4">
                <div className="flex items-start gap-2.5">
                  <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-teal-500/10 text-teal-700 shrink-0">
                    <IconLocation className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-wider font-semibold text-teal-700">Physical address</div>
                    <p className="text-sm font-semibold text-ink leading-snug mt-0.5">
                      Off Kasarani-Mwiki Road, Opposite Safe Landing Guest House,
                      Sunton Stage / Hunters Area, Kasarani, Nairobi.
                    </p>
                    <p className="mt-1 text-[11px] text-ink/60">P.O. Box 6087-00300, Nairobi, Kenya</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating direction chip */}
            <div className="absolute -top-4 -right-2 glass-strong rounded-2xl px-4 py-2.5 shadow-xl">
              <div className="flex items-center gap-2 text-xs">
                <span className="flex items-center justify-center w-7 h-7 rounded-full bg-teal-500/10 text-teal-700">
                  <IconCheck className="w-4 h-4" />
                </span>
                <span className="font-semibold text-ink">Ground-floor · Step-free</span>
              </div>
            </div>
          </div>

          {/* Right — Transit info */}
          <div>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-xs font-semibold text-teal-700 uppercase tracking-wider">
              <IconBus className="w-3.5 h-3.5" /> Find Us
            </span>
            <h2 className="mt-4 font-display font-extrabold tracking-tight text-ink text-3xl sm:text-4xl lg:text-5xl leading-[1.1]">
              Right on the{" "}
              <span className="text-gradient">matatu corridor.</span>
            </h2>
            <p className="mt-5 text-ink/70 text-base leading-relaxed">
              Wayside sits along one of Nairobi&apos;s busiest public transport corridors,
              making it accessible from the CBD and surrounding estates. The recent
              Non-Motorised Transport (NMT) project has improved pedestrian walkways,
              safety barriers and street lighting directly accessing our entrance.
            </p>

            {/* Routes */}
            <div className="mt-7 space-y-4">
              {ROUTES.map((r) => (
                <article key={r.code} className="glass-card glass rounded-3xl p-5 sm:p-6">
                  <div className="flex items-start gap-4">
                    <div className={`flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br ${r.accent} text-white font-display font-bold text-sm shadow-lg shrink-0`}>
                      {r.code}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-display font-bold text-ink text-base leading-tight">
                        Route {r.code} <span className="text-ink/50 font-medium text-sm">· {r.time}</span>
                      </h3>
                      <div className="mt-2 space-y-1.5 text-xs text-ink/70 leading-snug">
                        <p><span className="font-semibold text-ink/85">Board:</span> {r.board}</p>
                        <p><span className="font-semibold text-ink/85">Path:</span> {r.path}</p>
                        <p><span className="font-semibold text-ink/85">Drop:</span> {r.drop}</p>
                      </div>
                      <p className="mt-2 text-[11px] text-teal-700 font-medium leading-snug">{r.note}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Landmarks */}
            <div className="mt-6 glass-strong rounded-3xl p-5 sm:p-6">
              <div className="flex items-center gap-2.5 mb-3">
                <IconBuilding className="w-4.5 h-4.5 text-teal-700" />
                <h3 className="font-display font-bold text-ink text-sm">Landmarks to look for</h3>
              </div>
              <ul className="space-y-2.5">
                {LANDMARKS.map((l) => (
                  <li key={l.label} className="flex items-start gap-2.5">
                    <span className="mt-1.5 inline-block w-1.5 h-1.5 rounded-full bg-teal-500 shrink-0" />
                    <p className="text-xs text-ink/75 leading-snug">
                      <span className="font-semibold text-ink">{l.label}</span> — {l.sub}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Traffic note */}
            <div className="mt-4 flex items-start gap-2.5 p-4 rounded-2xl bg-sand-400/10 border border-sand-400/25">
              <IconClock className="w-4.5 h-4.5 text-sand-500 shrink-0 mt-0.5" />
              <p className="text-xs text-ink/75 leading-snug">
                <span className="font-semibold text-ink">Peak-hour heads-up:</span> Allow
                extra travel time during morning (07:00–09:00) and evening (17:00–19:00)
                rush — congestion around Kasarani, Seasons and Hunters junctions is common.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

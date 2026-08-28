"use client";

import { IconStethoscope, IconTooth, IconBaby, IconLungs, IconFlask, IconScalpel, IconSkin, IconStar } from "./icons";

const ITEMS = [
  { icon: IconStethoscope, label: "General outpatient" },
  { icon: IconTooth, label: "Dental surgery" },
  { icon: IconBaby, label: "Antenatal & family" },
  { icon: IconLungs, label: "Chest clinic" },
  { icon: IconSkin, label: "Skin clinic" },
  { icon: IconFlask, label: "On-site lab" },
  { icon: IconScalpel, label: "Minor surgery" },
];

export default function Ticker() {
  const track = (ariaHidden: boolean) => (
    <div className="ticker-track" aria-hidden={ariaHidden}>
      {ITEMS.map((item) => {
        const Icon = item.icon;
        return (
          <span className="ticker-item" key={item.label}>
            <Icon className="w-5 h-5 text-leaf-deep" />
            {item.label}
            <IconStar className="star w-3.5 h-3.5" fill="currentColor" />
          </span>
        );
      })}
    </div>
  );

  return (
    <section className="ticker" aria-label="Our departments">
      {track(false)}
      {track(true)}
    </section>
  );
}

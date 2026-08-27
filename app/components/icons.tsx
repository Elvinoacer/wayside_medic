import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = (props: IconProps) => ({
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  ...props,
});

export const IconStethoscope = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M4.5 4v6a4.5 4.5 0 0 0 9 0V4" />
    <path d="M9 14.5v3a4.5 4.5 0 0 0 9 0v-1.5" />
    <circle cx="18" cy="13" r="2.5" />
  </svg>
);

export const IconTooth = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M12 5c-2.5 0-3.5-1.5-6-1.5C4.5 3.5 3.5 5 3.5 7.5c0 2 .5 4 1 6 .5 1.8 1 5 2 6 .8.8 1.5-.5 1.8-2.2.3-1.5.6-3 2.2-3s1.9 1.5 2.2 3c.3 1.7 1 3 1.8 2.2 1-1 1.5-4.2 2-6 .5-2 1-4 1-6C20.5 5 19.5 3.5 18 3.5c-2.5 0-3.5 1.5-6 1.5Z" />
  </svg>
);

export const IconBaby = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M9 12h.01M15 12h.01M10 16c.5.5 1.5 1 2 1s1.5-.5 2-1" />
    <path d="M12 3a6 6 0 0 0-6 6v2a6 6 0 0 0 12 0V9a6 6 0 0 0-6-6Z" />
    <path d="M9 5c0-1 .5-2 1.5-2M15 5c0-1-.5-2-1.5-2" />
  </svg>
);

export const IconLungs = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M12 4v8" />
    <path d="M12 12c-1 2-3 3-5 3-1.5 0-2.5 1-2.5 2.5S5 21 6.5 21c2 0 3-2 4-4.5.5-1.5 1.5-3 1.5-4" />
    <path d="M12 12c1 2 3 3 5 3 1.5 0 2.5 1 2.5 2.5S19 21 17.5 21c-2 0-3-2-4-4.5-.5-1.5-1.5-3-1.5-4" />
  </svg>
);

export const IconSkin = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M5 8c2-2 5-2 7 0s5 2 7 0" />
    <path d="M5 14c2-2 5-2 7 0s5 2 7 0" />
    <circle cx="7" cy="6" r="0.5" fill="currentColor" />
    <circle cx="17" cy="6" r="0.5" fill="currentColor" />
    <circle cx="12" cy="11" r="0.5" fill="currentColor" />
    <circle cx="8" cy="17" r="0.5" fill="currentColor" />
    <circle cx="16" cy="17" r="0.5" fill="currentColor" />
  </svg>
);

export const IconFlask = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M9 3h6M10 3v6l-5 9a2 2 0 0 0 1.8 3h10.4a2 2 0 0 0 1.8-3l-5-9V3" />
    <path d="M7.5 14h9" />
  </svg>
);

export const IconScalpel = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M3 21c2-2 6-6 9-9l3 3c-3 3-7 7-9 9l-3-3Z" />
    <path d="M12 12l4-4 5-5-3-3-5 5-4 4" />
  </svg>
);

export const IconClock = (p: IconProps) => (
  <svg {...base(p)}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </svg>
);

export const IconLocation = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M12 21s-7-6-7-12a7 7 0 0 1 14 0c0 6-7 12-7 12Z" />
    <circle cx="12" cy="9" r="2.5" />
  </svg>
);

export const IconPhone = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M5 4h3l1.5 5-2 1.5a14 14 0 0 0 6 6l1.5-2 5 1.5v3a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" />
  </svg>
);

export const IconEmergency = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M12 2 2 22h20L12 2Z" />
    <path d="M12 9v5M12 17h.01" />
  </svg>
);

export const IconShield = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M12 2 4 5v7c0 5 3.5 8.5 8 10 4.5-1.5 8-5 8-10V5l-8-3Z" />
    <path d="M9 12l2 2 4-4" />
  </svg>
);

export const IconLock = (p: IconProps) => (
  <svg {...base(p)}>
    <rect x="4" y="10" width="16" height="11" rx="2" />
    <path d="M8 10V7a4 4 0 0 1 8 0v3" />
    <circle cx="12" cy="15" r="1.5" />
    <path d="M12 16.5V18" />
  </svg>
);

export const IconBus = (p: IconProps) => (
  <svg {...base(p)}>
    <rect x="4" y="3" width="16" height="14" rx="2" />
    <path d="M4 11h16M8 17v3M16 17v3" />
    <circle cx="8" cy="14" r="0.8" fill="currentColor" />
    <circle cx="16" cy="14" r="0.8" fill="currentColor" />
  </svg>
);

export const IconWallet = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M3 6a2 2 0 0 1 2-2h12v4" />
    <path d="M3 6v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2H5a2 2 0 0 1-2-2Z" />
    <circle cx="17" cy="11" r="1" fill="currentColor" />
  </svg>
);

export const IconHeart = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M12 21s-7-4.5-9.5-9.5C1 7 3 4 6 4c2 0 3.5 1 4.5 2.5C11.5 5 13 4 15 4c3 0 5 3 3.5 7.5C19 16.5 12 21 12 21Z" />
  </svg>
);

export const IconUser = (p: IconProps) => (
  <svg {...base(p)}>
    <circle cx="12" cy="8" r="4" />
    <path d="M4 21c0-4 4-7 8-7s8 3 8 7" />
  </svg>
);

export const IconUsers = (p: IconProps) => (
  <svg {...base(p)}>
    <circle cx="9" cy="8" r="3" />
    <path d="M3 21c0-3 3-5 6-5s6 2 6 5" />
    <path d="M16 5a3 3 0 0 1 0 6M21 21c0-2.5-2-4-4-4.5" />
  </svg>
);

export const IconCheck = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M4 12.5 9 17.5 20 6.5" />
  </svg>
);

export const IconChevron = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M6 9l6 6 6-6" />
  </svg>
);

export const IconArrowRight = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export const IconMenu = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </svg>
);

export const IconClose = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M6 6l12 12M18 6 6 18" />
  </svg>
);

export const IconStar = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="m12 3 2.5 5.5L20 9.5l-4 4 1 6L12 16l-5 3.5 1-6-4-4 5.5-1L12 3Z" />
  </svg>
);

export const IconMail = (p: IconProps) => (
  <svg {...base(p)}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3 7 9 6 9-6" />
  </svg>
);

export const IconCalendar = (p: IconProps) => (
  <svg {...base(p)}>
    <rect x="3" y="5" width="18" height="16" rx="2" />
    <path d="M3 9h18M8 3v4M16 3v4" />
  </svg>
);

export const IconAlert = (p: IconProps) => (
  <svg {...base(p)}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v6M12 16h.01" />
  </svg>
);

export const IconActivity = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M3 12h4l3-8 4 16 3-8h4" />
  </svg>
);

export const IconSparkles = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5L12 3Z" />
    <path d="M5 16l.7 2L8 18.7 5.7 19.4 5 22l-.7-2.6L2 18.7l2.3-.7L5 16Z" />
  </svg>
);

export const IconHospital = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M3 21h18M5 21V7l7-4 7 4v14" />
    <path d="M11 9h2v3h3v2h-3v3h-2v-3H8v-2h3V9Z" />
  </svg>
);

export const IconSmartphone = (p: IconProps) => (
  <svg {...base(p)}>
    <rect x="6" y="2" width="12" height="20" rx="3" />
    <path d="M11 18h2" />
  </svg>
);

export const IconBuilding = (p: IconProps) => (
  <svg {...base(p)}>
    <rect x="4" y="3" width="16" height="18" rx="1" />
    <path d="M8 7h2M14 7h2M8 11h2M14 11h2M8 15h2M14 15h2M10 21v-3h4v3" />
  </svg>
);

export const IconDoc = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M7 3h7l4 4v14H7Z" />
    <path d="M14 3v4h4M9 13h6M9 17h6" />
  </svg>
);

export const IconClipboard = (p: IconProps) => (
  <svg {...base(p)}>
    <rect x="5" y="5" width="14" height="16" rx="2" />
    <path d="M9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v0H9ZM9 12h6M9 16h4" />
  </svg>
);

export const IconPlus = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M12 5v14M5 12h14" />
  </svg>
);

export const IconWhatsApp = (p: IconProps) => (
  <svg {...base({ ...p, strokeWidth: 0 })} fill="currentColor">
    <path d="M12 2a10 10 0 0 0-8.6 15l-1.4 5 5.2-1.4A10 10 0 1 0 12 2Zm0 18.3a8.3 8.3 0 0 1-4.3-1.2l-.3-.2-3.1.8.8-3-.2-.3A8.3 8.3 0 1 1 12 20.3Zm4.7-6.1c-.3-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1-.2.3-.6.8-.8 1-.1.1-.3.2-.5.1a6.7 6.7 0 0 1-2-1.2 7.5 7.5 0 0 1-1.4-1.7c-.1-.3 0-.4.1-.5l.4-.5.3-.5v-.4c0-.1-.6-1.4-.8-2-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-1 2.2c0 1.3 1 2.6 1.1 2.8.1.2 1.9 3 4.7 4.1 2.3 1 2.7.8 3.2.8.5 0 1.5-.6 1.7-1.2.2-.6.2-1 .2-1.1-.1-.1-.2-.1-.5-.3Z" />
  </svg>
);

export const IconFacebook = (p: IconProps) => (
  <svg {...base({ ...p, strokeWidth: 0 })} fill="currentColor">
    <path d="M22 12a10 10 0 1 0-11.5 9.9v-7H8v-2.9h2.5V9.8c0-2.5 1.5-3.8 3.7-3.8 1.1 0 2.2.2 2.2.2v2.4h-1.2c-1.2 0-1.6.8-1.6 1.6v1.9h2.7l-.4 2.9h-2.3v7A10 10 0 0 0 22 12Z" />
  </svg>
);

export const IconTwitter = (p: IconProps) => (
  <svg {...base({ ...p, strokeWidth: 0 })} fill="currentColor">
    <path d="M18 3h3l-7 8 8 10h-6l-5-6-5 6H3l7-8L2 3h6l5 5L18 3Z" />
  </svg>
);

export const IconInstagram = (p: IconProps) => (
  <svg {...base(p)}>
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17" cy="7" r="1" fill="currentColor" />
  </svg>
);

export const IconLogo = (p: IconProps) => (
  <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...p}>
    <rect width="32" height="32" rx="9" fill="url(#g)" />
    <path d="M11 9.5v10M16 6v19M21 9.5v10M9 14h4M19 14h4" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
    <defs>
      <linearGradient id="g" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
        <stop stopColor="#1c8267" />
        <stop offset="1" stopColor="#0ea5e9" />
      </linearGradient>
    </defs>
  </svg>
);

export type IconName = typeof IconStethoscope;

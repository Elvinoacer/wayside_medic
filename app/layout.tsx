import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  style: ["normal", "italic"],
  axes: ["opsz"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://waysidemedic.co.ke"),
  title: {
    default: "Wayside Medical & Dental Clinic | Trusted Primary Care in Kasarani, Nairobi",
    template: "%s | Wayside Medical & Dental Clinic",
  },
  description:
    "KMPDC-licensed Level 2 medical & dental clinic on Kasarani-Mwiki Road, Sunton. General outpatient, dental surgery, antenatal, specialist chest & skin clinics, lab, minor surgery. M-Pesa, SHA & NHIF accepted.",
  keywords: [
    "Wayside Medical Clinic",
    "Wayside Dental Clinic",
    "Kasarani clinic",
    "Mwiki medical",
    "Sunton doctors",
    "Hunters clinic",
    "Nairobi primary care",
    "KMPDC licensed clinic",
    "antenatal care Nairobi",
    "dental surgery Kasarani",
    "SHA accredited clinic",
    "NHIF outpatient",
  ],
  authors: [{ name: "Wayside Medical & Dental Clinic" }],
  openGraph: {
    type: "website",
    locale: "en_KE",
    url: "https://waysidemedic.co.ke",
    siteName: "Wayside Medical & Dental Clinic",
    title: "Wayside Medical & Dental Clinic | Trusted Primary Care in Kasarani",
    description:
      "Compassionate, KMPDC-licensed outpatient medical & dental care on Kasarani-Mwiki Road. Open Mon–Sat 8AM–6PM. M-Pesa, SHA & NHIF accepted.",
    images: [
      {
        url: "https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/ca007a0604bb.jpg",
        width: 1200,
        height: 630,
        alt: "Wayside Medical & Dental Clinic",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wayside Medical & Dental Clinic | Kasarani, Nairobi",
    description:
      "Compassionate outpatient & dental care on Kasarani-Mwiki Road. Open Mon–Sat 8AM–6PM.",
    images: ["https://z-cdn.chatglm.cn/image-search-mcp/images-ppt/ca007a0604bb.jpg"],
  },
  robots: { index: true, follow: true },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${fraunces.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-paper text-ink">{children}</body>
    </html>
  );
}

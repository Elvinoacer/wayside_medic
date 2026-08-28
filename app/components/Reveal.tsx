"use client";

import { useEffect, useRef, type ReactNode, type CSSProperties } from "react";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  /** Animation flavour: rise (default), slide from left/right, pop */
  variant?: "up" | "left" | "right" | "pop";
  as?: "div" | "section" | "li" | "article";
}

/**
 * Lightweight scroll-reveal wrapper using IntersectionObserver.
 * Adds `is-visible` when the element enters the viewport.
 * Automatically disabled under prefers-reduced-motion.
 */
export default function Reveal({
  children,
  className = "",
  delay = 0,
  variant = "up",
  as: Tag = "div",
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.classList.add("is-visible");
      return;
    }

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            el.classList.add("is-visible");
            obs.unobserve(el);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const variantClass =
    variant === "left" ? "rv-left" : variant === "right" ? "rv-right" : variant === "pop" ? "rv-pop" : "";

  return (
    <Tag
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ref={ref as any}
      className={`reveal ${variantClass} ${className}`}
      style={{ transitionDelay: `${delay}ms` } as CSSProperties}
    >
      {children}
    </Tag>
  );
}

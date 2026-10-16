"use client";

import Link from "next/link";
import { animate, motion, useInView } from "motion/react";
import { useEffect, useRef, useState, type ReactNode } from "react";

const ease = [0.22, 1, 0.36, 1] as const;

export type Tone = "paper" | "white" | "sand" | "navy" | "gold";

export function Reveal({
  children,
  delay = 0,
  y = 20,
  className,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay, ease }}
    >
      {children}
    </motion.div>
  );
}

export function Counter({ to, prefix = "", suffix = "" }: { to: number; prefix?: string; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const c = animate(0, to, { duration: 1.4, ease, onUpdate: (v) => setVal(Math.round(v)) });
    return () => c.stop();
  }, [inView, to]);
  return (
    <span ref={ref} className="tabular-nums">
      {prefix}
      {val}
      {suffix}
    </span>
  );
}

/** Section label, e.g. "No. 02  How a search runs". */
export function Label({ n, children, className = "" }: { n?: string; children: ReactNode; className?: string }) {
  return (
    <p className={`flex items-baseline gap-3 text-sm font-medium ${className}`}>
      {n && <span className="font-serif text-base italic text-stone">No. {n}</span>}
      <span>{children}</span>
    </p>
  );
}

export function Heading({
  children,
  className = "",
  as: Tag = "h2",
}: {
  children: ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3";
}) {
  return (
    <Reveal>
      <Tag className={`font-serif text-4xl font-normal leading-[1.05] tracking-[-0.02em] md:text-[3.4rem] ${className}`}>
        {children}
      </Tag>
    </Reveal>
  );
}

export function Button({
  href,
  children,
  variant = "navy",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: "navy" | "gold" | "outline" | "outline-light";
  className?: string;
}) {
  const styles = {
    navy: "bg-navy text-paper hover:bg-navy-deep",
    gold: "bg-gold text-ink hover:bg-gold-deep",
    outline: "border border-ink/80 text-ink hover:bg-ink hover:text-paper",
    "outline-light": "border border-paper/60 text-paper hover:bg-paper hover:text-navy",
  }[variant];
  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-3 rounded-[4px] px-6 py-3.5 text-[15px] font-medium transition-colors duration-200 ${styles} ${className}`}
    >
      {children}
      <Arrow className="transition-transform duration-200 group-hover:translate-x-1" />
    </Link>
  );
}

export function Arrow({ className = "" }: { className?: string }) {
  return (
    <svg width="16" height="12" viewBox="0 0 16 12" fill="none" className={className} aria-hidden>
      <path d="M0 6h14m0 0L9 1m5 5L9 11" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

export function Section({
  id,
  children,
  tone = "paper",
  className = "",
}: {
  id?: string;
  children: ReactNode;
  tone?: Tone;
  className?: string;
}) {
  const toneClass = tone === "paper" ? "" : `tone-${tone}`;
  return (
    <section id={id} className={`relative px-5 py-20 sm:px-8 md:py-28 ${toneClass} ${className}`}>
      <div className="mx-auto max-w-7xl">{children}</div>
    </section>
  );
}

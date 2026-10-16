"use client";

import { motion } from "motion/react";
import { Button } from "../ui";
import FounderChip from "../FounderChip";
import { disciplines } from "@/content/site";

const ease = [0.22, 1, 0.36, 1] as const;

const criteria = [
  { k: "Shipped ML models to production at scale", v: 5 },
  { k: "Owns problems end to end", v: 5 },
  { k: "Explains trade-offs to non-engineers", v: 4 },
  { k: "Mentors junior engineers", v: 4 },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-5 pb-0 pt-14 sm:px-8 md:pt-20">
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-[15px] font-medium text-navy"
          >
            AI &amp; Engineering Recruiting Firm in Colorado
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease }}
            className="mt-6 font-serif text-[3.2rem] font-normal leading-[1] tracking-[-0.03em] sm:text-7xl xl:text-[5.6rem]"
          >
            We connect <span className="mark italic">top talent</span> with respected companies.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease }}
            className="mt-8 max-w-xl text-lg leading-relaxed text-stone"
          >
            CLM Careers is a boutique recruiting partner for AI, machine learning, cybersecurity and engineering teams. We
            go after the people who aren&apos;t on job boards, and we stand behind every hire for up to a year.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease }}
            className="mt-10 flex flex-wrap gap-3"
          >
            <Button href="/contact?type=employer">Hire with us</Button>
            <Button href="/candidates" variant="outline">
              I&apos;m looking for a role
            </Button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-10 border-t border-rule pt-6"
          >
            <FounderChip text="Founder. 20+ years recruiting engineers. You work with me directly." />
          </motion.div>
        </div>

        <div className="relative lg:col-span-5">
          <Scorecard />
        </div>
      </div>

      <div className="mx-auto mt-20 max-w-7xl border-t border-rule py-6 md:mt-24">
        <p className="text-[15px] leading-loose text-stone">
          <span className="mr-3 font-medium text-ink">We recruit for</span>
          {disciplines.join("  /  ")}
        </p>
      </div>
    </section>
  );
}

/** A sample hiring scorecard, the document our Partnership Session produces. */
function Scorecard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, rotate: 0 }}
      animate={{ opacity: 1, y: 0, rotate: -1.5 }}
      transition={{ duration: 1, delay: 0.25, ease }}
      className="relative mx-auto max-w-md"
    >
      {/* sheet underneath */}
      <div className="absolute inset-0 translate-x-3 translate-y-3 rotate-[3deg] rounded-[6px] bg-sand" />
      <div className="relative rounded-[6px] border border-rule bg-white p-7 shadow-[0_30px_60px_-30px_rgba(15,44,76,0.35)]">
        <div className="flex items-start justify-between border-b border-rule pb-5">
          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-stone">Hiring scorecard</p>
            <p className="mt-1 font-serif text-2xl">Senior ML Engineer</p>
          </div>
          <span className="rounded-[3px] bg-navy px-2 py-1 text-[11px] font-medium text-paper">Sample</span>
        </div>
        <ul className="divide-y divide-rule">
          {criteria.map((c, i) => (
            <motion.li
              key={c.k}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 + i * 0.15, duration: 0.5 }}
              className="flex items-center justify-between gap-4 py-3.5 text-[14px]"
            >
              <span>{c.k}</span>
              <span className="flex shrink-0 gap-1" aria-label={`${c.v} of 5`}>
                {[1, 2, 3, 4, 5].map((n) => (
                  <motion.span
                    key={n}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.9 + i * 0.15 + n * 0.05 }}
                    className={`h-2.5 w-2.5 rounded-[2px] ${n <= c.v ? "bg-navy" : "bg-sand"}`}
                  />
                ))}
              </span>
            </motion.li>
          ))}
        </ul>
        <div className="mt-5 flex items-end justify-between border-t border-rule pt-5">
          <div className="text-[13px] text-stone">
            <p>Built with the client&apos;s top performers</p>
            <p>Market map and salary range attached</p>
          </div>
        </div>
        {/* ink stamp */}
        <motion.div
          initial={{ opacity: 0, scale: 1.6, rotate: -20 }}
          animate={{ opacity: 1, scale: 1, rotate: -12 }}
          transition={{ delay: 1.8, duration: 0.35, ease: "easeOut" }}
          className="absolute -bottom-5 right-6 rounded-[4px] border-[2.5px] border-red px-3 py-1.5 text-center font-serif text-red"
        >
          <span className="block text-[10px] font-semibold uppercase tracking-[0.2em]">Validated</span>
          <span className="block text-xl font-semibold leading-none">Top 10%</span>
        </motion.div>
      </div>
    </motion.div>
  );
}

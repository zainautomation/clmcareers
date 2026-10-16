"use client";

import { motion, useMotionValueEvent, useScroll, useTransform } from "motion/react";
import { useRef, useState } from "react";
import { roadmap } from "@/content/site";
import { Label, Reveal } from "../ui";

// A switchback trail up a mountain; the four waypoints sit on it.
const PATH = "M40 470 C 160 470, 220 400, 300 380 S 420 300, 380 250 S 300 170, 420 150 S 600 120, 620 60";
const POINTS = [
  { x: 40, y: 470 },
  { x: 300, y: 380 },
  { x: 380, y: 250 },
  { x: 620, y: 60 },
];

export default function RoadMap({ n = "02" }: { n?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const draw = useTransform(scrollYProgress, [0.05, 0.9], [0, 1]);
  const [active, setActive] = useState(0);

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    setActive(Math.min(roadmap.length - 1, Math.max(0, Math.floor(((v - 0.05) / 0.85) * roadmap.length))));
  });

  const heading = (
    <h2 className="mt-6 font-serif text-4xl leading-[1.05] tracking-[-0.02em] md:text-[3.4rem]">
      The Road Map to <em className="mark">Top Talent</em>
    </h2>
  );

  return (
    <section id="roadmap" className="relative">
      {/* Desktop: pinned, scroll-driven */}
      <div ref={ref} className="relative hidden h-[360vh] md:block">
        <div className="sticky top-[76px] flex h-[calc(100vh-76px)] items-center overflow-hidden px-8">
          <div className="relative mx-auto grid w-full max-w-7xl grid-cols-12 items-center gap-10">
            <div className="col-span-5">
              <Label n={n}>Our method</Label>
              {heading}
              <div className="relative mt-12 h-44">
                {roadmap.map((r, i) => (
                  <motion.div
                    key={r.key}
                    className="absolute inset-0"
                    initial={false}
                    animate={{ opacity: active === i ? 1 : 0, y: active === i ? 0 : active > i ? -16 : 16 }}
                    transition={{ duration: 0.45 }}
                  >
                    <p className="text-sm font-medium text-red">Stage {i + 1} of 4</p>
                    <p className="mt-2 font-serif text-3xl">{r.title}</p>
                    <p className="mt-3 max-w-md leading-relaxed text-stone">{r.blurb}</p>
                  </motion.div>
                ))}
              </div>
              <ol className="mt-4 flex gap-4 text-sm">
                {roadmap.map((r, i) => (
                  <li key={r.key} className={`w-20 ${active >= i ? "text-navy" : "text-stone/50"}`}>
                    <span className={`mb-2 block h-[3px] w-full ${active >= i ? "bg-navy" : "bg-rule"}`} />
                    {r.title}
                  </li>
                ))}
              </ol>
            </div>

            <div className="col-span-7">
              <svg viewBox="0 0 660 520" className="w-full" fill="none">
                <defs>
                  <clipPath id="map-frame">
                    <rect x="1" y="1" width="658" height="518" rx="6" />
                  </clipPath>
                </defs>
                <rect x="1" y="1" width="658" height="518" rx="6" fill="var(--white)" stroke="var(--rule)" />
                {/* contour lines, drawn like a printed trail map */}
                <g clipPath="url(#map-frame)">
                {[0, 1, 2, 3, 4, 5, 6].map((i) => (
                  <path
                    key={i}
                    d={`M${375 - i * 62} 140 C ${375 - i * 62} ${60 - i * 30}, ${580 + i * 70} ${50 - i * 34}, ${570 + i * 66} 150 S ${430 - i * 40} ${250 + i * 50}, ${375 - i * 62} 140 Z`}
                    stroke="#c9bfa8"
                    strokeWidth={i % 3 === 0 ? 1.4 : 0.8}
                  />
                ))}
                </g>
                <text x="452" y="215" fill="#a89c80" fontSize="13" fontStyle="italic" className="font-serif">
                  14,000 ft
                </text>
                <path d={PATH} stroke="var(--navy)" strokeOpacity="0.25" strokeWidth="2" strokeDasharray="2 6" />
                <motion.path d={PATH} stroke="var(--navy)" strokeWidth="3" strokeLinecap="round" style={{ pathLength: draw }} />
                {POINTS.map((p, i) => (
                  <Flag key={i} {...p} i={i} active={active >= i} label={roadmap[i].title} />
                ))}
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile: stacked */}
      <div className="px-5 py-20 md:hidden">
        <Label n={n}>Our method</Label>
        {heading}
        <ol className="relative mt-12 space-y-10 border-l-2 border-navy pl-8">
          {roadmap.map((r, i) => (
            <Reveal key={r.key} delay={i * 0.05}>
              <li className="relative">
                <span className="absolute -left-[41px] top-1 h-4 w-4 rounded-full border-2 border-navy bg-paper" />
                <p className="text-sm font-medium text-red">Stage {i + 1}</p>
                <p className="mt-1 font-serif text-2xl">{r.title}</p>
                <p className="mt-2 text-stone">{r.blurb}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Flag({ x, y, i, active, label }: { x: number; y: number; i: number; active: boolean; label: string }) {
  const left = i === 3;
  return (
    <g>
      <circle cx={x} cy={y} r="6" fill={active ? "var(--navy)" : "var(--paper)"} stroke="var(--navy)" strokeWidth="2" />
      <motion.g initial={false} animate={{ opacity: active ? 1 : 0 }} transition={{ duration: 0.3 }}>
        <line x1={x} y1={y - 6} x2={x} y2={y - 34} stroke="var(--ink)" strokeWidth="1.5" />
        <path d={`M${x} ${y - 34} L${x + 16} ${y - 29} L${x} ${y - 24} Z`} fill="var(--red)" />
      </motion.g>
      <text
        x={x + (left ? -14 : 14)}
        y={y + 24}
        textAnchor={left ? "end" : "start"}
        fontSize="14"
        fontWeight="500"
        fill={active ? "var(--ink)" : "#9a9a9a"}
      >
        {i + 1}. {label}
      </text>
    </g>
  );
}

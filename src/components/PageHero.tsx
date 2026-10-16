import type { ReactNode } from "react";
import { Reveal } from "./ui";

export default function PageHero({ eyebrow, title, children }: { eyebrow: string; title: ReactNode; children?: ReactNode }) {
  return (
    <section className="px-5 pb-16 pt-16 sm:px-8 md:pb-20 md:pt-24">
      <div className="mx-auto max-w-7xl border-b-2 border-ink pb-14">
        <p className="text-[15px] font-medium text-navy">{eyebrow}</p>
        <Reveal>
          <h1 className="mt-6 max-w-5xl font-serif text-5xl leading-[1] tracking-[-0.03em] md:text-7xl lg:text-[5.4rem]">
            {title}
          </h1>
        </Reveal>
        {children && (
          <Reveal delay={0.15}>
            <div className="mt-8 max-w-2xl text-lg leading-relaxed text-stone">{children}</div>
          </Reveal>
        )}
      </div>
    </section>
  );
}

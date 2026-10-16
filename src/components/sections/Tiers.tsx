import Link from "next/link";
import { careerDriver } from "@/content/site";
import { Arrow, Reveal } from "../ui";

const usd = (n: number) => `$${n.toLocaleString("en-US")}`;

export default function Tiers({ compact = false }: { compact?: boolean }) {
  return (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
      {careerDriver.tiers.map((t, i) => (
        <Reveal key={t.tier} delay={i * 0.07}>
          <article
            className={`relative flex h-full flex-col rounded-[6px] p-7 ${
              t.featured ? "tone-navy" : "border border-rule bg-white"
            }`}
          >
            <p className={`text-sm font-medium ${t.featured ? "text-gold" : "text-navy"}`}>Tier {t.tier}</p>
            <h3 className="mt-2 font-serif text-[1.7rem] leading-tight">{t.name}</h3>
            <p className="mt-2 text-[15px] italic text-stone">{t.tagline}</p>

            <p className="mt-6 flex items-baseline gap-2 border-y border-rule py-5">
              <span className="font-serif text-5xl tracking-[-0.02em]">{usd(t.price)}</span>
              <span className="text-sm text-stone">investment</span>
            </p>

            {!compact && <p className="mt-5 text-[15px] leading-relaxed text-stone">{t.summary}</p>}

            <ul className="mt-5 space-y-3 text-[15px] leading-snug">
              {t.includesPrev && (
                <li className="font-medium">Everything in {t.includesPrev}, plus:</li>
              )}
              {(compact ? t.items.slice(0, 3) : t.items).map((item) => (
                <li key={item} className="flex gap-3">
                  <svg width="16" height="16" viewBox="0 0 16 16" className="mt-0.5 shrink-0" aria-hidden>
                    <path d="M3 8.5l3 3 7-7" fill="none" stroke={t.featured ? "var(--gold)" : "var(--navy)"} strokeWidth="2" />
                  </svg>
                  {item}
                </li>
              ))}
              {compact && t.items.length > 3 && (
                <li className="pl-7 text-stone">+ {t.items.length - 3} more</li>
              )}
            </ul>

            <div className="mt-auto pt-8">
              <Link
                href={careerDriver.applyUrl}
                target="_blank"
                rel="noreferrer"
                className={`group inline-flex w-full items-center justify-between rounded-[4px] px-5 py-3.5 text-[15px] font-medium transition-colors ${
                  t.featured ? "bg-gold text-ink hover:bg-gold-deep" : "bg-navy text-paper hover:bg-navy-deep"
                }`}
              >
                Apply for {t.name}
                <Arrow className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </article>
        </Reveal>
      ))}
    </div>
  );
}

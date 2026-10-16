import Image from "next/image";
import Link from "next/link";
import { founder, resources } from "@/content/site";
import { Arrow, Label, Reveal, Section, type Tone } from "../ui";

const credentials = [
  { k: "20+ years", v: "recruiting engineers, executives and technical leaders" },
  { k: "Thousands", v: "of candidate interviews, on both sides of the hiring table" },
  { k: "Author", v: "of The Job Seeker's Pocket Guide to Getting Your Paycheck Back" },
];

export default function Founder({ full = false, n = "07", tone = "paper" }: { full?: boolean; n?: string; tone?: Tone }) {
  return (
    <Section id="founder" tone={tone}>
      <div className="grid gap-14 md:grid-cols-12">
        <div className="md:col-span-5">
          <Reveal>
            {/* Source photo is 200×200, so it is never shown wider than ~220px */}
            <figure className="w-fit -rotate-2 rounded-[4px] bg-white p-3 pb-4 shadow-[0_24px_50px_-24px_rgba(15,44,76,0.45)]">
              <Image
                src={founder.photo}
                alt={`${founder.name}, founder of CLM Careers`}
                width={200}
                height={200}
                priority={!full}
                className="h-[200px] w-[200px] object-cover sm:h-[220px] sm:w-[220px]"
              />
              <figcaption className="mt-3 text-center font-script text-3xl leading-none text-navy">
                Cass, Arvada CO
              </figcaption>
            </figure>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-10 font-serif text-3xl">{founder.name}</p>
            <p className="mt-1 text-stone">
              {founder.title} · {founder.tagline}
            </p>
            <dl className="mt-8 border-t-2 border-ink">
              {credentials.map((c) => (
                <div key={c.k} className="flex gap-5 border-b border-rule py-4">
                  <dt className="w-28 shrink-0 font-serif text-xl text-navy">{c.k}</dt>
                  <dd className="text-[15px] leading-snug text-stone">{c.v}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        <div className="md:col-span-6 md:col-start-7">
          <Label n={n}>A note from our founder</Label>
          <Reveal delay={0.1}>
            <blockquote className="mt-8 font-serif text-3xl leading-[1.2] tracking-[-0.01em] md:text-[2.5rem]">
              &ldquo;{founder.quote}&rdquo;
            </blockquote>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-8 space-y-4 text-lg leading-relaxed text-stone">
              {(full ? founder.bio : founder.bio.slice(0, 2)).map((p, i) => (
                <p key={i}>{p}</p>
              ))}
              <p>When you work with CLM Careers, you work with me. Not a junior recruiter, not a call center.</p>
            </div>
            <p className="mt-8 font-script text-6xl leading-none text-navy">Cass Murray</p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="mt-10 flex flex-wrap items-baseline gap-x-6 gap-y-3 border-t border-rule pt-6">
              <span className="text-sm text-stone">Previously recruited for</span>
              {founder.previously.map((c) => (
                <span key={c} className="font-serif text-2xl">
                  {c}
                </span>
              ))}
            </div>
          </Reveal>
          <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
            {!full && (
              <Link
                href="/about"
                className="group inline-flex items-center gap-2 font-medium text-navy underline decoration-gold decoration-2 underline-offset-4"
              >
                Read Cass&apos;s story <Arrow className="transition-transform group-hover:translate-x-1" />
              </Link>
            )}
            <a
              href={resources[0].href}
              target="_blank"
              rel="noreferrer"
              className="font-medium text-navy underline decoration-gold decoration-2 underline-offset-4"
            >
              Read her book ↗
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}

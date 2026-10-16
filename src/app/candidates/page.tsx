import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Specialties from "@/components/sections/Specialties";
import CtaBand from "@/components/sections/CtaBand";
import { Button, Label, Reveal, Section } from "@/components/ui";
import Tiers from "@/components/sections/Tiers";
import { resources } from "@/content/site";

export const metadata: Metadata = {
  title: "For Engineers & Career Seekers",
  description:
    "Confidential career conversations, plus optional career strategy, resume and interview coaching for AI, ML and engineering professionals.",
};

const promises = [
  { t: "Confidential, always", d: "Your search stays private. We never send your resume anywhere without your explicit yes." },
  { t: "No ghosting", d: "You'll hear back from us whether or not a role moves forward, with honest feedback." },
  { t: "Roles worth your time", d: "Exclusive searches with respected companies. Most are never posted on job boards." },
];

export default function CandidatesPage() {
  return (
    <>
      <PageHero eyebrow="For engineers" title="The best roles are rarely posted.">
        <p>
          Our clients hire through us because they want people who aren&apos;t on the market. If you build in AI, security,
          aerospace or hardware, let&apos;s talk before the next role is filled quietly.
        </p>
        <div className="mt-8">
          <Button href="/contact?type=candidate">Start a confidential conversation</Button>
        </div>
      </PageHero>

      <Section className="pt-0 md:pt-0">
        <Label n="01">Our promise to candidates</Label>
        <div className="mt-10 grid gap-x-10 sm:grid-cols-3">
          {promises.map((p, i) => (
            <Reveal key={p.t} delay={i * 0.08} className="border-t-2 border-ink pt-6">
              <h3 className="font-serif text-2xl">{p.t}</h3>
              <p className="mt-3 leading-relaxed text-stone">{p.d}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="sand">
        <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <Label n="02">Career strategy services</Label>
            <Reveal>
              <h2 className="mt-6 font-serif text-4xl leading-[1.05] tracking-[-0.02em] md:text-5xl">
                Want hands-on help? Meet Career Driver GO!
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 text-lg text-stone">
                Cass&apos;s career acceleration program, based on her book. It isn&apos;t mass applying or resume
                tweaking. It&apos;s the backdoor approach to getting hired.
              </p>
            </Reveal>
          </div>
          <Reveal delay={0.15}>
            <Button href="/career-driver-go">Compare all packages</Button>
          </Reveal>
        </div>
        <Tiers compact />
      </Section>

      <Section tone="white">
        <Label n="03">Free resources</Label>
        <Reveal>
          <h2 className="mt-6 max-w-3xl font-serif text-4xl leading-[1.05] tracking-[-0.02em] md:text-5xl">
            Start with what Cass has already written.
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-x-10 gap-y-12 md:grid-cols-3">
          {resources.map((r, i) => (
            <Reveal key={r.title} delay={i * 0.08} className="flex flex-col border-t-2 border-ink pt-6">
              <p className="text-sm font-medium text-navy">{r.kind}</p>
              <h3 className="mt-2 font-serif text-2xl leading-snug">{r.title}</h3>
              <p className="mt-3 leading-relaxed text-stone">{r.body}</p>
              <a
                href={r.href}
                target="_blank"
                rel="noreferrer"
                className="mt-6 font-medium text-navy underline decoration-gold decoration-2 underline-offset-4 hover:decoration-navy"
              >
                {r.cta} ↗
              </a>
            </Reveal>
          ))}
        </div>
      </Section>

      <Specialties n="04" />
      <CtaBand title="Ready for a role that's worth leaving for?" />
    </>
  );
}

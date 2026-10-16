import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Tiers from "@/components/sections/Tiers";
import { Button, Label, Reveal, Section } from "@/components/ui";
import { careerDriver } from "@/content/site";

export const metadata: Metadata = {
  title: "Career Driver GO! Career Coaching & Pricing",
  description:
    "Career Driver GO! is Cass Murray's career acceleration program. Four packages from $997, from LinkedIn and resume work to lifetime coaching with a career protection guarantee.",
};

const usd = (n: number) => `$${n.toLocaleString("en-US")}`;

export default function CareerDriverPage() {
  const t = careerDriver.tiers;
  const upgrades = t.slice(0, -1).map((from, i) => ({ from, to: t[i + 1], diff: t[i + 1].price - from.price }));

  return (
    <>
      <PageHero
        eyebrow="Career Driver GO!  ·  Career strategy services"
        title={
          <>
            Stop waiting. Start <em className="mark">driving</em> your career.
          </>
        }
      >
        <p>
          No more ghosting, no more guessing. Career Driver GO! is for professionals who know they have more to offer and
          need a better strategy to create opportunities, build real connections and take control of their growth.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button href="#packages">See the packages</Button>
          <Button href={careerDriver.applyUrl} variant="outline">
            Apply now
          </Button>
        </div>
      </PageHero>

      <Section className="pt-0 md:pt-0">
        <div className="grid gap-14 md:grid-cols-12">
          <div className="md:col-span-5">
            <Label n="01">Why it exists</Label>
            <Reveal>
              <h2 className="mt-6 font-serif text-4xl leading-[1.05] tracking-[-0.02em] md:text-5xl">
                Talented people aren&apos;t unqualified. Their strategy is outdated.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 text-lg leading-relaxed text-stone">
                After interviewing thousands of candidates, Cass kept seeing skilled, experienced people stuck in the same
                loop: update the resume, apply online, wait, repeat. Careers are built through visibility, relationships
                and intentional action. This program is the backdoor approach to getting hired, based on her book.
              </p>
            </Reveal>
          </div>
          <div className="grid gap-10 sm:grid-cols-2 md:col-span-6 md:col-start-7">
            <Reveal>
              <h3 className="border-b-2 border-ink pb-3 font-semibold">Inside, you&apos;ll learn to</h3>
              <ul className="mt-4 space-y-4">
                {careerDriver.learn.map((l) => (
                  <li key={l} className="leading-snug">
                    {l}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={0.1}>
              <h3 className="border-b-2 border-ink pb-3 font-semibold">Built for</h3>
              <ul className="mt-4 space-y-4 text-stone">
                {careerDriver.forWho.map((l) => (
                  <li key={l}>{l}</li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </Section>

      <Section id="packages" tone="sand">
        <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <Label n="02">Career acceleration packages</Label>
            <Reveal>
              <h2 className="mt-6 font-serif text-4xl leading-[1.05] tracking-[-0.02em] md:text-[3.4rem]">
                Four tiers. Pick your pace.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <p className="max-w-sm text-stone">
              Each tier includes everything in the one before it. Not sure which fits? Apply and Cass will recommend one.
            </p>
          </Reveal>
        </div>
        <Tiers />
      </Section>

      <Section tone="navy">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Label n="03" className="text-gold">
              Upgrade guarantee
            </Label>
            <Reveal>
              <h2 className="mt-6 font-serif text-4xl leading-[1.05] tracking-[-0.02em] md:text-5xl">
                You never lose what you&apos;ve invested.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 text-lg text-stone">
                Start where it makes sense. If you upgrade later, 100% of what you paid is credited toward the new package.
                You only pay the difference.
              </p>
            </Reveal>
          </div>
          <Reveal className="md:col-span-6 md:col-start-7" delay={0.1}>
            <table className="w-full text-left">
              <thead>
                <tr className="border-b-2 border-paper/60 text-sm text-stone">
                  <th className="py-3 font-medium">Upgrade from</th>
                  <th className="py-3 font-medium">To</th>
                  <th className="py-3 text-right font-medium">You pay</th>
                </tr>
              </thead>
              <tbody>
                {upgrades.map((u) => (
                  <tr key={u.from.name} className="border-b border-rule">
                    <td className="py-5">{u.from.name}</td>
                    <td className="py-5">{u.to.name}</td>
                    <td className="py-5 text-right font-serif text-2xl text-gold">{usd(u.diff)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Reveal>
        </div>
      </Section>

      <Section tone="white">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <Label n="04">Program FAQ</Label>
            <Reveal>
              <h2 className="mt-6 font-serif text-4xl leading-[1.05] tracking-[-0.02em] md:text-5xl">
                Is it right for me?
              </h2>
            </Reveal>
          </div>
          <div className="border-t-2 border-ink md:col-span-8">
            {careerDriver.faqs.map((f, i) => (
              <details key={f.q} open={i === 0} className="group border-b border-rule">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 text-lg font-medium [&::-webkit-details-marker]:hidden">
                  {f.q}
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-rule text-navy transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="max-w-2xl pb-7 leading-relaxed text-stone">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <details className="group rounded-[6px] border border-rule bg-white">
          <summary className="flex cursor-pointer list-none items-center justify-between p-6 font-medium [&::-webkit-details-marker]:hidden">
            Program access agreement
            <span className="text-sm text-stone group-open:hidden">Read the terms</span>
            <span className="hidden text-sm text-stone group-open:inline">Hide</span>
          </summary>
          <dl className="grid gap-x-10 gap-y-6 border-t border-rule p-6 text-[15px] md:grid-cols-2">
            {careerDriver.agreement.map((a) => (
              <div key={a.t}>
                <dt className="font-semibold">{a.t}</dt>
                <dd className="mt-1 leading-relaxed text-stone">{a.d}</dd>
              </div>
            ))}
          </dl>
        </details>
      </Section>

      <section className="tone-gold px-5 py-20 sm:px-8 md:py-24">
        <div className="mx-auto grid max-w-7xl items-end gap-10 md:grid-cols-12">
          <Reveal className="md:col-span-8">
            <h2 className="font-serif text-4xl leading-[1.05] tracking-[-0.02em] md:text-6xl">
              Ready to stop chasing jobs and start creating opportunities?
            </h2>
            <p className="mt-5 max-w-xl text-lg">
              Fill in a short form and Cass will review your goals to see whether Career Driver GO! is the right fit.
            </p>
          </Reveal>
          <Reveal className="md:col-span-4 md:text-right" delay={0.1}>
            <Button href={careerDriver.applyUrl}>Get started</Button>
          </Reveal>
        </div>
      </section>
    </>
  );
}

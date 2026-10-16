import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Founder from "@/components/sections/Founder";
import RoadMap from "@/components/sections/RoadMap";
import CtaBand from "@/components/sections/CtaBand";
import { Label, Reveal, Section } from "@/components/ui";

export const metadata: Metadata = {
  title: "About",
  description: "CLM Careers is a boutique, retention-first AI and engineering recruiting firm founded by Cass Murray in Arvada, Colorado.",
};

const values = [
  { t: "Retention over placements", d: "We measure success a year after the start date, not on offer day." },
  { t: "Exclusive by design", d: "We never shop your search, or your candidates, to competitors." },
  { t: "Candidates are clients too", d: "Every person we speak to gets a response and honest feedback." },
  { t: "Data, then instinct", d: "Market maps and scorecards first, then years of pattern recognition on top." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow="About CLM Careers" title="Boutique by choice. Accountable by design.">
        <p>
          CLM Careers was built in Colorado to fix what&apos;s broken in technical recruiting: speed without quality, and
          volume without accountability.
        </p>
      </PageHero>
      <Founder full n="01" />
      <Section tone="navy">
        <Label n="02" className="text-gold">
          What we stand for
        </Label>
        <div className="mt-12 grid gap-x-12 sm:grid-cols-2">
          {values.map((v, i) => (
            <Reveal key={v.t} delay={i * 0.06} className="border-t border-rule py-8">
              <h3 className="font-serif text-3xl">{v.t}</h3>
              <p className="mt-3 text-lg text-stone">{v.d}</p>
            </Reveal>
          ))}
        </div>
      </Section>
      <RoadMap n="03" />
      <CtaBand />
    </>
  );
}

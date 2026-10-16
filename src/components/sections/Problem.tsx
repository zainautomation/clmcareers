import { problemStats } from "@/content/site";
import { Counter, Label, Reveal, Section } from "../ui";

export default function Problem({ n = "01" }: { n?: string }) {
  return (
    <Section tone="navy">
      <div className="grid gap-10 md:grid-cols-12">
        <div className="md:col-span-6">
          <Label n={n} className="text-gold">
            The cost of a wrong hire
          </Label>
          <Reveal>
            <h2 className="mt-6 font-serif text-4xl leading-[1.08] tracking-[-0.02em] md:text-[3.2rem]">
              Hiring engineers is easy. Hiring the <em className="text-gold">right</em> ones is not.
            </h2>
          </Reveal>
        </div>
        <Reveal className="md:col-span-5 md:col-start-8 md:pt-12" delay={0.1}>
          <p className="text-lg leading-relaxed text-stone">
            Leaders who can&apos;t consistently hire and keep top performers end up exposed. Plenty of outside recruiters
            make it worse with recycled resumes, ghosted candidates and the same shortlist sent to your competitors.
          </p>
        </Reveal>
      </div>

      <div className="mt-16 grid border-t border-rule sm:grid-cols-2 lg:grid-cols-4">
        {problemStats.map((s, i) => (
          <Reveal
            key={s.label}
            delay={i * 0.08}
            className={`border-b border-rule py-8 sm:pr-8 lg:border-b-0 ${i > 0 ? "lg:border-l lg:pl-8" : ""} ${
              i % 2 === 1 ? "sm:border-l sm:pl-8 lg:pl-8" : ""
            }`}
          >
            <p className="font-serif text-6xl font-light tracking-[-0.03em] text-gold">
              <Counter to={s.value} prefix={s.prefix} suffix={s.suffix} />
            </p>
            <p className="mt-4 font-medium">{s.label}</p>
            <p className="mt-2 text-[15px] leading-relaxed text-stone">{s.detail}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

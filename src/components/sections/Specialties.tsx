import { specialties } from "@/content/site";
import { Label, Reveal, Section } from "../ui";

export default function Specialties({ n = "05" }: { n?: string }) {
  return (
    <Section id="specialties">
      <div className="grid gap-8 md:grid-cols-12">
        <div className="md:col-span-7">
          <Label n={n}>Where we recruit</Label>
          <Reveal>
            <h2 className="mt-6 font-serif text-4xl leading-[1.05] tracking-[-0.02em] md:text-[3.4rem]">
              Built for emerging and deep-tech industries.
            </h2>
          </Reveal>
        </div>
        <Reveal className="md:col-span-4 md:col-start-9 md:pt-14" delay={0.1}>
          <p className="text-lg leading-relaxed text-stone">
            From early-stage AI companies to established aerospace and manufacturing teams, on the Front Range and
            nationwide.
          </p>
        </Reveal>
      </div>

      <ul className="mt-14 border-t-2 border-ink">
        {specialties.map((s, i) => (
          <Reveal key={s.title} delay={i * 0.04}>
            <li className="group grid gap-2 border-b border-rule px-2 py-7 transition-colors duration-200 hover:bg-gold md:grid-cols-12 md:items-baseline md:px-4">
              <span className="text-sm text-stone group-hover:text-ink md:col-span-1">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="font-serif text-2xl md:col-span-5 md:text-3xl">{s.title}</h3>
              <p className="text-stone group-hover:text-ink md:col-span-6">{s.roles}</p>
            </li>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}

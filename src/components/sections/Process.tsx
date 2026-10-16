import { process } from "@/content/site";
import { Label, Reveal, Section } from "../ui";

export default function Process({ n = "03" }: { n?: string }) {
  return (
    <Section id="process" tone="white">
      <div className="grid gap-8 md:grid-cols-12">
        <div className="md:col-span-6">
          <Label n={n}>How a search runs</Label>
          <Reveal>
            <h2 className="mt-6 font-serif text-4xl leading-[1.05] tracking-[-0.02em] md:text-[3.4rem]">
              Six steps. No recycled resumes.
            </h2>
          </Reveal>
        </div>
        <Reveal className="md:col-span-5 md:col-start-8 md:pt-14" delay={0.1}>
          <p className="text-lg leading-relaxed text-stone">
            Every engagement follows the same process, so you always know where your search stands and why each candidate
            is in front of you.
          </p>
        </Reveal>
      </div>

      <ol className="mt-16 grid gap-x-10 border-t-2 border-ink sm:grid-cols-2 lg:grid-cols-3">
        {process.map((p, i) => (
          <Reveal key={p.n} delay={(i % 3) * 0.08} className="border-b border-rule py-9">
            <li className="list-none">
              <span className="font-serif text-5xl font-light italic text-navy">{p.n}</span>
              <h3 className="mt-5 text-xl font-semibold tracking-tight">{p.title}</h3>
              <p className="mt-3 leading-relaxed text-stone">{p.body}</p>
            </li>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}

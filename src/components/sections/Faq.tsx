import { faqs } from "@/content/site";
import { Label, Reveal, Section } from "../ui";

export default function Faq({ n = "08" }: { n?: string }) {
  return (
    <Section id="faq">
      <div className="grid gap-12 md:grid-cols-12">
        <div className="md:col-span-4">
          <Label n={n}>FAQ</Label>
          <Reveal>
            <h2 className="mt-6 font-serif text-4xl leading-[1.05] tracking-[-0.02em] md:text-[3.4rem]">
              Common questions
            </h2>
          </Reveal>
        </div>
        <div className="border-t-2 border-ink md:col-span-8">
          {faqs.map((f, i) => (
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
  );
}

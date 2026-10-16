import { engagementModels } from "@/content/site";
import { Button, Label, Reveal, Section } from "../ui";

export default function Models({ n = "06" }: { n?: string }) {
  return (
    <Section id="models" tone="white">
      <Label n={n}>Ways to work together</Label>
      <Reveal>
        <h2 className="mt-6 max-w-3xl font-serif text-4xl leading-[1.05] tracking-[-0.02em] md:text-[3.4rem]">
          From one critical hire to a whole team.
        </h2>
      </Reveal>

      <div className="mt-14 grid gap-5 lg:grid-cols-3">
        {engagementModels.map((m, i) => (
          <Reveal key={m.name} delay={i * 0.08}>
            <div
              className={`flex h-full flex-col rounded-[6px] p-8 ${
                m.featured ? "tone-navy" : "border border-rule bg-paper"
              }`}
            >
              <p className={`text-sm font-medium ${m.featured ? "text-gold" : "text-navy"}`}>{m.kind}</p>
              <h3 className="mt-3 font-serif text-3xl">{m.name}</h3>
              <p className="mt-4 leading-relaxed text-stone">{m.body}</p>
              <ul className="mt-8 space-y-3 border-t border-rule pt-6">
                {m.points.map((p) => (
                  <li key={p} className="flex gap-3">
                    <svg width="16" height="16" viewBox="0 0 16 16" className="mt-1 shrink-0" aria-hidden>
                      <path d="M3 8.5l3 3 7-7" fill="none" stroke={m.featured ? "var(--gold)" : "var(--navy)"} strokeWidth="2" />
                    </svg>
                    {p}
                  </li>
                ))}
              </ul>
              <div className="mt-auto pt-10">
                <Button href="/contact?type=employer" variant={m.featured ? "gold" : "outline"}>
                  Talk to us
                </Button>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

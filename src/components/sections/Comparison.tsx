import { comparison } from "@/content/site";
import { Label, Reveal, Section } from "../ui";

export default function Comparison({ n = "04" }: { n?: string }) {
  return (
    <Section tone="sand">
      <Label n={n}>Expect more</Label>
      <Reveal>
        <h2 className="mt-6 max-w-3xl font-serif text-4xl leading-[1.05] tracking-[-0.02em] md:text-[3.4rem]">
          Expect <em>more</em> from your recruitment partner.
        </h2>
      </Reveal>

      <Reveal delay={0.1}>
        <table className="mt-14 w-full border-collapse text-left">
          <thead>
            <tr className="border-b-2 border-ink">
              <th className="w-1/2 py-4 pr-6 text-sm font-medium text-stone">The usual agency approach</th>
              <th className="w-1/2 py-4 pl-6 text-sm font-medium text-navy">How CLM Careers works</th>
            </tr>
          </thead>
          <tbody>
            {comparison.map((c) => (
              <tr key={c.us} className="border-b border-rule align-top">
                <td className="py-6 pr-6 text-stone md:text-lg">{c.them}</td>
                <td className="py-6 pl-6 font-medium md:text-lg">{c.us}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Reveal>
    </Section>
  );
}

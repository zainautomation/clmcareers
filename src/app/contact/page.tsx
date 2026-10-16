import type { Metadata } from "next";
import { Suspense } from "react";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import { Section } from "@/components/ui";
import { site } from "@/content/site";
import FounderChip from "@/components/FounderChip";

export const metadata: Metadata = {
  title: "Contact",
  description: "Book a call with CLM Careers, an AI and engineering recruiting firm in Arvada, Colorado.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero eyebrow="Contact" title="Let's talk talent.">
        <p>Tell us a little about what you need. Cass personally replies within one business day.</p>
      </PageHero>
      <Section className="pt-0 md:pt-0">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-7">
            <Suspense>
              <ContactForm />
            </Suspense>
          </div>
          <aside className="space-y-8 md:col-span-4 md:col-start-9">
            <div className="rounded-[6px] bg-white p-6">
              <FounderChip text="Every message comes straight to me. I reply within one business day." />
            </div>
            {[
              { k: "Email", v: site.email, href: `mailto:${site.email}` },
              { k: "Phone", v: site.phone, href: site.phoneHref },
              { k: "Based in", v: site.location },
            ].map((c) => (
              <div key={c.k} className="border-t-2 border-ink pt-5">
                <p className="text-sm text-stone">{c.k}</p>
                {c.href ? (
                  <a href={c.href} className="mt-2 block font-serif text-2xl text-navy hover:underline">
                    {c.v}
                  </a>
                ) : (
                  <p className="mt-2 font-serif text-2xl">{c.v}</p>
                )}
              </div>
            ))}
          </aside>
        </div>
      </Section>
    </>
  );
}

import { site } from "@/content/site";
import { Button, Reveal } from "../ui";
import FounderChip from "../FounderChip";

export default function CtaBand({
  title = "Your next great hire isn't looking. We'll find them.",
}: {
  title?: string;
}) {
  return (
    <section className="tone-gold px-5 py-20 sm:px-8 md:py-24">
      <div className="mx-auto grid max-w-7xl items-end gap-10 md:grid-cols-12">
        <Reveal className="md:col-span-8">
          <h2 className="font-serif text-4xl leading-[1.05] tracking-[-0.02em] md:text-6xl">{title}</h2>
          <div className="mt-8">
            <FounderChip text="Book a call with me and let's talk about your search." />
          </div>
        </Reveal>
        <Reveal className="md:col-span-4 md:text-right" delay={0.1}>
          <Button href={site.bookingUrl}>Book a call with Cass</Button>
          <p className="mt-5 text-[15px]">
            or call Cass at{" "}
            <a href={site.phoneHref} className="font-medium underline underline-offset-4">
              {site.phone}
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}

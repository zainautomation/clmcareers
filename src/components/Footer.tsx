import Link from "next/link";
import Logo from "./Logo";
import Year from "./Year";
import { nav, site } from "@/content/site";

export default function Footer() {
  return (
    <footer className="tone-navy px-5 pb-10 pt-20 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 border-b border-rule pb-16 md:grid-cols-12">
          <div className="md:col-span-5">
            <Logo light />
            <p className="mt-6 max-w-sm leading-relaxed text-stone">
              A boutique recruiting firm for AI and engineering teams. We find the people who aren&apos;t looking, and we
              stay accountable for a year after they start.
            </p>
          </div>
          <div className="md:col-span-3">
            <p className="mb-5 text-sm font-medium text-gold">Explore</p>
            <ul className="space-y-3">
              {[...nav, { label: "Contact", href: "/contact" }].map((n) => (
                <li key={n.href}>
                  <Link href={n.href} className="text-paper/80 hover:text-paper hover:underline">
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-4">
            <p className="mb-5 text-sm font-medium text-gold">Get in touch</p>
            <ul className="space-y-3">
              <li>
                <a href={`mailto:${site.email}`} className="hover:underline">
                  {site.email}
                </a>
              </li>
              <li>
                <a href={site.phoneHref} className="hover:underline">
                  {site.phone}
                </a>
              </li>
              <li className="text-stone">{site.location}</li>
              <li className="flex gap-5 pt-2">
                <a href={site.social.linkedin} target="_blank" rel="noreferrer" className="text-paper/80 hover:underline">
                  LinkedIn
                </a>
                <a href={site.social.youtube} target="_blank" rel="noreferrer" className="text-paper/80 hover:underline">
                  YouTube
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col justify-between gap-3 pt-6 text-sm text-stone sm:flex-row">
          <p>
            © <Year /> CLM Careers, LLC
          </p>
          <p>Made in Colorado</p>
        </div>
      </div>
    </footer>
  );
}

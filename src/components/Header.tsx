"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react";
import { useState } from "react";
import Logo from "./Logo";
import { nav, site } from "@/content/site";

export default function Header() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 12));

  return (
    <>
      <div className="hidden bg-navy px-8 py-2 text-[13px] text-paper/80 md:block">
        <div className="mx-auto flex max-w-7xl justify-between">
          <p>20+ years recruiting engineers, executives and technical leaders.</p>
          <p className="flex gap-6">
            <a href={site.phoneHref} className="hover:text-gold">
              {site.phone}
            </a>
            <a href={`mailto:${site.email}`} className="hover:text-gold">
              {site.email}
            </a>
          </p>
        </div>
      </div>
      <header
        className={`sticky top-0 z-50 border-b px-5 transition-colors duration-300 sm:px-8 ${
          scrolled ? "border-rule bg-paper/95 backdrop-blur" : "border-transparent bg-paper"
        }`}
      >
        <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between">
          <Logo />
          <nav className="hidden items-center gap-8 md:flex" aria-label="Main">
            {nav.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                className={`text-[15px] transition-colors hover:text-navy ${
                  pathname === n.href ? "font-medium text-navy underline decoration-gold decoration-2 underline-offset-8" : "text-ink/75"
                }`}
              >
                {n.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <Link
              href={site.bookingUrl}
              className="hidden rounded-[4px] bg-navy px-5 py-2.5 text-sm font-medium text-paper transition-colors hover:bg-navy-deep sm:inline-flex"
            >
              Book a call
            </Link>
            <button
              onClick={() => setOpen((o) => !o)}
              className="flex h-10 items-center gap-2 text-sm font-medium md:hidden"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
            >
              {open ? "Close" : "Menu"}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="fixed inset-x-0 bottom-0 top-[76px] z-40 bg-paper px-5 pt-6 md:hidden"
          >
            <nav className="flex flex-col" aria-label="Mobile">
              {[...nav, { label: "Contact", href: "/contact" }].map((n) => (
                <Link
                  key={n.href}
                  href={n.href}
                  onClick={() => setOpen(false)}
                  className="border-b border-rule py-5 font-serif text-3xl"
                >
                  {n.label}
                </Link>
              ))}
            </nav>
            <div className="mt-8 space-y-2 text-stone">
              <a href={site.phoneHref} className="block">
                {site.phone}
              </a>
              <a href={`mailto:${site.email}`} className="block">
                {site.email}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

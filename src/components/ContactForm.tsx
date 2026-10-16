"use client";

import { AnimatePresence, motion } from "motion/react";
import { useSearchParams } from "next/navigation";
import { useState } from "react";

const types = [
  { id: "employer", label: "I'm hiring" },
  { id: "candidate", label: "I'm exploring roles" },
  { id: "coaching", label: "Career coaching" },
] as const;

type Status = "idle" | "sending" | "sent" | "error";

export default function ContactForm() {
  const params = useSearchParams();
  const initial = types.find((t) => t.id === params.get("type"))?.id ?? "employer";
  const [type, setType] = useState<string>(initial);
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const data = Object.fromEntries(new FormData(e.currentTarget));
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...data, type }),
    }).catch(() => null);
    setStatus(res?.ok ? "sent" : "error");
  }

  const field =
    "w-full border-b border-ink/30 bg-transparent py-4 text-lg outline-none transition-colors placeholder:text-stone/70 focus:border-navy";

  return (
    <AnimatePresence mode="wait">
      {status === "sent" ? (
        <motion.div
          key="sent"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-[6px] bg-navy p-10 text-paper"
        >
          <p className="font-serif text-3xl">Thanks. Your message is on its way.</p>
          <p className="mt-3 text-paper/70">Cass will be in touch within one business day.</p>
        </motion.div>
      ) : (
        <motion.form key="form" onSubmit={onSubmit} className="space-y-8" exit={{ opacity: 0, y: -20 }}>
          <div className="flex flex-wrap gap-2" role="radiogroup" aria-label="Inquiry type">
            {types.map((t) => (
              <button
                key={t.id}
                type="button"
                role="radio"
                aria-checked={type === t.id}
                onClick={() => setType(t.id)}
                className={`rounded-[4px] border px-5 py-2.5 text-sm transition-colors ${
                  type === t.id ? "border-navy bg-navy text-paper" : "border-ink/30 text-ink hover:border-ink"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
          <div className="grid gap-x-8 sm:grid-cols-2">
            <input required name="name" placeholder="Full name" autoComplete="name" className={field} />
            <input required type="email" name="email" placeholder="Work email" autoComplete="email" className={field} />
            <input
              name="company"
              placeholder={type === "employer" ? "Company" : "Current role"}
              className={field}
            />
            <input name="phone" placeholder="Phone (optional)" autoComplete="tel" className={field} />
          </div>
          <textarea
            required
            name="message"
            rows={4}
            placeholder={
              type === "employer"
                ? "Which role(s) are you hiring for, and what does great look like?"
                : "What are you looking for in your next move?"
            }
            className={`${field} resize-none`}
          />
          {/* honeypot */}
          <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />
          <div className="flex flex-wrap items-center gap-6">
            <button
              disabled={status === "sending"}
              className="rounded-[4px] bg-navy px-8 py-4 font-medium text-paper transition-colors hover:bg-navy-deep disabled:opacity-60"
            >
              {status === "sending" ? "Sending…" : "Send message"}
            </button>
            {status === "error" && (
              <p className="text-sm text-red">Something went wrong. Please email cass@clmcareers.com directly.</p>
            )}
          </div>
        </motion.form>
      )}
    </AnimatePresence>
  );
}

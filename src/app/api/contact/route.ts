import { NextResponse } from "next/server";

// Sends inquiries via Resend when RESEND_API_KEY is set; otherwise logs them.
// Env: RESEND_API_KEY, CONTACT_TO (default cass@clmcareers.com), CONTACT_FROM.
export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  if (!body || typeof body !== "object") return NextResponse.json({ error: "Bad request" }, { status: 400 });

  const { name, email, company, phone, message, type, website } = body as Record<string, string>;
  if (website) return NextResponse.json({ ok: true }); // honeypot hit
  if (!name || !email || !message || !/^\S+@\S+\.\S+$/.test(email)) {
    return NextResponse.json({ error: "Missing fields" }, { status: 422 });
  }

  const text = [`Type: ${type}`, `Name: ${name}`, `Email: ${email}`, `Company/Role: ${company ?? ""}`, `Phone: ${phone ?? ""}`, "", message].join("\n");

  const key = process.env.RESEND_API_KEY;
  if (!key) {
    console.log("[contact]\n" + text);
    return NextResponse.json({ ok: true });
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: process.env.CONTACT_FROM ?? "CLM Careers <website@clmcareers.com>",
      to: process.env.CONTACT_TO ?? "cass@clmcareers.com",
      reply_to: email,
      subject: `New ${type} inquiry from ${name}`,
      text,
    }),
  });
  return res.ok ? NextResponse.json({ ok: true }) : NextResponse.json({ error: "Send failed" }, { status: 502 });
}

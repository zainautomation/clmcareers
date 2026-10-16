# CLM Careers

Website for CLM Careers, an AI & engineering recruiting firm in Arvada, Colorado, founded by Cass Murray.

Built with Next.js (App Router), Tailwind CSS v4 and Motion.

## Run locally

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## Where things live

- `src/content/site.ts`: all site copy (services, process, Career Driver GO! tiers, FAQs, founder bio, links). Edit text here.
- `src/components/sections/`: page sections (Hero, Founder, RoadMap, Tiers, ...).
- `src/app/`: pages (`/`, `/employers`, `/candidates`, `/career-driver-go`, `/about`, `/contact`) and the contact API route.
- `public/cass.jpg`: founder photo (200×200; replace with a higher-resolution version when available).

## Contact form

`POST /api/contact` sends email through [Resend](https://resend.com) when these environment variables are set; otherwise submissions are only logged.

| Variable | Purpose |
| --- | --- |
| `RESEND_API_KEY` | Resend API key |
| `CONTACT_TO` | Recipient (default `cass@clmcareers.com`) |
| `CONTACT_FROM` | Sender (must be a verified Resend domain) |

// Single source of truth for site copy. Edit here, not in components.

export const site = {
  name: "CLM Careers",
  tagline: "We Connect Top Talent with Respected Companies",
  descriptor: "AI & Engineering Recruiting Firm in Colorado",
  phone: "(720) 234-2895",
  phoneHref: "tel:+17202342895",
  email: "cass@clmcareers.com",
  location: "Arvada, Colorado",
  bookingUrl: "https://calendar.app.google/4miWxgozJrDnHDrD8",
  social: {
    linkedin: "https://www.linkedin.com/company/clmcareers/",
    youtube: "https://www.youtube.com/@CLMCareers",
  },
};

export const nav = [
  { label: "For Employers", href: "/employers" },
  { label: "For Candidates", href: "/candidates" },
  { label: "Career Driver GO!", href: "/career-driver-go" },
  { label: "About", href: "/about" },
  { label: "FAQ", href: "/#faq" },
];

export const disciplines = [
  "Machine Learning",
  "Applied AI",
  "LLM & GenAI",
  "Data Engineering",
  "Cybersecurity",
  "Embedded Systems",
  "Aerospace",
  "Robotics",
  "Advanced Manufacturing",
  "Cloud & Platform",
  "Hardware Engineering",
  "Software Engineering",
];

export const problemStats = [
  {
    value: 50,
    suffix: "%",
    prefix: "~",
    label: "of hires are mis-hires",
    detail: "Most of them underperform within 12 to 18 months, and the cost lands on the leader who made the hire.",
  },
  {
    value: 18,
    suffix: "%",
    label: "of talent is actively looking",
    detail: "Job boards only reach this group. The top performers you want are usually busy succeeding somewhere else.",
  },
  {
    value: 10,
    suffix: "%",
    prefix: "Top ",
    label: "is the bar we screen to",
    detail: "Every candidate is checked against a scorecard built from your own top performers.",
  },
  {
    value: 12,
    suffix: " mo",
    label: "retention guarantee",
    detail: "We check in at 30 days and every quarter through year one.",
  },
];

export const roadmap = [
  {
    key: "recruit",
    title: "Recruit",
    blurb: "We map the market, build a scorecard from your best people, and go after passive talent instead of posting on job boards.",
  },
  {
    key: "hire",
    title: "Hire",
    blurb: "We validate every finalist against your criteria and confirm engagement before an offer goes out, so offers get accepted.",
  },
  {
    key: "onboard",
    title: "Onboard",
    blurb: "We stay in the loop through the first 30 days to set expectations and catch friction early.",
  },
  {
    key: "retain",
    title: "Retain",
    blurb: "Quarterly check-ins through the first year, backed by a retention guarantee of up to 12 months.",
  },
];

export const process = [
  {
    n: "01",
    title: "Partnership Session",
    body: "We interview you and, where possible, your top performers. Together we build a scorecard that defines what great looks like in the role, beyond the job description.",
  },
  {
    n: "02",
    title: "Market Reveal",
    body: "Starting with our own talent network, we produce a market map and salary evaluation, so you know who is out there and what they cost before you commit.",
  },
  {
    n: "03",
    title: "EVP Optimized Positioning",
    body: "We sharpen your employer value proposition and take it directly to the talent working at your competitors, on social and in one-to-one outreach.",
  },
  {
    n: "04",
    title: "Top Talent Validation",
    body: "Candidates are screened against your scorecard. You only meet people who sit in the top 10% of the pool.",
  },
  {
    n: "05",
    title: "Pre-Commitment Validation",
    body: "Before a written offer, we confirm each finalist's engagement and their full work history. No late surprises and no counter-offer ambushes.",
  },
  {
    n: "06",
    title: "Retention Policy",
    body: "Each hire is guaranteed for up to 12 months. We check in at 30 days and every quarter in year one.",
  },
];

export const comparison = [
  { them: "Post your role on job boards", us: "Headhunt passive top performers directly" },
  { them: "Forward a stack of recycled resumes", us: "Present a shortlist validated against your scorecard" },
  { them: "Pitch the same candidates to your competitors", us: "Run every search exclusively for you" },
  { them: "Ghost candidates who aren't selected", us: "Close the loop with every candidate, which protects your brand" },
  { them: "Disappear once the offer is signed", us: "Check in at 30 days and quarterly, with up to a 12-month guarantee" },
];

export const engagementModels = [
  {
    name: "Road Map to Top Talent",
    kind: "Full-cycle search",
    body: "Our signature engagement. The full six-step method, from partnership session to the retention check-ins.",
    points: ["Scorecard and market map", "Exclusive search", "12-month retention guarantee"],
    featured: true,
  },
  {
    name: "Recruitment Navigator",
    kind: "Hourly, on-demand",
    body: "Flexible support for your in-house team with no long-term commitment.",
    points: ["Niche sourcing", "Candidate screening", "Interview pipeline management"],
  },
  {
    name: "GPS Sourcing",
    kind: "Find the right fit",
    body: "Technology-driven sourcing that puts qualified, mapped talent straight into your recruiters' hands.",
    points: ["Talent mapping", "Contact enrichment", "Targeted outreach lists"],
  },
];

export const specialties = [
  { title: "AI & Machine Learning", roles: "ML Engineers · Applied Scientists · MLOps · LLM Engineers" },
  { title: "Software & Platform", roles: "Backend · Full-stack · Cloud · SRE · Data Engineering" },
  { title: "Cybersecurity", roles: "Security Engineers · AppSec · Cloud Security · GRC" },
  { title: "Aerospace & Defense", roles: "Avionics · GNC · Propulsion · Systems Engineering" },
  { title: "Hardware & Embedded", roles: "Firmware · FPGA · Electrical · Robotics" },
  { title: "Advanced Manufacturing", roles: "Manufacturing · Quality · Process · Test Engineering" },
];

// Founder details. "Previously recruited for" comes from public profile
// aggregators; confirm with Cass before launch.
export const founder = {
  name: "Cass Murray",
  photo: "/cass.jpg",
  title: "Founder, CLM Careers",
  tagline: "Digital Headhunter · Executive Recruiter",
  previously: ["Blue Origin", "Comcast"],
  bio: [
    "For more than 20 years Cass has recruited engineers, executives and technical professionals across aerospace, technology, manufacturing, defense and emerging industries.",
    "She has sat on both sides of the hiring table and interviewed thousands of candidates. She has seen who gets interviews, who gets ignored, and how good companies lose great hires to slow, impersonal processes.",
    "CLM Careers is the firm she built to fix that: boutique, accountable, and measured on retention, not just placements. Her book, The Job Seeker's Pocket Guide to Getting Your Paycheck Back, brings the same thinking to candidates.",
  ],
  quote: "A placement isn't a win until that person is still thriving a year later.",
};

export const resources = [
  {
    kind: "Book",
    title: "The Job Seeker's Pocket Guide to Getting Your Paycheck Back",
    body: "Cass's guide to getting hired without relying on job boards, and the foundation of Career Driver GO!",
    href: "https://www.amazon.com/Seekers-Pocket-Guide-Getting-Paycheck-ebook/dp/B0DXN782VJ",
    cta: "Get it on Amazon",
  },
  {
    kind: "Newsletter",
    title: "For Frustrated Job Seekers",
    body: "A biweekly LinkedIn newsletter with practical recruiting insight for people doing everything right and getting nowhere.",
    href: "https://www.linkedin.com/newsletters/for-frustrated-job-seekers-7020110178716983297/",
    cta: "Subscribe on LinkedIn",
  },
  {
    kind: "Community",
    title: "Career Driver GO! on Skool",
    body: "A community of professionals taking control of their careers through strategy, visibility and networking.",
    href: "https://www.skool.com/career-driver-go-1527",
    cta: "Join the community",
  },
];

export type Tier = {
  tier: number;
  name: string;
  tagline: string;
  summary: string;
  price: number;
  includesPrev: string | null;
  featured?: boolean;
  items: string[];
};

export const careerDriver = {
  applyUrl:
    "https://docs.google.com/forms/d/e/1FAIpQLSf-7_fY2o6wHemjg7Oi4P0RKOY0qKZYkIJAuvu4MJRXYEhdRA/viewform",
  learn: [
    "Build a career marketing system that runs continuously",
    "Use career prospecting to reach decision-makers directly",
    "Create visibility that attracts opportunities before jobs are posted",
    "Build your circle of peers, mentors and insiders",
  ],
  forWho: [
    "Mid-career professionals",
    "Managers and aspiring leaders",
    "Career changers",
    "Returning professionals",
    "Corporate professionals seeking advancement",
    "Executives and senior leaders",
  ],
  tiers: [
    {
      tier: 1,
      name: "Career Launch",
      tagline: "Get found. Get noticed. Get moving.",
      summary: "A strong foundation, a modern personal brand and a proven strategy for landing your next role.",
      price: 997,
      includesPrev: null,
      items: [
        "LinkedIn profile optimization and a professional resume rewrite, built to attract recruiters and hiring managers",
        "A copy of The Job Seeker's Pocket Guide to Getting Your Paycheck Back (2025 edition)",
        "Career Driver GO! Navigator, the self-paced online learning platform",
        "Direct messaging, 24/7",
      ],
    },
    {
      tier: 2,
      name: "Career Momentum",
      tagline: "Coaching, guidance and community.",
      summary: "Personal guidance to help you put the Career Driver GO! method into practice.",
      price: 1997,
      includesPrev: "Career Launch",
      items: [
        "Two 60-minute private career strategy sessions",
        "Weekly live coaching calls on Zoom, with Q&A",
        "Personal branding guidance",
        "Access to the Career Driver GO! professional community",
      ],
    },
    {
      tier: 3,
      name: "Career Accelerator",
      tagline: "Personal strategy and accountability.",
      summary: "Deeper strategic support and weekly accountability to keep you moving.",
      price: 2997,
      includesPrev: "Career Momentum",
      featured: true,
      items: [
        "A third 60-minute private strategy session (3 in total)",
        "A customized career transition strategy and personal brand positioning plan",
        "Ongoing LinkedIn and resume refinements throughout",
        "Weekly accountability and progress tracking",
      ],
    },
    {
      tier: 4,
      name: "Lifetime Elite",
      tagline: "Your long-term career partner.",
      summary: "The highest level of personal support, with a full market map and a career protection guarantee.",
      price: 4997,
      includesPrev: "Career Accelerator",
      items: [
        "A comprehensive market map and opportunity analysis",
        "Target companies and key decision-makers identified for you",
        "A three-hour executive onboarding session",
        "Weekly one-on-one coaching for 60 days",
        "Interview preparation, plus offer evaluation and negotiation support",
        "Lifetime Navigator access and ongoing direct messaging",
        "Career Protection Guarantee: if you're laid off or back on the market, we restart the full process with you",
      ],
    },
  ] as Tier[],
  faqs: [
    {
      q: "How do I know if I'm a fit for Career Driver GO!?",
      a: "If you want a promotion, a better-paid role, more job satisfaction or a career change, and applying hasn't been getting results, it's likely a good fit.",
    },
    {
      q: "Is it only for people actively looking for a new job?",
      a: "No. It's for professionals who want to grow, whether that means a new role, a promotion, more income or a long-term career plan.",
    },
    {
      q: "I've applied to dozens of jobs and rarely get interviews. Can this help?",
      a: "Yes. Most people struggle because their search methods are outdated. The program improves your visibility, sharpens your professional brand and gets you more interviews.",
    },
    {
      q: "What if I already have a job and I'm not sure I want to leave?",
      a: "That's fine. Many people use the program to understand their market value and position themselves for future opportunities while they stay employed.",
    },
    {
      q: "Is this right for recent graduates?",
      a: "Yes, especially if you're struggling to get traction or want help standing out and building a strong start.",
    },
    {
      q: "I've been in my industry for years. Will I still benefit?",
      a: "Yes. Experienced professionals use it to reposition for leadership, higher pay, a career pivot or more meaningful work.",
    },
    {
      q: "Is it too late for me to change careers?",
      a: "It's rarely too late. With the right strategy and support, many people move into new roles, industries and leadership later in their careers.",
    },
    {
      q: "How quickly will I see results?",
      a: "It depends on your situation. Some people gain clarity and confidence almost immediately; for others, results build as they apply the strategies.",
    },
    {
      q: "What if I don't know exactly what job I want?",
      a: "That's okay. The program helps you get clear on opportunities that match your skills, values and goals.",
    },
    {
      q: "Can I upgrade later?",
      a: "Yes. Everything you've already paid is credited toward a higher package, so you only pay the difference.",
    },
  ],
  agreement: [
    { t: "Access", d: "On full payment you receive a non-transferable, non-exclusive lifetime license to the program's core materials, content and updates." },
    { t: "What lifetime means", d: "Access for as long as CLM Careers offers and maintains the program. Features may be updated, changed or discontinued." },
    { t: "Use of materials", d: "All materials are proprietary and may not be copied, distributed, resold or shared without written consent." },
    { t: "Refunds", d: "All sales are final. Because access to digital materials is immediate, refunds, exchanges and cancellations aren't offered." },
    { t: "Value assurance", d: "Instead of refunds, you keep ongoing access to program content and updates." },
    { t: "Ownership", d: "All rights in the program remain with CLM Careers." },
    { t: "Liability and changes", d: "CLM Careers isn't liable for indirect or consequential damages from use of the program. Changes to this agreement must be in writing and agreed by both parties." },
  ],
};

export const faqs = [
  {
    q: "What kinds of roles do you recruit for?",
    a: "Technical and leadership roles across AI/ML, software, cybersecurity, aerospace, hardware and embedded systems, and advanced manufacturing, from senior individual contributors to engineering leadership.",
  },
  {
    q: "Do you only work with Colorado companies?",
    a: "We're based in Arvada, Colorado and know the Front Range market deeply, but we run searches nationwide for on-site, hybrid and remote teams.",
  },
  {
    q: "Why don't you post jobs on job boards?",
    a: "Job boards reach roughly the 18% of people who are actively looking. We headhunt the passive top performers who rarely apply anywhere, and we represent your employer brand directly to them.",
  },
  {
    q: "What does the retention guarantee cover?",
    a: "Placements on our full-cycle Road Map engagement are guaranteed for up to 12 months. We check in at 30 days and every quarter during the first year to catch issues early.",
  },
  {
    q: "Can you support our in-house recruiters instead of running the full search?",
    a: "Yes. Recruitment Navigator is hourly, on-demand support for sourcing, screening and pipeline management, and GPS Sourcing delivers mapped talent lists your team can work.",
  },
  {
    q: "I'm a candidate. Does it cost me anything to work with you?",
    a: "Being considered for our client searches is always free. Career Driver GO!, our career coaching program, is optional and paid, for people who want hands-on help.",
  },
];

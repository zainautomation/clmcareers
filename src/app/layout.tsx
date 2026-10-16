import type { Metadata } from "next";
import { Fraunces, IBM_Plex_Sans, Mrs_Saint_Delafield } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import { site } from "@/content/site";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["SOFT", "WONK", "opsz"],
  style: ["normal", "italic"],
});
const plex = IBM_Plex_Sans({ variable: "--font-plex", subsets: ["latin"], weight: ["400", "500", "600"] });
const script = Mrs_Saint_Delafield({ variable: "--font-script", subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  metadataBase: new URL("https://clmcareers.com"),
  title: {
    default: `${site.name} | ${site.descriptor}`,
    template: `%s | ${site.name}`,
  },
  description:
    "CLM Careers is a boutique AI and engineering recruiting firm in Arvada, Colorado. We headhunt top-10% talent in AI/ML, cybersecurity, aerospace and advanced manufacturing, and back every hire with up to a 12-month retention guarantee.",
  openGraph: {
    title: `${site.name}: ${site.tagline}`,
    description: site.descriptor,
    url: "https://clmcareers.com",
    siteName: site.name,
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "EmploymentAgency",
  name: site.name,
  slogan: site.tagline,
  description: site.descriptor,
  telephone: site.phone,
  email: site.email,
  url: "https://clmcareers.com",
  address: { "@type": "PostalAddress", addressLocality: "Arvada", addressRegion: "CO", addressCountry: "US" },
  founder: { "@type": "Person", name: "Cass Murray" },
  sameAs: [site.social.linkedin, site.social.youtube],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${fraunces.variable} ${plex.variable} ${script.variable} antialiased`}>
      <body className="min-h-screen">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <SmoothScroll />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

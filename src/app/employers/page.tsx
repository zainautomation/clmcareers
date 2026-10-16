import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Problem from "@/components/sections/Problem";
import RoadMap from "@/components/sections/RoadMap";
import Process from "@/components/sections/Process";
import Models from "@/components/sections/Models";
import Comparison from "@/components/sections/Comparison";
import Specialties from "@/components/sections/Specialties";
import CtaBand from "@/components/sections/CtaBand";
import { Button } from "@/components/ui";

export const metadata: Metadata = {
  title: "Recruitment Services for Employers",
  description:
    "Full-cycle search, hourly recruitment support and GPS sourcing for AI, ML, cybersecurity, aerospace and engineering teams, with up to a 12-month retention guarantee.",
};

export default function EmployersPage() {
  return (
    <>
      <PageHero eyebrow="For employers" title="360° talent solutions for emerging industries.">
        <p>
          We help senior leaders and in-house recruiting teams find, attract and keep the engineers who move the needle,
          using modern sourcing technology and old-fashioned headhunting.
        </p>
        <div className="mt-8">
          <Button href="/contact?type=employer">Book a partnership session</Button>
        </div>
      </PageHero>
      <Models n="01" />
      <RoadMap n="02" />
      <Process n="03" />
      <Problem n="04" />
      <Comparison n="05" />
      <Specialties n="06" />
      <CtaBand title="Let's build the team your roadmap needs." />
    </>
  );
}

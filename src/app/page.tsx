import Hero from "@/components/sections/Hero";
import Problem from "@/components/sections/Problem";
import RoadMap from "@/components/sections/RoadMap";
import Process from "@/components/sections/Process";
import Comparison from "@/components/sections/Comparison";
import Specialties from "@/components/sections/Specialties";
import Models from "@/components/sections/Models";
import Founder from "@/components/sections/Founder";
import Faq from "@/components/sections/Faq";
import CtaBand from "@/components/sections/CtaBand";

export default function Home() {
  return (
    <>
      <Hero />
      <Founder n="01" tone="white" />
      <Problem n="02" />
      <RoadMap n="03" />
      <Process n="04" />
      <Comparison n="05" />
      <Specialties n="06" />
      <Models n="07" />
      <Faq n="08" />
      <CtaBand />
    </>
  );
}

import Image from "next/image";
import { founder } from "@/content/site";

/** Small "you'll be working with Cass" byline used across the site. */
export default function FounderChip({ text, light = false }: { text: string; light?: boolean }) {
  return (
    <div className="flex items-center gap-4">
      <Image
        src={founder.photo}
        alt={founder.name}
        width={64}
        height={64}
        className={`h-14 w-14 shrink-0 rounded-full object-cover ring-2 ${light ? "ring-paper/70" : "ring-white"}`}
      />
      <p className={`text-[15px] leading-snug ${light ? "text-paper/80" : "text-stone"}`}>
        <span className={`block font-medium ${light ? "text-paper" : "text-ink"}`}>{founder.name}</span>
        {text}
      </p>
    </div>
  );
}

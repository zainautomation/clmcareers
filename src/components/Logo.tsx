import Link from "next/link";

export default function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link href="/" className="flex items-center gap-3" aria-label="CLM Careers home">
      <span
        className={`grid h-9 w-9 place-items-center rounded-[4px] font-serif text-[15px] font-semibold ${
          light ? "bg-gold text-navy" : "bg-navy text-gold"
        }`}
      >
        CL
      </span>
      <span className={`leading-none ${light ? "text-paper" : "text-ink"}`}>
        <span className="block font-serif text-lg font-medium tracking-tight">CLM Careers</span>
        <span className={`mt-1 block text-[11px] ${light ? "text-paper/60" : "text-stone"}`}>Arvada, Colorado</span>
      </span>
    </Link>
  );
}

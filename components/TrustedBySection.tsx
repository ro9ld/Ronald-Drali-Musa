import Image from "next/image";
import type { ResolvedPartner } from "@/lib/sanity/queries";
import { PartnersIcon } from "./icons";

export default function TrustedBySection({ partners }: { partners: ResolvedPartner[] }) {
  if (partners.length === 0) return null;

  const sorted = [...partners].sort((a, b) => a.order - b.order);
  const useScroll = sorted.length > 6;

  return (
    <section className="pt-[38px] sm:pt-[52px]">
      <div className="partners-label text-[18px] sm:text-[21px]" style={{ margin: "0 0 20px" }}>
        <PartnersIcon />
        <span>Trusted by</span>
      </div>
      <div
        className={
          useScroll
            ? "no-scrollbar flex gap-8 overflow-x-auto pb-1 sm:gap-14"
            : "grid grid-cols-2 items-center justify-items-center gap-x-5 gap-y-7 sm:flex sm:flex-wrap sm:justify-start sm:gap-14"
        }
      >
        {sorted.map((p) => {
          const El = p.url ? "a" : "div";
          return (
            <El
              key={p.id}
              {...(p.url ? { href: p.url, target: "_blank", rel: "noopener noreferrer" } : {})}
              className={`flex items-center opacity-85 transition-opacity duration-200 hover:opacity-100 ${useScroll ? "flex-none" : ""}`}
            >
              {p.logoUrl ? (
                <Image src={p.logoUrl} alt={p.name} width={140} height={56} className="h-10 w-auto object-contain grayscale brightness-0 invert" />
              ) : (
                <span className="text-[14px] tracking-wide text-grey transition-colors duration-200 hover:text-offwhite">
                  {p.name}
                </span>
              )}
            </El>
          );
        })}
      </div>
    </section>
  );
}

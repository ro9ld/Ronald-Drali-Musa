import { partners } from "@/lib/portfolio-data";
import { PartnersIcon } from "./icons";

export default function TrustedBySection() {
  if (partners.length === 0) return null;

  const sorted = [...partners].sort((a, b) => a.order - b.order);
  const useScroll = sorted.length > 6;

  return (
    <section className="pt-[38px] sm:pt-[52px]">
      <div className="partners-label px-4 text-[18px] sm:px-10 sm:text-[21px]" style={{ margin: "0 0 20px" }}>
        <PartnersIcon />
        <span>Trusted by</span>
      </div>
      <div
        className={
          useScroll
            ? "no-scrollbar flex gap-8 overflow-x-auto px-4 pb-1 sm:px-10 sm:gap-14"
            : "grid grid-cols-2 items-center justify-items-center gap-x-5 gap-y-7 px-4 sm:flex sm:flex-wrap sm:justify-start sm:gap-14 sm:px-10"
        }
      >
        {sorted.map((p) => {
          const El = p.url ? "a" : "div";
          return (
            <El
              key={p.id}
              {...(p.url ? { href: p.url, target: "_blank", rel: "noopener noreferrer" } : {})}
              className={`text-[14px] tracking-wide text-grey opacity-85 transition-[opacity,color] duration-200 hover:opacity-100 hover:text-offwhite ${useScroll ? "flex-none" : ""}`}
            >
              {p.name}
            </El>
          );
        })}
      </div>
    </section>
  );
}

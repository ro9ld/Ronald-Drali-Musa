import type { SiteSettings } from "@/lib/sanity/queries";

export default function OngoingContent({ settings }: { settings: SiteSettings }) {
  return (
    <section className="pt-9 pb-1 sm:pt-12 lg:flex lg:items-start lg:justify-between lg:gap-16 lg:pt-20 lg:pb-6">
      <p
        className="text-[18px] font-semibold tracking-tight sm:text-[20px] lg:max-w-[380px] lg:text-[28px] xl:text-[32px]"
        style={{ fontFamily: "var(--font-display-family)" }}
      >
        {settings.ongoingHeading}
      </p>
      <div className="lg:flex lg:max-w-[360px] lg:flex-col lg:items-end lg:text-right lg:pt-2">
        <p className="mt-2 max-w-md text-[13.5px] leading-relaxed text-grey lg:mt-0">
          {settings.ongoingSupporting}
        </p>
        <p className="mt-3 text-[13.5px] text-offwhite">
          {settings.ongoingRhythm}
        </p>
      </div>
    </section>
  );
}

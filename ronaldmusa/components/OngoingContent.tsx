import { ongoingContentCopy } from "@/lib/site-copy";

export default function OngoingContent() {
  return (
    <section className="px-4 pt-9 pb-1 sm:px-10 sm:pt-12 lg:px-16 xl:px-24">
      <p
        className="text-[18px] font-semibold tracking-tight sm:text-[20px]"
        style={{ fontFamily: "var(--font-display-family)" }}
      >
        {ongoingContentCopy.heading}
      </p>
      <p className="mt-2 max-w-md text-[13.5px] leading-relaxed text-grey">
        {ongoingContentCopy.supporting}
      </p>
      <p className="mt-3 text-[13.5px] text-offwhite">
        {ongoingContentCopy.rhythm}
      </p>
    </section>
  );
}

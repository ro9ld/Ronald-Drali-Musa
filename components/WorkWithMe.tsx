"use client";

import { ContactIcon, MailIcon, InstagramIcon } from "./icons";
import type { SiteSettings } from "@/lib/sanity/queries";
import { trackEvent } from "@/lib/analytics";

export default function WorkWithMe({ settings }: { settings: SiteSettings }) {
  return (
    <section className="pt-10 pb-2 sm:pt-14 lg:flex lg:items-center lg:justify-between lg:pt-20 lg:pb-6">
      <div className="section-label text-[13.5px] lg:text-[16px]">
        <ContactIcon />
        <span>Work with me</span>
      </div>

      <div className="mt-4 flex flex-col gap-3 lg:mt-0 lg:flex-row lg:items-center lg:gap-10">
        <a
          href={`mailto:${settings.email}`}
          onClick={() => trackEvent("Email Click", { location: "contact" })}
          className="flex items-center gap-2.5 text-[15px] transition-colors duration-200 hover:text-grey"
        >
          <MailIcon className="h-4 w-4" />
          {settings.email}
        </a>
        <a
          href={`https://instagram.com/${settings.instagramHandle}`}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackEvent("Instagram Click", { location: "contact" })}
          className="flex items-center gap-2.5 text-[15px] transition-colors duration-200 hover:text-grey"
        >
          <InstagramIcon className="h-4 w-4" />
          @{settings.instagramHandle}
        </a>
      </div>
    </section>
  );
}

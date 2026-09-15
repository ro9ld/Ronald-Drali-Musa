"use client";

import { ContactIcon, MailIcon, InstagramIcon } from "./icons";
import { INSTAGRAM_URL, INSTAGRAM_HANDLE, EMAIL, MAILTO_URL } from "@/lib/contact";
import { trackEvent } from "@/lib/analytics";

export default function WorkWithMe() {
  return (
    <section className="px-4 pt-10 pb-2 sm:px-10 sm:pt-14">
      <div className="section-label text-[13.5px]">
        <ContactIcon />
        <span>Work with me</span>
      </div>

      <div className="mt-4 flex flex-col gap-3">
        <a
          href={MAILTO_URL}
          onClick={() => trackEvent("Email Click", { location: "contact" })}
          className="flex items-center gap-2.5 text-[15px] transition-colors duration-200 hover:text-grey"
        >
          <MailIcon className="h-4 w-4" />
          {EMAIL}
        </a>
        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackEvent("Instagram Click", { location: "contact" })}
          className="flex items-center gap-2.5 text-[15px] transition-colors duration-200 hover:text-grey"
        >
          <InstagramIcon className="h-4 w-4" />
          @{INSTAGRAM_HANDLE}
        </a>
      </div>
    </section>
  );
}

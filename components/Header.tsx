"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { InstagramIcon, MailIcon } from "./icons";
import type { SiteSettings } from "@/lib/sanity/queries";
import { trackEvent } from "@/lib/analytics";

export default function Header({ settings }: { settings: SiteSettings }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 40);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`site-container sticky top-0 z-40 flex h-12 items-center justify-between transition-[background-color,backdrop-filter] duration-200 ease-out sm:h-14 ${
        scrolled ? "bg-black/55 backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <a href="#" className="flex items-center gap-2">
        <Image src="/r-mark-white.png" alt="" width={18} height={18} className="h-[18px] w-auto" priority />
        <span
          className="text-[16px] font-semibold tracking-tight"
          style={{ fontFamily: "var(--font-display-family)" }}
        >
          Ronald Musa
        </span>
      </a>

      <nav className="flex items-center gap-2">
        <a
          href={`https://instagram.com/${settings.instagramHandle}`}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackEvent("Instagram Click", { location: "header" })}
          className="icon-btn h-7 w-7"
          aria-label={`Instagram @${settings.instagramHandle}`}
        >
          <InstagramIcon />
        </a>
        <a
          href={`mailto:${settings.email}`}
          onClick={() => trackEvent("Email Click", { location: "header" })}
          className="icon-btn h-7 w-7"
          aria-label="Email Ronald"
        >
          <MailIcon />
        </a>
      </nav>
    </header>
  );
}

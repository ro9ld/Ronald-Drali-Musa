"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { InstagramIcon, MailIcon } from "./icons";
import { INSTAGRAM_URL, INSTAGRAM_HANDLE, MAILTO_URL } from "@/lib/contact";
import { trackEvent } from "@/lib/analytics";

export default function Header() {
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
      className={`sticky top-0 z-40 mx-auto flex h-12 max-w-[1200px] items-center justify-between px-4 transition-[background-color,backdrop-filter] duration-200 ease-out sm:h-14 sm:px-10 ${
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
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackEvent("Instagram Click", { location: "header" })}
          className="icon-btn h-7 w-7"
          aria-label={`Instagram @${INSTAGRAM_HANDLE}`}
        >
          <InstagramIcon />
        </a>
        <a
          href={MAILTO_URL}
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

import type { SVGProps } from "react";

// One family: 1.7 stroke weight, round caps/joins, consistent corner
// radius language throughout. Every icon on the site comes from here —
// never mix in a third-party icon library.

function base(props: SVGProps<SVGSVGElement>) {
  return {
    viewBox: "0 0 24 24",
    fill: "none" as const,
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    ...props,
  };
}

export function WorkIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base(props)}>
      <rect x="3" y="3" width="6" height="6" rx="1.5" />
      <rect x="9.5" y="3" width="6" height="6" rx="1.5" />
      <rect x="16" y="3" width="5" height="6" rx="1.5" />
      <rect x="3" y="9.5" width="6" height="6" rx="1.5" />
      <rect x="9.5" y="9.5" width="6" height="6" rx="1.5" />
      <rect x="16" y="9.5" width="5" height="6" rx="1.5" />
    </svg>
  );
}

export function VideoIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base(props)}>
      <rect x="3" y="6" width="13" height="12" rx="2.5" />
      <path d="M16 10.5l5-3v9l-5-3z" />
    </svg>
  );
}

export function PhotoIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base(props)}>
      <rect x="3" y="6" width="18" height="12" rx="2.5" />
      <circle cx="12" cy="12" r="3.4" />
    </svg>
  );
}

export function PartnersIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base(props)}>
      <rect x="3" y="7" width="9.5" height="9.5" rx="3" />
      <rect x="11.5" y="7" width="9.5" height="9.5" rx="3" />
    </svg>
  );
}

export function ContactIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base(props)}>
      <circle cx="12" cy="12" r="9" />
      <path d="M8.5 12.5l2.3 2.3L16 9.7" />
    </svg>
  );
}

export function MailIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base(props)}>
      <rect x="3" y="5" width="18" height="14" rx="2.5" />
      <path d="M4 7l8 6 8-6" />
    </svg>
  );
}

export function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base(props)}>
      <rect x="3" y="3" width="18" height="18" rx="5.5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function CloseIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base(props)} strokeWidth={1.8}>
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  );
}

export function ChevronLeftIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base(props)} strokeWidth={1.8}>
      <path d="M15 5l-7 7 7 7" />
    </svg>
  );
}

export function ChevronRightIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base(props)} strokeWidth={1.8}>
      <path d="M9 5l7 7-7 7" />
    </svg>
  );
}

export function PlayIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" stroke="none" {...props}>
      <path d="M7 5.5v13l11-6.5-11-6.5z" />
    </svg>
  );
}

export function PauseIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" {...props}>
      <path d="M8 5.5v13M16 5.5v13" />
    </svg>
  );
}

export function SoundIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base(props)}>
      <path d="M4 10v4h3.5L13 18V6L7.5 10H4z" />
      <path d="M16.5 9a4.5 4.5 0 0 1 0 6" />
    </svg>
  );
}

export function MuteIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base(props)}>
      <path d="M4 10v4h3.5L13 18V6L7.5 10H4z" />
      <path d="M16 9.5l4 4M20 9.5l-4 4" />
    </svg>
  );
}

export function StackIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base(props)} strokeWidth={1.6}>
      <rect x="7.5" y="3.5" width="13" height="13" rx="2.3" />
      <rect x="3.5" y="7.5" width="13" height="13" rx="2.3" />
    </svg>
  );
}

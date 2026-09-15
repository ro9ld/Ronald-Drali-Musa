import Image from "next/image";

export default function Footer() {
  return (
    <footer className="site-container mt-6 flex items-center justify-between border-t border-white/8 py-[22px] sm:py-6">
      <Image src="/r-mark-white.png" alt="" width={14} height={14} className="h-3.5 w-auto opacity-80" />
      <p className="text-[12px] text-grey/80">© {new Date().getFullYear()} Ronald Musa</p>
    </footer>
  );
}

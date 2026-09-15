import Image from "next/image";

export default function Footer() {
  return (
    <footer className="mx-auto mt-6 flex max-w-[1200px] items-center justify-between border-t border-white/8 px-4 py-[22px] sm:px-10 sm:py-6">
      <Image src="/r-mark-white.png" alt="" width={14} height={14} className="h-3.5 w-auto opacity-80" />
      <p className="text-[12px] text-grey/80">© {new Date().getFullYear()} Ronald Musa</p>
    </footer>
  );
}

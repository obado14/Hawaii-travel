import React from "react";
import Link from "next/link";

export function TopBar() {
  return (
    <div className="bg-[#164A41] text-white text-[11px] sm:text-xs font-semibold py-1.5 px-4 text-center tracking-widest uppercase transition-colors hover:bg-[#113832] border-b border-white/10">
      <div className="container mx-auto flex items-center justify-center gap-2">
        <span className="inline-block w-2 h-2 rounded-full bg-[#E9C46A] animate-pulse" />
        <span className="text-[#E9C46A] font-bold">Penawaran Khusus:</span>
        <Link href="/booking" className="hover:underline hover:text-[#E9C46A] transition-colors">
          Pesan Sekarang &amp; Dapatkan Diskon 10%!!
        </Link>
      </div>
    </div>
  );
}

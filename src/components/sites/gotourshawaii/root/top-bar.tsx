import React from "react";
import Link from "next/link";

export function TopBar() {
  return (
    <div className="bg-[#073B4C] text-white text-[11px] sm:text-xs font-semibold py-1.5 px-4 text-center tracking-widest uppercase transition-colors hover:bg-[#052631] border-b border-white/10">
      <div className="container mx-auto flex items-center justify-center gap-2">
        <span className="inline-block w-2 h-2 rounded-full bg-[#F4A261] animate-pulse" />
        <span className="text-[#00B4D8] font-bold">Penawaran Khusus:</span>
        <Link href="/booking" className="hover:underline hover:text-[#FFF3D6] transition-colors">
          Pesan Sekarang &amp; Dapatkan Diskon 10%!!
        </Link>
      </div>
    </div>
  );
}

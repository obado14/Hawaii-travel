import React from "react";

export function TopBar() {
  return (
    <div className="bg-black text-white text-xs font-semibold py-2 px-4 text-center tracking-widest uppercase transition-colors hover:bg-neutral-900 border-b border-white/10">
      <div className="container mx-auto flex items-center justify-center gap-2">
        <span className="inline-block w-2 h-2 rounded-full bg-[#f15d22] animate-pulse" />
        <span className="text-yellow-400 font-bold">Penawaran Khusus:</span>
        <a href="#booking" className="hover:underline hover:text-white transition-colors">
          Pesan Sekarang &amp; Dapatkan Diskon 10%!!
        </a>
      </div>
    </div>
  );
}

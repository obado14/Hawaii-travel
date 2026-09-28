"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, ArrowRight } from "lucide-react";

interface DiamondHeadBannerProps {
  onBookShuttle?: () => void;
}

export function DiamondHeadBanner({ onBookShuttle }: DiamondHeadBannerProps) {
  return (
    <section id="diamond-head" className="relative bg-[#F7F5EE] pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2C7A7B]/15 border border-[#2C7A7B]/30 mb-2 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#2C7A7B]" />
            <span className="text-xs sm:text-sm font-bold text-[#19312F] uppercase tracking-widest">
              TUR UNGGULAN RESMI
            </span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl text-[#19312F] uppercase tracking-wide leading-tight">
            LAYANAN EKSKLUSIF SHUTTLE DIAMOND HEAD
          </h2>
        </div>

        {/* Compact Hero Card */}
        <Link
          href="/booking?tour=Diamond%20Head%20Shuttle"
          aria-label="Lihat tur shuttle pendakian Diamond Head"
          className="group relative block h-[330px] sm:h-[370px] md:h-[420px] rounded-3xl overflow-hidden shadow-xl cursor-pointer transition-all duration-300 ease-out transform hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-black/40 border border-black/10 bg-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E76F51]"
        >
          {/* Panoramic Diamond Head Image */}
          <div className="absolute inset-0">
            <Image
              src="/sites/gotourshawaii/root/Header-Photo-Diamond-Head.jpeg"
              alt="Pemandangan Udara Panoramik Kawah Diamond Head"
              fill
              className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-106"
            />
            {/* Cinematic Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-black/20" />
          </div>

          {/* Top Right Orange Stamp Badge */}
          <div className="absolute top-4 right-4 sm:top-6 sm:right-6 md:top-8 md:right-8 z-10 w-20 h-20 sm:w-26 sm:h-26 md:w-30 md:h-30 drop-shadow-xl transition-transform duration-500 group-hover:rotate-6 group-hover:scale-105">
            <Image
              src="/sites/gotourshawaii/root/Badge-1.png"
              alt="Badge Aktivitas Peringkat #1 di Waikiki"
              fill
              className="object-contain"
            />
          </div>

          {/* Bottom Left Content */}
          <div className="absolute bottom-0 inset-x-0 p-5 sm:p-7 md:p-9 z-10 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 border border-white/20 backdrop-blur-md mb-2.5 text-[11px] sm:text-xs font-bold text-[#E9C46A] uppercase tracking-widest shadow-md">
              KEBERANGKATAN SETIAP HARI DARI WAIKIKI
            </div>

            <h3 className="font-heading text-2xl sm:text-3xl md:text-4xl text-white uppercase tracking-wider mb-2.5 drop-shadow-[0_3px_12px_rgba(0,0,0,0.9)] group-hover:text-[#E9C46A] transition-colors duration-250 leading-tight">
              SHUTTLE PENDAKIAN DIAMOND HEAD
            </h3>
            <p className="text-neutral-100 text-xs sm:text-sm sm:text-base leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] max-w-xl font-normal mb-4 sm:mb-5 line-clamp-2 sm:line-clamp-none">
              Mendaki kawah ikonis Oahu tanpa repot. Termasuk antar-jemput harian dari Waikiki dan tiket reservasi resmi.
            </p>

            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
              <span className="inline-flex items-center gap-2 px-6 py-2.5 sm:px-7 sm:py-3 rounded-xl bg-[#E76F51] text-white font-heading text-sm sm:text-base font-bold uppercase tracking-wider shadow-lg shadow-[#E76F51]/40 group-hover:bg-[#2C7A7B] transition-all transform group-hover:translate-x-1">
                <span>LIHAT DETAIL TUR</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
              <span className="px-3.5 py-2 rounded-xl bg-[#2C7A7B]/90 text-white text-xs sm:text-sm font-bold border border-[#2C7A7B] shadow-sm">
                Mulai dari $45 / orang
              </span>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
}

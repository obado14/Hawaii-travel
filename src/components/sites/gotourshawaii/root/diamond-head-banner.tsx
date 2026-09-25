"use client";

import React from "react";
import Image from "next/image";
import { Sparkles, ArrowRight } from "lucide-react";

interface DiamondHeadBannerProps {
  onBookShuttle?: () => void;
}

export function DiamondHeadBanner({ onBookShuttle }: DiamondHeadBannerProps) {
  return (
    <section id="diamond-head" className="relative bg-[#f5f0e8] pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="text-center max-w-4xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#f15d22]/10 border border-[#f15d22]/20 mb-3 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#f15d22]" />
            <span className="text-xs sm:text-sm font-bold text-[#f15d22] uppercase tracking-widest">
              SHUTTLE HARIAN RESMI
            </span>
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl text-[#0c2340] uppercase tracking-wide leading-tight">
            NIKMATI LAYANAN EKSKLUSIF SHUTTLE DIAMOND HEAD KAMI
          </h2>
        </div>

        {/* Wide Hero Card */}
        <div
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              onBookShuttle?.();
            }
          }}
          aria-label="Pesan tiket shuttle pendakian Diamond Head"
          onClick={onBookShuttle}
          className="group relative h-[420px] sm:h-[480px] md:h-[530px] rounded-3xl overflow-hidden shadow-2xl cursor-pointer transition-all duration-300 ease-out transform hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-black/40 border border-black/10 bg-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f15d22]"
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
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/55 to-black/20" />
          </div>

          {/* Top Right Orange Stamp Badge */}
          <div className="absolute top-6 right-6 sm:top-8 sm:right-8 md:top-10 md:right-10 z-10 w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 drop-shadow-2xl transition-transform duration-500 group-hover:rotate-6 group-hover:scale-105">
            <Image
              src="/sites/gotourshawaii/root/Badge-1.png"
              alt="Badge Aktivitas Peringkat #1 di Waikiki"
              fill
              className="object-contain"
            />
          </div>

          {/* Bottom Left Content with generous padding away from edges */}
          <div className="absolute bottom-0 inset-x-0 p-8 sm:p-12 md:p-14 lg:p-16 z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-black/60 border border-white/20 backdrop-blur-md mb-3 text-xs sm:text-sm font-bold text-amber-300 uppercase tracking-widest shadow-md">
              KEBERANGKATAN SETIAP HARI DARI WAIKIKI
            </div>

            <h3 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] text-white uppercase tracking-wider mb-3.5 drop-shadow-[0_3px_12px_rgba(0,0,0,0.9)] group-hover:text-amber-300 transition-colors duration-250 leading-tight">
              SHUTTLE PENDAKIAN DIAMOND HEAD
            </h3>
            <p className="text-neutral-100 text-base sm:text-lg leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] max-w-2xl font-normal mb-6">
              Mendaki jalur kawah paling tersohor di Oahu tanpa hambatan! Kami menyediakan layanan antar-jemput harian dari Waikiki lengkap dengan tiket reservasi resmi—cukup naik, mendaki dengan nyaman, dan nikmati panorama epik Diamond Head.
            </p>

            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              <span className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-[#f15d22] text-white font-heading text-base sm:text-lg font-bold uppercase tracking-wider shadow-xl shadow-[#f15d22]/40 group-hover:bg-[#d84b13] transition-all transform group-hover:translate-x-1">
                <span>PESAN KURSI ANDA</span>
                <ArrowRight className="w-4 h-4" />
              </span>
              <span className="px-4 py-2.5 rounded-xl bg-white/20 backdrop-blur-md text-white text-xs sm:text-sm font-bold border border-white/30 shadow-md">
                Mulai dari $45 / orang
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

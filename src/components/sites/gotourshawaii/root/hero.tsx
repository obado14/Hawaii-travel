"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Phone, Award } from "lucide-react";

interface HeroProps {
  onOpenBooking?: () => void;
}

export function Hero({ onOpenBooking }: HeroProps) {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Subtle parallax, clamped to 120px so background never shows empty gap
      const scroll = window.scrollY;
      if (scroll < 900) {
        setOffsetY(scroll * 0.2);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative w-full min-h-[680px] sm:min-h-[740px] lg:min-h-[820px] flex items-center justify-center overflow-hidden">
      {/* Background Image with subtle parallax */}
      <div
        className="absolute inset-0 z-0 will-change-transform"
        style={{
          transform: `translate3d(0, ${offsetY}px, 0)`,
        }}
      >
        <Image
          src="/sites/gotourshawaii/root/Banner-BG-Thumbnail.jpg"
          alt="Pemandangan Pegunungan Pulau Oahu Hawaii"
          fill
          priority
          className="object-cover object-[center_28%] scale-110 transition-transform duration-300"
        />
        {/* Cinematic gradient overlay for maximum readability and dramatic depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0c1f38]/70 via-black/40 to-[#0c1f38]/90" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(0,0,0,0.5)_0%,_transparent_75%)] pointer-events-none" />
      </div>

      {/* Hero Content with clear hierarchy and focal points */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-12 sm:pt-16 pb-36 sm:pb-44 lg:pb-52">
        {/* TripAdvisor Award Badge */}
        <div className="inline-flex items-center gap-2.5 mb-6 sm:mb-8 px-4 py-2 rounded-full bg-black/55 backdrop-blur-md border border-white/20 shadow-2xl animate-in fade-in slide-in-from-top-3 duration-700">
          <div className="w-6 h-6 rounded-full bg-[#00aa6c] flex items-center justify-center text-white shrink-0 shadow-sm">
            <Award className="w-3.5 h-3.5" />
          </div>
          <div className="text-left leading-tight">
            <span className="block text-xs sm:text-sm font-bold text-[#00aa6c] tracking-wide">
              Travelers&apos; Choice Best of the Best 2024
            </span>
            <span className="block text-[11px] sm:text-xs text-white/95 font-medium">
              10 Pengalaman Wisata Terbaik di Dunia
            </span>
          </div>
        </div>

        {/* Huge Bold Headline - The Focal Point */}
        <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[5.75rem] font-normal text-white uppercase tracking-wider leading-[0.93] drop-shadow-[0_4px_24px_rgba(0,0,0,0.8)] mb-5 sm:mb-6 animate-in fade-in slide-in-from-bottom-3 duration-700 delay-150">
          PENGALAMAN TUR KELILING
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-[#f5b324] to-amber-200 mt-1 drop-shadow-[0_2px_12px_rgba(245,179,36,0.4)]">
            PULAU OAHU TERBAIK
          </span>
        </h1>

        {/* Subtitle */}
        <p className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-neutral-100 font-medium leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)] mb-8 sm:mb-9 animate-in fade-in slide-in-from-bottom-2 duration-700 delay-300">
          Tur Pulau Oahu, Ekskursi Bersejarah, &amp; Pesta Luau Hawaii Autentik.
        </p>

        {/* Primary and Secondary CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 mb-8 animate-in fade-in slide-in-from-bottom-2 duration-700 delay-500">
          <button
            onClick={onOpenBooking}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#f15d22] hover:bg-[#d84b13] text-white px-10 py-4 sm:px-12 sm:py-4.5 rounded-xl font-heading text-lg sm:text-xl font-bold uppercase tracking-wider shadow-2xl shadow-[#f15d22]/50 hover:shadow-[#f15d22]/70 ring-2 ring-white/25 transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0 cursor-pointer"
          >
            <span>PESAN ONLINE</span>
            <span className="text-amber-200 text-sm font-sans font-semibold tracking-normal lowercase">(diskon 10%)</span>
          </button>

          <a
            href="tel:808-926-3090"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-white/15 hover:bg-white/25 text-white border-2 border-white/60 hover:border-white backdrop-blur-md px-9 py-4 sm:px-10 sm:py-4.5 rounded-xl font-heading text-lg sm:text-xl font-bold uppercase tracking-wider transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0 shadow-xl"
          >
            <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-amber-300" />
            <span>HUBUNGI KAMI</span>
          </a>
        </div>

        {/* Subtle Trust Indicators Bar */}
        <div className="inline-flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs sm:text-sm text-neutral-200 font-medium px-5 py-2.5 rounded-full bg-black/40 backdrop-blur-md border border-white/10 animate-in fade-in duration-1000 delay-700">
          <span className="flex items-center gap-1.5 text-amber-300">
            ★ <strong className="text-white">4.9 / 5.0</strong> (5.000+ Ulasan)
          </span>
          <span className="text-white/40 hidden sm:inline">•</span>
          <span className="flex items-center gap-1.5">
            <span className="text-emerald-400">✓</span> Pembatalan Fleksibel 48 Jam
          </span>
          <span className="text-white/40 hidden sm:inline">•</span>
          <span className="flex items-center gap-1.5">
            <span className="text-[#f5b324]">✓</span> Jaminan Kursi Resmi
          </span>
        </div>
      </div>

      {/* Polynesian Tribal Divider Graphic at bottom */}
      <div className="absolute bottom-0 left-0 right-0 z-20 w-full pointer-events-none translate-y-0.5 overflow-hidden">
        <div className="relative w-full h-24 sm:h-32 md:h-40 lg:h-44">
          <Image
            src="/sites/gotourshawaii/root/banner-divider-optimized-002.png"
            alt="Transisi motif tradisional polinesia"
            fill
            className="object-cover object-top"
            priority
          />
        </div>
      </div>
    </section>
  );
}

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
    <section className="relative w-full min-h-[660px] sm:min-h-[720px] lg:min-h-[780px] flex items-center justify-center overflow-hidden">
      {/* Background Image with subtle parallax */}
      <div
        className="absolute inset-0 z-0 will-change-transform"
        style={{
          transform: `translate3d(0, ${offsetY}px, 0)`,
        }}
      >
        <Image
          src="/sites/gotourshawaii/root/Banner-BG-Thumbnail.jpg"
          alt="Hawaii Oahu Mountain Ridge View"
          fill
          priority
          className="object-cover object-[center_28%] scale-110 transition-transform duration-300"
        />
        {/* Cinematic gradient overlay matching target design */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0c1f38]/65 via-black/35 to-[#0c1f38]/80" />
      </div>

      {/* Hero Content with subtle entrance animations */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-10 sm:pt-14 pb-36 sm:pb-44 lg:pb-52">
        {/* TripAdvisor Award Badge */}
        <div className="inline-flex items-center gap-2.5 mb-7 sm:mb-8 px-4 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/15 shadow-xl animate-in fade-in slide-in-from-top-3 duration-700">
          <div className="w-6 h-6 rounded-full bg-[#00aa6c] flex items-center justify-center text-white shrink-0">
            <Award className="w-3.5 h-3.5" />
          </div>
          <div className="text-left leading-tight">
            <span className="block text-xs sm:text-sm font-bold text-[#00aa6c] tracking-wide">
              Travelers&apos; Choice Best of the Best 2024
            </span>
            <span className="block text-[11px] sm:text-xs text-white/90 font-medium">
              Top 10 Best in the World
            </span>
          </div>
        </div>

        {/* Huge Bold Headline */}
        <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[5.5rem] font-normal text-white uppercase tracking-wider leading-[0.93] drop-shadow-[0_4px_20px_rgba(0,0,0,0.7)] mb-5 sm:mb-6 animate-in fade-in slide-in-from-bottom-3 duration-700 delay-150">
          BEST OAHU CIRCLE ISLAND
          <span className="block text-white mt-1">TOUR EXPERIENCE</span>
        </h1>

        {/* Subtitle */}
        <p className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-neutral-100 font-medium leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] mb-9 sm:mb-10 animate-in fade-in slide-in-from-bottom-2 duration-700 delay-300">
          Oahu Island Tours, Excursions, &amp; Luaus Hawaiian experience.
        </p>

        {/* Call to Action Button */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 animate-in fade-in slide-in-from-bottom-2 duration-700 delay-500">
          <a
            href="tel:808-926-3090"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#f15d22] hover:bg-[#d84b13] text-white px-10 py-4 sm:px-11 sm:py-4.5 rounded-xl font-extrabold text-base sm:text-lg uppercase tracking-wider shadow-2xl shadow-[#f15d22]/40 ring-1 ring-white/20 transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0 hover:shadow-[#f15d22]/60"
          >
            <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
            <span>CALL US</span>
          </a>

          <button
            onClick={onOpenBooking}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-white/20 hover:bg-white/30 text-white border-2 border-white/60 hover:border-white backdrop-blur-md px-10 py-4 sm:px-11 sm:py-4.5 rounded-xl font-extrabold text-base sm:text-lg uppercase tracking-wider transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0 cursor-pointer shadow-xl"
          >
            <span>BOOK ONLINE</span>
          </button>
        </div>
      </div>

      {/* Polynesian Tribal Divider Graphic at bottom (Reduced height decorative transition) */}
      <div className="absolute bottom-0 left-0 right-0 z-20 w-full pointer-events-none translate-y-0.5 overflow-hidden">
        <div className="relative w-full h-24 sm:h-32 md:h-40 lg:h-44">
          <Image
            src="/sites/gotourshawaii/root/banner-divider-optimized-002.png"
            alt="Polynesian tribal divider"
            fill
            className="object-cover object-top"
            priority
          />
        </div>
      </div>
    </section>
  );
}

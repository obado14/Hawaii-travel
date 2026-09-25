"use client";

import React from "react";
import Image from "next/image";
import { Phone, Award } from "lucide-react";

interface HeroProps {
  onOpenBooking?: () => void;
}

export function Hero({ onOpenBooking }: HeroProps) {
  return (
    <section className="relative w-full min-h-[580px] lg:min-h-[680px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/sites/gotourshawaii/root/Banner-BG-Thumbnail.jpg"
          alt="Hawaii Oahu Mountain Ridge View"
          fill
          priority
          className="object-cover object-center scale-105"
        />
        {/* Cinematic gradient overlay matching target design */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0c1f38]/60 via-black/40 to-[#0c1f38]/80" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8 pb-32 sm:pb-40 md:pb-48">
        {/* TripAdvisor Award Badge */}
        <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/15 shadow-xl animate-in fade-in duration-700">
          <div className="w-6 h-6 rounded-full bg-[#00aa6c] flex items-center justify-center text-white">
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
        <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal text-white uppercase tracking-wider leading-[0.95] drop-shadow-[0_4px_16px_rgba(0,0,0,0.6)] mb-4">
          BEST OAHU CIRCLE ISLAND
          <span className="block text-white">TOUR EXPERIENCE</span>
        </h1>

        {/* Subtitle */}
        <p className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-neutral-200 font-normal leading-relaxed drop-shadow-md mb-8">
          Oahu Island Tours, Excursions, &amp; Luaus Hawaiian experience.
        </p>

        {/* Call to Action Button */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="tel:808-926-3090"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#f15d22] hover:bg-[#d84b13] text-white px-8 py-3.5 rounded-lg font-bold text-base uppercase tracking-wider shadow-2xl shadow-[#f15d22]/40 transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0"
          >
            <Phone className="w-4 h-4" />
            <span>CALL US</span>
          </a>

          <button
            onClick={onOpenBooking}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/15 hover:bg-white/25 text-white border border-white/30 backdrop-blur-md px-8 py-3.5 rounded-lg font-bold text-base uppercase tracking-wider transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0 cursor-pointer"
          >
            <span>BOOK ONLINE</span>
          </button>
        </div>
      </div>

      {/* Polynesian Tribal Divider Graphic at bottom */}
      <div className="absolute bottom-0 left-0 right-0 z-20 w-full pointer-events-none translate-y-0.5">
        <div className="relative w-full aspect-[1536/284]">
          <Image
            src="/sites/gotourshawaii/root/banner-divider-optimized-002.png"
            alt="Polynesian tribal divider"
            fill
            className="object-cover object-bottom"
            priority
          />
        </div>
      </div>
    </section>
  );
}

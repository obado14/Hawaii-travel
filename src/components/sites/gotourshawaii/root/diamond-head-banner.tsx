"use client";

import React from "react";
import Image from "next/image";

interface DiamondHeadBannerProps {
  onBookShuttle?: () => void;
}

export function DiamondHeadBanner({ onBookShuttle }: DiamondHeadBannerProps) {
  return (
    <section id="diamond-head" className="relative bg-[#f5f0e8] pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="text-center max-w-4xl mx-auto mb-8 sm:mb-12">
          <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl text-[#0c2340] uppercase tracking-wide leading-tight">
            TRY OUR NEW EXCLUSIVE DIAMOND HEAD SHUTTLE
          </h2>
        </div>

        {/* Wide Hero Card */}
        <div
          onClick={onBookShuttle}
          className="group relative h-[400px] sm:h-[480px] md:h-[530px] rounded-3xl overflow-hidden shadow-2xl cursor-pointer transition-all duration-300 ease-out transform hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-black/40 border border-black/5"
        >
          {/* Panoramic Diamond Head Image */}
          <div className="absolute inset-0">
            <Image
              src="/sites/gotourshawaii/root/Header-Photo-Diamond-Head.jpeg"
              alt="Panoramic Aerial View of Diamond Head Crater"
              fill
              className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
            />
            {/* Cinematic Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/55 to-transparent" />
          </div>

          {/* Top Right Orange Stamp Badge */}
          <div className="absolute top-6 right-6 sm:top-8 sm:right-8 md:top-10 md:right-10 z-10 w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 drop-shadow-2xl transition-transform duration-500 group-hover:rotate-6 group-hover:scale-105">
            <Image
              src="/sites/gotourshawaii/root/Badge-1.png"
              alt="Waikiki's #1 Rated Activity Badge"
              fill
              className="object-contain"
            />
          </div>

          {/* Bottom Left Content with generous padding away from edges */}
          <div className="absolute bottom-0 inset-x-0 p-8 sm:p-12 md:p-14 lg:p-16 z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/50 border border-white/20 backdrop-blur-md mb-3 text-xs sm:text-sm font-bold text-amber-400 uppercase tracking-widest">
              DAILY WAIKIKI DEPARTURES
            </div>

            <h3 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] text-[#f15d22] uppercase tracking-wider mb-3.5 drop-shadow-[0_3px_10px_rgba(0,0,0,0.9)] group-hover:text-amber-400 transition-colors duration-250 leading-tight">
              DIAMOND HEAD HIKE SHUTTLE
            </h3>
            <p className="text-white text-base sm:text-lg leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] max-w-2xl font-normal">
              Hike Oahu&apos;s most famous trail without the hassle! We run daily shuttles from Waikiki
              with your reservation tickets already secured—just hop on, hike up, and enjoy those epic
              Diamond Head views.
            </p>

            <div className="mt-5 sm:mt-6 inline-flex items-center gap-2.5 bg-[#f15d22] hover:bg-[#d84b13] text-white text-sm sm:text-base font-extrabold uppercase tracking-wider px-8 py-3.5 sm:py-4 rounded-xl shadow-2xl shadow-[#f15d22]/50 ring-1 ring-white/30 transition-all duration-250 transform group-hover:-translate-y-0.5 group-hover:shadow-[#f15d22]/70">
              <span>Reserve Shuttle Pass</span>
              <span className="transition-transform duration-250 group-hover:translate-x-1.5">→</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

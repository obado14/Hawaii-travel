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
          className="group relative h-[360px] sm:h-[440px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl cursor-pointer transition-all duration-300 transform hover:-translate-y-1"
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
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent" />
          </div>

          {/* Top Right Orange Stamp Badge */}
          <div className="absolute top-4 right-4 sm:top-8 sm:right-8 z-10 w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 drop-shadow-2xl transition-transform duration-300 group-hover:rotate-6 group-hover:scale-105">
            <Image
              src="/sites/gotourshawaii/root/Badge-1.png"
              alt="Waikiki's #1 Rated Activity Badge"
              fill
              className="object-contain"
            />
          </div>

          {/* Bottom Left Content */}
          <div className="absolute bottom-0 inset-x-0 p-6 sm:p-10 md:p-12 z-10 max-w-3xl">
            <h3 className="font-heading text-2xl sm:text-4xl md:text-5xl text-[#f15d22] uppercase tracking-wider mb-2.5 drop-shadow-md group-hover:text-amber-400 transition-colors">
              DIAMOND HEAD HIKE SHUTTLE
            </h3>
            <p className="text-neutral-200 text-xs sm:text-sm md:text-base leading-relaxed drop-shadow-md max-w-2xl font-normal">
              Hike Oahu&apos;s most famous trail without the hassle! We run daily shuttles from Waikiki
              with your reservation tickets already secured—just hop on, hike up, and enjoy those epic
              Diamond Head views.
            </p>

            <div className="mt-4 inline-flex items-center gap-2 bg-[#f15d22] hover:bg-[#d84b13] text-white text-xs sm:text-sm font-bold uppercase tracking-wider px-5 py-2.5 rounded-lg shadow-lg shadow-[#f15d22]/30 transition-all">
              <span>Reserve Shuttle Pass</span>
              <span>→</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

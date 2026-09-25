"use client";

import React from "react";
import Image from "next/image";

interface CtaBannerProps {
  onBookNow?: () => void;
}

export function CtaBanner({ onBookNow }: CtaBannerProps) {
  return (
    <section className="relative bg-[#071629] py-10 sm:py-11 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Card with Parchment / Sand Texture */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl py-8 sm:py-10 px-6 sm:px-12 text-center border border-amber-200/20">
          {/* Background Texture Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/sites/gotourshawaii/root/cta-footer-optimized.webp"
              alt="Tekstur Pengalaman Hawaii"
              fill
              className="object-cover object-center"
            />
            {/* Subtle warm wash */}
            <div className="absolute inset-0 bg-[#fdfbf7]/80 backdrop-blur-[1px]" />
          </div>

          {/* Content */}
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl text-[#0c2340] uppercase tracking-wider mb-3 leading-none">
              RASAKAN KEAJAIBAN HAWAII
            </h2>

            <p className="text-neutral-700 text-xs sm:text-sm md:text-base leading-relaxed mb-6 font-normal">
              Ambil langkah pertama menuju petualangan tak terlupakan Anda! Pesan sekarang dan rasakan keajaiban Hawaii secara langsung.
              Jangan lewatkan momen berharga yang menanti Anda. Mulailah perjalanan berkesan bersama kami hari ini!
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={onBookNow}
                className="w-full sm:w-auto bg-[#f15d22] hover:bg-[#d84b13] text-white font-heading text-lg font-bold uppercase tracking-wider px-8 py-3 rounded-lg shadow-xl shadow-[#f15d22]/30 transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                PESAN SEKARANG
              </button>

              <a
                href="/contact-us"
                className="w-full sm:w-auto bg-transparent hover:bg-[#f15d22] text-[#f15d22] hover:text-white border-2 border-[#f15d22] font-heading text-lg font-bold uppercase tracking-wider px-8 py-2.5 rounded-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0 text-center"
              >
                HUBUNGI KAMI
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import React from "react";
import Image from "next/image";

interface CtaBannerProps {
  onBookNow?: () => void;
}

export function CtaBanner({ onBookNow }: CtaBannerProps) {
  return (
    <section className="relative bg-[#071629] py-14 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Card with Parchment / Sand Texture */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl py-12 sm:py-16 px-6 sm:px-14 text-center border border-amber-200/40">
          {/* Background Texture Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/sites/gotourshawaii/root/cta-footer-optimized.webp"
              alt="Tekstur Pengalaman Hawaii"
              fill
              className="object-cover object-center"
            />
            {/* Subtle warm wash */}
            <div className="absolute inset-0 bg-[#fdfbf7]/85 backdrop-blur-[1px]" />
          </div>

          {/* Content */}
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl text-[#0c2340] uppercase tracking-wider mb-4 leading-none">
              RASAKAN KEAJAIBAN HAWAII
            </h2>

            <p className="text-neutral-700 text-sm sm:text-base leading-relaxed mb-8 font-normal">
              Ambil langkah pertama menuju petualangan tak terlupakan Anda! Pesan sekarang dan rasakan kehangatan keramahan semangat Aloha secara langsung bersama Go Tours Hawaii.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5">
              <button
                onClick={onBookNow}
                className="w-full sm:w-auto bg-[#f15d22] hover:bg-[#d84b13] text-white font-heading text-lg sm:text-xl font-bold uppercase tracking-wider px-10 py-4 rounded-xl shadow-xl shadow-[#f15d22]/40 transition-all transform hover:-translate-y-1 active:translate-y-0 cursor-pointer"
              >
                PESAN SEKARANG
              </button>

              <a
                href="/contact-us"
                className="w-full sm:w-auto bg-[#0c1f38] hover:bg-[#152e4f] text-white font-heading text-lg sm:text-xl font-bold uppercase tracking-wider px-9 py-4 rounded-xl shadow-lg transition-all transform hover:-translate-y-1 active:translate-y-0 text-center"
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

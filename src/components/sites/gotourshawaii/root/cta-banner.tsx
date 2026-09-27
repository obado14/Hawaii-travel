"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

interface CtaBannerProps {
  onBookNow?: () => void;
}

export function CtaBanner({ onBookNow }: CtaBannerProps) {
  return (
    <section className="relative bg-[#FFF3D6] py-10 sm:py-14 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Card with Parchment / Sand Texture */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl py-9 sm:py-12 px-6 sm:px-12 text-center border border-[#073B4C]/15">
          {/* Background Texture Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/sites/gotourshawaii/root/cta-footer-optimized.webp"
              alt="Tekstur Pengalaman Hawaii"
              fill
              className="object-cover object-center"
            />
            {/* Subtle warm wash */}
            <div className="absolute inset-0 bg-[#FFF3D6]/90 backdrop-blur-[1px]" />
          </div>

          {/* Content */}
          <div className="relative z-10 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F4A261]/15 border border-[#F4A261]/30 mb-2.5 shadow-xs">
              <span className="text-xs font-bold text-[#F4A261] uppercase tracking-widest">
                SIAP UNTUK BERLIBUR?
              </span>
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl text-[#073B4C] uppercase tracking-wider mb-2.5 leading-tight">
              RASAKAN KEAJAIBAN HAWAII
            </h2>

            <p className="text-[#073B4C]/80 text-xs sm:text-sm sm:text-base leading-relaxed mb-6 font-normal max-w-xl mx-auto">
              Butuh bantuan merencanakan petualangan Hawaii Anda? Konsultasikan bersama tim pemandu lokal kami atau pesan tur Anda langsung secara online.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <Link
                href="/booking"
                className="w-full sm:w-auto bg-[#F4A261] hover:bg-[#e76f51] text-white font-heading text-base sm:text-lg font-bold uppercase tracking-wider px-8 py-3.5 rounded-xl shadow-lg shadow-[#F4A261]/35 transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer text-center"
              >
                PESAN SEKARANG
              </Link>

              <Link
                href="/tour-packages"
                className="w-full sm:w-auto bg-[#0077B6] hover:bg-[#005f94] text-white font-heading text-base sm:text-lg font-bold uppercase tracking-wider px-7 py-3.5 rounded-xl shadow-md transition-all transform hover:-translate-y-0.5 active:translate-y-0 text-center"
              >
                JELAJAHI TUR
              </Link>

              <Link
                href="/contact-us"
                className="w-full sm:w-auto bg-white/90 hover:bg-white text-[#073B4C] border border-[#073B4C]/20 hover:border-[#073B4C]/40 font-heading text-base sm:text-lg font-bold uppercase tracking-wider px-7 py-3.5 rounded-xl shadow-sm transition-all transform hover:-translate-y-0.5 active:translate-y-0 text-center"
              >
                HUBUNGI KAMI
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

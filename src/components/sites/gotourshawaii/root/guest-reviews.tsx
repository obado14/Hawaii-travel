"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

interface Review {
  id: number;
  title?: string;
  quote: string;
  author: string;
}

const reviews: Review[] = [
  {
    id: 1,
    title: "Pengalaman Luar Biasa Bersama Keluarga!",
    quote:
      "Pemandu kami sangat luar biasa! Menjelaskan setiap sejarah dan keindahan budaya Hawaii dengan sangat hangat dan ramah. Merupakan pengalaman perjalanan terbaik yang pernah kami rasakan!",
    author: "Kathy L.",
  },
  {
    id: 2,
    title: "Pemandu Berpengetahuan Luas & Seru",
    quote:
      "Dari penjemputan hingga akhir tur, energi dan keramahtamahan pemandu membuat liburan kami di Oahu tak terlupakan. Sangat direkomendasikan bagi siapa pun yang baru pertama kali ke Hawaii.",
    author: "Sean K.",
  },
  {
    id: 3,
    title: "Tur Pearl Harbor Sangat Berkesan",
    quote:
      "Penjemputan hotel tepat waktu dan tur Pearl Harbor yang sangat menyentuh. Pemandu sangat menguasai sejarah lokal kepulauan. Pasti akan memilih Go Tours Hawaii lagi saat kembali ke sini.",
    author: "Kendra L.",
  },
  {
    id: 4,
    title: "Snorkeling Magis Bersama Penyu Laut",
    quote:
      "Melihat penyu hijau (honu) dari dekat di air laut sebening kristal sungguh momen impian. Seluruh rangkaian tur terorganisir dengan sangat rapi, nyaman, dan aman.",
    author: "Alex B.",
  },
];

export function GuestReviews() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevReview = () => {
    setCurrentIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const nextReview = () => {
    setCurrentIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  const current = reviews[currentIndex];

  return (
    <section className="relative bg-[#081d38] py-12 sm:py-16 px-4 sm:px-6 lg:px-8 overflow-hidden text-white">
      {/* Background Texture Overlay */}
      <div className="absolute inset-0 opacity-15 pointer-events-none">
        <Image
          src="/sites/gotourshawaii/root/optimized-bg-texture-002.jpg"
          alt="Polynesian watermark texture"
          fill
          className="object-cover"
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Title */}
        <div className="text-center mb-7 sm:mb-9">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 mb-2 shadow-xs">
            <span className="text-xs sm:text-sm font-bold text-[#f5b324] uppercase tracking-widest">
              KEPUASAN WISATAWAN
            </span>
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl text-[#f5b324] uppercase tracking-wider drop-shadow-md">
            TESTIMONI TAMU KAMI
          </h2>

          {/* TripAdvisor Rating Summary */}
          <div className="mt-3.5 flex items-center justify-center gap-3">
            <div className="relative w-10 h-10 sm:w-12 sm:h-12">
              <Image
                src="/sites/gotourshawaii/root/TC-Sticker-2023_White-1.png"
                alt="TripAdvisor Travelers' Choice"
                fill
                className="object-contain"
              />
            </div>
            <div className="text-left">
              <div className="text-[11px] uppercase tracking-wider text-neutral-300 font-semibold">
                Rating Keseluruhan
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl sm:text-3xl font-extrabold text-[#f5b324] leading-none font-heading">
                  4.9
                </span>
                <span className="text-[11px] sm:text-xs text-neutral-300 font-medium">4.678 ulasan</span>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial Card Display */}
        <div className="relative max-w-3xl mx-auto px-2 sm:px-6">
          {/* Card */}
          <div className="bg-white text-neutral-900 rounded-3xl p-6 sm:p-8 md:p-10 shadow-xl transition-all duration-300 hover:shadow-2xl min-h-[220px] sm:min-h-[250px] flex flex-col justify-between border-2 border-white/20 relative">
            {/* Animated Content on Slide Change */}
            <div key={current.id} className="animate-in fade-in duration-300">
              {/* 5 Stars & Verified Badge */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5 mb-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#f59e0b] text-[#f59e0b] drop-shadow-sm" />
                  ))}
                </div>
                <span className="text-[11px] uppercase tracking-wider font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full">
                  ✓ Tamu Tur Terverifikasi
                </span>
              </div>

              {/* Review Title if present */}
              {current.title && (
                <h4 className="font-heading text-lg sm:text-xl md:text-2xl font-bold text-center text-[#0c2340] mb-2.5">
                  {current.title}
                </h4>
              )}

              {/* Review Quote */}
              <p className="text-sm sm:text-base md:text-lg text-neutral-700 italic text-center font-normal leading-relaxed max-w-2xl mx-auto">
                &ldquo;{current.quote}&rdquo;
              </p>
            </div>

            {/* Author */}
            <div className="mt-5 text-center border-t border-neutral-100 pt-3">
              <span className="font-heading text-base sm:text-lg font-bold text-[#f15d22] uppercase tracking-wider">
                ~ {current.author}
              </span>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevReview}
            className="absolute left-[-6px] sm:left-[-16px] md:left-[-22px] top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#f15d22] hover:bg-[#d84b13] text-white flex items-center justify-center shadow-xl transition-all duration-200 transform hover:scale-110 active:scale-95 cursor-pointer ring-2 ring-white/30"
            aria-label="Ulasan Sebelumnya"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 stroke-[3]" />
          </button>

          <button
            onClick={nextReview}
            className="absolute right-[-6px] sm:right-[-16px] md:right-[-22px] top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#f15d22] hover:bg-[#d84b13] text-white flex items-center justify-center shadow-xl transition-all duration-200 transform hover:scale-110 active:scale-95 cursor-pointer ring-2 ring-white/30"
            aria-label="Ulasan Berikutnya"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 stroke-[3]" />
          </button>
        </div>

        {/* Dots Pagination */}
        <div className="mt-6 flex items-center justify-center gap-2">
          {reviews.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-2 rounded-full transition-all cursor-pointer ${
                currentIndex === idx ? "w-6 bg-[#f15d22]" : "w-2 bg-white/30 hover:bg-white/60"
              }`}
              aria-label={`Buka ulasan ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

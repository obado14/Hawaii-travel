"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Maximize2, X, Sparkles } from "lucide-react";

interface OdysseyPhoto {
  id: number;
  src: string;
  alt: string;
  caption: string;
}

const photos: OdysseyPhoto[] = [
  {
    id: 1,
    src: "/sites/gotourshawaii/root/Visual-img-2-e1714631806737.jpg",
    alt: "Sajian Udang Bawang Putih Kahuku Asli North Shore",
    caption: "Udang Bawang Putih Terkenal North Shore",
  },
  {
    id: 2,
    src: "/sites/gotourshawaii/root/GPTempDownload4-1-1.jpg",
    alt: "Peselancar pemula menikmati ombak toska di Pantai Waikiki",
    caption: "Pelajaran Selancar di Waikiki",
  },
  {
    id: 3,
    src: "/sites/gotourshawaii/root/waikiki-turtle-banner.png",
    alt: "Penyu Hijau Hawaii Honu berenang di air laut jernih",
    caption: "Petualangan Snorkeling di Turtle Canyon",
  },
  {
    id: 4,
    src: "/sites/gotourshawaii/root/Visual-img-3-e1714632197722.jpg",
    alt: "Kuil Byodo-In di bawah kabut Pegunungan Koʻolau",
    caption: "Kawasan Sakral Kuil Byodo-In",
  },
  {
    id: 5,
    src: "/sites/gotourshawaii/root/Visual-img-4-e1714632180613.jpg",
    alt: "Kebun raya tropis asri dan tebing dramatis Lembah Waimea",
    caption: "Jelajah Kebun Raya Lembah Waimea",
  },
  {
    id: 6,
    src: "/sites/gotourshawaii/root/Visual-img-1-e1714631873659.jpg",
    alt: "Penari Api Tradisional Luau Polinesia",
    caption: "Pesta Luau Polinesia & Tarian Api Tradisional",
  },
  {
    id: 7,
    src: "/sites/gotourshawaii/root/Visual-img-7-e1714632127105.jpg",
    alt: "Pemandangan pesisir dari Gardu Pandang Nuʻuanu Pali",
    caption: "Panorama Spektakuler Gardu Pandang Nuʻuanu Pali",
  },
  {
    id: 8,
    src: "/sites/gotourshawaii/root/3-3.jpg",
    alt: "Matahari terbenam dan pantai murni di North Shore Oahu",
    caption: "Sunset Beach & Ombak Banzai Pipeline",
  },
];

export function VisualOdyssey() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedPhoto, setSelectedPhoto] = useState<OdysseyPhoto | null>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? photos.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === photos.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    timerRef.current = setInterval(() => {
      nextSlide();
    }, 5500);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [currentIndex]);

  const activePhoto = photos[currentIndex];

  return (
    <section className="relative bg-[#0c1f38] text-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-white/20 mb-3 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#f5b324]" />
            <span className="text-xs sm:text-sm font-bold text-[#f5b324] uppercase tracking-widest">
              GALERI PERJALANAN
            </span>
          </div>
          <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl text-white uppercase tracking-wider mb-3 leading-none drop-shadow-md">
            PETUALANGAN VISUAL
          </h2>
          <p className="text-neutral-300 text-sm sm:text-base font-normal max-w-xl mx-auto leading-relaxed">
            Potret momen keindahan dan kenangan magis dari para tamu kami saat menjelajahi surga Hawaii.
          </p>
        </div>

        {/* Main Stage Image */}
        <div className="relative w-full h-[360px] sm:h-[480px] md:h-[540px] lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl border border-white/15 group">
          <Image
            src={activePhoto.src}
            alt={activePhoto.alt}
            fill
            priority
            className="object-cover object-center transition-all duration-700 ease-out group-hover:scale-105"
          />

          {/* Dark gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent pointer-events-none" />

          {/* Left / Right Nav Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/50 hover:bg-[#f15d22] text-white flex items-center justify-center backdrop-blur-md border border-white/20 transition-all duration-200 transform hover:scale-110 cursor-pointer z-10"
            aria-label="Foto Sebelumnya"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/50 hover:bg-[#f15d22] text-white flex items-center justify-center backdrop-blur-md border border-white/20 transition-all duration-200 transform hover:scale-110 cursor-pointer z-10"
            aria-label="Foto Berikutnya"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Fullscreen Button */}
          <button
            onClick={() => setSelectedPhoto(activePhoto)}
            className="absolute top-4 sm:top-6 right-4 sm:right-6 w-11 h-11 rounded-full bg-black/50 hover:bg-[#f15d22] text-white flex items-center justify-center backdrop-blur-md border border-white/20 transition-all duration-200 cursor-pointer z-10"
            aria-label="Lihat Layar Penuh"
          >
            <Maximize2 className="w-5 h-5" />
          </button>

          {/* Caption Overlay */}
          <div className="absolute bottom-0 inset-x-0 p-6 sm:p-8 lg:p-10 z-10 flex flex-col sm:flex-row sm:items-end justify-between gap-3">
            <div>
              <span className="text-xs font-bold text-[#f5b324] uppercase tracking-widest block mb-1">
                Foto {currentIndex + 1} dari {photos.length}
              </span>
              <h3 className="font-heading text-2xl sm:text-3xl md:text-4xl text-white uppercase drop-shadow-md">
                {activePhoto.caption}
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-neutral-300 max-w-md italic">
              &ldquo;{activePhoto.alt}&rdquo;
            </p>
          </div>
        </div>

        {/* Thumbnail Carousel Bar */}
        <div className="mt-5 grid grid-cols-4 sm:grid-cols-8 gap-2 sm:gap-3">
          {photos.map((photo, idx) => (
            <button
              key={photo.id}
              onClick={() => setCurrentIndex(idx)}
              className={`relative h-16 sm:h-20 rounded-xl overflow-hidden border-2 transition-all duration-200 cursor-pointer ${
                idx === currentIndex
                  ? "border-[#f15d22] scale-105 shadow-lg ring-2 ring-[#f15d22]/50"
                  : "border-transparent opacity-60 hover:opacity-100"
              }`}
              aria-label={`Pilih foto ${idx + 1}`}
            >
              <Image src={photo.src} alt={photo.caption} fill className="object-cover" />
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setSelectedPhoto(null)}
        >
          <button
            onClick={() => setSelectedPhoto(null)}
            className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 hover:bg-[#f15d22] text-white flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Tutup Pratinjau"
          >
            <X className="w-6 h-6" />
          </button>
          <div
            className="relative max-w-5xl max-h-[85vh] w-full h-full flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-[75vh]">
              <Image
                src={selectedPhoto.src}
                alt={selectedPhoto.alt}
                fill
                className="object-contain"
              />
            </div>
            <p className="text-center font-heading text-xl sm:text-2xl text-white mt-4 uppercase">
              {selectedPhoto.caption}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}

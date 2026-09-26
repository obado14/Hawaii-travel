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
    <section className="relative bg-[#0c1f38] text-white py-12 sm:py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 mb-2 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#f5b324]" />
            <span className="text-xs sm:text-sm font-bold text-[#f5b324] uppercase tracking-widest">
              GALERI PERJALANAN
            </span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl text-white uppercase tracking-wider mb-2 leading-none drop-shadow-md">
            PETUALANGAN VISUAL
          </h2>
          <p className="text-neutral-300 text-xs sm:text-sm font-normal max-w-lg mx-auto leading-relaxed">
            Potret keindahan alam dan momen berkesan para tamu kami saat menjelajahi surga Hawaii.
          </p>
        </div>

        {/* Main Stage Image */}
        <div className="relative w-full h-[260px] sm:h-[340px] md:h-[400px] lg:h-[440px] rounded-3xl overflow-hidden shadow-2xl border border-white/15 group">
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
            className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-black/50 hover:bg-[#f15d22] text-white flex items-center justify-center backdrop-blur-md border border-white/20 transition-all duration-200 transform hover:scale-110 cursor-pointer z-10"
            aria-label="Foto Sebelumnya"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-black/50 hover:bg-[#f15d22] text-white flex items-center justify-center backdrop-blur-md border border-white/20 transition-all duration-200 transform hover:scale-110 cursor-pointer z-10"
            aria-label="Foto Berikutnya"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Fullscreen Button */}
          <button
            onClick={() => setSelectedPhoto(activePhoto)}
            className="absolute top-3.5 sm:top-5 right-3.5 sm:right-5 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-black/50 hover:bg-[#f15d22] text-white flex items-center justify-center backdrop-blur-md border border-white/20 transition-all duration-200 cursor-pointer z-10"
            aria-label="Lihat Layar Penuh"
          >
            <Maximize2 className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>

          {/* Caption Overlay */}
          <div className="absolute bottom-0 inset-x-0 p-4 sm:p-6 lg:p-7 z-10 flex flex-col sm:flex-row sm:items-end justify-between gap-2">
            <div>
              <span className="text-[11px] sm:text-xs font-bold text-[#f5b324] uppercase tracking-widest block mb-0.5">
                Foto {currentIndex + 1} dari {photos.length}
              </span>
              <h3 className="font-heading text-xl sm:text-2xl md:text-3xl text-white uppercase drop-shadow-md">
                {activePhoto.caption}
              </h3>
            </div>
            <p className="text-xs text-neutral-300 max-w-sm italic hidden sm:block">
              &ldquo;{activePhoto.alt}&rdquo;
            </p>
          </div>
        </div>

        {/* Thumbnail Carousel Bar */}
        <div className="mt-3.5 sm:mt-4 grid grid-cols-4 sm:grid-cols-8 gap-2 sm:gap-2.5">
          {photos.map((photo, idx) => (
            <button
              key={photo.id}
              onClick={() => setCurrentIndex(idx)}
              className={`relative h-13 sm:h-16 rounded-xl overflow-hidden border-2 transition-all duration-200 cursor-pointer ${
                idx === currentIndex
                  ? "border-[#f15d22] scale-105 shadow-md ring-2 ring-[#f15d22]/50"
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

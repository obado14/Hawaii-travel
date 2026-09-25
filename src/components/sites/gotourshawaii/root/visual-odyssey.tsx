"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react";

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
    alt: "Authentic North Shore Kahuku Garlic Shrimp Platter",
    caption: "Famous North Shore Garlic Shrimp",
  },
  {
    id: 2,
    src: "/sites/gotourshawaii/root/GPTempDownload4-1-1.jpg",
    alt: "Beginner surfer riding gentle turquoise wave in Waikiki",
    caption: "Waikiki Surfing Lessons",
  },
  {
    id: 3,
    src: "/sites/gotourshawaii/root/waikiki-turtle-banner.png",
    alt: "Hawaiian Green Sea Turtle Honu swimming in crystal waters",
    caption: "Turtle Canyon Snorkeling Adventure",
  },
  {
    id: 4,
    src: "/sites/gotourshawaii/root/Visual-img-3-e1714632197722.jpg",
    alt: "Byodo-In Temple under the mist of the Koʻolau Mountains",
    caption: "Byodo-In Temple Sacred Grounds",
  },
  {
    id: 5,
    src: "/sites/gotourshawaii/root/Visual-img-4-e1714632180613.jpg",
    alt: "Lush tropical botanical gardens and dramatic cliffs",
    caption: "Waimea Valley Botanical Walk",
  },
  {
    id: 6,
    src: "/sites/gotourshawaii/root/Visual-img-1-e1714631873659.jpg",
    alt: "Polynesian Cultural Center Luau Fire Knife Performer",
    caption: "Traditional Polynesian Luau & Fire Knife Dance",
  },
  {
    id: 7,
    src: "/sites/gotourshawaii/root/Visual-img-7-e1714632127105.jpg",
    alt: "Scenic coastal lookout overlooking Oahu windward shores",
    caption: "Nuʻuanu Pali Lookout Panoramic Vista",
  },
  {
    id: 8,
    src: "/sites/gotourshawaii/root/3-3.jpg",
    alt: "Famous Oahu North Shore sunset and pristine beach",
    caption: "Sunset Beach & Banzai Pipeline",
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
      setCurrentIndex((prev) => (prev === photos.length - 1 ? 0 : prev + 1));
    }, 4500);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  return (
    <section id="visual-odyssey" className="relative bg-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="font-heading text-4xl sm:text-6xl md:text-7xl text-[#f5b324] uppercase tracking-wider drop-shadow-sm">
            VISUAL ODYSSEY
          </h2>
          <p className="text-neutral-500 text-sm mt-2 max-w-lg mx-auto">
            A glimpse into the unforgettable landscapes, wildlife, and tastes of Oahu.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Main Displayed Slide */}
          <div className="relative h-[380px] sm:h-[480px] md:h-[580px] w-full rounded-2xl overflow-hidden shadow-2xl bg-neutral-900 group">
            {/* Layered smooth crossfade images */}
            {photos.map((photo, idx) => (
              <div
                key={photo.id}
                className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                  idx === currentIndex ? "opacity-100 z-0" : "opacity-0 z-0 pointer-events-none"
                }`}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover object-center"
                  priority={idx === 0}
                />
              </div>
            ))}

            {/* Gradient Caption Overlay */}
            <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/85 via-black/20 to-transparent flex items-end justify-between p-6 sm:p-8">
              <div>
                <span className="text-xs uppercase font-bold text-[#f15d22] tracking-widest block mb-1">
                  Photo {currentIndex + 1} of {photos.length}
                </span>
                <p className="text-white text-base sm:text-xl font-medium drop-shadow-md">
                  {photos[currentIndex].caption}
                </p>
              </div>

              <button
                onClick={() => setSelectedPhoto(photos[currentIndex])}
                className="p-2.5 rounded-full bg-black/50 hover:bg-[#f15d22] text-white transition-colors cursor-pointer shadow-md"
                title="Expand image"
              >
                <Maximize2 className="w-4 h-4" />
              </button>
            </div>

            {/* Circular Navigation Buttons */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevSlide();
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-[#f15d22] hover:bg-[#d84b13] text-white flex items-center justify-center shadow-lg transition-transform duration-200 transform hover:scale-110 active:scale-95 cursor-pointer"
              aria-label="Previous Photo"
            >
              <ChevronLeft className="w-6 h-6 stroke-[3]" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                nextSlide();
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-[#f15d22] hover:bg-[#d84b13] text-white flex items-center justify-center shadow-lg transition-transform duration-200 transform hover:scale-110 active:scale-95 cursor-pointer"
              aria-label="Next Photo"
            >
              <ChevronRight className="w-6 h-6 stroke-[3]" />
            </button>
          </div>

          {/* Thumbnail Track with gentle hover effects */}
          <div className="mt-6 flex items-center justify-center gap-2 sm:gap-3 overflow-x-auto pb-2">
            {photos.map((photo, idx) => (
              <button
                key={photo.id}
                onClick={() => setCurrentIndex(idx)}
                className={`group/thumb relative w-14 h-14 sm:w-18 sm:h-18 rounded-xl overflow-hidden shrink-0 border-2 transition-all duration-300 cursor-pointer ${
                  currentIndex === idx
                    ? "border-[#f15d22] scale-105 shadow-lg ring-2 ring-[#f15d22]/40 opacity-100"
                    : "border-transparent opacity-65 hover:opacity-100 hover:scale-105 hover:shadow-md hover:border-white/40"
                }`}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover/thumb:scale-110"
                />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setSelectedPhoto(null)}
        >
          <div className="relative max-w-5xl max-h-[90vh] w-full h-full flex flex-col items-center justify-center">
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-4 right-4 z-50 p-2 text-white/80 hover:text-white bg-black/50 rounded-full"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="relative w-full h-[80vh]">
              <Image
                src={selectedPhoto.src}
                alt={selectedPhoto.alt}
                fill
                className="object-contain"
              />
            </div>
            <p className="text-white text-center mt-3 text-lg font-medium">
              {selectedPhoto.caption}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}

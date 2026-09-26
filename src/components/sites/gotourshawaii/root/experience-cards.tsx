"use client";

import React from "react";
import Image from "next/image";

interface ExperienceItem {
  id: number;
  title: string;
  description: string;
  image: string;
  alt: string;
}

const experiences: ExperienceItem[] = [
  {
    id: 1,
    title: "TUR KELILING PULAU",
    description:
      "Jelajahi pantai emas ikonis, Lembah Waimea, dan panorama spektakuler Oahu bersama pemandu lokal.",
    image: "/sites/gotourshawaii/root/optimized-water-fall-002.jpg",
    alt: "Air Terjun Waimea Tur Keliling Pulau",
  },
  {
    id: 2,
    title: "PESTA LUAU HAWAII",
    description:
      "Rasakan kehangatan aloha dengan santapan tradisional khas kepulauan dan atraksi tari api spektakuler.",
    image: "/sites/gotourshawaii/root/optimized-luau-cover-002.jpg",
    alt: "Pengalaman Pesta Luau Hawaii",
  },
  {
    id: 3,
    title: "PEARL HARBOR",
    description:
      "Telusuri situs bersejarah USS Arizona Memorial dengan akses prioritas dan narasi mendalam.",
    image: "/sites/gotourshawaii/root/optimized-pearl-harbor-02.jpg",
    alt: "Memorial USS Arizona Pearl Harbor",
  },
];

interface ExperienceCardsProps {
  onSelectExperience?: (title: string) => void;
}

import { Sparkles, ArrowRight } from "lucide-react";

export function ExperienceCards({ onSelectExperience }: ExperienceCardsProps) {
  return (
    <section id="experiences" className="relative bg-[#f5f0e8] py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-11">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f15d22]/10 border border-[#f15d22]/20 mb-2.5 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#f15d22]" />
            <span className="text-xs sm:text-sm font-bold text-[#f15d22] uppercase tracking-widest">
              PENGALAMAN UNGGULAN OAHU
            </span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl text-[#0c2340] uppercase tracking-wide leading-tight mb-3">
            PILIH PENGALAMAN WISATA ANDA
          </h2>
          <p className="text-neutral-700 text-sm sm:text-base font-normal max-w-xl mx-auto leading-relaxed">
            Pilihan tur Permata Tersembunyi Oahu terpopuler bersama pemandu lokal berlisensi dan jaminan kepuasan.
          </p>
        </div>

        {/* 3 Experience Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  onSelectExperience?.(exp.title);
                }
              }}
              aria-label={`Jelajahi ${exp.title}`}
              onClick={() => onSelectExperience?.(exp.title)}
              className="group relative h-[380px] sm:h-[420px] md:h-[460px] lg:h-[480px] rounded-3xl overflow-hidden shadow-xl cursor-pointer transition-all duration-300 ease-out transform hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-black/35 border border-black/10 bg-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f15d22]"
            >
              {/* Background Image with subtle zoom */}
              <div className="absolute inset-0">
                <Image
                  src={exp.image}
                  alt={exp.alt}
                  fill
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-108"
                />
                {/* Gradient dark overlay from bottom for pristine text contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/55 to-black/20 group-hover:via-black/45 transition-colors duration-300" />
              </div>

              {/* Number Badge (Top Center) */}
              <div className="absolute top-5 left-1/2 -translate-x-1/2 z-10">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border-2 border-white/80 bg-black/50 backdrop-blur-md flex items-center justify-center text-white font-heading text-xl sm:text-2xl shadow-xl transition-all duration-300 group-hover:scale-110 group-hover:border-[#f15d22] group-hover:bg-[#f15d22] group-hover:text-white">
                  {exp.id}
                </div>
              </div>

              {/* Content (Bottom) */}
              <div className="absolute bottom-0 inset-x-0 p-5 sm:p-6 lg:p-7 z-10 flex flex-col justify-end">
                <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white uppercase tracking-wide leading-tight mb-2 transition-colors duration-250 group-hover:text-amber-300 drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
                  {exp.title}
                </h3>
                <p className="text-neutral-200 text-xs sm:text-sm font-normal leading-relaxed mb-4">
                  {exp.description}
                </p>

                {/* Interactive CTA Pill */}
                <div>
                  <span className="inline-flex items-center gap-1.5 bg-[#f15d22] group-hover:bg-[#d84b13] text-white px-4 py-2 rounded-xl text-xs sm:text-sm font-heading font-bold uppercase tracking-wider shadow-lg shadow-[#f15d22]/30 transition-all duration-300 transform group-hover:translate-x-1">
                    <span>Jelajahi Tur</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

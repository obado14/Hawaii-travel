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
      "Mulailah perjalanan melintasi pemandangan alam yang asri, pantai berpasir emas yang menakjubkan, dan situs-situs budaya yang memikat.",
    image: "/sites/gotourshawaii/root/optimized-water-fall-002.jpg",
    alt: "Air Terjun Waimea Tur Keliling Pulau",
  },
  {
    id: 2,
    title: "PESTA LUAU HAWAII",
    description:
      "Rasakan keajaiban aloha di Pesta Luau Hawaii kami! Nikmati jamuan hidangan tradisional kepulauan, mulai dari kalua pig hingga poi manis dan atraksi tari api.",
    image: "/sites/gotourshawaii/root/optimized-luau-cover-002.jpg",
    alt: "Pengalaman Pesta Luau Hawaii",
  },
  {
    id: 3,
    title: "PEARL HARBOR",
    description:
      "Jelajahi sejarah mendalam di Pearl Harbor, sebuah penghormatan khidmat atas keberanian dan keteguhan pahlawan saat Anda menyusuri situs bersejarah ikonis.",
    image: "/sites/gotourshawaii/root/optimized-pearl-harbor-02.jpg",
    alt: "Memorial USS Arizona Pearl Harbor",
  },
];

interface ExperienceCardsProps {
  onSelectExperience?: (title: string) => void;
}

export function ExperienceCards({ onSelectExperience }: ExperienceCardsProps) {
  return (
    <section id="experiences" className="relative bg-[#f5f0e8] py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl text-[#0c2340] uppercase tracking-wide leading-none mb-4">
            PILIH PENGALAMAN WISATA ANDA
          </h2>
          <p className="text-neutral-700 text-base sm:text-lg font-normal max-w-2xl mx-auto leading-relaxed">
            Nikmati keindahan terbaik pulau kami bersama pemandu lokal berlisensi melalui pilihan tur Permata Tersembunyi Oahu kami yang berperingkat tinggi.
          </p>
        </div>

        {/* 3 Experience Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              onClick={() => onSelectExperience?.(exp.title)}
              className="group relative h-[500px] sm:h-[540px] md:h-[560px] lg:h-[590px] xl:h-[610px] rounded-2xl overflow-hidden shadow-xl cursor-pointer transition-all duration-300 ease-out transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/35 border border-black/5"
            >
              {/* Background Image with subtle zoom */}
              <div className="absolute inset-0">
                <Image
                  src={exp.image}
                  alt={exp.alt}
                  fill
                  className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
                />
                {/* Gradient dark overlay from bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent transition-opacity duration-300" />
              </div>

              {/* Number Badge (Top Center) */}
              <div className="absolute top-6 left-1/2 -translate-x-1/2 z-10">
                <div className="w-14 h-14 sm:w-15 sm:h-15 rounded-full border-2 border-white/70 bg-black/40 backdrop-blur-md flex items-center justify-center text-white font-heading text-2xl sm:text-3xl shadow-lg transition-all duration-300 group-hover:scale-105 group-hover:border-[#f15d22] group-hover:bg-[#f15d22]/30">
                  {exp.id}
                </div>
              </div>

              {/* Content (Bottom) */}
              <div className="absolute bottom-0 inset-x-0 p-6 sm:p-8 lg:p-9 z-10 flex flex-col justify-end">
                <h3 className="font-heading text-3xl sm:text-4xl lg:text-[2.65rem] font-bold text-[#f15d22] uppercase tracking-wide leading-tight mb-3 transition-colors duration-250 group-hover:text-amber-400 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                  {exp.title}
                </h3>
                <p className="text-neutral-100 text-[15px] sm:text-base font-normal leading-relaxed line-clamp-3 group-hover:line-clamp-none transition-all duration-300">
                  {exp.description}
                </p>

                {/* View Details prompt on hover */}
                <div className="mt-4 sm:mt-5 flex items-center gap-2 text-sm sm:text-base font-bold text-white tracking-wide">
                  <span className="group-hover:text-amber-300 transition-colors duration-250">Jelajahi Tur</span>
                  <span className="transition-transform duration-250 ease-out group-hover:translate-x-2 text-amber-300">→</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

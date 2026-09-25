"use client";

import React from "react";
import { Compass, Sparkles, Users, Star } from "lucide-react";

interface BenefitItem {
  id: number;
  title: string;
  description: string;
  icon: React.ElementType;
  badge: string;
}

const benefits: BenefitItem[] = [
  {
    id: 1,
    title: "PAKAR LOKAL ASLI",
    description: "Pemandu lokal berlisensi yang memahami setiap sudut dan kekayaan budaya Hawaii.",
    icon: Compass,
    badge: "100% Lokal",
  },
  {
    id: 2,
    title: "PENGALAMAN AUTENTIK",
    description: "Temukan keindahan Hawaii yang sesungguhnya di luar spot wisata biasa.",
    icon: Sparkles,
    badge: "Permata Tersembunyi",
  },
  {
    id: 3,
    title: "GRUP KECIL & NYAMAN",
    description: "Pengalaman perjalanan yang lebih personal, leluasa, dan penuh kesan mendalam.",
    icon: Users,
    badge: "Tur Intim",
  },
  {
    id: 4,
    title: "LAYANAN BINTANG 5",
    description: "Pelayanan ramah berkelas dan rencana perjalanan yang dipersiapkan secara matang.",
    icon: Star,
    badge: "Peringkat Teratas",
  },
];

export function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="relative bg-[#f5f0e8] py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 border-t border-black/5">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#f15d22]/10 border border-[#f15d22]/20 mb-3 shadow-xs">
            <span className="text-xs sm:text-sm font-bold text-[#f15d22] uppercase tracking-widest">
              KEUNGGULAN SEMANGAT ALOHA
            </span>
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl text-[#0c2340] uppercase tracking-wide leading-none mb-3">
            MENGAPA MEMILIH GO TOURS HAWAII
          </h2>
          <p className="text-neutral-700 text-sm sm:text-base font-normal max-w-xl mx-auto leading-relaxed">
            Rasakan keistimewaan menjelajah bersama spesialis tur lokal terkemuka berperingkat tertinggi di Hawaii.
          </p>
        </div>

        {/* 4 Benefit Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
          {benefits.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="group relative bg-white rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-2xl hover:shadow-black/15 transition-all duration-300 transform hover:-translate-y-2 border border-neutral-200/80 hover:border-[#f15d22]/40 flex flex-col justify-between overflow-hidden"
              >
                {/* Decorative top accent bar */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-transparent via-[#f15d22] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div>
                  {/* Icon & Badge Row */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-13 h-13 rounded-2xl bg-[#0c2340] text-[#f5b324] group-hover:bg-[#f15d22] group-hover:text-white flex items-center justify-center transition-all duration-300 shadow-md group-hover:scale-110">
                      <Icon className="w-6 h-6 stroke-[2]" />
                    </div>
                    <span className="text-[11px] font-bold text-neutral-600 uppercase tracking-wider bg-neutral-100 group-hover:bg-[#f15d22]/10 group-hover:text-[#f15d22] px-3 py-1 rounded-full transition-colors border border-neutral-200/60">
                      {item.badge}
                    </span>
                  </div>

                  {/* Benefit Title */}
                  <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#0c2340] uppercase tracking-wider mb-2.5 group-hover:text-[#f15d22] transition-colors">
                    {item.title}
                  </h3>

                  {/* Benefit Description */}
                  <p className="text-neutral-600 text-sm sm:text-[15px] font-normal leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Subtle bottom indicator */}
                <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center justify-between text-xs font-semibold text-[#0c2340]/70 group-hover:text-[#f15d22] transition-colors">
                  <span>Jaminan Standar Aloha</span>
                  <span className="group-hover:translate-x-1 transition-transform text-[#f15d22] font-bold">→</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

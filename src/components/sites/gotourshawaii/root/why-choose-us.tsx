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
    title: "LOCAL EXPERTS",
    description: "Local guides who know Hawaii inside and out.",
    icon: Compass,
    badge: "100% Local",
  },
  {
    id: 2,
    title: "AUTHENTIC EXPERIENCES",
    description: "Discover Hawaii beyond the typical tourist spots.",
    icon: Sparkles,
    badge: "Hidden Gems",
  },
  {
    id: 3,
    title: "SMALL GROUPS",
    description: "More personal, comfortable, and memorable experiences.",
    icon: Users,
    badge: "Intimate Tours",
  },
  {
    id: 4,
    title: "5-STAR SERVICE",
    description: "Friendly support and carefully planned experiences.",
    icon: Star,
    badge: "Top Rated",
  },
];

export function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="relative bg-[#f5f0e8] py-12 sm:py-16 px-4 sm:px-6 lg:px-8 border-t border-black/5">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#f15d22]/10 border border-[#f15d22]/20 mb-3">
            <span className="text-xs sm:text-sm font-bold text-[#f15d22] uppercase tracking-widest">
              THE ALOHA ADVANTAGE
            </span>
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl text-[#0c2340] uppercase tracking-wide leading-none mb-3">
            WHY CHOOSE GO TOURS HAWAII
          </h2>
          <p className="text-neutral-700 text-sm sm:text-base font-normal max-w-xl mx-auto leading-relaxed">
            Experience the difference of traveling with Hawaii&apos;s premier locally-owned tour specialist.
          </p>
        </div>

        {/* 4 Benefit Cards Grid: 4 cols desktop, 2 cols tablet, 1 col mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {benefits.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="group relative bg-white rounded-2xl p-6 sm:p-7 shadow-md hover:shadow-2xl hover:shadow-black/10 transition-all duration-300 transform hover:-translate-y-2 border border-black/5 hover:border-[#f15d22]/30 flex flex-col justify-between overflow-hidden"
              >
                {/* Decorative top accent bar */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#f15d22] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div>
                  {/* Icon & Badge Row */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-[#0c2340] text-[#f15d22] group-hover:bg-[#f15d22] group-hover:text-white flex items-center justify-center transition-all duration-300 shadow-md group-hover:scale-110">
                      <Icon className="w-6 h-6 stroke-[2]" />
                    </div>
                    <span className="text-[11px] font-bold text-neutral-500 uppercase tracking-wider bg-neutral-100 group-hover:bg-[#f15d22]/10 group-hover:text-[#f15d22] px-2.5 py-1 rounded-full transition-colors">
                      {item.badge}
                    </span>
                  </div>

                  {/* Benefit Title */}
                  <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#0c2340] uppercase tracking-wider mb-2 group-hover:text-[#f15d22] transition-colors">
                    {item.title}
                  </h3>

                  {/* Benefit Description */}
                  <p className="text-neutral-700 text-sm sm:text-[15px] font-normal leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Subtle bottom indicator */}
                <div className="mt-5 pt-3 border-t border-neutral-100 flex items-center justify-between text-xs font-semibold text-[#0c2340]/60 group-hover:text-[#f15d22] transition-colors">
                  <span>Guaranteed Aloha</span>
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

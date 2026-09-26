import React from "react";
import Image from "next/image";

interface Badge {
  name: string;
  src: string;
  width: number;
  height: number;
}

const badges: Badge[] = [
  {
    name: "Google Reviews",
    src: "/sites/gotourshawaii/root/google-reviews-1.png",
    width: 140,
    height: 60,
  },
  {
    name: "TripAdvisor Travelers Choice",
    src: "/sites/gotourshawaii/root/TC-Sticker-2023_White.png",
    width: 90,
    height: 90,
  },
  {
    name: "Yelp Reviews",
    src: "/sites/gotourshawaii/root/6fa58bfa-73fc-4657-b0a4-addfb26299cd.png",
    width: 120,
    height: 60,
  },
  {
    name: "Hawaii Visitors & Convention Bureau",
    src: "/sites/gotourshawaii/root/Hawaii-Visitors-Convention-Bureau-1.png",
    width: 160,
    height: 50,
  },
  {
    name: "Safe Travels Hawaii",
    src: "/sites/gotourshawaii/root/dfa04619-2f12-4b03-8424-cb8beacb5df7.png",
    width: 90,
    height: 90,
  },
];

export function TrustBadges() {
  return (
    <div className="bg-[#081d38] border-t border-white/10 py-6 sm:py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <p className="text-center text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-neutral-400 mb-4">
          TERDAFTAR &amp; DIAKREDITASI RESMI OLEH OTORITAS PARIWISATA
        </p>
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 md:gap-12">
          {badges.map((badge, idx) => (
            <div
              key={idx}
              className="flex items-center justify-center transition-transform duration-300 hover:scale-105 filter brightness-105 opacity-80 hover:opacity-100"
            >
              <Image
                src={badge.src}
                alt={badge.name}
                width={badge.width}
                height={badge.height}
                className="h-7 sm:h-9 md:h-10 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

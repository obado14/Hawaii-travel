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
    <div className="bg-[#081d38] border-t border-white/10 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-center gap-10 sm:gap-14 md:gap-16">
        {badges.map((badge, idx) => (
          <div
            key={idx}
            className="flex items-center justify-center transition-transform duration-300 hover:scale-110 filter brightness-105"
          >
            <Image
              src={badge.src}
              alt={badge.name}
              width={badge.width}
              height={badge.height}
              className="h-12 sm:h-16 w-auto object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

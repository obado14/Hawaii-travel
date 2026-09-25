"use client";

import React from "react";
import Image from "next/image";

export function MissionSection() {
  return (
    <section id="mission" className="relative bg-[#f5f0e8] text-neutral-900 pt-16 pb-20 px-4 sm:px-6 lg:px-8">
      {/* Top Wave / Polynesian Pattern Transition */}
      <div className="absolute top-0 inset-x-0 w-full overflow-hidden leading-none -translate-y-[95%] pointer-events-none">
        <div className="relative w-full h-8 sm:h-12 md:h-16">
          <Image
            src="/sites/gotourshawaii/root/new-bg-22-1024x139.png"
            alt="Wave divider"
            fill
            className="object-cover object-bottom"
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl text-[#0c2340] uppercase tracking-wide leading-none">
            GO TOURS HAWAII MISSION
          </h2>
        </div>

        {/* 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {/* Column 1: Local Experts */}
          <div className="flex flex-col items-center text-center p-6 sm:p-8 rounded-2xl bg-white/60 hover:bg-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1.5 border border-black/5 group">
            <div className="relative w-22 h-22 sm:w-24 sm:h-24 mb-5 transition-transform duration-300 group-hover:scale-110">
              <Image
                src="/sites/gotourshawaii/root/1.png"
                alt="Local Experts Emblem"
                fill
                className="object-contain"
              />
            </div>
            <h3 className="font-heading text-2xl sm:text-3xl font-bold text-[#f15d22] uppercase tracking-wider mb-3.5 group-hover:text-amber-500 transition-colors">
              LOCAL EXPERTS
            </h3>
            <p className="text-neutral-800 text-base sm:text-[17px] font-normal leading-relaxed sm:leading-8">
              We are extremely proud to be 100% locally-owned and operated. With one finger directly on
              the pulse of the Hawaiian Islands, living and working here is second nature to us. This
              guarantees that you will receive the best of everything Hawaii has to offer, with the peace
              of mind of knowing that you are traveling with the #1 connected local tour operator.
            </p>
          </div>

          {/* Column 2: Responsibility */}
          <div className="flex flex-col items-center text-center p-6 sm:p-8 rounded-2xl bg-white/60 hover:bg-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1.5 border border-black/5 group">
            <div className="relative w-22 h-22 sm:w-24 sm:h-24 mb-5 transition-transform duration-300 group-hover:scale-110">
              <Image
                src="/sites/gotourshawaii/root/2.png"
                alt="Responsibility Emblem"
                fill
                className="object-contain"
              />
            </div>
            <h3 className="font-heading text-2xl sm:text-3xl font-bold text-[#f15d22] uppercase tracking-wider mb-3.5 group-hover:text-amber-500 transition-colors">
              RESPONSIBILITY
            </h3>
            <p className="text-neutral-800 text-base sm:text-[17px] font-normal leading-relaxed sm:leading-8">
              Aloha is a philosophy we carry with us daily. Whether you interact with our tour guides,
              phone representatives, or management, our aloha experts adhere to the highest standard of
              responsibility and accountability. We rely on your feedback to ensure that you are being
              treated with the true aloha spirit.
            </p>
          </div>

          {/* Column 3: Aloha */}
          <div className="flex flex-col items-center text-center p-6 sm:p-8 rounded-2xl bg-white/60 hover:bg-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1.5 border border-black/5 group">
            <div className="relative w-22 h-22 sm:w-24 sm:h-24 mb-5 transition-transform duration-300 group-hover:scale-110">
              <Image
                src="/sites/gotourshawaii/root/3.png"
                alt="Aloha Emblem"
                fill
                className="object-contain"
              />
            </div>
            <h3 className="font-heading text-2xl sm:text-3xl font-bold text-[#f15d22] uppercase tracking-wider mb-3.5 group-hover:text-amber-500 transition-colors">
              ALOHA
            </h3>
            <p className="text-neutral-800 text-base sm:text-[17px] font-normal leading-relaxed sm:leading-8">
              We promise to deliver a memorable experience that will last a lifetime. Our team has put
              in countless hours making sure your experience with us is one to remember! Additionally,
              all of the tour and activity providers we work with have been through our thorough process
              to ensure that everything we offer comes with exceptional value.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

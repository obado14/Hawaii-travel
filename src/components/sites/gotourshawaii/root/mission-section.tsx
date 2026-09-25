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
            alt="Transisi pola ombak"
            fill
            className="object-cover object-bottom"
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl text-[#0c2340] uppercase tracking-wide leading-none">
            MISI GO TOURS HAWAII
          </h2>
        </div>

        {/* 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {/* Column 1: Local Experts */}
          <div className="flex flex-col items-center text-center p-6 sm:p-8 rounded-2xl bg-white/60 hover:bg-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1.5 border border-black/5 group">
            <div className="relative w-22 h-22 sm:w-24 sm:h-24 mb-5 transition-transform duration-300 group-hover:scale-110">
              <Image
                src="/sites/gotourshawaii/root/1.png"
                alt="Lambang Pakar Lokal"
                fill
                className="object-contain"
              />
            </div>
            <h3 className="font-heading text-2xl sm:text-3xl font-bold text-[#f15d22] uppercase tracking-wider mb-3.5 group-hover:text-amber-500 transition-colors">
              PAKAR LOKAL ASLI
            </h3>
            <p className="text-neutral-800 text-base sm:text-[17px] font-normal leading-relaxed sm:leading-8">
              Kami sangat bangga menjadi operator tur yang 100% dimiliki dan dikelola oleh warga lokal Hawaii. Berakar kuat di kepulauan ini, memahami setiap tradisi dan bentang alam adalah jati diri kami. Ini menjamin Anda mendapatkan pengalaman wisata terbaik Hawaii, didampingi oleh operator tur lokal terpercaya #1.
            </p>
          </div>

          {/* Column 2: Responsibility */}
          <div className="flex flex-col items-center text-center p-6 sm:p-8 rounded-2xl bg-white/60 hover:bg-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1.5 border border-black/5 group">
            <div className="relative w-22 h-22 sm:w-24 sm:h-24 mb-5 transition-transform duration-300 group-hover:scale-110">
              <Image
                src="/sites/gotourshawaii/root/2.png"
                alt="Lambang Tanggung Jawab"
                fill
                className="object-contain"
              />
            </div>
            <h3 className="font-heading text-2xl sm:text-3xl font-bold text-[#f15d22] uppercase tracking-wider mb-3.5 group-hover:text-amber-500 transition-colors">
              TANGGUNG JAWAB (KULEANA)
            </h3>
            <p className="text-neutral-800 text-base sm:text-[17px] font-normal leading-relaxed sm:leading-8">
              Semangat Aloha adalah falsafah yang kami hidupi setiap hari. Baik saat Anda berinteraksi dengan pemandu tur, staf layanan pelanggan, maupun tim manajemen, kami berkomitmen pada standar tanggung jawab dan keramahan tertinggi demi menjaga keaslian nilai aloha.
            </p>
          </div>

          {/* Column 3: Aloha */}
          <div className="flex flex-col items-center text-center p-6 sm:p-8 rounded-2xl bg-white/60 hover:bg-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1.5 border border-black/5 group">
            <div className="relative w-22 h-22 sm:w-24 sm:h-24 mb-5 transition-transform duration-300 group-hover:scale-110">
              <Image
                src="/sites/gotourshawaii/root/3.png"
                alt="Lambang Aloha"
                fill
                className="object-contain"
              />
            </div>
            <h3 className="font-heading text-2xl sm:text-3xl font-bold text-[#f15d22] uppercase tracking-wider mb-3.5 group-hover:text-amber-500 transition-colors">
              SEMANGAT ALOHA
            </h3>
            <p className="text-neutral-800 text-base sm:text-[17px] font-normal leading-relaxed sm:leading-8">
              Kami berjanji menghadirkan pengalaman berharga yang akan Anda kenang seumur hidup. Tim kami mendedikasikan dedikasi penuh untuk memastikan perjalanan Anda berjalan sempurna dan seluruh mitra atraksi kami telah lolos uji kualitas yang ketat.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

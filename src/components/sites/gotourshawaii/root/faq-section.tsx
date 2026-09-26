"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronDown, Sparkles } from "lucide-react";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    id: 1,
    question: "Bagaimana cara memesan tur bersama Go Tours Hawaii?",
    answer:
      "Anda dapat memesan langsung secara online melalui situs web kami atau menghubungi 808-926-3090. Setelah pemesanan berhasil, Anda akan menerima email konfirmasi instan lengkap dengan voucher, jadwal keberangkatan, dan panduan foto lokasi penjemputan.",
  },
  {
    id: 2,
    question: "Apakah tersedia layanan penjemputan hotel di Waikiki?",
    answer:
      "Ya! Kami menyediakan 8 titik penjemputan strategis di seluruh kawasan Waikiki. Saat Anda memilih hotel pada formulir reservasi, titik penjemputan terdekat akan muncul secara otomatis bersama peta panduan.",
  },
  {
    id: 3,
    question: "Apakah tur ramah untuk anak-anak dan keluarga?",
    answer:
      "Sebagian besar tur kami ramah untuk segala usia dan seluruh anggota keluarga, kecuali Tur Snorkeling Turtle Canyon yang mewajibkan usia minimal 3 tahun demi kenyamanan dan keselamatan di laut.",
  },
  {
    id: 4,
    question: "Bagaimana kebijakan pembatalan tiket tur?",
    answer:
      "Pemesanan memiliki garansi pembatalan fleksibel dengan pengembalian dana 100% penuh hingga 48 jam sebelum jadwal tur (72 jam untuk Paina Luau). Pembatalan akibat faktor cuaca laut selalu diganti 100%.",
  },
];

export function FAQSection() {
  const [openId, setOpenId] = useState<number | null>(1); // Single FAQ open by default

  const toggle = (id: number) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="relative bg-[#081d38] py-12 sm:py-16 px-4 sm:px-6 lg:px-8 text-white overflow-hidden">
      {/* Texture Background */}
      <div className="absolute inset-0 opacity-15 pointer-events-none">
        <Image
          src="/sites/gotourshawaii/root/optimized-bg-texture-002.jpg"
          alt="Tekstur Latar Belakang"
          fill
          className="object-cover"
        />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto">
        {/* Title */}
        <div className="text-center mb-7 sm:mb-9">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 mb-2 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#f5b324]" />
            <span className="text-xs sm:text-sm font-bold text-[#f5b324] uppercase tracking-widest">
              PERTANYAAN UMUM
            </span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl text-white uppercase tracking-wider mb-2 leading-none drop-shadow-md">
            FREQUENTLY ASKED QUESTIONS
          </h2>
          <p className="text-neutral-300 text-xs sm:text-sm font-normal max-w-md mx-auto leading-relaxed">
            Informasi penting yang paling sering ditanyakan oleh wisatawan kami.
          </p>
        </div>

        {/* Accordions with smooth expand/collapse and transformed icon */}
        <div className="space-y-3 sm:space-y-3.5">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="rounded-2xl border border-white/12 bg-white/[0.05] hover:bg-white/[0.08] hover:border-white/25 transition-all duration-300 px-5 sm:px-6 py-1.5 shadow-lg"
              >
                <button
                  onClick={() => toggle(faq.id)}
                  className="w-full flex items-center justify-between text-left py-3.5 sm:py-4 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f5b324] rounded-xl cursor-pointer"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${faq.id}`}
                >
                  <span className="text-base sm:text-lg font-semibold text-white group-hover:text-[#f5b324] transition-colors pr-3 leading-snug">
                    {faq.question}
                  </span>

                  {/* Icon that visually transforms to show expanded state */}
                  <span
                    className={`shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center transition-all duration-300 shadow-md ${
                      isOpen
                        ? "bg-amber-500 text-white rotate-180 scale-105"
                        : "bg-[#f15d22] text-white group-hover:scale-110 group-hover:bg-[#d84b13]"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4 stroke-[2.5]" />
                  </span>
                </button>

                {/* Smooth Expand/Collapse Grid Transition */}
                <div
                  id={`faq-answer-${faq.id}`}
                  role="region"
                  aria-labelledby={`faq-question-${faq.id}`}
                  className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="pb-4 pt-1.5 text-xs sm:text-sm text-neutral-200 leading-relaxed font-normal border-t border-white/10 mt-1">
                      <p>{faq.answer}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

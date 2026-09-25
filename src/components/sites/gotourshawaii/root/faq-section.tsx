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
      "Untuk memesan tur bersama Go Tours Hawaii, Anda memiliki dua opsi mudah. Anda dapat memesan secara online melalui situs web kami atau menghubungi kami di 808-926-3090. Setelah memesan secara online, Anda akan menerima email konfirmasi instan yang memuat semua informasi penting tur, daftar perlengkapan yang disarankan, dan panduan foto lokasi penjemputan. Kami memastikan proses reservasi Anda berlangsung praktis dan cepat.",
  },
  {
    id: 2,
    question: "Apakah tur menyediakan layanan penjemputan di Waikiki?",
    answer:
      "Tentu saja! Kami menyediakan 8 titik lokasi penjemputan yang sangat strategis di kawasan Waikiki. Ketika Anda memasukkan nama hotel Anda pada formulir pemesanan, lokasi penjemputan terdekat akan muncul secara otomatis. Selain itu, email konfirmasi Anda akan dilengkapi peta Google Maps dan foto lokasi penjemputan untuk kemudahan Anda.",
  },
  {
    id: 3,
    question: "Apakah tersedia opsi tur privat atau layanan transportasi grup?",
    answer:
      "Ya, Go Tours Hawaii tidak hanya melayani tur reguler di Oahu dan Maui, tetapi kami juga menyediakan armada transportasi privat ber-AC untuk mengakomodasi perjalanan bersama keluarga, rombongan teman, maupun acara perusahaan. Anda bebas menentukan jadwal keberangkatan dan rute yang Anda sukai.",
  },
  {
    id: 4,
    question: "Apakah ada batasan usia atau kriteria kebugaran fisik untuk mengikuti tur?",
    answer:
      "Sebagian besar tur kami ramah untuk semua usia dan seluruh anggota keluarga, kecuali Tur Snorkeling Waikiki Turtle Canyon yang mewajibkan usia minimal 3 tahun demi alasan keselamatan di laut.",
  },
  {
    id: 5,
    question: "Bagaimana kebijakan pembatalan untuk pemesanan tur?",
    answer:
      "Tur Keliling Pulau Oahu (Circle Island), Tur Pearl Harbor, dan Tur Snorkeling Turtle Canyon memiliki kebijakan pembatalan fleksibel hingga 48 jam sebelum jadwal keberangkatan untuk pengembalian dana 100% penuh. Khusus Paina Luau, pembatalan membutuhkan pemberitahuan 72 jam sebelumnya. Selain itu, pengembalian dana penuh 100% dijamin untuk setiap tur yang dibatalkan oleh pihak kami akibat faktor cuaca buruk atau ombak tinggi.",
  },
];

export function FAQSection() {
  const [openId, setOpenId] = useState<number | null>(1); // Single FAQ open by default

  const toggle = (id: number) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="relative bg-[#081d38] py-16 sm:py-24 px-4 sm:px-6 lg:px-8 text-white overflow-hidden">
      {/* Texture Background */}
      <div className="absolute inset-0 opacity-15 pointer-events-none">
        <Image
          src="/sites/gotourshawaii/root/optimized-bg-texture-002.jpg"
          alt="Tekstur Latar Belakang"
          fill
          className="object-cover"
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Title */}
        <div className="text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-white/20 mb-3.5 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#f5b324]" />
            <span className="text-xs sm:text-sm font-bold text-[#f5b324] uppercase tracking-widest">
              INFORMASI &amp; JAWABAN LENGKAP
            </span>
          </div>
          <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl text-white uppercase tracking-wider mb-3 leading-none drop-shadow-md">
            PERTANYAAN YANG SERING DIAJUKAN
          </h2>
          <p className="text-neutral-300 text-sm sm:text-base font-normal max-w-xl mx-auto leading-relaxed">
            Semua hal yang perlu Anda ketahui sebelum memulai petualangan seru di kepulauan Hawaii.
          </p>
        </div>

        {/* Accordions with smooth expand/collapse and transformed icon */}
        <div className="space-y-4 sm:space-y-5">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="rounded-3xl border border-white/12 bg-white/[0.05] hover:bg-white/[0.08] hover:border-white/25 transition-all duration-300 px-6 sm:px-8 py-2 shadow-xl"
              >
                <button
                  onClick={() => toggle(faq.id)}
                  className="w-full flex items-center justify-between text-left py-4 sm:py-5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f5b324] rounded-2xl cursor-pointer"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${faq.id}`}
                >
                  <span className="text-lg sm:text-xl md:text-[1.35rem] font-semibold text-white group-hover:text-[#f5b324] transition-colors pr-4 leading-snug">
                    {faq.question}
                  </span>

                  {/* Icon that visually transforms to show expanded state */}
                  <span
                    className={`shrink-0 w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center transition-all duration-300 shadow-md ${
                      isOpen
                        ? "bg-amber-500 text-white rotate-180 scale-105"
                        : "bg-[#f15d22] text-white group-hover:scale-110 group-hover:bg-[#d84b13]"
                    }`}
                  >
                    <ChevronDown className="w-5 h-5 stroke-[2.5]" />
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
                    <div className="pb-6 pt-2 text-base sm:text-[17px] text-neutral-100 leading-relaxed sm:leading-8 font-normal pl-0.5 pr-6 border-t border-white/15 mt-1.5">
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

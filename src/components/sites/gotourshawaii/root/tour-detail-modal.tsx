"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import {
  X,
  Star,
  Clock,
  MapPin,
  CheckCircle,
  XCircle,
  AlertCircle,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

export interface TourPackageDetail {
  id: string;
  name: string;
  category: "circle-island" | "luau" | "history" | "adventure" | "shuttle";
  categoryLabel: string;
  duration: string;
  location: string;
  rating: number;
  reviewsCount: number;
  price: number;
  originalPrice: number;
  image: string;
  description: string;
  fullDescription: string;
  highlights: string[];
  included: string[];
  notIncluded: string[];
  meetingPoint: string;
  importantInfo: string[];
  recommended?: boolean;
}

interface TourDetailModalProps {
  tour: TourPackageDetail | null;
  isOpen: boolean;
  onClose: () => void;
  onBookNow: (tourName: string) => void;
}

export function TourDetailModal({ tour, isOpen, onClose, onBookNow }: TourDetailModalProps) {
  // Handle ESC key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen || !tour) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl bg-[#0c1f38] border border-white/20 rounded-3xl shadow-2xl text-white overflow-hidden animate-in zoom-in-95 duration-200 max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/60 hover:bg-[#f15d22] text-white flex items-center justify-center transition-colors cursor-pointer border border-white/20 shadow-lg"
          aria-label="Tutup detail"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Scrollable Container */}
        <div className="overflow-y-auto overflow-x-hidden flex-1">
          {/* Hero Image Section */}
          <div className="relative h-64 sm:h-80 w-full overflow-hidden">
            <Image
              src={tour.image}
              alt={tour.name}
              fill
              className="object-cover object-center"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0c1f38] via-[#0c1f38]/40 to-black/30" />

            {/* Badges on Image */}
            <div className="absolute top-4 left-4 flex items-center gap-2">
              <span className="bg-[#f15d22] text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-md">
                {tour.categoryLabel}
              </span>
              {tour.recommended && (
                <span className="bg-amber-400 text-neutral-950 text-xs font-extrabold uppercase tracking-wider px-3 py-1 rounded-full shadow-md flex items-center gap-1">
                  ★ Rekomendasi #1
                </span>
              )}
            </div>

            {/* Title & Metadata over Image Bottom */}
            <div className="absolute bottom-4 left-4 right-4 sm:left-6 sm:right-6">
              <div className="flex items-center gap-3 text-xs sm:text-sm text-neutral-200 mb-1.5 flex-wrap">
                <span className="flex items-center gap-1 text-amber-400 font-bold">
                  <Star className="w-4 h-4 fill-amber-400" />
                  {tour.rating}
                  <span className="text-neutral-300 font-normal">
                    ({tour.reviewsCount.toLocaleString()} ulasan)
                  </span>
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-[#f15d22]" />
                  {tour.duration}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-[#f15d22]" />
                  {tour.location}
                </span>
              </div>
              <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl text-white uppercase tracking-wide leading-tight drop-shadow-md">
                {tour.name}
              </h2>
            </div>
          </div>

          {/* Modal Body */}
          <div className="p-5 sm:p-7 space-y-6">
            {/* Price & Book Fast Strip */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-2xl bg-white/5 border border-white/10">
              <div>
                <div className="text-xs text-neutral-400 uppercase tracking-wider">Harga per Tamu</div>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl sm:text-3xl font-extrabold text-[#f15d22]">
                    ${tour.price}
                  </span>
                  {tour.originalPrice > tour.price && (
                    <span className="text-sm text-neutral-400 line-through">
                      ${tour.originalPrice}
                    </span>
                  )}
                  <span className="text-xs text-emerald-400 font-semibold bg-emerald-500/10 px-2 py-0.5 rounded-full">
                    Hemat ${tour.originalPrice - tour.price}
                  </span>
                </div>
              </div>
              <button
                onClick={() => {
                  onClose();
                  onBookNow(tour.name);
                }}
                className="inline-flex items-center justify-center gap-2 bg-[#f15d22] hover:bg-[#d84b13] text-white px-6 py-3 rounded-xl font-bold uppercase tracking-wider text-sm shadow-lg shadow-[#f15d22]/30 transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <span>PESAN TUR INI</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Highlights */}
            {tour.highlights && tour.highlights.length > 0 && (
              <div>
                <h3 className="text-xs font-bold uppercase tracking-widest text-[#f15d22] mb-3 flex items-center gap-1.5">
                  <Star className="w-3.5 h-3.5" />
                  Sorotan Utama Tur
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {tour.highlights.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2.5 p-3 rounded-xl bg-white/5 border border-white/5 text-xs sm:text-sm text-neutral-200"
                    >
                      <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Overview / Full Description */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-[#f15d22] mb-2">
                Gambaran Umum Pengalaman
              </h3>
              <p className="text-sm sm:text-base text-neutral-200 leading-relaxed font-normal">
                {tour.fullDescription || tour.description}
              </p>
            </div>

            {/* Included & Not Included Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-2">
              {/* Included */}
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2.5">
                <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4" />
                  Fasilitas Termasuk
                </h4>
                <ul className="space-y-2 text-xs sm:text-sm text-neutral-200">
                  {tour.included.map((inc, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-emerald-400 font-bold shrink-0">✓</span>
                      <span>{inc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Not Included */}
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2.5">
                <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400 flex items-center gap-1.5">
                  <XCircle className="w-4 h-4" />
                  Tidak Termasuk
                </h4>
                <ul className="space-y-2 text-xs sm:text-sm text-neutral-300">
                  {tour.notIncluded.map((notInc, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-neutral-500 font-bold shrink-0">✕</span>
                      <span>{notInc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Meeting Point */}
            {tour.meetingPoint && (
              <div className="p-4 rounded-2xl bg-[#f15d22]/10 border border-[#f15d22]/20 flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#f15d22] shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-[#f15d22]">
                    Titik Penjemputan &amp; Keberangkatan
                  </div>
                  <div className="text-sm text-neutral-100 mt-0.5">{tour.meetingPoint}</div>
                </div>
              </div>
            )}

            {/* Important Info */}
            {tour.importantInfo && tour.importantInfo.length > 0 && (
              <div>
                <h3 className="text-xs font-bold uppercase tracking-widest text-[#f5b324] mb-2.5 flex items-center gap-1.5">
                  <AlertCircle className="w-3.5 h-3.5" />
                  Informasi Penting Sebelum Berangkat
                </h3>
                <ul className="space-y-2 text-xs sm:text-sm text-neutral-300">
                  {tour.importantInfo.map((info, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-amber-400 font-bold shrink-0">•</span>
                      <span>{info}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Trust Footer */}
            <div className="pt-2 border-t border-white/10 flex items-center justify-between text-xs text-neutral-400">
              <span className="flex items-center gap-1 text-emerald-400 font-semibold">
                <ShieldCheck className="w-4 h-4" />
                Jaminan Harga Terbaik &amp; Pembatalan Fleksibel
              </span>
              <span>Go Tours Hawaii</span>
            </div>
          </div>
        </div>

        {/* Modal Bottom Actions Sticky */}
        <div className="p-4 bg-[#081528] border-t border-white/10 flex items-center justify-between gap-4">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl border border-white/20 text-neutral-300 hover:text-white hover:bg-white/10 text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
          >
            TUTUP
          </button>
          <button
            onClick={() => {
              onClose();
              onBookNow(tour.name);
            }}
            className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 bg-[#f15d22] hover:bg-[#d84b13] text-white px-8 py-2.5 rounded-xl font-bold uppercase tracking-wider text-xs sm:text-sm shadow-lg shadow-[#f15d22]/30 transition-all cursor-pointer"
          >
            <span>PESAN SEKARANG (${tour.price})</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

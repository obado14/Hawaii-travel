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
          aria-label="Close details"
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
                <span className="bg-[#f5b324] text-[#0c2340] text-xs font-extrabold uppercase tracking-wider px-3 py-1 rounded-full shadow-md">
                  ★ Most Popular
                </span>
              )}
            </div>

            {/* Bottom Info Row on Image */}
            <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-center justify-between gap-2 text-xs sm:text-sm font-semibold text-white">
              <div className="flex items-center gap-2">
                <span className="flex items-center gap-1.5 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
                  <Clock className="w-4 h-4 text-[#f5b324]" />
                  {tour.duration}
                </span>
                <span className="flex items-center gap-1.5 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
                  <MapPin className="w-4 h-4 text-[#f15d22]" />
                  {tour.location}
                </span>
              </div>

              <span className="flex items-center gap-1.5 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
                <Star className="w-4 h-4 fill-[#f5b324] text-[#f5b324]" />
                <span className="font-bold text-white">{tour.rating}</span>
                <span className="text-neutral-300">({tour.reviewsCount} reviews)</span>
              </span>
            </div>
          </div>

          {/* Modal Body Content */}
          <div className="p-6 sm:p-8 space-y-7">
            {/* Title & Pricing Summary */}
            <div className="border-b border-white/10 pb-5 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-white uppercase tracking-wide leading-tight">
                  {tour.name}
                </h2>
                <p className="text-neutral-300 text-sm mt-1">
                  Guaranteed departure with certified local guides
                </p>
              </div>

              <div className="text-left md:text-right shrink-0">
                <span className="text-xs text-neutral-400 font-medium line-through">
                  ${tour.originalPrice}
                </span>
                <div className="text-3xl sm:text-4xl font-heading font-extrabold text-[#f5b324] leading-none">
                  ${tour.price}
                </div>
                <span className="text-xs text-neutral-300 font-medium">per person</span>
              </div>
            </div>

            {/* Detailed Description */}
            <div>
              <h3 className="font-heading text-lg sm:text-xl font-bold text-[#f15d22] uppercase tracking-wider mb-2">
                OVERVIEW
              </h3>
              <p className="text-neutral-200 text-sm sm:text-base leading-relaxed font-normal">
                {tour.fullDescription || tour.description}
              </p>
            </div>

            {/* Highlights */}
            <div>
              <h3 className="font-heading text-lg sm:text-xl font-bold text-[#f15d22] uppercase tracking-wider mb-3">
                TOUR HIGHLIGHTS
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {tour.highlights.map((h, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2.5 p-3 rounded-xl bg-white/5 border border-white/10 text-xs sm:text-sm text-neutral-200"
                  >
                    <CheckCircle className="w-4 h-4 text-[#f5b324] shrink-0" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* What's Included & What's Not Included */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Included */}
              <div className="p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 space-y-3">
                <h4 className="font-heading text-base font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" /> What&apos;s Included
                </h4>
                <ul className="space-y-2 text-xs sm:text-sm text-neutral-200">
                  {tour.included.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-emerald-400 font-bold shrink-0">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Not Included */}
              <div className="p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 space-y-3">
                <h4 className="font-heading text-base font-bold text-red-400 uppercase tracking-wider flex items-center gap-2">
                  <XCircle className="w-4 h-4" /> What&apos;s Not Included
                </h4>
                <ul className="space-y-2 text-xs sm:text-sm text-neutral-300">
                  {tour.notIncluded.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-red-400 font-bold shrink-0">✕</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Meeting Point & Departure */}
            <div className="p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 space-y-2">
              <h4 className="font-heading text-base font-bold text-[#f5b324] uppercase tracking-wider flex items-center gap-2">
                <MapPin className="w-4 h-4" /> Meeting &amp; Pickup Point
              </h4>
              <p className="text-xs sm:text-sm text-neutral-200 leading-relaxed">
                {tour.meetingPoint}
              </p>
            </div>

            {/* Important Information */}
            <div className="p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/10 space-y-2.5">
              <h4 className="font-heading text-base font-bold text-amber-400 uppercase tracking-wider flex items-center gap-2">
                <AlertCircle className="w-4 h-4" /> Important Information
              </h4>
              <ul className="space-y-1.5 text-xs sm:text-sm text-neutral-300">
                {tour.importantInfo.map((info, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-amber-400">•</span>
                    <span>{info}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Guarantee Policy Badge */}
            <div className="flex items-center gap-2.5 text-xs text-neutral-300 bg-white/5 p-3 rounded-xl border border-white/10">
              <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
              <span>
                <strong>100% Satisfaction Guarantee:</strong> Full refunds for weather cancellations. Free 48-hour cancellation policy.
              </span>
            </div>
          </div>
        </div>

        {/* Modal Sticky Bottom Action Bar */}
        <div className="p-4 sm:p-5 border-t border-white/15 bg-[#081528] flex items-center justify-between gap-4">
          <div>
            <span className="text-xs text-neutral-400">Total Price:</span>
            <div className="flex items-baseline gap-1.5">
              <span className="text-2xl sm:text-3xl font-heading font-extrabold text-[#f5b324]">
                ${tour.price}
              </span>
              <span className="text-xs text-neutral-300">/ guest</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs sm:text-sm transition-colors cursor-pointer"
            >
              Close
            </button>

            <button
              onClick={() => {
                onClose();
                onBookNow(tour.name);
              }}
              className="px-7 sm:px-8 py-3 rounded-xl bg-[#f15d22] hover:bg-[#d84b13] text-white font-heading text-base font-bold uppercase tracking-wider shadow-xl shadow-[#f15d22]/40 transition-all flex items-center gap-2 cursor-pointer transform hover:scale-105 active:scale-95"
            >
              <span>BOOK NOW</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

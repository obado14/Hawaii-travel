"use client";

import React, { useState } from "react";
import { X, Calendar, Users, Check, Sparkles, Phone } from "lucide-react";

interface BookingDialogProps {
  isOpen: boolean;
  onClose: () => void;
  defaultTour?: string;
}

export function BookingDialog({ isOpen, onClose, defaultTour }: BookingDialogProps) {
  const [tour, setTour] = useState(defaultTour || "Circle Island Tour");
  const [date, setDate] = useState("");
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [confirmed, setConfirmed] = useState(false);

  if (!isOpen) return null;

  const priceMap: Record<string, number> = {
    "Circle Island Tour": 149,
    "Hawaiian Luau": 179,
    "Pearl Harbor Tour": 119,
    "Diamond Head Shuttle": 45,
    "Waikiki Turtle Canyon Snorkeling": 129,
  };

  const basePrice = priceMap[tour] || 149;
  const rawTotal = adults * basePrice + children * (basePrice * 0.75);
  const discount = rawTotal * 0.1; // 10% Off Special
  const total = rawTotal - discount;

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    setConfirmed(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-lg bg-[#0c1f38] border border-white/20 rounded-3xl shadow-2xl p-6 sm:p-8 text-white overflow-hidden animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-neutral-400 hover:text-white rounded-full bg-white/5 hover:bg-white/10 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {confirmed ? (
          <div className="text-center py-8 space-y-4 animate-in fade-in">
            <div className="w-16 h-16 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center mx-auto border border-green-500/30">
              <Check className="w-8 h-8" />
            </div>
            <h3 className="font-heading text-3xl font-bold text-white">RESERVATION CONFIRMED!</h3>
            <p className="text-neutral-300 text-sm leading-relaxed max-w-sm mx-auto">
              Mahalo, <strong className="text-white">{fullName}</strong>! We have sent your booking details,
              hotel pickup time, and 10% discount receipt to <strong className="text-white">{email}</strong>.
            </p>
            <div className="p-4 bg-white/5 rounded-xl border border-white/10 text-xs text-neutral-300">
              Need immediate help? Call us 7 days a week at{" "}
              <a href="tel:808-926-3090" className="text-[#f15d22] font-bold underline">
                808-926-3090
              </a>
            </div>
            <button
              onClick={() => {
                setConfirmed(false);
                onClose();
              }}
              className="mt-4 px-6 py-2.5 bg-[#f15d22] hover:bg-[#d84b13] text-white rounded-lg font-bold uppercase text-sm tracking-wider cursor-pointer"
            >
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={handleBooking} className="space-y-4">
            <div className="flex items-center gap-2 text-[#f5b324] text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-4 h-4" />
              <span>Special Online Promotion: 10% Off Applied</span>
            </div>

            <h3 className="font-heading text-3xl font-bold text-white uppercase tracking-wide leading-none">
              BOOK YOUR HAWAII TOUR
            </h3>

            {/* Tour Selection */}
            <div>
              <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-1">
                Select Experience
              </label>
              <select
                value={tour}
                onChange={(e) => setTour(e.target.value)}
                className="w-full bg-[#081528] border border-white/20 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#f15d22]"
              >
                <option value="Circle Island Tour">Circle Island Tour (Hidden Gems) - $149</option>
                <option value="Hawaiian Luau">Hawaiian Luau Feast &amp; Show - $179</option>
                <option value="Pearl Harbor Tour">Pearl Harbor &amp; USS Arizona - $119</option>
                <option value="Diamond Head Shuttle">Diamond Head Shuttle Pass - $45</option>
                <option value="Waikiki Turtle Canyon Snorkeling">
                  Waikiki Turtle Canyon Snorkeling - $129
                </option>
              </select>
            </div>

            {/* Date and Guests */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-1">
                  Tour Date
                </label>
                <input
                  type="date"
                  required
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full bg-[#081528] border border-white/20 rounded-xl px-3 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#f15d22]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-1">
                  Adults (12+)
                </label>
                <input
                  type="number"
                  min="1"
                  max="20"
                  value={adults}
                  onChange={(e) => setAdults(parseInt(e.target.value) || 1)}
                  className="w-full bg-[#081528] border border-white/20 rounded-xl px-3 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#f15d22]"
                />
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-3 pt-1">
              <input
                type="text"
                required
                placeholder="Full Name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full bg-[#081528] border border-white/20 rounded-xl px-3.5 py-2 text-sm text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#f15d22]"
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  type="email"
                  required
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-[#081528] border border-white/20 rounded-xl px-3.5 py-2 text-sm text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#f15d22]"
                />
                <input
                  type="tel"
                  required
                  placeholder="Phone Number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-[#081528] border border-white/20 rounded-xl px-3.5 py-2 text-sm text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#f15d22]"
                />
              </div>
            </div>

            {/* Price Breakdown */}
            <div className="bg-[#081528]/80 rounded-xl p-3.5 border border-white/10 flex items-center justify-between">
              <div>
                <div className="text-xs text-neutral-400">Total with 10% Discount:</div>
                <div className="text-xs text-emerald-400 font-semibold line-through">
                  Regular: ${rawTotal.toFixed(2)}
                </div>
              </div>
              <div className="text-2xl font-extrabold text-[#f5b324] font-heading">
                ${total.toFixed(2)}
              </div>
            </div>

            {/* Submit CTA */}
            <button
              type="submit"
              className="w-full bg-[#f15d22] hover:bg-[#d84b13] text-white font-heading text-xl font-bold uppercase tracking-wider py-3 rounded-xl shadow-xl shadow-[#f15d22]/30 transition-all cursor-pointer"
            >
              COMPLETE BOOKING
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

"use client";

import React, { useState } from "react";
import Image from "next/image";
import { TopBar } from "@/components/sites/gotourshawaii/root/top-bar";
import { Navbar } from "@/components/sites/gotourshawaii/root/navbar";
import { Footer } from "@/components/sites/gotourshawaii/root/footer";
import { BookingDialog } from "@/components/sites/gotourshawaii/root/booking-dialog";
import { CtaBanner } from "@/components/sites/gotourshawaii/root/cta-banner";
import { Users, Shield, Calendar, MapPin, Sparkles, CheckCircle, Phone } from "lucide-react";

export default function PrivateToursPage() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [quoteSent, setQuoteSent] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-[#0c1f38] text-white selection:bg-[#f15d22] selection:text-white">
      <TopBar />
      <Navbar onOpenBooking={() => setBookingOpen(true)} />

      <main className="flex-1">
        {/* Hero */}
        <section className="relative w-full min-h-[460px] sm:min-h-[520px] md:min-h-[560px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/sites/gotourshawaii/root/81.jpg"
              alt="Waimea Waterfall Private Tour Hawaii"
              fill
              priority
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0c1f38]/70 via-black/40 to-[#0c1f38]/85" />
          </div>

          <div className="relative z-10 max-w-4xl mx-auto px-4 text-center pt-12 pb-28 sm:pb-36 md:pb-44">
            <div className="inline-flex items-center gap-2 mb-3 px-4 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/15">
              <Sparkles className="w-4 h-4 text-[#f5b324]" />
              <span className="text-xs font-bold text-[#f5b324] uppercase tracking-widest">
                VIP Custom Charters &amp; Private Guides
              </span>
            </div>
            <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl text-white uppercase tracking-wider mb-3 leading-none">
              OAHU &amp; MAUI PRIVATE TOURS
            </h1>
            <p className="max-w-2xl mx-auto text-sm sm:text-base text-neutral-200">
              Your island adventure on your own schedule. Luxurious vehicles, personalized stops, and dedicated private local guides.
            </p>
          </div>

          <div className="absolute bottom-0 inset-x-0 w-full pointer-events-none z-20 translate-y-0.5 overflow-hidden">
            <div className="relative w-full h-24 sm:h-32 md:h-40 lg:h-44">
              <Image
                src="/sites/gotourshawaii/root/banner-divider-optimized-002.png"
                alt="Polynesian mountain divider"
                fill
                className="object-cover object-top"
                priority
              />
            </div>
          </div>
        </section>

        {/* Benefits Grid */}
        <section className="bg-[#f5f0e8] text-neutral-900 py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-xs font-bold text-[#f15d22] uppercase tracking-widest block mb-1">
                Custom Tailored For You
              </span>
              <h2 className="font-heading text-3xl sm:text-5xl text-[#0c2340] uppercase leading-none">
                THE ULTIMATE PRIVATE ISLAND EXPERIENCE
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-7 shadow-lg border border-neutral-200/80">
                <div className="w-12 h-12 rounded-xl bg-[#f15d22]/15 text-[#f15d22] flex items-center justify-center mb-4">
                  <Calendar className="w-6 h-6" />
                </div>
                <h3 className="font-heading text-2xl text-[#0c2340] uppercase mb-2">
                  100% FLEXIBLE ITINERARY
                </h3>
                <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed">
                  Stay as long as you want at Waimea Waterfall, stop at your favorite food trucks, or linger on a secluded beach. You set the pace.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-7 shadow-lg border border-neutral-200/80">
                <div className="w-12 h-12 rounded-xl bg-[#f15d22]/15 text-[#f15d22] flex items-center justify-center mb-4">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="font-heading text-2xl text-[#0c2340] uppercase mb-2">
                  EXCLUSIVE TO YOUR GROUP
                </h3>
                <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed">
                  Only your family or friends in our spacious, air-conditioned Mercedes Sprinter or luxury SUV. Door-to-door hotel pickup included.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-7 shadow-lg border border-neutral-200/80">
                <div className="w-12 h-12 rounded-xl bg-[#f15d22]/15 text-[#f15d22] flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6" />
                </div>
                <h3 className="font-heading text-2xl text-[#0c2340] uppercase mb-2">
                  TOP-TIER LOCAL GUIDE
                </h3>
                <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed">
                  Benefit from a personal native guide with deep knowledge of Hawaiian history, culture, photography spots, and secret island locations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Custom Quote Form & Call */}
        <section className="bg-[#081d38] text-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-t border-white/10">
          <div className="max-w-4xl mx-auto bg-white/5 border border-white/10 rounded-3xl p-8 sm:p-12 backdrop-blur-md">
            <div className="text-center max-w-xl mx-auto mb-8">
              <h2 className="font-heading text-3xl sm:text-5xl text-[#f5b324] uppercase tracking-wider mb-2">
                REQUEST A PRIVATE TOUR QUOTE
              </h2>
              <p className="text-neutral-300 text-xs sm:text-sm">
                Fill out the details below or call our private events team directly at{" "}
                <a href="tel:808-926-3090" className="text-[#f15d22] font-bold underline">
                  808-926-3090
                </a>
                .
              </p>
            </div>

            {quoteSent ? (
              <div className="text-center py-8 space-y-3">
                <div className="w-16 h-16 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="font-heading text-2xl text-white">QUOTE REQUEST RECEIVED!</h3>
                <p className="text-sm text-neutral-300">
                  Our private tour concierge will reach out within 2 hours with customized options and pricing.
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setQuoteSent(true);
                }}
                className="space-y-4"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase font-semibold text-neutral-300 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Jane Doe"
                      className="w-full bg-[#0c1f38] border border-white/20 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#f15d22]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase font-semibold text-neutral-300 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+1 (808) 000-0000"
                      className="w-full bg-[#0c1f38] border border-white/20 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#f15d22]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs uppercase font-semibold text-neutral-300 mb-1">
                      Estimated Date *
                    </label>
                    <input
                      type="date"
                      required
                      className="w-full bg-[#0c1f38] border border-white/20 rounded-xl px-3 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#f15d22]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase font-semibold text-neutral-300 mb-1">
                      Group Size *
                    </label>
                    <input
                      type="number"
                      min="1"
                      defaultValue="4"
                      className="w-full bg-[#0c1f38] border border-white/20 rounded-xl px-3 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#f15d22]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase font-semibold text-neutral-300 mb-1">
                      Island *
                    </label>
                    <select className="w-full bg-[#0c1f38] border border-white/20 rounded-xl px-3 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#f15d22]">
                      <option value="Oahu">Oahu</option>
                      <option value="Maui">Maui</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase font-semibold text-neutral-300 mb-1">
                    Special Requests or Desired Destinations
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Tell us about what you want to see (e.g. North Shore, Pearl Harbor, waterfalls, photography stops)..."
                    className="w-full bg-[#0c1f38] border border-white/20 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#f15d22] resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#f15d22] hover:bg-[#d84b13] text-white font-heading text-lg font-bold uppercase tracking-wider py-3 rounded-xl shadow-xl shadow-[#f15d22]/30 transition-all cursor-pointer"
                >
                  SUBMIT PRIVATE TOUR INQUIRY
                </button>
              </form>
            )}
          </div>
        </section>

        <CtaBanner onBookNow={() => setBookingOpen(true)} />
      </main>

      <Footer />

      <BookingDialog
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
        defaultTour="Circle Island Tour"
      />
    </div>
  );
}

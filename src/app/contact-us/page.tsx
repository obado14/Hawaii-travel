"use client";

import React, { useState } from "react";
import Image from "next/image";
import { TopBar } from "@/components/sites/gotourshawaii/root/top-bar";
import { Navbar } from "@/components/sites/gotourshawaii/root/navbar";
import { Footer } from "@/components/sites/gotourshawaii/root/footer";
import { BookingDialog } from "@/components/sites/gotourshawaii/root/booking-dialog";
import { FAQSection } from "@/components/sites/gotourshawaii/root/faq-section";
import { MapPin, Phone, Clock, Mail, CheckCircle2, Sparkles } from "lucide-react";

export default function ContactUsPage() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "Oahu Island Tours",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#0c1f38] text-white selection:bg-[#f15d22] selection:text-white">
      <TopBar />
      <Navbar onOpenBooking={() => setBookingOpen(true)} />

      <main className="flex-1">
        {/* Hero */}
        <section className="relative w-full min-h-[440px] sm:min-h-[480px] md:min-h-[520px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/sites/gotourshawaii/root/contact-us-hero-img.png"
              alt="Hawaii Coastal Waves and Mountains"
              fill
              priority
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0c1f38]/50 via-black/25 to-[#0c1f38]/75" />
          </div>

          <div className="relative z-10 max-w-4xl mx-auto px-4 text-center pt-14 pb-16 sm:pb-20 md:pb-24">
            <div className="inline-flex items-center gap-2 mb-3.5 px-4 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/20 shadow-sm">
              <Sparkles className="w-4 h-4 text-[#f5b324]" />
              <span className="text-xs font-bold text-[#f5b324] uppercase tracking-widest">
                We Are Here For You 7 Days a Week
              </span>
            </div>
            <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl text-white uppercase tracking-wider mb-3 leading-none drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]">
              CONTACT US
            </h1>
            <p className="max-w-2xl mx-auto text-sm sm:text-base text-neutral-100 drop-shadow-[0_1px_4px_rgba(0,0,0,0.6)] font-normal leading-relaxed">
              Have questions about hotel pickups, custom private tours, or reservations? Speak directly with our friendly local Oahu team.
            </p>
          </div>

          <div className="absolute bottom-0 inset-x-0 w-full pointer-events-none z-20 translate-y-0.5 overflow-hidden">
            <div className="relative w-full h-14 sm:h-18 md:h-22 lg:h-24">
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

        {/* Contact Form & Information - Compact vertical spacing before FAQ */}
        <section className="bg-[#f5f0e8] text-neutral-900 pt-10 sm:pt-12 pb-12 sm:pb-14 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
              {/* Form (Col 7) */}
              <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 md:p-9 shadow-xl border border-neutral-200/80">
                <span className="text-xs font-bold text-[#f15d22] uppercase tracking-widest block mb-1.5">
                  Send Us a Direct Message
                </span>
                <h2 className="font-heading text-3xl sm:text-4xl text-[#0c2340] uppercase mb-5 leading-tight">
                  HOW CAN WE HELP YOU?
                </h2>

                {submitted ? (
                  <div className="text-center py-10 space-y-4 animate-in fade-in duration-300">
                    <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="font-heading text-2xl sm:text-3xl font-bold text-[#0c2340]">
                      MAHALO FOR YOUR INQUIRY!
                    </h3>
                    <p className="text-neutral-600 text-sm max-w-sm mx-auto">
                      Your message has been delivered to our guest services desk. We will get back to you within a few hours!
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-3 px-6 py-2.5 bg-[#f15d22] text-white rounded-xl text-sm font-semibold hover:bg-[#d84b13] transition-colors cursor-pointer"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold uppercase text-neutral-700 mb-1.5">
                          Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="John Doe"
                          className="w-full bg-[#f8f9fa] border border-neutral-300 hover:border-neutral-400 rounded-xl px-4 py-2.5 text-sm text-neutral-800 placeholder-neutral-400 focus:outline-none focus:bg-white focus:border-[#f15d22] focus:ring-2 focus:ring-[#f15d22]/30 transition-all duration-200"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold uppercase text-neutral-700 mb-1.5">
                          Contact Number <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+1 (808) 000-0000"
                          className="w-full bg-[#f8f9fa] border border-neutral-300 hover:border-neutral-400 rounded-xl px-4 py-2.5 text-sm text-neutral-800 placeholder-neutral-400 focus:outline-none focus:bg-white focus:border-[#f15d22] focus:ring-2 focus:ring-[#f15d22]/30 transition-all duration-200"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold uppercase text-neutral-700 mb-1.5">
                          Email <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="youremail@company.com"
                          className="w-full bg-[#f8f9fa] border border-neutral-300 hover:border-neutral-400 rounded-xl px-4 py-2.5 text-sm text-neutral-800 placeholder-neutral-400 focus:outline-none focus:bg-white focus:border-[#f15d22] focus:ring-2 focus:ring-[#f15d22]/30 transition-all duration-200"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold uppercase text-neutral-700 mb-1.5">
                          Services <span className="text-red-500">*</span>
                        </label>
                        <select
                          value={formData.service}
                          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                          className="w-full bg-[#f8f9fa] border border-neutral-300 hover:border-neutral-400 rounded-xl px-4 py-2.5 text-sm text-neutral-800 focus:outline-none focus:bg-white focus:border-[#f15d22] focus:ring-2 focus:ring-[#f15d22]/30 transition-all duration-200 cursor-pointer"
                        >
                          <option value="Oahu Island Tours">Oahu Island Tours</option>
                          <option value="Pearl Harbor Tours">Pearl Harbor Tours</option>
                          <option value="Hawaiian Luau">Hawaiian Luau</option>
                          <option value="Diamond Head Shuttle">Diamond Head Shuttle</option>
                          <option value="Waikiki Turtle Canyon">Waikiki Turtle Canyon</option>
                          <option value="Private Custom Tour">Private Custom Tour</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase text-neutral-700 mb-1.5">
                        Message
                      </label>
                      <textarea
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Write your questions or special requests..."
                        className="w-full bg-[#f8f9fa] border border-neutral-300 hover:border-neutral-400 rounded-xl px-4 py-2.5 text-sm text-neutral-800 placeholder-neutral-400 focus:outline-none focus:bg-white focus:border-[#f15d22] focus:ring-2 focus:ring-[#f15d22]/30 transition-all duration-200 resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="bg-[#f15d22] hover:bg-[#d84b13] text-white font-heading text-lg font-bold uppercase tracking-wider px-8 py-3.5 rounded-xl shadow-lg shadow-[#f15d22]/25 hover:shadow-xl hover:shadow-[#f15d22]/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer"
                    >
                      SUBMIT MESSAGE
                    </button>
                  </form>
                )}
              </div>

              {/* Details & Map (Col 5) */}
              <div className="lg:col-span-5 space-y-6">
                <div className="bg-[#081d38] text-white rounded-3xl p-6 sm:p-7 shadow-xl border border-white/10">
                  <h3 className="font-heading text-2xl sm:text-3xl text-[#f5b324] uppercase tracking-wide mb-5">
                    GET IN TOUCH
                  </h3>

                  <div className="space-y-4 text-sm text-neutral-200">
                    <div className="flex items-start gap-3.5">
                      <MapPin className="w-5 h-5 text-[#f15d22] shrink-0 mt-0.5" />
                      <div>
                        <strong className="block text-white">Waikiki Office:</strong>
                        <span>2500 Kalakaua Ave Suite E, Honolulu, Hawaii 96815</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-3.5">
                      <Phone className="w-5 h-5 text-[#f15d22] shrink-0 mt-0.5" />
                      <div>
                        <strong className="block text-white">Telephone:</strong>
                        <a href="tel:808-926-3090" className="hover:text-white underline">
                          808-926-3090
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3.5">
                      <Clock className="w-5 h-5 text-[#f15d22] shrink-0 mt-0.5" />
                      <div>
                        <strong className="block text-white">Hours of Operation:</strong>
                        <span>6:00 AM – 9:00 PM HST, Open 7 Days a Week!</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-3.5">
                      <Mail className="w-5 h-5 text-[#f15d22] shrink-0 mt-0.5" />
                      <div>
                        <strong className="block text-white">Email Address:</strong>
                        <a href="mailto:info@gotourshawaii.com" className="hover:text-white underline">
                          info@gotourshawaii.com
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Map Card - Enlarged illustration & Prominent label */}
                <div className="bg-white rounded-3xl p-6 sm:p-7 shadow-xl border border-neutral-200 text-center">
                  <span className="text-xs sm:text-sm font-extrabold uppercase text-[#0c2340] tracking-wider block mb-2">
                    Headquarters Location
                  </span>
                  <div className="relative h-44 sm:h-48 w-full flex items-center justify-center group overflow-hidden">
                    <Image
                      src="/sites/gotourshawaii/root/location.png"
                      alt="Oahu Island Map"
                      width={317}
                      height={236}
                      className="w-auto h-40 sm:h-44 object-contain filter brightness-105 transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <p className="text-xs sm:text-sm text-neutral-600 font-medium mt-2 leading-relaxed">
                    Conveniently located directly along Kalakaua Avenue in Waikiki.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <FAQSection />
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

"use client";

import React, { useState } from "react";
import Image from "next/image";
import { MapPin, Phone, Clock, Mail, CheckCircle2 } from "lucide-react";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "Oahu Island Tours",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setIsSubmitted(true);
  };

  return (
    <section id="contact" className="relative bg-[#081d38] py-16 sm:py-20 px-4 sm:px-6 lg:px-8 text-white overflow-hidden border-t border-white/10">
      {/* Background Texture */}
      <div className="absolute inset-0 opacity-15 pointer-events-none">
        <Image
          src="/sites/gotourshawaii/root/optimized-bg-texture-002.jpg"
          alt="Texture"
          fill
          className="object-cover"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Form Card (Left Column - 7 cols) */}
          <div className="lg:col-span-7 bg-white text-neutral-900 rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl border border-neutral-100">
            {isSubmitted ? (
              <div className="text-center py-12 space-y-4 animate-in fade-in duration-300">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-heading text-3xl font-bold text-[#0c2340]">
                  MAHALO FOR REACHING OUT!
                </h3>
                <p className="text-neutral-600 text-base max-w-sm mx-auto">
                  We have received your message and one of our local tour specialists will contact you shortly.
                </p>
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({
                      name: "",
                      phone: "",
                      email: "",
                      service: "Oahu Island Tours",
                      message: "",
                    });
                  }}
                  className="mt-4 px-7 py-2.5 bg-[#f15d22] text-white rounded-xl text-sm font-semibold hover:bg-[#d84b13] transition-colors cursor-pointer"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-2">
                      Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="John Doe"
                      className="w-full bg-[#f8f9fa] border border-neutral-300 rounded-xl px-4 py-3 text-base text-neutral-800 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#f15d22] focus:border-transparent transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-2">
                      Contact Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+123 456 7890"
                      className="w-full bg-[#f8f9fa] border border-neutral-300 rounded-xl px-4 py-3 text-base text-neutral-800 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#f15d22] focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-2">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="youremail@company.com"
                      className="w-full bg-[#f8f9fa] border border-neutral-300 rounded-xl px-4 py-3 text-base text-neutral-800 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#f15d22] focus:border-transparent transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-2">
                      Services <span className="text-red-500">*</span>
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full bg-[#f8f9fa] border border-neutral-300 rounded-xl px-4 py-3 text-base text-neutral-800 focus:outline-none focus:ring-2 focus:ring-[#f15d22] focus:border-transparent transition-all"
                    >
                      <option value="Oahu Island Tours">Oahu Island Tours</option>
                      <option value="Pearl Harbor Tours">Pearl Harbor Tours</option>
                      <option value="Hawaiian Luau">Hawaiian Luau</option>
                      <option value="Diamond Head Shuttle">Diamond Head Shuttle</option>
                      <option value="Private Custom Tour">Private Custom Tour</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-2">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your travel dates and group..."
                    className="w-full bg-[#f8f9fa] border border-neutral-300 rounded-xl px-4 py-3 text-base text-neutral-800 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#f15d22] focus:border-transparent transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-auto bg-[#f15d22] hover:bg-[#d84b13] text-white font-heading text-xl font-bold uppercase tracking-wider px-10 py-3.5 rounded-xl shadow-xl shadow-[#f15d22]/30 transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
                >
                  SUBMIT
                </button>
              </form>
            )}
          </div>

          {/* Contact Details (Right Column - 5 cols) */}
          <div className="lg:col-span-5 space-y-7 lg:pl-4">
            <div>
              <span className="inline-block text-xs sm:text-sm font-bold text-[#f15d22] uppercase tracking-widest bg-[#f15d22]/15 border border-[#f15d22]/30 px-3.5 py-1 rounded-full mb-3 shadow-sm">
                PLAN YOUR TRIP
              </span>
              <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl text-[#f5b324] uppercase tracking-wider mb-4 leading-tight">
                CONTACT US
              </h2>

              <p className="text-neutral-200 text-base sm:text-lg leading-relaxed font-normal">
                Got questions or need assistance? Contact us today! Our friendly team is here to help with
                any inquiries, booking details, or special requests you may have.
              </p>
            </div>

            <div className="space-y-5 pt-1">
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-[#f15d22] shrink-0 mt-0.5" />
                <span className="text-base text-neutral-100 font-medium">
                  2500 Kalakaua Ave Suite E Honolulu, Hawaii 96815
                </span>
              </div>

              <div className="flex items-center gap-4">
                <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-[#f15d22] shrink-0" />
                <a
                  href="tel:808-926-3090"
                  className="text-base text-neutral-100 font-medium hover:text-[#f5b324] transition-colors"
                >
                  808-926-3090
                </a>
              </div>

              <div className="flex items-center gap-4">
                <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-[#f15d22] shrink-0" />
                <span className="text-base text-neutral-100 font-medium">
                  6am-9pm HST, Available <strong className="text-white">7 days a week!</strong>
                </span>
              </div>

              <div className="flex items-center gap-4">
                <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-[#f15d22] shrink-0" />
                <a
                  href="mailto:info@gotourshawaii.com"
                  className="text-base text-neutral-100 font-medium hover:text-[#f5b324] transition-colors"
                >
                  info@gotourshawaii.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

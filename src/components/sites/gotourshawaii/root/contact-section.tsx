"use client";

import React, { useState } from "react";
import Image from "next/image";
import { MapPin, Phone, Clock, Mail, CheckCircle2, Sparkles } from "lucide-react";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "Tur Keliling Pulau Oahu",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorField, setErrorField] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim()) {
      setErrorField("name");
      return;
    }
    if (!formData.email.trim() || !formData.email.includes("@")) {
      setErrorField("email");
      return;
    }
    setErrorField(null);
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  return (
    <section id="contact" className="relative bg-[#081d38] py-16 sm:py-20 px-4 sm:px-6 lg:px-8 text-white overflow-hidden border-t border-white/10">
      {/* Background Texture */}
      <div className="absolute inset-0 opacity-15 pointer-events-none">
        <Image
          src="/sites/gotourshawaii/root/optimized-bg-texture-002.jpg"
          alt="Tekstur Latar Belakang"
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
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto shadow-md">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-heading text-3xl font-bold text-[#0c2340]">
                  MAHALO ATAS PERTANYAAN ANDA!
                </h3>
                <p className="text-neutral-600 text-base max-w-sm mx-auto leading-relaxed">
                  Pesan Anda telah kami terima. Tim pemandu wisata lokal kami akan segera menghubungi Anda dalam 1 hari kerja.
                </p>
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({
                      name: "",
                      phone: "",
                      email: "",
                      service: "Tur Keliling Pulau Oahu",
                      message: "",
                    });
                  }}
                  className="mt-4 px-7 py-2.5 bg-[#f15d22] text-white rounded-xl text-sm font-semibold hover:bg-[#d84b13] transition-colors cursor-pointer"
                >
                  Kirim Pesan Lain
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="mb-2">
                  <span className="text-xs font-bold text-[#f15d22] uppercase tracking-widest block mb-1">
                    Kirim Pesan Langsung
                  </span>
                  <h3 className="font-heading text-2xl sm:text-3xl font-bold text-[#0c2340] uppercase">
                    KONSULTASI PERJALANAN HAWAII
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-2">
                      Nama Lengkap <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value });
                        if (errorField === "name") setErrorField(null);
                      }}
                      placeholder="Budi Santoso"
                      className={`w-full bg-[#f8f9fa] focus:bg-white border rounded-xl px-4 py-3 text-sm text-neutral-800 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#f15d22] focus:border-transparent transition-all duration-200 ${
                        errorField === "name" ? "border-red-500 ring-1 ring-red-500" : "border-neutral-300"
                      }`}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-2">
                      Nomor Telepon / WhatsApp <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+62 812-3456-7890"
                      className="w-full bg-[#f8f9fa] focus:bg-white border border-neutral-300 rounded-xl px-4 py-3 text-sm text-neutral-800 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#f15d22] focus:border-transparent transition-all duration-200"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-2">
                      Alamat Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (errorField === "email") setErrorField(null);
                      }}
                      placeholder="nama@email.com"
                      className={`w-full bg-[#f8f9fa] focus:bg-white border rounded-xl px-4 py-3 text-sm text-neutral-800 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#f15d22] focus:border-transparent transition-all duration-200 ${
                        errorField === "email" ? "border-red-500 ring-1 ring-red-500" : "border-neutral-300"
                      }`}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-2">
                      Pilihan Layanan <span className="text-red-500">*</span>
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full bg-[#f8f9fa] focus:bg-white border border-neutral-300 rounded-xl px-4 py-3 text-sm text-neutral-800 focus:outline-none focus:ring-2 focus:ring-[#f15d22] focus:border-transparent transition-all duration-200 cursor-pointer"
                    >
                      <option value="Tur Keliling Pulau Oahu">Tur Keliling Pulau Oahu</option>
                      <option value="Tur Pearl Harbor">Tur Bersejarah Pearl Harbor</option>
                      <option value="Pesta Luau Hawaii">Pesta Tradisional Luau</option>
                      <option value="Shuttle Diamond Head">Shuttle Diamond Head</option>
                      <option value="Tur Privat Kustom">Tur Privat Kustom</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-2">
                    Pesan Anda
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tuliskan perkiraan tanggal liburan dan rencana grup Anda di sini..."
                    className="w-full bg-[#f8f9fa] focus:bg-white border border-neutral-300 rounded-xl px-4 py-3 text-sm text-neutral-800 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#f15d22] focus:border-transparent transition-all duration-200 resize-none"
                  />
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pt-1">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto bg-[#f15d22] hover:bg-[#d84b13] text-white font-heading text-lg sm:text-xl font-bold uppercase tracking-wider px-10 py-3.5 sm:py-4 rounded-xl shadow-xl shadow-[#f15d22]/30 hover:shadow-2xl hover:shadow-[#f15d22]/50 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer disabled:opacity-75 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin shrink-0" />
                        <span>MENGIRIM PESAN...</span>
                      </>
                    ) : (
                      <span>KIRIM PESAN SEKARANG</span>
                    )}
                  </button>
                  <span className="text-xs text-neutral-500">Respon dalam 1 hari kerja</span>
                </div>
              </form>
            )}
          </div>

          {/* Contact Details (Right Column - 5 cols) */}
          <div className="lg:col-span-5 space-y-7 lg:pl-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#f15d22]/15 border border-[#f15d22]/30 mb-3 shadow-xs">
                <Sparkles className="w-3.5 h-3.5 text-[#f15d22]" />
                <span className="text-xs sm:text-sm font-bold text-[#f15d22] uppercase tracking-widest">
                  RENCANAKAN PERJALANAN ANDA
                </span>
              </div>
              <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl text-[#f5b324] uppercase tracking-wider mb-4 leading-tight">
                HUBUNGI KAMI
              </h2>

              <p className="text-neutral-200 text-base sm:text-lg leading-relaxed font-normal">
                Punya pertanyaan seputar reservasi atau kebutuhan penjemputan hotel? Tim lokal kami yang ramah siap membantu Anda mewujudkan liburan impian di Hawaii.
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
                  06.00 – 21.00 HST, Buka <strong className="text-white">7 hari seminggu!</strong>
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

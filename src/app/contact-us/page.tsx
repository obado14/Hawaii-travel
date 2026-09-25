"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { TopBar } from "@/components/sites/gotourshawaii/root/top-bar";
import { Navbar } from "@/components/sites/gotourshawaii/root/navbar";
import { Footer } from "@/components/sites/gotourshawaii/root/footer";
import { BookingDialog } from "@/components/sites/gotourshawaii/root/booking-dialog";
import { FAQSection } from "@/components/sites/gotourshawaii/root/faq-section";
import {
  MapPin,
  Phone,
  Clock,
  Mail,
  CheckCircle2,
  Sparkles,
  Navigation,
  ChevronRight,
} from "lucide-react";

export default function ContactUsPage() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "Tur Keliling Pulau Oahu",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormError("");
    if (!formData.name.trim() || !formData.email.trim() || !formData.subject.trim()) {
      setFormError("Silakan lengkapi kolom Nama, Email, dan Subjek yang wajib diisi.");
      return;
    }
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#0c1f38] text-white selection:bg-[#f15d22] selection:text-white">
      <TopBar />
      <Navbar onOpenBooking={() => setBookingOpen(true)} />

      <main className="flex-1">
        {/* 1. Hero Section */}
        <section className="relative w-full min-h-[440px] sm:min-h-[480px] md:min-h-[520px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/sites/gotourshawaii/root/contact-us-hero-img.png"
              alt="Pesisir Pantai dan Pegunungan Hawaii"
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
                Kami Siap Melayani Anda 7 Hari Seminggu
              </span>
            </div>
            <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl text-white uppercase tracking-wider mb-3 leading-none drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]">
              HUBUNGI <span className="bg-gradient-to-r from-[#f5b324] via-[#fbd160] to-[#f5b324] bg-clip-text text-transparent">KAMI</span>
            </h1>
            <p className="max-w-2xl mx-auto text-sm sm:text-base text-neutral-100 drop-shadow-[0_1px_4px_rgba(0,0,0,0.6)] font-normal leading-relaxed">
              Punya pertanyaan seputar penjemputan hotel, paket tur privat, atau reservasi perjalanan? Bicaralah langsung dengan tim lokal kami yang ramah di Oahu.
            </p>
          </div>

          <div className="absolute bottom-0 inset-x-0 w-full pointer-events-none z-20 translate-y-0.5 overflow-hidden">
            <div className="relative w-full h-14 sm:h-18 md:h-22 lg:h-24">
              <Image
                src="/sites/gotourshawaii/root/banner-divider-optimized-002.png"
                alt="Transisi motif pembatas polinesia"
                fill
                className="object-cover object-top"
                priority
              />
            </div>
          </div>
        </section>

        {/* 2. Contact Form & Information */}
        <section className="bg-[#f5f0e8] text-neutral-900 pt-6 sm:pt-8 pb-14 sm:pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {/* Breadcrumb Navigation for User Orientation */}
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-neutral-600 mb-6 font-medium px-1">
              <Link href="/" className="hover:text-[#f15d22] transition-colors">
                Beranda
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-neutral-400" />
              <span className="text-neutral-900 font-bold">Hubungi Kami</span>
            </nav>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
              {/* Form (Col 7 on Desktop, 1 Col on Mobile) */}
              <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 md:p-9 shadow-xl border border-neutral-200/80">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f15d22]/10 border border-[#f15d22]/20 mb-3 shadow-xs">
                  <Sparkles className="w-3.5 h-3.5 text-[#f15d22]" />
                  <span className="text-xs font-extrabold text-[#f15d22] uppercase tracking-widest">
                    Kirim Pesan Langsung
                  </span>
                </div>
                <h2 className="font-heading text-3xl sm:text-4xl text-[#0c2340] uppercase mb-5 leading-tight">
                  BAGAIMANA KAMI DAPAT MEMBANTU ANDA?
                </h2>

                {submitted ? (
                  <div className="text-center py-10 space-y-4 animate-in fade-in duration-300">
                    <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="font-heading text-2xl sm:text-3xl font-bold text-[#0c2340]">
                      MAHALO ATAS PERTANYAAN ANDA!
                    </h3>
                    <p className="text-neutral-600 text-sm max-w-sm mx-auto leading-relaxed">
                      Pesan Anda telah berhasil diterima oleh tim layanan tamu kami. Kami akan segera menghubungi Anda dengan informasi lengkap.
                    </p>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          name: "",
                          phone: "",
                          email: "",
                          service: "Tur Keliling Pulau Oahu",
                          subject: "",
                          message: "",
                        });
                      }}
                      className="mt-3 px-6 py-2.5 bg-[#f15d22] text-white rounded-xl text-sm font-semibold hover:bg-[#d84b13] transition-colors cursor-pointer"
                    >
                      Kirim Pesan Lain
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {formError && (
                      <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-semibold animate-in fade-in">
                        {formError}
                      </div>
                    )}
                    {/* Row 1: Name & Contact Number */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold uppercase text-neutral-700 mb-1.5">
                          Nama Lengkap <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Budi Santoso"
                          className="w-full bg-[#f8f9fa] border border-neutral-300 hover:border-neutral-400 rounded-xl px-4 py-2.5 text-sm text-neutral-800 placeholder-neutral-400 focus:outline-none focus:bg-white focus:border-[#f15d22] focus:ring-2 focus:ring-[#f15d22]/30 transition-all duration-200"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold uppercase text-neutral-700 mb-1.5">
                          Nomor Telepon / WA <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+62 812-3456-7890"
                          className="w-full bg-[#f8f9fa] border border-neutral-300 hover:border-neutral-400 rounded-xl px-4 py-2.5 text-sm text-neutral-800 placeholder-neutral-400 focus:outline-none focus:bg-white focus:border-[#f15d22] focus:ring-2 focus:ring-[#f15d22]/30 transition-all duration-200"
                        />
                      </div>
                    </div>

                    {/* Row 2: Email & Services */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold uppercase text-neutral-700 mb-1.5">
                          Alamat Email <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="nama@email.com"
                          className="w-full bg-[#f8f9fa] border border-neutral-300 hover:border-neutral-400 rounded-xl px-4 py-2.5 text-sm text-neutral-800 placeholder-neutral-400 focus:outline-none focus:bg-white focus:border-[#f15d22] focus:ring-2 focus:ring-[#f15d22]/30 transition-all duration-200"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold uppercase text-neutral-700 mb-1.5">
                          Pilihan Layanan <span className="text-red-500">*</span>
                        </label>
                        <select
                          value={formData.service}
                          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                          className="w-full bg-[#f8f9fa] border border-neutral-300 hover:border-neutral-400 rounded-xl px-4 py-2.5 text-sm text-neutral-800 focus:outline-none focus:bg-white focus:border-[#f15d22] focus:ring-2 focus:ring-[#f15d22]/30 transition-all duration-200 cursor-pointer"
                        >
                          <option value="Tur Keliling Pulau Oahu">Tur Keliling Pulau Oahu</option>
                          <option value="Tur Privat">Tur Privat</option>
                          <option value="Transportasi Bandara">Transportasi Bandara</option>
                          <option value="Tur Rombongan / Grup">Tur Rombongan / Grup</option>
                          <option value="Lainnya">Lainnya</option>
                        </select>
                      </div>
                    </div>

                    {/* Row 3: Subject */}
                    <div>
                      <label className="block text-xs font-bold uppercase text-neutral-700 mb-1.5">
                        Subjek Pertanyaan <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        placeholder="Contoh: Pertanyaan Penjemputan Hotel, Tur Keliling Pulau"
                        className="w-full bg-[#f8f9fa] border border-neutral-300 hover:border-neutral-400 rounded-xl px-4 py-2.5 text-sm text-neutral-800 placeholder-neutral-400 focus:outline-none focus:bg-white focus:border-[#f15d22] focus:ring-2 focus:ring-[#f15d22]/30 transition-all duration-200"
                      />
                    </div>

                    {/* Row 4: Message */}
                    <div>
                      <label className="block text-xs font-bold uppercase text-neutral-700 mb-1.5">
                        Pesan Anda
                      </label>
                      <textarea
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tuliskan pertanyaan detail atau permintaan khusus Anda di sini..."
                        className="w-full bg-[#f8f9fa] border border-neutral-300 hover:border-neutral-400 rounded-xl px-4 py-2.5 text-sm text-neutral-800 placeholder-neutral-400 focus:outline-none focus:bg-white focus:border-[#f15d22] focus:ring-2 focus:ring-[#f15d22]/30 transition-all duration-200 resize-none"
                      />
                    </div>

                    {/* Submit Button & Response Notice */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pt-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="bg-[#f15d22] hover:bg-[#d84b13] text-white font-heading text-lg font-bold uppercase tracking-wider px-8 py-3.5 rounded-xl shadow-lg shadow-[#f15d22]/25 hover:shadow-xl hover:shadow-[#f15d22]/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer text-center disabled:opacity-75 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                      >
                        {isSubmitting ? (
                          <>
                            <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin shrink-0" />
                            <span>MENGIRIM PESAN...</span>
                          </>
                        ) : (
                          <span>KIRIM PESAN</span>
                        )}
                      </button>
                      <p className="text-xs text-neutral-500 flex items-center gap-1.5 justify-center sm:justify-start">
                        <Clock className="w-3.5 h-3.5 text-[#f15d22] shrink-0" />
                        <span>Kami biasanya merespons dalam 1 hari kerja.</span>
                      </p>
                    </div>
                  </form>
                )}
              </div>

              {/* Details & Interactive Map (Col 5 on Desktop, 1 Col on Mobile) */}
              <div className="lg:col-span-5 space-y-6">
                {/* Get in Touch Card */}
                <div className="bg-[#081d38] text-white rounded-3xl p-6 sm:p-7 shadow-xl border border-white/10">
                  <h3 className="font-heading text-2xl sm:text-3xl text-[#f5b324] uppercase tracking-wide mb-5">
                    KONTAK LANGSUNG
                  </h3>

                  <div className="space-y-4 text-sm text-neutral-200">
                    <div className="flex items-start gap-3.5">
                      <MapPin className="w-5 h-5 text-[#f15d22] shrink-0 mt-0.5" />
                      <div>
                        <strong className="block text-white">Kantor Waikiki:</strong>
                        <span>2500 Kalakaua Ave Suite E, Honolulu, Hawaii 96815</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-3.5">
                      <Phone className="w-5 h-5 text-[#f15d22] shrink-0 mt-0.5" />
                      <div>
                        <strong className="block text-white">Telepon:</strong>
                        <a href="tel:808-926-3090" className="hover:text-white underline">
                          808-926-3090
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3.5">
                      <Clock className="w-5 h-5 text-[#f15d22] shrink-0 mt-0.5" />
                      <div>
                        <strong className="block text-white">Jam Operasional:</strong>
                        <span>06.00 – 21.00 HST, Buka 7 Hari Seminggu!</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-3.5">
                      <Mail className="w-5 h-5 text-[#f15d22] shrink-0 mt-0.5" />
                      <div>
                        <strong className="block text-white">Alamat Email:</strong>
                        <a href="mailto:info@gotourshawaii.com" className="hover:text-white underline">
                          info@gotourshawaii.com
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Interactive Headquarters Location Map */}
                <div className="bg-white rounded-3xl p-6 sm:p-7 shadow-xl border border-neutral-200 text-left">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs sm:text-sm font-extrabold uppercase text-[#0c2340] tracking-wider block">
                      Lokasi Kantor Pusat
                    </span>
                    <span className="inline-flex items-center gap-1 text-[11px] font-bold text-[#f15d22] bg-[#f15d22]/10 px-2.5 py-0.5 rounded-full">
                      <MapPin className="w-3 h-3" />
                      Pantai Waikiki
                    </span>
                  </div>

                  {/* Interactive Map Iframe */}
                  <div className="relative h-56 sm:h-64 w-full rounded-2xl overflow-hidden border border-neutral-200 shadow-inner mb-4 bg-neutral-100">
                    <iframe
                      src="https://maps.google.com/maps?q=2500+Kalakaua+Ave+Suite+E,+Honolulu,+HI+96815&t=&z=15&ie=UTF8&iwloc=&output=embed"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Lokasi Kantor Go Tours Hawaii Waikiki"
                      className="w-full h-full"
                    />
                  </div>

                  {/* Office Info & Get Directions */}
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-heading text-base font-bold text-[#0c2340] uppercase">
                        Go Tours Hawaii / Kantor Waikiki
                      </h4>
                      <p className="text-xs text-neutral-600 mt-0.5">
                        2500 Kalakaua Ave Suite E, Honolulu, HI 96815
                      </p>
                    </div>

                    <a
                      href="https://maps.google.com/?q=2500+Kalakaua+Ave+Suite+E,+Honolulu,+HI+96815"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 bg-[#f15d22] hover:bg-[#d84b13] text-white text-xs font-bold uppercase tracking-wider rounded-xl shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer"
                    >
                      <Navigation className="w-3.5 h-3.5" />
                      <span>PETUNJUK ARAH</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. FAQs Section */}
        <FAQSection />

        {/* 4. Social Media Section */}
        <section className="bg-[#f5f0e8] text-neutral-900 py-12 sm:py-16 px-4 sm:px-6 lg:px-8 border-t border-black/5">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#f15d22]/10 border border-[#f15d22]/20 mb-3 shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#f15d22]" />
              <span className="text-xs font-extrabold text-[#f15d22] uppercase tracking-widest">
                Tetap Terhubung Bersama Kami
              </span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl text-[#0c2340] uppercase tracking-wide mb-3">
              IKUTI PERJALANAN HAWAII KAMI
            </h2>
            <p className="text-neutral-600 text-sm max-w-lg mx-auto mb-8 leading-relaxed font-normal">
              Ikuti kabar harian matahari terbit Hawaii, momen bertemu satwa laut, dokumentasi perjalanan para tamu, dan kisah autentik semangat Aloha.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
              {/* Instagram */}
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3.5 px-6 py-3.5 rounded-2xl bg-white border border-neutral-200/90 shadow-md hover:shadow-lg hover:border-[#f15d22] hover:-translate-y-0.5 text-[#0c2340] hover:text-[#f15d22] transition-all duration-200 group cursor-pointer w-full sm:w-auto"
              >
                <div className="w-10 h-10 rounded-xl bg-[#f15d22]/10 group-hover:bg-[#f15d22] text-[#f15d22] group-hover:text-white flex items-center justify-center transition-colors">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </div>
                <div className="text-left">
                  <span className="block text-xs font-bold uppercase tracking-wider">Instagram</span>
                  <span className="text-[11px] text-neutral-500">@gotourshawaii</span>
                </div>
              </a>

              {/* Facebook */}
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3.5 px-6 py-3.5 rounded-2xl bg-white border border-neutral-200/90 shadow-md hover:shadow-lg hover:border-[#f15d22] hover:-translate-y-0.5 text-[#0c2340] hover:text-[#f15d22] transition-all duration-200 group cursor-pointer w-full sm:w-auto"
              >
                <div className="w-10 h-10 rounded-xl bg-[#f15d22]/10 group-hover:bg-[#f15d22] text-[#f15d22] group-hover:text-white flex items-center justify-center transition-colors">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.6 5H18V0h-3.808C10.592 0 9 1.583 9 4.615V8z" />
                  </svg>
                </div>
                <div className="text-left">
                  <span className="block text-xs font-bold uppercase tracking-wider">Facebook</span>
                  <span className="text-[11px] text-neutral-500">Go Tours Hawaii</span>
                </div>
              </a>

              {/* YouTube */}
              <a
                href="https://www.youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3.5 px-6 py-3.5 rounded-2xl bg-white border border-neutral-200/90 shadow-md hover:shadow-lg hover:border-[#f15d22] hover:-translate-y-0.5 text-[#0c2340] hover:text-[#f15d22] transition-all duration-200 group cursor-pointer w-full sm:w-auto"
              >
                <div className="w-10 h-10 rounded-xl bg-[#f15d22]/10 group-hover:bg-[#f15d22] text-[#f15d22] group-hover:text-white flex items-center justify-center transition-colors">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </div>
                <div className="text-left">
                  <span className="block text-xs font-bold uppercase tracking-wider">YouTube</span>
                  <span className="text-[11px] text-neutral-500">Go Tours Hawaii TV</span>
                </div>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <BookingDialog
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
        defaultTour="Tur Keliling Pulau"
      />
    </div>
  );
}

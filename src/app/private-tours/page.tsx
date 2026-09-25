"use client";

import React, { useState } from "react";
import Image from "next/image";
import { TopBar } from "@/components/sites/gotourshawaii/root/top-bar";
import { Navbar } from "@/components/sites/gotourshawaii/root/navbar";
import { Footer } from "@/components/sites/gotourshawaii/root/footer";
import { BookingDialog } from "@/components/sites/gotourshawaii/root/booking-dialog";
import { CtaBanner } from "@/components/sites/gotourshawaii/root/cta-banner";
import {
  Sparkles,
  ShieldCheck,
  CheckCircle,
  Car,
  Compass,
  MapPin,
  Clock,
  Droplets,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

interface PrivateTourItem {
  id: string;
  title: string;
  description: string;
  duration: string;
  image: string;
}

const privateToursList: PrivateTourItem[] = [
  {
    id: "circle-island",
    title: "TUR PRIVAT KELILING PULAU OAHU",
    description:
      "Eksplorasi seluruh pulau secara eksklusif meliputi gardu pandang ikonis, pantai pasir emas, Kuil Byodo-In yang sakral, dan situs sejarah sesuai ritme Anda.",
    duration: "Sekitar 8-9 Jam",
    image: "/sites/gotourshawaii/root/Visual-img-3-e1714632197722.jpg",
  },
  {
    id: "north-shore",
    title: "PETUALANGAN PRIVAT NORTH SHORE",
    description:
      "Jelajahi kota peselancar bersejarah Haleiwa, sentra kuliner udang bawang putih Kahuku, pantai ombak besar Sunset Beach, dan pengamatan penyu laut liar.",
    duration: "Sekitar 6-7 Jam",
    image: "/sites/gotourshawaii/root/Visual-img-2-e1714631806737.jpg",
  },
  {
    id: "waterfall-nature",
    title: "PENGALAMAN PRIVAT AIR TERJUN",
    description:
      "Menyusuri jalur botani tropis Lembah Waimea yang rimbun, berenang di kolam air terjun alami, dan mengagumi panorama pegunungan tanpa terburu-buru.",
    duration: "Sekitar 5-6 Jam",
    image: "/sites/gotourshawaii/root/optimized-water-fall-002.jpg",
  },
  {
    id: "custom-tour",
    title: "TUR KUSTOM SESUAI KEINGINAN",
    description:
      "Rancang petualangan impian Anda sendiri di Oahu atau Maui. Pemandu dan armada kami siap mengantar ke spot tersembunyi sesuai keinginan keluarga Anda.",
    duration: "Jadwal 100% Fleksibel",
    image: "/sites/gotourshawaii/root/Header-Photo-Diamond-Head.jpeg",
  },
];

export default function PrivateToursPage() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [quoteSent, setQuoteSent] = useState(false);
  const [inquiryRef, setInquiryRef] = useState("PVT-84291");

  // Quote Form State & Wizard Step
  const [wizardStep, setWizardStep] = useState<1 | 2 | 3>(1);
  const [formData, setFormData] = useState({
    island: "Oahu",
    tourType: "Tur Privat Keliling Pulau Oahu",
    date: "",
    groupSize: "4",
    name: "",
    phone: "",
    specialRequests: "",
  });
  const [formError, setFormError] = useState("");

  const handleSelectPrivateTour = (tourTitle: string) => {
    setFormData((prev) => ({
      ...prev,
      tourType: tourTitle,
      specialRequests: prev.specialRequests || `Berminat dengan paket: ${tourTitle}`,
    }));
    const formElem = document.getElementById("quote-form");
    if (formElem) {
      formElem.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleNextStep = () => {
    setFormError("");
    if (wizardStep === 1) {
      if (!formData.date) {
        setFormError("Silakan pilih perkiraan tanggal tur Anda.");
        return;
      }
      setWizardStep(2);
    } else if (wizardStep === 2) {
      if (!formData.name.trim()) {
        setFormError("Silakan masukkan nama lengkap Anda.");
        return;
      }
      if (!formData.phone.trim()) {
        setFormError("Silakan masukkan nomor telepon / WhatsApp yang dapat dihubungi.");
        return;
      }
      setWizardStep(3);
    }
  };

  const handlePrevStep = () => {
    setFormError("");
    if (wizardStep > 1) {
      setWizardStep((prev) => (prev - 1) as 1 | 2 | 3);
    }
  };

  const handleSubmitQuote = (e: React.FormEvent) => {
    e.preventDefault();
    const generatedRef = `PVT-${Math.floor(10000 + Math.random() * 90000)}`;
    setInquiryRef(generatedRef);
    setQuoteSent(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#0c1f38] text-white selection:bg-[#f15d22] selection:text-white overflow-x-hidden">
      <TopBar />
      <Navbar onOpenBooking={() => setBookingOpen(true)} />

      <main className="flex-1">
        {/* 1. Hero Section */}
        <section className="relative w-full min-h-[440px] sm:min-h-[480px] md:min-h-[520px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/sites/gotourshawaii/root/optimized-water-fall-002.jpg"
              alt="Air Terjun Tropis Hawaii"
              fill
              priority
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0c1f38]/60 via-black/35 to-[#0c1f38]/85" />
          </div>

          <div className="relative z-10 max-w-4xl mx-auto px-4 text-center pt-14 pb-16 sm:pb-20 md:pb-24">
            <div className="inline-flex items-center gap-2 mb-3.5 px-4 py-2 rounded-full bg-black/55 backdrop-blur-md border border-white/20 shadow-2xl">
              <Sparkles className="w-4 h-4 text-[#f5b324]" />
              <span className="text-xs font-bold text-[#f5b324] uppercase tracking-widest">
                SEWA TUR VIP EKSKLUSIF
              </span>
            </div>
            <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl lg:text-[5.25rem] text-white uppercase tracking-wider mb-3 leading-none drop-shadow-[0_4px_20px_rgba(0,0,0,0.7)]">
              PENGALAMAN TUR PRIVAT <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-[#f5b324] to-amber-200">OAHU &amp; MAUI</span>
            </h1>
            <p className="max-w-2xl mx-auto text-sm sm:text-base text-neutral-100 drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)] font-normal leading-relaxed">
              Tur privat keliling pulau yang dirancang khusus, armada transportasi eksekutif Sprinter mewah, dan pemandu lokal berlisensi eksklusif untuk keluarga atau grup Anda.
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

        {/* 2. Intro Feature Highlights */}
        <section className="bg-[#f5f0e8] text-neutral-900 pt-14 sm:pt-18 pb-10 sm:pb-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#f15d22]/10 border border-[#f15d22]/20 mb-3 shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#f15d22]" />
              <span className="text-xs sm:text-sm font-bold text-[#f15d22] uppercase tracking-widest">
                LAYANAN EKSKLUSIF KEPULAUAN HAWAII
              </span>
            </div>
            <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl text-[#0c2340] uppercase mb-4 leading-tight">
              PENGALAMAN TUR PULAU PRIVAT TERBAIK
            </h2>
            <p className="text-neutral-700 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed mb-10 sm:mb-12">
              Jelajahi Hawaii sesuai ritme Anda sendiri. Armada van Mercedes Sprinter mewah dan pemandu lokal berlisensi kami berdedikasi sepenuhnya untuk memberikan liburan terbaik bagi Anda.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1.5 border border-neutral-200/80">
                <div className="w-13 h-13 rounded-2xl bg-[#0c2340] text-[#f5b324] flex items-center justify-center mb-4 shadow-md">
                  <Clock className="w-6 h-6" />
                </div>
                <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#0c2340] uppercase mb-2">
                  100% Jadwal Fleksibel
                </h3>
                <p className="text-neutral-600 text-sm leading-relaxed font-normal">
                  Mulai lebih pagi untuk melihat matahari terbit, habiskan waktu lebih lama di spot favorit Anda, atau sesuaikan perhentian kuliner sesuka hati tanpa terburu-buru.
                </p>
              </div>

              <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1.5 border border-neutral-200/80">
                <div className="w-13 h-13 rounded-2xl bg-[#0c2340] text-[#f5b324] flex items-center justify-center mb-4 shadow-md">
                  <Car className="w-6 h-6" />
                </div>
                <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#0c2340] uppercase mb-2">
                  Eksklusif Hanya untuk Grup Anda
                </h3>
                <p className="text-neutral-600 text-sm leading-relaxed font-normal">
                  Kendaraan mewah ber-AC hanya untuk Anda dan keluarga. Tidak ada orang asing, bebas beristirahat, dan nikmati privasi penuh sepanjang hari.
                </p>
              </div>

              <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1.5 border border-neutral-200/80">
                <div className="w-13 h-13 rounded-2xl bg-[#0c2340] text-[#f5b324] flex items-center justify-center mb-4 shadow-md">
                  <Compass className="w-6 h-6" />
                </div>
                <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#0c2340] uppercase mb-2">
                  Pemandu Lokal Berlisensi Terbaik
                </h3>
                <p className="text-neutral-600 text-sm leading-relaxed font-normal">
                  Pemandu kami adalah warga lokal berpengetahuan mendalam yang siap berbagi kisah leluhur, sejarah pulau, dan membawa Anda ke tempat-tempat rahasia.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Choose Your Private Experience */}
        <section className="bg-[#f5f0e8] text-neutral-900 py-12 sm:py-16 px-4 sm:px-6 lg:px-8 border-t border-black/5">
          <div className="max-w-6xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#f15d22]/10 border border-[#f15d22]/20 mb-3 shadow-xs">
                <Sparkles className="w-3.5 h-3.5 text-[#f15d22]" />
                <span className="text-xs sm:text-sm font-bold text-[#f15d22] uppercase tracking-widest">
                  PILIHAN PAKET EKSKLUSIF
                </span>
              </div>
              <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl text-[#0c2340] uppercase tracking-wide mb-3 leading-tight">
                PILIH PENGALAMAN TUR PRIVAT ANDA
              </h2>
              <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
                Pilih salah satu rencana perjalanan terfavorit kami di bawah ini, atau konsultasikan rute kustom Anda kepada kami.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {privateToursList.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-3xl overflow-hidden shadow-xl border border-neutral-200/80 flex flex-col justify-between group transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl"
                >
                  <div className="relative h-48 sm:h-52 w-full overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80" />
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-white font-semibold">
                      <span className="bg-black/60 backdrop-blur-md px-2.5 py-0.5 rounded-full flex items-center gap-1">
                        <Clock className="w-3 h-3 text-[#f15d22]" />
                        {item.duration}
                      </span>
                    </div>
                  </div>

                  <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-heading text-lg font-bold text-[#0c2340] uppercase tracking-wide mb-2 group-hover:text-[#f15d22] transition-colors line-clamp-2">
                        {item.title}
                      </h3>
                      <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed font-normal mb-5 line-clamp-3">
                        {item.description}
                      </p>
                    </div>

                    <button
                      onClick={() => handleSelectPrivateTour(item.title)}
                      className="w-full py-2.5 px-4 rounded-xl bg-[#f15d22] hover:bg-[#d84b13] text-white text-xs font-bold uppercase tracking-wider shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-1.5 cursor-pointer group/btn"
                    >
                      <span>MINTA PENAWARAN</span>
                      <ArrowRight className="w-3.5 h-3.5 transform group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. What's Included */}
        <section className="bg-white py-12 sm:py-14 px-4 sm:px-6 lg:px-8 border-y border-neutral-200/80">
          <div className="max-w-6xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
              <span className="text-xs font-bold text-[#f15d22] uppercase tracking-widest block mb-1.5">
                Standar Layanan VIP
              </span>
              <h2 className="font-heading text-2xl sm:text-4xl text-[#0c2340] uppercase tracking-wide">
                FASILITAS YANG TERMASUK
              </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-5">
              {[
                { icon: Car, title: "Kendaraan Pribadi", desc: "Mercedes Sprinter mewah ber-AC" },
                { icon: Compass, title: "Pemandu Lokal", desc: "Duta budaya berlisensi" },
                { icon: MapPin, title: "Antar-Jemput Hotel", desc: "Lobi hotel di Waikiki & sekitarnya" },
                { icon: Clock, title: "Jadwal Fleksibel", desc: "Mulai & selesai sesuai keinginan" },
                { icon: Sparkles, title: "Spot Pilihan", desc: "Bebas atur titik singgah & foto" },
                { icon: Droplets, title: "Air Mineral", desc: "Air dingin & handuk penyegar" },
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-[#f5f0e8]/50 border border-neutral-200/60 text-center flex flex-col items-center justify-center hover:bg-[#f5f0e8] transition-colors"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#f15d22]/10 text-[#f15d22] flex items-center justify-center mb-2.5">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h4 className="font-heading text-xs sm:text-sm font-bold text-[#0c2340] uppercase mb-1">
                      {item.title}
                    </h4>
                    <p className="text-neutral-500 text-[11px] sm:text-xs leading-relaxed font-normal">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 5. Trust / Social Proof Pillars */}
        <section className="bg-[#f5f0e8] py-8 sm:py-10 px-4 sm:px-6 lg:px-8 border-b border-black/5">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white/80 border border-black/5">
                <Compass className="w-6 h-6 text-[#f15d22] shrink-0" />
                <div className="text-left">
                  <div className="font-heading text-sm font-bold text-[#0c2340] uppercase">
                    Pemandu Asli Hawaii
                  </div>
                  <div className="text-[11px] text-neutral-500">Pencerita budaya leluhur</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white/80 border border-black/5">
                <Car className="w-6 h-6 text-[#f15d22] shrink-0" />
                <div className="text-left">
                  <div className="font-heading text-sm font-bold text-[#0c2340] uppercase">
                    Kendaraan Mewah
                  </div>
                  <div className="text-[11px] text-neutral-500">Sprinter &amp; SUV Eksekutif</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white/80 border border-black/5">
                <Clock className="w-6 h-6 text-[#f15d22] shrink-0" />
                <div className="text-left">
                  <div className="font-heading text-sm font-bold text-[#0c2340] uppercase">
                    Jadwal Fleksibel
                  </div>
                  <div className="text-[11px] text-neutral-500">Ritme santai sesuai keinginan</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white/80 border border-black/5">
                <ShieldCheck className="w-6 h-6 text-[#f15d22] shrink-0" />
                <div className="text-left">
                  <div className="font-heading text-sm font-bold text-[#0c2340] uppercase">
                    Pengalaman Personal
                  </div>
                  <div className="text-[11px] text-neutral-500">Dirancang khusus untuk keluarga</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. Form Quote Request (3-Step Wizard) */}
        <section id="quote-form" className="bg-[#081d38] text-white py-14 sm:py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8 sm:mb-10">
              <span className="text-xs font-bold text-[#f5b324] uppercase tracking-widest block mb-2">
                Konsultasi &amp; Penawaran Harga Gratis
              </span>
              <h2 className="font-heading text-3xl sm:text-5xl text-white uppercase tracking-wider mb-3">
                MINTA PENAWARAN TUR PRIVAT
              </h2>
              <p className="text-neutral-300 text-xs sm:text-sm max-w-lg mx-auto leading-relaxed">
                Beritahu kami pulau impian dan tanggal perjalanan Anda. Tim kami akan menyiapkan rencana perjalanan khusus dengan harga terbaik, atau hubungi kami langsung di{" "}
                <a href="tel:808-926-3090" className="text-[#f15d22] underline font-bold">
                  808-926-3090
                </a>
                .
              </p>
            </div>

            {quoteSent ? (
              <div className="text-center py-8 space-y-4 animate-in fade-in">
                <div className="w-16 h-16 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center mx-auto border border-green-500/40">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <div className="inline-block px-3.5 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs font-bold uppercase tracking-wider">
                  No. Referensi: #{inquiryRef}
                </div>
                <h3 className="font-heading text-2xl sm:text-3xl text-white">PERMINTAAN PENAWARAN DITERIMA!</h3>
                <p className="text-sm text-neutral-300 max-w-md mx-auto leading-relaxed">
                  Mahalo, <strong className="text-white">{formData.name}</strong>! Tim concierge tur privat kami akan menghubungi Anda dalam waktu maksimal 2 jam dengan rincian jadwal, ketersediaan armada, dan penawaran harga spesial.
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => {
                      setQuoteSent(false);
                      setWizardStep(1);
                    }}
                    className="px-6 py-2.5 bg-[#f15d22] hover:bg-[#d84b13] text-white rounded-xl text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
                  >
                    Kirim Permintaan Lain
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmitQuote} className="space-y-6">
                {/* Wizard Step Progress Tracker */}
                <div className="flex items-center justify-between max-w-md mx-auto mb-6 px-2">
                  {[
                    { num: 1, title: "Rencana Tur" },
                    { num: 2, title: "Data Kontak" },
                    { num: 3, title: "Konfirmasi" },
                  ].map((s) => (
                    <div key={s.num} className="flex items-center gap-2">
                      <div
                        className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-colors ${
                          wizardStep === s.num
                            ? "bg-[#f15d22] text-white ring-4 ring-[#f15d22]/30"
                            : wizardStep > s.num
                            ? "bg-emerald-500 text-white"
                            : "bg-white/10 text-neutral-400"
                        }`}
                      >
                        {wizardStep > s.num ? "✓" : s.num}
                      </div>
                      <span
                        className={`text-xs font-medium hidden sm:inline ${
                          wizardStep === s.num ? "text-white font-bold" : "text-neutral-400"
                        }`}
                      >
                        {s.title}
                      </span>
                    </div>
                  ))}
                </div>

                {formError && (
                  <div className="p-3.5 rounded-xl bg-red-500/20 border border-red-500/40 text-red-200 text-xs text-center font-medium">
                    {formError}
                  </div>
                )}

                {/* STEP 1: Trip Details */}
                {wizardStep === 1 && (
                  <div className="space-y-4 animate-in fade-in duration-200">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold uppercase text-neutral-300 mb-1.5">
                          Destinasi Pulau <span className="text-[#f15d22]">*</span>
                        </label>
                        <select
                          value={formData.island}
                          onChange={(e) => setFormData({ ...formData, island: e.target.value })}
                          className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#f15d22] focus:ring-1 focus:ring-[#f15d22] cursor-pointer"
                        >
                          <option value="Oahu" className="bg-[#081d38]">Pulau Oahu</option>
                          <option value="Maui" className="bg-[#081d38]">Pulau Maui</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase text-neutral-300 mb-1.5">
                          Perkiraan Tanggal Tur <span className="text-[#f15d22]">*</span>
                        </label>
                        <input
                          type="date"
                          value={formData.date}
                          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                          className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#f15d22] focus:ring-1 focus:ring-[#f15d22]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold uppercase text-neutral-300 mb-1.5">
                          Jumlah Tamu (Grup Anda) <span className="text-[#f15d22]">*</span>
                        </label>
                        <select
                          value={formData.groupSize}
                          onChange={(e) => setFormData({ ...formData, groupSize: e.target.value })}
                          className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#f15d22] focus:ring-1 focus:ring-[#f15d22] cursor-pointer"
                        >
                          <option value="1-4" className="bg-[#081d38]">1 - 4 Tamu (SUV Mewah / Van Intim)</option>
                          <option value="5-8" className="bg-[#081d38]">5 - 8 Tamu (Mercedes Sprinter VIP)</option>
                          <option value="9-14" className="bg-[#081d38]">9 - 14 Tamu (Mercedes Sprinter Eksekutif)</option>
                          <option value="15+" className="bg-[#081d38]">15+ Tamu (Armada Rombongan Khusus)</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase text-neutral-300 mb-1.5">
                          Jenis Tur yang Diminati <span className="text-[#f15d22]">*</span>
                        </label>
                        <select
                          value={formData.tourType}
                          onChange={(e) => setFormData({ ...formData, tourType: e.target.value })}
                          className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#f15d22] focus:ring-1 focus:ring-[#f15d22] cursor-pointer"
                        >
                          <option value="Tur Privat Keliling Pulau Oahu" className="bg-[#081d38]">Tur Privat Keliling Pulau Oahu</option>
                          <option value="Petualangan Privat North Shore" className="bg-[#081d38]">Petualangan Privat North Shore</option>
                          <option value="Pengalaman Privat Air Terjun" className="bg-[#081d38]">Pengalaman Privat Air Terjun</option>
                          <option value="Tur Kustom Sesuai Keinginan" className="bg-[#081d38]">Tur Kustom Sesuai Keinginan</option>
                        </select>
                      </div>
                    </div>

                    <div className="pt-3 flex justify-end">
                      <button
                        type="button"
                        onClick={handleNextStep}
                        className="px-7 py-3 bg-[#f15d22] hover:bg-[#d84b13] text-white rounded-xl text-xs font-bold uppercase tracking-wider transition-colors flex items-center gap-1.5 cursor-pointer"
                      >
                        <span>Langkah Berikutnya</span>
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                )}

                {/* STEP 2: Your Details */}
                {wizardStep === 2 && (
                  <div className="space-y-4 animate-in fade-in duration-200">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold uppercase text-neutral-300 mb-1.5">
                          Nama Lengkap <span className="text-[#f15d22]">*</span>
                        </label>
                        <input
                          type="text"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="John Doe"
                          className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#f15d22] focus:ring-1 focus:ring-[#f15d22]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase text-neutral-300 mb-1.5">
                          Nomor Telepon / WhatsApp <span className="text-[#f15d22]">*</span>
                        </label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+62 812-0000-0000"
                          className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#f15d22] focus:ring-1 focus:ring-[#f15d22]"
                        />
                      </div>
                    </div>

                    <div className="pt-3 flex items-center justify-between">
                      <button
                        type="button"
                        onClick={handlePrevStep}
                        className="px-5 py-2.5 rounded-xl border border-white/20 text-neutral-300 hover:text-white text-xs font-bold uppercase tracking-wider flex items-center gap-1 transition-colors cursor-pointer"
                      >
                        <ChevronLeft className="w-4 h-4" />
                        <span>Kembali</span>
                      </button>

                      <button
                        type="button"
                        onClick={handleNextStep}
                        className="px-7 py-3 bg-[#f15d22] hover:bg-[#d84b13] text-white rounded-xl text-xs font-bold uppercase tracking-wider transition-colors flex items-center gap-1.5 cursor-pointer"
                      >
                        <span>Langkah Terakhir</span>
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                )}

                {/* STEP 3: Review & Submit */}
                {wizardStep === 3 && (
                  <div className="space-y-4 animate-in fade-in duration-200">
                    <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-xs space-y-2">
                      <div className="text-neutral-400 font-bold uppercase tracking-wider mb-2">
                        Ringkasan Permintaan Tur Anda
                      </div>
                      <div className="flex justify-between border-b border-white/5 pb-1">
                        <span className="text-neutral-400">Destinasi:</span>
                        <span className="font-semibold text-white">{formData.island}</span>
                      </div>
                      <div className="flex justify-between border-b border-white/5 pb-1">
                        <span className="text-neutral-400">Tanggal:</span>
                        <span className="font-semibold text-white">{formData.date || "Belum dipilih"}</span>
                      </div>
                      <div className="flex justify-between border-b border-white/5 pb-1">
                        <span className="text-neutral-400">Rombongan:</span>
                        <span className="font-semibold text-white">{formData.groupSize} Orang</span>
                      </div>
                      <div className="flex justify-between border-b border-white/5 pb-1">
                        <span className="text-neutral-400">Pilihan Tur:</span>
                        <span className="font-semibold text-[#f5b324]">{formData.tourType}</span>
                      </div>
                      <div className="flex justify-between pt-1">
                        <span className="text-neutral-400">Kontak:</span>
                        <span className="font-semibold text-white">{formData.name} ({formData.phone})</span>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase text-neutral-300 mb-1.5">
                        Permintaan Khusus atau Ide Rute yang Diinginkan (Opsional)
                      </label>
                      <textarea
                        rows={3}
                        value={formData.specialRequests}
                        onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
                        placeholder="Contoh: Kami ingin berhenti di kedai kopi Kona, berenang di air terjun Waimea, dan mencari restoran ramah anak..."
                        className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#f15d22] focus:ring-1 focus:ring-[#f15d22] resize-none"
                      />
                    </div>

                    <div className="pt-3 flex items-center justify-between">
                      <button
                        type="button"
                        onClick={handlePrevStep}
                        className="px-5 py-2.5 rounded-xl border border-white/20 text-neutral-300 hover:text-white text-xs font-bold uppercase tracking-wider flex items-center gap-1 transition-colors cursor-pointer"
                      >
                        <ChevronLeft className="w-4 h-4" />
                        <span>Kembali</span>
                      </button>

                      <button
                        type="submit"
                        className="px-8 py-3.5 bg-[#f15d22] hover:bg-[#d84b13] text-white rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider shadow-lg shadow-[#f15d22]/30 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
                      >
                        KIRIM PERMINTAAN PENAWARAN
                      </button>
                    </div>
                  </div>
                )}
              </form>
            )}
          </div>
        </section>

        {/* 7. Experience Hawaii CTA Banner */}
        <CtaBanner onBookNow={() => setBookingOpen(true)} />
      </main>

      <Footer />

      {/* Booking Dialog Modal */}
      <BookingDialog
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
        defaultTour="Tur Keliling Pulau"
      />
    </div>
  );
}

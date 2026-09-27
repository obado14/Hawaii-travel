"use client";

import React, { useState, Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { TopBar } from "@/components/sites/gotourshawaii/root/top-bar";
import { Navbar } from "@/components/sites/gotourshawaii/root/navbar";
import { Footer } from "@/components/sites/gotourshawaii/root/footer";
import {
  Clock,
  Check,
  ChevronRight,
  ChevronLeft,
  ShieldCheck,
  Sparkles,
  Calendar,
  Users,
  Award,
  Phone,
  Mail,
  Printer,
  Compass,
  CheckCircle2,
  Tag,
} from "lucide-react";

interface TourItem {
  id: string;
  name: string;
  shortDesc: string;
  price: number;
  duration: string;
  tag: string;
  image: string;
  highlights: string[];
}

const TOURS: TourItem[] = [
  {
    id: "Circle Island Tour",
    name: "Tur Keliling Pulau Oahu (Permata Tersembunyi & Air Terjun)",
    shortDesc: "Jelajahi pantai utara ikonik, Air Terjun Waimea, Kuil Byodo-In, dan keindahan pesisir Oahu.",
    price: 149,
    duration: "Sehari Penuh (8–9 Jam)",
    tag: "Paling Populer",
    image: "/sites/gotourshawaii/root/Hidden-Gems-of-Oahu.jpg",
    highlights: ["Air Terjun Waimea", "Kuil Byodo-In", "North Shore Surfing Beaches", "Makan Siang Lokal Termasuk"],
  },
  {
    id: "Hawaiian Luau",
    name: "Pesta Luau Tradisional Paina Waikiki & Pertunjukan Budaya Polinesia",
    shortDesc: "Pengalaman malam Hawaii autentik dengan tarian api hula, jamuan prasmanan, dan upacara lei bunga.",
    price: 179,
    duration: "Malam Hari (4 Jam)",
    tag: "Budaya Asli",
    image: "/sites/gotourshawaii/root/optimized-luau-cover-002.jpg",
    highlights: ["Penyambutan Kalung Bunga Lei", "Prasmanan Khas Hawaii", "Tari Pisau Api Polinesia", "Kisah Musik & Tradisi"],
  },
  {
    id: "Pearl Harbor Tour",
    name: "Ekskursi Bersejarah Pearl Harbor & Memorial USS Arizona",
    shortDesc: "Kunjungan mendalam ke situs bersejarah Perang Pasifik dengan tiket masuk reservasi resmi.",
    price: 119,
    duration: "Setengah Hari (5 Jam)",
    tag: "Tur Sejarah",
    image: "/sites/gotourshawaii/root/optimized-pearl-harbor-02.jpg",
    highlights: ["Tiket Resmi USS Arizona", "Pameran Museum Pearl Harbor", "Film Dokumenter Bersejarah", "Pemandu Ahli Lokal"],
  },
  {
    id: "Diamond Head Shuttle",
    name: "Shuttle Pendakian Kawah Diamond Head dengan Tiket Reservasi",
    shortDesc: "Transportasi pulang-pergi nyaman dari hotel Waikiki beserta akses reservasi masuk taman negara bagian.",
    price: 45,
    duration: "Ekspres (3 Jam)",
    tag: "Shuttle Harian",
    image: "/sites/gotourshawaii/root/Header-Photo-Diamond-Head.jpeg",
    highlights: ["Termasuk Tiket Masuk Resmi", "Jemput Langsung di Hotel", "Waktu Bebas Mendaki", "Pemandangan 360° Waikiki"],
  },
  {
    id: "Waikiki Turtle Canyon Snorkeling",
    name: "Snorkeling & Berenang Bersama Penyu Laut Hijau Turtle Canyon",
    shortDesc: "Pelayaran katamaran ke habitat terumbu karang alami untuk snorkeling bersama honu (penyu laut).",
    price: 129,
    duration: "Setengah Hari (3.5 Jam)",
    tag: "Petualangan Eko",
    image: "/sites/gotourshawaii/root/waikiki-turtle-banner.png",
    highlights: ["Peralatan Snorkel Lengkap", "Instruktur Profesional", "Melihat Penyu di Habitat Asli", "Camilan & Minuman di Kapal"],
  },
];

const matchTourFromQuery = (query?: string | null): string => {
  if (!query) return TOURS[0].id;
  const lower = query.toLowerCase();
  const direct = TOURS.find((t) => t.id.toLowerCase() === lower);
  if (direct) return direct.id;

  if (lower.includes("luau") || lower.includes("paina")) return "Hawaiian Luau";
  if (lower.includes("pearl") || lower.includes("arizona")) return "Pearl Harbor Tour";
  if (lower.includes("diamond") || lower.includes("shuttle")) return "Diamond Head Shuttle";
  if (lower.includes("snorkeling") || lower.includes("penyu") || lower.includes("turtle"))
    return "Waikiki Turtle Canyon Snorkeling";
  return "Circle Island Tour";
};

function BookingPageContent() {
  const searchParams = useSearchParams();
  const initialTour = matchTourFromQuery(searchParams.get("tour"));

  // State
  const [step, setStep] = useState<1 | 2 | 3 | 4 | 5>(1);
  const [selectedTourId, setSelectedTourId] = useState<string>(initialTour);

  // Date & Time
  const tomorrowStr = () => {
    const d = new Date();
    d.setDate(d.getDate() + 1);
    return d.toISOString().split("T")[0];
  };
  const [date, setDate] = useState<string>(tomorrowStr);
  const [timeSlot, setTimeSlot] = useState<string>("08:00 (Keberangkatan Pagi)");

  // Guests
  const [adults, setAdults] = useState<number>(2);
  const [children, setChildren] = useState<number>(0);

  // Customer Contact Info
  const [fullName, setFullName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [hotel, setHotel] = useState<string>("");
  const [specialRequests, setSpecialRequests] = useState<string>("");
  const [agreedTerms, setAgreedTerms] = useState<boolean>(true);

  // Validation & Submission
  const [errorMsg, setErrorMsg] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [bookingRef, setBookingRef] = useState<string>("");

  // Calculations
  const currentTour = TOURS.find((t) => t.id === selectedTourId) || TOURS[0];
  const rawTotal = adults * currentTour.price + children * Math.round(currentTour.price * 0.75);
  const promoDiscount = rawTotal * 0.1; // 10% Online Promo
  const finalTotal = rawTotal - promoDiscount;

  // Step Navigations
  const handleNext = () => {
    setErrorMsg("");
    if (step === 1) {
      if (!selectedTourId) {
        setErrorMsg("Silakan pilih paket pengalaman wisata untuk melanjutkan.");
        return;
      }
      setStep(2);
      window.scrollTo({ top: 120, behavior: "smooth" });
    } else if (step === 2) {
      if (!date) {
        setErrorMsg("Silakan tentukan tanggal perjalanan yang Anda inginkan.");
        return;
      }
      setStep(3);
      window.scrollTo({ top: 120, behavior: "smooth" });
    } else if (step === 3) {
      if (adults < 1) {
        setErrorMsg("Minimal harus ada 1 tamu dewasa.");
        return;
      }
      if (!fullName.trim()) {
        setErrorMsg("Silakan masukkan nama lengkap tamu utama.");
        return;
      }
      if (!email.trim() || !email.includes("@")) {
        setErrorMsg("Silakan masukkan alamat email yang valid untuk pengiriman voucher.");
        return;
      }
      if (!phone.trim()) {
        setErrorMsg("Silakan masukkan nomor telepon / WhatsApp yang aktif.");
        return;
      }
      setStep(4);
      window.scrollTo({ top: 120, behavior: "smooth" });
    } else if (step === 4) {
      if (!agreedTerms) {
        setErrorMsg("Silakan setujui syarat dan ketentuan pemesanan.");
        return;
      }
      // Submit booking
      setIsSubmitting(true);
      setTimeout(() => {
        const randomRef = `GTH-${Math.floor(10000 + Math.random() * 90000)}`;
        setBookingRef(randomRef);
        setIsSubmitting(false);
        setStep(5);
        window.scrollTo({ top: 80, behavior: "smooth" });
      }, 700);
    }
  };

  const handleBack = () => {
    setErrorMsg("");
    if (step > 1) {
      setStep((prev) => (prev - 1) as 1 | 2 | 3 | 4 | 5);
      window.scrollTo({ top: 120, behavior: "smooth" });
    }
  };

  const handleStepJump = (target: 1 | 2 | 3 | 4 | 5) => {
    if (target < step) {
      setErrorMsg("");
      setStep(target);
      window.scrollTo({ top: 120, behavior: "smooth" });
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FFF3D6] text-[#073B4C] selection:bg-[#F4A261] selection:text-white">
      {/* 1. Header & TopBar */}
      <TopBar />
      <Navbar />

      <main className="flex-1 pb-16 sm:pb-24">
        {/* Hero Header Strip */}
        <section className="bg-gradient-to-b from-[#0077B6] to-[#073B4C] text-white pt-8 sm:pt-10 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8 border-b border-white/15 relative overflow-hidden">
          {/* Subtle Polynesian decorative background */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <Image
              src="/sites/gotourshawaii/root/optimized-bg-texture-002.jpg"
              alt="Tekstur Hawaii"
              fill
              className="object-cover"
            />
          </div>

          <div className="max-w-7xl mx-auto relative z-10">
            {/* Breadcrumbs */}
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-white/75 mb-4">
              <Link href="/" className="hover:text-[#F4A261] transition-colors">
                Beranda
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-white/50" />
              <Link href="/tour-packages" className="hover:text-[#F4A261] transition-colors">
                Tur &amp; Paket
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-white/50" />
              <span className="text-white font-bold">Pemesanan Online</span>
            </nav>

            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#00B4D8] text-xs font-bold uppercase tracking-wider mb-2.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Sistem Pemesanan Resmi Go Tours Hawaii</span>
                </div>
                <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-wide text-white">
                  PESAN PETUALANGAN HAWAII ANDA
                </h1>
                <p className="text-white/85 text-sm sm:text-base max-w-2xl mt-1.5 font-normal leading-relaxed">
                  Lengkapi reservasi Anda dalam 5 langkah praktis. Dapatkan konfirmasi instan, jaminan harga terbaik, dan pembatalan fleksibel hingga 48 jam sebelum keberangkatan.
                </p>
              </div>

              {/* Promo Callout */}
              <div className="bg-[#F4A261]/20 border border-[#F4A261]/40 rounded-2xl px-4 py-3 shrink-0 backdrop-blur-md self-start md:self-auto">
                <div className="flex items-center gap-2 text-[#FFF3D6] text-xs font-bold uppercase tracking-wider">
                  <Tag className="w-4 h-4 text-[#F4A261]" />
                  <span>Promo Online 10% Aktif</span>
                </div>
                <div className="text-white text-xs mt-0.5">Otomatis terpotong saat ringkasan biaya</div>
              </div>
            </div>
          </div>
        </section>

        {/* 5-Step Progress Stepper Bar */}
        <section className="bg-white border-b border-[#073B4C]/10 shadow-xs sticky top-16 sm:top-[66px] z-30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5">
            <div className="grid grid-cols-5 gap-2 sm:gap-4 items-center">
              {[
                { s: 1 as const, title: "Pilih Tur", desc: "Destinasi Impian" },
                { s: 2 as const, title: "Pilih Jadwal", desc: "Tanggal & Jam" },
                { s: 3 as const, title: "Data Peserta", desc: "Jumlah & Kontak" },
                { s: 4 as const, title: "Review", desc: "Tinjau Rincian" },
                { s: 5 as const, title: "Konfirmasi", desc: "Voucher Reservasi" },
              ].map((item) => {
                const isActive = step === item.s;
                const isCompleted = step > item.s;
                return (
                  <button
                    key={item.s}
                    type="button"
                    disabled={item.s >= step}
                    onClick={() => handleStepJump(item.s)}
                    className={`flex items-center gap-2 sm:gap-3 p-1 sm:p-2 rounded-xl text-left transition-all ${
                      item.s < step
                        ? "cursor-pointer hover:bg-[#FFF3D6]/50"
                        : item.s === step
                        ? "cursor-default"
                        : "cursor-not-allowed opacity-60"
                    }`}
                  >
                    <div
                      className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center font-bold text-xs sm:text-sm shrink-0 transition-colors shadow-xs ${
                        isCompleted
                          ? "bg-[#2A9D8F] text-white"
                          : isActive
                          ? "bg-[#F4A261] text-white ring-4 ring-[#F4A261]/25"
                          : "bg-[#073B4C]/10 text-[#073B4C]/60"
                      }`}
                    >
                      {isCompleted ? <Check className="w-4 h-4 stroke-[3]" /> : item.s}
                    </div>
                    <div className="hidden sm:block leading-tight">
                      <div
                        className={`text-xs font-bold uppercase tracking-wider ${
                          isActive
                            ? "text-[#073B4C]"
                            : isCompleted
                            ? "text-[#2A9D8F]"
                            : "text-[#073B4C]/50"
                        }`}
                      >
                        {item.title}
                      </div>
                      <div className="text-[11px] text-[#073B4C]/60 hidden md:block">
                        {item.desc}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* Booking Workspace Container */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-10">
          {errorMsg && (
            <div className="mb-6 p-4 rounded-2xl bg-red-100 border border-red-300 text-red-800 text-sm font-semibold flex items-center gap-3 animate-in fade-in">
              <span className="w-2 h-2 rounded-full bg-red-600 shrink-0" />
              <span>{errorMsg}</span>
            </div>
          )}

          {step === 5 ? (
            /* STEP 5: SUCCESS / CONFIRMATION SCREEN (Full Width Clean Layout) */
            <div className="bg-white rounded-3xl p-6 sm:p-10 md:p-12 shadow-xl border border-[#073B4C]/10 max-w-4xl mx-auto animate-in zoom-in-95 duration-300">
              <div className="text-center space-y-4">
                <div className="w-20 h-20 bg-[#2A9D8F]/15 text-[#2A9D8F] rounded-full flex items-center justify-center mx-auto border-2 border-[#2A9D8F]/40 shadow-xl shadow-[#2A9D8F]/10">
                  <CheckCircle2 className="w-10 h-10 stroke-[2.5]" />
                </div>

                <div className="inline-block px-4 py-1.5 rounded-full bg-[#2A9D8F]/15 border border-[#2A9D8F]/30 text-[#2A9D8F] text-xs sm:text-sm font-extrabold uppercase tracking-widest">
                  KODE BOOKING: {bookingRef}
                </div>

                <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#073B4C] uppercase tracking-wide">
                  MAHALO! PESANAN ANDA TELAH TERKONFIRMASI
                </h2>

                <p className="text-[#073B4C]/80 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
                  Terima kasih, <strong className="text-[#073B4C]">{fullName}</strong>! Reservasi Anda untuk{" "}
                  <strong className="text-[#0077B6]">{currentTour.name}</strong> telah berhasil dicatat ke sistem jadwal keberangkatan kami.
                </p>
              </div>

              {/* Voucher Detail Card */}
              <div className="mt-8 p-6 sm:p-8 bg-[#FFF3D6]/35 rounded-2xl border border-[#073B4C]/15 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#073B4C]/10 pb-5">
                  <div className="flex items-center gap-4">
                    <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden shrink-0 border border-[#073B4C]/15">
                      <Image
                        src={currentTour.image}
                        alt={currentTour.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-[#0077B6] uppercase tracking-wider bg-[#00B4D8]/15 px-2.5 py-0.5 rounded-md">
                        {currentTour.tag}
                      </span>
                      <h3 className="font-heading text-lg sm:text-xl font-bold text-[#073B4C] mt-1">
                        {currentTour.name}
                      </h3>
                      <div className="text-xs text-[#073B4C]/70 flex items-center gap-2 mt-0.5">
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5 text-[#F4A261]" /> {currentTour.duration}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="text-left sm:text-right">
                    <span className="text-xs text-[#073B4C]/60 block">Total Pembayaran</span>
                    <span className="font-heading text-2xl sm:text-3xl font-extrabold text-[#0077B6]">
                      ${finalTotal.toFixed(2)}
                    </span>
                    <span className="text-[11px] text-[#2A9D8F] block font-medium">✓ Termasuk Diskon Promo 10%</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                  <div className="p-3 bg-white rounded-xl border border-[#073B4C]/10">
                    <span className="text-xs text-[#073B4C]/60 block font-semibold uppercase">Tanggal Tur</span>
                    <strong className="text-[#073B4C] text-sm sm:text-base flex items-center gap-1.5 mt-0.5">
                      <Calendar className="w-4 h-4 text-[#F4A261]" /> {date}
                    </strong>
                  </div>

                  <div className="p-3 bg-white rounded-xl border border-[#073B4C]/10">
                    <span className="text-xs text-[#073B4C]/60 block font-semibold uppercase">Waktu Jemput</span>
                    <strong className="text-[#073B4C] text-sm sm:text-base flex items-center gap-1.5 mt-0.5">
                      <Clock className="w-4 h-4 text-[#F4A261]" /> {timeSlot}
                    </strong>
                  </div>

                  <div className="p-3 bg-white rounded-xl border border-[#073B4C]/10">
                    <span className="text-xs text-[#073B4C]/60 block font-semibold uppercase">Jumlah Tamu</span>
                    <strong className="text-[#073B4C] text-sm sm:text-base flex items-center gap-1.5 mt-0.5">
                      <Users className="w-4 h-4 text-[#F4A261]" /> {adults} Dewasa{children > 0 ? `, ${children} Anak` : ""}
                    </strong>
                  </div>

                  <div className="p-3 bg-white rounded-xl border border-[#073B4C]/10">
                    <span className="text-xs text-[#073B4C]/60 block font-semibold uppercase">Metode Bayar</span>
                    <strong className="text-[#2A9D8F] text-sm sm:text-base flex items-center gap-1.5 mt-0.5">
                      <ShieldCheck className="w-4 h-4 text-[#2A9D8F]" /> Bayar Saat Tur
                    </strong>
                  </div>
                </div>

                <div className="p-4 bg-white rounded-xl border border-[#073B4C]/10 text-xs text-[#073B4C]/80 space-y-1.5">
                  <div className="font-bold text-[#073B4C] text-sm mb-1">Informasi Pengiriman Voucher:</div>
                  <p>
                    Voucher resmi dan detail jadwal penjemputan lobi hotel telah kami kirimkan ke email:{" "}
                    <strong className="text-[#073B4C]">{email}</strong> serta WhatsApp:{" "}
                    <strong className="text-[#073B4C]">{phone}</strong>.
                  </p>
                  {hotel && (
                    <p>
                      Lokasi Penjemputan Tercatat: <strong className="text-[#073B4C]">{hotel}</strong>.
                    </p>
                  )}
                </div>

                {/* Timeline Next Steps */}
                <div className="pt-2">
                  <div className="text-xs font-bold uppercase tracking-wider text-[#073B4C] mb-3">
                    Langkah Selanjutnya:
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
                    <div className="p-3 bg-white/70 rounded-xl border border-[#073B4C]/10">
                      <div className="font-bold text-[#0077B6] mb-1">1. Simpan Voucher</div>
                      <p className="text-[#073B4C]/70">Cek kotak masuk atau spam email Anda untuk mengunduh bukti PDF.</p>
                    </div>
                    <div className="p-3 bg-white/70 rounded-xl border border-[#073B4C]/10">
                      <div className="font-bold text-[#0077B6] mb-1">2. Konfirmasi 24 Jam</div>
                      <p className="text-[#073B4C]/70">Tim pemandu lokal kami akan mengirim reminder waktu jemput persis.</p>
                    </div>
                    <div className="p-3 bg-white/70 rounded-xl border border-[#073B4C]/10">
                      <div className="font-bold text-[#0077B6] mb-1">3. Nikmati Keindahan Hawaii</div>
                      <p className="text-[#073B4C]/70">Tunjukkan kode reservasi saat naik shuttle bus ber-AC di lobi hotel.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <button
                  onClick={handlePrint}
                  className="px-6 py-3 bg-[#073B4C] hover:bg-[#052631] text-white rounded-xl font-bold text-sm transition-colors cursor-pointer flex items-center gap-2 shadow-md"
                >
                  <Printer className="w-4 h-4" />
                  <span>Cetak Voucher</span>
                </button>

                <Link
                  href="/"
                  className="px-8 py-3 bg-[#F4A261] hover:bg-[#e76f51] text-white rounded-xl font-heading text-base font-bold uppercase tracking-wider transition-colors cursor-pointer shadow-lg shadow-[#F4A261]/30"
                >
                  Kembali ke Beranda
                </Link>

                <Link
                  href="/tour-packages"
                  className="px-6 py-3 bg-white border border-[#073B4C]/20 hover:bg-[#FFF3D6] text-[#073B4C] rounded-xl font-bold text-sm transition-colors cursor-pointer"
                >
                  Lihat Paket Lainnya
                </Link>
              </div>
            </div>
          ) : (
            /* STEPS 1 to 4: 2-COLUMN WIDE LAYOUT */
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* LEFT / MAIN WORKSPACE (8 Columns) */}
              <div className="lg:col-span-8 bg-white rounded-3xl p-6 sm:p-8 md:p-10 shadow-xl border border-[#073B4C]/10 space-y-6">
                {/* STEP 1: PILIH TUR */}
                {step === 1 && (
                  <div className="space-y-6 animate-in fade-in duration-300">
                    <div>
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#00B4D8]/15 text-[#0077B6] text-xs font-bold uppercase tracking-wider mb-2">
                        <Compass className="w-3.5 h-3.5" />
                        <span>Langkah 1: Pilih Pengalaman Wisata</span>
                      </div>
                      <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-[#073B4C] uppercase tracking-wide">
                        PILIH PAKET TUR EKSKLUSIF ANDA
                      </h2>
                      <p className="text-[#073B4C]/75 text-sm sm:text-base mt-1">
                        Pilih paket tur pemenang penghargaan dunia yang ingin Anda nikmati bersama pemandu lokal berlisensi.
                      </p>
                    </div>

                    <div className="space-y-4">
                      {TOURS.map((t) => {
                        const isSelected = selectedTourId === t.id;
                        return (
                          <div
                            key={t.id}
                            onClick={() => setSelectedTourId(t.id)}
                            className={`p-4 sm:p-5 rounded-2xl border-2 cursor-pointer transition-all duration-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 ${
                              isSelected
                                ? "bg-[#FFF3D6]/40 border-[#F4A261] shadow-md ring-2 ring-[#F4A261]/20"
                                : "bg-white border-[#073B4C]/10 hover:border-[#0077B6]/40 hover:bg-[#FFF3D6]/15"
                            }`}
                          >
                            <div className="flex items-start sm:items-center gap-4 w-full sm:w-auto">
                              <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-xl overflow-hidden shrink-0 border border-[#073B4C]/15 shadow-inner">
                                <Image
                                  src={t.image}
                                  alt={t.name}
                                  fill
                                  className="object-cover group-hover:scale-105 transition-transform"
                                />
                              </div>

                              <div className="space-y-1.5 flex-1">
                                <div className="flex flex-wrap items-center gap-2">
                                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#0077B6] bg-[#00B4D8]/15 px-2.5 py-0.5 rounded-full">
                                    {t.tag}
                                  </span>
                                  <span className="text-xs text-[#073B4C]/70 flex items-center gap-1 font-medium">
                                    <Clock className="w-3.5 h-3.5 text-[#F4A261]" /> {t.duration}
                                  </span>
                                </div>
                                <h3 className="font-heading text-base sm:text-lg font-bold text-[#073B4C] leading-snug">
                                  {t.name}
                                </h3>
                                <p className="text-xs text-[#073B4C]/70 line-clamp-2 leading-relaxed">
                                  {t.shortDesc}
                                </p>
                              </div>
                            </div>

                            <div className="flex sm:flex-col items-center sm:items-end justify-between w-full sm:w-auto pt-2 sm:pt-0 border-t sm:border-t-0 border-[#073B4C]/10 shrink-0">
                              <div className="text-left sm:text-right">
                                <div className="text-2xl font-extrabold text-[#073B4C] font-heading">
                                  ${t.price}
                                </div>
                                <span className="text-xs text-[#073B4C]/60">/ orang</span>
                              </div>

                              <div
                                className={`mt-2 px-4 py-1.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors ${
                                  isSelected
                                    ? "bg-[#F4A261] text-white shadow-xs"
                                    : "bg-[#073B4C]/10 text-[#073B4C] group-hover:bg-[#073B4C]/15"
                                }`}
                              >
                                {isSelected ? "✓ Terpilih" : "Pilih Tur"}
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* STEP 2: PILIH JADWAL */}
                {step === 2 && (
                  <div className="space-y-6 animate-in fade-in duration-300">
                    <div>
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#00B4D8]/15 text-[#0077B6] text-xs font-bold uppercase tracking-wider mb-2">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>Langkah 2: Pilih Tanggal &amp; Waktu</span>
                      </div>
                      <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-[#073B4C] uppercase tracking-wide">
                        TENTUKAN WAKTU PERJALANAN
                      </h2>
                      <p className="text-[#073B4C]/75 text-sm sm:text-base mt-1">
                        Tur harian berangkat dari hotel area Waikiki dengan armada bus berpendingin udara nyaman.
                      </p>
                    </div>

                    {/* Active Selected Tour Reminder Card */}
                    <div className="p-4 bg-[#FFF3D6]/50 border border-[#073B4C]/15 rounded-2xl flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="relative w-12 h-12 rounded-lg overflow-hidden shrink-0 border border-[#073B4C]/10">
                          <Image src={currentTour.image} alt={currentTour.name} fill className="object-cover" />
                        </div>
                        <div>
                          <span className="text-[11px] text-[#0077B6] font-bold uppercase">{currentTour.tag}</span>
                          <div className="font-bold text-[#073B4C] text-sm">{currentTour.name}</div>
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={() => setStep(1)}
                        className="text-xs text-[#0077B6] hover:text-[#F4A261] underline font-bold cursor-pointer shrink-0"
                      >
                        Ganti Tur
                      </button>
                    </div>

                    {/* Date Picker Input */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#073B4C] mb-2">
                        Tanggal Perjalanan Tur <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="date"
                        required
                        min={tomorrowStr()}
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className="w-full bg-[#FFF3D6]/20 border border-[#073B4C]/20 hover:border-[#073B4C]/40 rounded-xl px-4 py-3 text-base text-[#073B4C] font-semibold focus:outline-none focus:ring-2 focus:ring-[#00B4D8] focus:bg-white transition-all cursor-pointer"
                      />
                      <p className="text-xs text-[#073B4C]/60 mt-1.5 flex items-center gap-1.5">
                        <Check className="w-3.5 h-3.5 text-[#2A9D8F]" />
                        <span>Ketersediaan dijamin langsung untuk pemesanan minimal 1 hari sebelumnya.</span>
                      </p>
                    </div>

                    {/* Time Slot Selector */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#073B4C] mb-2">
                        Pilihan Jam Keberangkatan / Penjemputan
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {[
                          { time: "07:30 (Penjemputan Pagi)", note: "Udara Segar, Tempat Wisata Lebih Lengang", badge: "Pagi" },
                          { time: "09:00 (Sangat Direkomendasikan)", note: "Jadwal Terpopuler & Sempurna untuk Sarapan", badge: "Rekomendasi" },
                          { time: "11:30 (Tengah Hari)", note: "Cocok untuk yang Ingin Istirahat Pagi", badge: "Santai" },
                          { time: "13:00 (Siang / Sore)", note: "Menikmati Sore & Cahaya Golden Hour", badge: "Siang" },
                        ].map((slot) => {
                          const isSlotActive = timeSlot === slot.time;
                          return (
                            <button
                              type="button"
                              key={slot.time}
                              onClick={() => setTimeSlot(slot.time)}
                              className={`p-4 rounded-2xl border-2 text-left transition-all cursor-pointer ${
                                isSlotActive
                                  ? "bg-[#FFF3D6]/50 border-[#F4A261] ring-2 ring-[#F4A261]/25"
                                  : "bg-white border-[#073B4C]/10 hover:border-[#0077B6]/30 hover:bg-[#FFF3D6]/15"
                              }`}
                            >
                              <div className="flex items-center justify-between mb-1">
                                <span className="font-bold text-sm text-[#073B4C]">{slot.time}</span>
                                <span
                                  className={`text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full ${
                                    isSlotActive
                                      ? "bg-[#F4A261] text-white"
                                      : "bg-[#00B4D8]/15 text-[#0077B6]"
                                  }`}
                                >
                                  {slot.badge}
                                </span>
                              </div>
                              <p className="text-xs text-[#073B4C]/70">{slot.note}</p>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                )}

                {/* STEP 3: DATA PESERTA */}
                {step === 3 && (
                  <div className="space-y-6 animate-in fade-in duration-300">
                    <div>
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#00B4D8]/15 text-[#0077B6] text-xs font-bold uppercase tracking-wider mb-2">
                        <Users className="w-3.5 h-3.5" />
                        <span>Langkah 3: Jumlah Tamu &amp; Data Kontak</span>
                      </div>
                      <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-[#073B4C] uppercase tracking-wide">
                        LENGKAPI INFORMASI TAMU
                      </h2>
                      <p className="text-[#073B4C]/75 text-sm sm:text-base mt-1">
                        Pemesanan tur rombongan kecil menjamin kenyamanan personal dan kehangatan semangat Aloha.
                      </p>
                    </div>

                    {/* Guests Steppers Card */}
                    <div className="space-y-4 bg-[#FFF3D6]/30 p-5 rounded-2xl border border-[#073B4C]/15">
                      <div className="flex items-center justify-between">
                        <div>
                          <strong className="block text-[#073B4C] text-base font-bold">Dewasa (Usia 12+ Tahun)</strong>
                          <span className="text-xs text-[#073B4C]/70">Tiket penuh (${currentTour.price}/orang)</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <button
                            type="button"
                            onClick={() => setAdults((prev) => Math.max(1, prev - 1))}
                            className="w-10 h-10 rounded-xl bg-white border border-[#073B4C]/20 hover:bg-[#FFF3D6] text-[#073B4C] font-extrabold text-xl flex items-center justify-center transition-colors cursor-pointer"
                          >
                            -
                          </button>
                          <span className="w-8 text-center text-xl font-heading font-extrabold text-[#073B4C]">
                            {adults}
                          </span>
                          <button
                            type="button"
                            onClick={() => setAdults((prev) => Math.min(20, prev + 1))}
                            className="w-10 h-10 rounded-xl bg-[#F4A261] hover:bg-[#e76f51] text-white font-extrabold text-xl flex items-center justify-center transition-colors cursor-pointer shadow-xs"
                          >
                            +
                          </button>
                        </div>
                      </div>

                      <div className="pt-3 border-t border-[#073B4C]/10 flex items-center justify-between">
                        <div>
                          <strong className="block text-[#073B4C] text-base font-bold">Anak-anak (Usia 3–11 Tahun)</strong>
                          <span className="text-xs text-[#2A9D8F] font-bold">
                            Diskon 25% (${Math.round(currentTour.price * 0.75)}/anak)
                          </span>
                        </div>
                        <div className="flex items-center gap-3">
                          <button
                            type="button"
                            onClick={() => setChildren((prev) => Math.max(0, prev - 1))}
                            className="w-10 h-10 rounded-xl bg-white border border-[#073B4C]/20 hover:bg-[#FFF3D6] text-[#073B4C] font-extrabold text-xl flex items-center justify-center transition-colors cursor-pointer"
                          >
                            -
                          </button>
                          <span className="w-8 text-center text-xl font-heading font-extrabold text-[#073B4C]">
                            {children}
                          </span>
                          <button
                            type="button"
                            onClick={() => setChildren((prev) => Math.min(10, prev + 1))}
                            className="w-10 h-10 rounded-xl bg-[#F4A261] hover:bg-[#e76f51] text-white font-extrabold text-xl flex items-center justify-center transition-colors cursor-pointer shadow-xs"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Contact Details Form */}
                    <div className="space-y-4 pt-2">
                      <h3 className="font-heading text-lg font-bold text-[#073B4C] uppercase tracking-wide">
                        Data Tamu Pemesan (Penanggung Jawab)
                      </h3>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-[#073B4C] mb-1.5">
                          Nama Lengkap Sesuai Identitas / Paspor <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Contoh: Budi Santoso / Sarah Jenkins"
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          className="w-full bg-[#FFF3D6]/20 border border-[#073B4C]/20 rounded-xl px-4 py-3 text-sm text-[#073B4C] placeholder-[#073B4C]/45 focus:outline-none focus:ring-2 focus:ring-[#00B4D8] focus:bg-white transition-all"
                        />
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-[#073B4C] mb-1.5">
                            Alamat Email (Pengiriman Voucher) <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="email"
                            required
                            placeholder="nama@email.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full bg-[#FFF3D6]/20 border border-[#073B4C]/20 rounded-xl px-4 py-3 text-sm text-[#073B4C] placeholder-[#073B4C]/45 focus:outline-none focus:ring-2 focus:ring-[#00B4D8] focus:bg-white transition-all"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-[#073B4C] mb-1.5">
                            Nomor WhatsApp / Telepon <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="tel"
                            required
                            placeholder="+62 812-3456-7890"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            className="w-full bg-[#FFF3D6]/20 border border-[#073B4C]/20 rounded-xl px-4 py-3 text-sm text-[#073B4C] placeholder-[#073B4C]/45 focus:outline-none focus:ring-2 focus:ring-[#00B4D8] focus:bg-white transition-all"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-[#073B4C] mb-1.5">
                          Nama Hotel / Alamat Penjemputan di Waikiki <span className="text-[#073B4C]/50">(Opsional)</span>
                        </label>
                        <input
                          type="text"
                          placeholder="Contoh: Hilton Hawaiian Village, Sheraton Waikiki, Hyatt Regency..."
                          value={hotel}
                          onChange={(e) => setHotel(e.target.value)}
                          className="w-full bg-[#FFF3D6]/20 border border-[#073B4C]/20 rounded-xl px-4 py-3 text-sm text-[#073B4C] placeholder-[#073B4C]/45 focus:outline-none focus:ring-2 focus:ring-[#00B4D8] focus:bg-white transition-all"
                        />
                        <p className="text-[11px] text-[#073B4C]/60 mt-1">
                          Jika Anda belum menentukan hotel saat ini, Anda bisa menyusulkan lokasi penjemputan nanti via WhatsApp.
                        </p>
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-[#073B4C] mb-1.5">
                          Permintaan Khusus / Catatan Diet <span className="text-[#073B4C]/50">(Opsional)</span>
                        </label>
                        <textarea
                          rows={3}
                          placeholder="Contoh: Pilihan makanan vegetarian pada makan siang, membutuhkan kursi khusus anak, dsb."
                          value={specialRequests}
                          onChange={(e) => setSpecialRequests(e.target.value)}
                          className="w-full bg-[#FFF3D6]/20 border border-[#073B4C]/20 rounded-xl px-4 py-3 text-sm text-[#073B4C] placeholder-[#073B4C]/45 focus:outline-none focus:ring-2 focus:ring-[#00B4D8] focus:bg-white transition-all resize-none"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* STEP 4: REVIEW & PERSETUJUAN */}
                {step === 4 && (
                  <div className="space-y-6 animate-in fade-in duration-300">
                    <div>
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#00B4D8]/15 text-[#0077B6] text-xs font-bold uppercase tracking-wider mb-2">
                        <ShieldCheck className="w-3.5 h-3.5" />
                        <span>Langkah 4: Review Pesanan &amp; Verifikasi</span>
                      </div>
                      <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-[#073B4C] uppercase tracking-wide">
                        TINJAU KEMBALI RINCIAN PESANAN ANDA
                      </h2>
                      <p className="text-[#073B4C]/75 text-sm sm:text-base mt-1">
                        Pastikan semua rincian di bawah ini sudah akurat sebelum mengonfirmasi pemesanan resmi Anda.
                      </p>
                    </div>

                    {/* Comprehensive Summary Box */}
                    <div className="p-6 bg-[#FFF3D6]/40 rounded-2xl border border-[#073B4C]/15 space-y-4">
                      {/* Tour recap */}
                      <div className="flex items-start gap-4 pb-4 border-b border-[#073B4C]/10">
                        <div className="relative w-20 h-20 rounded-xl overflow-hidden shrink-0 border border-[#073B4C]/15">
                          <Image src={currentTour.image} alt={currentTour.name} fill className="object-cover" />
                        </div>
                        <div>
                          <span className="text-xs font-bold text-[#0077B6] uppercase tracking-wider bg-[#00B4D8]/15 px-2.5 py-0.5 rounded-md">
                            {currentTour.tag}
                          </span>
                          <h3 className="font-heading text-lg font-bold text-[#073B4C] mt-1">
                            {currentTour.name}
                          </h3>
                          <p className="text-xs text-[#073B4C]/70">{currentTour.duration}</p>
                        </div>
                      </div>

                      {/* Detail points */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm pb-4 border-b border-[#073B4C]/10">
                        <div>
                          <span className="text-xs text-[#073B4C]/60 block font-semibold">Tanggal &amp; Waktu:</span>
                          <strong className="text-[#073B4C] text-sm sm:text-base">
                            {date} ({timeSlot})
                          </strong>
                        </div>
                        <div>
                          <span className="text-xs text-[#073B4C]/60 block font-semibold">Jumlah Tamu:</span>
                          <strong className="text-[#073B4C] text-sm sm:text-base">
                            {adults} Dewasa{children > 0 ? `, ${children} Anak` : ""}
                          </strong>
                        </div>
                        <div>
                          <span className="text-xs text-[#073B4C]/60 block font-semibold">Tamu Penanggung Jawab:</span>
                          <strong className="text-[#073B4C] text-sm sm:text-base">{fullName}</strong>
                        </div>
                        <div>
                          <span className="text-xs text-[#073B4C]/60 block font-semibold">Kontak Pengiriman:</span>
                          <span className="text-[#073B4C] text-xs sm:text-sm block">{email}</span>
                          <span className="text-[#073B4C] text-xs sm:text-sm block">{phone}</span>
                        </div>
                        {hotel && (
                          <div className="sm:col-span-2">
                            <span className="text-xs text-[#073B4C]/60 block font-semibold">Titik Penjemputan:</span>
                            <strong className="text-[#073B4C] text-sm">{hotel}</strong>
                          </div>
                        )}
                        {specialRequests && (
                          <div className="sm:col-span-2">
                            <span className="text-xs text-[#073B4C]/60 block font-semibold">Permintaan Khusus:</span>
                            <span className="text-[#073B4C] text-xs italic">{specialRequests}</span>
                          </div>
                        )}
                      </div>

                      {/* Financial summary */}
                      <div className="space-y-2 pt-2">
                        <div className="flex justify-between text-sm text-[#073B4C]/75">
                          <span>
                            Dewasa ({adults} x ${currentTour.price}):
                          </span>
                          <span>${(adults * currentTour.price).toFixed(2)}</span>
                        </div>
                        {children > 0 && (
                          <div className="flex justify-between text-sm text-[#073B4C]/75">
                            <span>
                              Anak-anak ({children} x ${Math.round(currentTour.price * 0.75)}):
                            </span>
                            <span>${(children * Math.round(currentTour.price * 0.75)).toFixed(2)}</span>
                          </div>
                        )}
                        <div className="flex justify-between text-sm font-semibold text-[#2A9D8F]">
                          <span>Diskon Promo Online Khusus (10%):</span>
                          <span>-${promoDiscount.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between items-center pt-3 border-t border-[#073B4C]/15">
                          <div>
                            <span className="font-heading text-lg font-bold text-[#073B4C] block">
                              Total Biaya Tur:
                            </span>
                            <span className="text-[11px] text-[#2A9D8F] font-bold">
                              ✓ Tanpa Uang Muka Saat Ini (Bayar Saat Hari Keberangkatan)
                            </span>
                          </div>
                          <div className="text-3xl font-heading font-extrabold text-[#0077B6]">
                            ${finalTotal.toFixed(2)}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Terms Agreement Checkbox */}
                    <div className="p-4 bg-white rounded-2xl border border-[#073B4C]/15 flex items-start gap-3">
                      <input
                        type="checkbox"
                        id="terms"
                        checked={agreedTerms}
                        onChange={(e) => setAgreedTerms(e.target.checked)}
                        className="w-5 h-5 rounded-md mt-0.5 text-[#F4A261] focus:ring-[#F4A261] border-[#073B4C]/20 cursor-pointer"
                      />
                      <label htmlFor="terms" className="text-xs text-[#073B4C]/80 leading-relaxed cursor-pointer">
                        Saya menyetujui kebijakan pemesanan Go Tours Hawaii: Pembatalan gratis berlaku hingga 48 jam sebelum jadwal tur. Konfirmasi instan akan dikirimkan ke email dan nomor kontak saya.
                      </label>
                    </div>
                  </div>
                )}

                {/* Bottom Step Navigation Bar */}
                <div className="pt-6 border-t border-[#073B4C]/10 flex items-center justify-between gap-4">
                  {step > 1 ? (
                    <button
                      type="button"
                      onClick={handleBack}
                      className="px-6 py-3 rounded-xl bg-[#FFF3D6] hover:bg-[#073B4C]/10 text-[#073B4C] font-bold text-sm transition-colors cursor-pointer flex items-center gap-2"
                    >
                      <ChevronLeft className="w-4 h-4" />
                      <span>Kembali</span>
                    </button>
                  ) : (
                    <div />
                  )}

                  <button
                    type="button"
                    disabled={isSubmitting}
                    onClick={handleNext}
                    className="px-8 py-3.5 bg-[#F4A261] hover:bg-[#e76f51] text-white rounded-xl font-heading text-base font-bold uppercase tracking-wider shadow-lg shadow-[#F4A261]/25 hover:shadow-xl transition-all cursor-pointer flex items-center gap-2 disabled:opacity-75 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin shrink-0" />
                        <span>MEMPROSES RESERVASI...</span>
                      </>
                    ) : step === 4 ? (
                      <>
                        <Check className="w-5 h-5 stroke-[3]" />
                        <span>KONFIRMASI PEMESANAN SEKARANG</span>
                      </>
                    ) : (
                      <>
                        <span>Langkah Selanjutnya</span>
                        <ChevronRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* RIGHT / SIDEBAR: STICKY ORDER SUMMARY (4 Columns) */}
              <div className="lg:col-span-4 sticky top-36 space-y-6">
                {/* Summary Card */}
                <div className="bg-white rounded-3xl p-6 sm:p-7 shadow-xl border border-[#073B4C]/10 space-y-5">
                  <div className="flex items-center justify-between border-b border-[#073B4C]/10 pb-4">
                    <h3 className="font-heading text-lg font-bold text-[#073B4C] uppercase tracking-wide">
                      RINGKASAN PESANAN
                    </h3>
                    <span className="text-[11px] font-bold uppercase px-2.5 py-0.5 rounded-full bg-[#00B4D8]/15 text-[#0077B6]">
                      Langkah {step} dari 4
                    </span>
                  </div>

                  {/* Tour Quick Peek */}
                  <div className="flex items-center gap-3">
                    <div className="relative w-16 h-16 rounded-xl overflow-hidden shrink-0 border border-[#073B4C]/10 shadow-xs">
                      <Image
                        src={currentTour.image}
                        alt={currentTour.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <span className="text-[10px] font-extrabold uppercase text-[#0077B6]">
                        {currentTour.tag}
                      </span>
                      <h4 className="font-heading text-sm font-bold text-[#073B4C] leading-snug line-clamp-2">
                        {currentTour.name}
                      </h4>
                      <div className="text-[11px] text-[#073B4C]/65 flex items-center gap-1 mt-0.5">
                        <Clock className="w-3 h-3 text-[#F4A261]" /> {currentTour.duration}
                      </div>
                    </div>
                  </div>

                  {/* Highlights List */}
                  <div className="p-3 bg-[#FFF3D6]/35 rounded-xl border border-[#073B4C]/10 space-y-1.5">
                    <div className="text-[11px] font-bold text-[#073B4C] uppercase tracking-wider">
                      Sorotan Fasilitas Tur:
                    </div>
                    {currentTour.highlights.map((h, i) => (
                      <div key={i} className="text-xs text-[#073B4C]/80 flex items-center gap-1.5">
                        <Check className="w-3.5 h-3.5 text-[#2A9D8F] shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>

                  {/* Live Booking Details */}
                  <div className="space-y-2 text-xs text-[#073B4C]/80 border-t border-[#073B4C]/10 pt-4">
                    <div className="flex justify-between">
                      <span className="text-[#073B4C]/60">Tanggal:</span>
                      <strong className="text-[#073B4C]">{date}</strong>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#073B4C]/60">Waktu Jemput:</span>
                      <strong className="text-[#073B4C]">{timeSlot.split(" ")[0]} HST</strong>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#073B4C]/60">Jumlah Tamu:</span>
                      <strong className="text-[#073B4C]">
                        {adults} Dewasa{children > 0 ? `, ${children} Anak` : ""}
                      </strong>
                    </div>
                  </div>

                  {/* Price Calculation */}
                  <div className="p-4 rounded-2xl bg-gradient-to-br from-[#FFF3D6]/50 to-[#F4A261]/10 border border-[#073B4C]/10 space-y-2">
                    <div className="flex justify-between text-xs text-[#073B4C]/70">
                      <span>Harga Standar:</span>
                      <span>${rawTotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-xs text-[#2A9D8F] font-bold">
                      <span>Diskon Promo Online 10%:</span>
                      <span>-${promoDiscount.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between items-center pt-2 border-t border-[#073B4C]/15">
                      <span className="text-xs font-bold text-[#073B4C] uppercase">Total Akhir:</span>
                      <span className="text-2xl font-heading font-extrabold text-[#0077B6]">
                        ${finalTotal.toFixed(2)}
                      </span>
                    </div>
                  </div>

                  {/* Trust Signals */}
                  <div className="space-y-2.5 pt-1 text-xs text-[#073B4C]/80">
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-[#2A9D8F] shrink-0" />
                      <span>Garansi Harga Terbaik &amp; Pembatalan Gratis 48 Jam</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Award className="w-4 h-4 text-[#F4A261] shrink-0" />
                      <span>Pemenang TripAdvisor Travelers&apos; Choice #1</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#00B4D8] shrink-0" />
                      <span>Tanpa Biaya Reservasi Tambahan</span>
                    </div>
                  </div>
                </div>

                {/* Need Help Card */}
                <div className="bg-[#073B4C] text-white rounded-3xl p-5 shadow-lg border border-white/10 space-y-3">
                  <h4 className="font-heading text-base font-bold text-[#00B4D8] uppercase tracking-wide">
                    Butuh Bantuan Reservasi?
                  </h4>
                  <p className="text-xs text-white/80 leading-relaxed">
                    Staf pemandu lokal kami di Waikiki siap membantu merencanakan liburan Anda 7 hari seminggu.
                  </p>
                  <div className="space-y-2 pt-1 text-xs">
                    <a
                      href="tel:808-926-3090"
                      className="flex items-center gap-2 text-white hover:text-[#F4A261] transition-colors font-medium"
                    >
                      <Phone className="w-3.5 h-3.5 text-[#F4A261]" />
                      <span>808-926-3090</span>
                    </a>
                    <a
                      href="mailto:info@gotourshawaii.com"
                      className="flex items-center gap-2 text-white hover:text-[#F4A261] transition-colors font-medium"
                    >
                      <Mail className="w-3.5 h-3.5 text-[#F4A261]" />
                      <span>info@gotourshawaii.com</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default function BookingPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#FFF3D6] flex items-center justify-center">
          <div className="text-center space-y-3">
            <span className="w-10 h-10 border-4 border-[#0077B6] border-t-transparent rounded-full animate-spin inline-block" />
            <p className="text-sm font-bold text-[#073B4C] uppercase tracking-widest">
              Memuat Sistem Reservasi Go Tours Hawaii...
            </p>
          </div>
        </div>
      }
    >
      <BookingPageContent />
    </Suspense>
  );
}

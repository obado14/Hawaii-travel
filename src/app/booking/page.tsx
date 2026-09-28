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
  MapPin,
  FileText,
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
    name: "Tur Memorial Bersejarah USS Arizona & Museum Pearl Harbor",
    shortDesc: "Ziarah sejarah mengenang tragedi 7 Desember 1941 dengan akses prioritas tiket perahu resmi.",
    price: 89,
    duration: "Setengah Hari (5–6 Jam)",
    tag: "Edukasi & Sejarah",
    image: "/sites/gotourshawaii/root/optimized-pearl-harbor-02.jpg",
    highlights: ["Akses Perahu USS Arizona", "Galeri Pameran Sejarah PD II", "Pemandu Berlisensi Resmi", "Antar Jemput Hotel Waikiki"],
  },
  {
    id: "Diamond Head Shuttle",
    name: "Layanan Antar Jemput Shuttle Pendakian Kawah Diamond Head",
    shortDesc: "Akses transportasi harian praktis dari hotel Waikiki menuju kawah vulkanik ikonis Diamond Head.",
    price: 35,
    duration: "Ekskursi Pagi (2.5–3 Jam)",
    tag: "Akses Praktis",
    image: "/sites/gotourshawaii/root/Header-Photo-Diamond-Head.jpeg",
    highlights: ["Jemput Depan Lobi Hotel", "Tiket Masuk Monumen Termasuk", "Waktu Luang Mendaki 2 Jam", "Pemandangan Panoramik Honolulu"],
  },
  {
    id: "Waikiki Turtle Canyon Snorkeling",
    name: "Petualangan Snorkeling Berenang Bersama Penyu Hijau di Turtle Canyon",
    shortDesc: "Berlayar dengan katamaran nyaman dan berenang langsung bersama penyu laut raksasa Honu di perairan jernih.",
    price: 119,
    duration: "Pagi / Siang (3 Jam)",
    tag: "Satwa Liar Laut",
    image: "/sites/gotourshawaii/root/blog-hero-img.png",
    highlights: ["Peralatan Snorkel Lengkap", "Instruktur Bersertifikat", "Spot Penyu Terverifikasi", "Snack & Minuman di Kapal"],
  },
];

const TIME_SLOTS = [
  { id: "slot-1", time: "07:30 - 08:30", label: "Keberangkatan Pagi (Direkomendasikan)" },
  { id: "slot-2", time: "09:00 - 10:00", label: "Keberangkatan Pertengahan Pagi" },
  { id: "slot-3", time: "12:30 - 13:30", label: "Keberangkatan Siang Hari" },
  { id: "slot-4", time: "16:00 - 17:00", label: "Sore Hari (Khusus Acara Luau)" },
];

const matchTourFromQuery = (query?: string | null): string => {
  if (!query) return TOURS[0].id;
  const lower = query.toLowerCase();
  const exact = TOURS.find((t) => t.id.toLowerCase() === lower || t.name.toLowerCase().includes(lower));
  if (exact) return exact.id;
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

  // State: 6 Explicit Steps
  // 1: Pilih Tur, 2: Pilih Tanggal & Jadwal, 3: Jumlah Peserta, 4: Data Pemesan, 5: Review Pesanan, 6: Konfirmasi Booking
  const [step, setStep] = useState<1 | 2 | 3 | 4 | 5 | 6>(1);
  const [selectedTourId, setSelectedTourId] = useState<string>(initialTour);

  // Date & Time
  const tomorrowStr = () => {
    const d = new Date();
    d.setDate(d.getDate() + 1);
    return d.toISOString().split("T")[0];
  };
  const [date, setDate] = useState<string>(tomorrowStr);
  const [timeSlot, setTimeSlot] = useState<string>("07:30 - 08:30");

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
      setStep(4);
      window.scrollTo({ top: 120, behavior: "smooth" });
    } else if (step === 4) {
      if (!fullName.trim()) {
        setErrorMsg("Silakan masukkan nama lengkap tamu pemesan.");
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
      setStep(5);
      window.scrollTo({ top: 120, behavior: "smooth" });
    } else if (step === 5) {
      if (!agreedTerms) {
        setErrorMsg("Anda harus menyetujui ketentuan pemesanan dan kebijakan pembatalan.");
        return;
      }
      // Submit booking to Step 6 (Confirmation)
      setIsSubmitting(true);
      setTimeout(() => {
        const randomRef = `GTH-${Math.floor(100000 + Math.random() * 900000)}`;
        setBookingRef(randomRef);
        setIsSubmitting(false);
        setStep(6);
        window.scrollTo({ top: 80, behavior: "smooth" });
      }, 700);
    }
  };

  const handleBack = () => {
    setErrorMsg("");
    if (step > 1 && step < 6) {
      setStep((prev) => (prev - 1) as 1 | 2 | 3 | 4 | 5 | 6);
      window.scrollTo({ top: 120, behavior: "smooth" });
    }
  };

  const handleStepJump = (target: 1 | 2 | 3 | 4 | 5 | 6) => {
    if (target < step && step !== 6) {
      setErrorMsg("");
      setStep(target);
      window.scrollTo({ top: 120, behavior: "smooth" });
    }
  };

  const stepList = [
    { num: 1 as const, title: "Pilih Tur", short: "Tur" },
    { num: 2 as const, title: "Pilih Tanggal & Jadwal", short: "Jadwal" },
    { num: 3 as const, title: "Jumlah Peserta", short: "Peserta" },
    { num: 4 as const, title: "Data Pemesan", short: "Pemesan" },
    { num: 5 as const, title: "Review Pesanan", short: "Review" },
    { num: 6 as const, title: "Konfirmasi Booking", short: "Konfirmasi" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#F7F5EE] text-[#124E50] selection:bg-[#E76F51] selection:text-white">
      <TopBar />
      <Navbar />

      <main className="flex-1 pb-20">
        {/* Header Hero Banner */}
        <section className="relative bg-[#164A41] text-white py-10 sm:py-14 px-4 sm:px-6 lg:px-8 border-b border-white/10 shadow-md">
          <div className="max-w-7xl mx-auto">
            {/* Breadcrumb Navigation */}
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-white/75 mb-3">
              <Link href="/" className="hover:text-[#E9C46A] transition-colors">
                Beranda
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-white/50" />
              <Link href="/tour-packages" className="hover:text-[#E9C46A] transition-colors">
                Tur &amp; Paket
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-white/50" />
              <span className="text-[#F7F5EE] font-bold">Halaman Booking</span>
            </nav>

            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 border border-white/20 text-[#F7F5EE] text-xs font-bold uppercase tracking-wider mb-2">
                  <Sparkles className="w-3.5 h-3.5 text-[#E9C46A]" />
                  <span>Sistem Pemesanan Resmi Go Tours Hawaii</span>
                </div>
                <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-wide text-white">
                  PESAN TUR HAWAII ANDA
                </h1>
                <p className="text-white/90 text-xs sm:text-sm max-w-2xl mt-1 leading-relaxed">
                  Lakukan reservasi mudah di halaman penuh tanpa popup. Konfirmasi resmi instan, jaminan harga terbaik, dan pembatalan fleksibel hingga 48 jam sebelum tur.
                </p>
              </div>

              {/* Promo Callout */}
              <div className="bg-[#E76F51]/20 border border-[#E76F51]/40 rounded-2xl px-4 py-2.5 shrink-0 self-start md:self-auto backdrop-blur-xs">
                <div className="flex items-center gap-2 text-[#F7F5EE] text-xs font-bold uppercase tracking-wider">
                  <Tag className="w-4 h-4 text-[#E9C46A]" />
                  <span>Diskon Promo 10% Online</span>
                </div>
                <div className="text-white/90 text-xs mt-0.5">Otomatis terhitung pada rincian pesanan</div>
              </div>
            </div>
          </div>
        </section>

        {/* 6-Step Modern Stepper Indicator */}
        <section className="bg-white border-b border-[#164A41]/10 shadow-xs sticky top-16 sm:top-[66px] z-30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
            <div className="grid grid-cols-6 gap-1.5 sm:gap-3 items-center">
              {stepList.map((item) => {
                const isActive = step === item.num;
                const isCompleted = step > item.num;
                return (
                  <button
                    key={item.num}
                    type="button"
                    disabled={item.num >= step}
                    onClick={() => handleStepJump(item.num)}
                    className={`flex items-center gap-1.5 sm:gap-2.5 p-1 sm:p-2 rounded-xl text-left transition-all ${
                      item.num < step
                        ? "cursor-pointer hover:bg-[#F7F5EE]"
                        : item.num === step
                        ? "cursor-default"
                        : "cursor-not-allowed opacity-50"
                    }`}
                  >
                    <div
                      className={`w-6 h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center font-bold text-xs shrink-0 transition-colors shadow-xs ${
                        isCompleted
                          ? "bg-[#2C7A7B] text-white"
                          : isActive
                          ? "bg-[#E76F51] text-white ring-4 ring-[#E76F51]/25"
                          : "bg-[#164A41]/10 text-[#124E50]/60"
                      }`}
                    >
                      {isCompleted ? <Check className="w-3.5 h-3.5 stroke-[3]" /> : item.num}
                    </div>
                    <div className="leading-tight truncate">
                      <span
                        className={`text-[11px] sm:text-xs font-bold uppercase tracking-wider block truncate ${
                          isActive
                            ? "text-[#124E50]"
                            : isCompleted
                            ? "text-[#2C7A7B]"
                            : "text-[#124E50]/50"
                        }`}
                      >
                        <span className="sm:hidden">{item.short}</span>
                        <span className="hidden sm:inline">{item.title}</span>
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* Main Content Workspace Container */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          {errorMsg && (
            <div className="mb-6 p-4 rounded-2xl bg-red-100 border border-red-300 text-red-800 text-sm font-semibold flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-red-600 shrink-0" />
              <span>{errorMsg}</span>
            </div>
          )}

          {step === 6 ? (
            /* STEP 6: KONFIRMASI BOOKING (Success Screen) */
            <div className="bg-white rounded-3xl p-6 sm:p-10 md:p-12 shadow-xl border border-[#164A41]/10 max-w-4xl mx-auto">
              <div className="text-center space-y-4">
                <div className="w-20 h-20 bg-[#2C7A7B]/15 text-[#2C7A7B] rounded-full flex items-center justify-center mx-auto border-2 border-[#2C7A7B]/40 shadow-xl shadow-[#2C7A7B]/10">
                  <CheckCircle2 className="w-10 h-10 stroke-[2.5]" />
                </div>

                <div className="inline-block px-4 py-1.5 rounded-full bg-[#2C7A7B]/15 border border-[#2C7A7B]/30 text-[#2C7A7B] text-xs sm:text-sm font-extrabold uppercase tracking-widest">
                  KODE RESERVASI: {bookingRef}
                </div>

                <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#124E50] uppercase tracking-wide">
                  MAHALO! BOOKING ANDA TELAH TERKONFIRMASI
                </h2>

                <p className="text-[#124E50]/80 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
                  Terima kasih, <strong className="text-[#124E50]">{fullName}</strong>! Reservasi Anda untuk{" "}
                  <strong className="text-[#124E50]">{currentTour.name}</strong> telah berhasil didaftarkan ke sistem pemandu kami.
                </p>
              </div>

              {/* Voucher Detail Card */}
              <div className="mt-8 p-6 sm:p-8 bg-[#F7F5EE] rounded-2xl border border-[#164A41]/15 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#164A41]/10 pb-5">
                  <div className="flex items-center gap-4">
                    <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden shrink-0 border border-[#164A41]/15">
                      <Image
                        src={currentTour.image}
                        alt={currentTour.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <span className="text-[11px] font-bold text-[#2C7A7B] uppercase tracking-wider bg-[#2C7A7B]/15 px-2.5 py-0.5 rounded-md">
                        {currentTour.tag}
                      </span>
                      <h3 className="font-heading text-lg sm:text-xl font-bold text-[#124E50] mt-1">
                        {currentTour.name}
                      </h3>
                      <div className="text-xs text-[#124E50]/70 flex items-center gap-2 mt-0.5">
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5 text-[#E76F51]" /> {currentTour.duration}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="text-left sm:text-right">
                    <span className="text-xs text-[#124E50]/60 block">Total Pembayaran</span>
                    <span className="font-heading text-2xl sm:text-3xl font-extrabold text-[#124E50]">
                      ${finalTotal.toFixed(2)}
                    </span>
                    <span className="text-[11px] text-[#2C7A7B] block font-medium">✓ Termasuk Diskon Promo 10%</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                  <div className="p-3 bg-white rounded-xl border border-[#164A41]/10">
                    <span className="text-xs text-[#124E50]/60 block font-semibold uppercase">Tanggal Tur</span>
                    <strong className="text-[#124E50] text-sm sm:text-base flex items-center gap-1.5 mt-0.5">
                      <Calendar className="w-4 h-4 text-[#E9C46A]" /> {date}
                    </strong>
                  </div>

                  <div className="p-3 bg-white rounded-xl border border-[#164A41]/10">
                    <span className="text-xs text-[#124E50]/60 block font-semibold uppercase">Waktu Jemput</span>
                    <strong className="text-[#124E50] text-sm sm:text-base flex items-center gap-1.5 mt-0.5">
                      <Clock className="w-4 h-4 text-[#E9C46A]" /> {timeSlot}
                    </strong>
                  </div>

                  <div className="p-3 bg-white rounded-xl border border-[#164A41]/10">
                    <span className="text-xs text-[#124E50]/60 block font-semibold uppercase">Jumlah Peserta</span>
                    <strong className="text-[#124E50] text-sm sm:text-base flex items-center gap-1.5 mt-0.5">
                      <Users className="w-4 h-4 text-[#E9C46A]" /> {adults} Dewasa{children > 0 ? `, ${children} Anak` : ""}
                    </strong>
                  </div>

                  <div className="p-3 bg-white rounded-xl border border-[#164A41]/10">
                    <span className="text-xs text-[#124E50]/60 block font-semibold uppercase">Metode Pembayaran</span>
                    <strong className="text-[#2C7A7B] text-sm sm:text-base flex items-center gap-1.5 mt-0.5">
                      <ShieldCheck className="w-4 h-4 text-[#2C7A7B]" /> Bayar Saat Tur
                    </strong>
                  </div>
                </div>

                <div className="p-4 bg-white rounded-xl border border-[#164A41]/10 text-xs text-[#124E50]/80 space-y-1.5">
                  <div className="font-bold text-[#124E50] text-sm mb-1">Informasi Penjemputan &amp; Voucher:</div>
                  <p>
                    Voucher digital resmi dan kontak pemandu telah dikirimkan ke email:{" "}
                    <strong className="text-[#124E50]">{email}</strong> serta nomor WhatsApp:{" "}
                    <strong className="text-[#124E50]">{phone}</strong>.
                  </p>
                  {hotel && (
                    <p>
                      Lokasi Penjemputan Terpilih: <strong className="text-[#124E50]">{hotel}</strong>.
                    </p>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <button
                    type="button"
                    onClick={() => window.print()}
                    className="w-full sm:w-auto px-6 py-3 rounded-xl bg-white hover:bg-neutral-50 text-[#124E50] border border-[#164A41]/20 font-bold text-sm flex items-center justify-center gap-2 cursor-pointer shadow-xs transition-colors"
                  >
                    <Printer className="w-4 h-4 text-[#124E50]" />
                    <span>Cetak Voucher Bukti Pesanan</span>
                  </button>

                  <Link
                    href="/"
                    className="w-full sm:w-auto px-8 py-3 rounded-xl bg-[#E76F51] hover:bg-[#2C7A7B] text-white font-heading text-base font-bold uppercase tracking-wider text-center cursor-pointer shadow-lg shadow-[#E76F51]/30 transition-all"
                  >
                    KEMBALI KE BERANDA
                  </Link>
                </div>
              </div>
            </div>
          ) : (
            /* 2-COLUMN FULL-PAGE WORKSPACE (STEPS 1 - 5) */
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Column: Active Step Form */}
              <div className="lg:col-span-8 bg-white rounded-3xl p-6 sm:p-8 md:p-10 shadow-lg border border-[#164A41]/10">
                {/* STEP 1: PILIH TUR */}
                {step === 1 && (
                  <div className="space-y-6">
                    <div>
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#2C7A7B]/15 text-[#2C7A7B] text-xs font-bold uppercase tracking-wider mb-2">
                        <Compass className="w-3.5 h-3.5" />
                        <span>Langkah 1 dari 6</span>
                      </div>
                      <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-[#124E50] uppercase tracking-wide">
                        PILIH PENGALAMAN WISATA ANDA
                      </h2>
                      <p className="text-xs sm:text-sm text-[#124E50]/75 mt-1">
                        Pilih tur pulau Oahu atau Maui yang ingin Anda ikuti bersama pemandu lokal berlisensi.
                      </p>
                    </div>

                    <div className="space-y-4">
                      {TOURS.map((t) => {
                        const isSelected = selectedTourId === t.id;
                        return (
                          <div
                            key={t.id}
                            role="button"
                            tabIndex={0}
                            onClick={() => setSelectedTourId(t.id)}
                            onKeyDown={(e) => {
                              if (e.key === "Enter" || e.key === " ") setSelectedTourId(t.id);
                            }}
                            className={`p-4 sm:p-5 rounded-2xl border-2 transition-all cursor-pointer flex flex-col sm:flex-row items-start sm:items-center gap-4 ${
                              isSelected
                                ? "border-[#E76F51] bg-[#F7F5EE] shadow-md ring-2 ring-[#E76F51]/20"
                                : "border-[#164A41]/15 hover:border-[#2C7A7B]/50 hover:bg-[#F7F5EE]/40"
                            }`}
                          >
                            <div className="relative w-full sm:w-28 h-28 sm:h-24 rounded-xl overflow-hidden shrink-0 border border-[#164A41]/10">
                              <Image src={t.image} alt={t.name} fill className="object-cover" />
                            </div>

                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2 mb-1">
                                <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded bg-[#2C7A7B]/15 text-[#2C7A7B]">
                                  {t.tag}
                                </span>
                                <span className="text-xs text-[#124E50]/60 flex items-center gap-1">
                                  <Clock className="w-3 h-3 text-[#E76F51]" /> {t.duration}
                                </span>
                              </div>
                              <h3 className="font-heading text-lg sm:text-xl font-bold text-[#124E50] leading-snug">
                                {t.name}
                              </h3>
                              <p className="text-xs text-[#124E50]/70 line-clamp-2 mt-1">
                                {t.shortDesc}
                              </p>
                            </div>

                            <div className="text-right shrink-0 w-full sm:w-auto flex sm:flex-col items-center sm:items-end justify-between border-t sm:border-t-0 pt-3 sm:pt-0 border-neutral-100">
                              <div>
                                <span className="text-xs text-[#124E50]/60 block sm:hidden">Mulai:</span>
                                <div className="font-heading text-2xl font-extrabold text-[#124E50]">
                                  ${t.price}
                                </div>
                                <div className="text-[11px] text-[#124E50]/60">/ orang</div>
                              </div>
                              <div
                                className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors sm:mt-2 ${
                                  isSelected
                                    ? "border-[#E76F51] bg-[#E76F51] text-white"
                                    : "border-neutral-300"
                                }`}
                              >
                                {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* STEP 2: PILIH TANGGAL & JADWAL */}
                {step === 2 && (
                  <div className="space-y-6">
                    <div>
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#2C7A7B]/15 text-[#2C7A7B] text-xs font-bold uppercase tracking-wider mb-2">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>Langkah 2 dari 6</span>
                      </div>
                      <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-[#124E50] uppercase tracking-wide">
                        PILIH TANGGAL &amp; JADWAL KEBERANGKATAN
                      </h2>
                      <p className="text-xs sm:text-sm text-[#124E50]/75 mt-1">
                        Pilih tanggal tur yang Anda inginkan beserta slot waktu penjemputan lobi hotel.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Date Picker Input */}
                      <div className="space-y-2">
                        <label htmlFor="tour-date-input" className="block text-xs font-bold text-[#124E50] uppercase tracking-wider">
                          Tanggal Keberangkatan <span className="text-red-500">*</span>
                        </label>
                        <input
                          id="tour-date-input"
                          type="date"
                          value={date}
                          min={tomorrowStr()}
                          onChange={(e) => setDate(e.target.value)}
                          className="w-full bg-[#F7F5EE]/60 border border-[#164A41]/20 rounded-xl px-4 py-3 text-base text-[#124E50] focus:outline-none focus:ring-2 focus:ring-[#2C7A7B] transition-all font-medium"
                        />
                        <span className="text-[11px] text-[#124E50]/60 block">
                          Pemesanan dibuka hingga 12 bulan ke depan.
                        </span>
                      </div>

                      {/* Time Slots Radio Selection */}
                      <div className="space-y-2">
                        <label className="block text-xs font-bold text-[#124E50] uppercase tracking-wider">
                          Slot Waktu Penjemputan <span className="text-red-500">*</span>
                        </label>
                        <div className="space-y-2.5">
                          {TIME_SLOTS.map((slot) => {
                            const isTimeActive = timeSlot === slot.time;
                            return (
                              <label
                                key={slot.id}
                                className={`flex items-center justify-between p-3 rounded-xl border-2 cursor-pointer transition-all ${
                                  isTimeActive
                                    ? "border-[#E76F51] bg-[#F7F5EE]"
                                    : "border-[#164A41]/15 hover:border-[#2C7A7B]/40"
                                }`}
                              >
                                <div>
                                  <div className="font-bold text-sm text-[#124E50]">{slot.time}</div>
                                  <div className="text-[11px] text-[#124E50]/70">{slot.label}</div>
                                </div>
                                <input
                                  type="radio"
                                  name="timeSlot"
                                  checked={isTimeActive}
                                  onChange={() => setTimeSlot(slot.time)}
                                  className="accent-[#E76F51] w-4 h-4 cursor-pointer"
                                />
                              </label>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* STEP 3: JUMLAH PESERTA */}
                {step === 3 && (
                  <div className="space-y-6">
                    <div>
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#2C7A7B]/15 text-[#2C7A7B] text-xs font-bold uppercase tracking-wider mb-2">
                        <Users className="w-3.5 h-3.5" />
                        <span>Langkah 3 dari 6</span>
                      </div>
                      <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-[#124E50] uppercase tracking-wide">
                        JUMLAH PESERTA
                      </h2>
                      <p className="text-xs sm:text-sm text-[#124E50]/75 mt-1">
                        Tentukan jumlah tamu dewasa dan anak-anak yang akan ikut serta dalam perjalanan.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {/* Adults Counter */}
                      <div className="p-5 rounded-2xl border-2 border-[#164A41]/15 bg-white space-y-3">
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="font-bold text-base text-[#124E50]">Dewasa (Usia 12+)</div>
                            <div className="text-xs text-[#124E50]/60">${currentTour.price} / orang</div>
                          </div>
                          <Users className="w-5 h-5 text-[#2C7A7B]" />
                        </div>
                        <div className="flex items-center justify-between pt-2 border-t border-neutral-100">
                          <button
                            type="button"
                            onClick={() => setAdults((prev) => Math.max(1, prev - 1))}
                            className="w-10 h-10 rounded-xl bg-[#F7F5EE] hover:bg-[#E9C46A]/30 text-[#124E50] font-bold text-lg flex items-center justify-center transition-colors cursor-pointer"
                            aria-label="Kurangi Dewasa"
                          >
                            -
                          </button>
                          <span className="font-heading text-3xl font-bold text-[#124E50]">{adults}</span>
                          <button
                            type="button"
                            onClick={() => setAdults((prev) => prev + 1)}
                            className="w-10 h-10 rounded-xl bg-[#164A41] hover:bg-[#2C7A7B] text-white font-bold text-lg flex items-center justify-center transition-colors cursor-pointer"
                            aria-label="Tambah Dewasa"
                          >
                            +
                          </button>
                        </div>
                      </div>

                      {/* Children Counter */}
                      <div className="p-5 rounded-2xl border-2 border-[#164A41]/15 bg-white space-y-3">
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="font-bold text-base text-[#124E50]">Anak-anak (Usia 3–11)</div>
                            <div className="text-xs text-[#124E50]/60">
                              ${Math.round(currentTour.price * 0.75)} / anak (Diskon 25%)
                            </div>
                          </div>
                          <Users className="w-5 h-5 text-[#2C7A7B]" />
                        </div>
                        <div className="flex items-center justify-between pt-2 border-t border-neutral-100">
                          <button
                            type="button"
                            onClick={() => setChildren((prev) => Math.max(0, prev - 1))}
                            className="w-10 h-10 rounded-xl bg-[#F7F5EE] hover:bg-[#E9C46A]/30 text-[#124E50] font-bold text-lg flex items-center justify-center transition-colors cursor-pointer"
                            aria-label="Kurangi Anak"
                          >
                            -
                          </button>
                          <span className="font-heading text-3xl font-bold text-[#124E50]">{children}</span>
                          <button
                            type="button"
                            onClick={() => setChildren((prev) => prev + 1)}
                            className="w-10 h-10 rounded-xl bg-[#164A41] hover:bg-[#2C7A7B] text-white font-bold text-lg flex items-center justify-center transition-colors cursor-pointer"
                            aria-label="Tambah Anak"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-[#F7F5EE] border border-[#164A41]/15 text-xs text-[#124E50]/80">
                      ℹ️ Bayi di bawah 3 tahun (infant) gratis selama duduk di pangkuan orang tua dan tidak membutuhkan kursi khusus.
                    </div>
                  </div>
                )}

                {/* STEP 4: DATA PEMESAN */}
                {step === 4 && (
                  <div className="space-y-6">
                    <div>
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#2C7A7B]/15 text-[#2C7A7B] text-xs font-bold uppercase tracking-wider mb-2">
                        <FileText className="w-3.5 h-3.5" />
                        <span>Langkah 4 dari 6</span>
                      </div>
                      <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-[#124E50] uppercase tracking-wide">
                        DATA PEMESAN &amp; LOKASI JEMPUT
                      </h2>
                      <p className="text-xs sm:text-sm text-[#124E50]/75 mt-1">
                        Masukkan data kontak pemesan untuk pengiriman konfirmasi instan dan jadwal penjemputan.
                      </p>
                    </div>

                    <div className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="fullname-input" className="block text-xs font-bold text-[#124E50] uppercase tracking-wider mb-1">
                            Nama Lengkap Tamu Utama <span className="text-red-500">*</span>
                          </label>
                          <input
                            id="fullname-input"
                            type="text"
                            required
                            placeholder="cth. John Doe"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            className="w-full bg-[#F7F5EE]/60 border border-[#164A41]/20 rounded-xl px-4 py-3 text-sm text-[#124E50] focus:outline-none focus:ring-2 focus:ring-[#2C7A7B] transition-all font-medium"
                          />
                        </div>

                        <div>
                          <label htmlFor="email-input" className="block text-xs font-bold text-[#124E50] uppercase tracking-wider mb-1">
                            Alamat Email Valid <span className="text-red-500">*</span>
                          </label>
                          <input
                            id="email-input"
                            type="email"
                            required
                            placeholder="nama@email.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full bg-[#F7F5EE]/60 border border-[#164A41]/20 rounded-xl px-4 py-3 text-sm text-[#124E50] focus:outline-none focus:ring-2 focus:ring-[#2C7A7B] transition-all font-medium"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="phone-input" className="block text-xs font-bold text-[#124E50] uppercase tracking-wider mb-1">
                            Nomor Telepon / WhatsApp <span className="text-red-500">*</span>
                          </label>
                          <input
                            id="phone-input"
                            type="tel"
                            required
                            placeholder="+62 812-3456-7890"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            className="w-full bg-[#F7F5EE]/60 border border-[#164A41]/20 rounded-xl px-4 py-3 text-sm text-[#124E50] focus:outline-none focus:ring-2 focus:ring-[#2C7A7B] transition-all font-medium"
                          />
                        </div>

                        <div>
                          <label htmlFor="hotel-input" className="block text-xs font-bold text-[#124E50] uppercase tracking-wider mb-1">
                            Hotel Waikiki / Lokasi Jemput <span className="text-[#124E50]/60">(Opsional)</span>
                          </label>
                          <input
                            id="hotel-input"
                            type="text"
                            placeholder="cth. Sheraton Waikiki, Hilton Hawaiian Village..."
                            value={hotel}
                            onChange={(e) => setHotel(e.target.value)}
                            className="w-full bg-[#F7F5EE]/60 border border-[#164A41]/20 rounded-xl px-4 py-3 text-sm text-[#124E50] focus:outline-none focus:ring-2 focus:ring-[#2C7A7B] transition-all font-medium"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="special-requests-input" className="block text-xs font-bold text-[#124E50] uppercase tracking-wider mb-1">
                          Catatan Khusus / Permintaan Khusus <span className="text-[#124E50]/60">(Opsional)</span>
                        </label>
                        <textarea
                          id="special-requests-input"
                          rows={3}
                          placeholder="cth. Membawa kursi dorong lipat, preferensi vegetarian untuk makan siang..."
                          value={specialRequests}
                          onChange={(e) => setSpecialRequests(e.target.value)}
                          className="w-full bg-[#F7F5EE]/60 border border-[#164A41]/20 rounded-xl px-4 py-2.5 text-sm text-[#124E50] focus:outline-none focus:ring-2 focus:ring-[#2C7A7B] transition-all font-medium"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* STEP 5: REVIEW PESANAN */}
                {step === 5 && (
                  <div className="space-y-6">
                    <div>
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#2C7A7B]/15 text-[#2C7A7B] text-xs font-bold uppercase tracking-wider mb-2">
                        <Check className="w-3.5 h-3.5" />
                        <span>Langkah 5 dari 6</span>
                      </div>
                      <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-[#124E50] uppercase tracking-wide">
                        REVIEW &amp; TINJAU PESANAN ANDA
                      </h2>
                      <p className="text-xs sm:text-sm text-[#124E50]/75 mt-1">
                        Periksa kembali rincian pemesanan Anda sebelum melanjutkan ke konfirmasi akhir.
                      </p>
                    </div>

                    <div className="p-5 sm:p-6 bg-[#F7F5EE] rounded-2xl border border-[#164A41]/15 space-y-4">
                      <div className="flex items-start justify-between border-b border-[#164A41]/10 pb-4">
                        <div>
                          <span className="text-[11px] font-bold text-[#2C7A7B] uppercase tracking-wider">
                            Paket Tur Terpilih
                          </span>
                          <h3 className="font-heading text-xl font-bold text-[#124E50]">{currentTour.name}</h3>
                          <p className="text-xs text-[#124E50]/70 mt-0.5">{currentTour.duration}</p>
                        </div>
                        <span className="text-xs bg-[#E76F51] text-white font-bold px-2.5 py-1 rounded-md">
                          {currentTour.tag}
                        </span>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm border-b border-[#164A41]/10 pb-4">
                        <div>
                          <span className="text-[#124E50]/60 block text-xs">Tanggal Tur:</span>
                          <strong className="text-[#124E50]">{date}</strong>
                        </div>
                        <div>
                          <span className="text-[#124E50]/60 block text-xs">Slot Waktu Jemput:</span>
                          <strong className="text-[#124E50]">{timeSlot}</strong>
                        </div>
                        <div>
                          <span className="text-[#124E50]/60 block text-xs">Jumlah Peserta:</span>
                          <strong className="text-[#124E50]">
                            {adults} Dewasa{children > 0 ? `, ${children} Anak` : ""}
                          </strong>
                        </div>
                        <div>
                          <span className="text-[#124E50]/60 block text-xs">Tamu Pemesan:</span>
                          <strong className="text-[#124E50]">{fullName || "-"}</strong>
                        </div>
                      </div>

                      <div className="text-xs text-[#124E50]/80 space-y-1">
                        <div>
                          Kontak: <strong>{email}</strong> | <strong>{phone}</strong>
                        </div>
                        {hotel && (
                          <div>
                            Lokasi Jemput: <strong>{hotel}</strong>
                          </div>
                        )}
                        {specialRequests && (
                          <div>
                            Catatan Khusus: <em>{specialRequests}</em>
                          </div>
                        )}
                      </div>

                      {/* Pricing Breakdown inside Review */}
                      <div className="pt-3 border-t border-[#164A41]/10 space-y-2">
                        <div className="flex justify-between text-xs text-[#124E50]/75">
                          <span>
                            Dewasa ({adults} x ${currentTour.price})
                          </span>
                          <span>${adults * currentTour.price}</span>
                        </div>
                        {children > 0 && (
                          <div className="flex justify-between text-xs text-[#124E50]/75">
                            <span>
                              Anak ({children} x ${Math.round(currentTour.price * 0.75)})
                            </span>
                            <span>${children * Math.round(currentTour.price * 0.75)}</span>
                          </div>
                        )}
                        <div className="flex justify-between text-xs font-semibold text-[#2C7A7B]">
                          <span>Diskon Promo Online (10%)</span>
                          <span>-${promoDiscount.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between items-baseline pt-2 border-t border-[#164A41]/10">
                          <div>
                            <div className="font-heading text-lg text-[#124E50]">TOTAL AKHIR</div>
                            <div className="text-[11px] text-[#2C7A7B]">✓ Tanpa biaya tersembunyi</div>
                          </div>
                          <div className="font-heading text-3xl font-extrabold text-[#124E50]">
                            ${finalTotal.toFixed(2)}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-2.5">
                      <input
                        type="checkbox"
                        id="terms"
                        checked={agreedTerms}
                        onChange={(e) => setAgreedTerms(e.target.checked)}
                        className="accent-[#E76F51] w-4 h-4 mt-0.5 cursor-pointer"
                      />
                      <label htmlFor="terms" className="text-xs text-[#124E50]/80 cursor-pointer">
                        Saya menyetujui kebijakan pembatalan fleksibel 48 jam dan memahami pembayaran diselesaikan saat hari tur di Hawaii tanpa biaya di muka saat ini.
                      </label>
                    </div>
                  </div>
                )}

                {/* Bottom Step Navigation Bar */}
                <div className="mt-8 pt-6 border-t border-[#164A41]/10 flex items-center justify-between gap-4">
                  {step > 1 ? (
                    <button
                      type="button"
                      onClick={handleBack}
                      className="px-5 py-2.5 rounded-xl bg-neutral-100 hover:bg-neutral-200 text-[#124E50] font-semibold text-xs sm:text-sm flex items-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <ChevronLeft className="w-4 h-4" />
                      <span>Kembali</span>
                    </button>
                  ) : (
                    <div />
                  )}

                  {step < 5 ? (
                    <button
                      type="button"
                      onClick={handleNext}
                      className="px-7 py-3 rounded-xl bg-[#E76F51] hover:bg-[#2C7A7B] text-white font-heading text-base font-bold uppercase tracking-wider flex items-center gap-2 cursor-pointer shadow-lg shadow-[#E76F51]/30 transition-all transform hover:-translate-y-0.5"
                    >
                      <span>Lanjut: {stepList[step]?.title || "Selanjutnya"}</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  ) : (
                    <button
                      type="button"
                      disabled={isSubmitting}
                      onClick={handleNext}
                      className="px-8 py-3.5 rounded-xl bg-[#E76F51] hover:bg-[#2C7A7B] text-white font-heading text-lg font-bold uppercase tracking-wider flex items-center gap-2 cursor-pointer shadow-xl shadow-[#E76F51]/30 transition-all disabled:opacity-75 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin shrink-0" />
                          <span>MEMPROSES RESERVASI...</span>
                        </>
                      ) : (
                        <>
                          <Check className="w-5 h-5 stroke-[3]" />
                          <span>KONFIRMASI BOOKING SEKARANG</span>
                        </>
                      )}
                    </button>
                  )}
                </div>
              </div>

              {/* Right Column: Sticky Order Summary & Guarantees */}
              <div className="lg:col-span-4 sticky top-36 space-y-5">
                <div className="bg-white rounded-3xl p-6 shadow-lg border border-[#164A41]/10 space-y-4">
                  <div className="flex items-center justify-between border-b border-[#164A41]/10 pb-3">
                    <h3 className="font-heading text-xl font-bold text-[#124E50]">RINGKASAN PESANAN</h3>
                    <span className="text-[11px] font-extrabold uppercase px-2 py-0.5 rounded bg-[#2C7A7B]/15 text-[#2C7A7B]">
                      Langkah {step} dari 6
                    </span>
                  </div>

                  {/* Selected Tour Mini Preview */}
                  <div className="flex items-center gap-3">
                    <div className="relative w-14 h-14 rounded-xl overflow-hidden shrink-0 border border-[#164A41]/10">
                      <Image src={currentTour.image} alt={currentTour.name} fill className="object-cover" />
                    </div>
                    <div>
                      <div className="font-heading text-sm font-bold text-[#124E50] line-clamp-1">
                        {currentTour.name}
                      </div>
                      <div className="text-xs text-[#124E50]/60">{currentTour.duration}</div>
                    </div>
                  </div>

                  {/* Summary Details */}
                  <div className="space-y-2 text-xs text-[#124E50]/80 pt-2 border-t border-[#164A41]/10">
                    <div className="flex justify-between">
                      <span className="text-[#124E50]/60">Tanggal:</span>
                      <strong className="text-[#124E50]">{date || "-"}</strong>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#124E50]/60">Waktu:</span>
                      <strong className="text-[#124E50]">{timeSlot}</strong>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#124E50]/60">Peserta:</span>
                      <strong className="text-[#124E50]">
                        {adults} Dewasa{children > 0 ? `, ${children} Anak` : ""}
                      </strong>
                    </div>
                  </div>

                  {/* Live Cost Breakdown */}
                  <div className="space-y-1.5 pt-3 border-t border-[#164A41]/10 text-xs">
                    <div className="flex justify-between text-[#124E50]/75">
                      <span>Harga Dewasa ({adults}x)</span>
                      <span>${adults * currentTour.price}</span>
                    </div>
                    {children > 0 && (
                      <div className="flex justify-between text-[#124E50]/75">
                        <span>Harga Anak ({children}x)</span>
                        <span>${children * Math.round(currentTour.price * 0.75)}</span>
                      </div>
                    )}
                    <div className="flex justify-between font-bold text-[#2C7A7B]">
                      <span>Diskon Promo 10%</span>
                      <span>-${promoDiscount.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between items-baseline pt-2 border-t border-[#164A41]/10">
                      <span className="font-heading text-base text-[#124E50]">TOTAL BIAYA:</span>
                      <span className="font-heading text-2xl font-extrabold text-[#124E50]">
                        ${finalTotal.toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Trust & Guarantee Box */}
                <div className="bg-[#F7F5EE] rounded-2xl p-5 border border-[#164A41]/15 space-y-2.5 text-xs text-[#124E50]/80">
                  <div className="flex items-center gap-2 font-bold text-[#124E50]">
                    <ShieldCheck className="w-4 h-4 text-[#2C7A7B]" />
                    <span>Jaminan Pemesanan Resmi:</span>
                  </div>
                  <ul className="space-y-1.5 pl-6 list-disc text-[11.5px]">
                    <li>Pembatalan gratis hingga 48 jam sebelum tur</li>
                    <li>Tidak ada pembayaran uang muka saat pemesanan online</li>
                    <li>Pemandu lokal berlisensi negara bagian Hawaii</li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default function BookingPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#F7F5EE] flex items-center justify-center p-8">
          <div className="text-center space-y-3">
            <span className="w-10 h-10 border-4 border-[#164A41] border-t-transparent rounded-full animate-spin inline-block" />
            <p className="text-sm font-bold text-[#124E50] uppercase tracking-wider">
              Memuat Halaman Booking...
            </p>
          </div>
        </div>
      }
    >
      <BookingPageContent />
    </Suspense>
  );
}

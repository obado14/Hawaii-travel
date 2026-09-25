"use client";

import React, { useState } from "react";
import {
  X,
  Check,
  Clock,
  ChevronRight,
  ChevronLeft,
  ShieldCheck,
} from "lucide-react";

interface BookingDialogProps {
  isOpen: boolean;
  onClose: () => void;
  defaultTour?: string;
}

interface TourOption {
  id: string;
  name: string;
  price: number;
  duration: string;
  tag: string;
}

const TOURS: TourOption[] = [
  {
    id: "Circle Island Tour",
    name: "Tur Keliling Pulau Oahu (Permata Tersembunyi & Air Terjun)",
    price: 149,
    duration: "Sehari Penuh (8-9 jam)",
    tag: "Paling Populer",
  },
  {
    id: "Hawaiian Luau",
    name: "Pesta Luau Paina Waikiki & Pertunjukan Budaya Polinesia",
    price: 179,
    duration: "Malam Hari (4 jam)",
    tag: "Budaya Asli",
  },
  {
    id: "Pearl Harbor Tour",
    name: "Ekskursi Bersejarah Pearl Harbor & Memorial USS Arizona",
    price: 119,
    duration: "Setengah Hari (5 jam)",
    tag: "Sejarah",
  },
  {
    id: "Diamond Head Shuttle",
    name: "Shuttle Pendakian Diamond Head dengan Tiket Reservasi",
    price: 45,
    duration: "Ekspres (3 jam)",
    tag: "Shuttle Harian",
  },
  {
    id: "Waikiki Turtle Canyon Snorkeling",
    name: "Snorkeling & Berenang Penyu Waikiki Turtle Canyon",
    price: 129,
    duration: "Setengah Hari (3.5 jam)",
    tag: "Petualangan Eko",
  },
];

const matchTourId = (nameOrId?: string): string => {
  if (!nameOrId) return TOURS[0].id;
  const lower = nameOrId.toLowerCase();
  const direct = TOURS.find((t) => t.id.toLowerCase() === lower);
  if (direct) return direct.id;

  if (lower.includes("luau") || lower.includes("paina")) return "Hawaiian Luau";
  if (lower.includes("pearl") || lower.includes("arizona")) return "Pearl Harbor Tour";
  if (lower.includes("diamond") || lower.includes("shuttle")) return "Diamond Head Shuttle";
  if (lower.includes("snorkeling") || lower.includes("penyu") || lower.includes("turtle")) return "Waikiki Turtle Canyon Snorkeling";
  return "Circle Island Tour";
};

export function BookingDialog({ isOpen, onClose, defaultTour }: BookingDialogProps) {
  const [step, setStep] = useState<1 | 2 | 3 | 4 | 5>(1);
  const [selectedTour, setSelectedTour] = useState(() => matchTourId(defaultTour));
  const [prevDefaultTour, setPrevDefaultTour] = useState(defaultTour);
  if (defaultTour !== prevDefaultTour) {
    setPrevDefaultTour(defaultTour);
    if (defaultTour) {
      setSelectedTour(matchTourId(defaultTour));
    }
  }

  const [date, setDate] = useState(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const yyyy = tomorrow.getFullYear();
    const mm = String(tomorrow.getMonth() + 1).padStart(2, "0");
    const dd = String(tomorrow.getDate()).padStart(2, "0");
    return `${yyyy}-${mm}-${dd}`;
  });

  const [timeSlot, setTimeSlot] = useState("08:00 (Keberangkatan Pagi)");
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [hotel, setHotel] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [bookingRef, setBookingRef] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const currentTourData = TOURS.find((t) => t.id === selectedTour) || TOURS[0];
  const rawTotal = adults * currentTourData.price + children * (currentTourData.price * 0.75);
  const discount = rawTotal * 0.1; // 10% Online Promo
  const total = rawTotal - discount;

  const handleNext = () => {
    setErrorMsg("");
    if (step === 1) {
      if (!selectedTour) {
        setErrorMsg("Silakan pilih paket tur untuk melanjutkan.");
        return;
      }
      setStep(2);
    } else if (step === 2) {
      if (!date) {
        setErrorMsg("Silakan tentukan tanggal tur yang diinginkan.");
        return;
      }
      setStep(3);
    } else if (step === 3) {
      if (adults < 1) {
        setErrorMsg("Minimal 1 tamu dewasa diperlukan.");
        return;
      }
      setStep(4);
    } else if (step === 4) {
      if (!fullName.trim()) {
        setErrorMsg("Silakan masukkan nama lengkap Anda.");
        return;
      }
      if (!email.trim() || !email.includes("@")) {
        setErrorMsg("Silakan masukkan alamat email yang valid.");
        return;
      }
      if (!phone.trim()) {
        setErrorMsg("Silakan masukkan nomor telepon / WhatsApp Anda.");
        return;
      }
      setStep(5);
    }
  };

  const handleBack = () => {
    setErrorMsg("");
    if (step > 1) {
      setStep((prev) => (prev - 1) as 1 | 2 | 3 | 4 | 5);
    }
  };

  const handleStepJump = (targetStep: 1 | 2 | 3 | 4 | 5) => {
    if (targetStep < step) {
      setErrorMsg("");
      setStep(targetStep);
    }
  };

  const handleConfirm = () => {
    setIsSubmitting(true);
    setErrorMsg("");
    setTimeout(() => {
      const randomCode = `GTH-${Math.floor(10000 + Math.random() * 90000)}`;
      setBookingRef(randomCode);
      setConfirmed(true);
      setIsSubmitting(false);
    }, 600);
  };

  const handleResetAndClose = () => {
    setConfirmed(false);
    setIsSubmitting(false);
    setStep(1);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={handleResetAndClose}
    >
      <div
        className="relative w-full max-w-xl bg-[#0c1f38] border border-white/20 rounded-3xl shadow-2xl p-6 sm:p-8 text-white overflow-hidden animate-in zoom-in-95 duration-200 max-h-[92vh] flex flex-col justify-between"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={handleResetAndClose}
          className="absolute top-4 right-4 p-2 text-neutral-400 hover:text-white rounded-full bg-white/5 hover:bg-white/10 transition-colors cursor-pointer z-20"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {confirmed ? (
          /* SUCCESS STATE */
          <div className="text-center py-6 sm:py-8 space-y-4 animate-in fade-in duration-300">
            <div className="w-20 h-20 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto border-2 border-emerald-500/40 shadow-xl shadow-emerald-500/10">
              <Check className="w-10 h-10 stroke-[3]" />
            </div>

            <div className="inline-block px-3.5 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs font-bold uppercase tracking-wider">
              Kode Reservasi: {bookingRef}
            </div>

            <h3 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-wide">
              PERMINTAAN PEMESANAN ANDA TELAH DITERIMA!
            </h3>

            <p className="text-neutral-200 text-sm sm:text-base leading-relaxed max-w-md mx-auto">
              Mahalo, <strong className="text-white">{fullName}</strong>! Kami telah mengamankan kursi Anda untuk{" "}
              <strong className="text-[#f5b324]">{currentTourData.name}</strong> pada{" "}
              <strong className="text-white">{date}</strong> ({timeSlot}).
            </p>

            <div className="p-4 bg-white/5 rounded-2xl border border-white/10 text-left text-xs sm:text-sm space-y-2 max-w-md mx-auto">
              <div className="flex justify-between text-neutral-300">
                <span>Jumlah Tamu:</span>
                <span className="font-semibold text-white">
                  {adults} Dewasa{children > 0 ? `, ${children} Anak` : ""}
                </span>
              </div>
              <div className="flex justify-between text-neutral-300">
                <span>Perkiraan Total:</span>
                <span className="font-bold text-[#f5b324] text-base">${total.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-neutral-300">
                <span>Konfirmasi Dikirim Ke:</span>
                <span className="font-medium text-white">{email}</span>
              </div>
              <div className="pt-2 border-t border-white/10 text-[12px] text-neutral-400">
                Pembatalan gratis hingga 48 jam sebelum keberangkatan. Detail titik penjemputan akan dikirimkan melalui email.
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={handleResetAndClose}
                className="w-full sm:w-auto px-10 py-3 bg-[#f15d22] hover:bg-[#d84b13] text-white rounded-xl font-heading text-lg font-bold uppercase tracking-wider shadow-xl shadow-[#f15d22]/30 transition-all cursor-pointer"
              >
                SELESAI &amp; JELAJAHI LEBIH LANJUT
              </button>
            </div>
          </div>
        ) : (
          /* WIZARD FLOW */
          <div className="flex flex-col h-full overflow-y-auto pr-1">
            {/* Top Stepper Indicator */}
            <div className="mb-6">
              <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-neutral-400 mb-2.5">
                <span>Langkah {step} dari 5</span>
                <span className="text-[#f5b324] font-semibold">
                  {step === 1 && "Pilih Tur"}
                  {step === 2 && "Pilih Tanggal & Waktu"}
                  {step === 3 && "Jumlah Tamu"}
                  {step === 4 && "Data Kontak"}
                  {step === 5 && "Tinjau & Konfirmasi"}
                </span>
              </div>

              {/* Interactive step navigation bars */}
              <div className="grid grid-cols-5 gap-1.5 mb-1.5">
                {[
                  { s: 1 as const, label: "Tur" },
                  { s: 2 as const, label: "Jadwal" },
                  { s: 3 as const, label: "Tamu" },
                  { s: 4 as const, label: "Kontak" },
                  { s: 5 as const, label: "Tinjau" },
                ].map((item) => (
                  <button
                    key={item.s}
                    type="button"
                    disabled={item.s >= step}
                    onClick={() => handleStepJump(item.s)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      item.s === step
                        ? "bg-[#f15d22] ring-2 ring-[#f15d22]/40"
                        : item.s < step
                        ? "bg-emerald-500 cursor-pointer hover:opacity-80"
                        : "bg-white/15 cursor-not-allowed"
                    }`}
                    title={item.s < step ? `Klik untuk kembali ke langkah ${item.label}` : item.label}
                    aria-label={`Langkah ${item.s}: ${item.label}`}
                  />
                ))}
              </div>
            </div>

            {/* Error Message Alert */}
            {errorMsg && (
              <div className="mb-4 p-3 rounded-xl bg-red-500/20 border border-red-500/40 text-red-200 text-xs sm:text-sm font-medium animate-in fade-in">
                {errorMsg}
              </div>
            )}

            {/* STEP 1: SELECT TOUR */}
            {step === 1 && (
              <div className="space-y-3.5 animate-in fade-in duration-200">
                <div className="text-left mb-1">
                  <h3 className="font-heading text-2xl sm:text-3xl text-white uppercase tracking-wide">
                    PILIH PENGALAMAN WISATA ANDA
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-300">
                    Pilih paket tur ekskursi pemenang penghargaan yang ingin Anda pesan.
                  </p>
                </div>

                <div className="space-y-2.5 max-h-[360px] overflow-y-auto pr-1">
                  {TOURS.map((t) => (
                    <div
                      key={t.id}
                      onClick={() => setSelectedTour(t.id)}
                      className={`p-3.5 sm:p-4 rounded-2xl border cursor-pointer transition-all duration-200 flex items-center justify-between ${
                        selectedTour === t.id
                          ? "bg-[#f15d22]/20 border-[#f15d22] ring-1 ring-[#f15d22]"
                          : "bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/25"
                      }`}
                    >
                      <div className="space-y-1 text-left">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-bold uppercase tracking-wider text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded-md">
                            {t.tag}
                          </span>
                          <span className="text-xs text-neutral-400 flex items-center gap-1">
                            <Clock className="w-3 h-3" /> {t.duration}
                          </span>
                        </div>
                        <h4 className="font-semibold text-sm sm:text-base text-white">{t.name}</h4>
                      </div>

                      <div className="text-right pl-3 shrink-0">
                        <div className="text-lg sm:text-xl font-extrabold text-[#f5b324] font-heading">
                          ${t.price}
                        </div>
                        <span className="text-[11px] text-neutral-400">/ orang</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* STEP 2: SELECT DATE & TIME */}
            {step === 2 && (
              <div className="space-y-4 animate-in fade-in duration-200 text-left">
                <div>
                  <h3 className="font-heading text-2xl sm:text-3xl text-white uppercase tracking-wide">
                    PILIH TANGGAL &amp; WAKTU
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-300">
                    Tur harian berangkat dari Waikiki dengan jaminan ketersediaan kursi.
                  </p>
                </div>

                {/* Tour Selected Chip */}
                <div className="p-3 bg-white/5 border border-white/10 rounded-xl flex items-center justify-between">
                  <div className="text-xs text-neutral-300">
                    Pilihan: <strong className="text-white">{currentTourData.name}</strong>
                  </div>
                  <span className="text-xs text-[#f5b324] font-bold">${currentTourData.price}/org</span>
                </div>

                {/* Date Input */}
                <div>
                  <label className="block text-xs font-bold text-neutral-300 uppercase tracking-wider mb-2">
                    Tanggal Tur <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="date"
                    required
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full bg-[#081528] border border-white/20 rounded-xl px-4 py-3 text-base text-white focus:outline-none focus:ring-2 focus:ring-[#f15d22] transition-all"
                  />
                </div>

                {/* Time Slot Options */}
                <div>
                  <label className="block text-xs font-bold text-neutral-300 uppercase tracking-wider mb-2">
                    Pilihan Waktu Keberangkatan
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {[
                      "07:30 (Penjelajah Pagi)",
                      "09:00 (Sangat Direkomendasikan)",
                      "11:30 (Tengah Hari)",
                      "13:00 (Siang / Sore)",
                    ].map((slot) => (
                      <button
                        type="button"
                        key={slot}
                        onClick={() => setTimeSlot(slot)}
                        className={`p-3 rounded-xl border text-xs sm:text-sm font-medium transition-all text-left cursor-pointer ${
                          timeSlot === slot
                            ? "bg-[#f15d22]/20 border-[#f15d22] text-white ring-1 ring-[#f15d22]"
                            : "bg-white/5 border-white/10 text-neutral-300 hover:bg-white/10"
                        }`}
                      >
                        {slot}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* STEP 3: NUMBER OF GUESTS */}
            {step === 3 && (
              <div className="space-y-5 animate-in fade-in duration-200 text-left">
                <div>
                  <h3 className="font-heading text-2xl sm:text-3xl text-white uppercase tracking-wide">
                    BERAPA JUMLAH TAMU?
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-300">
                    Bepergian dalam rombongan kecil untuk kenyamanan aloha yang hangat dan personal.
                  </p>
                </div>

                {/* Adults Stepper */}
                <div className="p-4 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-between">
                  <div>
                    <div className="font-bold text-white text-base">Dewasa (12+ thn)</div>
                    <div className="text-xs text-neutral-400">
                      Tiket standar (${currentTourData.price}/orang)
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => setAdults((prev) => Math.max(1, prev - 1))}
                      className="w-9 h-9 rounded-xl bg-white/10 hover:bg-white/20 text-white flex items-center justify-center font-bold text-lg cursor-pointer"
                    >
                      -
                    </button>
                    <span className="w-8 text-center text-xl font-heading font-bold text-white">
                      {adults}
                    </span>
                    <button
                      type="button"
                      onClick={() => setAdults((prev) => Math.min(20, prev + 1))}
                      className="w-9 h-9 rounded-xl bg-[#f15d22] hover:bg-[#d84b13] text-white flex items-center justify-center font-bold text-lg cursor-pointer"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Children Stepper */}
                <div className="p-4 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-between">
                  <div>
                    <div className="font-bold text-white text-base">Anak-anak (3–11 thn)</div>
                    <div className="text-xs text-emerald-400 font-medium">
                      Diskon 25% (${Math.round(currentTourData.price * 0.75)}/orang)
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => setChildren((prev) => Math.max(0, prev - 1))}
                      className="w-9 h-9 rounded-xl bg-white/10 hover:bg-white/20 text-white flex items-center justify-center font-bold text-lg cursor-pointer"
                    >
                      -
                    </button>
                    <span className="w-8 text-center text-xl font-heading font-bold text-white">
                      {children}
                    </span>
                    <button
                      type="button"
                      onClick={() => setChildren((prev) => Math.min(10, prev + 1))}
                      className="w-9 h-9 rounded-xl bg-[#f15d22] hover:bg-[#d84b13] text-white flex items-center justify-center font-bold text-lg cursor-pointer"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Live Price Summary Box */}
                <div className="p-4 rounded-2xl bg-gradient-to-r from-white/5 to-[#f15d22]/10 border border-white/10 flex items-center justify-between">
                  <div>
                    <div className="text-xs text-neutral-400">Total dengan Diskon Promo Online 10%:</div>
                    <div className="text-xs text-neutral-400 line-through">
                      Harga Normal: ${rawTotal.toFixed(2)}
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-2xl sm:text-3xl font-heading font-extrabold text-[#f5b324]">
                      ${total.toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* STEP 4: CONTACT DETAILS */}
            {step === 4 && (
              <div className="space-y-4 animate-in fade-in duration-200 text-left">
                <div>
                  <h3 className="font-heading text-2xl sm:text-3xl text-white uppercase tracking-wide">
                    DATA TAMU UTAMA
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-300">
                    Kami akan mengirimkan voucher pemesanan dan panduan penjemputan ke kontak ini.
                  </p>
                </div>

                <div>
                  <label className="block text-xs font-bold text-neutral-300 uppercase tracking-wider mb-1">
                    Nama Lengkap <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="cth. Sarah Jenkins"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full bg-[#081528] border border-white/20 rounded-xl px-4 py-3 text-base text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#f15d22] transition-all"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-neutral-300 uppercase tracking-wider mb-1">
                      Alamat Email <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="sarah@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-[#081528] border border-white/20 rounded-xl px-4 py-3 text-base text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#f15d22] transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-neutral-300 uppercase tracking-wider mb-1">
                      Nomor Telepon / WhatsApp <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+62 812-3456-7890"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-[#081528] border border-white/20 rounded-xl px-4 py-3 text-base text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#f15d22] transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-neutral-300 uppercase tracking-wider mb-1">
                    Hotel Waikiki / Lokasi Penjemputan <span className="text-neutral-400">(Opsional)</span>
                  </label>
                  <input
                    type="text"
                    placeholder="cth. Sheraton Waikiki, Hilton Hawaiian Village..."
                    value={hotel}
                    onChange={(e) => setHotel(e.target.value)}
                    className="w-full bg-[#081528] border border-white/20 rounded-xl px-4 py-3 text-base text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#f15d22] transition-all"
                  />
                </div>
              </div>
            )}

            {/* STEP 5: REVIEW & CONFIRM */}
            {step === 5 && (
              <div className="space-y-4 animate-in fade-in duration-200 text-left">
                <div>
                  <h3 className="font-heading text-2xl sm:text-3xl text-white uppercase tracking-wide">
                    TINJAU PESANAN ANDA
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-300">
                    Periksa kembali semua detail sebelum mengonfirmasi petualangan Hawaii Anda.
                  </p>
                </div>

                {/* Detailed Summary Card */}
                <div className="p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/15 space-y-3">
                  <div className="flex items-start justify-between border-b border-white/10 pb-3">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                        Tur Terpilih
                      </span>
                      <h4 className="font-bold text-base sm:text-lg text-white">
                        {currentTourData.name}
                      </h4>
                      <p className="text-xs text-neutral-300">{currentTourData.duration}</p>
                    </div>
                    <span className="text-xs bg-[#f15d22]/20 text-[#f15d22] font-bold px-2.5 py-1 rounded-md">
                      {currentTourData.tag}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-xs sm:text-sm border-b border-white/10 pb-3">
                    <div>
                      <span className="text-neutral-400 block text-xs">Tanggal:</span>
                      <strong className="text-white">{date}</strong>
                    </div>
                    <div>
                      <span className="text-neutral-400 block text-xs">Waktu:</span>
                      <strong className="text-white">{timeSlot}</strong>
                    </div>
                    <div>
                      <span className="text-neutral-400 block text-xs">Jumlah Tamu:</span>
                      <strong className="text-white">
                        {adults} Dewasa{children > 0 ? `, ${children} Anak` : ""}
                      </strong>
                    </div>
                    <div>
                      <span className="text-neutral-400 block text-xs">Tamu Utama:</span>
                      <strong className="text-white">{fullName}</strong>
                    </div>
                  </div>

                  <div className="text-xs text-neutral-300 space-y-1">
                    <div>
                      Email: <span className="text-white">{email}</span> | Telp:{" "}
                      <span className="text-white">{phone}</span>
                    </div>
                    {hotel && (
                      <div>
                        Lokasi Jemput: <span className="text-white">{hotel}</span>
                      </div>
                    )}
                  </div>

                  {/* Price Breakdown */}
                  <div className="pt-2 border-t border-white/10 flex items-center justify-between">
                    <div>
                      <div className="text-xs text-neutral-400">Total Pembayaran (Diskon 10%):</div>
                      <div className="text-[11px] text-emerald-400">✓ Tanpa pembayaran di muka saat ini</div>
                    </div>
                    <div className="text-2xl sm:text-3xl font-heading font-extrabold text-[#f5b324]">
                      ${total.toFixed(2)}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs text-neutral-300 bg-white/5 p-2.5 rounded-xl border border-white/10">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Kebijakan pembatalan fleksibel 48 jam. Bayar saat keberangkatan di Hawaii.</span>
                </div>
              </div>
            )}

            {/* Bottom Navigation Buttons */}
            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between gap-3">
              {step > 1 ? (
                <button
                  type="button"
                  onClick={handleBack}
                  className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm transition-colors cursor-pointer flex items-center gap-1.5"
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
                  className="px-7 py-3 rounded-xl bg-[#f15d22] hover:bg-[#d84b13] text-white font-heading text-base font-bold uppercase tracking-wider shadow-xl shadow-[#f15d22]/30 transition-all cursor-pointer flex items-center gap-1.5"
                >
                  <span>Langkah Selanjutnya</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  type="button"
                  disabled={isSubmitting}
                  onClick={handleConfirm}
                  className="px-8 py-3.5 rounded-xl bg-[#00aa6c] hover:bg-[#00905b] text-white font-heading text-lg font-bold uppercase tracking-wider shadow-xl shadow-[#00aa6c]/30 transition-all cursor-pointer flex items-center gap-2 disabled:opacity-75 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin shrink-0" />
                      <span>MEMPROSES RESERVASI...</span>
                    </>
                  ) : (
                    <>
                      <Check className="w-5 h-5 stroke-[3]" />
                      <span>KONFIRMASI PEMESANAN</span>
                    </>
                  )}
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

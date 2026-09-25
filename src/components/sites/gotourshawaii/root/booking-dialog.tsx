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
    name: "Circle Island Tour (Hidden Gems & Waterfall)",
    price: 149,
    duration: "Full Day (8-9 hrs)",
    tag: "Most Popular",
  },
  {
    id: "Hawaiian Luau",
    name: "Paina Waikiki Luau Feast & Polynesian Show",
    price: 179,
    duration: "Evening (4 hrs)",
    tag: "Authentic Cultural",
  },
  {
    id: "Pearl Harbor Tour",
    name: "Pearl Harbor & USS Arizona Memorial Excursion",
    price: 119,
    duration: "Half Day (5 hrs)",
    tag: "Historic",
  },
  {
    id: "Diamond Head Shuttle",
    name: "Diamond Head Hike Shuttle with Reserved Pass",
    price: 45,
    duration: "Express (3 hrs)",
    tag: "Daily Shuttle",
  },
  {
    id: "Waikiki Turtle Canyon Snorkeling",
    name: "Waikiki Turtle Canyon Snorkeling & Swim",
    price: 129,
    duration: "Half Day (3.5 hrs)",
    tag: "Eco Adventure",
  },
];

export function BookingDialog({ isOpen, onClose, defaultTour }: BookingDialogProps) {
  const [step, setStep] = useState<1 | 2 | 3 | 4 | 5>(1);
  const [selectedTour, setSelectedTour] = useState(defaultTour || "Circle Island Tour");
  const [prevDefaultTour, setPrevDefaultTour] = useState(defaultTour);
  if (defaultTour !== prevDefaultTour) {
    setPrevDefaultTour(defaultTour);
    if (defaultTour) {
      setSelectedTour(defaultTour);
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

  const [timeSlot, setTimeSlot] = useState("8:00 AM (Morning Departure)");
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [hotel, setHotel] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [bookingRef, setBookingRef] = useState("");

  if (!isOpen) return null;

  const currentTourData = TOURS.find((t) => t.id === selectedTour) || TOURS[0];
  const rawTotal = adults * currentTourData.price + children * (currentTourData.price * 0.75);
  const discount = rawTotal * 0.1; // 10% Online Promo
  const total = rawTotal - discount;

  const handleNext = () => {
    setErrorMsg("");
    if (step === 1) {
      if (!selectedTour) {
        setErrorMsg("Please select a tour to continue.");
        return;
      }
      setStep(2);
    } else if (step === 2) {
      if (!date) {
        setErrorMsg("Please pick your preferred tour date.");
        return;
      }
      setStep(3);
    } else if (step === 3) {
      if (adults < 1) {
        setErrorMsg("At least 1 adult guest is required.");
        return;
      }
      setStep(4);
    } else if (step === 4) {
      if (!fullName.trim()) {
        setErrorMsg("Please enter your full name.");
        return;
      }
      if (!email.trim() || !email.includes("@")) {
        setErrorMsg("Please enter a valid email address.");
        return;
      }
      if (!phone.trim()) {
        setErrorMsg("Please enter your contact phone number.");
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

  const handleConfirm = () => {
    const randomCode = `GTH-${Math.floor(10000 + Math.random() * 90000)}`;
    setBookingRef(randomCode);
    setConfirmed(true);
  };

  const handleResetAndClose = () => {
    setConfirmed(false);
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
              Booking Ref: {bookingRef}
            </div>

            <h3 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-wide">
              YOUR BOOKING REQUEST HAS BEEN RECEIVED!
            </h3>

            <p className="text-neutral-200 text-sm sm:text-base leading-relaxed max-w-md mx-auto">
              Mahalo, <strong className="text-white">{fullName}</strong>! We have locked in your seats for{" "}
              <strong className="text-[#f5b324]">{currentTourData.name}</strong> on{" "}
              <strong className="text-white">{date}</strong> ({timeSlot}).
            </p>

            <div className="p-4 bg-white/5 rounded-2xl border border-white/10 text-left text-xs sm:text-sm space-y-2 max-w-md mx-auto">
              <div className="flex justify-between text-neutral-300">
                <span>Party Size:</span>
                <span className="font-semibold text-white">
                  {adults} Adult{adults > 1 ? "s" : ""}
                  {children > 0 ? `, ${children} Child${children > 1 ? "ren" : ""}` : ""}
                </span>
              </div>
              <div className="flex justify-between text-neutral-300">
                <span>Estimated Total:</span>
                <span className="font-bold text-[#f5b324] text-base">${total.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-neutral-300">
                <span>Confirmation Sent To:</span>
                <span className="font-medium text-white">{email}</span>
              </div>
              <div className="pt-2 border-t border-white/10 text-[12px] text-neutral-400">
                Free cancellation up to 48 hours before departure. Pickup details will be sent via email.
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={handleResetAndClose}
                className="w-full sm:w-auto px-10 py-3 bg-[#f15d22] hover:bg-[#d84b13] text-white rounded-xl font-heading text-lg font-bold uppercase tracking-wider shadow-xl shadow-[#f15d22]/30 transition-all cursor-pointer"
              >
                DONE &amp; EXPLORE MORE
              </button>
            </div>
          </div>
        ) : (
          /* WIZARD FLOW */
          <div className="flex flex-col h-full overflow-y-auto pr-1">
            {/* Top Stepper Indicator */}
            <div className="mb-6">
              <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-neutral-400 mb-2">
                <span>Step {step} of 5</span>
                <span className="text-[#f5b324] font-semibold">
                  {step === 1 && "Select Tour"}
                  {step === 2 && "Choose Date & Time"}
                  {step === 3 && "Number of Guests"}
                  {step === 4 && "Contact Details"}
                  {step === 5 && "Review & Confirm"}
                </span>
              </div>

              {/* Progress bar */}
              <div className="w-full bg-white/10 rounded-full h-1.5 overflow-hidden flex">
                <div
                  className="bg-gradient-to-r from-[#f15d22] to-amber-400 h-full transition-all duration-300 rounded-full"
                  style={{ width: `${(step / 5) * 100}%` }}
                />
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
                    CHOOSE YOUR EXPERIENCE
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-300">
                    Select the award-winning excursion you wish to book.
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
                        <span className="text-[11px] text-neutral-400">/ person</span>
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
                    SELECT DATE &amp; TIME
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-300">
                    Daily tours depart from Waikiki with guaranteed seats.
                  </p>
                </div>

                {/* Tour Selected Chip */}
                <div className="p-3 bg-white/5 border border-white/10 rounded-xl flex items-center justify-between">
                  <div className="text-xs text-neutral-300">
                    Selected: <strong className="text-white">{currentTourData.name}</strong>
                  </div>
                  <span className="text-xs text-[#f5b324] font-bold">${currentTourData.price}/ea</span>
                </div>

                {/* Date Input */}
                <div>
                  <label className="block text-xs font-bold text-neutral-300 uppercase tracking-wider mb-2">
                    Tour Date <span className="text-red-400">*</span>
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
                    Departure Preference
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {[
                      "7:30 AM (Early Explorer)",
                      "9:00 AM (Recommended)",
                      "11:30 AM (Midday)",
                      "1:00 PM (Afternoon)",
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
                    HOW MANY GUESTS?
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-300">
                    Traveling in small groups for comfortable, personal aloha.
                  </p>
                </div>

                {/* Adults Stepper */}
                <div className="p-4 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-between">
                  <div>
                    <div className="font-bold text-white text-base">Adults (12+)</div>
                    <div className="text-xs text-neutral-400">
                      Standard admission (${currentTourData.price}/person)
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
                    <div className="font-bold text-white text-base">Children (3–11)</div>
                    <div className="text-xs text-emerald-400 font-medium">
                      25% Discount (${Math.round(currentTourData.price * 0.75)}/person)
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
                    <div className="text-xs text-neutral-400">Total with 10% Online Promo:</div>
                    <div className="text-xs text-neutral-400 line-through">
                      Regular: ${rawTotal.toFixed(2)}
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
                    LEAD GUEST DETAILS
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-300">
                    We will send pickup instructions and confirmation vouchers to this contact.
                  </p>
                </div>

                <div>
                  <label className="block text-xs font-bold text-neutral-300 uppercase tracking-wider mb-1">
                    Full Name <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Sarah Jenkins"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full bg-[#081528] border border-white/20 rounded-xl px-4 py-3 text-base text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#f15d22] transition-all"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-neutral-300 uppercase tracking-wider mb-1">
                      Email Address <span className="text-red-400">*</span>
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
                      Phone Number <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+1 (808) 555-0199"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-[#081528] border border-white/20 rounded-xl px-4 py-3 text-base text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#f15d22] transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-neutral-300 uppercase tracking-wider mb-1">
                    Waikiki Hotel / Pickup Location <span className="text-neutral-400">(Optional)</span>
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Sheraton Waikiki, Hilton Hawaiian Village..."
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
                    REVIEW YOUR RESERVATION
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-300">
                    Verify all details before confirming your Hawaiian adventure.
                  </p>
                </div>

                {/* Detailed Summary Card */}
                <div className="p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/15 space-y-3">
                  <div className="flex items-start justify-between border-b border-white/10 pb-3">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                        Tour Selected
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
                      <span className="text-neutral-400 block text-xs">Date:</span>
                      <strong className="text-white">{date}</strong>
                    </div>
                    <div>
                      <span className="text-neutral-400 block text-xs">Time:</span>
                      <strong className="text-white">{timeSlot}</strong>
                    </div>
                    <div>
                      <span className="text-neutral-400 block text-xs">Guests:</span>
                      <strong className="text-white">
                        {adults} Adult{adults > 1 ? "s" : ""}
                        {children > 0 ? `, ${children} Child${children > 1 ? "ren" : ""}` : ""}
                      </strong>
                    </div>
                    <div>
                      <span className="text-neutral-400 block text-xs">Lead Guest:</span>
                      <strong className="text-white">{fullName}</strong>
                    </div>
                  </div>

                  <div className="text-xs text-neutral-300 space-y-1">
                    <div>
                      Email: <span className="text-white">{email}</span> | Phone:{" "}
                      <span className="text-white">{phone}</span>
                    </div>
                    {hotel && (
                      <div>
                        Pickup: <span className="text-white">{hotel}</span>
                      </div>
                    )}
                  </div>

                  {/* Price Breakdown */}
                  <div className="pt-2 border-t border-white/10 flex items-center justify-between">
                    <div>
                      <div className="text-xs text-neutral-400">Total with 10% Discount:</div>
                      <div className="text-[11px] text-emerald-400">✓ No upfront payment required</div>
                    </div>
                    <div className="text-2xl sm:text-3xl font-heading font-extrabold text-[#f5b324]">
                      ${total.toFixed(2)}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs text-neutral-300 bg-white/5 p-2.5 rounded-xl border border-white/10">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Free 48-hour cancellation policy. Pay in Hawaii upon pickup.</span>
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
                  <span>Back</span>
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
                  <span>Next Step</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleConfirm}
                  className="px-8 py-3.5 rounded-xl bg-[#00aa6c] hover:bg-[#00905b] text-white font-heading text-lg font-bold uppercase tracking-wider shadow-xl shadow-[#00aa6c]/30 transition-all cursor-pointer flex items-center gap-2"
                >
                  <Check className="w-5 h-5 stroke-[3]" />
                  <span>CONFIRM RESERVATION</span>
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

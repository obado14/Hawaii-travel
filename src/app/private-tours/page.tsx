"use client";

import React, { useState } from "react";
import Image from "next/image";
import { TopBar } from "@/components/sites/gotourshawaii/root/top-bar";
import { Navbar } from "@/components/sites/gotourshawaii/root/navbar";
import { Footer } from "@/components/sites/gotourshawaii/root/footer";
import { BookingDialog } from "@/components/sites/gotourshawaii/root/booking-dialog";
import { CtaBanner } from "@/components/sites/gotourshawaii/root/cta-banner";
import {
  Users,
  Shield,
  Calendar,
  Sparkles,
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
    title: "PRIVATE CIRCLE ISLAND TOUR",
    description:
      "Exclusive full-island exploration covering iconic lookouts, beaches, sacred Byodo-In Temple, and historic landmarks at your pace.",
    duration: "7–8 Hours",
    image: "/sites/gotourshawaii/root/Visual-img-3-e1714632197722.jpg",
  },
  {
    id: "north-shore",
    title: "PRIVATE NORTH SHORE ADVENTURE",
    description:
      "Experience world-famous Banzai Pipeline surf breaks, Haleiwa historic surf town, Kahuku garlic shrimp, and sea turtle spotting.",
    duration: "6–7 Hours",
    image: "/sites/gotourshawaii/root/Visual-img-2-e1714631806737.jpg",
  },
  {
    id: "waterfall-exp",
    title: "PRIVATE WATERFALL EXPERIENCE",
    description:
      "Immerse in lush tropical botanical gardens, swim under Waimea's cascading freshwater waterfall, and discover secret valleys.",
    duration: "5–6 Hours",
    image: "/sites/gotourshawaii/root/optimized-water-fall-002.jpg",
  },
  {
    id: "custom-island",
    title: "CUSTOM ISLAND TOUR",
    description:
      "Build your dream Oahu or Maui day from scratch with a dedicated private concierge, luxury vehicle, and personalized schedule.",
    duration: "Fully Flexible",
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
    tourType: "Private Circle Island Tour",
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
      specialRequests: prev.specialRequests || `Interested in: ${tourTitle}`,
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
        setFormError("Please select your estimated tour date.");
        return;
      }
      setWizardStep(2);
    } else if (wizardStep === 2) {
      if (!formData.name.trim()) {
        setFormError("Please enter your full name.");
        return;
      }
      if (!formData.phone.trim()) {
        setFormError("Please enter your contact phone number.");
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
              src="/sites/gotourshawaii/root/81.jpg"
              alt="Waimea Waterfall Private Tour Hawaii"
              fill
              priority
              className="object-cover object-center"
            />
            {/* Softened dark overlay to showcase waterfall while keeping typography crisp */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#0c1f38]/50 via-black/25 to-[#0c1f38]/70" />
          </div>

          <div className="relative z-10 max-w-4xl mx-auto px-4 text-center pt-14 pb-16 sm:pb-20 md:pb-24">
            <div className="inline-flex items-center gap-2 mb-3.5 px-4 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/20 shadow-sm">
              <Sparkles className="w-4 h-4 text-[#f5b324]" />
              <span className="text-xs font-bold text-[#f5b324] uppercase tracking-widest">
                VIP Custom Charters &amp; Private Guides
              </span>
            </div>
            <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl text-white uppercase tracking-wider mb-3 leading-none drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]">
              OAHU &amp; MAUI PRIVATE TOURS
            </h1>
            <p className="max-w-2xl mx-auto text-sm sm:text-base text-neutral-100 drop-shadow-[0_1px_4px_rgba(0,0,0,0.6)] font-normal leading-relaxed">
              Your island adventure on your own schedule. Luxurious vehicles, personalized stops, and dedicated private local guides.
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

        {/* 2. Benefits Grid (The Ultimate Private Island Experience) */}
        <section className="bg-[#f5f0e8] text-neutral-900 py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
              <span className="text-xs font-bold text-[#f15d22] uppercase tracking-widest block mb-1.5">
                Custom Tailored For You
              </span>
              <h2 className="font-heading text-3xl sm:text-5xl text-[#0c2340] uppercase leading-none">
                THE ULTIMATE PRIVATE ISLAND EXPERIENCE
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-7 sm:p-8 shadow-lg border border-neutral-200/80 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl">
                <div className="w-12 h-12 rounded-xl bg-[#f15d22]/15 text-[#f15d22] flex items-center justify-center mb-4">
                  <Calendar className="w-6 h-6" />
                </div>
                <h3 className="font-heading text-2xl text-[#0c2340] uppercase mb-2.5 tracking-wide">
                  100% FLEXIBLE ITINERARY
                </h3>
                <p className="text-neutral-600 text-sm sm:text-base leading-relaxed sm:leading-7">
                  Stay as long as you want at Waimea Waterfall, stop at your favorite food trucks, or linger on a secluded beach. You set the pace.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-7 sm:p-8 shadow-lg border border-neutral-200/80 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl">
                <div className="w-12 h-12 rounded-xl bg-[#f15d22]/15 text-[#f15d22] flex items-center justify-center mb-4">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="font-heading text-2xl text-[#0c2340] uppercase mb-2.5 tracking-wide">
                  EXCLUSIVE TO YOUR GROUP
                </h3>
                <p className="text-neutral-600 text-sm sm:text-base leading-relaxed sm:leading-7">
                  Only your family or friends in our spacious, air-conditioned Mercedes Sprinter or luxury SUV. Door-to-door hotel pickup included.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-7 sm:p-8 shadow-lg border border-neutral-200/80 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl">
                <div className="w-12 h-12 rounded-xl bg-[#f15d22]/15 text-[#f15d22] flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6" />
                </div>
                <h3 className="font-heading text-2xl text-[#0c2340] uppercase mb-2.5 tracking-wide">
                  TOP-TIER LOCAL GUIDE
                </h3>
                <p className="text-neutral-600 text-sm sm:text-base leading-relaxed sm:leading-7">
                  Benefit from a personal native guide with deep knowledge of Hawaiian history, culture, photography spots, and secret island locations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. NEW: Choose Your Private Experience - 4 Cards */}
        <section className="bg-[#f5f0e8] text-neutral-900 pb-14 sm:pb-20 px-4 sm:px-6 lg:px-8 border-t border-black/5 pt-12">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
              <span className="text-xs font-bold text-[#f15d22] uppercase tracking-widest block mb-1.5">
                Handcrafted VIP Journeys
              </span>
              <h2 className="font-heading text-3xl sm:text-5xl text-[#0c2340] uppercase leading-none mb-3">
                CHOOSE YOUR PRIVATE EXPERIENCE
              </h2>
              <p className="text-neutral-600 text-sm sm:text-base font-normal max-w-xl mx-auto leading-relaxed">
                Whether you wish to circle the entire island or customize secret stops, explore our most popular private charters.
              </p>
            </div>

            {/* 4 Cards: Desktop 4 col, Tablet 2 col, Mobile 1 col */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {privateToursList.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl border border-neutral-200/80 hover:border-[#f15d22]/40 transition-all duration-300 ease-out transform hover:-translate-y-2 flex flex-col justify-between group"
                >
                  {/* Image with subtle zoom 1.03 */}
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover object-center group-hover:scale-[1.03] transition-transform duration-500 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs font-semibold">
                      <span className="flex items-center gap-1 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10">
                        <Clock className="w-3.5 h-3.5 text-[#f5b324]" />
                        {item.duration}
                      </span>
                      <span className="bg-[#f15d22] px-2.5 py-1 rounded-full text-[11px] font-bold uppercase">
                        Private
                      </span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-heading text-xl font-bold text-[#0c2340] uppercase tracking-wide leading-snug mb-2 group-hover:text-[#f15d22] transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-neutral-600 text-xs sm:text-sm font-normal leading-relaxed line-clamp-3 mb-5">
                        {item.description}
                      </p>
                    </div>

                    <button
                      onClick={() => handleSelectPrivateTour(item.title)}
                      className="w-full bg-[#f15d22] hover:bg-[#d84b13] text-white text-xs font-bold uppercase tracking-wider py-2.5 px-3 rounded-xl shadow-md shadow-[#f15d22]/20 hover:shadow-lg flex items-center justify-center gap-1.5 transition-all transform hover:scale-102 active:scale-98 cursor-pointer"
                    >
                      <span>REQUEST A QUOTE</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. NEW: What's Included - Compact Section */}
        <section className="bg-white text-neutral-900 py-10 sm:py-14 px-4 sm:px-6 lg:px-8 border-y border-neutral-200">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
              <span className="text-xs font-bold text-[#f15d22] uppercase tracking-widest block mb-1">
                EVERY PRIVATE CHARTER
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl text-[#0c2340] uppercase leading-none">
                WHAT&apos;S INCLUDED
              </h2>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-5">
              {[
                { title: "Private Vehicle", desc: "Mercedes Sprinter or luxury SUV", icon: Car },
                { title: "Local Guide", desc: "Certified Hawaiian cultural guide", icon: Compass },
                { title: "Hotel Pickup", desc: "Direct door-to-door Waikiki pickup", icon: MapPin },
                { title: "Flexible Itinerary", desc: "Explore at your own preferred pace", icon: Clock },
                { title: "Personalized Stops", desc: "Custom viewpoints & foodie stops", icon: Sparkles },
                { title: "Bottled Water", desc: "Chilled Hawaiian spring water", icon: Droplets },
              ].map((item, i) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={i}
                    className="p-4 sm:p-5 rounded-2xl bg-[#f8f9fa] border border-neutral-200/80 hover:border-[#f15d22]/40 hover:bg-[#fff9f6] transition-all duration-200 flex flex-col items-center text-center group"
                  >
                    <div className="w-11 h-11 rounded-xl bg-[#0c2340] text-[#f15d22] group-hover:bg-[#f15d22] group-hover:text-white flex items-center justify-center mb-3 transition-colors shadow-xs">
                      <IconComponent className="w-5 h-5 stroke-[2.2]" />
                    </div>
                    <h4 className="font-heading text-sm sm:text-base font-bold text-[#0c2340] uppercase tracking-wider mb-1">
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

        {/* 5. NEW: Compact Trust / Social Proof Section */}
        <section className="bg-[#f5f0e8] py-8 sm:py-10 px-4 sm:px-6 lg:px-8 border-b border-black/5">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white/80 border border-black/5">
                <Compass className="w-6 h-6 text-[#f15d22] shrink-0" />
                <div className="text-left">
                  <div className="font-heading text-sm font-bold text-[#0c2340] uppercase">
                    Local Hawaiian Guides
                  </div>
                  <div className="text-[11px] text-neutral-500">Native island storytelling</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white/80 border border-black/5">
                <Car className="w-6 h-6 text-[#f15d22] shrink-0" />
                <div className="text-left">
                  <div className="font-heading text-sm font-bold text-[#0c2340] uppercase">
                    Private Vehicles
                  </div>
                  <div className="text-[11px] text-neutral-500">Luxury Sprinters &amp; SUVs</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white/80 border border-black/5">
                <Clock className="w-6 h-6 text-[#f15d22] shrink-0" />
                <div className="text-left">
                  <div className="font-heading text-sm font-bold text-[#0c2340] uppercase">
                    Flexible Itineraries
                  </div>
                  <div className="text-[11px] text-neutral-500">100% on your schedule</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white/80 border border-black/5">
                <Sparkles className="w-6 h-6 text-[#f15d22] shrink-0" />
                <div className="text-left">
                  <div className="font-heading text-sm font-bold text-[#0c2340] uppercase">
                    Personalized Trips
                  </div>
                  <div className="text-[11px] text-neutral-500">Tailored to your party</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. Custom Quote Form & 3-Step Wizard Flow */}
        <section id="quote-form" className="bg-[#081d38] text-white py-12 sm:py-16 px-4 sm:px-6 lg:px-8 border-t border-white/10">
          <div className="max-w-4xl mx-auto bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-10 backdrop-blur-md">
            <div className="text-center max-w-xl mx-auto mb-6 sm:mb-8">
              <h2 className="font-heading text-3xl sm:text-5xl text-[#f5b324] uppercase tracking-wider mb-2">
                REQUEST A PRIVATE TOUR QUOTE
              </h2>
              <p className="text-neutral-300 text-xs sm:text-sm">
                Fill out the details below or call our private events team directly at{" "}
                <a href="tel:808-926-3090" className="text-[#f15d22] hover:text-[#ff7843] font-bold underline transition-colors">
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
                  Inquiry Ref: #{inquiryRef}
                </div>
                <h3 className="font-heading text-2xl sm:text-3xl text-white">QUOTE REQUEST RECEIVED!</h3>
                <p className="text-sm text-neutral-300 max-w-md mx-auto leading-relaxed">
                  Mahalo, <strong className="text-white">{formData.name}</strong>! Our private tour concierge will reach out within 2 hours with customized options, vehicle availability, and pricing.
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => {
                      setQuoteSent(false);
                      setWizardStep(1);
                    }}
                    className="px-6 py-2.5 bg-[#f15d22] hover:bg-[#d84b13] text-white rounded-xl text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmitQuote} className="space-y-6">
                {/* Wizard Step Progress Tracker */}
                <div className="mb-6">
                  <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-neutral-400 mb-2">
                    <span>Step {wizardStep} of 3</span>
                    <span className="text-[#f5b324]">
                      {wizardStep === 1 && "Step 1 — Trip Details"}
                      {wizardStep === 2 && "Step 2 — Your Details"}
                      {wizardStep === 3 && "Step 3 — Review & Submit"}
                    </span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-1.5 overflow-hidden flex">
                    <div
                      className="bg-gradient-to-r from-[#f15d22] to-[#f5b324] h-full transition-all duration-300 rounded-full"
                      style={{ width: `${(wizardStep / 3) * 100}%` }}
                    />
                  </div>
                </div>

                {/* Form Error Alert */}
                {formError && (
                  <div className="p-3 rounded-xl bg-red-500/20 border border-red-500/40 text-red-200 text-xs sm:text-sm animate-in fade-in">
                    {formError}
                  </div>
                )}

                {/* STEP 1: TRIP DETAILS */}
                {wizardStep === 1 && (
                  <div className="space-y-4 animate-in fade-in duration-200">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-xs uppercase font-semibold text-neutral-300 mb-1.5">
                          Island *
                        </label>
                        <select
                          value={formData.island}
                          onChange={(e) => setFormData({ ...formData, island: e.target.value })}
                          className="w-full bg-[#0c1f38]/90 border border-white/20 hover:border-white/35 rounded-xl px-3 py-2.5 text-sm text-white focus:outline-none focus:border-[#f15d22] focus:ring-2 focus:ring-[#f15d22]/40 transition-all duration-200 cursor-pointer"
                        >
                          <option value="Oahu">Oahu</option>
                          <option value="Maui">Maui</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs uppercase font-semibold text-neutral-300 mb-1.5">
                          Estimated Date *
                        </label>
                        <input
                          type="date"
                          required
                          value={formData.date}
                          onChange={(e) => {
                            setFormData({ ...formData, date: e.target.value });
                            setFormError("");
                          }}
                          className="w-full bg-[#0c1f38]/90 border border-white/20 hover:border-white/35 rounded-xl px-3 py-2.5 text-sm text-white focus:outline-none focus:border-[#f15d22] focus:ring-2 focus:ring-[#f15d22]/40 transition-all duration-200"
                        />
                      </div>

                      <div>
                        <label className="block text-xs uppercase font-semibold text-neutral-300 mb-1.5">
                          Group Size *
                        </label>
                        <input
                          type="number"
                          min="1"
                          max="30"
                          value={formData.groupSize}
                          onChange={(e) => setFormData({ ...formData, groupSize: e.target.value })}
                          className="w-full bg-[#0c1f38]/90 border border-white/20 hover:border-white/35 rounded-xl px-3 py-2.5 text-sm text-white focus:outline-none focus:border-[#f15d22] focus:ring-2 focus:ring-[#f15d22]/40 transition-all duration-200"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs uppercase font-semibold text-neutral-300 mb-1.5">
                        Preferred Tour Experience
                      </label>
                      <select
                        value={formData.tourType}
                        onChange={(e) => setFormData({ ...formData, tourType: e.target.value })}
                        className="w-full bg-[#0c1f38]/90 border border-white/20 hover:border-white/35 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#f15d22] focus:ring-2 focus:ring-[#f15d22]/40 transition-all duration-200 cursor-pointer"
                      >
                        <option value="Private Circle Island Tour">Private Circle Island Tour</option>
                        <option value="Private North Shore Adventure">Private North Shore Adventure</option>
                        <option value="Private Waterfall Experience">Private Waterfall Experience</option>
                        <option value="Custom Island Tour">Custom Island Tour</option>
                      </select>
                    </div>
                  </div>
                )}

                {/* STEP 2: YOUR DETAILS */}
                {wizardStep === 2 && (
                  <div className="space-y-4 animate-in fade-in duration-200">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs uppercase font-semibold text-neutral-300 mb-1.5">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => {
                            setFormData({ ...formData, name: e.target.value });
                            setFormError("");
                          }}
                          placeholder="Jane Doe"
                          className="w-full bg-[#0c1f38]/90 border border-white/20 hover:border-white/35 rounded-xl px-4 py-2.5 text-sm text-white placeholder:text-neutral-500 focus:outline-none focus:border-[#f15d22] focus:ring-2 focus:ring-[#f15d22]/40 transition-all duration-200"
                        />
                      </div>
                      <div>
                        <label className="block text-xs uppercase font-semibold text-neutral-300 mb-1.5">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => {
                            setFormData({ ...formData, phone: e.target.value });
                            setFormError("");
                          }}
                          placeholder="+1 (808) 000-0000"
                          className="w-full bg-[#0c1f38]/90 border border-white/20 hover:border-white/35 rounded-xl px-4 py-2.5 text-sm text-white placeholder:text-neutral-500 focus:outline-none focus:border-[#f15d22] focus:ring-2 focus:ring-[#f15d22]/40 transition-all duration-200"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs uppercase font-semibold text-neutral-300 mb-1.5">
                        Special Requests or Desired Destinations
                      </label>
                      <textarea
                        rows={3}
                        value={formData.specialRequests}
                        onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
                        placeholder="Tell us about what you want to see (e.g. North Shore, Pearl Harbor, waterfalls, photography stops)..."
                        className="w-full bg-[#0c1f38]/90 border border-white/20 hover:border-white/35 rounded-xl px-4 py-2.5 text-sm text-white placeholder:text-neutral-500 focus:outline-none focus:border-[#f15d22] focus:ring-2 focus:ring-[#f15d22]/40 transition-all duration-200 resize-none"
                      />
                    </div>
                  </div>
                )}

                {/* STEP 3: REVIEW & SUBMIT */}
                {wizardStep === 3 && (
                  <div className="space-y-4 animate-in fade-in duration-200">
                    <div className="p-4 rounded-2xl bg-white/5 border border-white/15 space-y-3 text-xs sm:text-sm">
                      <div className="border-b border-white/10 pb-2 flex items-center justify-between">
                        <span className="text-neutral-400">Destination:</span>
                        <strong className="text-white">{formData.island} Island</strong>
                      </div>
                      <div className="border-b border-white/10 pb-2 flex items-center justify-between">
                        <span className="text-neutral-400">Experience:</span>
                        <strong className="text-[#f5b324]">{formData.tourType}</strong>
                      </div>
                      <div className="border-b border-white/10 pb-2 flex items-center justify-between">
                        <span className="text-neutral-400">Estimated Date:</span>
                        <strong className="text-white">{formData.date}</strong>
                      </div>
                      <div className="border-b border-white/10 pb-2 flex items-center justify-between">
                        <span className="text-neutral-400">Group Size:</span>
                        <strong className="text-white">{formData.groupSize} Guests</strong>
                      </div>
                      <div className="border-b border-white/10 pb-2 flex items-center justify-between">
                        <span className="text-neutral-400">Lead Contact:</span>
                        <strong className="text-white">{formData.name} ({formData.phone})</strong>
                      </div>
                      {formData.specialRequests && (
                        <div>
                          <span className="text-neutral-400 block mb-1">Notes / Requests:</span>
                          <p className="text-neutral-200 italic">{formData.specialRequests}</p>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* Step Action Buttons */}
                <div className="pt-2 border-t border-white/10 flex items-center justify-between gap-3">
                  {wizardStep > 1 ? (
                    <button
                      type="button"
                      onClick={handlePrevStep}
                      className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs sm:text-sm transition-colors cursor-pointer flex items-center gap-1.5"
                    >
                      <ChevronLeft className="w-4 h-4" />
                      <span>Back</span>
                    </button>
                  ) : (
                    <div />
                  )}

                  {wizardStep < 3 ? (
                    <button
                      type="button"
                      onClick={handleNextStep}
                      className="px-7 py-3 rounded-xl bg-[#f15d22] hover:bg-[#d84b13] text-white font-heading text-sm font-bold uppercase tracking-wider shadow-lg shadow-[#f15d22]/30 transition-all cursor-pointer flex items-center gap-1.5"
                    >
                      <span>Continue</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  ) : (
                    <button
                      type="submit"
                      className="px-8 py-3.5 rounded-xl bg-[#f15d22] hover:bg-[#d84b13] text-white font-heading text-base font-bold uppercase tracking-wider shadow-xl shadow-[#f15d22]/40 hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer flex items-center gap-2"
                    >
                      <span>SUBMIT PRIVATE TOUR INQUIRY</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </form>
            )}
          </div>
        </section>

        {/* 7. Experience Hawaii Banner */}
        <CtaBanner onBookNow={() => setBookingOpen(true)} />
      </main>

      {/* 8. Footer */}
      <Footer />

      <BookingDialog
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
        defaultTour="Circle Island Tour"
      />
    </div>
  );
}

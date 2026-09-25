"use client";

import React, { useState } from "react";
import Image from "next/image";
import { TopBar } from "@/components/sites/gotourshawaii/root/top-bar";
import { Navbar } from "@/components/sites/gotourshawaii/root/navbar";
import { Footer } from "@/components/sites/gotourshawaii/root/footer";
import { BookingDialog } from "@/components/sites/gotourshawaii/root/booking-dialog";
import { CtaBanner } from "@/components/sites/gotourshawaii/root/cta-banner";
import { Star, Clock, Users, CheckCircle, Sparkles, ArrowRight } from "lucide-react";

interface TourPackage {
  id: string;
  name: string;
  category: "circle-island" | "luau" | "history" | "adventure" | "shuttle";
  duration: string;
  rating: number;
  reviewsCount: number;
  price: number;
  originalPrice: number;
  image: string;
  description: string;
  highlights: string[];
  recommended?: boolean;
}

const allTours: TourPackage[] = [
  {
    id: "waimea-valley",
    name: "Hidden Gems of Oahu with Waimea Botanical Garden & Waterfall",
    category: "circle-island",
    duration: "8-9 Hours",
    rating: 4.9,
    reviewsCount: 1824,
    price: 149,
    originalPrice: 165,
    image: "/sites/gotourshawaii/root/optimized-water-fall-002.jpg",
    description:
      "Our signature full-day circle island tour. Experience Waimea Valley, swim under the waterfall, witness sea turtles on the North Shore, and visit sacred scenic vistas.",
    highlights: ["Waimea Valley & Waterfall Swim", "North Shore Shrimp & Turtle Beach", "Nuʻuanu Pali Lookout", "Halona Blowhole"],
    recommended: true,
  },
  {
    id: "byodo-temple",
    name: "Hidden Gems of Oahu Byodo-In Temple & Turtle Spotting",
    category: "circle-island",
    duration: "7-8 Hours",
    rating: 4.9,
    reviewsCount: 1205,
    price: 139,
    originalPrice: 155,
    image: "/sites/gotourshawaii/root/Visual-img-3-e1714632197722.jpg",
    description:
      "Explore the peaceful Buddhist temple nestled at the base of the emerald Koʻolau Mountains, combined with scenic east coast beaches and wildlife stops.",
    highlights: ["Byodo-In Temple Admission Included", "Turtle Spotting at Laniakea", "Macadamia Nut Farm", "Windward Coast Scenic Drive"],
  },
  {
    id: "turtle-snorkeling",
    name: "Waikiki Turtle Canyon Snorkeling and Swim",
    category: "adventure",
    duration: "2-3 Hours",
    rating: 4.9,
    reviewsCount: 940,
    price: 129,
    originalPrice: 145,
    image: "/sites/gotourshawaii/root/waikiki-turtle-banner.png",
    description:
      "Catamaran sailing from Waikiki directly to Turtle Canyon, Oahu's famous natural reef cleaning station. Snorkel alongside majestic Hawaiian green sea turtles.",
    highlights: ["Guaranteed Turtle Sightings", "Premium Snorkel Gear & Life Vests", "Professional In-Water Marine Guides", "Scenic Waikiki Skyline Views"],
    recommended: true,
  },
  {
    id: "paina-luau",
    name: "Paina Waikiki Hawaiian Luau Experience",
    category: "luau",
    duration: "3.5-4 Hours",
    rating: 4.8,
    reviewsCount: 860,
    price: 179,
    originalPrice: 199,
    image: "/sites/gotourshawaii/root/optimized-luau-cover-002.jpg",
    description:
      "A magical evening of Polynesian culture, imu oven ceremony, live Hawaiian music, hula dancing, and the world-famous Samoan fire knife dance finale.",
    highlights: ["Fresh Orchid Flower Lei Greeting", "Traditional Island Feast & Kalua Pig", "Complimentary Welcome Mai Tai Cocktails", "Thrilling Fire Knife Performance"],
  },
  {
    id: "pearl-harbor",
    name: "Premier Pearl Harbor & USS Arizona Memorial Tour",
    category: "history",
    duration: "5-6 Hours",
    rating: 4.9,
    reviewsCount: 1430,
    price: 119,
    originalPrice: 135,
    image: "/sites/gotourshawaii/root/optimized-pearl-harbor-02.jpg",
    description:
      "Walk the hallowed grounds of World War II history. Includes reserved USS Arizona Memorial boat tickets, Pearl Harbor Visitor Center, and historic Honolulu downtown tour.",
    highlights: ["Guaranteed USS Arizona Memorial Tickets", "Historic Honolulu & Iolani Palace Drive", "Expert Military History Guide", "Hassle-Free Hotel Pickup"],
  },
  {
    id: "diamond-head",
    name: "Exclusive Diamond Head Shuttle Tour",
    category: "shuttle",
    duration: "3 Hours",
    rating: 4.9,
    reviewsCount: 780,
    price: 45,
    originalPrice: 50,
    image: "/sites/gotourshawaii/root/Header-Photo-Diamond-Head.jpeg",
    description:
      "Hike Oahu's iconic volcanic crater without parking nightmares. Daily roundtrip shuttles from Waikiki with pre-booked state park entry reservations included.",
    highlights: ["State Park Entry Pass Included", "Flexible Morning & Sunset Departures", "Air-Conditioned Comfort", "Panoramic Waikiki Summit Views"],
  },
  {
    id: "surf-lessons",
    name: "Waikiki Gentle Surf Lessons",
    category: "adventure",
    duration: "2 Hours",
    rating: 4.9,
    reviewsCount: 420,
    price: 110,
    originalPrice: 125,
    image: "/sites/gotourshawaii/root/GPTempDownload4-1-1.jpg",
    description:
      "Learn to surf on the gentle, forgiving waves of Waikiki where Hawaiian royalty once surfed. Small student-to-instructor ratios guaranteed to get you standing on your first wave.",
    highlights: ["Beginner-Friendly Surf Board & Rash Guard", "Safety Briefing on Sand First", "CPR-Certified Lifeguard Instructors", "Photo Packages Available"],
  },
];

export default function TourPackagesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [bookingOpen, setBookingOpen] = useState(false);
  const [selectedTourName, setSelectedTourName] = useState("Circle Island Tour");

  const filteredTours =
    selectedCategory === "all"
      ? allTours
      : allTours.filter((tour) => tour.category === selectedCategory);

  const handleBook = (name: string) => {
    setSelectedTourName(name);
    setBookingOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#0c1f38] text-white selection:bg-[#f15d22] selection:text-white">
      <TopBar />
      <Navbar onOpenBooking={() => handleBook("Circle Island Tour")} />

      <main className="flex-1">
        {/* Header Hero */}
        <section className="relative w-full min-h-[460px] sm:min-h-[520px] md:min-h-[560px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/sites/gotourshawaii/root/waikiki-scaled.jpeg"
              alt="Waikiki Beach, Hawaii"
              fill
              priority
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0c1f38]/70 via-black/40 to-[#0c1f38]/85" />
          </div>

          <div className="relative z-10 max-w-4xl mx-auto px-4 text-center pt-12 pb-28 sm:pb-36 md:pb-44">
            <div className="inline-flex items-center gap-2 mb-3 px-4 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/15">
              <Sparkles className="w-4 h-4 text-[#f5b324]" />
              <span className="text-xs font-bold text-[#f5b324] uppercase tracking-widest">
                Top Rated Tours &amp; Excursions in Oahu
              </span>
            </div>
            <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl text-white uppercase tracking-wider mb-3 leading-none">
              TOURS &amp; PACKAGES
            </h1>
            <p className="max-w-2xl mx-auto text-sm sm:text-base text-neutral-200">
              Handcrafted island adventures with local expert guides. Guaranteed tickets, small groups, and unforgettable memories.
            </p>
          </div>

          <div className="absolute bottom-0 inset-x-0 w-full pointer-events-none z-20 translate-y-0.5">
            <div className="relative w-full aspect-[1536/284]">
              <Image
                src="/sites/gotourshawaii/root/banner-divider-optimized-002.png"
                alt="Polynesian mountain divider"
                fill
                className="object-cover object-bottom"
                priority
              />
            </div>
          </div>
        </section>

        {/* Filter Tabs & Tour Grid */}
        <section className="bg-[#f5f0e8] text-neutral-900 py-12 sm:py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
              {[
                { label: "All Experiences", value: "all" },
                { label: "Circle Island Tours", value: "circle-island" },
                { label: "Snorkeling & Water", value: "adventure" },
                { label: "Hawaiian Luau", value: "luau" },
                { label: "Pearl Harbor", value: "history" },
                { label: "Diamond Head Shuttles", value: "shuttle" },
              ].map((tab) => (
                <button
                  key={tab.value}
                  onClick={() => setSelectedCategory(tab.value)}
                  className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider transition-all cursor-pointer ${
                    selectedCategory === tab.value
                      ? "bg-[#f15d22] text-white shadow-lg shadow-[#f15d22]/30 scale-105"
                      : "bg-white text-neutral-700 hover:bg-neutral-100 border border-neutral-200"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tours Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredTours.map((tour) => (
                <div
                  key={tour.id}
                  className="bg-white rounded-3xl overflow-hidden shadow-xl border border-neutral-200/80 flex flex-col justify-between group transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl"
                >
                  {/* Image Container */}
                  <div className="relative h-60 w-full overflow-hidden">
                    <Image
                      src={tour.image}
                      alt={tour.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                    {tour.recommended && (
                      <div className="absolute top-4 left-4 bg-[#f15d22] text-white text-[11px] font-extrabold uppercase px-3 py-1 rounded-full shadow-md">
                        Most Popular
                      </div>
                    )}

                    <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white text-xs font-semibold">
                      <span className="flex items-center gap-1 bg-black/50 backdrop-blur-sm px-2.5 py-1 rounded-full">
                        <Clock className="w-3.5 h-3.5 text-[#f5b324]" />
                        {tour.duration}
                      </span>
                      <span className="flex items-center gap-1 bg-black/50 backdrop-blur-sm px-2.5 py-1 rounded-full">
                        <Star className="w-3.5 h-3.5 fill-[#f5b324] text-[#f5b324]" />
                        {tour.rating} ({tour.reviewsCount})
                      </span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-heading text-2xl text-[#0c2340] uppercase tracking-wide leading-tight mb-2 group-hover:text-[#f15d22] transition-colors">
                        {tour.name}
                      </h3>
                      <p className="text-neutral-600 text-xs sm:text-sm font-normal leading-relaxed mb-4 line-clamp-3">
                        {tour.description}
                      </p>

                      {/* Highlights */}
                      <ul className="space-y-1.5 mb-6 text-xs text-neutral-700">
                        {tour.highlights.map((h, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <CheckCircle className="w-3.5 h-3.5 text-[#f15d22] shrink-0" />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Price and CTA */}
                    <div className="pt-4 border-t border-neutral-100 flex items-center justify-between">
                      <div>
                        <div className="text-[11px] text-neutral-400 font-semibold line-through">
                          ${tour.originalPrice}
                        </div>
                        <div className="flex items-baseline gap-1">
                          <span className="text-2xl font-extrabold text-[#f15d22] font-heading">
                            ${tour.price}
                          </span>
                          <span className="text-[11px] text-neutral-500 font-medium">/ person</span>
                        </div>
                      </div>

                      <button
                        onClick={() => handleBook(tour.name)}
                        className="bg-[#f15d22] hover:bg-[#d84b13] text-white text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded-xl shadow-md shadow-[#f15d22]/30 flex items-center gap-1.5 transition-all transform hover:scale-105 active:scale-95 cursor-pointer"
                      >
                        <span>BOOK NOW</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CtaBanner onBookNow={() => handleBook("Circle Island Tour")} />
      </main>

      <Footer />

      <BookingDialog
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
        defaultTour={selectedTourName}
      />
    </div>
  );
}

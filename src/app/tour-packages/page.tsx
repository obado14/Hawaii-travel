"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import { TopBar } from "@/components/sites/gotourshawaii/root/top-bar";
import { Navbar } from "@/components/sites/gotourshawaii/root/navbar";
import { Footer } from "@/components/sites/gotourshawaii/root/footer";
import { BookingDialog } from "@/components/sites/gotourshawaii/root/booking-dialog";
import { CtaBanner } from "@/components/sites/gotourshawaii/root/cta-banner";
import {
  TourDetailModal,
  TourPackageDetail,
} from "@/components/sites/gotourshawaii/root/tour-detail-modal";
import {
  Star,
  Clock,
  CheckCircle,
  Sparkles,
  ArrowRight,
  Search,
  X,
  SlidersHorizontal,
  Eye,
  AlertCircle,
} from "lucide-react";

const allTours: TourPackageDetail[] = [
  {
    id: "waimea-valley",
    name: "Hidden Gems of Oahu with Waimea Botanical Garden & Waterfall",
    category: "circle-island",
    categoryLabel: "Circle Island Tours",
    duration: "8-9 Hours",
    location: "North Shore & Windward",
    rating: 4.9,
    reviewsCount: 1824,
    price: 149,
    originalPrice: 165,
    image: "/sites/gotourshawaii/root/optimized-water-fall-002.jpg",
    description:
      "Our signature full-day circle island tour. Experience Waimea Valley, swim under the waterfall, witness sea turtles on the North Shore, and visit sacred scenic vistas.",
    fullDescription:
      "Embark on our highest-rated full-day island excursion led by local cultural ambassadors. Journey through lush emerald valleys, panoramic coastal lookouts at Nuʻuanu Pali, and Halona Blowhole. Explore the world-renowned Waimea Valley botanical reserve where you can swim under the revitalizing cascading waterfall. Encounter wild Hawaiian green sea turtles resting on golden North Shore beaches, indulge in authentic garlic shrimp, and discover hidden lookouts rarely visited by tour buses.",
    highlights: [
      "Waimea Valley & Waterfall Swim",
      "North Shore Shrimp & Turtle Beach",
      "Nuʻuanu Pali Historic Lookout",
      "Halona Blowhole Ocean Vista",
    ],
    included: [
      "Waimea Valley admission ticket ($25 value)",
      "Roundtrip air-conditioned hotel transportation",
      "Certified local driver guide & live cultural narration",
      "Complimentary life vests for waterfall swimming",
      "Chilled Hawaiian spring water",
    ],
    notIncluded: [
      "Lunch (stop made at North Shore food trucks)",
      "Guide gratuities (optional)",
    ],
    meetingPoint: "Waikiki hotel pickup between 7:15 AM – 7:45 AM",
    importantInfo: [
      "Bring swimwear, dry change of clothes, towel, and reef-safe sunscreen.",
      "Comfortable walking or athletic shoes required for the 3/4 mile paved valley trail.",
      "Waterfall swimming is subject to valley safety conditions and water levels.",
    ],
    recommended: true,
  },
  {
    id: "byodo-temple",
    name: "Hidden Gems of Oahu Byodo-In Temple & Turtle Spotting",
    category: "circle-island",
    categoryLabel: "Circle Island Tours",
    duration: "7-8 Hours",
    location: "Windward Oahu & North Shore",
    rating: 4.9,
    reviewsCount: 1205,
    price: 139,
    originalPrice: 155,
    image: "/sites/gotourshawaii/root/Visual-img-3-e1714632197722.jpg",
    description:
      "Explore the peaceful Buddhist temple nestled at the base of the emerald Koʻolau Mountains, combined with scenic east coast beaches and wildlife stops.",
    fullDescription:
      "Discover the serene spirituality and dramatic geography of Windward Oahu. Marvel at the stunning architecture of Byodo-In Temple, a non-denominational sanctuary commemorating the first Japanese immigrants in Hawaii, surrounded by tranquil koi ponds, peacocks, and mist-veiled mountain spires. Continue along scenic coastal highways to sacred Macadamia nut farms, pristine white sand beaches, and North Shore turtle reserves.",
    highlights: [
      "Byodo-In Temple Admission Included",
      "Turtle Spotting at Laniakea Beach",
      "Macadamia Nut Farm Tasting",
      "Windward Coast Scenic Highway",
    ],
    included: [
      "Byodo-In Temple official entrance ticket",
      "Fresh roasted Macadamia nut & Kona coffee tastings",
      "Roundtrip hotel transportation in luxury Mercedes Sprinter",
      "Narrated historical storytelling",
    ],
    notIncluded: ["Lunch", "Personal souvenirs"],
    meetingPoint: "Waikiki hotel pickup between 7:45 AM – 8:15 AM",
    importantInfo: [
      "Modest attire appreciated when entering the sacred temple bell sanctuary.",
      "Light jacket recommended for misty mountain micro-climates.",
    ],
  },
  {
    id: "turtle-snorkeling",
    name: "Waikiki Turtle Canyon Snorkeling and Swim",
    category: "adventure",
    categoryLabel: "Snorkeling & Water",
    duration: "2-3 Hours",
    location: "Waikiki Oceanfront",
    rating: 4.9,
    reviewsCount: 940,
    price: 129,
    originalPrice: 145,
    image: "/sites/gotourshawaii/root/waikiki-turtle-banner.png",
    description:
      "Catamaran sailing from Waikiki directly to Turtle Canyon, Oahu's famous natural reef cleaning station. Snorkel alongside majestic Hawaiian green sea turtles.",
    fullDescription:
      "Step aboard our custom ocean catamaran and sail along Waikiki's world-famous beachfront toward Diamond Head. Arrive at Turtle Canyon, an ancient natural reef cleaning station where schools of reef fish clean the shells of magnificent Hawaiian Green Sea Turtles (Honu). Jump into crystal-clear turquoise waters with professional marine guides who guide you safely next to these gentle marine creatures.",
    highlights: [
      "Guaranteed Turtle Sightings",
      "Premium Snorkel Gear & Life Vests",
      "Professional In-Water Marine Guides",
      "Scenic Waikiki Skyline Views",
    ],
    included: [
      "High-grade silicone snorkel masks, dry snorkels, and fins",
      "USCG-approved flotation vests and water noodle aids",
      "Fresh tropical juices, soft drinks, and island snacks",
      "CPR and lifeguard certified in-water safety guides",
    ],
    notIncluded: [
      "Towel (please bring hotel beach towel)",
      "Hotel transfer to harbor (harbor is 5 minutes from central Waikiki)",
    ],
    meetingPoint: "Kewalo Basin Harbor, Slip F-22 (1025 Ala Moana Blvd)",
    importantInfo: [
      "Minimum age is 3 years old.",
      "State law requires keeping a respectful 10-foot distance from all sea turtles.",
      "100% turtle sighting guarantee—if no turtles are spotted, cruise again for free!",
    ],
    recommended: true,
  },
  {
    id: "paina-luau",
    name: "Paina Waikiki Hawaiian Luau Experience",
    category: "luau",
    categoryLabel: "Hawaiian Luau",
    duration: "3.5-4 Hours",
    location: "Central Waikiki",
    rating: 4.8,
    reviewsCount: 860,
    price: 179,
    originalPrice: 199,
    image: "/sites/gotourshawaii/root/optimized-luau-cover-002.jpg",
    description:
      "A magical evening of Polynesian culture, imu oven ceremony, live Hawaiian music, hula dancing, and the world-famous Samoan fire knife dance finale.",
    fullDescription:
      "Immerse yourself in authentic aloha at the heart of Waikiki. Receive a fresh fragrant orchid flower lei upon arrival, learn traditional hula and ukulele chords from Hawaiian kupuna, and witness the traditional imu underground oven presentation. Indulge in an expansive culinary feast featuring slow-roasted kalua pork, fresh island poke, lomi lomi salmon, and haupia coconut pudding, followed by a dramatic Polynesian revue culminating in a blazing 3-man fire knife performance.",
    highlights: [
      "Fresh Orchid Flower Lei Greeting",
      "Traditional Island Feast & Kalua Pig",
      "Complimentary Welcome Mai Tai Cocktails",
      "Thrilling Fire Knife Performance",
    ],
    included: [
      "Fresh tropical flower lei greeting",
      "All-you-can-enjoy authentic Hawaiian & Polynesian buffet dinner",
      "2 complimentary adult alcoholic drink vouchers (or unlimited soft drinks)",
      "75-minute award-winning theatrical cultural performance",
    ],
    notIncluded: ["Premium front-row VIP table upgrade (available upon request)"],
    meetingPoint: "Waikiki Beachcomber Luau Grounds (2300 Kalakaua Ave)",
    importantInfo: [
      "Check-in opens at 5:00 PM; show concludes at approximately 8:30 PM.",
      "Resort casual island attire recommended (aloha shirts, dresses).",
      "Vegetarian, vegan, and gluten-free dietary dishes clearly marked on buffet.",
    ],
  },
  {
    id: "pearl-harbor",
    name: "Premier Pearl Harbor & USS Arizona Memorial Tour",
    category: "history",
    categoryLabel: "Pearl Harbor",
    duration: "5-6 Hours",
    location: "Pearl Harbor & Honolulu",
    rating: 4.9,
    reviewsCount: 1430,
    price: 119,
    originalPrice: 135,
    image: "/sites/gotourshawaii/root/optimized-pearl-harbor-02.jpg",
    description:
      "Walk the hallowed grounds of World War II history. Includes reserved USS Arizona Memorial boat tickets, Pearl Harbor Visitor Center, and historic Honolulu downtown tour.",
    fullDescription:
      "Experience a moving and educational tribute to American heroes. We guarantee your official US National Park Navy boat shuttle tickets out to the hallowed USS Arizona Memorial resting above the sunken battleship. Explore the Road to War museums, watch authentic wartime footage in the memorial theater, and finish with a narrated historical drive through historic downtown Honolulu, the King Kamehameha statue, and Iolani Palace.",
    highlights: [
      "Guaranteed USS Arizona Memorial Tickets",
      "Historic Honolulu & Iolani Palace Drive",
      "Expert Military History Guide",
      "Hassle-Free Hotel Pickup",
    ],
    included: [
      "Reserved USS Arizona Memorial boat shuttle ticket",
      "Pearl Harbor Visitor Center museum exhibits & theater film",
      "Narrated historic tour of downtown Honolulu & Punchbowl National Cemetery",
      "Roundtrip air-conditioned hotel transportation",
    ],
    notIncluded: [
      "Battleship Missouri Memorial admission (available as add-on)",
      "Lunch",
    ],
    meetingPoint: "Waikiki hotel pickup between 6:30 AM – 7:00 AM",
    importantInfo: [
      "Strict bag policy: No bags, purses, backpacks, or diaper bags larger than 1.5\" x 2.25\" x 5.5\" permitted inside Pearl Harbor.",
      "Baggage storage available at visitor center entrance for a nominal fee.",
    ],
  },
  {
    id: "diamond-head",
    name: "Exclusive Diamond Head Shuttle Tour",
    category: "shuttle",
    categoryLabel: "Diamond Head Shuttles",
    duration: "3 Hours",
    location: "Diamond Head Crater",
    rating: 4.9,
    reviewsCount: 780,
    price: 45,
    originalPrice: 50,
    image: "/sites/gotourshawaii/root/Header-Photo-Diamond-Head.jpeg",
    description:
      "Hike Oahu's iconic volcanic crater without parking nightmares. Daily roundtrip shuttles from Waikiki with pre-booked state park entry reservations included.",
    fullDescription:
      "Conquer Oahu's most iconic natural landmark with zero logistics stress. We pre-secure your mandatory Hawaii State Park entrance reservation, pick you up directly at your Waikiki hotel, and drop you off right inside the crater floor. Enjoy 2 hours to hike the legendary 1.6-mile summit trail, walk through historic military tunnels, and stand atop the observation platform taking in panoramic 360° views of Waikiki, the Pacific Ocean, and East Oahu.",
    highlights: [
      "State Park Entry Pass Included",
      "Flexible Morning & Sunset Departures",
      "Air-Conditioned Comfort",
      "Panoramic Waikiki Summit Views",
    ],
    included: [
      "Pre-booked Diamond Head State Monument entry reservation ticket",
      "Roundtrip express air-conditioned shuttle from Waikiki hotels",
      "Trail map, orientation briefing, and cold bottled Hawaiian water",
    ],
    notIncluded: ["Guided hike (trail is clearly marked and self-guided)"],
    meetingPoint: "Waikiki hotel curbside pickup (hourly departures 6:30 AM – 1:30 PM)",
    importantInfo: [
      "Hike distance is 1.6 miles roundtrip with 560 feet elevation gain and stairs.",
      "Closed-toe athletic shoes or sneakers required.",
      "Sun hat, sunglasses, and sun protection strongly encouraged.",
    ],
  },
  {
    id: "surf-lessons",
    name: "Waikiki Gentle Surf Lessons",
    category: "adventure",
    categoryLabel: "Snorkeling & Water",
    duration: "2 Hours",
    location: "Waikiki Beach",
    rating: 4.9,
    reviewsCount: 420,
    price: 110,
    originalPrice: 125,
    image: "/sites/gotourshawaii/root/GPTempDownload4-1-1.jpg",
    description:
      "Learn to surf on the gentle, forgiving waves of Waikiki where Hawaiian royalty once surfed. Small student-to-instructor ratios guaranteed to get you standing on your first wave.",
    fullDescription:
      "Ride the sacred waves where the legendary Duke Kahanamoku and Hawaiian royalty surfed. Our certified lifeguard surf instructors begin with a 20-minute land lesson covering ocean safety, board dynamics, and the pop-up technique. Then paddle out to Waikiki's gentle rolling reef break where instructors assist you into each wave. You will experience the unforgettable thrill of riding your first wave in Hawaii!",
    highlights: [
      "Beginner-Friendly Surf Board & Rash Guard",
      "Safety Briefing on Sand First",
      "CPR-Certified Lifeguard Instructors",
      "Photo Packages Available",
    ],
    included: [
      "Custom epoxy soft-top surfboard matched to your height/weight",
      "UV-protective surf rash guard and reef booties",
      "Small 4:1 student-to-instructor ratio",
      "Land simulation and in-water coaching",
    ],
    notIncluded: ["Digital photo/GoPro video package (available on-site)", "Towel"],
    meetingPoint: "Waikiki Beach Surf Desk (Kalakaua Ave at Kaiulani)",
    importantInfo: [
      "Minimum age is 6 years old. Basic swimming ability required.",
      "100% standing guarantee or repeat the lesson free of charge!",
    ],
  },
  {
    id: "north-shore-food",
    name: "North Shore Authentic Local Food & Taste Tour",
    category: "circle-island",
    categoryLabel: "Circle Island Tours",
    duration: "6-7 Hours",
    location: "North Shore & Haleiwa",
    rating: 4.9,
    reviewsCount: 680,
    price: 135,
    originalPrice: 150,
    image: "/sites/gotourshawaii/root/Visual-img-2-e1714631806737.jpg",
    description:
      "Savor the iconic culinary flavors of Oahu's legendary North Shore. Feast on authentic garlic shrimp, fresh tropical fruit stands, Hawaiian shave ice, and Haleiwa bakeries.",
    fullDescription:
      "Treat your taste buds to an authentic culinary road trip across Oahu's country side. Sample freshly cracked macadamia nuts and aromatic Waialua coffee, visit vibrant roadside fruit stands for sweet dragonfruit and mangoes, and savor an authentic hot garlic butter shrimp plate lunch from Kahuku's renowned shrimp farms. Stroll the historic wooden storefronts of Haleiwa surf town while enjoying legendary rainbow shave ice with coconut cream and mochi.",
    highlights: [
      "Famous Kahuku Garlic Shrimp Feast",
      "Haleiwa Historic Surf Town Walk",
      "Dole Plantation Pineapple Tasting",
      "Tropical Fruit Farm Experience",
    ],
    included: [
      "Full platter of famous Kahuku Garlic Shrimp (or chicken/vegetarian option)",
      "Traditional Hawaiian rainbow shave ice with sweet condensed milk",
      "Dole Plantation Pineapple whip tasting ticket",
      "Roundtrip Waikiki hotel pickup in air-conditioned van",
      "Local culinary and cultural guide",
    ],
    notIncluded: ["Additional specialty beverages", "Souvenirs"],
    meetingPoint: "Waikiki hotel pickup at 8:30 AM",
    importantInfo: [
      "Bring an appetite! Multiple food stops throughout the day.",
      "Shellfish allergies can be accommodated with garlic chicken or vegetarian tofu.",
    ],
    recommended: true,
  },
  {
    id: "sunset-catamaran",
    name: "Waikiki Sunset Catamaran & Cocktail Sail",
    category: "adventure",
    categoryLabel: "Snorkeling & Water",
    duration: "2 Hours",
    location: "Waikiki Coastline",
    rating: 4.9,
    reviewsCount: 512,
    price: 95,
    originalPrice: 110,
    image: "/sites/gotourshawaii/root/3-3.jpg",
    description:
      "Sail into the golden Hawaiian sunset off the shores of Waikiki with Diamond Head as your backdrop. Sip tropical cocktails and watch for playful dolphins.",
    fullDescription:
      "End your Hawaiian day in pure paradise. Board our sleek 54-foot sailing catamaran as the tropical afternoon light turns golden. Cruise past the iconic Waikiki skyline and Diamond Head crater as the sun dips below the horizon, painting the sky in fiery shades of amber, magenta, and orange. Sip refreshing island Mai Tais, local craft beers, and chilled wines while listening to soothing Hawaiian slack-key guitar and contemporary island tunes.",
    highlights: [
      "Golden Hour Waikiki Skyline Cruise",
      "Complimentary Cocktails & Beverages",
      "Diamond Head Oceanfront Vista",
      "Chilled Island Vibes & Music",
    ],
    included: [
      "3 complimentary alcoholic beverages (Mai Tais, beer, wine, seltzers)",
      "Unlimited non-alcoholic tropical juices and sodas",
      "USCG-licensed captain and attentive crew",
      "Spacious covered deck and open-air trampoline netting seating",
    ],
    notIncluded: ["Hotel transportation (Kewalo Basin Harbor is a 5-min drive from Waikiki)"],
    meetingPoint: "Kewalo Basin Harbor, Gate 1 (1125 Ala Moana Blvd)",
    importantInfo: [
      "Departure is at 5:30 PM (adjusts seasonally with sunset time). Please arrive 20 minutes prior.",
      "Must be 21+ with valid government photo ID to consume alcoholic beverages.",
      "Light evening jacket or windbreaker recommended.",
    ],
  },
];

export default function TourPackagesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [sortBy, setSortBy] = useState<string>("popular");

  // Modals state
  const [bookingOpen, setBookingOpen] = useState(false);
  const [selectedTourName, setSelectedTourName] = useState("Circle Island Tour");
  const [detailTour, setDetailTour] = useState<TourPackageDetail | null>(null);
  const [detailModalOpen, setDetailModalOpen] = useState(false);

  // Joint filtering & sorting logic
  const filteredAndSortedTours = useMemo(() => {
    return allTours
      .filter((tour) => {
        // Category filter
        if (selectedCategory !== "all" && tour.category !== selectedCategory) {
          return false;
        }

        // Search query filter
        if (searchQuery.trim()) {
          const q = searchQuery.toLowerCase().trim();
          const matchesName = tour.name.toLowerCase().includes(q);
          const matchesDesc = tour.description.toLowerCase().includes(q);
          const matchesCategory = tour.categoryLabel.toLowerCase().includes(q);
          const matchesLocation = tour.location.toLowerCase().includes(q);
          const matchesHighlights = tour.highlights.some((h) =>
            h.toLowerCase().includes(q)
          );

          if (!matchesName && !matchesDesc && !matchesCategory && !matchesLocation && !matchesHighlights) {
            return false;
          }
        }

        return true;
      })
      .sort((a, b) => {
        if (sortBy === "rating") {
          return b.rating - a.rating || b.reviewsCount - a.reviewsCount;
        }
        if (sortBy === "price-asc") {
          return a.price - b.price;
        }
        if (sortBy === "price-desc") {
          return b.price - a.price;
        }
        // default "popular"
        if (a.recommended && !b.recommended) return -1;
        if (!a.recommended && b.recommended) return 1;
        return b.reviewsCount - a.reviewsCount;
      });
  }, [selectedCategory, searchQuery, sortBy]);

  const handleBook = (name: string) => {
    setSelectedTourName(name);
    setBookingOpen(true);
  };

  const handleViewDetails = (tour: TourPackageDetail) => {
    setDetailTour(tour);
    setDetailModalOpen(true);
  };

  const handleClearFilters = () => {
    setSearchQuery("");
    setSelectedCategory("all");
    setSortBy("popular");
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#0c1f38] text-white selection:bg-[#f15d22] selection:text-white overflow-x-hidden">
      <TopBar />
      <Navbar onOpenBooking={() => handleBook("Circle Island Tour")} />

      <main className="flex-1">
        {/* 1. Header Hero */}
        <section className="relative w-full min-h-[440px] sm:min-h-[480px] md:min-h-[520px] flex items-center justify-center overflow-hidden">
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

          <div className="relative z-10 max-w-4xl mx-auto px-4 text-center pt-14 pb-16 sm:pb-20 md:pb-24">
            <div className="inline-flex items-center gap-2 mb-3.5 px-4 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/15 shadow-sm">
              <Sparkles className="w-4 h-4 text-[#f5b324]" />
              <span className="text-xs font-bold text-[#f5b324] uppercase tracking-widest">
                Top Rated Tours &amp; Excursions in Oahu
              </span>
            </div>
            <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl text-white uppercase tracking-wider mb-3 leading-none drop-shadow-sm">
              TOURS &amp; PACKAGES
            </h1>
            <p className="max-w-2xl mx-auto text-sm sm:text-base text-neutral-100 leading-relaxed font-normal">
              Handcrafted island adventures with local expert guides. Guaranteed tickets, small groups, and unforgettable memories.
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

        {/* 2. Interactive Search, Filter Tabs & 9 Tour Cards Grid */}
        <section className="bg-[#f5f0e8] text-neutral-900 py-10 sm:py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Search Bar & Sort Dropdown Row */}
            <div className="max-w-5xl mx-auto mb-8 flex flex-col md:flex-row items-center justify-between gap-4">
              {/* Search Input */}
              <div className="relative w-full md:max-w-lg">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400 pointer-events-none" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search your Hawaii adventure..."
                  className="w-full bg-white border border-neutral-300 rounded-2xl pl-11 pr-10 py-3 text-sm sm:text-base text-neutral-800 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#f15d22] focus:border-transparent transition-all shadow-sm"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-700 p-1"
                    aria-label="Clear search"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>

              {/* Sort By Dropdown */}
              <div className="flex items-center gap-2.5 w-full md:w-auto justify-end">
                <SlidersHorizontal className="w-4 h-4 text-neutral-500 shrink-0" />
                <span className="text-xs sm:text-sm font-bold text-neutral-700 uppercase tracking-wider shrink-0">
                  Sort By:
                </span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-white border border-neutral-300 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm font-medium text-neutral-800 focus:outline-none focus:ring-2 focus:ring-[#f15d22] focus:border-transparent shadow-xs cursor-pointer"
                >
                  <option value="popular">Most Popular</option>
                  <option value="rating">Highest Rated</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                </select>
              </div>
            </div>

            {/* Category Filter Pills - Responsive Row */}
            <div className="w-full mb-10 sm:mb-12 flex justify-center">
              <div className="flex items-center gap-2 sm:gap-2.5 lg:gap-3 flex-wrap md:flex-wrap lg:flex-nowrap justify-center max-w-full overflow-x-auto no-scrollbar py-1 px-2">
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
                    className={`px-4 sm:px-4.5 lg:px-5 py-2.5 rounded-full text-xs sm:text-[13px] font-bold uppercase tracking-wider whitespace-nowrap transition-all cursor-pointer shrink-0 ${
                      selectedCategory === tab.value
                        ? "bg-[#f15d22] text-white shadow-lg shadow-[#f15d22]/30 scale-105"
                        : "bg-white text-neutral-700 hover:bg-neutral-100 hover:text-neutral-900 border border-neutral-200 shadow-xs"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Results count label */}
            <div className="mb-6 flex items-center justify-between text-xs sm:text-sm text-neutral-600 font-medium">
              <span>
                Showing <strong>{filteredAndSortedTours.length}</strong> of <strong>{allTours.length}</strong> Hawaiian adventures
              </span>
              {(searchQuery || selectedCategory !== "all" || sortBy !== "popular") && (
                <button
                  onClick={handleClearFilters}
                  className="text-[#f15d22] hover:underline font-bold text-xs uppercase tracking-wider cursor-pointer"
                >
                  Reset All Filters
                </button>
              )}
            </div>

            {/* Empty State when no tours match */}
            {filteredAndSortedTours.length === 0 ? (
              <div className="text-center py-16 px-4 bg-white/70 rounded-3xl border border-black/5 max-w-lg mx-auto shadow-md">
                <AlertCircle className="w-12 h-12 text-[#f15d22] mx-auto mb-3" />
                <h3 className="font-heading text-2xl font-bold text-[#0c2340]">
                  No tours found. Try another search.
                </h3>
                <p className="text-neutral-600 text-sm mt-1">
                  We couldn&apos;t find any excursions matching &ldquo;{searchQuery}&rdquo;.
                </p>
                <button
                  onClick={handleClearFilters}
                  className="mt-5 px-6 py-2.5 bg-[#f15d22] hover:bg-[#d84b13] text-white rounded-xl font-heading text-sm font-bold uppercase tracking-wider shadow-md transition-all cursor-pointer"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              /* 9 Tour Cards Grid: 3x3 on desktop, 2-col on tablet, 1-col on mobile */
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 lg:gap-8">
                {filteredAndSortedTours.map((tour) => (
                  <div
                    key={tour.id}
                    className="bg-white rounded-3xl overflow-hidden shadow-xl border border-neutral-200/80 flex flex-col justify-between group transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/20"
                  >
                    {/* Image Container with subtle zoom */}
                    <div
                      onClick={() => handleViewDetails(tour)}
                      className="relative h-60 w-full overflow-hidden cursor-pointer"
                    >
                      <Image
                        src={tour.image}
                        alt={tour.name}
                        fill
                        className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />

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
                    <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                      <div>
                        <h3
                          onClick={() => handleViewDetails(tour)}
                          className="font-heading text-2xl font-bold text-[#0c2340] uppercase tracking-wide leading-snug mb-2.5 group-hover:text-[#f15d22] transition-colors cursor-pointer"
                        >
                          {tour.name}
                        </h3>
                        <p className="text-neutral-600 text-sm font-normal leading-relaxed mb-4 line-clamp-3">
                          {tour.description}
                        </p>

                        {/* Highlights */}
                        <ul className="space-y-2 mb-6 text-xs sm:text-[13px] text-neutral-700 font-medium">
                          {tour.highlights.map((h, i) => (
                            <li key={i} className="flex items-center gap-2">
                              <CheckCircle className="w-4 h-4 text-[#f15d22] shrink-0" />
                              <span className="leading-tight">{h}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Price and CTA Buttons Row */}
                      <div className="pt-4 border-t border-neutral-100 flex flex-col gap-3">
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="text-xs text-neutral-400 font-semibold line-through mb-0.5">
                              ${tour.originalPrice}
                            </div>
                            <div className="flex items-baseline gap-1">
                              <span className="text-3xl font-extrabold text-[#f15d22] font-heading tracking-tight leading-none">
                                ${tour.price}
                              </span>
                              <span className="text-xs text-neutral-500 font-medium">/ person</span>
                            </div>
                          </div>

                          <span className="text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-md">
                            Best Rate Guaranteed
                          </span>
                        </div>

                        {/* Action Buttons: VIEW DETAILS + BOOK NOW */}
                        <div className="grid grid-cols-2 gap-2.5 pt-1">
                          <button
                            onClick={() => handleViewDetails(tour)}
                            className="w-full bg-[#0c2340] hover:bg-[#071629] text-white text-xs sm:text-sm font-bold uppercase tracking-wider py-2.5 px-3 rounded-xl border border-transparent shadow-sm flex items-center justify-center gap-1.5 transition-all cursor-pointer"
                          >
                            <Eye className="w-3.5 h-3.5" />
                            <span>VIEW DETAILS</span>
                          </button>

                          <button
                            onClick={() => handleBook(tour.name)}
                            className="w-full bg-[#f15d22] hover:bg-[#d84b13] text-white text-xs sm:text-sm font-bold uppercase tracking-wider py-2.5 px-3 rounded-xl shadow-md shadow-[#f15d22]/30 hover:shadow-lg hover:shadow-[#f15d22]/40 flex items-center justify-center gap-1.5 transition-all transform hover:scale-102 active:scale-98 cursor-pointer"
                          >
                            <span>BOOK NOW</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* 3. Experience Hawaii Banner */}
        <CtaBanner onBookNow={() => handleBook("Circle Island Tour")} />
      </main>

      <Footer />

      {/* 4. Tour Detail Modal */}
      <TourDetailModal
        tour={detailTour}
        isOpen={detailModalOpen}
        onClose={() => setDetailModalOpen(false)}
        onBookNow={(name) => handleBook(name)}
      />

      {/* 5. Modern 5-Step Booking Wizard */}
      <BookingDialog
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
        defaultTour={selectedTourName}
      />
    </div>
  );
}

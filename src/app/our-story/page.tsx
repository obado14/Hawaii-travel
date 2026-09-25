"use client";

import React, { useState } from "react";
import Image from "next/image";
import { TopBar } from "@/components/sites/gotourshawaii/root/top-bar";
import { Navbar } from "@/components/sites/gotourshawaii/root/navbar";
import { Footer } from "@/components/sites/gotourshawaii/root/footer";
import { BookingDialog } from "@/components/sites/gotourshawaii/root/booking-dialog";
import { CtaBanner } from "@/components/sites/gotourshawaii/root/cta-banner";
import {
  Heart,
  ShieldCheck,
  Award,
  Sparkles,
  Users,
  Compass,
  Star,
  Clock,
  MapPin,
  Camera,
} from "lucide-react";

interface TeamMember {
  name: string;
  role: string;
  image: string;
  description: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Eddie \"Eke\" Keliinohomoku",
    role: "Founder & Cultural Director",
    image: "/sites/gotourshawaii/root/Visual-img-1-e1714631873659.jpg",
    description:
      "Born and raised on Oahu, Eke founded Go Tours Hawaii to preserve native storytelling, sacred sites, and true Polynesian hospitality.",
  },
  {
    name: "Koa Takahashi",
    role: "Lead Island Guide & Oahu Specialist",
    image: "/sites/gotourshawaii/root/Visual-img-4-e1714632180613.jpg",
    description:
      "With over 12 years navigating Oahu's mountain ridges and coastal sanctuaries, Koa brings island folklore and hidden lookouts to life.",
  },
  {
    name: "Leilani Kealoha",
    role: "Marine Naturalist & Eco-Tour Lead",
    image: "/sites/gotourshawaii/root/waikiki-turtle-banner.png",
    description:
      "Dedicated to ocean conservation, Leilani educates guests on respecting Hawaii's green sea turtles (honu) and delicate coral reefs.",
  },
  {
    name: "David Vance",
    role: "Senior Historian & Tour Narrator",
    image: "/sites/gotourshawaii/root/optimized-pearl-harbor-02.jpg",
    description:
      "A passionate military and cultural historian delivering deeply moving narratives at Pearl Harbor and historic Polynesian landmarks.",
  },
];

const timelineMilestones = [
  {
    year: "2010",
    title: "Founded in Hawaii",
    description:
      "Eddie \"Eke\" started Go Tours Hawaii on Oahu with a single van and a passionate mission: share authentic Hawaiian culture beyond tourist cliches.",
  },
  {
    year: "2015",
    title: "Expanded Island Tours",
    description:
      "Upgraded our entire fleet to luxury Mercedes Sprinters and launched our acclaimed full-day Circle Island and North Shore coastal itineraries.",
  },
  {
    year: "2020",
    title: "New Tour Experiences",
    description:
      "Pioneered bespoke private charters across Oahu and Maui, curated hidden waterfall trails, and secured VIP guaranteed Pearl Harbor access.",
  },
  {
    year: "2026",
    title: "Serving Global Travelers",
    description:
      "Ranked in TripAdvisor's Top 10 Best Experiences in the World, having welcomed over 50,000 delighted guests with genuine Aloha spirit.",
  },
];

const visualStories = [
  {
    category: "Hawaii Landscape",
    title: "Dramatic Island Vistas",
    description:
      "From the towering Koʻolau volcanic ridges to the turquoise waters of Windward Oahu, nature's grandeur awaits at every turn.",
    image: "/sites/gotourshawaii/root/Visual-img-7-e1714632127105.jpg",
  },
  {
    category: "Tour Experience",
    title: "Intimate Local Journey",
    description:
      "Travel in spacious, air-conditioned luxury vans with native storytellers who treat every traveler as part of our own ʻOhana.",
    image: "/sites/gotourshawaii/root/our-story-hero.png",
  },
  {
    category: "Hawaiian Culture",
    title: "Living Sacred Traditions",
    description:
      "Experience ancient heiau temples, traditional imu feasts, storytelling hula, and the profound Hawaiian concept of aloha.",
    image: "/sites/gotourshawaii/root/optimized-luau-cover-002.jpg",
  },
];

export default function OurStoryPage() {
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-[#0c1f38] text-white selection:bg-[#f15d22] selection:text-white">
      <TopBar />
      <Navbar onOpenBooking={() => setBookingOpen(true)} />

      <main className="flex-1">
        {/* 1. Hero Section */}
        <section className="relative w-full min-h-[440px] sm:min-h-[480px] md:min-h-[520px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/sites/gotourshawaii/root/our-story-hero.png"
              alt="Go Tours Hawaii Team and Fleet"
              fill
              priority
              className="object-cover object-[center_35%]"
            />
            {/* Softened full overlay so team and vehicles stay visible */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#0c1f38]/50 via-black/20 to-[#0c1f38]/70" />
          </div>

          <div className="relative z-10 max-w-4xl mx-auto px-4 text-center pt-14 pb-16 sm:pb-20 md:pb-24">
            {/* Text backdrop container for crisp readability */}
            <div className="max-w-3xl mx-auto py-5 px-6 sm:px-8 rounded-3xl bg-black/35 backdrop-blur-[2px] border border-white/10 shadow-2xl">
              <div className="inline-flex items-center gap-2 mb-3.5 px-4 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/20 shadow-sm">
                <Sparkles className="w-4 h-4 text-[#f5b324]" />
                <span className="text-xs font-bold text-[#f5b324] uppercase tracking-widest">
                  Locally Owned &amp; Operated in Hawaii
                </span>
              </div>
              <h1 className="font-heading text-5xl sm:text-7xl md:text-8xl text-white uppercase tracking-wider mb-3 leading-none drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
                OUR STORY
              </h1>
              <p className="max-w-2xl mx-auto text-base sm:text-lg text-neutral-100 font-normal leading-relaxed drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]">
                Sharing the spirit of Aloha, authentic Hawaiian heritage, and unforgettable island memories since day one.
              </p>
            </div>
          </div>

          {/* Polynesian Divider */}
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

        {/* 2. Narrative Section */}
        <section className="bg-[#f5f0e8] text-neutral-900 py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              <div className="lg:col-span-7 space-y-5">
                <span className="text-xs font-extrabold text-[#f15d22] uppercase tracking-widest block">
                  About Go Tours Hawaii
                </span>
                <h2 className="font-heading text-3xl sm:text-5xl text-[#0c2340] uppercase leading-tight">
                  ROOTED IN THE CULTURE OF THE ISLANDS
                </h2>
                <div className="space-y-4 text-sm sm:text-base text-neutral-700 leading-relaxed sm:leading-7 font-normal">
                  <p>
                    <strong>Go Tours Hawaii</strong> was born out of a deep passion for the Hawaiian islands&apos; rich culture,
                    stunning landscapes, and vibrant communities. Our founder, Eddie &ldquo;Eke&rdquo; Keliinohomoku, envisioned a tour
                    company that does more than just show visitors pretty sights—one that truly immerses them in the real history,
                    folklore, and living traditions of Hawaii.
                  </p>
                  <p>
                    From our beginnings as a passionate local tour crew, we have grown into one of Hawaii&apos;s highest-rated tour
                    providers, honored with TripAdvisor&apos;s <em>Travelers&apos; Choice Best of the Best</em> (Top 10 Best Experiences in the World).
                  </p>
                  <p>
                    Unlike mega-bus tour operators, we keep our groups comfortable and intimate. We travel in modern, air-conditioned
                    vehicles with local storytellers whose families have called Hawaii home for generations.
                  </p>
                </div>
              </div>

              {/* Enlarged Image to Balance Narrative Content */}
              <div className="lg:col-span-5 relative">
                <div className="relative h-[460px] sm:h-[500px] lg:h-[540px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                  <Image
                    src="/sites/gotourshawaii/root/Visual-img-3-e1714632197722.jpg"
                    alt="Byodo-In Temple serene grounds"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent flex items-end p-6 sm:p-8">
                    <div className="border-l-2 border-[#f15d22] pl-3.5">
                      <p className="text-white text-xs sm:text-sm leading-relaxed italic drop-shadow-sm font-medium">
                        &ldquo;Aloha is more than a greeting—it is how we live, how we respect the land, and how we care for every guest.&rdquo;
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. NEW: Company Statistics Section */}
        <section className="bg-white border-y border-neutral-200/80 py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
              <span className="text-xs font-extrabold text-[#f15d22] uppercase tracking-widest block mb-2">
                Proven Excellence
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl text-[#0c2340] uppercase tracking-wide">
                OUR IMPACT IN NUMBERS
              </h2>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {/* Stat 1 */}
              <div className="bg-[#f5f0e8]/60 rounded-3xl p-6 sm:p-8 text-center border border-black/5 hover:-translate-y-1 transition-transform">
                <div className="w-12 h-12 rounded-2xl bg-[#f15d22]/10 text-[#f15d22] flex items-center justify-center mx-auto mb-3">
                  <Clock className="w-6 h-6" />
                </div>
                <div className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-[#f15d22] tracking-tight mb-2">
                  15+
                </div>
                <div className="font-bold text-xs sm:text-sm text-[#0c2340] uppercase tracking-wider">
                  Years of Experience
                </div>
                <p className="text-[11px] sm:text-xs text-neutral-500 mt-1">Guiding travelers since 2010</p>
              </div>

              {/* Stat 2 */}
              <div className="bg-[#f5f0e8]/60 rounded-3xl p-6 sm:p-8 text-center border border-black/5 hover:-translate-y-1 transition-transform">
                <div className="w-12 h-12 rounded-2xl bg-[#f15d22]/10 text-[#f15d22] flex items-center justify-center mx-auto mb-3">
                  <Users className="w-6 h-6" />
                </div>
                <div className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-[#f15d22] tracking-tight mb-2">
                  50K+
                </div>
                <div className="font-bold text-xs sm:text-sm text-[#0c2340] uppercase tracking-wider">
                  Happy Travelers
                </div>
                <p className="text-[11px] sm:text-xs text-neutral-500 mt-1">From all 50 states &amp; 40+ countries</p>
              </div>

              {/* Stat 3 */}
              <div className="bg-[#f5f0e8]/60 rounded-3xl p-6 sm:p-8 text-center border border-black/5 hover:-translate-y-1 transition-transform">
                <div className="w-12 h-12 rounded-2xl bg-[#f15d22]/10 text-[#f15d22] flex items-center justify-center mx-auto mb-3">
                  <Compass className="w-6 h-6" />
                </div>
                <div className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-[#f15d22] tracking-tight mb-2">
                  100+
                </div>
                <div className="font-bold text-xs sm:text-sm text-[#0c2340] uppercase tracking-wider">
                  Tour Experiences
                </div>
                <p className="text-[11px] sm:text-xs text-neutral-500 mt-1">Bespoke island departures weekly</p>
              </div>

              {/* Stat 4 */}
              <div className="bg-[#f5f0e8]/60 rounded-3xl p-6 sm:p-8 text-center border border-black/5 hover:-translate-y-1 transition-transform">
                <div className="w-12 h-12 rounded-2xl bg-[#f15d22]/10 text-[#f15d22] flex items-center justify-center mx-auto mb-3">
                  <Star className="w-6 h-6" />
                </div>
                <div className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-[#f15d22] tracking-tight mb-2">
                  4.9/5
                </div>
                <div className="font-bold text-xs sm:text-sm text-[#0c2340] uppercase tracking-wider">
                  Guest Rating
                </div>
                <p className="text-[11px] sm:text-xs text-neutral-500 mt-1">TripAdvisor Best of the Best</p>
              </div>
            </div>
          </div>
        </section>

        {/* 4. NEW: Our Journey / Timeline Section */}
        <section className="bg-[#f5f0e8] text-neutral-900 py-14 sm:py-20 px-4 sm:px-6 lg:px-8 border-b border-black/5">
          <div className="max-w-6xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
              <span className="text-xs font-extrabold text-[#f15d22] uppercase tracking-widest block mb-2">
                Our Journey
              </span>
              <h2 className="font-heading text-3xl sm:text-5xl text-[#0c2340] uppercase tracking-wide mb-3">
                HOW WE GREW WITH THE ISLANDS
              </h2>
              <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
                From a single tour van with an authentic vision to Hawaii&apos;s premier boutique travel company.
              </p>
            </div>

            {/* Desktop Timeline: Horizontal Grid with Connecting Track */}
            <div className="hidden md:block relative">
              {/* Connecting Horizontal Line */}
              <div className="absolute top-7 left-12 right-12 h-0.5 bg-neutral-300 z-0" />

              <div className="grid grid-cols-4 gap-6 relative z-10">
                {timelineMilestones.map((item) => (
                  <div key={item.year} className="flex flex-col items-center text-center group">
                    {/* Milestone Badge Dot */}
                    <div className="w-14 h-14 rounded-full bg-[#f15d22] text-white flex items-center justify-center font-heading font-bold text-sm shadow-lg ring-4 ring-[#f5f0e8] group-hover:scale-110 transition-transform mb-6">
                      {item.year}
                    </div>

                    {/* Milestone Content Card */}
                    <div className="bg-white rounded-3xl p-6 shadow-md border border-neutral-200/80 w-full flex-1 flex flex-col justify-start group-hover:-translate-y-1 group-hover:shadow-xl transition-all">
                      <h3 className="font-heading text-lg font-bold text-[#0c2340] uppercase tracking-wide mb-2 group-hover:text-[#f15d22] transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed font-normal">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile Timeline: Vertical Flow with Connecting Track */}
            <div className="md:hidden relative pl-6 space-y-8">
              {/* Vertical Track Line */}
              <div className="absolute top-4 bottom-4 left-3 w-0.5 bg-neutral-300" />

              {timelineMilestones.map((item) => (
                <div key={item.year} className="relative pl-6">
                  {/* Milestone Marker */}
                  <div className="absolute -left-6 top-1.5 w-6 h-6 rounded-full bg-[#f15d22] ring-4 ring-[#f5f0e8] flex items-center justify-center text-white text-[10px] font-bold shadow-md" />

                  <div className="bg-white rounded-2xl p-5 shadow-md border border-neutral-200/80">
                    <span className="inline-block px-3 py-0.5 rounded-full bg-[#f15d22]/10 text-[#f15d22] text-xs font-bold uppercase tracking-wider mb-1.5">
                      {item.year}
                    </span>
                    <h3 className="font-heading text-base font-bold text-[#0c2340] uppercase tracking-wide mb-1.5">
                      {item.title}
                    </h3>
                    <p className="text-neutral-600 text-xs leading-relaxed font-normal">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. Core Pillars (Preserved) */}
        <section className="bg-[#081d38] text-white py-14 sm:py-18 px-4 sm:px-6 lg:px-8 border-t border-white/10">
          <div className="max-w-6xl mx-auto text-center mb-10 sm:mb-12">
            <h2 className="font-heading text-4xl sm:text-6xl text-[#f5b324] uppercase tracking-wider mb-3">
              THE PILLARS OF OUR ALOHA
            </h2>
            <p className="text-neutral-300 text-sm max-w-xl mx-auto">
              Every tour we curate is guided by these ancestral Hawaiian principles:
            </p>
          </div>

          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-7 hover:bg-white/10 transition-colors text-center group">
              <div className="w-13 h-13 rounded-full bg-[#f15d22]/20 text-[#f15d22] flex items-center justify-center mx-auto mb-3.5 group-hover:scale-110 transition-transform">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="font-heading text-xl sm:text-2xl text-[#f15d22] uppercase tracking-wide mb-2">
                ALOHA (Love &amp; Hospitality)
              </h3>
              <p className="text-neutral-200 text-xs sm:text-sm leading-relaxed">
                Treating every traveler as part of our own &lsquo;Ohana (family), creating heartfelt memories that stay with you forever.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-7 hover:bg-white/10 transition-colors text-center group">
              <div className="w-13 h-13 rounded-full bg-[#f15d22]/20 text-[#f15d22] flex items-center justify-center mx-auto mb-3.5 group-hover:scale-110 transition-transform">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-heading text-xl sm:text-2xl text-[#f15d22] uppercase tracking-wide mb-2">
                KULEANA (Responsibility)
              </h3>
              <p className="text-neutral-200 text-xs sm:text-sm leading-relaxed">
                Honoring and protecting Hawaii&apos;s natural ecosystems, wildlife (Honu sea turtles), and sacred cultural sites.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-7 hover:bg-white/10 transition-colors text-center group">
              <div className="w-13 h-13 rounded-full bg-[#f15d22]/20 text-[#f15d22] flex items-center justify-center mx-auto mb-3.5 group-hover:scale-110 transition-transform">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="font-heading text-xl sm:text-2xl text-[#f15d22] uppercase tracking-wide mb-2">
                PONO (Excellence)
              </h3>
              <p className="text-neutral-200 text-xs sm:text-sm leading-relaxed">
                Delivering five-star service on every departure, with transparent pricing, guaranteed tickets, and knowledgeable guides.
              </p>
            </div>
          </div>
        </section>

        {/* 6. NEW: Meet Our Team Section */}
        <section className="bg-[#f5f0e8] text-neutral-900 py-14 sm:py-20 px-4 sm:px-6 lg:px-8 border-b border-black/5">
          <div className="max-w-6xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
              <span className="text-xs font-extrabold text-[#f15d22] uppercase tracking-widest block mb-2">
                Local ʻOhana
              </span>
              <h2 className="font-heading text-3xl sm:text-5xl text-[#0c2340] uppercase tracking-wide mb-3">
                MEET THE PEOPLE BEHIND GO TOURS HAWAII
              </h2>
              <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
                Passionate island natives, certified naturalists, and historians dedicated to showing you the authentic Hawaii.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {teamMembers.map((member) => (
                <div
                  key={member.name}
                  className="bg-white rounded-3xl overflow-hidden shadow-xl border border-neutral-200/80 group flex flex-col justify-between hover:-translate-y-1.5 hover:shadow-2xl transition-all duration-300"
                >
                  {/* Member Photo */}
                  <div className="relative h-60 sm:h-64 w-full overflow-hidden shrink-0">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-70" />
                    <div className="absolute bottom-3 left-3 right-3">
                      <span className="inline-block bg-[#0c2340]/90 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border border-white/20">
                        {member.role.split("&")[0].trim()}
                      </span>
                    </div>
                  </div>

                  {/* Member Info */}
                  <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-heading text-lg sm:text-xl font-bold text-[#0c2340] uppercase tracking-wide mb-1 group-hover:text-[#f15d22] transition-colors">
                        {member.name}
                      </h3>
                      <p className="text-[#f15d22] text-xs font-bold uppercase tracking-wider mb-3">
                        {member.role}
                      </p>
                      <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed font-normal">
                        {member.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. NEW: Visual Storytelling Gallery */}
        <section className="bg-[#0c1f38] text-white py-14 sm:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="max-w-6xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
              <div className="inline-flex items-center gap-2 mb-2 px-3.5 py-1 rounded-full bg-white/10 border border-white/20 text-[#f5b324] text-xs font-bold uppercase tracking-widest">
                <Camera className="w-3.5 h-3.5" />
                <span>Visual Storytelling</span>
              </div>
              <h2 className="font-heading text-3xl sm:text-5xl text-white uppercase tracking-wide mb-3">
                CAPTURING THE ESSENCE OF HAWAII
              </h2>
              <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
                A glimpse into the majestic landscapes, shared moments, and living traditions that define our island adventures.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {visualStories.map((story) => (
                <div
                  key={story.title}
                  className="relative h-[380px] sm:h-[420px] rounded-3xl overflow-hidden shadow-2xl group border border-white/10 hover:border-[#f15d22]/50 transition-all duration-300"
                >
                  <Image
                    src={story.image}
                    alt={story.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent" />

                  {/* Top Badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="bg-[#f15d22] text-white text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-md flex items-center gap-1.5">
                      <MapPin className="w-3 h-3" />
                      {story.category}
                    </span>
                  </div>

                  {/* Bottom Text Content */}
                  <div className="absolute bottom-0 inset-x-0 p-6 sm:p-7 z-10">
                    <div className="w-8 h-1 bg-[#f15d22] group-hover:w-14 transition-all duration-300 rounded mb-2.5" />
                    <h3 className="font-heading text-xl sm:text-2xl text-white uppercase tracking-wide mb-2 drop-shadow-md">
                      {story.title}
                    </h3>
                    <p className="text-neutral-200 text-xs sm:text-sm leading-relaxed font-normal drop-shadow-sm">
                      {story.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 8. CTA Banner */}
        <CtaBanner onBookNow={() => setBookingOpen(true)} />
      </main>

      <Footer />

      <BookingDialog
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
        defaultTour="Circle Island Tour"
      />
    </div>
  );
}

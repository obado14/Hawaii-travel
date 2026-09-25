"use client";

import React, { useState } from "react";
import Image from "next/image";
import { TopBar } from "@/components/sites/gotourshawaii/root/top-bar";
import { Navbar } from "@/components/sites/gotourshawaii/root/navbar";
import { Footer } from "@/components/sites/gotourshawaii/root/footer";
import { BookingDialog } from "@/components/sites/gotourshawaii/root/booking-dialog";
import { CtaBanner } from "@/components/sites/gotourshawaii/root/cta-banner";
import { Heart, Compass, ShieldCheck, Users, Award, Sparkles } from "lucide-react";

export default function OurStoryPage() {
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-[#0c1f38] text-white selection:bg-[#f15d22] selection:text-white">
      <TopBar />
      <Navbar onOpenBooking={() => setBookingOpen(true)} />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative w-full min-h-[420px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/sites/gotourshawaii/root/Banner-BG-Thumbnail.jpg"
              alt="Oahu Koʻolau Mountains"
              fill
              priority
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0c1f38]/70 via-black/50 to-[#0c1f38]/90" />
          </div>

          <div className="relative z-10 max-w-4xl mx-auto px-4 text-center pt-12 pb-16">
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/15">
              <Sparkles className="w-4 h-4 text-[#f5b324]" />
              <span className="text-xs font-bold text-[#f5b324] uppercase tracking-widest">
                Locally Owned &amp; Operated in Hawaii
              </span>
            </div>
            <h1 className="font-heading text-5xl sm:text-7xl md:text-8xl text-white uppercase tracking-wider mb-4 leading-none">
              OUR STORY
            </h1>
            <p className="max-w-2xl mx-auto text-base sm:text-lg text-neutral-200 font-normal">
              Sharing the spirit of Aloha, authentic Hawaiian heritage, and unforgettable island memories since day one.
            </p>
          </div>

          {/* Polynesian Divider */}
          <div className="absolute bottom-0 left-0 right-0 z-20 w-full pointer-events-none translate-y-1">
            <div className="relative w-full h-12 sm:h-16">
              <Image
                src="/sites/gotourshawaii/root/banner-divider-optimized-002.png"
                alt="Polynesian tribal divider"
                fill
                className="object-cover object-bottom"
              />
            </div>
          </div>
        </section>

        {/* Narrative Section */}
        <section className="bg-[#f5f0e8] text-neutral-900 py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 space-y-6">
                <span className="text-xs font-extrabold text-[#f15d22] uppercase tracking-widest block">
                  About Go Tours Hawaii
                </span>
                <h2 className="font-heading text-3xl sm:text-5xl text-[#0c2340] uppercase leading-tight">
                  ROOTED IN THE CULTURE OF THE ISLANDS
                </h2>
                <div className="space-y-4 text-sm sm:text-base text-neutral-700 leading-relaxed font-normal">
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

              <div className="lg:col-span-5 relative">
                <div className="relative h-[420px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                  <Image
                    src="/sites/gotourshawaii/root/Visual-img-3-e1714632197722.jpg"
                    alt="Byodo-In Temple serene grounds"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-6">
                    <p className="text-white text-xs sm:text-sm italic">
                      &ldquo;Aloha is more than a greeting—it is how we live, how we respect the land, and how we care for every guest.&rdquo;
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Pillars */}
        <section className="bg-[#081d38] text-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-t border-white/10">
          <div className="max-w-6xl mx-auto text-center mb-14">
            <h2 className="font-heading text-4xl sm:text-6xl text-[#f5b324] uppercase tracking-wider mb-4">
              THE PILLARS OF OUR ALOHA
            </h2>
            <p className="text-neutral-300 text-sm max-w-xl mx-auto">
              Every tour we curate is guided by these ancestral Hawaiian principles:
            </p>
          </div>

          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors text-center group">
              <div className="w-14 h-14 rounded-full bg-[#f15d22]/20 text-[#f15d22] flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Heart className="w-7 h-7" />
              </div>
              <h3 className="font-heading text-2xl text-[#f15d22] uppercase tracking-wide mb-2">
                ALOHA (Love &amp; Hospitality)
              </h3>
              <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed">
                Treating every traveler as part of our own &lsquo;Ohana (family), creating heartfelt memories that stay with you forever.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors text-center group">
              <div className="w-14 h-14 rounded-full bg-[#f15d22]/20 text-[#f15d22] flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <ShieldCheck className="w-7 h-7" />
              </div>
              <h3 className="font-heading text-2xl text-[#f15d22] uppercase tracking-wide mb-2">
                KULEANA (Responsibility)
              </h3>
              <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed">
                Honoring and protecting Hawaii&apos;s natural ecosystems, wildlife (Honu sea turtles), and sacred cultural sites.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors text-center group">
              <div className="w-14 h-14 rounded-full bg-[#f15d22]/20 text-[#f15d22] flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Award className="w-7 h-7" />
              </div>
              <h3 className="font-heading text-2xl text-[#f15d22] uppercase tracking-wide mb-2">
                PONO (Excellence)
              </h3>
              <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed">
                Delivering five-star service on every departure, with transparent pricing, guaranteed tickets, and knowledgeable guides.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Banner */}
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

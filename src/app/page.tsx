"use client";

import React from "react";
import { TopBar } from "@/components/sites/gotourshawaii/root/top-bar";
import { Navbar } from "@/components/sites/gotourshawaii/root/navbar";
import { Hero } from "@/components/sites/gotourshawaii/root/hero";
import { ExperienceCards } from "@/components/sites/gotourshawaii/root/experience-cards";
import { WhyChooseUs } from "@/components/sites/gotourshawaii/root/why-choose-us";
import { DiamondHeadBanner } from "@/components/sites/gotourshawaii/root/diamond-head-banner";
import { VisualOdyssey } from "@/components/sites/gotourshawaii/root/visual-odyssey";
import { GuestReviews } from "@/components/sites/gotourshawaii/root/guest-reviews";
import { FAQSection } from "@/components/sites/gotourshawaii/root/faq-section";
import { TrustBadges } from "@/components/sites/gotourshawaii/root/trust-badges";
import { CtaBanner } from "@/components/sites/gotourshawaii/root/cta-banner";
import { Footer } from "@/components/sites/gotourshawaii/root/footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-[#124E50] selection:bg-[#E76F51] selection:text-white overflow-x-hidden">
      {/* 1. Top Announcement Bar */}
      <TopBar />

      {/* 2. Sticky Responsive Navbar */}
      <Navbar />

      {/* 3. Hero Section with Koolau mountains, TripAdvisor badge & CTA */}
      <main className="flex-1">
        {/* Step 1: Hero */}
        <Hero />

        {/* Step 2: Choose Your Experience (Circle Island, Luau, Pearl Harbor) */}
        <ExperienceCards />

        {/* Step 3: Why Choose Go Tours Hawaii (4 Benefit Cards) */}
        <WhyChooseUs />

        {/* Step 4: Featured Experience (Diamond Head Shuttle) */}
        <DiamondHeadBanner />

        {/* Step 5: Visual Experience (Visual Odyssey photo gallery) */}
        <VisualOdyssey />

        {/* Step 6: Testimonials (Hear From Our Guests review slider) */}
        <GuestReviews />

        {/* Step 7: FAQ (Frequently Asked Questions - 4 Core Questions) */}
        <FAQSection />

        {/* Partner Trust Badges (Compact credibility strip) */}
        <TrustBadges />

        {/* Step 8: Single Final CTA (Rasakan Keajaiban Hawaii) */}
        <CtaBanner />
      </main>

      {/* 14. Comprehensive Footer with map & links */}
      <Footer />
    </div>
  );
}

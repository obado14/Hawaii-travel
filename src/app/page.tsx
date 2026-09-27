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
import { ScrollReveal } from "@/components/sites/gotourshawaii/root/scroll-reveal";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FFF3D6] text-[#073B4C] selection:bg-[#F4A261] selection:text-white overflow-x-hidden">
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
        <ScrollReveal delay={100}>
          <WhyChooseUs />
        </ScrollReveal>

        {/* Step 4: Featured Experience (Diamond Head Shuttle) */}
        <ScrollReveal>
          <DiamondHeadBanner />
        </ScrollReveal>

        {/* Step 5: Visual Experience (Visual Odyssey photo gallery) */}
        <ScrollReveal>
          <VisualOdyssey />
        </ScrollReveal>

        {/* Step 6: Testimonials (Hear From Our Guests review slider) */}
        <ScrollReveal>
          <GuestReviews />
        </ScrollReveal>

        {/* Step 7: FAQ (Frequently Asked Questions - 4 Core Questions) */}
        <ScrollReveal>
          <FAQSection />
        </ScrollReveal>

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

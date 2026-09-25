"use client";

import React, { useState } from "react";
import { TopBar } from "@/components/sites/gotourshawaii/root/top-bar";
import { Navbar } from "@/components/sites/gotourshawaii/root/navbar";
import { Hero } from "@/components/sites/gotourshawaii/root/hero";
import { ExperienceCards } from "@/components/sites/gotourshawaii/root/experience-cards";
import { WhyChooseUs } from "@/components/sites/gotourshawaii/root/why-choose-us";
import { DiamondHeadBanner } from "@/components/sites/gotourshawaii/root/diamond-head-banner";
import { VisualOdyssey } from "@/components/sites/gotourshawaii/root/visual-odyssey";
import { GuestReviews } from "@/components/sites/gotourshawaii/root/guest-reviews";
import { MissionSection } from "@/components/sites/gotourshawaii/root/mission-section";
import { FAQSection } from "@/components/sites/gotourshawaii/root/faq-section";
import { TrustBadges } from "@/components/sites/gotourshawaii/root/trust-badges";
import { ContactSection } from "@/components/sites/gotourshawaii/root/contact-section";
import { CtaBanner } from "@/components/sites/gotourshawaii/root/cta-banner";
import { Footer } from "@/components/sites/gotourshawaii/root/footer";
import { BookingDialog } from "@/components/sites/gotourshawaii/root/booking-dialog";
import { ScrollReveal } from "@/components/sites/gotourshawaii/root/scroll-reveal";

export default function Home() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [selectedTour, setSelectedTour] = useState("Circle Island Tour");

  const handleOpenBooking = (tourName?: string) => {
    if (tourName) setSelectedTour(tourName);
    setBookingOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#0c1f38] text-white selection:bg-[#f15d22] selection:text-white overflow-x-hidden">
      {/* 1. Top Announcement Bar */}
      <TopBar />

      {/* 2. Sticky Responsive Navbar */}
      <Navbar onOpenBooking={() => handleOpenBooking("Circle Island Tour")} />

      {/* 3. Hero Section with Koolau mountains, TripAdvisor badge & CTA */}
      <main className="flex-1">
        <Hero onOpenBooking={() => handleOpenBooking("Circle Island Tour")} />

        {/* 4. Choose Your Experience (Circle Island, Luau, Pearl Harbor) */}
        <ScrollReveal>
          <ExperienceCards onSelectExperience={(title) => handleOpenBooking(title)} />
        </ScrollReveal>

        {/* 5. NEW: Why Choose Go Tours Hawaii (4 Benefit Cards) */}
        <ScrollReveal delay={100}>
          <WhyChooseUs />
        </ScrollReveal>

        {/* 6. Exclusive Diamond Head Shuttle Banner */}
        <ScrollReveal>
          <DiamondHeadBanner onBookShuttle={() => handleOpenBooking("Diamond Head Shuttle")} />
        </ScrollReveal>

        {/* 7. Visual Odyssey interactive photo carousel */}
        <ScrollReveal>
          <VisualOdyssey />
        </ScrollReveal>

        {/* 8. Hear From Our Guests review slider & ratings */}
        <ScrollReveal>
          <GuestReviews />
        </ScrollReveal>

        {/* 9. Mission: Excellence, Responsibility, Value */}
        <ScrollReveal>
          <MissionSection />
        </ScrollReveal>

        {/* 10. Frequently Asked Questions interactive accordions */}
        <ScrollReveal>
          <FAQSection />
        </ScrollReveal>

        {/* 11. Partner Trust Badges */}
        <TrustBadges />

        {/* 12. Contact Form & Details */}
        <ScrollReveal>
          <ContactSection />
        </ScrollReveal>

        {/* 13. Experience Hawaii Callout Banner */}
        <CtaBanner onBookNow={() => handleOpenBooking("Circle Island Tour")} />
      </main>

      {/* 14. Comprehensive Footer with map & links */}
      <Footer />

      {/* 15. Modern 5-Step Interactive Booking Wizard */}
      <BookingDialog
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
        defaultTour={selectedTour}
      />
    </div>
  );
}

"use client";

import React, { useState } from "react";
import { TopBar } from "@/components/sites/gotourshawaii/root/top-bar";
import { Navbar } from "@/components/sites/gotourshawaii/root/navbar";
import { Hero } from "@/components/sites/gotourshawaii/root/hero";
import { ExperienceCards } from "@/components/sites/gotourshawaii/root/experience-cards";
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

export default function Home() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [selectedTour, setSelectedTour] = useState("Circle Island Tour");

  const handleOpenBooking = (tourName?: string) => {
    if (tourName) setSelectedTour(tourName);
    setBookingOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#0c1f38] text-white selection:bg-[#f15d22] selection:text-white">
      {/* 1. Top Announcement Bar */}
      <TopBar />

      {/* 2. Sticky Responsive Navbar */}
      <Navbar onOpenBooking={() => handleOpenBooking("Circle Island Tour")} />

      {/* 3. Hero Section with Koolau mountains, TripAdvisor badge & CTA */}
      <main className="flex-1">
        <Hero onOpenBooking={() => handleOpenBooking("Circle Island Tour")} />

        {/* 4. Choose Your Experience (Circle Island, Luau, Pearl Harbor) */}
        <ExperienceCards onSelectExperience={(title) => handleOpenBooking(title)} />

        {/* 5. Exclusive Diamond Head Shuttle Banner */}
        <DiamondHeadBanner onBookShuttle={() => handleOpenBooking("Diamond Head Shuttle")} />

        {/* 6. Visual Odyssey interactive photo carousel */}
        <VisualOdyssey />

        {/* 7. Hear From Our Guests review slider & ratings */}
        <GuestReviews />

        {/* 8. Mission: Excellence, Responsibility, Value */}
        <MissionSection />

        {/* 9. Frequently Asked Questions interactive accordions */}
        <FAQSection />

        {/* 10. Partner Trust Badges */}
        <TrustBadges />

        {/* 11. Contact Form & Details */}
        <ContactSection />

        {/* 12. Experience Hawaii Callout Banner */}
        <CtaBanner onBookNow={() => handleOpenBooking("Circle Island Tour")} />
      </main>

      {/* 13. Comprehensive Footer with map & links */}
      <Footer />

      {/* 14. Interactive Booking Modal */}
      <BookingDialog
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
        defaultTour={selectedTour}
      />
    </div>
  );
}

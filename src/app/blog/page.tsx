"use client";

import React, { useState } from "react";
import Image from "next/image";
import { TopBar } from "@/components/sites/gotourshawaii/root/top-bar";
import { Navbar } from "@/components/sites/gotourshawaii/root/navbar";
import { Footer } from "@/components/sites/gotourshawaii/root/footer";
import { BookingDialog } from "@/components/sites/gotourshawaii/root/booking-dialog";
import { CtaBanner } from "@/components/sites/gotourshawaii/root/cta-banner";
import { Calendar, Clock, ArrowRight, Tag, Sparkles } from "lucide-react";

interface BlogPost {
  id: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  excerpt: string;
}

const posts: BlogPost[] = [
  {
    id: "top-10-oahu",
    title: "Top 10 Things to Do in Oahu for First-Time Visitors",
    category: "Travel Guide",
    date: "September 18, 2026",
    readTime: "6 min read",
    image: "/sites/gotourshawaii/root/Banner-BG-Thumbnail.jpg",
    excerpt:
      "Planning your dream Hawaiian vacation? From the breathtaking heights of the Koʻolau mountains to snorkeling with sea turtles, here is our ultimate local checklist.",
  },
  {
    id: "turtle-canyon-guide",
    title: "The Ultimate Guide to Snorkeling at Waikiki’s Turtle Canyon",
    category: "Wildlife & Ocean",
    date: "September 12, 2026",
    readTime: "5 min read",
    image: "/sites/gotourshawaii/root/waikiki-turtle-banner.png",
    excerpt:
      "Turtle Canyon is Hawaii's famous reef cleaning station. Learn the best times of day to snorkel, respectful marine guidelines, and how to spot green sea turtles.",
  },
  {
    id: "pearl-harbor-tips",
    title: "Visiting Pearl Harbor: Secrets to a Smooth and Meaningful Trip",
    category: "History & Culture",
    date: "August 28, 2026",
    readTime: "7 min read",
    image: "/sites/gotourshawaii/root/optimized-pearl-harbor-02.jpg",
    excerpt:
      "Navigating ticket reservations, bag policies, and the emotional journey of the USS Arizona Memorial. Here is how our guided tours remove all the stress.",
  },
  {
    id: "waimea-valley-waterfall",
    title: "Waimea Valley & Waterfall: Flora, History & Swimming Guide",
    category: "Nature & Hiking",
    date: "August 15, 2026",
    readTime: "4 min read",
    image: "/sites/gotourshawaii/root/optimized-water-fall-002.jpg",
    excerpt:
      "Stroll through 5,000 species of tropical botanical plants before cooling off under a 45-foot cascading natural waterfall on Oahu's North Shore.",
  },
  {
    id: "diamond-head-hike-tips",
    title: "Hiking Diamond Head Crater: What to Bring, Permits & Sunrise Views",
    category: "Adventure",
    date: "July 30, 2026",
    readTime: "5 min read",
    image: "/sites/gotourshawaii/root/Header-Photo-Diamond-Head.jpeg",
    excerpt:
      "Everything you need to conquer Oahu’s most iconic trail. How the new state park reservation system works and why our Waikiki shuttle is the easiest way to go.",
  },
  {
    id: "garlic-shrimp-north-shore",
    title: "Where to Find the Best Kahuku Garlic Shrimp on Oahu's North Shore",
    category: "Food & Culture",
    date: "July 14, 2026",
    readTime: "4 min read",
    image: "/sites/gotourshawaii/root/Visual-img-2-e1714631806737.jpg",
    excerpt:
      "No trip around the island is complete without stopping at the authentic shrimp trucks in Kahuku. Butter, garlic, rice, and fresh ocean delicacies.",
  },
];

export default function BlogPage() {
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-[#0c1f38] text-white selection:bg-[#f15d22] selection:text-white">
      <TopBar />
      <Navbar onOpenBooking={() => setBookingOpen(true)} />

      <main className="flex-1">
        {/* Header */}
        <section className="relative w-full min-h-[380px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/sites/gotourshawaii/root/Banner-BG-Thumbnail.jpg"
              alt="Hawaii Landscape"
              fill
              priority
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0c1f38]/70 via-black/50 to-[#0c1f38]/90" />
          </div>

          <div className="relative z-10 max-w-4xl mx-auto px-4 text-center pt-10 pb-16">
            <div className="inline-flex items-center gap-2 mb-3 px-4 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/15">
              <Sparkles className="w-4 h-4 text-[#f5b324]" />
              <span className="text-xs font-bold text-[#f5b324] uppercase tracking-widest">
                Local Insights &amp; Hawaii Travel Advice
              </span>
            </div>
            <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl text-white uppercase tracking-wider mb-3 leading-none">
              HAWAII TRAVEL BLOG
            </h1>
            <p className="max-w-2xl mx-auto text-sm sm:text-base text-neutral-200">
              Expert guides, hidden gems, cultural histories, and insider tips from our local Hawaiian tour team.
            </p>
          </div>

          <div className="absolute bottom-0 inset-x-0 w-full pointer-events-none translate-y-1">
            <div className="relative w-full h-12 sm:h-16">
              <Image
                src="/sites/gotourshawaii/root/banner-divider-optimized-002.png"
                alt="Divider"
                fill
                className="object-cover object-bottom"
              />
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="bg-[#f5f0e8] text-neutral-900 py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <article
                  key={post.id}
                  className="bg-white rounded-3xl overflow-hidden shadow-xl border border-neutral-200/80 flex flex-col justify-between group transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl"
                >
                  <div className="relative h-56 w-full overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full flex items-center gap-1">
                      <Tag className="w-3 h-3 text-[#f5b324]" />
                      <span>{post.category}</span>
                    </div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-3 text-xs text-neutral-400 mb-3 font-medium">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5" />
                          {post.date}
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" />
                          {post.readTime}
                        </span>
                      </div>

                      <h2 className="font-heading text-2xl text-[#0c2340] uppercase tracking-wide leading-tight mb-3 group-hover:text-[#f15d22] transition-colors">
                        {post.title}
                      </h2>

                      <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed mb-6 font-normal">
                        {post.excerpt}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-neutral-100 flex items-center text-xs font-bold text-[#f15d22] uppercase tracking-wider group-hover:translate-x-1 transition-transform">
                      <span>Read Full Guide</span>
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

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

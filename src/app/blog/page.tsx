"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { TopBar } from "@/components/sites/gotourshawaii/root/top-bar";
import { Navbar } from "@/components/sites/gotourshawaii/root/navbar";
import { Footer } from "@/components/sites/gotourshawaii/root/footer";
import { BookingDialog } from "@/components/sites/gotourshawaii/root/booking-dialog";
import { CtaBanner } from "@/components/sites/gotourshawaii/root/cta-banner";
import { Calendar, Clock, ArrowRight, Tag, Sparkles } from "lucide-react";
import { posts } from "@/data/blog-posts";

export default function BlogPage() {
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-[#0c1f38] text-white selection:bg-[#f15d22] selection:text-white">
      <TopBar />
      <Navbar onOpenBooking={() => setBookingOpen(true)} />

      <main className="flex-1">
        {/* Header */}
        <section className="relative w-full min-h-[440px] sm:min-h-[480px] md:min-h-[520px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/sites/gotourshawaii/root/blog-hero-img.png"
              alt="Hawaiian Green Sea Turtle Honu"
              fill
              priority
              className="object-cover object-center"
            />
            {/* Softened dark overlay so the turtle is vivid while white heading remains high contrast */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#0c1f38]/50 via-black/25 to-[#0c1f38]/75" />
          </div>

          <div className="relative z-10 max-w-4xl mx-auto px-4 text-center pt-14 pb-16 sm:pb-20 md:pb-24">
            <div className="inline-flex items-center gap-2 mb-3.5 px-4 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/20 shadow-sm">
              <Sparkles className="w-4 h-4 text-[#f5b324]" />
              <span className="text-xs font-bold text-[#f5b324] uppercase tracking-widest">
                Local Insights &amp; Hawaii Travel Advice
              </span>
            </div>
            <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl text-white uppercase tracking-wider mb-3 leading-none drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]">
              HAWAII TRAVEL BLOG
            </h1>
            <p className="max-w-2xl mx-auto text-sm sm:text-base text-neutral-100 drop-shadow-[0_1px_4px_rgba(0,0,0,0.6)] font-normal leading-relaxed">
              Expert guides, hidden gems, cultural histories, and insider tips from our local Hawaiian tour team.
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

        {/* Blog Posts Grid - Vertical spacing 40-50px after pattern */}
        <section className="bg-[#f5f0e8] text-neutral-900 pt-10 sm:pt-12 pb-14 sm:pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <article
                  key={post.id}
                  className="h-full bg-white rounded-3xl overflow-hidden shadow-xl border border-neutral-200/80 flex flex-col justify-between group transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl"
                >
                  {/* Uniform Image Height - Clickable Link */}
                  <Link
                    href={`/blog/${post.id}`}
                    className="relative h-56 sm:h-60 w-full shrink-0 overflow-hidden block cursor-pointer"
                  >
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full flex items-center gap-1 shadow-sm">
                      <Tag className="w-3 h-3 text-[#f5b324]" />
                      <span>{post.category}</span>
                    </div>
                  </Link>

                  {/* Body Content - Consistent Flex Column */}
                  <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                    <div className="flex-1 flex flex-col">
                      {/* Aligned Metadata */}
                      <div className="flex items-center gap-3 text-xs text-neutral-500 mb-2.5 font-medium">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5 text-neutral-400" />
                          {post.date}
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5 text-neutral-400" />
                          {post.readTime}
                        </span>
                      </div>

                      {/* Prominent Title with Consistent Height Area - Clickable */}
                      <h2 className="font-heading text-xl sm:text-2xl font-bold text-[#0c2340] uppercase tracking-wide leading-snug mb-3 group-hover:text-[#f15d22] transition-colors min-h-[3.5rem] sm:min-h-[4rem] line-clamp-2">
                        <Link href={`/blog/${post.id}`} className="hover:underline">
                          {post.title}
                        </Link>
                      </h2>

                      {/* Readable Description with Comfortable Line-height */}
                      <p className="text-neutral-600 text-sm leading-relaxed mb-6 font-normal line-clamp-3 flex-1">
                        {post.excerpt}
                      </p>
                    </div>

                    {/* Bottom CTA - Clickable Link to Full Guide */}
                    <Link
                      href={`/blog/${post.id}`}
                      className="pt-4 border-t border-neutral-100 flex items-center justify-between text-xs sm:text-sm font-bold text-[#f15d22] hover:text-[#d84b13] uppercase tracking-wider transition-colors mt-auto group/btn cursor-pointer"
                    >
                      <span className="group-hover/btn:underline">Read Full Guide</span>
                      <ArrowRight className="w-4 h-4 ml-1 transform group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
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

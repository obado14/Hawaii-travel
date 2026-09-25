"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { TopBar } from "@/components/sites/gotourshawaii/root/top-bar";
import { Navbar } from "@/components/sites/gotourshawaii/root/navbar";
import { Footer } from "@/components/sites/gotourshawaii/root/footer";
import { BookingDialog } from "@/components/sites/gotourshawaii/root/booking-dialog";
import { CtaBanner } from "@/components/sites/gotourshawaii/root/cta-banner";
import { BlogPost, posts } from "@/data/blog-posts";
import {
  Calendar,
  Clock,
  ArrowLeft,
  Tag,
  Sparkles,
  CheckCircle,
  ArrowRight,
  User,
  Share2,
} from "lucide-react";

interface BlogPostDetailClientProps {
  post: BlogPost;
}

export function BlogPostDetailClient({ post }: BlogPostDetailClientProps) {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [selectedTour, setSelectedTour] = useState(post.relatedTourName);
  const [copied, setCopied] = useState(false);

  const otherPosts = posts.filter((p) => p.id !== post.id).slice(0, 3);

  const handleShare = () => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleBook = (tourName: string) => {
    setSelectedTour(tourName);
    setBookingOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#0c1f38] text-white selection:bg-[#f15d22] selection:text-white">
      <TopBar />
      <Navbar onOpenBooking={() => handleBook(post.relatedTourName)} />

      <main className="flex-1">
        {/* Article Header Hero */}
        <section className="relative w-full min-h-[460px] sm:min-h-[500px] md:min-h-[540px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src={post.image}
              alt={post.title}
              fill
              priority
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0c1f38]/60 via-black/40 to-[#0c1f38]/85" />
          </div>

          <div className="relative z-10 max-w-4xl mx-auto px-4 text-center pt-14 pb-16 sm:pb-20 md:pb-24">
            {/* Breadcrumb / Back button */}
            <div className="mb-4 inline-flex items-center justify-center">
              <Link
                href="/blog"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-neutral-300 hover:text-white bg-black/40 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20 transition-all hover:bg-black/60"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Back to All Guides</span>
              </Link>
            </div>

            {/* Category Badge */}
            <div className="inline-flex items-center gap-2 mb-3.5 px-3.5 py-1 rounded-full bg-[#f15d22] text-white text-xs font-bold uppercase tracking-wider shadow-md">
              <Tag className="w-3.5 h-3.5" />
              <span>{post.category}</span>
            </div>

            <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl text-white uppercase tracking-wider mb-4 leading-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
              {post.title}
            </h1>

            {/* Metadata and Author */}
            <div className="flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm text-neutral-200 font-medium">
              <span className="flex items-center gap-1.5">
                <User className="w-4 h-4 text-[#f5b324]" />
                {post.author.name}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-[#f5b324]" />
                {post.date}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-[#f5b324]" />
                {post.readTime}
              </span>
            </div>
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

        {/* Article Body Section */}
        <section className="bg-[#f5f0e8] text-neutral-900 pt-10 sm:pt-14 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
              {/* Main Content Column */}
              <div className="lg:col-span-8 bg-white rounded-3xl p-6 sm:p-10 md:p-12 shadow-xl border border-neutral-200/80">
                {/* Excerpt Lead */}
                <div className="p-5 sm:p-6 rounded-2xl bg-[#0c1f38]/5 border-l-4 border-[#f15d22] mb-8 text-neutral-700 text-base sm:text-lg font-medium leading-relaxed italic">
                  &ldquo;{post.excerpt}&rdquo;
                </div>

                {/* Article Sections */}
                <div className="space-y-8 text-neutral-700">
                  {post.sections.map((section, idx) => (
                    <div key={idx} className="space-y-4">
                      <h2 className="font-heading text-2xl sm:text-3xl text-[#0c2340] uppercase tracking-wide leading-tight">
                        {section.heading}
                      </h2>

                      {section.paragraphs.map((p, pIdx) => (
                        <p key={pIdx} className="text-base leading-relaxed sm:leading-8 text-neutral-700">
                          {p}
                        </p>
                      ))}

                      {section.tips && section.tips.length > 0 && (
                        <div className="p-5 rounded-2xl bg-amber-50/80 border border-amber-200/80 space-y-2 mt-4">
                          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#f15d22]">
                            <Sparkles className="w-4 h-4 text-[#f15d22]" />
                            <span>Insider Local Tips</span>
                          </div>
                          <ul className="space-y-1.5 text-xs sm:text-sm text-neutral-800">
                            {section.tips.map((tip, tIdx) => (
                              <li key={tIdx} className="flex items-start gap-2">
                                <CheckCircle className="w-4 h-4 text-[#f15d22] shrink-0 mt-0.5" />
                                <span>{tip}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Author Card & Share */}
                <div className="mt-12 pt-8 border-t border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#f15d22]/15 text-[#f15d22] flex items-center justify-center font-bold text-lg">
                      {post.author.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-heading text-lg font-bold text-[#0c2340]">
                        Written by {post.author.name}
                      </h4>
                      <p className="text-xs text-neutral-500 font-medium">
                        {post.author.role}
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={handleShare}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-neutral-200 text-xs font-bold text-neutral-700 hover:bg-neutral-50 hover:text-[#f15d22] transition-colors cursor-pointer"
                  >
                    <Share2 className="w-4 h-4" />
                    <span>{copied ? "Link Copied!" : "Share Guide"}</span>
                  </button>
                </div>
              </div>

              {/* Sidebar Column */}
              <div className="lg:col-span-4 space-y-6">
                {/* Related Tour Booking Card */}
                <div className="bg-[#0c1f38] text-white rounded-3xl p-6 sm:p-7 shadow-xl border border-white/10 text-center relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#f15d22]/10 rounded-full blur-2xl pointer-events-none" />
                  <span className="text-xs font-bold text-[#f5b324] uppercase tracking-widest block mb-2">
                    Recommended Island Tour
                  </span>
                  <h3 className="font-heading text-2xl text-white uppercase leading-snug mb-3">
                    {post.relatedTourName}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed mb-6 font-normal">
                    Experience this destination firsthand with local expert guides, reserved tickets, and stress-free hotel pickup.
                  </p>
                  <button
                    onClick={() => handleBook(post.relatedTourName)}
                    className="w-full bg-[#f15d22] hover:bg-[#d84b13] text-white font-heading text-base font-bold uppercase tracking-wider py-3 rounded-xl shadow-lg shadow-[#f15d22]/30 transition-all transform hover:scale-105 active:scale-95 cursor-pointer flex items-center justify-center gap-2"
                  >
                    <span>Book This Tour</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

                {/* More Travel Guides */}
                <div className="bg-white rounded-3xl p-6 shadow-xl border border-neutral-200/80">
                  <h3 className="font-heading text-lg font-bold text-[#0c2340] uppercase tracking-wider mb-4 border-b border-neutral-100 pb-3">
                    More Hawaii Guides
                  </h3>
                  <div className="space-y-4">
                    {otherPosts.map((other) => (
                      <Link
                        key={other.id}
                        href={`/blog/${other.id}`}
                        className="group block space-y-1 hover:text-[#f15d22] transition-colors"
                      >
                        <span className="text-[11px] font-bold text-[#f15d22] uppercase tracking-wider">
                          {other.category}
                        </span>
                        <h4 className="text-sm font-bold text-[#0c2340] group-hover:text-[#f15d22] transition-colors line-clamp-2 leading-snug">
                          {other.title}
                        </h4>
                        <span className="text-xs text-neutral-400 font-medium block">
                          {other.readTime}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Back Link */}
                <div className="text-center pt-2">
                  <Link
                    href="/blog"
                    className="inline-flex items-center gap-2 text-xs font-bold text-[#0c2340] hover:text-[#f15d22] uppercase tracking-wider transition-colors"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>View All Blog Articles</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <CtaBanner onBookNow={() => handleBook(post.relatedTourName)} />
      </main>

      <Footer />

      <BookingDialog
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
        defaultTour={selectedTour}
      />
    </div>
  );
}

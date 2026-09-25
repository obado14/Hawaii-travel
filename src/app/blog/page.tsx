"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { TopBar } from "@/components/sites/gotourshawaii/root/top-bar";
import { Navbar } from "@/components/sites/gotourshawaii/root/navbar";
import { Footer } from "@/components/sites/gotourshawaii/root/footer";
import { BookingDialog } from "@/components/sites/gotourshawaii/root/booking-dialog";
import { CtaBanner } from "@/components/sites/gotourshawaii/root/cta-banner";
import {
  Calendar,
  Clock,
  ArrowRight,
  Tag,
  Sparkles,
  Search,
  X,
  ChevronDown,
  ChevronRight,
} from "lucide-react";
import { posts } from "@/data/blog-posts";

const categories = [
  "Semua",
  "Panduan Wisata",
  "Satwa & Laut",
  "Sejarah & Budaya",
  "Alam & Pendakian",
  "Petualangan",
  "Kuliner & Budaya",
];

export default function BlogPage() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Semua");
  const [visibleCount, setVisibleCount] = useState(6);

  // Pinned flagship featured article
  const featuredPost = posts[0];

  // Filter articles based on active category and search input
  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const matchesCategory =
        selectedCategory === "Semua" || post.category === selectedCategory;
      const normalizedQuery = searchQuery.trim().toLowerCase();
      const matchesSearch =
        !normalizedQuery ||
        post.title.toLowerCase().includes(normalizedQuery) ||
        post.excerpt.toLowerCase().includes(normalizedQuery) ||
        post.category.toLowerCase().includes(normalizedQuery);
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  // Paginated articles for the grid
  const displayedPosts = filteredPosts.slice(0, visibleCount);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setVisibleCount(6);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setVisibleCount(6);
  };

  const handleClearFilters = () => {
    setSelectedCategory("Semua");
    setSearchQuery("");
    setVisibleCount(6);
  };

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#0c1f38] text-white selection:bg-[#f15d22] selection:text-white">
      <TopBar />
      <Navbar onOpenBooking={() => setBookingOpen(true)} />

      <main className="flex-1">
        {/* Hero Section */}
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
            <div className="inline-flex items-center gap-2 mb-3.5 px-4 py-2 rounded-full bg-black/55 backdrop-blur-md border border-white/20 shadow-2xl">
              <Sparkles className="w-4 h-4 text-[#f5b324]" />
              <span className="text-xs font-bold text-[#f5b324] uppercase tracking-widest">
                Wawasan Lokal &amp; Panduan Wisata Hawaii
              </span>
            </div>
            <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl lg:text-[5.25rem] text-white uppercase tracking-wider mb-3 leading-none drop-shadow-[0_4px_20px_rgba(0,0,0,0.7)]">
              BLOG WISATA <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-[#f5b324] to-amber-200">HAWAII</span>
            </h1>
            <p className="max-w-2xl mx-auto text-sm sm:text-base text-neutral-100 drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)] font-normal leading-relaxed">
              Panduan ahli, surga tersembunyi, sejarah budaya, dan tips lokal berharga dari tim pemandu wisata Hawaii kami.
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

        {/* Main Blog Content Section with Cream Background */}
        <section className="bg-[#f5f0e8] text-neutral-900 pt-6 sm:pt-8 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Breadcrumb Navigation for User Orientation */}
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-neutral-600 mb-6 font-medium px-1">
              <Link href="/" className="hover:text-[#f15d22] transition-colors">
                Beranda
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-neutral-400" />
              <span className="text-neutral-900 font-bold">Blog Wisata</span>
            </nav>

            {/* 1. Featured Article Section (Horizontal Card) */}
            <div className="mb-12 sm:mb-14">
              <div className="flex items-center gap-2 mb-4 px-1">
                <Sparkles className="w-4 h-4 text-[#f15d22]" />
                <span className="text-xs font-bold text-[#f15d22] uppercase tracking-widest">
                  Cerita Pilihan
                </span>
              </div>

              <article className="bg-white rounded-3xl overflow-hidden shadow-xl border border-neutral-200/80 grid grid-cols-1 lg:grid-cols-12 group transition-all duration-300 hover:shadow-2xl">
                {/* Large Horizontal Featured Image */}
                <Link
                  href={`/blog/${featuredPost.id}`}
                  className="relative min-h-[260px] sm:min-h-[340px] lg:min-h-full lg:col-span-7 overflow-hidden block cursor-pointer"
                >
                  <Image
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    fill
                    priority
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Category & Editor's Pick Badge */}
                  <div className="absolute top-4 left-4 flex flex-wrap items-center gap-2 z-10">
                    <div className="bg-[#f15d22] text-white text-[11px] font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full flex items-center gap-1.5 shadow-md">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Artikel Unggulan</span>
                    </div>
                    <div className="bg-black/60 backdrop-blur-md text-white text-[11px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-sm">
                      <Tag className="w-3 h-3 text-[#f5b324]" />
                      <span>{featuredPost.category}</span>
                    </div>
                  </div>
                </Link>

                {/* Content Column */}
                <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
                  <div>
                    {/* Author Information */}
                    <div className="flex items-center gap-2 text-xs font-bold text-[#f15d22] uppercase tracking-wider mb-2.5">
                      <span>Oleh Tim Go Tours Hawaii</span>
                    </div>

                    {/* Aligned Metadata */}
                    <div className="flex items-center gap-3 text-xs text-neutral-500 mb-3.5 font-medium">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-neutral-400" />
                        {featuredPost.date}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-neutral-400" />
                        {featuredPost.readTime}
                      </span>
                    </div>

                    {/* Prominent Title */}
                    <h2 className="font-heading text-2xl sm:text-3xl lg:text-[30px] font-bold text-[#0c2340] uppercase tracking-wide leading-tight mb-4 group-hover:text-[#f15d22] transition-colors">
                      <Link href={`/blog/${featuredPost.id}`} className="hover:underline">
                        {featuredPost.title}
                      </Link>
                    </h2>

                    {/* Short Description */}
                    <p className="text-neutral-600 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                      {featuredPost.excerpt}
                    </p>
                  </div>

                  {/* Read Full Guide CTA */}
                  <div className="pt-4 border-t border-neutral-100 flex items-center">
                    <Link
                      href={`/blog/${featuredPost.id}`}
                      className="inline-flex items-center gap-2.5 px-6 py-3 bg-[#f15d22] hover:bg-[#d84b13] text-white rounded-full font-bold uppercase tracking-wider text-xs sm:text-sm transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-[#f15d22]/25 group/btn cursor-pointer"
                    >
                      <span>BACA PANDUAN LENGKAP</span>
                      <ArrowRight className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </article>
            </div>

            {/* 2. Blog Search Bar */}
            <div className="max-w-2xl mx-auto mb-8 sm:mb-10">
              <div className="relative flex items-center">
                <Search className="w-5 h-5 text-neutral-400 absolute left-4 pointer-events-none" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={handleSearchChange}
                  placeholder="Cari artikel berdasarkan judul atau kata kunci (cth. Turtle Canyon, air terjun, kuliner)..."
                  className="w-full pl-12 pr-10 py-3.5 sm:py-4 rounded-2xl bg-white border border-neutral-300 text-neutral-800 placeholder-neutral-400 text-sm sm:text-base shadow-sm focus:outline-none focus:border-[#f15d22] focus:ring-2 focus:ring-[#f15d22]/20 transition-all"
                />
                {searchQuery && (
                  <button
                    onClick={() => {
                      setSearchQuery("");
                      setVisibleCount(6);
                    }}
                    className="absolute right-3.5 p-1 text-neutral-400 hover:text-neutral-700 rounded-full hover:bg-neutral-100 transition-colors cursor-pointer"
                    aria-label="Hapus pencarian"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>

            {/* 3. Category Filter Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 mb-10 sm:mb-12">
              {categories.map((category) => {
                const isActive = selectedCategory === category;
                return (
                  <button
                    key={category}
                    onClick={() => handleCategoryChange(category)}
                    className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide transition-all duration-200 cursor-pointer border ${
                      isActive
                        ? "bg-[#f15d22] text-white border-[#f15d22] shadow-md shadow-[#f15d22]/25 scale-105"
                        : "bg-white text-neutral-700 border-neutral-200 hover:border-[#f15d22]/40 hover:text-[#f15d22] hover:bg-neutral-50 shadow-sm"
                    }`}
                  >
                    {category}
                  </button>
                );
              })}
            </div>

            {/* Active Filter or Search Status Banner */}
            {(selectedCategory !== "Semua" || searchQuery.trim()) && (
              <div className="flex flex-wrap items-center justify-between gap-3 mb-8 px-2 text-xs sm:text-sm text-neutral-600 border-b border-neutral-200 pb-3">
                <div>
                  Menampilkan <strong className="text-neutral-900">{filteredPosts.length}</strong> artikel
                  {selectedCategory !== "Semua" && (
                    <span> dalam kategori <strong className="text-[#f15d22]">{selectedCategory}</strong></span>
                  )}
                  {searchQuery.trim() && (
                    <span> yang cocok dengan &ldquo;<strong className="text-neutral-900">{searchQuery}</strong>&rdquo;</span>
                  )}
                </div>
                <button
                  onClick={handleClearFilters}
                  className="text-[#f15d22] hover:text-[#d84b13] hover:underline font-bold cursor-pointer transition-colors"
                >
                  Hapus Filter
                </button>
              </div>
            )}

            {/* 4. Blog Posts Grid & Empty State */}
            {filteredPosts.length === 0 ? (
              <div className="bg-white rounded-3xl p-10 sm:p-14 text-center max-w-lg mx-auto shadow-md border border-neutral-200 my-8">
                <Search className="w-10 h-10 text-neutral-300 mx-auto mb-3" />
                <h3 className="font-heading text-xl font-bold text-[#0c2340] mb-2 uppercase">
                  Tidak Ada Artikel Ditemukan
                </h3>
                <p className="text-sm text-neutral-500 mb-6 leading-relaxed">
                  Kami tidak dapat menemukan artikel wisata yang cocok dengan pencarian Anda. Coba kata kunci lain atau atur ulang filter kategori.
                </p>
                <button
                  onClick={handleClearFilters}
                  className="px-6 py-2.5 bg-[#f15d22] hover:bg-[#d84b13] text-white rounded-full text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
                >
                  Lihat Semua Artikel
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {displayedPosts.map((post) => (
                  <article
                    key={post.id}
                    className="h-full bg-white rounded-3xl overflow-hidden shadow-xl border border-neutral-200/80 flex flex-col justify-between group transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl"
                  >
                    {/* Uniform Image Height - Clickable Link with subtle zoom */}
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
                        {/* Author Information */}
                        <div className="flex items-center gap-2 text-xs font-semibold text-[#f15d22] uppercase tracking-wider mb-2">
                          <span>Oleh Tim Go Tours Hawaii</span>
                        </div>

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
                        <span className="group-hover/btn:underline">Baca Panduan Lengkap</span>
                        <ArrowRight className="w-4 h-4 ml-1 transform group-hover/btn:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            )}

            {/* 5. Load More Articles Button */}
            {filteredPosts.length > visibleCount && (
              <div className="text-center mt-12 sm:mt-16">
                <button
                  onClick={handleLoadMore}
                  className="px-8 py-3.5 bg-[#f15d22] hover:bg-[#d84b13] text-white rounded-full font-bold uppercase tracking-wider text-xs sm:text-sm transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-[#f15d22]/30 inline-flex items-center gap-2 cursor-pointer group"
                >
                  <span>MUAT LEBIH BANYAK ARTIKEL</span>
                  <ChevronDown className="w-4 h-4 transform group-hover:translate-y-0.5 transition-transform" />
                </button>
              </div>
            )}
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

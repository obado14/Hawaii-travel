"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
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
  ChevronRight,
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
    role: "Pendiri & Direktur Budaya",
    image: "/sites/gotourshawaii/root/Visual-img-1-e1714631873659.jpg",
    description:
      "Lahir dan dibesarkan di Oahu, Eke mendirikan Go Tours Hawaii untuk melestarikan tradisi tutur leluhur, melindungi situs sakral, dan mempersembahkan keramahan sejati Polinesia.",
  },
  {
    name: "Koa Takahashi",
    role: "Pemandu Utama & Spesialis Pulau Oahu",
    image: "/sites/gotourshawaii/root/Visual-img-4-e1714632180613.jpg",
    description:
      "Dengan pengalaman lebih dari 12 tahun menyusuri perbukitan dan pesisir Oahu, Koa menghidupkan kisah cerita rakyat dan spot alam rahasia bagi setiap tamu.",
  },
  {
    name: "Leilani Kealoha",
    role: "Naturalis Laut & Pemandu Ekowisata",
    image: "/sites/gotourshawaii/root/waikiki-turtle-banner.png",
    description:
      "Berdedikasi pada pelestarian laut, Leilani mengedukasi wisatawan tentang etika menghormati penyu laut hijau (honu) dan ekosistem terumbu karang Hawaii.",
  },
  {
    name: "David Vance",
    role: "Sejarawan Senior & Narator Tur",
    image: "/sites/gotourshawaii/root/optimized-pearl-harbor-02.jpg",
    description:
      "Sejarawan militer dan budaya kepulauan yang membawakan narasi mendalam serta penuh penghormatan di Pearl Harbor dan monumen bersejarah Polinesia.",
  },
];

const timelineMilestones = [
  {
    year: "2010",
    title: "Didirikan di Hawaii",
    description:
      "Eddie \"Eke\" memulai Go Tours Hawaii di Oahu dengan satu armada van dan misi tulus: membagikan budaya Hawaii yang autentik jauh melampaui klise wisata biasa.",
  },
  {
    year: "2015",
    title: "Perluasan Tur Kepulauan",
    description:
      "Meningkatkan seluruh armada ke Mercedes Sprinter mewah dan meluncurkan rute Circle Island serta pesisir North Shore yang kini legendaris.",
  },
  {
    year: "2020",
    title: "Inovasi Pengalaman Baru",
    description:
      "Menghadirkan layanan sewa tur privat eksklusif di Oahu dan Maui, menjelajahi air terjun tersembunyi, dan mengamankan akses reservasi resmi Pearl Harbor.",
  },
  {
    year: "2026",
    title: "Melayani Wisatawan Dunia",
    description:
      "Dianugerahi TripAdvisor 'Best of the Best' di dunia, setelah menyambut lebih dari 50.000 tamu bahagia dengan kehangatan semangat Aloha sejati.",
  },
];

const visualStories = [
  {
    category: "Lanskap Hawaii",
    title: "Panorama Alam yang Menakjubkan",
    description:
      "Mulai dari puncak vulkanik Koʻolau yang menjulang hingga birunya Samudra Pasifik di Windward Oahu, kemegahan alam Hawaii memukau di setiap sudut.",
    image: "/sites/gotourshawaii/root/Visual-img-7-e1714632127105.jpg",
  },
  {
    category: "Pengalaman Tur",
    title: "Perjalanan Hangat Bersama Keluarga",
    description:
      "Bepergian dengan van mewah ber-AC yang lega didampingi pemandu lokal ramah yang memperlakukan setiap tamu selayaknya bagian dari ʻOhana (keluarga) kami sendiri.",
    image: "/sites/gotourshawaii/root/our-story-hero.png",
  },
  {
    category: "Budaya Hawaii",
    title: "Tradisi Leluhur yang Tetap Hidup",
    description:
      "Kunjungi kuil heiau sakral, saksikan tradisi jamuan oven bawah tanah imu, nikmati tarian hula yang bercerita, dan hayati makna luhur semangat aloha.",
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
              alt="Tim dan Armada Go Tours Hawaii"
              fill
              priority
              className="object-cover object-[center_35%]"
            />
            {/* Softened full overlay so team and vehicles stay visible */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#0c1f38]/50 via-black/20 to-[#0c1f38]/70" />
          </div>

          <div className="relative z-10 max-w-4xl mx-auto px-4 text-center pt-14 pb-16 sm:pb-20 md:pb-24">
            {/* Text backdrop container for crisp readability */}
            <div className="max-w-3xl mx-auto py-6 px-6 sm:px-10 rounded-3xl bg-black/55 backdrop-blur-md border border-white/20 shadow-2xl">
              <div className="inline-flex items-center gap-2 mb-3.5 px-4 py-2 rounded-full bg-black/40 backdrop-blur-md border border-white/20 shadow-sm">
                <Sparkles className="w-4 h-4 text-[#f5b324]" />
                <span className="text-xs font-bold text-[#f5b324] uppercase tracking-widest">
                  Dimiliki &amp; Dikelola oleh Warga Lokal Hawaii
                </span>
              </div>
              <h1 className="font-heading text-5xl sm:text-7xl md:text-8xl lg:text-[5.5rem] text-white uppercase tracking-wider mb-3 leading-none drop-shadow-[0_4px_20px_rgba(0,0,0,0.8)]">
                KISAH <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-[#f5b324] to-amber-200">KAMI</span>
              </h1>
              <p className="max-w-2xl mx-auto text-base sm:text-lg text-neutral-100 font-normal leading-relaxed drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]">
                Berbagi semangat Aloha, warisan autentik Hawaii, dan kenangan tak terlupakan sejak hari pertama.
              </p>
            </div>
          </div>

          {/* Polynesian Divider */}
          <div className="absolute bottom-0 inset-x-0 w-full pointer-events-none z-20 translate-y-0.5 overflow-hidden">
            <div className="relative w-full h-14 sm:h-18 md:h-22 lg:h-24">
              <Image
                src="/sites/gotourshawaii/root/banner-divider-optimized-002.png"
                alt="Transisi motif pembatas polinesia"
                fill
                className="object-cover object-top"
                priority
              />
            </div>
          </div>
        </section>

        {/* 2. Narrative Section */}
        <section className="bg-[#f5f0e8] text-neutral-900 pt-8 sm:pt-12 pb-14 sm:pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {/* Breadcrumb Navigation for User Orientation */}
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-neutral-600 mb-8 font-medium px-1">
              <Link href="/" className="hover:text-[#f15d22] transition-colors">
                Beranda
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-neutral-400" />
              <span className="text-neutral-900 font-bold">Kisah Kami</span>
            </nav>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              <div className="lg:col-span-7 space-y-5">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#f15d22]/10 border border-[#f15d22]/20 shadow-xs">
                  <Sparkles className="w-3.5 h-3.5 text-[#f15d22]" />
                  <span className="text-xs sm:text-sm font-bold text-[#f15d22] uppercase tracking-widest">
                    TENTANG GO TOURS HAWAII
                  </span>
                </div>
                <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl text-[#0c2340] uppercase leading-tight">
                  BERAKAR DALAM BUDAYA KEPULAUAN HAWAII
                </h2>
                <div className="space-y-4 text-sm sm:text-base text-neutral-700 leading-relaxed sm:leading-7 font-normal">
                  <p>
                    <strong>Go Tours Hawaii</strong> lahir dari kecintaan mendalam terhadap kekayaan budaya, keindahan lanskap alam, dan komunitas kepulauan Hawaii. Pendiri kami, Eddie &ldquo;Eke&rdquo; Keliinohomoku, mendambakan sebuah perusahaan tur yang tidak sekadar membawa turis melihat pemandangan indah—melainkan mengajak mereka menyelami sejarah sejati, cerita rakyat, dan tradisi hidup Hawaii.
                  </p>
                  <p>
                    Dari awal perjalanan kami sebagai tim pemandu tur lokal yang penuh semangat, kami telah berkembang menjadi salah satu operator tur dengan ulasan tertinggi di Hawaii, dianugerahi TripAdvisor <em>Travelers&apos; Choice Best of the Best</em> (10 Pengalaman Wisata Terbaik di Dunia).
                  </p>
                  <p>
                    Berbeda dari operator bus besar bertingkat, kami menjaga rombongan kami tetap intim dan nyaman. Kami bepergian dengan kendaraan modern ber-AC bersama para penutur cerita lokal yang keluarganya telah menetap di Hawaii selama turun-temurun.
                  </p>
                </div>
              </div>

              {/* Enlarged Image to Balance Narrative Content */}
              <div className="lg:col-span-5 relative">
                <div className="relative h-[460px] sm:h-[500px] lg:h-[540px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                  <Image
                    src="/sites/gotourshawaii/root/Visual-img-3-e1714632197722.jpg"
                    alt="Kawasan Kuil Byodo-In yang tenang"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent flex items-end p-6 sm:p-8">
                    <div className="border-l-2 border-[#f15d22] pl-3.5">
                      <p className="text-white text-xs sm:text-sm leading-relaxed italic drop-shadow-sm font-medium">
                        &ldquo;Aloha lebih dari sekadar salam—ini adalah cara kami hidup, menghormati bumi pertiwi, dan menyayangi setiap tamu.&rdquo;
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Company Statistics Section */}
        <section className="bg-white border-y border-neutral-200/80 py-14 sm:py-18 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#f15d22]/10 border border-[#f15d22]/20 mb-3 shadow-xs">
                <Sparkles className="w-3.5 h-3.5 text-[#f15d22]" />
                <span className="text-xs sm:text-sm font-bold text-[#f15d22] uppercase tracking-widest">
                  PRESTASI &amp; DEDIKASI
                </span>
              </div>
              <h2 className="font-heading text-3xl sm:text-5xl text-[#0c2340] uppercase tracking-wide leading-tight">
                DAMPAK PERJALANAN KAMI DALAM ANGKA
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
                  Tahun Pengalaman
                </div>
                <p className="text-[11px] sm:text-xs text-neutral-500 mt-1">Memandu wisatawan sejak 2010</p>
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
                  Wisatawan Bahagia
                </div>
                <p className="text-[11px] sm:text-xs text-neutral-500 mt-1">Dari 50 negara bagian &amp; 40+ negara</p>
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
                  Pengalaman Tur
                </div>
                <p className="text-[11px] sm:text-xs text-neutral-500 mt-1">Keberangkatan tur eksklusif tiap minggu</p>
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
                  Penilaian Tamu
                </div>
                <p className="text-[11px] sm:text-xs text-neutral-500 mt-1">TripAdvisor Best of the Best</p>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Our Journey / Timeline Section */}
        <section className="bg-[#f5f0e8] text-neutral-900 py-14 sm:py-20 px-4 sm:px-6 lg:px-8 border-b border-black/5">
          <div className="max-w-6xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
              <span className="text-xs font-extrabold text-[#f15d22] uppercase tracking-widest block mb-2">
                Perjalanan Kami
              </span>
              <h2 className="font-heading text-3xl sm:text-5xl text-[#0c2340] uppercase tracking-wide mb-3">
                BAGAIMANA KAMI TUMBUH BERSAMA KEPULAUAN HAWAII
              </h2>
              <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
                Dari sebuah van tunggal dengan visi autentik hingga menjadi perusahaan tur butik terkemuka di Hawaii.
              </p>
            </div>

            {/* Desktop Timeline */}
            <div className="hidden md:block relative">
              <div className="absolute top-7 left-12 right-12 h-0.5 bg-neutral-300 z-0" />

              <div className="grid grid-cols-4 gap-6 relative z-10">
                {timelineMilestones.map((item) => (
                  <div key={item.year} className="flex flex-col items-center text-center group">
                    <div className="w-14 h-14 rounded-full bg-[#f15d22] text-white flex items-center justify-center font-heading font-bold text-sm shadow-lg ring-4 ring-[#f5f0e8] group-hover:scale-110 transition-transform mb-6">
                      {item.year}
                    </div>

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

            {/* Mobile Timeline */}
            <div className="md:hidden relative pl-6 space-y-8">
              <div className="absolute top-4 bottom-4 left-3 w-0.5 bg-neutral-300" />

              {timelineMilestones.map((item) => (
                <div key={item.year} className="relative pl-6">
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

        {/* 5. Core Pillars */}
        <section className="bg-[#081d38] text-white py-14 sm:py-18 px-4 sm:px-6 lg:px-8 border-t border-white/10">
          <div className="max-w-6xl mx-auto text-center mb-10 sm:mb-12">
            <h2 className="font-heading text-4xl sm:text-6xl text-[#f5b324] uppercase tracking-wider mb-3">
              PILAR-PILAR SEMANGAT ALOHA KAMI
            </h2>
            <p className="text-neutral-300 text-sm max-w-xl mx-auto">
              Setiap tur yang kami rancang senantiasa dipandu oleh nilai-nilai luhur leluhur bangsa Hawaii:
            </p>
          </div>

          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-7 hover:bg-white/10 transition-colors text-center group">
              <div className="w-13 h-13 rounded-full bg-[#f15d22]/20 text-[#f15d22] flex items-center justify-center mx-auto mb-3.5 group-hover:scale-110 transition-transform">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="font-heading text-xl sm:text-2xl text-[#f15d22] uppercase tracking-wide mb-2">
                ALOHA (Kasih &amp; Keramahan)
              </h3>
              <p className="text-neutral-200 text-xs sm:text-sm leading-relaxed">
                Menyambut dan memperlakukan setiap wisatawan layaknya bagian dari ʻOhana (keluarga) kami sendiri, menciptakan memori indah yang abadi.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-7 hover:bg-white/10 transition-colors text-center group">
              <div className="w-13 h-13 rounded-full bg-[#f15d22]/20 text-[#f15d22] flex items-center justify-center mx-auto mb-3.5 group-hover:scale-110 transition-transform">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-heading text-xl sm:text-2xl text-[#f15d22] uppercase tracking-wide mb-2">
                KULEANA (Tanggung Jawab)
              </h3>
              <p className="text-neutral-200 text-xs sm:text-sm leading-relaxed">
                Menjaga dan melestarikan ekosistem alami Hawaii, satwa liar langka (penyu laut Honu), serta kesucian situs cagar budaya.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-7 hover:bg-white/10 transition-colors text-center group">
              <div className="w-13 h-13 rounded-full bg-[#f15d22]/20 text-[#f15d22] flex items-center justify-center mx-auto mb-3.5 group-hover:scale-110 transition-transform">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="font-heading text-xl sm:text-2xl text-[#f15d22] uppercase tracking-wide mb-2">
                PONO (Kualitas &amp; Integritas)
              </h3>
              <p className="text-neutral-200 text-xs sm:text-sm leading-relaxed">
                Menghadirkan layanan bintang lima pada setiap keberangkatan, dengan transparansi harga, jaminan tiket resmi, dan pemandu berpengalaman.
              </p>
            </div>
          </div>
        </section>

        {/* 6. Meet Our Team Section */}
        <section className="bg-[#f5f0e8] text-neutral-900 py-14 sm:py-20 px-4 sm:px-6 lg:px-8 border-b border-black/5">
          <div className="max-w-6xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
              <span className="text-xs font-extrabold text-[#f15d22] uppercase tracking-widest block mb-2">
                Keluarga Lokal ʻOhana
              </span>
              <h2 className="font-heading text-3xl sm:text-5xl text-[#0c2340] uppercase tracking-wide mb-3">
                KENALI TIM DI BALIK GO TOURS HAWAII
              </h2>
              <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
                Putra daerah berdedikasi tinggi, naturalis bersertifikat, dan sejarawan yang bertekad mempersembahkan keindahan sejati Hawaii untuk Anda.
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

        {/* 7. Visual Storytelling Gallery */}
        <section className="bg-[#0c1f38] text-white py-14 sm:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="max-w-6xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
              <div className="inline-flex items-center gap-2 mb-2 px-3.5 py-1 rounded-full bg-white/10 border border-white/20 text-[#f5b324] text-xs font-bold uppercase tracking-widest">
                <Camera className="w-3.5 h-3.5" />
                <span>Dokumentasi Visual</span>
              </div>
              <h2 className="font-heading text-3xl sm:text-5xl text-white uppercase tracking-wide mb-3">
                MENGABADIKAN KEINDAHAN SEJATI HAWAII
              </h2>
              <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
                Sekilas potret keagungan alam, kebersamaan hangat, dan tradisi hidup yang mewarnai setiap petualangan tur kami.
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
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent" />

                  <div className="absolute top-4 left-4 z-10">
                    <span className="bg-[#f15d22] text-white text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-md flex items-center gap-1.5">
                      <MapPin className="w-3 h-3" />
                      {story.category}
                    </span>
                  </div>

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

      {/* Booking Dialog Modal */}
      <BookingDialog
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
        defaultTour="Tur Keliling Pulau"
      />
    </div>
  );
}

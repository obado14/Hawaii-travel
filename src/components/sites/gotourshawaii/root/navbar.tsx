"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Home,
  Sun,
  Bus,
  BookOpen,
  Compass,
  PhoneCall,
  ChevronDown,
  Menu,
  X,
  Phone,
} from "lucide-react";

interface NavbarProps {
  onOpenBooking?: () => void;
}

export function Navbar({ onOpenBooking }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-[#0b1b2f]/95 backdrop-blur-md shadow-xl border-b border-white/10 py-2"
          : "bg-[#0c1f38] border-b border-white/10 py-3"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center group py-0.5">
            <div className="relative h-16 w-16 sm:h-20 sm:w-20 transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/sites/gotourshawaii/root/gotours-logo.png"
                alt="Logo Wisata Hawaii"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center gap-7 text-[13px] font-medium tracking-wide">
            <Link
              href="/"
              className="group flex flex-col items-center gap-[7px] text-white hover:text-[#f15d22] transition-colors py-0.5"
            >
              <Home className="w-[19px] h-[19px] text-[#f15d22] shrink-0 transition-transform duration-200 group-hover:scale-110" />
              <span>Beranda</span>
            </Link>

            {/* Tours & Packages Dropdown */}
            <div
              className="relative py-0.5"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <Link
                href="/tour-packages"
                className="group flex flex-col items-center gap-[7px] text-white hover:text-[#f15d22] transition-colors focus:outline-none"
              >
                <Sun className="w-[19px] h-[19px] text-[#f15d22] shrink-0 transition-transform duration-200 group-hover:scale-110" />
                <span className="flex items-center gap-1">
                  Tur &amp; Paket
                  <ChevronDown className="w-3.5 h-3.5 transition-transform duration-200" />
                </span>
              </Link>

              {dropdownOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-72 pt-2 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="bg-[#081528] border border-white/15 rounded-xl p-2 shadow-2xl backdrop-blur-lg">
                    <Link
                      href="/tour-packages"
                      className="block px-3 py-2.5 rounded-lg text-sm text-neutral-200 hover:text-white hover:bg-[#f15d22]/20 transition-colors"
                      onClick={() => setDropdownOpen(false)}
                    >
                      <div className="font-semibold text-white">Semua Tur &amp; Paket</div>
                      <div className="text-xs text-[#f5b324]">Jelajahi 9 tur pilihan terbaik</div>
                    </Link>
                    <Link
                      href="/tour-packages"
                      className="block px-3 py-2.5 rounded-lg text-sm text-neutral-200 hover:text-white hover:bg-[#f15d22]/20 transition-colors"
                      onClick={() => setDropdownOpen(false)}
                    >
                      <div className="font-semibold text-white">Tur Keliling Pulau (Circle Island)</div>
                      <div className="text-xs text-neutral-400">Air Terjun Waimea &amp; Kuil Byodo-In</div>
                    </Link>
                    <Link
                      href="/tour-packages"
                      className="block px-3 py-2.5 rounded-lg text-sm text-neutral-200 hover:text-white hover:bg-[#f15d22]/20 transition-colors"
                      onClick={() => setDropdownOpen(false)}
                    >
                      <div className="font-semibold text-white">Snorkeling di Turtle Canyon</div>
                      <div className="text-xs text-neutral-400">Berenang bersama penyu hijau</div>
                    </Link>
                    <Link
                      href="/tour-packages"
                      className="block px-3 py-2.5 rounded-lg text-sm text-neutral-200 hover:text-white hover:bg-[#f15d22]/20 transition-colors"
                      onClick={() => setDropdownOpen(false)}
                    >
                      <div className="font-semibold text-white">Pesta Luau Hawaii</div>
                      <div className="text-xs text-neutral-400">Pesta Makan &amp; Atraksi Paina Waikiki</div>
                    </Link>
                    <Link
                      href="/tour-packages"
                      className="block px-3 py-2.5 rounded-lg text-sm text-neutral-200 hover:text-white hover:bg-[#f15d22]/20 transition-colors"
                      onClick={() => setDropdownOpen(false)}
                    >
                      <div className="font-semibold text-white">Tur Pearl Harbor</div>
                      <div className="text-xs text-neutral-400">Memorial Bersejarah USS Arizona</div>
                    </Link>
                    <Link
                      href="/tour-packages"
                      className="block px-3 py-2.5 rounded-lg text-sm text-neutral-200 hover:text-white hover:bg-[#f15d22]/20 transition-colors"
                      onClick={() => setDropdownOpen(false)}
                    >
                      <div className="font-semibold text-white">Shuttle Diamond Head</div>
                      <div className="text-xs text-neutral-400">Layanan shuttle harian praktis</div>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/private-tours"
              className="group flex flex-col items-center gap-[7px] text-white hover:text-[#f15d22] transition-colors py-0.5"
            >
              <Bus className="w-[19px] h-[19px] text-[#f15d22] shrink-0 transition-transform duration-200 group-hover:scale-110" />
              <span>Tur Privat</span>
            </Link>

            <Link
              href="/blog"
              className="group flex flex-col items-center gap-[7px] text-white hover:text-[#f15d22] transition-colors py-0.5"
            >
              <BookOpen className="w-[19px] h-[19px] text-[#f15d22] shrink-0 transition-transform duration-200 group-hover:scale-110" />
              <span>Blog</span>
            </Link>

            <Link
              href="/our-story"
              className="group flex flex-col items-center gap-[7px] text-white hover:text-[#f15d22] transition-colors py-0.5"
            >
              <Compass className="w-[19px] h-[19px] text-[#f15d22] shrink-0 transition-transform duration-200 group-hover:scale-110" />
              <span>Kisah Kami</span>
            </Link>

            <Link
              href="/contact-us"
              className="group flex flex-col items-center gap-[7px] text-white hover:text-[#f15d22] transition-colors py-0.5"
            >
              <PhoneCall className="w-[19px] h-[19px] text-[#f15d22] shrink-0 transition-transform duration-200 group-hover:scale-110" />
              <span>Hubungi Kami</span>
            </Link>
          </nav>

          {/* Right Action: Orange CTA Button */}
          <div className="hidden sm:flex items-center gap-4">
            <a
              href="tel:808-926-3090"
              className="hidden xl:flex items-center gap-2 text-neutral-300 hover:text-white text-xs font-semibold"
            >
              <Phone className="w-3.5 h-3.5 text-[#f15d22]" />
              <span>808-926-3090</span>
            </a>

            <button
              onClick={onOpenBooking}
              className="relative overflow-hidden group bg-[#f15d22] hover:bg-[#d84b13] text-white px-5 py-2 rounded-lg font-bold shadow-lg shadow-[#f15d22]/30 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 text-center leading-tight cursor-pointer"
            >
              <span className="block text-sm uppercase tracking-wider font-extrabold">
                PESAN SEKARANG
              </span>
              <span className="block text-[11px] font-normal tracking-wide text-white/90">
                Diskon 10%
              </span>
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-white hover:text-[#f15d22] focus:outline-none"
            aria-label="Buka Menu Navigasi"
          >
            {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#071629] border-t border-white/10 px-4 pt-3 pb-6 space-y-3 animate-in slide-in-from-top-4 duration-300">
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-3 px-3 py-2 rounded-lg text-neutral-200 hover:text-white hover:bg-white/5"
          >
            <Home className="w-5 h-5 text-[#f15d22]" />
            <span className="font-semibold">Beranda</span>
          </Link>

          <div className="px-3 py-2 space-y-2">
            <Link
              href="/tour-packages"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-3 text-white text-xs font-bold uppercase tracking-wider"
            >
              <Sun className="w-5 h-5 text-[#f15d22]" />
              <span>Tur &amp; Paket</span>
            </Link>
            <div className="pl-7 space-y-1.5 border-l border-white/10 ml-2">
              <Link
                href="/tour-packages"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-sm text-neutral-300 hover:text-white py-1"
              >
                Semua Paket &amp; Ekskursi
              </Link>
              <Link
                href="/tour-packages"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-sm text-neutral-300 hover:text-white py-1"
              >
                Tur Keliling Pulau
              </Link>
              <Link
                href="/tour-packages"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-sm text-neutral-300 hover:text-white py-1"
              >
                Pesta Luau Hawaii
              </Link>
              <Link
                href="/tour-packages"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-sm text-neutral-300 hover:text-white py-1"
              >
                Snorkeling Turtle Canyon
              </Link>
              <Link
                href="/tour-packages"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-sm text-neutral-300 hover:text-white py-1"
              >
                Tur Pearl Harbor
              </Link>
              <Link
                href="/tour-packages"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-sm text-neutral-300 hover:text-white py-1"
              >
                Shuttle Diamond Head
              </Link>
            </div>
          </div>

          <Link
            href="/private-tours"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-3 px-3 py-2 rounded-lg text-neutral-200 hover:text-white hover:bg-white/5"
          >
            <Bus className="w-5 h-5 text-[#f15d22]" />
            <span className="font-semibold">Tur Privat</span>
          </Link>

          <Link
            href="/blog"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-3 px-3 py-2 rounded-lg text-neutral-200 hover:text-white hover:bg-white/5"
          >
            <BookOpen className="w-5 h-5 text-[#f15d22]" />
            <span className="font-semibold">Blog</span>
          </Link>

          <Link
            href="/our-story"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-3 px-3 py-2 rounded-lg text-neutral-200 hover:text-white hover:bg-white/5"
          >
            <Compass className="w-5 h-5 text-[#f15d22]" />
            <span className="font-semibold">Kisah Kami</span>
          </Link>

          <Link
            href="/contact-us"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-3 px-3 py-2 rounded-lg text-neutral-200 hover:text-white hover:bg-white/5"
          >
            <PhoneCall className="w-5 h-5 text-[#f15d22]" />
            <span className="font-semibold">Hubungi Kami</span>
          </Link>

          {/* Mobile Action Buttons */}
          <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
            <a
              href="tel:808-926-3090"
              className="flex items-center justify-center gap-2 py-3 rounded-xl bg-white/10 text-white font-semibold text-sm"
            >
              <Phone className="w-4 h-4 text-[#f15d22]" />
              <span>Hubungi: 808-926-3090</span>
            </a>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking?.();
              }}
              className="w-full bg-[#f15d22] hover:bg-[#d84b13] text-white py-3.5 rounded-xl font-bold uppercase tracking-wider text-sm shadow-lg shadow-[#f15d22]/30 cursor-pointer"
            >
              PESAN SEKARANG (DISKON 10%)
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

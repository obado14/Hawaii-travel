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
                alt="Hawaii Travel Logo"
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
              className="flex flex-col items-center gap-1 text-white hover:text-[#f15d22] transition-colors py-1"
            >
              <Home className="w-4 h-4 text-[#f15d22]" />
              <span>Home</span>
            </Link>

            {/* Tours & Packages Dropdown */}
            <div
              className="relative py-1"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <Link
                href="/tour-packages"
                className="flex flex-col items-center gap-1 text-white hover:text-[#f15d22] transition-colors focus:outline-none"
              >
                <Sun className="w-4 h-4 text-[#f15d22]" />
                <span className="flex items-center gap-1">
                  Tours &amp; Packages
                  <ChevronDown className="w-3 h-3 transition-transform duration-200" />
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
                      <div className="font-semibold text-white">All Tours &amp; Packages</div>
                      <div className="text-xs text-[#f5b324]">Explore all 7 handcrafted tours</div>
                    </Link>
                    <Link
                      href="/tour-packages"
                      className="block px-3 py-2.5 rounded-lg text-sm text-neutral-200 hover:text-white hover:bg-[#f15d22]/20 transition-colors"
                      onClick={() => setDropdownOpen(false)}
                    >
                      <div className="font-semibold text-white">Circle Island Tours</div>
                      <div className="text-xs text-neutral-400">Waimea Waterfall &amp; Byodo-In</div>
                    </Link>
                    <Link
                      href="/tour-packages"
                      className="block px-3 py-2.5 rounded-lg text-sm text-neutral-200 hover:text-white hover:bg-[#f15d22]/20 transition-colors"
                      onClick={() => setDropdownOpen(false)}
                    >
                      <div className="font-semibold text-white">Turtle Canyon Snorkeling</div>
                      <div className="text-xs text-neutral-400">Swim with green sea turtles</div>
                    </Link>
                    <Link
                      href="/tour-packages"
                      className="block px-3 py-2.5 rounded-lg text-sm text-neutral-200 hover:text-white hover:bg-[#f15d22]/20 transition-colors"
                      onClick={() => setDropdownOpen(false)}
                    >
                      <div className="font-semibold text-white">Hawaiian Luau</div>
                      <div className="text-xs text-neutral-400">Paina Waikiki Feast &amp; Show</div>
                    </Link>
                    <Link
                      href="/tour-packages"
                      className="block px-3 py-2.5 rounded-lg text-sm text-neutral-200 hover:text-white hover:bg-[#f15d22]/20 transition-colors"
                      onClick={() => setDropdownOpen(false)}
                    >
                      <div className="font-semibold text-white">Pearl Harbor Tours</div>
                      <div className="text-xs text-neutral-400">USS Arizona Memorial Experience</div>
                    </Link>
                    <Link
                      href="/tour-packages"
                      className="block px-3 py-2.5 rounded-lg text-sm text-neutral-200 hover:text-white hover:bg-[#f15d22]/20 transition-colors"
                      onClick={() => setDropdownOpen(false)}
                    >
                      <div className="font-semibold text-white">Diamond Head Shuttle</div>
                      <div className="text-xs text-neutral-400">Hassle-free daily shuttles</div>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/private-tours"
              className="flex flex-col items-center gap-1 text-white hover:text-[#f15d22] transition-colors py-1"
            >
              <Bus className="w-4 h-4 text-[#f15d22]" />
              <span>Private Tours</span>
            </Link>

            <Link
              href="/blog"
              className="flex flex-col items-center gap-1 text-white hover:text-[#f15d22] transition-colors py-1"
            >
              <BookOpen className="w-4 h-4 text-[#f15d22]" />
              <span>Blog</span>
            </Link>

            <Link
              href="/our-story"
              className="flex flex-col items-center gap-1 text-white hover:text-[#f15d22] transition-colors py-1"
            >
              <Compass className="w-4 h-4 text-[#f15d22]" />
              <span>Our Story</span>
            </Link>

            <Link
              href="/contact-us"
              className="flex flex-col items-center gap-1 text-white hover:text-[#f15d22] transition-colors py-1"
            >
              <PhoneCall className="w-4 h-4 text-[#f15d22]" />
              <span>Contact Us</span>
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
                BOOK NOW
              </span>
              <span className="block text-[11px] font-normal tracking-wide text-white/90">
                Get 10% Off
              </span>
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-white hover:text-[#f15d22] focus:outline-none"
            aria-label="Toggle Navigation Menu"
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
            <span className="font-semibold">Home</span>
          </Link>

          <div className="px-3 py-2 space-y-2">
            <Link
              href="/tour-packages"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-3 text-white text-xs font-bold uppercase tracking-wider"
            >
              <Sun className="w-4 h-4 text-[#f15d22]" />
              <span>Tours &amp; Packages</span>
            </Link>
            <div className="pl-7 space-y-1.5 border-l border-white/10 ml-2">
              <Link
                href="/tour-packages"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-sm text-neutral-300 hover:text-white py-1"
              >
                All Packages &amp; Excursions
              </Link>
              <Link
                href="/tour-packages"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-sm text-neutral-300 hover:text-white py-1"
              >
                Circle Island Tours
              </Link>
              <Link
                href="/tour-packages"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-sm text-neutral-300 hover:text-white py-1"
              >
                Hawaiian Luau
              </Link>
              <Link
                href="/tour-packages"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-sm text-neutral-300 hover:text-white py-1"
              >
                Pearl Harbor Experience
              </Link>
              <Link
                href="/tour-packages"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-sm text-neutral-300 hover:text-white py-1"
              >
                Diamond Head Shuttle
              </Link>
            </div>
          </div>

          <Link
            href="/private-tours"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-3 px-3 py-2 rounded-lg text-neutral-200 hover:text-white hover:bg-white/5"
          >
            <Bus className="w-5 h-5 text-[#f15d22]" />
            <span className="font-semibold">Private Tours</span>
          </Link>

          <Link
            href="/blog"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-3 px-3 py-2 rounded-lg text-neutral-200 hover:text-white hover:bg-white/5"
          >
            <BookOpen className="w-5 h-5 text-[#f15d22]" />
            <span className="font-semibold">Blog &amp; Travel Guides</span>
          </Link>

          <Link
            href="/our-story"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-3 px-3 py-2 rounded-lg text-neutral-200 hover:text-white hover:bg-white/5"
          >
            <Compass className="w-5 h-5 text-[#f15d22]" />
            <span className="font-semibold">Our Story &amp; Mission</span>
          </Link>

          <Link
            href="/contact-us"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-3 px-3 py-2 rounded-lg text-neutral-200 hover:text-white hover:bg-white/5"
          >
            <PhoneCall className="w-5 h-5 text-[#f15d22]" />
            <span className="font-semibold">Contact Us</span>
          </Link>

          <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking?.();
              }}
              className="w-full bg-[#f15d22] text-white py-3 rounded-lg font-bold uppercase text-center tracking-wider text-sm shadow-lg shadow-[#f15d22]/30 cursor-pointer"
            >
              BOOK NOW - Get 10% Off
            </button>
            <a
              href="tel:808-926-3090"
              className="w-full bg-white/10 text-white py-2.5 rounded-lg font-semibold text-center text-sm flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-[#f15d22]" />
              Call 808-926-3090
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

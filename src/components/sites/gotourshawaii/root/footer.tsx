import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative bg-[#111827] text-white pt-16 pb-8 border-t border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          {/* Column 1: Brand & Contact Info */}
          <div className="space-y-4">
            <Link href="/" className="inline-block relative w-48 h-20">
              <Image
                src="/sites/gotourshawaii/root/site-logo-white-e1714962363418.png"
                alt="Go Tours Hawaii Logo"
                fill
                className="object-contain"
              />
            </Link>

            <div className="space-y-3 pt-2 text-xs sm:text-sm text-neutral-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#f15d22] shrink-0 mt-0.5" />
                <span>2500 Kalakaua Ave Suite E Honolulu, Hawaii 96815</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#f15d22] shrink-0" />
                <a href="tel:808-926-3090" className="hover:text-white transition-colors">
                  808-926-3090
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#f15d22] shrink-0" />
                <a href="mailto:info@gotourshawaii.com" className="hover:text-white transition-colors">
                  info@gotourshawaii.com
                </a>
              </div>
            </div>

            {/* Social Media Circular Buttons */}
            <div className="flex items-center gap-3 pt-3">
              <a
                href="https://www.facebook.com/GoToursHawaii"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-[#f15d22] hover:bg-[#d84b13] flex items-center justify-center text-white transition-transform hover:scale-110 shadow-md"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.6 5H18V0h-3.808C10.592 0 9 1.583 9 4.615V8z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-[#f15d22] hover:bg-[#d84b13] flex items-center justify-center text-white transition-transform hover:scale-110 shadow-md"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Experience */}
          <div className="space-y-3">
            <h4 className="font-heading text-xl font-bold text-white uppercase tracking-wider mb-2">
              Experience
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-neutral-300">
              <li>
                <Link
                  href="/tour-packages"
                  className="hover:text-[#f15d22] transition-colors leading-relaxed block"
                >
                  Hidden Gems of Oahu with Waimea Botanical Garden/ Waterfall
                </Link>
              </li>
              <li>
                <Link
                  href="/tour-packages"
                  className="hover:text-[#f15d22] transition-colors leading-relaxed block"
                >
                  Hidden Gems of Oahu Byodo-In Temple &amp; Turtle Spotting
                </Link>
              </li>
              <li>
                <Link
                  href="/tour-packages"
                  className="hover:text-[#f15d22] transition-colors leading-relaxed block"
                >
                  Waikiki Turtle Canyon Snorkeling and Swim
                </Link>
              </li>
              <li>
                <Link
                  href="/tour-packages"
                  className="hover:text-[#f15d22] transition-colors leading-relaxed block"
                >
                  Paina Waikiki Luau
                </Link>
              </li>
              <li>
                <Link
                  href="/tour-packages"
                  className="hover:text-[#f15d22] transition-colors leading-relaxed block"
                >
                  USS Arizona Memorial Pearl Harbor Tour
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: About Us & Media */}
          <div className="space-y-6">
            <div className="space-y-3">
              <h4 className="font-heading text-xl font-bold text-white uppercase tracking-wider mb-2">
                About Us
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-neutral-300">
                <li>
                  <Link href="/our-story" className="hover:text-[#f15d22] transition-colors">
                    Go Tours Hawaii History
                  </Link>
                </li>
                <li>
                  <Link href="/contact-us" className="hover:text-[#f15d22] transition-colors">
                    Join Our Team!
                  </Link>
                </li>
                <li>
                  <Link href="/contact-us" className="hover:text-[#f15d22] transition-colors">
                    Affiliate Program
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="font-heading text-xl font-bold text-white uppercase tracking-wider mb-2">
                Media
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-neutral-300">
                <li>
                  <Link href="/blog" className="hover:text-[#f15d22] transition-colors">
                    Photos
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="hover:text-[#f15d22] transition-colors">
                    Videos
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Column 4: Find Us & Map */}
          <div className="space-y-3">
            <h4 className="font-heading text-xl font-bold text-white uppercase tracking-wider mb-2">
              Find Us
            </h4>
            <div className="flex items-center group">
              <Image
                src="/sites/gotourshawaii/root/location.png"
                alt="Oahu Island Map and Headquarters Location"
                width={317}
                height={236}
                className="w-auto h-36 sm:h-40 object-contain filter brightness-110 transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <p className="text-xs text-neutral-400">
              Centrally located in the heart of Waikiki, Honolulu.
            </p>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Policy */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-400 gap-4">
          <p>© 2026 Go Tours Hawaii. All rights Reserved</p>
          <div className="flex items-center gap-6">
            <Link href="#contact" className="hover:text-white transition-colors">
              Terms &amp; Conditions
            </Link>
            <Link href="#contact" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

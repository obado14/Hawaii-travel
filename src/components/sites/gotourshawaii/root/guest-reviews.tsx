"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

interface Review {
  id: number;
  title?: string;
  quote: string;
  author: string;
}

const reviews: Review[] = [
  {
    id: 1,
    quote: "Tim was awesome!!! It was fun, educational & overall a beautiful experience!",
    author: "Megan O.",
  },
  {
    id: 2,
    quote:
      "Matthew was amazing! He explained everything so well and we learned so many facts that we did not know about 🙂 He was so so kind! Truly made my parent’s 30th anniversary a great one! Thank you, Matthew ☺️",
    author: "Kathy L.",
  },
  {
    id: 3,
    title: "Kanoe was the best!",
    quote:
      "Great tour company! Picked us up at our hotel and gave an incredible tour for Pearl Harbor. We had Kanoe. She was full of more trivia than any person I know and also a great conversationalist. Would definitely use them again next time we come back to Hawaii.",
    author: "Kendra L.",
  },
  {
    id: 4,
    quote:
      "My girlfriend and I just arrived in Honolulu for her birthday weekend, and she had heard great things about Go Tours Hawaii — now we know why! From the moment we arrived, RJ was incredibly helpful and friendly while guiding us around the island.\n\nWe were especially grateful for how he educated us at each stop, not just about the locations but about the culture and history of the island. His knowledge, energy, and passion really stood out and made the experience even more special.\n\nThank you again, RJ, for the laughs, the great energy, and the education — you made her birthday weekend unforgettable!",
    author: "Sean K.",
  },
  {
    id: 5,
    title: "Amazing Snorkeling Experience with Sea Turtles!",
    quote:
      "We had an incredible boat tour in the ocean and went snorkeling. The experience was unforgettable! We saw large sea turtles up close, along with many colorful fish swimming around us. The water was crystal clear, and the entire trip was well-organized. It was a perfect mix of adventure and relaxation. If you’re looking for a great snorkeling experience, I highly recommend it!",
    author: "Alex B.",
  },
  {
    id: 6,
    title: "Great tour.",
    quote:
      "The tour was nice. The driver was really good and so was the tour guide, the Johns. It had a good atmosphere for being a full bus and I found nothing wrong with this tour.",
    author: "MaKayla M.",
  },
  {
    id: 7,
    title: "Perfect experience for first timers.",
    quote:
      "Going on a guided tour around the island is definitely a must, especially if you’re a first time visitor. The tour guide and driver are friendly and knowledgeable about the island. There are no snacks allowed on the bus however frequent stops are made where you can grab a bite. Overall the views are spectacular I feel like we really experienced the beauty of the island.",
    author: "Diona H.",
  },
];

export function GuestReviews() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevReview = () => {
    setCurrentIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const nextReview = () => {
    setCurrentIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  const current = reviews[currentIndex];

  return (
    <section className="relative bg-[#081d38] py-20 px-4 sm:px-6 lg:px-8 overflow-hidden text-white">
      {/* Background Texture Overlay */}
      <div className="absolute inset-0 opacity-15 pointer-events-none">
        <Image
          src="/sites/gotourshawaii/root/optimized-bg-texture-002.jpg"
          alt="Polynesian watermark texture"
          fill
          className="object-cover"
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Title */}
        <div className="text-center mb-10">
          <h2 className="font-heading text-4xl sm:text-6xl md:text-7xl text-[#f5b324] uppercase tracking-wider drop-shadow-md">
            HEAR FROM OUR GUESTS
          </h2>

          {/* TripAdvisor Rating Summary */}
          <div className="mt-4 flex items-center justify-center gap-4">
            <div className="relative w-12 h-12 sm:w-14 sm:h-14">
              <Image
                src="/sites/gotourshawaii/root/TC-Sticker-2023_White-1.png"
                alt="TripAdvisor Travelers' Choice"
                fill
                className="object-contain"
              />
            </div>
            <div className="text-left">
              <div className="text-xs uppercase tracking-wider text-neutral-300 font-semibold">
                Overall Rating
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-extrabold text-[#f5b324] leading-none font-heading">
                  4.9
                </span>
                <span className="text-xs text-neutral-300 font-medium">4,678 reviews</span>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial Card Display */}
        <div className="relative max-w-3xl mx-auto">
          {/* Card */}
          <div className="bg-white text-neutral-900 rounded-2xl p-7 sm:p-10 shadow-2xl transition-all duration-300 min-h-[260px] sm:min-h-[300px] flex flex-col justify-between border-4 border-white/20">
            <div>
              {/* 5 Stars */}
              <div className="flex items-center justify-center gap-1 mb-5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#f59e0b] text-[#f59e0b]" />
                ))}
              </div>

              {/* Review Title if present */}
              {current.title && (
                <h4 className="font-heading text-lg sm:text-xl font-bold text-center text-[#0c2340] mb-3">
                  {current.title}
                </h4>
              )}

              {/* Review Quote */}
              <p className="text-sm sm:text-base text-neutral-700 italic text-center font-normal leading-relaxed whitespace-pre-line max-w-2xl mx-auto">
                &ldquo;{current.quote}&rdquo;
              </p>
            </div>

            {/* Author */}
            <div className="mt-6 text-center">
              <span className="font-heading text-base sm:text-lg font-bold text-[#f15d22] uppercase tracking-wide">
                ~ {current.author}
              </span>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevReview}
            className="absolute left-[-20px] sm:left-[-24px] top-1/2 -translate-y-1/2 z-20 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#f15d22] hover:bg-[#d84b13] text-white flex items-center justify-center shadow-xl transition-all duration-200 transform hover:scale-110 active:scale-95 cursor-pointer"
            aria-label="Previous Review"
          >
            <ChevronLeft className="w-6 h-6 stroke-[3]" />
          </button>

          <button
            onClick={nextReview}
            className="absolute right-[-20px] sm:right-[-24px] top-1/2 -translate-y-1/2 z-20 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#f15d22] hover:bg-[#d84b13] text-white flex items-center justify-center shadow-xl transition-all duration-200 transform hover:scale-110 active:scale-95 cursor-pointer"
            aria-label="Next Review"
          >
            <ChevronRight className="w-6 h-6 stroke-[3]" />
          </button>
        </div>

        {/* Dots Pagination */}
        <div className="mt-8 flex items-center justify-center gap-2">
          {reviews.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-2.5 rounded-full transition-all cursor-pointer ${
                currentIndex === idx ? "w-8 bg-[#f15d22]" : "w-2.5 bg-white/30 hover:bg-white/60"
              }`}
              aria-label={`Go to review ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

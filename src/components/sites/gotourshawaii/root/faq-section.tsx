"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, ChevronDown } from "lucide-react";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    id: 1,
    question: "How do I book a tour with Go Tours Hawaii?",
    answer:
      "To book a tour with Go Tours Hawaii, you have two convenient options. You can either book online through our website or give us a call at 808-926-3090. If you choose to book online, you’ll receive an email confirmation containing all the necessary information for the tour. This includes what to bring and, if needed, photos of the pick-up location. We aim to make the booking process as seamless as possible for our customers.",
  },
  {
    id: 2,
    question: "Do our tours pick up in Waikiki?",
    answer:
      "Our tours offer 8 convenient pick-up locations in Waikiki. When you insert your hotel information into the booking portal, your pick-up location will automatically populate. Additionally, your email confirmation will include a Google map and a photo of the pick-up location for your convenience. We strive to make the pick-up process easy and hassle-free for our customers.",
  },
  {
    id: 3,
    question: "Do we offer private tours or standard transportation services?",
    answer:
      "Yes, Go Tours Hawaii not only offers Oahu and Maui tour services, but we also provide standard transportation services to help you navigate with your friends, family, or colleagues during your Hawaiian adventure. Whether it’s a company retreat or a group outing, we’ve got you covered. Click Here for more information",
  },
  {
    id: 4,
    question: "Are there any age or fitness restrictions for the tour?",
    answer:
      "Our tours are suitable for all ages except for the Waikiki Turtle Canyon Tour where the minimum age is 3 years old to attend.",
  },
  {
    id: 5,
    question: "What is the cancellation policy for the bookings?",
    answer:
      "Our Oahu Circle Island Tour, Pearl Harbor Tour and Waikiki Turtle Canyon Snorkeling Tour have a 48 hour cancellation policy. While the Paina Luau has a 72 hour cancellation policy. Full refunds for all tours cancelled due to weather.",
  },
];

export function FAQSection() {
  const [openIds, setOpenIds] = useState<number[]>([1]); // First FAQ opened by default as on live site

  const toggle = (id: number) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <section className="relative bg-[#081d38] py-16 sm:py-24 px-4 sm:px-6 lg:px-8 text-white overflow-hidden">
      {/* Texture Background */}
      <div className="absolute inset-0 opacity-15 pointer-events-none">
        <Image
          src="/sites/gotourshawaii/root/optimized-bg-texture-002.jpg"
          alt="Texture"
          fill
          className="object-cover"
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="font-heading text-4xl sm:text-6xl md:text-7xl text-[#f5b324] uppercase tracking-wider">
            FREQUENTLY ASKED QUESTIONS
          </h2>
        </div>

        {/* Accordions */}
        <div className="space-y-4">
          {faqs.map((faq) => {
            const isOpen = openIds.includes(faq.id);
            return (
              <div
                key={faq.id}
                className="border-b border-white/20 pb-4 transition-colors"
              >
                <button
                  onClick={() => toggle(faq.id)}
                  className="w-full flex items-center justify-between text-left py-3 group focus:outline-none cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base md:text-lg font-medium text-white group-hover:text-[#f5b324] transition-colors pr-4">
                    {faq.question}
                  </span>

                  {/* Orange circle with arrow */}
                  <span
                    className={`shrink-0 w-8 h-8 rounded-full bg-[#f15d22] text-white flex items-center justify-center transition-transform duration-300 ${
                      isOpen ? "rotate-90 bg-amber-500" : "group-hover:scale-110"
                    }`}
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                </button>

                {isOpen && (
                  <div className="mt-2 text-xs sm:text-sm text-neutral-300 leading-relaxed font-normal animate-in fade-in slide-in-from-top-1 duration-200 pl-1 pr-6">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

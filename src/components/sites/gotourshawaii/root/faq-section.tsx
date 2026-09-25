"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

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
    question: "What is the cancellation policy for bookings?",
    answer:
      "Our Oahu Circle Island Tour, Pearl Harbor Tour, and Waikiki Turtle Canyon Snorkeling Tour have a flexible 48-hour cancellation policy for a full refund. The Paina Luau requires 72 hours notice. Additionally, full 100% refunds are provided for all tours canceled due to hazardous weather or ocean conditions.",
  },
];

export function FAQSection() {
  const [openId, setOpenId] = useState<number | null>(1); // Single FAQ open by default

  const toggle = (id: number) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="relative bg-[#081d38] py-12 sm:py-16 px-4 sm:px-6 lg:px-8 text-white overflow-hidden">
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
        <div className="text-center mb-8 sm:mb-10">
          <h2 className="font-heading text-4xl sm:text-6xl md:text-7xl text-[#f5b324] uppercase tracking-wider">
            FREQUENTLY ASKED QUESTIONS
          </h2>
        </div>

        {/* Accordions with smooth expand/collapse and transformed icon */}
        <div className="space-y-4 sm:space-y-5">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="rounded-2xl border border-white/10 bg-white/[0.04] hover:bg-white/[0.07] hover:border-white/25 transition-all duration-300 px-6 sm:px-8 py-2 shadow-md hover:shadow-xl"
              >
                <button
                  onClick={() => toggle(faq.id)}
                  className="w-full flex items-center justify-between text-left py-4 sm:py-5 group focus:outline-none cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="text-lg sm:text-xl md:text-[1.35rem] font-semibold text-white group-hover:text-[#f5b324] transition-colors pr-4 leading-snug">
                    {faq.question}
                  </span>

                  {/* Icon that visually transforms to show expanded state */}
                  <span
                    className={`shrink-0 w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center transition-all duration-300 shadow-md ${
                      isOpen
                        ? "bg-amber-500 text-white rotate-180 scale-105"
                        : "bg-[#f15d22] text-white group-hover:scale-110 group-hover:bg-[#d84b13]"
                    }`}
                  >
                    <ChevronDown className="w-5 h-5 stroke-[2.5]" />
                  </span>
                </button>

                {/* Smooth Expand/Collapse Grid Transition */}
                <div
                  className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="pb-6 pt-2 text-base sm:text-[17px] text-neutral-100 leading-relaxed sm:leading-8 font-normal pl-0.5 pr-6 border-t border-white/15 mt-1.5">
                      <p>{faq.answer}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

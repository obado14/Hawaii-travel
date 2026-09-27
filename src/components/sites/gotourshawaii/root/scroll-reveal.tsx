"use client";

import React from "react";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "fade";
}

/**
 * Static container component.
 * Scroll-triggered animations, parallax, fading, sliding, and transitions
 * have been completely removed as requested.
 */
export function ScrollReveal({
  children,
  className = "",
}: ScrollRevealProps) {
  return <div className={className}>{children}</div>;
}

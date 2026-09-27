"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

interface BookingDialogProps {
  isOpen: boolean;
  onClose: () => void;
  defaultTour?: string;
}

/**
 * Replaces the old popup/modal booking dialog.
 * When triggered, redirects directly to the dedicated full-page booking experience (/booking).
 */
export function BookingDialog({ isOpen, onClose, defaultTour }: BookingDialogProps) {
  const router = useRouter();

  useEffect(() => {
    if (isOpen) {
      const tourQuery = defaultTour ? `?tour=${encodeURIComponent(defaultTour)}` : "";
      router.push(`/booking${tourQuery}`);
      onClose();
    }
  }, [isOpen, defaultTour, onClose, router]);

  return null;
}

import type { Metadata } from "next";
import { Montserrat, Bebas_Neue } from "next/font/google";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://gotourshawaii.com"),
  title: "Hawaii Tours & Experiences | Go Tours Hawaii",
  description:
    "Discover top-rated Oahu, Honolulu & Waikiki tours. Small groups, local guides, unforgettable Hawaii adventures.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Hawaii Tours: Experience the Best of Oahu",
    description:
      "Discover top-rated Oahu, Honolulu & Waikiki tours. Small groups, local guides, unforgettable Hawaii adventures.",
    url: "https://gotourshawaii.com/",
    siteName: "Go Tours Hawaii",
    images: [
      {
        url: "/sites/gotourshawaii/root/Banner-BG-Thumbnail.jpg",
        width: 1200,
        height: 630,
        alt: "Go Tours Hawaii",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bebasNeue.variable} ${montserrat.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col font-sans bg-[#0c1f38] text-white selection:bg-[#f15d22] selection:text-white">
        {children}
      </body>
    </html>
  );
}

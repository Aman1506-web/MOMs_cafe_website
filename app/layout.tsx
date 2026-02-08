import type { Metadata } from "next";
import { Baloo_2, Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { CartBottomBar } from "@/components/cart-bottom-bar";
import WhatsAppButton from "@/components/WhatsAppButton";
import OfferPopup from "@/components/OfferPopup";
import { Analytics } from "@vercel/analytics/next";
import { RestaurantJsonLd } from "@/components/structured-data";

const baloo = Baloo_2({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const manbowLines = localFont({
  src: "./fonts/ManbowLines.otf",
  variable: "--font-manbow",
  display: "swap",
});

const SITE_URL = "https://www.ministryofmasala.co";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "MOM - Ministry Of Masala | Best Biryani & North Indian Restaurant in Rajinder Nagar, Delhi",
    template: "%s | MOM - Ministry Of Masala",
  },
  description:
    "Best North Indian restaurant in Old Rajinder Nagar, Delhi. Famous for Chicken Biryani, Roasted Wings, Paneer Tikka & affordable Veg/Non-Veg Thali. Student-friendly prices starting ₹60. Dine-in & takeaway available.",
  keywords: [
    "best biryani in Rajinder Nagar",
    "biryani near me Delhi",
    "roasted wings Rajinder Nagar",
    "paneer tikka Old Rajinder Nagar",
    "veg thali Rajinder Nagar",
    "non veg thali near me Delhi",
    "North Indian restaurant Rajinder Nagar",
    "best restaurant Old Rajinder Nagar",
    "affordable restaurant for students Delhi",
    "chicken biryani Old Rajinder Nagar",
    "butter chicken Rajinder Nagar",
    "Ministry of Masala",
    "MOM Ministry Of Masala Delhi",
    "restaurant near me Rajinder Nagar",
    "cheap food Rajinder Nagar",
    "best food in Rajinder Nagar",
    "weekly thali menu Delhi",
    "student food Rajinder Nagar",
  ],
  authors: [{ name: "MOM - Ministry Of Masala" }],
  creator: "Ministry of Masala",
  publisher: "Ministry of Masala",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: "MOM - Ministry Of Masala",
    title:
      "MOM - Ministry Of Masala | Best Biryani & North Indian Restaurant in Rajinder Nagar, Delhi",
    description:
      "Famous for Chicken Biryani, Roasted Wings, Paneer Tikka & affordable Veg/Non-Veg Thali in Old Rajinder Nagar, Delhi. Student-friendly prices from ₹60.",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ministry of Masala - Best Chicken Biryani in Rajinder Nagar Delhi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Ministry of Masala | Best Biryani & North Indian Food in Rajinder Nagar",
    description:
      "Famous Chicken Biryani, Roasted Wings, Paneer Tikka & Thali. Student-friendly prices from ₹60 in Old Rajinder Nagar, Delhi.",
    images: ["/images/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add your Google Search Console verification code here
    // google: "your-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${baloo.variable} ${inter.variable} ${manbowLines.variable} bg-cream text-black antialiased`}
      >
        <RestaurantJsonLd />
        {children}
        <Analytics />
        <OfferPopup />
        <CartBottomBar />
        <WhatsAppButton />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Baloo_2, Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { CartBottomBar } from "@/components/cart-bottom-bar";
import WhatsAppButton from "@/components/WhatsAppButton";
import OfferPopup from "@/components/OfferPopup";
import { Analytics } from "@vercel/analytics/next";

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

export const metadata: Metadata = {
  title: "MOMs Cafe | Ghar Jaisa Khana",
  description:
    "Home-Style Veg & Non-Veg Tiffin Service in Delhi NCR | Weekly Menu & Monthly Plans Available",
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
        {children}
        <Analytics />
        <OfferPopup />
        <CartBottomBar />
        <WhatsAppButton />
      </body>
    </html>
  );
}

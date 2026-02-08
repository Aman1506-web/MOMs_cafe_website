import { Suspense } from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { MenuClient } from "@/components/menu-client";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Menu - Biryani, Roasted Wings, Paneer Tikka, Thali & More",
  description:
    "Explore the full menu of MOM - Ministry Of Masala in Old Rajinder Nagar, Delhi. Chicken Biryani from ₹70, Roasted Wings ₹130, Paneer Tikka ₹130, Veg Thali ₹80, Non-Veg Thali ₹99. Affordable North Indian food for students.",
  alternates: {
    canonical: "https://www.ministryofmasala.co/menu",
  },
  openGraph: {
    title: "Menu | MOM - Ministry Of Masala | Rajinder Nagar, Delhi",
    description:
      "Chicken Biryani ₹70, Roasted Wings ₹130, Paneer Tikka ₹130, Butter Chicken ₹70, Veg Thali ₹80. Best affordable North Indian food in Old Rajinder Nagar.",
    url: "https://www.ministryofmasala.co/menu",
    images: [
      {
        url: "/images/biryani.png",
        width: 1200,
        height: 630,
        alt: "Ministry Of Masala Menu - Best Biryani in Rajinder Nagar Delhi",
      },
    ],
  },
};

export default function MenuPage() {
  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      <Suspense fallback={<div className="min-h-screen bg-cream" />}>
        <MenuClient />
      </Suspense>
      <Footer />
    </div>
  );
}

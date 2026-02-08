import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import WeeklyMenuClient from "@/components/weekly-menu-client";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Weekly Thali Menu - Veg ₹80 & Non-Veg ₹90 Daily Thali",
  description:
    "Check out this week's Veg & Non-Veg Thali menu at MOM - Ministry Of Masala, Old Rajinder Nagar, Delhi. Veg Thali ₹80/meal (₹3,600/month), Non-Veg Thali ₹90/meal (₹4,700/month). Fresh homestyle lunch & dinner daily.",
  alternates: {
    canonical: "https://www.ministryofmasala.co/weekly-menu",
  },
  openGraph: {
    title:
      "Weekly Thali Menu | MOM - Ministry Of Masala | Rajinder Nagar",
    description:
      "Daily changing Veg & Non-Veg Thali. Veg ₹80/meal, Non-Veg ₹90/meal. Includes roti, rice, dal, sabzi & salad. Best student meal in Rajinder Nagar.",
    url: "https://www.ministryofmasala.co/weekly-menu",
  },
};

export default function WeeklyMenuPage() {
  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      <WeeklyMenuClient />
      <Footer />
    </div>
  );
}

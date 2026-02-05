import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import WeeklyMenuClient from "@/components/weekly-menu-client";

export const metadata = {
  title: "Weekly Thali Menu | MOMs Cafe",
  description:
    "Check out our weekly veg and non-veg thali menu. Homestyle lunch & dinner — ₹80/meal veg, ₹90/meal non-veg.",
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

import { Suspense } from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { MenuClient } from "@/components/menu-client";

export default function MenuPage() {
  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      <Suspense fallback={<div className="min-h-screen bg-cream" />}>
      {/* useSearchParams works only in client component so and suspense works in server component */}
        <MenuClient />
      </Suspense>
      <Footer />
    </div>
  );
}

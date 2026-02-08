import type { Metadata } from "next";
import { ReserveClient } from "@/components/reserve-client";

export const metadata: Metadata = {
  title: "Reserve a Table - Book Your Seat",
  description:
    "Reserve a table at MOM - Ministry Of Masala, Old Rajinder Nagar, Delhi. Book via WhatsApp for dine-in. Perfect for group dinners, birthday celebrations & student get-togethers.",
  alternates: {
    canonical: "https://www.ministryofmasala.co/reserve",
  },
  openGraph: {
    title: "Reserve a Table | MOM - Ministry Of Masala | Delhi",
    description:
      "Book your table at Ministry Of Masala in Old Rajinder Nagar. Instant confirmation via WhatsApp.",
    url: "https://www.ministryofmasala.co/reserve",
  },
};

export default function ReservePage() {
  return <ReserveClient />;
}

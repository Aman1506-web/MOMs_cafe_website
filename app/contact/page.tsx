import type { Metadata } from "next";
import { ContactClient } from "@/components/contact-client";

export const metadata: Metadata = {
  title: "Contact Us - Order Online or Visit Us",
  description:
    "Contact MOM - Ministry Of Masala at Shop No. 89, Bara Bazar Marg, Old Rajinder Nagar, Delhi 110060. Call +91 9810317722 or order on WhatsApp. Open 8 AM - 1 AM (closed Tuesday).",
  alternates: {
    canonical: "https://www.ministryofmasala.co/contact",
  },
  openGraph: {
    title: "Contact MOM - Ministry Of Masala | Rajinder Nagar, Delhi",
    description:
      "Visit us at Old Rajinder Nagar or order on WhatsApp. Call +91 9810317722. Best Biryani, Roasted Wings & Thali in Rajinder Nagar.",
    url: "https://www.ministryofmasala.co/contact",
  },
};

export default function ContactPage() {
  return <ContactClient />;
}

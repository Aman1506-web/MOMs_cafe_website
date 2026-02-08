import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { SectionWrapper } from "@/components/section-wrapper";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - Our Story & North Indian Food Journey",
  description:
    "Learn about MOM - Ministry Of Masala, the best North Indian restaurant in Old Rajinder Nagar, Delhi. Serving authentic Biryani, Roasted Wings, Paneer Tikka & homestyle Thali since 2025. Student-friendly prices.",
  alternates: {
    canonical: "https://www.ministryofmasala.co/about",
  },
  openGraph: {
    title: "About MOM - Ministry Of Masala | Rajinder Nagar, Delhi",
    description:
      "Our journey of serving authentic North Indian food - Biryani, Roasted Wings, Paneer Tikka & daily Thali in Old Rajinder Nagar, Delhi.",
    url: "https://www.ministryofmasala.co/about",
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-cream">
      <Navbar />
      <main className="mx-auto max-w-6xl px-4 pb-14 pt-6 sm:px-6">
        <SectionWrapper>
          <div className="grid gap-6 rounded-[28px] bg-white p-6 shadow-soft md:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-4">
              <Badge className="rounded-full bg-yellow text-black shadow-chip">
                Our story
              </Badge>
              <h1 className="display text-4xl font-extrabold text-black">
                Ghar jaisa khana, dil se banaya.
              </h1>
              <p className="text-black/70">
                MOM - Ministry Of Masala is our love letter to authentic North
                Indian home-style cooking. Every dish — from our famous Chicken
                Biryani to the crispy Roasted Wings — is prepared fresh with
                hand-ground masalas and the finest ingredients.
              </p>
              <p className="text-black/70">
                Located in the heart of Old Rajinder Nagar&apos;s student hub, we
                believe great food should be accessible to everyone. That&apos;s why
                we keep our prices student-friendly without ever compromising on
                taste or quality.
              </p>
              <Link href="/menu">
                <Button className="rounded-full bg-orange text-black shadow-chip hover:bg-orange/90">
                  View menu
                </Button>
              </Link>
            </div>
            <div className="relative h-80 overflow-hidden rounded-[24px] bg-amber-100">
              <Image
                src="https://images.unsplash.com/photo-1421622548261-c45bfe178854?w=1000&q=80&auto=format&fit=crop"
                alt="MOM - Ministry Of Masala restaurant kitchen in Old Rajinder Nagar Delhi"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </SectionWrapper>

        <SectionWrapper className="mt-8">
          <div className="rounded-[28px] bg-brown p-6 text-amber-50 shadow-soft sm:p-10">
            <h2 className="display text-3xl font-extrabold">
              Why choose Ministry Of Masala?
            </h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-3">
              {[
                "Fresh food, hand-ground masalas",
                "Student-friendly prices from ₹60",
                "Weekly changing Thali menu",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl bg-white/10 p-4 text-amber-50 shadow-soft"
                >
                  <p className="display text-xl font-extrabold text-yellow">
                    {item}
                  </p>
                  <p className="text-sm text-amber-100/80">
                    Crafted to keep you full and happy, just like mom&apos;s cooking.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </SectionWrapper>
      </main>
      <Footer />
    </div>
  );
}

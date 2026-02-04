"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { Card, CardContent, CardFooter } from "./ui/card";
import { useCartStore } from "@/lib/cart-store";

/* ----------------------------------
   CATEGORY DATA (color included)
-----------------------------------*/
const categories = [
  {
    label: "Veg Lunch",
    href: "/menu?category=thali",
    bg: "bg-pink",
    text: "text-black",
  },
  {
    label: "Veg Dinner",
    href: "/menu?category=main-course-veg",
    bg: "bg-sky-blue",
    text: "text-black",
  },
  {
    label: "Non Veg Lunch",
    href: "/menu?category=main-course-non-veg",
    bg: "bg-pink/70",
    text: "text-black",
  },
  {
    label: "Non Veg Dinner",
    href: "/menu?category=non-veg-starters",
    bg: "bg-sky-blue/70",
    text: "text-black",
  },
  {
    label: "Weekly plans",
    href: "/menu?category=rice-bowls",
    bg: "bg-pink",
    text: "text-black",
  },
  {
    label: "Monthly plans",
    href: "/menu?category=breads",
    bg: "bg-sky-blue",
    text: "text-black",
  },
];

/* ----------------------------------
   PRODUCT DATA
-----------------------------------*/
const products = [
  {
    id: "1",
    name: "Veg Lunch Thali",
    price: "₹249",
    image: "/images/thali.png",
  },
  {
    id: "2",
    name: "Non-Veg Lunch Thali",
    price: "₹399",
    image: "/images/thali.png",
  },
  {
    id: "3",
    name: "Veg Dinner Thali",
    price: "₹349",
    image: "/images/thali.png",
  },
  {
    id: "4",
    name: "Non-Veg Dinner Thali",
    price: "₹199",
    image: "/images/thali.png",
  },
];

export default function ProductsDaily() {
  const addItem = useCartStore((state) => state.addItem);

  const handleAddToCart = (product: (typeof products)[number]) => {
    const numericPrice = Number(product.price.replace(/[^0-9.]/g, "")) || 0;
    addItem({
      id: product.id,
      name: product.name,
      price: numericPrice,
      category: "daily-special",
    });
  };

  return (
    <section className=" relative px-4 sm:px-6 lg:px-12 py-16 lg:py-14">
      {/* ================= Coffee Beans Decoration (Left) ================= */}
      <div
        className="
      pointer-events-none
      select-none
      absolute
      z-0

      /* ---------- Mobile ---------- */
      left-[-60px]
      top-[-2%]
      w-[300px]
      h-[300px]
      opacity-[0.12]
      rotate-[-1deg]

      /* ---------- Tablet ---------- */
      sm:left-[-60px]
      sm:top-[12%]
      sm:w-[240px]
      sm:h-[240px]
      sm:opacity-[0.15]

      /* ---------- Desktop ---------- */
      lg:left-[-100px]
      lg:top-[0%]
      lg:w-[820px]
      lg:h-[820px]
      lg:opacity-[0.20]
      lg:rotate-[10deg]
    "
      >
        <Image
          src="/decor/coffee-beans.png"
          alt=""
          fill
          className="object-contain"
          priority={false}
        />
      </div>

      {/* ===============================
          HEADING + CATEGORIES ROW
      =============================== */}
      <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
        {/* ---------- HEADING ---------- */}
        <div className="max-w-2xl">
          <h2 className="display text-4xl lg:text-5xl font-bold leading-tight">
            Food we make
            <br />
            <span className="text-black">
              here <span className="text-pink-300">daily</span>
            </span>{" "}
            —
          </h2>

          <p className="mt-4 display text-gray-600 text-lg">
            Best sellers you’ll love. Explore categories or jump straight to the
            menu.
          </p>
        </div>

        {/* ---------- CATEGORIES (GRID) ---------- */}
        <div
          className="
            grid
            grid-cols-3 
            lg:grid-cols-3
            gap-4
            max-w-xl
            pb-3
          "
        >
          {categories.map((c) => (
            <Link
              key={c.label}
              href={c.href}
              className={`
                ${c.bg} ${c.text}
                rounded-full
                border-2 border-brown/70
                display
                /* MOBILE */
        px-2 py-2 text-xs

        /* DESKTOP */
        lg:px-5 lg:py-3 lg:text-lg
                font-bold
                text-center
                transition
                hover:scale-[1.03]
                hover:shadow-md
              `}
            >
              {c.label}
            </Link>
          ))}
        </div>
      </div>

      {/* ===============================
          PRODUCTS GRID
      =============================== */}
      <div
        className="
    mt-9

    /* MOBILE: horizontal scroll */
    flex flex-nowrap gap-4
    overflow-x-auto pb-4
    snap-x snap-mandatory

    /* hide scrollbar (optional) */
    scrollbar-hide

    /* DESKTOP */
    lg:grid lg:grid-cols-4 lg:gap-6 lg:overflow-visible
  "
      >
        {products.map((p) => (
          <Card
            key={p.id}
            className="
            relative
    rounded-3xl
    border-2
    bg-white
    shadow-md
    overflow-hidden
    cursor-pointer
    transition-transform duration-300 hover:scale-105

    /* MOBILE */
    min-w-[260px]
    shrink-0
    snap-start

    /* DESKTOP */
    lg:min-w-0
  "
          >
            <CardContent className="p-0">
              <div className="relative h-[180px] w-full lg:h-[220px]">
                <Image
                  src={p.image}
                  alt={p.name}
                  fill
                  className="object-contain p-1 scale-120"
                />
              </div>

              <div className="px-6 pt-4">
                <p className="display text-xl font-bold text-black">{p.name}</p>
                <p className="mt-1 text-gray-600 font-semibold">{p.price}</p>
              </div>
            </CardContent>

            <CardFooter className="px-5 pb-3 pt-3">
              <Button
                className="w-full display text-lg rounded-full border border-orange-600/50 bg-orange-500 text-white font-bold hover:shadow-lg hover:bg-orange-600 cursor-pointer"
                onClick={() => handleAddToCart(p)}
              >
                Add to Cart
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}

"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { CartDrawer } from "@/components/cart-drawer";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";

const links = [
  { href: "/menu", label: "Menu" },
  { href: "/reserve", label: "Reserve Table" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const isHome = pathname === "/";
  const [scrolledPastBanner, setScrolledPastBanner] = useState(false);

  useEffect(() => {
    if (!isHome) return;
    const handler = () => setScrolledPastBanner(window.scrollY > 12);
    handler();
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, [isHome]);

  const scrolled = !isHome || scrolledPastBanner;

  return (
    <header
      className={cn(
        "fixed z-40 w-full transition-all duration-300",
        scrolled
          ? "top-0 bg-white/95 backdrop-blur shadow-soft"
          : "top-9 bg-white/70 backdrop-blur-sm"
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-3 py-2.5 sm:px-5 md:px-6 md:py-3 lg:py-1">
        <div className="flex items-center gap-2 md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <button
                aria-label="Open menu"
                className="rounded-full p-2.5 shadow-chip bg-white text-black"
              >
                <Menu className="size-6" />
              </button>
            </SheetTrigger>
            <SheetContent side="left" className="flex w-72 flex-col bg-white p-0 shadow-soft">
              <SheetHeader className="sr-only">
                <SheetTitle>Navigation</SheetTitle>
              </SheetHeader>

              {/* Logo header */}
              <div className="flex items-center gap-3 border-b border-black/5 px-5 pb-4 pr-12 pt-4">
                <Link href="/" className="flex items-center">
                  <span className="font-manbow text-4xl text-pink">M</span>
                  <span className="relative flex h-8 w-8 items-center justify-center">
                    <Image
                      src="/logo/mom-child.png"
                      alt="Ministry of Masala"
                      width={32}
                      height={32}
                      className="absolute z-0 h-5 w-5 object-contain"
                    />
                    <span className="absolute inset-0 z-10 flex items-center justify-center font-manbow text-4xl text-pink">
                      O
                    </span>
                  </span>
                  <span className="font-manbow text-4xl text-pink">M</span>
                </Link>
                <div className="min-w-0">
                  <p className="display text-sm font-bold text-[#3b2416]">
                    Ministry of Masala
                  </p>
                  <p className="text-[11px] text-black/40">
                    Ghar jaisa khana
                  </p>
                </div>
              </div>

              {/* Nav links */}
              <nav className="flex flex-col gap-1 px-3 py-4">
                {links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold text-black/80 transition",
                      pathname === link.href
                        ? "bg-[#3b2416] text-amber-100 shadow-chip"
                        : "hover:bg-black/5"
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>

              {/* Cafe sketch illustration */}
              <div className="relative flex flex-1 flex-col items-end justify-end overflow-hidden">
                <Image
                  src="/decor/cafe-sketch.png"
                  alt="Cafe sketch"
                  width={300}
                  height={600}
                  className="-mr-4 -mb-6 w-72 scale-y-125 opacity-10"
                />
                <p className="absolute bottom-5 left-5 text-[10px] font-medium tracking-wider text-black/20">
                  EST. 2025 · NEW DELHI
                </p>
              </div>

              {/* Bottom CTA */}
              <div className="border-t border-black/5 px-5 py-4">
                <Link
                  href="/menu"
                  className="block w-full rounded-full bg-orange-500 py-2.5 text-center text-sm font-bold text-white shadow-chip transition hover:bg-orange-600"
                >
                  Order Now →
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        <Link href="/" className="flex items-center">
          <span className="font-manbow text-5xl sm:text-5xl lg:text-6xl tracking-wide text-pink">
            M
          </span>
          <span className="relative flex items-center justify-center w-10 h-10 sm:w-10 sm:h-10 lg:w-14 lg:h-14">
            <Image
              src="/logo/mom-child.png"
              alt="Mom's Cafe"
              width={56}
              height={56}
              className="w-6 h-6 sm:w-6 sm:h-6 lg:w-8 lg:h-8 object-contain absolute z-0"
            />
            <span className="font-manbow text-5xl sm:text-5xl lg:text-6xl absolute inset-0 flex items-center justify-center z-10 text-pink">
              O
            </span>
          </span>
          <span className="font-manbow text-5xl sm:text-5xl lg:text-6xl tracking-wide text-pink">
            M
          </span>
        </Link>

        <nav className="hidden items-center gap-2 text-base font-bold uppercase md:flex text-black">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "rounded-full px-4 py-2 transition",
                pathname === link.href
                  ? "bg-pink text-black shadow-chip"
                  : "hover:bg-pink/30",
                // Special styling for Reserve Table link
                link.href === "/reserve" && pathname !== link.href
                  ? "bg-sky-blue hover:bg-sky-blue/90 border border-brown/30"
                  : ""
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden sm:block">
            <CartDrawer />
          </div>
          <Button
            size="sm"
            className="relative overflow-hidden rounded-full lg:border border-orange-600/50 bg-orange-500 px-4 py-2 text-white shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl hover:bg-orange-600 sm:px-5 sm:py-3 cursor-pointer"
            onClick={() => router.push("/menu")}
          >
            <span className="display text-sm sm:text-base font-extrabold uppercase tracking-wide">
              Order Now
            </span>
            <span className="pointer-events-none absolute inset-0 rounded-full border border-orange-700/50 opacity-80" />
          </Button>
        </div>

      </div>
    </header>
  );
}


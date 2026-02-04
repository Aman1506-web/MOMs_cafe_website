"use client";

import { useRouter } from "next/navigation";

export function PromoBanner() {
  const router = useRouter();

  return (
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#3b2416] via-[#5a3a28] to-[#3b2416] px-5 py-5 sm:px-8 sm:py-6">
      {/* Decorative emojis */}
      <span className="pointer-events-none absolute -right-2 -top-2 text-4xl opacity-20 sm:text-6xl">
        🍛
      </span>
      <span className="pointer-events-none absolute -bottom-1 -left-1 text-3xl opacity-15 sm:text-5xl">
        🍗
      </span>
      <span className="pointer-events-none absolute right-12 bottom-1 hidden text-3xl opacity-10 sm:block">
        🔥
      </span>

      <div className="relative z-10 flex items-center justify-between gap-4">
        <div className="min-w-0">
          <p className="text-xs font-semibold uppercase tracking-wider text-[#eda6c4] sm:text-sm">
            Today&apos;s Special
          </p>
          <h2 className="display mt-1 text-xl font-extrabold text-white sm:text-2xl md:text-3xl">
            Chicken Thali @ ₹99
          </h2>
          <p className="mt-1 text-xs text-white/60 sm:text-sm">
            Full meal with rice, roti, curry & more
          </p>
        </div>
        <button
          onClick={() => router.push("/menu?category=thali")}
          className="shrink-0 rounded-full bg-[#eda6c4] px-4 py-2 text-sm font-bold text-[#3b2416] shadow-chip transition hover:bg-[#eda6c4]/90 sm:px-6 sm:py-2.5 sm:text-base"
        >
          Order Now →
        </button>
      </div>
    </div>
  );
}

"use client";

import Image from "next/image";

export function LoaderOverlay() {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white">
      {/* Logo */}
      <div className="flex items-center">
        <span className="font-manbow text-5xl text-pink sm:text-6xl">M</span>
        <span className="relative flex h-10 w-10 items-center justify-center sm:h-14 sm:w-14">
          <Image
            src="/logo/mom-child.png"
            alt="Mom's Cafe"
            width={56}
            height={56}
            className="absolute z-0 h-6 w-6 object-contain sm:h-8 sm:w-8"
          />
          <span className="absolute inset-0 z-10 flex items-center justify-center font-manbow text-5xl text-pink sm:text-6xl">
            O
          </span>
        </span>
        <span className="font-manbow text-5xl text-pink sm:text-6xl">M</span>
      </div>

      {/* Under construction message */}
      <div className="mt-6 flex flex-col items-center gap-3 px-6 text-center">
        <div className="flex items-center gap-2 text-2xl">
          <span>🚧</span>
          <span>👷‍♂️</span>
          <span>🔨</span>
        </div>
        <h2 className="display text-lg font-bold text-[#3b2416] sm:text-xl">
          We&apos;re cooking something new!
        </h2>
        <p className="max-w-xs text-sm text-black/50">
          Our website is under construction. We&apos;ll be back with a fresh
          look soon.
        </p>
      </div>

      {/* Subtle animated dots */}
      <div className="mt-6 flex gap-1.5">
        <span className="h-2 w-2 animate-bounce rounded-full bg-[#eda6c4]" style={{ animationDelay: "0ms" }} />
        <span className="h-2 w-2 animate-bounce rounded-full bg-[#3b2416]" style={{ animationDelay: "150ms" }} />
        <span className="h-2 w-2 animate-bounce rounded-full bg-[#eda6c4]" style={{ animationDelay: "300ms" }} />
      </div>
    </div>
  );
}

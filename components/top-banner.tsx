"use client";

import { useEffect, useRef } from "react";

// top banner text
const messages = [
  "10% off on orders above ₹200",
  "Fresh bakes daily • Cozy vibes",
];

export function TopBanner() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const content = containerRef.current.querySelector(".marquee-content");
    if (content) {
      content.innerHTML += content.innerHTML; // duplicate for seamless loop
    }
  }, []);

  return (
    <div className="w-full overflow-hidden bg-[#6c34c4] text-amber-100">
      <div
        ref={containerRef}
        className="marquee relative flex min-h-[36px] items-center"
        style={{
          maskImage: "linear-gradient(90deg, transparent, black 10%, black 90%, transparent)",
          WebkitMaskImage:
            "linear-gradient(90deg, transparent, black 10%, black 90%, transparent)",
        }}
      >
        <div className="marquee-content flex items-center gap-10 whitespace-nowrap py-2 animate-marquee">
          {messages.map((msg, idx) => (
            <span key={idx} className="flex items-center gap-2 text-sm font-semibold uppercase">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-amber-100 text-[#6c34c4]">
                %
              </span>
              {msg}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

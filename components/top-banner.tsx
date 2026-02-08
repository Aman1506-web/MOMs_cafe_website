"use client";

const items = [
  "Chicken Biryani ₹70",
  "Roasted Wings ₹130",
  "Paneer Tikka ₹130",
  "Veg Thali ₹80",
  "Non-Veg Thali ₹99",
  "Butter Chicken ₹70",
  "Chicken Tikka Roll ₹100",
  "French Fries ₹50",
  "Bao Buns ₹70",
  "Brownie ₹50",
];

function MarqueeRow() {
  return (
    <>
      {items.map((item, idx) => (
        <span key={idx} className="flex items-center gap-8 sm:gap-10">
          <span className="text-[11px] sm:text-xs font-medium uppercase tracking-[0.2em]">
            {item}
          </span>
          <span className="text-[8px] opacity-40">◆</span>
        </span>
      ))}
    </>
  );
}

export function TopBanner() {
  return (
    <div
      className="w-full overflow-hidden"
      style={{ backgroundColor: "#4a9ac7" }}
    >
      <div
        className="relative flex min-h-[38px] items-center"
        style={{
          maskImage:
            "linear-gradient(90deg, transparent, black 5%, black 95%, transparent)",
          WebkitMaskImage:
            "linear-gradient(90deg, transparent, black 5%, black 95%, transparent)",
        }}
      >
        <div className="flex items-center gap-8 sm:gap-10 whitespace-nowrap py-2.5 animate-marquee-slow text-white font-medium">
          <MarqueeRow />
          <MarqueeRow />
          <MarqueeRow />
        </div>
      </div>
    </div>
  );
}

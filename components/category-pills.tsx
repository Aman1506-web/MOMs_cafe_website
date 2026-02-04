"use client";

import { cn } from "@/lib/utils";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useRef } from "react";

type Category = {
  id: string;
  label: string;
  emoji?: string;
};

type Props = {
  categories: Category[];
  variant?: "filled" | "outline";
  onSelect?: (id: string) => void;
};

export function CategoryPills({ categories, onSelect }: Props) {
  const router = useRouter();
  const params = useSearchParams();
  const selected = params.get("category") || categories[0]?.id;
  const scrollRef = useRef<HTMLDivElement>(null);

  // On mount, nudge scroll right then back to hint at more items
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const timeout = setTimeout(() => {
      el.scrollTo({ left: 120, behavior: "smooth" });
      setTimeout(() => {
        el.scrollTo({ left: 0, behavior: "smooth" });
      }, 400);
    }, 500);
    return () => clearTimeout(timeout);
  }, []);

  const handleSelect = (id: string) => {
    onSelect?.(id);
    if (!onSelect) {
      const next = new URLSearchParams(Array.from(params.entries()));
      next.set("category", id);
      router.replace(`?${next.toString()}`, { scroll: false });
    }
  };

  return (
    <div
      ref={scrollRef}
      className="scrollbar-thin flex gap-1 overflow-x-auto pb-2 sm:gap-2"
    >
      {categories.map((cat) => {
        const active = selected === cat.id;
        return (
          <button
            key={cat.id}
            onClick={() => handleSelect(cat.id)}
            className="flex shrink-0 flex-col items-center gap-1 px-3 py-1 transition-all"
          >
            <div
              className={cn(
                "flex h-14 w-14 items-center justify-center rounded-full text-3xl transition-all sm:h-16 sm:w-16 sm:text-4xl lg:h-18 lg:w-18",
                active
                  ? "bg-[#3b2416]/10 shadow-chip"
                  : "bg-white shadow-sm hover:bg-amber-50"
              )}
            >
              {cat.emoji || "🍽️"}
            </div>
            <span
              className={cn(
                "max-w-[72px] truncate text-center text-[11px] font-semibold leading-tight sm:max-w-20 sm:text-xs",
                active ? "text-[#3b2416]" : "text-black/50"
              )}
            >
              {cat.label}
            </span>
            {/* Active underline indicator */}
            <div
              className={cn(
                "h-[2.5px] w-6 rounded-full transition-all",
                active ? "bg-[#3b2416]" : "bg-transparent"
              )}
            />
          </button>
        );
      })}
    </div>
  );
}

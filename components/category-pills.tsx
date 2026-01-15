"use client";

import { cn } from "@/lib/utils";
import { useRouter, useSearchParams } from "next/navigation";

type Category = {
  id: string;
  label: string;
};

type Props = {
  categories: Category[];
  variant?: "filled" | "outline";
  onSelect?: (id: string) => void;
};

export function CategoryPills({ categories, variant = "filled", onSelect }: Props) {
  const router = useRouter();
  const params = useSearchParams();
  const selected = params.get("category") || categories[0]?.id;

  const handleSelect = (id: string) => {
    onSelect?.(id);
    if (!onSelect) {
      const next = new URLSearchParams(Array.from(params.entries()));
      next.set("category", id);
      router.replace(`?${next.toString()}`, { scroll: false });
    }
  };

  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((cat) => {
        const active = selected === cat.id;
        return (
          <button
            key={cat.id}
            onClick={() => handleSelect(cat.id)}
            className={cn(
              "rounded-full px-4 py-2 text-sm font-semibold transition-all shadow-chip",
              variant === "filled"
                ? active
                  ? "bg-brown text-amber-100"
                  : "bg-white text-brown hover:bg-amber-50"
                : active
                  ? "bg-amber-100 text-brown"
                  : "border border-brown/15 bg-cream text-brown hover:bg-amber-50"
            )}
          >
            {cat.label}
          </button>
        );
      })}
    </div>
  );
}

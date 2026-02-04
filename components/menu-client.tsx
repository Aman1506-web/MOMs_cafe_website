"use client";

import { useEffect, useMemo, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { menuItems, categories, type MenuItem } from "@/lib/menu-data";
import { CategoryPills } from "@/components/category-pills";
import { Input } from "@/components/ui/input";
import { ProductCard } from "@/components/product-card";
import { useCartStore } from "@/lib/cart-store";
import { CartDrawer } from "@/components/cart-drawer";
import { PromoBanner } from "@/components/promo-banner";

// Categories considered vegetarian
const VEG_CATEGORIES = new Set([
  "veg-starters",
  "main-course-veg",
  "fries",
  "rice",
  "breads",
  "dessert",
]);

// Items in mixed categories that are veg (matched by name keywords)
function isVegItem(item: MenuItem): boolean {
  if (VEG_CATEGORIES.has(item.category)) return true;
  const name = item.name.toLowerCase();
  // In mixed categories (rolls, bao-buns, rice-bowls), check for veg keywords
  if (
    item.category === "rolls" ||
    item.category === "bao-buns" ||
    item.category === "rice-bowls"
  ) {
    return (
      name.includes("paneer") ||
      name.includes("veg") ||
      name.includes("rajma") ||
      name.includes("chole")
    );
  }
  // Thali: veg thali is veg
  if (item.category === "thali") {
    return name.includes("veg");
  }
  return false;
}

const NON_VEG_CATEGORIES = new Set([
  "non-veg-starters",
  "main-course-non-veg",
]);

function isNonVegItem(item: MenuItem): boolean {
  if (NON_VEG_CATEGORIES.has(item.category)) return true;
  const name = item.name.toLowerCase();
  if (
    item.category === "rolls" ||
    item.category === "bao-buns" ||
    item.category === "rice-bowls"
  ) {
    return (
      name.includes("chicken") ||
      name.includes("mutton") ||
      name.includes("egg")
    );
  }
  if (item.category === "thali") {
    return name.includes("chicken") || name.includes("non-veg");
  }
  return false;
}

type FilterId = "veg" | "nonveg" | "popular" | "under100";

const FILTER_OPTIONS: { id: FilterId; label: string }[] = [
  { id: "veg", label: "Veg Only" },
  { id: "nonveg", label: "Non-Veg" },
  { id: "popular", label: "Popular" },
  { id: "under100", label: "Under ₹100" },
];

export function MenuClient() {
  const params = useSearchParams();
  const router = useRouter();
  const defaultCategory = params.get("category") || categories[0].id;
  const [selected, setSelected] = useState(defaultCategory);
  const [search, setSearch] = useState("");
  const [activeFilters, setActiveFilters] = useState<Set<FilterId>>(new Set());
  const items = useCartStore((s) => s.items);

  const { count, total } = useMemo(() => {
    const count = items.reduce((sum, item) => sum + item.quantity, 0);
    const total = items.reduce(
      (sum, item) => sum + item.quantity * item.price,
      0
    );
    return { count, total };
  }, [items]);

  useEffect(() => {
    router.replace(`?category=${selected}`, { scroll: false });
  }, [selected, router]);

  const toggleFilter = (id: FilterId) => {
    setActiveFilters((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        // veg and nonveg are mutually exclusive
        if (id === "veg") next.delete("nonveg");
        if (id === "nonveg") next.delete("veg");
        next.add(id);
      }
      return next;
    });
  };

  const filtered = useMemo(() => {
    return menuItems.filter((item) => {
      const matchCategory = item.category === selected;
      const matchSearch = item.name
        .toLowerCase()
        .includes(search.toLowerCase());
      if (!matchCategory || !matchSearch) return false;

      // Apply active filters on top
      if (activeFilters.has("veg") && !isVegItem(item)) return false;
      if (activeFilters.has("nonveg") && !isNonVegItem(item)) return false;
      if (activeFilters.has("popular") && !item.badge) return false;
      if (activeFilters.has("under100") && item.price >= 100) return false;

      return true;
    });
  }, [selected, search, activeFilters]);

  return (
    <main className="mx-auto flex max-w-6xl flex-col gap-4 px-4 pb-28 pt-20 sm:px-6 md:gap-5 md:pt-24">
      {/* Promo Banner */}
      <PromoBanner />

      {/* Search Bar */}
      <Input
        placeholder="Search menu items..."
        className="w-full rounded-full border-brown/20 bg-white px-5 py-2.5 shadow-soft"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Category Tabs */}
      <div className="w-full overflow-x-auto">
        <CategoryPills
          categories={categories}
          onSelect={(id) => setSelected(id)}
        />
      </div>

      {/* Filter Chips */}
      <div className="scrollbar-hide flex gap-2 overflow-x-auto">
        {FILTER_OPTIONS.map((f) => {
          const active = activeFilters.has(f.id);
          return (
            <button
              key={f.id}
              onClick={() => toggleFilter(f.id)}
              className={`shrink-0 rounded-full px-4 py-1.5 text-xs font-semibold transition sm:text-sm ${
                active
                  ? "bg-[#3b2416] text-amber-100 shadow-chip"
                  : "border border-[#3b2416]/15 bg-white text-black/70 hover:bg-amber-50"
              }`}
            >
              {f.label}
            </button>
          );
        })}
      </div>

      {/* Product Grid */}
      <div className="grid gap-3 md:grid-cols-2 md:gap-4 lg:grid-cols-3">
        {filtered.map((item: MenuItem) => (
          <ProductCard key={item.id} item={item} />
        ))}
        {filtered.length === 0 ? (
          <div className="col-span-full rounded-xl bg-white p-6 text-center text-sm text-black/60 shadow-soft">
            No items found. Try another category or clear filters.
          </div>
        ) : null}
      </div>

      {/* Floating Cart Button (mobile) */}
      {count > 0 ? (
        <div className="fixed bottom-4 left-0 right-0 z-40 flex justify-center md:hidden">
          <CartDrawer
            triggerClassName="w-[90%] max-w-md justify-between bg-brown text-amber-100 px-5 py-3 text-base hover:-translate-y-0 shadow-soft border-none"
            triggerContent={
              <>
                <div className="flex items-center gap-2">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-amber-100 text-black shadow-chip">
                    {count}
                  </span>
                  <div className="flex flex-col leading-tight">
                    <span className="text-sm font-semibold">
                      {count} item{count === 1 ? "" : "s"}
                    </span>
                    <span className="text-xs text-amber-100/80">₹{total}</span>
                  </div>
                </div>
                <span className="font-semibold">View Cart →</span>
              </>
            }
          />
        </div>
      ) : null}
    </main>
  );
}

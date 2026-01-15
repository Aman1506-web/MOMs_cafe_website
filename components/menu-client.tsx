"use client";

import { useEffect, useMemo, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { menuItems, categories, type MenuItem } from "@/lib/menu-data";
import { CategoryPills } from "@/components/category-pills";
import { Input } from "@/components/ui/input";
import { ProductCard } from "@/components/product-card";
import { useCartStore } from "@/lib/cart-store";
import { CartDrawer } from "@/components/cart-drawer";

export function MenuClient() {
  const params = useSearchParams();
  const router = useRouter();
  const defaultCategory = params.get("category") || categories[0].id;
  const [selected, setSelected] = useState(defaultCategory);
  const [search, setSearch] = useState("");
  const items = useCartStore((s) => s.items);

  const { count, total } = useMemo(() => {
    const count = items.reduce((sum, item) => sum + item.quantity, 0);
    const total = items.reduce((sum, item) => sum + item.quantity * item.price, 0);
    return { count, total };
  }, [items]);

  useEffect(() => {
    const query = new URLSearchParams(params.toString());
    query.set("category", selected);
    router.replace(`?${query.toString()}`, { scroll: false });
  }, [selected, router, params]);

  const filtered = useMemo(() => {
    return menuItems.filter((item) => {
      const matchCategory = item.category === selected;
      const matchSearch = item.name.toLowerCase().includes(search.toLowerCase());
      return matchCategory && matchSearch;
    });
  }, [selected, search]);

  return (
    <main className="mx-auto flex max-w-6xl flex-col gap-5 px-4 pb-14 pt-4 sm:px-6 md:gap-6">
      <div className="rounded-[28px] bg-white p-5 shadow-soft sm:p-6">
        <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
          <div>
            <h1 className="display text-3xl font-extrabold text-brown sm:text-4xl">
              Menu
            </h1>
            <p className="mt-2 text-brown/70">
              Pick your favorites and send the order directly via WhatsApp.
            </p>
          </div>
          <Input
            placeholder="Search items..."
            className="w-full max-w-full rounded-full border-brown/20 bg-amber-50 sm:max-w-sm"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="mt-4 flex flex-col gap-3 md:gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="w-full overflow-x-auto">
            <div className="flex flex-wrap gap-2">
              <CategoryPills categories={categories} onSelect={(id) => setSelected(id)} />
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:gap-5">
        {filtered.map((item: MenuItem) => (
          <ProductCard key={item.id} item={item} />
        ))}
        {filtered.length === 0 ? (
          <div className="rounded-2xl bg-white p-6 text-brown shadow-soft">
            Nothing found. Try another category or search term.
          </div>
        ) : null}
      </div>

      {count > 0 ? (
        <div className="fixed bottom-4 left-0 right-0 z-40 flex justify-center md:hidden">
          <CartDrawer
            triggerClassName="w-[90%] max-w-md justify-between bg-brown text-amber-100 px-5 py-3 text-base hover:-translate-y-0 shadow-soft border-none"
            triggerContent={
              <>
                <div className="flex items-center gap-2">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-amber-100 text-brown shadow-chip">
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

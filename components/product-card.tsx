"use client";

import { MenuItem } from "@/lib/menu-data";
import { useCartStore } from "@/lib/cart-store";
import { Badge } from "@/components/ui/badge";

type Props = {
  item: MenuItem;
};

export function ProductCard({ item }: Props) {
  const addItem = useCartStore((s) => s.addItem);
  const increaseQty = useCartStore((s) => s.increaseQty);
  const decreaseQty = useCartStore((s) => s.decreaseQty);
  const quantity =
    useCartStore((s) => s.items.find((i) => i.id === item.id)?.quantity) || 0;

  return (
    <div className="flex items-center justify-between gap-3 rounded-xl bg-white px-4 py-3 shadow-soft transition hover:shadow-chip sm:px-5 sm:py-4">
      {/* Left: item info */}
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-2">
          <h3 className="truncate text-sm font-bold text-black sm:text-base">
            {item.name}
          </h3>
          {item.badge ? (
            <Badge className="shrink-0 rounded-full bg-sky-blue px-2 py-0 text-[10px] text-black shadow-none">
              {item.badge}
            </Badge>
          ) : null}
        </div>
        {item.description ? (
          <p className="mt-0.5 truncate text-xs text-black/50">
            {item.description}
          </p>
        ) : null}
        <p className="mt-1 text-sm font-extrabold text-black sm:text-base">
          ₹{item.price}
        </p>
      </div>

      {/* Right: ADD button or quantity stepper */}
      <div className="shrink-0">
        {quantity > 0 ? (
          <div className="flex items-center gap-1 rounded-lg border border-[#3b2416]/20 bg-white">
            <button
              className="grid h-8 w-8 place-items-center rounded-l-lg text-sm font-bold text-[#3b2416] transition hover:bg-[#3b2416]/5"
              onClick={() => decreaseQty(item.id)}
              aria-label="Decrease quantity"
            >
              −
            </button>
            <span className="min-w-7 text-center text-sm font-bold text-[#3b2416]">
              {quantity}
            </span>
            <button
              className="grid h-8 w-8 place-items-center rounded-r-lg text-sm font-bold text-[#3b2416] transition hover:bg-[#3b2416]/5"
              onClick={() => increaseQty(item.id)}
              aria-label="Increase quantity"
            >
              +
            </button>
          </div>
        ) : (
          <button
            className="rounded-lg border border-[#3b2416]/20 bg-white px-5 py-1.5 text-sm font-bold uppercase tracking-wide text-[#3b2416] transition hover:bg-[#3b2416]/5"
            onClick={() =>
              addItem({
                id: item.id,
                name: item.name,
                price: item.price,
                category: item.category,
              })
            }
          >
            ADD
          </button>
        )}
      </div>
    </div>
  );
}

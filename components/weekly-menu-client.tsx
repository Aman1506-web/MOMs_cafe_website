"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import {
  vegMenu,
  nonVegMenu,
  specials,
  luckyBonanza,
} from "@/lib/weekly-menu-data";
import type { DayMenu } from "@/lib/weekly-menu-data";

function getTodayIndex(): number {
  const jsDay = new Date().getDay(); // 0=Sun, 1=Mon ... 6=Sat
  return jsDay === 0 ? 6 : jsDay - 1; // Mon=0 ... Sun=6
}

function DayCard({
  day,
  isToday,
}: {
  day: DayMenu;
  isToday: boolean;
}) {
  return (
    <div
      className={cn(
        "rounded-2xl bg-white p-5 shadow-soft transition-all",
        isToday && "ring-2 ring-orange-500 shadow-chip scale-[1.01]"
      )}
    >
      {/* Day header */}
      <div className="flex items-center justify-between">
        <h3 className="display text-lg font-bold text-black">{day.day}</h3>
        {isToday && (
          <span className="rounded-full bg-orange-500 px-3 py-0.5 text-xs font-bold text-white uppercase tracking-wide">
            Today
          </span>
        )}
      </div>

      {/* Lunch */}
      <div className="mt-4">
        <p className="text-[10px] font-semibold uppercase tracking-widest text-black/40 mb-2">
          Lunch
        </p>
        <div className="flex flex-wrap gap-1.5">
          {day.lunch.map((item) => (
            <span
              key={item}
              className="rounded-full bg-cream px-3 py-1 text-sm text-black/80 border border-black/5"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Dinner */}
      <div className="mt-4">
        <p className="text-[10px] font-semibold uppercase tracking-widest text-black/40 mb-2">
          Dinner
        </p>
        <div className="flex flex-wrap gap-1.5">
          {day.dinner.map((item) => (
            <span
              key={item}
              className="rounded-full bg-cream px-3 py-1 text-sm text-black/80 border border-black/5"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function WeeklyMenuClient() {
  const [activeType, setActiveType] = useState<"veg" | "non-veg">("veg");
  const menu = activeType === "veg" ? vegMenu : nonVegMenu;
  const todayIndex = getTodayIndex();

  return (
    <main className="mx-auto max-w-5xl px-4 sm:px-6 pt-24 sm:pt-28 pb-16">
      {/* ─── Header ─── */}
      <div className="text-center mb-8">
        <span className="inline-block rounded-full bg-pink/30 px-4 py-1 text-xs font-bold uppercase tracking-widest text-black/60 mb-3">
          Weekly Thali
        </span>
        <h1 className="display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-black leading-tight">
          This Week&apos;s{" "}
          <span className="text-orange-500">Thali Menu</span>
        </h1>
        <p className="mt-2 text-black/50 text-sm sm:text-base max-w-md mx-auto">
          Ghar jaisa khana, rozana lunch &amp; dinner. Check what&apos;s
          cooking every day of the week.
        </p>
      </div>

      {/* ─── Veg / Non-Veg Toggle ─── */}
      <div className="flex items-center justify-center gap-3 mb-6">
        <button
          onClick={() => setActiveType("veg")}
          className={cn(
            "flex items-center gap-2 rounded-full px-5 py-2.5 display font-bold text-sm transition-all",
            activeType === "veg"
              ? "bg-white border-2 border-green-500 shadow-chip"
              : "bg-white/60 border border-gray-200 hover:border-gray-300"
          )}
        >
          <span className="flex items-center justify-center w-5 h-5 rounded border-2 border-green-600 bg-white">
            <span className="w-2.5 h-2.5 rounded-full bg-green-600" />
          </span>
          Pure Veg
        </button>

        <button
          onClick={() => setActiveType("non-veg")}
          className={cn(
            "flex items-center gap-2 rounded-full px-5 py-2.5 display font-bold text-sm transition-all",
            activeType === "non-veg"
              ? "bg-white border-2 border-red-500 shadow-chip"
              : "bg-white/60 border border-gray-200 hover:border-gray-300"
          )}
        >
          <span className="flex items-center justify-center w-5 h-5 rounded border-2 border-red-600 bg-white">
            <span className="w-2.5 h-2.5 rounded-full bg-red-600" />
          </span>
          Non-Veg
        </button>
      </div>

      {/* ─── Pricing Strip ─── */}
      <div className="flex items-center justify-center gap-6 rounded-2xl bg-white p-4 sm:p-5 shadow-soft mb-8 max-w-sm mx-auto">
        <div className="text-center">
          <p className="display text-2xl sm:text-3xl font-extrabold text-black">
            ₹{menu.pricePerMeal}
          </p>
          <p className="text-[10px] sm:text-xs text-black/40 font-medium uppercase tracking-wide">
            per meal
          </p>
        </div>
        <div className="h-10 w-px bg-black/10" />
        <div className="text-center">
          <p className="display text-2xl sm:text-3xl font-extrabold text-black">
            ₹{menu.pricePerMonth}
          </p>
          <p className="text-[10px] sm:text-xs text-black/40 font-medium uppercase tracking-wide">
            per month
          </p>
        </div>
      </div>

      {/* ─── Day Cards Grid ─── */}
      <div className="grid gap-4 md:grid-cols-2">
        {menu.days.map((day, index) => (
          <DayCard key={day.day} day={day} isToday={index === todayIndex} />
        ))}
      </div>

      {/* ─── Specials ─── */}
      <div className="mt-8 rounded-2xl bg-pink/20 border border-pink/40 p-5 sm:p-6">
        <h3 className="display text-lg font-bold text-black">
          Specials
        </h3>
        <div className="mt-3 flex flex-wrap gap-2">
          {specials.map((s) => (
            <span
              key={s.name}
              className="rounded-full bg-white px-4 py-1.5 text-sm font-semibold shadow-soft border border-pink/30"
            >
              {s.name}
            </span>
          ))}
        </div>
      </div>

      {/* ─── Lucky Bonanza ─── */}
      <div className="mt-6 rounded-2xl bg-sky-blue/20 border border-sky-blue/40 p-5 sm:p-6 text-center">
        <h3 className="display text-xl font-bold text-black">
          {luckyBonanza.description}
        </h3>
        <p className="text-sm text-black/50 mt-1">{luckyBonanza.condition}</p>
        <div className="mt-4 flex flex-wrap justify-center gap-4">
          {luckyBonanza.prizes.map((prize) => (
            <div
              key={prize.label}
              className="rounded-xl bg-white p-4 shadow-soft min-w-[120px]"
            >
              <p className="text-[10px] text-black/40 uppercase font-semibold tracking-wide">
                {prize.label}
              </p>
              <p className="display text-2xl font-extrabold text-black">
                ₹{prize.amount.toLocaleString("en-IN")}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ─── Subscribe CTA ─── */}
      <div className="mt-10 text-center">
        <a
          href="/subscribe"
          className="inline-flex items-center gap-2 rounded-full bg-orange-500 px-8 py-3 display text-base font-bold text-white shadow-lg shadow-orange-500/30 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-orange-500/40 hover:bg-orange-600"
        >
          Subscribe Monthly
        </a>
      </div>
    </main>
  );
}

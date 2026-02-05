"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { ChevronRight } from "lucide-react";
import { useRef, useState, useEffect, useCallback } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { heroSlides } from "@/lib/heroSlides";

gsap.registerPlugin(ScrollTrigger);

const SLIDE_INTERVAL = 3500; // ms
const FADE_DURATION = 500; // ms

/** Café is open 8 AM – 1 AM (next day), closed all day Tuesday. */
function getCafeStatus(): { isOpen: boolean; label: string } {
  const now = new Date();
  const day = now.getDay(); // 0 = Sun, 2 = Tue
  const hour = now.getHours();

  // Tuesday — closed all day
  if (day === 2) return { isOpen: false, label: "Closed today · Opens Wednesday 8 AM" };

  // Open from 8:00 to 00:59 (1 AM next day)
  const isOpen = hour >= 8 || hour < 1;

  if (isOpen) return { isOpen: true, label: "Open now · Taking orders" };

  // Between 1 AM and 8 AM
  return { isOpen: false, label: "Closed now · Opens at 8 AM" };
}

export default function HeroCarousel() {
  const router = useRouter();
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);

  const [activeIndex, setActiveIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const [cafeStatus, setCafeStatus] = useState(getCafeStatus);

  const slide = heroSlides[activeIndex];

  // Transition to a given slide index with fade
  const goToSlide = useCallback(
    (index: number) => {
      if (index === activeIndex || isFading) return;
      setIsFading(true);
      setTimeout(() => {
        setActiveIndex(index);
        setIsFading(false);
      }, FADE_DURATION);
    },
    [activeIndex, isFading]
  );

  // Refresh cafe status every minute
  useEffect(() => {
    const id = setInterval(() => setCafeStatus(getCafeStatus()), 60_000);
    return () => clearInterval(id);
  }, []);

  // Auto-rotation
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setIsFading(true);
      setTimeout(() => {
        setActiveIndex((prev) => (prev + 1) % heroSlides.length);
        setIsFading(false);
      }, FADE_DURATION);
    }, SLIDE_INTERVAL);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  // Reset interval when user clicks a dot
  const handleDotClick = useCallback(
    (index: number) => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      goToSlide(index);
      // Restart auto-rotation
      intervalRef.current = setInterval(() => {
        setIsFading(true);
        setTimeout(() => {
          setActiveIndex((prev) => (prev + 1) % heroSlides.length);
          setIsFading(false);
        }, FADE_DURATION);
      }, SLIDE_INTERVAL);
    },
    [goToSlide]
  );

  // Entrance animations (run once on mount)
  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(headingRef.current?.children || [], {
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
        clearProps: "all",
      });

      tl.from(
        descRef.current,
        {
          y: 25,
          opacity: 0,
          duration: 0.6,
          clearProps: "all",
        },
        0.4
      );

      tl.fromTo(
        buttonsRef.current?.children || [],
        { x: -25, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.45,
          stagger: 0.1,
          clearProps: "all",
        },
        0.6
      );

      tl.from(
        imageContainerRef.current,
        {
          scale: 0.92,
          opacity: 0,
          duration: 0.9,
          clearProps: "all",
        },
        0.35
      );
    },
    { scope: sectionRef }
  );

  const fadeStyle = {
    opacity: isFading ? 0 : 1,
    transition: `opacity ${FADE_DURATION}ms ease-in-out`,
  };

  return (
    <section
      ref={sectionRef}
      className="
        relative overflow-x-clip
        grid grid-cols-1 lg:grid-cols-2
        items-start lg:items-center
        gap-4 lg:gap-10
        px-4 sm:px-6 lg:px-12
        pt-24 sm:pt-28 lg:pt-24
        min-h-[auto] lg:min-h-[85vh]
      "
      style={{
        backgroundImage: "url('/images/hero-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Decorative Sketch — right side */}
      <img
        src="/decor/cafe-sketch.png"
        alt=""
        className="
          pointer-events-none select-none absolute z-0
          right-[-120px] top-[50%] -translate-y-1/3
          w-[440px] opacity-[0.1]
          lg:w-[800px] lg:top-[10%] lg:right-[-220px]
        "
      />

      {/* Decorative Coffee Cup — left side behind text */}
      <img
        src="/decor/coffee-cup.png"
        alt=""
        className="
          pointer-events-none select-none absolute z-0
          w-[140px] opacity-[0.12] rotate-[18deg]
          -left-6 top-[22%]
          sm:w-[180px] sm:-left-8 sm:top-[20%]
          lg:w-[280px] lg:opacity-[0.10] lg:rotate-[22deg]
          lg:-left-10 lg:top-auto lg:bottom-[5%]
          drop-shadow-sm
        "
      />

      {/* TEXT CONTENT */}
      <div
        className="
          order-1 lg:order-0
          relative z-10
          flex flex-col
          items-center text-center
          lg:items-start lg:text-left
          gap-2 sm:gap-3
          lg:pl-12
        "
      >
        {/* Live status badge */}
        <span
          className={`
            inline-flex items-center gap-1.5
            px-2.5 py-1 sm:px-3.5 sm:py-1.5 lg:px-4 lg:py-1.5
            rounded-full backdrop-blur-sm shadow-sm border
            ${cafeStatus.isOpen
              ? "bg-green-50/90 border-green-300"
              : "bg-red-50/90 border-red-300"
            }
          `}
        >
          <span className="relative flex h-1.5 w-1.5 sm:h-2 sm:w-2">
            {cafeStatus.isOpen && (
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
            )}
            <span className={`relative inline-flex rounded-full h-1.5 w-1.5 sm:h-2 sm:w-2 ${cafeStatus.isOpen ? "bg-green-500" : "bg-red-400"}`}></span>
          </span>
          <span className={`text-[9px] sm:text-[10px] lg:text-xs font-semibold uppercase tracking-wider ${cafeStatus.isOpen ? "text-green-800" : "text-red-700"}`}>
            {cafeStatus.label}
          </span>
        </span>

        {/* Dynamic heading — fades with slide */}
        <h1
          ref={headingRef}
          className="display font-bold leading-[1.1] text-2xl sm:text-5xl lg:text-6xl lg:whitespace-nowrap"
          style={fadeStyle}
        >
          <span className="inline-block">
            <span>{slide.line1Word1}</span>
            {" "}{slide.line1Rest}
          </span>
          <br />
          <span className="inline-block mt-1 sm:mt-2 lg:mt-0">
            {slide.line2Start}{" "}
            <span className="text-orange-500">{slide.line2Highlight}</span>
          </span>
        </h1>

        {/* Dynamic description — fades with slide */}
        <p
          ref={descRef}
          className="display text-gray-600 text-xs sm:text-lg lg:text-xl max-w-xs sm:max-w-md lg:max-w-lg leading-relaxed"
          style={fadeStyle}
        >
          {slide.description}
        </p>

        {/* Veg / Non-Veg pricing cards */}
        <div className="flex flex-wrap justify-center lg:justify-start gap-2 sm:gap-3 lg:gap-4">
          <div className="flex items-center gap-1.5 sm:gap-2 lg:gap-3 px-2.5 py-1.5 sm:px-4 sm:py-2.5 lg:px-5 lg:py-3 rounded-lg sm:rounded-xl bg-white/90 backdrop-blur-sm border border-green-200 shadow-sm">
            <span className="flex items-center justify-center w-4 h-4 sm:w-6 sm:h-6 lg:w-7 lg:h-7 rounded border-2 border-green-600 bg-white">
              <span className="w-2 h-2 sm:w-3 sm:h-3 lg:w-3.5 lg:h-3.5 rounded-full bg-green-600"></span>
            </span>
            <div className="flex flex-col">
              <span className="text-[9px] sm:text-xs lg:text-sm font-medium text-gray-500 uppercase">Pure Veg</span>
              <span className="text-xs sm:text-base lg:text-lg font-bold text-gray-800">₹80<span className="text-[10px] sm:text-xs lg:text-sm font-normal text-gray-500">/meal</span></span>
            </div>
          </div>

          <div className="flex items-center gap-1.5 sm:gap-2 lg:gap-3 px-2.5 py-1.5 sm:px-4 sm:py-2.5 lg:px-5 lg:py-3 rounded-lg sm:rounded-xl bg-white/90 backdrop-blur-sm border border-red-200 shadow-sm">
            <span className="flex items-center justify-center w-4 h-4 sm:w-6 sm:h-6 lg:w-7 lg:h-7 rounded border-2 border-red-600 bg-white">
              <span className="w-2 h-2 sm:w-3 sm:h-3 lg:w-3.5 lg:h-3.5 rounded-full bg-red-600"></span>
            </span>
            <div className="flex flex-col">
              <span className="text-[9px] sm:text-xs lg:text-sm font-medium text-gray-500 uppercase">Non-Veg</span>
              <span className="text-xs sm:text-base lg:text-lg font-bold text-gray-800">₹90<span className="text-[10px] sm:text-xs lg:text-sm font-normal text-gray-500">/meal</span></span>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="flex flex-wrap justify-center lg:justify-start gap-x-3 gap-y-1 text-[10px] sm:text-xs text-gray-600">
          <span className="flex items-center gap-1">
            <svg className="w-3.5 h-3.5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            Weekly Menu
          </span>
          <span className="flex items-center gap-1">
            <svg className="w-3.5 h-3.5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            Lunch & Dinner
          </span>
          <span className="flex items-center gap-1">
            <svg className="w-3.5 h-3.5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            Monthly Plans
          </span>
        </div>

        <div
          ref={buttonsRef}
          className="mt-3 sm:mt-5 flex flex-col sm:flex-row gap-2.5 items-center sm:items-start"
        >
          <Button
            className="
              group relative overflow-hidden
              rounded-full
              bg-orange-500
              text-white
              font-bold
              px-5 py-2.5 sm:px-7 sm:py-3
              shadow-lg shadow-orange-500/30
              transition-all duration-300
              hover:-translate-y-1 hover:shadow-xl hover:shadow-orange-500/40 hover:bg-orange-600
            "
            onClick={() => router.push("/menu")}
          >
            <span className="display text-xs sm:text-base font-extrabold uppercase tracking-wide">
              View This Week&apos;s Menu
            </span>
            <ChevronRight strokeWidth={3} className="ml-1 h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:translate-x-1" />
          </Button>

          <Button
            className="
              group flex items-center gap-1.5
              text-xs sm:text-base
              text-gray-700
              display font-semibold
              bg-white/80 backdrop-blur-sm
              border border-gray-200
              rounded-full
              px-4 py-2 sm:px-5 sm:py-2.5
              hover:bg-white hover:border-gray-300
              transition-all duration-300
            "
            onClick={() => router.push("/subscribe")}
          >
            Subscribe Monthly
            <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>

      </div>

      {/* IMAGE CONTENT */}
      <div
        ref={imageContainerRef}
        className="
          order-3 lg:order-0
          relative
          w-full
          h-[300px] sm:h-[360px] md:h-[480px] lg:h-[720px]
          flex items-start lg:items-end
          justify-center
          mt-1 lg:mt-0
          z-10
        "
      >
        <div className="absolute bottom-4 sm:bottom-8 lg:bottom-10 h-32 w-[240px] sm:h-44 sm:w-[300px] lg:h-40 lg:w-[390px] rounded-full bg-black/40 blur-3xl z-20" />

        {/* Green Chilli decoration - left side */}
        {/* <Image
          src="/images/green-chilli.png"
          alt=""
          width={100}
          height={100}
          className="
            absolute pointer-events-none select-none z-30
            w-12 sm:w-16 lg:w-24
            -left-2 sm:left-0 lg:-left-4
            top-1/3 sm:top-1/4 lg:top-1/3
            -rotate-45
            drop-shadow-lg
          "
        /> */}

        {/* Green Chilli decoration - right side */}
        {/* <Image
          src="/images/green-chilli.png"
          alt=""
          width={80}
          height={80}
          className="
            absolute pointer-events-none select-none z-30
            w-10 sm:w-14 lg:w-20
            -right-1 sm:right-2 lg:right-0
            bottom-1/4 sm:bottom-1/3 lg:bottom-1/4
            rotate-[135deg]
            drop-shadow-lg
          "
        /> */}

        {/* Dynamic food image — fades with slide */}
        <div className="absolute inset-0 z-10" style={fadeStyle}>
          <Image
            src={slide.image}
            alt={slide.line2Highlight}
            fill
            className={`object-contain object-center lg:scale-105 scale-105 ${slide.imageClassName ?? ""}`}
          />
        </div>
      </div>

      {/* Carousel indicator dots — inline on mobile, absolute bottom-center on desktop */}
      <div className="order-2 lg:order-0 flex items-center justify-center gap-2 mt-3 sm:mt-4 lg:absolute lg:bottom-16 lg:left-1/2 lg:-translate-x-1/2 lg:mt-0 lg:z-20">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`
              rounded-full transition-all duration-300
              ${
                index === activeIndex
                  ? "w-6 h-2 sm:w-8 sm:h-3 bg-orange-500"
                  : "w-2 h-2 sm:w-3 sm:h-3 bg-gray-300 hover:bg-gray-400"
              }
            `}
          />
        ))}
      </div>

      {/* Bottom gradient fade to blend with next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 sm:h-40 lg:h-48 bg-linear-to-t from-pink-100 via-pink-100/80 to-transparent pointer-events-none z-0" />
    </section>
  );
}

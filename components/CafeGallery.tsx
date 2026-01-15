"use client";

import { useState } from "react";
import Image from "next/image";

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: "food" | "ambiance" | "drinks" | "desserts";
}

export default function CafeGallery() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const images: GalleryImage[] = [
    { id: 1, src: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=800&q=80", alt: "Gourmet Burger", category: "food" },
    { id: 2, src: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&q=80", alt: "Pizza Slice", category: "food" },
    { id: 3, src: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&q=80", alt: "Cafe Interior", category: "ambiance" },
    { id: 4, src: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800&q=80", alt: "Coffee Art", category: "drinks" },
    { id: 5, src: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&q=80", alt: "Delicious Cake", category: "desserts" },
    { id: 6, src: "https://images.unsplash.com/photo-1481931715705-36f5f79f1f3d?w=800&q=80", alt: "Fresh Pasta", category: "food" },
    { id: 7, src: "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?w=800&q=80", alt: "Cozy Corner", category: "ambiance" },
    { id: 8, src: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=800&q=80", alt: "Cold Brew", category: "drinks" },
    { id: 9, src: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=800&q=80", alt: "Breakfast Spread", category: "food" },
    { id: 10, src: "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?w=800&q=80", alt: "Cupcakes", category: "desserts" },
    { id: 11, src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80", alt: "Restaurant Ambiance", category: "ambiance" },
    { id: 12, src: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=800&q=80", alt: "Smoothie Bowl", category: "drinks" },
  ];

  const categories = [
    { id: "all", label: "All" },
    { id: "food", label: "Food" },
    { id: "drinks", label: "Drinks" },
    { id: "desserts", label: "Desserts" },
    { id: "ambiance", label: "Ambiance" },
  ];

  const filteredImages = activeCategory === "all" 
    ? images 
    : images.filter(img => img.category === activeCategory);

  return (
    <section className="relative px-4 sm:px-6 lg:px-12 py-16 lg:py-24 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-200/20 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-200/20 rounded-full blur-3xl -z-10" />

      {/* Section Header */}
      <div className="text-center mb-8 lg:mb-16">
        <div className="inline-flex items-center gap-2 bg-yellow-400 text-brown px-6 py-2 rounded-full mb-6 shadow-lg">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M4 3a2 2 0 100 4h12a2 2 0 100-4H4z" />
            <path fillRule="evenodd" d="M3 8h14v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8zm5 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" clipRule="evenodd" />
          </svg>
          <span className="text-sm lg:text-base font-bold uppercase tracking-wider">
            Visual Journey
          </span>
        </div>

        <h2 className="display text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
          Explore Our{" "}
          <span className="text-yellow-500">Gallery</span>
        </h2>
        <div className="mx-auto mt-4 h-1 w-32 rounded-full bg-yellow-400" />
        
        <p className="mt-6 text-gray-600 text-lg lg:text-xl max-w-2xl mx-auto">
          Every dish tells a story, every corner invites you in
        </p>
      </div>

      {/* Category Filter - Horizontal Scroll on Mobile */}
      <div className="mb-8 lg:mb-12">
        <div className="flex lg:justify-center gap-3 overflow-x-auto py-4 scrollbar-hide snap-x snap-mandatory lg:flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`
                flex-shrink-0 snap-start
                px-5 py-2.5 lg:px-6 lg:py-3 
                rounded-full font-bold text-sm lg:text-lg
                border-2 transition-all duration-300
                ${activeCategory === cat.id
                  ? "bg-yellow-400 text-brown border-brown/70 shadow-lg scale-105"
                  : "bg-white text-brown/70 border-brown/30 hover:border-brown/50 hover:scale-105"
                }
              `}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* MOBILE: Horizontal Scroll Cards */}
      <div className="lg:hidden">
        <div className="flex gap-4 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-hide -mx-4 px-4">
          {filteredImages.map((image, index) => (
            <div
              key={image.id}
              className="flex-shrink-0 w-[85vw] sm:w-[70vw] snap-center"
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              <div className="group relative overflow-hidden rounded-3xl h-[420px] sm:h-[480px] cursor-pointer shadow-xl hover:shadow-2xl transition-all duration-500">
                {/* Image */}
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />

                {/* Gradient Overlay - Always visible on mobile for readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="inline-block px-3 py-1 bg-yellow-400 text-brown text-xs font-bold rounded-full mb-3 uppercase">
                      {image.category}
                    </div>
                    <h3 className="text-white font-bold text-2xl mb-2">
                      {image.alt}
                    </h3>
                    {/* Swipe indicator */}
                    {index === 0 && (
                      <div className="flex items-center gap-2 text-white/70 text-sm mt-3">
                        <svg className="w-5 h-5 animate-bounce-horizontal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                        <span>Swipe to explore</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Corner accent */}
                <div className="absolute top-4 right-4 w-12 h-12 border-t-4 border-r-4 border-yellow-400" />
              </div>
            </div>
          ))}
        </div>

        {/* Scroll indicator dots */}
        <div className="flex justify-center gap-2 mt-6">
          {filteredImages.slice(0, 5).map((_, index) => (
            <div
              key={index}
              className="w-2 h-2 rounded-full bg-brown/30"
            />
          ))}
          {filteredImages.length > 5 && (
            <div className="w-2 h-2 rounded-full bg-yellow-400" />
          )}
        </div>
      </div>

      {/* DESKTOP: Masonry Grid */}
      <div className="hidden lg:grid grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredImages.map((image, index) => {
          const isLarge = index % 7 === 0;
          const isWide = index % 5 === 0 && index !== 0;
          const isTall = index % 9 === 0 && index !== 0;
          
          return (
            <div
              key={image.id}
              className={`
                ${isLarge ? "col-span-2 row-span-2" : ""}
                ${isWide ? "col-span-2" : ""}
                ${isTall ? "row-span-2" : ""}
                group relative overflow-hidden rounded-3xl
                cursor-pointer
                transform transition-all duration-500
                hover:scale-105 hover:z-10 hover:shadow-2xl
                h-80
                gallery-fade-in
              `}
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              {/* Image */}
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />

              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="inline-block px-3 py-1 bg-yellow-400 text-brown text-xs font-bold rounded-full mb-2 uppercase">
                    {image.category}
                  </div>
                  <h3 className="text-white font-bold text-2xl">
                    {image.alt}
                  </h3>
                </div>
              </div>

              {/* Corner accent */}
              <div className="absolute top-4 right-4 w-12 h-12 border-t-4 border-r-4 border-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          );
        })}
      </div>

      {/* CTA Button */}
      <div className="text-center mt-12 lg:mt-20">
        <button className="group relative overflow-hidden rounded-full border-2 border-brown/70 bg-yellow-400 px-8 py-4 text-brown shadow-lg transition hover:-translate-y-1 hover:shadow-xl">
          <span className="relative z-10 display text-lg lg:text-xl font-extrabold uppercase tracking-wide inline-flex items-center gap-2">
            View Full Gallery
            <svg className="w-6 h-6 transition-transform group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </span>
          <span className="absolute inset-0 hero-shine-effect" />
        </button>
      </div>
    </section>
  );
}

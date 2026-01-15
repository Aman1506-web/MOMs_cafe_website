"use client";

import { useState, useEffect } from "react";
import { X, Sparkles, ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

export default function OfferPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Check if popup was already shown in this session
    const popupShown = sessionStorage.getItem("offerPopupShown");
    if (popupShown) {
      return; // Already shown, don't add scroll listener
    }

    let hasTriggered = false;

    const handleScroll = () => {
      // Show popup after scrolling 300px down
      if (window.scrollY > 800 && !hasTriggered) {
        hasTriggered = true;
        setIsVisible(true);
        sessionStorage.setItem("offerPopupShown", "true");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  const handleOfferClick = () => {
    router.push("/menu?category=burger");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 animate-in fade-in duration-300"
        onClick={handleClose}
      />

      {/* Popup */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
        <div
          className="relative bg-gradient-to-br from-yellow-400 via-orange-400 to-red-500 rounded-3xl shadow-2xl max-w-md w-full overflow-hidden pointer-events-auto animate-in zoom-in-95 duration-400"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 z-10 bg-white/90 hover:bg-white rounded-full p-2 transition-all hover:scale-110 shadow-lg cursor-pointer"
            aria-label="Close popup"
          >
            <X className="w-5 h-5 text-gray-800" />
          </button>

          {/* Decorative Elements */}
          <div className="absolute top-0 left-0 w-32 h-32 bg-white/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-40 h-40 bg-yellow-300/30 rounded-full blur-3xl" />

          {/* Content */}
          <div className="relative p-8 text-center">
            {/* Icon */}
            <div className="flex justify-center mb-4">
              <div className="bg-white rounded-full p-4 shadow-xl animate-bounce">
                <Sparkles className="w-8 h-8 text-orange-500" />
              </div>
            </div>

            {/* Badge */}
            <div className="inline-block bg-white/95 backdrop-blur px-4 py-1.5 rounded-full mb-4 shadow-lg">
              <span className="text-xs font-bold text-orange-600 uppercase tracking-wider">
                🎉 Limited Time Offer
              </span>
            </div>

            {/* Main Text */}
            <h2 className="text-4xl font-bold text-white mb-3 drop-shadow-lg">
              50% OFF
            </h2>
            
            <p className="text-xl font-semibold text-white/95 mb-2">
              On All Burgers!
            </p>
            
            <p className="text-white/90 text-sm mb-6">
              Everything for your burger cravings
              <br />
              See menu for details. 
            </p>

            {/* CTA Button */}
            <button
              onClick={handleOfferClick}
              className="group relative bg-white text-orange-600 font-bold px-8 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1 overflow-hidden"
            >
              <span className="relative z-10 flex items-center justify-center gap-2 text-lg">
                Shop Now
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </span>
              
              {/* Shine effect */}
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            </button>

            {/* Fine Print */}
            <p className="text-white/70 text-xs mt-4">
              *Valid until stocks last. T&C apply
            </p>
          </div>

          {/* Bottom Decorative Wave */}
          <svg
            className="absolute bottom-0 left-0 w-full"
            viewBox="0 0 1440 100"
            preserveAspectRatio="none"
          >
            <path
              fill="rgba(255, 255, 255, 0.1)"
              d="M0,50 C240,80 480,20 720,50 C960,80 1200,20 1440,50 L1440,100 L0,100 Z"
            />
          </svg>
        </div>
      </div>
    </>
  );
}
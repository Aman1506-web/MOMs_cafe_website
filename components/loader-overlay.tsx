"use client";

export function LoaderOverlay() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-cream">
      <div className="relative flex size-36 items-center justify-center">
        <div className="absolute inset-0 rounded-full border-4 border-amber-200" />
        <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-orange animate-spin" />
        <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-brown text-amber-100 shadow-soft">
          <span className="display text-lg font-extrabold">BHC</span>
        </div>
      </div>
    </div>
  );
}

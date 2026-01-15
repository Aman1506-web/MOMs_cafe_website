import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-10 bg-brown text-amber-50">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-8 sm:px-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="display text-xl font-extrabold">Bakehouse Café</p>
          <p className="text-sm text-amber-100/80">
            Cozy bakes, bold coffee, and colorful bites.
          </p>
        </div>
        <div className="flex items-center gap-3 text-sm">
          <Link href="/about" className="hover:text-yellow">
            About
          </Link>
          <Link href="/contact" className="hover:text-yellow">
            Contact
          </Link>
          <Link href="/menu" className="rounded-full bg-yellow px-3 py-2 font-semibold text-brown shadow-chip hover:bg-yellow/90">
            Start Order
          </Link>
        </div>
      </div>
    </footer>
  );
}

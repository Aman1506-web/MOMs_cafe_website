import Image from "next/image";
import Link from "next/link";
import { SectionWrapper } from "./section-wrapper";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { cn } from "@/lib/utils";

// export function ReservePromo() {
//   return (
//     <SectionWrapper className="mt-6">
//       <div className="grid gap-6 overflow-hidden rounded-[28px] bg-brown text-amber-50 shadow-soft md:grid-cols-[1fr_1.1fr]">
//         <div className="relative min-h-[240px]">
//           <Image
//             src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=900&q=80&auto=format&fit=crop"
//             alt="Restaurant interior"
//             fill
//             className="object-cover"
//           />
//           <div className="absolute inset-0 bg-gradient-to-r from-brown/70 to-transparent" />
//         </div>
//         <div className="flex flex-col justify-center gap-4 p-6 sm:p-10">
//           <p className="display text-sm uppercase tracking-wide text-yellow">
//             Reserve a table
//           </p>
//           <h2 className="display text-3xl font-extrabold leading-tight">
//             Bring friends for coffee dates & cozy dinners.
//           </h2>
//           <p className="max-w-2xl text-base text-amber-100/80">
//             Lock your slot, share your cravings, and we’ll keep your favorite
//             bakes warm when you walk in.
//           </p>
//           <div className="flex flex-wrap gap-3">
//             <Link href="/reserve">
//               <Button className="rounded-full bg-yellow text-black shadow-chip hover:bg-yellow/90">
//                 Reserve Table
//               </Button>
//             </Link>
//             <Badge className="rounded-full bg-amber-100/20 text-amber-50">
//               Instant WhatsApp confirmation
//             </Badge>
//           </div>
//         </div>
//       </div>
//     </SectionWrapper>
//   );
// }

const featured = [
  {
    title: "Bagel with Seeds",
    color: "bg-yellow",
    img: "https://images.unsplash.com/photo-1481391319762-47dff72954d9?w=600&q=80&auto=format&fit=crop",
  },
  {
    title: "Sliced Rustic Bread",
    color: "bg-sky",
    img: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&q=80&auto=format&fit=crop",
  },
  {
    title: "Chunky Cookies",
    color: "bg-orange",
    img: "https://images.unsplash.com/photo-1481391032119-d89fee407e44?w=600&q=80&auto=format&fit=crop",
  },
];

export function FeaturedBakes() {
  return (
    <SectionWrapper className="mt-10 space-y-4">
      <div className="flex flex-col gap-2">
        <p className="display text-sm font-semibold text-black/70">
          Product we bake here daily
        </p>
        <h2 className="display text-3xl font-extrabold text-black sm:text-4xl">
          Fresh batches, morning to evening.
        </h2>
        <p className="max-w-2xl text-black/70">
          Choose from sourdough loaves, pretzels, cookies, and special cruffins.
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {featured.map((item) => (
          <div
            key={item.title}
            className={cn(
              "relative overflow-hidden rounded-[26px] p-4 shadow-soft",
              item.color
            )}
          >
            <div className="absolute right-3 top-3 rounded-full bg-brown/80 px-3 py-1 text-xs font-bold text-amber-100 shadow-chip">
              Daily
            </div>
            <div className="relative h-48 w-full">
              <Image
                src={item.img}
                alt={item.title}
                fill
                className="rounded-[18px] object-cover"
              />
            </div>
            <p className="mt-3 display text-xl font-extrabold text-black">
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}

export function CravingPills() {
  const pills = [
    { label: "Pizza", href: "/menu?category=pizza" },
    { label: "Pasta", href: "/menu?category=pasta" },
    { label: "Burgers", href: "/menu?category=burgers" },
    { label: "Momos", href: "/menu?category=momos" },
    { label: "Drinks", href: "/menu?category=drinks" },
  ];
  return (
    <SectionWrapper className="mt-6">
      <div className="flex flex-col gap-3 rounded-[24px] bg-white p-5 shadow-soft md:flex-row md:items-center md:justify-between">
        <div>
          <p className="display text-xl font-extrabold text-black">
            What are you craving today?
          </p>
          <p className="text-black/70">
            Jump straight to a category and build your order.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          {pills.map((pill) => (
            <Link
              key={pill.label}
              href={pill.href}
              className="rounded-full bg-amber-100 px-4 py-2 text-sm font-semibold text-black shadow-chip hover:bg-yellow"
            >
              {pill.label}
            </Link>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}

export function StaffSection() {
  return (
    <SectionWrapper className="mt-10">
      <div className="grid gap-6 rounded-[28px] bg-brown text-amber-50 shadow-soft md:grid-cols-[1fr_0.9fr]">
        <div className="relative min-h-[260px]">
          <Image
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=900&q=80&auto=format&fit=crop"
            alt="Chef at work"
            fill
            className="object-cover"
          />
          <div className="absolute left-4 top-4 rounded-full bg-yellow px-3 py-1 text-xs font-bold text-black shadow-chip">
            COMBO
          </div>
        </div>
        <div className="flex flex-col justify-center gap-4 p-6 sm:p-10">
          <h3 className="display text-3xl font-extrabold leading-tight">
            Chefs who love the craft.
          </h3>
          <p className="text-amber-100/80">
            Our team of bakers and baristas fold, whisk, and brew with real
            butter, organic flour, and single-origin beans.
          </p>
          <p className="rounded-2xl bg-white/10 p-4 text-sm italic text-amber-100">
            “Baking is a craft in itself, and we love these delicate flavors.” —
            Ashton Cooper, Head Baker
          </p>
          <Button className="w-fit rounded-full bg-yellow text-black shadow-chip hover:bg-yellow/90">
            Meet the team
          </Button>
        </div>
      </div>
    </SectionWrapper>
  );
}

export function WhyChooseUs() {
  const cards = [
    {
      title: "Fresh ingredients",
      desc: "Organic flour, cultured butter, house-roasted beans daily.",
    },
    {
      title: "Cozy ambience",
      desc: "Warm lighting, soft jazz playlists, and cushiony booths.",
    },
    {
      title: "Quick service",
      desc: "Order at table, pickup counter, or WhatsApp without queues.",
    },
  ];
  return (
    <SectionWrapper className="mt-10">
      <div className="rounded-[30px] bg-brown p-6 text-amber-50 shadow-soft sm:p-10">
        <h3 className="display text-3xl font-extrabold">
          Why our café is so special to customers?
        </h3>
        <p className="mt-2 max-w-3xl text-amber-100/80">
          Crafted spaces, playful colors, and a menu that hugs you back. We keep
          every batch small so it stays warm when you arrive.
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {cards.map((card) => (
            <div
              key={card.title}
              className="rounded-2xl bg-white/10 p-4 shadow-soft backdrop-blur"
            >
              <p className="display text-xl font-extrabold text-yellow">
                {card.title}
              </p>
              <p className="text-sm text-amber-100/80">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}

export function ReviewsSection() {
  return (
    <SectionWrapper className="mt-10">
      <div className="rounded-[26px] bg-sky p-6 shadow-soft">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="display text-2xl font-extrabold text-black">
              “With enough butter, anything is good!”
            </p>
            <p className="text-black/70">
              Our guests say the same after the first bite of our chunky
              cookies.
            </p>
          </div>
          <div className="rounded-full bg-white px-4 py-2 text-black shadow-chip">
            <span className="display text-xl font-extrabold">4.7</span>
            <span className="ml-2 text-sm text-black/70">
              Based on 350+ reviews
            </span>
          </div>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {["Plain Cake", "Croissant", "Cookies", "Pretzel", "Apple Pie"].map(
            (pill) => (
              <span
                key={pill}
                className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-black shadow-chip"
              >
                {pill}
              </span>
            )
          )}
        </div>
      </div>
    </SectionWrapper>
  );
}

export function VisitSection() {
  return (
    <SectionWrapper className="mt-10 mb-16 px-4 sm:px-6">
      <div
        className="relative overflow-hidden rounded-3xl p-5 sm:p-8 md:p-10 lg:p-12 shadow-soft border-2"
        style={{ background: "#eda6c4", borderColor: "rgba(137,207,240,0.5)" }}
      >
        {/* Decorative elements */}
        <div className="absolute -right-20 -top-20 h-40 w-40 sm:h-64 sm:w-64 rounded-full opacity-40" style={{ background: "#fdffce", filter: "blur(60px)" }} />
        <div className="absolute -bottom-20 -left-20 h-40 w-40 sm:h-64 sm:w-64 rounded-full opacity-40" style={{ background: "#89cff0", filter: "blur(60px)" }} />

        {/* Header */}
        <div className="relative mb-6 sm:mb-8 md:mb-10 text-center">
          <p className="display mb-2 text-xs sm:text-sm font-semibold uppercase tracking-widest" style={{ color: "#3b2416" }}>
            Come Say Hello
          </p>
          <h2 className="display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold" style={{ color: "#3b2416" }}>
            Visit Our Cafe
          </h2>
          <div className="mx-auto mt-3 sm:mt-4 h-1 w-12 sm:w-16 rounded-full" style={{ background: "linear-gradient(to right, #fdffce, #89cff0)" }} />
        </div>

        <div className="relative grid gap-6 md:grid-cols-2 lg:gap-10">
          {/* Left: Info Cards */}
          <div className="space-y-4 sm:space-y-5">
            {/* Address Card */}
            <div className="rounded-2xl p-4 sm:p-5 transition-all shadow-sm" style={{ background: "#fdffce" }}>
              <div className="mb-2 sm:mb-3 flex items-center gap-3">
                <div className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full" style={{ background: "#89cff0" }}>
                  <svg className="h-4 w-4 sm:h-5 sm:w-5" style={{ color: "#3b2416" }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <p className="display text-base sm:text-lg font-bold" style={{ color: "#3b2416" }}>Location</p>
              </div>
              <p className="text-sm sm:text-base leading-relaxed pl-12 sm:pl-13" style={{ color: "#3b2416" }}>
                89 Bara Bazar Marg<br />
                Old Rajinder Nagar, New Delhi
              </p>
            </div>

            {/* Hours Card */}
            <div className="rounded-2xl p-4 sm:p-5 transition-all shadow-sm" style={{ background: "#fdffce" }}>
              <div className="mb-2 sm:mb-3 flex items-center gap-3">
                <div className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full" style={{ background: "#89cff0" }}>
                  <svg className="h-4 w-4 sm:h-5 sm:w-5" style={{ color: "#3b2416" }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <p className="display text-base sm:text-lg font-bold" style={{ color: "#3b2416" }}>Hours</p>
              </div>
              <div className="space-y-1 text-sm sm:text-base" style={{ color: "#3b2416" }}>
                <p className="flex justify-between gap-4">
                  <span>Mon - Fri</span>
                  <span className="font-semibold">8:00 AM - 10:00 PM</span>
                </p>
                <p className="flex justify-between gap-4">
                  <span>Sat - Sun</span>
                  <span className="font-semibold">9:00 AM - 11:00 PM</span>
                </p>
              </div>
            </div>

            {/* Contact Card */}
            <div className="rounded-2xl p-4 sm:p-5 transition-all shadow-sm" style={{ background: "#fdffce" }}>
              <div className="mb-2 sm:mb-3 flex items-center gap-3">
                <div className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full" style={{ background: "#89cff0" }}>
                  <svg className="h-4 w-4 sm:h-5 sm:w-5" style={{ color: "#3b2416" }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <p className="display text-base sm:text-lg font-bold" style={{ color: "#3b2416" }}>Contact</p>
              </div>
              <div className="text-sm sm:text-base pl-12 sm:pl-13 space-y-0.5" style={{ color: "#3b2416" }}>
                <p>+91 98765 43210</p>
                <p>hello@momscafe.in</p>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-1">
              <p className="text-xs sm:text-sm font-medium" style={{ color: "#3b2416" }}>Follow us:</p>
              <div className="flex gap-2">
                {socialLinks.map((social) => (
                  <span
                    key={social.name}
                    aria-label={social.name}
                    className="flex h-9 w-9 sm:h-10 sm:w-10 cursor-pointer items-center justify-center rounded-full transition-all hover:scale-110"
                    style={{ background: "#89cff0", color: "#3b2416" }}
                  >
                    <SocialIcon name={social.icon} />
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Map */}
          <div className="relative mt-2 md:mt-0">
            <div className="absolute -inset-1 rounded-2xl opacity-60" style={{ background: "linear-gradient(to right, #fdffce, #89cff0)", filter: "blur(8px)" }} />
            <div className="relative h-64 sm:h-72 md:h-full md:min-h-[300px] overflow-hidden rounded-2xl p-1.5" style={{ background: "#fdffce" }}>
              <iframe
                title="Mom's Cafe Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.8!2d77.1823!3d28.6423!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d029c2bad7577%3A0x6b7f7a8b8a8b8a8b!2sOld%20Rajinder%20Nagar%2C%20New%20Delhi!5e0!3m2!1sen!2sin!4v1700000000000"
                className="h-full w-full rounded-xl border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="relative mt-6 sm:mt-8 md:mt-10 flex flex-col items-center justify-center gap-3 sm:gap-4 rounded-2xl p-4 sm:p-6 text-center sm:flex-row sm:text-left" style={{ background: "#fdffce" }}>
          <div className="flex-1">
            <p className="display text-lg sm:text-xl font-bold" style={{ color: "#3b2416" }}>
              Ready to taste the love?
            </p>
            <p className="text-sm sm:text-base" style={{ color: "#3b2416", opacity: 0.8 }}>
              Reserve your table or order online
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 w-full sm:w-auto">
            <Link href="/reserve" className="w-full sm:w-auto">
              <Button className="w-full sm:w-auto rounded-full px-5 sm:px-6 py-2.5 sm:py-3 font-bold shadow-chip transition-all hover:opacity-90" style={{ background: "#89cff0", color: "#3b2416" }}>
                Reserve Table
              </Button>
            </Link>
            <Link href="/menu" className="w-full sm:w-auto">
              <Button className="w-full sm:w-auto rounded-full border-2 bg-transparent px-5 sm:px-6 py-2.5 sm:py-3 font-bold transition-all hover:opacity-80" style={{ borderColor: "#3b2416", color: "#3b2416" }}>
                View Menu
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

function SocialIcon({ name }: { name: "instagram" | "facebook" | "youtube" }) {
  if (name === "instagram") {
    return (
      <svg
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="h-5 w-5"
        fill="currentColor"
      >
        <path d="M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4Zm0 2a2 2 0 0 0-2 2v10c0 1.1.9 2 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H7Zm5 3.5A3.5 3.5 0 1 1 8.5 12 3.5 3.5 0 0 1 12 8.5Zm0 2a1.5 1.5 0 1 0 1.5 1.5A1.5 1.5 0 0 0 12 10.5Zm4.25-4.75a1 1 0 1 1-1 1 1 1 0 0 1 1-1Z" />
      </svg>
    );
  }
  if (name === "facebook") {
    return (
      <svg
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="h-5 w-5"
        fill="currentColor"
      >
        <path d="M13 10.5V8.75c0-.833.334-1.25 1.25-1.25H15.5V5h-2.5C10.75 5 9.5 6.25 9.5 8.25v2.25H7v2.5h2.5V19h3V13h2.086L15 10.5h-2Z" />
      </svg>
    );
  }
  return (
    <svg
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="currentColor"
    >
      <path d="M21.8 7.2c-.2-.7-.7-1.3-1.4-1.5C19 5.3 12 5.3 12 5.3s-7 0-8.4.4c-.7.2-1.2.8-1.4 1.5-.4 1.5-.4 4.7-.4 4.7s0 3.2.4 4.7c.2.7.7 1.2 1.4 1.4C5 18.7 12 18.7 12 18.7s7 0 8.4-.4c.7-.2 1.2-.7 1.4-1.4.4-1.5.4-4.7.4-4.7s0-3.2-.4-4.7ZM10 15V9l5.2 3L10 15Z" />
    </svg>
  );
}

const socialLinks: { name: string; icon: "instagram" | "facebook" | "youtube" }[] = [
  { name: "Instagram", icon: "instagram" },
  { name: "Facebook", icon: "facebook" },
  { name: "YouTube", icon: "youtube" },
];

export type HeroSlide = {
  line1Word1: string;
  line1Rest: string;
  line2Start: string;
  line2Highlight: string;
  description: string;
  image: string;
  imageClassName?: string;
};

export const heroSlides: HeroSlide[] = [
  {
    line1Word1: "Ghar",
    line1Rest: "Jaisa Khana",
    line2Start: "Rozana",
    line2Highlight: "Lunch & Dinner",
    description:
      "Homestyle cooking that reminds you of mom's kitchen. No preservatives, just pure love on a plate.",
    image: "/images/Thali.png",
  },
  {
    line1Word1: "Sizzling",
    line1Rest: "Hot & Smoky",
    line2Start: "Classic",
    line2Highlight: "Paneer Tikka",
    description:
      "Golden, smoky paneer marinated in aromatic spices. A vegetarian delight straight from the tandoor.",
    image: "/images/paneer-tikka.png",
  },
  {
    line1Word1: "Crispy",
    line1Rest: "& Juicy",
    line2Start: "Spicy",
    line2Highlight: "Roasted Wings",
    description:
      "Perfectly roasted chicken wings with a crispy crust and juicy center. Finger-licking good!",
    image: "/images/roasted-wings.png",
  },
  {
    line1Word1: "Dum",
    line1Rest: "Pukht Style",
    line2Start: "Aromatic",
    line2Highlight: "Biryani",
    description:
      "Slow-cooked layers of fragrant rice and tender meat. Every bite tells a story of tradition.",
    image: "/images/biryani.png",
    imageClassName: "scale-115 lg:scale-[1.2]",
  },
];

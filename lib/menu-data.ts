export type MenuItem = {
  id: string;
  name: string;
  price: number;
  category: string;
  description?: string;
  badge?: string;
};

export const menuItems: MenuItem[] = [
  // Non-Veg Starters
  { id: "nv-roasted-wings-half", name: "Roasted Wings (Half)", price: 130, category: "non-veg-starters" },
  { id: "nv-roasted-wings-full", name: "Roasted Wings (Full)", price: 250, category: "non-veg-starters" },
  { id: "nv-tangri-kebab-half", name: "Tangri Kebab (Half)", price: 110, category: "non-veg-starters" },
  { id: "nv-tangri-kebab-full", name: "Tangri Kebab (Full)", price: 200, category: "non-veg-starters" },
  { id: "nv-chicken-seekh-kebab-half", name: "Chicken Seekh Kebab (Half)", price: 75, category: "non-veg-starters" },
  { id: "nv-chicken-seekh-kebab-full", name: "Chicken Seekh Kebab (Full)", price: 150, category: "non-veg-starters" },
  { id: "nv-chicken-tikka-half", name: "Chicken Tikka (Half)", price: 160, category: "non-veg-starters" },
  { id: "nv-chicken-tikka-full", name: "Chicken Tikka (Full)", price: 300, category: "non-veg-starters" },
  { id: "nv-hariyali-chicken-tikka-half", name: "Hariyali Chicken Tikka (Half)", price: 160, category: "non-veg-starters" },
  { id: "nv-hariyali-chicken-tikka-full", name: "Hariyali Chicken Tikka (Full)", price: 300, category: "non-veg-starters" },

  // Veg Starters
  { id: "veg-seekh-kebab", name: "Veg Seekh Kebab", price: 80, category: "veg-starters" },
  { id: "hara-bhara-kebab", name: "Hara Bhara Kebab", price: 80, category: "veg-starters" },
  { id: "paneer-tikka-half", name: "Paneer Tikka (Half)", price: 130, category: "veg-starters" },
  { id: "paneer-tikka-full", name: "Paneer Tikka (Full)", price: 240, category: "veg-starters" },
  { id: "potato-cheese-balls", name: "Potato Cheese Balls", price: 60, category: "veg-starters" },

  // Rolls - Non-Veg
  { id: "chicken-tikka-roll-half", name: "Chicken Tikka Roll (Half)", price: 100, category: "rolls" },
  { id: "chicken-tikka-roll-full", name: "Chicken Tikka Roll (Full)", price: 200, category: "rolls" },
  { id: "hariyali-chicken-tikka-roll-half", name: "Hariyali Chicken Tikka Roll (Half)", price: 100, category: "rolls" },
  { id: "hariyali-chicken-tikka-roll-full", name: "Hariyali Chicken Tikka Roll (Full)", price: 200, category: "rolls" },
  { id: "chicken-seekh-roll-half", name: "Chicken Seekh Roll (Half)", price: 85, category: "rolls" },
  { id: "chicken-seekh-roll-full", name: "Chicken Seekh Roll (Full)", price: 170, category: "rolls" },
  // Rolls - Veg
  { id: "paneer-tikka-roll-half", name: "Paneer Tikka Roll (Half)", price: 100, category: "rolls" },
  { id: "paneer-tikka-roll-full", name: "Paneer Tikka Roll (Full)", price: 200, category: "rolls" },

  // Bao Buns
  { id: "chicken-bao-bun-half", name: "Chicken Bao Bun (Half)", price: 90, category: "bao-buns" },
  { id: "chicken-bao-bun-full", name: "Chicken Bao Bun (Full)", price: 180, category: "bao-buns" },
  { id: "veg-bao-bun-half", name: "Veg Bao Bun (Half)", price: 70, category: "bao-buns" },
  { id: "veg-bao-bun-full", name: "Veg Bao Bun (Full)", price: 140, category: "bao-buns" },

  // Fries
  { id: "french-fries", name: "French Fries", price: 50, category: "fries" },
  { id: "peri-peri-fries", name: "Peri Peri Fries", price: 70, category: "fries" },

  // Thali
  { id: "chicken-thali", name: "Chicken Thali", price: 99, category: "thali" },
  { id: "veg-thali", name: "Veg Thali", price: 80, category: "thali" },

  // Rice
  { id: "plain-rice", name: "Plain Rice", price: 20, category: "rice" },
  { id: "zeera-rice", name: "Zeera Rice", price: 25, category: "rice" },
  { id: "garlic-chili-rice", name: "Garlic Chili Rice", price: 30, category: "rice" },

  // Main Course - Non-Veg (Leg pieces only)
  { id: "chicken-biryani-half", name: "Chicken Biryani (Half)", price: 70, category: "main-course-non-veg" },
  { id: "chicken-biryani-full", name: "Chicken Biryani (Full)", price: 120, category: "main-course-non-veg" },
  { id: "chicken-korma-half", name: "Chicken Korma (Half)", price: 70, category: "main-course-non-veg" },
  { id: "chicken-korma-full", name: "Chicken Korma (Full)", price: 120, category: "main-course-non-veg" },
  { id: "chicken-curry-half", name: "Chicken Curry (Half)", price: 70, category: "main-course-non-veg" },
  { id: "chicken-curry-full", name: "Chicken Curry (Full)", price: 120, category: "main-course-non-veg" },
  { id: "butter-chicken-half", name: "Butter Chicken (Half)", price: 70, category: "main-course-non-veg" },
  { id: "butter-chicken-full", name: "Butter Chicken (Full)", price: 120, category: "main-course-non-veg" },

  // Main Course - Veg
  { id: "paneer-butter-masala-half", name: "Paneer Butter Masala (Half)", price: 100, category: "main-course-veg" },
  { id: "paneer-butter-masala-full", name: "Paneer Butter Masala (Full)", price: 200, category: "main-course-veg" },
  { id: "vegetable-of-the-day", name: "Vegetable of the Day", price: 80, category: "main-course-veg" },
  { id: "rajma", name: "Rajma", price: 60, category: "main-course-veg" },
  { id: "chole", name: "Chole", price: 60, category: "main-course-veg" },

  // Rice Bowls - Non-Veg (One leg piece each)
  { id: "chicken-curry-bowl", name: "Chicken Curry Bowl", price: 80, category: "rice-bowls" },
  { id: "butter-chicken-bowl", name: "Butter Chicken Bowl", price: 80, category: "rice-bowls" },
  { id: "chicken-korma-bowl", name: "Chicken Korma Bowl", price: 80, category: "rice-bowls" },
  // Rice Bowls - Veg
  { id: "rajma-chawal-bowl", name: "Rajma Chawal Bowl", price: 60, category: "rice-bowls" },
  { id: "chole-chawal-bowl", name: "Chole Chawal Bowl", price: 60, category: "rice-bowls" },

  // Breads
  { id: "rumali-roti", name: "Rumali Roti", price: 10, category: "breads" },
  { id: "tawa-roti", name: "Tawa Roti", price: 10, category: "breads" },
  { id: "tandoori-roti", name: "Tandoori Roti", price: 10, category: "breads" },
  { id: "garlic-roti", name: "Garlic Roti", price: 15, category: "breads" },
  { id: "laccha-paratha", name: "Laccha Paratha", price: 20, category: "breads" },
  { id: "garlic-paratha", name: "Garlic Paratha", price: 20, category: "breads" },
  { id: "pudina-paratha", name: "Pudina Paratha", price: 20, category: "breads" },
  { id: "butter-naan", name: "Butter Naan", price: 25, category: "breads" },
  { id: "garlic-naan", name: "Garlic Naan", price: 30, category: "breads" },
  { id: "add-butter", name: "Add Butter", price: 5, category: "breads", description: "Extra butter on any bread" },

  // Dessert
  { id: "brownie", name: "Brownie", price: 50, category: "dessert", description: "With Chocolate Sauce" },
];

export const categories = [
  { id: "non-veg-starters", label: "Non-Veg Starters", emoji: "🍗" },
  { id: "veg-starters", label: "Veg Starters", emoji: "🥗" },
  { id: "rolls", label: "Rolls", emoji: "🌯" },
  { id: "bao-buns", label: "Bao Buns", emoji: "🥟" },
  { id: "fries", label: "Fries", emoji: "🍟" },
  { id: "thali", label: "Thali", emoji: "🍛" },
  { id: "rice", label: "Rice", emoji: "🍚" },
  { id: "main-course-non-veg", label: "Main Course - Non-Veg", emoji: "🍖" },
  { id: "main-course-veg", label: "Main Course - Veg", emoji: "🥘" },
  { id: "rice-bowls", label: "Rice Bowls", emoji: "🥣" },
  { id: "breads", label: "Breads", emoji: "🫓" },
  { id: "dessert", label: "Dessert", emoji: "🍫" },
];
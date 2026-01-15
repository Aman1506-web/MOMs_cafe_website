export type MenuItem = {
  id: string;
  name: string;
  price: number;
  category: string;
  description?: string;
  badge?: string;
};

export const menuItems: MenuItem[] = [
  // Mini Pizza Party Starts
  { id: "mini-onion", name: "Mini Onion", price: 69, category: "mini-pizza" },
  { id: "mini-capsicum", name: "Mini Capsicum", price: 79, category: "mini-pizza" },
  { id: "mini-tomato", name: "Mini Tomato", price: 79, category: "mini-pizza" },
  { id: "mini-corn", name: "Mini Corn", price: 89, category: "mini-pizza" },
  { id: "mini-paneer", name: "Mini Paneer", price: 99, category: "mini-pizza" },
  { id: "mini-margherita", name: "Mini Margherita", price: 119, category: "mini-pizza" },

  // Set Of 4 Combo
  {
    id: "combo-single-topping",
    name: "Single Topping Combo (Set of 4)",
    price: 280,
    category: "combos",
    description: "Onion, Capsicum, Tomato, Corn",
  },
  {
    id: "combo-double-topping",
    name: "Double Topping Combo (Set of 4)",
    price: 500,
    category: "combos",
    description: "Onion & Capsicum, Paneer & Onion, Jalapeno & Onion, Tomato & Corn",
  },

  // Parcel
  { id: "parcel-veg", name: "Veg Parcel", price: 39, category: "parcel" },
  { id: "parcel-corn", name: "Corn Parcel", price: 49, category: "parcel" },
  { id: "parcel-cheese-bomb", name: "Cheese Bomb", price: 69, category: "parcel" },
  { id: "parcel-paneer", name: "Paneer Parcel", price: 59, category: "parcel" },
  { id: "parcel-peri-peri", name: "Peri Peri Parcel", price: 59, category: "parcel" },

  // Garlic Bread
  { id: "gb-calzium", name: "Calzium Pocket", price: 99, category: "garlic-bread" },
  { id: "gb-simple", name: "Simple Garlic Bread", price: 99, category: "garlic-bread" },
  { id: "gb-cheese", name: "Cheese Garlic Bread", price: 119, category: "garlic-bread" },
  { id: "gb-stuff", name: "Stuff Garlic Bread", price: 129, category: "garlic-bread" },

  // Pasta
  { id: "pasta-white", name: "White Sauce Pasta", price: 149, category: "pasta" },
  { id: "pasta-red", name: "Red Sauce Pasta", price: 149, category: "pasta" },
  { id: "pasta-pink", name: "Pink Sauce Pasta", price: 169, category: "pasta" },
  { id: "pasta-alfredo", name: "Alfredo Pasta", price: 179, category: "pasta" },
  { id: "pasta-arrabiata", name: "Arrabiata Pasta", price: 179, category: "pasta" },
  { id: "pasta-makhni", name: "Makhni Pasta", price: 189, category: "pasta" },
  { id: "pasta-cheese-corn", name: "Cheese Corn Pasta", price: 199, category: "pasta" },
  { id: "pasta-pizza", name: "Pizza Pasta", price: 229, category: "pasta" },

  // Nachos
  { id: "nachos-cheese", name: "Cheese Nachos", price: 99, category: "nachos" },
  { id: "nachos-spicy", name: "Spicy Nachos", price: 109, category: "nachos" },
  { id: "nachos-achari", name: "Achar i Nachos", price: 119, category: "nachos" },
  { id: "nachos-makhni", name: "Makhni Cheese Nachos", price: 129, category: "nachos" },
  { id: "nachos-tandoori", name: "Tandoori Nachos", price: 139, category: "nachos" },
  { id: "nachos-potato", name: "Potato Crispy Nachos", price: 159, category: "nachos" },
  { id: "nachos-chaat", name: "Indian Chaat Nachos", price: 159, category: "nachos" },

  // Quesadilla
  { id: "ques-veg", name: "Veg Quesadilla", price: 109, category: "quesadilla" },
  { id: "ques-peri", name: "Peri Peri Quesadilla", price: 119, category: "quesadilla" },
  { id: "ques-paneer", name: "Paneer Quesadilla", price: 129, category: "quesadilla" },
  { id: "ques-mushroom", name: "Mushroom Quesadilla", price: 129, category: "quesadilla" },

  // Burger
  { id: "burger-desi-street", name: "Desi Street Burger", price: 39, category: "burger" },
  { id: "burger-aloo-tikki", name: "Aloo Tikki Burger", price: 59, category: "burger" },
  { id: "burger-veggie", name: "Veggie Burger", price: 69, category: "burger" },
  { id: "burger-cheese", name: "Cheese Burger", price: 89, category: "burger" },
  { id: "burger-aloo-kurkure", name: "Aloo Tikki Kurkure Burger", price: 99, category: "burger" },
  { id: "burger-paneer-pataka", name: "Paneer Pataka Burger", price: 99, category: "burger" },
  { id: "burger-cheese-garlic", name: "Cheese Garlic Burger", price: 99, category: "burger" },
  { id: "burger-cheese-jalapeno", name: "Cheese Jalapeno Burger", price: 99, category: "burger" },
  { id: "burger-cheese-mustard", name: "Cheese American Mustard Burger", price: 99, category: "burger" },
  { id: "burger-cheese-shot", name: "Cheese Shot Burger", price: 109, category: "burger" },
  { id: "burger-cheese-burst", name: "Cheese Burst Burger", price: 109, category: "burger" },
  { id: "burger-cheese-peri", name: "Cheese Peri Peri Burger", price: 109, category: "burger" },
  { id: "burger-paneer-kurkure", name: "Paneer Kurkure Burger", price: 119, category: "burger" },

  // French Fries
  { id: "fries-masala", name: "Masala Fries", price: 79, category: "fries" },
  { id: "fries-peri-peri", name: "Peri Peri Fries", price: 89, category: "fries" },
  { id: "fries-cheesy", name: "Cheesy Fries", price: 99, category: "fries" },

  // Grilled Sandwich
  { id: "sandwich-veg", name: "Veg Sandwich", price: 59, category: "sandwich" },
  { id: "sandwich-masala", name: "Masala Sandwich", price: 69, category: "sandwich" },
  { id: "sandwich-cheese-corn", name: "Cheese Corn Sandwich", price: 99, category: "sandwich" },
  { id: "sandwich-nuggets-cheese", name: "Nuggets Cheese Masala Sandwich", price: 119, category: "sandwich" },
  { id: "sandwich-mushroom-cheese", name: "Mushroom Cheese Sandwich", price: 129, category: "sandwich" },
  { id: "sandwich-cheesy-jalapeno", name: "Cheesy Jalapeno Sandwich", price: 129, category: "sandwich" },
  { id: "sandwich-tandoori-paneer", name: "Tandoori Paneer Sandwich", price: 139, category: "sandwich" },
  { id: "sandwich-peri-peri", name: "Peri Peri Sandwich", price: 139, category: "sandwich" },
  { id: "sandwich-triple-paneer", name: "Triple Layer Paneer Sandwich", price: 159, category: "sandwich" },

  // Maggie
  { id: "maggi-desi", name: "Desi Maggi", price: 59, category: "maggi" },
  { id: "maggi-veggie", name: "Veggie Maggi", price: 69, category: "maggi" },
  { id: "maggi-amul-butter", name: "Amul Butter Maggi", price: 79, category: "maggi" },
  { id: "maggi-makhni", name: "Makhni Maggi", price: 89, category: "maggi" },
  { id: "maggi-cheese", name: "Cheese Maggi", price: 99, category: "maggi" },
  { id: "maggi-chatori", name: "Chatori Maggi", price: 99, category: "maggi" },
  { id: "maggi-paneer", name: "Paneer Maggi", price: 99, category: "maggi" },
  { id: "maggi-bnb-special", name: "BNB Special Maggi", price: 119, category: "maggi" },

  // Hand Tossed Pizza (by size)
  { id: "ht-onion-capsicum-reg", name: "Onion & Capsicum (Regular)", price: 149, category: "hand-tossed" },
  { id: "ht-onion-capsicum-med", name: "Onion & Capsicum (Medium)", price: 279, category: "hand-tossed" },
  { id: "ht-onion-capsicum-lg", name: "Onion & Capsicum (Large)", price: 399, category: "hand-tossed" },
  { id: "ht-tomato-corn-reg", name: "Tomato & Corn (Regular)", price: 149, category: "hand-tossed" },
  { id: "ht-tomato-corn-med", name: "Tomato & Corn (Medium)", price: 279, category: "hand-tossed" },
  { id: "ht-tomato-corn-lg", name: "Tomato & Corn (Large)", price: 399, category: "hand-tossed" },
  { id: "ht-onion-paneer-reg", name: "Onion & Paneer (Regular)", price: 149, category: "hand-tossed" },
  { id: "ht-onion-paneer-med", name: "Onion & Paneer (Medium)", price: 279, category: "hand-tossed" },
  { id: "ht-onion-paneer-lg", name: "Onion & Paneer (Large)", price: 399, category: "hand-tossed" },
  { id: "ht-jalapeno-corn-reg", name: "Jalapeno & Corn (Regular)", price: 149, category: "hand-tossed" },
  { id: "ht-jalapeno-corn-med", name: "Jalapeno & Corn (Medium)", price: 279, category: "hand-tossed" },
  { id: "ht-jalapeno-corn-lg", name: "Jalapeno & Corn (Large)", price: 399, category: "hand-tossed" },
  { id: "ht-paneer-corn-reg", name: "Paneer & Corn (Regular)", price: 149, category: "hand-tossed" },
  { id: "ht-paneer-corn-med", name: "Paneer & Corn (Medium)", price: 279, category: "hand-tossed" },
  { id: "ht-paneer-corn-lg", name: "Paneer & Corn (Large)", price: 449, category: "hand-tossed" },
  { id: "ht-garden-veg-reg", name: "Garden Veg (Regular)", price: 179, category: "hand-tossed" },
  { id: "ht-garden-veg-med", name: "Garden Veg (Medium)", price: 299, category: "hand-tossed" },
  { id: "ht-garden-veg-lg", name: "Garden Veg (Large)", price: 449, category: "hand-tossed" },
  { id: "ht-red-paprika-reg", name: "Red Paprika (Regular)", price: 179, category: "hand-tossed" },
  { id: "ht-red-paprika-med", name: "Red Paprika (Medium)", price: 299, category: "hand-tossed" },
  { id: "ht-red-paprika-lg", name: "Red Paprika (Large)", price: 449, category: "hand-tossed" },
  { id: "ht-corn-cheese-reg", name: "Corn & Cheese (Regular)", price: 179, category: "hand-tossed" },
  { id: "ht-corn-cheese-med", name: "Corn & Cheese (Medium)", price: 299, category: "hand-tossed" },
  { id: "ht-corn-cheese-lg", name: "Corn & Cheese (Large)", price: 449, category: "hand-tossed" },
  { id: "ht-paneer-crispy-reg", name: "Paneer Crispy (Regular)", price: 179, category: "hand-tossed" },
  { id: "ht-paneer-crispy-med", name: "Paneer Crispy (Medium)", price: 299, category: "hand-tossed" },
  { id: "ht-paneer-crispy-lg", name: "Paneer Crispy (Large)", price: 449, category: "hand-tossed" },
  { id: "ht-farm-fresh-reg", name: "Farm Fresh (Regular)", price: 179, category: "hand-tossed" },
  { id: "ht-farm-fresh-med", name: "Farm Fresh (Medium)", price: 299, category: "hand-tossed" },
  { id: "ht-farm-fresh-lg", name: "Farm Fresh (Large)", price: 449, category: "hand-tossed" },
  { id: "ht-onion-glasian-reg", name: "Onion Glasian (Regular)", price: 199, category: "hand-tossed" },
  { id: "ht-onion-glasian-med", name: "Onion Glasian (Medium)", price: 349, category: "hand-tossed" },
  { id: "ht-onion-glasian-lg", name: "Onion Glasian (Large)", price: 499, category: "hand-tossed" },
  { id: "ht-mushroom-delight-reg", name: "Mushroom Delight (Regular)", price: 199, category: "hand-tossed" },
  { id: "ht-mushroom-delight-med", name: "Mushroom Delight (Medium)", price: 349, category: "hand-tossed" },
  { id: "ht-mushroom-delight-lg", name: "Mushroom Delight (Large)", price: 499, category: "hand-tossed" },
  { id: "ht-chilli-cheese-reg", name: "Chilli Cheese (Regular)", price: 199, category: "hand-tossed" },
  { id: "ht-chilli-cheese-med", name: "Chilli Cheese (Medium)", price: 349, category: "hand-tossed" },
  { id: "ht-chilli-cheese-lg", name: "Chilli Cheese (Large)", price: 499, category: "hand-tossed" },
  { id: "ht-tandoori-paneer-reg", name: "Tandoori Paneer (Regular)", price: 199, category: "hand-tossed" },
  { id: "ht-tandoori-paneer-med", name: "Tandoori Paneer (Medium)", price: 349, category: "hand-tossed" },
  { id: "ht-tandoori-paneer-lg", name: "Tandoori Paneer (Large)", price: 499, category: "hand-tossed" },
  { id: "ht-makhni-cheese-reg", name: "Makhni Cheese (Regular)", price: 199, category: "hand-tossed" },
  { id: "ht-makhni-cheese-med", name: "Makhni Cheese (Medium)", price: 349, category: "hand-tossed" },
  { id: "ht-makhni-cheese-lg", name: "Makhni Cheese (Large)", price: 499, category: "hand-tossed" },
  { id: "ht-bnb-chef-reg", name: "BNB Chef Choice (Regular)", price: 229, category: "hand-tossed" },
  { id: "ht-bnb-chef-med", name: "BNB Chef Choice (Medium)", price: 379, category: "hand-tossed" },
  { id: "ht-bnb-chef-lg", name: "BNB Chef Choice (Large)", price: 549, category: "hand-tossed" },
  { id: "ht-wonder-reg", name: "Wonder Pizza (Regular)", price: 229, category: "hand-tossed" },
  { id: "ht-wonder-med", name: "Wonder Pizza (Medium)", price: 379, category: "hand-tossed" },
  { id: "ht-wonder-lg", name: "Wonder Pizza (Large)", price: 549, category: "hand-tossed" },
  { id: "ht-extravaganza-reg", name: "Extravaganza (Regular)", price: 229, category: "hand-tossed" },
  { id: "ht-extravaganza-med", name: "Extravaganza (Medium)", price: 379, category: "hand-tossed" },
  { id: "ht-extravaganza-lg", name: "Extravaganza (Large)", price: 549, category: "hand-tossed" },

  // Momos (half/full)
  { id: "momos-veg-steam-half", name: "Veg Steam Momos (Half)", price: 69, category: "momos" },
  { id: "momos-veg-steam-full", name: "Veg Steam Momos (Full)", price: 119, category: "momos" },
  { id: "momos-paneer-steam-half", name: "Paneer Steam Momos (Half)", price: 89, category: "momos" },
  { id: "momos-paneer-steam-full", name: "Paneer Steam Momos (Full)", price: 159, category: "momos" },
  { id: "momos-veg-kurkure-half", name: "Veg Kurkure Momos (Half)", price: 89, category: "momos" },
  { id: "momos-veg-kurkure-full", name: "Veg Kurkure Momos (Full)", price: 159, category: "momos" },
  { id: "momos-paneer-kurkure-half", name: "Paneer Kurkure Momos (Half)", price: 109, category: "momos" },
  { id: "momos-paneer-kurkure-full", name: "Paneer Kurkure Momos (Full)", price: 179, category: "momos" },
  { id: "momos-veg-gravy-half", name: "Veg Gravy Momos (Half)", price: 99, category: "momos" },
  { id: "momos-veg-gravy-full", name: "Veg Gravy Momos (Full)", price: 169, category: "momos" },
  { id: "momos-paneer-gravy-half", name: "Paneer Gravy Momos (Half)", price: 109, category: "momos" },
  { id: "momos-paneer-gravy-full", name: "Paneer Gravy Momos (Full)", price: 179, category: "momos" },
  { id: "momos-veg-tandoori-half", name: "Veg Tandoori Grill Momos (Half)", price: 119, category: "momos" },
  { id: "momos-veg-tandoori-full", name: "Veg Tandoori Grill Momos (Full)", price: 189, category: "momos" },
  { id: "momos-paneer-tandoori-half", name: "Paneer Tandoori Grill Momos (Half)", price: 129, category: "momos" },
  { id: "momos-paneer-tandoori-full", name: "Paneer Tandoori Grill Momos (Full)", price: 229, category: "momos" },
  { id: "momos-veg-cheesy-half", name: "Cheesy Veg Momos (Half)", price: 109, category: "momos" },
  { id: "momos-veg-cheesy-full", name: "Cheesy Veg Momos (Full)", price: 179, category: "momos" },
  { id: "momos-paneer-cheesy-half", name: "Cheesy Paneer Momos (Half)", price: 110, category: "momos" },
  { id: "momos-paneer-cheesy-full", name: "Cheesy Paneer Momos (Full)", price: 179, category: "momos" },
  { id: "momos-paneer-cheese-corn-half", name: "Paneer Cheese Corn Momos (Half)", price: 129, category: "momos" },
  { id: "momos-paneer-cheese-corn-full", name: "Paneer Cheese Corn Momos (Full)", price: 229, category: "momos" },
  { id: "momos-paneer-cheese-corn-kurkure-half", name: "Paneer Cheese Corn Kurkure Momos (Half)", price: 149, category: "momos" },
  { id: "momos-paneer-cheese-corn-kurkure-full", name: "Paneer Cheese Corn Kurkure Momos (Full)", price: 259, category: "momos" },

  // Noodles
  { id: "noodles-veg-half", name: "Veg Noodles (Half)", price: 79, category: "noodles" },
  { id: "noodles-veg-full", name: "Veg Noodles (Full)", price: 139, category: "noodles" },
  { id: "noodles-hakka-half", name: "Hakka Noodles (Half)", price: 89, category: "noodles" },
  { id: "noodles-hakka-full", name: "Hakka Noodles (Full)", price: 149, category: "noodles" },
  { id: "noodles-singapore-half", name: "Singapore Noodles (Half)", price: 99, category: "noodles" },
  { id: "noodles-singapore-full", name: "Singapore Noodles (Full)", price: 169, category: "noodles" },
  { id: "noodles-butter-paneer-half", name: "Butter Paneer Noodles (Half)", price: 109, category: "noodles" },
  { id: "noodles-butter-paneer-full", name: "Butter Paneer Noodles (Full)", price: 179, category: "noodles" },
  { id: "noodles-schezwan-paneer-half", name: "Schezwan Paneer Noodles (Half)", price: 109, category: "noodles" },
  { id: "noodles-schezwan-paneer-full", name: "Schezwan Paneer Noodles (Full)", price: 179, category: "noodles" },
  { id: "noodles-bnb-half", name: "BNB Special Noodles (Half)", price: 119, category: "noodles" },
  { id: "noodles-bnb-full", name: "BNB Special Noodles (Full)", price: 199, category: "noodles" },

  // Snacks
  { id: "snacks-spring-rolls", name: "Spring Rolls", price: 99, category: "snacks" },
  { id: "snacks-kurkure-spring-rolls", name: "Kurkure Spring Rolls", price: 139, category: "snacks" },
  { id: "snacks-chilli-potato", name: "Chilli Potato", price: 149, category: "snacks" },
  { id: "snacks-honey-chilli-potato", name: "Honey Chilli Potato", price: 169, category: "snacks" },
  { id: "snacks-chilli-paneer", name: "Chilli Paneer", price: 179, category: "snacks" },

  // Cakes
  { id: "cake-choco-lava", name: "Choco Lava Cake", price: 79, category: "cakes" },
  { id: "cake-oreo-choco-lava", name: "Oreo Choco Lava Cake", price: 89, category: "cakes" },
  { id: "cake-kitkat-choco-lava", name: "Kit Kat Choco Lava Cake", price: 89, category: "cakes" },

  // Milkshake
  { id: "shake-vanilla", name: "Vanilla Milkshake", price: 89, category: "milkshake" },
  { id: "shake-mango", name: "Mango Milkshake", price: 99, category: "milkshake" },
  { id: "shake-strawberry", name: "Strawberry Milkshake", price: 99, category: "milkshake" },
  { id: "shake-pineapple", name: "Pineapple Milkshake", price: 99, category: "milkshake" },
  { id: "shake-butter-scotch", name: "Butter Scotch Milkshake", price: 109, category: "milkshake" },
  { id: "shake-chocolate", name: "Chocolate Milkshake", price: 109, category: "milkshake" },
  { id: "shake-kitkat-dark", name: "Kit Kat Dark Chocolate Milkshake", price: 119, category: "milkshake" },
  { id: "shake-oreo", name: "Oreo Milkshake", price: 119, category: "milkshake" },
  { id: "shake-blueberry", name: "Blueberry Milkshake", price: 129, category: "milkshake" },
  { id: "shake-caramel-cheesecake", name: "Caramel Cheesecake Milkshake", price: 139, category: "milkshake" },
  {
    id: "shake-kesar-pista-cheesecake",
    name: "Kesar Pista Kulfi Cheesecake Milkshake",
    price: 139,
    category: "milkshake",
  },

  // Cold Coffee
  { id: "coffee-classic-cold", name: "Classic Cold Coffee", price: 79, category: "cold-coffee" },
  { id: "coffee-hazelnut-cold", name: "Hazelnut Cold Coffee", price: 89, category: "cold-coffee" },
  { id: "coffee-irish-cream", name: "Irish Cream Coffee", price: 99, category: "cold-coffee" },
  { id: "coffee-trimashu", name: "Trimashu Cream Coffee", price: 99, category: "cold-coffee" },
  { id: "coffee-caramel-crunchy", name: "Caramel Crunchy Coffee", price: 109, category: "cold-coffee" },

  // Coolers
  { id: "cooler-virgin-mojito", name: "Virgin Mojito", price: 79, category: "coolers" },
  { id: "cooler-lemon-ice-tea", name: "Lemon Ice Tea", price: 89, category: "coolers" },
  { id: "cooler-kala-khatta", name: "Kala Khatta", price: 89, category: "coolers" },
  { id: "cooler-green-apple", name: "Green Apple Cooler", price: 89, category: "coolers" },
  { id: "cooler-chilli-guava", name: "Chilli Guava Cooler", price: 99, category: "coolers" },
  { id: "cooler-pulse-candy", name: "Pulse Candy Cooler", price: 99, category: "coolers" },
  { id: "cooler-strawberry", name: "Strawberry Cooler", price: 99, category: "coolers" },
  { id: "cooler-mango", name: "Mango Cooler", price: 99, category: "coolers" },

  // Beverages
  { id: "bev-hot-tea", name: "Nescafe Hot Tea", price: 19, category: "beverages" },
  { id: "bev-hot-soup", name: "Nescafe Hot Soup", price: 19, category: "beverages" },
  { id: "bev-hot-coffee", name: "Nescafe Hot Coffee", price: 29, category: "beverages" },
];

export const categories = [
  { id: "mini-pizza", label: "Mini Pizza" },
  { id: "combos", label: "Set of 4 Combo" },
  { id: "parcel", label: "Parcel" },
  { id: "garlic-bread", label: "Garlic Bread" },
  { id: "pasta", label: "Pasta" },
  { id: "nachos", label: "Nachos" },
  { id: "quesadilla", label: "Quesadilla" },
  { id: "burger", label: "Burger" },
  { id: "fries", label: "French Fries" },
  { id: "sandwich", label: "Grilled Sandwich" },
  { id: "maggi", label: "Maggi" },
  { id: "hand-tossed", label: "Hand Tossed Pizza" },
  { id: "momos", label: "Momos" },
  { id: "noodles", label: "Noodles" },
  { id: "snacks", label: "Snacks" },
  { id: "cakes", label: "Cakes" },
  { id: "milkshake", label: "Milkshake" },
  { id: "cold-coffee", label: "Cold Coffee" },
  { id: "coolers", label: "Coolers" },
  { id: "beverages", label: "Beverages" },
];

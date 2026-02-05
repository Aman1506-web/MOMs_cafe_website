export type DayMenu = {
  day: string;
  dayShort: string;
  lunch: string[];
  dinner: string[];
};

export type WeeklyMenuPlan = {
  type: "veg" | "non-veg";
  label: string;
  pricePerMeal: number;
  pricePerMonth: number;
  days: DayMenu[];
};

export const vegMenu: WeeklyMenuPlan = {
  type: "veg",
  label: "Pure Veg",
  pricePerMeal: 80,
  pricePerMonth: 3600,
  days: [
    {
      day: "Monday",
      dayShort: "Mon",
      lunch: ["Aaloo Mattar", "Chole", "Dal", "Chawal", "Roti", "Salad"],
      dinner: ["Mix Veg", "Lobhiya", "Dal", "Chawal", "Tandoori Roti", "Salad"],
    },
    {
      day: "Tuesday",
      dayShort: "Tue",
      lunch: ["Bhindi", "Rajma", "Dal", "Chawal", "Roti", "Salad"],
      dinner: ["Paneer", "Kaale Channe", "Dal", "Chawal", "Tandoori Roti", "Salad"],
    },
    {
      day: "Wednesday",
      dayShort: "Wed",
      lunch: ["Jeera Aaloo", "Channe", "Dal", "Chawal", "Roti", "Salad"],
      dinner: ["Dal Makhni", "Chole", "Chawal", "Tandoori Roti", "Salad"],
    },
    {
      day: "Thursday",
      dayShort: "Thu",
      lunch: ["Aaloo Gobhi", "Lobhiya", "Dal", "Chawal", "Roti", "Salad"],
      dinner: ["Baingan Bharta", "Channe", "Dal", "Chawal", "Tandoori Roti", "Salad"],
    },
    {
      day: "Friday",
      dayShort: "Fri",
      lunch: ["Veg Biryani", "Rajma", "Raita", "Roti", "Salad"],
      dinner: ["Dum Aaloo", "Matra", "Dal", "Chawal", "Tandoori Roti", "Salad"],
    },
    {
      day: "Saturday",
      dayShort: "Sat",
      lunch: ["Methi Aaloo", "Chane", "Dal", "Chawal", "Roti", "Salad"],
      dinner: ["Veg Keema", "Rajma", "Dal", "Chawal", "Tandoori Roti", "Salad"],
    },
    {
      day: "Sunday",
      dayShort: "Sun",
      lunch: ["Chole Kulche", "Daal", "Chawal", "Chatni", "Salad", "Raita"],
      dinner: ["Kadi Pakoda", "Jeera Rice", "Dal", "Chawal", "Tandoori Roti", "Salad"],
    },
  ],
};

export const nonVegMenu: WeeklyMenuPlan = {
  type: "non-veg",
  label: "Non-Veg",
  pricePerMeal: 90,
  pricePerMonth: 4700,
  days: [
    {
      day: "Monday",
      dayShort: "Mon",
      lunch: ["Aaloo Mattar", "Chole", "Dal", "Chawal", "Roti", "Salad"],
      dinner: ["Anda Curry", "Lobhiya", "Dal", "Chawal", "Tandoori Roti", "Salad"],
    },
    {
      day: "Tuesday",
      dayShort: "Tue",
      lunch: ["Bhindi", "Rajma", "Dal", "Chawal", "Roti", "Salad"],
      dinner: ["Paneer", "Kaale Channe", "Dal", "Chawal", "Tandoori Roti", "Salad"],
    },
    {
      day: "Wednesday",
      dayShort: "Wed",
      lunch: ["Jeera Aaloo", "Channe", "Dal", "Chawal", "Roti", "Salad"],
      dinner: ["Chicken Kebab", "Dal Makhni", "Chole", "Chawal", "Tandoori Roti", "Salad"],
    },
    {
      day: "Thursday",
      dayShort: "Thu",
      lunch: ["Andaa Bhurji", "Lobhiya", "Dal", "Chawal", "Roti", "Salad"],
      dinner: ["Baingan Bharta", "Channe", "Dal", "Chawal", "Tandoori Roti", "Salad"],
    },
    {
      day: "Friday",
      dayShort: "Fri",
      lunch: ["Chicken Biryani", "Rajma", "Raita", "Roti", "Salad"],
      dinner: ["Dum Aaloo", "Matra", "Dal", "Chawal", "Tandoori Roti", "Salad"],
    },
    {
      day: "Saturday",
      dayShort: "Sat",
      lunch: ["Methi Aaloo", "Chane", "Dal", "Chawal", "Roti", "Salad"],
      dinner: ["White Chicken", "Rajma", "Dal", "Chawal", "Tandoori Roti", "Salad"],
    },
    {
      day: "Sunday",
      dayShort: "Sun",
      lunch: ["Chole Kulche", "Daal", "Chawal", "Chatni", "Salad", "Raita"],
      dinner: ["Butter Chicken", "Jeera Rice", "Tandoori Roti", "Salad"],
    },
  ],
};

export const specials = [
  { name: "SPL Paneer Sabzi" },
  { name: "Chicken Seekh Kebab" },
];

export const luckyBonanza = {
  description: "Lucky Bonanza",
  prizes: [
    { label: "First Prize", amount: 5100 },
    { label: "Second Prize", amount: 3100 },
    { label: "Third Prize", amount: 2100 },
  ],
  condition: "On reaching 500 customers that month",
};

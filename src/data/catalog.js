// Single source of truth for Food + Bytes catalog
// Import images
import burger1 from "../assets/media/BurgerAlone1.jpg";
import burgerChips1 from "../assets/media/BurgerAndChipsPotrait.jpg";
import burgerChips2 from "../assets/media/BurgerAndChipsPotrait2.jpg";
import burgerChips3 from "../assets/media/BurgerAndChipsPotrait3.jpg";
import chickenPap from "../assets/media/Chicken&PapPotrait.jpg";
import chickenBurger from "../assets/media/ChickenBurger1Potrait.jpg";
import doubleCheeseCombo from "../assets/media/DoubleCheeseBurgerAndChips.jpg";
import papWoers from "../assets/media/Pap&WoersPotrait.jpg";
import steakChickenPap from "../assets/media/SteakChickenAndPap.jpg";

// Bytes service thumbnails (using available files)
import simActivation from "../assets/media/SimActivationRed.png";
import simSwap from "../assets/media/SimSwap-red.png";
import simUpgrade from "../assets/media/SimPack-red.png";
import prepaidStarter from "../assets/media/SimPack.png";
import prepaidDevices from "../assets/media/PrepaidDevices.jpg";
import phoneAccessories from "../assets/media/PhoneAccesories-red.png";
import dataBundles from "../assets/media/HeroLightinging-FastBytes-red.png";
import fibreSupport from "../assets/media/WifiRouter.jpg";
import wifiRouter from "../assets/media/WifiRouter-red.png";
import contractUpgrade from "../assets/media/PhoneAccesories.jpg";
import deviceTroubleshoot from "../assets/media/PrepaidDevices.jpg";
import networkSupport from "../assets/media/WifiRouter.jpg";

// FOOD CATEGORIES
export const foodCategories = [
  {
    id: "cat-chicken",
    slug: "chicken-meals",
    type: "food",
    title: "Chicken Meals",
    description: "Flame-grilled chicken portions served with your choice of sides.",
    heroImage: chickenPap,
    meta: "From R50",
  },
  {
    id: "cat-grills",
    slug: "grills-steaks",
    type: "food",
    title: "Grills & Prime Steaks",
    description: "Premium cuts and traditional grills — bold flavour, generous portions.",
    heroImage: steakChickenPap,
    meta: "Premium quality",
  },
  {
    id: "cat-burgers",
    slug: "burgers",
    type: "food",
    title: "Burgers",
    description: "Big flavour, bold portions — flame energy in every bite.",
    heroImage: burgerChips1,
    meta: "From R65",
  },
  {
    id: "cat-chips",
    slug: "chips",
    type: "food",
    title: "Chips",
    description: "Crispy golden chips in three sizes.",
    heroImage: burgerChips2,
    meta: "From R25",
  },
  {
    id: "cat-traditional",
    slug: "traditional-meals",
    type: "food",
    title: "Traditional Meals",
    description: "Township classics cooked honest — served generous.",
    heroImage: papWoers,
    meta: "Local favourites",
  },
  {
    id: "cat-sides",
    slug: "sides-salads",
    type: "food",
    title: "Sides & Salads",
    description: "Complete your meal with starches, vegetables, and fresh salads.",
    heroImage: burgerChips3,
    meta: "From R15",
  },
];

// BYTES CATEGORIES
export const bytesCategories = [
  {
    id: "cat-sim",
    slug: "sim-activation",
    type: "bytes",
    title: "SIM & Activation",
    description: "Get connected fast — SIM activation, swaps, and setup while you wait.",
    heroImage: burger1,
    meta: "In-store support",
  },
  {
    id: "cat-devices",
    slug: "devices-prepaid",
    type: "bytes",
    title: "Devices & Prepaid",
    description: "Prepaid handsets and starter packs — reliable, ready to go.",
    heroImage: burgerChips2,
    meta: "In-store quote",
  },
  {
    id: "cat-data",
    slug: "data-fibre",
    type: "bytes",
    title: "Data & Fibre",
    description: "Everyday data solutions and fibre support — sorted while you eat.",
    heroImage: burgerChips3,
    meta: "Ask in-store",
  },
  {
    id: "cat-upgrades",
    slug: "upgrades-support",
    type: "bytes",
    title: "Upgrades & Support",
    description: "Contract upgrades, device support, and troubleshooting.",
    heroImage: chickenBurger,
    meta: "Expert help",
  },
];

// ALL CATEGORIES
export const categories = [...foodCategories, ...bytesCategories];

// FOOD ITEMS
export const foodItems = [
  // === CHICKEN MEALS ===
  {
    id: "chicken-quarter-pap",
    categorySlug: "chicken-meals",
    name: "1/4 Leg Chicken & Pap",
    description: "Quarter leg flame-grilled, served with pap and choice of sides.",
    price: 60.00,
    priceLabel: "R60.00",
    currency: "ZAR",
    image: chickenPap,
    badges: ["Popular"],
    isFeatured: true,
  },
  {
    id: "chicken-half-chips",
    categorySlug: "chicken-meals",
    name: "Half Chicken & Chips",
    description: "Half chicken flame-grilled, served with crispy chips.",
    price: 110.00,
    priceLabel: "R110.00",
    currency: "ZAR",
    image: chickenPap,
    badges: ["Great value"],
    isFeatured: true,
  },
  {
    id: "chicken-full-chips",
    categorySlug: "chicken-meals",
    name: "Full Chicken & Chips",
    description: "Whole flame-grilled chicken served with chips — perfect for sharing.",
    price: 199.00,
    priceLabel: "R199.00",
    currency: "ZAR",
    image: chickenPap,
    badges: ["Family meal"],
    isFeatured: false,
  },
  {
    id: "chicken-wings-chips",
    categorySlug: "chicken-meals",
    name: "3x Chicken Wings & Chips",
    description: "Three chicken wings with crispy chips — quick and satisfying.",
    price: 50.00,
    priceLabel: "R50.00",
    currency: "ZAR",
    image: chickenPap,
    badges: ["Quick bite"],
    isFeatured: false,
  },

  // === GRILLS & PRIME STEAKS ===
  {
    id: "wors-pap-relish",
    categorySlug: "grills-steaks",
    name: "Wors, Pap & Relish",
    description: "Traditional boerewors grilled, served with pap and relish.",
    price: 45.00,
    priceLabel: "R45.00",
    currency: "ZAR",
    image: papWoers,
    badges: ["Local favourite"],
    isFeatured: true,
  },
  {
    id: "chuck-steak-pap",
    categorySlug: "grills-steaks",
    name: "300g Chuck Steak, Pap & Relish",
    description: "300g chuck steak grilled to order with pap and relish.",
    price: null,
    priceLabel: "Priced by weight",
    currency: "ZAR",
    image: steakChickenPap,
    badges: ["Premium", "Priced by weight"],
    isFeatured: false,
  },
  {
    id: "prime-rib-chips",
    categorySlug: "grills-steaks",
    name: "250g Prime Rib Steak & Chips",
    description: "250g prime rib steak with crispy chips — premium quality.",
    price: null,
    priceLabel: "Priced by weight",
    currency: "ZAR",
    image: steakChickenPap,
    badges: ["Premium", "Priced by weight"],
    isFeatured: false,
  },
  {
    id: "tbone-chips",
    categorySlug: "grills-steaks",
    name: "250g T-Bone Steak & Chips",
    description: "250g T-bone steak grilled to perfection with chips.",
    price: null,
    priceLabel: "Priced by weight",
    currency: "ZAR",
    image: steakChickenPap,
    badges: ["Premium", "Priced by weight"],
    isFeatured: false,
  },
  {
    id: "pork-loin-pap",
    categorySlug: "grills-steaks",
    name: "300g Pork Loin Chops, Pap & Relish",
    description: "300g pork loin chops grilled, served with pap and relish.",
    price: null,
    priceLabel: "Priced by weight",
    currency: "ZAR",
    image: steakChickenPap,
    badges: ["Priced by weight"],
    isFeatured: false,
  },
  {
    id: "pork-ribs-chips",
    categorySlug: "grills-steaks",
    name: "400g Pork Ribs & Chips",
    description: "400g pork ribs slow-cooked and grilled, served with chips.",
    price: 99.00,
    priceLabel: "R99.00",
    currency: "ZAR",
    image: steakChickenPap,
    badges: ["Popular"],
    isFeatured: true,
  },

  // === BURGERS ===
  {
    id: "burger-chips",
    categorySlug: "burgers",
    name: "Burger & Chips",
    description: "Classic burger with crispy chips — simple, bold, delicious.",
    price: 65.00,
    priceLabel: "R65.00",
    currency: "ZAR",
    image: burgerChips1,
    badges: ["Best seller"],
    isFeatured: true,
  },
  {
    id: "chilli-burger-chips",
    categorySlug: "burgers",
    name: "Chilli Burger & Chips",
    description: "Burger with heat and flavour, served with chips.",
    price: 65.00,
    priceLabel: "R65.00",
    currency: "ZAR",
    image: chickenBurger,
    badges: ["Spicy"],
    isFeatured: false,
  },

  // === CHIPS ===
  {
    id: "chips-small",
    categorySlug: "chips",
    name: "Small Chips",
    description: "Crispy golden chips — perfect side portion.",
    price: 25.00,
    priceLabel: "R25.00",
    currency: "ZAR",
    image: burgerChips2,
    badges: [],
    isFeatured: false,
  },
  {
    id: "chips-medium",
    categorySlug: "chips",
    name: "Medium Chips",
    description: "Medium portion of crispy chips.",
    price: 50.00,
    priceLabel: "R50.00",
    currency: "ZAR",
    image: burgerChips2,
    badges: [],
    isFeatured: false,
  },
  {
    id: "chips-large",
    categorySlug: "chips",
    name: "Large Chips",
    description: "Large portion of crispy golden chips — great for sharing.",
    price: 89.00,
    priceLabel: "R89.00",
    currency: "ZAR",
    image: burgerChips2,
    badges: [],
    isFeatured: false,
  },

  // === TRADITIONAL MEALS ===
  {
    id: "beef-stew-pap",
    categorySlug: "traditional-meals",
    name: "Beef Stew & Pap",
    description: "Hearty beef stew served with pap — township classic.",
    price: 60.00,
    priceLabel: "R60.00",
    currency: "ZAR",
    image: papWoers,
    badges: ["Traditional"],
    isFeatured: true,
  },
  {
    id: "peri-chicken-livers",
    categorySlug: "traditional-meals",
    name: "Peri-Peri Chicken Livers & Pap",
    description: "Chicken livers in peri-peri sauce with pap — bold flavour.",
    price: 50.00,
    priceLabel: "R50.00",
    currency: "ZAR",
    image: papWoers,
    badges: ["Traditional", "Spicy"],
    isFeatured: true,
  },
  {
    id: "ox-liver-pap",
    categorySlug: "traditional-meals",
    name: "Ox Liver & Pap",
    description: "Ox liver cooked traditional style with pap.",
    price: 50.00,
    priceLabel: "R50.00",
    currency: "ZAR",
    image: papWoers,
    badges: ["Traditional"],
    isFeatured: false,
  },
  {
    id: "mala-mogodu-pap",
    categorySlug: "traditional-meals",
    name: "Mala Mogodu & Pap",
    description: "Township favourite — tripe slow-cooked in rich sauce with pap.",
    price: 60.00,
    priceLabel: "R60.00",
    currency: "ZAR",
    image: papWoers,
    badges: ["Traditional", "Local favourite"],
    isFeatured: true,
  },
  {
    id: "thlakwana-pap",
    categorySlug: "traditional-meals",
    name: "Thlakwana & Pap",
    description: "Sheep head delicacy slow-cooked and served with pap.",
    price: 60.00,
    priceLabel: "R60.00",
    currency: "ZAR",
    image: papWoers,
    badges: ["Traditional"],
    isFeatured: false,
  },

  // === SIDES & SALADS ===
  {
    id: "side-pap",
    categorySlug: "sides-salads",
    name: "Pap",
    description: "Traditional pap — the perfect base.",
    price: 19.00,
    priceLabel: "R19.00",
    currency: "ZAR",
    image: papWoers,
    badges: [],
    isFeatured: false,
  },
  {
    id: "side-rice",
    categorySlug: "sides-salads",
    name: "Rice",
    description: "Steamed white rice.",
    price: 19.00,
    priceLabel: "R19.00",
    currency: "ZAR",
    image: papWoers,
    badges: [],
    isFeatured: false,
  },
  {
    id: "veg-tomato-spinach",
    categorySlug: "sides-salads",
    name: "Tomato Spinach",
    description: "Fresh spinach in tomato sauce.",
    price: 15.00,
    priceLabel: "R15.00",
    currency: "ZAR",
    image: papWoers,
    badges: [],
    isFeatured: false,
  },
  {
    id: "veg-pumpkin",
    categorySlug: "sides-salads",
    name: "Pumpkin",
    description: "Cooked pumpkin — sweet and satisfying.",
    price: 15.00,
    priceLabel: "R15.00",
    currency: "ZAR",
    image: papWoers,
    badges: [],
    isFeatured: false,
  },
  {
    id: "salad-chakalaka",
    categorySlug: "sides-salads",
    name: "Spicy Chakalaka",
    description: "Traditional spicy vegetable relish.",
    price: 15.00,
    priceLabel: "R15.00",
    currency: "ZAR",
    image: papWoers,
    badges: ["Spicy"],
    isFeatured: false,
  },
  {
    id: "salad-green",
    categorySlug: "sides-salads",
    name: "Green Salad",
    description: "Fresh garden salad.",
    price: 18.00,
    priceLabel: "R18.00",
    currency: "ZAR",
    image: papWoers,
    badges: [],
    isFeatured: false,
  },
];

// BYTES ITEMS
export const bytesItems = [
  // === SIM & ACTIVATION ===
  {
    id: "bytes-sim-activation",
    categorySlug: "sim-activation",
    name: "SIM Activation",
    description: "Get your new SIM activated fast — bring ID, we handle the rest.",
    price: null,
    priceLabel: "In-store support",
    currency: "ZAR",
    image: simActivation,
    badges: ["Bytes", "In-store"],
    isFeatured: true,
  },
  {
    id: "bytes-sim-swap",
    categorySlug: "sim-activation",
    name: "SIM Swap",
    description: "Lost or damaged SIM? We'll swap it and keep your number.",
    price: null,
    priceLabel: "In-store support",
    currency: "ZAR",
    image: simSwap,
    badges: ["Bytes"],
    isFeatured: false,
  },
  {
    id: "bytes-sim-upgrade",
    categorySlug: "sim-activation",
    name: "SIM Upgrade",
    description: "Upgrade to a new SIM card — quick in-store service.",
    price: null,
    priceLabel: "In-store support",
    currency: "ZAR",
    image: simUpgrade,
    badges: ["Bytes"],
    isFeatured: false,
  },

  // === DEVICES & PREPAID ===
  {
    id: "bytes-prepaid-starter",
    categorySlug: "devices-prepaid",
    name: "Prepaid Starter Packs",
    description: "Complete starter packs with airtime and data — ask about current offers.",
    price: null,
    priceLabel: "In-store quote",
    currency: "ZAR",
    image: prepaidStarter,
    badges: ["Bytes"],
    isFeatured: true,
  },
  {
    id: "bytes-prepaid-devices",
    categorySlug: "devices-prepaid",
    name: "Prepaid Devices",
    description: "Affordable prepaid handsets — check in-store for available stock.",
    price: null,
    priceLabel: "In-store quote",
    currency: "ZAR",
    image: prepaidDevices,
    badges: ["Bytes"],
    isFeatured: false,
  },
  {
    id: "bytes-accessories",
    categorySlug: "devices-prepaid",
    name: "Phone Accessories",
    description: "Chargers, cases, screen protectors — essentials in stock.",
    price: null,
    priceLabel: "In-store quote",
    currency: "ZAR",
    image: phoneAccessories,
    badges: ["Bytes"],
    isFeatured: false,
  },

  // === DATA & FIBRE ===
  {
    id: "bytes-data-bundles",
    categorySlug: "data-fibre",
    name: "Data Bundles",
    description: "Daily, weekly, and monthly data options — get connected instantly.",
    price: null,
    priceLabel: "In-store quote",
    currency: "ZAR",
    image: dataBundles,
    badges: ["Bytes"],
    isFeatured: true,
  },
  {
    id: "bytes-fibre-support",
    categorySlug: "data-fibre",
    name: "Fibre Support",
    description: "Fibre setup help and troubleshooting — we'll get you sorted.",
    price: null,
    priceLabel: "In-store support",
    currency: "ZAR",
    image: fibreSupport,
    badges: ["Bytes"],
    isFeatured: false,
  },
  {
    id: "bytes-wifi-router",
    categorySlug: "data-fibre",
    name: "WiFi Router Setup",
    description: "Router configuration and troubleshooting — ask in-store.",
    price: null,
    priceLabel: "In-store support",
    currency: "ZAR",
    image: wifiRouter,
    badges: ["Bytes"],
    isFeatured: false,
  },

  // === UPGRADES & SUPPORT ===
  {
    id: "bytes-contract-upgrade",
    categorySlug: "upgrades-support",
    name: "Contract Upgrade Help",
    description: "Ready to upgrade? We'll help you find the best deal.",
    price: null,
    priceLabel: "In-store support",
    currency: "ZAR",
    image: contractUpgrade,
    badges: ["Bytes"],
    isFeatured: true,
  },
  {
    id: "bytes-device-troubleshoot",
    categorySlug: "upgrades-support",
    name: "Device Troubleshooting",
    description: "Phone not working right? Bring it in — we'll take a look.",
    price: null,
    priceLabel: "In-store support",
    currency: "ZAR",
    image: deviceTroubleshoot,
    badges: ["Bytes"],
    isFeatured: false,
  },
  {
    id: "bytes-network-support",
    categorySlug: "upgrades-support",
    name: "Network Support",
    description: "Signal issues or network problems? We can help troubleshoot.",
    price: null,
    priceLabel: "In-store support",
    currency: "ZAR",
    image: networkSupport,
    badges: ["Bytes"],
    isFeatured: false,
  },
];

// ALL ITEMS
export const items = [...foodItems, ...bytesItems];

// MENU NOTE
export const menuNote = "All menu items served with 1x starch, 1x vegetable & 1x salad of choice.";

// HELPER FUNCTIONS
export function getCategory(slug) {
  return categories.find((c) => c.slug === slug);
}

export function getItem(id) {
  return items.find((i) => i.id === id);
}

export function getItemsByCategory(slug) {
  return items.filter((i) => i.categorySlug === slug);
}

export function getFeatured(type = null) {
  return items.filter((i) => {
    if (!i.isFeatured) return false;
    if (!type) return true;
    const cat = getCategory(i.categorySlug);
    return cat?.type === type;
  });
}

export function getCategoriesByType(type) {
  return categories.filter((c) => c.type === type);
}

export type MenuItem = {
  name: string;
  description: string;
  price?: string;
};

export type MenuCategory = {
  id: string;
  name: string;
  arabicName: string;
  items: MenuItem[];
};

export type DayHours = {
  days: string;
  hours: string;
};

export type GalleryTile = {
  dish: string;
  note: string;
  gradient: string;
  /** Site-root-relative path where the real photo goes, once provided. */
  image: string;
};

/**
 * Fixed paths this site looks for under public/. Drop a file at the exact
 * path and it's used automatically — no code changes needed. See
 * public/images/README.md for the full list.
 */
export const assets = {
  logo: "/images/logo.png",
  /** Standalone flower mark, no wordmark — optional, used decoratively. */
  emblem: "/images/emblem.png",
  hero: "/images/hero.jpg",
};

export const restaurant = {
  name: "Saffron",
  fullName: "Saffron Middle Eastern Restaurant",
  arabicName: "زعفران",
  tagline: "A taste of the Middle East, in the heart of Sampaloc.",
  description:
    "Since opening near UST, Saffron has become Sampaloc's go-to table for authentic Arabic cooking — shawarma carved to order, kabsa perfumed with real saffron, and mezze made the slow way. Every dish is a small trip to the Levant, served with the warmth of a neighborhood spot.",
  address: "1015 Asturias St, Sampaloc, Manila, 1008 Metro Manila, Philippines",
  addressShort: "1015 Asturias St, Sampaloc, Manila",
  mapsQuery: "Saffron Middle Eastern Restaurant, 1015 Asturias St, Sampaloc, Manila",
  facebook: "https://www.facebook.com/saffron102218/",
  rating: {
    score: "4.6",
    count: "121",
    source: "Google Reviews",
  },
  hours: [
    { days: "Monday – Saturday", hours: "11:00 AM – 9:00 PM" },
    { days: "Sunday", hours: "11:00 AM – 8:30 PM" },
  ] satisfies DayHours[],
};

export const menu: MenuCategory[] = [
  {
    id: "shawarma",
    name: "Shawarma",
    arabicName: "شاورما",
    items: [
      {
        name: "Chicken Shawarma Wrap",
        description: "Marinated chicken shaved off the spit, garlic toum, pickles, warm pita",
      },
      {
        name: "Beef Shawarma Wrap",
        description: "Slow-roasted beef, tahini, sumac onions, warm pita",
      },
      {
        name: "Shawarma Platter",
        description: "Choice of chicken or beef over garlic rice, side salad, garlic sauce",
      },
    ],
  },
  {
    id: "mains",
    name: "Rice & Mains",
    arabicName: "الأطباق الرئيسية",
    items: [
      {
        name: "Kabsa",
        description: "Saffron-spiced rice with tender chicken or lamb, toasted nuts, raisins",
      },
      {
        name: "Sharooq Platter",
        description: "Saffron's signature mixed grill platter, served with rice and salad",
      },
      {
        name: "Thawm Macaroni",
        description: "Pasta tossed in Saffron's garlic sauce, a house favorite",
      },
    ],
  },
  {
    id: "mezze",
    name: "Mezze & Starters",
    arabicName: "المقبلات",
    items: [
      { name: "Hummus", description: "Chickpea and tahini dip, olive oil, warm pita" },
      { name: "Falafel", description: "Crisp-fried chickpea fritters, herb-flecked, tahini sauce" },
      { name: "Samosas", description: "Pastry parcels filled with spiced beef or vegetables" },
    ],
  },
  {
    id: "vegan",
    name: "Vegan",
    arabicName: "نباتي",
    items: [
      { name: "Falafel Wrap", description: "Falafel, pickled vegetables, tahini, warm pita" },
      { name: "Vegan Mezze Plate", description: "Hummus, falafel, tabbouleh, pickles, warm pita" },
    ],
  },
];

export const gallery: GalleryTile[] = [
  {
    dish: "Chicken Kabsa",
    note: "Saffron rice, slow-roasted chicken",
    gradient: "from-[#B23A2E] to-[#7A2420]",
    image: "/images/menu/chicken-kabsa.png",
  },
  {
    dish: "Chicken Shawarma",
    note: "Carved to order, garlic toum",
    gradient: "from-[#D4952B] to-[#9C6A1C]",
    image: "/images/menu/chicken-shawarma.png",
  },
  {
    dish: "Chicken Warda",
    note: "Crisp fried chicken, garlic dip, pita",
    gradient: "from-[#7C8A5E] to-[#4E5A38]",
    image: "/images/menu/chicken-warda.png",
  },
  {
    dish: "Beef Kofta Kebab",
    note: "Grilled beef kofta over saffron rice",
    gradient: "from-[#5C1A1A] to-[#2E0D0D]",
    image: "/images/menu/beef-kofta-kebab.png",
  },
  {
    dish: "Baklava",
    note: "Layered pastry, honey, nuts",
    gradient: "from-[#9C6A1C] to-[#D4952B]",
    image: "/images/menu/baklava.png",
  },
  {
    dish: "Fresh Pita & Toum",
    note: "Baked in-house, daily",
    gradient: "from-[#7A2420] to-[#B23A2E]",
    image: "/images/menu/fresh-pita-toum.jpg",
  },
];

export const testimonial = {
  quote:
    "A delightful culinary gem that offers an authentic taste of Arabic cuisine — the shawarma alone is worth the trip to Sampaloc.",
  source: "Google Reviews, 4.6★ (121 reviews)",
};

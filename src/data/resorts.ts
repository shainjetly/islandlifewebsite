import type { Resort } from "@/types";

export const resorts: Resort[] = [
  {
    id: "1",
    slug: "soneva-jani",
    name: "Soneva Jani",
    tagline: "Barefoot luxury in a private lagoon",
    location: {
      island: "Medhufaru Island",
      atoll: "Noonu Atoll",
      coordinates: { lat: 5.9478, lng: 73.4328 },
    },
    images: {
      hero: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=1920&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=1200&q=80",
        "https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=1200&q=80",
        "https://images.unsplash.com/photo-1540202404-a2f29016b523?w=1200&q=80",
        "https://images.unsplash.com/photo-1586500036706-41963de24d8b?w=1200&q=80",
      ],
      thumbnail:
        "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=600&q=80",
    },
    priceFrom: 3200,
    currency: "USD",
    rating: 5,
    badges: ["Featured", "Ultra Luxury"],
    amenities: [
      { icon: "Waves", label: "Private Pool" },
      { icon: "Utensils", label: "Fine Dining" },
      { icon: "Sparkles", label: "Spa & Wellness" },
      { icon: "Ship", label: "Water Sports" },
      { icon: "Wine", label: "Wine Cellar" },
      { icon: "Palmtree", label: "Private Beach" },
    ],
    facts: {
      Transfer: "45min Seaplane",
      "Total Villas": "51 Overwater & Island",
      Restaurants: "11 Dining Venues",
      Vibe: "Barefoot Luxury",
      "Island Size": "150 Hectares",
      "Best For": "Families & Couples",
    },
    description:
      "Soneva Jani is a breathtaking resort set in a pristine lagoon in the Noonu Atoll. With overwater villas featuring retractable roofs for stargazing, private pools, and waterslides, it redefines luxury living. The resort champions sustainable luxury with its zero-waste philosophy, organic gardens, and commitment to marine conservation.",
    highlights: [
      "Retractable roof for stargazing from bed",
      "Private waterslides from villa to lagoon",
      "11 unique dining concepts including underwater restaurant",
      "Observatory with one of the largest telescopes in the Maldives",
    ],
    rooms: [
      {
        id: "sj-1",
        name: "1-Bedroom Water Retreat",
        description:
          "Overwater villa with private pool, retractable roof, and direct lagoon access",
        image:
          "https://images.unsplash.com/photo-1540202404-a2f29016b523?w=800&q=80",
        priceFrom: 3200,
        maxGuests: 3,
        size: "550 sqm",
      },
      {
        id: "sj-2",
        name: "2-Bedroom Water Reserve",
        description:
          "Expansive overwater residence with two pools and a waterslide",
        image:
          "https://images.unsplash.com/photo-1586500036706-41963de24d8b?w=800&q=80",
        priceFrom: 5800,
        maxGuests: 6,
        size: "900 sqm",
      },
      {
        id: "sj-3",
        name: "4-Bedroom Water Reserve",
        description:
          "The ultimate overwater mansion spanning across the lagoon",
        image:
          "https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=800&q=80",
        priceFrom: 12000,
        maxGuests: 10,
        size: "1800 sqm",
      },
    ],
    category: "luxury",
  },
  {
    id: "2",
    slug: "cheval-blanc-randheli",
    name: "Cheval Blanc Randheli",
    tagline: "Where LVMH artistry meets tropical paradise",
    location: {
      island: "Randheli Island",
      atoll: "Noonu Atoll",
      coordinates: { lat: 5.7925, lng: 73.3694 },
    },
    images: {
      hero: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=1920&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=1200&q=80",
        "https://images.unsplash.com/photo-1602002418816-5c0aeef426aa?w=1200&q=80",
        "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?w=1200&q=80",
        "https://images.unsplash.com/photo-1544550581-5f7ceaf7f992?w=1200&q=80",
      ],
      thumbnail:
        "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=600&q=80",
    },
    priceFrom: 2500,
    currency: "USD",
    rating: 5,
    badges: ["Best for Romance"],
    amenities: [
      { icon: "Waves", label: "Infinity Pool" },
      { icon: "Utensils", label: "4 Restaurants" },
      { icon: "Sparkles", label: "Guerlain Spa" },
      { icon: "Ship", label: "Yacht Charter" },
      { icon: "Palette", label: "Art Gallery" },
      { icon: "Palmtree", label: "Private Island" },
    ],
    facts: {
      Transfer: "40min Seaplane",
      "Total Villas": "46 Villas",
      Restaurants: "4 Restaurants & Bars",
      Vibe: "Contemporary Elegance",
      "Island Size": "5 Islands",
      "Best For": "Couples & Honeymooners",
    },
    description:
      "The Maldives Maison of LVMH's Cheval Blanc collection spans five islands connected by footbridges. Every detail reflects French artistry married with Maldivian warmth. The Guerlain Spa, set over the turquoise waters, offers transformative treatments that draw on both Eastern and Western traditions.",
    highlights: [
      "Only LVMH Maison in the Maldives",
      "Guerlain Spa over crystal-clear waters",
      "Private island dining experiences",
      "Curated art collection throughout the resort",
    ],
    rooms: [
      {
        id: "cb-1",
        name: "Garden Water Villa",
        description:
          "Elegant villa with garden terrace and overwater deck with pool",
        image:
          "https://images.unsplash.com/photo-1602002418816-5c0aeef426aa?w=800&q=80",
        priceFrom: 2500,
        maxGuests: 3,
        size: "340 sqm",
      },
      {
        id: "cb-2",
        name: "Exclusive Island",
        description:
          "Your very own private island with villa, pool, and dedicated team",
        image:
          "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?w=800&q=80",
        priceFrom: 15000,
        maxGuests: 8,
        size: "1500 sqm",
      },
    ],
    category: "luxury",
  },
  {
    id: "3",
    slug: "one-and-only-reethi-rah",
    name: "One&Only Reethi Rah",
    tagline: "Unparalleled grandeur on the largest resort island",
    location: {
      island: "Reethi Rah",
      atoll: "North Malé Atoll",
      coordinates: { lat: 4.4317, lng: 73.5489 },
    },
    images: {
      hero: "https://images.unsplash.com/photo-1602002418816-5c0aeef426aa?w=1920&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1544550581-5f7ceaf7f992?w=1200&q=80",
        "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=1200&q=80",
        "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=1200&q=80",
      ],
      thumbnail:
        "https://images.unsplash.com/photo-1602002418816-5c0aeef426aa?w=600&q=80",
    },
    priceFrom: 2100,
    currency: "USD",
    rating: 5,
    badges: ["Best Value"],
    amenities: [
      { icon: "Waves", label: "3 Pools" },
      { icon: "Utensils", label: "6 Restaurants" },
      { icon: "Sparkles", label: "Spa" },
      { icon: "Dumbbell", label: "Fitness" },
      { icon: "Ship", label: "Dive Center" },
      { icon: "Palmtree", label: "12 Beaches" },
    ],
    facts: {
      Transfer: "50min Speedboat",
      "Total Villas": "128 Beach & Water",
      Restaurants: "6 Restaurants & Bars",
      Vibe: "Grand Luxury",
      "Island Size": "44 Hectares",
      "Best For": "Everyone",
    },
    description:
      "Set on one of the largest private islands in the Maldives, One&Only Reethi Rah is a grand resort offering 12 pristine beaches, world-class dining, and expansive villas that provide ultimate privacy. From spectacular diving to sunset dolphin cruises, every moment is designed to inspire.",
    highlights: [
      "12 pristine white-sand beaches",
      "Largest resort island in the Maldives",
      "World-class PADI dive center",
      "Private beach dining under the stars",
    ],
    rooms: [
      {
        id: "oo-1",
        name: "Beach Villa",
        description: "Private beach villa with garden, pool, and ocean views",
        image:
          "https://images.unsplash.com/photo-1544550581-5f7ceaf7f992?w=800&q=80",
        priceFrom: 2100,
        maxGuests: 3,
        size: "280 sqm",
      },
      {
        id: "oo-2",
        name: "Grand Water Villa",
        description: "Overwater villa with sunset views and infinity pool",
        image:
          "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=800&q=80",
        priceFrom: 3400,
        maxGuests: 4,
        size: "420 sqm",
      },
    ],
    category: "luxury",
  },
  {
    id: "4",
    slug: "joali-maldives",
    name: "Joali Maldives",
    tagline: "An immersive art and luxury resort",
    location: {
      island: "Muravandhoo Island",
      atoll: "Raa Atoll",
      coordinates: { lat: 5.6889, lng: 72.9861 },
    },
    images: {
      hero: "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?w=1920&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1586500036706-41963de24d8b?w=1200&q=80",
        "https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=1200&q=80",
      ],
      thumbnail:
        "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?w=600&q=80",
    },
    priceFrom: 1800,
    currency: "USD",
    rating: 5,
    badges: [],
    amenities: [
      { icon: "Waves", label: "Private Pool" },
      { icon: "Utensils", label: "3 Restaurants" },
      { icon: "Sparkles", label: "ESPA" },
      { icon: "Palette", label: "Art Studio" },
      { icon: "Music", label: "Sound Bath" },
      { icon: "Palmtree", label: "Herbology" },
    ],
    facts: {
      Transfer: "45min Seaplane",
      "Total Villas": "73 Villas",
      Restaurants: "3 Restaurants",
      Vibe: "Artful Luxury",
      "Island Size": "24 Hectares",
      "Best For": "Art Lovers & Couples",
    },
    description:
      "Joali Maldives is the first immersive art resort in the Maldives, where carefully curated artworks are woven into the island landscape. Each villa is a masterpiece of design, combining Maldivian craftsmanship with contemporary art installations that tell stories of the ocean.",
    highlights: [
      "Over 50 art installations across the island",
      "Interactive art studio and workshops",
      "ESPA wellness center with ocean views",
      "Herbology garden for bespoke treatments",
    ],
    rooms: [
      {
        id: "jo-1",
        name: "Luxury Water Villa",
        description: "Overwater retreat with art-inspired interiors and pool",
        image:
          "https://images.unsplash.com/photo-1586500036706-41963de24d8b?w=800&q=80",
        priceFrom: 1800,
        maxGuests: 3,
        size: "250 sqm",
      },
    ],
    category: "luxury",
  },
  {
    id: "5",
    slug: "gili-lankanfushi",
    name: "Gili Lankanfushi",
    tagline: "No news, no shoes — just pure island bliss",
    location: {
      island: "Lankanfushi Island",
      atoll: "North Malé Atoll",
      coordinates: { lat: 4.3258, lng: 73.5028 },
    },
    images: {
      hero: "https://images.unsplash.com/photo-1544550581-5f7ceaf7f992?w=1920&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=1200&q=80",
        "https://images.unsplash.com/photo-1602002418816-5c0aeef426aa?w=1200&q=80",
      ],
      thumbnail:
        "https://images.unsplash.com/photo-1544550581-5f7ceaf7f992?w=600&q=80",
    },
    priceFrom: 1500,
    currency: "USD",
    rating: 5,
    badges: ["Eco-Luxury"],
    amenities: [
      { icon: "Waves", label: "Overwater" },
      { icon: "Utensils", label: "Fresh Cuisine" },
      { icon: "Sparkles", label: "Meera Spa" },
      { icon: "Leaf", label: "Eco-Friendly" },
      { icon: "Ship", label: "Snorkeling" },
      { icon: "Palmtree", label: "Robinson Crusoe" },
    ],
    facts: {
      Transfer: "20min Speedboat",
      "Total Villas": "45 Overwater",
      Restaurants: "3 Dining Experiences",
      Vibe: "Eco Luxury",
      "Island Size": "6 Hectares",
      "Best For": "Eco-Conscious Travelers",
    },
    description:
      "Gili Lankanfushi embodies the philosophy of 'No News, No Shoes' in the most luxurious way possible. Built entirely from sustainable materials, these overwater villas stand on stilts above the crystalline lagoon, connected to the island by wooden jetties.",
    highlights: [
      "Built entirely from sustainable materials",
      "Private overwater residences connected by jetty",
      "Marine biology experiences with resident team",
      "Award-winning sustainability program",
    ],
    rooms: [
      {
        id: "gl-1",
        name: "Villa Suite",
        description: "Open-plan overwater villa with panoramic ocean views",
        image:
          "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800&q=80",
        priceFrom: 1500,
        maxGuests: 3,
        size: "200 sqm",
      },
    ],
    category: "premium",
  },
  {
    id: "6",
    slug: "soneva-fushi",
    name: "Soneva Fushi",
    tagline: "The original desert island hideaway",
    location: {
      island: "Kunfunadhoo Island",
      atoll: "Baa Atoll",
      coordinates: { lat: 5.1089, lng: 73.0792 },
    },
    images: {
      hero: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=1920&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=1200&q=80",
        "https://images.unsplash.com/photo-1540202404-a2f29016b523?w=1200&q=80",
      ],
      thumbnail:
        "https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=600&q=80",
    },
    priceFrom: 1950,
    currency: "USD",
    rating: 5,
    badges: ["Iconic"],
    amenities: [
      { icon: "Waves", label: "Private Pool" },
      { icon: "Utensils", label: "9 Dining" },
      { icon: "Sparkles", label: "Six Senses Spa" },
      { icon: "Star", label: "Observatory" },
      { icon: "Film", label: "Cinema" },
      { icon: "Palmtree", label: "Dense Jungle" },
    ],
    facts: {
      Transfer: "35min Seaplane",
      "Total Villas": "63 Villas",
      Restaurants: "9 Dining Concepts",
      Vibe: "Intelligent Luxury",
      "Island Size": "62 Hectares",
      "Best For": "Families & Nature Lovers",
    },
    description:
      "The pioneer of barefoot luxury in the Maldives, Soneva Fushi is nestled in the UNESCO Biosphere Reserve of Baa Atoll. Dense tropical jungle, pristine beaches, and an unwavering commitment to sustainability create an experience that connects guests with nature in the most luxurious way.",
    highlights: [
      "Set in UNESCO Biosphere Reserve",
      "Open-air Cinema Paradiso",
      "Largest overwater observatory in the Maldives",
      "Chocolate and ice cream rooms",
    ],
    rooms: [
      {
        id: "sf-1",
        name: "Crusoe Villa",
        description:
          "Secluded beach villa wrapped in tropical jungle with pool",
        image:
          "https://images.unsplash.com/photo-1540202404-a2f29016b523?w=800&q=80",
        priceFrom: 1950,
        maxGuests: 4,
        size: "450 sqm",
      },
    ],
    category: "luxury",
  },
];

export function getResortBySlug(slug: string): Resort | undefined {
  return resorts.find((r) => r.slug === slug);
}

export function getFeaturedResorts(): Resort[] {
  return resorts.filter((r) => r.badges.includes("Featured") || r.badges.includes("Iconic")).slice(0, 4);
}

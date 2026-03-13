import type { Guesthouse } from "@/types";

export const guesthouses: Guesthouse[] = [
  {
    id: "1",
    slug: "the-palms-boutique",
    name: "The Palms Boutique",
    tagline: "Intimate luxury on a local island",
    location: {
      island: "Thulusdhoo",
      atoll: "North Malé Atoll",
      coordinates: { lat: 4.3747, lng: 73.6478 },
    },
    images: {
      hero: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1920&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=1200&q=80",
        "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1200&q=80",
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&q=80",
      ],
      thumbnail:
        "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600&q=80",
    },
    priceFrom: 120,
    currency: "USD",
    rating: 4.8,
    reviewCount: 142,
    badges: ["Top Rated"],
    amenities: [
      { icon: "Wifi", label: "Free WiFi" },
      { icon: "Utensils", label: "Restaurant" },
      { icon: "Ship", label: "Excursions" },
      { icon: "Waves", label: "Surf Break" },
    ],
    description:
      "A charming boutique guesthouse on the surf island of Thulusdhoo. The Palms offers an authentic Maldivian experience with modern comforts, just steps from world-class surf breaks and pristine beaches.",
    rooms: [
      {
        id: "pb-1",
        name: "Deluxe Ocean Room",
        description: "Spacious room with ocean views and private balcony",
        image:
          "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&q=80",
        priceFrom: 120,
        maxGuests: 2,
        size: "35 sqm",
      },
      {
        id: "pb-2",
        name: "Premium Suite",
        description: "Large suite with separate living area and sea views",
        image:
          "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=80",
        priceFrom: 180,
        maxGuests: 3,
        size: "55 sqm",
      },
    ],
    category: "boutique",
  },
  {
    id: "2",
    slug: "ocean-vista-retreat",
    name: "Ocean Vista Retreat",
    tagline: "Panoramic ocean views on Maafushi",
    location: {
      island: "Maafushi",
      atoll: "South Malé Atoll",
      coordinates: { lat: 3.9399, lng: 73.4927 },
    },
    images: {
      hero: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1920&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1200&q=80",
        "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=1200&q=80",
      ],
      thumbnail:
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=80",
    },
    priceFrom: 95,
    currency: "USD",
    rating: 4.6,
    reviewCount: 238,
    badges: ["Popular"],
    amenities: [
      { icon: "Wifi", label: "Free WiFi" },
      { icon: "Utensils", label: "Breakfast" },
      { icon: "Ship", label: "Snorkeling" },
      { icon: "Bike", label: "Bike Rental" },
    ],
    description:
      "Located on the vibrant island of Maafushi, Ocean Vista Retreat offers comfortable rooms with stunning ocean views. Perfect for travelers seeking an affordable yet authentic Maldivian experience.",
    rooms: [
      {
        id: "ov-1",
        name: "Standard Room",
        description: "Comfortable room with modern amenities",
        image:
          "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&q=80",
        priceFrom: 95,
        maxGuests: 2,
        size: "28 sqm",
      },
    ],
    category: "budget",
  },
  {
    id: "3",
    slug: "maafushi-garden-inn",
    name: "Maafushi Garden Inn",
    tagline: "A tropical garden oasis",
    location: {
      island: "Maafushi",
      atoll: "South Malé Atoll",
      coordinates: { lat: 3.9385, lng: 73.4915 },
    },
    images: {
      hero: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1920&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&q=80",
        "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=1200&q=80",
      ],
      thumbnail:
        "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=600&q=80",
    },
    priceFrom: 85,
    currency: "USD",
    rating: 4.5,
    reviewCount: 186,
    badges: [],
    amenities: [
      { icon: "Wifi", label: "Free WiFi" },
      { icon: "Utensils", label: "Restaurant" },
      { icon: "TreePalm", label: "Garden" },
      { icon: "Ship", label: "Excursions" },
    ],
    description:
      "Nestled in a lush tropical garden, Maafushi Garden Inn offers a peaceful retreat on one of the Maldives' most popular local islands. Enjoy the warmth of Maldivian hospitality and easy access to water activities.",
    rooms: [
      {
        id: "mg-1",
        name: "Garden View Room",
        description: "Cozy room overlooking the tropical garden",
        image:
          "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",
        priceFrom: 85,
        maxGuests: 2,
        size: "25 sqm",
      },
    ],
    category: "budget",
  },
  {
    id: "4",
    slug: "coral-reef-lodge",
    name: "Coral Reef Lodge",
    tagline: "Steps away from the house reef",
    location: {
      island: "Rasdhoo",
      atoll: "Ari Atoll",
      coordinates: { lat: 4.2614, lng: 72.9869 },
    },
    images: {
      hero: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=1920&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1200&q=80",
        "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1200&q=80",
      ],
      thumbnail:
        "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=600&q=80",
    },
    priceFrom: 110,
    currency: "USD",
    rating: 4.7,
    reviewCount: 97,
    badges: ["Best for Diving"],
    amenities: [
      { icon: "Wifi", label: "Free WiFi" },
      { icon: "Utensils", label: "Half Board" },
      { icon: "Ship", label: "Dive Center" },
      { icon: "Fish", label: "House Reef" },
    ],
    description:
      "Coral Reef Lodge is a diver's paradise on the island of Rasdhoo in Ari Atoll. With a world-class house reef just steps away, it's the perfect base for underwater adventures with hammerhead sharks, manta rays, and vibrant coral gardens.",
    rooms: [
      {
        id: "cr-1",
        name: "Ocean Front Room",
        description: "Bright room with direct beach access",
        image:
          "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&q=80",
        priceFrom: 110,
        maxGuests: 2,
        size: "30 sqm",
      },
    ],
    category: "boutique",
  },
  {
    id: "5",
    slug: "island-breeze-guesthouse",
    name: "Island Breeze Guesthouse",
    tagline: "Feel the ocean breeze",
    location: {
      island: "Dhigurah",
      atoll: "South Ari Atoll",
      coordinates: { lat: 3.5097, lng: 72.9281 },
    },
    images: {
      hero: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1920&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=1200&q=80",
      ],
      thumbnail:
        "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600&q=80",
    },
    priceFrom: 90,
    currency: "USD",
    rating: 4.4,
    reviewCount: 64,
    badges: [],
    amenities: [
      { icon: "Wifi", label: "Free WiFi" },
      { icon: "Utensils", label: "Breakfast" },
      { icon: "Ship", label: "Whale Sharks" },
      { icon: "Palmtree", label: "Long Beach" },
    ],
    description:
      "Located on Dhigurah, famous for its 3km-long beach and whale shark encounters, Island Breeze Guesthouse offers comfortable stays with the chance to swim alongside the gentle giants of the ocean.",
    rooms: [
      {
        id: "ib-1",
        name: "Beach View Room",
        description: "Simple, clean room with beach views",
        image:
          "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&q=80",
        priceFrom: 90,
        maxGuests: 2,
        size: "26 sqm",
      },
    ],
    category: "budget",
  },
  {
    id: "6",
    slug: "sunset-haven",
    name: "Sunset Haven",
    tagline: "Romance at the golden hour",
    location: {
      island: "Gulhi",
      atoll: "South Malé Atoll",
      coordinates: { lat: 3.9167, lng: 73.4833 },
    },
    images: {
      hero: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1920&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&q=80",
      ],
      thumbnail:
        "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=600&q=80",
    },
    priceFrom: 130,
    currency: "USD",
    rating: 4.6,
    reviewCount: 52,
    badges: ["Romantic"],
    amenities: [
      { icon: "Wifi", label: "Free WiFi" },
      { icon: "Utensils", label: "Full Board" },
      { icon: "Heart", label: "Romantic" },
      { icon: "Sunset", label: "Sunset View" },
    ],
    description:
      "Sunset Haven on the quiet island of Gulhi offers one of the most spectacular sunset views in the Maldives. This romantic guesthouse is perfect for couples seeking intimacy, tranquility, and natural beauty.",
    rooms: [
      {
        id: "sh-1",
        name: "Sunset Suite",
        description: "Romantic suite with sunset views and private terrace",
        image:
          "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",
        priceFrom: 130,
        maxGuests: 2,
        size: "40 sqm",
      },
    ],
    category: "romantic",
  },
];

export function getGuesthouseBySlug(slug: string): Guesthouse | undefined {
  return guesthouses.find((g) => g.slug === slug);
}

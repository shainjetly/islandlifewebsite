import type { ExperienceCategory, Experience } from "@/types";

export const experienceCategories: ExperienceCategory[] = [
  {
    id: "ocean",
    slug: "ocean-adventures",
    name: "Ocean Adventures",
    image:
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1200&q=80",
    description:
      "Dive into crystal-clear waters and discover a world beneath the surface",
  },
  {
    id: "sunset",
    slug: "sunset-cruises",
    name: "Sunset & Cruises",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=80",
    description: "Sail into golden horizons aboard traditional Maldivian dhonis",
  },
  {
    id: "culinary",
    slug: "culinary-excellence",
    name: "Culinary Excellence",
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&q=80",
    description:
      "Savor extraordinary dining experiences from underwater restaurants to starlit beaches",
  },
  {
    id: "wellness",
    slug: "wellness-spa",
    name: "Wellness & Spa",
    image:
      "https://images.unsplash.com/photo-1540555700478-4be289fbec6d?w=1200&q=80",
    description:
      "Restore body and soul with ancient healing traditions in paradise",
  },
];

export const experiences: Experience[] = [
  {
    id: "1",
    slug: "snorkeling-with-manta-rays",
    name: "Snorkeling with Manta Rays",
    description:
      "Swim alongside majestic manta rays at Hanifaru Bay, one of the world's largest manta ray feeding stations in the UNESCO Biosphere Reserve.",
    image:
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1200&q=80",
    duration: "4 Hours",
    type: "Guided Tour",
    priceFrom: 180,
    currency: "USD",
    categoryId: "ocean",
    badges: ["Popular"],
  },
  {
    id: "2",
    slug: "private-sandbank-picnic",
    name: "Private Sandbank Picnic",
    description:
      "Be whisked away to a deserted sandbank for a private gourmet picnic surrounded by nothing but turquoise ocean and endless sky.",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=80",
    duration: "3 Hours",
    type: "Private Experience",
    priceFrom: 350,
    currency: "USD",
    categoryId: "sunset",
    badges: ["Exclusive"],
  },
  {
    id: "3",
    slug: "underwater-fine-dining",
    name: "Underwater Fine Dining",
    description:
      "Dine beneath the ocean at the world's first underwater restaurant, surrounded by vibrant coral reefs and marine life.",
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&q=80",
    duration: "2.5 Hours",
    type: "Dining",
    priceFrom: 450,
    currency: "USD",
    categoryId: "culinary",
    badges: ["Iconic"],
  },
  {
    id: "4",
    slug: "traditional-dhoni-sunset-cruise",
    name: "Traditional Dhoni Sunset Cruise",
    description:
      "Sail on a traditional Maldivian dhoni as the sun paints the sky in shades of gold, pink, and orange. Spot dolphins playing in the bow wake.",
    image:
      "https://images.unsplash.com/photo-1540202404-a2f29016b523?w=1200&q=80",
    duration: "2 Hours",
    type: "Group Activity",
    priceFrom: 85,
    currency: "USD",
    categoryId: "sunset",
    badges: [],
  },
  {
    id: "5",
    slug: "overwater-spa-journey",
    name: "Overwater Spa Journey",
    description:
      "Experience a transformative wellness journey in an overwater spa pavilion, combining ancient Maldivian healing with modern techniques.",
    image:
      "https://images.unsplash.com/photo-1540555700478-4be289fbec6d?w=1200&q=80",
    duration: "3 Hours",
    type: "Wellness",
    priceFrom: 280,
    currency: "USD",
    categoryId: "wellness",
    badges: ["Popular"],
  },
  {
    id: "6",
    slug: "whale-shark-swimming",
    name: "Whale Shark Swimming",
    description:
      "Swim alongside the gentle giants of the ocean in South Ari Atoll, home to year-round whale shark sightings.",
    image:
      "https://images.unsplash.com/photo-1586500036706-41963de24d8b?w=1200&q=80",
    duration: "5 Hours",
    type: "Guided Tour",
    priceFrom: 200,
    currency: "USD",
    categoryId: "ocean",
    badges: ["Bucket List"],
  },
];

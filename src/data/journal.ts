import type { Article } from "@/types";

export const articles: Article[] = [
  {
    id: "1",
    slug: "overwater-opulence-week-at-soneva-jani",
    title: "Overwater Opulence: A Week at Soneva Jani",
    excerpt:
      "From retractable roofs that reveal the Milky Way to private waterslides that plunge into crystalline lagoons, our week at Soneva Jani was nothing short of extraordinary.",
    content: `
<p class="drop-cap">There are places in this world that feel almost too beautiful to be real, and Soneva Jani is one of them. Arriving by seaplane over the Noonu Atoll, the first glimpse of the resort's overwater villas stretching across the turquoise lagoon is enough to take your breath away.</p>

<p>Our villa — a 550-square-meter water retreat — came with its own infinity pool, a retractable roof above the master bedroom for stargazing, and a waterslide that spiraled directly into the warm lagoon waters below. It was, without exaggeration, the most extraordinary accommodation we have ever experienced.</p>

<h2>Dining Among the Stars</h2>

<p>Soneva Jani takes dining to another level entirely. With eleven restaurants and dining concepts scattered across the resort, every meal became an event. The underwater restaurant, with its panoramic views of the reef, served a tasting menu that married Japanese precision with Maldivian ingredients.</p>

<blockquote>
<p>The moment you step onto Soneva Jani, the outside world simply ceases to exist. Time moves differently here — measured not in hours, but in sunsets, tide changes, and the slow arc of stars overhead.</p>
</blockquote>

<h2>The Art of Doing Nothing</h2>

<p>Perhaps the greatest luxury at Soneva Jani is the permission to do absolutely nothing. Days drift by in a haze of hammock naps, lazy snorkeling over the house reef, and long conversations over sunset cocktails. The resort's "No News, No Shoes" philosophy isn't just a tagline — it's a way of being.</p>

<p>As the sun set on our final evening, painting the sky in shades of amber and rose, we understood why guests return to Soneva Jani year after year. It's not just a resort; it's a state of mind.</p>
    `,
    image:
      "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=1920&q=80",
    author: {
      name: "Elena Rossi",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
      role: "Travel Editor",
    },
    category: "Resort Reviews",
    tags: ["Luxury", "Resorts", "Soneva", "Noonu Atoll"],
    publishedAt: "2024-10-12",
    readTime: "8 min read",
    featured: true,
  },
  {
    id: "2",
    slug: "finding-serenity-at-baa-atoll",
    title: "Finding Serenity in Baa Atoll",
    excerpt:
      "A journey through the UNESCO Biosphere Reserve reveals a Maldives few travelers ever see — untouched reefs, manta ray highways, and islands frozen in time.",
    content: "",
    image:
      "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=1920&q=80",
    author: {
      name: "Marco Chen",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
      role: "Dive Editor",
    },
    category: "Destinations",
    tags: ["Baa Atoll", "UNESCO", "Snorkeling", "Nature"],
    publishedAt: "2024-09-28",
    readTime: "6 min read",
    featured: false,
  },
  {
    id: "3",
    slug: "ultimate-maldivian-packing-guide",
    title: "The Ultimate Maldivian Packing Guide",
    excerpt:
      "Everything you need (and don't need) for your Maldives trip. From reef-safe sunscreen to the perfect resort wear, our expert guide has you covered.",
    content: "",
    image:
      "https://images.unsplash.com/photo-1544550581-5f7ceaf7f992?w=1920&q=80",
    author: {
      name: "Amina Zaki",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80",
      role: "Lifestyle Editor",
    },
    category: "Travel Tips",
    tags: ["Packing", "Tips", "Essentials"],
    publishedAt: "2024-09-15",
    readTime: "5 min read",
    featured: false,
  },
  {
    id: "4",
    slug: "dining-under-stars-and-waves",
    title: "Dining Under the Stars and Waves",
    excerpt:
      "From underwater restaurants to treehouse dinners, the Maldives offers some of the world's most extraordinary dining experiences.",
    content: "",
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&q=80",
    author: {
      name: "Elena Rossi",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
      role: "Travel Editor",
    },
    category: "Culinary",
    tags: ["Dining", "Restaurants", "Culinary", "Fine Dining"],
    publishedAt: "2024-08-22",
    readTime: "7 min read",
    featured: false,
  },
  {
    id: "5",
    slug: "hidden-gems-of-ari-atoll",
    title: "Hidden Gems of Ari Atoll",
    excerpt:
      "Beyond the famous resorts lies a constellation of local islands, secret dive sites, and untouched beaches waiting to be discovered.",
    content: "",
    image:
      "https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=1920&q=80",
    author: {
      name: "Marco Chen",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
      role: "Dive Editor",
    },
    category: "Destinations",
    tags: ["Ari Atoll", "Hidden Gems", "Local Islands", "Diving"],
    publishedAt: "2024-08-10",
    readTime: "6 min read",
    featured: false,
  },
  {
    id: "6",
    slug: "sustainable-luxury-the-new-wave",
    title: "Sustainable Luxury: The New Wave",
    excerpt:
      "How Maldivian resorts are pioneering a new era of eco-conscious luxury, from solar-powered villas to coral regeneration programs.",
    content: "",
    image:
      "https://images.unsplash.com/photo-1540202404-a2f29016b523?w=1920&q=80",
    author: {
      name: "Amina Zaki",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80",
      role: "Lifestyle Editor",
    },
    category: "Sustainability",
    tags: ["Sustainability", "Eco-Luxury", "Conservation"],
    publishedAt: "2024-07-30",
    readTime: "9 min read",
    featured: false,
  },
  {
    id: "7",
    slug: "art-of-maldivian-craftsmanship",
    title: "The Art of Maldivian Craftsmanship",
    excerpt:
      "From lacquerwork to boat building, the traditional crafts of the Maldives tell stories of a maritime civilization spanning millennia.",
    content: "",
    image:
      "https://images.unsplash.com/photo-1586500036706-41963de24d8b?w=1920&q=80",
    author: {
      name: "Elena Rossi",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
      role: "Travel Editor",
    },
    category: "Culture",
    tags: ["Culture", "Craftsmanship", "Traditions"],
    publishedAt: "2024-07-15",
    readTime: "5 min read",
    featured: false,
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export function getFeaturedArticle(): Article | undefined {
  return articles.find((a) => a.featured);
}

export function getArticleCategories(): string[] {
  return [...new Set(articles.map((a) => a.category))];
}

// ===== Common Types =====

export interface SiteImage {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

export interface Location {
  island: string;
  atoll: string;
  coordinates?: {
    lat: number;
    lng: number;
  };
}

export interface Amenity {
  icon: string;
  label: string;
}

export interface NavLink {
  label: string;
  href: string;
}

// ===== Resort Types =====

export interface Resort {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  location: Location;
  images: {
    hero: string;
    gallery: string[];
    thumbnail: string;
  };
  priceFrom: number;
  currency: string;
  rating: number;
  badges: string[];
  amenities: Amenity[];
  facts: Record<string, string>;
  description: string;
  highlights: string[];
  rooms: RoomType[];
  category: "luxury" | "premium" | "boutique";
}

export interface RoomType {
  id: string;
  name: string;
  description: string;
  image: string;
  priceFrom: number;
  maxGuests: number;
  size: string;
}

// ===== Guesthouse Types =====

export interface Guesthouse {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  location: Location;
  images: {
    hero: string;
    gallery: string[];
    thumbnail: string;
  };
  priceFrom: number;
  currency: string;
  rating: number;
  reviewCount: number;
  badges: string[];
  amenities: Amenity[];
  description: string;
  rooms: RoomType[];
  category: "boutique" | "budget" | "family" | "romantic";
}

// ===== Experience Types =====

export interface ExperienceCategory {
  id: string;
  slug: string;
  name: string;
  image: string;
  description: string;
}

export interface Experience {
  id: string;
  slug: string;
  name: string;
  description: string;
  image: string;
  duration: string;
  type: string;
  priceFrom: number;
  currency: string;
  categoryId: string;
  badges: string[];
}

// ===== Journal/Article Types =====

export interface Article {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  author: {
    name: string;
    avatar: string;
    role: string;
  };
  category: string;
  tags: string[];
  publishedAt: string;
  readTime: string;
  featured: boolean;
}

// ===== Team Types =====

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
}

// ===== Office Types =====

export interface Office {
  id: string;
  city: string;
  country: string;
  address: string;
  phone: string;
  email: string;
  image: string;
}

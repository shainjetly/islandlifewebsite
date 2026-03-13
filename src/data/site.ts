import type { NavLink } from "@/types";

export const siteConfig = {
  name: "Island Life Travel",
  tagline: "Curating the extraordinary since 2010",
  description:
    "Discover the Maldives with Island Life Travel. Luxury resorts, authentic guesthouses, and unforgettable island experiences curated by local experts.",
  url: "https://islandlifetravel.com",
  email: "escape@islandlife.mv",
  phone: "+960 777 1234",
  whatsapp: "+960 777 1234",
  socials: {
    instagram: "https://instagram.com/islandlifetravel",
    facebook: "https://facebook.com/islandlifetravel",
    twitter: "https://twitter.com/islandlifetravel",
    youtube: "https://youtube.com/islandlifetravel",
  },
};

export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Resorts", href: "/resorts" },
  { label: "Guesthouses", href: "/guesthouses" },
  { label: "Experiences", href: "/experiences" },
  { label: "Journal", href: "/journal" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const footerLinks = {
  destinations: [
    { label: "North Male Atoll", href: "/resorts?atoll=north-male" },
    { label: "South Male Atoll", href: "/resorts?atoll=south-male" },
    { label: "Baa Atoll", href: "/resorts?atoll=baa" },
    { label: "Noonu Atoll", href: "/resorts?atoll=noonu" },
    { label: "Raa Atoll", href: "/resorts?atoll=raa" },
    { label: "Ari Atoll", href: "/resorts?atoll=ari" },
  ],
  explore: [
    { label: "Luxury Resorts", href: "/resorts" },
    { label: "Island Guesthouses", href: "/guesthouses" },
    { label: "Experiences", href: "/experiences" },
    { label: "The Island Edit", href: "/journal" },
    { label: "About Us", href: "/about" },
  ],
  connect: [
    { label: "Contact Us", href: "/contact" },
    { label: "Careers", href: "/contact" },
    { label: "Press", href: "/contact" },
    { label: "Partners", href: "/contact" },
  ],
};

"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const destinations = [
  {
    name: "Baa Atoll",
    image:
      "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=800&q=80",
    tag: "UNESCO Biosphere",
  },
  {
    name: "North Malé",
    image:
      "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800&q=80",
    tag: "Most Popular",
  },
  {
    name: "Noonu Atoll",
    image:
      "https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=800&q=80",
    tag: "Ultra Luxury",
  },
  {
    name: "Ari Atoll",
    image:
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80",
    tag: "Whale Sharks",
  },
  {
    name: "Raa Atoll",
    image:
      "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?w=800&q=80",
    tag: "Art & Culture",
  },
  {
    name: "South Ari",
    image:
      "https://images.unsplash.com/photo-1540202404-a2f29016b523?w=800&q=80",
    tag: "Marine Life",
  },
];

export function DestinationReel() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["2%", "-20%"]);

  return (
    <section
      ref={containerRef}
      className="py-24 overflow-hidden bg-[#fafaf9] dark:bg-[#111]"
    >
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 mb-14">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-muted-foreground block mb-3">
            Destinations
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-[-0.03em]">
            Explore the Atolls
          </h2>
        </motion.div>
      </div>

      {/* Horizontal scroll reel */}
      <motion.div
        className="flex gap-4 pl-6 lg:pl-10"
        style={{ x }}
      >
        {destinations.map((dest, i) => (
          <motion.div
            key={dest.name}
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.6, delay: i * 0.06 }}
            className="relative shrink-0 w-[280px] md:w-[340px] aspect-[3/4] rounded-xl overflow-hidden group cursor-pointer"
          >
            <Image
              src={dest.image}
              alt={dest.name}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              sizes="340px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <span className="text-[10px] font-medium uppercase tracking-[0.15em] text-white/50 block mb-1">
                {dest.tag}
              </span>
              <h3 className="text-xl font-semibold text-white tracking-[-0.01em]">
                {dest.name}
              </h3>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

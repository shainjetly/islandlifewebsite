"use client";

import Image from "next/image";
import Link from "next/link";
import { Star, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import type { Resort } from "@/types";

interface ResortCardProps {
  resort: Resort;
  index?: number;
  variant?: "large" | "default";
}

export function ResortCard({
  resort,
  index = 0,
  variant = "default",
}: ResortCardProps) {
  if (variant === "large") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{
          duration: 0.8,
          delay: index * 0.08,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <Link href={`/resorts/${resort.slug}`} className="group block">
          <div className="relative aspect-[21/9] md:aspect-[21/8] overflow-hidden rounded-xl">
            <Image
              src={resort.images.hero}
              alt={resort.name}
              fill
              className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/15 to-transparent" />

            {/* Content overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 flex items-end justify-between">
              <div>
                {resort.badges[0] && (
                  <span className="inline-block text-[10px] font-medium uppercase tracking-[0.15em] text-white/45 mb-2">
                    {resort.badges[0]}
                  </span>
                )}
                <h3 className="text-3xl md:text-4xl font-bold text-white tracking-[-0.02em] mb-2">
                  {resort.name}
                </h3>
                <p className="text-sm text-white/50 font-light max-w-md">
                  {resort.tagline}
                </p>
              </div>
              <div className="hidden md:flex flex-col items-end text-white">
                <div className="flex items-center gap-1 mb-2">
                  {Array.from({ length: resort.rating }).map((_, j) => (
                    <Star
                      key={j}
                      className="h-3 w-3 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>
                <span className="text-sm text-white/50">
                  From ${resort.priceFrom.toLocaleString()}/night
                </span>
              </div>
            </div>
          </div>
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.7,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <Link href={`/resorts/${resort.slug}`} className="group block">
        <div className="relative aspect-[4/5] overflow-hidden rounded-xl mb-5">
          <Image
            src={resort.images.thumbnail}
            alt={resort.name}
            fill
            className="object-cover transition-transform duration-[800ms] ease-out group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          {/* Badge */}
          {resort.badges[0] && (
            <div className="absolute top-4 left-4 z-10">
              <span className="bg-white/90 backdrop-blur-sm text-[10px] font-medium tracking-wider uppercase px-3 py-1.5 rounded-full text-foreground">
                {resort.badges[0]}
              </span>
            </div>
          )}

          {/* Hover arrow */}
          <div className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/90 backdrop-blur-sm">
              <ArrowUpRight className="h-4 w-4 text-foreground" />
            </div>
          </div>
        </div>

        {/* Info */}
        <div className="space-y-1.5">
          <div className="flex items-center gap-1">
            {Array.from({ length: resort.rating }).map((_, j) => (
              <Star
                key={j}
                className="h-3 w-3 fill-amber-400 text-amber-400"
              />
            ))}
          </div>
          <h3 className="text-lg font-semibold tracking-[-0.01em] group-hover:text-foreground/70 transition-colors">
            {resort.name}
          </h3>
          <p className="text-sm text-muted-foreground">
            {resort.location.atoll}
          </p>
          <p className="text-sm font-medium pt-1">
            From ${resort.priceFrom.toLocaleString()}
            <span className="text-muted-foreground font-normal"> / night</span>
          </p>
        </div>
      </Link>
    </motion.div>
  );
}

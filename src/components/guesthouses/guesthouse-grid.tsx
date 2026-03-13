"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Star, ArrowUpRight } from "lucide-react";
import type { Guesthouse } from "@/types";

interface GuesthouseGridProps {
  guesthouses: Guesthouse[];
}

export function GuesthouseGrid({ guesthouses }: GuesthouseGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-14">
      {guesthouses.map((gh, i) => (
        <motion.div
          key={gh.id}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{
            duration: 0.7,
            delay: (i % 3) * 0.08,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <Link href={`/guesthouses/${gh.slug}`} className="group block">
            {/* Image */}
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl mb-5">
              <Image
                src={gh.images.thumbnail}
                alt={gh.name}
                fill
                className="object-cover transition-transform duration-[800ms] ease-out group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Badge */}
              {gh.badges[0] && (
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm text-[10px] font-medium tracking-wider uppercase px-3 py-1.5 rounded-full text-foreground">
                    {gh.badges[0]}
                  </span>
                </div>
              )}

              {/* Hover arrow */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/90 backdrop-blur-sm">
                  <ArrowUpRight className="h-4 w-4 text-foreground" />
                </div>
              </div>
            </div>

            {/* Info */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold tracking-[-0.01em] group-hover:text-foreground/70 transition-colors">
                  {gh.name}
                </h3>
                <div className="flex items-center gap-0.5">
                  <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
                  <span className="text-sm font-medium">{gh.rating}</span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                {gh.location.island}, {gh.location.atoll}
              </p>
              <div className="flex items-center gap-2 pt-1">
                {gh.amenities.slice(0, 3).map((a, j) => (
                  <span
                    key={j}
                    className="text-[10px] font-medium text-muted-foreground bg-[#f5f5f4] dark:bg-white/5 px-2.5 py-1 rounded-full"
                  >
                    {a.label}
                  </span>
                ))}
              </div>
              <p className="text-sm font-medium pt-2">
                From ${gh.priceFrom}
                <span className="text-muted-foreground font-normal">
                  {" "}
                  / night
                </span>
              </p>
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  );
}

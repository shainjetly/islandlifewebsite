"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { resorts } from "@/data/resorts";

export function FeaturedResorts() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const featured = resorts.slice(0, 4);

  return (
    <section className="py-28 md:py-36 bg-white dark:bg-[#0c0a09]">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-end justify-between mb-16"
        >
          <div>
            <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-muted-foreground block mb-3">
              Featured Collection
            </span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-[-0.03em]">
              Handpicked Resorts
            </h2>
          </div>
          <Link
            href="/resorts"
            className="hidden md:flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors group"
          >
            View all
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>

        {/* Asymmetric Grid — first card is large, rest are smaller */}
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-12 gap-5">
          {/* Hero card — large */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 lg:row-span-2"
          >
            <Link href={`/resorts/${featured[0].slug}`} className="group block h-full">
              <div className="relative h-full min-h-[400px] lg:min-h-0 aspect-auto lg:aspect-auto overflow-hidden rounded-xl">
                <Image
                  src={featured[0].images.hero}
                  alt={featured[0].name}
                  fill
                  className="object-cover transition-transform duration-[1000ms] ease-out group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 58vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-7 lg:p-9">
                  {featured[0].badges[0] && (
                    <span className="inline-block text-[10px] font-medium uppercase tracking-[0.15em] text-white/50 mb-2">
                      {featured[0].badges[0]}
                    </span>
                  )}
                  <h3 className="text-2xl lg:text-3xl font-bold text-white tracking-[-0.02em] mb-1">
                    {featured[0].name}
                  </h3>
                  <p className="text-sm text-white/55 font-light">
                    {featured[0].location.atoll} · From ${featured[0].priceFrom.toLocaleString()}/night
                  </p>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Smaller cards */}
          {featured.slice(1).map((resort, i) => (
            <motion.div
              key={resort.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.7,
                delay: 0.1 + i * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="lg:col-span-5"
            >
              <Link href={`/resorts/${resort.slug}`} className="group block">
                <div className="relative aspect-[16/9] overflow-hidden rounded-xl">
                  <Image
                    src={resort.images.thumbnail}
                    alt={resort.name}
                    fill
                    className="object-cover transition-transform duration-[800ms] ease-out group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 42vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/5 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5 lg:p-6">
                    {resort.badges[0] && (
                      <span className="inline-block text-[10px] font-medium uppercase tracking-[0.15em] text-white/45 mb-1.5">
                        {resort.badges[0]}
                      </span>
                    )}
                    <h3 className="text-lg lg:text-xl font-semibold text-white tracking-[-0.01em] mb-0.5">
                      {resort.name}
                    </h3>
                    <p className="text-xs text-white/50 font-light">
                      {resort.location.atoll} · From ${resort.priceFrom.toLocaleString()}/night
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Mobile view all */}
        <div className="text-center mt-10 md:hidden">
          <Link
            href="/resorts"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground"
          >
            View all resorts
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

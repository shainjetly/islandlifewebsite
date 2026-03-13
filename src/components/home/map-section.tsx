"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

export function MapSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-28 md:py-36 bg-[#111] dark:bg-[#0c0a09]">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div
          ref={ref}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center"
        >
          {/* Left — editorial text */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-[11px] font-medium uppercase tracking-[0.2em] text-white/40 block mb-4"
            >
              Our Reach
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.05 }}
              className="text-3xl md:text-5xl font-bold tracking-[-0.03em] text-white mb-6"
            >
              Across every
              <br />
              <span className="italic font-display text-white/50">atoll.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-white/45 text-base leading-relaxed mb-10 max-w-sm"
            >
              From the northernmost Haa Alif to the southern Addu, we cover
              every corner of this island nation. 26 atolls, 1,192 islands, one
              unforgettable archipelago.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Link
                href="/resorts"
                className="inline-flex items-center gap-2 text-sm font-medium text-white hover:gap-3 transition-all group"
              >
                Browse destinations
                <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </div>

          {/* Right — atmospheric image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, delay: 0.15 }}
            className="relative aspect-[4/5] rounded-xl overflow-hidden"
          >
            <Image
              src="https://images.unsplash.com/photo-1586500036706-41963de24d8b?w=1200&q=80"
              alt="Maldives aerial view"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

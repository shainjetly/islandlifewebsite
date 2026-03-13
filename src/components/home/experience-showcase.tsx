"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

const showcaseItems = [
  {
    label: "Culinary",
    title: "Underwater Fine Dining",
    description:
      "Dine beneath the waves at the world's first underwater restaurant. Surrounded by vivid coral reefs, every course becomes a multi-sensory masterpiece.",
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&q=80",
    href: "/experiences",
  },
  {
    label: "Excursions",
    title: "Private Sandbank Escapes",
    description:
      "Be whisked away to a deserted sandbank — your own private island for the day. Champagne, gourmet cuisine, and the most spectacular views on earth.",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=80",
    href: "/experiences",
  },
];

export function ExperienceShowcase() {
  return (
    <section className="py-28 md:py-36 bg-white dark:bg-[#0c0a09]">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-muted-foreground block mb-3">
            Experiences
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-[-0.03em] max-w-xl">
            Moments that become memories
          </h2>
        </motion.div>

        <div className="space-y-28 lg:space-y-36">
          {showcaseItems.map((item, i) => (
            <ShowcaseRow key={i} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ShowcaseRow({
  item,
  index,
}: {
  item: (typeof showcaseItems)[0];
  index: number;
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [100, 0]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [0.9, 1]);
  const textY = useTransform(scrollYProgress, [0, 1], [80, 0]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

  const isReversed = index % 2 !== 0;

  return (
    <div
      ref={ref}
      className={`flex flex-col ${
        isReversed ? "lg:flex-row-reverse" : "lg:flex-row"
      } gap-10 lg:gap-16 items-center`}
    >
      {/* Image */}
      <motion.div
        className="flex-1 w-full"
        style={{ y: imageY, scale: imageScale }}
      >
        <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </motion.div>

      {/* Text */}
      <motion.div
        className="flex-1 py-4 lg:py-8"
        style={{ y: textY, opacity: textOpacity }}
      >
        <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-muted-foreground mb-5 block">
          {item.label}
        </span>
        <h3 className="text-3xl md:text-[2.5rem] font-bold tracking-[-0.02em] mb-5 leading-tight">
          {item.title}
        </h3>
        <p className="text-muted-foreground text-base leading-relaxed mb-8 max-w-md">
          {item.description}
        </p>
        <Link
          href={item.href}
          className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:gap-3 transition-all group"
        >
          Discover more
          <ArrowRight className="h-4 w-4" />
        </Link>
      </motion.div>
    </div>
  );
}

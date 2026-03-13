"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

interface HeroSectionProps {
  image: string;
  title: string;
  subtitle?: string;
  height?: "full" | "large" | "medium";
  overlay?: "light" | "medium" | "heavy";
  showScrollIndicator?: boolean;
  children?: React.ReactNode;
  className?: string;
}

export function HeroSection({
  image,
  title,
  subtitle,
  height = "large",
  overlay = "medium",
  showScrollIndicator = false,
  children,
  className,
}: HeroSectionProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  const heightClasses = {
    full: "h-screen",
    large: "h-[85vh]",
    medium: "h-[65vh]",
  };

  const overlayClasses = {
    light: "from-black/25 via-transparent to-transparent",
    medium: "from-black/55 via-black/15 to-black/5",
    heavy: "from-black/70 via-black/35 to-black/15",
  };

  return (
    <section
      ref={ref}
      className={cn(
        "relative overflow-hidden flex items-end",
        heightClasses[height],
        className
      )}
    >
      {/* Parallax Background */}
      <motion.div className="absolute inset-0" style={{ y, scale }}>
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      </motion.div>

      {/* Bottom gradient for content readability */}
      <div
        className={cn(
          "absolute inset-0 bg-gradient-to-t",
          overlayClasses[overlay]
        )}
      />

      {/* Top gradient for navbar readability */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black/50 to-transparent z-[1]" />

      {/* Content — bottom-aligned for editorial feel */}
      <motion.div
        className="relative z-10 w-full px-6 lg:px-10 pb-16 lg:pb-20 max-w-[1400px] mx-auto"
        style={{ opacity }}
      >
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="text-4xl md:text-6xl lg:text-[4.5rem] font-bold tracking-[-0.03em] leading-[1.05] text-white max-w-3xl"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="text-[15px] md:text-lg text-white/60 font-light max-w-xl leading-relaxed mt-5"
          >
            {subtitle}
          </motion.p>
        )}
        {children && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-8"
          >
            {children}
          </motion.div>
        )}
      </motion.div>

      {/* Scroll Indicator — animated line */}
      {showScrollIndicator && (
        <motion.div
          className="absolute bottom-6 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
        >
          <div className="w-[1px] h-10 bg-white/20 relative overflow-hidden">
            <motion.div
              className="absolute top-0 left-0 w-full bg-white/80"
              animate={{
                height: ["0%", "100%", "0%"],
                top: ["0%", "0%", "100%"],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>
        </motion.div>
      )}
    </section>
  );
}

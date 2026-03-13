"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface CTASectionProps {
  title: string;
  description: string;
  primaryAction?: { label: string; href: string };
  secondaryAction?: { label: string; href: string };
  variant?: "dark" | "light" | "red";
  className?: string;
}

export function CTASection({
  title,
  description,
  primaryAction = { label: "Enquire Now", href: "/contact" },
  secondaryAction,
  variant = "dark",
  className,
}: CTASectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className={cn(
        "relative overflow-hidden",
        variant === "dark" && "bg-[#0e0e0e]",
        variant === "light" && "bg-[#fafaf9] dark:bg-[#111]",
        variant === "red" && "bg-primary",
        className
      )}
    >
      <div className="relative z-10 mx-auto max-w-[1400px] px-6 lg:px-10 py-28 lg:py-36">
        <div className="max-w-2xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className={cn(
              "text-3xl md:text-5xl lg:text-[3.5rem] font-bold tracking-[-0.03em] leading-tight mb-6",
              variant === "light" ? "text-foreground" : "text-white"
            )}
          >
            {title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className={cn(
              "text-base md:text-lg font-light leading-relaxed mb-10",
              variant === "light"
                ? "text-muted-foreground"
                : "text-white/50"
            )}
          >
            {description}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href={primaryAction.href}
              className={cn(
                "inline-flex items-center justify-center gap-2 px-7 py-3.5 text-[13px] font-medium tracking-[0.02em] rounded-full transition-all group",
                variant === "light"
                  ? "bg-foreground text-background hover:bg-foreground/90"
                  : "bg-white text-black hover:bg-white/90"
              )}
            >
              {primaryAction.label}
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
            </Link>
            {secondaryAction && (
              <Link
                href={secondaryAction.href}
                className={cn(
                  "inline-flex items-center justify-center px-7 py-3.5 text-[13px] font-medium tracking-[0.02em] rounded-full border transition-all",
                  variant === "light"
                    ? "border-foreground/15 text-foreground hover:bg-foreground/5"
                    : "border-white/15 text-white hover:bg-white/5"
                )}
              >
                {secondaryAction.label}
              </Link>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

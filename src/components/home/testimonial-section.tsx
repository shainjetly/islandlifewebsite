"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export function TestimonialSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="py-28 md:py-36 bg-[#fafaf9] dark:bg-[#111]"
    >
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="w-12 h-[1px] bg-foreground/20 mx-auto mb-10" />
            <blockquote className="text-2xl md:text-[2rem] lg:text-[2.5rem] font-light tracking-[-0.02em] leading-[1.3] italic font-display mb-8">
              &ldquo;Island Life didn&apos;t just book our honeymoon — they
              created a love letter to the Maldives that we&apos;ll carry with
              us forever.&rdquo;
            </blockquote>
            <div>
              <p className="text-sm font-medium">Sarah & James Mitchell</p>
              <p className="text-xs text-muted-foreground mt-1">
                Soneva Jani, November 2024
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

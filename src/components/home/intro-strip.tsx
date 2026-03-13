"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export function IntroStrip() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-28 md:py-36 bg-white dark:bg-[#0c0a09]">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left — big editorial statement */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="text-[2.5rem] md:text-[3.5rem] lg:text-[4rem] font-bold tracking-[-0.03em] leading-[1.05]">
              We don&apos;t sell
              <br />
              <span className="text-muted-foreground/40">trips.</span>
              <br />
              We craft
              <br />
              <span className="italic font-display">escapes.</span>
            </h2>
          </motion.div>

          {/* Right — description + stats */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="text-muted-foreground text-base md:text-lg leading-relaxed mb-12 max-w-md"
            >
              For over a decade, we&apos;ve been the trusted bridge between
              discerning travelers and the Maldives&apos; most extraordinary
              destinations. Every recommendation is personal. Every detail,
              considered.
            </motion.p>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-8">
              {[
                { value: "60+", label: "Resorts" },
                { value: "26", label: "Atolls" },
                { value: "14yr", label: "Experience" },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + i * 0.08 }}
                >
                  <div className="text-3xl md:text-4xl font-bold tracking-[-0.02em] mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs text-muted-foreground font-medium uppercase tracking-[0.1em]">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

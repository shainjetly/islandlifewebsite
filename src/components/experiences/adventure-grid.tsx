"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { SectionHeader } from "@/components/shared/section-header";
import { experiences } from "@/data/experiences";

export function AdventureGrid() {
  return (
    <section className="py-16 lg:py-24 bg-card">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader
          label="Individual Adventures"
          title="Curated Experiences"
          description="Each experience is carefully designed to showcase the best the Maldives has to offer."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.1 }}
              className="group cursor-pointer"
            >
              {/* Image */}
              <div className="relative aspect-[3/4] overflow-hidden rounded-xl mb-5">
                <Image
                  src={exp.image}
                  alt={exp.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />

                {exp.badges[0] && (
                  <div className="absolute top-4 left-4 z-10">
                    <Badge className="bg-primary text-white text-[10px] font-bold tracking-[0.15em] uppercase shadow-lg">
                      {exp.badges[0]}
                    </Badge>
                  </div>
                )}

                {/* Hover overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="w-full flex items-center justify-center bg-white text-foreground py-3 rounded-lg text-xs font-bold uppercase tracking-wider">
                    Explore Details
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="space-y-2">
                <div className="flex items-center gap-4 text-[11px] font-bold text-primary uppercase tracking-[0.2em]">
                  <span>{exp.duration}</span>
                  <span className="w-1 h-1 rounded-full bg-muted-foreground/40" />
                  <span>{exp.type}</span>
                </div>
                <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                  {exp.name}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                  {exp.description}
                </p>
                <div className="pt-3 flex items-center justify-between border-t mt-3">
                  <span className="text-[10px] text-muted-foreground font-bold uppercase tracking-[0.15em]">
                    Starting From
                  </span>
                  <span className="text-lg font-bold">
                    ${exp.priceFrom}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

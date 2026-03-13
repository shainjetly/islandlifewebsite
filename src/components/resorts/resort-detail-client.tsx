"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Users, Maximize } from "lucide-react";
import { SectionHeader } from "@/components/shared/section-header";
import type { RoomType } from "@/types";

interface ResortDetailClientProps {
  rooms: RoomType[];
}

export function ResortDetailClient({ rooms }: ResortDetailClientProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-16 lg:py-24 bg-[#fafaf9] dark:bg-[#111]">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <SectionHeader
          label="Accommodations"
          title="Choose Your Sanctuary"
          description="Each villa is a private retreat designed for the ultimate island experience."
        />

        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {rooms.map((room, i) => (
            <motion.div
              key={room.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-white dark:bg-[#0c0a09] rounded-xl overflow-hidden border group"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={room.image}
                  alt={room.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold mb-2">{room.name}</h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {room.description}
                </p>
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <Users className="h-3.5 w-3.5" />
                    Up to {room.maxGuests} guests
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Maximize className="h-3.5 w-3.5" />
                    {room.size}
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

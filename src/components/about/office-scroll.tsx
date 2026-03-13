"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Phone, Mail } from "lucide-react";
import type { Office } from "@/types";

interface OfficeScrollProps {
  offices: Office[];
}

export function OfficeScroll({ offices }: OfficeScrollProps) {
  return (
    <div className="flex overflow-x-auto no-scrollbar gap-6 pb-4 snap-x snap-mandatory -mx-6 px-6">
      {offices.map((office, i) => (
        <motion.div
          key={office.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
          className="min-w-[300px] snap-start bg-card border-t-4 border-primary rounded-xl shadow-lg overflow-hidden shrink-0"
        >
          <div className="relative h-40">
            <Image
              src={office.image}
              alt={`${office.city} office`}
              fill
              className="object-cover"
              sizes="300px"
            />
          </div>
          <div className="p-6">
            <h3 className="text-primary font-bold text-lg mb-1">
              {office.city}
            </h3>
            <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider mb-3">
              {office.country}
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              {office.address}
            </p>
            <div className="space-y-2">
              <a
                href={`tel:${office.phone}`}
                className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-foreground hover:text-primary transition-colors"
              >
                <Phone className="h-3.5 w-3.5" />
                {office.phone}
              </a>
              <a
                href={`mailto:${office.email}`}
                className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-foreground hover:text-primary transition-colors"
              >
                <Mail className="h-3.5 w-3.5" />
                {office.email}
              </a>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

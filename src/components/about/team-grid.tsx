"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { TeamMember } from "@/types";

interface TeamGridProps {
  team: TeamMember[];
}

export function TeamGrid({ team }: TeamGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {team.map((member, i) => (
        <motion.div
          key={member.id}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: i * 0.1 }}
          className="group"
        >
          <div className="relative overflow-hidden rounded-xl mb-5 shadow-lg">
            <Image
              src={member.image}
              alt={member.name}
              width={400}
              height={400}
              className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-110"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            />
          </div>
          <h3 className="text-lg font-bold">{member.name}</h3>
          <p className="text-primary font-semibold text-sm mb-2">
            {member.role}
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {member.bio}
          </p>
        </motion.div>
      ))}
    </div>
  );
}

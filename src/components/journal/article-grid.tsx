"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { Article } from "@/types";

interface ArticleGridProps {
  articles: Article[];
}

export function ArticleGrid({ articles }: ArticleGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
      {articles.map((article, i) => (
        <motion.article
          key={article.id}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: (i % 3) * 0.1 }}
          className="group"
        >
          <Link href={`/journal/${article.slug}`} className="block">
            {/* Image */}
            <div className="aspect-[4/3] overflow-hidden rounded-xl mb-5">
              <Image
                src={article.image}
                alt={article.title}
                width={600}
                height={450}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>

            {/* Meta */}
            <div className="flex items-center gap-4 mb-3">
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-primary">
                {article.category}
              </span>
              <span className="h-px flex-1 bg-primary/10" />
              <span className="text-[10px] font-bold tracking-widest text-muted-foreground uppercase">
                {new Date(article.publishedAt).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
            </div>

            {/* Title */}
            <h3 className="font-display text-xl font-bold leading-tight mb-3 group-hover:text-primary transition-colors">
              {article.title}
            </h3>

            {/* Excerpt */}
            <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
              {article.excerpt}
            </p>
          </Link>
        </motion.article>
      ))}
    </div>
  );
}

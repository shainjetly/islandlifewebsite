import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { WhatsAppButton } from "@/components/layout/whatsapp-button";
import { SectionHeader } from "@/components/shared/section-header";
import { ArticleGrid } from "@/components/journal/article-grid";
import { articles, getFeaturedArticle } from "@/data/journal";

export const metadata: Metadata = {
  title: "The Island Edit",
  description:
    "Travel stories, luxury resort reviews, and insider guides from the Maldives. Discover hidden gems and expert tips from our editorial team.",
};

export default function JournalPage() {
  const featured = getFeaturedArticle();
  const otherArticles = articles.filter((a) => !a.featured);

  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Header */}
        <section className="py-16 bg-background">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <SectionHeader
              label="The Island Edit"
              title="The Island Edit"
              description="Curated stories, luxury travel guides, and hidden gems from the heart of the Maldives."
              align="center"
            />

            {/* Featured Article */}
            {featured && (
              <Link
                href={`/journal/${featured.slug}`}
                className="group block mb-20"
              >
                <div className="relative overflow-hidden rounded-xl aspect-[21/9]">
                  <Image
                    src={featured.image}
                    alt={featured.title}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                    sizes="100vw"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
                  <div className="absolute bottom-0 left-0 p-8 lg:p-14 z-20 max-w-3xl">
                    <span className="inline-block bg-primary text-white text-[10px] font-bold tracking-[0.2em] uppercase px-3 py-1 rounded mb-5">
                      Featured Entry
                    </span>
                    <h2 className="font-display text-white text-2xl lg:text-4xl font-bold mb-4 leading-tight">
                      {featured.title}
                    </h2>
                    <p className="text-white/70 text-sm lg:text-base mb-6 line-clamp-2">
                      {featured.excerpt}
                    </p>
                    <span className="inline-flex items-center gap-2 bg-white text-foreground px-6 py-3 rounded-full font-bold text-sm hover:bg-primary hover:text-white transition-all">
                      Read the feature
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </div>
              </Link>
            )}
          </div>
        </section>

        {/* Article Grid */}
        <section className="pb-20 bg-background">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <ArticleGrid articles={otherArticles} />
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}

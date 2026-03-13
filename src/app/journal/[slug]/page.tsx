import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { WhatsAppButton } from "@/components/layout/whatsapp-button";
import { ReadingProgress } from "@/components/journal/reading-progress";
import { ArticleGrid } from "@/components/journal/article-grid";
import { articles, getArticleBySlug } from "@/data/journal";

export async function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return { title: "Article Not Found" };
  return {
    title: article.title,
    description: article.excerpt,
  };
}

export default async function ArticleDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const relatedArticles = articles
    .filter((a) => a.slug !== slug)
    .slice(0, 3);

  return (
    <>
      <ReadingProgress />
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative h-[70vh] overflow-hidden">
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        </section>

        {/* Article Content */}
        <section className="bg-background">
          <div className="mx-auto max-w-3xl px-6 lg:px-8 -mt-32 relative z-10">
            <div className="bg-card rounded-xl shadow-2xl p-8 md:p-14">
              {/* Header */}
              <div className="text-center mb-12">
                <div className="flex items-center justify-center gap-2 mb-5 text-primary font-medium uppercase tracking-widest text-xs">
                  <span>Journal</span>
                  <span className="w-1 h-1 rounded-full bg-primary" />
                  <span>{article.category}</span>
                </div>
                <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-5">
                  {article.title}
                </h1>
                <p className="text-lg text-muted-foreground italic font-display mb-8 max-w-2xl mx-auto">
                  {article.excerpt}
                </p>

                {/* Author */}
                <div className="flex items-center justify-center gap-4 text-sm border-y py-5">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden">
                    <Image
                      src={article.author.avatar}
                      alt={article.author.name}
                      fill
                      className="object-cover"
                      sizes="40px"
                    />
                  </div>
                  <div className="text-left">
                    <p className="font-bold">{article.author.name}</p>
                    <p className="text-muted-foreground text-xs">
                      {new Date(article.publishedAt).toLocaleDateString(
                        "en-US",
                        { month: "long", day: "numeric", year: "numeric" }
                      )}{" "}
                      &middot; {article.readTime}
                    </p>
                  </div>
                </div>
              </div>

              {/* Body */}
              {article.content ? (
                <article
                  className="prose prose-lg dark:prose-invert max-w-none prose-brand font-display prose-headings:font-display prose-headings:tracking-tight prose-p:leading-relaxed prose-blockquote:border-primary prose-blockquote:text-primary prose-blockquote:italic prose-blockquote:text-2xl prose-blockquote:font-bold"
                  dangerouslySetInnerHTML={{ __html: article.content }}
                />
              ) : (
                <div className="text-center py-20 text-muted-foreground">
                  <p className="text-lg italic">
                    Full article content coming soon...
                  </p>
                </div>
              )}

              {/* Tags */}
              <div className="mt-12 pt-8 border-t flex flex-wrap gap-2">
                {article.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-medium bg-muted px-3 py-1.5 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Related Articles */}
        <section className="py-20 bg-background">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-10 text-center">
              More From the Journal
            </h2>
            <ArticleGrid articles={relatedArticles} />
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}

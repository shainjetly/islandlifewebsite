import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, MapPin, Star, Clock, Users, Maximize } from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { WhatsAppButton } from "@/components/layout/whatsapp-button";
import { CTASection } from "@/components/shared/cta-section";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { resorts, getResortBySlug } from "@/data/resorts";
import { ResortDetailClient } from "@/components/resorts/resort-detail-client";

export async function generateStaticParams() {
  return resorts.map((resort) => ({ slug: resort.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const resort = getResortBySlug(slug);
  if (!resort) return { title: "Resort Not Found" };
  return {
    title: resort.name,
    description: resort.description.slice(0, 160),
  };
}

export default async function ResortDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const resort = getResortBySlug(slug);
  if (!resort) notFound();

  return (
    <>
      <Navbar />
      <main>
        {/* Hero Gallery */}
        <section className="relative h-[60vh] overflow-hidden">
          <Image
            src={resort.images.hero}
            alt={resort.name}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-12 z-10">
            <div className="mx-auto max-w-7xl">
              {/* Breadcrumbs */}
              <nav className="flex items-center gap-2 text-white/60 text-sm mb-4">
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
                <ChevronRight className="h-3.5 w-3.5" />
                <Link
                  href="/resorts"
                  className="hover:text-white transition-colors"
                >
                  Resorts
                </Link>
                <ChevronRight className="h-3.5 w-3.5" />
                <span className="text-white">{resort.name}</span>
              </nav>

              {/* Title */}
              <div className="flex items-start gap-3 mb-3">
                {resort.badges.map((badge) => (
                  <Badge
                    key={badge}
                    className="bg-primary text-white text-[10px] font-bold tracking-[0.15em] uppercase"
                  >
                    {badge}
                  </Badge>
                ))}
              </div>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white text-shadow-lg mb-2">
                {resort.name}
              </h1>
              <div className="flex items-center gap-4 text-white/80">
                <div className="flex items-center gap-1">
                  {Array.from({ length: resort.rating }).map((_, j) => (
                    <Star
                      key={j}
                      className="h-4 w-4 fill-primary text-primary"
                    />
                  ))}
                </div>
                <span className="flex items-center gap-1.5 text-sm">
                  <MapPin className="h-4 w-4" />
                  {resort.location.island}, {resort.location.atoll}
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2">
                <h2 className="text-[11px] font-bold uppercase tracking-[0.2em] text-primary mb-6">
                  The Experience
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  {resort.description}
                </p>

                {/* Highlights */}
                {resort.highlights.length > 0 && (
                  <div className="mb-12">
                    <h3 className="text-xl font-bold mb-4">Highlights</h3>
                    <ul className="space-y-3">
                      {resort.highlights.map((highlight, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-3 text-muted-foreground"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Amenities */}
                <h3 className="text-xl font-bold mb-6">Selected Luxuries</h3>
                <div className="grid grid-cols-3 md:grid-cols-6 gap-6 mb-12">
                  {resort.amenities.map((amenity, i) => (
                    <div key={i} className="text-center">
                      <div className="flex h-16 w-16 mx-auto items-center justify-center rounded-full border border-primary/20 text-primary mb-3">
                        <span className="text-2xl font-light">
                          {amenity.icon.charAt(0)}
                        </span>
                      </div>
                      <span className="text-xs font-medium text-muted-foreground">
                        {amenity.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sidebar: At a Glance */}
              <div>
                <div className="bg-card rounded-xl border p-8 sticky top-24">
                  <h3 className="text-[11px] font-bold uppercase tracking-[0.2em] text-primary mb-6">
                    At a Glance
                  </h3>
                  <dl className="space-y-4">
                    {Object.entries(resort.facts).map(([key, value]) => (
                      <div
                        key={key}
                        className="flex justify-between items-center py-3 border-b border-border last:border-0"
                      >
                        <dt className="text-sm text-muted-foreground">{key}</dt>
                        <dd className="text-sm font-bold">{value}</dd>
                      </div>
                    ))}
                  </dl>
                  <div className="mt-8 pt-6 border-t">
                    <div className="text-sm text-muted-foreground mb-1">
                      Starting from
                    </div>
                    <div className="text-3xl font-bold mb-6">
                      ${resort.priceFrom.toLocaleString()}
                      <span className="text-base text-muted-foreground font-normal">
                        {" "}/ night
                      </span>
                    </div>
                    <Button
                      asChild
                      className="w-full bg-primary hover:bg-primary/90 text-white font-bold uppercase tracking-wider"
                    >
                      <Link href="/contact">Enquire Now</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Room Types */}
        <ResortDetailClient rooms={resort.rooms} />

        {/* CTA */}
        <CTASection
          title="Ready for your Maldivian Journey?"
          description="Our travel experts are ready to help you plan the perfect escape to paradise."
          primaryAction={{ label: "Enquire Now", href: "/contact" }}
          variant="dark"
        />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}

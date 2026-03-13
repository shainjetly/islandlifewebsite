import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ChevronRight, MapPin, Star } from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { WhatsAppButton } from "@/components/layout/whatsapp-button";
import { CTASection } from "@/components/shared/cta-section";
import { ImageGallery } from "@/components/shared/image-gallery";
import { GoogleMap } from "@/components/shared/google-map";
import { Button } from "@/components/ui/button";
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

  const allImages = [resort.images.hero, ...resort.images.gallery];

  return (
    <>
      <Navbar />
      <main className="pt-[85px]">
        {/* Image Gallery */}
        <ImageGallery images={allImages} alt={resort.name} />

        {/* Content */}
        <section className="py-12 lg:py-20 bg-white dark:bg-[#0c0a09]">
          <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
            {/* Breadcrumbs */}
            <nav className="flex items-center gap-2 text-muted-foreground text-sm mb-8">
              <Link href="/" className="hover:text-foreground transition-colors">
                Home
              </Link>
              <ChevronRight className="h-3.5 w-3.5" />
              <Link href="/resorts" className="hover:text-foreground transition-colors">
                Resorts
              </Link>
              <ChevronRight className="h-3.5 w-3.5" />
              <span className="text-foreground">{resort.name}</span>
            </nav>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
              {/* Main Content */}
              <div className="lg:col-span-2">
                {resort.badges.length > 0 && (
                  <div className="flex items-center gap-2 mb-4">
                    {resort.badges.map((badge) => (
                      <span
                        key={badge}
                        className="text-[10px] font-medium uppercase tracking-[0.15em] text-muted-foreground bg-[#f5f5f4] dark:bg-white/5 px-3 py-1.5 rounded-full"
                      >
                        {badge}
                      </span>
                    ))}
                  </div>
                )}

                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-[-0.03em] mb-3">
                  {resort.name}
                </h1>

                <div className="flex items-center gap-4 text-muted-foreground mb-8">
                  <div className="flex items-center gap-1">
                    {Array.from({ length: resort.rating }).map((_, j) => (
                      <Star key={j} className="h-4 w-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="flex items-center gap-1.5 text-sm">
                    <MapPin className="h-4 w-4" />
                    {resort.location.island}, {resort.location.atoll}
                  </span>
                </div>

                <div className="mb-10">
                  <h2 className="text-[11px] font-medium uppercase tracking-[0.2em] text-muted-foreground mb-4">
                    The Experience
                  </h2>
                  <p className="text-muted-foreground text-base leading-relaxed">
                    {resort.description}
                  </p>
                </div>

                {resort.highlights.length > 0 && (
                  <div className="mb-10">
                    <h3 className="text-xl font-bold mb-4">Highlights</h3>
                    <ul className="space-y-3">
                      {resort.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start gap-3 text-muted-foreground text-sm">
                          <span className="w-1.5 h-1.5 rounded-full bg-foreground mt-1.5 shrink-0" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="mb-10">
                  <h3 className="text-xl font-bold mb-5">Amenities</h3>
                  <div className="flex flex-wrap gap-2">
                    {resort.amenities.map((amenity, i) => (
                      <span
                        key={i}
                        className="text-sm font-medium text-muted-foreground bg-[#f5f5f4] dark:bg-white/5 px-4 py-2 rounded-full"
                      >
                        {amenity.label}
                      </span>
                    ))}
                  </div>
                </div>

                {resort.location.coordinates && (
                  <div>
                    <h3 className="text-xl font-bold mb-5">Location</h3>
                    <GoogleMap
                      lat={resort.location.coordinates.lat}
                      lng={resort.location.coordinates.lng}
                      name={resort.name}
                    />
                  </div>
                )}
              </div>

              {/* Sidebar */}
              <div>
                <div className="bg-[#fafaf9] dark:bg-[#111] rounded-xl p-7 sticky top-[105px]">
                  <h3 className="text-[11px] font-medium uppercase tracking-[0.2em] text-muted-foreground mb-6">
                    At a Glance
                  </h3>
                  <dl className="space-y-0">
                    {Object.entries(resort.facts).map(([key, value]) => (
                      <div key={key} className="flex justify-between items-center py-3.5 border-b border-border/50 last:border-0">
                        <dt className="text-sm text-muted-foreground">{key}</dt>
                        <dd className="text-sm font-semibold">{value}</dd>
                      </div>
                    ))}
                  </dl>
                  <div className="mt-8">
                    <Button
                      asChild
                      className="w-full bg-foreground hover:bg-foreground/90 text-background font-medium tracking-wide rounded-full py-6"
                    >
                      <Link href="/contact">Enquire Now</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <ResortDetailClient rooms={resort.rooms} />

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

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, MapPin, Star, Users, Maximize } from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { WhatsAppButton } from "@/components/layout/whatsapp-button";
import { CTASection } from "@/components/shared/cta-section";
import { ImageGallery } from "@/components/shared/image-gallery";
import { GoogleMap } from "@/components/shared/google-map";
import { Button } from "@/components/ui/button";
import { guesthouses, getGuesthouseBySlug } from "@/data/guesthouses";

export async function generateStaticParams() {
  return guesthouses.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const gh = getGuesthouseBySlug(slug);
  if (!gh) return { title: "Guesthouse Not Found" };
  return {
    title: gh.name,
    description: gh.description.slice(0, 160),
  };
}

export default async function GuesthouseDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const gh = getGuesthouseBySlug(slug);
  if (!gh) notFound();

  const allImages = [gh.images.hero, ...gh.images.gallery];

  return (
    <>
      <Navbar />
      <main className="pt-[85px]">
        {/* Image Gallery */}
        <ImageGallery images={allImages} alt={gh.name} />

        {/* Content */}
        <section className="py-12 lg:py-20 bg-white dark:bg-[#0c0a09]">
          <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
            {/* Breadcrumbs */}
            <nav className="flex items-center gap-2 text-muted-foreground text-sm mb-8">
              <Link href="/" className="hover:text-foreground transition-colors">
                Home
              </Link>
              <ChevronRight className="h-3.5 w-3.5" />
              <Link href="/guesthouses" className="hover:text-foreground transition-colors">
                Guesthouses
              </Link>
              <ChevronRight className="h-3.5 w-3.5" />
              <span className="text-foreground">{gh.name}</span>
            </nav>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
              {/* Main Content */}
              <div className="lg:col-span-2">
                {gh.badges.length > 0 && (
                  <div className="flex items-center gap-2 mb-4">
                    {gh.badges.map((badge) => (
                      <span
                        key={badge}
                        className="text-[10px] font-medium uppercase tracking-[0.15em] text-muted-foreground bg-[#f5f5f4] dark:bg-white/5 px-3 py-1.5 rounded-full"
                      >
                        {badge}
                      </span>
                    ))}
                  </div>
                )}

                <h1 className="text-3xl md:text-4xl font-bold tracking-[-0.03em] mb-3">
                  {gh.name}
                </h1>

                <div className="flex items-center gap-4 text-muted-foreground mb-8">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                    <span className="text-sm font-semibold text-foreground">{gh.rating}</span>
                    <span className="text-xs">({gh.reviewCount} reviews)</span>
                  </div>
                  <span className="flex items-center gap-1.5 text-sm">
                    <MapPin className="h-4 w-4" />
                    {gh.location.island}, {gh.location.atoll}
                  </span>
                </div>

                <div className="mb-10">
                  <h2 className="text-[11px] font-medium uppercase tracking-[0.2em] text-muted-foreground mb-4">
                    About This Guesthouse
                  </h2>
                  <p className="text-muted-foreground text-base leading-relaxed">
                    {gh.description}
                  </p>
                </div>

                <div className="mb-10">
                  <h2 className="text-xl font-bold mb-6">Room Types</h2>
                  <div className="space-y-5">
                    {gh.rooms.map((room) => (
                      <div key={room.id} className="flex flex-col md:flex-row gap-5 bg-[#fafaf9] dark:bg-[#111] rounded-xl overflow-hidden">
                        <div className="relative w-full md:w-56 aspect-[4/3] md:aspect-auto shrink-0">
                          <Image src={room.image} alt={room.name} fill className="object-cover" sizes="224px" />
                        </div>
                        <div className="p-5 flex-1">
                          <h3 className="text-lg font-semibold mb-2">{room.name}</h3>
                          <p className="text-sm text-muted-foreground mb-3">{room.description}</p>
                          <div className="flex items-center gap-4 text-xs text-muted-foreground">
                            <span className="flex items-center gap-1.5">
                              <Users className="h-3.5 w-3.5" />
                              {room.maxGuests} guests
                            </span>
                            <span className="flex items-center gap-1.5">
                              <Maximize className="h-3.5 w-3.5" />
                              {room.size}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {gh.location.coordinates && (
                  <div>
                    <h3 className="text-xl font-bold mb-5">Location</h3>
                    <GoogleMap
                      lat={gh.location.coordinates.lat}
                      lng={gh.location.coordinates.lng}
                      name={gh.name}
                    />
                  </div>
                )}
              </div>

              {/* Sidebar */}
              <div>
                <div className="bg-[#fafaf9] dark:bg-[#111] rounded-xl p-7 sticky top-[105px]">
                  <h3 className="text-[11px] font-medium uppercase tracking-[0.2em] text-muted-foreground mb-6">
                    Quick Info
                  </h3>
                  <div className="space-y-4 mb-8">
                    <div className="flex justify-between items-center py-2 border-b border-border/50">
                      <span className="text-sm text-muted-foreground">Location</span>
                      <span className="text-sm font-semibold">{gh.location.island}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-border/50">
                      <span className="text-sm text-muted-foreground">Atoll</span>
                      <span className="text-sm font-semibold">{gh.location.atoll}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-border/50">
                      <span className="text-sm text-muted-foreground">Rating</span>
                      <span className="text-sm font-semibold">{gh.rating} / 5</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="text-sm text-muted-foreground">Rooms</span>
                      <span className="text-sm font-semibold">{gh.rooms.length} types</span>
                    </div>
                  </div>

                  <h4 className="text-[11px] font-medium uppercase tracking-[0.2em] text-muted-foreground mb-4">
                    Amenities
                  </h4>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {gh.amenities.map((a, i) => (
                      <span key={i} className="text-xs font-medium text-muted-foreground bg-white dark:bg-white/5 px-3 py-1.5 rounded-full">
                        {a.label}
                      </span>
                    ))}
                  </div>

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
        </section>

        <CTASection
          title="Ready for your Maldives escape?"
          description="Explore authentic island life with our curated guesthouse collection."
          primaryAction={{ label: "Enquire Now", href: "/contact" }}
          variant="dark"
        />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}

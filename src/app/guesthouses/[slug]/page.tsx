import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, MapPin, Star, Users, Maximize, MessageCircle } from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { WhatsAppButton } from "@/components/layout/whatsapp-button";
import { CTASection } from "@/components/shared/cta-section";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
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

  return (
    <>
      <Navbar />
      <main>
        {/* Hero Gallery */}
        <section className="relative h-[50vh] overflow-hidden">
          <Image
            src={gh.images.hero}
            alt={gh.name}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        </section>

        {/* Content */}
        <section className="py-12 lg:py-20 bg-background">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            {/* Breadcrumbs */}
            <nav className="flex items-center gap-2 text-muted-foreground text-sm mb-6">
              <Link href="/" className="hover:text-primary transition-colors">
                Home
              </Link>
              <ChevronRight className="h-3.5 w-3.5" />
              <Link
                href="/guesthouses"
                className="hover:text-primary transition-colors"
              >
                Guesthouses
              </Link>
              <ChevronRight className="h-3.5 w-3.5" />
              <span className="text-foreground">{gh.name}</span>
            </nav>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Main */}
              <div className="lg:col-span-2">
                <div className="flex items-center gap-3 mb-2">
                  {gh.badges.map((badge) => (
                    <Badge
                      key={badge}
                      className="bg-primary text-white text-[10px] font-bold tracking-wider uppercase"
                    >
                      {badge}
                    </Badge>
                  ))}
                </div>
                <h1 className="font-display text-3xl md:text-4xl font-bold mb-3">
                  {gh.name}
                </h1>
                <div className="flex items-center gap-4 text-muted-foreground mb-8">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-primary text-primary" />
                    <span className="text-sm font-bold text-foreground">
                      {gh.rating}
                    </span>
                    <span className="text-xs">
                      ({gh.reviewCount} reviews)
                    </span>
                  </div>
                  <span className="flex items-center gap-1.5 text-sm">
                    <MapPin className="h-4 w-4" />
                    {gh.location.island}, {gh.location.atoll}
                  </span>
                </div>

                <h2 className="text-[11px] font-bold uppercase tracking-[0.2em] text-primary mb-4">
                  About This Guesthouse
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-10">
                  {gh.description}
                </p>

                {/* Room Types */}
                <h2 className="text-xl font-bold mb-6">Available Room Types</h2>
                <div className="space-y-6">
                  {gh.rooms.map((room) => (
                    <div
                      key={room.id}
                      className="flex flex-col md:flex-row gap-6 bg-card rounded-xl border overflow-hidden"
                    >
                      <div className="relative w-full md:w-64 aspect-[4/3] md:aspect-auto shrink-0">
                        <Image
                          src={room.image}
                          alt={room.name}
                          fill
                          className="object-cover"
                          sizes="256px"
                        />
                      </div>
                      <div className="p-5 flex-1">
                        <h3 className="text-lg font-bold mb-2">{room.name}</h3>
                        <p className="text-sm text-muted-foreground mb-3">
                          {room.description}
                        </p>
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
                        <div className="mt-4 pt-4 border-t">
                          <span className="text-lg font-bold">
                            ${room.priceFrom}
                            <span className="text-sm text-muted-foreground font-normal">
                              {" "}/ night
                            </span>
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sidebar */}
              <div>
                <div className="bg-card rounded-xl border p-6 sticky top-24">
                  <div className="text-sm text-muted-foreground mb-1">
                    Starting from
                  </div>
                  <div className="text-3xl font-bold mb-6">
                    ${gh.priceFrom}
                    <span className="text-base text-muted-foreground font-normal">
                      {" "}/ night
                    </span>
                  </div>
                  <Button
                    asChild
                    className="w-full bg-primary hover:bg-primary/90 text-white font-bold uppercase tracking-wider mb-3"
                  >
                    <Link href="/contact">Book Now</Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white font-bold"
                  >
                    <a
                      href="https://wa.me/9607771234"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle className="mr-2 h-4 w-4" />
                      WhatsApp
                    </a>
                  </Button>

                  <div className="mt-6 pt-6 border-t">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-4">
                      Amenities
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {gh.amenities.map((a, i) => (
                        <span
                          key={i}
                          className="text-xs font-medium bg-muted px-3 py-1.5 rounded-full"
                        >
                          {a.label}
                        </span>
                      ))}
                    </div>
                  </div>
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

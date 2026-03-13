import type { Metadata } from "next";
import Image from "next/image";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { WhatsAppButton } from "@/components/layout/whatsapp-button";
import { HeroSection } from "@/components/shared/hero-section";
import { SectionHeader } from "@/components/shared/section-header";
import { CTASection } from "@/components/shared/cta-section";
import { TeamGrid } from "@/components/about/team-grid";
import { OfficeScroll } from "@/components/about/office-scroll";
import { team, offices } from "@/data/team";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Island Life Travel was born from a love for the Maldives. Meet the team behind the world's most curated Maldivian travel experience.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection
          image="https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=1920&q=80"
          title="Crafting Luxury With Local Soul"
          subtitle="From a boutique Malé agency to a global name in Maldivian luxury travel"
          height="medium"
          overlay="heavy"
        />

        {/* Story */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div className="relative aspect-[4/5] rounded-xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=1200&q=80"
                  alt="Maldives underwater"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div>
                <SectionHeader
                  label="Our Story"
                  title="From Boutique Agency to Global Luxury Pioneer"
                />
                <div className="space-y-5 text-muted-foreground leading-relaxed">
                  <p>
                    Founded in 2010 by Amina Zaki in Malé, Island Life Travel
                    began as a small agency with a big vision: to share the
                    authentic beauty of the Maldives with the world while
                    preserving its delicate ecosystem.
                  </p>
                  <p>
                    What started as a one-woman operation connecting travelers
                    with local guesthouses has grown into a globally recognized
                    luxury travel company with offices in five cities. Yet our
                    core remains unchanged — every itinerary is crafted with the
                    same personal touch and local expertise that defined our very
                    first booking.
                  </p>
                  <p>
                    Today, we partner with over 60 luxury resorts and countless
                    local island experiences to offer what no algorithm can: the
                    wisdom of people who grew up on these islands and know every
                    hidden lagoon, every secret sandbank, every sunset worth
                    staying for.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-20 lg:py-28 bg-card">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <SectionHeader
              label="The Team"
              title="The Minds Behind the Magic"
              align="center"
            />
            <TeamGrid team={team} />
          </div>
        </section>

        {/* Offices */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <SectionHeader
              label="Global Presence"
              title="Find Us Around the World"
              align="center"
            />
            <OfficeScroll offices={offices} />
          </div>
        </section>

        {/* CTA */}
        <CTASection
          title="Ready to start your journey?"
          description="Our team of island experts is ready to craft your perfect Maldivian escape."
          primaryAction={{ label: "Inquire Now", href: "/contact" }}
          secondaryAction={{ label: "View Experiences", href: "/experiences" }}
          variant="dark"
        />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}

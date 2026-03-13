import Link from "next/link";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { WhatsAppButton } from "@/components/layout/whatsapp-button";
import { HeroSection } from "@/components/shared/hero-section";
import { CTASection } from "@/components/shared/cta-section";
import { IntroStrip } from "@/components/home/intro-strip";
import { DestinationReel } from "@/components/home/destination-reel";
import { FeaturedResorts } from "@/components/home/featured-resorts";
import { ExperienceShowcase } from "@/components/home/experience-showcase";
import { MapSection } from "@/components/home/map-section";
import { TestimonialSection } from "@/components/home/testimonial-section";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Cinematic Hero — full viewport, bottom-aligned text */}
        <HeroSection
          image="https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=1920&q=80"
          title="Your Island Life Begins Here"
          subtitle="Luxury resorts, authentic guesthouses, and unforgettable experiences — curated by Maldivian experts who call these islands home."
          height="full"
          overlay="medium"
          showScrollIndicator
        >
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/resorts"
              className="inline-flex items-center px-6 py-3 text-[13px] font-medium tracking-[0.02em] bg-white text-black rounded-full hover:bg-white/90 transition-colors"
            >
              Explore Resorts
            </Link>
            <Link
              href="/experiences"
              className="inline-flex items-center px-6 py-3 text-[13px] font-medium tracking-[0.02em] bg-white/10 text-white border border-white/20 rounded-full backdrop-blur-sm hover:bg-white/20 transition-colors"
            >
              View Experiences
            </Link>
          </div>
        </HeroSection>

        {/* Editorial Statement + Stats */}
        <IntroStrip />

        {/* Destination Photo Reel */}
        <DestinationReel />

        {/* Featured Resorts — asymmetric grid */}
        <FeaturedResorts />

        {/* Testimonial */}
        <TestimonialSection />

        {/* Experience Showcase — scroll-driven reveal */}
        <ExperienceShowcase />

        {/* Map / Atolls — dark atmospheric section */}
        <MapSection />

        {/* CTA */}
        <CTASection
          title="Ready to escape?"
          description="Let our island experts craft your perfect Maldivian journey. Whether it's a luxury resort getaway or an authentic local island experience, we'll make it unforgettable."
          primaryAction={{ label: "Plan Your Trip", href: "/contact" }}
          secondaryAction={{
            label: "View Experiences",
            href: "/experiences",
          }}
          variant="dark"
        />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}

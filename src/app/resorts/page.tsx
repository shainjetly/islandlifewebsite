import type { Metadata } from "next";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { WhatsAppButton } from "@/components/layout/whatsapp-button";
import { HeroSection } from "@/components/shared/hero-section";
import { CTASection } from "@/components/shared/cta-section";
import { ResortListing } from "@/components/resorts/resort-listing";
import { resorts } from "@/data/resorts";

export const metadata: Metadata = {
  title: "Luxury Resorts",
  description:
    "Discover the finest luxury resorts in the Maldives. Overwater villas, private islands, world-class dining, and unparalleled service.",
};

export default function ResortsPage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection
          image="https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=1920&q=80"
          title="Luxury Resorts"
          subtitle="Exceptional collections of the world's finest Maldivian retreats, handpicked for discerning travelers."
          height="medium"
          overlay="medium"
        />

        <section className="py-16 lg:py-24 bg-white dark:bg-[#0c0a09]">
          <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
            <ResortListing resorts={resorts} />
          </div>
        </section>

        <CTASection
          title="Can't decide?"
          description="Our travel consultants know every resort personally. Let us match you with your perfect island."
          primaryAction={{ label: "Get Recommendations", href: "/contact" }}
          variant="dark"
        />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}

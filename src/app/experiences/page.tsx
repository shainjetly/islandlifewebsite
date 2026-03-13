import type { Metadata } from "next";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { WhatsAppButton } from "@/components/layout/whatsapp-button";
import { HeroSection } from "@/components/shared/hero-section";
import { CTASection } from "@/components/shared/cta-section";
import { ExperienceCategories } from "@/components/experiences/experience-categories";
import { AdventureGrid } from "@/components/experiences/adventure-grid";

export const metadata: Metadata = {
  title: "Experiences & Adventures",
  description:
    "Discover unforgettable Maldivian experiences. From snorkeling with manta rays to private sandbank picnics and underwater dining.",
};

export default function ExperiencesPage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection
          image="https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1920&q=80"
          title="Experiences"
          subtitle="Unforgettable moments that become lifelong memories"
          height="medium"
          overlay="medium"
        />

        <ExperienceCategories />
        <AdventureGrid />

        <CTASection
          title="Ready for your island adventure?"
          description="From underwater dining to sunrise yoga, let us craft an experience that speaks to your soul."
          primaryAction={{ label: "Enquire Now", href: "/contact" }}
          secondaryAction={{ label: "View Resorts", href: "/resorts" }}
          variant="dark"
        />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}

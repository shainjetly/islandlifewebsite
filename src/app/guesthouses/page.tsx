import type { Metadata } from "next";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { WhatsAppButton } from "@/components/layout/whatsapp-button";
import { HeroSection } from "@/components/shared/hero-section";
import { CTASection } from "@/components/shared/cta-section";
import { GuesthouseListing } from "@/components/guesthouses/guesthouse-listing";
import { guesthouses } from "@/data/guesthouses";

export const metadata: Metadata = {
  title: "Island Guesthouses",
  description:
    "Experience authentic Maldivian hospitality at our handpicked island guesthouses. Affordable stays on local islands with genuine cultural experiences.",
};

export default function GuesthousesPage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection
          image="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1920&q=80"
          title="Island Guesthouses"
          subtitle="Authentic Maldivian hospitality on local islands"
          height="medium"
          overlay="medium"
        />

        <section className="py-16 lg:py-24 bg-white dark:bg-[#0c0a09]">
          <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
            <GuesthouseListing guesthouses={guesthouses} />
          </div>
        </section>

        <CTASection
          title="Looking for something specific?"
          description="Our local experts can recommend the perfect guesthouse for your budget and interests."
          primaryAction={{ label: "Ask Our Experts", href: "/contact" }}
          variant="dark"
        />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}

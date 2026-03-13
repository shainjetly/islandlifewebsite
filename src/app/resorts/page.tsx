import type { Metadata } from "next";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { WhatsAppButton } from "@/components/layout/whatsapp-button";
import { HeroSection } from "@/components/shared/hero-section";
import { CTASection } from "@/components/shared/cta-section";
import { ResortCard } from "@/components/resorts/resort-card";
import { resorts } from "@/data/resorts";

export const metadata: Metadata = {
  title: "Luxury Resorts",
  description:
    "Discover the finest luxury resorts in the Maldives. Overwater villas, private islands, world-class dining, and unparalleled service.",
};

export default function ResortsPage() {
  const featured = resorts[0];
  const rest = resorts.slice(1);

  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <HeroSection
          image="https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=1920&q=80"
          title="Luxury Resorts"
          subtitle="Exceptional collections of the world's finest Maldivian retreats, handpicked for discerning travelers."
          height="medium"
          overlay="medium"
        />

        {/* Featured Resort — full-width cinematic card */}
        <section className="pt-20 lg:pt-28 pb-6 bg-white dark:bg-[#0c0a09]">
          <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
            <div className="flex items-center justify-between mb-10">
              <div>
                <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-muted-foreground block mb-2">
                  Featured
                </span>
                <p className="text-sm text-muted-foreground">
                  Showing{" "}
                  <span className="font-semibold text-foreground">
                    {resorts.length}
                  </span>{" "}
                  luxury resorts
                </p>
              </div>
            </div>

            <ResortCard resort={featured} variant="large" />
          </div>
        </section>

        {/* Rest of resorts — 3 column grid */}
        <section className="py-16 lg:py-20 bg-white dark:bg-[#0c0a09]">
          <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-14">
              {rest.map((resort, i) => (
                <ResortCard key={resort.id} resort={resort} index={i} />
              ))}
            </div>
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

import type { Metadata } from "next";
import Image from "next/image";
import { Mail, Phone, Clock } from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { WhatsAppButton } from "@/components/layout/whatsapp-button";
import { HeroSection } from "@/components/shared/hero-section";
import { ContactForm } from "@/components/contact/contact-form";
import { offices } from "@/data/team";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Connect with Island Life Travel. Our global team of travel experts is ready to help you plan your perfect Maldivian escape.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection
          image="https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?w=1920&q=80"
          title="Connect with Paradise"
          subtitle="Our global experts are here to craft your dream Maldivian escape"
          height="medium"
          overlay="medium"
        />

        {/* Quick Contact Strip */}
        <section className="relative -mt-16 z-10">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <div className="bg-card rounded-xl shadow-xl border grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border">
              {[
                {
                  icon: Mail,
                  label: "Email Us",
                  value: siteConfig.email,
                  href: `mailto:${siteConfig.email}`,
                },
                {
                  icon: Phone,
                  label: "WhatsApp",
                  value: siteConfig.whatsapp,
                  href: `https://wa.me/${siteConfig.whatsapp.replace(/[^0-9]/g, "")}`,
                },
                {
                  icon: Clock,
                  label: "Support Hours",
                  value: "24/7 Global Support",
                  href: null,
                },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary shrink-0">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-muted-foreground mb-0.5">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-sm font-bold hover:text-primary transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-sm font-bold">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form + Image */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
              {/* Form */}
              <div>
                <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-3">
                  Begin Your Journey
                </h2>
                <p className="text-muted-foreground mb-10">
                  Tell us about your dream Maldives trip and our experts will
                  craft a personalized itinerary just for you.
                </p>
                <ContactForm />
              </div>

              {/* Image */}
              <div className="relative rounded-xl overflow-hidden hidden lg:block">
                <Image
                  src="https://images.unsplash.com/photo-1602002418816-5c0aeef426aa?w=1200&q=80"
                  alt="Maldives overwater villa"
                  fill
                  className="object-cover"
                  sizes="50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                <div className="absolute bottom-8 left-8 right-8">
                  <p className="text-white text-sm font-light italic">
                    &ldquo;The impossible becomes effortless in the hands of
                    Island Life Travel.&rdquo;
                  </p>
                  <p className="text-white/60 text-xs mt-2">
                    — Condé Nast Traveller
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Office Grid */}
        <section className="py-20 lg:py-28 bg-card">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-center mb-12">
              Our Global Presence
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {offices.map((office) => (
                <div
                  key={office.id}
                  className="bg-background p-6 rounded-xl border hover:shadow-md transition-shadow"
                >
                  <h3 className="text-primary font-bold text-lg mb-1">
                    {office.city}
                  </h3>
                  <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider mb-3">
                    {office.country}
                  </p>
                  <p className="text-xs text-muted-foreground leading-relaxed mb-4">
                    {office.address}
                  </p>
                  <a
                    href={`tel:${office.phone}`}
                    className="flex items-center gap-1.5 text-xs font-bold hover:text-primary transition-colors"
                  >
                    <Phone className="h-3 w-3" />
                    {office.phone}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}

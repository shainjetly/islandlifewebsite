import Link from "next/link";
import { Palmtree, Instagram, Facebook, Twitter, Youtube } from "lucide-react";
import { NewsletterForm } from "@/components/shared/newsletter-form";
import { siteConfig, footerLinks } from "@/data/site";

export function Footer() {
  return (
    <footer className="bg-[#1a1614] dark:bg-[#0c0a09] text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center md:text-left">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-2.5 mb-6">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-white">
                <Palmtree className="h-5 w-5" />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-sm font-bold tracking-wide uppercase text-white">
                  Island Life
                </span>
                <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-white/50">
                  Travel
                </span>
              </div>
            </Link>
            <p className="text-sm text-white/50 leading-relaxed mb-6 max-w-xs mx-auto md:mx-0">
              {siteConfig.description.slice(0, 120)}...
            </p>
            <div className="flex items-center gap-3 justify-center md:justify-start">
              {[
                { icon: Instagram, href: siteConfig.socials.instagram },
                { icon: Facebook, href: siteConfig.socials.facebook },
                { icon: Twitter, href: siteConfig.socials.twitter },
                { icon: Youtube, href: siteConfig.socials.youtube },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/40 transition-all hover:border-primary hover:text-primary hover:bg-primary/10"
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Destinations */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white/70 mb-6">
              Destinations
            </h4>
            <ul className="space-y-3.5">
              {footerLinks.destinations.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/40 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Explore */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white/70 mb-6">
              Explore
            </h4>
            <ul className="space-y-3.5">
              {footerLinks.explore.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/40 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect + Newsletter */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-white/70 mb-6">
              Stay Connected
            </h4>
            <p className="text-sm text-white/40 mb-4">
              Get the latest travel inspiration and exclusive offers.
            </p>
            <NewsletterForm />
            <div className="mt-8 space-y-3.5">
              {footerLinks.connect.map((link) => (
                <div key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/40 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="text-[11px] font-bold text-white/30 uppercase tracking-[0.15em]">
            &copy; {new Date().getFullYear()} Island Life Travel. All rights
            reserved.
          </span>
          <div className="flex gap-6 text-[11px] text-white/30 uppercase tracking-wider">
            <Link href="#" className="hover:text-primary transition-colors">
              Privacy
            </Link>
            <Link href="#" className="hover:text-primary transition-colors">
              Terms
            </Link>
            <Link href="#" className="hover:text-primary transition-colors">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

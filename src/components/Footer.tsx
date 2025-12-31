import { ArrowUp, Linkedin, Instagram } from "lucide-react";
import logo from "@/assets/logo.png";

const quickLinks = [
  { label: "Services", href: "#services" },
  { label: "Process", href: "#approach" },
  { label: "Results", href: "#results" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  const scrollToSection = (href: string) =>
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer className="relative border-t border-primary/20">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 border-2 border-primary/60 flex items-center justify-center">
                <img
                  src={logo}
                  alt="Continental Luxe logo"
                  className="w-8 h-8 object-contain"
                />
              </div>
              <span className="font-cormorant text-xl font-semibold text-foreground">
                Continental Luxe
              </span>
            </div>
            <p className="text-muted-foreground text-sm">
              Professional Airbnb Management Worldwide
            </p>
            <div className="flex gap-4">
              {[
                {
                  Icon: Linkedin,
                  href: "https://www.linkedin.com/company/continental-luxe-hosting/",
                  label: "LinkedIn",
                },
                {
                  Icon: Instagram,
                  href: "https://www.instagram.com/continental_luxe_hosting/",
                  label: "Instagram",
                },
              ].map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-10 h-10 border border-border/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all"
                >
                  <s.Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-cormorant text-lg font-semibold text-foreground mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-cormorant text-lg font-semibold text-foreground mb-6">
              Contact
            </h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <a
                  href="mailto:support@continentalluxehosting.com"
                  className="hover:text-primary transition-colors"
                >
                  support@continentalluxehosting.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+923001234567"
                  className="hover:text-primary transition-colors"
                >
                  +92 303 577 6759
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-border/30 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © 2025 Continental Luxe Hosting. All Rights Reserved.
          </p>
        </div>
      </div>
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-primary text-primary-foreground flex items-center justify-center shadow-gold hover:shadow-gold-intense hover:-translate-y-1 transition-all z-50"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </footer>
  );
};

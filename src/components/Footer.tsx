import { ArrowUp, Linkedin, Instagram, Facebook } from 'lucide-react';

const quickLinks = [
  { label: 'Services', href: '#services' },
  { label: 'How It Works', href: '#approach' },
  { label: 'Results', href: '#results' },
  { label: 'About Us', href: '#about' },
  { label: 'Contact', href: '#contact' },
  { label: 'Free Listing Review', href: '#contact' },
];

const socialLinks = [
  { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
  { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
];

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-navy-dark relative">
      {/* Gold Border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
          {/* Logo & Tagline */}
          <div className="space-y-6">
            <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('#home'); }} className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-gold-light flex items-center justify-center">
                <span className="text-primary-foreground font-playfair font-bold text-lg">C</span>
              </div>
              <span className="font-playfair text-xl font-semibold text-foreground">
                Continental <span className="text-primary">Luxe</span>
              </span>
            </a>
            <p className="text-muted-foreground">
              Professional Airbnb Management in Pakistan. We handle the details, you keep the control.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-card border border-border/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-foreground mb-6">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:qadeer@continentalluxehosting.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  qadeer@continentalluxehosting.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+923001234567"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  +92 300 123 4567
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/923001234567"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  WhatsApp Chat
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border/30">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-muted-foreground text-sm">
              © 2025 Continental Luxe Hosting. All Rights Reserved.
            </p>
            <div className="flex items-center gap-6 text-sm">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-gradient-to-br from-primary to-gold-light text-primary-foreground flex items-center justify-center shadow-gold hover:shadow-gold-lg hover:-translate-y-1 transition-all duration-300 z-50"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </footer>
  );
};

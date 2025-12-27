import { ArrowUp, Linkedin, Instagram } from 'lucide-react';

const quickLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Process', href: '#approach' },
  { label: 'Results', href: '#results' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  const scrollToSection = (href: string) => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <footer className="relative border-t border-primary/20">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 border-2 border-primary/60 flex items-center justify-center">
                <span className="text-primary font-cormorant font-bold text-lg">CL</span>
              </div>
              <span className="font-cormorant text-xl font-semibold text-foreground">Continental Luxe</span>
            </div>
            <p className="text-muted-foreground text-sm">Professional Airbnb Management in Pakistan</p>
            <div className="flex gap-4">
              {[Linkedin, Instagram].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 border border-border/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-cormorant text-lg font-semibold text-foreground mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}><a href={link.href} onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }} className="text-muted-foreground hover:text-primary transition-colors text-sm">{link.label}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-cormorant text-lg font-semibold text-foreground mb-6">Contact</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><a href="mailto:qadeer@continentalluxehosting.com" className="hover:text-primary transition-colors">qadeer@continentalluxehosting.com</a></li>
              <li><a href="tel:+923001234567" className="hover:text-primary transition-colors">+92 300 123 4567</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-border/30 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">© 2025 Continental Luxe Hosting. All Rights Reserved.</p>
          <div className="flex gap-6 text-sm"><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Privacy</a><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Terms</a></div>
        </div>
      </div>
      <button onClick={scrollToTop} className="fixed bottom-8 right-8 w-12 h-12 bg-primary text-primary-foreground flex items-center justify-center shadow-gold hover:shadow-gold-intense hover:-translate-y-1 transition-all z-50" aria-label="Scroll to top"><ArrowUp className="w-5 h-5" /></button>
    </footer>
  );
};

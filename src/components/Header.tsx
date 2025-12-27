import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Our Approach', href: '#approach' },
  { label: 'Results', href: '#results' },
  { label: 'About Us', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/95 backdrop-blur-md border-b border-border/50 py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('#home');
          }}
          className="flex items-center gap-3 group"
        >
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-gold-light flex items-center justify-center">
            <span className="text-primary-foreground font-playfair font-bold text-lg">C</span>
          </div>
          <span className="font-playfair text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
            Continental <span className="text-primary">Luxe</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item.href);
              }}
              className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium underline-animation"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden lg:block">
          <Button
            variant="gold"
            size="default"
            onClick={() => scrollToSection('#contact')}
          >
            Free Listing Review
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-0 top-[72px] bg-background/98 backdrop-blur-md transition-all duration-300 ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <nav className="container mx-auto px-4 py-8 flex flex-col gap-6">
          {navItems.map((item, index) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item.href);
              }}
              className="text-foreground hover:text-primary transition-colors text-lg font-medium py-2 border-b border-border/30 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              {item.label}
            </a>
          ))}
          <Button
            variant="gold"
            size="lg"
            className="mt-4 animate-fade-in-up"
            style={{ animationDelay: '0.3s' }}
            onClick={() => scrollToSection('#contact')}
          >
            Free Listing Review
          </Button>
        </nav>
      </div>
    </header>
  );
};

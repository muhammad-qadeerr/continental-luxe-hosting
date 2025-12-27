import { Button } from '@/components/ui/button';
import { Check, ArrowRight } from 'lucide-react';
import heroImage from '@/assets/hero-property.jpg';

const valuePoints = [
  'Higher Occupancy Rates',
  'Better Guest Reviews',
  'Hassle-Free Management',
  'Local Market Expertise',
];

export const HeroSection = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-gradient-hero overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, hsl(var(--primary)) 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 py-32 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in-up">
            {/* Pre-header */}
            <span className="inline-block text-primary text-sm font-semibold tracking-wider uppercase">
              Pakistan's Trusted Airbnb Management Partner
            </span>

            {/* Main Headline */}
            <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-tight">
              We Handle The Details.{' '}
              <span className="block mt-2">
                You Keep The{' '}
                <span className="text-gradient-gold">Control.</span>
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-muted-foreground text-lg md:text-xl max-w-xl leading-relaxed">
              Professional Airbnb co-hosting services that improve your
              visibility, guest experience, and daily operations—while you stay
              in full control of your property and earnings.
            </p>

            {/* Value Points */}
            <div className="grid grid-cols-2 gap-4">
              {valuePoints.map((point, index) => (
                <div
                  key={point}
                  className="flex items-center gap-3 animate-fade-in-up"
                  style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                >
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  <span className="text-foreground text-sm font-medium">
                    {point}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                variant="hero"
                size="lg"
                className="group"
                onClick={() => scrollToSection('#contact')}
              >
                Get Free Listing Review
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="hero-outline"
                size="lg"
                onClick={() => scrollToSection('#services')}
              >
                See Our Services
              </Button>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div
            className="relative animate-slide-in-right"
            style={{ animationDelay: '0.3s' }}
          >
            <div className="relative rounded-2xl overflow-hidden border-2 border-primary/20 shadow-gold animate-float">
              <img
                src={heroImage}
                alt="Luxurious Airbnb property managed by Continental Luxe Hosting"
                className="w-full h-auto object-cover aspect-[4/3]"
              />
              {/* Stats Overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background/95 to-transparent p-6">
                <div className="flex items-center justify-between">
                  <div className="text-center">
                    <span className="block text-2xl font-bold text-primary font-playfair">
                      4.9★
                    </span>
                    <span className="text-xs text-muted-foreground">
                      Avg Rating
                    </span>
                  </div>
                  <div className="w-px h-10 bg-border" />
                  <div className="text-center">
                    <span className="block text-2xl font-bold text-primary font-playfair">
                      85%
                    </span>
                    <span className="text-xs text-muted-foreground">
                      Occupancy
                    </span>
                  </div>
                  <div className="w-px h-10 bg-border" />
                  <div className="text-center">
                    <span className="block text-2xl font-bold text-primary font-playfair">
                      50+
                    </span>
                    <span className="text-xs text-muted-foreground">
                      Properties
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Border */}
            <div className="absolute -inset-4 border-2 border-primary/10 rounded-3xl -z-10" />
            <div className="absolute -inset-8 border border-primary/5 rounded-[2rem] -z-10" />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-pulse">
        <span className="text-xs text-muted-foreground">Scroll to explore</span>
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-primary rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

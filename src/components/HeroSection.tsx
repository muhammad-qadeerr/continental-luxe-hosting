import { Button } from '@/components/ui/button';
import { Check, ArrowRight, Sparkles } from 'lucide-react';
import heroImage from '@/assets/hero-property.jpg';

const valuePoints = [
  'Higher Occupancy Rates',
  'Better Guest Reviews',
  'Hassle-Free Management',
  'Global Market Expertise',
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
      className="relative min-h-screen flex items-center overflow-hidden pt-24 lg:pt-32"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-pulse-slow" />
        <div className="absolute bottom-1/4 -right-32 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px] animate-pulse-slow" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-primary/5 via-transparent to-transparent animate-pulse-slow" style={{ animationDelay: '4s' }} />
        
        {/* Art Deco Lines */}
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-primary/10 to-transparent" />
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-primary/10 to-transparent" />
        
        {/* Decorative Corners */}
        <div className="absolute top-20 left-10 w-20 h-20">
          <div className="absolute top-0 left-0 w-full h-px bg-primary/20" />
          <div className="absolute top-0 left-0 w-px h-full bg-primary/20" />
        </div>
        <div className="absolute top-20 right-10 w-20 h-20">
          <div className="absolute top-0 right-0 w-full h-px bg-primary/20" />
          <div className="absolute top-0 right-0 w-px h-full bg-primary/20" />
        </div>
      </div>

      <div className="container mx-auto px-6 pb-16 lg:pb-0 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="space-y-10">
            {/* Pre-header */}
            <div className="animate-fade-up flex items-center gap-3">
              <div className="w-12 h-px bg-primary" />
              <span className="text-primary text-sm font-outfit tracking-[0.3em] uppercase">
                Premier Global Partner
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="animate-fade-up animate-fade-up-delay-1 font-cormorant text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-semibold text-foreground leading-[0.95] tracking-tight">
              We Handle
              <br />
              <span className="italic text-gradient-gold">The Details.</span>
              <br />
              <span className="text-muted-foreground/80">You Keep</span>
              <br />
              <span className="relative inline-block">
                The Control
                <Sparkles className="absolute -top-2 -right-8 w-6 h-6 text-primary animate-shimmer" />
              </span>
            </h1>

            {/* Subheadline */}
            <p className="animate-fade-up animate-fade-up-delay-2 text-muted-foreground text-lg md:text-xl max-w-lg leading-relaxed font-light">
              Professional Airbnb co-hosting that elevates your property's visibility and guest experience—while you maintain complete control.
            </p>

            {/* Value Points */}
            <div className="animate-fade-up animate-fade-up-delay-3 grid grid-cols-2 gap-4">
              {valuePoints.map((point, index) => (
                <div
                  key={point}
                  className="flex items-center gap-3 group"
                >
                  <div className="w-6 h-6 border border-primary/40 flex items-center justify-center group-hover:bg-primary/10 transition-colors duration-300">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  <span className="text-foreground/90 text-sm font-medium">
                    {point}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="animate-fade-up animate-fade-up-delay-4 flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                variant="luxury"
                size="lg"
                className="group"
                onClick={() => scrollToSection('#contact')}
              >
                <span className="uppercase tracking-widest text-sm">Get Free Review</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
              </Button>
              <Button
                variant="luxury-outline"
                size="lg"
                onClick={() => scrollToSection('#services')}
              >
                <span className="uppercase tracking-widest text-sm">Explore Services</span>
              </Button>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative animate-fade-up animate-fade-up-delay-3">
            {/* Main Image Container */}
            <div className="relative">
              {/* Decorative Frame */}
              <div className="absolute -inset-4 border border-primary/20" />
              <div className="absolute -inset-8 border border-primary/10" />
              
              {/* Gold Corner Accents */}
              <div className="absolute -top-4 -left-4 w-8 h-8 border-t-2 border-l-2 border-primary" />
              <div className="absolute -top-4 -right-4 w-8 h-8 border-t-2 border-r-2 border-primary" />
              <div className="absolute -bottom-4 -left-4 w-8 h-8 border-b-2 border-l-2 border-primary" />
              <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b-2 border-r-2 border-primary" />

              <div className="relative overflow-hidden border border-border/50 shadow-elevated">
                <img
                  src={heroImage}
                  alt="Luxurious Airbnb property managed by Continental Luxe Hosting"
                  className="w-full h-auto object-cover aspect-[4/3] transform hover:scale-105 transition-transform duration-1000"
                />
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
                
                {/* Stats Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="glass rounded-lg p-6 flex items-center justify-between">
                    <div className="text-center">
                      <span className="block text-3xl font-cormorant font-bold text-primary">
                        4.9★
                      </span>
                      <span className="text-xs text-muted-foreground uppercase tracking-wider">
                        Rating
                      </span>
                    </div>
                    <div className="w-px h-12 bg-border" />
                    <div className="text-center">
                      <span className="block text-3xl font-cormorant font-bold text-primary">
                        85%
                      </span>
                      <span className="text-xs text-muted-foreground uppercase tracking-wider">
                        Occupancy
                      </span>
                    </div>
                    <div className="w-px h-12 bg-border" />
                    <div className="text-center">
                      <span className="block text-3xl font-cormorant font-bold text-primary">
                        50+
                      </span>
                      <span className="text-xs text-muted-foreground uppercase tracking-wider">
                        Properties
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-8 -right-8 glass rounded-lg p-4 animate-float shadow-gold hidden lg:block">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                  <Check className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <span className="block font-semibold text-foreground text-sm">Verified Partner</span>
                  <span className="text-xs text-muted-foreground">Certified Excellence</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
        <span className="text-xs text-muted-foreground uppercase tracking-[0.3em]">Scroll</span>
        <div className="w-px h-16 bg-gradient-to-b from-primary to-transparent" />
      </div>
    </section>
  );
};

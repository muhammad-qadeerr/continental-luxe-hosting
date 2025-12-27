import { Button } from '@/components/ui/button';

export const AboutSection = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-charcoal/30" />
      <div className="absolute inset-0 pattern-lines" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left - Visual */}
          <div className="relative">
            <div className="absolute -inset-4 border border-primary/10" />
            <div className="relative glass border-gold-glow aspect-[4/5] flex items-center justify-center">
              <div className="text-center space-y-6 p-12">
                <div className="w-32 h-32 mx-auto bg-gradient-to-br from-primary to-gold-light flex items-center justify-center shadow-gold-intense">
                  <span className="text-primary-foreground font-cormorant text-6xl font-bold">Q</span>
                </div>
                <div>
                  <span className="block text-foreground font-cormorant text-3xl font-semibold">Qadeer</span>
                  <span className="text-muted-foreground">Founder & CEO</span>
                </div>
              </div>
              <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-primary/30" />
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-px bg-primary" />
                <span className="text-primary text-sm font-outfit tracking-[0.3em] uppercase">Meet The Founder</span>
              </div>
              <h2 className="font-cormorant text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground">
                Hi, I'm <span className="italic text-gradient-gold">Qadeer</span>
              </h2>
            </div>

            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                I started Continental Luxe Hosting after seeing too many great properties struggle with visibility—not because hosts weren't capable, but because Airbnb success requires constant attention most people don't have time for.
              </p>
              <p>
                With years of experience in Pakistan's short-term rental market, I've learned what actually works here—from pricing strategies for local demand to guest communication that drives 5-star reviews.
              </p>
              <p className="text-foreground font-medium">
                If you're serious about growing your Airbnb business while maintaining control, I'd love to discuss how we can help.
              </p>
            </div>

            <span className="block font-cormorant text-4xl italic text-gradient-gold">Qadeer</span>

            <Button variant="luxury" size="lg" onClick={() => scrollToSection('#contact')}>
              <span className="uppercase tracking-widest text-sm">Book a Call</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

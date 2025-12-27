import { Button } from '@/components/ui/button';

export const AboutSection = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="py-24 lg:py-32 bg-navy-light relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23d4af37' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image */}
          <div className="relative">
            {/* Profile Card */}
            <div className="relative bg-card rounded-2xl overflow-hidden border border-border/50 shadow-card">
              {/* Placeholder for founder image */}
              <div className="aspect-[4/5] bg-gradient-to-br from-navy to-navy-lighter flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-primary to-gold-light flex items-center justify-center shadow-gold-lg">
                    <span className="text-primary-foreground font-playfair text-5xl font-bold">Q</span>
                  </div>
                  <div>
                    <span className="block text-foreground font-playfair text-2xl font-bold">Qadeer</span>
                    <span className="text-muted-foreground">Founder & CEO</span>
                  </div>
                </div>
              </div>

              {/* Decorative Border */}
              <div className="absolute inset-0 border-2 border-primary/10 rounded-2xl pointer-events-none" />
            </div>

            {/* Floating Cards */}
            <div className="absolute -bottom-6 -right-6 bg-card rounded-xl p-4 border border-border/50 shadow-card animate-float">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-gold-light flex items-center justify-center">
                  <span className="text-primary-foreground font-bold">✓</span>
                </div>
                <div>
                  <span className="block font-bold text-foreground text-sm">Verified Partner</span>
                  <span className="text-xs text-muted-foreground">Airbnb Certified</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="inline-block text-primary text-sm font-semibold tracking-wider uppercase">
                Meet The Founder
              </span>
              <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
                Hi, I'm <span className="text-gradient-gold">Qadeer</span>
              </h2>
            </div>

            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                I started Continental Luxe Hosting after seeing too many great properties struggle with visibility and guest management—not because the hosts weren't capable, but because running a successful Airbnb requires constant attention to details most people simply don't have time for.
              </p>
              <p>
                With years of experience in Pakistan's short-term rental market, I've learned what actually works here—from pricing strategies that account for local demand patterns to guest communication that builds trust and drives 5-star reviews.
              </p>
              <p>
                Today, our team manages 50+ properties across Pakistan, helping hosts increase revenue while spending less time on day-to-day operations. We don't believe in shortcuts or unrealistic promises—just practical, proven strategies that deliver results.
              </p>
              <p className="text-foreground font-medium">
                If you're serious about growing your Airbnb business while maintaining control of your property, I'd love to discuss how we can help.
              </p>
            </div>

            {/* Signature */}
            <div className="pt-4">
              <span className="font-playfair text-3xl text-gradient-gold italic">Qadeer</span>
            </div>

            {/* CTA */}
            <Button
              variant="gold"
              size="lg"
              onClick={() => scrollToSection('#contact')}
            >
              Book a Call With Qadeer
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

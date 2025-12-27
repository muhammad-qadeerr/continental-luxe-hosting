import { Shield, MapPin, Handshake, MessageCircle, Trophy } from 'lucide-react';

const differentiators = [
  {
    icon: Shield,
    title: 'You Stay In Control',
    description:
      'Keep full access to your Airbnb account and payouts. We never take over—we support.',
  },
  {
    icon: MapPin,
    title: 'Local Market Expertise',
    description:
      "We understand Pakistan's Airbnb market, seasonal patterns, and what guests here actually want.",
  },
  {
    icon: Handshake,
    title: 'No Unrealistic Promises',
    description:
      'We focus on practical, proven strategies—not overnight success myths. Real results take partnership.',
  },
  {
    icon: MessageCircle,
    title: 'Transparent Communication',
    description:
      'Monthly reports, open communication channels, and always available for questions.',
  },
  {
    icon: Trophy,
    title: 'Proven Track Record',
    description:
      'Currently managing 50+ successful properties with consistently high ratings and occupancy.',
  },
];

export const WhyUsSection = () => {
  return (
    <section className="py-24 lg:py-32 bg-background relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="inline-block text-primary text-sm font-semibold tracking-wider uppercase">
                Why Choose Us
              </span>
              <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
                Why Work With{' '}
                <span className="text-gradient-gold">Continental Luxe?</span>
              </h2>
              <p className="text-muted-foreground text-lg">
                We're not like typical property managers. Here's what makes us different:
              </p>
            </div>

            {/* Differentiators */}
            <div className="space-y-6">
              {differentiators.map((item, index) => (
                <div
                  key={item.title}
                  className="flex gap-5 group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground text-lg mb-1">
                      {item.title}
                    </h4>
                    <p className="text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Visual */}
          <div className="relative">
            {/* Quote Card */}
            <div className="relative bg-card rounded-2xl p-10 lg:p-12 border border-border/50 shadow-card">
              {/* Quote Icon */}
              <div className="absolute -top-6 left-10 w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-gold-light flex items-center justify-center shadow-gold">
                <span className="text-primary-foreground text-3xl font-playfair">"</span>
              </div>

              {/* Quote Text */}
              <blockquote className="font-playfair text-2xl lg:text-3xl text-foreground leading-relaxed mb-8 pt-4">
                We don't just manage properties—we build{' '}
                <span className="text-gradient-gold">long-term partnerships.</span>
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-gold-light flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-xl font-playfair">Q</span>
                </div>
                <div>
                  <span className="block font-semibold text-foreground">Qadeer</span>
                  <span className="text-sm text-muted-foreground">Founder, Continental Luxe Hosting</span>
                </div>
              </div>

              {/* Decorative Lines */}
              <div className="absolute top-0 right-0 w-24 h-24">
                <div className="absolute top-8 right-8 w-12 h-px bg-primary/30" />
                <div className="absolute top-8 right-8 w-px h-12 bg-primary/30" />
              </div>
            </div>

            {/* Stats Cards */}
            <div className="absolute -bottom-8 -left-8 bg-card rounded-xl p-5 border border-border/50 shadow-card animate-float">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                  <Trophy className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <span className="block font-bold text-foreground font-playfair text-lg">50+</span>
                  <span className="text-xs text-muted-foreground">Properties</span>
                </div>
              </div>
            </div>

            <div className="absolute -top-8 -right-8 bg-card rounded-xl p-5 border border-border/50 shadow-card animate-float" style={{ animationDelay: '1s' }}>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                  <Shield className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <span className="block font-bold text-foreground font-playfair text-lg">100%</span>
                  <span className="text-xs text-muted-foreground">Control Retained</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

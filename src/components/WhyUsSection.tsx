import { Shield, MapPin, Handshake, MessageCircle, Trophy } from "lucide-react";

const differentiators = [
  {
    icon: Shield,
    title: "You Stay In Control",
    description:
      "Full access to your account and payouts. We support—never take over.",
  },
  {
    icon: MapPin,
    title: "Global Market Expertise",
    description:
      "Deep understanding of Airbnb markets accross the globe and guest expectations.",
  },
  {
    icon: Handshake,
    title: "No False Promises",
    description:
      "Practical, proven strategies that deliver real results over time.",
  },
  {
    icon: MessageCircle,
    title: "Transparent Communication",
    description: "Monthly reports and always available for your questions.",
  },
  {
    icon: Trophy,
    title: "Proven Track Record",
    description: "50+ successful properties with consistently high ratings.",
  },
];

export const WhyUsSection = () => {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-charcoal/30" />
      <div className="absolute inset-0 pattern-lines" />

      {/* Gradient Orbs */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[120px]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Content */}
          <div className="space-y-12">
            {/* Header */}
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-px bg-primary" />
                <span className="text-primary text-sm font-outfit tracking-[0.3em] uppercase">
                  Why Choose Us
                </span>
              </div>
              <h2 className="font-cormorant text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight">
                Why{" "}
                <span className="italic text-gradient-gold">
                  Continental Luxe?
                </span>
              </h2>
              <p className="text-muted-foreground text-lg">
                We're not typical property managers. Here's what sets us apart:
              </p>
            </div>

            {/* Differentiators */}
            <div className="space-y-6">
              {differentiators.map((item, index) => (
                <div
                  key={item.title}
                  className="group flex gap-6 p-6 -mx-6 hover:bg-primary/5 rounded-lg transition-all duration-500"
                >
                  <div className="w-14 h-14 flex items-center justify-center bg-primary/5 border border-primary/20 flex-shrink-0 group-hover:bg-primary/10 group-hover:border-primary/40 transition-all duration-300">
                    <item.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-cormorant text-xl font-semibold text-foreground mb-2">
                      {item.title}
                    </h4>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Quote Card */}
          <div className="relative">
            {/* Decorative Frame */}
            <div className="absolute -inset-4 border border-primary/10" />
            <div className="absolute -inset-8 border border-primary/5" />

            {/* Quote Card */}
            <div className="relative glass border-gold-glow p-12 lg:p-16">
              {/* Quote Icon */}
              <div className="absolute -top-6 left-12 w-12 h-12 bg-primary flex items-center justify-center">
                <span className="text-primary-foreground text-3xl font-cormorant">
                  "
                </span>
              </div>

              {/* Quote Text */}
              <blockquote className="font-cormorant text-3xl lg:text-4xl text-foreground leading-relaxed mb-10 pt-4">
                We don't just manage properties—we build{" "}
                <span className="italic text-gradient-gold">
                  long-term partnerships.
                </span>
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-5">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-gold-light flex items-center justify-center">
                  <span className="text-primary-foreground font-cormorant font-bold text-2xl">
                    S
                  </span>
                </div>
                <div>
                  <span className="block font-cormorant text-xl font-semibold text-foreground">
                    Saad
                  </span>
                  <span className="text-sm text-muted-foreground">
                    Founder, Continental Luxe
                  </span>
                </div>
              </div>

              {/* Decorative Corner */}
              <div className="absolute bottom-0 right-0 w-16 h-16">
                <div className="absolute bottom-4 right-4 w-8 h-px bg-primary/40" />
                <div className="absolute bottom-4 right-4 w-px h-8 bg-primary/40" />
              </div>
            </div>

            {/* Floating Stats */}
            <div className="absolute -bottom-8 -left-8 glass p-5 animate-float shadow-gold hidden lg:block">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 border border-primary/30 flex items-center justify-center">
                  <Trophy className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <span className="block font-cormorant text-2xl font-bold text-foreground">
                    50+
                  </span>
                  <span className="text-xs text-muted-foreground uppercase tracking-wider">
                    Properties
                  </span>
                </div>
              </div>
            </div>

            <div
              className="absolute -top-8 -right-8 glass p-5 animate-float hidden lg:block"
              style={{ animationDelay: "2s" }}
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 border border-primary/30 flex items-center justify-center">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <span className="block font-cormorant text-2xl font-bold text-foreground">
                    100%
                  </span>
                  <span className="text-xs text-muted-foreground uppercase tracking-wider">
                    Control
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

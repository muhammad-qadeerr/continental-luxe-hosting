import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BOOKING_URL } from "@/lib/booking";

const plans = [
  {
    name: "Adjustable",
    priceLabel: "From",
    price: "17%",
    description:
      "You choose the length of your commitment and get fixed solutions. Less commitment, more flexibility.",
    features: [
      "Complete property management",
      "Tech fuelled pricing algorithms to maximise yield",
      "24/7 coverage",
      "Claims handling",
      "Reviews management",
      "No long-term contracts",
    ],
    cta: "Get Started",
    featured: false,
  },
  {
    name: "12 Months",
    priceLabel: "From",
    price: "15%",
    description:
      "You choose to trust our expertise for the next 12 months with a competitive management fee. More commitment, more rewards.",
    features: [
      "Complete property management",
      "Tech fuelled pricing algorithms to maximise yield",
      "24/7 coverage",
      "Claims handling",
      "Reviews management",
      "Weekly reporting",
      "Dedicated team",
      "Scales with portfolio",
    ],
    cta: "Get Started",
    featured: true,
  },
];

export const PricingSection = () => {
  return (
    <section id="pricing" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-charcoal/50" />
      <div className="absolute inset-0 pattern-deco" />

      {/* Gradient Orbs */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px]" />

      {/* Decorative Lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-20 space-y-6">
          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-px bg-primary" />
            <span className="text-primary text-sm font-outfit tracking-[0.3em] uppercase">
              Pricing
            </span>
            <div className="w-12 h-px bg-primary" />
          </div>
          <h2 className="font-cormorant text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground">
            Simple, Transparent{" "}
            <span className="italic text-gradient-gold">Pricing</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Choose the plan that fits your property. No hidden fees.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative h-full flex flex-col p-10 lg:p-12 transition-all duration-700 hover-magnetic ${
                plan.featured
                  ? "bg-gradient-to-br from-primary/20 via-primary/10 to-transparent border-2 border-primary/40 shadow-gold"
                  : "glass border-gold-glow"
              }`}
            >
              {plan.featured && (
                <span className="absolute top-8 right-8 text-xs font-outfit tracking-[0.2em] uppercase text-primary border border-primary/40 px-3 py-1">
                  Popular
                </span>
              )}

              {/* Plan Name */}
              <h3 className="font-cormorant text-2xl lg:text-3xl font-semibold text-foreground mb-4">
                {plan.name}
              </h3>

              {/* Price */}
              <div className="flex items-end gap-2 mb-6">
                <span className="text-muted-foreground text-sm mb-2 uppercase tracking-widest">
                  {plan.priceLabel}
                </span>
                <span className="font-cormorant text-5xl font-bold text-foreground">
                  {plan.price}
                </span>
              </div>

              {/* Description */}
              <p className="text-muted-foreground mb-8 leading-relaxed">
                {plan.description}
              </p>

              {/* Features */}
              <div className="space-y-4 mb-10 flex-1">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <div className="w-6 h-6 shrink-0 border border-primary/40 flex items-center justify-center">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-foreground/80 text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <Button
                variant={plan.featured ? "luxury" : "luxury-outline"}
                size="sm"
                className="w-full"
                asChild
              >
                <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
                  <span className="uppercase tracking-widest text-sm">
                    {plan.cta}
                  </span>
                </a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

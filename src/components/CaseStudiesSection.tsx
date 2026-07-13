import { MapPin, Star, Clock, Shield, TrendingUp, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { caseStudies } from "@/data/caseStudies";

const stats = [
  { icon: Clock, value: "<5 min", label: "Avg response time" },
  { icon: Shield, value: "85%+", label: "Claims win rate" },
  { icon: Star, value: "+0.4★", label: "Average rating lift" },
  { icon: TrendingUp, value: "3.2x", label: "Avg ROI vs. old PM" },
];

export const CaseStudiesSection = () => {
  return (
    <section id="results" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-charcoal/50" />
      <div className="absolute inset-0 pattern-deco" />

      {/* Decorative Lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 space-y-6">
          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-px bg-primary" />
            <span className="text-primary text-sm font-outfit tracking-[0.3em] uppercase">
              Success Stories
            </span>
            <div className="w-12 h-px bg-primary" />
          </div>
          <h2 className="font-cormorant text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground">
            Case Studies{" "}
            <span className="italic text-gradient-gold">&amp; Host Wins</span>
          </h2>
        </div>

        {/* Stats Bar */}
        <div className="glass border-gold-glow mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-border/50">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center text-center gap-3 p-8"
              >
                <div className="w-10 h-10 bg-primary/10 border border-primary/20 flex items-center justify-center rounded-full">
                  <stat.icon className="w-5 h-5 text-primary" />
                </div>
                <span className="font-cormorant text-3xl font-bold text-foreground">
                  {stat.value}
                </span>
                <span className="text-xs text-muted-foreground uppercase tracking-wider">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Case Study Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study) => (
            <Link
              to={`/case-study/${study.slug}`}
              key={study.slug}
              className="group relative h-full flex flex-col glass border-gold-glow overflow-hidden transition-all duration-700 hover-magnetic hover:border-primary/50"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={study.image}
                  alt={study.location}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/30 to-transparent" />

                {/* Location */}
                <div className="absolute top-4 left-4 flex items-center gap-2 text-white">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium">{study.locationShort}</span>
                </div>

                {/* Rating / Status Badge */}
                <div className="absolute top-4 right-4 flex items-center gap-1.5 bg-primary/90 text-primary-foreground text-xs font-semibold px-3 py-1.5 rounded-full">
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <span>{study.badge}</span>
                </div>

                {/* Tag */}
                <span className="absolute bottom-4 left-4 bg-primary text-primary-foreground text-xs font-semibold uppercase tracking-wider px-3 py-1.5 rounded-full">
                  {study.tag}
                </span>
              </div>

              {/* Body */}
              <div className="flex-1 flex flex-col p-8">
                {/* Title */}
                <div className="flex items-center justify-between gap-4 mb-4 pb-4 border-b border-border/50">
                  <span className="font-cormorant text-2xl font-semibold text-foreground">
                    {study.cardTitle}
                  </span>
                  {study.cardRating && (
                    <span className="flex items-center gap-1.5 text-primary font-semibold text-sm whitespace-nowrap">
                      <Star className="w-4 h-4 fill-current" />
                      {study.cardRating}
                    </span>
                  )}
                </div>

                {/* Quote */}
                <p className="text-muted-foreground italic leading-relaxed mb-6">
                  “{study.cardQuote}”
                </p>

                {/* Metrics */}
                <div className="space-y-3 mb-6">
                  {study.cardMetrics.map((metric) => (
                    <div
                      key={metric.label}
                      className="flex items-center justify-between gap-4 text-sm"
                    >
                      <span className="text-muted-foreground">
                        {metric.label}
                      </span>
                      <span className="text-foreground font-semibold text-right">
                        {metric.value}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Read full case study */}
                <span className="mt-auto pt-4 border-t border-border/30 flex items-center justify-between gap-2 text-primary font-medium text-sm group/link">
                  <span>Read full case study</span>
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

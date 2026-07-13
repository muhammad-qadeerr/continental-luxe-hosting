import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  MapPin,
  Users,
  Shield,
  TrendingUp,
  Check,
  Quote,
} from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { BOOKING_URL } from "@/lib/booking";
import { getCaseStudy } from "@/data/caseStudies";

const CaseStudyDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const study = slug ? getCaseStudy(slug) : undefined;

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [slug]);

  if (!study) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="flex min-h-screen items-center justify-center">
          <div className="text-center space-y-4">
            <h1 className="font-cormorant text-4xl font-semibold text-foreground">
              Case study not found
            </h1>
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden pt-32 lg:pt-40 pb-16">
          <div className="absolute inset-0">
            <img
              src={study.image}
              alt={study.location}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/60" />
            <div className="absolute inset-0 bg-charcoal/40" />
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-10"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="text-sm">Back to Case Studies</span>
            </Link>

            {/* Badges */}
            <div className="flex flex-wrap items-center gap-3 mb-8">
              <span className="bg-primary text-primary-foreground text-xs font-semibold uppercase tracking-wider px-4 py-2 rounded-full">
                {study.tag}
              </span>
              <span className="flex items-center gap-2 glass border border-border/50 text-foreground text-sm px-4 py-2 rounded-full">
                <MapPin className="w-4 h-4 text-primary" />
                {study.locationShort}
              </span>
              <span className="flex items-center gap-2 glass border border-border/50 text-foreground text-sm px-4 py-2 rounded-full">
                <Users className="w-4 h-4 text-primary" />
                {study.propertiesLabel}
              </span>
            </div>

            <h1 className="font-cormorant text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground max-w-4xl leading-tight">
              {study.detailTitle}
            </h1>
            <p className="text-muted-foreground text-lg mt-6 max-w-2xl leading-relaxed">
              {study.detailSubtitle}
            </p>

            {/* Hero Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-12 max-w-4xl">
              {study.heroStats.map((stat) => (
                <div
                  key={stat.label}
                  className="glass border-gold-glow p-6 rounded-lg"
                >
                  <span className="block text-xs text-muted-foreground uppercase tracking-wider mb-2">
                    {stat.label}
                  </span>
                  <span className="font-cormorant text-2xl font-bold text-foreground">
                    {stat.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quote */}
        <section className="py-16 lg:py-20 relative">
          <div className="container mx-auto px-6">
            <div className="glass border-gold-glow max-w-3xl mx-auto p-10 lg:p-14 text-center rounded-lg">
              <Quote className="w-8 h-8 text-primary mx-auto mb-8" />
              <p className="font-cormorant text-2xl md:text-3xl font-semibold text-foreground leading-relaxed">
                {study.fullQuote}
              </p>
              <p className="text-muted-foreground text-sm mt-8">
                — {study.quoteAuthor}
              </p>
            </div>
          </div>
        </section>

        {/* Challenge & Approach */}
        <section className="py-8 lg:py-12">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="glass border-gold-glow p-10 rounded-lg space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 border border-primary/20 flex items-center justify-center rounded-full">
                    <Shield className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-cormorant text-2xl font-semibold text-foreground">
                    The Challenge
                  </h3>
                </div>
                {study.challenge.map((p, i) => (
                  <p key={i} className="text-muted-foreground leading-relaxed">
                    {p}
                  </p>
                ))}
              </div>

              <div className="glass border-gold-glow p-10 rounded-lg space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 border border-primary/20 flex items-center justify-center rounded-full">
                    <TrendingUp className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-cormorant text-2xl font-semibold text-foreground">
                    Our Approach
                  </h3>
                </div>
                {study.approach.map((p, i) => (
                  <p key={i} className="text-muted-foreground leading-relaxed">
                    {p}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* What We Built */}
        <section className="py-16 lg:py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="mb-12 space-y-4">
                <span className="inline-block text-primary text-xs font-outfit tracking-[0.3em] uppercase border border-primary/30 px-4 py-1.5 rounded-full">
                  What We Built
                </span>
                <h2 className="font-cormorant text-4xl md:text-5xl font-semibold text-foreground">
                  {study.builtHeading}
                </h2>
              </div>

              <div className="grid lg:grid-cols-3 gap-8">
                {/* Checklist */}
                <div className="lg:col-span-2 grid sm:grid-cols-2 gap-4 content-start">
                  {study.built.map((item) => (
                    <div
                      key={item}
                      className="glass border border-border/50 rounded-lg p-5 flex items-center gap-3"
                    >
                      <div className="w-6 h-6 shrink-0 bg-primary/10 border border-primary/30 flex items-center justify-center rounded-full">
                        <Check className="w-3.5 h-3.5 text-primary" />
                      </div>
                      <span className="text-foreground/90 text-sm">{item}</span>
                    </div>
                  ))}
                </div>

                {/* Widget */}
                <div className="glass border-gold-glow rounded-lg p-6 space-y-4 h-fit">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-foreground">
                      {study.widgetTitle}
                    </span>
                    <span className="flex items-center gap-1.5 text-xs text-primary">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                      Live
                    </span>
                  </div>

                  <div className="space-y-3">
                    {study.widgetItems.map((item) => (
                      <div
                        key={item.title}
                        className="flex items-center justify-between gap-3 bg-primary/5 border border-primary/20 rounded-lg p-4"
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-xl">{item.emoji}</span>
                          <div>
                            <span className="block text-sm font-semibold text-foreground">
                              {item.title}
                            </span>
                            <span className="block text-xs text-muted-foreground">
                              {item.subtitle}
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 text-primary font-semibold text-sm">
                          {item.value}
                          <Check className="w-4 h-4" />
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="bg-primary/10 border border-primary/30 rounded-lg p-4 text-center text-sm font-semibold text-foreground">
                    {study.widgetFooter}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Outcomes */}
        <section className="py-16 lg:py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="mb-12 space-y-4">
                <span className="inline-block text-primary text-xs font-outfit tracking-[0.3em] uppercase border border-primary/30 px-4 py-1.5 rounded-full">
                  Outcomes
                </span>
                <h2 className="font-cormorant text-4xl md:text-5xl font-semibold text-foreground">
                  Results
                </h2>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {study.outcomes.map((outcome) => (
                  <div
                    key={outcome.label}
                    className={`rounded-lg p-8 ${
                      outcome.highlight
                        ? "bg-gradient-to-br from-primary/20 via-primary/10 to-transparent border-2 border-primary/40"
                        : "glass border border-border/50"
                    }`}
                  >
                    <span className="block text-xs text-muted-foreground uppercase tracking-wider mb-3">
                      {outcome.label}
                    </span>
                    <span
                      className={`font-cormorant text-2xl font-bold ${
                        outcome.highlight
                          ? "text-gradient-gold"
                          : "text-foreground"
                      }`}
                    >
                      {outcome.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-6">
            <div className="glass border-gold-glow max-w-3xl mx-auto p-12 lg:p-16 text-center rounded-lg space-y-6">
              <span className="inline-block bg-primary text-primary-foreground text-xs font-semibold uppercase tracking-wider px-4 py-2 rounded-full">
                Get Started
              </span>
              <h2 className="font-cormorant text-4xl md:text-5xl font-semibold text-foreground">
                Want results like this?
              </h2>
              <p className="text-muted-foreground text-lg max-w-xl mx-auto">
                Book a free discovery call. We'll review your current operations
                and show you exactly how we'd run things.
              </p>
              <Button variant="luxury" size="lg" className="group" asChild>
                <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer">
                  <span className="uppercase tracking-widest text-sm">
                    Book a Discovery Call
                  </span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CaseStudyDetail;

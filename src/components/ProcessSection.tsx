import { ClipboardList, Handshake, Puzzle, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const steps = [
  {
    number: '01',
    icon: ClipboardList,
    title: 'Free Listing Review',
    description:
      'We analyze your current listing and identify immediate improvement opportunities—completely free, no commitment required.',
  },
  {
    number: '02',
    icon: Handshake,
    title: 'Strategy Session',
    description:
      'We discuss your goals, review our suggestions, and create a tailored management plan for your specific property.',
  },
  {
    number: '03',
    icon: Puzzle,
    title: 'Seamless Integration',
    description:
      'We implement optimizations and begin managing communications—you remain the primary account holder at all times.',
  },
  {
    number: '04',
    icon: TrendingUp,
    title: 'Ongoing Growth',
    description:
      'We continuously monitor, adjust strategies, and provide monthly reports on performance and revenue.',
  },
];

export const ProcessSection = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="approach" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px]" />
      </div>
      
      {/* Decorative Lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-20 space-y-6">
          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-px bg-primary" />
            <span className="text-primary text-sm font-outfit tracking-[0.3em] uppercase">
              Our Process
            </span>
            <div className="w-12 h-px bg-primary" />
          </div>
          <h2 className="font-cormorant text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground">
            Simple,{' '}
            <span className="italic text-gradient-gold">Transparent</span> Approach
          </h2>
          <p className="text-muted-foreground text-lg">
            Getting started takes less than 24 hours
          </p>
        </div>

        {/* Process Steps */}
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className="relative group"
              >
                <div className="relative glass border-gold-glow p-10 transition-all duration-700 hover-magnetic hover:border-primary/50">
                  {/* Large Number */}
                  <span className="absolute top-6 right-8 font-cormorant text-8xl font-bold text-primary/10 group-hover:text-primary/20 transition-colors duration-500 select-none">
                    {step.number}
                  </span>

                  {/* Icon */}
                  <div className="relative w-16 h-16 flex items-center justify-center bg-primary/5 border border-primary/30 mb-6 group-hover:bg-primary/10 transition-colors duration-300">
                    <step.icon className="w-8 h-8 text-primary" />
                    {/* Gold accent */}
                    <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-primary" />
                  </div>

                  {/* Content */}
                  <h3 className="font-cormorant text-2xl font-semibold text-foreground mb-4">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>

                  {/* Connecting Line (for first row) */}
                  {index === 0 && (
                    <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-px bg-gradient-to-r from-primary/50 to-transparent" />
                  )}
                  {index === 2 && (
                    <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-px bg-gradient-to-r from-primary/50 to-transparent" />
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Vertical connecting lines between rows */}
          <div className="hidden md:flex justify-center -my-4 relative z-10">
            <div className="flex gap-[calc(50%-2rem)]">
              <div className="w-px h-8 bg-gradient-to-b from-primary/50 to-transparent" />
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Button
            variant="luxury"
            size="lg"
            onClick={() => scrollToSection('#contact')}
          >
            <span className="uppercase tracking-widest text-sm">Start Your Free Review</span>
          </Button>
        </div>
      </div>
    </section>
  );
};

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
    title: 'Custom Strategy Session',
    description:
      'We discuss your goals, review our suggestions, and create a tailored management plan that works for your specific property and situation.',
  },
  {
    number: '03',
    icon: Puzzle,
    title: 'Seamless Integration',
    description:
      'We implement optimizations and begin managing guest communications—you remain the primary account holder with full access and control at all times.',
  },
  {
    number: '04',
    icon: TrendingUp,
    title: 'Ongoing Support & Growth',
    description:
      'We continuously monitor performance, adjust strategies based on results, and provide monthly reports on bookings, revenue, and guest satisfaction.',
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
    <section id="approach" className="py-24 lg:py-32 bg-navy-light relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d4af37' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20 space-y-4">
          <span className="inline-block text-primary text-sm font-semibold tracking-wider uppercase">
            Our Approach
          </span>
          <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Simple,{' '}
            <span className="text-gradient-gold">Transparent</span> Process
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Getting started takes less than 24 hours
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/50 to-transparent lg:-translate-x-px" />

          {/* Steps */}
          <div className="space-y-12 lg:space-y-16">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className={`relative flex items-start gap-8 lg:gap-16 ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Number Badge */}
                <div className="absolute left-0 lg:left-1/2 lg:-translate-x-1/2 z-10">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-gold-light flex items-center justify-center shadow-gold">
                    <span className="text-primary-foreground font-bold text-lg font-playfair">
                      {step.number}
                    </span>
                  </div>
                </div>

                {/* Content Card */}
                <div
                  className={`ml-24 lg:ml-0 lg:w-[calc(50%-4rem)] ${
                    index % 2 === 0 ? 'lg:pr-8' : 'lg:pl-8'
                  }`}
                >
                  <div className="bg-card rounded-2xl p-8 border border-border/50 hover:border-primary/30 transition-all duration-300 hover-lift group">
                    {/* Icon */}
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <step.icon className="w-6 h-6 text-primary" />
                    </div>

                    {/* Title */}
                    <h3 className="font-playfair text-xl lg:text-2xl font-bold text-foreground mb-3">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Empty space for alternating layout */}
                <div className="hidden lg:block lg:w-[calc(50%-4rem)]" />
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16 lg:mt-20">
          <Button
            variant="gold"
            size="lg"
            onClick={() => scrollToSection('#contact')}
          >
            Start Your Free Review
          </Button>
        </div>
      </div>
    </section>
  );
};

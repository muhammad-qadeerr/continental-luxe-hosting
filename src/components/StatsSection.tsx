import { Building, Star, Calendar, Clock } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const stats = [
  {
    icon: Building,
    number: 50,
    suffix: '+',
    label: 'Properties Managed',
    featured: false,
  },
  {
    icon: Star,
    number: 4.8,
    suffix: '★',
    label: 'Average Guest Rating',
    featured: true,
  },
  {
    icon: Calendar,
    number: 85,
    suffix: '%',
    label: 'Average Occupancy',
    featured: false,
  },
  {
    icon: Clock,
    number: 24,
    suffix: '/7',
    label: 'Guest Support',
    featured: false,
  },
];

const AnimatedNumber = ({ value, suffix, duration = 2000 }: { value: number; suffix: string; duration?: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const end = value;
    const increment = end / (duration / 16);
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Number(start.toFixed(1)));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isVisible, value, duration]);

  return (
    <span ref={ref}>
      {Number.isInteger(value) ? Math.floor(count) : count.toFixed(1)}{suffix}
    </span>
  );
};

export const StatsSection = () => {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pattern-lines" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-20 space-y-6">
          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-px bg-primary" />
            <span className="text-primary text-sm font-outfit tracking-[0.3em] uppercase">
              Our Impact
            </span>
            <div className="w-12 h-px bg-primary" />
          </div>
          <h2 className="font-cormorant text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground">
            Trusted Across{' '}
            <span className="italic text-gradient-gold">Pakistan</span>
          </h2>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`relative group ${stat.featured ? 'lg:-mt-4 lg:mb-4' : ''}`}
            >
              <div
                className={`relative h-full p-8 lg:p-10 transition-all duration-700 hover-magnetic ${
                  stat.featured
                    ? 'bg-gradient-to-br from-primary via-gold to-gold-light text-primary-foreground shadow-gold-intense'
                    : 'glass border-gold-glow hover:border-primary/50'
                }`}
              >
                {/* Icon */}
                <div
                  className={`w-14 h-14 flex items-center justify-center mb-6 ${
                    stat.featured
                      ? 'bg-primary-foreground/10'
                      : 'bg-primary/10 border border-primary/20'
                  }`}
                >
                  <stat.icon
                    className={`w-7 h-7 ${
                      stat.featured ? 'text-primary-foreground' : 'text-primary'
                    }`}
                  />
                </div>

                {/* Number */}
                <span
                  className={`block font-cormorant text-5xl lg:text-6xl font-bold mb-3 ${
                    stat.featured ? 'text-primary-foreground' : 'text-foreground'
                  }`}
                >
                  <AnimatedNumber value={stat.number} suffix={stat.suffix} />
                </span>

                {/* Label */}
                <span
                  className={`text-sm font-medium tracking-wide ${
                    stat.featured
                      ? 'text-primary-foreground/80'
                      : 'text-muted-foreground'
                  }`}
                >
                  {stat.label}
                </span>

                {/* Decorative Corner */}
                {!stat.featured && (
                  <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-primary/20 group-hover:border-primary/50 transition-colors duration-500" />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

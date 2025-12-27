import { Building, Star, Calendar, Clock } from 'lucide-react';

const stats = [
  {
    icon: Building,
    number: '50+',
    label: 'Properties Managed',
    featured: false,
  },
  {
    icon: Star,
    number: '4.8★',
    label: 'Average Guest Rating',
    featured: true,
  },
  {
    icon: Calendar,
    number: '85%',
    label: 'Average Occupancy Rate',
    featured: false,
  },
  {
    icon: Clock,
    number: '24/7',
    label: 'Guest Support',
    featured: false,
  },
];

export const StatsSection = () => {
  return (
    <section className="py-20 bg-navy-light relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(45deg, transparent 45%, hsl(var(--primary)) 45%, hsl(var(--primary)) 55%, transparent 55%)`,
            backgroundSize: '30px 30px',
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Trusted By Property Owners{' '}
            <span className="text-gradient-gold">Across Pakistan</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Real results from real partnerships
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`relative group rounded-2xl p-8 transition-all duration-500 hover-lift ${
                stat.featured
                  ? 'bg-gradient-to-br from-primary to-gold-light text-primary-foreground shadow-gold'
                  : 'bg-card border border-border/50 hover:border-primary/50'
              }`}
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
            >
              {/* Icon */}
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                  stat.featured
                    ? 'bg-primary-foreground/20'
                    : 'bg-primary/10'
                }`}
              >
                <stat.icon
                  className={`w-6 h-6 ${
                    stat.featured ? 'text-primary-foreground' : 'text-primary'
                  }`}
                />
              </div>

              {/* Number */}
              <span
                className={`block font-playfair text-4xl lg:text-5xl font-bold mb-2 ${
                  stat.featured ? 'text-primary-foreground' : 'text-foreground'
                }`}
              >
                {stat.number}
              </span>

              {/* Label */}
              <span
                className={`text-sm font-medium ${
                  stat.featured
                    ? 'text-primary-foreground/80'
                    : 'text-muted-foreground'
                }`}
              >
                {stat.label}
              </span>

              {/* Hover Glow Effect */}
              {!stat.featured && (
                <div className="absolute inset-0 rounded-2xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

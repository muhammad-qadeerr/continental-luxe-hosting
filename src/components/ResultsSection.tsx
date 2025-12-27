import { MapPin, TrendingUp, Star } from 'lucide-react';

const results = [
  {
    location: 'Islamabad',
    propertyType: '2BR Apartment',
    before: { rating: '3.8★', occupancy: '45%' },
    after: { rating: '4.9★', occupancy: '82%' },
    challenge: 'Low visibility, inconsistent bookings',
    solution: 'Optimized listing, dynamic pricing, improved guest communication',
    result: '+85% revenue increase in 6 months',
  },
  {
    location: 'Lahore',
    propertyType: '3BR House',
    before: { rating: '4.0★', occupancy: '52%' },
    after: { rating: '4.8★', occupancy: '78%' },
    challenge: 'Slow response times, pricing gaps',
    solution: '24/7 guest support, market-based pricing strategy',
    result: '+65% booking increase in 4 months',
  },
  {
    location: 'Karachi',
    propertyType: 'Studio Apartment',
    before: { rating: '4.2★', occupancy: '48%' },
    after: { rating: '4.9★', occupancy: '88%' },
    challenge: 'Poor listing photos, weak description',
    solution: 'Complete listing overhaul with professional imagery guidance',
    result: '+92% revenue increase in 5 months',
  },
];

export const ResultsSection = () => {
  return (
    <section id="results" className="py-24 lg:py-32 bg-navy-light relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, hsl(var(--primary)) 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20 space-y-4">
          <span className="inline-block text-primary text-sm font-semibold tracking-wider uppercase">
            Success Stories
          </span>
          <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Real Properties,{' '}
            <span className="text-gradient-gold">Real Results</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            See how we've helped hosts across Pakistan
          </p>
        </div>

        {/* Results Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {results.map((item, index) => (
            <div
              key={`${item.location}-${index}`}
              className="group bg-card rounded-2xl overflow-hidden border border-border/50 hover:border-primary/50 transition-all duration-500 hover-lift"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Header with Location */}
              <div className="bg-gradient-to-r from-navy to-navy-light p-6 relative">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-primary">
                    <MapPin className="w-4 h-4" />
                    <span className="font-medium">{item.location}</span>
                  </div>
                  <span className="text-sm text-muted-foreground">{item.propertyType}</span>
                </div>
                
                {/* Before/After Stats */}
                <div className="mt-6 flex items-center justify-between">
                  <div className="text-center">
                    <span className="block text-xs text-muted-foreground mb-1">Before</span>
                    <div className="flex items-center gap-3">
                      <span className="text-foreground/70 text-sm">{item.before.rating}</span>
                      <span className="text-foreground/70 text-sm">{item.before.occupancy}</span>
                    </div>
                  </div>
                  
                  <TrendingUp className="w-5 h-5 text-primary" />
                  
                  <div className="text-center">
                    <span className="block text-xs text-muted-foreground mb-1">After</span>
                    <div className="flex items-center gap-3">
                      <span className="text-primary font-bold">{item.after.rating}</span>
                      <span className="text-primary font-bold">{item.after.occupancy}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div>
                  <span className="text-xs text-muted-foreground uppercase tracking-wider">Challenge</span>
                  <p className="text-foreground text-sm mt-1">{item.challenge}</p>
                </div>
                
                <div>
                  <span className="text-xs text-muted-foreground uppercase tracking-wider">Solution</span>
                  <p className="text-foreground text-sm mt-1">{item.solution}</p>
                </div>

                {/* Result Highlight */}
                <div className="pt-4 border-t border-border/50">
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-primary fill-primary" />
                    <span className="text-primary font-semibold">{item.result}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Privacy Note */}
        <p className="text-center text-muted-foreground text-sm mt-12">
          * Property details anonymized to protect host privacy
        </p>
      </div>
    </section>
  );
};

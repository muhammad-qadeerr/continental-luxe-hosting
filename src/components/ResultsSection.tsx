import { MapPin, TrendingUp, Star } from 'lucide-react';

const results = [
  {
    location: 'Islamabad',
    propertyType: '2BR Apartment',
    before: { rating: '3.8★', occupancy: '45%' },
    after: { rating: '4.9★', occupancy: '82%' },
    challenge: 'Low visibility, inconsistent bookings',
    result: '+85% revenue increase',
    duration: '6 months',
  },
  {
    location: 'Lahore',
    propertyType: '3BR House',
    before: { rating: '4.0★', occupancy: '52%' },
    after: { rating: '4.8★', occupancy: '78%' },
    challenge: 'Slow response times, pricing gaps',
    result: '+65% booking increase',
    duration: '4 months',
  },
  {
    location: 'Karachi',
    propertyType: 'Studio Apartment',
    before: { rating: '4.2★', occupancy: '48%' },
    after: { rating: '4.9★', occupancy: '88%' },
    challenge: 'Poor listing photos, weak description',
    result: '+92% revenue increase',
    duration: '5 months',
  },
];

export const ResultsSection = () => {
  return (
    <section id="results" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-charcoal/50" />
      <div className="absolute inset-0 pattern-deco" />
      
      {/* Lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-20 space-y-6">
          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-px bg-primary" />
            <span className="text-primary text-sm font-outfit tracking-[0.3em] uppercase">
              Success Stories
            </span>
            <div className="w-12 h-px bg-primary" />
          </div>
          <h2 className="font-cormorant text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground">
            Real Properties,{' '}
            <span className="italic text-gradient-gold">Real Results</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Transformations from across Pakistan
          </p>
        </div>

        {/* Results Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {results.map((item, index) => (
            <div
              key={`${item.location}-${index}`}
              className="group relative"
            >
              <div className="relative h-full glass border-gold-glow transition-all duration-700 hover-magnetic hover:border-primary/50 overflow-hidden">
                {/* Top Section */}
                <div className="p-8 pb-6 border-b border-border/50">
                  {/* Location & Type */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-2 text-primary">
                      <MapPin className="w-4 h-4" />
                      <span className="font-medium text-sm">{item.location}</span>
                    </div>
                    <span className="text-xs text-muted-foreground uppercase tracking-wider">{item.propertyType}</span>
                  </div>
                  
                  {/* Before/After Stats */}
                  <div className="flex items-center gap-6">
                    <div className="flex-1">
                      <span className="block text-xs text-muted-foreground mb-2 uppercase tracking-wider">Before</span>
                      <div className="flex items-center gap-3 text-foreground/60">
                        <span className="text-lg">{item.before.rating}</span>
                        <span className="w-px h-4 bg-border" />
                        <span className="text-lg">{item.before.occupancy}</span>
                      </div>
                    </div>
                    
                    <TrendingUp className="w-6 h-6 text-primary flex-shrink-0" />
                    
                    <div className="flex-1 text-right">
                      <span className="block text-xs text-muted-foreground mb-2 uppercase tracking-wider">After</span>
                      <div className="flex items-center justify-end gap-3 text-primary font-semibold">
                        <span className="text-lg">{item.after.rating}</span>
                        <span className="w-px h-4 bg-primary/30" />
                        <span className="text-lg">{item.after.occupancy}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Section */}
                <div className="p-8 pt-6 space-y-4">
                  <div>
                    <span className="text-xs text-muted-foreground uppercase tracking-wider">Challenge</span>
                    <p className="text-foreground mt-1">{item.challenge}</p>
                  </div>

                  {/* Result Highlight */}
                  <div className="pt-4 border-t border-border/30 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Star className="w-5 h-5 text-primary fill-primary" />
                      <span className="text-primary font-semibold">{item.result}</span>
                    </div>
                    <span className="text-xs text-muted-foreground">{item.duration}</span>
                  </div>
                </div>

                {/* Decorative Corner */}
                <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-primary/20 group-hover:border-primary/50 transition-colors duration-500" />
              </div>
            </div>
          ))}
        </div>

        {/* Privacy Note */}
        <p className="text-center text-muted-foreground text-sm mt-12 italic">
          * Property details anonymized to protect host privacy
        </p>
      </div>
    </section>
  );
};

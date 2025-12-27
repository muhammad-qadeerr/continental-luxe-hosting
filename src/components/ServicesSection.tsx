import { Search, MessageCircle, Settings, Star, MapPin, Shield } from 'lucide-react';

const mainServices = [
  {
    icon: MessageCircle,
    number: '01',
    title: 'Guest Communication',
    description:
      'Round-the-clock guest support with fast response times and professional service that consistently drives 5-star reviews.',
    includes: [
      '24/7 inquiry responses',
      'Booking management',
      'Pre-arrival coordination',
      'Post-stay follow-up',
    ],
    featured: false,
  },
  {
    icon: Search,
    number: '02',
    title: 'Listing Optimization',
    description:
      'We craft compelling titles, SEO-optimized descriptions, and provide professional photography guidance to make your property irresistible.',
    includes: [
      'SEO-optimized titles',
      'Compelling descriptions',
      'Photography direction',
      'Competitive analysis',
    ],
    featured: true,
  },
  {
    icon: Settings,
    number: '03',
    title: 'Smart Operations',
    description:
      'Dynamic pricing, cleaning coordination, and maintenance scheduling—we handle day-to-day operations seamlessly.',
    includes: [
      'Dynamic pricing',
      'Cleaning coordination',
      'Maintenance scheduling',
      'Performance reporting',
    ],
    featured: false,
  },
];

const additionalServices = [
  {
    icon: Star,
    title: 'Review Management',
    description: 'Strategic approach to 5-star reviews',
  },
  {
    icon: MapPin,
    title: 'Local Insights',
    description: 'Pakistan-specific market strategies',
  },
  {
    icon: Shield,
    title: 'Full Control',
    description: 'You retain complete account access',
  },
];

export const ServicesSection = () => {
  return (
    <section id="services" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-charcoal/50" />
      <div className="absolute inset-0 pattern-deco" />
      
      {/* Gradient Orbs */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px]" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-20 space-y-6">
          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-px bg-primary" />
            <span className="text-primary text-sm font-outfit tracking-[0.3em] uppercase">
              Our Services
            </span>
            <div className="w-12 h-px bg-primary" />
          </div>
          <h2 className="font-cormorant text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground">
            How We Elevate{' '}
            <span className="italic text-gradient-gold">Your Property</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive management that maximizes returns without compromising your control
          </p>
        </div>

        {/* Main Services Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {mainServices.map((service, index) => (
            <div
              key={service.title}
              className={`relative group ${service.featured ? 'lg:-mt-6 lg:mb-6' : ''}`}
            >
              <div
                className={`relative h-full p-10 lg:p-12 transition-all duration-700 hover-magnetic ${
                  service.featured
                    ? 'bg-gradient-to-br from-primary/20 via-primary/10 to-transparent border-2 border-primary/40 shadow-gold'
                    : 'glass border-gold-glow'
                }`}
              >
                {/* Number */}
                <span className="absolute top-8 right-8 font-cormorant text-6xl font-bold text-primary/20 group-hover:text-primary/30 transition-colors duration-500">
                  {service.number}
                </span>

                {/* Icon */}
                <div className={`w-16 h-16 flex items-center justify-center mb-8 border ${
                  service.featured ? 'border-primary bg-primary/10' : 'border-primary/30 bg-primary/5'
                }`}>
                  <service.icon className="w-8 h-8 text-primary" />
                </div>

                {/* Title */}
                <h3 className="font-cormorant text-2xl lg:text-3xl font-semibold text-foreground mb-4">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  {service.description}
                </p>

                {/* Includes List */}
                <div className="space-y-3">
                  {service.includes.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 text-sm"
                    >
                      <div className="w-1.5 h-1.5 bg-primary" />
                      <span className="text-foreground/80">{item}</span>
                    </div>
                  ))}
                </div>

                {/* Featured Badge */}
                {service.featured && (
                  <div className="absolute -top-4 left-8 bg-primary text-primary-foreground text-xs font-semibold px-4 py-2 uppercase tracking-widest">
                    Most Popular
                  </div>
                )}

                {/* Corner Decoration */}
                <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-primary/30 group-hover:border-primary transition-colors duration-500" />
              </div>
            </div>
          ))}
        </div>

        {/* Additional Services */}
        <div className="grid md:grid-cols-3 gap-6">
          {additionalServices.map((service) => (
            <div
              key={service.title}
              className="group flex items-center gap-6 p-6 glass border-gold-glow hover:border-primary/50 transition-all duration-500"
            >
              <div className="w-14 h-14 flex items-center justify-center bg-primary/5 border border-primary/20 group-hover:bg-primary/10 transition-colors duration-300">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              <div>
                <h4 className="font-cormorant text-xl font-semibold text-foreground mb-1">
                  {service.title}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

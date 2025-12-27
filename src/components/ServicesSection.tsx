import { Search, MessageCircle, Settings, Star, MapPin, Shield } from 'lucide-react';

const mainServices = [
  {
    icon: Search,
    title: 'Listing Optimization',
    description:
      'We optimize your Airbnb profile from top to bottom—crafting compelling titles, writing descriptions that convert, and providing professional photo guidance to make your property stand out in search results.',
    includes: [
      'SEO-optimized titles',
      'Compelling property descriptions',
      'Photography direction & editing',
      'Amenity highlighting',
      'Competitive analysis',
    ],
    featured: false,
  },
  {
    icon: MessageCircle,
    title: 'Guest Communication',
    description:
      'We handle all guest inquiries, booking questions, and check-in coordination—ensuring fast response times and professional service that leads to 5-star reviews.',
    includes: [
      '24/7 inquiry responses',
      'Booking management',
      'Pre-arrival instructions',
      'During-stay support',
      'Post-stay follow-up',
    ],
    featured: true,
  },
  {
    icon: Settings,
    title: 'Smart Operations',
    description:
      'From dynamic pricing based on local demand to coordinating cleaning and maintenance—we handle the day-to-day operations so you can focus on growing your portfolio.',
    includes: [
      'Dynamic pricing strategies',
      'Cleaning coordination',
      'Check-in/check-out management',
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
    description: 'Help getting 5-star reviews',
  },
  {
    icon: MapPin,
    title: 'Local Market Insights',
    description: 'Pakistan-specific strategies',
  },
  {
    icon: Shield,
    title: 'Account Security',
    description: 'You keep full control & access',
  },
];

export const ServicesSection = () => {
  return (
    <section id="services" className="py-24 lg:py-32 bg-background relative">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20 space-y-4">
          <span className="inline-block text-primary text-sm font-semibold tracking-wider uppercase">
            What We Do
          </span>
          <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            How We Help You{' '}
            <span className="text-gradient-gold">Succeed</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive Airbnb management without losing control
          </p>
        </div>

        {/* Main Services Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {mainServices.map((service, index) => (
            <div
              key={service.title}
              className={`relative rounded-2xl p-8 lg:p-10 transition-all duration-500 hover-lift group ${
                service.featured
                  ? 'bg-gradient-to-br from-primary to-gold-light text-primary-foreground shadow-gold-lg'
                  : 'bg-card border border-border/50 hover:border-primary/50'
              }`}
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
            >
              {/* Icon */}
              <div
                className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${
                  service.featured
                    ? 'bg-primary-foreground/20'
                    : 'bg-primary/10'
                }`}
              >
                <service.icon
                  className={`w-7 h-7 ${
                    service.featured ? 'text-primary-foreground' : 'text-primary'
                  }`}
                />
              </div>

              {/* Title */}
              <h3
                className={`font-playfair text-2xl font-bold mb-4 ${
                  service.featured ? 'text-primary-foreground' : 'text-foreground'
                }`}
              >
                {service.title}
              </h3>

              {/* Description */}
              <p
                className={`mb-6 leading-relaxed ${
                  service.featured
                    ? 'text-primary-foreground/90'
                    : 'text-muted-foreground'
                }`}
              >
                {service.description}
              </p>

              {/* Includes List */}
              <div className="space-y-3">
                <span
                  className={`text-sm font-semibold ${
                    service.featured
                      ? 'text-primary-foreground'
                      : 'text-foreground'
                  }`}
                >
                  What's Included:
                </span>
                <ul className="space-y-2">
                  {service.includes.map((item) => (
                    <li
                      key={item}
                      className={`flex items-center gap-3 text-sm ${
                        service.featured
                          ? 'text-primary-foreground/80'
                          : 'text-muted-foreground'
                      }`}
                    >
                      <div
                        className={`w-1.5 h-1.5 rounded-full ${
                          service.featured ? 'bg-primary-foreground' : 'bg-primary'
                        }`}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Featured Badge */}
              {service.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-background text-primary text-xs font-bold px-4 py-1 rounded-full border border-primary">
                  Most Popular
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Additional Services */}
        <div className="grid md:grid-cols-3 gap-6">
          {additionalServices.map((service, index) => (
            <div
              key={service.title}
              className="flex items-center gap-4 p-6 rounded-xl bg-card/50 border border-border/30 hover:border-primary/30 transition-all duration-300 group"
              style={{
                animationDelay: `${0.3 + index * 0.1}s`,
              }}
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">
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

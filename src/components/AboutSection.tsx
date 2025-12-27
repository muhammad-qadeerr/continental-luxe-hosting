import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import founderImg from "@/assets/saad.png";
import coFounderImg from "@/assets/qadeer.jpeg";

const teamMembers = [
  {
    name: "Saad",
    role: "Founder & CEO",
    image: founderImg,
    bio: "Started Continental Luxe Hosting after seeing too many great properties struggle with visibility—not because hosts weren't capable, but because Airbnb success requires constant attention most people don't have time for.",
  },
  {
    name: "M. Qadeer",
    role: "Co-Founder & CTO",
    image: coFounderImg,
    bio: "With years of experience in the global short-term rental market, ensuring seamless technical operations and exceptional guest experiences across all properties we manage.",
  },
];

export const AboutSection = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="about" className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-charcoal/30" />
      <div className="absolute inset-0 pattern-lines" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 space-y-6">
          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-px bg-primary" />
            <span className="text-primary text-sm font-outfit tracking-[0.3em] uppercase">
              Meet The Team
            </span>
            <div className="w-12 h-px bg-primary" />
          </div>
          <h2 className="font-cormorant text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground">
            The People Behind{" "}
            <span className="italic text-gradient-gold">Continental Luxe</span>
          </h2>
        </div>

        {/* Team Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group relative aspect-[3/4] overflow-hidden glass border-gold-glow transition-all duration-500 hover:border-primary/50 hover-magnetic rounded-lg"
            >
              {/* Photo */}
              <div className="absolute inset-0">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Gradient Overlay - hidden by default, visible on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Content Overlay - shown on hover */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10">
                <div className="space-y-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div>
                    <h3 className="font-cormorant text-2xl font-semibold text-foreground mb-1">
                      {member.name}
                    </h3>
                    <p className="text-primary text-sm uppercase tracking-wider mb-3">
                      {member.role}
                    </p>
                    <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                      {member.bio}
                    </p>
                  </div>

                  <Button
                    variant="luxury"
                    size="default"
                    className="w-full"
                    onClick={() => scrollToSection("#contact")}
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    <span className="uppercase tracking-widest text-xs">
                      Get in Touch
                    </span>
                  </Button>
                </div>
              </div>

              {/* Default State - Name and Role (shown when not hovering) */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-background/90 to-transparent group-hover:opacity-0 transition-opacity duration-500">
                <h3 className="font-cormorant text-2xl font-semibold text-foreground mb-1">
                  {member.name}
                </h3>
                <p className="text-primary text-sm uppercase tracking-wider">
                  {member.role}
                </p>
              </div>

              {/* Decorative Corner */}
              <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-primary/20 group-hover:border-primary/50 transition-colors duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

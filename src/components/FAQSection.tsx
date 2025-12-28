import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const faqs = [
  {
    question: "Do I lose control of my Airbnb account?",
    answer:
      "No. You remain the primary account holder with full access. We work as a support layer—managing communications and operations on your behalf, but you always have complete visibility and control.",
  },
  {
    question: "How do you charge for your services?",
    answer:
      "We can work on two models, whichever suits you better: 1. Revenue-based model – We take an agreed percentage from the monthly Airbnb earnings. 2. Flat fee model – PKR 20,000 per month covering complete management end-to-end. Both options include full listing management, guest communication, pricing coordination, and operational support. You can choose the model you're more comfortable with and we'll proceed accordingly.",
  },
  {
    question: "What if I'm not happy with the results?",
    answer:
      "We believe in earning your business monthly. No long-term contracts—if our partnership isn't working, you can step back at any time.",
  },
  {
    question: "Do you work with properties outside major cities?",
    answer:
      "Yes! We manage properties globally—from major cities to smaller towns and tourist destinations. Local market knowledge is one of our core strengths.",
  },
  {
    question: "How quickly will I see improvements?",
    answer:
      "Most hosts see noticeable improvements within 30-45 days—better search visibility, increased inquiries, and higher booking rates. Long-term growth continues as we optimize based on performance data.",
  },
  {
    question: "Can I still manage some aspects myself?",
    answer:
      "Absolutely. We're flexible and can adjust our involvement based on what you prefer to handle versus what you'd like us to manage.",
  },
];

export const FAQSection = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px]" />
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left - FAQs */}
          <div className="space-y-10">
            {/* Header */}
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-px bg-primary" />
                <span className="text-primary text-sm font-outfit tracking-[0.3em] uppercase">
                  FAQs
                </span>
              </div>
              <h2 className="font-cormorant text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground">
                Common{" "}
                <span className="italic text-gradient-gold">Questions</span>
              </h2>
            </div>

            {/* Accordion */}
            <Accordion
              type="single"
              collapsible
              defaultValue="item-0"
              className="space-y-4"
            >
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="glass border-gold-glow px-6 overflow-hidden data-[state=open]:border-primary/40 transition-colors duration-300"
                >
                  <AccordionTrigger className="text-left text-foreground hover:text-primary hover:no-underline py-6 font-cormorant text-lg font-semibold">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Right - CTA Card */}
          <div className="lg:sticky lg:top-32 h-fit">
            <div className="relative">
              {/* Decorative Frame */}
              <div className="absolute -inset-3 border border-primary/10" />

              <div className="relative glass border-gold-glow p-10 lg:p-12 space-y-8">
                {/* Icon */}
                <div className="w-16 h-16 bg-primary flex items-center justify-center">
                  <MessageCircle className="w-8 h-8 text-primary-foreground" />
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="font-cormorant text-3xl font-semibold text-foreground">
                    Still have questions?
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We're happy to discuss your specific situation and answer
                    any questions about our services.
                  </p>
                </div>

                {/* CTAs */}
                <div className="space-y-4">
                  {/* <Button
                    variant="luxury"
                    size="lg"
                    className="w-full"
                    onClick={() => scrollToSection('#contact')}
                  >
                    <span className="uppercase tracking-widest text-sm">Schedule a Call</span>
                  </Button> */}
                  <Button
                    variant="luxury-outline"
                    size="lg"
                    className="w-full"
                    asChild
                  >
                    <a
                      href="https://wa.me/923035776759"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="uppercase tracking-widest text-sm">
                        WhatsApp Chat
                      </span>
                    </a>
                  </Button>
                </div>

                {/* Available Hours */}
                <div className="pt-6 border-t border-border/50 text-center">
                  <span className="text-sm text-muted-foreground">
                    Monday - Saturday, 9 AM - 11 PM
                  </span>
                </div>

                {/* Corner Decoration */}
                <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-primary/30" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';

const faqs = [
  {
    question: 'Do I lose control of my Airbnb account?',
    answer:
      'No. You remain the primary account holder with full access. We work as a support layer—managing communications and operations on your behalf, but you always have complete visibility and control.',
  },
  {
    question: 'How do you charge for your services?',
    answer:
      "We work on a performance-based model—typically a percentage of your monthly bookings. We'll discuss the exact structure during our strategy session based on your property and goals.",
  },
  {
    question: "What if I'm not happy with the results?",
    answer:
      "We believe in earning your business monthly. No long-term contracts—if our partnership isn't working, you can step back at any time.",
  },
  {
    question: 'Do you work with properties outside major cities?',
    answer:
      "Yes! We manage properties across Pakistan—from Islamabad and Lahore to smaller cities and tourist destinations. Local knowledge is one of our strengths.",
  },
  {
    question: 'How quickly will I see improvements?',
    answer:
      'Most hosts see noticeable improvements within 30-45 days—better search visibility, increased inquiries, and higher booking rates. Long-term growth continues as we optimize based on performance data.',
  },
  {
    question: 'What if I already have bookings scheduled?',
    answer:
      'No problem. We seamlessly integrate with your existing calendar and handle upcoming reservations without disruption.',
  },
  {
    question: 'Can I still manage some aspects myself?',
    answer:
      "Absolutely. We're flexible and can adjust our involvement based on what you prefer to handle versus what you'd like us to manage.",
  },
];

export const FAQSection = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 lg:py-32 bg-background relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left - FAQs */}
          <div className="space-y-8">
            {/* Header */}
            <div className="space-y-4">
              <span className="inline-block text-primary text-sm font-semibold tracking-wider uppercase">
                FAQs
              </span>
              <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
                Frequently Asked{' '}
                <span className="text-gradient-gold">Questions</span>
              </h2>
            </div>

            {/* Accordion */}
            <Accordion type="single" collapsible defaultValue="item-0" className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-card rounded-xl border border-border/50 px-6 overflow-hidden data-[state=open]:border-primary/30"
                >
                  <AccordionTrigger className="text-left text-foreground hover:text-primary hover:no-underline py-5 font-semibold">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Right - CTA Card */}
          <div className="lg:sticky lg:top-32 h-fit">
            <div className="bg-gradient-to-br from-card to-navy-light rounded-2xl p-10 border border-border/50 space-y-8">
              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-gold-light flex items-center justify-center shadow-gold">
                <span className="text-primary-foreground text-3xl">?</span>
              </div>

              {/* Content */}
              <div className="space-y-4">
                <h3 className="font-playfair text-2xl font-bold text-foreground">
                  Still have questions?
                </h3>
                <p className="text-muted-foreground">
                  We're happy to discuss your specific situation and answer any questions you might have about our services.
                </p>
              </div>

              {/* CTAs */}
              <div className="space-y-4">
                <Button
                  variant="gold"
                  size="lg"
                  className="w-full"
                  onClick={() => scrollToSection('#contact')}
                >
                  Schedule a Call
                </Button>
                <Button
                  variant="gold-outline"
                  size="lg"
                  className="w-full"
                  asChild
                >
                  <a
                    href="https://wa.me/923001234567"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Chat on WhatsApp
                  </a>
                </Button>
              </div>

              {/* Available Hours */}
              <div className="pt-6 border-t border-border/50">
                <span className="text-sm text-muted-foreground">
                  Available: Monday - Saturday, 9 AM - 8 PM PKT
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Mail, Phone, MessageCircle, Clock, ArrowRight, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const locations = [
  { value: 'islamabad', label: 'Islamabad' },
  { value: 'lahore', label: 'Lahore' },
  { value: 'karachi', label: 'Karachi' },
  { value: 'other', label: 'Other City' },
];

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    location: '',
    listingUrl: '',
    challenge: '',
    contactMethod: 'whatsapp',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
    toast({
      title: 'Request Submitted!',
      description: "We'll review your listing and get back to you within 24 hours.",
    });
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  if (isSubmitted) {
    return (
      <section id="contact" className="py-24 lg:py-32 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl mx-auto text-center space-y-8">
            <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-primary to-gold-light flex items-center justify-center shadow-gold-lg animate-scale-in">
              <CheckCircle className="w-10 h-10 text-primary-foreground" />
            </div>
            <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Thank You!
            </h2>
            <p className="text-muted-foreground text-lg">
              We've received your request and will review your listing within 24 hours. 
              Check your email for a confirmation and next steps.
            </p>
            <Button
              variant="gold-outline"
              size="lg"
              onClick={() => setIsSubmitted(false)}
            >
              Submit Another Request
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-24 lg:py-32 bg-gradient-hero relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 space-y-4 max-w-3xl mx-auto">
          <span className="inline-block text-primary text-sm font-semibold tracking-wider uppercase">
            Ready To Improve Your Airbnb Performance?
          </span>
          <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Let's Start With A{' '}
            <span className="text-gradient-gold">Free Listing Review</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            No pressure, no commitment. We'll analyze your listing and share specific 
            improvements you can implement right away—whether you work with us or not.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="bg-card rounded-2xl p-8 lg:p-10 border border-border/50 space-y-6">
              {/* Name */}
              <div className="space-y-2">
                <Label htmlFor="name" className="text-foreground">
                  Full Name <span className="text-primary">*</span>
                </Label>
                <Input
                  id="name"
                  placeholder="Your full name"
                  value={formData.name}
                  onChange={(e) => handleChange('name', e.target.value)}
                  required
                  className="bg-background border-border focus:border-primary"
                />
              </div>

              {/* Phone & Email Row */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-foreground">
                    Phone Number <span className="text-primary">*</span>
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+92 300 1234567"
                    value={formData.phone}
                    onChange={(e) => handleChange('phone', e.target.value)}
                    required
                    className="bg-background border-border focus:border-primary"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-foreground">
                    Email Address <span className="text-primary">*</span>
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    required
                    className="bg-background border-border focus:border-primary"
                  />
                </div>
              </div>

              {/* Location */}
              <div className="space-y-2">
                <Label htmlFor="location" className="text-foreground">
                  Property Location <span className="text-primary">*</span>
                </Label>
                <Select
                  value={formData.location}
                  onValueChange={(value) => handleChange('location', value)}
                  required
                >
                  <SelectTrigger className="bg-background border-border focus:border-primary">
                    <SelectValue placeholder="Select your city" />
                  </SelectTrigger>
                  <SelectContent className="bg-card border-border">
                    {locations.map((loc) => (
                      <SelectItem key={loc.value} value={loc.value}>
                        {loc.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Listing URL */}
              <div className="space-y-2">
                <Label htmlFor="listingUrl" className="text-foreground">
                  Current Airbnb Listing URL <span className="text-muted-foreground">(Optional)</span>
                </Label>
                <Input
                  id="listingUrl"
                  type="url"
                  placeholder="https://airbnb.com/rooms/..."
                  value={formData.listingUrl}
                  onChange={(e) => handleChange('listingUrl', e.target.value)}
                  className="bg-background border-border focus:border-primary"
                />
              </div>

              {/* Challenge */}
              <div className="space-y-2">
                <Label htmlFor="challenge" className="text-foreground">
                  What's Your Biggest Challenge? <span className="text-primary">*</span>
                </Label>
                <Textarea
                  id="challenge"
                  placeholder="e.g., Low visibility, few bookings, managing guest communication, etc."
                  value={formData.challenge}
                  onChange={(e) => handleChange('challenge', e.target.value)}
                  required
                  rows={4}
                  className="bg-background border-border focus:border-primary resize-none"
                />
              </div>

              {/* Contact Method */}
              <div className="space-y-3">
                <Label className="text-foreground">
                  Preferred Contact Method <span className="text-primary">*</span>
                </Label>
                <RadioGroup
                  value={formData.contactMethod}
                  onValueChange={(value) => handleChange('contactMethod', value)}
                  className="flex flex-wrap gap-6"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="whatsapp" id="whatsapp" className="border-primary text-primary" />
                    <Label htmlFor="whatsapp" className="text-foreground cursor-pointer">
                      WhatsApp
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="phone" id="phone-call" className="border-primary text-primary" />
                    <Label htmlFor="phone-call" className="text-foreground cursor-pointer">
                      Phone Call
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="email" id="email-contact" className="border-primary text-primary" />
                    <Label htmlFor="email-contact" className="text-foreground cursor-pointer">
                      Email
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                variant="gold"
                size="xl"
                className="w-full group"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  'Submitting...'
                ) : (
                  <>
                    Get My Free Review
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </Button>

              {/* Privacy Note */}
              <p className="text-center text-muted-foreground text-sm">
                We respect your privacy. Your information will never be shared.
              </p>
            </div>
          </form>

          {/* Contact Info */}
          <div className="space-y-8">
            {/* Contact Card */}
            <div className="bg-card rounded-2xl p-8 lg:p-10 border border-border/50 space-y-8">
              <div className="space-y-2">
                <h3 className="font-playfair text-2xl font-bold text-foreground">
                  Get In Touch
                </h3>
                <p className="text-muted-foreground">
                  Prefer to reach out directly? We're here to help.
                </p>
              </div>

              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <span className="block text-sm text-muted-foreground mb-1">Email</span>
                    <a
                      href="mailto:qadeer@continentalluxehosting.com"
                      className="text-foreground hover:text-primary transition-colors"
                    >
                      qadeer@continentalluxehosting.com
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <span className="block text-sm text-muted-foreground mb-1">Phone</span>
                    <a
                      href="tel:+923001234567"
                      className="text-foreground hover:text-primary transition-colors"
                    >
                      +92 300 123 4567
                    </a>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <span className="block text-sm text-muted-foreground mb-1">WhatsApp</span>
                    <Button
                      variant="gold-outline"
                      size="sm"
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
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <span className="block text-sm text-muted-foreground mb-1">Available Hours</span>
                    <span className="text-foreground">Monday - Saturday: 9 AM - 8 PM</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Response Time Card */}
            <div className="bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl p-8 border border-primary/20">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-primary text-xl">⚡</span>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Quick Response</h4>
                  <p className="text-muted-foreground text-sm">
                    We typically respond within 2-4 hours during business hours. 
                    Your free listing review will be delivered within 24 hours.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

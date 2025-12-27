import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Mail, Phone, MessageCircle, Clock, ArrowRight, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const locations = [
  { value: 'north-america', label: 'North America' },
  { value: 'europe', label: 'Europe' },
  { value: 'asia', label: 'Asia' },
  { value: 'other', label: 'Other Region' },
];

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '', phone: '', email: '', location: '', listingUrl: '', challenge: '', contactMethod: 'whatsapp',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
    toast({ title: 'Request Submitted!', description: "We'll review your listing within 24 hours." });
  };

  const handleChange = (field: string, value: string) => setFormData((prev) => ({ ...prev, [field]: value }));

  if (isSubmitted) {
    return (
      <section id="contact" className="py-24 lg:py-32 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-2xl mx-auto text-center space-y-8">
            <div className="w-20 h-20 mx-auto bg-primary flex items-center justify-center animate-scale-in">
              <CheckCircle className="w-10 h-10 text-primary-foreground" />
            </div>
            <h2 className="font-cormorant text-4xl md:text-5xl font-semibold text-foreground">Thank You!</h2>
            <p className="text-muted-foreground text-lg">We'll review your listing within 24 hours.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-charcoal/30" />
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 space-y-6 max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-px bg-primary" />
            <span className="text-primary text-sm font-outfit tracking-[0.3em] uppercase">Get Started</span>
            <div className="w-12 h-px bg-primary" />
          </div>
          <h2 className="font-cormorant text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground">
            Free <span className="italic text-gradient-gold">Listing Review</span>
          </h2>
          <p className="text-muted-foreground text-lg">No commitment—we'll share improvements you can implement right away.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <form onSubmit={handleSubmit} className="glass border-gold-glow p-10 space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label className="text-foreground">Full Name <span className="text-primary">*</span></Label>
                <Input placeholder="Your name" value={formData.name} onChange={(e) => handleChange('name', e.target.value)} required className="bg-background/50 border-border focus:border-primary" />
              </div>
              <div className="space-y-2">
                <Label className="text-foreground">Phone <span className="text-primary">*</span></Label>
                <Input type="tel" placeholder="+1 234 567 8900" value={formData.phone} onChange={(e) => handleChange('phone', e.target.value)} required className="bg-background/50 border-border focus:border-primary" />
              </div>
            </div>
            <div className="space-y-2">
              <Label className="text-foreground">Email <span className="text-primary">*</span></Label>
              <Input type="email" placeholder="you@example.com" value={formData.email} onChange={(e) => handleChange('email', e.target.value)} required className="bg-background/50 border-border focus:border-primary" />
            </div>
              <div className="space-y-2">
                <Label className="text-foreground">Region <span className="text-primary">*</span></Label>
                <Select value={formData.location} onValueChange={(v) => handleChange('location', v)}>
                  <SelectTrigger className="bg-background/50 border-border"><SelectValue placeholder="Select region" /></SelectTrigger>
                  <SelectContent className="bg-card border-border">{locations.map((l) => <SelectItem key={l.value} value={l.value}>{l.label}</SelectItem>)}</SelectContent>
                </Select>
              </div>
            <div className="space-y-2">
              <Label className="text-foreground">Biggest Challenge <span className="text-primary">*</span></Label>
              <Textarea placeholder="Low bookings, visibility issues, etc." value={formData.challenge} onChange={(e) => handleChange('challenge', e.target.value)} required rows={3} className="bg-background/50 border-border focus:border-primary resize-none" />
            </div>
            <div className="space-y-3">
              <Label className="text-foreground">Preferred Contact</Label>
              <RadioGroup value={formData.contactMethod} onValueChange={(v) => handleChange('contactMethod', v)} className="flex gap-6">
                <div className="flex items-center gap-2"><RadioGroupItem value="whatsapp" className="border-primary" /><Label className="cursor-pointer">WhatsApp</Label></div>
                <div className="flex items-center gap-2"><RadioGroupItem value="phone" className="border-primary" /><Label className="cursor-pointer">Phone</Label></div>
                <div className="flex items-center gap-2"><RadioGroupItem value="email" className="border-primary" /><Label className="cursor-pointer">Email</Label></div>
              </RadioGroup>
            </div>
            <Button type="submit" variant="luxury" size="xl" className="w-full group" disabled={isSubmitting}>
              {isSubmitting ? 'Submitting...' : <><span className="uppercase tracking-widest">Get Free Review</span><ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" /></>}
            </Button>
          </form>

          <div className="space-y-8">
            <div className="glass border-gold-glow p-10 space-y-8">
              <h3 className="font-cormorant text-2xl font-semibold text-foreground">Contact Directly</h3>
              <div className="space-y-6">
                {[{ icon: Mail, label: 'Email', value: 'qadeer@continentalluxehosting.com', href: 'mailto:qadeer@continentalluxehosting.com' },
                  { icon: Phone, label: 'Phone', value: '+1 234 567 8900', href: 'tel:+12345678900' },
                  { icon: MessageCircle, label: 'WhatsApp', value: 'Chat Now', href: 'https://wa.me/923035776759', isButton: true },
                  { icon: Clock, label: 'Hours', value: 'Mon-Sat, 9AM-8PM' }
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 border border-primary/20 flex items-center justify-center"><item.icon className="w-5 h-5 text-primary" /></div>
                    <div>
                      <span className="block text-xs text-muted-foreground uppercase tracking-wider">{item.label}</span>
                      {item.href ? <a href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} className="text-foreground hover:text-primary transition-colors">{item.value}</a> : <span className="text-foreground">{item.value}</span>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

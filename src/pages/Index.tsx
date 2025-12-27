import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { StatsSection } from '@/components/StatsSection';
import { ServicesSection } from '@/components/ServicesSection';
import { ProcessSection } from '@/components/ProcessSection';
import { WhyUsSection } from '@/components/WhyUsSection';
import { ResultsSection } from '@/components/ResultsSection';
import { FAQSection } from '@/components/FAQSection';
import { AboutSection } from '@/components/AboutSection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <StatsSection />
        <ServicesSection />
        <ProcessSection />
        <WhyUsSection />
        <ResultsSection />
        <FAQSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

import { Section } from '../Section';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function HeroSection() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <Section className="pt-32 pb-20 relative overflow-hidden min-h-[85vh] flex items-center">
      {/* Background Image with Enhanced Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/generated/spice-hero-background.dim_1920x1080.png"
          alt=""
          className="w-full h-full object-cover opacity-30"
        />
        <div className="hero-overlay" />
      </div>

      {/* Content */}
      <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center w-full">
        <div className="space-y-8 animate-fade-in">
          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-extrabold text-foreground leading-[1.1] tracking-tight">
            Amodkar Blue Ocean Trade
          </h1>
          <p className="text-2xl sm:text-3xl text-primary font-bold tracking-tight">
            Premium Spice Exporter
          </p>
          <p className="text-lg sm:text-xl text-foreground/80 max-w-xl leading-relaxed font-medium">
            Delivering authentic, high-grade spices to buyers worldwide. We bring the finest flavors from source to your doorstep with uncompromising quality and excellence.
          </p>
          <div className="flex flex-wrap gap-4 pt-6">
            <Button 
              size="lg" 
              onClick={scrollToContact} 
              className="group font-semibold text-base px-8 py-6 shadow-premium hover:shadow-premium-lg"
            >
              Get in Touch
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => {
                const element = document.getElementById('products');
                if (element) {
                  const offset = 80;
                  const elementPosition = element.getBoundingClientRect().top;
                  const offsetPosition = elementPosition + window.pageYOffset - offset;
                  window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                }
              }}
              className="font-semibold text-base px-8 py-6 border-2 hover:bg-primary/8 hover:border-primary/40"
            >
              View Products
            </Button>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative lg:block hidden">
          <div className="relative rounded-2xl overflow-hidden shadow-premium-lg">
            <img
              src="/assets/generated/spice-photo-assorted.dim_800x600.png"
              alt="Premium Spices"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </Section>
  );
}


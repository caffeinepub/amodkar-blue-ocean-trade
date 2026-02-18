import { Section } from '../Section';
import { Award, Globe, Shield, TrendingUp } from 'lucide-react';

export function AboutSection() {
  const features = [
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Serving buyers across continents with reliable export services',
    },
    {
      icon: Award,
      title: 'Premium Quality',
      description: 'Sourcing only the finest spices with rigorous quality standards',
    },
    {
      icon: Shield,
      title: 'Trust & Reliability',
      description: 'Building lasting partnerships through consistent excellence',
    },
    {
      icon: TrendingUp,
      title: 'Industry Experience',
      description: 'Years of expertise in international spice trade',
    },
  ];

  return (
    <Section id="about" background="muted">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
          About Us
        </h2>
        <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed font-medium">
          Amodkar Blue Ocean Trade is a trusted name in the global spice export industry. We specialize in sourcing, processing, and delivering premium-quality spices to buyers worldwide. Our commitment to authenticity, quality, and customer satisfaction has made us a preferred partner for businesses seeking the finest spices.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
        {features.map((feature, index) => (
          <div
            key={index}
            className="premium-surface premium-surface-hover rounded-xl p-6"
          >
            <div className="premium-icon-chip mb-4">
              <feature.icon className="h-7 w-7 text-primary" />
            </div>
            <h3 className="font-bold text-lg mb-2 tracking-tight">{feature.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

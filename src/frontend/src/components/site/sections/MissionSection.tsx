import { Section } from '../Section';
import { Target, Globe, Award, Users } from 'lucide-react';

export function MissionSection() {
  const values = [
    {
      icon: Target,
      title: 'Quality Assurance',
      description: 'Delivering only the finest, authentic spices that meet international standards',
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Connecting premium Indian spices with discerning buyers worldwide',
    },
    {
      icon: Award,
      title: 'Reliability',
      description: 'Consistent quality and timely delivery you can count on',
    },
    {
      icon: Users,
      title: 'Partnership',
      description: 'Building long-term relationships based on trust and excellence',
    },
  ];

  return (
    <Section id="mission" background="muted">
      <div className="text-center mb-16">
        <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
          Our Mission
        </h2>
        <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-medium">
          At Amodkar Blue Ocean Trade, we are committed to bridging the gap between India's rich spice heritage and global markets. Our mission is to deliver premium-quality spices that embody authenticity, purity, and excellence, while fostering lasting partnerships with buyers who value integrity and reliability.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {values.map((value, index) => (
          <div
            key={index}
            className="p-6 premium-surface rounded-xl text-center group hover:shadow-premium-lg transition-all duration-300"
          >
            <div className="w-14 h-14 rounded-xl bg-primary/12 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              <value.icon className="h-7 w-7 text-primary" />
            </div>
            <h3 className="font-bold text-lg mb-2 tracking-tight">{value.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

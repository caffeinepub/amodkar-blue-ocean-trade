import { Section } from '../Section';
import { CheckCircle2, Package, Truck, FileCheck } from 'lucide-react';

export function QualityExportsSection() {
  const qualityPoints = [
    {
      icon: CheckCircle2,
      title: 'Quality Assurance',
      description: 'Every batch undergoes comprehensive quality testing to ensure purity, freshness, and authenticity.',
    },
    {
      icon: Package,
      title: 'Premium Packaging',
      description: 'Food-grade packaging that preserves aroma, flavor, and quality during transit.',
    },
    {
      icon: Truck,
      title: 'Reliable Logistics',
      description: 'Efficient export operations with timely delivery to destinations worldwide.',
    },
    {
      icon: FileCheck,
      title: 'Compliance Ready',
      description: 'Documentation and processes aligned with international trade standards.',
    },
  ];

  return (
    <Section id="quality" background="muted">
      <div className="text-center mb-16">
        <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
          Quality & Export Excellence
        </h2>
        <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-medium">
          Our commitment to quality extends from sourcing to delivery. We maintain stringent quality control measures and follow best practices in export operations to ensure your satisfaction.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {qualityPoints.map((point, index) => (
          <div key={index} className="flex gap-5">
            <div className="flex-shrink-0">
              <div className="premium-icon-chip">
                <point.icon className="h-7 w-7 text-primary" />
              </div>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2 tracking-tight">{point.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{point.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 p-10 premium-surface rounded-2xl max-w-4xl mx-auto">
        <h3 className="font-serif text-3xl font-bold mb-8 text-center tracking-tight">
          Why Choose Amodkar Blue Ocean Trade?
        </h3>
        <div className="grid sm:grid-cols-3 gap-8 text-center">
          <div>
            <div className="premium-stat mb-3">100%</div>
            <div className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">Authentic Products</div>
          </div>
          <div>
            <div className="premium-stat mb-3">Global</div>
            <div className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">Export Reach</div>
          </div>
          <div>
            <div className="premium-stat mb-3">24/7</div>
            <div className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">Customer Support</div>
          </div>
        </div>
      </div>
    </Section>
  );
}

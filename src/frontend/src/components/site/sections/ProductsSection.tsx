import { Section } from '../Section';
import { ProductCard } from '../ProductCard';

export function ProductsSection() {
  const products = [
    {
      name: 'Red Chili',
      description: 'Premium quality dried red chilies with vibrant color and heat',
      image: '/assets/generated/spice-photo-red-chili.dim_800x600.png',
    },
    {
      name: 'Turmeric',
      description: 'Pure golden turmeric powder with rich aroma and color',
      image: '/assets/generated/spice-photo-turmeric.dim_800x600.png',
    },
    {
      name: 'Cumin Seeds',
      description: 'Aromatic whole cumin seeds for authentic flavor',
      image: '/assets/generated/spice-photo-cumin.dim_800x600.png',
    },
    {
      name: 'Coriander',
      description: 'Fresh coriander seeds and powder with distinctive taste',
      image: '/assets/generated/spice-photo-coriander.dim_800x600.png',
    },
    {
      name: 'Black Pepper',
      description: 'Bold black peppercorns with intense flavor profile',
      image: '/assets/generated/spice-photo-black-pepper.dim_800x600.png',
    },
    {
      name: 'Cardamom',
      description: 'Premium green cardamom pods with sweet, spicy notes',
      image: '/assets/generated/spice-photo-cardamom.dim_800x600.png',
    },
  ];

  return (
    <Section id="products">
      <div className="text-center mb-12">
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold mb-6">
          Our Products
        </h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          We offer a diverse range of premium spices, carefully selected and processed to meet international quality standards. Each product is sourced from trusted suppliers and undergoes rigorous quality checks.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
    </Section>
  );
}


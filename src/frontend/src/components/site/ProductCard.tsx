import { Card, CardContent } from '@/components/ui/card';

interface ProductCardProps {
  name: string;
  description: string;
  image: string;
}

export function ProductCard({ name, description, image }: ProductCardProps) {
  return (
    <Card className="overflow-hidden premium-surface premium-surface-hover group cursor-pointer">
      <div className="aspect-[4/3] overflow-hidden bg-muted/20">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-all duration-500 group-hover:scale-102"
        />
      </div>
      <CardContent className="p-6">
        <h3 className="font-serif text-xl font-bold mb-2 text-foreground tracking-tight">{name}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
      </CardContent>
    </Card>
  );
}

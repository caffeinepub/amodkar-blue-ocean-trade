import { ReactNode } from 'react';

interface SectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
  background?: 'default' | 'muted';
}

export function Section({ id, children, className = '', background = 'default' }: SectionProps) {
  const bgClass = background === 'muted' ? 'bg-muted/30' : 'bg-background';
  
  return (
    <section id={id} className={`py-20 sm:py-24 lg:py-28 ${bgClass} ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {children}
      </div>
    </section>
  );
}

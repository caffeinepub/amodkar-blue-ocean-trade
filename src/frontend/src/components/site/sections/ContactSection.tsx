import { Section } from '../Section';
import { InquiryForm } from '../InquiryForm';
import { Mail, MapPin } from 'lucide-react';
import { SiWhatsapp } from 'react-icons/si';
import { useBusinessProfile } from '../../../hooks/useQueries';

export function ContactSection() {
  const { data: profile } = useBusinessProfile();

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: profile?.email || 'amodkarblueoceantrade@gmail.com',
      href: `mailto:${profile?.email || 'amodkarblueoceantrade@gmail.com'}`,
    },
    {
      icon: SiWhatsapp,
      label: 'WhatsApp',
      value: profile?.phone || '+91 9820787730',
      href: profile?.phone ? `https://wa.me/${profile.phone.replace(/[^0-9]/g, '')}` : 'https://wa.me/919820787730',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: profile?.address || 'Mumbai, India',
      href: null,
    },
  ];

  return (
    <Section id="contact">
      <div className="text-center mb-16">
        <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
          Get in Touch
        </h2>
        <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-medium">
          Ready to partner with us? We'd love to hear from you. Send us your inquiry and our team will respond promptly.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {/* Contact Information */}
        <div className="space-y-8">
          <div>
            <h3 className="font-serif text-2xl font-bold mb-6 tracking-tight">Contact Information</h3>
            <div className="space-y-5">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/12 flex items-center justify-center flex-shrink-0 shadow-sm">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-muted-foreground mb-1 uppercase tracking-wide">{item.label}</div>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.label === 'WhatsApp' ? '_blank' : undefined}
                        rel={item.label === 'WhatsApp' ? 'noopener noreferrer' : undefined}
                        className="text-foreground hover:text-primary transition-colors font-semibold premium-link"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <div className="text-foreground font-semibold">{item.value}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="p-8 premium-surface rounded-xl">
            <h4 className="font-bold mb-4 text-lg tracking-tight">Business Hours</h4>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground font-medium">Monday - Friday</span>
                <span className="font-bold text-foreground">9:00 AM - 6:00 PM</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground font-medium">Saturday</span>
                <span className="font-bold text-foreground">9:00 AM - 2:00 PM</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground font-medium">Sunday</span>
                <span className="font-bold text-foreground">Closed</span>
              </div>
            </div>
          </div>
        </div>

        {/* Inquiry Form */}
        <div>
          <h3 className="font-serif text-2xl font-bold mb-6 tracking-tight">Send Us an Inquiry</h3>
          <InquiryForm />
        </div>
      </div>
    </Section>
  );
}

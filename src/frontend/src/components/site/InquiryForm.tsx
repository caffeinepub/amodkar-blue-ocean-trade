import { useState } from 'react';
import { useSubmitInquiry } from '../../hooks/useQueries';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

export function InquiryForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const submitInquiry = useSubmitInquiry();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      await submitInquiry.mutateAsync(formData);
      setShowSuccess(true);
      setFormData({ name: '', email: '', message: '' });
      
      setTimeout(() => {
        setShowSuccess(false);
      }, 5000);
    } catch (error) {
      console.error('Failed to submit inquiry:', error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const isFormValid = formData.name.trim() && formData.email.trim() && formData.message.trim();

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {showSuccess && (
        <Alert className="bg-primary/10 border-primary/30 shadow-sm">
          <CheckCircle2 className="h-4 w-4 text-primary" />
          <AlertDescription className="text-primary font-semibold">
            Thank you for your inquiry! We'll get back to you soon.
          </AlertDescription>
        </Alert>
      )}

      {submitInquiry.isError && (
        <Alert variant="destructive" className="shadow-sm">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription className="font-semibold">
            Failed to submit inquiry. Please try again or contact us directly.
          </AlertDescription>
        </Alert>
      )}

      <div className="space-y-2">
        <Label htmlFor="name" className="font-semibold">Name *</Label>
        <Input
          id="name"
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your full name"
          required
          disabled={submitInquiry.isPending}
          className="premium-focus border-border-subtle focus:border-primary/40 h-11"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="email" className="font-semibold">Email *</Label>
        <Input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="your.email@example.com"
          required
          disabled={submitInquiry.isPending}
          className="premium-focus border-border-subtle focus:border-primary/40 h-11"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="message" className="font-semibold">Message *</Label>
        <Textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell us about your requirements..."
          rows={6}
          required
          disabled={submitInquiry.isPending}
          className="premium-focus border-border-subtle focus:border-primary/40 resize-none"
        />
      </div>

      <Button
        type="submit"
        size="lg"
        className="w-full font-semibold text-base shadow-premium hover:shadow-premium-lg"
        disabled={!isFormValid || submitInquiry.isPending}
      >
        {submitInquiry.isPending ? (
          <>
            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
            Sending...
          </>
        ) : (
          'Send Inquiry'
        )}
      </Button>
    </form>
  );
}

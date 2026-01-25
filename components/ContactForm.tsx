'use client';

import { useState, useTransition } from 'react';
import { submitContactForm } from '@/actions/submit-contact-form';

function ContactForm() {
  const [isPending, startTransition] = useTransition();
  const [status, setStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);

    startTransition(async () => {
      const result = await submitContactForm(formData);

      if (result.success) {
        setStatus({
          type: 'success',
          message: 'Thank you! Your message has been sent successfully.',
        });

        (e.target as HTMLFormElement).reset();

        setTimeout(() => {
          setStatus({ type: null, message: '' });
        }, 5000);
      } else {
        setStatus({
          type: 'error',
          message: result.error || 'Something went wrong. Please try again.',
        });
      }
    });
  };
  return <div>ContactForm</div>;
}

export default ContactForm;

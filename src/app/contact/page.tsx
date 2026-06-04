import type { Metadata } from 'next';
import { ContactHero } from '@/components/sections/contact/ContactHero';
import { ContactForm } from '@/components/sections/contact/ContactForm';

export const metadata: Metadata = {
  title: 'Contact Aquon',
  description:
    'Talk to the Aquon team about platform access, the AQTF pilot, partnerships, or general questions.',
};

export default function ContactPage() {
  return (
    <div className="pt-20">
      <ContactHero />
      <ContactForm />
    </div>
  );
}
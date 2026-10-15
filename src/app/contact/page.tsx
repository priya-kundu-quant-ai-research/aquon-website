import type { Metadata } from 'next';
import { PageHero } from '@/components/site/PageHero';
import { ContactForm } from '@/components/sections/contact/ContactForm';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Talk to Aquon about a Zeton demo, a partnership or integration, or investing in the company.',
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let’s talk."
        lead="Whether you want to see Zeton on your own book, bring it to the advisers on your platform, or learn about investing in Aquon, we’d like to hear from you."
      />
      <ContactForm />
    </>
  );
}

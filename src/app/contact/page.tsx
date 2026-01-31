import { ContactHero } from '@/components/sections/contact/ContactHero';
import { ContactForm } from '@/components/sections/contact/ContactForm';

export default function ContactPage() {
  return (
    <div className="pt-20">
      <ContactHero />
      <ContactForm />
    </div>
  );
}
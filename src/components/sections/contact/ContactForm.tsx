'use client';

import { useEffect, useState } from 'react';
import { Check, Mail, MapPin, Navigation } from 'lucide-react';
import { cn } from '@/lib/utils';

/** Our two offices; each "Get directions" opens Google Maps to the full address */
const offices = [
  { city: 'New York', lines: ['NYU Tandon, 370 Jay Street', 'Brooklyn, NY 11201'] },
  { city: 'Washington, DC', lines: ['WeWork, 1701 Rhode Island Avenue NW', 'Washington, DC 20036'] },
];

/**
 * The site's only conversion path. Interests are firms (demo, partnership),
 * investors, or general. 🔴 No fund options: AQTF is never offered to the
 * public here (no "pilot", no "explore the fund"). `?interest=investors`
 * preselects Investor relations (linked from every closing band).
 */
const interests = [
  { value: 'Platform demo', label: 'A platform demo' },
  { value: 'Partnership or integration', label: 'A partnership or integration' },
  { value: 'Investor relations', label: 'Investing in Aquon' },
  { value: 'General', label: 'Something else' },
] as const;

const empty = {
  name: '',
  email: '',
  company: '',
  jobTitle: '',
  interest: 'Platform demo',
  aum: '',
  message: '',
};

const field =
  'block w-full rounded-md border border-gray-text/50 bg-white px-3.5 py-2.5 text-[15px] text-navy placeholder:text-mid-gray transition-colors focus:border-navy focus:outline-none focus:ring-2 focus:ring-navy/20';
const labelCls = 'mb-2 block text-[13px] font-semibold text-navy';

export const ContactForm = () => {
  const [formData, setFormData] = useState(empty);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const wanted = new URLSearchParams(window.location.search).get('interest');
    if (wanted === 'investors') {
      setFormData((f) => ({ ...f, interest: 'Investor relations' }));
    }
  }, []);

  const investor = formData.interest === 'Investor relations';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data?.error || 'Failed to submit');
      }
      setIsSubmitted(true);
      setFormData(empty);
    } catch (err) {
      console.error(err);
      setError('Something went wrong sending your message. Please try again, or email us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="bg-light-gray py-20 md:py-24">
      <div className="mx-auto grid max-w-[1200px] gap-12 px-6 md:px-8 lg:grid-cols-[1.5fr_1fr] lg:gap-16">
        <div className="rounded-xl border border-navy/10 bg-white p-8 md:p-10">
          {isSubmitted ? (
            <div className="py-16 text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-teal">
                <Check className="h-7 w-7 text-navy" strokeWidth={2.5} />
              </div>
              <h2 className="mt-6 font-display text-heading-1 text-navy">Thank you.</h2>
              <p className="mt-3 text-body-l text-gray-text">We’ve received your message and will be in touch shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <h2 className="font-display text-heading-1 text-navy">Send us a message</h2>
                <p className="mt-2 text-body text-gray-text">We reply within one business day.</p>
              </div>

              <fieldset>
                <legend className={labelCls}>I’m interested in</legend>
                <div className="grid gap-2 sm:grid-cols-2">
                  {interests.map((it) => {
                    const selected = formData.interest === it.value;
                    return (
                      <label
                        key={it.value}
                        className={cn(
                          'flex cursor-pointer items-center gap-3 rounded-md border px-3.5 py-3 text-[15px] transition-colors has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-navy/30',
                          selected ? 'border-navy bg-navy/[0.03] text-navy' : 'border-navy/15 text-navy/80 hover:border-navy/35'
                        )}
                      >
                        <input
                          type="radio"
                          name="interest"
                          value={it.value}
                          checked={selected}
                          onChange={handleChange}
                          className="sr-only"
                        />
                        <span
                          aria-hidden="true"
                          className={cn(
                            'flex h-4 w-4 flex-none items-center justify-center rounded-full border',
                            selected ? 'border-navy' : 'border-gray-text/60'
                          )}
                        >
                          {selected && <span className="h-2 w-2 rounded-full bg-gold-deep" />}
                        </span>
                        {it.label}
                      </label>
                    );
                  })}
                </div>
              </fieldset>

              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label htmlFor="name" className={labelCls}>Name</label>
                  <input id="name" name="name" type="text" required autoComplete="name" value={formData.name} onChange={handleChange} className={field} />
                </div>
                <div>
                  <label htmlFor="email" className={labelCls}>Work email</label>
                  <input id="email" name="email" type="email" required autoComplete="email" value={formData.email} onChange={handleChange} className={field} />
                </div>
                <div>
                  <label htmlFor="company" className={labelCls}>{investor ? 'Firm or fund' : 'Company'}</label>
                  <input id="company" name="company" type="text" required autoComplete="organization" value={formData.company} onChange={handleChange} className={field} />
                </div>
                <div>
                  <label htmlFor="jobTitle" className={labelCls}>Role</label>
                  <input id="jobTitle" name="jobTitle" type="text" required autoComplete="organization-title" value={formData.jobTitle} onChange={handleChange} className={field} />
                </div>
              </div>

              {!investor && (
                <div>
                  <label htmlFor="aum" className={labelCls}>
                    Assets under management <span className="font-normal text-gray-text">(optional)</span>
                  </label>
                  <input id="aum" name="aum" type="text" value={formData.aum} onChange={handleChange} placeholder="e.g. $750M" className={field} />
                </div>
              )}

              <div>
                <label htmlFor="message" className={labelCls}>Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={investor ? 'Tell us a little about you and what you’d like to know.' : 'Tell us about your firm and what you’d like to see.'}
                  className={field}
                />
              </div>

              {error && <p className="text-[14px] text-[#B4232F]" role="alert">{error}</p>}

              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex h-12 w-full items-center justify-center rounded-md bg-gold-deep px-6 text-[15px] font-semibold text-navy transition-colors hover:bg-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy focus-visible:ring-offset-2 disabled:opacity-60 sm:w-auto"
              >
                {isSubmitting ? 'Sending…' : 'Send message'}
              </button>
            </form>
          )}
        </div>

        <aside className="space-y-10 lg:pt-4">
          <div>
            <h3 className="text-eyebrow uppercase text-gray-text">Email</h3>
            <a href="mailto:hello@aquon.ai" className="mt-3 flex items-center gap-3 text-body-l font-medium text-navy hover:text-teal-text">
              <Mail className="h-5 w-5 text-teal-text" aria-hidden="true" />
              hello@aquon.ai
            </a>
          </div>
          {offices.map((o) => (
            <div key={o.city}>
              <h3 className="text-eyebrow uppercase text-gray-text">{o.city}</h3>
              <p className="mt-3 flex gap-3 text-body text-navy">
                <MapPin className="mt-1 h-5 w-5 flex-none text-teal-text" aria-hidden="true" />
                <span>
                  {o.lines.map((l, i) => (
                    <span key={l} className={cn('block', i === 0 && 'font-medium')}>
                      {l}
                    </span>
                  ))}
                </span>
              </p>
              <a
                href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(o.lines.join(', '))}`}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-8 mt-3 inline-flex items-center gap-2 rounded-md border border-navy/20 px-3.5 py-2 text-[14px] font-medium text-navy transition-colors hover:border-teal-text hover:text-teal-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal"
              >
                <Navigation className="h-4 w-4" aria-hidden="true" />
                Get directions
                <span className="sr-only"> to our {o.city} office (opens Google Maps)</span>
              </a>
            </div>
          ))}
        </aside>
      </div>
    </section>
  );
};

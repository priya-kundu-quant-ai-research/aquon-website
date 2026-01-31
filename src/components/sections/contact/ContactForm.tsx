'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send } from 'lucide-react';

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    jobTitle: '',
    aum: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        company: '',
        jobTitle: '',
        aum: '',
        message: '',
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {/* Left: Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border-neutral-200 h-full flex flex-col">
              <CardHeader>
                <CardTitle className="text-2xl text-deep-navy">Schedule a Demo</CardTitle>
                <p className="text-neutral-600">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>
              </CardHeader>
              <CardContent className="flex-grow flex items-center">
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-12 text-center w-full"
                  >
                    <div className="w-16 h-16 bg-vibrant-teal rounded-full flex items-center justify-center mx-auto mb-4">
                      <Send className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-deep-navy mb-2">Thank You!</h3>
                    <p className="text-neutral-600">
                      We've received your message and will be in touch soon.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6 w-full">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-2">
                          Name *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="John Smith"
                          className="w-full"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-2">
                          Work Email *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john@company.com"
                          className="w-full"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-neutral-700 mb-2">
                          Company *
                        </label>
                        <Input
                          id="company"
                          name="company"
                          type="text"
                          required
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="Your Company"
                          className="w-full"
                        />
                      </div>
                      <div>
                        <label htmlFor="jobTitle" className="block text-sm font-medium text-neutral-700 mb-2">
                          Job Title *
                        </label>
                        <Input
                          id="jobTitle"
                          name="jobTitle"
                          type="text"
                          required
                          value={formData.jobTitle}
                          onChange={handleChange}
                          placeholder="Portfolio Manager"
                          className="w-full"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="aum" className="block text-sm font-medium text-neutral-700 mb-2">
                        AUM (Optional)
                      </label>
                      <Input
                        id="aum"
                        name="aum"
                        type="text"
                        value={formData.aum}
                        onChange={handleChange}
                        placeholder="$500M"
                        className="w-full"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-2">
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your portfolio management needs..."
                        rows={5}
                        className="w-full"
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      disabled={isSubmitting}
                      className="w-full bg-vibrant-teal hover:bg-vibrant-teal/90 text-white font-semibold"
                    >
                      {isSubmitting ? 'Sending...' : 'Schedule Demo'}
                      <Send className="ml-2 h-5 w-5" />
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Right: Contact Information */}
          <div className="flex flex-col gap-6">
            <Card className="border-neutral-200 flex-grow">
              <CardContent className="p-6 h-full flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-deep-navy mb-6">Other Ways to Reach Us</h3>
                  <div className="flex items-start gap-3 mb-8">
                    <Mail className="w-5 h-5 text-vibrant-teal mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-deep-navy text-sm mb-1">General Inquiries</p>
                      <a href="mailto:hello@aquon.com" className="text-vibrant-teal hover:underline text-sm">
                        hello@aquon.com
                      </a>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-deep-navy mb-4">Office</h3>
                  <div className="flex items-start gap-3 mb-8">
                    <MapPin className="w-5 h-5 text-vibrant-teal mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-neutral-700 text-sm">
                        123 Financial District<br />
                        New York, NY 10004<br />
                        United States
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-vibrant-teal/5 border border-vibrant-teal/20 rounded-lg p-4">
                  <h4 className="text-base font-bold text-deep-navy mb-2">Response Time</h4>
                  <p className="text-sm text-neutral-700">
                    We typically respond to all inquiries within 24 hours during business days.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
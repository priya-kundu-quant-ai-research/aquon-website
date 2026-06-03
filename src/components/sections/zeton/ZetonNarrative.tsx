'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const valueProps = [
  {
    title: 'Aladdin-class, without the nine-figure budget.',
    description:
      'The optimization, execution quality, and oversight of an institutional system, without a seven-figure license.',
  },
  {
    title: 'Sell the kitchen, never the recipes.',
    description:
      'Licensees get the full platform; their strategies and data stay entirely their own.',
  },
  {
    title: 'Operator wins.',
    description:
      'Faster portfolio builds, fewer manual errors, continuous drift monitoring, better execution, and a clean audit trail for client reporting.',
  },
  {
    title: 'Proprietary core.',
    description: 'Aqua, our NYU-licensed engine, underpins the platform’s speed and security.',
  },
];

export const ZetonProblem = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-deep-navy mb-6">
            Below the institutional tier, capable managers are stuck.
          </h2>
          <p className="text-neutral-600 text-lg leading-relaxed">
            Emerging funds, family offices, and independent RIAs stitch together spreadsheets, broker
            APIs, point tools, and consultant code to approximate what an Aladdin-class system does in
            one place. The cost is real: allocation errors, undisciplined rebalancing, slippage, weak
            audit trails, and time lost to plumbing instead of strategy. Their two options are equally
            unsatisfying: institutional platforms priced out of reach, or a patchwork that never adds up.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export const ZetonValueProp = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-deep-navy">
            Institutional capability at emerging-manager economics.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {valueProps.map((point, index) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="border-neutral-200 h-full">
                <CardContent>
                  <h3 className="text-xl font-bold text-deep-navy mb-2">{point.title}</h3>
                  <p className="text-neutral-600 leading-relaxed">{point.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const ZetonMarket = () => {
  return (
    <section className="py-20 bg-light-gray">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-deep-navy mb-6">
            A market the incumbents overlook.
          </h2>
          <p className="text-neutral-600 text-lg leading-relaxed mb-5">
            Zeton serves the &ldquo;bottom 95%&rdquo;: emerging funds and quant managers, family
            offices, and independent RIAs running custom strategies, frequently through separately
            managed accounts. Rather than competing with them for end clients, Zeton becomes the
            engine inside their practice.
          </p>
          <p className="text-neutral-600 text-lg leading-relaxed">
            <span className="font-semibold text-deep-navy">Why now:</span> the SMA vehicle our
            customers run has grown more than 50% in two years to nearly $4 trillion and is pushing
            downmarket fast; AI-native infrastructure and programmatic brokers finally make an
            Aladdin-class platform buildable by a small team; demand is surging just as the cost to
            build has collapsed.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export const ZetonProofPoint = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <p className="text-neutral-700 text-lg leading-relaxed mb-8">
            Zeton is not vendorware. Aquon trusts its own capital to it every day: AQTF runs live on
            Zeton against Interactive Brokers, managing multiple client accounts with automated weekly
            rebalancing and optimized index strategies.
          </p>
          <Link href="/contact">
            <Button
              size="lg"
              className="bg-vibrant-teal hover:bg-vibrant-teal/90 text-white font-semibold"
            >
              Request platform access
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

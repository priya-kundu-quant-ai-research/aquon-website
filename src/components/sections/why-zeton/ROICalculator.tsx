'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Slider } from '@/components/ui/slider';
import { motion } from 'framer-motion';
import { TrendingUp, Clock, DollarSign } from 'lucide-react';

export const ROICalculator = () => {
  const [numPMs, setNumPMs] = useState(5);
  const [numAnalysts, setNumAnalysts] = useState(10);
  const [aum, setAum] = useState(500); // in millions

  // Simple ROI calculation logic
  const avgAnalystSalary = 150000;
  const avgPMSalary = 250000;

  const teamCostSavings = Math.round(numAnalysts * avgAnalystSalary * 0.6);
  const timeSavings = Math.round((numPMs + numAnalysts) * 20);
  const alphaUplift = Math.round(aum * 1000000 * 0.005);

  return (
    <section className="py-16 bg-light-gray">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-deep-navy mb-3">
            Calculate Your ROI
          </h2>
          <p className="text-deep-navy/70 text-base max-w-2xl mx-auto">
            See how much Zeton could save your firm in costs and time while boosting performance.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {/* No outer "box". Just the two columns. */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {/* Left: Inputs (matches full height of KPI stack) */}
            <Card className="lg:col-span-7 bg-deep-text-deep-navy/10 border-deep-text-deep-navy/20  bg-white backdrop-blur-sm h-full flex flex-col">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-deep-navy text-xl">Your Current Team and AUM</CardTitle>
                  <span className="text-deep-navy/60 text-sm">Adjust to estimate impact</span>
                </div>
              </CardHeader>

              {/* Fill remaining height + distribute three sliders evenly */}
              <CardContent className="flex-1 flex flex-col">
                <div className="grid grid-rows-3 gap-6 flex-1">
                  {/* Portfolio Managers */}
                  <div className="flex flex-col justify-center">
                    <div className="flex justify-between mb-3">
                      <label className="text-deep-navy text-sm font-medium">Portfolio Managers</label>
                      <span className="text-vibrant-teal font-bold text-lg">{numPMs}</span>
                    </div>
                    <Slider
                      value={[numPMs]}
                      onValueChange={(value) => setNumPMs(value[0])}
                      min={1}
                      max={20}
                      step={1}
                      className="w-full"
                    />
                  </div>

                  {/* Analysts */}
                  <div className="flex flex-col justify-center">
                    <div className="flex justify-between mb-3">
                      <label className="text-deep-navy text-sm font-medium">Analysts</label>
                      <span className="text-vibrant-teal font-bold text-lg">{numAnalysts}</span>
                    </div>
                    <Slider
                      value={[numAnalysts]}
                      onValueChange={(value) => setNumAnalysts(value[0])}
                      min={1}
                      max={50}
                      step={1}
                      className="w-full"
                    />
                  </div>

                  {/* AUM */}
                  <div className="flex flex-col justify-center">
                    <div className="flex justify-between mb-3">
                      <label className="text-deep-navy text-sm font-medium">Assets Under Management</label>
                      <span className="text-vibrant-teal font-bold text-lg">${aum}M</span>
                    </div>
                    <Slider
                      value={[aum]}
                      onValueChange={(value) => setAum(value[0])}
                      min={50}
                      max={5000}
                      step={50}
                      className="w-full"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Right: 3 KPI cards (equal height, equal spacing, aligned with inputs top/bottom) */}
            <div className="lg:col-span-5 h-full">
              <div className="grid grid-rows-3 gap-4 h-full">
                {/* Annual Savings */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.25 }}
                  className="h-full"
                >
                  <Card className="bg-deep-text-deep-navy/10 border-deep-text-deep-navy/20  bg-white backdrop-blur-sm h-full">
                    <CardContent className="p-3 h-full flex flex-col justify-center">
                      <div className="flex items-center gap-3 mb-2">
                        <DollarSign className="text-rich-purple w-6 h-6" />
                        <h3 className="text-deep-navy font-semibold">Annual Savings</h3>
                      </div>
                      <p className="text-3xl font-bold text-deep-navy">
                        ${(teamCostSavings / 1000).toFixed(0)}K
                      </p>
                      <p className="text-deep-navy/80 text-xs mt-1">
                        Assuming 60% analyst reduction
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>

                {/* Time Reclaimed */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.25, delay: 0.05 }}
                  className="h-full"
                >
                  <Card className="bg-deep-text-deep-navy/10 border-deep-text-deep-navy/20  bg-white backdrop-blur-sm h-full">
                    <CardContent className="p-3 h-full flex flex-col justify-center">
                      <div className="flex items-center gap-3 mb-2">
                        <Clock className="text-gold w-6 h-6" />
                        <h3 className="text-deep-navy font-semibold">Time Reclaimed</h3>
                      </div>
                      <p className="text-3xl font-bold text-deep-navy">
                        {timeSavings} hrs/week
                      </p>
                      <p className="text-deep-navy/70 text-xs mt-1">
                        More time for research & decisions
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>

                {/* Potential Alpha Uplift */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.25, delay: 0.1 }}
                  className="h-full"
                >
                  <Card className="bg-deep-text-deep-navy/10 border-deep-text-deep-navy/20  bg-white backdrop-blur-sm h-full">
                    <CardContent className="p-3 h-full flex flex-col justify-center">
                      <div className="flex items-center gap-3 mb-2">
                        <TrendingUp className="text-vibrant-teal w-6 h-6" />
                        <h3 className="text-deep-navy font-semibold">Potential Alpha Uplift</h3>
                      </div>
                      <p className="text-3xl font-bold text-deep-navy">
                        ${(alphaUplift / 1000000).toFixed(1)}M
                      </p>
                      <p className="text-deep-navy/70 text-xs mt-1">
                        Based on 0.5% improvement in performance
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

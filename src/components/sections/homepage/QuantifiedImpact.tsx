'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { AnimatedCounter } from '@/components/core/AnimatedCounter';
import { TrendingUp, Shield, Target, Award } from 'lucide-react';
import { useState } from 'react';

const benchmarks = [
  {
    id: 'sp500',
    name: 'S&P 500',
    description: 'Large-cap U.S. equity benchmark',
    metrics: {
      totalReturn: { zeton: 1318.61, benchmark: 244.94 },
      cagr: { zeton: 30.37, benchmark: 13.05 },
      sharpe: { zeton: 1.356, benchmark: 0.573 },
      maxDrawdown: { zeton: -20.69, benchmark: -32.23 },
    },
  },
  {
    id: 'nasdaq',
    name: 'NASDAQ 100',
    description: 'Technology-heavy growth index',
    metrics: {
      totalReturn: { zeton: 1588.55, benchmark: 485.93 },
      cagr: { zeton: 32.66, benchmark: 19.14 },
      sharpe: { zeton: 1.151, benchmark: 0.772 },
      maxDrawdown: { zeton: -55.07, benchmark: -35.10 },
    },
  },
  {
    id: 'russell',
    name: 'Russell 2000',
    description: 'Small-cap equity benchmark',
    metrics: {
      totalReturn: { zeton: 782.44, benchmark: 145.49 },
      cagr: { zeton: 24.33, benchmark: 9.30 },
      sharpe: { zeton: 1.050, benchmark: 0.330 },
      maxDrawdown: { zeton: -28.63, benchmark: -41.39 },
    },
  },
  {
    id: 'dow',
    name: 'Dow Jones',
    description: 'Blue-chip industrial average',
    metrics: {
      totalReturn: { zeton: 716.51, benchmark: 184.92 },
      cagr: { zeton: 23.37, benchmark: 10.93 },
      sharpe: { zeton: 1.086, benchmark: 0.460 },
      maxDrawdown: { zeton: -26.08, benchmark: -34.85 },
    },
  },
];

export const QuantifiedImpact = () => {
  const [selectedBenchmark, setSelectedBenchmark] = useState('sp500');
  const currentBenchmark = benchmarks.find(b => b.id === selectedBenchmark) || benchmarks[0];
  // Honesty guardrail: only claim "less downside" when the optimizer's drawdown is
  // genuinely shallower than the benchmark's (it is not on the NASDAQ 100 tab).
  const ddOptimizer = currentBenchmark.metrics.maxDrawdown.zeton;
  const ddBenchmark = currentBenchmark.metrics.maxDrawdown.benchmark;
  const optimizerLessDownside = Math.abs(ddOptimizer) < Math.abs(ddBenchmark);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-deep-navy mb-4">
            Validated over a decade. Proven in live markets.
          </h2>
          <p className="text-neutral-600 text-lg max-w-3xl mx-auto">
            The Zeton optimizer was backtested over a 10-year horizon against major US indices,
            rebalancing weekly under a max-Sharpe objective. Against the S&amp;P 500, the optimized
            portfolio delivered materially stronger risk-adjusted returns — and it now runs live on
            Interactive Brokers, where we&apos;re building the real track record quarter by quarter.
          </p>
        </motion.div>

        {/* Benchmark Selector */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-6"
        >
          {benchmarks.map((benchmark) => (
            <button
              key={benchmark.id}
              onClick={() => setSelectedBenchmark(benchmark.id)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                selectedBenchmark === benchmark.id
                  ? 'bg-vibrant-teal text-white shadow-lg'
                  : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
              }`}
            >
              {benchmark.name}
            </button>
          ))}
        </motion.div>

        {/* Selected Benchmark Description */}
        <motion.div
          key={selectedBenchmark}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="text-center mb-6"
        >
          <p className="text-neutral-600 text-sm">
            {currentBenchmark.description}
          </p>
        </motion.div>

        {/* Metrics Grid */}
        <motion.div
          key={`metrics-${selectedBenchmark}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-7xl mx-auto mb-12"
        >
          {/* Total Return */}
          <Card className="border-2 border-vibrant-teal/20 hover:shadow-xl transition-all">
            <CardContent className="p-">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-vibrant-teal/10 flex items-center justify-center">
                  <TrendingUp className="text-vibrant-teal" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-deep-navy">Total Return</h3>
              </div>
              <div className="flex items-end justify-between gap-4">
                <div>
                  <p className="text-xs text-neutral-500 mb-1">Zeton Optimizer</p>
                  <p className="text-3xl font-bold text-vibrant-teal">
                    <AnimatedCounter from={0} to={currentBenchmark.metrics.totalReturn.zeton} decimals={2} />%
                  </p>
                </div>
                <div>
                  <p className="text-xs text-neutral-500 mb-1">{currentBenchmark.name}</p>
                  <p className="text-xl font-semibold text-neutral-400">
                    {currentBenchmark.metrics.totalReturn.benchmark.toFixed(2)}%
                  </p>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-neutral-200">
                <p className="text-sm font-semibold text-vibrant-teal">
                  +{(currentBenchmark.metrics.totalReturn.zeton - currentBenchmark.metrics.totalReturn.benchmark).toFixed(2)}% outperformance
                </p>
              </div>
            </CardContent>
          </Card>

          {/* CAGR */}
          <Card className="border-2 border-rich-purple/20 hover:shadow-xl transition-all">
            <CardContent className="p-">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-rich-purple/10 flex items-center justify-center">
                  <Target className="text-rich-purple" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-deep-navy">CAGR</h3>
              </div>
              <div className="flex items-end justify-between gap-4">
                <div>
                  <p className="text-xs text-neutral-500 mb-1">Zeton Optimizer</p>
                  <p className="text-3xl font-bold text-rich-purple">
                    <AnimatedCounter from={0} to={currentBenchmark.metrics.cagr.zeton} decimals={2} />%
                  </p>
                </div>
                <div>
                  <p className="text-xs text-neutral-500 mb-1">{currentBenchmark.name}</p>
                  <p className="text-xl font-semibold text-neutral-400">
                    {currentBenchmark.metrics.cagr.benchmark.toFixed(2)}%
                  </p>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-neutral-200">
                <p className="text-sm font-semibold text-rich-purple">
                  {((currentBenchmark.metrics.cagr.zeton / currentBenchmark.metrics.cagr.benchmark) - 1) > 1 
                    ? `${((currentBenchmark.metrics.cagr.zeton / currentBenchmark.metrics.cagr.benchmark)).toFixed(1)}x higher`
                    : `+${(currentBenchmark.metrics.cagr.zeton - currentBenchmark.metrics.cagr.benchmark).toFixed(2)}%`
                  }
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Sharpe Ratio */}
          <Card className="border-2 border-deep-navy/20 hover:shadow-xl transition-all">
            <CardContent className="p-">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-deep-navy/10 flex items-center justify-center">
                  <Award className="text-deep-navy" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-deep-navy">Sharpe Ratio</h3>
              </div>
              <div className="flex items-end justify-between gap-4">
                <div>
                  <p className="text-xs text-neutral-500 mb-1">Zeton Optimizer</p>
                  <p className="text-3xl font-bold text-deep-navy">
                    <AnimatedCounter from={0} to={currentBenchmark.metrics.sharpe.zeton} decimals={3} />
                  </p>
                </div>
                <div>
                  <p className="text-xs text-neutral-500 mb-1">{currentBenchmark.name}</p>
                  <p className="text-xl font-semibold text-neutral-400">
                    {currentBenchmark.metrics.sharpe.benchmark.toFixed(3)}
                  </p>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-neutral-200">
                <p className="text-sm font-semibold text-deep-navy">
                  {((currentBenchmark.metrics.sharpe.zeton / currentBenchmark.metrics.sharpe.benchmark)).toFixed(1)}x better risk-adjusted returns
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Max Drawdown */}
          <Card className="border-2 border-green-500/20 hover:shadow-xl transition-all">
            <CardContent className="p-">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center">
                  <Shield className="text-green-500" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-deep-navy">Max Drawdown</h3>
              </div>
              <div className="flex items-end justify-between gap-4">
                <div>
                  <p className="text-xs text-neutral-500 mb-1">Zeton Optimizer</p>
                  <p className="text-3xl font-bold text-green-500">
                    <AnimatedCounter from={0} to={currentBenchmark.metrics.maxDrawdown.zeton} decimals={2} />%
                  </p>
                </div>
                <div>
                  <p className="text-xs text-neutral-500 mb-1">{currentBenchmark.name}</p>
                  <p className="text-xl font-semibold text-neutral-400">
                    {currentBenchmark.metrics.maxDrawdown.benchmark.toFixed(2)}%
                  </p>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-neutral-200">
                {optimizerLessDownside ? (
                  <p className="text-sm font-semibold text-green-500">
                    {Math.abs(ddBenchmark - ddOptimizer).toFixed(2)}% less downside risk
                  </p>
                ) : (
                  <p className="text-sm font-semibold text-neutral-500">
                    Deeper drawdown than the index over this period
                  </p>
                )}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Context Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-5xl mx-auto bg-gradient-to-r from-vibrant-teal/5 to-rich-purple/5 rounded-2xl p-8 border border-vibrant-teal/20"
        >
          <div className="text-center">
            <h3 className="text-2xl font-bold text-deep-navy mb-4">
              Consistent Outperformance Across Market Conditions
            </h3>
            <p className="text-neutral-700 leading-relaxed max-w-none mx-auto whitespace-nowrap">
              The optimizer doesn't just adjust risk to achieve higher returns, it improves the efficiency 
              of portfolio construction itself.
            </p>
          </div>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <div className="px-6 py-3 bg-white rounded-lg shadow-sm">
              <p className="text-sm text-neutral-600 mb-1">Backtest Period</p>
              <p className="text-lg font-bold text-deep-navy">10 Years</p>
            </div>
            <div className="px-6 py-3 bg-white rounded-lg shadow-sm">
              <p className="text-sm text-neutral-600 mb-1">Initial Capital</p>
              <p className="text-lg font-bold text-deep-navy">$100,000</p>
            </div>
            <div className="px-6 py-3 bg-white rounded-lg shadow-sm">
              <p className="text-sm text-neutral-600 mb-1">Rebalancing</p>
              <p className="text-lg font-bold text-deep-navy">Weekly</p>
            </div>
            <div className="px-6 py-3 bg-white rounded-lg shadow-sm">
              <p className="text-sm text-neutral-600 mb-1">Objective</p>
              <p className="text-lg font-bold text-deep-navy">Max Sharpe Ratio</p>
            </div>
          </div>
        </motion.div>

        {/* Methodology line + backtest disclaimer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="max-w-5xl mx-auto mt-12 text-center"
        >
          <p className="text-xs text-neutral-500">
            10-year walk-forward backtest · $100,000 initial capital · weekly rebalance ·
            max-Sharpe objective · 4% risk-free rate · 525 weeks analyzed.
          </p>
          <p className="text-[11px] leading-relaxed text-neutral-400 mt-3 italic">
            Hypothetical backtested results. Backtested performance is hypothetical, does not reflect
            actual trading, and is not indicative of future results. Live results reflect a limited
            period. Capital is at risk.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
'use client';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Clock, TrendingUp, BarChart3, CheckCircle, X } from 'lucide-react';

const workflowComparison = [
  {
    task: 'Portfolio Construction',
    without: {
      time: '8 hours',
      method: 'Manual spreadsheets and static model portfolios',
      icon: X,
    },
    withZeton: {
      time: '2 hours',
      method: 'Systematic optimization with defined objectives',
      icon: CheckCircle,
    },
  },
  {
    task: 'Strategy Backtesting',
    without: {
      time: 'Not done',
      method: 'Limited historical analysis due to tool complexity',
      icon: X,
    },
    withZeton: {
      time: '30 minutes',
      method: 'Multi-year backtests with comprehensive metrics',
      icon: CheckCircle,
    },
  },
  {
    task: 'Risk Analysis',
    without: {
      time: '4 hours',
      method: 'Fragmented tools requiring manual data aggregation',
      icon: X,
    },
    withZeton: {
      time: '45 minutes',
      method: 'Integrated analytics with real-time calculations',
      icon: CheckCircle,
    },
  },
  {
    task: 'Portfolio Monitoring',
    without: {
      time: 'Quarterly',
      method: 'Manual drift checks during review periods',
      icon: X,
    },
    withZeton: {
      time: 'Daily (Automated)',
      method: 'Continuous monitoring with proactive alerts',
      icon: CheckCircle,
    },
  },
  {
    task: 'Rebalance Planning',
    without: {
      time: '3 hours',
      method: 'Manual calculations across multiple accounts',
      icon: X,
    },
    withZeton: {
      time: '1 hour',
      method: 'Automated rebalance recommendations with execution planning',
      icon: CheckCircle,
    },
  },
];

export const ROICalculator = () => {
  return (
    <section className="bg-white py-10">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-deep-navy mb-3">
            Your Workflow, Transformed
          </h2>
          <p className="text-deep-navy text-base max-w-2xl mx-auto">
            See how Zeton streamlines portfolio management tasks, giving you more time for 
            what matters most: client relationships and strategic decisions.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* Header Row */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="text-center">
              <h3 className="text-lg font-bold text-deep-navy">Workflow Task</h3>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-bold text-deep-navy">Without Zeton</h3>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-bold text-vibrant-teal">With Zeton</h3>
            </div>
          </div>

          {/* Comparison Rows */}
          <div className="space-y-4">
            {workflowComparison.map((item, index) => {
            const WithoutIcon = item.without.icon;
            const WithIcon = item.withZeton.icon;

            return (
              <motion.div
                key={item.task}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="bg-deep-navy/10 border-deep-navy/20 backdrop-blur-sm hover:bg-deep-navy/15 transition-all">
                  <CardContent className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
                      <div className="text-center md:text-center">
                        <h4 className="text-lg font-bold text-deep-navy mb-1">{item.task}</h4>
                      </div>

                      <div className="text-center">
                        <div className="flex items-center justify-center gap-2 mb-2">
                          <WithoutIcon className="text-red-400" size={20} strokeWidth={2} />
                          <span className="text-base font-semibold text-deep-navy">{item.without.time}</span>
                        </div>
                        <p className="text-md text-deep-navy">{item.without.method}</p>
                      </div>

                      <div className="text-center">
                        <div className="flex items-center justify-center gap-2 mb-2">
                          <WithIcon className="text-vibrant-teal" size={20} strokeWidth={2} />
                          <span className="text-base font-semibold text-vibrant-teal">{item.withZeton.time}</span>
                        </div>
                        <p className="text-md text-deep-navy">{item.withZeton.method}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
          </div>

          {/* Summary Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            <Card className="bg-vibrant-teal border-vibrant-teal">
              <CardContent className="p-6 text-center">
                <Clock className="w-10 h-10 text-deep-navy mx-auto mb-3" />
                <div className="text-4xl font-bold text-deep-navy mb-2">15+</div>
                <p className="text-deep-navy text-md">Hours Saved Weekly</p>
              </CardContent>
            </Card>

            <Card className="bg-deep-navy/10 border-deep-navy/20 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <TrendingUp className="w-10 h-10 text-vibrant-teal mx-auto mb-3" />
                <div className="text-4xl font-bold text-deep-navy mb-2">3x</div>
                <p className="text-deep-navy text-md">More Systematic Strategies</p>
              </CardContent>
            </Card>

            <Card className="bg-deep-navy/10 border-deep-navy/20 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <BarChart3 className="w-10 h-10 text-vibrant-teal mx-auto mb-3" />
                <div className="text-4xl font-bold text-deep-navy mb-2">Daily</div>
                <p className="text-deep-navy text-md">Automated Monitoring</p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Disclaimer */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            className="text-center text-md text-deep-navy mt-8 max-w-3xl mx-auto"
          >
            Time estimates based on typical advisor workflows.
          </motion.p>
        </div>
      </div>
    </section>
  );
};
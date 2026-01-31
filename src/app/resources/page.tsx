'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileText, BookOpen, Video, Download } from 'lucide-react';

const resources = [
  {
    category: 'White Papers',
    icon: FileText,
    items: [
      { title: 'The Case for Formal Verification in Finance', type: 'PDF' },
      { title: 'Reducing Portfolio Management Costs by 60%', type: 'PDF' },
      { title: 'AI-Powered Portfolio Construction: A Technical Overview', type: 'PDF' },
    ],
  },
  {
    category: 'Case Studies',
    icon: BookOpen,
    items: [
      { title: 'How a $2B Hedge Fund Cut Costs by 65%', type: 'PDF' },
      { title: 'Long-Only Manager Achieves 20x Faster Deployment', type: 'PDF' },
    ],
  },
  {
    category: 'Videos',
    icon: Video,
    items: [
      { title: 'Zeton Platform Demo (2 minutes)', type: 'Video' },
      { title: 'Introduction to Formal Verification', type: 'Video' },
    ],
  },
];

export default function ResourcesPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-b from-deep-navy to-black">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
              Resources
            </h1>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Learn more about Zeton and the future of portfolio management.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {resources.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <Card className="border-neutral-200 h-full">
                    <CardHeader>
                      <div className="flex items-center gap-3 mb-2">
                        <IconComponent className="w-8 h-8 text-vibrant-teal" strokeWidth={1.5} />
                        <CardTitle className="text-2xl text-deep-navy">{category.category}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-4">
                        {category.items.map((item, idx) => (
                          <li key={idx} className="flex items-start justify-between gap-4 pb-4 border-b border-neutral-100 last:border-0">
                            <div>
                              <p className="font-semibold text-deep-navy text-sm mb-1">{item.title}</p>
                              <p className="text-xs text-neutral-500">{item.type}</p>
                            </div>
                            <Button size="sm" variant="outline" className="flex-shrink-0">
                              <Download className="w-4 h-4" />
                            </Button>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
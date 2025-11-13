"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Zap, Target, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ExecutionIntelligence() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const features = [
    {
      icon: Target,
      title: "Minimal Market Impact",
      description: "Execute large orders without moving the market against you",
      metric: "0.2-0.7 BPS",
    },
    {
      icon: Activity,
      title: "Real-Time Adaptation",
      description: "AI adjusts strategy based on live market conditions",
      metric: "< 100ms",
    },
    {
      icon: Zap,
      title: "Superior Performance",
      description: "Consistently outperforms traditional VWAP execution",
      metric: "88% Win Rate",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="section-padding relative overflow-hidden bg-brand-navy-light"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-64 h-64 bg-brand-purple/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 -right-20 w-64 h-64 bg-brand-cyan/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "1s" }} />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="inline-flex items-center space-x-2 mb-4">
              <Zap className="w-6 h-6 text-brand-purple" />
              <span className="text-brand-purple font-semibold uppercase text-sm tracking-wider">
                Execution Intelligence
              </span>
            </div>

            <h2 className="heading-lg mb-6 text-white">
              Execute with{" "}
              <span className="text-gradient">Unmatched Precision</span>.
            </h2>

            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              Our Execution Intelligence, powered by the ZWAP strategy, executes
              trades with surgical precision. By predicting market impact and
              adapting in real-time, ZWAP ensures you get the best possible
              price, every time.
            </p>

            {/* Key Benefits */}
            <div className="space-y-6 mb-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={index}
                    className={`transition-all duration-1000 ${
                      isVisible
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 -translate-x-10"
                    }`}
                    style={{ transitionDelay: `${(index + 1) * 200}ms` }}
                  >
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-purple/20 to-brand-cyan/20 flex items-center justify-center flex-shrink-0 border border-white/10">
                        <Icon className="w-6 h-6 text-brand-cyan" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="text-white font-semibold">
                            {feature.title}
                          </h4>
                          <span className="text-brand-cyan font-bold text-sm">
                            {feature.metric}
                          </span>
                        </div>
                        <p className="text-gray-400 text-sm">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA */}
            <Link href="/technology">
              <Button size="lg" variant="outline" className="group">
                Learn About Our Technology
                <Zap className="ml-2 w-5 h-5 group-hover:text-brand-cyan transition-colors" />
              </Button>
            </Link>
          </div>

          {/* Right: Visual Representation */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            <div className="glass rounded-2xl p-8">
              {/* ZWAP Process Diagram */}
              <h3 className="text-xl font-bold text-white mb-6 text-center">
                ZWAP Execution Process
              </h3>

              <div className="space-y-4">
                {/* Step 1 */}
                <div className="glass rounded-xl p-4 border-l-4 border-brand-purple">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-full bg-brand-purple flex items-center justify-center font-bold text-sm">
                      1
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-sm">
                        Regime Classification
                      </h4>
                      <p className="text-gray-400 text-xs">
                        Identify current market conditions
                      </p>
                    </div>
                  </div>
                </div>

                {/* Arrow */}
                <div className="flex justify-center">
                  <div className="w-px h-6 bg-gradient-to-b from-brand-purple to-brand-cyan" />
                </div>

                {/* Step 2 */}
                <div className="glass rounded-xl p-4 border-l-4 border-brand-cyan">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-full bg-brand-cyan flex items-center justify-center font-bold text-sm">
                      2
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-sm">
                        Liquidity Assessment
                      </h4>
                      <p className="text-gray-400 text-xs">
                        Analyze available market depth
                      </p>
                    </div>
                  </div>
                </div>

                {/* Arrow */}
                <div className="flex justify-center">
                  <div className="w-px h-6 bg-gradient-to-b from-brand-cyan to-brand-purple" />
                </div>

                {/* Step 3 */}
                <div className="glass rounded-xl p-4 border-l-4 border-brand-purple">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-full bg-brand-purple flex items-center justify-center font-bold text-sm">
                      3
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-sm">
                        ML Price Prediction
                      </h4>
                      <p className="text-gray-400 text-xs">
                        Forecast optimal execution timing
                      </p>
                    </div>
                  </div>
                </div>

                {/* Arrow */}
                <div className="flex justify-center">
                  <div className="w-px h-6 bg-gradient-to-b from-brand-purple to-brand-cyan" />
                </div>

                {/* Step 4 */}
                <div className="glass rounded-xl p-4 border-l-4 border-brand-cyan">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-full bg-brand-cyan flex items-center justify-center font-bold text-sm">
                      4
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-sm">
                        Feedback Learning
                      </h4>
                      <p className="text-gray-400 text-xs">
                        Continuously improve strategy
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
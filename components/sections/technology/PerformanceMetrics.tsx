"use client";

import { useEffect, useRef, useState } from "react";
import { TrendingUp, Zap, Leaf } from "lucide-react";

export default function PerformanceMetrics() {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedValues, setAnimatedValues] = useState({
    winRate: 0,
    speed: 0,
    efficiency: 0,
  });
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

  // Animate numbers on visibility
  useEffect(() => {
    if (isVisible) {
      const duration = 2000;
      const steps = 60;
      const stepDuration = duration / steps;

      let currentStep = 0;
      const interval = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;

        setAnimatedValues({
          winRate: Math.floor(88 * progress),
          speed: Math.floor(10 * progress),
          efficiency: Math.floor(60 * progress),
        });

        if (currentStep >= steps) {
          clearInterval(interval);
        }
      }, stepDuration);

      return () => clearInterval(interval);
    }
  }, [isVisible]);

  return (
    <section
      ref={sectionRef}
      className="section-padding relative overflow-hidden bg-brand-navy"
    >
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-purple/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-cyan/10 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="heading-lg mb-6 text-white">
            <span className="text-gradient">Proven Performance</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We believe in transparency and data-driven results. Our technology has
            been rigorously benchmarked to prove its superiority.
          </p>
        </div>

        {/* Animated Chart Section */}
        <div
          className={`max-w-5xl mx-auto mb-16 transition-all duration-1000 ${
            isVisible
              ? "opacity-100 scale-100"
              : "opacity-0 scale-95"
          }`}
        >
          <div className="glass rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">
              The ZWAP Advantage
            </h3>

            {/* Chart - Visual comparison */}
            <div className="space-y-6 mb-8">
              {/* ZWAP Performance */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-brand-cyan font-semibold">
                    ZWAP Execution
                  </span>
                  <span className="text-brand-cyan font-bold text-xl">
                    {animatedValues.winRate}% Win Rate
                  </span>
                </div>
                <div className="h-12 bg-white/5 rounded-full overflow-hidden relative">
                  <div
                    className="h-full bg-gradient-to-r from-brand-purple to-brand-cyan rounded-full transition-all duration-1000 flex items-center justify-end px-4"
                    style={{ width: `${animatedValues.winRate}%` }}
                  >
                    <TrendingUp className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>

              {/* Traditional VWAP */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-gray-400 font-semibold">
                    Traditional VWAP
                  </span>
                  <span className="text-gray-400 font-bold text-xl">
                    12% Win Rate
                  </span>
                </div>
                <div className="h-12 bg-white/5 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gray-600 rounded-full transition-all duration-1000"
                    style={{ width: "12%" }}
                  />
                </div>
              </div>
            </div>

            {/* Key insight */}
            <div className="bg-gradient-to-r from-brand-purple/10 to-brand-cyan/10 rounded-xl p-6 border border-brand-cyan/30">
              <p className="text-white text-center">
                <span className="font-bold text-gradient text-xl">
                  7.3x better
                </span>{" "}
                performance than traditional execution methods
              </p>
            </div>
          </div>
        </div>

        {/* Tangible Gains - 3 Key Metrics */}
        <div
          className={`max-w-5xl mx-auto transition-all duration-1000 delay-300 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <h3 className="text-2xl font-bold text-white text-center mb-8">
            Tangible Gains
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Speed */}
            <div className="glass rounded-2xl p-8 text-center hover:bg-white/10 transition-all">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-purple/20 to-brand-cyan/20 mb-4">
                <Zap className="w-8 h-8 text-brand-cyan" />
              </div>
              <div className="text-5xl font-bold text-gradient mb-2">
                {animatedValues.speed}x
              </div>
              <div className="text-gray-400 text-sm">
                Faster than traditional systems
              </div>
            </div>

            {/* Win Rate */}
            <div className="glass rounded-2xl p-8 text-center hover:bg-white/10 transition-all">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-purple/20 to-brand-cyan/20 mb-4">
                <TrendingUp className="w-8 h-8 text-brand-purple" />
              </div>
              <div className="text-5xl font-bold text-gradient mb-2">
                {animatedValues.winRate}%
              </div>
              <div className="text-gray-400 text-sm">
                Win rate vs. VWAP baseline
              </div>
            </div>

            {/* Energy Efficiency */}
            <div className="glass rounded-2xl p-8 text-center hover:bg-white/10 transition-all">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-purple/20 to-brand-cyan/20 mb-4">
                <Leaf className="w-8 h-8 text-brand-cyan" />
              </div>
              <div className="text-5xl font-bold text-gradient mb-2">
                {animatedValues.efficiency}%
              </div>
              <div className="text-gray-400 text-sm">
                More energy efficient
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
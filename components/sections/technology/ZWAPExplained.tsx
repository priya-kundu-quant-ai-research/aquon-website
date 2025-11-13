"use client";

import { useEffect, useRef, useState } from "react";
import { Zap } from "lucide-react";

export default function ZWAPExplained() {
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

  return (
    <section
      ref={sectionRef}
      className="py-20 relative overflow-hidden bg-brand-navy-light"
    >
      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div
          className={`text-center mb-12 transition-all duration-1000 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-flex items-center space-x-2 mb-4">
            <Zap className="w-6 h-6 text-brand-purple" />
            <span className="text-brand-purple font-semibold uppercase text-sm tracking-wider">
              Execution Strategy
            </span>
          </div>
          <h2 className="heading-lg mb-6 text-white">
            Inside <span className="text-gradient">ZWAP</span>: A New Paradigm in
            Trade Execution
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            The ZWAP (Zero-Impact Weighted Average Price) strategy is our
            proprietary execution algorithm that leverages AI to predict market
            impact and execute trades for optimal pricing.
          </p>
        </div>

        {/* ZWAP Process - Simplified */}
        <div
          className={`max-w-4xl mx-auto transition-all duration-1000 delay-300 ${
            isVisible
              ? "opacity-100 scale-100"
              : "opacity-0 scale-95"
          }`}
        >
          <div className="glass rounded-2xl p-8">
            <div className="flex items-center justify-center space-x-4 mb-8">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-brand-purple to-brand-cyan flex items-center justify-center mb-2 mx-auto">
                  <span className="text-white font-bold">1</span>
                </div>
                <p className="text-gray-300 text-sm">Classify</p>
              </div>
              <div className="text-brand-cyan text-2xl">→</div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-brand-cyan to-brand-purple flex items-center justify-center mb-2 mx-auto">
                  <span className="text-white font-bold">2</span>
                </div>
                <p className="text-gray-300 text-sm">Assess</p>
              </div>
              <div className="text-brand-cyan text-2xl">→</div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-brand-purple to-brand-cyan flex items-center justify-center mb-2 mx-auto">
                  <span className="text-white font-bold">3</span>
                </div>
                <p className="text-gray-300 text-sm">Predict</p>
              </div>
              <div className="text-brand-cyan text-2xl">→</div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-brand-cyan to-brand-purple flex items-center justify-center mb-2 mx-auto">
                  <span className="text-white font-bold">4</span>
                </div>
                <p className="text-gray-300 text-sm">Learn</p>
              </div>
              <div className="text-brand-cyan text-2xl">↻</div>
            </div>

            <p className="text-center text-gray-300 leading-relaxed">
              ZWAP uses a four-step continuous optimization loop: classifying market
              regimes, assessing liquidity, predicting optimal execution timing
              with machine learning, and learning from each trade to improve
              future performance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
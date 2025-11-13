"use client";

import { useEffect, useRef, useState } from "react";
import { Brain, TrendingUp, Shield, Target } from "lucide-react";

export default function PortfolioIntelligence() {
  const [isVisible, setIsVisible] = useState(false);
  const [riskLevel, setRiskLevel] = useState(50);
  const [allocation, setAllocation] = useState({
    stocks: 60,
    bonds: 30,
    realestate: 5,
    commodities: 5,
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

  // Update allocation based on risk level
  useEffect(() => {
    if (riskLevel < 33) {
      // Conservative
      setAllocation({ stocks: 30, bonds: 50, realestate: 10, commodities: 10 });
    } else if (riskLevel < 66) {
      // Moderate
      setAllocation({ stocks: 60, bonds: 30, realestate: 5, commodities: 5 });
    } else {
      // Aggressive
      setAllocation({ stocks: 80, bonds: 10, realestate: 5, commodities: 5 });
    }
  }, [riskLevel]);

  const features = [
    {
      icon: Brain,
      title: "AI-Powered Analysis",
      description: "Advanced algorithms analyze thousands of assets",
    },
    {
      icon: Target,
      title: "Goal-Based Planning",
      description: "Portfolios aligned with your financial objectives",
    },
    {
      icon: Shield,
      title: "Risk Management",
      description: "Built-in controls to protect your investments",
    },
    {
      icon: TrendingUp,
      title: "Performance Tracking",
      description: "Real-time monitoring and optimization",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="section-padding relative overflow-hidden bg-brand-navy-light"
    >
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
              <Brain className="w-6 h-6 text-brand-purple" />
              <span className="text-brand-purple font-semibold uppercase text-sm tracking-wider">
                Portfolio Intelligence
              </span>
            </div>

            <h2 className="heading-lg mb-6 text-white">
              Build Your <span className="text-gradient">Optimal Portfolio</span>{" "}
              in Minutes
            </h2>

            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              Forget guesswork and manual calculations. With Zeton's Portfolio
              Intelligence, you can define your investment goals, risk tolerance,
              and asset preferences, and our AI will construct a diversified,
              optimized portfolio for you.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={index}
                    className="glass rounded-xl p-4 hover:bg-white/10 transition-all"
                  >
                    <Icon className="w-6 h-6 text-brand-cyan mb-2" />
                    <h4 className="text-white font-semibold text-sm mb-1">
                      {feature.title}
                    </h4>
                    <p className="text-gray-400 text-xs leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: Interactive Demo */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            <div className="glass rounded-2xl p-8">
              <h3 className="text-xl font-bold text-white mb-6">
                Try the Simulator
              </h3>

              {/* Risk Tolerance Slider */}
              <div className="mb-8">
                <label className="block text-gray-300 mb-3 font-medium">
                  Risk Tolerance
                </label>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={riskLevel}
                  onChange={(e) => setRiskLevel(Number(e.target.value))}
                  className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer"
                  style={{
                    background: `linear-gradient(to right, #8B5CF6 0%, #06B6D4 ${riskLevel}%, rgba(255,255,255,0.1) ${riskLevel}%)`,
                  }}
                />
                <div className="flex justify-between mt-2 text-xs text-gray-400">
                  <span>Conservative</span>
                  <span>Moderate</span>
                  <span>Aggressive</span>
                </div>
              </div>

              {/* Portfolio Allocation */}
              <div className="space-y-4">
                <h4 className="text-gray-300 font-medium mb-4">
                  Recommended Allocation
                </h4>

                {/* Stocks */}
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-300 text-sm">Stocks</span>
                    <span className="text-brand-purple font-semibold">
                      {allocation.stocks}%
                    </span>
                  </div>
                  <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-brand-purple rounded-full transition-all duration-500"
                      style={{ width: `${allocation.stocks}%` }}
                    />
                  </div>
                </div>

                {/* Bonds */}
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-300 text-sm">Bonds</span>
                    <span className="text-brand-cyan font-semibold">
                      {allocation.bonds}%
                    </span>
                  </div>
                  <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-brand-cyan rounded-full transition-all duration-500"
                      style={{ width: `${allocation.bonds}%` }}
                    />
                  </div>
                </div>

                {/* Real Estate */}
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-300 text-sm">Real Estate</span>
                    <span className="text-green-400 font-semibold">
                      {allocation.realestate}%
                    </span>
                  </div>
                  <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-green-400 rounded-full transition-all duration-500"
                      style={{ width: `${allocation.realestate}%` }}
                    />
                  </div>
                </div>

                {/* Commodities */}
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-300 text-sm">Commodities</span>
                    <span className="text-yellow-400 font-semibold">
                      {allocation.commodities}%
                    </span>
                  </div>
                  <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-yellow-400 rounded-full transition-all duration-500"
                      style={{ width: `${allocation.commodities}%` }}
                    />
                  </div>
                </div>
              </div>

              {/* Expected Returns */}
              <div className="mt-8 glass rounded-xl p-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300 text-sm">
                    Expected Annual Return
                  </span>
                  <span className="text-2xl font-bold text-gradient">
                    {riskLevel < 33 ? "5-7%" : riskLevel < 66 ? "8-10%" : "12-15%"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

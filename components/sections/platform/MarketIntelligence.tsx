"use client";

import { useEffect, useRef, useState } from "react";
import { Globe, Bell, TrendingUp, AlertTriangle } from "lucide-react";

const marketEvents = [
  {
    region: "Americas",
    event: "Fed Rate Decision",
    impact: "High",
    color: "cyan",
  },
  {
    region: "Europe",
    event: "ECB Policy Update",
    impact: "Medium",
    color: "purple",
  },
  {
    region: "Asia",
    event: "China GDP Report",
    impact: "High",
    color: "cyan",
  },
];

const features = [
  {
    icon: TrendingUp,
    title: "Real-Time Monitoring",
    description: "Track global markets, economic indicators, and news sentiment 24/7",
  },
  {
    icon: AlertTriangle,
    title: "Black Swan Detection",
    description: "AI-powered early warning system for rare market events",
  },
  {
    icon: Bell,
    title: "Actionable Alerts",
    description: "Receive personalized recommendations for portfolio adjustments",
  },
];

export default function MarketIntelligence() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeRegion, setActiveRegion] = useState(0);
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

  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        setActiveRegion((prev) => (prev + 1) % marketEvents.length);
      }, 2500);
      return () => clearInterval(interval);
    }
  }, [isVisible]);

  return (
    <section
      ref={sectionRef}
      className="section-padding relative overflow-hidden bg-brand-navy"
    >
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Compact Visualization */}
          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            {/* Globe Visualization */}
            <div className="glass rounded-2xl p-8 mb-6">
              <div className="aspect-square max-w-sm mx-auto bg-gradient-to-br from-brand-purple/10 to-brand-cyan/10 rounded-xl flex items-center justify-center relative overflow-hidden border border-white/10">
                {/* Animated globe icon */}
                <Globe className="w-32 h-32 text-brand-cyan/30 animate-pulse-slow" />
                
                {/* Animated data points */}
                <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-brand-cyan rounded-full animate-pulse" />
                <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-brand-purple rounded-full animate-pulse" style={{ animationDelay: "0.5s" }} />
                <div className="absolute bottom-1/3 left-1/2 w-3 h-3 bg-brand-cyan rounded-full animate-pulse" style={{ animationDelay: "1s" }} />
                
                {/* Connecting lines */}
                <svg className="absolute inset-0 w-full h-full">
                  <line
                    x1="25%"
                    y1="25%"
                    x2="66%"
                    y2="33%"
                    stroke="rgba(6, 182, 212, 0.3)"
                    strokeWidth="1"
                    strokeDasharray="5,5"
                  />
                  <line
                    x1="66%"
                    y1="33%"
                    x2="50%"
                    y2="66%"
                    stroke="rgba(139, 92, 246, 0.3)"
                    strokeWidth="1"
                    strokeDasharray="5,5"
                  />
                </svg>
              </div>
            </div>

            {/* Market Events - Horizontal Grid */}
            <div className="grid grid-cols-3 gap-3">
              {marketEvents.map((event, index) => (
                <div
                  key={index}
                  className={`glass rounded-xl p-4 transition-all duration-500 text-center ${
                    activeRegion === index
                      ? "border-2 border-brand-cyan shadow-lg shadow-brand-cyan/20"
                      : "border border-white/10"
                  }`}
                >
                  <div className="flex justify-center mb-2">
                    <div
                      className={`w-2 h-2 rounded-full ${
                        event.color === "cyan"
                          ? "bg-brand-cyan"
                          : "bg-brand-purple"
                      } animate-pulse`}
                    />
                  </div>
                  <p className="text-white font-semibold text-sm mb-1">
                    {event.region}
                  </p>
                  <p className="text-gray-400 text-xs mb-2">{event.event}</p>
                  <span
                    className={`text-xs font-semibold px-2 py-1 rounded-full ${
                      event.impact === "High"
                        ? "bg-red-500/20 text-red-400"
                        : "bg-yellow-500/20 text-yellow-400"
                    }`}
                  >
                    {event.impact}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Content */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            <div className="inline-flex items-center space-x-2 mb-4">
              <Globe className="w-6 h-6 text-brand-cyan" />
              <span className="text-brand-cyan font-semibold uppercase text-sm tracking-wider">
                Market Intelligence
              </span>
            </div>

            <h2 className="heading-lg mb-6 text-white">
              Stay Ahead of the Market,{" "}
              <span className="text-gradient">Always</span>.
            </h2>

            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              In today's volatile markets, information is everything. Zeton's
              Market Intelligence provides a constant stream of insights,
              monitoring macroeconomic trends, news sentiment, and potential black
              swan events.
            </p>

            {/* Features */}
            <div className="space-y-4">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={index}
                    className="flex items-start space-x-3 glass rounded-xl p-4"
                  >
                    <div className="w-10 h-10 rounded-xl bg-brand-cyan/20 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-brand-cyan" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">
                        {feature.title}
                      </h4>
                      <p className="text-gray-400 text-sm">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
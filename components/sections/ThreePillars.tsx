"use client";

import { useEffect, useRef, useState } from "react";
import { Brain, Globe, Zap } from "lucide-react";

const pillars = [
  {
    icon: Brain,
    title: "Portfolio Intelligence",
    description:
      "AI-driven portfolio optimization tailored to your exact needs. Define your risk, and Zeton will construct the optimal portfolio.",
    color: "purple",
  },
  {
    icon: Globe,
    title: "Market Intelligence",
    description:
      "24/7 market awareness. Zeton monitors global and local market shifts, news, and events to provide you with real-time insights and rebalancing recommendations.",
    color: "cyan",
  },
  {
    icon: Zap,
    title: "Execution Intelligence",
    description:
      "Our proprietary ZWAP execution strategy ensures your trades are executed at the most optimal price, minimizing market impact and maximizing returns.",
    color: "purple",
  },
];

export default function ThreePillars() {
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
      className="section-padding relative overflow-hidden bg-brand-navy-light"
    >
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-purple rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-cyan rounded-full blur-3xl" />
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
            The Three Pillars of <span className="text-gradient">Zeton</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A comprehensive platform that covers every aspect of modern wealth
            management.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <div
                key={index}
                className={`transition-all duration-1000 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="glass glass-hover rounded-2xl p-8 h-full group cursor-pointer">
                  {/* Icon */}
                  <div
                    className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6 transition-all duration-300 ${
                      pillar.color === "purple"
                        ? "bg-brand-purple/20 group-hover:bg-brand-purple/30"
                        : "bg-brand-cyan/20 group-hover:bg-brand-cyan/30"
                    }`}
                  >
                    <Icon
                      className={`w-8 h-8 ${
                        pillar.color === "purple"
                          ? "text-brand-purple"
                          : "text-brand-cyan"
                      }`}
                    />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-gradient transition-all">
                    {pillar.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {pillar.description}
                  </p>

                  {/* Hover indicator */}
                  <div
                    className={`mt-6 h-1 w-0 group-hover:w-full transition-all duration-500 rounded-full ${
                      pillar.color === "purple"
                        ? "bg-brand-purple"
                        : "bg-brand-cyan"
                    }`}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Connection Lines - Decorative */}
        <div className="hidden lg:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-px">
          <div className="relative w-full h-full">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-brand-purple/30 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}

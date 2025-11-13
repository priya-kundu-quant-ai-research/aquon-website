"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Create AI-Optimized Portfolio",
    description: "Define your goals and let AI build your perfect portfolio",
  },
  {
    number: "02",
    title: "Execute ZWAP Intelligent Routing",
    description: "Trade with precision using our proprietary algorithm",
  },
  {
    number: "03",
    title: "Monitor 24/7 Market Awareness",
    description: "Stay informed with real-time global market intelligence",
  },
  {
    number: "04",
    title: "Adaptive Rebalancing",
    description: "Automatically adjust to market changes and opportunities",
  },
];

export default function WorkflowDiagram() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
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
        setActiveStep((prev) => (prev + 1) % steps.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isVisible]);

  return (
    <section
      ref={sectionRef}
      className="section-padding relative overflow-hidden bg-gradient-to-b from-brand-navy to-brand-navy-light"
    >
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
            Your <span className="text-gradient">End-to-End</span> Trading
            Co-Pilot
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Zeton provides a seamless, integrated workflow for modern wealth
            management. From ideation to execution and beyond, our platform is
            designed to be your trusted partner in the market.
          </p>
        </div>

        {/* Workflow Steps */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`transition-all duration-1000 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div
                  className={`relative glass rounded-2xl p-6 h-full transition-all duration-500 ${
                    activeStep === index
                      ? "border-2 border-brand-cyan shadow-2xl shadow-brand-cyan/20"
                      : "border border-white/10"
                  }`}
                >
                  {/* Step Number */}
                  <div
                    className={`inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4 font-bold transition-all duration-500 ${
                      activeStep === index
                        ? "bg-gradient-to-br from-brand-purple to-brand-cyan text-white scale-110"
                        : "bg-white/5 text-gray-400"
                    }`}
                  >
                    {step.number}
                  </div>

                  {/* Title */}
                  <h3
                    className={`text-lg font-bold mb-3 transition-all duration-500 ${
                      activeStep === index ? "text-gradient" : "text-white"
                    }`}
                  >
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {step.description}
                  </p>

                  {/* Active Indicator */}
                  {activeStep === index && (
                    <div className="absolute -top-2 -right-2">
                      <div className="relative">
                        <div className="absolute inset-0 bg-brand-cyan rounded-full blur-md animate-pulse" />
                        <CheckCircle2 className="relative w-6 h-6 text-brand-cyan" />
                      </div>
                    </div>
                  )}

                  {/* Arrow - Hidden on last item */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-20">
                      <ArrowRight
                        className={`w-6 h-6 transition-all duration-500 ${
                          activeStep === index
                            ? "text-brand-cyan"
                            : "text-gray-600"
                        }`}
                      />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Progress Bar */}
          <div className="mt-12 max-w-4xl mx-auto">
            <div className="h-2 bg-white/5 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-brand-purple to-brand-cyan transition-all duration-1000 ease-out"
                style={{
                  width: `${((activeStep + 1) / steps.length) * 100}%`,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

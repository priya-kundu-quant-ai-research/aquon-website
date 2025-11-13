"use client";

import { useEffect, useRef, useState } from "react";
import { Code, Cpu, Zap, Leaf, Lock } from "lucide-react";

const metrics = [
  {
    icon: Zap,
    value: "10x",
    label: "Faster Processing",
    description: "Compared to traditional financial computing languages",
    color: "purple",
  },
  {
    icon: Leaf,
    value: "60%",
    label: "Energy Efficient",
    description: "Reduced power consumption versus existing solutions",
    color: "cyan",
  },
];

export default function AquaALXEngine() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeMetric, setActiveMetric] = useState(0);
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
        setActiveMetric((prev) => (prev + 1) % metrics.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isVisible]);

  return (
    <section
      ref={sectionRef}
      className="section-padding relative overflow-hidden bg-gradient-to-b from-brand-navy to-brand-navy-light"
    >
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-purple/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-cyan/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "1.5s" }} />
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
          <div className="inline-flex items-center space-x-2 mb-4">
            <Cpu className="w-6 h-6 text-brand-purple" />
            <span className="text-brand-purple font-semibold uppercase text-sm tracking-wider">
              Proprietary Technology
            </span>
          </div>
          <h2 className="heading-lg mb-6 text-white">
            The Engine of <span className="text-gradient">Zeton</span>: Aqua and
            ALX
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            At the heart of Zeton is our proprietary technology stack: the{" "}
            <span className="text-brand-cyan font-semibold">Aqua</span>{" "}
            programming language and the{" "}
            <span className="text-brand-purple font-semibold">ALX</span>{" "}
            (Accelerated Language eXecutor) compiler. This patented combination
            allows us to achieve unparalleled performance.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Left: Technology Stack */}
          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="glass rounded-2xl p-8 h-full">
              <h3 className="text-xl font-bold text-white mb-6 text-center">
                Technology Stack
              </h3>

              {/* Layer 1: Aqua Language */}
              <div className="mb-4">
                <div className="bg-gradient-to-r from-brand-purple to-brand-purple-dark rounded-xl p-4 mb-2">
                  <div className="flex items-center justify-between">
                    <span className="text-white font-bold">
                      Aqua Language
                    </span>
                    <Code className="w-5 h-5 text-white" />
                  </div>
                  <p className="text-purple-100 text-xs mt-2">
                    High-level programming interface
                  </p>
                </div>
              </div>

              {/* Arrow */}
              <div className="flex justify-center mb-4">
                <div className="w-px h-8 bg-gradient-to-b from-brand-purple to-brand-cyan" />
              </div>

              {/* Layer 2: ALX Compiler */}
              <div className="mb-4">
                <div className="bg-gradient-to-r from-brand-cyan to-brand-cyan-dark rounded-xl p-4 mb-2">
                  <div className="flex items-center justify-between">
                    <span className="text-white font-bold">
                      ALX Compiler
                    </span>
                    <Cpu className="w-5 h-5 text-white" />
                  </div>
                  <p className="text-cyan-100 text-xs mt-2">
                    Advanced optimization & code generation
                  </p>
                </div>
              </div>

              {/* Arrow */}
              <div className="flex justify-center mb-4">
                <div className="w-px h-8 bg-gradient-to-b from-brand-cyan to-brand-purple" />
              </div>

              {/* Layer 3: Execution */}
              <div>
                <div className="bg-gradient-to-r from-brand-purple-dark to-brand-cyan-dark rounded-xl p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-white font-bold">
                      Optimized Execution
                    </span>
                    <Zap className="w-5 h-5 text-white" />
                  </div>
                  <p className="text-gray-100 text-xs mt-2">
                    High-performance trading algorithms
                  </p>
                </div>
              </div>

              {/* Patent Badge */}
              <div className="mt-6 glass rounded-xl p-4 text-center border-2 border-brand-cyan/30">
                <div className="flex items-center justify-center space-x-2 mb-1">
                  <Lock className="w-4 h-4 text-brand-cyan" />
                  <div className="text-brand-cyan text-sm font-semibold">
                    PATENTED TECHNOLOGY
                  </div>
                </div>
                <p className="text-gray-400 text-xs">
                  Protected intellectual property powering Zeton
                </p>
              </div>
            </div>
          </div>

          {/* Right: Content & Features */}
          <div
            className={`space-y-6 transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            {/* Description */}
            <div className="glass rounded-2xl p-8">
              <p className="text-gray-300 leading-relaxed mb-6">
                Our proprietary stack combines the expressiveness of modern
                programming languages with the raw performance needed for
                real-time financial computing. Aqua provides an intuitive syntax
                for complex trading algorithms, while ALX compiles them into
                highly optimized machine code.
              </p>

              {/* Features list */}
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-brand-cyan rounded-full mt-2" />
                  <p className="text-gray-300 text-sm">
                    <span className="text-white font-semibold">
                      Type-Safe:
                    </span>{" "}
                    Catch errors at compile time
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-brand-purple rounded-full mt-2" />
                  <p className="text-gray-300 text-sm">
                    <span className="text-white font-semibold">
                      Optimized:
                    </span>{" "}
                    ALX compiler generates highly efficient machine code
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-brand-cyan rounded-full mt-2" />
                  <p className="text-gray-300 text-sm">
                    <span className="text-white font-semibold">
                      Parallel:
                    </span>{" "}
                    Built-in support for concurrent execution
                  </p>
                </div>
              </div>
            </div>

            {/* Performance Metrics - 2 boxes side by side */}
            <div className="grid grid-cols-2 gap-4">
              {metrics.map((metric, index) => {
                const Icon = metric.icon;
                return (
                  <div
                    key={index}
                    className={`glass rounded-xl p-6 text-center transition-all duration-500 ${
                      activeMetric === index
                        ? "border-2 border-brand-cyan shadow-xl shadow-brand-cyan/20"
                        : "border border-white/10"
                    }`}
                  >
                    <div
                      className={`inline-flex items-center justify-center w-12 h-12 rounded-xl mb-3 ${
                        metric.color === "purple"
                          ? "bg-brand-purple/20"
                          : "bg-brand-cyan/20"
                      }`}
                    >
                      <Icon
                        className={`w-6 h-6 ${
                          metric.color === "purple"
                            ? "text-brand-purple"
                            : "text-brand-cyan"
                        }`}
                      />
                    </div>
                    <div className="text-3xl font-bold text-gradient mb-1">
                      {metric.value}
                    </div>
                    <h3 className="text-sm font-bold text-white mb-2">
                      {metric.label}
                    </h3>
                    <p className="text-gray-400 text-xs">{metric.description}</p>
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
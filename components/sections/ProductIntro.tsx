"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function ProductIntro() {
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
      className="section-padding relative overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-navy via-brand-navy-light to-brand-navy opacity-50" />

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            <h2 className="heading-lg mb-6 text-white">
              Intelligence on a{" "}
              <span className="text-gradient">Whole New Level</span>.
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              Zeton empowers you to build, manage, and optimize your portfolio
              with institutional-grade AI. Our proprietary technology gives you
              an unprecedented edge in the market, from portfolio creation to
              trade execution.
            </p>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 rounded-full bg-brand-purple/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 rounded-full bg-brand-purple" />
                </div>
                <p className="text-gray-300">
                  <span className="font-semibold text-white">
                    AI-Powered Optimization:
                  </span>{" "}
                  Build portfolios tailored to your exact risk tolerance and
                  financial goals.
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 rounded-full bg-brand-cyan/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 rounded-full bg-brand-cyan" />
                </div>
                <p className="text-gray-300">
                  <span className="font-semibold text-white">
                    Real-Time Market Intelligence:
                  </span>{" "}
                  Stay ahead with 24/7 monitoring of global market shifts and
                  events.
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 rounded-full bg-brand-purple/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 rounded-full bg-brand-purple" />
                </div>
                <p className="text-gray-300">
                  <span className="font-semibold text-white">
                    Optimal Execution:
                  </span>{" "}
                  Execute trades with precision using our proprietary ZWAP
                  algorithm.
                </p>
              </div>
            </div>
          </div>

          {/* Right: Product Screenshot */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 scale-100"
                : "opacity-0 scale-95"
            }`}
          >
            <div className="relative">
              {/* Glow effect behind screenshot */}
              <div className="absolute -inset-4 bg-gradient-to-r from-brand-purple/20 via-brand-cyan/20 to-brand-purple/20 rounded-3xl blur-2xl" />
              
              {/* Screenshot container */}
              <div className="relative glass rounded-2xl p-4 border-2 border-white/10">
                <div className="aspect-video relative rounded-xl overflow-hidden bg-brand-navy-light">
                  <Image
                    src="/images/zeton-ui.png"
                    alt="Zeton Platform Interface"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
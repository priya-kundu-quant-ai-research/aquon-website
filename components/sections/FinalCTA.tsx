"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export default function FinalCTA() {
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
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-navy via-brand-purple/5 to-brand-navy" />
      
      {/* Animated orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-brand-purple/20 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-brand-cyan/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "1s" }} />

      <div className="container-custom relative z-10">
        <div
          className={`glass rounded-3xl p-12 md:p-16 text-center transition-all duration-1000 ${
            isVisible
              ? "opacity-100 scale-100"
              : "opacity-0 scale-95"
          }`}
        >
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-brand-purple to-brand-cyan rounded-2xl mb-8 animate-float">
            <Sparkles className="w-8 h-8 text-white" />
          </div>

          {/* Headline */}
          <h2 className="heading-lg mb-6 text-white">
            Ready to <span className="text-gradient">Trade Smarter</span>?
          </h2>

          {/* Description */}
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10">
            Join the future of wealth management with Zeton. Experience
            institutional-grade AI trading technology designed for everyone.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/company#contact">
              <Button size="lg" className="text-lg font-semibold group">
                Request a Demo
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/platform">
              <Button
                size="lg"
                variant="outline"
                className="text-lg font-semibold"
              >
                Explore the Platform
              </Button>
            </Link>
          </div>

          {/* Trust badge */}
          <div className="mt-10 pt-10 border-t border-white/10">
            <p className="text-gray-400 text-sm mb-4">
              Trusted by researchers and innovators
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8">
              <div className="text-gray-500 text-sm font-medium">
                NYU Research
              </div>
              <div className="w-1 h-1 bg-gray-600 rounded-full" />
              <div className="text-gray-500 text-sm font-medium">
                TAC Awards Winner
              </div>
              <div className="w-1 h-1 bg-gray-600 rounded-full" />
              <div className="text-gray-500 text-sm font-medium">
                NSF SBIR Recognized
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

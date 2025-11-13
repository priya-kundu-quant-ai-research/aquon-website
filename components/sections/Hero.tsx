"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import ParticleField from "@/components/animations/ParticleField";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-navy via-brand-navy to-brand-navy-light" />
      
      {/* Particle Animation */}
      <ParticleField />

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-radial from-brand-purple/10 via-transparent to-transparent opacity-50" />
      <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-brand-navy to-transparent" />

      {/* Content */}
      <div className="relative z-10 container-custom text-center px-4">
        <div
          className={`transition-all duration-1000 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          {/* Main Headline */}
          <h1 className="heading-xl mb-6 text-white">
            The Future of{" "}
            <span className="text-gradient">Trading</span> is Here.
          </h1>

          {/* Sub-headline */}
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Introducing <span className="text-brand-cyan font-semibold">Zeton</span>, 
            your AI-powered wealth management co-pilot.
          </p>

          {/* CTA Button */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <Link href="/company#contact">
              <Button size="lg" className="text-lg font-semibold group">
                Request a Demo
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>

          {/* Trust Indicators */}
          <div
            className={`mt-16 flex flex-wrap justify-center items-center gap-8 transition-all duration-1000 delay-500 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="flex items-center space-x-2 text-gray-400">
              <div className="w-2 h-2 bg-brand-cyan rounded-full animate-pulse" />
              <span className="text-sm">NYU Research</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-400">
              <div className="w-2 h-2 bg-brand-cyan rounded-full animate-pulse" />
              <span className="text-sm">TAC Awards Winner</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-400">
              <div className="w-2 h-2 bg-brand-cyan rounded-full animate-pulse" />
              <span className="text-sm">NSF SBIR Recognized</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-brand-cyan rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}
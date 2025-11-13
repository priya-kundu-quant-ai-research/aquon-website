"use client";

import { useEffect, useRef, useState } from "react";
import { Target } from "lucide-react";

export default function MissionStory() {
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
      className="section-padding relative overflow-hidden bg-gradient-to-b from-brand-navy to-brand-navy-light"
    >
      <div className="container-custom relative z-10">
        {/* Mission Section */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-flex items-center space-x-2 mb-4">
            <Target className="w-6 h-6 text-brand-purple" />
            <span className="text-brand-purple font-semibold uppercase text-sm tracking-wider">
              Our Mission
            </span>
          </div>
          <h2 className="heading-lg mb-8 text-white max-w-4xl mx-auto">
            To democratize access to{" "}
            <span className="text-gradient">institutional-grade AI</span> for
            wealth management, empowering investors of all sizes to achieve their
            financial goals.
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We believe that advanced trading technology shouldn't be exclusive to
            Wall Street. Our mission is to level the playing field by making
            sophisticated AI-powered tools accessible to everyone.
          </p>
        </div>

        {/* Story Section */}
        <div
          className={`text-center transition-all duration-1000 delay-300 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="heading-lg mb-6 text-white">
            From Research to <span className="text-gradient">Revolution</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Aquon AI began as a research project at New York University, with a
            simple goal: to see if we could build a smarter, more efficient way
            to trade. That research led to the development of our patented Aqua
            language and ALX compiler, and the creation of the Zeton Trading
            Co-Pilot. Today, we are a venture-backed startup, driven by a passion
            for innovation and a commitment to our clients.
          </p>
        </div>
      </div>
    </section>
  );
}
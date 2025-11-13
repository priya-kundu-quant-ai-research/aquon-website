"use client";

import { useEffect, useRef, useState } from "react";
import { Rocket, Heart, Lightbulb, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const values = [
  {
    icon: Rocket,
    title: "Innovation First",
    description: "Push boundaries and challenge the status quo",
  },
  {
    icon: Heart,
    title: "Passion Driven",
    description: "Love what you do and do what you love",
  },
  {
    icon: Lightbulb,
    title: "Continuous Learning",
    description: "Grow together through knowledge sharing",
  },
  {
    icon: TrendingUp,
    title: "Impact Focused",
    description: "Build technology that changes lives",
  },
];

export default function Careers() {
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
      id="join"
      ref={sectionRef}
      className="py-20 relative overflow-hidden bg-brand-navy"
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
            <Rocket className="w-6 h-6 text-brand-purple" />
            <span className="text-brand-purple font-semibold uppercase text-sm tracking-wider">
              Join Our Team
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Build the Future of <span className="text-gradient">Finance</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            We are always looking for talented and passionate individuals to join us on our mission. 
            If you're interested in building cutting-edge AI technology that democratizes access to sophisticated trading tools, 
            we would love to hear from you.
          </p>
        </div>

                {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 max-w-6xl mx-auto">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div
                key={index}
                className={`transition-all duration-1000 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="glass rounded-2xl p-6 h-full hover:bg-white/10 transition-all group">
                  <div className="w-12 h-12 rounded-xl bg-brand-purple/20 flex items-center justify-center mb-4 group-hover:bg-brand-cyan/20 transition-all">
                    <Icon className="w-6 h-6 text-brand-purple group-hover:text-brand-cyan transition-colors" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    {value.title}
                  </h3>
                  <p className="text-gray-400 text-sm">{value.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Card */}
        <div
          className={`max-w-3xl mx-auto transition-all duration-1000 delay-300 ${
            isVisible
              ? "opacity-100 scale-100"
              : "opacity-0 scale-95"
          }`}
        >
          <div className="glass rounded-2xl p-8 text-center border border-brand-cyan/30">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact">
                <Button size="lg">
                  Get in Touch
                </Button>
              </a>
              <a href="mailto:careers@aquonai.com">
                <Button size="lg" variant="outline">
                  Email Us
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
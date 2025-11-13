"use client";

import { useEffect, useRef, useState } from "react";
import { Award, GraduationCap, Trophy } from "lucide-react";

const achievements = [
  {
    icon: GraduationCap,
    title: "NYU Research",
    description: "Born from groundbreaking research at New York University",
  },
  {
    icon: Trophy,
    title: "TAC Awards Winner",
    description: "Recognized for innovation in financial technology",
  },
  {
    icon: Award,
    title: "NSF SBIR",
    description: "Supported by the National Science Foundation",
  },
];

export default function SocialProof() {
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
    <section ref={sectionRef} className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-navy to-brand-navy-light" />

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
            Born from Research.{" "}
            <span className="text-gradient">Backed by Excellence</span>.
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Aquon AI is a spin-off from a groundbreaking research project at New
            York University. We are proud to be recipients of the NYU TAC Awards
            and to have our innovation recognized by the National Science
            Foundation.
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <div
                key={index}
                className={`transition-all duration-1000 ${
                  isVisible
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-90"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="text-center group">
                  {/* Icon with animated ring */}
                  <div className="relative inline-block mb-6">
                    <div className="absolute inset-0 bg-gradient-to-r from-brand-purple to-brand-cyan rounded-full opacity-20 blur-xl group-hover:opacity-40 transition-opacity" />
                    <div className="relative w-20 h-20 bg-gradient-to-br from-brand-purple/20 to-brand-cyan/20 rounded-full flex items-center justify-center border-2 border-brand-purple/30 group-hover:border-brand-cyan/50 transition-all duration-300">
                      <Icon className="w-10 h-10 text-brand-cyan" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-gradient transition-all">
                    {achievement.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {achievement.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Stats Bar */}
        <div
          className={`mt-16 glass rounded-2xl p-8 max-w-4xl mx-auto transition-all duration-1000 delay-500 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">
                10x
              </div>
              <div className="text-gray-400 text-sm">Faster Processing</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">
                88%
              </div>
              <div className="text-gray-400 text-sm">Win Rate vs VWAP</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">
                60%
              </div>
              <div className="text-gray-400 text-sm">Energy Efficient</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">
                24/7
              </div>
              <div className="text-gray-400 text-sm">Market Monitoring</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

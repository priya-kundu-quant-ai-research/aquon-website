"use client";

import { useEffect, useRef, useState } from "react";
import { Users, Linkedin } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Team() {
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

  // Team data - replace LinkedIn URLs with actual ones
  const founder = {
    name: "Carlos De Oliveira",
    title: "Founder & CEO",
    image: "/images/carlos.png", // Your image in public/images/
    linkedin: "https://www.linkedin.com/in/carlos-de-oliveira-b90a9212b/", // Replace with actual URL
  };

  // const engineers = [
  //   {
  //     name: "Priya Kundu",
  //     title: "Technical Product Manager",
  //     image: "/images/priya.JPG", // Add these images to public/images/
  //     linkedin: "https://www.linkedin.com/in/priyakundu159/",
  //   },
  //   {
  //     name: "Nachiket Khare",
  //     title: "Software Engineer",
  //     image: "/images/nachiket.png",
  //     linkedin: "https://www.linkedin.com/in/nachiket-khare-4298201ab/",
  //   },
  //   {
  //     name: "Nikhil Soni",
  //     title: "AI Engineer",
  //     image: "/images/nikhil.png",
  //     linkedin: "https://www.linkedin.com/in/nikhilsoni15/",
  //   },
  //   {
  //     name: "Avina",
  //     title: "Compiler Engineer",
  //     image: "/images/avina.png",
  //     linkedin: "https://www.linkedin.com/in/avina-829a03151/",
  //   },
  // ];

  const advisors = [
    {
      name: "Willie Bass",
      role: "Business Advisor - Strategy & Growth",
      image: "/images/willie.png",
      linkedin: "https://www.linkedin.com/in/willbassjr/",
    },
    {
      name: "Javier Vicente",
      role: "Technical Advisor - Financial Technology",
      image: "/images/javier.jpg",
      linkedin: "https://linkedin.com/in/techadvisor1",
    },
    {
      name: "Carlos Tomei",
      role: "Technical Advisor - AI & ML Systems",
      image: "/images/tomei.png",
      linkedin: "http://www.mat.puc-rio.br/en/professor/carlos-tomei",
    },
    {
      name: "Karla Williams",
      role: "Legal Advisor - Regulatory Compliance",
      image: "/images/karla.png",
      linkedin: "https://www.linkedin.com/in/karla-renee-williams-esq-75a5a557/",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="section-padding relative overflow-hidden bg-brand-navy-light"
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
          <div className="inline-flex items-center space-x-2 mb-4">
            <Users className="w-6 h-6 text-brand-cyan" />
            <span className="text-brand-cyan font-semibold uppercase text-sm tracking-wider">
              Our Team
            </span>
          </div>
          <h2 className="heading-lg mb-6 text-white">
            Meet Our <span className="text-gradient">Team</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Researchers, engineers, and experts united by a vision to transform
            wealth management.
          </p>
        </div>

        {/* Founder */}
        <div
          className={`max-w-5xl mx-auto mb-16 transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          <div className="glass rounded-2xl p-8 border-2 border-brand-purple/30">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              {/* Photo */}
              <div className="flex-shrink-0">
                <div className="w-40 h-40 rounded-2xl overflow-hidden bg-gradient-to-br from-brand-purple to-brand-cyan">
                  <Image
                    src={founder.image}
                    alt={founder.name}
                    width={160}
                    height={160}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Info */}
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-3xl font-bold text-white mb-2">
                  {founder.name}
                </h3>
                <p className="text-brand-cyan text-lg font-semibold mb-4">
                  {founder.title}
                </p>
                <a
                  href={founder.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button size="default" className="group">
                    <Linkedin className="w-4 h-4 mr-2" />
                    Connect on LinkedIn
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Founding Engineers */}
        {/* <div
          className={`mb-16 transition-all duration-1000 delay-400 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h3 className="text-2xl font-bold text-white text-center mb-8">
            Founding Engineers
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {engineers.map((engineer, index) => (
              <div
                key={index}
                className="glass rounded-2xl p-6 text-center hover:bg-white/10 transition-all group"
              >
                <div className="w-24 h-24 rounded-xl overflow-hidden mx-auto mb-4 bg-gradient-to-br from-brand-cyan to-brand-purple">
                  <Image
                    src={engineer.image}
                    alt={engineer.name}
                    width={96}
                    height={96}
                    className="w-full h-full object-cover"
                  />
                </div>

                <h4 className="text-lg font-bold text-white mb-1">
                  {engineer.name}
                </h4>
                <p className="text-gray-400 text-sm mb-4">{engineer.title}</p>

                <a
                  href={engineer.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <Button size="sm" variant="outline" className="group-hover:border-brand-cyan">
                    <Linkedin className="w-4 h-4" />
                  </Button>
                </a>
              </div>
            ))}
          </div>
        </div> */}

        {/* Advisors */}
        <div
          className={`transition-all duration-1000 delay-600 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h3 className="text-2xl font-bold text-white text-center mb-8">
            Advisors
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {advisors.map((advisor, index) => (
              <div
                key={index}
                className="glass rounded-2xl p-6 text-center hover:bg-white/10 transition-all group"
              >
                {/* Photo */}
                <div className="w-20 h-20 rounded-xl overflow-hidden mx-auto mb-4 bg-gradient-to-br from-brand-purple to-brand-cyan">
                  <Image
                    src={advisor.image}
                    alt={advisor.name}
                    width={80}
                    height={80}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Info */}
                <h4 className="text-base font-bold text-white mb-1">
                  {advisor.name}
                </h4>
                <p className="text-gray-400 text-xs mb-4">{advisor.role}</p>

                {/* LinkedIn */}
                <a
                  href={advisor.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <Button size="sm" variant="outline" className="group-hover:border-brand-cyan">
                    <Linkedin className="w-4 h-4" />
                  </Button>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
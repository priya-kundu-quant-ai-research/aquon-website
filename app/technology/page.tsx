import AquaALXEngine from "@/components/sections/technology/AquaALXEngine";
import ZWAPExplained from "@/components/sections/technology/ZWAPExplained";
import PerformanceMetrics from "@/components/sections/technology/PerformanceMetrics";
import FinalCTA from "@/components/sections/FinalCTA";

export const metadata = {
  title: "Technology - Aqua & ALX Engine | Aquon AI",
  description:
    "Discover the proprietary technology behind Zeton: the Aqua programming language, ALX compiler, and ZWAP execution strategy. 10x faster, 60% more efficient.",
};

export default function TechnologyPage() {
  return (
    <div>
      {/* Page Hero */}
      <section className="pt-20 pb-32 md:pb-40 bg-gradient-to-b from-brand-navy via-brand-navy-light to-brand-navy relative overflow-hidden min-h-[60vh] flex items-center">
        {/* Background elements */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-purple rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-cyan rounded-full blur-3xl" style={{ animationDelay: "0.5s" }} />
        </div>

        <div className="container-custom text-center relative z-10 w-full">
          <h1 className="heading-xl mb-6 text-white">
            Powered by <span className="text-gradient">Breakthrough</span>{" "}
            Technology
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            At Aquon AI, we've built our own technology stack from the ground up.
            From our proprietary programming language to our AI-powered execution
            algorithms, every component is designed for maximum performance.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <AquaALXEngine />
      <ZWAPExplained />
      <PerformanceMetrics />
      <FinalCTA />
    </div>
  );
}

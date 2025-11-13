import WorkflowDiagram from "@/components/sections/platform/WorkflowDiagram";
import PortfolioIntelligence from "@/components/sections/platform/PortfolioIntelligence";
import MarketIntelligence from "@/components/sections/platform/MarketIntelligence";
import ExecutionIntelligence from "@/components/sections/platform/ExecutionIntelligence";
import FinalCTA from "@/components/sections/FinalCTA";

export const metadata = {
  title: "Platform - Zeton Trading Co-Pilot | Aquon AI",
  description:
    "Discover Zeton's three pillars: Portfolio Intelligence, Market Intelligence, and Execution Intelligence. The complete AI-powered wealth management platform.",
};

export default function PlatformPage() {
  return (
    <div>
      {/* Page Hero */}
      <section className="pt-20 pb-32 md:pb-40 bg-gradient-to-b from-brand-navy via-brand-navy-light to-brand-navy relative overflow-hidden min-h-[60vh] flex items-center">
        {/* Background elements */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-purple rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-cyan rounded-full blur-3xl" style={{ animationDelay: "0.5s" }} />
        </div>

        <div className="container-custom text-center relative z-10">
          <h1 className="heading-xl mb-6 text-white">
            The <span className="text-gradient">Zeton</span> Trading Co-Pilot
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A comprehensive platform that transforms how you build, manage, and
            execute your investment strategy with institutional-grade AI.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <WorkflowDiagram />
      <PortfolioIntelligence />
      <MarketIntelligence />
      <ExecutionIntelligence />
      <FinalCTA />
    </div>
  );
}

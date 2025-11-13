import MissionStory from "@/components/sections/company/MissionStory";
import Team from "@/components/sections/company/Team";
import Careers from "@/components/sections/company/Careers";
import Contact from "@/components/sections/company/Contact";

export const metadata = {
  title: "Company - About Aquon AI | Our Mission & Team",
  description:
    "Learn about Aquon AI's mission to democratize institutional-grade trading technology. Meet our team of researchers, engineers, and advisors from NYU.",
};

export default function CompanyPage() {
  return (
    <div>
      {/* Page Hero */}
      <section className="pt-20 pb-32 md:pb-40 bg-gradient-to-b from-brand-navy via-brand-navy-light to-brand-navy relative overflow-hidden min-h-[60vh] flex items-center">
        {/* Background elements */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-brand-purple rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-brand-cyan rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "1s" }} />
        </div>

        <div className="container-custom text-center relative z-10 w-full">
          <h1 className="heading-xl mb-6 text-white">
            About <span className="text-gradient">Aquon AI</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We're on a mission to make institutional-grade AI trading technology
            accessible to everyone. Born from research at NYU, backed by
            excellence.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <MissionStory />
      <Team />
      <Careers />
      <Contact />
    </div>
  );
}
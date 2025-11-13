import Hero from "@/components/sections/Hero";
import ProductIntro from "@/components/sections/ProductIntro";
import ThreePillars from "@/components/sections/ThreePillars";
import SocialProof from "@/components/sections/SocialProof";
import FinalCTA from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <div>
      <Hero />
      <ProductIntro />
      <ThreePillars />
      <SocialProof />
      <FinalCTA />
    </div>
  );
}
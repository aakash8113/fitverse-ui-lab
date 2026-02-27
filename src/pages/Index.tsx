import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/about/HeroSection";
import { MissionSection } from "@/components/about/MissionSection";
import { SolutionSection } from "@/components/about/SolutionSection";
import { FeaturesSection } from "@/components/about/FeaturesSection";
import { TeamSection } from "@/components/about/TeamSection";
import { ClosingSection } from "@/components/about/ClosingSection";

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <MissionSection />
      <SolutionSection />
      <FeaturesSection />
      <TeamSection />
      <ClosingSection />
      <Footer />
    </div>
  );
}

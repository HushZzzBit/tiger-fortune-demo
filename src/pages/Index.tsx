import HeroSection from "@/components/HeroSection";
import GameInfoSection from "@/components/GameInfoSection";
import BestPlatformSection from "@/components/BestPlatformSection";
import BonusSection from "@/components/BonusSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import BestTimeSection from "@/components/BestTimeSection";
import FAQSection from "@/components/FAQSection";
import FinalCTASection from "@/components/FinalCTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <GameInfoSection />
      <BestPlatformSection />
      <BonusSection />
      <TestimonialsSection />
      <BestTimeSection />
      <FAQSection />
      <FinalCTASection />
      <Footer />
    </main>
  );
};

export default Index;

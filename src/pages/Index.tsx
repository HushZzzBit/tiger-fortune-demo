import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import GameInfoSection from "@/components/GameInfoSection";
import BestPlatformSection from "@/components/BestPlatformSection";
import BonusSection from "@/components/BonusSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import BestTimeSection from "@/components/BestTimeSection";
import FAQSection from "@/components/FAQSection";
import FinalCTASection from "@/components/FinalCTASection";
import SEOTextSection from "@/components/SEOTextSection";
import Footer from "@/components/Footer";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import SEOHead from "@/components/SEOHead";

const Index = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Fortune Tiger Demo",
    "url": "https://oamorcontagia.site/",
    "description": "Jogue Fortune Tiger demo grátis com saldo virtual ilimitado. Sem riscos, sem cadastro. RTP 96.81% - PG Soft.",
    "publisher": {
      "@type": "Organization",
      "name": "Fortune Demo",
      "logo": {
        "@type": "ImageObject",
        "url": "https://oamorcontagia.site/lovable-uploads/4b366b2a-2467-4f9c-a704-fd8f295221f2.png"
      }
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://oamorcontagia.site/?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };
  return (
    <>
      <SEOHead
        title="🎰 Fortune Tiger Demo Grátis | Jogue Agora Sem Cadastro"
        description="Jogue Fortune Tiger demo grátis com saldo virtual ilimitado. Sem riscos, sem cadastro. RTP 96.81% - PG Soft. Acesse agora e ganhe bônus!"
        canonical="/"
        keywords="fortune tiger demo, jogar fortune tiger gratis, fortune tiger demo gratis, slot fortune tiger, pg soft, tigrinho"
        jsonLd={jsonLd}
      />
      <Navigation />
      <main className="min-h-screen">
        <HeroSection />
        <GameInfoSection />
        <BestPlatformSection />
        <BonusSection />
        <TestimonialsSection />
        <BestTimeSection />
        <FAQSection />
        <SEOTextSection />
        <FinalCTASection />
      </main>
      <Footer />
      <ScrollToTopButton />
    </>
  );
};

export default Index;

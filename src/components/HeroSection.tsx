import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-tiger.jpg";

const HeroSection = () => {
  const handlePlayNow = () => {
    window.open('https://storage.hoster4land.net', '_blank');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white">
            🎰 Jogue o <span className="text-gaming-gold">Fortune Tiger</span> 
            <br />demo grátis com saldo virtual ilimitado
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-gray-200 font-medium">
            Sem riscos. Sem cadastro. Apenas diversão.
          </p>
          
          <Button 
            variant="gaming-gold" 
            size="xl"
            onClick={handlePlayNow}
            className="text-lg md:text-xl px-12 py-6 mb-8 pulse-gaming"
          >
            🎯 Jogar agora gratuitamente
          </Button>
          
          <div className="flex flex-wrap justify-center gap-6 text-sm md:text-base text-gray-300">
            <div className="flex items-center gap-2">
              <span className="text-gaming-gold">✓</span>
              Sem download
            </div>
            <div className="flex items-center gap-2">
              <span className="text-gaming-gold">✓</span>
              Saldo virtual ilimitado
            </div>
            <div className="flex items-center gap-2">
              <span className="text-gaming-gold">✓</span>
              RTP 96.81%
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating elements for gaming atmosphere */}
      <div className="absolute top-20 left-10 text-4xl opacity-30 animate-bounce">🎰</div>
      <div className="absolute top-40 right-16 text-3xl opacity-30 animate-pulse">💰</div>
      <div className="absolute bottom-32 left-20 text-5xl opacity-30 bounce-soft">🐅</div>
    </section>
  );
};

export default HeroSection;
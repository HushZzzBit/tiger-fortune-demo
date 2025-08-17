import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-tiger.jpg";

const HeroSection = () => {
  const handlePlayNow = () => {
    window.open('https://storage.hoster4land.net', '_blank');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Blur and Darkening */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat filter blur-sm scale-110"
        style={{ backgroundImage: `url(/lovable-uploads/60ec6727-7b71-48dc-b1e3-7ce4cf2917b7.png)` }}
      ></div>
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>
      
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 text-white drop-shadow-2xl leading-tight">
            Jogue o <span className="text-yellow-300 drop-shadow-lg">Fortune Tiger</span> 
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>demo grátis com saldo virtual ilimitado
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl mb-8 text-white/90 font-medium drop-shadow-lg px-4">
            Sem riscos. Sem cadastro. Apenas diversão.
          </p>
          
          <Button 
            variant="gaming-gold" 
            size="xl"
            onClick={handlePlayNow}
            className="text-base md:text-lg lg:text-xl px-8 md:px-12 py-4 md:py-6 mb-8 pulse-gaming shadow-2xl transform hover:scale-105 transition-transform w-auto min-w-[280px]"
          >
            🎯 Jogar agora gratuitamente
          </Button>
          
          <div className="flex flex-wrap justify-center gap-3 md:gap-6 text-sm md:text-base text-white/80 drop-shadow-lg px-4">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-3 md:px-4 py-2 min-w-0">
              <span className="text-yellow-300 flex-shrink-0">✓</span>
              <span className="whitespace-nowrap">Sem download</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-3 md:px-4 py-2 min-w-0">
              <span className="text-yellow-300 flex-shrink-0">✓</span>
              <span className="whitespace-nowrap">Saldo virtual ilimitado</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-3 md:px-4 py-2 min-w-0">
              <span className="text-yellow-300 flex-shrink-0">✓</span>
              <span className="whitespace-nowrap">RTP 96.81%</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
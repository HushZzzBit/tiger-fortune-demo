import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-tiger.jpg";

const HeroSection = () => {
  const handlePlayNow = () => {
    window.open('https://storage.hoster4land.net', '_blank');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Dynamic Gradient Background inspired by Fortune Tiger */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600">
        {/* Cloud effects */}
        <div className="absolute inset-0 bg-white/10 bg-[radial-gradient(ellipse_at_top,transparent_40%,rgba(255,255,255,0.1)_70%)]"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-orange-300/20 via-yellow-300/20 to-transparent"></div>
      </div>
      
      {/* Hero Character Image */}
      <div 
        className="absolute inset-0 bg-contain bg-center bg-no-repeat opacity-80"
        style={{ backgroundImage: `url(/lovable-uploads/5e74b56f-4723-4e62-9d36-434b573f8585.png)` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
      </div>
      
      {/* Floating Coins Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 text-6xl animate-bounce" style={{animationDelay: '0s'}}>🪙</div>
        <div className="absolute top-32 right-20 text-5xl animate-bounce" style={{animationDelay: '0.5s'}}>🪙</div>
        <div className="absolute top-60 left-1/4 text-4xl animate-bounce" style={{animationDelay: '1s'}}>🪙</div>
        <div className="absolute top-80 right-1/3 text-5xl animate-bounce" style={{animationDelay: '1.5s'}}>🪙</div>
        <div className="absolute bottom-40 left-16 text-6xl animate-bounce" style={{animationDelay: '2s'}}>🪙</div>
        <div className="absolute bottom-60 right-10 text-4xl animate-bounce" style={{animationDelay: '2.5s'}}>🪙</div>
        
        {/* Additional floating elements */}
        <div className="absolute top-24 right-1/4 text-3xl opacity-70 animate-pulse">💎</div>
        <div className="absolute bottom-32 left-1/3 text-3xl opacity-70 animate-pulse">🎰</div>
        <div className="absolute top-1/2 left-8 text-2xl opacity-60 animate-pulse">⭐</div>
        <div className="absolute top-1/3 right-8 text-2xl opacity-60 animate-pulse">⭐</div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white drop-shadow-2xl">
            🎰 Jogue o <span className="text-yellow-300 drop-shadow-lg">Fortune Tiger</span> 
            <br />demo grátis com saldo virtual ilimitado
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-white/90 font-medium drop-shadow-lg">
            Sem riscos. Sem cadastro. Apenas diversão.
          </p>
          
          <Button 
            variant="gaming-gold" 
            size="xl"
            onClick={handlePlayNow}
            className="text-lg md:text-xl px-12 py-6 mb-8 pulse-gaming shadow-2xl transform hover:scale-105 transition-transform"
          >
            🎯 Jogar agora gratuitamente
          </Button>
          
          <div className="flex flex-wrap justify-center gap-6 text-sm md:text-base text-white/80 drop-shadow-lg">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <span className="text-yellow-300">✓</span>
              Sem download
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <span className="text-yellow-300">✓</span>
              Saldo virtual ilimitado
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <span className="text-yellow-300">✓</span>
              RTP 96.81%
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
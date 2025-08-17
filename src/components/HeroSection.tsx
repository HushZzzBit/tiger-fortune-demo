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
      
      {/* Floating Game Symbols Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <img src="/lovable-uploads/8f780dfb-55b8-4afa-b9c1-ec2badd5dd6f.png" alt="Fortune coins" className="absolute top-20 left-10 w-16 h-16 animate-bounce" style={{animationDelay: '0s'}} />
        <img src="/lovable-uploads/e5e368aa-9687-4ad0-81ce-8cca65a67099.png" alt="Money bag" className="absolute top-32 right-20 w-14 h-14 animate-bounce" style={{animationDelay: '0.5s'}} />
        <img src="/lovable-uploads/78032467-041a-40dd-a185-bec31826c393.png" alt="Fortune cards" className="absolute top-60 left-1/4 w-12 h-12 animate-bounce" style={{animationDelay: '1s'}} />
        <img src="/lovable-uploads/b3e32235-4479-49dc-ae11-aa894fcf869a.png" alt="Lucky envelopes" className="absolute top-80 right-1/3 w-14 h-14 animate-bounce" style={{animationDelay: '1.5s'}} />
        <img src="/lovable-uploads/fd1b3116-2a36-44a2-bbe7-7a806c1eda8e.png" alt="Decorative gems" className="absolute bottom-40 left-16 w-16 h-16 animate-bounce" style={{animationDelay: '2s'}} />
        <img src="/lovable-uploads/a49e6e7e-6da9-4f85-8729-4218aeeab984.png" alt="Treasure pot" className="absolute bottom-60 right-10 w-12 h-12 animate-bounce" style={{animationDelay: '2.5s'}} />
        
        {/* Additional floating elements with pulse animation */}
        <img src="/lovable-uploads/8f780dfb-55b8-4afa-b9c1-ec2badd5dd6f.png" alt="Fortune coins" className="absolute top-24 right-1/4 w-10 h-10 opacity-70 animate-pulse" />
        <img src="/lovable-uploads/e5e368aa-9687-4ad0-81ce-8cca65a67099.png" alt="Money bag" className="absolute bottom-32 left-1/3 w-10 h-10 opacity-70 animate-pulse" />
        <img src="/lovable-uploads/78032467-041a-40dd-a185-bec31826c393.png" alt="Fortune cards" className="absolute top-1/2 left-8 w-8 h-8 opacity-60 animate-pulse" />
        <img src="/lovable-uploads/b3e32235-4479-49dc-ae11-aa894fcf869a.png" alt="Lucky envelopes" className="absolute top-1/3 right-8 w-8 h-8 opacity-60 animate-pulse" />
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
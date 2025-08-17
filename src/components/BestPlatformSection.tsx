import { Button } from "@/components/ui/button";

const BestPlatformSection = () => {
  const handleAccessPlatform = () => {
    window.open('https://storage.hoster4land.net', '_blank');
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gaming-gold text-gaming-black px-4 py-2 rounded-full text-sm font-bold mb-6">
            👑 Expert's Choice
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Onde jogar <span className="text-gaming-gold">Fortune Tiger</span> com segurança?
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Nossa recomendação de especialista para a melhor experiência de jogo
          </p>
        </div>
        
        <div className="max-w-md mx-auto px-4">
          <div className="bg-gradient-card rounded-2xl p-6 md:p-8 shadow-card border border-gaming-gold/20 hover:border-gaming-gold/50 transition-all duration-300 relative overflow-hidden">
            {/* Background glow effect */}
            <div className="absolute inset-0 bg-gradient-gold opacity-5"></div>
            
            {/* Top recommendation badge */}
            <div className="absolute -top-3 -right-3 bg-gaming-red text-white px-6 py-2 rounded-full text-sm font-bold transform rotate-12">
              TOP RECOMENDADO
            </div>
            
            <div className="relative z-10">
              {/* Logo placeholder */}
              <div className="w-20 h-20 bg-gaming-gold rounded-full flex items-center justify-center text-gaming-black text-2xl font-bold mb-6 mx-auto">
                H4L
              </div>
              
              <h3 className="text-2xl font-bold text-white text-center mb-2">
                Hoster4Land Casino
              </h3>
              
              <div className="flex justify-center items-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-gaming-gold text-xl">⭐</span>
                ))}
                <span className="text-gray-300 ml-2">(4.9/5)</span>
              </div>
              
              <div className="space-y-4 mb-8">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-400">Bônus:</span>
                  <span className="text-gaming-gold font-bold">R$200 + Giros Grátis</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-400">Licença:</span>
                  <span className="text-white">Curacao</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-400">Pagamento:</span>
                  <span className="text-gaming-gold">PIX Instantâneo</span>
                </div>
              </div>
              
              <Button 
                variant="gaming-gold" 
                size="lg"
                onClick={handleAccessPlatform}
                className="w-full text-lg font-bold pulse-gaming"
              >
                🎁 Acessar com bônus
              </Button>
              
              <p className="text-xs text-gray-400 text-center mt-4">
                ✓ Plataforma segura e licenciada • ✓ Suporte 24/7 em português
              </p>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-12 px-4">
          <div className="flex flex-wrap justify-center items-center gap-2 md:gap-4 text-xs md:text-sm text-gray-400">
            <span className="flex items-center gap-2 whitespace-nowrap">
              🔒 SSL Certificado
            </span>
            <span className="flex items-center gap-2 whitespace-nowrap">
              🛡️ Jogo Responsável
            </span>
            <span className="flex items-center gap-2 whitespace-nowrap">
              ⚡ Saques Rápidos
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestPlatformSection;
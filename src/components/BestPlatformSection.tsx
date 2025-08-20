import { Button } from "@/components/ui/button";

const BestPlatformSection = () => {
  const handleAccessPlatform = () => {
    window.open('https://storage.hoster4land.net', '_blank');
  };

  return (
    <aside className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <header className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gaming-gold text-gaming-black px-4 py-2 rounded-full text-sm font-bold mb-6">
            <span aria-hidden="true">👑</span> Expert's Choice
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Onde jogar <span className="text-gaming-gold">Fortune Tiger</span> com segurança?
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Nossa recomendação de especialista para a melhor experiência de jogo
          </p>
        </header>
        
        <article className="max-w-md mx-auto px-4">
          <div className="bg-gradient-card rounded-2xl p-6 md:p-8 shadow-card border border-gaming-gold/20 hover:border-gaming-gold/50 transition-all duration-300 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-gold opacity-5" aria-hidden="true" />
            
            <div className="absolute -top-3 -right-3 bg-gaming-red text-white px-6 py-2 rounded-full text-sm font-bold transform rotate-12">
              TOP RECOMENDADO
            </div>
            
            <div className="relative z-10">
              <div className="w-20 h-20 bg-gaming-gold rounded-full flex items-center justify-center text-gaming-black text-2xl font-bold mb-6 mx-auto">
                H4L
              </div>
              
              <h3 className="text-2xl font-bold text-white text-center mb-2">
                Hoster4Land Casino
              </h3>
              
              <div className="flex justify-center items-center gap-1 mb-6">
                <div className="flex" role="img" aria-label="5 stars rating">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-gaming-gold text-xl" aria-hidden="true">⭐</span>
                  ))}
                </div>
                <span className="text-gray-300 ml-2">(4.9/5)</span>
              </div>
              
              <dl className="space-y-4 mb-8 text-sm">
                <div className="flex justify-between items-center">
                  <dt className="text-gray-400">Bônus:</dt>
                  <dd className="text-gaming-gold font-bold">R$200 + Giros Grátis</dd>
                </div>
                <div className="flex justify-between items-center">
                  <dt className="text-gray-400">Licença:</dt>
                  <dd className="text-white">Curacao</dd>
                </div>
                <div className="flex justify-between items-center">
                  <dt className="text-gray-400">Pagamento:</dt>
                  <dd className="text-gaming-gold">PIX Instantâneo</dd>
                </div>
              </dl>
              
              <Button 
                variant="gaming-gold" 
                size="lg"
                onClick={handleAccessPlatform}
                className="w-full text-lg font-bold pulse-gaming"
              >
                <span aria-hidden="true">🎁</span> Acessar com bônus
              </Button>
              
              <p className="text-xs text-gray-400 text-center mt-4">
                ✓ Plataforma segura e licenciada • ✓ Suporte 24/7 em português
              </p>
            </div>
          </div>
        </article>
        
        <footer className="text-center mt-12 px-4">
          <ul className="flex flex-wrap justify-center items-center gap-2 md:gap-4 text-xs md:text-sm text-gray-400">
            <li className="flex items-center gap-2 whitespace-nowrap">
              <span aria-hidden="true">🔒</span> SSL Certificado
            </li>
            <li className="flex items-center gap-2 whitespace-nowrap">
              <span aria-hidden="true">🛡️</span> Jogo Responsável
            </li>
            <li className="flex items-center gap-2 whitespace-nowrap">
              <span aria-hidden="true">⚡</span> Saques Rápidos
            </li>
          </ul>
        </footer>
      </div>
    </aside>
  );
};

export default BestPlatformSection;
import { Button } from "@/components/ui/button";

const FinalCTASection = () => {
  const handleStartPlaying = () => {
    window.open('/go', '_blank');
  };

  return (
    <section className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4 text-center max-w-4xl">
        <h2 className="text-3xl md:text-6xl font-bold text-white mb-8">
          Pronto para jogar <span className="text-gaming-gold">Fortune Tiger</span> agora mesmo?
        </h2>
        
        <p className="text-xl text-gray-200 mb-12 max-w-2xl mx-auto">
          Não perca mais tempo! Milhares de jogadores já estão ganhando. 
          Seja o próximo a conquistar o jackpot do tigre!
        </p>
        
        <Button 
          variant="gaming-gold" 
          size="xl"
          onClick={handleStartPlaying}
          className="text-base sm:text-xl px-6 sm:px-16 py-4 sm:py-8 mb-8 pulse-gaming text-gaming-black font-bold w-full sm:w-auto max-w-full break-words"
        >
          <span aria-hidden="true">👉</span> Comece a jogar com bônus gratuito
        </Button>
        
        <p className="text-sm text-gray-300 mb-8">
          Acesso imediato via plataforma segura e licenciada
        </p>
        
        <ul className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-2xl mx-auto mb-12">
          {[
            { icon: "🔒", text: "SSL Seguro" },
            { icon: "⚡", text: "Acesso Instantâneo" },
            { icon: "🎁", text: "Bônus Garantido" },
            { icon: "📱", text: "Mobile Friendly" }
          ].map((feature, index) => (
            <li key={index} className="text-center p-3 sm:p-4 bg-white/10 rounded-lg backdrop-blur-sm">
              <div className="text-xl sm:text-2xl mb-2" aria-hidden="true">{feature.icon}</div>
              <p className="text-white text-xs sm:text-sm font-medium leading-tight">{feature.text}</p>
            </li>
          ))}
        </ul>
        
        <div className="inline-flex items-center gap-2 bg-gaming-red text-white px-6 py-3 rounded-full font-bold pulse-gaming">
          <span aria-hidden="true">⏰</span> Oferta por tempo limitado
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
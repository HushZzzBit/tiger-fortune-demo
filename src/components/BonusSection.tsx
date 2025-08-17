import { Button } from "@/components/ui/button";

const BonusSection = () => {
  const steps = [
    {
      number: "1",
      title: "Cadastre-se",
      description: "Registro rápido e seguro em menos de 2 minutos",
      icon: ""
    },
    {
      number: "2", 
      title: "Ganhe bônus",
      description: "R$200 + giros grátis creditados automaticamente",
      icon: ""
    },
    {
      number: "3",
      title: "Jogue Fortune Tiger",
      description: "Teste o jogo com dinheiro de bônus",
      icon: ""
    }
  ];

  const handleGetBonus = () => {
    window.open('https://storage.hoster4land.net', '_blank');
  };

  return (
    <section className="py-20 bg-gradient-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Ganhe <span className="text-gaming-gold">bônus</span> e jogue de graça
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Siga estes 3 passos simples e comece a jogar Fortune Tiger com dinheiro de bônus
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {steps.map((step, index) => (
            <div 
              key={step.number}
              className="relative text-center group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Connecting line for desktop */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-1/2 w-full h-0.5 bg-gaming-gold/30 z-0">
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 text-gaming-gold">
                    →
                  </div>
                </div>
              )}
              
              <div className="relative z-10 bg-card rounded-2xl p-8 shadow-card hover:shadow-gold transition-all duration-300 transform hover:scale-105 group-hover:bg-gaming-dark">
                {/* Step number */}
                <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center text-gaming-black text-2xl font-bold mx-auto mb-6">
                  {step.number}
                </div>
                
                <div className="text-6xl mb-4">{step.icon}</div>
                
                <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
                <p className="text-gray-300">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Button 
            variant="gaming" 
            size="xl"
            onClick={handleGetBonus}
            className="text-lg px-12 py-6 glow-gaming"
          >
            Receber bônus agora
          </Button>
          
          <p className="text-sm text-gray-400 mt-4">
            * Termos e condições aplicáveis. Jogue com responsabilidade.
          </p>
        </div>
        
        {/* Benefits highlight */}
        <div className="mt-16 grid md:grid-cols-4 gap-6">
          {[
            { icon: "", text: "Registro instantâneo" },
            { icon: "", text: "100% seguro" }, 
            { icon: "", text: "Sem depósito inicial" },
            { icon: "", text: "Jogue no celular" }
          ].map((benefit, index) => (
            <div key={index} className="text-center p-4">
              <div className="text-3xl mb-2">{benefit.icon}</div>
              <p className="text-gray-300 text-sm">{benefit.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BonusSection;


const GameInfoSection = () => {
  const gameStats = [
    { label: "RTP", value: "96.81%", icon: "📊" },
    { label: "Volatilidade", value: "Média", icon: "⚡" },
    { label: "Ganho Máximo", value: "2500x", icon: "💎" },
    { label: "Desenvolvedor", value: "PG Soft", icon: "🏢" }
  ];

  return (
    <section className="py-12 md:py-20 bg-gradient-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6 px-4">
            Sobre o <span className="text-gaming-gold">Fortune Tiger</span>
          </h2>
          <p className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto px-4">
            O slot mais popular do Brasil, agora em versão demo gratuita. 
            Teste suas estratégias sem riscos!
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Game Image */}
          <div className="relative">
            <div className="bg-gradient-gold p-1 rounded-2xl">
              <img 
                src="/lovable-uploads/4ba196fa-11c9-4cb4-b3ef-ff55ef5cd5ca.png" 
                alt="Fortune Tiger slot game interface showing cool tiger character with sunglasses and gold coins"
                className="w-full rounded-xl shadow-card"
              />
            </div>
            <div className="absolute -top-4 -right-4 bg-gaming-red text-white px-4 py-2 rounded-full font-bold text-sm pulse-gaming">
              DEMO GRÁTIS
            </div>
          </div>
          
          {/* Game Stats */}
          <div className="space-y-6">
            {gameStats.map((stat, index) => (
              <div 
                key={stat.label}
                className="flex items-center gap-4 bg-card p-6 rounded-xl shadow-card hover:shadow-gold transition-all duration-300 transform hover:scale-105"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl">{stat.icon}</div>
                <div className="flex-1">
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                  <div className="text-white text-xl font-bold">{stat.value}</div>
                </div>
              </div>
            ))}
            
            <div className="mt-8 p-6 bg-gradient-button rounded-xl text-center">
              <h3 className="text-white font-bold text-lg mb-2">🎯 Por que jogar Fortune Tiger?</h3>
              <p className="text-gray-200">
                Alta taxa de retorno, jogabilidade simples e multiplicadores incríveis. 
                O jogo favorito dos brasileiros!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GameInfoSection;
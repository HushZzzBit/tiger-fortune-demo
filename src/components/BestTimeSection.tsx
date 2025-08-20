const BestTimeSection = () => {
  const timeSlots = [
    {
      time: "1h - 4h",
      period: "Madrugada",
      description: "Menor tráfego, maior chance de hits consecutivos",
      percentage: "85%",
      icon: "🌙"
    },
    {
      time: "10h - 12h", 
      period: "Manhã",
      description: "Após manutenção dos servidores",
      percentage: "78%",
      icon: "🌅"
    },
    {
      time: "Segunda/Quinta",
      period: "Dias da semana",
      description: "Menos competição, mais oportunidades",
      percentage: "82%",
      icon: "📅"
    }
  ];

  return (
    <section className="py-20 bg-gradient-card">
      <div className="container mx-auto px-4">
        <header className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gaming-gold text-gaming-black px-4 py-2 rounded-full text-sm font-bold mb-6">
            <span aria-hidden="true">💡</span> Dica do Especialista
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Qual o melhor <span className="text-gaming-gold">horário para jogar?</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Baseado em dados de milhares de jogadores, descobrimos os horários com maior taxa de sucesso
          </p>
        </header>
        
        <dl className="grid md:grid-cols-3 gap-8 mb-12">
          {timeSlots.map((slot, index) => (
            <div 
              key={index}
              className="bg-card rounded-2xl p-8 shadow-card hover:shadow-gold transition-all duration-300 transform hover:scale-105 border border-gaming-gold/20 relative overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute top-0 right-0 w-20 h-20 bg-gaming-gold/10 rounded-full blur-xl" aria-hidden="true" />
              
              <div className="relative z-10">
                <div className="text-5xl mb-4 text-center" aria-hidden="true">{slot.icon}</div>
                
                <div className="text-center mb-6">
                  <dt className="text-2xl font-bold text-gaming-gold mb-2">{slot.time}</dt>
                  <dd className="text-lg text-white font-semibold">{slot.period}</dd>
                </div>
                
                <p className="text-gray-300 text-center mb-6">{slot.description}</p>
                
                <div className="text-center">
                  <div className="inline-flex items-center gap-2 bg-gaming-red px-4 py-2 rounded-full">
                    <span className="text-white font-bold">{slot.percentage}</span>
                    <span className="text-white text-sm">taxa de sucesso</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </dl>
        
        <aside className="max-w-4xl mx-auto">
          <div className="bg-gaming-red/10 border border-gaming-red/30 rounded-2xl p-8">
            <div className="flex items-start gap-4">
              <div className="text-4xl" aria-hidden="true">🎯</div>
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Dica Especial do Expert</h3>
                <p className="text-gray-300 leading-relaxed">
                  <strong className="text-gaming-gold">Estratégia Comprovada:</strong> Comece sempre com apostas baixas para 
                  "aquecer" a máquina. Quando perceber 3-4 giros sem ganho, aumente gradualmente a aposta. 
                  Os algoritmos de RNG tendem a compensar sequências negativas.
                </p>
                <div className="mt-4 p-4 bg-gaming-dark rounded-lg">
                  <p className="text-sm text-gray-400">
                    <span className="text-gaming-gold" aria-hidden="true">⚠️</span> <strong>Lembre-se:</strong> Estabeleça sempre um limite de tempo e valor. 
                    O jogo deve ser sempre uma diversão, nunca uma necessidade.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default BestTimeSection;
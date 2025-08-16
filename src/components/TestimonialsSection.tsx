const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Carlos M.",
      city: "São Paulo",
      rating: 5,
      comment: "Consegui ganhar R$800 no primeiro dia! O Fortune Tiger realmente paga. Recomendo 100%!",
      avatar: "👨‍💼"
    },
    {
      name: "Maria S.", 
      city: "Rio de Janeiro",
      rating: 5,
      comment: "Plataforma confiável e pagamento foi super rápido. Saquei R$1.200 via PIX em 5 minutos.",
      avatar: "👩‍🦰"
    },
    {
      name: "João P.",
      city: "Belo Horizonte", 
      rating: 5,
      comment: "O bônus me ajudou muito no início. Agora jogo sempre e já paguei minhas contas!",
      avatar: "👨‍🎓"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Depoimentos de <span className="text-gaming-gold">Jogadores</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Veja o que nossos jogadores dizem sobre suas experiências
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-gradient-card rounded-2xl p-8 shadow-card hover:shadow-gold transition-all duration-300 transform hover:scale-105 border border-gaming-gold/20 hover:border-gaming-gold/50"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Avatar */}
              <div className="w-16 h-16 bg-gaming-gold rounded-full flex items-center justify-center text-3xl mx-auto mb-4">
                {testimonial.avatar}
              </div>
              
              {/* Stars */}
              <div className="flex justify-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-gaming-gold text-xl">⭐</span>
                ))}
              </div>
              
              {/* Comment */}
              <blockquote className="text-gray-300 text-center mb-6 italic">
                "{testimonial.comment}"
              </blockquote>
              
              {/* Author */}
              <div className="text-center">
                <div className="text-white font-semibold">{testimonial.name}</div>
                <div className="text-gaming-gold text-sm">{testimonial.city}</div>
              </div>
              
              {/* Verified badge */}
              <div className="flex justify-center mt-4">
                <div className="bg-gaming-red text-white px-3 py-1 rounded-full text-xs font-bold">
                  ✓ VERIFICADO
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Additional social proof */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-8 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <span className="text-gaming-gold text-lg">👥</span>
              <span>+50.000 jogadores ativos</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-gaming-gold text-lg">💰</span>
              <span>R$2.5M pagos este mês</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-gaming-gold text-lg">⚡</span>
              <span>Avaliação 4.9/5</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Smartphone, Monitor, Clock, Target, TrendingUp, Star } from "lucide-react";
import Footer from "@/components/Footer";
import SymbolsSection from "@/components/SymbolsSection";

const ComoJogar = () => {
  const handlePlayNow = () => {
    window.open('https://storage.hoster4land.net', '_blank');
  };

  const steps = [
    {
      number: "1",
      title: "Acesse o site confiável",
      description: "Clique no botão e acesse uma plataforma licenciada e segura",
      icon: "🌐"
    },
    {
      number: "2", 
      title: "Cadastre-se",
      description: "Registro rápido em menos de 2 minutos com seus dados básicos",
      icon: "📝"
    },
    {
      number: "3",
      title: "Escolha demo ou real",
      description: "Teste no modo demo gratuito ou jogue com dinheiro real",
      icon: "🎮"
    },
    {
      number: "4",
      title: "Ajuste sua aposta",
      description: "Defina o valor da aposta usando os botões + e - na tela",
      icon: "💰"
    },
    {
      number: "5",
      title: "Gire os rolos",
      description: "Clique no botão central para iniciar o jogo e torcer pela sorte",
      icon: "🎰"
    }
  ];

  const tips = [
    {
      title: "Comece no modo demo",
      description: "Pratique sem riscos antes de apostar dinheiro real",
      icon: "🎯"
    },
    {
      title: "Ative o som do jogo", 
      description: "A experiência sonora torna o jogo mais imersivo",
      icon: "🔊"
    },
    {
      title: "Apostas pequenas no início",
      description: "Comece com valores baixos para entender a mecânica",
      icon: "🪙"
    },
    {
      title: "Defina limites de tempo",
      description: "Estabeleça quanto tempo vai jogar para manter o controle",
      icon: "⏰"
    }
  ];

  const payouts = [
    { symbol: "🐯", name: "Wild (Tigre)", multiplier: "250x", description: "Símbolo mais valioso" },
    { symbol: "🏮", name: "Ouro", multiplier: "100x", description: "Alto valor" },
    { symbol: "🎆", name: "Fogos", multiplier: "50x", description: "Valor médio" },
    { symbol: "🎊", name: "Confete", multiplier: "25x", description: "Valor médio" },
    { symbol: "🧧", name: "Envelope", multiplier: "10x", description: "Valor baixo" },
    { symbol: "🪙", name: "Moeda", multiplier: "5x", description: "Valor baixo" }
  ];

  const bestTimes = [
    { time: "01h - 04h", period: "Madrugada", tip: "Menos jogadores online, melhores chances", icon: "🌙" },
    { time: "10h - 11h", period: "Manhã", tip: "Após manutenção dos servidores", icon: "☀️" },
    { time: "Segunda/Quinta", period: "Dias da semana", tip: "Menor tráfego de jogadores", icon: "📅" }
  ];

  const strategies = [
    "Gerencie sua banca com disciplina - nunca aposte mais do que pode perder",
    "Varie o valor das apostas - alterne entre valores baixos e médios",
    "Faça pausas regulares - descanse a cada 30 minutos de jogo",
    "Observe os padrões - alguns horários podem ser mais favoráveis",
    "Use o autoplay com moderação - mantenha sempre o controle",
    "Aproveite os bônus - maximize as oportunidades de ganho"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      {/* Hero Section */}
      <section className="py-16 bg-gradient-hero text-center">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Como Jogar <span className="text-gaming-gold">Fortune Tiger</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8">
              Guia Completo para Iniciantes — Aprenda como jogar o Fortune Tiger passo a passo no PC ou celular
            </p>
            <Button 
              variant="gaming-gold" 
              size="xl"
              onClick={handlePlayNow}
              className="pulse-gaming"
            >
              🎯 Começar a jogar agora
            </Button>
          </div>
        </div>
      </section>

      {/* Step by Step Guide */}
      <section className="py-20 bg-gradient-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Guia Passo a Passo
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Siga estes 5 passos simples para começar a jogar Fortune Tiger
            </p>
          </div>
          
          <div className="grid md:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <div 
                key={step.number}
                className="relative text-center group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Connecting line for desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-16 left-1/2 w-full h-0.5 bg-gaming-gold/30 z-0">
                    <div className="absolute right-0 top-1/2 transform -translate-y-1/2 text-gaming-gold">
                      →
                    </div>
                  </div>
                )}
                
                <div className="relative z-10 bg-card rounded-2xl p-6 shadow-card hover:shadow-gold transition-all duration-300 transform hover:scale-105">
                  {/* Step number */}
                  <div className="w-12 h-12 bg-gradient-gold rounded-full flex items-center justify-center text-gaming-black text-xl font-bold mx-auto mb-4">
                    {step.number}
                  </div>
                  
                  <div className="text-4xl mb-4">{step.icon}</div>
                  
                  <h3 className="text-lg font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-gray-300 text-sm">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tips for Beginners */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Dicas para <span className="text-gaming-gold">Iniciantes</span>
            </h2>
            <p className="text-lg text-gray-300">
              Conselhos importantes para começar com o pé direito
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tips.map((tip, index) => (
              <Card key={index} className="bg-gradient-card p-6 border-gaming-gold/20 hover:border-gaming-gold/50 transition-all duration-300 transform hover:scale-105">
                <div className="text-center">
                  <div className="text-3xl mb-4">{tip.icon}</div>
                  <h3 className="text-white font-bold mb-3">{tip.title}</h3>
                  <p className="text-gray-300 text-sm">{tip.description}</p>
                  <div className="mt-4">
                    <Badge variant="outline" className="border-gaming-gold text-gaming-gold">
                      ✅ Recomendado
                    </Badge>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mobile Gaming */}
      <section className="py-20 bg-gradient-card">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Como jogar no <span className="text-gaming-gold">celular</span>
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                Jogue Fortune Tiger em qualquer lugar com seu smartphone Android ou iOS
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4 bg-card p-6 rounded-xl">
                  <Smartphone className="text-gaming-gold mt-1" size={24} />
                  <div>
                    <h3 className="text-white font-bold mb-2">Android & iOS</h3>
                    <p className="text-gray-300">Compatível com todos os dispositivos móveis modernos</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 bg-card p-6 rounded-xl">
                  <Monitor className="text-gaming-gold mt-1" size={24} />
                  <div>
                    <h3 className="text-white font-bold mb-2">Navegador ou App</h3>
                    <p className="text-gray-300">Jogue direto no navegador ou baixe o aplicativo</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Button variant="gaming" onClick={handlePlayNow} className="flex items-center gap-2">
                  📱 Jogar no navegador
                </Button>
                <Button variant="gaming-outline" onClick={handlePlayNow} className="flex items-center gap-2">
                  📲 Baixar APK
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gaming-gold/10 p-8 rounded-3xl">
                <div className="bg-gaming-black rounded-2xl p-6 text-center">
                  <div className="text-6xl mb-4">📱</div>
                  <h3 className="text-gaming-gold font-bold text-xl mb-2">Fortune Tiger</h3>
                  <p className="text-gray-300 text-sm mb-4">Mobile Experience</p>
                  <div className="grid grid-cols-3 gap-2 mb-4">
                    {[...Array(9)].map((_, i) => (
                      <div key={i} className="bg-gaming-gold/20 h-12 rounded flex items-center justify-center text-xl">
                        {i === 4 ? '🐯' : ['🏮', '🎆', '🪙'][i % 3]}
                      </div>
                    ))}
                  </div>
                  <div className="bg-gaming-gold text-gaming-black py-2 rounded font-bold">
                    SPIN
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Best Times */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Melhores <span className="text-gaming-gold">horários</span> para jogar
            </h2>
            <p className="text-lg text-gray-300">
              Maximize suas chances escolhendo os horários certos
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {bestTimes.map((timeSlot, index) => (
              <Card key={index} className="bg-gradient-card p-8 border-gaming-gold/20 text-center hover:border-gaming-gold/50 transition-all duration-300 transform hover:scale-105">
                <div className="text-5xl mb-4">{timeSlot.icon}</div>
                <h3 className="text-gaming-gold font-bold text-xl mb-2">{timeSlot.time}</h3>
                <p className="text-white font-semibold mb-4">{timeSlot.period}</p>
                <p className="text-gray-300 text-sm">{timeSlot.tip}</p>
                <div className="mt-6">
                  <Badge className="bg-gaming-red text-white">
                    💡 Dica de Especialista
                  </Badge>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Strategies */}
      <section className="py-20 bg-gradient-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Macetes e <span className="text-gaming-gold">Estratégias</span>
            </h2>
            <p className="text-lg text-gray-300">
              Dicas profissionais para maximizar seus ganhos
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
            {strategies.map((strategy, index) => (
              <div key={index} className="flex items-start gap-4 bg-card p-6 rounded-xl hover:shadow-gold transition-all duration-300">
                <div className="bg-gaming-gold text-gaming-black rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm mt-1">
                  {index + 1}
                </div>
                <p className="text-gray-300 flex-1">{strategy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Symbols Section */}
      <SymbolsSection />

      {/* Final CTA */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-6xl font-bold text-white mb-8">
              Pronto para testar suas <span className="text-gaming-gold">habilidades</span>?
            </h2>
            
            <p className="text-xl text-gray-200 mb-12 max-w-2xl mx-auto">
              Agora que você sabe como jogar, é hora de colocar o conhecimento em prática. 
              Comece no modo demo ou jogue com dinheiro real!
            </p>
            
            <Button 
              variant="gaming-gold" 
              size="xl"
              onClick={handlePlayNow}
              className="text-xl px-16 py-8 mb-8 pulse-gaming text-gaming-black font-bold"
            >
              🎰 Jogar Fortune Tiger com bônus
            </Button>
            
            <div className="grid md:grid-cols-4 gap-6 max-w-2xl mx-auto">
              {[
                { icon: "🎮", text: "Modo Demo Grátis" },
                { icon: "💰", text: "Bônus de R$200" },
                { icon: "📱", text: "Mobile Friendly" },
                { icon: "🔒", text: "100% Seguro" }
              ].map((feature, index) => (
                <div key={index} className="text-center p-4 bg-white/10 rounded-lg backdrop-blur-sm">
                  <div className="text-2xl mb-2">{feature.icon}</div>
                  <p className="text-white text-sm font-medium">{feature.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Floating CTA Button for Desktop */}
      <div className="hidden lg:block fixed bottom-6 right-6 z-50">
        <Button 
          variant="gaming-gold" 
          size="lg"
          onClick={handlePlayNow}
          className="shadow-2xl pulse-gaming rounded-full px-6"
        >
          🎰 Jogar Agora
        </Button>
      </div>
      
      <Footer />
    </div>
  );
};

export default ComoJogar;
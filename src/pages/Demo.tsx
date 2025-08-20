import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

import heroImage from "@/assets/hero-tiger.jpg";
import Footer from "@/components/Footer";

const Demo = () => {
  const handlePlayNow = () => {
    window.open('/go', '_blank');
  };

  const demoFeatures = [
    { icon: "✅", text: "Sem risco" },
    { icon: "🎰", text: "Sem necessidade de cadastro" },
    { icon: "💸", text: "Versão idêntica à paga" }
  ];

  const simulatorTips = [
    "Alterar valor da aposta",
    "Observar padrão dos bônus", 
    "Usar ciclos curtos de 10–15 min"
  ];

  const apkSteps = [
    "Baixe o arquivo",
    "Ative fontes desconhecidas",
    "Instale e jogue"
  ];

  const demoAccountSteps = [
    { icon: "👤", title: "Criar conta demo", desc: "Acesso instantâneo sem dados pessoais" },
    { icon: "💾", title: "Jogar com progressos salvos", desc: "Seus resultados ficam salvos para análise" },
    { icon: "🎁", title: "Receber bônus mesmo no modo treino", desc: "Experiência completa do jogo real" }
  ];

  return (
    <div className="min-h-screen bg-gaming-bg">
      <Navigation />
      {/* Hero Section with Game Iframe */}
      <section className="relative min-h-screen flex flex-col items-center justify-center bg-gaming-bg py-20">
        <div className="container mx-auto px-4 text-center mb-8">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 text-white">
            Jogue <span className="text-gaming-gold">Fortune Tiger Demo</span> 
            <br />Grátis com Dinheiro Infinito
          </h1>
          
          <p className="text-lg md:text-xl mb-6 text-gray-200 font-medium">
            Treine sem risco antes de apostar com dinheiro real
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 text-sm md:text-base text-gray-300 mb-8">
            <div className="flex items-center gap-2">
              <span className="text-gaming-gold">✓</span>
              Modo demo completo
            </div>
            <div className="flex items-center gap-2">
              <span className="text-gaming-gold">✓</span>
              Dinheiro virtual infinito
            </div>
            <div className="flex items-center gap-2">
              <span className="text-gaming-gold">✓</span>
              Sem cadastro necessário
            </div>
          </div>
        </div>
        
        {/* Game Iframe */}
        <div className="w-full max-w-4xl mx-auto px-4">
          <div className="bg-gradient-gold p-2 rounded-2xl shadow-2xl">
            <iframe 
              className="w-full h-[600px] md:h-[700px] lg:h-[800px] rounded-xl"
              id="game-frame" 
              src="https://pg-static.casinomobule.com/126/index.html?__refer=m.https%3A%2F%2Fpg-test.casinomobule.com&ot=demo-575326-9a9488ae-1621-4aa6-9887-5399248f7e1a&or=pg-static.casinomobule.com&btt=2&l=en&from=https%3A%2F%2Fcopyslots.com%2F&__hv=1f8e1d3b&language=en_EN"
              title="Fortune Tiger Demo Game"
              allow="fullscreen; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          
          <div className="text-center mt-6">
            <Button 
              variant="gaming-gold" 
              size="xl"
              onClick={handlePlayNow}
              className="text-base sm:text-lg md:text-xl px-6 sm:px-12 py-4 sm:py-6 pulse-gaming w-full sm:w-auto max-w-full break-words"
            >
              🎁 Jogar com dinheiro real e bônus
            </Button>
          </div>
        </div>
      </section>

      {/* O que é a versão demo */}
      <section className="py-20 bg-gradient-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              O que é a <span className="text-gaming-gold">versão demo</span>?
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              {demoFeatures.map((feature, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-4 bg-card p-6 rounded-xl shadow-card"
                >
                  <div className="text-4xl">{feature.icon}</div>
                  <div className="text-white text-xl font-semibold">{feature.text}</div>
                </div>
              ))}
            </div>
            
            <div className="relative">
              <div className="bg-gradient-gold p-1 rounded-2xl">
                <img 
                  src="/lovable-uploads/f1e6a1ba-9c26-4dd4-b710-3f20495c9df7.png" 
                  alt="Fortune Tiger demo grátis interface do jogo mostrando tela de jogo completa com símbolos"
                  className="w-full rounded-xl shadow-card"
                />
              </div>
              <div className="absolute -top-4 -right-4 bg-gaming-green text-white px-6 py-3 rounded-full font-bold text-lg pulse-gaming">
                MODO DEMO
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fortune Tiger 2 Demo */}
      <section className="py-20 bg-gaming-bg">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              <span className="text-gaming-gold">Fortune Tiger 2</span> Demo
            </h2>
          </div>
          
          <Card className="max-w-4xl mx-auto bg-card border-gaming-gold/20">
            <CardHeader>
              <CardTitle className="text-center text-2xl text-white">
                Compare as Versões Demo
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="text-center">
                  <h3 className="text-lg sm:text-xl font-bold text-gaming-gold mb-4">Fortune Tiger Original</h3>
                  <div className="space-y-2 text-gray-300 text-sm sm:text-base">
                    <p>• RTP 96.81%</p>
                    <p>• 3x3 rolos</p>
                    <p>• Multiplicador até 2500x</p>
                  </div>
                  <Button 
                    variant="gaming-gold" 
                    className="mt-4 w-full text-sm sm:text-base"
                    onClick={handlePlayNow}
                  >
                    Jogar Demo Original
                  </Button>
                </div>
                
                <div className="text-center">
                  <h3 className="text-lg sm:text-xl font-bold text-gaming-gold mb-4">Fortune Tiger 2</h3>
                  <div className="space-y-2 text-gray-300 text-sm sm:text-base">
                    <p>• RTP 97.12%</p>
                    <p>• 5x3 rolos</p>
                    <p>• Multiplicador até 5000x</p>
                  </div>
                  <Button 
                    variant="gaming-gold" 
                    className="mt-4 w-full text-sm sm:text-base"
                    onClick={handlePlayNow}
                  >
                    Jogar Demo 2 Agora
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Simulador */}
      <section className="py-20 bg-gradient-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Simulador: como jogar no <span className="text-gaming-gold">modo teste</span>
            </h2>
          </div>
          
          <Card className="max-w-4xl mx-auto bg-card border-gaming-gold/20">
            <CardContent className="p-8">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-xl font-bold text-gaming-gold mb-6">Dicas para o Simulador:</h3>
                  <div className="space-y-4">
                    {simulatorTips.map((tip, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-gaming-gold text-black rounded-full flex items-center justify-center font-bold">
                          {index + 1}
                        </div>
                        <span className="text-gray-200">{tip}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="bg-gradient-gold p-1 rounded-2xl mb-6">
                    <div className="bg-card p-8 rounded-xl">
                      <div className="text-6xl mb-4">🎰</div>
                      <div className="text-gaming-gold font-bold text-lg">Modo Simulação</div>
                      <div className="text-gray-300 text-sm mt-2">Teste estratégias sem riscos</div>
                    </div>
                  </div>
                  <Button 
                    variant="gaming-gold" 
                    size="lg"
                    onClick={handlePlayNow}
                    className="w-full"
                  >
                    Iniciar Simulador
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* APK Download */}
      <section className="py-20 bg-gaming-bg">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              APK Download para <span className="text-gaming-gold">Android</span>
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <Card className="bg-card border-gaming-gold/20">
              <CardHeader className="text-center">
                <div className="text-6xl mb-4">📱</div>
                <CardTitle className="text-gaming-gold">Download APK</CardTitle>
              </CardHeader>
              <CardContent>
                <Button 
                  variant="gaming-gold" 
                  size="xl"
                  onClick={handlePlayNow}
                  className="w-full mb-6 text-lg bg-green-600 hover:bg-green-700"
                >
                  ⬇️ Baixar APK
                </Button>
                
                <div className="space-y-3">
                  <h4 className="font-bold text-white mb-3">Passos para instalação:</h4>
                  {apkSteps.map((step, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <Badge variant="secondary" className="bg-gaming-gold text-black">
                        {index + 1}
                      </Badge>
                      <span className="text-gray-200">{step}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-card border-gaming-red/20">
              <CardHeader className="text-center">
                <div className="text-6xl mb-4">🍎</div>
                <CardTitle className="text-gaming-red">iOS (iPhone/iPad)</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="mb-6">
                  <span className="text-gaming-red text-4xl">❌</span>
                  <p className="text-gray-300 mt-2">
                    iOS: use versão web no Safari
                  </p>
                </div>
                <Button 
                  variant="gaming-gold" 
                  size="lg"
                  onClick={handlePlayNow}
                  className="w-full"
                >
                  Jogar no Safari
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Conta Demo */}
      <section className="py-20 bg-gradient-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Conta demo: <span className="text-gaming-gold">como funciona</span>?
            </h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {demoAccountSteps.map((step, index) => (
              <Card key={index} className="bg-card border-gaming-gold/20 hover:border-gaming-gold/50 transition-all duration-300">
                <CardHeader className="text-center pb-4">
                  <div className="text-4xl sm:text-5xl mb-4">{step.icon}</div>
                  <CardTitle className="text-gaming-gold text-base sm:text-lg">{step.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center pt-0">
                  <p className="text-gray-300 text-sm sm:text-base">{step.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gaming-bg">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto bg-gradient-button border-gaming-gold text-center">
            <CardContent className="p-12">
              <div className="text-6xl mb-6">🎁</div>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Pronto para apostar de verdade com <span className="text-gaming-gold">bônus</span>?
              </h2>
              <p className="text-xl text-gray-200 mb-8">
                Use a mesma plataforma da demo e receba até R$200 grátis
              </p>
              <Button 
                variant="gaming-gold" 
                size="xl"
                onClick={handlePlayNow}
                className="text-base sm:text-xl px-6 sm:px-12 py-4 sm:py-6 pulse-gaming w-full sm:w-auto max-w-full break-words"
              >
                🎁 Jogar Fortune Tiger com bônus
              </Button>
              
              <div className="flex flex-wrap justify-center gap-3 sm:gap-8 mt-8 text-xs sm:text-sm text-gray-300">
                <div className="flex items-center gap-2">
                  <span className="text-gaming-gold">✓</span>
                  Bônus de até R$200
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-gaming-gold">✓</span>
                  Mesma interface da demo
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-gaming-gold">✓</span>
                  Saques rápidos
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Fixed Bottom CTA for Mobile */}
      <div className="fixed bottom-0 left-0 right-0 bg-gaming-red p-4 md:hidden z-50">
        <Button 
          variant="gaming-gold" 
          size="lg"
          onClick={handlePlayNow}
          className="w-full font-bold"
        >
          🎰 Jogar Agora
        </Button>
      </div>
      
      <Footer />
    </div>
  );
};

export default Demo;
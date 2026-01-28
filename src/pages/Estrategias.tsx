import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

const Estrategias = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Estratégias e Dicas para Jogar Fortune Tiger",
    "description": "Descubra as melhores estratégias, horários e dicas para jogar Fortune Tiger de forma inteligente.",
    "author": {
      "@type": "Organization",
      "name": "Fortune Demo"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Fortune Demo"
    },
    "datePublished": "2025-01-01",
    "dateModified": "2025-01-28"
  };
  const handlePlayNow = () => {
    window.open('/go', '_blank');
  };

  const bestTimes = [
    { time: "01h – 04h", reason: "Menor tráfego de jogadores" },
    { time: "10h – 12h", reason: "Sessões mais estáveis" },
    { time: "Segundas-feiras", reason: "Após bônus semanais" }
  ];

  const strategies = [
    {
      title: "Aposta Fixa",
      description: "Definir um valor único para todas as rodadas (ex: R$1,00), ideal para jogar por mais tempo e evitar perdas rápidas.",
      icon: "🎯"
    },
    {
      title: "Aposta Progressiva",
      description: "Aumentar o valor da aposta após perdas leves, mas com limite.",
      icon: "📈"
    },
    {
      title: "Parar com lucro",
      description: "Se ganhou 2x ou 3x a banca inicial, encerrar a sessão.",
      icon: "🛑"
    },
    {
      title: "Rodadas curtas",
      description: "Jogar em blocos de 10 a 15 giros com pausas.",
      icon: "⏱️"
    }
  ];

  const bankManagementTips = [
    "Jogue apenas com dinheiro que você pode perder",
    "Divida a banca (ex: R$50 por sessão)",
    "Defina limites de ganho/perda"
  ];

  const myths = [
    {
      question: "Existem horários mágicos para ganhar?",
      answer: "Não. O jogo usa RNG certificado — cada rodada é completamente aleatória e independente das anteriores."
    },
    {
      question: "É possível identificar padrões no jogo?",
      answer: "Embora você possa registrar suas sessões e observar o comportamento do Wild, cada resultado é aleatório. Padrões percebidos são coincidências."
    },
    {
      question: "Robôs podem garantir ganhos?",
      answer: "Não existem robôs legítimos que possam prever ou manipular os resultados. Qualquer promessa nesse sentido é golpe."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Estratégias Fortune Tiger | Dicas e Melhores Horários 2025"
        description="Melhores estratégias para jogar Fortune Tiger. Dicas de banca, horários ideais, mitos desvendados. Jogue de forma inteligente!"
        canonical="/estrategias"
        keywords="estratégias fortune tiger, dicas fortune tiger, melhores horários fortune tiger, como ganhar fortune tiger, macetes tigrinho"
        jsonLd={jsonLd}
      />
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-16 bg-gradient-hero text-center relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto relative z-10">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Estratégias e Dicas para Jogar <span className="text-gaming-gold">Fortune Tiger</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8">
              Descubra como jogar de forma mais inteligente e aumentar suas chances.
            </p>
            <Button 
              variant="gaming" 
              size="xl"
              onClick={handlePlayNow}
              className="pulse-gaming text-sm sm:text-base px-4 sm:px-8 py-3 sm:py-4 whitespace-nowrap"
            >
              Jogar com Bônus Agora
            </Button>
          </div>
        </div>
      </section>

      {/* Estratégias principais */}
      <section className="py-20 bg-gradient-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Estratégias <span className="text-gaming-gold">Principais</span>
            </h2>
          </div>

          <div className="max-w-4xl mx-auto mb-12">
            <Alert className="border-gaming-gold/30 bg-gaming-gold/10">
              <AlertDescription className="text-lg">
                Antes de mais nada, vale reforçar: <strong>Fortune Tiger é um jogo de azar</strong>, com base em um gerador de números aleatórios (RNG). Ou seja, <strong>não existe fórmula mágica</strong> para ganhar sempre.
              </AlertDescription>
            </Alert>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {strategies.map((strategy, index) => (
              <Card key={index} className="bg-card border-gaming-gold/20 hover:border-gaming-gold/50 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-white flex items-center gap-3">
                    <span className="text-2xl">{strategy.icon}</span>
                    {strategy.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">{strategy.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gaming-gold text-lg">
              Use o modo demo para testar essas estratégias antes de apostar com dinheiro real.
            </p>
          </div>
        </div>
      </section>

      {/* Melhor Horário para Jogar */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Melhor <span className="text-gaming-gold">Horário</span> para Jogar
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="bg-card border-gaming-gold/20">
              <CardContent className="p-8">
                <Table>
                  <TableHeader>
                    <TableRow className="border-gaming-gold/30">
                      <TableHead className="text-gaming-gold font-bold">Horário</TableHead>
                      <TableHead className="text-gaming-gold font-bold">Justificativa</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {bestTimes.map((time, index) => (
                      <TableRow key={index} className="border-gaming-gold/20">
                        <TableCell className="text-white font-medium">{time.time}</TableCell>
                        <TableCell className="text-gray-300">{time.reason}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
                
                <div className="mt-6 p-4 bg-gaming-gold/10 rounded-lg border border-gaming-gold/30">
                  <p className="text-gray-300 text-sm">
                    ⚠️ <em>Esses dados são baseados em observações de jogadores. Não são garantias matemáticas.</em>
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Táticas e Gerenciamento de Banca */}
      <section className="py-20 bg-gradient-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Táticas e <span className="text-gaming-gold">Gerenciamento de Banca</span>
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="bg-card border-gaming-gold/20 mb-8">
              <CardContent className="p-8">
                <p className="text-lg text-white mb-6">
                  A sua <strong className="text-gaming-gold">banca</strong> é o que define quanto tempo você poderá jogar e quais riscos pode correr.
                </p>
                
                <h3 className="text-xl font-bold text-gaming-gold mb-4">Boas práticas:</h3>
                <ul className="space-y-3 mb-8">
                  {bankManagementTips.map((tip, index) => (
                    <li key={index} className="flex items-start gap-3 text-gray-300">
                      <span className="text-gaming-gold">•</span>
                      {tip}
                    </li>
                  ))}
                </ul>

                <div className="bg-gaming-gold/10 p-4 sm:p-6 rounded-lg border border-gaming-gold/30">
                  <h3 className="text-base sm:text-lg font-bold text-gaming-gold mb-4">Exemplo prático:</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                    <div className="space-y-1">
                      <p className="text-white"><strong>Banca:</strong> R$200</p>
                      <p className="text-white"><strong>Aposta por rodada:</strong> R$1</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-white"><strong>Parar com lucro:</strong> R$300</p>
                      <p className="text-white"><strong>Parar com prejuízo:</strong> R$100</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Padrões, Sorte e Mitos */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Padrões, Sorte e <span className="text-gaming-gold">Mitos</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Muitos jogadores juram que existem padrões ou "horas mágicas". 
              Mas o jogo usa RNG certificado — cada rodada é aleatória.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {myths.map((myth, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="bg-card border-gaming-gold/20 rounded-lg px-6">
                  <AccordionTrigger className="text-white hover:text-gaming-gold">
                    {myth.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300 pb-4">
                    {myth.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <div className="mt-8 p-6 bg-gaming-gold/10 rounded-lg border border-gaming-gold/30 text-center">
              <p className="text-gray-300">
                Você pode registrar suas sessões, observar o comportamento do Wild, e testar padrões no modo demo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Robôs e Plataformas Fake */}
      <section className="py-20 bg-gradient-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Alert className="bg-red-900/20 border-red-500/50 text-white">
              <AlertDescription className="text-lg">
                <div className="flex items-start gap-3">
                  <span className="text-red-400 text-xl">⚠️</span>
                  <div>
                    <h3 className="text-xl font-bold text-red-400 mb-3">Cuidado!</h3>
                    <p className="mb-4">
                      Cresce o número de promessas como "robôs que acertam bônus" ou "plataformas que pagam sempre".
                    </p>
                    <p className="mb-4">
                      <strong>Tudo isso é golpe.</strong> O jogo é da PG Soft e auditado por entidades como MGA.
                    </p>
                    <p>
                      <strong>Não existe como manipular o resultado.</strong>
                    </p>
                  </div>
                </div>
              </AlertDescription>
            </Alert>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-6xl font-bold text-white mb-8 leading-tight">
              Você não precisa de truques secretos. <br className="hidden sm:block" />
              Precisa de <span className="text-gaming-gold">controle e estratégia</span>.
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-3xl mx-auto">
              {[
                { icon: "🔁", text: "Teste no modo demo" },
                { icon: "🎯", text: "Gerencie sua banca" },
                { icon: "⏰", text: "Escolha horários estratégicos" },
                { icon: "🚫", text: "Evite falsas promessas" }
              ].map((tip, index) => (
                <div key={index} className="text-center p-3 sm:p-4 bg-white/10 rounded-lg backdrop-blur-sm">
                  <div className="text-2xl sm:text-3xl mb-2">{tip.icon}</div>
                  <p className="text-white text-xs sm:text-sm font-medium leading-tight">{tip.text}</p>
                </div>
              ))}
            </div>
            
            <Button 
              variant="gaming-gold" 
              size="xl"
              onClick={handlePlayNow}
              className="text-base sm:text-xl px-6 sm:px-16 py-4 sm:py-8 pulse-gaming text-gaming-black font-bold w-full sm:w-auto max-w-full break-words text-center"
            >
              Jogar Fortune Tiger com bônus
            </Button>
          </div>
        </div>
      </section>

      {/* Floating CTA Button for Desktop */}
      <div className="hidden lg:block fixed bottom-6 right-6 z-50">
        <Button 
          variant="gaming-gold" 
          size="lg"
          onClick={handlePlayNow}
          className="shadow-2xl pulse-gaming rounded-full px-4 py-2 text-sm whitespace-nowrap"
        >
          Jogar Agora
        </Button>
      </div>
      
      <Footer />
    </div>
  );
};

export default Estrategias;
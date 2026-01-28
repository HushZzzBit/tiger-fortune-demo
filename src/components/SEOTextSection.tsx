import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Shield, Zap, Clock, Wallet, Check, Lock, Smartphone, Target } from "lucide-react";

const SEOTextSection = () => {
  const handleCTA = () => {
    window.open('/go', '_blank');
  };

  const symbols = [
    { icon: "🐯", name: "Wild (Tigre)", payout: "250×", highlight: true },
    { icon: "🏮", name: "Lingote de ouro", payout: "100×" },
    { icon: "🧿", name: "Amuleto", payout: "25×" },
    { icon: "🧧", name: "Envelope vermelho", payout: "8×" },
    { icon: "🎆", name: "Fogos", payout: "5×" },
    { icon: "🍊", name: "Laranja", payout: "3×" },
  ];

  const horarios = [
    {
      janela: "Madrugada (01h–04h)",
      subtitle: "melhor horário para jogar Fortune Tiger madrugada",
      relato: "Menor tráfego, sessões mais \"estáveis\"",
      uso: "Bom para focar em demo, anotar padrões e testar alternância de aposta"
    },
    {
      janela: "Manhã (10h–11h)",
      subtitle: "melhor horário para jogar Fortune Tiger de manhã",
      relato: "Pós-manutenção em algumas plataformas",
      uso: "Curta (10–15 min), aposta baixa e atenção ao Lucky Tiger"
    },
    {
      janela: "Tarde (14h–16h)",
      subtitle: "melhor horário para jogar Fortune Tiger a tarde",
      relato: "Ritmo moderado",
      uso: "Regravar metas de stop-loss/stop-win"
    },
    {
      janela: "Noite (20h–22h)",
      subtitle: "melhor horário para jogar Fortune Tiger noite",
      relato: "Tráfego alto, mais variância",
      uso: "Aposte menor; foque em controlar banca"
    },
  ];

  const checklist = [
    "Defini banca diária e stop-loss",
    "Comecei na demo grátis",
    "Usei aposta fixa nas primeiras rodadas",
    "Testei horários (manhã/tarde/noite/madrugada)",
    "Ativei som para perceber sinais de bônus",
    "Evitei \"dobrar sempre\" após perda"
  ];

  return (
    <section className="py-16 md:py-24 px-4 bg-background" id="seo-text">
      <div className="container mx-auto max-w-5xl">
        
        {/* H2 - Main Title */}
        <header className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-bold mb-6 text-foreground">
            Fortune Tiger Demo — guia rápido para começar agora
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Quer jogar Fortune Tiger demo com segurança e entender como tirar o máximo do jogo do tigrinho? 
            Nesta seção reunimos tudo: do como jogar Fortune Tiger aos melhores horários (manhã, tarde, noite, madrugada) 
            segundo observações de jogadores — sempre com responsabilidade e sem promessas.
          </p>
        </header>

        {/* Expert Disclaimer */}
        <blockquote className="bg-[#FAF6EE] border-l-4 border-primary p-4 md:p-6 rounded-r-xl mb-12">
          <p className="text-sm md:text-base text-[#111111]">
            <strong className="text-primary">Nota do especialista:</strong> Fortune Tiger usa RNG (gerador de números aleatórios). 
            <em> Não há horários garantidos de pagamento.</em> As dicas abaixo são baseadas em padrões relatados pela comunidade 
            e sessões de teste no modo demo.
          </p>
        </blockquote>

        {/* Section A - O que é o modo demo */}
        <section className="mb-12" id="demo">
          <h3 className="text-xl md:text-2xl font-bold mb-4 text-foreground flex items-center gap-2">
            <Target className="w-6 h-6 text-primary" aria-hidden="true" />
            O que é o modo demo e para que serve
          </h3>
          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <Card className="bg-card border-border/50">
              <CardContent className="p-4 md:p-6">
                <div className="text-2xl mb-2" aria-hidden="true">🎮</div>
                <h4 className="font-semibold mb-2 text-foreground">Treino sem risco</h4>
                <p className="text-sm text-muted-foreground">Saldo virtual ilimitado para entender ritmo, bônus e variação.</p>
              </CardContent>
            </Card>
            <Card className="bg-card border-border/50">
              <CardContent className="p-4 md:p-6">
                <div className="text-2xl mb-2" aria-hidden="true">💰</div>
                <h4 className="font-semibold mb-2 text-foreground">Teste de banca</h4>
                <p className="text-sm text-muted-foreground">Simule valores (R$0,25–R$5) e veja como sua gestão se comporta.</p>
              </CardContent>
            </Card>
            <Card className="bg-card border-border/50">
              <CardContent className="p-4 md:p-6">
                <Smartphone className="w-8 h-8 text-primary mb-2" aria-hidden="true" />
                <h4 className="font-semibold mb-2 text-foreground">Acesso mobile</h4>
                <p className="text-sm text-muted-foreground">Jogue direto no navegador do celular ou via APK (Android).</p>
              </CardContent>
            </Card>
          </div>
          <div className="text-center">
            <Button variant="gaming" size="lg" onClick={handleCTA} className="min-h-[44px]">
              Abrir demo agora
            </Button>
          </div>
        </section>

        {/* Section B - Onde posso jogar */}
        <section className="mb-12 bg-[#FAF6EE] p-6 md:p-8 rounded-2xl" id="onde-jogar">
          <h3 className="text-xl md:text-2xl font-bold mb-4 text-[#111111] flex items-center gap-2">
            <Shield className="w-6 h-6 text-primary" aria-hidden="true" />
            Onde posso jogar a versão demo?
          </h3>
          <p className="text-[#222222] mb-4 leading-relaxed">
            Plataforma confiável para jogar Fortune Tiger: acesse com segurança, carregamento rápido, 
            versão original e opção de jogar slots grátis Fortune Tiger antes do depósito.
          </p>
          <a 
            href="/go" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-primary font-semibold hover:text-primary/80 underline underline-offset-4 transition-colors min-h-[44px] inline-flex items-center"
          >
            Abrir demo agora →
          </a>
        </section>

        {/* Section C - Jogar com dinheiro real */}
        <section className="mb-12" id="plataformas">
          <h3 className="text-xl md:text-2xl font-bold mb-4 text-foreground">
            Jogar Fortune Tiger com dinheiro real — as melhores plataformas
          </h3>
          <Card className="bg-card border-border/50 mb-6">
            <CardContent className="p-4 md:p-6">
              <h4 className="font-semibold mb-4 text-foreground">Critérios de seleção:</h4>
              <ul className="space-y-3">
                {[
                  "Licença ativa e criptografia SSL",
                  "Catálogo oficial PG Soft (versão original)",
                  "Bônus de boas-vindas transparentes",
                  "Pagamentos e suporte consistentes",
                  "UX responsivo (desktop, Android, iOS)"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-muted-foreground">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
          <p className="text-muted-foreground mb-4">
            <strong className="text-foreground">Dica:</strong> cadastre e ganhe bônus para jogar Fortune Tiger — bankroll mais folgado para testar apostas reais.
          </p>
          <a 
            href="/go" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-primary font-semibold hover:text-primary/80 underline underline-offset-4 transition-colors min-h-[44px] inline-flex items-center"
          >
            Entrar agora →
          </a>
        </section>

        {/* Section D - Gameplay e mecânica */}
        <section className="mb-12" id="gameplay">
          <h3 className="text-xl md:text-2xl font-bold mb-6 text-foreground">
            Gameplay e mecânica do Fortune Tiger
          </h3>
          
          {/* Two column info */}
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
              <CardContent className="p-4 md:p-6">
                <h4 className="font-semibold mb-2 text-foreground">Paylines</h4>
                <p className="text-muted-foreground text-sm">
                  Slot 3×3, 5 linhas de pagamento, combinações pagam com 3 símbolos iguais.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-gradient-to-br from-accent/10 to-primary/10 border-accent/20">
              <CardContent className="p-4 md:p-6">
                <h4 className="font-semibold mb-2 text-foreground">Especificações</h4>
                <p className="text-muted-foreground text-sm">
                  Volatilidade média, RTP ~96,81%, Lucky Tiger Bonus (evento aleatório), multiplicador x10.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Symbols Table */}
          <Card className="bg-card border-border/50 overflow-hidden">
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-muted/50">
                      <TableHead className="text-foreground font-semibold">Símbolo</TableHead>
                      <TableHead className="text-foreground font-semibold text-right">Pagamento (3 em linha)</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {symbols.map((symbol, index) => (
                      <TableRow key={index} className={symbol.highlight ? "bg-primary/5" : ""}>
                        <TableCell className="font-medium">
                          <span className="text-xl mr-2" aria-hidden="true">{symbol.icon}</span>
                          <span className={symbol.highlight ? "font-bold text-foreground" : "text-foreground"}>
                            {symbol.name}
                          </span>
                        </TableCell>
                        <TableCell className={`text-right ${symbol.highlight ? "font-bold text-primary" : "text-muted-foreground"}`}>
                          {symbol.payout} {symbol.highlight && "a aposta"}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Section E - Lucky Tiger Bonus */}
        <section className="mb-12 bg-gradient-to-r from-primary/5 to-accent/5 p-6 md:p-8 rounded-2xl border border-primary/20">
          <h3 className="text-xl md:text-2xl font-bold mb-4 text-foreground flex items-center gap-2">
            <span className="text-2xl" aria-hidden="true">🐯</span>
            <Zap className="w-5 h-5 text-accent" aria-hidden="true" />
            Lucky Tiger Bonus & x10
          </h3>
          <div className="space-y-4 text-muted-foreground">
            <p>
              <strong className="text-foreground">Lucky Tiger Bonus:</strong> evento aleatório em que a grade se preenche 
              com 1 símbolo + Wilds; enquanto cair símbolo válido ou Wild, os giros extras continuam.
            </p>
            <p>
              <strong className="text-foreground">Multiplicador x10:</strong> se todas as bobinas pagarem na mesma rodada, 
              aplica-se x10 sobre o ganho.
            </p>
          </div>
        </section>

        {/* Section F - Estratégias */}
        <section className="mb-12" id="estrategias">
          <h3 className="text-xl md:text-2xl font-bold mb-6 text-foreground flex items-center gap-2">
            <Wallet className="w-6 h-6 text-primary" aria-hidden="true" />
            Estratégias de aposta no Fortune Tiger
          </h3>
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            {[
              { title: "Aposta fixa", desc: "Ideal para sessões longas e controle de banca." },
              { title: "Progressiva limitada", desc: "Aumentar levemente após perdas com teto definido." },
              { title: "Sessões curtas (10–15 min)", desc: "Pausar reduz decisões impulsivas." },
              { title: "Stop-loss / Stop-win", desc: "Encerre ao bater meta (ex.: +50%) ou limite de perda." },
            ].map((strategy, index) => (
              <Card key={index} className="bg-card border-border/50">
                <CardContent className="p-4">
                  <h4 className="font-semibold text-foreground mb-1">{strategy.title}</h4>
                  <p className="text-sm text-muted-foreground">{strategy.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <blockquote className="bg-[#FAF6EE] border-l-4 border-accent p-4 rounded-r-xl italic">
            <p className="text-[#111111]">"Minha regra pessoal: começo na demo, passo pro real só quando entendo a variação do dia."</p>
          </blockquote>
          <div className="mt-4">
            <a 
              href="/go" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary font-semibold hover:text-primary/80 underline underline-offset-4 transition-colors min-h-[44px] inline-flex items-center"
            >
              Abrir demo agora →
            </a>
          </div>
        </section>

        {/* Section G - RTP e Volatilidade */}
        <section className="mb-12" id="rtp-vol">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-lg md:text-xl font-bold mb-3 text-foreground">O que é RTP</h4>
              <p className="text-muted-foreground mb-4">
                Retorno teórico ao jogador (~96,81%) calculado no longo prazo. Não garante resultados por sessão.
              </p>
              <div className="bg-muted/30 rounded-full h-3 overflow-hidden">
                <div className="bg-gradient-to-r from-primary to-accent h-full w-[96.81%] rounded-full"></div>
              </div>
              <p className="text-xs text-muted-foreground mt-1">RTP: 96,81%</p>
            </div>
            <div>
              <h4 className="text-lg md:text-xl font-bold mb-3 text-foreground">Volatilidade</h4>
              <p className="text-muted-foreground mb-4">
                Média: alterna momentos de giros "secos" e picos com bônus. Ajuste a aposta ao seu conforto.
              </p>
              <div className="bg-muted/30 rounded-full h-3 overflow-hidden">
                <div className="bg-gradient-to-r from-accent to-primary h-full w-[50%] rounded-full"></div>
              </div>
              <p className="text-xs text-muted-foreground mt-1">Volatilidade: Média</p>
            </div>
          </div>
        </section>

        {/* Section H - Melhor horário */}
        <section className="mb-12" id="horarios">
          <h3 className="text-xl md:text-2xl font-bold mb-6 text-foreground flex items-center gap-2">
            <Clock className="w-6 h-6 text-primary" aria-hidden="true" />
            Melhor horário para jogar Fortune Tiger
          </h3>
          <Card className="bg-card border-border/50 overflow-hidden">
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-muted/50">
                      <TableHead className="text-foreground font-semibold min-w-[200px]">Janela de horário</TableHead>
                      <TableHead className="text-foreground font-semibold min-w-[200px]">O que a comunidade relata</TableHead>
                      <TableHead className="text-foreground font-semibold min-w-[250px]">Uso prático</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {horarios.map((h, index) => (
                      <TableRow key={index}>
                        <TableCell>
                          <div className="font-medium text-foreground">{h.janela}</div>
                          <div className="text-xs text-muted-foreground">{h.subtitle}</div>
                        </TableCell>
                        <TableCell className="text-muted-foreground">{h.relato}</TableCell>
                        <TableCell className="text-muted-foreground">{h.uso}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
          <p className="text-xs text-muted-foreground mt-4 italic">
            Sem garantias matemáticas; use como referência de sessão e controle de banca.
          </p>
        </section>

        {/* Section I - Versão original */}
        <section className="mb-12" id="original">
          <h3 className="text-xl md:text-2xl font-bold mb-6 text-foreground flex items-center gap-2">
            <Lock className="w-6 h-6 text-primary" aria-hidden="true" />
            Como verificar se você joga a versão original do Fortune Tiger
          </h3>
          <div className="grid sm:grid-cols-2 gap-4 mb-6">
            {[
              { icon: "🎰", text: "Provedor PG Soft no catálogo" },
              { icon: "🔒", text: "SSL ativo (cadeado no navegador)" },
              { icon: "✅", text: "UI e recursos fiéis: 3×3, 5 linhas, Lucky Tiger, x10" },
              { icon: "📱", text: "Mobile sem apps \"cinzentos\" (iOS via navegador; Android via APK oficial)" },
            ].map((item, index) => (
              <Card key={index} className="bg-card border-border/50">
                <CardContent className="p-4 flex items-start gap-3">
                  <span className="text-2xl" aria-hidden="true">{item.icon}</span>
                  <span className="text-muted-foreground text-sm">{item.text}</span>
                </CardContent>
              </Card>
            ))}
          </div>
          <a 
            href="/go" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-primary font-semibold hover:text-primary/80 underline underline-offset-4 transition-colors min-h-[44px] inline-flex items-center"
          >
            Entrar agora →
          </a>
        </section>

        {/* Section J - Checklist */}
        <section className="mb-12 bg-[#FAF6EE] p-6 md:p-8 rounded-2xl">
          <h3 className="text-xl md:text-2xl font-bold mb-6 text-[#111111]">
            Mini-checklist antes de jogar
          </h3>
          <ul className="space-y-3">
            {checklist.map((item, index) => (
              <li key={index} className="flex items-center gap-3">
                <div className="w-6 h-6 rounded border-2 border-primary flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-primary" aria-hidden="true" />
                </div>
                <span className="text-[#222222]">{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Section K - Resumo + Main CTA */}
        <section className="text-center" id="resumo">
          <h3 className="text-xl md:text-2xl font-bold mb-6 text-foreground">
            Resumo em 30 segundos
          </h3>
          <ul className="inline-block text-left space-y-2 mb-8">
            {[
              "Demo primeiro; real depois (com bônus).",
              "Controle de banca > \"truques\".",
              "Horários: use como guia, não regra.",
              "Original sempre (PG Soft, SSL, UI correta)."
            ].map((item, index) => (
              <li key={index} className="flex items-start gap-2 text-muted-foreground">
                <span className="text-primary font-bold">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          
          <div>
            <Button 
              variant="gaming-gold" 
              size="xl" 
              onClick={handleCTA}
              className="text-lg px-10 py-6 min-h-[56px] font-bold"
            >
              🎁 Jogar com bônus
            </Button>
          </div>
        </section>

      </div>
    </section>
  );
};

export default SEOTextSection;

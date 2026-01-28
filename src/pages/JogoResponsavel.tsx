import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const JogoResponsavel = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gaming-gold mb-6">
              Jogo Responsável
            </h1>
            <p className="text-xl text-muted-foreground">
              Nosso compromisso é com a diversão consciente.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl space-y-12">
          
          {/* Introduction */}
          <div className="bg-card border rounded-lg p-8">
            <p className="text-lg leading-relaxed text-foreground">
              O objetivo deste site é fornecer informações educativas sobre o jogo Fortune Tiger, 
              com foco em conteúdo de qualidade e acesso gratuito à versão demo. Promovemos o 
              entretenimento com responsabilidade e reforçamos que o jogo não deve ser encarado 
              como fonte de renda ou solução financeira.
            </p>
          </div>

          {/* Jogar com consciência */}
          <div className="bg-card border rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gaming-gold mb-6 flex items-center gap-3">
              Jogar com consciência
            </h2>
            <p className="text-lg mb-4 text-foreground">
              Embora o jogo Fortune Tiger seja leve, divertido e empolgante, é importante lembrar que:
            </p>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="text-gaming-red">•</span>
                Jogos de cassino envolvem riscos financeiros
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gaming-red">•</span>
                A sorte é um fator predominante
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gaming-red">•</span>
                Nenhuma estratégia garante lucro constante
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gaming-gold">•</span>
                O controle está nas suas mãos
              </li>
            </ul>
          </div>

          {/* Práticas saudáveis */}
          <div className="bg-card border rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gaming-gold mb-6 flex items-center gap-3">
              Práticas saudáveis que recomendamos:
            </h2>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="text-green-500">✓</span>
                Defina um limite de tempo para jogar
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500">✓</span>
                Estabeleça um orçamento fixo (e nunca ultrapasse)
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500">✓</span>
                Nunca jogue para "recuperar perdas"
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500">✓</span>
                Faça pausas regulares
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500">✓</span>
                Não jogue quando estiver emocionalmente abalado
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-500">✓</span>
                Jogue apenas por diversão, não por obrigação
              </li>
            </ul>
          </div>

          {/* Sinais de alerta */}
          <div className="bg-card border rounded-lg p-8 border-red-500/20">
            <h2 className="text-2xl font-bold text-gaming-red mb-6 flex items-center gap-3">
              Sinais de alerta
            </h2>
            <p className="text-lg mb-4 text-foreground">
              Se você perceber qualquer um dos sinais abaixo, recomendamos procurar ajuda:
            </p>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="text-gaming-red">⚠</span>
                Perder o controle do tempo ou do dinheiro durante o jogo
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gaming-red">⚠</span>
                Jogar com dinheiro que deveria ser usado para necessidades básicas
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gaming-red">⚠</span>
                Sentir ansiedade, raiva ou tristeza durante ou após o jogo
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gaming-red">⚠</span>
                Mentir para amigos ou familiares sobre suas atividades de jogo
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gaming-red">⚠</span>
                Negligenciar responsabilidades pessoais ou profissionais
              </li>
            </ul>
          </div>

          {/* Onde buscar ajuda */}
          <div className="bg-card border rounded-lg p-8 border-blue-500/20">
            <h2 className="text-2xl font-bold text-gaming-gold mb-6 flex items-center gap-3">
              Onde buscar ajuda
            </h2>
            <p className="text-lg mb-6 text-foreground">
              Se você ou alguém próximo estiver enfrentando problemas com jogos, recomendamos contato com instituições especializadas:
            </p>
            <div className="space-y-4">
              <div className="bg-muted/50 rounded-lg p-4">
                <h3 className="font-semibold text-gaming-gold mb-2">Organizações de apoio:</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Gamblers Anonymous Brasil</li>
                  <li>• Instituto Jogo Responsável</li>
                  <li>• BeGambleAware (Internacional)</li>
                </ul>
              </div>
              <div className="bg-muted/50 rounded-lg p-4">
                <h3 className="font-semibold text-gaming-gold mb-2">Apoio por telefone:</h3>
                <p className="text-lg font-medium text-foreground">0800-880-2175 (Brasil)</p>
              </div>
            </div>
          </div>

          {/* Proibido para menores */}
          <div className="bg-card border rounded-lg p-8 border-orange-500/20">
            <h2 className="text-2xl font-bold text-orange-500 mb-6 flex items-center gap-3">
              Proibido para menores
            </h2>
            <p className="text-lg text-foreground">
              Este site é destinado exclusivamente para maiores de 18 anos.
              Não incentivamos nem permitimos o acesso de menores de idade a conteúdos sobre jogos ou cassinos, mesmo em versão demo.
            </p>
          </div>

          {/* Nossa posição */}
          <div className="bg-card border rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gaming-gold mb-6 flex items-center gap-3">
              Nossa posição
            </h2>
            <p className="text-lg text-foreground">
              Somos um site independente, que não opera apostas, não coleta dinheiro e não estimula comportamentos compulsivos. 
              Toda a experiência oferecida aqui é educativa, recreativa e voltada para o público responsável.
            </p>
          </div>

          {/* Aviso importante */}
          <div className="bg-gradient-to-r from-gaming-gold/10 to-gaming-red/10 border border-gaming-gold/30 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-gaming-gold mb-6 flex items-center justify-center gap-3">
              Aviso importante
            </h2>
            <p className="text-xl font-medium text-foreground mb-4">
              O jogo é uma forma de entretenimento — e deve permanecer assim.
            </p>
            <p className="text-lg text-gaming-red font-medium">
              Se deixar de ser divertido, pare e procure ajuda.
            </p>
          </div>

          {/* Contato */}
          <div className="bg-card border rounded-lg p-8 text-center">
            <h3 className="text-lg font-semibold text-gaming-gold mb-4">
              📧 Para mais informações sobre nossa política de responsabilidade:
            </h3>
            <a 
              href="mailto:info@oamorcontagia.site" 
              className="text-lg text-blue-400 hover:text-blue-300 transition-colors"
            >
              info@oamorcontagia.site
            </a>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
};

export default JogoResponsavel;
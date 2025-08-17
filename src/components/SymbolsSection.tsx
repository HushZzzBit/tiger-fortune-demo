import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const SymbolsSection = () => {
  const symbols = [
    {
      name: "Wild Tiger",
      multiplier: "x250",
      description: "Wild symbol. Replaces other symbols to form winning combinations.",
      icon: "🐅"
    },
    {
      name: "Golden Pot",
      multiplier: "x100", 
      description: "If you bet the maximum, you will win $1000 per line played.",
      icon: "🏆"
    },
    {
      name: "Lucky Cat",
      multiplier: "x25",
      description: "By betting the maximum value, you will receive $250 per line.",
      icon: "🍀"
    },
    {
      name: "Treasure Bag",
      multiplier: "x10",
      description: "With the bet at the limit, winnings of $100 per line are yours.",
      icon: "💰"
    },
    {
      name: "Gold Cards",
      multiplier: "x8",
      description: "When betting the maximum, it's $80 per line played.",
      icon: "🃏"
    },
    {
      name: "Blue Gem",
      multiplier: "x5", 
      description: "At the highest possible bet, the prize is $50 per line.",
      icon: "💎"
    },
    {
      name: "Orange",
      multiplier: "x3",
      description: "With the maximum bet, each line played yields R$30.",
      icon: "🍊"
    }
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-background via-background/95 to-accent/5">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Símbolos do Fortune Tiger
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Conheça todos os símbolos do jogo e seus respectivos multiplicadores para maximizar seus ganhos
          </p>
        </div>

        <Card className="backdrop-blur-sm bg-card/90 border border-border/50 shadow-xl">
          <CardHeader>
            <CardTitle className="text-2xl text-center">
              Tabela de Símbolos e Significados
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="border-border/50">
                    <TableHead className="text-center w-20">Símbolo</TableHead>
                    <TableHead className="text-center w-32">Multiplicador</TableHead>
                    <TableHead>Descrição</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {symbols.map((symbol, index) => (
                    <TableRow key={index} className="border-border/30 hover:bg-accent/10 transition-colors">
                      <TableCell className="text-center">
                        <div className="text-3xl mb-1">{symbol.icon}</div>
                        <div className="text-xs text-muted-foreground font-medium">
                          {symbol.name}
                        </div>
                      </TableCell>
                      <TableCell className="text-center">
                        <div className="bg-primary/10 text-primary font-bold px-3 py-1 rounded-full inline-block">
                          {symbol.multiplier}
                        </div>
                      </TableCell>
                      <TableCell className="text-sm">
                        {symbol.description}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
            
            <div className="mt-8 p-6 bg-gradient-to-r from-primary/5 to-accent/5 rounded-lg border border-primary/20">
              <h3 className="text-lg font-semibold mb-3 text-primary">💡 Dicas Importantes:</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>O símbolo Wild substitui todos os outros símbolos para formar combinações vencedoras</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Os valores mostrados são baseados na aposta máxima</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Quanto maior o multiplicador, maior a recompensa potencial</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Teste a versão demo para entender melhor as mecânicas do jogo</span>
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default SymbolsSection;
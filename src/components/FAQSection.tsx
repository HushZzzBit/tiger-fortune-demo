import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "Posso jogar de graça mesmo?",
      answer: "Sim! A versão demo do Fortune Tiger é 100% gratuita. Você recebe créditos virtuais ilimitados para testar o jogo sem gastar nada. É uma ótima forma de conhecer as mecânicas antes de jogar com dinheiro real."
    },
    {
      question: "Posso ganhar dinheiro real?",
      answer: "Na versão demo, os ganhos são apenas virtuais. Para ganhar dinheiro real, você precisa jogar na versão paga em um cassino licenciado. Recomendamos nossa parceira Hoster4Land, que oferece bônus generosos para novos jogadores."
    },
    {
      question: "Preciso fazer download?",
      answer: "Não! O Fortune Tiger funciona diretamente no seu navegador, seja no computador ou celular. Não há necessidade de baixar aplicativos ou instalar nada. Basta clicar e jogar instantaneamente."
    },
    {
      question: "O jogo é confiável?",
      answer: "Absolutamente! O Fortune Tiger é desenvolvido pela PG Soft, uma das principais empresas de jogos do mundo. O jogo possui RTP de 96.81% e é auditado regularmente por órgãos independentes para garantir a aleatoriedade dos resultados."
    },
    {
      question: "Tem app para celular?",
      answer: "O jogo funciona perfeitamente em qualquer dispositivo móvel através do navegador. A interface é totalmente responsiva e otimizada para smartphones e tablets, oferecendo a mesma experiência do desktop."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Perguntas <span className="text-gaming-gold">Frequentes</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Tire suas dúvidas sobre o Fortune Tiger e comece a jogar com confiança
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-gradient-card rounded-xl border border-gaming-gold/20 hover:border-gaming-gold/50 overflow-hidden"
              >
                <AccordionTrigger className="text-left px-6 py-4 text-white hover:text-gaming-gold transition-colors duration-300 [&[data-state=open]]:text-gaming-gold">
                  <span className="font-semibold">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-300 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        
        {/* Additional help section */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-4 text-sm text-gray-400">
            <span className="flex items-center gap-2">
              <span className="text-gaming-gold">💬</span>
              Suporte 24/7
            </span>
            <span className="flex items-center gap-2">
              <span className="text-gaming-gold">📧</span>
              suporte@fortunedemo.com
            </span>
            <span className="flex items-center gap-2">
              <span className="text-gaming-gold">🕐</span>
              Resposta em até 2h
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    navegacao: [
      { name: "Início", href: "/" },
      { name: "Como Jogar", href: "/como-jogar" },
      { name: "Demo", href: "/demo" },
      { name: "Estratégias", href: "#" }
    ],
    legal: [
      { name: "Política de Privacidade", href: "/politica-privacidade" },
      { name: "Termos de Uso", href: "/termos-uso" },
      { name: "Jogo Responsável", href: "/jogo-responsavel" },
      { name: "Contato", href: "/contato" }
    ]
  };

  return (
    <footer className="bg-gaming-black border-t border-gaming-gold/20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <img 
                src="/lovable-uploads/4b366b2a-2467-4f9c-a704-fd8f295221f2.png" 
                alt="Tigre da Sorte Fortune Tiger" 
                className="h-12 w-auto"
              />
              <div>
                <h3 className="text-xl font-bold text-white">Fortune Demo</h3>
                <p className="text-gaming-gold text-sm">Sua portal do Fortune Tiger</p>
              </div>
            </div>
            
            <p className="text-gray-400 mb-6 leading-relaxed">
              Site independente com foco em testes e análise do Fortune Tiger. 
              Oferecemos informações confiáveis e acesso às melhores plataformas 
              para você jogar com segurança.
            </p>
            
            <address className="not-italic">
              <p className="text-gray-400 text-sm mb-2">Contato:</p>
              <a 
                href="mailto:suporte@oamorcontagia.site" 
                className="text-gaming-gold hover:text-gaming-gold-light transition-colors duration-300"
              >
                suporte@oamorcontagia.site
              </a>
            </address>
          </div>
          
          <nav>
            <h4 className="text-white font-semibold mb-4">Navegação</h4>
            <ul className="space-y-2">
              {footerLinks.navegacao.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-gray-400 hover:text-gaming-gold transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          
          <nav>
            <h4 className="text-white font-semibold mb-4">Informações</h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-gray-400 hover:text-gaming-gold transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        
        <div className="border-t border-gaming-gold/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {currentYear} Fortune Demo - Todos os direitos reservados
            </p>
            
            <ul className="flex items-center gap-6 text-sm text-gray-400">
              <li className="flex items-center gap-2">
                <span className="text-gaming-gold" aria-hidden="true">🔞</span>
                +18 anos
              </li>
              <li className="flex items-center gap-2">
                <span className="text-gaming-gold" aria-hidden="true">🛡️</span>
                Jogo Responsável
              </li>
              <li className="flex items-center gap-2">
                <span className="text-gaming-gold" aria-hidden="true">🔒</span>
                Site Seguro
              </li>
            </ul>
          </div>
          
          <aside className="mt-6 p-4 bg-gaming-dark rounded-lg">
            <p className="text-xs text-gray-500 leading-relaxed">
              <strong>Aviso Importante:</strong> Este site é independente e não possui afiliação direta com a PG Soft ou outros desenvolvedores mencionados. 
              As informações são fornecidas apenas para fins educacionais e de entretenimento. 
              Jogue sempre com responsabilidade e estabeleça limites de tempo e dinheiro. 
              Se você tem problemas com jogos, procure ajuda profissional.
            </p>
          </aside>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
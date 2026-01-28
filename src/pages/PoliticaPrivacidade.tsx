import React from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Shield, User, Cookie, Target, ExternalLink, Lock, Phone, FileText } from "lucide-react";

const PoliticaPrivacidade = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="flex items-center justify-center mb-6">
            <Shield className="w-12 h-12 text-primary mr-4" />
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              Política de Privacidade
            </h1>
          </div>
          <p className="text-lg text-muted-foreground mb-4">
            Última atualização: 16 de agosto de 2025
          </p>
          <p className="text-xl text-foreground max-w-3xl mx-auto">
            Bem-vindo ao nosso site! A sua privacidade é extremamente importante para nós.
          </p>
          <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">
            Somos um site independente de análises e informações sobre o jogo Fortune Tiger e atuamos de forma transparente e respeitosa com os dados dos nossos usuários.
          </p>
        </div>
      </section>

      {/* Content Sections */}
      <section className="pb-16 px-4">
        <div className="container mx-auto max-w-4xl space-y-8">
          
          {/* Quem Somos */}
          <Card className="border-border bg-card">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <User className="w-8 h-8 text-primary mr-3" />
                <h2 className="text-2xl font-bold text-foreground">Quem somos</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Nosso site (doravante denominado "Plataforma") tem como objetivo fornecer conteúdo educativo e informativo sobre o jogo Fortune Tiger, incluindo guias, estratégias e links para plataformas licenciadas de cassino online.
              </p>
            </CardContent>
          </Card>

          {/* Informações que Coletamos */}
          <Card className="border-border bg-card">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <FileText className="w-8 h-8 text-primary mr-3" />
                <h2 className="text-2xl font-bold text-foreground">Informações que coletamos</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Ao navegar em nosso site, podemos coletar automaticamente informações de natureza técnica ou analítica, como:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Endereço IP</li>
                <li>• Tipo de navegador</li>
                <li>• Dispositivo utilizado</li>
                <li>• Tempo de permanência e páginas visitadas</li>
                <li>• Dados de cliques em links (ex: botões "Jogar agora")</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4 font-medium">
                Não coletamos dados sensíveis (como CPF, RG, dados bancários ou senhas).
              </p>
            </CardContent>
          </Card>

          {/* Uso de Cookies */}
          <Card className="border-border bg-card">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <Cookie className="w-8 h-8 text-primary mr-3" />
                <h2 className="text-2xl font-bold text-foreground">Uso de cookies</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Nosso site utiliza cookies para:
              </p>
              <ul className="space-y-2 text-muted-foreground mb-4">
                <li>• Analisar o comportamento do usuário no site (Google Analytics, Hotjar)</li>
                <li>• Medir o desempenho das campanhas (UTM, links de afiliados)</li>
                <li>• Salvar preferências de idioma ou tema (se aplicável)</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                Você pode desativar os cookies diretamente no seu navegador, mas isso pode afetar a experiência de navegação.
              </p>
            </CardContent>
          </Card>

          {/* Finalidade da Coleta */}
          <Card className="border-border bg-card">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <Target className="w-8 h-8 text-primary mr-3" />
                <h2 className="text-2xl font-bold text-foreground">Finalidade da coleta de dados</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Utilizamos os dados coletados para:
              </p>
              <ul className="space-y-2 text-muted-foreground mb-4">
                <li>• Melhorar a experiência do usuário</li>
                <li>• Fornecer conteúdo mais relevante</li>
                <li>• Analisar performance do site e dos parceiros</li>
                <li>• Garantir a segurança da navegação</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed font-medium">
                Não utilizamos seus dados para envio de SPAM ou venda a terceiros.
              </p>
            </CardContent>
          </Card>

          {/* Links de Terceiros */}
          <Card className="border-border bg-card">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <ExternalLink className="w-8 h-8 text-primary mr-3" />
                <h2 className="text-2xl font-bold text-foreground">Links de terceiros</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Nosso site contém links para sites parceiros, como plataformas de cassino licenciadas. Ao clicar nesses links, você será redirecionado para ambientes externos, que possuem suas próprias políticas de privacidade.
              </p>
              <p className="text-muted-foreground leading-relaxed font-medium">
                Recomendamos a leitura dessas políticas antes de fornecer qualquer informação pessoal.
              </p>
            </CardContent>
          </Card>

          {/* Seus Direitos */}
          <Card className="border-border bg-card">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <User className="w-8 h-8 text-primary mr-3" />
                <h2 className="text-2xl font-bold text-foreground">Seus direitos</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Nos comprometemos a cumprir a Lei Geral de Proteção de Dados (LGPD) no Brasil, além do GDPR da União Europeia. Você tem o direito de:
              </p>
              <ul className="space-y-2 text-muted-foreground mb-4">
                <li>• Solicitar acesso aos dados que temos sobre você</li>
                <li>• Corrigir ou excluir esses dados</li>
                <li>• Retirar o consentimento de uso a qualquer momento</li>
              </ul>
              <div className="bg-primary/10 border border-primary/20 rounded-lg p-4">
                <p className="text-muted-foreground">
                  Para exercer seus direitos, entre em contato conosco pelo e-mail:
                </p>
                <p className="text-primary font-medium mt-2">
                  📩 privacidade@oamorcontagia.site
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Segurança */}
          <Card className="border-border bg-card">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <Lock className="w-8 h-8 text-primary mr-3" />
                <h2 className="text-2xl font-bold text-foreground">Segurança da informação</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Adotamos práticas de segurança para proteger suas informações:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Criptografia SSL</li>
                <li>• Monitoramento constante do servidor</li>
                <li>• Hospedagem em ambiente seguro com proteção contra ataques</li>
              </ul>
            </CardContent>
          </Card>

          {/* Contato */}
          <Card className="border-border bg-card">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <Phone className="w-8 h-8 text-primary mr-3" />
                <h2 className="text-2xl font-bold text-foreground">Contato</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Se você tiver dúvidas ou solicitações relacionadas à nossa Política de Privacidade, entre em contato com:
              </p>
              <div className="bg-primary/10 border border-primary/20 rounded-lg p-4">
                <p className="text-foreground font-medium">Responsável pelo tratamento de dados:</p>
                <p className="text-muted-foreground">Equipe Fortune Demo</p>
                <p className="text-primary font-medium">📧 info@oamorcontagia.site</p>
              </div>
            </CardContent>
          </Card>

          {/* Alterações */}
          <Card className="border-border bg-card">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <FileText className="w-8 h-8 text-primary mr-3" />
                <h2 className="text-2xl font-bold text-foreground">Alterações nesta política</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Podemos atualizar esta Política de Privacidade periodicamente. A data da última atualização sempre será informada no topo desta página. Recomendamos que revise esta política regularmente.
              </p>
              <div className="bg-accent/20 border border-accent/30 rounded-lg p-4">
                <p className="text-foreground font-medium">
                  Ao continuar navegando neste site, você concorda com os termos desta Política de Privacidade.
                </p>
              </div>
            </CardContent>
          </Card>

        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PoliticaPrivacidade;
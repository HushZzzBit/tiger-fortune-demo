import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";
import { 
  Mail, 
  MessageCircle, 
  Send, 
  Clock, 
  MapPin, 
  Phone,
  Users,
  Shield,
  HelpCircle
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import SEOHead from "@/components/SEOHead";

const Contato = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contato - Fortune Demo",
    "description": "Entre em contato com a equipe Fortune Demo. Dúvidas, sugestões e parcerias.",
    "mainEntity": {
      "@type": "Organization",
      "name": "Fortune Demo",
      "email": "info@oamorcontagia.site",
      "contactPoint": {
        "@type": "ContactPoint",
        "email": "info@oamorcontagia.site",
        "contactType": "customer service",
        "availableLanguage": "Portuguese"
      }
    }
  };
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Mensagem enviada!",
      description: "Entraremos em contato em breve.",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <SEOHead
        title="Contato | Fortune Demo - Fale Conosco"
        description="Entre em contato com a equipe Fortune Demo. Tire dúvidas sobre Fortune Tiger, envie sugestões ou proponha parcerias."
        canonical="/contato"
        keywords="contato fortune tiger, suporte fortune demo, fale conosco, dúvidas fortune tiger"
        jsonLd={jsonLd}
      />
      <Navigation />
      
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4">
            <MessageCircle className="w-5 h-5" />
            <span className="font-medium">Entre em Contato</span>
          </div>
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            📞 Contato
          </h1>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Tem dúvidas sobre o Fortune Tiger? Precisa de ajuda ou quer dar sugestões? 
            Nossa equipe está aqui para ajudar você!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Formulário de Contato */}
          <Card className="border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Send className="w-6 h-6 text-primary" />
                Envie sua mensagem
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nome</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Seu nome completo"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">E-mail</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="seu@email.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="subject">Assunto</Label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    placeholder="Sobre o que você gostaria de falar?"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Mensagem</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Escreva sua mensagem aqui..."
                    className="min-h-[120px]"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                
                <Button type="submit" className="w-full" size="lg">
                  <Send className="w-4 h-4 mr-2" />
                  Enviar Mensagem
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Informações de Contato */}
          <div className="space-y-6">
            {/* E-mails de Contato */}
            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="w-6 h-6 text-primary" />
                  E-mails de Contato
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                    <HelpCircle className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-medium">Dúvidas Gerais</p>
                      <p className="text-sm text-muted-foreground">info@oamorcontagia.site</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                    <Shield className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-medium">Privacidade & LGPD</p>
                      <p className="text-sm text-muted-foreground">privacidade@oamorcontagia.site</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                    <Users className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-medium">Parcerias</p>
                      <p className="text-sm text-muted-foreground">parcerias@oamorcontagia.site</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Tempo de Resposta */}
            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="w-6 h-6 text-primary" />
                  Tempo de Resposta
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm">Dúvidas gerais: até 24 horas</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    <span className="text-sm">Questões técnicas: até 48 horas</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-sm">Parcerias: até 72 horas</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Sobre Nossa Equipe */}
            <Card className="border-primary/20 bg-primary/5">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-6 h-6 text-primary" />
                  Nossa Equipe
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Somos uma equipe dedicada de especialistas em jogos online, comprometidos 
                  em fornecer as melhores informações sobre o Fortune Tiger. Nossa missão é 
                  educar e orientar jogadores de forma responsável e transparente.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        <Separator className="my-12" />

        {/* FAQ Rápido */}
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-6">Perguntas Frequentes</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-primary/20">
              <CardContent className="pt-6">
                <HelpCircle className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Como jogar Fortune Tiger?</h3>
                <p className="text-sm text-muted-foreground">
                  Confira nosso guia completo na página "Como Jogar"
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-primary/20">
              <CardContent className="pt-6">
                <Shield className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-2">O site é seguro?</h3>
                <p className="text-sm text-muted-foreground">
                  Sim, somos um site informativo independente e seguro
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-primary/20">
              <CardContent className="pt-6">
                <Mail className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Precisa de ajuda?</h3>
                <p className="text-sm text-muted-foreground">
                  Entre em contato conosco usando o formulário acima
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
};

export default Contato;
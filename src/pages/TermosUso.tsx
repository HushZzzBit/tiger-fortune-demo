import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { 
  FileText, 
  Info, 
  Users, 
  Shield, 
  AlertTriangle, 
  ExternalLink, 
  Copyright, 
  RefreshCw, 
  Mail 
} from "lucide-react";

const TermosUso = () => {
  return (
    <main className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4">
            <FileText className="w-5 h-5" />
            <span className="font-medium">Termos de Uso</span>
          </div>
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            📄 Termos de Uso
          </h1>
          <p className="text-muted-foreground text-lg">
            Última atualização: 16 de agosto de 2025
          </p>
          <p className="text-muted-foreground mt-4 max-w-3xl mx-auto">
            Ao acessar ou utilizar este site, você concorda com os seguintes Termos de Uso. 
            Recomendamos que leia com atenção. Caso não concorde com algum dos termos, 
            pedimos que não continue a navegação.
          </p>
        </div>

        <div className="space-y-6">
          {/* Sobre o site */}
          <Card className="border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Info className="w-6 h-6 text-primary" />
                1. Sobre o site
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                Este é um site independente de caráter informativo, dedicado a fornecer análises, 
                guias, tutoriais e notícias sobre o jogo Fortune Tiger. Não operamos nenhuma 
                plataforma de apostas nem realizamos transações financeiras ou jogos por dinheiro real.
              </p>
              <p>
                Somos unicamente responsáveis pela produção de conteúdo editorial, não sendo 
                operadores de jogos.
              </p>
            </CardContent>
          </Card>

          {/* Acesso ao conteúdo */}
          <Card className="border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="w-6 h-6 text-primary" />
                2. Acesso ao conteúdo
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                O acesso ao conteúdo é gratuito e aberto ao público maior de 18 anos.
              </p>
              <p className="font-medium">Nosso conteúdo inclui:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Guias e estratégias sobre o jogo Fortune Tiger</li>
                <li>Informações sobre bônus e plataformas confiáveis</li>
                <li>Links para plataformas de terceiros (casinos licenciados)</li>
                <li>Versões demonstrativas do jogo (modo demo)</li>
              </ul>
            </CardContent>
          </Card>

          {/* Responsabilidade do usuário */}
          <Card className="border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="w-6 h-6 text-primary" />
                3. Responsabilidade do usuário
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>Ao navegar neste site, você concorda em:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Utilizar o conteúdo apenas para fins lícitos e pessoais</li>
                <li>Não tentar invadir, modificar ou prejudicar o funcionamento do site</li>
                <li>Ser maior de idade em sua jurisdição para acessar temas relacionados a jogos</li>
              </ul>
            </CardContent>
          </Card>

          {/* Isenção de responsabilidade */}
          <Card className="border-amber-500/20 bg-amber-50/50 dark:bg-amber-900/10">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-amber-700 dark:text-amber-400">
                <AlertTriangle className="w-6 h-6" />
                4. Isenção de responsabilidade
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                Este site não oferece serviços de apostas e não se responsabiliza por quaisquer 
                perdas financeiras ocorridas em sites de terceiros mencionados ou acessados por 
                meio de links aqui presentes.
              </p>
              <p>
                As informações aqui contidas são oferecidas com fins educacionais e informativos. 
                Não garantimos resultados nem sugerimos que o jogo Fortune Tiger seja uma forma de renda.
              </p>
              <p className="font-bold text-amber-700 dark:text-amber-400">
                O jogo envolve risco. Jogue com responsabilidade.
              </p>
            </CardContent>
          </Card>

          {/* Parcerias e links afiliados */}
          <Card className="border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ExternalLink className="w-6 h-6 text-primary" />
                5. Parcerias e links afiliados
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                Alguns links presentes no site são parceiros comerciais (afiliados). Ao clicar 
                neles e se registrar nas plataformas indicadas, podemos receber uma comissão — 
                sem custo adicional para o usuário.
              </p>
              <p>
                Essa monetização nos permite manter o conteúdo gratuito, atualizado e imparcial.
              </p>
            </CardContent>
          </Card>

          {/* Propriedade intelectual */}
          <Card className="border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Copyright className="w-6 h-6 text-primary" />
                6. Propriedade intelectual
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                Todo o conteúdo editorial, design, logotipos e textos são protegidos por direitos 
                autorais. É proibida a reprodução, total ou parcial, sem autorização prévia por escrito.
              </p>
              <p>
                O nome Fortune Tiger é marca registrada da PG Soft. Utilizamos essa marca apenas 
                com finalidade descritiva, conforme previsto na legislação de uso justo (fair use).
              </p>
            </CardContent>
          </Card>

          {/* Alterações nos termos */}
          <Card className="border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <RefreshCw className="w-6 h-6 text-primary" />
                7. Alterações nos termos
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Estes Termos de Uso podem ser atualizados a qualquer momento, sem aviso prévio. 
                A versão mais recente estará sempre disponível nesta página com a data de 
                modificação indicada no topo.
              </p>
            </CardContent>
          </Card>

          {/* Contato */}
          <Card className="border-primary/20 bg-primary/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="w-6 h-6 text-primary" />
                8. Contato
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Para dúvidas, sugestões ou pedidos legais, entre em contato com nossa equipe:
              </p>
              <div className="flex items-center gap-2 text-primary font-medium">
                <Mail className="w-4 h-4" />
                <span>contato@oamorcontagia.site</span>
              </div>
            </CardContent>
          </Card>

          <Separator className="my-8" />

          <div className="text-center p-6 bg-muted/50 rounded-lg">
            <p className="text-muted-foreground font-medium">
              Ao continuar utilizando este site, você confirma que leu, compreendeu e 
              aceitou os Termos de Uso acima descritos.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
};

export default TermosUso;
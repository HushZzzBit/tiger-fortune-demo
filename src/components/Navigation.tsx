import { Link, useLocation } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const location = useLocation();

  const navigationItems = [
    {
      title: "Início",
      href: "/",
      description: "Página principal com informações sobre Fortune Tiger"
    },
    {
      title: "Como Jogar",
      href: "/como-jogar",
      description: "Guia completo para iniciantes"
    },
    {
      title: "Demo Grátis",
      href: "/demo",
      description: "Jogue a versão demo gratuita"
    },
    {
      title: "Estratégias",
      href: "/estrategias",
      description: "Dicas e estratégias para jogar melhor"
    }
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2 md:space-x-3 min-w-0">
          <img 
            src="/lovable-uploads/4b366b2a-2467-4f9c-a704-fd8f295221f2.png" 
            alt="Tigre da Sorte Fortune Tiger" 
            className="h-8 md:h-10 w-auto flex-shrink-0"
          />
          <span className="text-lg md:text-xl font-bold text-gaming-gold truncate">Fortune Tiger</span>
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            {navigationItems.map((item) => (
              <NavigationMenuItem key={item.href}>
                <Link to={item.href}>
                  <NavigationMenuLink
                    className={cn(
                      navigationMenuTriggerStyle(),
                      location.pathname === item.href && "bg-accent text-accent-foreground"
                    )}
                  >
                    {item.title}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent">
                  Menu
                </NavigationMenuTrigger>
                <NavigationMenuContent className="w-[280px] bg-background border border-border shadow-lg">
                  <div className="grid gap-3 p-4">
                    {navigationItems.map((item) => (
                      <Link
                        key={item.href}
                        to={item.href}
                        className={cn(
                          "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                          location.pathname === item.href && "bg-accent text-accent-foreground"
                        )}
                      >
                        <div className="text-sm font-medium leading-none">
                          {item.title}
                        </div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          {item.description}
                        </p>
                      </Link>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* CTA Button */}
        <a
          href="https://storage.hoster4land.net"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:inline-flex items-center justify-center rounded-md bg-primary px-3 md:px-4 py-2 text-xs md:text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring whitespace-nowrap"
        >
          🎰 Jogar Agora
        </a>
      </div>
    </nav>
  );
};

export default Navigation;
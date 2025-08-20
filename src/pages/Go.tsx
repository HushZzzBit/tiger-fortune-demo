import { useEffect, useState } from "react";

const Go = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 200);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen bg-gradient-gaming flex items-center justify-center relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[url('/tiger-pattern.svg')] opacity-5" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gaming-gold/10 rounded-full blur-3xl animate-pulse-gaming" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gaming-red/10 rounded-full blur-2xl animate-pulse-gaming delay-1000" />
      
      {/* Loading Block */}
      <section className="relative z-10 text-center max-w-md mx-auto px-6">
        {/* Tiger Icon */}
        <div className="mb-8">
          <div className="w-24 h-24 mx-auto bg-gradient-to-br from-gaming-gold to-gaming-orange rounded-2xl flex items-center justify-center shadow-glow animate-bounce-soft">
            <img 
              src="/lovable-uploads/d66bb07d-8782-4d5e-a8f4-3482fd703a43.png" 
              alt="Fortune Tiger Wild Symbol" 
              className="w-16 h-16 object-contain"
            />
          </div>
        </div>

        {/* Title */}
        <h1 className="text-3xl font-bold text-gaming-gold mb-4 animate-glow-gaming">
          Fortune Tiger
        </h1>
        
        {/* Loading Text */}
        <p className="text-gaming-silver mb-8 text-lg">
          Preparando sua sorte...
        </p>

        {/* Progress Bar */}
        <div className="relative mb-6">
          <div className="w-full bg-background/20 rounded-full h-3 overflow-hidden backdrop-blur-sm border border-gaming-gold/20">
            <div 
              className="h-full bg-gradient-to-r from-gaming-gold via-gaming-orange to-gaming-red transition-all duration-300 ease-out relative"
              style={{ width: `${Math.min(progress, 100)}%` }}
            >
              <div className="absolute inset-0 bg-white/20 animate-pulse" />
            </div>
          </div>
          <div className="mt-2 text-gaming-gold font-mono text-sm">
            {Math.round(Math.min(progress, 100))}%
          </div>
        </div>

        {/* Loading Dots */}
        <div className="flex justify-center space-x-2">
          <div className="w-2 h-2 bg-gaming-gold rounded-full animate-bounce" />
          <div className="w-2 h-2 bg-gaming-orange rounded-full animate-bounce delay-100" />
          <div className="w-2 h-2 bg-gaming-red rounded-full animate-bounce delay-200" />
        </div>

        {/* Spinning Elements */}
        <div className="absolute -top-10 -left-10 w-20 h-20 border-2 border-gaming-gold/30 rounded-full animate-spin" />
        <div className="absolute -bottom-10 -right-10 w-16 h-16 border-2 border-gaming-orange/30 rounded-full animate-spin direction-reverse" />
      </section>
    </main>
  );
};

export default Go;
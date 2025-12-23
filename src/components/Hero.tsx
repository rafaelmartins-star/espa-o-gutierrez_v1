import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import heroImage from "@/assets/hero-venue.jpg";

const headlines = [
  "Espaço de celebrar",
  "Espaço de confraternizar",
  "Espaço de eternizar",
];

const Hero = () => {
  const [currentHeadline, setCurrentHeadline] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeadline((prev) => (prev + 1) % headlines.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Espaço Gutierrez - Salão de Eventos"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Animated Headline */}
          <div className="mb-6 h-20 md:h-24 flex items-center justify-center">
            <h1
              key={currentHeadline}
              className="font-display text-4xl md:text-6xl lg:text-7xl text-primary-foreground animate-text-reveal"
            >
              {headlines[currentHeadline]}
            </h1>
          </div>

          {/* Static Part */}
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl text-gold italic mb-8 animate-fade-in-up animation-delay-200">
            Espaço Gutierrez
          </h2>

          <p className="font-body text-lg md:text-xl text-primary-foreground/90 mb-10 max-w-2xl mx-auto animate-fade-in-up animation-delay-400">
            Há quase 20 anos transformando momentos especiais em memórias
            eternas. Seu evento merece um cenário inesquecível.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-600">
            <Button variant="heroSolid" size="xl">
              Agende sua Visita
            </Button>
            <Button variant="hero" size="xl">
              Conheça o Espaço
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#historia"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary-foreground/70 hover:text-primary-foreground transition-colors animate-float"
      >
        <ChevronDown size={32} />
      </a>
    </section>
  );
};

export default Hero;

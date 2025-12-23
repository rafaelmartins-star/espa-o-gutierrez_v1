import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Users,
  Music,
  Lightbulb,
  UtensilsCrossed,
  Flower2,
  Wine,
  HeadphonesIcon,
  Sparkles,
  Camera,
  Bath,
  UsersRound,
} from "lucide-react";

const amenities = [
  { icon: Users, label: "Até 220 convidados" },
  { icon: Music, label: "Boate com isolamento acústico" },
  { icon: Lightbulb, label: "Pista de LED e iluminação completa" },
  { icon: UtensilsCrossed, label: "Buffet completo incluído" },
  { icon: Flower2, label: "Decoração floral" },
  { icon: Wine, label: "Bar de drinks" },
  { icon: HeadphonesIcon, label: "DJ personalizado" },
  { icon: Sparkles, label: "Suíte/Camarim privativo" },
  { icon: Camera, label: "Área externa para fotos" },
  { icon: Bath, label: "Toaletes modernos (PNE)" },
  { icon: UsersRound, label: "Equipe de suporte dedicada" },
];

const Venue = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="espaco" ref={sectionRef} className="py-24 md:py-32 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span
            className={`inline-block font-body text-sm tracking-[0.3em] text-gold uppercase mb-4 ${
              isVisible ? "animate-fade-in-up" : "opacity-0"
            }`}
          >
            Estrutura Completa
          </span>

          <h2
            className={`font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 ${
              isVisible ? "animate-fade-in-up animation-delay-200" : "opacity-0"
            }`}
          >
            Nosso Espaço
          </h2>

          <div
            className={`w-24 h-0.5 bg-gold mx-auto mb-8 ${
              isVisible ? "animate-fade-in-up animation-delay-400" : "opacity-0"
            }`}
          />

          <p
            className={`font-body text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto ${
              isVisible ? "animate-fade-in-up animation-delay-400" : "opacity-0"
            }`}
          >
            Imagine um lugar onde cada cantinho conta uma história. Localizado
            em ponto nobre, nosso amplo salão interno foi projetado para acolher
            seu evento com grandiosidade e elegância.
          </p>
        </div>

        {/* Amenities Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mb-16">
          {amenities.map((amenity, index) => (
            <div
              key={amenity.label}
              className={`flex flex-col items-center text-center p-6 rounded-xl bg-background border border-border hover:border-gold/50 hover:shadow-card transition-all duration-300 ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{
                animationDelay: isVisible ? `${200 + index * 100}ms` : "0ms",
              }}
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <amenity.icon className="w-7 h-7 text-primary" />
              </div>
              <span className="font-body text-sm text-foreground">
                {amenity.label}
              </span>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div
          className={`text-center bg-gradient-section rounded-2xl p-10 md:p-16 shadow-elegant ${
            isVisible ? "animate-fade-in-up animation-delay-800" : "opacity-0"
          }`}
        >
          <p className="font-display text-2xl md:text-3xl text-foreground mb-4">
            Oferecemos o pacote completo
          </p>
          <p className="font-body text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Para que você viva cada instante sem preocupações. Aqui, o que mais
            importa é que você se sinta em casa, um lugar onde festas se
            transformam em memórias para a vida toda.
          </p>
          <Button variant="elegant" size="xl">
            Agende sua Visita e Surpreenda-se
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Venue;

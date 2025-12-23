import { useEffect, useRef, useState } from "react";
import weddingImg from "@/assets/event-wedding.jpg";
import birthdayImg from "@/assets/event-birthday.jpg";
import debutanteImg from "@/assets/event-debutante.jpg";
import corporateImg from "@/assets/event-corporate.jpg";

const events = [
  {
    title: "Casamentos",
    description: "Celebre a união de vocês em um lugar que inspira emoções.",
    image: weddingImg,
  },
  {
    title: "Aniversários",
    description: "Transforme cada ciclo da vida em uma festa memorável!",
    image: birthdayImg,
  },
  {
    title: "Debutantes",
    description: "Um dia inesquecível, feito só para você.",
    image: debutanteImg,
  },
  {
    title: "Eventos Corporativos",
    description: "Toda estrutura e organização que sua empresa merece.",
    image: corporateImg,
  },
];

const Events = () => {
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
    <section
      id="eventos"
      ref={sectionRef}
      className="py-24 md:py-32 bg-gradient-section"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span
            className={`inline-block font-body text-sm tracking-[0.3em] text-gold uppercase mb-4 ${
              isVisible ? "animate-fade-in-up" : "opacity-0"
            }`}
          >
            Eventos Sociais
          </span>

          <h2
            className={`font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 ${
              isVisible ? "animate-fade-in-up animation-delay-200" : "opacity-0"
            }`}
          >
            Transforme Momentos Especiais
            <br />
            <span className="text-gold italic">em Lembranças Eternas</span>
          </h2>

          <div
            className={`w-24 h-0.5 bg-gold mx-auto mb-8 ${
              isVisible ? "animate-fade-in-up animation-delay-400" : "opacity-0"
            }`}
          />

          <p
            className={`font-body text-lg text-muted-foreground max-w-2xl mx-auto ${
              isVisible ? "animate-fade-in-up animation-delay-400" : "opacity-0"
            }`}
          >
            No Espaço Gutierrez, cada evento é planejado com cuidado e carinho.
            Nosso time dedica atenção a cada detalhe para que seu dia seja
            único!
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {events.map((event, index) => (
            <div
              key={event.title}
              className={`group relative overflow-hidden rounded-2xl shadow-card hover:shadow-elegant transition-all duration-500 ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{
                animationDelay: isVisible ? `${400 + index * 150}ms` : "0ms",
              }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent flex flex-col justify-end p-8">
                <h3 className="font-display text-2xl md:text-3xl text-primary-foreground mb-2">
                  {event.title}
                </h3>
                <p className="font-body text-primary-foreground/80">
                  {event.description}
                </p>
                <a
                  href="#contato"
                  className="inline-flex items-center text-gold font-body text-sm mt-4 group-hover:underline"
                >
                  Saiba mais →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;

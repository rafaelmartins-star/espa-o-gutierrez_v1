import { useEffect, useRef, useState } from "react";

const History = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="historia"
      ref={sectionRef}
      className="py-24 md:py-32 bg-gradient-section"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span
            className={`inline-block font-body text-sm tracking-[0.3em] text-gold uppercase mb-4 ${
              isVisible ? "animate-fade-in-up" : "opacity-0"
            }`}
          >
            Desde 2005
          </span>

          <h2
            className={`font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-8 ${
              isVisible ? "animate-fade-in-up animation-delay-200" : "opacity-0"
            }`}
          >
            Nossa História
          </h2>

          <div
            className={`w-24 h-0.5 bg-gold mx-auto mb-12 ${
              isVisible ? "animate-fade-in-up animation-delay-400" : "opacity-0"
            }`}
          />

          <p
            className={`font-body text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 ${
              isVisible ? "animate-fade-in-up animation-delay-400" : "opacity-0"
            }`}
          >
            Há quase 20 anos, o <span className="text-primary font-semibold">Espaço Gutierrez</span> nasceu do desejo
            de criar um lugar onde celebrar fosse sinônimo de acolhimento. Cada
            detalhe aqui é pensado para que o visitante viva uma experiência que
            ficará marcada para sempre!
          </p>

          <p
            className={`font-body text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 ${
              isVisible ? "animate-fade-in-up animation-delay-600" : "opacity-0"
            }`}
          >
            Através de um atendimento personalizado e com flexibilidade, tudo
            aqui é feito com cuidado e dedicação. Somos um cenário de histórias;
            histórias de <span className="text-gold font-semibold">amor</span>, de{" "}
            <span className="text-gold font-semibold">amizade</span>, de{" "}
            <span className="text-gold font-semibold">conquistas</span> e de{" "}
            <span className="text-gold font-semibold">novos ciclos</span>.
          </p>

          <p
            className={`font-body text-lg md:text-xl text-foreground leading-relaxed italic ${
              isVisible ? "animate-fade-in-up animation-delay-800" : "opacity-0"
            }`}
          >
            Localizado em uma área nobre da capital mineira, o Espaço Gutierrez
            é um ambiente acolhedor e elegante, perfeito para sua celebração.
          </p>

          <p
            className={`font-display text-2xl md:text-3xl text-primary mt-12 ${
              isVisible ? "animate-fade-in-up animation-delay-800" : "opacity-0"
            }`}
          >
            Convidamos você a conhecer o nosso espaço.
            <br />
            <span className="text-gold">Será uma alegria recebê-lo!</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default History;

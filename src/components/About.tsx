import { useEffect, useRef, useState } from "react";

const About = () => {
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
      ref={sectionRef}
      className="py-24 md:py-32 bg-primary text-primary-foreground"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <span
            className={`inline-block font-body text-sm tracking-[0.3em] text-gold uppercase mb-4 ${
              isVisible ? "animate-fade-in-up" : "opacity-0"
            }`}
          >
            Por Trás do Espaço Gutierrez
          </span>

          <h2
            className={`font-display text-4xl md:text-5xl text-primary-foreground mb-8 ${
              isVisible ? "animate-fade-in-up animation-delay-200" : "opacity-0"
            }`}
          >
            Uma Mensagem da Cíntia
          </h2>

          <div
            className={`w-24 h-0.5 bg-gold mb-12 ${
              isVisible ? "animate-fade-in-up animation-delay-400" : "opacity-0"
            }`}
          />

          <div className="space-y-6">
            <p
              className={`font-body text-lg text-primary-foreground/90 leading-relaxed ${
                isVisible ? "animate-fade-in-up animation-delay-400" : "opacity-0"
              }`}
            >
              <span className="font-display text-2xl italic text-gold">
                Caro visitante,
              </span>
            </p>

            <p
              className={`font-body text-lg text-primary-foreground/90 leading-relaxed ${
                isVisible ? "animate-fade-in-up animation-delay-600" : "opacity-0"
              }`}
            >
              Sou Cíntia, formada em Administração pela PUC/MG, e há 20 anos
              faço parte da história do Espaço Gutierrez. Agradeço imensamente
              pela profissão que escolhi, pois ela me permite realizar os sonhos
              das pessoas e contribuir para a felicidade de todos que nos
              procuram.
            </p>

            <p
              className={`font-body text-lg text-primary-foreground/90 leading-relaxed ${
                isVisible ? "animate-fade-in-up animation-delay-600" : "opacity-0"
              }`}
            >
              Nos primeiros anos, enfrentei desafios, conciliei o espaço com a
              maternidade e, com o tempo, fui ampliando os serviços para
              oferecer eventos completos. O objetivo sempre foi garantir a
              confiança dos nossos clientes, e não só alugar um local, mas
              proporcionar uma{" "}
              <span className="text-gold font-semibold">experiência única</span>.
            </p>

            <p
              className={`font-body text-lg text-primary-foreground/90 leading-relaxed ${
                isVisible ? "animate-fade-in-up animation-delay-800" : "opacity-0"
              }`}
            >
              O Espaço Gutierrez é um sonho construído com muito amor e
              dedicação. Cada evento é planejado com carinho, e cada conquista
              só é possível graças à confiança de todos vocês.
            </p>

            <p
              className={`font-display text-xl italic text-gold pt-4 ${
                isVisible ? "animate-fade-in-up animation-delay-800" : "opacity-0"
              }`}
            >
              Mal posso esperar para realizar seu evento, aguardo sua visita!
              <br />
              <span className="text-primary-foreground mt-2 block">
                Com carinho, Cíntia.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

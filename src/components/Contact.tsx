import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
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
    <section id="contato" ref={sectionRef} className="py-24 md:py-32 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span
            className={`inline-block font-body text-sm tracking-[0.3em] text-gold uppercase mb-4 ${
              isVisible ? "animate-fade-in-up" : "opacity-0"
            }`}
          >
            Contato e Localização
          </span>

          <h2
            className={`font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 ${
              isVisible ? "animate-fade-in-up animation-delay-200" : "opacity-0"
            }`}
          >
            Para Realizar Sonhos
            <br />
            <span className="text-gold italic">e Criar Memórias</span>
          </h2>

          <div
            className={`w-24 h-0.5 bg-gold mx-auto ${
              isVisible ? "animate-fade-in-up animation-delay-400" : "opacity-0"
            }`}
          />
        </div>

        <div className="max-w-4xl mx-auto">
          <div
            className={`grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 ${
              isVisible ? "animate-fade-in-up animation-delay-400" : "opacity-0"
            }`}
          >
            {/* Contact Info */}
            <div className="space-y-6 p-8 bg-background rounded-2xl shadow-card">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-display text-lg text-foreground mb-1">
                    Endereço
                  </h4>
                  <p className="font-body text-muted-foreground">
                    Belo Horizonte, MG
                    <br />
                    Região Nobre da Capital Mineira
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-display text-lg text-foreground mb-1">
                    WhatsApp
                  </h4>
                  <p className="font-body text-muted-foreground">
                    Entre em contato para mais informações
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-display text-lg text-foreground mb-1">
                    E-mail
                  </h4>
                  <p className="font-body text-muted-foreground">
                    contato@espacogutierrez.com.br
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-display text-lg text-foreground mb-1">
                    Visitas
                  </h4>
                  <p className="font-body text-muted-foreground">
                    Marque sua visita com antecedência
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Card */}
            <div className="p-8 bg-primary text-primary-foreground rounded-2xl shadow-elegant flex flex-col justify-center">
              <h3 className="font-display text-2xl md:text-3xl mb-4">
                Com o nosso jeitinho mineiro de bem receber
              </h3>
              <p className="font-body text-primary-foreground/80 mb-6">
                Estamos aguardando seu evento. O espaço está localizado em um
                ponto de fácil acesso, garantindo praticidade para você e seus
                convidados.
              </p>
              <p className="font-body text-gold italic mb-8">
                Venha conhecer o charme que reservamos para tornar cada
                celebração inesquecível.
              </p>
              <Button variant="gold" size="xl" className="w-full">
                Fale Conosco e Agende sua Visita
              </Button>
            </div>
          </div>

          <p
            className={`text-center font-body text-muted-foreground italic ${
              isVisible ? "animate-fade-in-up animation-delay-600" : "opacity-0"
            }`}
          >
            Dica: marque sua visita com antecedência e descubra cada cantinho
            pensado para momentos únicos.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;

import { Heart, } from "lucide-react";
import logoBranca from "@/assets/logo-espaco-gutierrez-branca.png";
import Whatsapp from "@/icons/Whatsapp.svg";
import Facebook from "@/icons/facebook.svg";
import Instagram from "@/icons/Instagram.svg";
import Pinterest from "@/icons/Pinterest.svg";
const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          {/* Logo */}
          <img
            src={logoBranca}
            alt="Espaço Gutierrez"
            className="h-[50px] w-auto mb-8 opacity-90"
          />

          {/* Social Links */}
          <div className="flex gap-6 mb-10">
            <a
              href="#"
              aria-label="Instagram"
            >
              <img height={20} width={20} src={Instagram} alt="Instagram"></img>
              
            </a>
            <a
              href="#"
              
              aria-label="Facebook"
            >
             <img height={10} width={10} src={Facebook} alt="Facebook"></img>
            </a>
            <a
              href="https://wa.me/5531999999999"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              <img height={20} width={20} src={Whatsapp} alt="Whatsapp"></img>
            </a>
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-6 mb-10 text-sm font-body">
            <a
              href="#inicio"
              className="hover:text-gold transition-colors duration-300"
            >
              Início
            </a>
            <a
              href="#historia"
              className="hover:text-gold transition-colors duration-300"
            >
              Nossa História
            </a>
            <a
              href="#espaco"
              className="hover:text-gold transition-colors duration-300"
            >
              O Espaço
            </a>
            <a
              href="#eventos"
              className="hover:text-gold transition-colors duration-300"
            >
              Eventos
            </a>
            <a
              href="#contato"
              className="hover:text-gold transition-colors duration-300"
            >
              Contato
            </a>
          </nav>

          {/* Divider */}
          <div className="w-full max-w-md h-px bg-primary-foreground/20 mb-8" />

          {/* Copyright */}
          <p className="font-body text-sm text-primary-foreground/60 text-center flex items-center gap-1">
            © {new Date().getFullYear()} Espaço Gutierrez. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

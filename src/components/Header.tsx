import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoBranca from "@/assets/logo-espaco-gutierrez-branca.png";
import logoVerde from "@/assets/logo-espaco-gutierrez-verde.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#inicio", label: "Início" },
    { href: "#historia", label: "Nossa História" },
    { href: "#espaco", label: "O Espaço" },
    { href: "#eventos", label: "Eventos" },
    { href: "#contato", label: "Contato" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-card/95 backdrop-blur-md shadow-elegant py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <a href="#inicio" className="flex items-center">
          <img
            src={isScrolled ? logoVerde : logoBranca}
            alt="Espaço Gutierrez - Recepções e Eventos"
            className="h-12 md:h-12 w-auto object-contain transition-opacity duration-300"
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`font-body text-sm tracking-wide transition-colors duration-300 ${
                isScrolled
                  ? "text-foreground hover:text-primary"
                  : "text-primary-foreground hover:text-champagne"
              }`}
            >
              {link.label}
            </a>
          ))}
          <Button variant={isScrolled ? "elegant" : "hero"} size="sm">
            Agende sua Visita
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Menu"
        >
          {isMobileMenuOpen ? (
            <X className={isScrolled ? "text-foreground" : "text-primary-foreground"} size={24} />
          ) : (
            <Menu className={isScrolled ? "text-foreground" : "text-primary-foreground"} size={24} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-card/98 backdrop-blur-lg border-t border-border animate-fade-in">
          <nav className="container mx-auto px-4 py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-body text-foreground hover:text-primary py-2 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <Button variant="elegant" className="mt-4">
              Agende sua Visita
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;

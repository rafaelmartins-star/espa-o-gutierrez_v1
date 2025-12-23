import { useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import History from "@/components/History";
import Venue from "@/components/Venue";
import About from "@/components/About";
import Events from "@/components/Events";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <History />
      <Venue />
      <About />
      <Events />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;

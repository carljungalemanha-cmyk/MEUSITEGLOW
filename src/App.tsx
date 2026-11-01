import React, { useEffect } from 'react';
import { SITE } from './config';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { BandSection } from './components/BandSection';
import { LogoQuoteSection } from './components/LogoQuoteSection';
import { ProblemSection } from './components/ProblemSection';
import { ComparisonSection } from './components/ComparisonSection';
import { ModulesSection } from './components/ModulesSection';
import { SeoGeoAioSection } from './components/SeoGeoAioSection';
import { DemoSection } from './components/DemoSection';
import { ProcessSection } from './components/ProcessSection';
import { AboutSection } from './components/AboutSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FaqSection } from './components/FaqSection';
import { ContactFormSection } from './components/ContactFormSection';
import { FooterSection } from './components/FooterSection';
import { TravelingSparkle } from './components/TravelingSparkle';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export const App: React.FC = () => {
  // Initialize Lenis Smooth Scroll and GSAP ticker integration
  useEffect(() => {
    let lenis: any = null;
    if (typeof (window as any).Lenis === 'function') {
      try {
        lenis = new (window as any).Lenis({
          duration: 1.15,
          easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          smoothWheel: true,
        });

        if ((window as any).ScrollTrigger) {
          lenis.on('scroll', (window as any).ScrollTrigger.update);
        }

        if ((window as any).gsap) {
          (window as any).gsap.ticker.add((time: number) => {
            lenis.raf(time * 1000);
          });
          (window as any).gsap.ticker.lagSmoothing(0);
        }
      } catch (err) {
        console.warn('Lenis scroll initialization note:', err);
      }
    }

    return () => {
      if (lenis) {
        lenis.destroy();
      }
    };
  }, []);

  const handleOpenWhats = (customMessage?: string) => {
    const text = customMessage || SITE.mensagemWhats;
    const url = `https://wa.me/${SITE.marca.whatsapp}?text=${encodeURIComponent(text)}`;
    // Analytics tracking
    if (typeof (window as any).gtag === 'function') {
      (window as any).gtag('event', 'whatsapp_click', {
        event_category: 'conversion',
        event_label: text,
      });
    }
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="relative min-h-screen bg-[#FBF7EF] text-[#2D2B28] antialiased selection:bg-[#E8D3A0] selection:text-[#2D2B28]">
      {/* Signature 4-point golden traveling sparkle across all .tt headings */}
      <TravelingSparkle />

      {/* 1. Navigation Floating Glass Pill */}
      <Navbar onOpenWhats={handleOpenWhats} />

      {/* Main Content Sections (16 sections in strict PRD order) */}
      <main>
        {/* 2. Hero Section */}
        <HeroSection onOpenWhats={handleOpenWhats} />

        {/* 3. Faixa Dourada Metálica */}
        <BandSection />

        {/* 4. Logo e Frase Entre Aspas (Sessão própria) */}
        <LogoQuoteSection onOpenWhats={handleOpenWhats} />

        {/* 5. O Problema: a paciente pesquisa antes de agendar */}
        <ProblemSection onOpenWhats={handleOpenWhats} />

        {/* 6. Com site ou sem site: a diferença é a confiança */}
        <ComparisonSection onOpenWhats={handleOpenWhats} />

        {/* 7. O que tem no seu site (10 módulos sob medida) */}
        <ModulesSection onOpenWhats={handleOpenWhats} />

        {/* 8. SEO, GEO e AIO: para ser encontrada no Google e nas IAs */}
        <SeoGeoAioSection onOpenWhats={handleOpenWhats} />

        {/* 9. Veja na prática: demonstração no celular */}
        <DemoSection onOpenWhats={handleOpenWhats} />

        {/* 11. Como funciona: 4 passos até o site no ar */}
        <ProcessSection onOpenWhats={handleOpenWhats} />

        {/* 12. Sobre a Glow e sobre a Lana */}
        <AboutSection onOpenWhats={handleOpenWhats} />

        {/* 13. Feedbacks: quem já brilhou com a Glow */}
        <TestimonialsSection onOpenWhats={handleOpenWhats} />

        {/* 14. FAQ: dúvidas frequentes respondidas */}
        <FaqSection onOpenWhats={handleOpenWhats} />

        {/* 15. Pedir esboço sem custo (Formulário inteligente) */}
        <ContactFormSection onOpenWhats={handleOpenWhats} />
      </main>

      {/* 16. Rodapé */}
      <FooterSection onOpenWhats={handleOpenWhats} />

      {/* Floating 60px WhatsApp Button with gentle pulse */}
      <FloatingWhatsApp onOpenWhats={handleOpenWhats} />
    </div>
  );
};

export default App;

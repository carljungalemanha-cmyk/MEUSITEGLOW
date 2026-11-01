import React, { useEffect } from 'react';
import { ArrowRight, Sparkles, CheckCircle2, Instagram } from 'lucide-react';

interface InstagramReelFeedbackSectionProps {
  onOpenWhats: (msg?: string) => void;
}

export const InstagramReelFeedbackSection: React.FC<InstagramReelFeedbackSectionProps> = ({ onOpenWhats }) => {
  const reelEmbedUrl = 'https://www.instagram.com/reel/DUHHAqrEa5h/embed/';

  useEffect(() => {
    // Process Instagram embed script if window.instgrm is available
    if ((window as any).instgrm) {
      try {
        (window as any).instgrm.Embeds.process();
      } catch (e) {
        // ignore
      }
    } else {
      const script = document.createElement('script');
      script.src = '//www.instagram.com/embed.js';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <section className="py-20 md:py-28 px-4 sm:px-6 bg-[#F3EBDC] relative overflow-hidden border-y border-[#EDE2CD]/60" id="depoimento-ia">
      {/* Background ambient lighting */}
      <div
        className="absolute w-[450px] h-[450px] rounded-full bg-gradient-to-b from-[#E8D3A0]/35 to-transparent blur-3xl pointer-events-none -top-10 -right-10"
        aria-hidden="true"
      />

      <div className="max-w-[1180px] mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-[800px] mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 border-2 border-[#D4AF37] shadow-sm mb-4 text-xs font-bold uppercase tracking-wider text-[#9E781A]">
            <Sparkles className="w-3.5 h-3.5 text-[#C59B27]" />
            <span>Depoimento Real em Vídeo • Prova Social</span>
          </div>

          <h2 className="tt text-3xl sm:text-4xl md:text-5xl font-normal text-[#2D2B28] mb-5 leading-tight">
            Recomendada pelas IAs:{' '}
            <span className="au block sm:inline">o impacto real de ter um site</span>
          </h2>

          <p className="text-[#7B756B] text-base md:text-lg leading-relaxed mx-auto">
            Veja a fala de uma cliente da Glow contando como foi recomendada diretamente pela inteligência artificial e o grande impacto que ter um site exclusivo gerou no consultório dela.
          </p>
        </div>

        {/* 2-Column Grid: Embedded Reel Without Cover on Left + Strategic Highlights on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-14 items-center mb-12">
          
          {/* Left Column: Embedded Instagram Reel directly inside the site (no cover) */}
          <div className="flex flex-col items-center w-full">
            <div className="w-full max-w-[360px] sm:max-w-[380px] rounded-[32px] overflow-hidden border-2 border-[#D4AF37] shadow-[0_20px_60px_rgba(197,155,39,0.22)] bg-white p-2.5 relative group">
              
              {/* Header inside phone mockup */}
              <div className="flex items-center justify-between px-3 py-2 border-b border-[#EDE2CD] mb-2 bg-[#FBF7EF] rounded-2xl">
                <div className="flex items-center gap-2">
                  <Instagram className="w-4 h-4 text-[#C59B27]" />
                  <span className="text-xs font-bold text-[#2D2B28]">Reels do Instagram</span>
                </div>
                <span className="text-[10px] font-semibold text-[#9E781A] bg-[#FFF9E6] px-2 py-0.5 rounded-full border border-[#D4AF37]">
                  ✦ Sem capa • Assista aqui
                </span>
              </div>

              {/* Instagram Reel Iframe Embed */}
              <div className="w-full aspect-[9/16] max-h-[580px] rounded-2xl overflow-hidden bg-black relative">
                <iframe
                  src={reelEmbedUrl}
                  title="Depoimento de cliente Glow Sites recomendada pela Inteligência Artificial"
                  className="w-full h-full border-none"
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            </div>
          </div>

          {/* Right Column: Strategic Authority Breakdown */}
          <div className="flex flex-col gap-6 text-center lg:text-left">
            
            <div className="p-6 sm:p-7 rounded-3xl bg-white/95 border-2 border-[#D4AF37] shadow-[0_12px_40px_rgba(197,155,39,0.14)] space-y-5">
              <h3 className="serif text-2xl sm:text-3xl font-medium text-[#2D2B28] leading-snug">
                Por que as IAs começam a recomendar quem tem um site da Glow?
              </h3>

              <div className="space-y-4 text-xs sm:text-sm text-[#2D2B28]/90 text-left">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#C59B27] shrink-0 mt-0.5 stroke-[2.5]" />
                  <div>
                    <strong className="text-[#2D2B28] block mb-0.5">As IAs leem código e dados estruturados</strong>
                    <span>ChatGPT, Claude e Gemini não navegam nos stories do Instagram. Eles rastreiam páginas indexadas na web com SEO, GEO e Schema.org no padrão médico e estético.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#C59B27] shrink-0 mt-0.5 stroke-[2.5]" />
                  <div>
                    <strong className="text-[#2D2B28] block mb-0.5">A paciente chega com decisão tomada</strong>
                    <span>Quando a inteligência artificial responde que você é a profissional de referência na cidade, a paciente entra em contato com alta confiança prévia, pronta para agendar.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#C59B27] shrink-0 mt-0.5 stroke-[2.5]" />
                  <div>
                    <strong className="text-[#2D2B28] block mb-0.5">Autoridade definitiva do seu estúdio</strong>
                    <span>Seu consultório deixa de depender apenas da entrega volátil do algoritmo de redes sociais e passa a ter presença perene nos maiores buscadores do mundo.</span>
                  </div>
                </div>
              </div>

              {/* Quote from the video */}
              <div className="p-4 rounded-2xl bg-[#FBF7EF] border border-[#E8D3A0] text-xs text-[#2D2B28] italic text-left">
                “Minha paciente chegou e falou: ‘A IA me recomendou você!’. Ter um site estruturado pela Glow fez total diferença nesse reconhecimento.”
              </div>
            </div>

            {/* CTA Button - Centralized on Mobile */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2 w-full sm:w-auto mx-auto lg:mx-0">
              <button
                onClick={() => onOpenWhats('Olá, Lana! Assisti ao Reels da sua cliente recomendada pela IA e quero essa mesma estrutura de autoridade para o meu estúdio.')}
                className="btn text-sm sm:text-base py-4 px-8 w-full sm:w-auto justify-center mx-auto lg:mx-0 shadow-lg"
              >
                <span>Quero meu estúdio recomendado pelas IAs</span>
                <ArrowRight className="w-4 h-4 text-[#2D2B28]" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

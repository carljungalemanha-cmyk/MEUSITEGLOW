import React, { useState } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { SITE } from '../config';

interface ShowcaseSectionProps {
  onOpenWhats: (msg?: string) => void;
}

export const ShowcaseSection: React.FC<ShowcaseSectionProps> = ({ onOpenWhats }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const prev = () => {
    setActiveIndex((curr) => (curr === 0 ? SITE.sitesUnicos.projetos.length - 1 : curr - 1));
  };

  const next = () => {
    setActiveIndex((curr) => (curr === SITE.sitesUnicos.projetos.length - 1 ? 0 : curr + 1));
  };

  const currentProject = SITE.sitesUnicos.projetos[activeIndex];

  return (
    <section className="py-24 md:py-32 px-6 bg-[#F3EBDC] relative" id="na-pratica">
      <div className="max-w-[1180px] mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-[760px] mx-auto mb-16">
          <span className="text-xs font-semibold tracking-widest uppercase text-[#B8924A] mb-3 block">
            Exclusividade Autoral
          </span>
          <h2 className="tt text-3xl sm:text-4xl md:text-5xl font-normal text-[#2D2B28] mb-6">
            {SITE.sitesUnicos.titulo}
          </h2>
          <p className="text-[#7B756B] text-base md:text-lg leading-relaxed mx-auto">
            {SITE.sitesUnicos.subtitulo}
          </p>
        </div>

        {/* Interactive Showcase Mockup with Tilt & Controls */}
        <div className="relative mb-16">
          <div className="max-w-[960px] mx-auto rounded-[34px] p-6 sm:p-10 bg-white/70 backdrop-blur-md border border-white/90 shadow-[0_24px_70px_rgba(70,60,30,0.14)] relative">
            
            {/* Top Project Label bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-6 border-b border-[#EDE2CD]">
              <div>
                <span className="text-xs font-semibold text-[#B8924A] uppercase tracking-wider block mb-1">
                  ✦ {currentProject.tag}
                </span>
                <h3 className="serif text-2xl sm:text-3xl font-medium text-[#2D2B28]">
                  {currentProject.nome}
                </h3>
                <p className="text-xs sm:text-sm text-[#7B756B]">
                  {currentProject.sub}
                </p>
              </div>

              {/* Prev / Next controls */}
              <div className="flex items-center gap-3">
                <button
                  onClick={prev}
                  className="w-10 h-10 rounded-full bg-white border border-[#EDE2CD] flex items-center justify-center text-[#2D2B28] hover:border-[#B8924A] hover:bg-[#FBF7EF] transition-all shadow-sm"
                  aria-label="Projeto anterior"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <span className="text-xs font-medium text-[#7B756B]">
                  {activeIndex + 1} / {SITE.sitesUnicos.projetos.length}
                </span>
                <button
                  onClick={next}
                  className="w-10 h-10 rounded-full bg-white border border-[#EDE2CD] flex items-center justify-center text-[#2D2B28] hover:border-[#B8924A] hover:bg-[#FBF7EF] transition-all shadow-sm"
                  aria-label="Próximo projeto"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Mockup Display Frame */}
            <div className="w-full aspect-[16/10] sm:aspect-[16/9] rounded-2xl overflow-hidden shadow-inner border border-[#EDE2CD] bg-[#FBF7EF] relative group">
              <img
                src={currentProject.img}
                alt={`Demonstração de site para clínica de harmonização facial: ${currentProject.nome}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Thumbnail dots selector */}
            <div className="flex items-center justify-center gap-2 pt-6">
              {SITE.sitesUnicos.projetos.map((p, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`h-2 transition-all rounded-full ${
                    activeIndex === i ? 'w-8 bg-[#B8924A]' : 'w-2 bg-[#EDE2CD] hover:bg-[#D4C3A3]'
                  }`}
                  aria-label={`Ver projeto ${p.nome}`}
                />
              ))}
            </div>

          </div>
        </div>

        {/* 3 Pillars in Line */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14">
          {SITE.sitesUnicos.pilares.map((pilar, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white/60 border border-[#EDE2CD] text-center flex flex-col items-center shadow-sm"
            >
              <div className="w-8 h-8 rounded-full bg-[#B8924A]/10 text-[#B8924A] flex items-center justify-center mb-3">
                <Sparkles className="w-4 h-4" />
              </div>
              <h4 className="serif text-xl font-semibold text-[#2D2B28] mb-2">
                {pilar.t}
              </h4>
              <p className="text-xs sm:text-sm text-[#7B756B] leading-relaxed">
                {pilar.d}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex justify-center text-center">
          <button
            onClick={() => onOpenWhats('Olá, Lana! Quero um site exclusivo para mim, sem usar template.')}
            className="btn text-sm sm:text-base py-3.5 px-8 justify-center mx-auto w-full max-w-sm sm:w-auto shadow-md"
          >
            <span>Quero um design exclusivo para mim</span>
            <ArrowRight className="w-4 h-4 text-[#2D2B28]" />
          </button>
        </div>

      </div>
    </section>
  );
};

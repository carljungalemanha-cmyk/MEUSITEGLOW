import React, { useState } from 'react';
import { ArrowRight, ChevronDown, CheckCircle2 } from 'lucide-react';
import { SITE } from '../config';

interface SeoGeoAioSectionProps {
  onOpenWhats: (msg?: string) => void;
}

export const SeoGeoAioSection: React.FC<SeoGeoAioSectionProps> = ({ onOpenWhats }) => {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const toggleCard = (idx: number) => {
    setExpandedCard(expandedCard === idx ? null : idx);
  };

  return (
    <section className="py-24 md:py-32 px-6 bg-[#FBF7EF] relative" id="seo-geo-aio">
      <div className="max-w-[1140px] mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-[820px] mx-auto mb-16">
          <span className="text-xs font-semibold tracking-widest uppercase text-[#B8924A] mb-3 block">
            Engenharia de Visibilidade Moderna
          </span>
          <h2 className="tt text-3xl sm:text-4xl md:text-5xl font-normal text-[#2D2B28] mb-6">
            {SITE.seoGeoAio.titulo}
          </h2>
          <p className="text-[#7B756B] text-base md:text-lg leading-relaxed mx-auto">
            {SITE.seoGeoAio.subtitulo}
          </p>
        </div>

        {/* 3 Interactive Cards (Click to expand deliverables) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {SITE.seoGeoAio.cards.map((card, idx) => {
            const isExpanded = expandedCard === idx;
            return (
              <div
                key={card.sigla}
                onClick={() => toggleCard(idx)}
                className={`card cursor-pointer border transition-all duration-300 relative flex flex-col justify-between ${
                  isExpanded
                    ? 'border-[#B8924A] bg-[#FFFFFF] shadow-[0_20px_50px_rgba(184,146,74,0.18)]'
                    : 'border-[#EDE2CD] bg-white/80 hover:border-[#E8D3A0]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="serif text-3xl font-bold tracking-tight text-[#B8924A]">
                      {card.sigla}
                    </span>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-[#7B756B] bg-[#FBF7EF] border border-[#EDE2CD] px-2.5 py-1 rounded-full">
                      {card.foco}
                    </span>
                  </div>

                  <h3 className="serif text-xl font-semibold text-[#2D2B28] mb-1">
                    {card.nome}
                  </h3>
                  <p className="text-[#7B756B] text-xs leading-relaxed mb-4">
                    {card.descricao}
                  </p>

                  {/* Deliverables List (Shows on toggle or preview) */}
                  <div
                    className={`transition-all duration-300 overflow-hidden ${
                      isExpanded ? 'max-h-96 opacity-100 pt-3 border-t border-[#F3EBDC]' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <p className="text-[11px] font-semibold text-[#B8924A] uppercase tracking-wider mb-2">
                      O que é entregue:
                    </p>
                    <ul className="flex flex-col gap-2">
                      {card.itens.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-[#2D2B28]/90">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#B8924A] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-[#F3EBDC] flex items-center justify-between text-xs text-[#B8924A] font-medium">
                  <span>{isExpanded ? 'Recolher detalhes' : 'Toque para ver o que é entregue'}</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-300 ${
                      isExpanded ? 'rotate-180 text-[#2D2B28]' : ''
                    }`}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* 4-Step Animated Connection Diagram */}
        <div className="rounded-[34px] p-8 md:p-12 bg-[#F3EBDC] border border-[#E8D3A0]/60 mb-10 shadow-[0_12px_40px_rgba(70,60,30,0.06)]">
          <div className="text-center mb-10">
            <h3 className="serif text-2xl md:text-3xl font-medium text-[#2D2B28] mb-2">
              Como a tecnologia trabalha para o seu consultório
            </h3>
            <p className="text-xs md:text-sm text-[#7B756B]">
              Fluxo contínuo desde a primeira pesquisa até a mensagem no seu WhatsApp
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {SITE.seoGeoAio.fluxo.map((item, idx) => (
              <div
                key={item.passo}
                className="bg-white/80 backdrop-blur-md rounded-2xl p-6 border border-[#EDE2CD] relative flex flex-col justify-between shadow-sm"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="serif text-2xl font-bold text-[#B8924A]">
                      {item.passo}
                    </span>
                    {idx < 3 && (
                      <span className="hidden lg:block text-[#B8924A] font-bold text-lg opacity-60">
                        →
                      </span>
                    )}
                  </div>
                  <h4 className="serif text-lg font-semibold text-[#2D2B28] mb-2">
                    {item.titulo}
                  </h4>
                  <p className="text-xs text-[#7B756B] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-[#F3EBDC] text-[10px] uppercase tracking-wider text-[#B8924A] font-semibold">
                  Etapa validada
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Honest Note */}
        <div className="max-w-[700px] mx-auto text-center mb-10">
          <p className="text-xs text-[#7B756B] italic leading-relaxed">
            ✦ {SITE.seoGeoAio.notaHonesta}
          </p>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center text-center">
          <button
            onClick={() => onOpenWhats('Olá, Lana! Quero meu site de harmonização preparado para o Google e para as IAs.')}
            className="btn text-sm sm:text-base py-3.5 px-8 justify-center mx-auto w-full max-w-sm sm:w-auto shadow-md"
          >
            <span>Quero meu site preparado para o Google e IAs</span>
            <ArrowRight className="w-4 h-4 text-[#2D2B28]" />
          </button>
        </div>

      </div>
    </section>
  );
};

import React, { useState } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { SITE, FeedbackItem } from '../config';

interface TestimonialsSectionProps {
  onOpenWhats: (msg?: string) => void;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ onOpenWhats }) => {
  const [currentPage, setCurrentPage] = useState(0);

  const itemsPerPage = 3;
  const totalPages = Math.ceil(SITE.feedbacks.length / itemsPerPage);

  const prev = () => {
    setCurrentPage((curr) => (curr === 0 ? totalPages - 1 : curr - 1));
  };

  const next = () => {
    setCurrentPage((curr) => (curr === totalPages - 1 ? 0 : curr + 1));
  };

  const displayedFeedbacks = SITE.feedbacks.slice(
    currentPage * itemsPerPage,
    currentPage * itemsPerPage + itemsPerPage
  );

  return (
    <section className="py-24 md:py-32 px-6 bg-[#F3EBDC] relative" id="feedbacks">
      {/* SVG Gradient Definition for Vivid Metallic Gold Stars */}
      <svg className="w-0 h-0 absolute" aria-hidden="true">
        <defs>
          <linearGradient id="vividGoldStarGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFDF0" />
            <stop offset="25%" stopColor="#FFDF78" />
            <stop offset="55%" stopColor="#D4AF37" />
            <stop offset="85%" stopColor="#C59B27" />
            <stop offset="100%" stopColor="#9E781A" />
          </linearGradient>
          <filter id="goldStarGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="1.5" stdDeviation="1.8" floodColor="#C59B27" floodOpacity="0.6" />
          </filter>
        </defs>
      </svg>

      <div className="max-w-[1200px] mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-[760px] mx-auto mb-16">
          <span className="text-xs font-semibold tracking-widest uppercase text-[#C59B27] mb-3 block">
            Prova Social de Alto Padrão
          </span>
          <h2 className="tt text-3xl sm:text-4xl md:text-5xl font-normal text-[#2D2B28] mb-6">
            Quem já brilhou com a Glow.
          </h2>
          <p className="text-[#7B756B] text-base md:text-lg leading-relaxed mx-auto">
            Relatos de profissionais que transformaram a presença digital e a captação de pacientes.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative mb-14">
          
          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {displayedFeedbacks.map((fb: FeedbackItem) => (
              <div
                key={fb.id}
                className="card border border-[#E8D3A0] p-8 flex flex-col justify-between hover:-translate-y-2 transition-transform duration-300 bg-white shadow-[0_14px_45px_rgba(197,155,39,0.12)] rounded-[30px]"
              >
                <div>
                  {/* Radiant Vivid Gold Stars with metallic gradient effect */}
                  <div className="flex items-center gap-1.5 mb-4" title="Avaliação 5 estrelas">
                    {[...Array(fb.estrelas)].map((_, i) => (
                      <svg
                        key={i}
                        viewBox="0 0 24 24"
                        className="w-5 h-5 transition-transform duration-300 hover:scale-115 shrink-0"
                        filter="url(#goldStarGlow)"
                      >
                        <path
                          d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                          fill="url(#vividGoldStarGrad)"
                          stroke="#FFF8E1"
                          strokeWidth="0.6"
                        />
                      </svg>
                    ))}
                  </div>

                  {/* Highlight pill */}
                  {fb.destaque && (
                    <span className="inline-block text-[11px] font-semibold text-[#B8924A] bg-[#FBF7EF] border border-[#E8D3A0] px-2.5 py-0.5 rounded-full mb-3">
                      ✦ {fb.destaque}
                    </span>
                  )}

                  {/* Quote */}
                  <p className="text-[#2D2B28]/90 text-sm leading-relaxed mb-6 italic">
                    {fb.texto}
                  </p>
                </div>

                {/* Author Info */}
                <div className="pt-4 border-t border-[#F3EBDC]">
                  <h4 className="serif text-lg font-bold text-[#2D2B28] leading-tight">
                    {fb.nome}
                  </h4>
                  <p className="text-xs text-[#B8924A] font-semibold mt-0.5">
                    {fb.cargo} • {fb.area}
                  </p>
                  <p className="text-[11px] text-[#7B756B] mt-0.5">
                    {fb.cidade}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center gap-4 mt-10">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full bg-white border border-[#EDE2CD] flex items-center justify-center text-[#2D2B28] hover:border-[#B8924A] hover:bg-[#FBF7EF] transition-all shadow-sm"
              aria-label="Depoimentos anteriores"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2">
              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i)}
                  className={`h-2 transition-all rounded-full ${
                    currentPage === i ? 'w-6 bg-[#B8924A]' : 'w-2 bg-[#EDE2CD]'
                  }`}
                  aria-label={`Ir para página ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 rounded-full bg-white border border-[#EDE2CD] flex items-center justify-center text-[#2D2B28] hover:border-[#B8924A] hover:bg-[#FBF7EF] transition-all shadow-sm"
              aria-label="Próximos depoimentos"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

        </div>

        {/* CTA Button - Centralized on mobile */}
        <div className="flex justify-center text-center">
          <button
            onClick={() => onOpenWhats('Olá, Lana! Quero transformar minha clínica e ter resultados como os das suas clientes.')}
            className="btn text-sm sm:text-base py-3.5 px-8 justify-center mx-auto shadow-md"
          >
            <span>Fazer parte desse grupo</span>
            <ArrowRight className="w-4 h-4 text-[#2D2B28]" />
          </button>
        </div>

      </div>
    </section>
  );
};

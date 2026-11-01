import React from 'react';
import { ArrowRight, Search, Sparkles, ShieldCheck } from 'lucide-react';
import { SITE } from '../config';

interface ProblemSectionProps {
  onOpenWhats: (msg?: string) => void;
}

export const ProblemSection: React.FC<ProblemSectionProps> = ({ onOpenWhats }) => {
  const iconList = [Search, Sparkles, ShieldCheck];

  return (
    <section className="py-24 md:py-32 px-6 bg-[#F3EBDC] relative" id="o-problema">
      <div className="max-w-[1140px] mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-[760px] mx-auto mb-16">
          <span className="text-xs font-semibold tracking-widest uppercase text-[#B8924A] mb-3 block">
            Jornada da Paciente de Alto Padrão
          </span>
          <h2 className="tt text-3xl sm:text-4xl md:text-5xl font-normal text-[#2D2B28] mb-6">
            {SITE.oProblema.titulo}
          </h2>
          <p className="text-[#7B756B] text-base md:text-lg leading-relaxed mx-auto">
            {SITE.oProblema.subtitulo}
          </p>
        </div>

        {/* 3 Editorial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14">
          {SITE.oProblema.cards.map((card, idx) => {
            const Icon = iconList[idx] || Search;
            return (
              <div
                key={card.num}
                className="card flex flex-col justify-between border border-[#EDE2CD] relative group hover:-translate-y-2 transition-all duration-300"
              >
                <div>
                  {/* Step Number & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="serif text-3xl font-light text-[#B8924A]/60">
                      {card.num}
                    </span>
                    <div className="w-10 h-10 rounded-full bg-[#FBF7EF] flex items-center justify-center border border-[#EDE2CD] text-[#B8924A] shadow-sm">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="serif text-2xl font-semibold text-[#2D2B28] mb-2 leading-snug">
                    {card.titulo}
                  </h3>
                  <p className="text-xs font-medium text-[#B8924A] mb-4 italic">
                    {card.sub}
                  </p>
                  <p className="text-[#7B756B] text-sm leading-relaxed">
                    {card.desc}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#F3EBDC] flex items-center text-xs font-medium text-[#B8924A]">
                  <span>Decisão estratégica</span>
                  <span className="ml-auto opacity-70">✦</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Button */}
        <div className="flex justify-center text-center">
          <button
            onClick={() => onOpenWhats('Olá, Lana! Quero ser a profissional escolhida pelas pacientes na minha região.')}
            className="btn text-sm sm:text-base py-3.5 px-8 justify-center mx-auto w-full max-w-xs sm:w-auto shadow-md"
          >
            <span>Quero ser a escolhida</span>
            <ArrowRight className="w-4 h-4 text-[#2D2B28]" />
          </button>
        </div>

      </div>
    </section>
  );
};

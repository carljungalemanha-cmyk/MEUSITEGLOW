import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { SITE } from '../config';

interface ProcessSectionProps {
  onOpenWhats: (msg?: string) => void;
}

export const ProcessSection: React.FC<ProcessSectionProps> = ({ onOpenWhats }) => {
  return (
    <section className="py-24 md:py-32 px-6 bg-[#F3EBDC] relative" id="processo">
      <div className="max-w-[980px] mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-[760px] mx-auto mb-16">
          <span className="text-xs font-semibold tracking-widest uppercase text-[#B8924A] mb-3 block">
            Jornada Transparente
          </span>
          <h2 className="tt text-3xl sm:text-4xl md:text-5xl font-normal text-[#2D2B28] mb-6">
            {SITE.comoFunciona.titulo}
          </h2>
          <p className="text-[#7B756B] text-base md:text-lg leading-relaxed mx-auto">
            {SITE.comoFunciona.subtitulo}
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative mb-16 pl-6 sm:pl-10">
          {/* Vertical Golden Connecting Line */}
          <div
            className="absolute left-[23px] sm:left-[39px] top-6 bottom-6 w-[2px] bg-gradient-to-b from-[#B8924A] via-[#E8D3A0] to-[#B8924A]"
            aria-hidden="true"
          />

          <div className="flex flex-col gap-10">
            {SITE.comoFunciona.passos.map((passo, idx) => (
              <div key={passo.num} className="relative flex items-start gap-6 group">
                
                {/* Step Marker Badge */}
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#FFFFFF] border-2 border-[#B8924A] text-[#B8924A] flex items-center justify-center font-bold serif text-lg shrink-0 shadow-sm z-10 group-hover:bg-[#B8924A] group-hover:text-white transition-colors duration-300">
                  {passo.num}
                </div>

                {/* Content Box */}
                <div className="card w-full border border-[#EDE2CD] p-6 sm:p-8 bg-white/90">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <h3 className="serif text-xl sm:text-2xl font-semibold text-[#2D2B28]">
                      {passo.titulo}
                    </h3>
                    <span className="text-[11px] font-semibold text-[#B8924A] bg-[#FBF7EF] px-2.5 py-1 rounded-full border border-[#EDE2CD]">
                      Fase {passo.num}
                    </span>
                  </div>
                  <p className="text-[#7B756B] text-sm sm:text-base leading-relaxed">
                    {passo.desc}
                  </p>
                </div>

              </div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="flex flex-col items-center justify-center text-center gap-3">
          <button
            onClick={() => onOpenWhats('Olá, Lana! Gostaria de começar pelo esboço sem custo para a minha clínica.')}
            className="btn text-sm sm:text-base py-4 px-8 justify-center mx-auto w-full max-w-xs sm:w-auto shadow-md"
          >
            <span>{SITE.comoFunciona.cta}</span>
            <ArrowRight className="w-4 h-4 text-[#2D2B28]" />
          </button>
          <span className="text-xs text-[#7B756B] text-center">
            ✦ Sem compromisso de contratação. Veja o conceito primeiro.
          </span>
        </div>

      </div>
    </section>
  );
};

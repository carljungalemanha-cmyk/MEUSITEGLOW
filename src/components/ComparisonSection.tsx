import React from 'react';
import { ArrowRight, X, Check } from 'lucide-react';
import { SITE } from '../config';

interface ComparisonSectionProps {
  onOpenWhats: (msg?: string) => void;
}

export const ComparisonSection: React.FC<ComparisonSectionProps> = ({ onOpenWhats }) => {
  return (
    <section className="py-24 md:py-32 px-6 bg-[#FBF7EF] relative" id="com-ou-sem">
      <div className="max-w-[1100px] mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-[760px] mx-auto mb-16">
          <span className="text-xs font-semibold tracking-widest uppercase text-[#B8924A] mb-3 block">
            Posicionamento &amp; Percepção de Valor
          </span>
          <h2 className="tt text-3xl sm:text-4xl md:text-5xl font-normal text-[#2D2B28] mb-6">
            {SITE.comOuSem.titulo}
          </h2>
          <p className="text-[#7B756B] text-base md:text-lg leading-relaxed mx-auto">
            {SITE.comOuSem.subtitulo}
          </p>
        </div>

        {/* 2 Comparison Cards (Stacked on Mobile) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 mb-14 items-stretch">
          
          {/* Left Column: Só com Instagram (fundo --bg-3 #EDE2CD) */}
          <div className="rounded-[34px] p-8 md:p-10 bg-[#EDE2CD] border border-[#E2D4BC] shadow-[0_12px_40px_rgba(70,60,30,0.06)] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-6 mb-6 border-b border-[#DDCFB9]">
                <div>
                  <h3 className="serif text-2xl md:text-3xl font-medium text-[#2D2B28] mb-1">
                    {SITE.comOuSem.semSite.titulo}
                  </h3>
                  <p className="text-xs text-[#7B756B] uppercase tracking-wider font-medium">
                    {SITE.comOuSem.semSite.subtitulo}
                  </p>
                </div>
                <div className="w-10 h-10 rounded-full bg-white/60 flex items-center justify-center text-[#7B756B]">
                  <X className="w-5 h-5" />
                </div>
              </div>

              <ul className="flex flex-col gap-4 text-sm md:text-[15px] text-[#2D2B28]/85">
                {SITE.comOuSem.semSite.itens.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-white/80 flex items-center justify-center text-[#7B756B] shrink-0 mt-0.5 text-xs">
                      ✕
                    </span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-8 mt-8 border-t border-[#DDCFB9] text-xs text-[#7B756B] italic">
              Resultado: Mais esforço diário, pacientes comparando você apenas por preço.
            </div>
          </div>

          {/* Right Column: Com um site Glow (Dourado metálico suave, sombra dourada) */}
          <div
            className="rounded-[34px] p-8 md:p-10 border border-[#E8D3A0] shadow-[0_20px_60px_rgba(184,146,74,0.22)] flex flex-col justify-between relative overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, #FFFFFF 0%, #FBF7EF 40%, #F5E8C9 100%)',
            }}
          >
            {/* Subtle glow accent */}
            <div
              className="absolute -top-16 -right-16 w-48 h-48 bg-[#E8D3A0]/40 rounded-full blur-2xl pointer-events-none"
              aria-hidden="true"
            />

            <div>
              <div className="flex items-center justify-between pb-6 mb-6 border-b border-[#E8D3A0]/60">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#B8924A]/10 border border-[#B8924A]/30 text-[#9C7A32] text-[11px] font-semibold uppercase tracking-wider mb-2">
                    ✦ Padrão Alta Estética
                  </div>
                  <h3 className="serif text-2xl md:text-3xl font-medium text-[#2D2B28]">
                    {SITE.comOuSem.comSite.titulo}
                  </h3>
                  <p className="text-xs text-[#B8924A] uppercase tracking-wider font-semibold">
                    {SITE.comOuSem.comSite.subtitulo}
                  </p>
                </div>
                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#B8924A] to-[#F0DFAE] flex items-center justify-center text-white shadow-md">
                  <Check className="w-6 h-6 stroke-[2.5]" />
                </div>
              </div>

              <ul className="flex flex-col gap-4 text-sm md:text-[15px] text-[#2D2B28]">
                {SITE.comOuSem.comSite.itens.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-[#B8924A] text-white flex items-center justify-center shrink-0 mt-0.5 text-xs shadow-sm">
                      ✦
                    </span>
                    <span className="leading-relaxed font-normal">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-8 mt-8 border-t border-[#E8D3A0]/60 flex items-center justify-between text-xs text-[#9C7A32] font-semibold">
              <span>Resultado: Pacientes certas, percepção de luxo e agendamentos diretos.</span>
              <span>✦</span>
            </div>
          </div>

        </div>

        {/* CTA Button */}
        <div className="flex justify-center text-center">
          <button
            onClick={() => onOpenWhats('Olá, Lana! Quero elevar o padrão da minha clínica com um site Glow.')}
            className="btn text-sm sm:text-base py-3.5 px-8 justify-center mx-auto w-full max-w-xs sm:w-auto shadow-md"
          >
            <span>Elevar o padrão da minha clínica</span>
            <ArrowRight className="w-4 h-4 text-[#2D2B28]" />
          </button>
        </div>

      </div>
    </section>
  );
};

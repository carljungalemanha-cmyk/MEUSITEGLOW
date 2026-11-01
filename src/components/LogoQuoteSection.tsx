import React from 'react';
import { ArrowRight } from 'lucide-react';
import { SITE } from '../config';

interface LogoQuoteSectionProps {
  onOpenWhats: (msg?: string) => void;
}

export const LogoQuoteSection: React.FC<LogoQuoteSectionProps> = ({ onOpenWhats }) => {
  return (
    <section className="py-24 md:py-32 px-6 bg-[#FBF7EF] flex flex-col items-center justify-center text-center relative overflow-hidden">
      {/* Background radial lighting */}
      <div
        className="absolute w-[500px] h-[500px] rounded-full bg-gradient-to-b from-[#E8D3A0]/30 to-transparent blur-3xl pointer-events-none -z-0"
        aria-hidden="true"
      />

      <div className="max-w-[880px] mx-auto flex flex-col items-center z-10">
        {/* Square Gold Brushed Logo (150px, rounded corners 34px, gold shadow) with requested logo */}
        <div className="w-[130px] h-[130px] md:w-[150px] md:h-[150px] rounded-[34px] overflow-hidden shadow-[0_20px_50px_rgba(184,146,74,0.32)] border border-[#E8D3A0] mb-10 transition-transform duration-500 hover:scale-105 bg-[#EDE2CD]">
          <img
            src="https://i.ibb.co/C3DyGDwH/Redraw-logo-in-gold-background-2-K-20260925063353.webp"
            alt="Símbolo oficial da Glow Sites"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>

        {/* Serif Quote as a .tt destination */}
        <h2 className="tt text-2xl sm:text-3xl md:text-5xl font-normal text-[#2D2B28] leading-[1.3] mb-6 italic max-w-[26ch] mx-auto">
          “{SITE.frase.inicio}{' '}
          <span className="au not-italic font-medium">{SITE.frase.destaque}</span>”
        </h2>

        {/* Subtitle */}
        <p className="text-[#7B756B] text-sm md:text-base mb-8 max-w-[50ch] mx-auto">
          Desenvolvemos o endereço digital definitivo da sua clínica com o nível de sofisticação que as suas pacientes mais exigentes reconhecem de imediato.
        </p>

        {/* Action button - Centralized on mobile */}
        <button
          onClick={() => onOpenWhats('Olá, Lana! Quero transformar o site da minha clínica de estética.')}
          className="btn text-sm py-3.5 px-7 mx-auto justify-center"
        >
          <span>Criar a presença da minha clínica</span>
          <ArrowRight className="w-4 h-4 text-[#2D2B28]" />
        </button>
      </div>
    </section>
  );
};

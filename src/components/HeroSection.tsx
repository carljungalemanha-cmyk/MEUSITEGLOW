import React from 'react';
import { ArrowRight } from 'lucide-react';
import { SITE } from '../config';

interface HeroSectionProps {
  onOpenWhats: (msg?: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenWhats }) => {
  return (
    <section className="hero flex items-center relative pt-32 pb-20 md:pt-40 md:pb-28" id="inicio">
      <div className="w-full max-w-[1180px] mx-auto grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-10 lg:gap-14 items-center">
        
        {/* Left Column (Text & Value Proposition) */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left z-10">
          
          {/* H1 - Destination for Traveling Sparkle */}
          <h1 className="tt text-[#2D2B28] mb-6 tracking-tight">
            {SITE.hero.titulo}{' '}
            <span className="au block sm:inline">{SITE.hero.destaque}</span>
          </h1>

          {/* Subtitle */}
          <p className="text-[#7B756B] text-base md:text-lg mb-8 leading-relaxed max-w-[58ch] mx-auto lg:mx-0">
            {SITE.hero.subtitulo}
          </p>

          {/* 3 Glass Pill Cards */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 sm:gap-3 mb-9">
            {SITE.hero.cards.map((badge, idx) => (
              <div
                key={idx}
                className="px-4 py-2 rounded-full bg-white/80 backdrop-blur-md border border-[#EDE2CD] text-xs md:text-sm font-medium text-[#2D2B28] shadow-[0_4px_16px_rgba(70,60,30,0.06)]"
              >
                {badge}
              </div>
            ))}
          </div>

          {/* CTA & Support Line - Centralized on mobile */}
          <div className="flex flex-col items-center lg:items-start gap-3 w-full sm:w-auto mx-auto lg:mx-0">
            <button
              onClick={() => onOpenWhats(SITE.mensagemWhats)}
              className="btn w-full sm:w-auto text-base py-4 px-8 justify-center mx-auto lg:mx-0 shadow-lg"
            >
              <span>{SITE.hero.cta}</span>
              <ArrowRight className="w-4 h-4 text-[#2D2B28]" />
            </button>
            <span className="text-xs text-[#7B756B] flex items-center justify-center lg:justify-start gap-1.5 text-center">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B8924A]" />
              {SITE.hero.apoio}
            </span>
          </div>
        </div>

        {/* Right Column: Hero Photo (comes first on mobile) */}
        <div className="doc order-first lg:order-last">
          {/* Offset Fine Gold Frame (18px) */}
          <div
            className="doc__photo relative"
            style={{
              backgroundColor: '#EDE2CD',
            }}
          >
            <img
              src="https://i.ibb.co/Q7kShQd0/a7f7826e-09f1-43b9-9e9f-20bc3921427f.webp"
              alt="Lana - Glow Sites"
              className="w-full h-full object-cover object-center"
              loading="eager"
              fetchPriority="high"
            />

            {/* Circular badge in the bottom corner of the photo with the requested logo */}
            <div
              className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 w-16 h-16 sm:w-20 sm:h-20 rounded-full border-4 border-white shadow-[0_12px_30px_rgba(70,60,30,0.25)] overflow-hidden z-20 bg-[#EDE2CD] transition-transform duration-300 hover:scale-105"
              title="Glow Sites"
            >
              <img
                src="https://i.ibb.co/C3DyGDwH/Redraw-logo-in-gold-background-2-K-20260925063353.webp"
                alt="Logo Glow Sites"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Bottom Pill: Especialista em clínicas de estética */}
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 z-20 px-5 py-2.5 rounded-full bg-white/95 backdrop-blur-md border border-[#E8D3A0] shadow-[0_12px_36px_rgba(70,60,30,0.18)] whitespace-nowrap text-center">
            <p className="font-semibold text-xs sm:text-sm text-[#2D2B28] leading-none flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#B8924A] animate-pulse" />
              <span>Especialista em Clínicas de Estética</span>
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

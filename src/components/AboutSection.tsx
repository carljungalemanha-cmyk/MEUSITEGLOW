import React from 'react';
import { Instagram, MessageCircle } from 'lucide-react';
import { SITE } from '../config';

interface AboutSectionProps {
  onOpenWhats: (msg?: string) => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenWhats }) => {
  return (
    <section className="py-24 md:py-32 px-6 bg-[#FBF7EF] relative overflow-hidden" id="sobre">
      <div className="max-w-[1140px] mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-[760px] mx-auto mb-16">
          <span className="text-xs font-semibold tracking-widest uppercase text-[#B8924A] mb-3 block">
            Quem Está Por Trás
          </span>
          <h2 className="tt text-3xl sm:text-4xl md:text-5xl font-normal text-[#2D2B28] mb-6">
            {SITE.sobreLana.titulo}
          </h2>
          <p className="text-[#7B756B] text-base md:text-lg leading-relaxed mx-auto">
            {SITE.sobreLana.subtitulo}
          </p>
        </div>

        {/* 2-Column Grid: Photo (first on mobile) & Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-16 items-center mb-14">
          
          {/* Left: Lana Photo in Arch with fine gold frame (NO rotating circle) */}
          <div className="doc order-first lg:order-first">
            <div
              className="doc__photo"
              style={{
                backgroundColor: '#EDE2CD',
              }}
            >
              <img
                src="https://i.ibb.co/Q7kShQd0/a7f7826e-09f1-43b9-9e9f-20bc3921427f.webp"
                alt="Lana - Fundadora e Diretora Criativa da Glow Sites"
                className="w-full h-full object-cover object-center"
                loading="lazy"
              />
            </div>
          </div>

          {/* Right: Narrative (Counters block removed as requested) */}
          <div className="flex flex-col gap-6 text-center lg:text-left">
            <div className="space-y-5 text-[#2D2B28]/90 text-base md:text-[17px] leading-relaxed">
              <p>
                {SITE.sobreLana.paragrafos[0]}
              </p>
              <p>
                {SITE.sobreLana.paragrafos[1]}
              </p>
            </div>

            {/* Action Buttons - Centralized on mobile */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4 w-full sm:w-auto mx-auto lg:mx-0">
              <button
                onClick={() => onOpenWhats('Olá, Lana! Gostaria de conversar sobre um projeto para o meu estúdio/clínica.')}
                className="btn text-sm py-3.5 px-7 w-full sm:w-auto justify-center mx-auto lg:mx-0"
              >
                <MessageCircle className="w-4 h-4 text-[#2D2B28]" />
                <span>Falar com a Lana</span>
              </button>
              <a
                href={SITE.marca.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-sm py-3 px-6 w-full sm:w-auto justify-center mx-auto lg:mx-0"
              >
                <Instagram className="w-4 h-4 text-[#B8924A]" />
                <span>Ver meu Instagram</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

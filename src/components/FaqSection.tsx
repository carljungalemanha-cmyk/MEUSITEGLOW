import React, { useState } from 'react';
import { ChevronDown, MessageCircle } from 'lucide-react';
import { SITE, FaqItem } from '../config';

interface FaqSectionProps {
  onOpenWhats: (msg?: string) => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onOpenWhats }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First item open by default

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-24 md:py-32 px-6 bg-[#FBF7EF] relative" id="faq">
      <div className="max-w-[880px] mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-[760px] mx-auto mb-16">
          <span className="text-xs font-semibold tracking-widest uppercase text-[#B8924A] mb-3 block">
            Perguntas &amp; Respostas
          </span>
          <h2 className="tt text-3xl sm:text-4xl md:text-5xl font-normal text-[#2D2B28] mb-6">
            Dúvidas frequentes.
          </h2>
          <p className="text-[#7B756B] text-base md:text-lg leading-relaxed mx-auto">
            Tudo o que você precisa saber, com transparência e clareza.
          </p>
        </div>

        {/* Accordion List with only 1 item open at a time */}
        <div className="flex flex-col gap-4 mb-14">
          {SITE.faq.map((item: FaqItem, idx: number) => {
            const isOpen = openIndex === idx;
            return (
              <details
                key={idx}
                open={isOpen}
                onClick={(e) => {
                  e.preventDefault();
                  toggle(idx);
                }}
                className={`rounded-[22px] transition-all duration-300 border overflow-hidden ${
                  isOpen
                    ? 'bg-white border-[#B8924A] shadow-[0_12px_36px_rgba(184,146,74,0.12)]'
                    : 'bg-white/70 border-[#EDE2CD] hover:border-[#E8D3A0]'
                }`}
              >
                <summary className="p-5 sm:p-6 cursor-pointer flex items-center justify-between gap-4 select-none">
                  <span className="serif text-lg sm:text-xl font-medium text-[#2D2B28] leading-snug">
                    {item.pergunta}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen
                        ? 'rotate-180 bg-[#B8924A] text-white'
                        : 'bg-[#FBF7EF] border border-[#EDE2CD] text-[#7B756B]'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </summary>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-sm sm:text-base text-[#7B756B] leading-relaxed border-t border-[#F3EBDC]">
                    {item.resposta}
                  </div>
                )}
              </details>
            );
          })}
        </div>

        {/* CTA Button */}
        <div className="flex justify-center text-center">
          <button
            onClick={() => onOpenWhats('Olá, Lana! Tenho uma dúvida sobre o processo de criação de sites.')}
            className="btn text-sm sm:text-base py-3.5 px-8 justify-center mx-auto w-full max-w-xs sm:w-auto shadow-md"
          >
            <MessageCircle className="w-4 h-4 text-[#2D2B28]" />
            <span>Tirar outra dúvida pelo WhatsApp</span>
          </button>
        </div>

      </div>
    </section>
  );
};

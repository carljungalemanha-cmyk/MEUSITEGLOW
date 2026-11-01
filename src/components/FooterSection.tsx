import React from 'react';
import { ArrowUp, Instagram, MessageCircle, Mail } from 'lucide-react';
import { SITE } from '../config';

interface FooterSectionProps {
  onOpenWhats: (msg?: string) => void;
}

export const FooterSection: React.FC<FooterSectionProps> = ({ onOpenWhats }) => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'O que tem no site', href: '#oque-tem' },
    { label: 'SEO, GEO e IA', href: '#seo-geo-aio' },
    { label: 'Veja na prática', href: '#veja-na-pratica' },
    { label: 'Como funciona', href: '#processo' },
    { label: 'Sobre a Lana', href: '#sobre' },
    { label: 'Feedbacks', href: '#feedbacks' },
    { label: 'Dúvidas', href: '#faq' },
    { label: 'Pedir esboço sem custo', href: '#esboco' },
  ];

  return (
    <footer className="bg-[#EDE2CD] pt-20 pb-12 px-6 border-t border-[#DDCFB9] relative" id="contato">
      <div className="max-w-[1140px] mx-auto">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr_1fr] gap-12 pb-16 border-b border-[#DDCFB9]/80">
          
          {/* Brand Info & Landing Star Destination */}
          <div className="flex flex-col items-start">
            
            {/* Logo (84px, corners 22px, gold shadow) */}
            <div className="w-[84px] h-[84px] rounded-[22px] overflow-hidden shadow-[0_12px_30px_rgba(184,146,74,0.25)] border border-[#E8D3A0] mb-6">
              <img
                src={SITE.marca.logo}
                alt="Logotipo Glow Sites"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>

            {/* Brand name as the final .tt destination for the Traveling Star */}
            <h2 className="tt serif text-3xl font-semibold text-[#B8924A] mb-2 tracking-wide">
              {SITE.marca.nome}
            </h2>

            <p className="text-sm font-medium text-[#7B756B] mb-6 max-w-[34ch]">
              {SITE.marca.tagline}
            </p>

            <div className="flex items-center gap-3">
              <a
                href={SITE.marca.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/70 border border-[#DDCFB9] flex items-center justify-center text-[#2D2B28] hover:text-[#B8924A] hover:bg-white transition-all shadow-xs"
                title="Instagram da Glow Sites"
                aria-label="Instagram da Glow Sites"
              >
                <Instagram className="w-4 h-4" />
              </a>

              <button
                onClick={() => onOpenWhats(SITE.mensagemWhats)}
                className="w-10 h-10 rounded-full bg-white/70 border border-[#DDCFB9] flex items-center justify-center text-[#2D2B28] hover:text-[#B8924A] hover:bg-white transition-all shadow-xs"
                title="WhatsApp da Lana"
                aria-label="WhatsApp da Lana"
              >
                <MessageCircle className="w-4 h-4" />
              </button>

              <a
                href={`mailto:${SITE.marca.email}`}
                className="w-10 h-10 rounded-full bg-white/70 border border-[#DDCFB9] flex items-center justify-center text-[#2D2B28] hover:text-[#B8924A] hover:bg-white transition-all shadow-xs"
                title="E-mail de contato"
                aria-label="Enviar e-mail para a Glow Sites"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Anchor Links */}
          <div>
            <h3 className="serif text-lg font-semibold text-[#2D2B28] mb-4">
              Navegação
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs sm:text-sm text-[#7B756B]">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="hover:text-[#B8924A] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Direct & Hours */}
          <div className="flex flex-col justify-between">
            <div>
              <h3 className="serif text-lg font-semibold text-[#2D2B28] mb-4">
                Atendimento
              </h3>
              <p className="text-xs text-[#7B756B] leading-relaxed mb-3">
                Diretamente com a Lana, de segunda a sexta, em horário comercial. Atendimento para todo o Brasil e clínicas no exterior.
              </p>
              <p className="text-xs font-semibold text-[#2D2B28] mb-1">
                WhatsApp:{' '}
                <button
                  onClick={() => onOpenWhats(SITE.mensagemWhats)}
                  className="text-[#B8924A] underline hover:no-underline font-normal"
                >
                  {SITE.marca.whatsappFormatado}
                </button>
              </p>
              <p className="text-xs font-semibold text-[#2D2B28]">
                Instagram:{' '}
                <a
                  href={SITE.marca.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#B8924A] underline hover:no-underline font-normal"
                >
                  {SITE.marca.instagramUser}
                </a>
              </p>
            </div>

            <div className="pt-6">
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-2 text-xs font-semibold text-[#7B756B] hover:text-[#B8924A] transition-colors"
              >
                <ArrowUp className="w-4 h-4" />
                <span>Voltar ao topo</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & LGPD */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#7B756B]">
          <p>
            © {currentYear} {SITE.marca.nome} — Todos os direitos reservados. Feito com rigor estético para harmonização facial.
          </p>
          <p className="text-center sm:text-right">
            Conformidade LGPD • Dados seguros e atendimento sob medida.
          </p>
        </div>

      </div>
    </footer>
  );
};

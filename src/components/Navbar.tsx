import React, { useState, useEffect } from 'react';
import { SITE } from '../config';

interface NavbarProps {
  onOpenWhats: (msg?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenWhats }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'O que tem', href: '#oque-tem' },
    { label: 'SEO e IA', href: '#seo-geo-aio' },
    { label: 'Na prática', href: '#na-pratica' },
    { label: 'Processo', href: '#processo' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Dúvidas', href: '#faq' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Straight full-width header (sem bordas redondas, preenchendo todo o espaço) */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 rounded-none border-b ${
          isScrolled
            ? 'bg-[#FBF7EF]/90 backdrop-blur-md border-[#EDE2CD] shadow-[0_8px_30px_rgba(70,60,30,0.08)] py-3 px-4 sm:px-8'
            : 'bg-[#FBF7EF]/75 backdrop-blur-sm border-[#EDE2CD]/60 py-4 px-4 sm:px-8'
        }`}
      >
        <div className="max-w-[1280px] mx-auto flex items-center justify-between gap-4">
          
          {/* Brand Logo & Name */}
          <a
            href="#"
            className="flex items-center gap-3.5 text-decoration-none group"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <div className="w-[42px] h-[42px] rounded-xl overflow-hidden shadow-sm border border-[#E8D3A0] transition-transform duration-300 group-hover:scale-105 shrink-0 bg-[#EDE2CD]">
              <img
                src="https://i.ibb.co/C3DyGDwH/Redraw-logo-in-gold-background-2-K-20260925063353.webp"
                alt="Glow Sites"
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>
            <span className="serif text-xl sm:text-2xl font-semibold tracking-wide text-[#2D2B28]">
              {SITE.marca.nome}
            </span>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-7 text-[14px] text-[#7B756B] font-medium tracking-wide">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="hover:text-[#B8924A] transition-colors relative py-1 text-decoration-none"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-3">
            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-[#2D2B28] hover:bg-[#EDE2CD]/60 transition-colors"
              aria-label="Abrir menu de navegação"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Curtain Menu */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-[#FBF7EF]/98 backdrop-blur-xl flex flex-col justify-center items-center gap-6 p-8 transition-opacity duration-300"
          style={{ paddingTop: 'calc(80px + env(safe-area-inset-top, 0px))' }}
        >
          <div className="flex flex-col items-center gap-5 text-center">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="serif text-2xl text-[#2D2B28] hover:text-[#B8924A] font-medium transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-6 w-full max-w-xs flex flex-col gap-3 mx-auto text-center">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenWhats(SITE.mensagemWhats);
              }}
              className="btn w-full text-center justify-center py-3.5 mx-auto"
            >
              Quero meu esboço sem custo
            </button>
            <a
              href={SITE.marca.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary w-full text-center justify-center py-3 mx-auto"
            >
              Instagram @glow.websites
            </a>
          </div>
        </div>
      )}
    </>
  );
};

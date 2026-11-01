import React, { useState, useMemo } from 'react';
import {
  Search,
  Sparkles,
  ArrowRight,
  ChevronDown,
  ShieldCheck,
  Globe,
  Zap,
} from 'lucide-react';
import { SITE, RecursoItem } from '../config';

interface ModulesSectionProps {
  onOpenWhats: (msg?: string) => void;
}

export const ModulesSection: React.FC<ModulesSectionProps> = ({ onOpenWhats }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('Tudo');
  const [expandedIds, setExpandedIds] = useState<Set<string>>(new Set());

  const categories = [
    { label: 'Tudo', count: 28 },
    { label: 'Identidade e design', count: 4 },
    { label: 'Conteúdo', count: 9 },
    { label: 'Agendamento', count: 4 },
    { label: 'Visibilidade', count: 6 },
    { label: 'Técnico', count: 5 },
  ];

  const filteredRecursos = useMemo(() => {
    return SITE.recursosCatalogo.filter((item: RecursoItem) => {
      const matchesCategory =
        selectedCategory === 'Tudo' || item.categoria === selectedCategory;
      const term = searchTerm.toLowerCase().trim();
      const matchesSearch =
        term === '' ||
        item.titulo.toLowerCase().includes(term) ||
        item.subtitulo.toLowerCase().includes(term) ||
        item.explicacao.toLowerCase().includes(term) ||
        item.categoria.toLowerCase().includes(term);
      return matchesCategory && matchesSearch;
    });
  }, [searchTerm, selectedCategory]);

  const toggleExpand = (id: string) => {
    setExpandedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const expandAll = () => {
    setExpandedIds(new Set(filteredRecursos.map((r) => r.id)));
  };

  const collapseAll = () => {
    setExpandedIds(new Set());
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    card.style.setProperty('--mx', `${e.clientX - rect.left}px`);
    card.style.setProperty('--my', `${e.clientY - rect.top}px`);
  };

  return (
    <section className="py-24 md:py-32 px-4 sm:px-6 bg-[#F3EBDC] relative" id="oque-tem">
      <div className="max-w-[1240px] mx-auto">
        
        {/* Main Title & Intro */}
        <div className="text-center max-w-[840px] mx-auto mb-16">
          <span className="text-xs font-semibold tracking-widest uppercase text-[#C59B27] mb-3 block">
            ✦ Pacote Completo de Alto Padrão
          </span>
          <h2 className="tt text-3xl sm:text-4xl md:text-5xl font-normal text-[#2D2B28] mb-6">
            Recursos incluídos no seu site
          </h2>
          <p className="text-[#7B756B] text-base md:text-lg leading-relaxed mx-auto mb-8">
            Cada detalhe pensado para o seu estúdio
          </p>

          {/* 4 Feature Badges with Borda Dourada */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4 mb-8 text-left">
            <div className="p-4 rounded-2xl bg-white/95 border-2 border-[#D4AF37] shadow-[0_6px_20px_rgba(197,155,39,0.15)] flex items-start gap-3 transition-transform duration-300 hover:scale-[1.02]">
              <Sparkles className="w-5 h-5 text-[#C59B27] shrink-0 mt-0.5" />
              <span className="text-xs sm:text-sm font-semibold text-[#2D2B28] leading-snug">
                Identidade visual única
              </span>
            </div>
            <div className="p-4 rounded-2xl bg-white/95 border-2 border-[#D4AF37] shadow-[0_6px_20px_rgba(197,155,39,0.15)] flex items-start gap-3 transition-transform duration-300 hover:scale-[1.02]">
              <Globe className="w-5 h-5 text-[#C59B27] shrink-0 mt-0.5" />
              <span className="text-xs sm:text-sm font-semibold text-[#2D2B28] leading-snug">
                Pensado para o Google e IAs
              </span>
            </div>
            <div className="p-4 rounded-2xl bg-white/95 border-2 border-[#D4AF37] shadow-[0_6px_20px_rgba(197,155,39,0.15)] flex items-start gap-3 transition-transform duration-300 hover:scale-[1.02]">
              <ShieldCheck className="w-5 h-5 text-[#C59B27] shrink-0 mt-0.5" />
              <span className="text-xs sm:text-sm font-semibold text-[#2D2B28] leading-snug">
                Domínio e hospedagem inclusos
              </span>
            </div>
            <div className="p-4 rounded-2xl bg-white/95 border-2 border-[#D4AF37] shadow-[0_6px_20px_rgba(197,155,39,0.15)] flex items-start gap-3 transition-transform duration-300 hover:scale-[1.02]">
              <Zap className="w-5 h-5 text-[#C59B27] shrink-0 mt-0.5" />
              <span className="text-xs sm:text-sm font-semibold text-[#2D2B28] leading-snug">
                Entrega pronta, sem mensalidade
              </span>
            </div>
          </div>

          {/* Quick Action Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm">
            <a
              href="#catalogo-completo"
              className="text-[#2D2B28] font-bold underline hover:text-[#C59B27] transition-colors"
            >
              Ver tudo o que está incluído ↓
            </a>
            <span className="text-[#C59B27]">✦</span>
            <a
              href="#processo"
              className="text-[#2D2B28] font-bold underline hover:text-[#C59B27] transition-colors"
            >
              Ver como funciona →
            </a>
            <span className="text-[#C59B27]">✦</span>
            <span className="text-[#7B756B] italic">
              Sem custos ocultos. Pacote transparente.
            </span>
          </div>
        </div>

        {/* Section: Como pensamos o seu site with Borda Dourada */}
        <div className="rounded-[34px] p-6 sm:p-12 bg-white/90 border-2 border-[#D4AF37] shadow-[0_16px_50px_rgba(197,155,39,0.18)] mb-20">
          <div className="text-center max-w-[700px] mx-auto mb-10">
            <h3 className="serif text-2xl sm:text-3xl font-medium text-[#2D2B28] mb-3">
              Como pensamos o seu site
            </h3>
            <p className="text-xs sm:text-sm text-[#7B756B]">
              Uma abordagem pensada para você não precisar se preocupar com nada técnico.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="p-6 rounded-2xl bg-[#FBF7EF] border-2 border-[#D4AF37]/80 shadow-sm transition-transform duration-300 hover:translate-y-[-2px]">
              <div className="w-10 h-10 rounded-full bg-[#C59B27] text-white flex items-center justify-center font-bold text-sm mb-4 shadow-xs">
                01
              </div>
              <h4 className="serif text-xl font-semibold text-[#2D2B28] mb-2">
                Design exclusivo, feito do zero.
              </h4>
              <p className="text-xs sm:text-sm text-[#7B756B] leading-relaxed">
                Criamos o site a partir da identidade da sua marca. Nada de modelos genéricos ou layouts pré-fabricados.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FBF7EF] border-2 border-[#D4AF37]/80 shadow-sm transition-transform duration-300 hover:translate-y-[-2px]">
              <div className="w-10 h-10 rounded-full bg-[#C59B27] text-white flex items-center justify-center font-bold text-sm mb-4 shadow-xs">
                02
              </div>
              <h4 className="serif text-xl font-semibold text-[#2D2B28] mb-2">
                Feito para gerar agendamentos.
              </h4>
              <p className="text-xs sm:text-sm text-[#7B756B] leading-relaxed">
                Não é só bonito. Cada seção guia a visitante até a marcação do horário com clareza e autoridade.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FBF7EF] border-2 border-[#D4AF37]/80 shadow-sm transition-transform duration-300 hover:translate-y-[-2px]">
              <div className="w-10 h-10 rounded-full bg-[#C59B27] text-white flex items-center justify-center font-bold text-sm mb-4 shadow-xs">
                03
              </div>
              <h4 className="serif text-xl font-semibold text-[#2D2B28] mb-2">
                Preparado para ser encontrada.
              </h4>
              <p className="text-xs sm:text-sm text-[#7B756B] leading-relaxed">
                Estrutura pensada para o Google e para as pesquisas por IA, para quem procura o seu serviço na sua região.
              </p>
            </div>
          </div>
        </div>

        {/* Section: Catálogo Completo */}
        <div id="catalogo-completo" className="mb-20 scroll-mt-24">
          <div className="text-center max-w-[700px] mx-auto mb-10">
            <span className="text-[#C59B27] text-xl block mb-1">✦</span>
            <span className="text-xs font-semibold tracking-widest uppercase text-[#C59B27] mb-2 block">
              Catálogo Completo
            </span>
            <h3 className="serif text-3xl sm:text-4xl font-normal text-[#2D2B28] mb-3">
              O que está incluído no seu site
            </h3>
            <p className="text-xs sm:text-sm text-[#7B756B]">
              Toque em qualquer cartão para ver exatamente para que serve e como valoriza o seu negócio.
            </p>
          </div>

          {/* Search Bar with Borda Dourada */}
          <div className="max-w-[620px] mx-auto mb-8 relative">
            <Search className="w-5 h-5 text-[#C59B27] absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Buscar recurso (ex.: SEO, WhatsApp, domínio, mapa)..."
              className="w-full pl-12 pr-4 py-3.5 rounded-full bg-white border-2 border-[#D4AF37] text-sm text-[#2D2B28] placeholder-[#7B756B]/70 shadow-[0_4px_16px_rgba(197,155,39,0.12)] focus:border-[#C59B27] focus:outline-none transition-all"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-[#7B756B] hover:text-[#2D2B28] px-2 py-1"
              >
                Limpar
              </button>
            )}
          </div>

          {/* Category Filter Tabs with Borda Dourada */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 mb-8">
            {categories.map((cat) => (
              <button
                key={cat.label}
                onClick={() => setSelectedCategory(cat.label)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all border-2 ${
                  selectedCategory === cat.label
                    ? 'bg-[#C59B27] text-white shadow-md border-[#9E781A]'
                    : 'bg-white/95 text-[#2D2B28] border-[#D4AF37]/70 hover:border-[#C59B27] hover:bg-white shadow-xs'
                }`}
              >
                {cat.label} ({cat.count})
              </button>
            ))}
          </div>

          {/* Counter & Expand / Collapse Controls */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-4 mb-6 border-b border-[#D4AF37]/50 text-xs text-[#7B756B]">
            <span className="font-semibold text-[#2D2B28]">
              Mostrando {filteredRecursos.length} de 28 recursos
            </span>
            <div className="flex items-center gap-4">
              <button
                onClick={expandAll}
                className="text-[#C59B27] hover:underline font-bold"
              >
                Expandir todos
              </button>
              <span>·</span>
              <button
                onClick={collapseAll}
                className="hover:underline text-[#7B756B] font-medium"
              >
                Recolher
              </button>
            </div>
          </div>

          {/* 28 Resource Cards Grid with Borda Dourada in Every Single Card */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {filteredRecursos.map((rec: RecursoItem) => {
              const isExpanded = expandedIds.has(rec.id);
              return (
                <div
                  key={rec.id}
                  onClick={() => toggleExpand(rec.id)}
                  onPointerMove={handlePointerMove}
                  className={`mod cursor-pointer select-none transition-all duration-300 flex flex-col justify-between border-2 rounded-[28px] ${
                    isExpanded
                      ? 'border-[#C59B27] bg-white shadow-[0_14px_36px_rgba(197,155,39,0.25)] ring-2 ring-[#F5D77F]'
                      : 'border-[#D4AF37] bg-white/95 hover:border-[#C59B27] hover:shadow-[0_10px_28px_rgba(197,155,39,0.18)]'
                  }`}
                >
                  <div>
                    {/* Category pill with Borda Dourada */}
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="text-[10px] font-bold text-[#9E781A] uppercase tracking-wider bg-[#FFF9E6] border border-[#D4AF37] px-2.5 py-0.5 rounded-full shadow-2xs">
                        {rec.categoria}
                      </span>
                      <ChevronDown
                        className={`w-4 h-4 text-[#C59B27] transition-transform duration-300 ${
                          isExpanded ? 'rotate-180 text-[#2D2B28]' : ''
                        }`}
                      />
                    </div>

                    <h4 className="serif text-lg font-bold text-[#2D2B28] leading-tight mb-1">
                      {rec.titulo}
                    </h4>
                    <p className="text-xs text-[#7B756B] leading-relaxed mb-3">
                      {rec.subtitulo}
                    </p>

                    {/* Expandable Explanation with Borda Dourada */}
                    {isExpanded && (
                      <div className="pt-3 border-t border-[#D4AF37]/40 text-xs text-[#2D2B28]/95 leading-relaxed bg-[#FFFDF7] p-3 rounded-xl mt-2 border border-[#E8D3A0] shadow-inner animate-fadeIn">
                        <p className="font-bold text-[#C59B27] mb-1">Por que é importante:</p>
                        <p>{rec.explicacao}</p>
                      </div>
                    )}
                  </div>

                  <div className="pt-3 mt-3 border-t border-[#D4AF37]/40 text-[11px] text-[#C59B27] font-semibold flex items-center justify-between">
                    <span>{isExpanded ? 'Recolher detalhes' : 'Ver como funciona'}</span>
                    <span>✦</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Section: Nota Educativa with Borda Dourada */}
        <div className="rounded-[34px] p-6 sm:p-12 bg-[#EDE2CD] border-2 border-[#D4AF37] shadow-[0_16px_50px_rgba(197,155,39,0.18)] mb-14">
          <div className="max-w-[820px] mx-auto">
            <span className="text-xs font-semibold tracking-widest uppercase text-[#9E781A] mb-2 block text-center">
              ✦ Nota Educativa
            </span>
            <h3 className="serif text-2xl sm:text-3xl md:text-4xl font-medium text-[#2D2B28] text-center mb-6">
              Como funciona a visibilidade no Google e nas IAs
            </h3>

            <div className="space-y-4 text-xs sm:text-sm text-[#2D2B28]/90 leading-relaxed mb-8">
              <p>
                <strong>SEO, GEO e AIO</strong> são formas técnicas de preparar o site para ser encontrado de forma orgânica, sem pagar anúncio. Com o tempo, o Google e as ferramentas de IA leem e interpretam a estrutura do seu site, e isso ajuda você a aparecer nas pesquisas da sua região.
              </p>
              <p>
                Sem um site próprio, esse posicionamento orgânico não existe: <em>perfis de rede social não são organizados para essas buscas</em>.
              </p>
              <p className="italic text-[#7B756B]">
                Somos transparentes: não prometemos primeiro lugar imediato nem resultados de um dia para o outro, porque os buscadores levam tempo para reconhecer um site novo. O que garantimos é que o seu site nasce bem estruturado para ser encontrado.
              </p>
            </div>

            {/* 3 Pillars with Borda Dourada: SEO, GEO, AIO */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div className="p-5 rounded-2xl bg-white border-2 border-[#D4AF37] shadow-[0_4px_16px_rgba(197,155,39,0.12)]">
                <span className="serif text-xl font-bold text-[#C59B27] block mb-1">
                  SEO (Google)
                </span>
                <p className="text-xs text-[#7B756B] leading-relaxed">
                  Títulos, descrições e palavras-chave que os motores de busca leem para entender o seu estúdio na sua cidade.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white border-2 border-[#D4AF37] shadow-[0_4px_16px_rgba(197,155,39,0.12)]">
                <span className="serif text-xl font-bold text-[#C59B27] block mb-1">
                  GEO (Respostas de IA)
                </span>
                <p className="text-xs text-[#7B756B] leading-relaxed">
                  Texto escrito de forma clara e consistente para que ferramentas como ChatGPT e Gemini citem você.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white border-2 border-[#D4AF37] shadow-[0_4px_16px_rgba(197,155,39,0.12)]">
                <span className="serif text-xl font-bold text-[#C59B27] block mb-1">
                  AIO (Dados estruturados)
                </span>
                <p className="text-xs text-[#7B756B] leading-relaxed">
                  Marcação técnica no código que descreve com precisão quem você é, o que faz e onde atende.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Button - Centralized on mobile */}
        <div className="flex justify-center text-center">
          <button
            onClick={() => onOpenWhats('Olá, Lana! Gostaria de receber uma proposta com todos os 28 recursos para o meu estúdio.')}
            className="btn text-sm sm:text-base py-4 px-8 justify-center mx-auto shadow-lg w-full max-w-sm sm:w-auto"
          >
            <span>Quero esses recursos no meu site</span>
            <ArrowRight className="w-4 h-4 text-[#2D2B28]" />
          </button>
        </div>

      </div>
    </section>
  );
};

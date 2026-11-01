import React, { useState } from 'react';
import { Search, ExternalLink, RefreshCw, CheckCircle, Maximize2, Minimize2, Sparkles, ArrowRight } from 'lucide-react';

interface DemoSectionProps {
  onOpenWhats: (msg?: string) => void;
}

export const DemoSection: React.FC<DemoSectionProps> = ({ onOpenWhats }) => {
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const demoUrl = 'https://rare-draluaneavila.vercel.app/';

  const handleReload = () => {
    setIframeLoaded(false);
    const iframe = document.getElementById('demo-iframe') as HTMLIFrameElement;
    if (iframe) {
      iframe.src = demoUrl;
    }
  };

  return (
    <section className="py-24 md:py-32 px-6 bg-[#FBF7EF] relative overflow-hidden" id="veja-na-pratica">
      <div className="max-w-[1240px] mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-[800px] mx-auto mb-16">
          <span className="text-xs font-semibold tracking-widest uppercase text-[#C59B27] mb-3 block">
            Caso Real Comprovado
          </span>
          <h2 className="tt text-3xl sm:text-4xl md:text-5xl font-normal text-[#2D2B28] mb-6">
            Veja um site Glow em ação.
          </h2>
          <p className="text-[#7B756B] text-base md:text-lg leading-relaxed mx-auto">
            Navegue no projeto real da <strong>Dra. Luane Ávila (Clínica Rare)</strong> diretamente aqui no próprio site da Glow.
          </p>
        </div>

        {/* 2-Column Grid: Live Interactive Mockup on Left + Google Organic Proof on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-14 items-center mb-14">
          
          {/* Column 1: Interactive Device Frame with In-Site Navigation */}
          <div className="flex flex-col items-center w-full">
            <div
              className={`transition-all duration-500 rounded-[38px] p-3 sm:p-4 bg-white/80 border border-[#E8D3A0] shadow-[0_24px_70px_rgba(197,155,39,0.2)] backdrop-blur-md relative w-full ${
                isExpanded ? 'max-w-2xl h-[720px]' : 'max-w-[340px] sm:max-w-[360px] h-[640px]'
              }`}
            >
              {/* Device Top Bar with controls */}
              <div className="flex items-center justify-between px-3 py-2 border-b border-[#EDE2CD] mb-2 bg-[#FBF7EF] rounded-2xl">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#E8D3A0]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#C59B27]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#25D366]" />
                </div>
                <span className="text-[11px] font-semibold text-[#7B756B] truncate max-w-[170px]">
                  rare-draluaneavila.vercel.app
                </span>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="p-1 rounded text-[#7B756B] hover:text-[#2D2B28]"
                    title={isExpanded ? 'Visualização celular' : 'Expandir tela'}
                  >
                    {isExpanded ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
                  </button>
                  <button
                    onClick={handleReload}
                    className="p-1 rounded text-[#7B756B] hover:text-[#2D2B28]"
                    title="Recarregar"
                  >
                    <RefreshCw className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Iframe Viewport */}
              <div className="w-full h-[calc(100%-46px)] rounded-[26px] overflow-hidden bg-[#FAF7F2] relative border border-[#EDE2CD]">
                <iframe
                  id="demo-iframe"
                  src={demoUrl}
                  title="Demonstração interativa do site da Dra. Luane Ávila no site da Glow"
                  className="w-full h-full border-none"
                  onLoad={() => setIframeLoaded(true)}
                  sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
                />

                {!iframeLoaded && (
                  <div className="absolute inset-0 bg-[#FBF7EF] flex flex-col items-center justify-center p-6 text-center z-10">
                    <div className="w-8 h-8 border-2 border-[#C59B27] border-t-transparent rounded-full animate-spin mb-3" />
                    <p className="text-xs font-semibold text-[#2D2B28]">
                      Carregando site da Dra. Luane Ávila...
                    </p>
                    <p className="text-[11px] text-[#7B756B] mt-1">
                      Navegação ao vivo e interativa
                    </p>
                  </div>
                )}
              </div>
            </div>

            <div className="flex items-center gap-3 mt-4 text-xs text-[#7B756B]">
              <span className="flex items-center gap-1.5 font-medium text-[#2D2B28]">
                <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
                Navegue no site acima sem sair da Glow
              </span>
              <span>·</span>
              <a
                href={demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#C59B27] font-semibold underline hover:no-underline flex items-center gap-1"
              >
                <span>Abrir em aba separada</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Column 2: The Proof - #1 Organic Google Recommendation */}
          <div className="flex flex-col gap-6">
            
            {/* Tagline */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F3EBDC] border border-[#E8D3A0] text-xs font-bold uppercase tracking-wider text-[#9E781A] self-start mx-auto lg:mx-0">
              <Sparkles className="w-3.5 h-3.5 text-[#C59B27]" />
              <span>Poder do SEO &amp; Ranqueamento Orgânico</span>
            </div>

            <h3 className="serif text-2xl sm:text-3xl md:text-4xl font-medium text-[#2D2B28] leading-tight text-center lg:text-left">
              1ª Opção recomendada organicamente no Google
            </h3>

            <p className="text-sm sm:text-base text-[#7B756B] leading-relaxed text-center lg:text-left">
              Depois da publicação do site desenvolvido pela Glow, quando qualquer pessoa pesquisa por{' '}
              <strong className="text-[#2D2B28] font-semibold">“Preenchimento Labial em Salvador”</strong>,{' '}
              a <strong>Dra. Luane Ávila</strong> aparece recomendada no topo absoluto das buscas orgânicas.
            </p>

            {/* Google Search Mockup Card */}
            <div className="rounded-3xl p-6 sm:p-7 bg-white border border-[#EDE2CD] shadow-[0_16px_50px_rgba(70,60,30,0.09)] space-y-5">
              
              {/* Google Search Bar Mock */}
              <div className="flex items-center gap-3 px-4 py-2.5 rounded-full bg-[#FBF7EF] border border-[#EDE2CD] text-xs text-[#2D2B28] shadow-inner">
                <Search className="w-4 h-4 text-[#C59B27] shrink-0" />
                <span className="font-medium truncate">Preenchimento labial em Salvador</span>
                <span className="ml-auto text-[10px] text-[#7B756B] font-mono">Google</span>
              </div>

              {/* Competitors' Paid Ads Note */}
              <div className="p-3.5 rounded-2xl bg-[#F3EBDC]/60 border border-[#EDE2CD] text-left">
                <div className="flex items-center gap-2 text-[11px] font-semibold text-[#7B756B] mb-1">
                  <span className="px-1.5 py-0.5 rounded bg-white text-[10px] font-bold text-[#7B756B] border border-[#EDE2CD]">
                    Patrocinado
                  </span>
                  <span>Anúncios Pagos de Concorrentes</span>
                </div>
                <p className="text-[11px] text-[#7B756B] leading-snug">
                  Clínicas concorrentes que pagam caro por cada clique para tentar aparecer no topo.
                </p>
              </div>

              {/* #1 Organic Result - Dra. Luane Ávila Glow Site */}
              <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-[#FFFDF9] via-[#FBF7EF] to-[#F5EBDC] border-2 border-[#C59B27] shadow-[0_8px_25px_rgba(197,155,39,0.18)] relative text-left">
                
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#C59B27] text-white text-[10px] font-bold uppercase tracking-wider mb-2.5 shadow-xs">
                  <CheckCircle className="w-3 h-3 stroke-[3]" />
                  <span>1ª Posição Orgânica no Google</span>
                </div>

                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs text-[#2D2B28] font-mono">
                    rare-draluaneavila.vercel.app
                  </span>
                  <span className="text-xs text-[#7B756B]">› salvador › preenchimento</span>
                </div>

                <h4 className="serif text-lg sm:text-xl font-bold text-[#1a0dab] hover:underline cursor-pointer mb-1 leading-snug">
                  Dra. Luane Ávila — Clínica Rare | Harmonização Orofacial &amp; Preenchimento Labial
                </h4>

                {/* Golden Review Stars */}
                <div className="flex items-center gap-2 text-xs mb-2">
                  <span className="text-[#C59B27] font-bold">★★★★★ 5.0</span>
                  <span className="text-[#7B756B]">(Avaliações verificadas de pacientes)</span>
                  <span className="text-xs text-[#2D2B28] font-semibold">· Salvador - BA</span>
                </div>

                <p className="text-xs text-[#4d5156] leading-relaxed">
                  Referência em escultura e preenchimento labial com proporção áurea e máxima naturalidade em Salvador. Conheça os protocolos exclusivos e agende pelo WhatsApp.
                </p>
              </div>

              {/* Important Clarification Note */}
              <div className="pt-2 text-[11px] text-[#7B756B] leading-relaxed text-left border-t border-[#EDE2CD]">
                <strong className="text-[#2D2B28]">✦ Observação transparente:</strong> Os resultados que aparecem acima dela são anúncios pagos com tag <em>Patrocinado</em>. 
                Os sites da <strong>Glow</strong> ranqueiam de forma <strong>100% orgânica</strong>, conquistando a confiança das pacientes sem que você precise gastar fortuna em anúncios por clique.
              </div>

            </div>

            {/* Action Buttons - Centralized on mobile */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2 w-full sm:w-auto mx-auto lg:mx-0">
              <button
                onClick={() => onOpenWhats('Olá, Lana! Vi o case da Dra. Luane Ávila ranqueando em 1º orgânico em Salvador e quero esse resultado para o meu estúdio/clínica.')}
                className="btn text-sm py-4 px-8 w-full sm:w-auto justify-center mx-auto lg:mx-0 shadow-lg"
              >
                <span>Quero meu estúdio no topo orgânico</span>
                <ArrowRight className="w-4 h-4 text-[#2D2B28]" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

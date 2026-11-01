import React from 'react';
import { SITE } from '../config';

export const BandSection: React.FC = () => {
  const words = [
    'SEO',
    'BEAUTY',
    'DESIGN',
    'LUXURY',
    'ESTÉTICA',
    'CONVERSÃO',
    'AIO',
    'GEO',
    'SITES ÚNICOS',
  ];

  const repeated = [...words, ...words, ...words];

  return (
    <div
      className="relative w-full py-16 sm:py-20 overflow-hidden bg-[#FBF7EF] flex items-center justify-center select-none"
      aria-label="Faixas de palavras-chave da Glow Sites"
    >
      {/* Background glow behind intersection */}
      <div
        className="absolute w-72 h-72 rounded-full bg-[#E8D3A0]/30 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      {/* Ribbon 1: Angled slightly negative (-2.5deg) */}
      <div
        className="absolute w-[120%] -left-[10%] py-3.5 sm:py-4 shadow-[0_10px_30px_rgba(70,60,30,0.18)] z-10"
        style={{
          transform: 'rotate(-2.5deg)',
          background: 'linear-gradient(100deg, #9C7A32, #C9A25A 30%, #E8D3A0 55%, #C9A25A 80%, #9C7A32)',
          backgroundSize: '240% 100%',
        }}
      >
        <div className="flex whitespace-nowrap overflow-hidden">
          <div className="band__track text-white font-medium text-lg sm:text-2xl tracking-widest uppercase">
            {repeated.map((word, idx) => (
              <span key={idx} className="px-6 inline-flex items-center gap-4 text-white">
                <span className="font-semibold drop-shadow-sm text-white">{word}</span>
                <span className="text-[#FFF3C9] opacity-80 text-sm">✦</span>
              </span>
            ))}
          </div>
          <div className="band__track text-white font-medium text-lg sm:text-2xl tracking-widest uppercase" aria-hidden="true">
            {repeated.map((word, idx) => (
              <span key={`dup-${idx}`} className="px-6 inline-flex items-center gap-4 text-white">
                <span className="font-semibold drop-shadow-sm text-white">{word}</span>
                <span className="text-[#FFF3C9] opacity-80 text-sm">✦</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Ribbon 2: Angled slightly positive (+2.5deg) crossing over ribbon 1 */}
      <div
        className="w-[120%] -left-[10%] py-3.5 sm:py-4 shadow-[0_12px_36px_rgba(70,60,30,0.22)] z-20 border-y border-white/30"
        style={{
          transform: 'rotate(2.5deg)',
          background: 'linear-gradient(100deg, #B8924A, #E8D3A0 35%, #C9A25A 60%, #F5E2A8 85%, #9C7A32)',
          backgroundSize: '240% 100%',
        }}
      >
        <div className="flex whitespace-nowrap overflow-hidden">
          <div className="band__track reverse text-white font-medium text-lg sm:text-2xl tracking-widest uppercase">
            {repeated.map((word, idx) => (
              <span key={idx} className="px-6 inline-flex items-center gap-4 text-white">
                <span className="font-semibold drop-shadow-sm text-white">{word}</span>
                <span className="text-[#FFF3C9] opacity-80 text-sm">✦</span>
              </span>
            ))}
          </div>
          <div className="band__track reverse text-white font-medium text-lg sm:text-2xl tracking-widest uppercase" aria-hidden="true">
            {repeated.map((word, idx) => (
              <span key={`dup-${idx}`} className="px-6 inline-flex items-center gap-4 text-white">
                <span className="font-semibold drop-shadow-sm text-white">{word}</span>
                <span className="text-[#FFF3C9] opacity-80 text-sm">✦</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

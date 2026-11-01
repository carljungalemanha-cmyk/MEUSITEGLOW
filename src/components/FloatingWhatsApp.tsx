import React from 'react';
import { MessageCircle } from 'lucide-react';
import { SITE } from '../config';

interface FloatingWhatsAppProps {
  onOpenWhats: (msg?: string) => void;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({ onOpenWhats }) => {
  return (
    <a
      href={`https://wa.me/${SITE.marca.whatsapp}?text=${encodeURIComponent(SITE.mensagemWhats)}`}
      target="_blank"
      rel="noopener noreferrer"
      onClick={(e) => {
        e.preventDefault();
        onOpenWhats(SITE.mensagemWhats);
      }}
      className="wa-float group"
      title="Falar no WhatsApp com a Lana"
      aria-label="Abrir conversa no WhatsApp"
    >
      <div className="wa-pulse" aria-hidden="true" />
      <MessageCircle className="w-7 h-7 fill-[#2D2B28] text-[#2D2B28] stroke-none transition-transform duration-300 group-hover:scale-110 drop-shadow-sm" />
    </a>
  );
};

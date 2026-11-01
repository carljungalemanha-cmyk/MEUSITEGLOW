import React, { useState } from 'react';
import { ArrowRight, Copy, Check, MessageCircle, Sparkles } from 'lucide-react';
import { SITE } from '../config';

interface ContactFormSectionProps {
  onOpenWhats: (msg?: string) => void;
}

export const ContactFormSection: React.FC<ContactFormSectionProps> = ({ onOpenWhats }) => {
  const [nome, setNome] = useState('');
  const [area, setArea] = useState('Cirurgiã-Dentista / Harmonização Orofacial');
  const [cidade, setCidade] = useState('');
  const [instagram, setInstagram] = useState('');
  const [selectedChips, setSelectedChips] = useState<string[]>(['Visual de luxo', 'Aparecer no Google e nas IAs']);
  const [copied, setCopied] = useState(false);
  const [errorNome, setErrorNome] = useState(false);

  const chipOptions = [
    'Mais pacientes',
    'Visual de luxo',
    'Aparecer no Google e nas IAs',
    'Tudo isso',
  ];

  const toggleChip = (chip: string) => {
    if (chip === 'Tudo isso') {
      if (selectedChips.includes('Tudo isso')) {
        setSelectedChips(['Visual de luxo']);
      } else {
        setSelectedChips(['Tudo isso', 'Mais pacientes', 'Visual de luxo', 'Aparecer no Google e nas IAs']);
      }
      return;
    }

    if (selectedChips.includes(chip)) {
      setSelectedChips(selectedChips.filter((c) => c !== chip && c !== 'Tudo isso'));
    } else {
      setSelectedChips([...selectedChips.filter((c) => c !== 'Tudo isso'), chip]);
    }
  };

  const generateMessage = () => {
    const goalsText = selectedChips.length > 0 ? selectedChips.join(', ') : 'um site de luxo';
    return `Olá, Lana! Meu nome é ${nome.trim() || '[seu nome]'}. Atuo com ${area}, em ${
      cidade.trim() || '[sua cidade]'
    }. Meu Instagram: ${instagram.trim() || '[seu perfil]'}. Quero ${goalsText}. Gostaria de receber um esboço do meu site sem custo.`;
  };

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!nome.trim()) {
      setErrorNome(true);
      const input = document.getElementById('form-nome');
      if (input) input.focus();
      return;
    }
    setErrorNome(false);
    onOpenWhats(generateMessage());
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generateMessage());
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section
      className="py-24 md:py-32 px-6 relative"
      id="esboco"
      style={{
        background: 'linear-gradient(180deg, var(--bg) 0%, var(--bg-3) 100%)',
      }}
    >
      <div className="max-w-[840px] mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-[760px] mx-auto mb-14">
          <span className="text-xs font-semibold tracking-widest uppercase text-[#B8924A] mb-3 block">
            Primeiro Passo Sem Risco
          </span>
          <h2 className="tt text-3xl sm:text-4xl md:text-5xl font-normal text-[#2D2B28] mb-6">
            Receba um esboço do seu site, sem custo.
          </h2>
          <p className="text-[#7B756B] text-base md:text-lg leading-relaxed mx-auto">
            Conte um pouco sobre você e eu preparo uma primeira ideia visual para o seu consultório. Sem compromisso.
          </p>
        </div>

        {/* Glass Card Form */}
        <div className="glass rounded-[34px] p-6 sm:p-10 border border-white/90 shadow-[0_24px_70px_rgba(70,60,30,0.15)] relative">
          
          <form onSubmit={handleSend} className="space-y-6">
            
            {/* Grid Nome & Área */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="form-nome" className="block text-xs font-semibold text-[#2D2B28] uppercase tracking-wider mb-2">
                  Seu Nome Completo <span className="text-[#B8924A]">*</span>
                </label>
                <input
                  id="form-nome"
                  type="text"
                  value={nome}
                  onChange={(e) => {
                    setNome(e.target.value);
                    if (errorNome) setErrorNome(false);
                  }}
                  placeholder="Ex: Dra. Camila Ramos"
                  className={`w-full px-4 py-3 rounded-2xl bg-white/90 border text-sm text-[#2D2B28] transition-all focus:bg-white focus:outline-none ${
                    errorNome
                      ? 'border-red-400 ring-2 ring-red-200'
                      : 'border-[#EDE2CD] focus:border-[#B8924A]'
                  }`}
                  required
                />
                {errorNome && (
                  <p className="text-xs text-red-600 mt-1 font-medium">
                    Por favor, informe seu nome para personalizar o atendimento.
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="form-area" className="block text-xs font-semibold text-[#2D2B28] uppercase tracking-wider mb-2">
                  Área de Atuação
                </label>
                <select
                  id="form-area"
                  value={area}
                  onChange={(e) => setArea(e.target.value)}
                  className="w-full px-4 py-3 rounded-2xl bg-white/90 border border-[#EDE2CD] text-sm text-[#2D2B28] transition-all focus:border-[#B8924A] focus:bg-white focus:outline-none"
                >
                  <option value="Cirurgiã-Dentista / Harmonização Orofacial">
                    Cirurgiã-Dentista / Harmonização Orofacial
                  </option>
                  <option value="Biomédica Esteta">Biomédica Esteta</option>
                  <option value="Enfermeira Esteta">Enfermeira Esteta</option>
                  <option value="Médica Dermatologista / Esteta">
                    Médica Dermatologista / Esteta
                  </option>
                  <option value="Farmacêutica Esteta">Farmacêutica Esteta</option>
                  <option value="Clínica / Outra especialidade facial">
                    Clínica / Outra especialidade facial
                  </option>
                </select>
              </div>
            </div>

            {/* Grid Cidade & Instagram */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="form-cidade" className="block text-xs font-semibold text-[#2D2B28] uppercase tracking-wider mb-2">
                  Cidade e Estado
                </label>
                <input
                  id="form-cidade"
                  type="text"
                  value={cidade}
                  onChange={(e) => setCidade(e.target.value)}
                  placeholder="Ex: São Paulo • SP"
                  className="w-full px-4 py-3 rounded-2xl bg-white/90 border border-[#EDE2CD] text-sm text-[#2D2B28] transition-all focus:border-[#B8924A] focus:bg-white focus:outline-none"
                />
              </div>

              <div>
                <label htmlFor="form-insta" className="block text-xs font-semibold text-[#2D2B28] uppercase tracking-wider mb-2">
                  Seu Instagram
                </label>
                <input
                  id="form-insta"
                  type="text"
                  value={instagram}
                  onChange={(e) => setInstagram(e.target.value)}
                  placeholder="Ex: @dracamila.hof"
                  className="w-full px-4 py-3 rounded-2xl bg-white/90 border border-[#EDE2CD] text-sm text-[#2D2B28] transition-all focus:border-[#B8924A] focus:bg-white focus:outline-none"
                />
              </div>
            </div>

            {/* Chips: O que você mais quer */}
            <div>
              <label className="block text-xs font-semibold text-[#2D2B28] uppercase tracking-wider mb-3">
                O que você mais busca com o novo site?
              </label>
              <div className="flex flex-wrap gap-2.5">
                {chipOptions.map((chip) => {
                  const isSelected = selectedChips.includes(chip);
                  return (
                    <button
                      type="button"
                      key={chip}
                      onClick={() => toggleChip(chip)}
                      className={`px-4 py-2 rounded-full text-xs font-medium transition-all ${
                        isSelected
                          ? 'bg-[#B8924A] text-white shadow-sm border border-[#9C7A32]'
                          : 'bg-white/80 text-[#7B756B] border border-[#EDE2CD] hover:border-[#B8924A]'
                      }`}
                    >
                      {isSelected ? '✓ ' : '+ '}
                      {chip}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Live Message Preview Box */}
            <div className="p-4 rounded-2xl bg-[#FBF7EF] border border-[#EDE2CD]">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] font-semibold text-[#B8924A] uppercase tracking-wider flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  Mensagem que será enviada à Lana no WhatsApp:
                </span>
                <button
                  type="button"
                  onClick={handleCopy}
                  className="text-xs text-[#7B756B] hover:text-[#B8924A] flex items-center gap-1 transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-green-600" />
                      <span className="text-green-600 font-medium">Copiada!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copiar mensagem</span>
                    </>
                  )}
                </button>
              </div>
              <p className="text-xs text-[#2D2B28]/85 italic bg-white/70 p-3 rounded-xl border border-[#EDE2CD]/60 font-mono">
                {generateMessage()}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2 w-full">
              <button
                type="submit"
                className="btn w-full sm:w-auto text-base py-4 px-8 justify-center shadow-lg"
              >
                <MessageCircle className="w-5 h-5 text-[#2D2B28]" />
                <span>Pedir meu esboço pelo WhatsApp</span>
              </button>

              <button
                type="button"
                onClick={handleCopy}
                className="btn-secondary w-full sm:w-auto py-3.5 px-6 justify-center"
              >
                {copied ? 'Mensagem copiada!' : 'Apenas copiar o texto'}
              </button>
            </div>

            {/* LGPD notice */}
            <p className="text-[11px] text-[#7B756B] text-center pt-2">
              🔒 <strong>Privacidade LGPD:</strong> Seus dados são protegidos e utilizados exclusivamente para contato profissional e elaboração do seu esboço personalizado.
            </p>

          </form>

        </div>

      </div>
    </section>
  );
};

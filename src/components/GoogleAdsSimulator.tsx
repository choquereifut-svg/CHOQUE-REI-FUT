/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { headlines, googleAdsStrategy } from '../data/copyData';
import { HeadlineOption } from '../types';
import { Monitor, Smartphone, Search, CheckCircle, Info, ExternalLink, Sparkles } from 'lucide-react';

interface GoogleAdsSimulatorProps {
  onSelectHeadline: (headline: HeadlineOption) => void;
  selectedHeadline: HeadlineOption;
}

export default function GoogleAdsSimulator({ onSelectHeadline, selectedHeadline }: GoogleAdsSimulatorProps) {
  const [device, setDevice] = useState<'mobile' | 'desktop'>('mobile');
  const [searchQuery, setSearchQuery] = useState('comprar camisa de time retrô');
  const [customTitle2, setCustomTitle2] = useState('12x Sem Juros & Troca Grátis');

  // Helper to highlight search terms inside text
  const highlightQuery = (text: string) => {
    const keywordsToHighlight = ['manto', 'camisa', 'retrô', 'clássico', 'futebol', 'choque rei', 'oficial', 'torcedor', 'arquibancada'];
    
    return (
      <span>
        {text.split(' ').map((word, i) => {
          const cleanWord = word.toLowerCase().replace(/[,.:!]/g, '');
          const shouldHighlight = keywordsToHighlight.some(kw => cleanWord.includes(kw) || searchQuery.toLowerCase().includes(cleanWord) && cleanWord.length > 3);
          return (
            <span key={i} className={shouldHighlight ? "font-bold text-black bg-[#2a9d8f] px-1 py-0.5" : ""}>
              {word}{' '}
            </span>
          );
        })}
      </span>
    );
  };

  return (
    <div className="bg-[#141414] border border-white/10 p-6 sm:p-10 space-y-8 animate-fadeIn" id="ads-simulator-section">
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#e63946]/10 border border-[#e63946]/30 text-[10px] font-bold tracking-widest font-mono text-[#e63946] uppercase">
          <Sparkles className="h-3 w-3" />
          MÁQUINA DE TRÁFEGO • GOOGLE ADS INTEGRAÇÃO
        </div>
        <h2 className="text-4xl font-black tracking-tighter text-[#f2f2f2] uppercase font-display leading-none">
          Simulador de Anúncios Google Search
        </h2>
        <p className="text-white/60 max-w-3xl text-xs sm:text-sm font-light">
          A melhor headline para o Google Ads é aquela que casa exatamente com a busca do usuário (Índice de Qualidade) e quebra a principal objeção de imediato. Escolha uma das 3 opções de copy desenvolvidas e veja como ela se comporta no simulador de anúncios patrocinados.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Side: Controller Console (5 Columns) */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Ad Customizers */}
          <div className="bg-black border border-white/10 p-5 space-y-4">
            <h3 className="text-xs font-black text-white uppercase tracking-widest border-b border-white/10 pb-2">
              Configurações do Anúncio
            </h3>

            {/* Keyword Input */}
            <div className="space-y-1.5">
              <label className="text-[10px] font-bold text-white/50 block uppercase tracking-wider">Termo de Busca Simulado (Palavra-Chave)</label>
              <div className="relative border border-white/10">
                <input 
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-white/5 py-2 pl-3 pr-10 text-xs text-white focus:outline-none"
                />
                <Search className="absolute right-3 top-2.5 h-4 w-4 text-white/30" />
              </div>
              <p className="text-[10px] text-white/40 italic">Termos do clássico serão destacados de forma brutal no anúncio simulado.</p>
            </div>

            {/* Title 2 Customize */}
            <div className="space-y-1.5">
              <label className="text-[10px] font-bold text-white/50 block uppercase tracking-wider">Título de Extensão (Título 2)</label>
              <input 
                type="text"
                value={customTitle2}
                onChange={(e) => setCustomTitle2(e.target.value)}
                maxLength={30}
                className="w-full bg-white/5 border border-white/10 py-2 px-3 text-xs text-white focus:outline-none"
              />
              <div className="flex justify-between items-center text-[10px] text-white/40">
                <span>Gatilho de Preço/Conveniência</span>
                <span>{customTitle2.length}/30 caract.</span>
              </div>
            </div>

            {/* Selector of Headings */}
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-white/50 block uppercase tracking-wider">Selecione uma Headline Clássica para Testar</label>
              <div className="space-y-3">
                {headlines.map((option) => (
                  <button
                    key={option.id}
                    onClick={() => onSelectHeadline(option)}
                    className={`w-full text-left p-4 border transition-all relative cursor-pointer ${
                      selectedHeadline.id === option.id 
                        ? 'bg-black border-white/50 text-white shadow-[3px_3px_0_#2a9d8f]' 
                        : 'bg-white/5 border-white/10 text-white/60 hover:bg-white/10 hover:text-white'
                    }`}
                  >
                    <div className="font-extrabold text-xs text-[#e63946] flex items-center justify-between mb-1">
                      <span>{option.tag.split(':')[0]}</span>
                      {selectedHeadline.id === option.id && (
                        <span className="h-2 w-2 bg-[#2a9d8f]" />
                      )}
                    </div>
                    <p className="line-clamp-1 font-bold text-xs uppercase tracking-wider">{option.title}</p>
                    <p className="text-[10px] text-white/40 line-clamp-1 mt-1 font-light">{option.explanation}</p>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Ad Extensions Strategy Info Card */}
          <div className="bg-black border-l-4 border-[#2a9d8f] border-y border-r border-[#2a9d8f]/20 p-5 space-y-2">
            <h4 className="text-[10px] font-black text-[#2a9d8f] uppercase tracking-widest flex items-center gap-1.5">
              <Info className="h-3.5 w-3.5" />
              CONSELHO DO ESPECIALISTA EM TRÁFEGO PAGO
            </h4>
            <p className="text-[11px] text-white/60 leading-relaxed font-light">
              <strong>Extensões de Frase de Destaque são obrigatórias!</strong> Elas ocupam mais espaço vertical na busca do celular, deitando os concorrentes e aumentando seu <strong className="text-white">CTR (Taxa de Clique)</strong> em até 20%. Nós pré-configuramos extensões reais de segurança no simulador abaixo.
            </p>
          </div>
        </div>

        {/* Right Side: Google Ads Sponsored Mockup (7 Columns) */}
        <div className="lg:col-span-7 space-y-4">
          
          {/* Device Controls & Header */}
          <div className="flex items-center justify-between bg-black border border-white/10 p-3">
            <span className="text-[10px] font-bold text-[#2a9d8f] tracking-widest uppercase flex items-center gap-1.5">
              <span className="h-2 w-2 bg-[#2a9d8f]" />
              MOCKUP DE RESULTADO DO GOOGLE ADS
            </span>
            <div className="flex border border-white/10 bg-[#141414] p-0.5">
              <button 
                onClick={() => setDevice('mobile')}
                className={`p-1.5 text-xs font-bold transition-all ${device === 'mobile' ? 'bg-[#e63946] text-white font-extrabold' : 'text-white/40 hover:text-white'}`}
              >
                <Smartphone className="h-4 w-4" />
              </button>
              <button 
                onClick={() => setDevice('desktop')}
                className={`p-1.5 text-xs font-bold transition-all ${device === 'desktop' ? 'bg-[#e63946] text-white font-extrabold' : 'text-white/40 hover:text-white'}`}
              >
                <Monitor className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Dynamic Device Container */}
          <div className="flex justify-center transition-all">
            <div className={`w-full bg-[#f2f2f2] text-[#0d0d0d] ${
              device === 'mobile' ? 'max-w-sm border-[12px] border-black shadow-2xl p-4 aspect-[9/16]' : 'border border-white/10 shadow-lg p-6'
            } transition-all duration-300 font-sans`}>
              
              {/* Google Search App Interface Header */}
              <div className="border-b border-[#0d0d0d]/10 pb-3 mb-3 flex items-center gap-2">
                <span className="text-lg font-black tracking-tight text-[#0d0d0d] block shrink-0">
                  <span className="text-blue-600">G</span>
                  <span className="text-red-500">o</span>
                  <span className="text-yellow-500">o</span>
                  <span className="text-blue-600">g</span>
                  <span className="text-green-500">l</span>
                  <span className="text-red-500">e</span>
                </span>
                <div className="flex-1 bg-black/5 rounded-none h-8 flex items-center px-3.5 justify-between py-1 border border-black/10">
                  <span className="text-xs text-[#0d0d0d] font-normal truncate max-w-[180px]">{searchQuery || 'comprar camisas de times'}</span>
                  <Search className="h-3.5 w-3.5 text-black/30 shrink-0" />
                </div>
              </div>

              {/* SPONSORED AD CARD (MATCHES REAL GOOGLE ADS STYLE) */}
              <div className="space-y-2 text-left">
                
                {/* Sponsor Label & Domain */}
                <div className="flex items-center justify-between text-[11px] text-black/50">
                  <div className="flex items-center gap-1.5">
                    <span className="bg-[#e63946] text-white font-black text-[9px] px-1 py-0.2 uppercase tracking-wider">Patrocinado</span>
                    <span className="text-[#0d0d0d] font-bold">https://www.choquereifut.com.br</span>
                  </div>
                  <Info className="h-3 w-3 text-black/40" />
                </div>

                {/* Google Search Headline Title (Real Google Ads displays Blue Links that turn purple) */}
                <h3 className="text-blue-800 hover:underline cursor-pointer text-base md:text-lg font-bold leading-tight uppercase font-display tracking-tight">
                  {selectedHeadline.title.replace('Choque Rei Fut:', '').substring(0, 45)}... | {customTitle2} | Choque Rei®
                </h3>

                {/* Seller Ratings Extension (Highly converts trust!) */}
                <div className="flex items-center gap-1 text-xs text-[#0d0d0d]/80">
                   <span className="text-[#e63946] font-bold">4.9</span>
                   <span className="text-[#e63946] text-xs">★★★★★</span>
                   <span className="text-[#0d0d0d]/60 text-[10px]">(142 avaliações no site oficial)</span>
                </div>

                {/* Subheadline/Description */}
                <p className="text-[12px] text-black/70 leading-snug font-normal">
                  {highlightQuery(selectedHeadline.subtitle)}
                </p>

                {/* Structured Callout Snippet Extensions */}
                <div className="flex flex-wrap items-center gap-x-2 gap-y-1 pt-1.5 border-t border-black/10 text-[10px] font-bold uppercase text-[#0d0d0d]/60">
                  <span className="flex items-center text-emerald-800 gap-0.5">
                    <CheckCircle className="h-3 w-3" /> Frete Expresso SP
                  </span>
                  <span>•</span>
                  <span>Troca Grátis 7 Dias</span>
                  <span>•</span>
                  <span>Mantos Vintage</span>
                  <span>•</span>
                  <span>Parcelamento Sem Juros</span>
                </div>

                {/* Dynamic Sitelinks Grid (Sitelinks Extensions block) */}
                <div className="grid grid-cols-2 gap-2 pt-2.5">
                  <div className="p-2 bg-black/5 hover:bg-black/10 border border-black/10 cursor-pointer transition-colors">
                    <span className="text-[11px] font-bold text-blue-800 flex items-center gap-1 uppercase">
                      Mantos Legítimos 2026 <ExternalLink className="h-2 w-2 text-[#0d0d0d]/30" />
                    </span>
                    <span className="text-[10px] text-black/50 line-clamp-1 font-normal">Vista as lendas de pertinho</span>
                  </div>
                  
                  <div className="p-2 bg-black/5 hover:bg-black/10 border border-black/10 cursor-pointer transition-colors">
                    <span className="text-[11px] font-bold text-blue-800 flex items-center gap-1 uppercase">
                      Linhas Clássicas Retrô <ExternalLink className="h-2 w-2 text-[#0d0d0d]/30" />
                    </span>
                    <span className="text-[10px] text-black/50 line-clamp-1 font-normal">As glórias históricas guardadas</span>
                  </div>

                  <div className="p-2 bg-black/5 hover:bg-black/10 border border-black/10 cursor-pointer transition-colors">
                    <span className="text-[11px] font-bold text-blue-800 flex items-center gap-1 uppercase">
                      Fale Conosco WhatsApp <ExternalLink className="h-2 w-2 text-[#0d0d0d]/30" />
                    </span>
                    <span className="text-[10px] text-black/50 line-clamp-1 font-normal">Suporte 100% humanizado</span>
                  </div>

                  <div className="p-2 bg-black/5 hover:bg-black/10 border border-black/10 cursor-pointer transition-colors">
                    <span className="text-[11px] font-bold text-blue-800 flex items-center gap-1 uppercase">
                      Garantia & Selo Seguro <ExternalLink className="h-2 w-2 text-[#0d0d0d]/30" />
                    </span>
                    <span className="text-[10px] text-black/50 line-clamp-1 font-normal">Sua compra bloqueada contra golpe</span>
                  </div>
                </div>

              </div>

              {device === 'mobile' && (
                <div className="mt-8 pt-4 border-t border-black/10 text-center">
                  <p className="text-[10px] text-black/40 font-mono">Fim da Simulação Mobile</p>
                </div>
              )}
            </div>
          </div>
        </div>

      </div>

      {/* Campaign Details Bottom Banner */}
      <div className="border-t border-white/10 pt-6 grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
        <div>
          <h4 className="font-extrabold text-[#e63946] uppercase tracking-wider mb-2">Públicos do Search & Segmentação Choque Rei</h4>
          <p className="text-white/60 leading-relaxed font-light">
            {googleAdsStrategy.audiences[0].targeting}
          </p>
        </div>
        <div>
          <h4 className="font-extrabold text-[#e63946] uppercase tracking-wider mb-2">Palavras-Chave de Alta Intenção</h4>
          <div className="flex flex-wrap gap-2">
            {googleAdsStrategy.audiences[1].keywords?.map((word, i) => (
              <span key={i} className="px-2.5 py-1 bg-black border border-white/10 text-white/80 font-mono text-[9px] uppercase tracking-wider">
                {word}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

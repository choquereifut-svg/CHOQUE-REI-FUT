/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { identityData } from '../data/copyData';
import { ShieldCheck, Flame, Newspaper, GraduationCap, Bookmark } from 'lucide-react';

export default function IdentitySection() {
  return (
    <section className="bg-[#141414] border border-white/10 p-6 sm:p-10 animate-fadeIn" id="identity-section">
      <div className="flex flex-col lg:flex-row gap-8 items-start">
        
        {/* Left Side: Editorial Vision & Brand Concept */}
        <div className="flex-1 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#2a9d8f]/10 border border-[#2a9d8f]/30 text-[10px] font-bold tracking-widest font-mono text-[#2a9d8f] uppercase">
            <Bookmark className="h-3 w-3" />
            DIRETRIZ DE CRIAÇÃO & BRIEFING EDITORIAL
          </div>
          
          <h2 className="text-4xl font-black tracking-tighter text-[#f2f2f2] uppercase leading-[0.95] font-display">
            Choque Rei Fut
            <span className="block text-lg font-bold tracking-normal text-white/50 mt-2 font-sans italic lowercase">
              — {identityData.concept}
            </span>
          </h2>
          
          <p className="text-[#f2f2f2]/80 leading-relaxed text-sm md:text-base font-light">
            {identityData.positioning}
          </p>

          <div className="p-5 bg-black border-l-4 border-[#e63946] border-y border-r border-white/10 space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-white flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-[#2a9d8f]" />
              O Paradoxo da Conversão (Desejo Esportivo + Segurança Cristilina)
            </h4>
            <p className="text-xs text-white/60 leading-relaxed">
              O maior desafio em e-commerce de futebol anunciado no Google Ads é o medo do fã de cair em "golpe das camisas de R$ 50" ou "sites fantasmas". 
              A tática de copywriting da <strong className="text-[#e63946]">Choque Rei Fut</strong> é atrair o cliente pelo estômago (o calor do debate), e retê-lo pelo cérebro (segurança cristalina, garantia contra taxas e trocas grátis).
            </p>
          </div>
        </div>

        {/* Right Side: Editorial Tone of Voice Panel */}
        <div className="w-full lg:w-96 space-y-4">
          <div className="bg-black border border-white/10 p-5 space-y-4 shadow-[4px_4px_0_#2a9d8f]">
            <h3 className="text-xs font-black text-white/90 tracking-[0.2em] uppercase flex items-center gap-2 border-b border-white/10 pb-2">
              <GraduationCap className="h-4 w-4 text-[#e63946]" />
              DIRETRIZES DE TOM DE VOZ
            </h3>
            
            <ul className="space-y-4">
              <li className="space-y-1 border-b border-white/10 pb-3 last:border-0 last:pb-0">
                <span className="text-[10px] font-black text-[#e63946] uppercase tracking-wider block">1. Passional, mas profissional</span>
                <span className="text-xs text-white/60 block leading-tight">
                  Usar gírias consagradas ("manto", "bancada", "camisa pesada") sem ser apelativo ou violento. O foco deve ser o respeito à tradição e ao clássico do gramado.
                </span>
              </li>
              <li className="space-y-1 border-b border-white/10 pb-3 last:border-0 last:pb-0">
                <span className="text-[10px] font-black text-[#e63946] uppercase tracking-wider block">2. Alta Urgência de Lote</span>
                <span className="text-xs text-white/60 block leading-tight">
                  "Remessas de arquibancada são estritamente limitadas". Gerar escassez legítima com apelo de que coleções retrô esgotam e não voltam mais.
                </span>
              </li>
              <li className="space-y-1 border-b border-white/10 pb-3 last:border-0 last:pb-0">
                <span className="text-[10px] font-black text-[#e63946] uppercase tracking-wider block">3. Transparência Extrema do Google</span>
                <span className="text-xs text-white/60 block leading-tight">
                  Sem letrinhas miúdas. Se o prazo é de 2 dias em SP, deixar isso super visível nas CTAs para acalmar o cliente ansioso de tráfego pago.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Grid of Strategic Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 border-t border-white/10 pt-8" id="copy-pillars-grid">
        {identityData.pillars.map((pillar, index) => {
          const Icon = index === 0 ? Flame : index === 1 ? Newspaper : ShieldCheck;
          const colorIcon = index === 0 ? 'text-[#e63946]' : index === 1 ? 'text-[#2a9d8f]' : 'text-[#f2f2f2]';
          return (
            <div key={index} className="p-5 bg-black border border-white/10 hover:border-white/20 transition-all flex gap-4">
              <div className={`p-2.5 bg-[#141414] border border-white/10 h-fit ${colorIcon} shrink-0`}>
                <Icon className="h-5 w-5" />
              </div>
              <div className="space-y-1">
                <h3 className="font-extrabold text-white text-xs tracking-wider uppercase">{pillar.title}</h3>
                <p className="text-xs text-white/50 leading-normal font-light">{pillar.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

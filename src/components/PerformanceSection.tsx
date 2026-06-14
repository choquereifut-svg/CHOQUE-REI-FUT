/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { googleAdsStrategy } from '../data/copyData';
import { SpeedMetric } from '../types';
import { ShieldCheck, Zap, Image, RefreshCw, Palette, Type, Smartphone } from 'lucide-react';

export default function PerformanceSection() {
  const speedMetrics: SpeedMetric[] = [
    {
      name: "Largest Contentful Paint (LCP)",
      value: "1.1 segundos",
      status: "excellent",
      description: "Tempo para carregar o principal banner da primeira dobra. Alvo ideal: Menos de 2s para tráfego do Google Ads."
    },
    {
      name: "Interaction to Next Paint (INP)",
      value: "35ms",
      status: "excellent",
      description: "Mede o delay de resposta a cliques e toques em botões de CTA. Crucial para checkout rápido."
    },
    {
      name: "Cumulative Layout Shift (CLS)",
      value: "0.01",
      status: "excellent",
      description: "Estabilidade visual da página. Evita cliques acidentais e melhora a nota de experiência do usuário."
    },
    {
      name: "Tamanho Total do Bundle Inicial",
      value: "45 KB (gzipped)",
      status: "excellent",
      description: "Diz respeito ao peso do código CSS/JS. Mantém o site instantâneo mesmo sob sinal 3G/4G."
    }
  ];

  return (
    <div className="bg-[#141414] border border-white/10 p-6 sm:p-10 space-y-8 animate-fadeIn" id="performance-section">
      
      {/* Title block */}
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#2a9d8f]/10 border border-[#2a9d8f]/30 text-[10px] font-bold tracking-widest font-mono text-[#2a9d8f] uppercase">
          <Zap className="h-3 w-3" />
          DIRETRIZES TÉCNICAS E PERFORMANCE MOBILE
        </div>
        <h2 className="text-4xl font-black tracking-tighter text-[#f2f2f2] uppercase font-display leading-none">
          Otimização para Velocidade Extrema
        </h2>
        <p className="text-white/60 max-w-3xl text-xs sm:text-sm font-light">
          No tráfego pago via Google Ads, a velocidade do celular dita diretamente seu lucro. Uma página lenta encarece seu CPC (Custo por Clique) e reduz drasticamente o Índice de Qualidade, jogando seu anúncio para as últimas posições.
        </p>
      </div>

      {/* Grid: Speed status simulation */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {speedMetrics.map((met, idx) => (
          <div key={idx} className="p-5 bg-black border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between space-y-3 shadow-[3px_3px_0_#e63946]">
            <div className="space-y-1">
              <span className="text-[9px] uppercase font-mono text-white/50 tracking-widest block">{met.name}</span>
              <span className="text-2xl font-black text-white block tracking-tighter">{met.value}</span>
            </div>
            <div className="space-y-1">
              <span className="inline-flex items-center gap-1 text-[9px] font-black text-[#2a9d8f] uppercase tracking-wider">
                <ShieldCheck className="h-3.5 w-3.5" /> EXCELENTE
              </span>
              <p className="text-[11px] text-white/50 leading-tight font-light">{met.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Recommended Tech Tactics */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-6 border-t border-white/10">
        
        {/* Mobile Speed Tactics (7 Cols) */}
        <div className="lg:col-span-7 space-y-6">
          <h3 className="text-sm font-black uppercase tracking-widest text-[#f2f2f2] flex items-center gap-2">
            <Smartphone className="h-5 w-5 text-[#e63946]" />
            Checklist de Velocidade para Google Ads Mobile
          </h3>

          <div className="space-y-4">
            {googleAdsStrategy.mobilePerformance.guidelines.map((guide, i) => {
              const Icon = i === 0 ? Image : i === 1 ? Zap : i === 2 ? RefreshCw : Palette;
              return (
                <div key={i} className="flex gap-4 p-5 bg-black border border-white/10 hover:border-white/20 transition-all">
                  <div className="p-2.5 h-fit bg-[#141414] border border-white/10 text-[#e63946]">
                    <Icon className="h-4.5 w-4.5" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-xs font-black text-white uppercase tracking-wider">{guide.factor}</h4>
                    <p className="text-xs text-white/60 leading-relaxed font-light">{guide.solution}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Layout & Design Systems (5 Cols) */}
        <div className="lg:col-span-5 space-y-6">
          <h3 className="text-sm font-black uppercase tracking-widest text-[#f2f2f2] flex items-center gap-2">
            <Palette className="h-5 w-5 text-[#e63946]" />
            Vibe Visual, Cores & Tipografia
          </h3>

          <div className="bg-black border border-white/10 p-5 space-y-6 shadow-[4px_4px_0_#2a9d8f]">
            <div className="space-y-2">
              <span className="text-[9px] font-black text-white/50 block uppercase tracking-widest">Base de Cor de Fundo</span>
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 bg-[#0d0d0d] border border-white/10 shrink-0" />
                <div>
                  <h4 className="text-xs font-black text-white uppercase tracking-wider">Noir Editorial (Preto Veludo Profundo)</h4>
                  <p className="text-[10px] text-[#2a9d8f] font-mono font-bold">#0d0d0d / #141414</p>
                </div>
              </div>
              <p className="text-xs text-white/50 leading-relaxed font-light">
                Evitamos cinzas claros ou azuis corporativos sem graça. O fundo escuro focado destaca o brilho dos mantos esportivos retrô num visual premium digno de revista de design.
              </p>
            </div>

            <div className="space-y-3 pt-4 border-t border-white/10">
              <span className="text-[9px] font-black text-white/50 block uppercase tracking-widest">Paletas de Contraste Aplicadas</span>
              
              <div className="space-y-3 text-xs">
                <div className="space-y-1">
                  <span className="font-extrabold text-[#e63946] uppercase block tracking-wider text-[11px]">Vermelho Clássico Paulista</span>
                  <div className="flex gap-2">
                    <span className="px-2 py-0.5 bg-[#141414] border border-white/10 font-mono text-[9px] text-white/60">#e63946</span>
                    <span className="px-2 py-0.5 bg-[#141414] border border-white/10 font-mono text-[9px] text-white/60 font-medium">Primary Accent</span>
                  </div>
                </div>
                <div className="space-y-1">
                  <span className="font-extrabold text-[#2a9d8f] uppercase block tracking-wider text-[11px]">Teal de Segurança Desarmante</span>
                  <div className="flex gap-2">
                    <span className="px-2 py-0.5 bg-[#141414] border border-white/10 font-mono text-[9px] text-white/60">#2a9d8f</span>
                    <span className="px-2 py-0.5 bg-[#141414] border border-white/10 font-mono text-[9px] text-white/60 font-medium">Trust Accents</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 space-y-2">
              <span className="text-[9px] font-black text-white/50 block uppercase tracking-widest flex items-center gap-1">
                <Type className="h-3.5 w-3.5" /> Família Tipográfica de Estádio
              </span>
              <p className="text-xs text-white/60 font-light leading-relaxed">
                Utilizar <strong className="text-white font-bold">Inter</strong> para textos longos de leitura e checkout seguro. Adotar <strong className="text-[#e63946] font-extrabold">Syne</strong> e <strong className="text-white font-extrabold">Space Grotesk</strong> para títulos em tamanhos gigantes, transmitindo dinamismo moderno, robustez e a energia de um estádio de futebol.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

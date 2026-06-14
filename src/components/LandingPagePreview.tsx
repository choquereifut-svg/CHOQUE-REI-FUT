/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { faqItems, products, newsArticles } from '../data/copyData';
import { HeadlineOption, ProductItem } from '../types';
import { Sparkles, ShoppingBag, Star, Clock, MessageSquare, Flame, CheckCircle2, ChevronDown, ChevronUp, AlertCircle } from 'lucide-react';

interface LandingPagePreviewProps {
  selectedHeadline: HeadlineOption;
  onAddToCart: (product: ProductItem) => void;
  activeAccent: 'tricolor' | 'alviverde' | 'ouro';
  onChangeAccent: (accent: 'tricolor' | 'alviverde' | 'ouro') => void;
}

export default function LandingPagePreview({ 
  selectedHeadline, 
  onAddToCart, 
  activeAccent, 
  onChangeAccent 
}: LandingPagePreviewProps) {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [expandedFaq, setExpandedFaq] = useState<string | null>('faq-authenticity');

  // Accent helper dictionary optimized for the Editorial theme
  const themeStyles = {
    tricolor: {
      accentText: 'text-[#e63946]',
      accentBg: 'bg-[#e63946] text-white',
      accentHoverBg: 'hover:bg-[#e63946]/90',
      accentBorder: 'border-[#e63946]',
      accentOutlineText: 'text-[#e63946] border-[#e63946]/30 hover:bg-[#e63946]/10',
      cardBorder: 'hover:border-[#e63946]/40',
      bannerBg: 'from-[#e63946]/10 to-[#0e0e0e]',
      btnShadow: 'shadow-[4px_4px_0_#2a9d8f]'
    },
    alviverde: {
      accentText: 'text-[#2a9d8f]',
      accentBg: 'bg-[#2a9d8f] text-white',
      accentHoverBg: 'hover:bg-[#2a9d8f]/90',
      accentBorder: 'border-[#2a9d8f]',
      accentOutlineText: 'text-[#2a9d8f] border-[#2a9d8f]/30 hover:bg-[#2a9d8f]/10',
      cardBorder: 'hover:border-[#2a9d8f]/40',
      bannerBg: 'from-[#2a9d8f]/10 to-[#0e0e0e]',
      btnShadow: 'shadow-[4px_4px_0_#e63946]'
    },
    ouro: {
      accentText: 'text-[#eab308]',
      accentBg: 'bg-[#eab308] text-black font-black',
      accentHoverBg: 'hover:bg-[#eab308]/90',
      accentBorder: 'border-[#eab308]',
      accentOutlineText: 'text-[#eab308] border-[#eab308]/30 hover:bg-[#eab308]/10',
      cardBorder: 'hover:border-[#eab308]/40',
      bannerBg: 'from-[#eab308]/5 to-[#0e0e0e]',
      btnShadow: 'shadow-[4px_4px_0_#2a9d8f]'
    }
  };

  const style = themeStyles[activeAccent];

  // Filtering products
  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(p => p.category === activeCategory);

  const toggleFaq = (id: string) => {
    if (expandedFaq === id) {
      setExpandedFaq(null);
    } else {
      setExpandedFaq(id);
    }
  };

  return (
    <div className="space-y-12" id="landing-page-parent">
      
      {/* Theme Accent Configurator Banner */}
      <div className="bg-[#141414] border border-white/10 p-6 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="space-y-1 text-center sm:text-left">
          <span className="text-[10px] font-black text-[#e63946] tracking-[0.2em] block uppercase">CONTROLADOR DE DIREÇÃO CRIATIVA</span>
          <p className="text-xs text-white/60 font-light leading-relaxed max-w-xl">
            A marca <strong className="text-white">Choque Rei Fut</strong> remete à herança clássica paulista. Altere o sotaque das paletas de cores do preview abaixo para ver o comportamento sobre o fundo preto veludo:
          </p>
        </div>
        <div className="flex flex-wrap gap-2.5 shrink-0 justify-center">
          <button 
            onClick={() => onChangeAccent('tricolor')}
            className={`px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
              activeAccent === 'tricolor' 
                ? 'bg-[#e63946] text-white font-extrabold shadow-[3px_3px_0_#2a9d8f]' 
                : 'bg-black border border-white/10 text-white/50 hover:text-white'
            }`}
          >
            TRICOLOR RETRÔ
          </button>
          
          <button 
            onClick={() => onChangeAccent('alviverde')}
            className={`px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
              activeAccent === 'alviverde' 
                ? 'bg-[#2a9d8f] text-white font-extrabold shadow-[3px_3px_0_#e63946]' 
                : 'bg-black border border-white/10 text-white/50 hover:text-white'
            }`}
          >
            PARQUE CLÁSSICO
          </button>

          <button 
            onClick={() => onChangeAccent('ouro')}
            className={`px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
              activeAccent === 'ouro' 
                ? 'bg-[#eab308] text-black font-extrabold shadow-[3px_3px_0_#2a9d8f]' 
                : 'bg-black border border-white/10 text-white/50 hover:text-white'
            }`}
          >
            NEUTRO DE OURO
          </button>
        </div>
      </div>

      {/* RENDER OF MAIN HOME PAGE PREVIEW */}
      <div className="border border-white/10 bg-[#0d0d0d] overflow-hidden relative">
        <div className="absolute top-4 right-4 z-10 hidden sm:block">
          <span className="text-[10px] bg-black text-white/50 border border-white/10 px-3 py-1 uppercase tracking-widest font-mono">
            LIVE PREVIEW : OFF-LINE
          </span>
        </div>

        {/* 1. HERO HEADER AREA / HEADLINE PRINCIPAL */}
        <div className={`relative px-6 py-20 sm:px-12 sm:py-32 bg-gradient-to-b ${style.bannerBg} flex flex-col items-center text-center space-y-8 border-b border-white/10`}>
          
          {/* Trust Seal Header Banner */}
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-black border border-white/10 text-[10px] font-bold text-white/80 uppercase tracking-widest font-mono">
            <span className="h-2 w-2 bg-[#2a9d8f] animate-pulse" />
            LIGA OFICIAL • CAMISAS LEGÍTIMAS • TROCAS SEM CUSTO
          </div>
 
          {/* Core Headline Custom render - Giant display font */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-sans font-black italic tracking-tighter text-white max-w-5xl leading-[0.9] uppercase select-none">
            {selectedHeadline.title}
          </h1>

          {/* Subheadline Custom render */}
          <p className="text-white/60 text-sm sm:text-base md:text-lg max-w-3xl leading-relaxed font-light">
            {selectedHeadline.subtitle}
          </p>

          {/* Primary CTA and value qualifiers - Sharp brutalist buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
            <button 
              onClick={() => {
                const el = document.getElementById('vitrine-produtos');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className={`px-8 py-4 text-xs tracking-[0.2em] uppercase font-black transition-all hover:scale-[1.02] active:translate-y-1 cursor-pointer font-sans border border-black ${style.accentBg} ${style.btnShadow}`}
            >
              {selectedHeadline.cta}
            </button>
            <button 
              onClick={() => {
                const el = document.getElementById('gonzo-news-section');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className={`px-6 py-4 text-xs tracking-[0.15em] uppercase font-bold bg-white/5 border border-white/10 transition-all hover:bg-white/10 cursor-pointer text-white`}
            >
              CANAIS DE DEBATES DO TIME
            </button>
          </div>

          {/* Seals of trust */}
          <div className="pt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[9px] text-[#f2f2f2]/40 uppercase tracking-widest font-mono font-bold">
            <span>✓ PIX com 5% de desconto autômato</span>
            <span>✓ Domínio Verificado Google Ads</span>
            <span>✓ Envio Asegurado em 24 Horas</span>
          </div>
        </div>

        {/* 2. THE CONTENT SECTION (O "GANCHO") */}
        <div id="gonzo-news-section" className="px-4 py-16 sm:px-10 border-b border-white/10 bg-[#141414]">
          <div className="max-w-7xl mx-auto space-y-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/10 pb-6">
              <div className="space-y-1.5 animate-slideUp">
                <span className={`text-[10px] font-black tracking-widest uppercase ${style.accentText}`}>NOTÍCIAS & GANCHO DE ARQUIBANCADA</span>
                <h3 className="text-3xl font-black uppercase text-white font-display tracking-tight">Debates Críticos & Opiniões de Torcedor</h3>
                <p className="text-xs text-white/50 font-light">Atraia cliques orgânicos gerados pelo debate do último Choque Rei, capturando a urgência de compra imediata.</p>
              </div>
              <div className="flex items-center gap-1.5 text-[10px] font-bold text-white/40 uppercase tracking-wider font-mono">
                <Clock className="h-4 w-4 text-[#2a9d8f]" /> Atualizado em tempo real pelo staff
              </div>
            </div>

            {/* News Row containing native contextual ads */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {newsArticles.map((article) => {
                const relatedProd = products[article.relatedProductIndex ?? 0];
                return (
                  <div key={article.id} className="border border-white/10 bg-black flex flex-col justify-between hover:border-white/20 transition-all">
                    <div>
                      {/* Thumbnail with category sticker */}
                      <div className="h-56 w-full relative overflow-hidden">
                        <img 
                          src={article.image} 
                          alt={article.title}
                          className="w-full h-full object-cover grayscale brightness-90 hover:grayscale-0 transition-all duration-300"
                          referrerPolicy="no-referrer"
                        />
                        <span className={`absolute top-4 left-4 px-3 py-1 font-mono text-[9px] font-black text-white uppercase tracking-widest ${style.accentBg}`}>
                          {article.category}
                        </span>
                      </div>

                      {/* Content Info */}
                      <div className="p-6 space-y-3">
                        <div className="flex items-center gap-4 text-[10px] uppercase font-mono font-bold text-white/40">
                          <span>Por <strong className="text-white/60">{article.author}</strong></span>
                          <span>•</span>
                          <span>{article.time}</span>
                        </div>
                        <h4 className="text-xl font-black uppercase tracking-tight text-white line-clamp-2">
                          {article.title}
                        </h4>
                        <p className="text-xs text-white/60 leading-relaxed font-light line-clamp-3">
                          {article.excerpt}
                        </p>
                      </div>
                    </div>

                    {/* CONTEXTUAL AD BANNER (NATIVE INTEGRATION HOOK) */}
                    <div className="mx-6 mb-6 p-4 bg-[#141414] border border-[#2a9d8f]/30 flex flex-col sm:flex-row items-center justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <div className="h-12 w-12 bg-black overflow-hidden shrink-0 border border-white/10">
                          <img src={relatedProd.image} alt={relatedProd.name} className="h-full w-full object-cover" referrerPolicy="no-referrer" />
                        </div>
                        <div className="space-y-0.5 text-left">
                          <span className="text-[8px] font-black text-[#2a9d8f] uppercase tracking-widest">RECOMENDADO NA RESENHA</span>
                          <h5 className="text-xs font-black text-white uppercase tracking-wider">{relatedProd.name}</h5>
                          <p className="text-[11px] text-white/60 font-mono font-light">Apenas <strong className="text-white font-extrabold">R$ {relatedProd.price.toFixed(2)}</strong></p>
                        </div>
                      </div>
                      
                      <button 
                        onClick={() => onAddToCart(relatedProd)}
                        className={`px-4 py-2 text-[10px] font-black uppercase tracking-widest flex items-center gap-1.5 cursor-pointer shrink-0 transition-all ${style.accentBg} hover:scale-105`}
                      >
                        <ShoppingBag className="h-3.5 w-3.5" />
                        Adquirir Manto
                      </button>
                    </div>

                    {/* Social Footer */}
                    <div className="px-6 py-4 border-t border-white/5 flex items-center justify-between text-[11px] text-[#f2f2f2]/40 font-mono">
                      <span className="flex items-center gap-1 hover:text-white cursor-pointer"><Flame className="h-3.5 w-3.5 text-[#e63946]" /> Fogo no debate (+{article.likes})</span>
                      <span className="flex items-center gap-1"><MessageSquare className="h-3.5 w-3.5" /> {article.comments} Comentários</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* 3. PRODUCT SHOWCASE / VITRINE DE PRODUTOS */}
        <div id="vitrine-produtos" className="px-4 py-20 sm:px-10 max-w-7xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <span className={`text-[10px] font-black tracking-[0.2em] uppercase ${style.accentText}`}>VITRINE EXCLUSIVA DE ARMADURAS</span>
            <h2 className="text-4xl font-black tracking-tighter text-white uppercase font-display select-none">
              Mantos Oficiais & Relíquias Retrô
            </h2>
            <p className="text-xs sm:text-sm text-white/50 max-w-2xl mx-auto font-light leading-relaxed">
              Coleções produzidas com tecidos de alta performance, costuras duplas e caimento perfeito de arquibancada paulista.
            </p>

            {/* Category Filter Pills - Editorial style */}
            <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
              {[
                { id: 'all', label: 'Ver Todos' },
                { id: 'mantos', label: 'Mantos de Campanha' },
                { id: 'retro', label: 'Clássicos Lendários' },
                { id: 'arquibancada', label: 'Estilo Bancada' },
                { id: 'acessorios', label: 'Artigos Colecionáveis' }
              ].map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-2 text-[10px] font-bold uppercase tracking-wider border transition-all cursor-pointer ${
                    activeCategory === cat.id
                      ? 'bg-white border-white text-black font-extrabold shadow-[2px_2px_0_#e63946]'
                      : 'bg-transparent border-white/10 text-white/50 hover:text-white hover:border-white/30'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Product Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div 
                key={product.id}
                className={`border border-white/10 bg-[#141414] group flex flex-col justify-between transition-all ${style.cardBorder}`}
              >
                
                {/* Image and dynamic stickers */}
                <div className="h-72 bg-[#0d0d0d] relative overflow-hidden border-b border-white/10">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                    referrerPolicy="no-referrer"
                  />
                  {product.badge && (
                    <span className={`absolute top-4 left-4 px-3 py-1 font-mono text-[9px] font-black text-white uppercase tracking-widest ${style.accentBg}`}>
                      {product.badge}
                    </span>
                  )}
                  {/* Subtle hover overlay to trigger cart action fast */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4">
                    <button 
                      onClick={() => onAddToCart(product)}
                      className={`px-5 py-3 text-[10px] font-black uppercase tracking-widest flex items-center gap-2 cursor-pointer transform translate-y-3 group-hover:translate-y-0 transition-transform bg-white text-black`}
                    >
                      <ShoppingBag className="h-4 w-4" />
                      Adicionar ao carrinho
                    </button>
                  </div>
                </div>

                {/* Info and action bar */}
                <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    {/* Star & ratings count */}
                    <div className="flex items-center gap-1.5">
                      <div className="flex text-[#e63946]">
                        <Star className="h-3 w-3 fill-[#e63946]" />
                        <Star className="h-3 w-3 fill-[#e63946]" />
                        <Star className="h-3 w-3 fill-[#e63946]" />
                        <Star className="h-3 w-3 fill-[#e63946]" />
                        <Star className="h-3 w-3 fill-[#e63946]" />
                      </div>
                      <span className="text-[10px] font-mono text-white/40">({product.reviews} avaliações)</span>
                    </div>

                    <h4 className="font-extrabold text-[#f2f2f2] text-xs sm:text-sm tracking-wider uppercase line-clamp-2">
                      {product.name}
                    </h4>
                  </div>

                  <div className="space-y-3 pt-2">
                    {/* Price structure */}
                    <div className="flex items-baseline gap-2.5">
                      <span className="text-xs text-white/40 line-through">R$ {product.originalPrice.toFixed(2)}</span>
                      <span className="text-xl font-black text-white font-mono">R$ {product.price.toFixed(2)}</span>
                      <span className="text-[10px] font-mono text-[#2a9d8f] font-bold">-{Math.round(100 - (product.price / product.originalPrice) * 100)}%</span>
                    </div>

                    <div className="text-[11px] text-white/50 leading-none font-light">
                      Ou em até <strong className="text-white">3x de R$ {(product.price / 3).toFixed(2)} sem juros</strong>
                    </div>

                    {/* HIGH-CONVERTING CTA BUTTON - Brutalist block style */}
                    <button 
                      onClick={() => onAddToCart(product)}
                      className={`w-full py-3.5 text-xs font-black tracking-widest uppercase flex items-center justify-center gap-2 transform active:scale-95 transition-all cursor-pointer ${style.accentBg} ${style.accentHoverBg}`}
                    >
                      <ShoppingBag className="h-4 w-4" />
                      {product.ctaText}
                    </button>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>

        {/* 4. OBJECTIONS FAQ SECTION (QUEBRA DE OBJEÇÕES DO GOOGLE ADS) */}
        <div id="objections-faq-section" className="px-4 py-20 sm:px-10 border-t border-white/10 bg-[#141414]">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <span className={`text-[10px] font-black tracking-widest uppercase ${style.accentText}`}>BLINDAGEM CONTRA DESCONFIANÇA</span>
              <h2 className="text-4xl font-black tracking-tighter text-white uppercase font-display">
                Dúvidas de Vestiário (FAQ)
              </h2>
              <p className="text-xs sm:text-sm text-white/50 max-w-lg mx-auto font-light">
                Quem vem de anúncios do Google quer rapidez e garantia. Nós quebramos as 5 maiores objeções de compras esportivas online de antemão.
              </p>
            </div>

            {/* Accordion List */}
            <div className="space-y-4">
              {faqItems.map((faq) => {
                const isSelected = expandedFaq === faq.id;
                return (
                  <div 
                    key={faq.id} 
                    className={`border transition-all ${
                      isSelected 
                        ? 'bg-black border-white/20' 
                        : 'bg-black border-white/10 hover:border-white/25'
                    }`}
                  >
                    {/* Header trigger */}
                    <button
                      onClick={() => toggleFaq(faq.id)}
                      className="w-full flex items-center justify-between p-5 text-left font-bold text-white text-[11px] sm:text-xs uppercase tracking-wider cursor-pointer select-none"
                    >
                      <span className="pr-4">{faq.question}</span>
                      {isSelected ? <ChevronUp className="h-4 w-4 text-[#e63946]" /> : <ChevronDown className="h-4 w-4 text-white/50" />}
                    </button>

                    {/* Answer content box */}
                    {isSelected && (
                      <div className="px-5 pb-5 space-y-3 animate-slideDown">
                        <p className="text-xs text-white/60 leading-relaxed pt-3 border-t border-white/5 font-light">
                          {faq.answer}
                        </p>
                        
                        {/* Copy Insight Note */}
                        <div className="flex items-center gap-2 p-2 bg-[#2a9d8f]/10 border border-[#2a9d8f]/20 text-[10px] text-[#2a9d8f] font-mono">
                          <AlertCircle className="h-4 w-4 text-[#2a9d8f]" />
                          <span><strong>Mente do Gestor:</strong> Resolve a Objeção de {faq.objection}</span>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* 5. FOOTER */}
        <footer className="border-t border-white/10 bg-black py-12 px-6 text-[#f2f2f2]/40 font-mono">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-2xs text-center md:text-left uppercase font-bold tracking-widest">
            <div className="space-y-1.5">
              <span className="font-display font-black text-[#f2f2f2] text-sm tracking-tight">CHOQUE REI FUT © 2026</span>
              <p className="text-[10px] text-white/30 lowercase italic">A resenha da arquibancada com o manto que você merece.</p>
            </div>
            
            {/* Visual payment badges mockup */}
            <div className="flex flex-wrap items-center justify-center gap-4 text-white/50 text-[10px]">
              <span className="border border-white/10 px-3 py-1 bg-[#141414]">PIX SEGURO 5%</span>
              <span className="border border-white/10 px-3 py-1 bg-[#141414]">SSL BLINDADO</span>
              <span className="border border-white/10 px-3 py-1 bg-[#141414]">GOOGLE VERIFICADO</span>
            </div>
          </div>
        </footer>

      </div>
    </div>
  );
}

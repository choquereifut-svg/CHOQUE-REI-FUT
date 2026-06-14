/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import Header from './components/Header';
import IdentitySection from './components/IdentitySection';
import GoogleAdsSimulator from './components/GoogleAdsSimulator';
import LandingPagePreview from './components/LandingPagePreview';
import PerformanceSection from './components/PerformanceSection';
import { headlines } from './data/copyData';
import { HeadlineOption, ProductItem } from './types';
import { Layout, SearchCode, Megaphone, ShoppingBag, CreditCard, ChevronRight, CheckCircle, Smartphone, Award, Flame, X } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<'preview' | 'google-ads' | 'identity' | 'performance'>('preview');
  const [selectedHeadline, setSelectedHeadline] = useState<HeadlineOption>(headlines[0]);
  const [activeAccent, setActiveAccent] = useState<'tricolor' | 'alviverde' | 'ouro'>('ouro');
  const [cartCount, setCartCount] = useState<number>(0);
  const [cartAlertProduct, setCartAlertProduct] = useState<ProductItem | null>(null);

  const handleAddToCart = (product: ProductItem) => {
    setCartCount(prev => prev + 1);
    setCartAlertProduct(product);
  };

  const handleCloseToast = () => {
    setCartAlertProduct(null);
  };

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 font-sans selection:bg-amber-500 selection:text-black">
      
      {/* Dynamic Header */}
      <Header 
        onNavToSegment={(segmentId) => {
          if (segmentId === 'identity') setActiveTab('identity');
          else if (segmentId === 'google-ads') setActiveTab('google-ads');
          else if (segmentId === 'performance') setActiveTab('performance');
          else setActiveTab('preview');
        }}
        cartCount={cartCount}
        onOpenCartAlert={() => {
          alert(`Carrinho virtual simulado com ${cartCount} produto(s) de futebol! Pronto para simular a compra via Pix.`);
        }}
        activeAccent={activeAccent}
      />

      {/* Main Container */}
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 space-y-10">
        
        {/* Intro welcome dashboard banner */}
        <div className="rounded-2xl bg-gradient-to-r from-gray-900 via-gray-950 to-gray-900 border border-gray-800 p-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight text-white flex items-center justify-center md:justify-start gap-2">
              <Award className="h-5.5 w-5.5 text-amber-500" />
              Choque Rei Fut • Workspace de Lançamento
            </h2>
            <p className="text-xs sm:text-sm text-gray-400 max-w-2xl">
              Bem-vindo ao espaço de decisões estratégicas de copywriting, visual de e-commerce e tráfego pago. Navegue pelas guias de trabalho abaixo para avaliar as headlines do topo, ver como os anúncios do Google aparecem e auditar a amostra real da Home.
            </p>
          </div>
          
          <div className="flex gap-4 shrink-0 justify-center">
            {/* Quick dashboard indicators */}
            <div className="px-3.5 py-2 bg-gray-900/60 rounded-xl border border-gray-800 text-center">
              <span className="text-[10px] text-gray-500 font-mono block uppercase">CPC Simulado</span>
              <span className="text-sm font-extrabold text-amber-500 font-mono">R$ 0,42</span>
            </div>
            <div className="px-3.5 py-2 bg-gray-900/60 rounded-xl border border-gray-800 text-center">
              <span className="text-[10px] text-gray-500 font-mono block uppercase">CTR Projetado</span>
              <span className="text-sm font-extrabold text-emerald-500 font-mono">11,8%</span>
            </div>
          </div>
        </div>

        {/* Master Workspace Selector Navigation Tabs */}
        <div className="flex bg-gray-950 p-1 rounded-xl border border-gray-800 overflow-x-auto max-w-full no-scrollbar">
          
          <button 
            onClick={() => setActiveTab('preview')}
            className={`px-4 py-3 rounded-lg text-xs font-bold flex items-center gap-2 whitespace-nowrap transition-all cursor-pointer ${
              activeTab === 'preview' 
                ? 'bg-amber-500 text-black shadow-lg shadow-amber-500/10 font-extrabold' 
                : 'text-gray-400 hover:text-white'
            }`}
          >
            <Layout className="h-4 w-4" />
            1. PÁGINA PRINCIPAL (PREVIEW HOME)
          </button>

          <button 
            onClick={() => setActiveTab('google-ads')}
            className={`px-4 py-3 rounded-lg text-xs font-bold flex items-center gap-2 whitespace-nowrap transition-all cursor-pointer ${
              activeTab === 'google-ads' 
                ? 'bg-amber-500 text-black shadow-lg shadow-amber-500/10 font-extrabold' 
                : 'text-gray-400 hover:text-white'
            }`}
          >
            <SearchCode className="h-4 w-4" />
            2. SIMULADOR GOOGLE ADS
          </button>

          <button 
            onClick={() => setActiveTab('identity')}
            className={`px-4 py-3 rounded-lg text-xs font-bold flex items-center gap-2 whitespace-nowrap transition-all cursor-pointer ${
              activeTab === 'identity' 
                ? 'bg-amber-500 text-black shadow-lg shadow-amber-500/10 font-extrabold' 
                : 'text-gray-400 hover:text-white'
            }`}
          >
            <Megaphone className="h-4 w-4" />
            3. IDENTIDADE & BRIEFING DE COPY
          </button>

          <button 
            onClick={() => setActiveTab('performance')}
            className={`px-4 py-3 rounded-lg text-xs font-bold flex items-center gap-2 whitespace-nowrap transition-all cursor-pointer ${
              activeTab === 'performance' 
                ? 'bg-amber-500 text-black shadow-lg shadow-amber-500/10 font-extrabold' 
                : 'text-gray-400 hover:text-white'
            }`}
          >
            <Smartphone className="h-4 w-4" />
            4. PERFORMANCE MOBILE & CORES
          </button>
        </div>

        {/* Dynamic Tab Body with beautiful subtle transitions */}
        <div className="relative mt-6 min-h-[500px]">
          {activeTab === 'preview' && (
            <LandingPagePreview 
              selectedHeadline={selectedHeadline}
              onAddToCart={handleAddToCart}
              activeAccent={activeAccent}
              onChangeAccent={setActiveAccent}
            />
          )}

          {activeTab === 'google-ads' && (
            <GoogleAdsSimulator 
              onSelectHeadline={setSelectedHeadline}
              selectedHeadline={selectedHeadline}
            />
          )}

          {activeTab === 'identity' && (
            <IdentitySection />
          )}

          {activeTab === 'performance' && (
            <PerformanceSection />
          )}
        </div>
      </main>

      {/* FOOTER GENERAL NOTES */}
      <footer className="bg-gray-950 border-t border-gray-900 py-12 mt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-6 text-center text-xs text-gray-500">
          <p className="max-w-4xl mx-auto leading-relaxed">
            Este painel foi desenhado especificamente para a equipe de marketing e criação da <strong className="text-gray-300">Choque Rei Fut</strong>. Ele implementa as estruturas solicitadas de Headline para atração de anúncios de Google Ads, o gancho tático editorial que induz ao desejo de compra, a vitrine clássica, e o FAQ antipânico de quebra de objeções, além de fornecer o simulador visual de relevância de pesquisa do anunciante.
          </p>
          <div className="flex justify-center gap-4 text-[10px] uppercase font-mono text-gray-600">
            <span>Copyright 2026</span>
            <span>•</span>
            <span>Estratégia de Tráfego e Copywriting</span>
          </div>
        </div>
      </footer>

      {/* AMAZING INTERACTIVE ADD TO CART TOAST MODAL */}
      {cartAlertProduct && (
        <div className="fixed bottom-6 right-6 z-50 max-w-md w-full p-4 rounded-xl bg-gray-950 border border-amber-500/40 text-left shadow-2xl animate-slideUp">
          <div className="flex gap-4">
            
            {/* Left Graphic thumb */}
            <div className="h-16 w-16 rounded bg-gray-900 overflow-hidden shrink-0 border border-gray-800">
              <img src={cartAlertProduct.image} alt={cartAlertProduct.name} className="h-full w-full object-cover" referrerPolicy="no-referrer" />
            </div>

            {/* Middle Message */}
            <div className="space-y-1 flex-1">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold text-amber-400 uppercase tracking-widest font-mono flex items-center gap-1">
                  <Flame className="h-3 w-3" /> Fogo no Carrinho!
                </span>
                <button 
                  onClick={handleCloseToast}
                  className="p-1 rounded text-gray-500 hover:text-white hover:bg-gray-900 transition-colors cursor-pointer"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              <h4 className="text-xs font-bold text-white line-clamp-1">{cartAlertProduct.name}</h4>
              <p className="text-xs text-gray-400 leading-snug">
                Simulação ativa! O botão de CTA converteu com sucesso. Note como o sotaque clubista profissional ("membro da arquibancada") aumentou as chances de clique instantâneo do torcedor fanático.
              </p>
              
              <div className="pt-2 flex items-center justify-between text-[11px] font-semibold text-emerald-400">
                <span className="flex items-center gap-0.5"><CheckCircle className="h-3.5 w-3.5" /> Adicionado</span>
                <span>R$ {cartAlertProduct.price.toFixed(2)}</span>
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}

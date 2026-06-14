/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Flame, ShoppingCart, Search, Menu } from 'lucide-react';

interface HeaderProps {
  onNavToSegment: (segmentId: string) => void;
  cartCount: number;
  onOpenCartAlert: () => void;
  activeAccent: 'tricolor' | 'alviverde' | 'ouro';
}

export default function Header({ onNavToSegment, cartCount, onOpenCartAlert, activeAccent }: HeaderProps) {
  // Editorial accent theme logic
  const accentBorderColorClass = 
    activeAccent === 'tricolor' ? 'border-[#e63946]' :
    activeAccent === 'alviverde' ? 'border-[#2a9d8f]' :
    'border-[#eab308]';

  const badgeColorClass = 
    activeAccent === 'tricolor' ? 'bg-[#e63946] text-white' :
    activeAccent === 'alviverde' ? 'bg-[#2a9d8f] text-white' :
    'bg-[#eab308] text-black font-extrabold';

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#0d0d0d]/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl h-20 items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Brand Logo with Editorial Signature Block (CRF red shield with teal shadow) */}
        <div className="flex items-center gap-3.5 cursor-pointer select-none" onClick={() => onNavToSegment('preview')}>
          <div className="w-10 h-10 bg-[#e63946] flex items-center justify-center font-black italic text-lg tracking-tighter text-white shadow-[3px_3px_0_#2a9d8f] shrink-0">
            CRF
          </div>
          <div>
            <span className="font-display text-xl font-black tracking-tighter text-[#f2f2f2] flex items-center gap-1">
              CHOQUE REI <span className="text-[#e63946] italic">FUT</span>
            </span>
            <span className="block text-[9px] font-bold text-[#2a9d8f] tracking-widest uppercase">LIGA DA ARQUIBANCADA</span>
          </div>
        </div>

        {/* Desktop Editorial Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-xs font-bold tracking-[0.2em] uppercase">
          <button 
            onClick={() => onNavToSegment('identity')}
            className="text-[#f2f2f2]/70 hover:text-[#e63946] hover:scale-105 transition-all cursor-pointer"
          >
            NOTÍCIAS & BRIEFING
          </button>
          <button 
            onClick={() => onNavToSegment('google-ads')}
            className="text-[#f2f2f2]/70 hover:text-[#e63946] hover:scale-105 transition-all cursor-pointer"
          >
            SIMULADOR ADS
          </button>
          <button 
            onClick={() => onNavToSegment('preview')}
            className="text-[#f2f2f2] hover:text-[#e63946] hover:scale-105 transition-all cursor-pointer underline decoration-4 decoration-[#e63946] underline-offset-8"
          >
            LOJA OFICIAL
          </button>
          <button 
            onClick={() => onNavToSegment('performance')}
            className="text-[#f2f2f2]/70 hover:text-[#e63946] hover:scale-105 transition-all cursor-pointer"
          >
            MÉTRICAS CORE
          </button>
        </nav>

        {/* Icons Utility Area */}
        <div className="flex items-center gap-4">
          <div className="relative hidden sm:block">
            <input 
              type="text" 
              placeholder="Buscar manto sagrado..." 
              className="w-48 xl:w-56 bg-white/5 border border-white/10 py-2 pl-4 pr-10 text-xs text-[#f2f2f2] placeholder-white/30 focus:outline-none focus:border-[#e63946] focus:bg-white/10 transition-all font-sans"
            />
            <Search className="absolute right-3 top-2.5 h-4 w-4 text-white/30" />
          </div>

          <button 
            onClick={onOpenCartAlert}
            className="relative px-3 py-1.5 bg-white/5 border border-white/10 hover:border-white/20 transition-colors text-xs font-bold tracking-widest uppercase text-[#f2f2f2] flex items-center gap-2 cursor-pointer"
            id="shopping-cart-button"
          >
            <span>CARRINHO</span>
            <ShoppingCart className="h-3.5 w-3.5 text-[#e63946]" />
            {cartCount > 0 && (
              <span className={`px-1.5 py-0.2 text-[10px] rounded ${badgeColorClass}`}>
                {cartCount}
              </span>
            )}
          </button>

          <button className="md:hidden p-2 text-white/70 hover:text-white">
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>
    </header>
  );
}

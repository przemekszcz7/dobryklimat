/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BAR_INFO } from "../data";
import { Heart } from "lucide-react";

export default function ONas() {
  return (
    <section id="o-nas" className="relative py-20 lg:py-28 bg-linen-parchment overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Asymmetrical Grid layout (60% Text Column, 40% Image Column) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* 60% Column - Left / Editorial */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            <span className="font-mono text-xs uppercase tracking-widest text-orange font-bold">
              [ Nasza Historia ]
            </span>

            <h2 className="font-serif font-extrabold text-[#1E3A5F] text-3xl sm:text-5xl tracking-tight leading-tight">
              Sercem Pisany Bar Obiadowy
            </h2>

            {/* Underline scaleX animation on click/hover for Menu & O Nas sections */}
            <div className="w-[120px] h-[4px] bg-orange mt-2 rounded origin-left transition-transform duration-500 hover:scale-x-125 md:hover:scale-x-150" />

            <div className="space-y-4 font-sans text-text text-[17px] leading-relaxed max-w-2xl mt-4">
              <p>
                Dobry Klimat powstał z autentycznej tęsknoty za prostym, domowym jedzeniem, którego sekret polega na cierpliwości, doskonałym składniku i tradycyjnych technikach kulinarnych. Nasz swojski bar obiadowy w Lubinie powstał po to, aby stać się miejscem codziennych spotkań mieszkańców, rodzin i każdego, kto ceni sobie autentyczną kuchnię polską.
              </p>
            </div>

            {/* Simple grid list items inside prose columns */}
            <div className="grid grid-cols-1 gap-4 pt-4 w-full max-w-sm">
              <div className="flex items-center gap-2.5 p-3 rounded-md bg-[#FAF5EB]/60 border border-border">
                <Heart className="w-5 h-5 text-orange shrink-0 animate-pulse" />
                <span className="font-sans font-semibold text-sm text-navy">Tradycja Kulinarna Kraju</span>
              </div>
            </div>
          </div>

          {/* 40% Column - Right / Visual with wheat stalk and custom Polaroid framed food photo */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            
            {/* Elegant high fidelity Wheat Stalk SVG background illustration on right */}
            <div className="absolute right-[-20px] top-[-40px] w-48 h-96 opacity-[0.06] text-[#E07828] pointer-events-none select-none">
              <svg viewBox="0 0 100 200" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" xmlns="http://www.w3.org/2000/svg">
                {/* Wheat stem */}
                <path d="M50,190 Q50,110 50,20" />
                {/* Wheat grains staggered */}
                <path d="M50,40 C60,35 60,20 50,15 C40,20 40,35 50,40 Z" />
                <path d="M50,65 C62,60 62,45 50,40 C38,45 38,60 50,65 Z" />
                <path d="M50,90 C62,85 62,70 50,65 C38,70 38,85 50,90 Z" />
                <path d="M50,115 C62,110 62,95 50,90 C38,95 38,110 50,115 Z" />
                <path d="M50,140 C62,135 62,120 50,115 C38,120 38,135 50,140 Z" />
                <path d="M50,165 C60,160 60,145 50,140 C40,145 40,160 50,165 Z" />
                {/* Seed beards */}
                <path d="M50,40 L65,15" />
                <path d="M50,40 L35,15" />
                <path d="M50,65 L68,35" />
                <path d="M50,65 L32,35" />
                <path d="M50,90 L68,60" />
                <path d="M50,90 L32,60" />
                <path d="M50,115 L68,85" />
                <path d="M50,115 L32,85" />
              </svg>
            </div>

            {/* Asymmetrical Frame containing native food details */}
            <div className="relative p-3 bg-bg-warm border border-navy/10 rounded shadow-lg transform -rotate-2 hover:rotate-0 transition-transform duration-500 max-w-sm mx-auto">
              <div className="relative overflow-hidden aspect-square rounded bg-[#EAE0C8]">
                <img
                  src={BAR_INFO.photoFood}
                  alt="Tradycyjne lepienie pierogów ruskich w Dobry Klimat"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                
                {/* Color tone blend to ensure aesthetic charm */}
                <div className="absolute inset-0 bg-orange-deep/5 mix-blend-color-burn" />
              </div>
              
              <div className="pt-3 pb-1 text-center">
                <span className="font-handwritten text-xl text-navy">Swojskie, puszyste pierogi</span>
                <span className="block font-sans text-[10px] text-text-muted uppercase tracking-widest mt-0.5">
                  Ręcznie lepione z miłością
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

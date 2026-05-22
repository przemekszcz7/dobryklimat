/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { DAILY_SPECIALS } from "../data";
import { UtensilsCrossed, Calendar } from "lucide-react";

export default function DanieDnia() {
  const special = DAILY_SPECIALS[0];

  return (
    <section id="danie-dnia" className="relative py-20 bg-bg-dark text-cream overflow-hidden bg-wood-navy-darker">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Section header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange/15 rounded-full border border-orange/20 text-orange-light text-xs font-mono font-semibold uppercase tracking-widest mb-3">
            <Calendar className="w-3.5 h-3.5" />
            Zawsze Coś Nowego
          </div>
          <h2 className="font-serif font-bold text-3xl sm:text-4xl text-cream tracking-tight">
            Dzisiejsze Menu
          </h2>
          <p className="text-xs text-text-pale mt-1 uppercase tracking-widest font-mono">
            Codzienny zestaw obiadowy w super cenie
          </p>
        </div>

        {/* The Chalkboard Component with wooden border & bold offset shadow */}
        <div className="relative p-1.5 sm:p-2 bg-[#423D38] rounded-xl shadow-2xl max-w-2xl mx-auto">
          {/* Wooden framing border */}
          <div className="border-[12px] sm:border-[16px] border-[#694A38] rounded-lg p-6 sm:p-10 bg-[#1C201C] relative border-t-[#785540] border-b-[#553C2D]">
            
            {/* Upper hanging chalkboard loop SVGs */}
            <div className="absolute top-[-30px] left-12 w-3 h-8 bg-neutral-600 rounded-full hidden md:block" />
            <div className="absolute top-[-30px] right-12 w-3 h-8 bg-neutral-600 rounded-full hidden md:block" />

            {/* Slow ambient glow in top corner representing light reflection */}
            <div className="absolute top-2 right-4 w-20 h-20 bg-yellow-400/5 blur-xl rounded-full" />

            {/* Custom Chalkboard shadow offset box-shadow */}
            <div className="absolute inset-0 bg-transparent rounded shadow-[inset_0_4px_24px_rgba(0,0,0,0.85)] pointer-events-none" />

            {/* Chalkboard contents */}
            <div className="relative text-center space-y-8 select-none">
              
              {/* Header inside Chalkboard */}
              <div className="border-b border-dashed border-white/20 pb-4">
                <span className="font-handwritten text-orange text-3xl sm:text-4xl tracking-wider block">
                  Szef Kuchni Poleca:
                </span>
                <span className="font-mono text-[11px] uppercase tracking-widest text-[#C5D5E8]">
                  {special.dayName}
                </span>
              </div>

              {/* Soup Item block */}
              <div className="space-y-2">
                <span className="font-mono text-xs uppercase tracking-wider text-orange-light block">
                  -- Pierwsze Danie --
                </span>
                <h4 className="font-handwritten text-cream-deep text-3xl sm:text-4xl tracking-wide max-w-md mx-auto leading-tight">
                  {special.soup.name}
                </h4>
                <div className="font-mono text-xs text-cream/40">{special.soup.price} jako osobne danie</div>
              </div>

              {/* Chalk Separator SVG */}
              <div className="flex justify-center py-2 text-cream/20">
                <span className="text-xl tracking-widest font-mono">~ ~ ~</span>
              </div>

              {/* Main Course block */}
              <div className="space-y-2">
                <span className="font-mono text-xs uppercase tracking-wider text-orange-light block">
                  -- Drugie Danie --
                </span>
                <h4 className="font-handwritten text-cream-deep text-3xl sm:text-4xl tracking-wide max-w-md mx-auto leading-snug">
                  {special.mainCourse.name}
                </h4>
                <div className="font-mono text-xs text-cream/40">{special.mainCourse.price} jako osobne danie</div>
              </div>

              {/* Special Pricing chalk tag */}
              <div className="pt-6 border-t border-dashed border-white/25">
                <p className="font-sans text-xs uppercase tracking-widest text-cream/60">Kompletny Zestaw</p>
                <div className="inline-flex items-center gap-2 bg-[#E07828] text-cream font-bold px-6 py-2.5 rounded transform rotate-[-1deg] shadow-lg mt-2 border-b-2 border-orange-deep">
                  <span className="font-mono text-xl tracking-tight">{special.comboPrice}</span>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Small prose notice below chalkboard */}
        <p className="font-serif italic text-sm text-center text-[#C5D5E8] max-w-md mx-auto mt-12 leading-relaxed opacity-85">
          "Menu dnia układamy codziennie z rano zakupionych składników u lokalnych dostawców. Zapytaj obsługę o dzisiejsze potrawy alternatywne!"
        </p>

      </div>
    </section>
  );
}

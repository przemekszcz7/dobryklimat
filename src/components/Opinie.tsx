/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { REVIEWS, BAR_INFO } from "../data";
import { Facebook, Star } from "lucide-react";

export default function Opinie() {
  return (
    <section id="opinie" className="py-20 lg:py-28 bg-linen-parchment overflow-hidden border-t border-b border-[#1E3A5F]/5">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-start max-w-2xl mb-16">
          <span className="font-mono text-xs uppercase tracking-widest text-orange font-bold">
            [ Opinie Klientów z Facebooka ]
          </span>
          <h2 className="font-serif font-extrabold text-[#1E3A5F] text-3xl sm:text-5xl tracking-tight leading-tight mt-3">
            Smak, Który Łączy Ludzi
          </h2>
          <p className="font-sans text-text-muted text-base mt-3 leading-relaxed">
            Nasi goście dzielą się swoimi opiniami z pierwszej ręki na profilu Facebook. Jesteśmy dumni, że możemy karmić dzielnicę każdego dnia ze szczerym uśmiechem.
          </p>
        </div>

        {/* Staggered Editorial Typography Presentation (NO equal grid cards) */}
        <div className="space-y-16 lg:space-y-24 max-w-5xl mx-auto">
          
          {/* Review 1: Large Quote on Left with Asymmetrical Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            <div className="lg:col-span-8 space-y-4">
              {/* Star Rating & Source */}
              <div className="flex items-center gap-1.5 text-orange">
                {[...Array(REVIEWS[0].rating)].map((_, i) => (
                  <Star key={i} className="w-4.5 h-4.5 fill-current" />
                ))}
                <span className="text-xs font-mono font-semibold text-[#6A5A3A] ml-2 tracking-wider flex items-center gap-1">
                  <Facebook className="w-3 h-3 text-[#1877F2]" fill="#1877F2" stroke="none" />
                  Opinia z Facebooka
                </span>
              </div>
              
              {/* Text Quote: Bold Editorial Serif in 400 Italic */}
              <blockquote className="font-serif text-[#1D3A5F] text-xl sm:text-2xl italic leading-relaxed text-left border-l-4 border-orange pl-6 my-2">
                "{REVIEWS[0].text}"
              </blockquote>
              
              {/* Author name in heavy sans */}
              <div className="text-left select-none pl-6">
                <span className="block text-[11px] font-mono text-text-muted mt-0.5 uppercase tracking-widest">Wierny Klient Baru</span>
              </div>
            </div>
            
            <div className="lg:col-span-4 hidden lg:block" />
          </div>

          {/* Review 2: Shifted right-aligned quote */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            <div className="lg:col-span-4 hidden lg:block" />
            
            <div className="lg:col-span-8 space-y-4 lg:text-right flex flex-col lg:items-end">
              <div className="flex items-center gap-1.5 text-orange lg:justify-end">
                {[...Array(REVIEWS[1].rating)].map((_, i) => (
                  <Star key={i} className="w-4.5 h-4.5 fill-current" />
                ))}
                <span className="text-xs font-mono font-semibold text-[#6A5A3A] ml-2 tracking-wider flex items-center gap-1">
                  <Facebook className="w-3 h-3 text-[#1877F2]" fill="#1877F2" stroke="none" />
                  Opinia z Facebooka
                </span>
              </div>

              <blockquote className="font-serif text-[#1D3A5F] text-xl sm:text-2xl italic leading-relaxed lg:text-right border-r-4 lg:border-l-0 border-orange lg:pr-6 pl-0 my-2 max-w-2xl">
                "{REVIEWS[1].text}"
              </blockquote>

              <div className="lg:text-right select-none lg:pr-6">
                <span className="block text-[11px] font-mono text-text-muted mt-0.5 uppercase tracking-widest">Zadowolony Gość</span>
              </div>
            </div>
          </div>

          {/* Review 3: Full Width, centered & styled like old print editorial block */}
          <div className="py-10 px-6 sm:px-12 bg-cream border border-[#1E3A5F]/10 rounded-lg shadow-md max-w-4xl mx-auto space-y-6">
            <div className="flex flex-col items-center gap-1.5">
              <div className="flex items-center gap-1 text-orange justify-center">
                {[...Array(REVIEWS[2].rating)].map((_, i) => (
                  <Star key={i} className="w-4.5 h-4.5 fill-current" />
                ))}
              </div>
              <span className="text-[10px] font-mono font-bold text-orange uppercase tracking-wider flex items-center gap-1">
                <Facebook className="w-3.5 h-3.5 text-[#1877F2]" fill="#1877F2" stroke="none" />
                Oficjalna Recenzja
              </span>
            </div>

            <blockquote className="font-serif text-[#1E3A5F] text-lg sm:text-xl leading-relaxed text-center italic max-w-2xl mx-auto">
              "{REVIEWS[2].text}"
            </blockquote>

            <div className="text-center select-none">
              <p className="text-[10px] font-mono text-text-muted mt-0.5 uppercase tracking-widest">Opinia z d. 2026 r.</p>
            </div>
          </div>

        </div>

        {/* Beautiful direct custom CTA Button to visit FB reviews */}
        <div className="flex flex-col items-center mt-16 sm:mt-24">
          <p className="font-sans text-sm text-[#6A5A3A] mb-4 text-center">
            Zostaw nam swoją opinię i zobacz co słychać na naszym profilu:
          </p>
          <a
            href={BAR_INFO.facebookReviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-orange hover:bg-orange-deep text-cream hover:text-white font-sans font-bold text-xs tracking-wider uppercase rounded-md flex items-center justify-center gap-3 shadow-md border-b-2 border-orange-deep transition-all duration-200 cursor-pointer"
          >
            <Facebook className="w-4.5 h-4.5 text-[#1877F2]" fill="#1877F2" stroke="none" />
            <span>Wszystkie Opinie Na Facebooku</span>
          </a>
        </div>

      </div>
    </section>
  );
}

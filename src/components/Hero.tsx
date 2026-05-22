/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BAR_INFO } from "../data";
import { Facebook, ArrowRight, MapPin, Clock } from "lucide-react";

export default function Hero() {
  const scrollToMenu = () => {
    const el = document.getElementById("menu");
    if (el) {
      const offset = 90;
      const pos = el.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: pos, behavior: "smooth" });
    }
  };

  return (
    <section className="relative pt-[120px] pb-16 lg:pb-24 overflow-hidden bg-linen-crosshatch">
      {/* Background Chalkboard SVG Outline Backdrop Element (0.04-0.06 opacity) */}
      <div className="absolute top-[10%] right-[-5%] w-[600px] h-[500px] pointer-events-none select-none text-navy opacity-[0.04] md:opacity-[0.05] animate-chalkboard-pulse hidden lg:block">
        <svg viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round">
          {/* Handwritten-esque chalkboard representation */}
          <rect x="10" y="10" width="180" height="150" rx="8" />
          <path d="M 12,12 L 188,12 L 188,158 L 12,158 Z" />
          <path d="M 25,35 L 175,35 M 25,55 H 120 M 25,75 H 150 M 25,95 H 90 M 25,115 H 160" />
          <path d="M 30,140 C 40,145 50,135 60,140" strokeWidth="2" />
          {/* Subtle wheat leaf draw */}
          <path d="M160,85 C175,80 175,60 160,55 C150,60 150,80 160,85 Z" />
          <path d="M160,85 L160,120" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Left-aligned editorial, clean hierarchy */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <h1 className="font-serif font-extrabold text-[#1E3A5F] text-5xl sm:text-6xl lg:text-7xl tracking-tight leading-[1.05] mb-6">
              Dobry Klimat <br />
              <span className="text-orange italic font-normal font-serif">Domowe Obiady</span>
            </h1>

            {/* 50px Orange horizontal line under heading */}
            <div className="w-[50px] h-[4px] bg-orange mb-8 rounded" />

            <p className="font-sans text-[#1A1A0A] text-lg lg:text-xl leading-relaxed max-w-xl mb-8">
              Swojski bar obiadowy w Lubinie, serwujący dania będące sercem polskiej tradycji kulinarnej. 
              U nas zjesz pysznie, świeżo i z gwarancją domowego ciepła. Każda potrawa powstaje z miłości do autentycznego smaku.
            </p>

            {/* Restrained CTAs (Different shapes/styles) */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10">
              <button
                onClick={scrollToMenu}
                className="px-8 py-4 bg-orange hover:bg-orange-deep text-cream hover:text-white font-sans font-bold text-sm tracking-wider uppercase rounded-md flex items-center justify-center gap-3 shadow-md border-b-2 border-orange-deep hover:border-transparent transition-all duration-200 cursor-pointer"
              >
                <span>Przeglądaj Menu</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={BAR_INFO.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 bg-transparent hover:bg-navy/5 border-2 border-navy text-navy font-sans font-bold text-sm tracking-wider uppercase rounded-md flex items-center justify-center gap-2.5 transition-all duration-200 cursor-pointer"
              >
                <Facebook className="w-4.5 h-4.5 text-[#1877F2]" fill="#1877F2" stroke="none" />
                <span>Nasz Facebook</span>
              </a>
            </div>

            {/* Topolowa Info Strips */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-lg border-t border-[#1E3A5F]/10 pt-8">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-orange shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-serif font-bold text-navy text-base leading-tight">Ulica Topolowa 46A</h4>
                  <p className="text-sm text-text-muted mt-0.5 font-sans">Lubin 59-300 · Swojski zakątek</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-orange shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-serif font-bold text-navy text-base leading-tight">Zapraszamy od 11:00</h4>
                  <p className="text-sm text-text-muted mt-0.5 font-sans">Pon. - Pt. do 18:00, Sob. do 16:00</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Dynamic asymmetrical frame with native food/interior image */}
          <div className="lg:col-span-5 relative mt-8 lg:mt-0">
            {/* Visual background badges */}
            <div className="absolute -top-4 -left-4 w-12 h-12 bg-orange-pale rounded-full -z-10" />
            <div className="absolute -bottom-8 -right-4 w-24 h-24 bg-bg-warm rounded-full -z-10" />

            {/* Asymmetrical Frame: Retro Polaroid / Wooden Frame style offset wrapper */}
            <div className="relative p-3 sm:p-4 bg-bg-section border border-navy/10 rounded-lg shadow-xl transform rotate-[1.5deg] hover:rotate-0 transition-all duration-500 max-w-md mx-auto">
              <div className="relative overflow-hidden rounded-md bg-navy-pale aspect-[4/3] group">
                <img
                  src={BAR_INFO.photoInterior}
                  alt="Wnętrze baru Dobry Klimat Domowe Obiady"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Vintage overlay glow */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy/30 to-transparent mix-blend-multiply" />
              </div>
              
              {/* Handwritten style card sub-caption */}
              <div className="pt-4 pb-1 px-2 flex justify-between items-center bg-transparent">
                <div>
                  <p className="font-handwritten text-2xl text-navy leading-none">Tu pachnie jak w domu!</p>
                  <p className="text-[11px] uppercase tracking-widest font-mono text-orange mt-1">Lubin, Topolowa 46A</p>
                </div>
                
                {/* Beautiful hand-crafted seal or label */}
                <span className="px-2 py-1 border border-orange/30 rounded font-mono text-[10px] uppercase text-orange font-bold rotate-[-3deg]">
                  Swojski Bar
                </span>
              </div>
            </div>


          </div>
        </div>
      </div>

      {/* Decorative separating line leading into next section */}
      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-orange/20 to-transparent mt-16" />
    </section>
  );
}

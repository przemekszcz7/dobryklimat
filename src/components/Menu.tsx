/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { MENU_CATEGORIES } from "../data";
import { Soup, Utensils, ChefHat, CupSoda } from "lucide-react";

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const getIcon = (name: string) => {
    switch (name) {
      case "Soup":
        return <Soup className="w-5 h-5 text-orange" />;
      case "Utensils":
        return <Utensils className="w-5 h-5 text-orange" />;
      case "ChefHat":
        return <ChefHat className="w-5 h-5 text-orange" />;
      case "CupSoda":
        return <CupSoda className="w-5 h-5 text-orange" />;
      default:
        return <Utensils className="w-5 h-5 text-orange" />;
    }
  };

  const filteredCategories = 
    activeCategory === "all" 
      ? MENU_CATEGORIES 
      : MENU_CATEGORIES.filter((cat) => cat.id === activeCategory);

  return (
    <section id="menu" className="relative py-20 lg:py-28 bg-wood-navy overflow-hidden">
      {/* Decorative top strip: used ONCE across entire site */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-orange" />

      {/* Grid pattern background strip */}
      <div className="absolute top-0 right-1/4 w-32 h-full opacity-[0.03] pointer-events-none select-none text-cream hidden md:block">
        <svg width="100%" height="100%">
          <pattern id="grid" width="16" height="16" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.5" fill="currentColor" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Heading & Steaming Soup Bowl */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="mb-4">
            {/* Custom high-fidelity Steaming Soup Bowl SVG */}
            <svg width="60" height="60" viewBox="0 0 48 48" fill="none" className="text-orange overflow-visible" xmlns="http://www.w3.org/2000/svg">
              {/* Animated steam wisps */}
              <path d="M16,14 C15,9 20,8 16,1" stroke="#E07828" strokeWidth="2" strokeLinecap="round" className="animate-steam-1" />
              <path d="M26,14 C25,9 31,8 26,1" stroke="#E07828" strokeWidth="2" strokeLinecap="round" className="animate-steam-2" />
              
              {/* Herb leaf floating */}
              <circle cx="31" cy="6" r="1.5" fill="#C4922A" className="animate-pulse" />
              
              {/* Soup bowl curves */}
              <path d="M8,26 C8,38 40,38 40,26" stroke="#FAF5EB" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M4,26 C10,26 38,26 44,26" stroke="#FAF5EB" strokeWidth="3" strokeLinecap="round" />
              <path d="M16,36 L14,41 H34 L32,36" stroke="#FAF5EB" strokeWidth="2.5" strokeLinejoin="round" />
            </svg>
          </div>
          
          <h2 className="font-serif font-extrabold text-cream text-3xl sm:text-5xl tracking-tight leading-tight">
            Menu Obiadowe
          </h2>
          <p className="font-sans text-xs uppercase tracking-widest text-[#F0A060] font-bold mt-2 font-mono">
            Gotowane Codziennie · Świeże Wywary
          </p>

          {/* Section Heading Underline with scaleX animation (Menu and O nas specified only) */}
          <div className="w-[120px] h-1 bg-orange mt-5 rounded origin-center transition-transform duration-700 hover:scale-x-150" />
        </div>

        {/* Tab switcher: feels like neat chalkboard labels */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <button
            onClick={() => setActiveCategory("all")}
            className={`px-4 py-2 text-xs font-mono font-bold tracking-wider uppercase rounded transition-all duration-200 cursor-pointer ${
              activeCategory === "all"
                ? "bg-orange text-cream border-transparent shadow"
                : "bg-bg-card-dark text-[#C5D5E8] border border-cream/10 hover:border-orange/40"
            }`}
          >
            Wszystko
          </button>
          {MENU_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 text-xs font-mono font-bold tracking-wider uppercase rounded transition-all duration-200 cursor-pointer ${
                activeCategory === cat.id
                  ? "bg-orange text-cream border-transparent shadow"
                  : "bg-bg-card-dark text-[#C5D5E8] border border-cream/10 hover:border-orange/40"
              }`}
            >
              {cat.name.split(" ")[1] || cat.name}
            </button>
          ))}
        </div>

        {/* Real bar mleczny board format list */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {filteredCategories.map((category) => (
            <div
              key={category.id}
              className="bg-[#132640]/90 border border-cream/5 rounded-lg p-6 sm:p-8 shadow-2xl relative"
            >
              {/* Categorical board title */}
              <div className="flex items-center gap-3 border-b border-cream/10 pb-4 mb-6">
                {getIcon(category.iconName)}
                <h3 className="font-serif font-bold text-cream text-xl sm:text-2xl tracking-tight">
                  {category.name}
                </h3>
              </div>

              {/* Items in Category */}
              <div className="space-y-6">
                {category.items.map((item) => (
                  <div
                    key={item.id}
                    className="p-4 bg-bg-card-dark rounded-md border border-cream/5 border-l-2 border-l-orange hover:border-cream/15 transition-all duration-300 flex flex-col sm:flex-row sm:items-center justify-between gap-4 group"
                  >
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="font-serif font-bold text-cream group-hover:text-orange transition-colors duration-200 text-base">
                          {item.name}
                        </span>
                      </div>
                    </div>

                    {/* Price tag in DM Mono */}
                    <div className="font-mono text-sm font-semibold text-orange self-start sm:self-center bg-bg-darker/50 px-3 py-1.5 rounded border border-orange/15 shadow-sm whitespace-nowrap">
                      {item.price}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <p className="font-serif italic text-cream-deep text-sm">
            * Wszystkie nasze potrawy gotujemy od zera z naturalnych składników bez wzmacniaczy smaku. Smacznego!
          </p>
        </div>
      </div>
    </section>
  );
}

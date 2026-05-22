/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { PILLARS } from "../data";

export default function ProsePillars() {
  return (
    <section className="py-16 bg-cream border-t border-[#1E3A5F]/5">
      <div className="max-w-7xl mx-auto px-6">
        {/* Subtle decorative "· · ·" separator in orange */}
        <div className="flex justify-center mb-10 text-orange font-serif text-3xl tracking-widest pointer-events-none select-none">
          · · ·
        </div>

        {/* Asymmetrical grid or styled layout: we use clean 3-column tight prose columns with NO icons */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {PILLARS.map((pillar) => {
            return (
              <div 
                key={pillar.title} 
                className="flex flex-col items-start py-2"
              >
                {/* Vintage Mono styled badge */}
                <span className="font-mono text-xs uppercase tracking-widest text-orange font-bold mb-4">
                  [ {pillar.badge} ]
                </span>

                {/* Sub-heading in Playfair */}
                <h3 className="font-serif font-bold text-navy text-2xl lg:text-3xl leading-tight mb-4 tracking-tight">
                  {pillar.title}
                </h3>

                {/* Body Text: tight, editorial, 17px */}
                <p className="font-sans text-text text-[17px] leading-relaxed text-left text-text-muted">
                  {pillar.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

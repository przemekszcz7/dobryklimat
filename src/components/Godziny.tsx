/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { OPENING_HOURS } from "../data";

export default function Godziny() {
  return (
    <section className="py-16 bg-cream border-b border-[#1E3A5F]/5">
      <div className="max-w-xl mx-auto px-6 text-center">
        <h3 className="font-serif font-bold text-navy text-2xl tracking-tight mb-2">
          Godziny Otwarcia
        </h3>
        <p className="font-sans text-xs uppercase tracking-widest text-[#6A5A3A] font-bold font-mono mb-8">
          Kiedy Gotujemy Gorące Obiady
        </p>

        {/* Minimal, decoration-free layout table */}
        <div className="space-y-4 border-t border-b border-[#1E3A5F]/10 py-6 text-left max-w-sm mx-auto">
          {OPENING_HOURS.map((item) => (
            <div
              key={item.day}
              className="flex justify-between items-center text-sm sm:text-base"
            >
              <span className="font-sans font-semibold text-[#1A1A0A]">{item.day}</span>
              <span className="font-mono text-orange font-medium">{item.hours}</span>
            </div>
          ))}
        </div>

        <p className="font-sans text-xs text-text-muted mt-6 leading-relaxed max-w-xs mx-auto">
          Uprzejmie informujemy, że w przypadku wyprzedania wszystkich świeżych dań przed czasem, bar może zamknąć się odrobinę wcześniej. Zachęcamy do kontaktu telefonicznego!
        </p>
      </div>
    </section>
  );
}

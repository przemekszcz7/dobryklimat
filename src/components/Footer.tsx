/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BAR_INFO } from "../data";
import { Facebook, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#132640] text-cream-deep overflow-hidden">
      
      {/* Footer Top Accent Line: 3px Orange line */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-orange" />

      <div className="max-w-7xl mx-auto px-6 pt-16 pb-12 relative z-10">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start border-b border-cream/10 pb-12 mb-10">
          
          {/* Logo & Slogan Column */}
          <div className="md:col-span-4 space-y-4">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                scrollToTop();
              }}
              className="inline-flex items-center gap-3 group"
            >
              <img
                src={BAR_INFO.logoUrl}
                alt="Logo Dobry Klimat"
                referrerPolicy="no-referrer"
                className="w-12 h-12 rounded-full border-2 border-orange/50 object-cover"
              />
              <div className="leading-tight">
                <span className="font-handwritten text-3xl tracking-wide text-orange block -mb-1">
                  Dobry Klimat
                </span>
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#C5D5E8] font-bold block">
                  Domowe Obiady
                </span>
              </div>
            </a>
            
            <p className="font-sans text-xs text-text-pale/80 leading-relaxed max-w-sm">
              Swojski bar obiadowy, serwujący dania będące częścią długoletniej tradycji kulinarnej naszego kraju. Każde danie przygotowujemy z miłością od samego świtu.
            </p>
          </div>

          {/* Szybka Nawigacja Column */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="font-serif font-bold text-cream text-base tracking-tight uppercase">
              Szybka Nawigacja
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs font-semibold">
              <a
                href="#menu"
                className="hover:text-orange transition-colors duration-150"
              >
                Menu Obiadowe
              </a>
              <a
                href="#danie-dnia"
                className="hover:text-orange transition-colors duration-150"
              >
                Dzisiejsze Danie Dnia
              </a>
              <a
                href="#o-nas"
                className="hover:text-orange transition-colors duration-150"
              >
                Nasza Historia
              </a>
              <a
                href="#opinie"
                className="hover:text-orange transition-colors duration-150"
              >
                Opinie Klientów
              </a>
              <a
                href="#kontakt"
                className="hover:text-orange transition-colors duration-150"
              >
                Lokalizacja
              </a>
            </div>
          </div>

          {/* Quick Contact & Details */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="font-serif font-bold text-cream text-base tracking-tight uppercase">
              Dane Bar Obiadowego
            </h4>
            <ul className="space-y-3.5 text-xs font-semibold">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4.5 h-4.5 text-orange shrink-0 mt-0.5" />
                <span className="leading-relaxed">{BAR_INFO.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4.5 h-4.5 text-orange shrink-0" />
                <a
                  href={`tel:${BAR_INFO.phone.replace(/\s+/g, "")}`}
                  className="hover:underline font-mono text-orange"
                >
                  {BAR_INFO.phone}
                </a>
              </li>
            </ul>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={BAR_INFO.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-cream/5 hover:bg-orange hover:text-white rounded-full text-cream transition-colors duration-200"
                title="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom copyright row with a SINGLE heart icon representing Dobry Klimat */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-semibold text-text-pale/60 text-center sm:text-left">
          <p>© {currentYear} Dobry Klimat - Domowe Obiady. Wszystkie prawa zastrzeżone.</p>
        </div>

      </div>
    </footer>
  );
}

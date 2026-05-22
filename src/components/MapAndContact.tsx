/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BAR_INFO } from "../data";
import { MapPin, Phone, Mail, Copy, Check } from "lucide-react";
import { useState } from "react";

export default function MapAndContact() {
  const [copiedText, setCopiedText] = useState<string | null>(null);

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(label);
    setTimeout(() => setCopiedText(null), 2000);
  };

  return (
    <section id="kontakt" className="py-20 bg-linen-crosshatch overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
          
          {/* Left Side: Editorial Contact & Raw details */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-orange font-bold block mb-3 animate-pulse">
                [ Skontaktuj Się ]
              </span>
              <h2 className="font-serif font-extrabold text-[#1E3A5F] text-3xl sm:text-5xl tracking-tight leading-tight">
                Zjedzmy Coś<br />Dobrego!
              </h2>
              <p className="font-sans text-text-muted mt-4 text-base leading-relaxed">
                Mieścimy się w przytulnym zakątku Lubina przy ulicy Topolowej. Możesz u nas zjeść na miejscu w swojskiej atmosferze, odebrać obiad osobiście lub zarezerwować większe zamówienie telefonicznie. Dobry kontakt to podstawa!
              </p>
            </div>

            {/* Address, Phone, Email Raw layout blocks */}
            <div className="space-y-6 pt-4">
              
              {/* Address block */}
              <div className="p-4 bg-bg-section/60 rounded-md border border-[#1E3A5F]/5 flex items-start gap-4 hover:bg-bg-section transition-colors duration-200">
                <div className="p-2 bg-orange/10 rounded-full text-orange shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="flex-grow min-w-0">
                  <h4 className="font-serif font-bold text-navy text-base leading-tight">Nasz Swojski Adres:</h4>
                  <p className="font-sans text-sm text-text mt-1">{BAR_INFO.address}</p>
                </div>
                <button
                  onClick={() => handleCopy(BAR_INFO.address, "address")}
                  className="p-1 text-navy-light hover:text-orange transition-colors shrink-0"
                  title="Kopiuj adres"
                >
                  {copiedText === "address" ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Phone Block */}
              <div className="p-4 bg-bg-section/60 rounded-md border border-[#1E3A5F]/5 flex items-start gap-4 hover:bg-bg-section transition-colors duration-200">
                <div className="p-2 bg-orange/10 rounded-full text-orange shrink-0 mt-0.5">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="flex-grow min-w-0">
                  <h4 className="font-serif font-bold text-navy text-base leading-tight">Zamów Telefonicznie / Rezerwacje:</h4>
                  <a
                    href={`tel:${BAR_INFO.phone.replace(/\s+/g, "")}`}
                    className="font-mono text-lg text-orange font-bold mt-1 block hover:underline"
                  >
                    {BAR_INFO.phone}
                  </a>
                </div>
                <button
                  onClick={() => handleCopy(BAR_INFO.phone, "phone")}
                  className="p-1 text-navy-light hover:text-orange transition-colors shrink-0"
                  title="Kopiuj numer telefonu"
                >
                  {copiedText === "phone" ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Email Block */}
              <div className="p-4 bg-bg-section/60 rounded-md border border-[#1E3A5F]/5 flex items-start gap-4 hover:bg-bg-section transition-colors duration-200">
                <div className="p-2 bg-orange/10 rounded-full text-orange shrink-0 mt-0.5">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="flex-grow min-w-0">
                  <h4 className="font-serif font-bold text-navy text-base leading-tight">Napisz Do Nas E-mail:</h4>
                  <a
                    href={`mailto:${BAR_INFO.email}`}
                    className="font-sans text-sm text-navy font-semibold hover:underline block mt-1 truncate"
                  >
                    {BAR_INFO.email}
                  </a>
                </div>
                <button
                  onClick={() => handleCopy(BAR_INFO.email, "email")}
                  className="p-1 text-navy-light hover:text-orange transition-colors shrink-0"
                  title="Kopiuj email"
                >
                  {copiedText === "email" ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

            </div>

            <div className="text-xs text-text-muted italic border-l-2 border-[#1E3A5F]/15 pl-4">
              Zadzwoń do nas przed przyjazdem, chętnie przygotujemy Twoje ulubione danie na wyznaczoną godzinę do odbioru!
            </div>
          </div>

          {/* Right Side: High Fidelity, Custom Framed Map Embed */}
          <div className="lg:col-span-7 flex flex-col items-stretch relative">
            <div className="absolute inset-0 bg-orange/5 rounded-lg -z-10 translate-x-1.5 translate-y-1.5" />
            
            <div className="w-full h-full bg-cream p-1.5 sm:p-2 border border-[#1E3A5F]/10 rounded-lg shadow-xl overflow-hidden aspect-[4/3] relative">
              
              {/* Actual Google Maps Iframe Embed provided directly by the user */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39827.046322191054!2d16.152742364629262!3d51.399556231391145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470f6f45a70cac23%3A0x9c193949b33c2682!2sDobry%20Klimat%20Domowe%20Obiady!5e0!3m2!1spl!2spl!4v1779431383454!5m2!1spl!2spl"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-md filter saturate-[0.85] contrast-[1.03]"
                title="Lokalizacja Dobry Klimat - Domowe Obiady, Lubin"
              ></iframe>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

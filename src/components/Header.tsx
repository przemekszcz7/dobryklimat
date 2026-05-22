/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { BAR_INFO } from "../data";
import { Facebook, Phone, MapPin, Menu as MenuIcon, X } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 90;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <>
      {/* Topmost orange accent line */}
      <div className="h-[6px] w-full bg-orange sticky top-0 z-50 shrink-0" />

      <header
        className={`fixed top-[6px] left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-[#1E3A5F]/95 backdrop-blur-md shadow-lg border-b border-[#2A527A]/30 py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo / Brand Name */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex items-center gap-3 group"
          >
            <img
              src={BAR_INFO.logoUrl}
              alt="Logo Dobry Klimat"
              referrerPolicy="no-referrer"
              className="w-10 h-10 rounded-full border border-orange/40 object-cover shadow-sm transition-transform duration-300 group-hover:scale-105"
            />
            <div className="leading-tight">
              <span className="font-handwritten text-2xl tracking-wide text-orange block -mb-1 select-none">
                Dobry Klimat
              </span>
              <span
                className={`text-xs font-serif uppercase tracking-wider font-semibold block transition-colors duration-300 ${
                  isScrolled ? "text-cream-deep" : "text-navy"
                }`}
              >
                Domowe Obiady
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("menu")}
              className={`font-sans font-semibold text-sm tracking-wider hover:text-orange transition-colors duration-150 cursor-pointer ${
                isScrolled ? "text-cream" : "text-navy"
              }`}
            >
              MENU
            </button>
            <button
              onClick={() => scrollToSection("danie-dnia")}
              className={`font-sans font-semibold text-sm tracking-wider hover:text-orange transition-colors duration-150 cursor-pointer ${
                isScrolled ? "text-cream" : "text-navy"
              }`}
            >
              DANIE DNIA
            </button>
            <button
              onClick={() => scrollToSection("o-nas")}
              className={`font-sans font-semibold text-sm tracking-wider hover:text-orange transition-colors duration-150 cursor-pointer ${
                isScrolled ? "text-cream" : "text-navy"
              }`}
            >
              O NAS
            </button>
            <button
              onClick={() => scrollToSection("opinie")}
              className={`font-sans font-semibold text-sm tracking-wider hover:text-orange transition-colors duration-150 cursor-pointer ${
                isScrolled ? "text-cream" : "text-navy"
              }`}
            >
              OPINIE
            </button>
            <button
              onClick={() => scrollToSection("kontakt")}
              className={`font-sans font-semibold text-sm tracking-wider hover:text-orange transition-colors duration-150 cursor-pointer ${
                isScrolled ? "text-cream" : "text-navy"
              }`}
            >
              KONTAKT
            </button>
          </nav>

          {/* Facebook Link & Phone CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={BAR_INFO.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2 rounded-full border hover:bg-orange hover:text-cream cursor-pointer transition-all duration-300 ${
                isScrolled
                  ? "border-cream/20 text-cream"
                  : "border-navy/10 text-navy"
              }`}
              title="Odwiedź nas na Facebooku"
            >
              <Facebook className="w-4.5 h-4.5" />
            </a>
            <a
              href={`tel:${BAR_INFO.phone.replace(/\s+/g, "")}`}
              className="px-4 py-2 bg-orange hover:bg-orange-deep text-cream text-xs font-mono font-semibold tracking-wider rounded-md flex items-center gap-2 group transition-all duration-300 shadow-sm"
            >
              <Phone className="w-3.5 h-3.5 group-hover:rotate-12 transition-transform duration-200" />
              <span>{BAR_INFO.phone}</span>
            </a>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex md:hidden items-center gap-3">
            <a
              href={BAR_INFO.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2 rounded-full border cursor-pointer ${
                isScrolled
                  ? "border-cream/20 text-cream"
                  : "border-navy/10 text-navy"
              }`}
            >
              <Facebook className="w-4 h-4" />
            </a>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 cursor-pointer transition-colors duration-200 ${
                isScrolled ? "text-cream" : "text-navy"
              }`}
              aria-label="Menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <MenuIcon className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 top-[60px] z-30 bg-bg-dark/95 backdrop-blur-md md:hidden flex flex-col justify-start p-8 pt-12 animate-fade-in">
          <nav className="flex flex-col gap-6 text-center">
            <button
              onClick={() => scrollToSection("menu")}
              className="text-2xl font-serif font-bold text-cream hover:text-orange transition-colors"
            >
              MENU OBIADOWE
            </button>
            <button
              onClick={() => scrollToSection("danie-dnia")}
              className="text-2xl font-serif font-bold text-cream hover:text-orange transition-colors"
            >
              DANIE DNIA
            </button>
            <button
              onClick={() => scrollToSection("o-nas")}
              className="text-2xl font-serif font-bold text-cream hover:text-orange transition-colors"
            >
              O NAS
            </button>
            <button
              onClick={() => scrollToSection("opinie")}
              className="text-2xl font-serif font-bold text-cream hover:text-orange transition-colors"
            >
              CO MÓWIĄ INNI
            </button>
            <button
              onClick={() => scrollToSection("kontakt")}
              className="text-2xl font-serif font-bold text-cream hover:text-orange transition-colors"
            >
              ZNAJDŹ NAS
            </button>
          </nav>

          <div className="mt-12 pt-8 border-t border-cream/15 flex flex-col items-center gap-6">
            <div className="flex items-center gap-2 text-cream-deep text-sm font-semibold tracking-wide">
              <MapPin className="w-4 h-4 text-orange" />
              <span>{BAR_INFO.address}</span>
            </div>

            <a
              href={`tel:${BAR_INFO.phone.replace(/\s+/g, "")}`}
              className="w-full max-w-xs py-3.5 bg-orange text-cream text-center font-bold tracking-wider rounded-md flex items-center justify-center gap-3 shadow-md"
            >
              <Phone className="w-4 h-4" />
              Zadzwoń: {BAR_INFO.phone}
            </a>
          </div>
        </div>
      )}
    </>
  );
}

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from "./components/Header";
import Hero from "./components/Hero";
import ProsePillars from "./components/ProsePillars";
import Menu from "./components/Menu";
import DanieDnia from "./components/DanieDnia";
import ONas from "./components/ONas";
import Godziny from "./components/Godziny";
import Opinie from "./components/Opinie";
import MapAndContact from "./components/MapAndContact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="bg-bg text-text min-h-screen flex flex-col selection:bg-orange/20 selection:text-orange">
      {/* 6px Orange top line + Floating navbar */}
      <Header />

      {/* Main Sections */}
      <main className="flex-grow animate-fade-in">
        {/* Editorial Hero Layout with Left-Aligned Intro */}
        <Hero />

        {/* Prose Columns detailing our Core Philosophies */}
        <ProsePillars />

        {/* Home Style Daily Blackboard Special Grid Accent */}
        <DanieDnia />

        {/* Slate Blackboard Menu List */}
        <Menu />

        {/* Personal 60/40 Asymmetrical History Piece */}
        <ONas />

        {/* Staggered Editorial Testimonials from Facebook links */}
        <Opinie />

        {/* Minimalist Decoration-Free Hours Grid */}
        <Godziny />

        {/* Interactive map, raw address, copyable information panel */}
        <MapAndContact />
      </main>

      {/* Footer with Orange Accent Border & single pulse heart */}
      <Footer />
    </div>
  );
}

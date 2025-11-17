import React from "react";
import Hero from "./components/Hero";
import Features from "./components/Features";
import SocialProof from "./components/SocialProof";
import Gallery from "./components/Gallery";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <header className="sticky top-0 z-20 w-full border-b border-zinc-200 bg-white/80 backdrop-blur">
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 rounded bg-zinc-900" />
            <span className="text-sm font-semibold">GlassCard</span>
          </div>
          <nav className="hidden sm:flex items-center gap-6 text-sm text-zinc-600">
            <a href="#features" className="hover:text-zinc-900">Features</a>
            <a href="#pricing" className="hover:text-zinc-900">Pricing</a>
            <a href="#faq" className="hover:text-zinc-900">FAQ</a>
          </nav>
        </div>
      </header>

      <main>
        <section id="hero"><Hero /></section>
        <section id="features"><Features /></section>
        <section id="social"><SocialProof /></section>
        <section id="gallery"><Gallery /></section>
        <section id="pricing"><Pricing /></section>
        <section id="faq"><FAQ /></section>
      </main>

      <Footer />
    </div>
  );
}

export default App;

import React from 'react';
import Hero from './components/Hero';
import FeaturedCars from './components/FeaturedCars';
import Categories from './components/Categories';
import AboutContact from './components/AboutContact';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Top bar */}
      <header className="sticky top-0 z-20 w-full border-b border-white/10 bg-black/70 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-md bg-[#ff0000] text-black font-extrabold">KD</div>
            <div className="text-lg font-bold tracking-tight">Kay's Drive</div>
          </div>
          <nav className="hidden items-center gap-6 text-sm text-white/80 md:flex">
            <a href="#featured" className="hover:text-white">Featured</a>
            <a href="#categories" className="hover:text-white">Categories</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
          <a
            href="https://wa.me/233200000000"
            target="_blank"
            rel="noreferrer"
            className="rounded-lg bg-[#ff0000] px-4 py-2 text-sm font-semibold text-black transition hover:brightness-110"
          >
            WhatsApp
          </a>
        </div>
      </header>

      <main>
        <Hero />
        <div id="featured"><FeaturedCars /></div>
        <div id="categories"><Categories /></div>
        <div id="contact"><AboutContact /></div>
      </main>

      <footer className="border-t border-white/10 bg-black/80 py-8 text-white/70">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 sm:flex-row">
          <p>© {new Date().getFullYear()} Kay's Drive. All rights reserved.</p>
          <div className="text-sm">
            Built with passion for Ghana's car community.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

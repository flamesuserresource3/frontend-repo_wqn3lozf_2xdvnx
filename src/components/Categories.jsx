import React from 'react';
import { Car } from 'lucide-react';

const categories = [
  { name: 'SUV', image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxTVVZ8ZW58MHwwfHx8MTc2MjE5MzgzOHww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80' },
  { name: 'Sedan', image: 'https://images.unsplash.com/photo-1556189250-72ba954cfc2b?q=80&w=1600&auto=format&fit=crop' },
  { name: 'Pickup', image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxTVVZ8ZW58MHwwfHx8MTc2MjE5MzgzOHww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80' },
  { name: 'Coupe', image: 'https://images.unsplash.com/photo-1483721310020-03333e577078?q=80&w=1600&auto=format&fit=crop' },
  { name: 'Hatchback', image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxTVVZ8ZW58MHwwfHx8MTc2MjE5MzgzOHww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80' },
];

export default function Categories() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-14">
      <h2 className="text-2xl font-bold text-white sm:text-3xl">Browse by Category</h2>
      <p className="mt-1 text-white/70">Explore vehicles that match your lifestyle.</p>

      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {categories.map((cat) => (
          <a key={cat.name} href="#" className="group relative block overflow-hidden rounded-xl border border-white/10 bg-zinc-900/50 shadow">
            <img src={cat.image} alt={cat.name} className="h-40 w-full object-cover transition duration-500 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
            <div className="absolute inset-0 flex items-end p-4">
              <div className="flex items-center gap-2 text-white">
                <span className="rounded-md bg-[#ff0000] p-1 text-black"><Car size={16} /></span>
                <span className="text-sm font-semibold">{cat.name}</span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

import React from 'react';
import { Car, ChevronRight } from 'lucide-react';

const cars = [
  {
    id: 1,
    title: '2021 Toyota RAV4',
    brand: 'Toyota',
    model: 'RAV4',
    price: 'GHS 350,000',
    mileage: '18,000 km',
    transmission: 'Automatic',
    fuel: 'Petrol',
    image: 'https://images.unsplash.com/photo-1590362891991-f776e747a588?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 2,
    title: '2020 BMW 3 Series',
    brand: 'BMW',
    model: '320i',
    price: 'GHS 520,000',
    mileage: '24,000 km',
    transmission: 'Automatic',
    fuel: 'Petrol',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 3,
    title: '2019 Nissan Navara',
    brand: 'Nissan',
    model: 'Navara',
    price: 'GHS 270,000',
    mileage: '45,000 km',
    transmission: 'Manual',
    fuel: 'Diesel',
    image: 'https://images.unsplash.com/photo-1583870911597-9f8760c4a980?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHwyMDIyJTIwTWVyY2VkZXMlMjBHTEN8ZW58MHwwfHx8MTc2MjE5MzgzN3ww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
  {
    id: 4,
    title: '2022 Mercedes GLC',
    brand: 'Mercedes-Benz',
    model: 'GLC 300',
    price: 'GHS 780,000',
    mileage: '8,000 km',
    transmission: 'Automatic',
    fuel: 'Petrol',
    image: 'https://images.unsplash.com/photo-1695740633675-d060b607f5c4?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjIxNzI2NDR8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
];

function CarCard({ car }) {
  return (
    <div className="group relative w-80 shrink-0 overflow-hidden rounded-xl border border-white/10 bg-zinc-900/60 text-white shadow-lg backdrop-blur">
      <div className="relative h-48 w-full overflow-hidden">
        <img src={car.image} alt={car.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
      </div>
      <div className="space-y-2 p-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">{car.title}</h3>
          <span className="rounded-md bg-[#ff0000] px-2 py-1 text-xs font-bold text-black">{car.price}</span>
        </div>
        <div className="text-sm text-white/70">
          {car.brand} • {car.model}
        </div>
        <div className="mt-2 grid grid-cols-3 gap-2 text-xs text-white/60">
          <div>Mileage<br/><span className="text-white/90">{car.mileage}</span></div>
          <div>Transmission<br/><span className="text-white/90">{car.transmission}</span></div>
          <div>Fuel<br/><span className="text-white/90">{car.fuel}</span></div>
        </div>
        <button className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm font-medium text-white transition hover:border-[#ff0000] hover:bg-[#ff0000]/10">
          <Car size={16} /> View Details
        </button>
      </div>
    </div>
  );
}

export default function FeaturedCars() {
  return (
    <section className="relative mx-auto max-w-7xl px-6 py-16">
      <div className="mb-6 flex items-end justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white sm:text-3xl">Featured Cars</h2>
          <p className="mt-1 text-white/70">Handpicked vehicles ready for a test drive.</p>
        </div>
        <a href="#" className="inline-flex items-center gap-1 text-sm font-semibold text-[#ff0000] hover:underline">
          View all <ChevronRight size={16} />
        </a>
      </div>

      <div className="no-scrollbar flex gap-4 overflow-x-auto py-2">
        {cars.map((c) => (
          <CarCard key={c.id} car={c} />
        ))}
      </div>
    </section>
  );
}

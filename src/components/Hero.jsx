import React from 'react';
import Spline from '@splinetool/react-spline';
import { Search, MapPin } from 'lucide-react';

const brands = [
  'Toyota',
  'Nissan',
  'Hyundai',
  'Kia',
  'BMW',
  'Mercedes-Benz',
  'Honda',
];

const modelsByBrand = {
  Toyota: ['Corolla', 'Camry', 'RAV4', 'Land Cruiser'],
  Nissan: ['Sentra', 'Altima', 'Rogue', 'Navara'],
  Hyundai: ['Elantra', 'Sonata', 'Tucson', 'Santa Fe'],
  Kia: ['Rio', 'Cerato', 'Sportage', 'Sorento'],
  BMW: ['3 Series', '5 Series', 'X3', 'X5'],
  'Mercedes-Benz': ['C-Class', 'E-Class', 'GLC', 'GLE'],
  Honda: ['Civic', 'Accord', 'CR-V', 'Pilot'],
};

export default function Hero() {
  const [brand, setBrand] = React.useState('Toyota');
  const [model, setModel] = React.useState(modelsByBrand['Toyota'][0]);
  const [price, setPrice] = React.useState(50000);
  const [location, setLocation] = React.useState('Accra');

  React.useEffect(() => {
    const models = modelsByBrand[brand] || [];
    if (!models.includes(model)) {
      setModel(models[0]);
    }
  }, [brand]);

  const onSearch = (e) => {
    e.preventDefault();
    // Placeholder for future navigation to listings with filters
    console.log({ brand, model, price, location });
  };

  return (
    <section className="relative h-[85vh] w-full overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/m8wpIQzXWhEh9Yek/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Readability overlays */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/90" />
      <div className="pointer-events-none absolute inset-0" style={{ boxShadow: 'inset 0 0 200px rgba(0,0,0,0.6)' }} />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-start justify-center px-6">
        <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur">
          <span className="h-2 w-2 rounded-full bg-[#ff0000]" />
          <span className="text-sm text-white/80">Luxury, bold, professional</span>
        </div>

        <h1 className="mt-6 text-4xl font-black tracking-tight sm:text-6xl">
          Kay's Drive
          <span className="block bg-gradient-to-r from-[#ff0000] to-white bg-clip-text text-transparent">
            Your premium car destination in Ghana
          </span>
        </h1>

        <p className="mt-4 max-w-2xl text-white/80">
          Browse, search, and drive home your next car. Curated listings with
          dynamic filters for brand and model.
        </p>

        <form
          onSubmit={onSearch}
          className="mt-8 w-full max-w-4xl rounded-xl border border-white/10 bg-black/50 p-4 backdrop-blur"
        >
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-5">
            <div className="col-span-1 sm:col-span-2">
              <label className="mb-1 block text-xs uppercase tracking-wide text-white/60">
                Brand
              </label>
              <select
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
                className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-white outline-none focus:border-[#ff0000]"
              >
                {brands.map((b) => (
                  <option key={b} value={b} className="bg-black">
                    {b}
                  </option>
                ))}
              </select>
            </div>

            <div className="col-span-1 sm:col-span-2">
              <label className="mb-1 block text-xs uppercase tracking-wide text-white/60">
                Model
              </label>
              <select
                value={model}
                onChange={(e) => setModel(e.target.value)}
                className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-white outline-none focus:border-[#ff0000]"
              >
                {(modelsByBrand[brand] || []).map((m) => (
                  <option key={m} value={m} className="bg-black">
                    {m}
                  </option>
                ))}
              </select>
            </div>

            <div className="col-span-1 sm:col-span-1">
              <label className="mb-1 block text-xs uppercase tracking-wide text-white/60">
                Max Price (GHS)
              </label>
              <input
                type="number"
                value={price}
                onChange={(e) => setPrice(Number(e.target.value))}
                className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-white outline-none focus:border-[#ff0000]"
                placeholder="50000"
                min={0}
              />
            </div>

            <div className="col-span-1 sm:col-span-5 flex items-end gap-2">
              <div className="flex-1">
                <label className="mb-1 block text-xs uppercase tracking-wide text-white/60">
                  Location
                </label>
                <div className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-white">
                  <MapPin size={18} className="text-white/70" />
                  <input
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="Accra, Kumasi, Takoradi..."
                    className="w-full bg-transparent outline-none placeholder:text-white/50"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="mt-6 inline-flex items-center justify-center gap-2 rounded-lg bg-[#ff0000] px-5 py-3 font-semibold text-black transition hover:brightness-110 sm:mt-0"
              >
                <Search size={18} />
                Search Cars
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

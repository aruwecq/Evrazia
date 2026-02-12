import React from 'react';
import { motion } from 'framer-motion';
import { Heart, ShoppingBag, Trash2 } from 'lucide-react';
import izbzf from '../../img/izbf.png';

export function Favorites() {
  const fakeFavorites = [
    {
      id: 1,
      name: "VERSACE Exclusive Piece",
      price: 599,
      image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=1000&auto=format&fit=crop"
    },
    {
      id: 2,
      name: "GUCCI Luxury Bag",
      price: 1200,
      image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=1000&auto=format&fit=crop"
    },
    {
      id: 3,
      name: "PRADA Classic Coat",
      price: 850,
      image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=1000&auto=format&fit=crop"
    },
    {
      id: 4,
      name: "ZARA Urban Style",
      price: 199,
      image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?q=80&w=1000&auto=format&fit=crop"
    }
  ];

  return (
    <div className="relative min-h-screen overflow-hidden">

      {/* BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${izbzf})`,
        }}
      />

      {/* DARK OVERLAY - Арткы фонду бир аз караңгылатуучу катмар */}
      <div className="absolute inset-0 bg-black/40" />

      {/* CONTENT */}
      <div className="relative z-10 pt-22 pb-20 px-4">
        <div className="max-w-7xl mx-auto">

          {/* TITLE */}
          <div className="mb-16">
<h1 className="text-4xl font-black uppercase tracking-[0.2em] text-[#0A1F44] text-center drop-shadow-[0_0_15px_rgba(10,31,68,0.6)]">
  Избранные
</h1>

          </div>

          {/* GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {fakeFavorites.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white/95 backdrop-blur rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
              >
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4">
                    <button className="p-2 bg-white/90 rounded-full text-red-500 shadow-md hover:bg-red-50 transition-colors">
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="font-bold text-lg mb-1 truncate">
                    {item.name}
                  </h3>
                  <p className="text-2xl font-black text-blue-600 mb-4">
                    ${item.price}
                  </p>

                  <button className="w-full bg-black text-white py-3 rounded-xl font-bold uppercase text-xs tracking-widest flex items-center justify-center gap-2 hover:bg-zinc-800 transition-colors">
                    <ShoppingBag size={16} /> В корзину
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* EMPTY */}
          {fakeFavorites.length === 0 && (
            <div className="text-center py-20">
              <Heart size={64} className="mx-auto text-white/50 mb-6" />
              <h2 className="text-2xl font-bold text-white/70">
                У вас пока нет избранных товаров.
              </h2>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
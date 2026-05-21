import { ShoppingBag } from 'lucide-react';
import { FadeInUp, LetterReveal } from './ScrollEffects';

const products = [
  {
    id: 1,
    name: 'Amethyst Crystal Cluster',
    price: '$45',
    image: 'https://images.unsplash.com/photo-1550136513-548af4445338?q=80&w=1748&auto=format&fit=crop',
    category: 'Crystals',
  },
  {
    id: 2,
    name: 'Sage & Palo Santo Bundle',
    price: '$22',
    image: 'https://images.unsplash.com/photo-1608681295982-2a543591451f?q=80&w=1740&auto=format&fit=crop',
    category: 'Cleansing',
  },
  {
    id: 3,
    name: 'Essential Oil Blend - Calm',
    price: '$28',
    image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?q=80&w=1887&auto=format&fit=crop',
    category: 'Aromatherapy',
  },
  {
    id: 4,
    name: 'Tibetan Singing Bowl',
    price: '$85',
    image: 'https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?q=80&w=1740&auto=format&fit=crop',
    category: 'Sound Healing',
  },
];

export default function Shop() {
  return (
    <section id="shop" className="py-24 relative overflow-hidden bg-white">
      {/* Botanical/Ethereal Shop Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-beige-50/50 to-beige-100/50"></div>
        <motion.div
           animate={{ scale: [1, 1.05, 1], rotate: [0, -3, 0], opacity: [0.3, 0.5, 0.3] }}
           transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
           className="absolute -top-[10%] -left-[20%] w-[800px] h-[800px] bg-gold-200/20 rounded-full blur-[100px]"
        />
        <motion.div
           animate={{ scale: [1, 1.1, 1], y: [0, 20, 0], opacity: [0.2, 0.4, 0.2] }}
           transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
           className="absolute top-[40%] -right-[15%] w-[600px] h-[600px] bg-sage-300/20 rounded-full blur-[120px]"
        />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-serif text-sage-900 mb-6">
              <LetterReveal text="Wellness Shop" />
            </h2>
            <FadeInUp delay={0.2}>
              <p className="text-lg text-charcoal-800 font-light leading-relaxed">
                Curated items to support your healing journey at home. Ethically sourced and energetically cleansed.
              </p>
            </FadeInUp>
          </div>
          <FadeInUp delay={0.4}>
            <a href="#" className="inline-flex items-center text-sage-700 font-medium hover:text-sage-900 transition-colors group">
              View All Products 
              <ShoppingBag className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
            </a>
          </FadeInUp>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div key={product.id}>
              <FadeInUp delay={index * 0.15}>
                <div className="group cursor-pointer relative">
                  {/* Enhanced Hover Glow */}
                  <div className="absolute -inset-4 bg-gradient-to-r from-gold-400/0 via-gold-400/5 to-gold-400/0 rounded-[2.5rem] opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-700 pointer-events-none"></div>
                  
                  <div className="relative overflow-hidden rounded-3xl aspect-[4/5] mb-6 bg-white shadow-sm border border-transparent group-hover:border-gold-400/20 transition-colors duration-500">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-sage-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-[2px]">
                      <button className="btn-gold-hover bg-white text-sage-900 px-8 py-4 rounded-full font-medium transform translate-y-8 group-hover:translate-y-0 transition-all duration-500 shadow-xl">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                  <div className="px-2 relative z-10">
                    <div className="text-xs font-medium text-sage-500 uppercase tracking-widest mb-2">
                      {product.category}
                    </div>
                    <h3 className="text-xl font-serif text-sage-900 mb-2 group-hover:text-sage-600 transition-colors">{product.name}</h3>
                    <p className="text-charcoal-800 font-medium">{product.price}</p>
                  </div>
                </div>
              </FadeInUp>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

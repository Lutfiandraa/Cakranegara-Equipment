import type { FleetItem } from '../types/fleet';

const fleet: FleetItem[] = [
  {
    id: 'articulate',
    name: 'Articulate Caterpillar',
    image: '/articulatecat.png',
    category: 'Dump Truck',
    description: 'Truk jungkit artikulasi untuk pertambangan.',
  },
  {
    id: 'loader',
    name: 'Loader CAT 994H',
    image: '/loadercat.png',
    category: 'Wheel Loader',
    description: 'Loader roda besar untuk operasi pertambangan.',
  },
  {
    id: 'dumptruck',
    name: 'Dump Truck Caterpillar',
    image: '/dumptruckcat.png',
    category: 'Dump Truck',
    description: 'Truk dump rigid off-highway untuk material berat.',
  },
  {
    id: 'excavator',
    name: 'Excavator Caterpillar',
    image: '/excapillar.png',
    category: 'Excavator',
    description: 'Excavator hidraulik dengan pilihan bucket.',
  },
  {
    id: 'drill',
    name: 'MD6640 Rotary Drill',
    image: '/drilling.png',
    category: 'Drilling',
    description: 'Rotary drill terbesar untuk pertambangan.',
  },
  {
    id: 'undertage',
    name: 'R1700 Underground Loader',
    image: '/undertage.png',
    category: 'Underground',
    description: 'Loader tambang bawah tanah untuk hard rock.',
  },
];

export default function FleetGrid() {
  return (
    <section className="py-16 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-equipment-black">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div data-animate="" className="fade-up text-center mb-12 md:mb-16">
          <p className="font-display uppercase tracking-[0.3em] text-equipment-gold text-xs mb-3">
            Our Fleet
          </p>
          <h2 className="font-display font-bold text-equipment-text-primary text-3xl sm:text-4xl md:text-5xl uppercase">
            Heavy Equipment Collection
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {fleet.map((item, index) => (
            <a
              key={item.id}
              href="/company"
              data-animate=""
              data-delay={`${(index % 3) * 100}`}
              className="fade-up group block bg-equipment-card border border-white/5 overflow-hidden hover:-translate-y-1 hover:border-equipment-gold/30 transition-all duration-300"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-5 md:p-6">
                <p className="font-body text-equipment-text-muted text-xs uppercase tracking-wider mb-1">
                  {item.category}
                </p>
                <h3 className="font-display font-bold text-equipment-text-primary text-lg md:text-xl uppercase mb-2">
                  {item.name}
                </h3>
                <p className="font-body text-equipment-text-muted text-sm leading-relaxed mb-4">
                  {item.description}
                </p>
                <span className="inline-flex items-center gap-1 font-display uppercase tracking-widest text-equipment-gold text-xs group-hover:gap-2 transition-all duration-300">
                  Lihat Spesifikasi <span aria-hidden="true">→</span>
                </span>
              </div>
            </a>
          ))}
        </div>

        {/* View Full Catalog link */}
        <div data-animate="" className="fade-up text-center mt-12 md:mt-16">
          <a
            href="/company"
            className="btn-secondary inline-block"
          >
            Hubungi Kami
          </a>
        </div>
      </div>
    </section>
  );
}

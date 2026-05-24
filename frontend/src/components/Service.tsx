export default function Service() {
  const services = [
    {
      id: '1',
      label: 'jual sparepart alat berat',
      title: 'Penjualan Spare Part Suku Cadang',
      description:
        'Kami menyediakan berbagai macam spare part asli dan suku cadang alat berat lainnya yang terjamin kualitasnya.',
      features: [
        'Produk original dan bergaransi',
        'Ketersediaan lengkap untuk berbagai jenis mesin',
        'Dukungan tim sales yang siap membantu Anda memilih spare part sesuai kebutuhan',
      ],
      closing:
        'Dengan suku cadang berkualitas, performa mesin alat berat Anda akan lebih terjaga dan tahan lama.',
    },
    {
      id: '2',
      label: 'service & maintenance',
      title: 'Service & Maintenance',
      description:
        'Layanan perawatan dan perbaikan alat berat yang ditangani langsung oleh teknisi berpengalaman.',
      features: [
        'Perbaikan cepat dan tepat',
        'Menggunakan peralatan modern',
        'Jaminan hasil kerja yang optimal',
      ],
      closing:
        'Kami memastikan setiap unit alat berat Anda tetap berfungsi dengan performa terbaik, sehingga operasional proyek berjalan lancar tanpa hambatan.',
    },
    {
      id: '3',
      label: 'kontrak',
      title: 'Kontrak Maintenance & Services',
      description:
        'Bagi perusahaan yang membutuhkan perawatan rutin, kami menyediakan solusi kontrak service dengan skema yang fleksibel.',
      features: [
        'Perawatan berkala sesuai jadwal',
        'Efisiensi biaya dan waktu',
        'Menjamin alat berat selalu dalam kondisi prima',
      ],
      closing:
        'Dengan kontrak service, Anda tidak perlu khawatir akan downtime yang mengganggu produktivitas.',
    },
  ];

  const sectionClass = 'max-w-5xl mx-auto px-4 sm:px-6';

  return (
    <div className="bg-equipment-black">
      {/* Hero section */}
      <section
        id="1"
        className="relative flex flex-col items-center justify-center bg-equipment-black text-equipment-text-primary px-4 overflow-hidden pt-36 md:pt-44 pb-16 md:pb-24 min-h-[50vh] md:min-h-[60vh]"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,146,42,0.1)_0%,transparent_70%)]" />
        <div className="relative z-10 text-center max-w-3xl mx-auto w-full">
          <h1 data-reveal="up" data-delay="1" className="font-display text-4xl sm:text-5xl md:text-6xl font-bold mb-4 uppercase tracking-tight">
            Services
          </h1>
          <p data-reveal="up" data-delay="2" className="text-equipment-text-muted text-base md:text-lg max-w-xl mx-auto leading-relaxed">
            Solusi Rental, Suku Cadang, dan Pemeliharaan Equipment Terpercaya.
          </p>
        </div>
      </section>

      {/* Services List Section */}
      <section className="pt-16 md:pt-24 pb-8 md:pb-10 bg-[#111111] border-t border-white/5">
        <div className={sectionClass}>
          <div className="space-y-16 md:space-y-24">
            {services.map((srv) => (
              <article
                key={srv.id}
                id={srv.id}
                data-reveal="up"
                className="scroll-mt-24 bg-[#1A1A1A] border border-white/5 hover:border-equipment-gold/20 hover:bg-[#1A1A1A]/80 transition-all duration-300"
              >
                <div className="p-6 md:p-10 lg:p-12">
                  <p className="text-equipment-gold font-display uppercase tracking-widest text-xs mb-3">
                    {srv.label}
                  </p>
                  <h2 className="font-display text-2xl md:text-3xl uppercase font-bold text-equipment-text-primary mb-4">
                    {srv.title}
                  </h2>
                  <p className="text-equipment-text-muted leading-relaxed mb-6">{srv.description}</p>
                  <ul className="space-y-2.5 mb-6">
                    {srv.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-equipment-text-muted">
                        <span className="text-equipment-gold shrink-0 mt-0.5">•</span>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-equipment-text-muted leading-relaxed border-t border-white/5 pt-4 mt-4">{srv.closing}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 md:py-16 bg-[#111111]">
        <div className={sectionClass}>
          <div className="flex justify-center">
            <a
              data-reveal="up"
              href="/company"
              className="btn-primary"
            >
              Hubungi Kami
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

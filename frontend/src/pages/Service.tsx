export default function Service() {
  const services = [
    {
      id: '1',
      label: 'jual sparepart alat berat',
      title: 'Penjualan Spare Part Alat Berat',
      description:
        'Kami menyediakan berbagai macam spare part asli dan suku cadang alat berat lainnya yang terjamin kualitasnya.',
      features: [
        'Produk original dan bergaransi',
        'Ketersediaan lengkap untuk berbagai jenis mesin',
        'Dukungan tim sales yang siap membantu Anda memilih spare part sesuai kebutuhan',
      ],
      closing:
        'Dengan suku cadang berkualitas, performa mesin alat berat Anda akan lebih terjaga dan tahan lama.',
      cta: 'GET NOW',
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
      cta: 'GET NOW',
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
      cta: 'GET NOW',
    },
  ];

  const sectionClass = 'max-w-5xl mx-auto px-4 sm:px-6';

  return (
    <div className="bg-white">
      {/* Hero */}
      <section
        id="1"
        className="relative flex flex-col items-center justify-center bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white px-4 overflow-hidden pt-20 md:pt-24 pb-14 md:pb-20"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(245,158,11,0.12)_0%,transparent_70%)]" />
        <div className="relative z-10 text-center max-w-3xl mx-auto w-full">
          <h1 className="font-brand text-4xl md:text-5xl font-bold mb-3 tracking-tight">
            Services.
          </h1>
          <p className="text-slate-300 text-lg md:text-xl mb-8">
            Cakranegara – Solusi Rental & Part Alat Berat
          </p>
          <a
            href="/"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-amber-500 text-white font-semibold rounded-lg hover:bg-amber-600 transition-colors text-sm"
          >
            Shop Now
          </a>
        </div>
      </section>

      {/* Service cards */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className={sectionClass}>
          <div className="space-y-16 md:space-y-24">
            {services.map((srv) => (
              <article
                key={srv.id}
                id={srv.id}
                className="scroll-mt-24 bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden hover:shadow-md transition-shadow"
              >
                <div className="p-6 md:p-8 lg:p-10">
                  <p className="text-amber-500 font-semibold tracking-widest uppercase text-xs mb-3">
                    {srv.label}
                  </p>
                  <h2 className="font-brand text-2xl md:text-3xl font-bold text-slate-800 mb-4">
                    {srv.title}
                  </h2>
                  <p className="text-slate-600 leading-relaxed mb-6">{srv.description}</p>
                  <ul className="space-y-2 mb-6">
                    {srv.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-slate-600">
                        <span className="text-amber-500 shrink-0 mt-0.5">•</span>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-slate-600 leading-relaxed mb-8">{srv.closing}</p>
                  <a
                    href="/"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-amber-500 text-white font-semibold rounded-lg hover:bg-amber-600 transition-colors text-sm"
                  >
                    {srv.cta}
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

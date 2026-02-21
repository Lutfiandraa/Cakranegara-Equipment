export default function Tech() {
  const products = [
    {
      title: 'Pelacak Aset',
      description: 'Pelacak aset kami menyediakan pemantauan canggih untuk berbagai peralatan dan kendaraan.',
      features: ['Pelacakan GPS real-time', 'Pemantauan mesin termasuk jarak tempuh, utilisasi, dan lainnya', 'Geofencing dan notifikasi SMS kustom'],
      icon: (
        <svg className="w-10 h-10 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
    {
      title: 'App Controller',
      description: 'Kontrol armada dan tim dari genggaman Anda. Aplikasi mobile dengan menu lengkap untuk memantau durasi kerja armada dan pekerja di lapangan.',
      features: ['Cek durasi kerja armada dan pekerja', 'Pantau lokasi dan status unit real-time', 'Akses laporan dan riwayat dari mana saja'],
      icon: (
        <svg className="w-10 h-10 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: 'Dash Cam',
      description: 'Sistem kamera dual-view kami mendukung pencegahan kecelakaan real-time dan peringatan pemantauan pengemudi.',
      features: ['Kamera menghadap jalan dan pengemudi', 'Pantau mengemudi tidak fokus dan berbahaya', 'Peringatan visual dan audio'],
      icon: (
        <svg className="w-10 h-10 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 13v7a2 2 0 01-2 2H7a2 2 0 01-2-2v-7" />
        </svg>
      ),
    },
    {
      title: 'Tag Bluetooth',
      description: 'Perangkat teknologi Bluetooth untuk pelacakan lokasi perkakas, bucket, attachment, dan lainnya.',
      features: ['Visibilitas di lokasi', 'Mengurangi kehilangan alat', 'Menghemat waktu pengelolaan inventori secara manual'],
      icon: (
        <svg className="w-10 h-10 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
        </svg>
      ),
    },
  ];

  const industryIconClass = 'w-9 h-9 text-amber-600';
  const industries = [
    {
      name: 'Armada Konstruksi',
      description: 'Pelacakan real-time, alat perawatan, dan data penggunaan untuk armada campuran.',
      icon: (
        <svg className={industryIconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 17a2 2 0 11-4 0 2 2 0 014 0h6a2 2 0 11-4 0M3 12h13m-7-8h6l4 4v6" />
        </svg>
      ),
    },
    {
      name: 'Pembangun Komersial',
      description: 'Kelola jadwal, aset, dan kru dari persiapan lokasi hingga penyerahan akhir.',
      icon: (
        <svg className={industryIconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
    },
    {
      name: 'Kontraktor Sipil',
      description: 'Peralatan berat dan tim lapangan untuk proyek infrastruktur skala besar.',
      icon: (
        <svg className={industryIconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4-2v1.618a1 1 0 01-1.447.894L15 17m0-13V4m0 0V2m0 2h2m-2 0h-2m0 6h2m-2 0h-2m0 6h2m-2 0h-2" />
        </svg>
      ),
    },
    {
      name: 'Kontraktor Umum',
      description: 'Data peralatan, tenaga kerja, dan lokasi proyek terpusat agar proyek tepat waktu dan sesuai anggaran.',
      icon: (
        <svg className={industryIconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      ),
    },
    {
      name: 'Utilitas',
      description: 'Pengawasan operasional armada utilitas, dari truk bucket hingga loader.',
      icon: (
        <svg className={industryIconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
  ];

  const sectionClass = 'max-w-6xl mx-auto px-4 sm:px-6 lg:px-8';
  const sectionTitleClass = 'font-brand text-2xl md:text-3xl font-bold text-slate-800';
  const sectionSubtitleClass = 'text-slate-600 mt-2 max-w-2xl';

  return (
    <div className="bg-white">
      {/* Hero - same section size as Rent */}
      <section className="relative flex flex-col items-center justify-center bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white px-4 overflow-hidden pt-20 md:pt-24 pb-14 md:pb-20 min-h-[72vh] md:min-h-[80vh]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(245,158,11,0.12)_0%,transparent_70%)]" />
        <div className="relative z-10 text-center max-w-3xl mx-auto w-full">
          <p className="text-amber-400 font-semibold tracking-widest uppercase text-xs mb-5">
            Powered by Cakranegara Tech
          </p>
          <h1 className="font-brand text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-5 tracking-tight leading-tight">
            Cakranegara
          </h1>
          <p className="text-slate-300 text-base md:text-lg mb-8 max-w-xl mx-auto leading-relaxed">
            Integrate Software & Technology for safety management
          </p>
          <a
            href="#products"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-amber-500 text-white font-semibold rounded-lg hover:bg-amber-600 transition-colors text-sm"
          >
            Explore solutions
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
        </div>
      </section>

      {/* Products */}
      <section id="products" className="pt-10 md:pt-14 pb-12 md:pb-16 px-4 bg-white border-t border-slate-200">
        <div className={sectionClass}>
          <header className="text-center mb-12 md:mb-16">
            <h2 className={sectionTitleClass}>
              Solusi Teknologi Cakranegara
            </h2>
          </header>
          <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
            {products.map((product) => (
              <article
                key={product.title}
                className="flex flex-col p-6 md:p-7 rounded-xl border border-slate-200 bg-slate-50/50 hover:border-amber-300/60 hover:bg-amber-50/20 transition-all"
              >
                <div className="mb-4">{product.icon}</div>
                <h3 className="text-lg font-bold text-slate-800 mb-2">{product.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-5 flex-1">{product.description}</p>
                <ul className="space-y-1.5 mb-5">
                  {product.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-slate-600 text-sm">
                      <span className="text-amber-500 shrink-0 mt-0.5">•</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <a href="/company" className="text-amber-600 font-semibold text-sm hover:text-amber-700 inline-flex items-center gap-1 w-fit">
                  Learn more
                  <span aria-hidden>→</span>
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="pt-10 md:pt-14 pb-12 md:pb-16 px-4 bg-slate-50 border-t border-slate-200">
        <div className={sectionClass}>
          <header className="text-center mb-12 md:mb-16">
            <h2 className={sectionTitleClass}>
              For every industry
            </h2>
            <p className={`${sectionSubtitleClass} mx-auto text-center`}>
              See how our tech supports every sector.
            </p>
          </header>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {industries.map((ind) => (
              <div
                key={ind.name}
                className="p-5 rounded-xl bg-white border border-slate-200 hover:border-amber-300/50 hover:shadow-sm transition-all"
              >
                <div className="w-9 h-9 rounded-lg bg-amber-100 flex items-center justify-center mb-3 shrink-0">
                  {ind.icon}
                </div>
                <h3 className="font-bold text-slate-800 text-sm md:text-base mb-1.5">{ind.name}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{ind.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

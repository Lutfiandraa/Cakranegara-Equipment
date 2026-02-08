export default function Tech() {
  const products = [
    {
      title: 'Asset Trackers',
      description: 'Our asset trackers provide advanced tracking for a wide range of equipment and vehicles.',
      features: ['Real-time GPS tracking', 'Machine monitoring including engine mileage, utilization and more', 'Geofencing and custom SMS alerts'],
      icon: (
        <svg className="w-10 h-10 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
    {
      title: 'Cloud-Connected Keypad',
      description: 'Our cloud-connected, interlocking keypad system gives you access control and security for heavy-duty equipment.',
      features: ['Monitor usage and operator history', 'Restrict access to authorized users', 'Reduce theft and engine run time'],
      icon: (
        <svg className="w-10 h-10 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
    },
    {
      title: 'Dash Cam',
      description: 'Our dual-view camera system allows for real-time accident prevention and driver monitoring alerts.',
      features: ['Road and driver-facing cameras', 'Monitor for distracted and dangerous driving', 'Visual and audio alerts'],
      icon: (
        <svg className="w-10 h-10 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 13v7a2 2 0 01-2 2H7a2 2 0 01-2-2v-7" />
        </svg>
      ),
    },
    {
      title: 'Bluetooth Tags',
      description: 'Bluetooth technology devices that allow for location tracking of tools, buckets, attachments, and more.',
      features: ['On-site visibility', 'Mitigate tool loss', 'Reduce time spent manually managing inventory'],
      icon: (
        <svg className="w-10 h-10 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
        </svg>
      ),
    },
  ];

  const industries = [
    { name: 'Construction Fleet', description: 'Real-time tracking, maintenance tools, and usage data for mixed fleets.' },
    { name: 'Commercial Builders', description: 'Manage schedules, assets, and crews from site prep to final walkthrough.' },
    { name: 'Civil Contractors', description: 'Heavy equipment and field teams across large-scale infrastructure projects.' },
    { name: 'General Contractors', description: 'Centralized equipment, labor, and jobsite data to keep projects on time and on budget.' },
    { name: 'Utilities', description: 'Operational oversight for utility fleets, from bucket trucks to loaders.' },
  ];

  const sectionClass = 'max-w-6xl mx-auto px-4 sm:px-6 lg:px-8';
  const sectionTitleClass = 'font-brand text-2xl md:text-3xl font-bold text-slate-800';
  const sectionSubtitleClass = 'text-slate-600 mt-2 max-w-2xl';

  return (
    <div className="bg-white">
      {/* Hero - same section size as Rent */}
      <section className="relative flex flex-col items-center justify-center bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white px-4 overflow-hidden pt-20 md:pt-24 pb-14 md:pb-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(245,158,11,0.12)_0%,transparent_70%)]" />
        <div className="relative z-10 text-center max-w-3xl mx-auto w-full">
          <p className="text-amber-400 font-semibold tracking-widest uppercase text-xs mb-5">
            Powered by Cakranegara Tech
          </p>
          <h1 className="font-brand text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-5 tracking-tight leading-tight">
            Cakranegara
            <br />
            <span className="text-amber-400">Powered by Tech</span>
          </h1>
          <p className="text-slate-300 text-base md:text-lg mb-8 max-w-xl mx-auto leading-relaxed">
            Connected software for fleet management, safety, and jobsite visibility.
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
            <p className="text-amber-500 font-semibold uppercase tracking-widest text-xs mb-2">
              Modern Fleet Management
            </p>
            <h2 className={sectionTitleClass}>
              Powered by <span className="text-amber-500">Tech</span>
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
                <a href="/" className="text-amber-600 font-semibold text-sm hover:text-amber-700 inline-flex items-center gap-1 w-fit">
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
                <div className="w-9 h-9 rounded-lg bg-amber-100 flex items-center justify-center mb-3">
                  <span className="text-amber-600 font-bold">•</span>
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

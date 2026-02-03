export default function Rent() {
  return (
    <>
    <section className="relative flex flex-col items-center justify-center bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white px-4 overflow-hidden pt-10 md:pt-14 pb-14 md:pb-20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(245,158,11,0.12)_0%,transparent_70%)]" />
      <div className="relative z-10 text-center max-w-3xl mx-auto w-full">
        <p className="text-amber-400 font-semibold tracking-widest uppercase text-sm md:text-base mb-5">
          Cakranegara Heavy Equipment&apos;s
        </p>
        <img
          src="/cakranegara-logo.png"
          alt="Cakranegara"
          className="h-32 sm:h-40 md:h-48 w-auto mx-auto mb-5 object-contain"
        />
        <h2 className="font-brand text-2xl md:text-4xl font-bold text-white mb-4">Cakranegara</h2>
        <p className="text-slate-300 text-base md:text-lg mb-8 max-w-xl mx-auto leading-relaxed">
          Tech-powered equipment rental. Expand your fleet, connect your jobsite, reduce downtime.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <a
            href="/"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-amber-500 text-white font-semibold rounded-lg hover:bg-amber-600 transition-colors text-sm"
          >
            Rent Equipment
          </a>
          <a
            href="/tech"
            className="inline-flex items-center gap-2 px-5 py-2.5 border border-white/40 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors text-sm"
          >
            Browse Solutions
          </a>
        </div>
      </div>
    </section>

    <section className="pt-10 md:pt-14 pb-12 md:pb-16 px-4 bg-slate-50 border-t border-slate-200">
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <article
            key={i}
            className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden hover:shadow-md hover:border-slate-300 transition-all flex flex-col"
          >
            <div className="aspect-[4/3] bg-slate-100 shrink-0" title="Image placeholder" />
            <div className="p-4 flex-1">
              <h3 className="font-semibold text-slate-800 mb-1">—</h3>
              <p className="text-slate-600 text-sm">—</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  </>
  );
}

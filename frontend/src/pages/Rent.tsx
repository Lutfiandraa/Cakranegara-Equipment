import { useState } from 'react';

type InfoBoxId = 'articulate' | 'loader' | 'dumptruck' | 'excavator' | 'drill' | 'undertage' | null;

export default function Rent() {
  const [showInfoBox, setShowInfoBox] = useState<InfoBoxId>(null);

  return (
    <>
    <section className="relative flex flex-col items-center justify-center bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white px-4 overflow-hidden pt-20 md:pt-24 pb-14 md:pb-20">
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
        <p className="text-slate-300 text-base md:text-lg mb-8 max-w-xl mx-auto leading-relaxed">
          Solusi Rental dan Penyediaan Equipment Terpercaya
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <a
            href="/company"
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
        <article className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden hover:shadow-md hover:border-slate-300 transition-all flex flex-col">
          <img
            src="/articulatecat.png"
            alt="Articulate Caterpillar Dump Truck"
            className="aspect-[4/3] w-full object-cover shrink-0"
          />
          <div className="p-4 flex-1 flex flex-col">
            <h3 className="font-semibold text-slate-800 mb-1">Articulate Caterpillar</h3>
            <p className="text-slate-600 text-sm mb-4 flex-1">Articulated Dump Truck — spesifikasi lengkap tersedia di info.</p>
            <button
              type="button"
              onClick={() => setShowInfoBox('articulate')}
              className="w-full mt-auto py-2.5 px-4 bg-amber-500 text-white font-semibold rounded-lg hover:bg-amber-600 transition-colors text-sm"
            >
              View Spesification
            </button>
          </div>
        </article>
        <article className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden hover:shadow-md hover:border-slate-300 transition-all flex flex-col">
          <img
            src="/loadercat.png"
            alt="Loader Caterpillar 994H"
            className="aspect-[4/3] w-full object-cover shrink-0"
          />
          <div className="p-4 flex-1 flex flex-col">
            <h3 className="font-semibold text-slate-800 mb-1">Loader Caterpillar 994H</h3>
            <p className="text-slate-600 text-sm mb-4 flex-1">Wheel Loader besar untuk pertambangan — spesifikasi lengkap di info.</p>
            <button
              type="button"
              onClick={() => setShowInfoBox('loader')}
              className="w-full mt-auto py-2.5 px-4 bg-amber-500 text-white font-semibold rounded-lg hover:bg-amber-600 transition-colors text-sm"
            >
              View Spesification
            </button>
          </div>
        </article>
        <article className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden hover:shadow-md hover:border-slate-300 transition-all flex flex-col">
          <img
            src="/dumptruckcat.png"
            alt="Dump Truck Caterpillar"
            className="aspect-[4/3] w-full object-cover shrink-0"
          />
          <div className="p-4 flex-1 flex flex-col">
            <h3 className="font-semibold text-slate-800 mb-1">Dump Truck Caterpillar</h3>
            <p className="text-slate-600 text-sm mb-4 flex-1">Rigid dump truck untuk pertambangan — spesifikasi lengkap di info.</p>
            <button
              type="button"
              onClick={() => setShowInfoBox('dumptruck')}
              className="w-full mt-auto py-2.5 px-4 bg-amber-500 text-white font-semibold rounded-lg hover:bg-amber-600 transition-colors text-sm"
            >
              View Spesification
            </button>
          </div>
        </article>
        <article className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden hover:shadow-md hover:border-slate-300 transition-all flex flex-col">
          <img
            src="/excapillar.png"
            alt="Excavator Caterpillar"
            className="aspect-[4/3] w-full object-cover shrink-0"
          />
          <div className="p-4 flex-1 flex flex-col">
            <h3 className="font-semibold text-slate-800 mb-1">Excavator + Different plug Bucket Request</h3>
            <p className="text-slate-600 text-sm mb-4 flex-1">Hydraulic excavator dengan pilihan bucket — spesifikasi lengkap di info.</p>
            <button
              type="button"
              onClick={() => setShowInfoBox('excavator')}
              className="w-full mt-auto py-2.5 px-4 bg-amber-500 text-white font-semibold rounded-lg hover:bg-amber-600 transition-colors text-sm"
            >
              View Spesification
            </button>
          </div>
        </article>
        <article className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden hover:shadow-md hover:border-slate-300 transition-all flex flex-col">
          <img
            src="/drilling.png"
            alt="MD6640 Rotary Drill"
            className="aspect-[4/3] w-full object-cover shrink-0"
          />
          <div className="p-4 flex-1 flex flex-col">
            <h3 className="font-semibold text-slate-800 mb-1">MD6640 Rotary Drill</h3>
            <p className="text-slate-600 text-sm mb-4 flex-1">Rotary drill pertambangan — spesifikasi lengkap di info.</p>
            <button
              type="button"
              onClick={() => setShowInfoBox('drill')}
              className="w-full mt-auto py-2.5 px-4 bg-amber-500 text-white font-semibold rounded-lg hover:bg-amber-600 transition-colors text-sm"
            >
              View Spesification
            </button>
          </div>
        </article>
        <article className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden hover:shadow-md hover:border-slate-300 transition-all flex flex-col">
          <img
            src="/undertage.png"
            alt="R1700 Undertage Caterpillar"
            className="aspect-[4/3] w-full object-cover shrink-0"
          />
          <div className="p-4 flex-1 flex flex-col">
            <h3 className="font-semibold text-slate-800 mb-1">R1700 Undertage Caterpillar</h3>
            <p className="text-slate-600 text-sm mb-4 flex-1">R1700 Undertage good for Underground Expedition</p>
            <button
              type="button"
              onClick={() => setShowInfoBox('undertage')}
              className="w-full mt-auto py-2.5 px-4 bg-amber-500 text-white font-semibold rounded-lg hover:bg-amber-600 transition-colors text-sm"
            >
              View Spesification
            </button>
          </div>
        </article>
        {[6].map((i) => (
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

    {showInfoBox && (
      <>
        <div
          className="floating-info-backdrop fixed inset-0 bg-black/50 z-40"
          aria-hidden
          onClick={() => setShowInfoBox(null)}
        />
        <div className="floating-info-box fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-lg mx-4 bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden max-h-[90vh] overflow-y-auto">
          <div className="p-6">
            {showInfoBox === 'articulate' && (
              <>
                <h3 className="font-brand text-xl font-bold text-slate-800 mb-3">Articulate Caterpillar</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  Caterpillar Articulated Dump Trucks dirancang untuk angkutan material di pertambangan, konstruksi, dan quarry.
                </p>
                <p className="font-semibold text-slate-800 text-sm mb-2">Spesifikasi:</p>
                <ul className="text-slate-600 text-sm leading-relaxed mb-4 list-disc list-inside space-y-1">
                  <li>CAT 725C2 — payload 25 ton, 275 hp</li>
                  <li>CAT 730C2 — payload 28 ton, 326 hp</li>
                  <li>CAT 735C — payload 33 ton, 394 hp</li>
                  <li>CAT 745C — payload 41 ton, 490 hp</li>
                  <li>CAT 750 — payload 45 ton, 613 hp</li>
                </ul>
                <p className="font-semibold text-slate-800 text-sm mb-2">Fitur:</p>
                <ul className="text-slate-600 text-sm leading-relaxed mb-6 list-disc list-inside space-y-1">
                  <li>Kabin nyaman bergaya automotive</li>
                  <li>Tier 4 Final / Stage IV</li>
                  <li>Transmisi otomatis 6–7 speed</li>
                  <li>Traction control</li>
                  <li>Telematics VisionLink untuk pemantauan fleet</li>
                </ul>
              </>
            )}
            {showInfoBox === 'loader' && (
              <>
                <h3 className="font-brand text-xl font-bold text-slate-800 mb-3">Loader Caterpillar 994H</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  Wheel loader besar untuk operasi pertambangan, mengisi dump truck dengan efisien. Cocok untuk material berat dan kondisi lapangan berat.
                </p>
                <p className="font-semibold text-slate-800 text-sm mb-2">Spesifikasi:</p>
                <ul className="text-slate-600 text-sm leading-relaxed mb-4 list-disc list-inside space-y-1">
                  <li>Mesin Cat 3516B HD EUI — 1.463 hp (1.091 kW) @ 1.600 rpm</li>
                  <li>Kapasitas bucket: 18,5–47 cu yd (14–36 m³)</li>
                  <li>Rated payload: 38 ton (standard lift) / 35 ton (high lift)</li>
                  <li>Operating weight: ±195 ton</li>
                  <li>Transmisi planetary power shift — 4,8–14,5 mph maju</li>
                </ul>
                <p className="font-semibold text-slate-800 text-sm mb-2">Fitur:</p>
                <ul className="text-slate-600 text-sm leading-relaxed mb-6 list-disc list-inside space-y-1">
                  <li>Sudut artikulasi 40°, front axle 10° oscillation</li>
                  <li>Hydraulic 4.750 psi, dual lift/tilt cylinders</li>
                  <li>Kompatibel dengan truck Cat 785, 789, 793</li>
                  <li>Dump clearance hingga 23,3 ft (max lift)</li>
                </ul>
              </>
            )}
            {showInfoBox === 'dumptruck' && (
              <>
                <h3 className="font-brand text-xl font-bold text-slate-800 mb-3">Dump Truck Caterpillar</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  Caterpillar off-highway rigid dump truck untuk angkutan material berat di pertambangan dan konstruksi skala besar. Tersedia dalam berbagai kelas payload.
                </p>
                <p className="font-semibold text-slate-800 text-sm mb-2">Spesifikasi:</p>
                <ul className="text-slate-600 text-sm leading-relaxed mb-4 list-disc list-inside space-y-1">
                  <li>CAT 777 — payload 100 ton, mesin 953 hp, kapasitas heaped 60 m³</li>
                  <li>CAT 785 — kelas menengah, untuk operasi mining</li>
                  <li>CAT 793 — payload 229–240 ton, mesin 2.529 hp, 6-speed</li>
                  <li>Transmisi planetary powershift (7-speed pada 777)</li>
                  <li>Kecepatan maks. 37–42 mph tergantung model</li>
                </ul>
                <p className="font-semibold text-slate-800 text-sm mb-2">Fitur:</p>
                <ul className="text-slate-600 text-sm leading-relaxed mb-6 list-disc list-inside space-y-1">
                  <li>Mesin Cat C32B (777) / C175-16 (793)</li>
                  <li>Body raise time ±15 detik</li>
                  <li>Didesain untuk medan berat dan siklus loading tinggi</li>
                  <li>Integrasi dengan loader dan fleet management</li>
                </ul>
              </>
            )}
            {showInfoBox === 'excavator' && (
              <>
                <h3 className="font-brand text-xl font-bold text-slate-800 mb-3">Excavator + Different plug Bucket Request</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  Hydraulic excavator Caterpillar untuk penggalian, trenching, dan material handling. Tersedia berbagai attachment bucket (general purpose, heavy duty, rock) sesuai kebutuhan proyek — dapat request bucket dengan plug/tipe berbeda.
                </p>
                <p className="font-semibold text-slate-800 text-sm mb-2">Spesifikasi:</p>
                <ul className="text-slate-600 text-sm leading-relaxed mb-4 list-disc list-inside space-y-1">
                  <li>CAT 320 — operating weight 19,9–22,7 ton, mesin 139–157 hp</li>
                  <li>Kapasitas bucket: 0,93–1,19 m³ (1,22–1,56 yd³) tergantung konfigurasi</li>
                  <li>Sistem hidraulik: flow 429–442 L/min, tekanan max 5.075 psi</li>
                  <li>Swing: 11–11,6 rpm, torsi max 74–82 kN·m</li>
                  <li>Track width 600–790 mm, kecepatan jalan 5,7–5,9 km/jam</li>
                </ul>
                <p className="font-semibold text-slate-800 text-sm mb-2">Fitur:</p>
                <ul className="text-slate-600 text-sm leading-relaxed mb-6 list-disc list-inside space-y-1">
                  <li>Pilihan bucket berbeda (general, heavy duty, rock) — request sesuai kebutuhan</li>
                  <li>Mesin Cat C4.4 / C7.1, Tier 4 compliant</li>
                  <li>Gradeability hingga 35° / 70%</li>
                  <li>Quick coupler untuk ganti attachment dengan cepat</li>
                </ul>
              </>
            )}
            {showInfoBox === 'drill' && (
              <>
                <h3 className="font-brand text-xl font-bold text-slate-800 mb-3">MD6640 Rotary Drill</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  Rotary drill terbesar Caterpillar untuk pertambangan, electric-drive dengan daya tahan dan keandalan tinggi. Ideal untuk coal mining dan hard rock mining.
                </p>
                <p className="font-semibold text-slate-800 text-sm mb-2">Spesifikasi:</p>
                <ul className="text-slate-600 text-sm leading-relaxed mb-4 list-disc list-inside space-y-1">
                  <li>Bit load: hingga 64.000 kg (141.096 lb)</li>
                  <li>Diameter lubang: 244–406 mm (9,6–16 in)</li>
                  <li>Mesin: AC induction motor dual shaft, 522–746 kW (600 hp)</li>
                  <li>Kedalaman single-pass: 18,3–21,3 m (60–70 ft); multi-pass hingga 85,3 m (280 ft)</li>
                  <li>Working weight: 154.000 kg (340.000 lb)</li>
                  <li>Rotasi: 125 rpm, torsi 17.489 N·m (12.900 lb-ft)</li>
                  <li>Aliran udara kompresor: 85 m³/min @ 4,5 bar (standard); 108 m³/min (opsional)</li>
                </ul>
                <p className="font-semibold text-slate-800 text-sm mb-2">Fitur:</p>
                <ul className="text-slate-600 text-sm leading-relaxed mb-6 list-disc list-inside space-y-1">
                  <li>Undercarriage gaya excavator, sealed-for-life rollers dan idlers</li>
                  <li>Angle hole drilling hingga 25° (increment 5°)</li>
                  <li>Mast tubular, chainless rack-and-pinion drive</li>
                  <li>Drillstring Changeout System untuk ganti pipe cepat</li>
                  <li>Programmed drill control (minimalkan getaran dan noise)</li>
                  <li>Kabin luas dengan panoramic view</li>
                </ul>
              </>
            )}
            {showInfoBox === 'undertage' && (
              <>
                <h3 className="font-brand text-xl font-bold text-slate-800 mb-3">R1700 Undertage Caterpillar</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  R1700 Undertage good for Underground Expedition. Underground mining loader Caterpillar untuk hard rock dan operasi tambang dalam, dengan kapasitas payload 15 ton dan pilihan bucket beragam.
                </p>
                <p className="font-semibold text-slate-800 text-sm mb-2">Spesifikasi:</p>
                <ul className="text-slate-600 text-sm leading-relaxed mb-4 list-disc list-inside space-y-1">
                  <li>Mesin Cat C13 — 257 kW (345 hp) Stage V / 269 kW (361 hp) Tier 3</li>
                  <li>Rated payload: 15.000 kg (33.069 lb)</li>
                  <li>Gross machine mass (loaded): 62.739 kg (138.316 lb)</li>
                  <li>Breakout force: 24.190 kg (53.330 lb)</li>
                  <li>Bucket: 4,6–8,8 m³ (6–11,5 yd³), dump & ejector</li>
                  <li>Kecepatan maks.: 28,8 km/jam (17,9 mph), gigi 4 maju</li>
                  <li>Hydraulic raise: 6,8 detik; dump: 3,3 detik</li>
                </ul>
                <p className="font-semibold text-slate-800 text-sm mb-2">Fitur:</p>
                <ul className="text-slate-600 text-sm leading-relaxed mb-6 list-disc list-inside space-y-1">
                  <li>Didesain untuk underground hard rock mining</li>
                  <li>Dimensi kompak (panjang ~10,7–11,2 m, lebar 2,65–3,61 m)</li>
                  <li>Engine mount dan center hitch diperkuat, sensor & filter ditingkatkan</li>
                  <li>Cocok untuk ekspedisi dan operasi tambang bawah tanah</li>
                </ul>
              </>
            )}
            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => setShowInfoBox(null)}
                className="flex-1 py-2.5 px-4 border border-slate-300 text-slate-700 font-semibold rounded-lg hover:bg-slate-50 transition-colors text-sm"
              >
                Tutup
              </button>
              <a
                href="/company"
                className="flex-1 py-2.5 px-4 bg-amber-500 text-white font-semibold rounded-lg hover:bg-amber-600 transition-colors text-sm text-center"
              >
                Rent
              </a>
            </div>
          </div>
        </div>
      </>
    )}
  </>
  );
}

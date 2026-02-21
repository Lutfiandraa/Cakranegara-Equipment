import { useState } from 'react';

type InfoBoxId = 'articulate' | 'loader' | 'dumptruck' | 'excavator' | 'drill' | 'undertage' | null;

export default function Rent() {
  const [showInfoBox, setShowInfoBox] = useState<InfoBoxId>(null);

  return (
    <>
    <section className="relative flex flex-col items-center justify-center text-white px-4 overflow-hidden pt-20 md:pt-24 pb-14 md:pb-20 min-h-[70vh] md:min-h-[75vh]">
      {/* Latar video — memenuhi section dengan object-cover */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        aria-hidden
      >
        <source src="/caterpillar793.mov" type="video/quicktime" />
        <source src="/caterpillar793.mov" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/50" aria-hidden />
      <div className="relative z-10 text-center max-w-3xl mx-auto w-full">
        <p className="text-amber-400 font-semibold tracking-widest uppercase text-sm md:text-base mb-5">
          CAKRANEGARA Heavy Equipment
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
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-amber-400/25 border border-amber-300/50 text-white font-semibold rounded-lg hover:bg-amber-400/35 transition-colors text-sm"
          >
            Sewa Equipment
          </a>
          <a
            href="/tech"
            className="inline-flex items-center gap-2 px-5 py-2.5 border border-white/40 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors text-sm"
          >
            Jelajahi Solusi
          </a>
        </div>
      </div>
    </section>

    <section className="pt-10 md:pt-14 pb-12 md:pb-16 px-4 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 border-t border-white/10">
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        <article className="bg-amber-400/25 backdrop-blur-sm rounded-xl border border-amber-300/50 shadow-sm overflow-hidden hover:shadow-md hover:bg-amber-400/35 transition-all flex flex-col">
          <img
            src="/articulatecat.png"
            alt="Articulate Caterpillar Dump Truck"
            className="aspect-[4/3] w-full object-cover shrink-0"
          />
          <div className="p-4 flex-1 flex flex-col">
            <h3 className="font-semibold text-white mb-1">Articulate Caterpillar</h3>
            <p className="text-amber-50 text-sm mb-4 flex-1">Truk jungkit artikulasi untuk pertambangan — spesifikasi lengkap tersedia di informasi.</p>
            <button
              type="button"
              onClick={() => setShowInfoBox('articulate')}
              className="w-full mt-auto py-2.5 px-4 bg-amber-500 text-white font-semibold rounded-lg hover:bg-amber-600 transition-colors text-sm"
            >
              Lihat Spesifikasi
            </button>
          </div>
        </article>
        <article className="bg-amber-400/25 backdrop-blur-sm rounded-xl border border-amber-300/50 shadow-sm overflow-hidden hover:shadow-md hover:bg-amber-400/35 transition-all flex flex-col">
          <img
            src="/loadercat.png"
            alt="Loader Caterpillar 994H"
            className="aspect-[4/3] w-full object-cover shrink-0"
          />
          <div className="p-4 flex-1 flex flex-col">
            <h3 className="font-semibold text-white mb-1">Loader Caterpillar 994H</h3>
            <p className="text-amber-50 text-sm mb-4 flex-1">Loader roda besar untuk pertambangan — spesifikasi lengkap tersedia di informasi.</p>
            <button
              type="button"
              onClick={() => setShowInfoBox('loader')}
              className="w-full mt-auto py-2.5 px-4 bg-amber-500 text-white font-semibold rounded-lg hover:bg-amber-600 transition-colors text-sm"
            >
              Lihat Spesifikasi
            </button>
          </div>
        </article>
        <article className="bg-amber-400/25 backdrop-blur-sm rounded-xl border border-amber-300/50 shadow-sm overflow-hidden hover:shadow-md hover:bg-amber-400/35 transition-all flex flex-col">
          <img
            src="/dumptruckcat.png"
            alt="Dump Truck Caterpillar"
            className="aspect-[4/3] w-full object-cover shrink-0"
          />
          <div className="p-4 flex-1 flex flex-col">
            <h3 className="font-semibold text-white mb-1">Dump Truck Caterpillar</h3>
            <p className="text-amber-50 text-sm mb-4 flex-1">Truk dump rigid untuk pertambangan — spesifikasi lengkap tersedia di informasi.</p>
            <button
              type="button"
              onClick={() => setShowInfoBox('dumptruck')}
              className="w-full mt-auto py-2.5 px-4 bg-amber-500 text-white font-semibold rounded-lg hover:bg-amber-600 transition-colors text-sm"
            >
              Lihat Spesifikasi
            </button>
          </div>
        </article>
        <article className="bg-amber-400/25 backdrop-blur-sm rounded-xl border border-amber-300/50 shadow-sm overflow-hidden hover:shadow-md hover:bg-amber-400/35 transition-all flex flex-col">
          <img
            src="/excapillar.png"
            alt="Excavator Caterpillar"
            className="aspect-[4/3] w-full object-cover shrink-0"
          />
          <div className="p-4 flex-1 flex flex-col">
            <h3 className="font-semibold text-white mb-1">Excavator + Different plug Bucket Request</h3>
            <p className="text-amber-50 text-sm mb-4 flex-1">Excavator hidraulik dengan pilihan bucket — spesifikasi lengkap tersedia di informasi.</p>
            <button
              type="button"
              onClick={() => setShowInfoBox('excavator')}
              className="w-full mt-auto py-2.5 px-4 bg-amber-500 text-white font-semibold rounded-lg hover:bg-amber-600 transition-colors text-sm"
            >
              Lihat Spesifikasi
            </button>
          </div>
        </article>
        <article className="bg-amber-400/25 backdrop-blur-sm rounded-xl border border-amber-300/50 shadow-sm overflow-hidden hover:shadow-md hover:bg-amber-400/35 transition-all flex flex-col">
          <img
            src="/drilling.png"
            alt="MD6640 Rotary Drill"
            className="aspect-[4/3] w-full object-cover shrink-0"
          />
          <div className="p-4 flex-1 flex flex-col">
            <h3 className="font-semibold text-white mb-1">MD6640 Rotary Drill</h3>
            <p className="text-amber-50 text-sm mb-4 flex-1">Rotary drill pertambangan — spesifikasi lengkap di info.</p>
            <button
              type="button"
              onClick={() => setShowInfoBox('drill')}
              className="w-full mt-auto py-2.5 px-4 bg-amber-500 text-white font-semibold rounded-lg hover:bg-amber-600 transition-colors text-sm"
            >
              Lihat Spesifikasi
            </button>
          </div>
        </article>
        <article className="bg-amber-400/25 backdrop-blur-sm rounded-xl border border-amber-300/50 shadow-sm overflow-hidden hover:shadow-md hover:bg-amber-400/35 transition-all flex flex-col">
          <img
            src="/undertage.png"
            alt="R1700 Undertage Caterpillar"
            className="aspect-[4/3] w-full object-cover shrink-0"
          />
          <div className="p-4 flex-1 flex flex-col">
            <h3 className="font-semibold text-white mb-1">R1700 Undertage Caterpillar</h3>
            <p className="text-amber-50 text-sm mb-4 flex-1">Cocok untuk ekspedisi bawah tanah.</p>
            <button
              type="button"
              onClick={() => setShowInfoBox('undertage')}
              className="w-full mt-auto py-2.5 px-4 bg-amber-500 text-white font-semibold rounded-lg hover:bg-amber-600 transition-colors text-sm"
            >
              Lihat Spesifikasi
            </button>
          </div>
        </article>
      </div>
      <div className="max-w-5xl mx-auto mt-12 md:mt-14 flex justify-center">
        <a
          href="/company"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-amber-400/25 border border-amber-300/50 text-white font-semibold rounded-lg hover:bg-amber-400/35 transition-colors text-sm"
        >
          Tanya Unit lainnya
        </a>
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
                  Caterpillar Articulated Dump Trucks dirancang untuk angkutan material di pertambangan, konstruksi, dan kuari.
                </p>
                <p className="font-semibold text-slate-800 text-sm mb-2">Spesifikasi:</p>
                <ul className="text-slate-600 text-sm leading-relaxed mb-4 list-disc list-inside space-y-1">
                  <li>CAT 725C2 — muatan 25 ton, 275 hp</li>
                  <li>CAT 730C2 — muatan 28 ton, 326 hp</li>
                  <li>CAT 735C — muatan 33 ton, 394 hp</li>
                  <li>CAT 745C — muatan 41 ton, 490 hp</li>
                  <li>CAT 750 — muatan 45 ton, 613 hp</li>
                </ul>
                <p className="font-semibold text-slate-800 text-sm mb-2">Fitur:</p>
                <ul className="text-slate-600 text-sm leading-relaxed mb-6 list-disc list-inside space-y-1">
                  <li>Kabin nyaman bergaya otomotif</li>
                  <li>Tier 4 Final / Stage IV</li>
                  <li>Transmisi otomatis 6–7 kecepatan</li>
                  <li>Kontrol traksi</li>
                  <li>Telematics VisionLink untuk pemantauan armada</li>
                </ul>
              </>
            )}
            {showInfoBox === 'loader' && (
              <>
                <h3 className="font-brand text-xl font-bold text-slate-800 mb-3">Loader Caterpillar 994H</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  Loader roda besar untuk operasi pertambangan, mengisi truk dump secara efisien. Cocok untuk material berat dan kondisi lapangan berat.
                </p>
                <p className="font-semibold text-slate-800 text-sm mb-2">Spesifikasi:</p>
                <ul className="text-slate-600 text-sm leading-relaxed mb-4 list-disc list-inside space-y-1">
                  <li>Mesin Cat 3516B HD EUI — 1.463 hp (1.091 kW) @ 1.600 rpm</li>
                  <li>Kapasitas bucket: 18,5–47 cu yd (14–36 m³)</li>
                  <li>Muatan terukur: 38 ton (angkat standar) / 35 ton (angkat tinggi)</li>
                  <li>Bobot operasi: ±195 ton</li>
                  <li>Transmisi planetary power shift — 4,8–14,5 mph maju</li>
                </ul>
                <p className="font-semibold text-slate-800 text-sm mb-2">Fitur:</p>
                <ul className="text-slate-600 text-sm leading-relaxed mb-6 list-disc list-inside space-y-1">
                  <li>Sudut artikulasi 40°, front axle dengan osilasi 10°</li>
                  <li>Hidraulik 4.750 psi, dual lift/tilt cylinders</li>
                  <li>Kompatibel dengan truk Cat 785, 789, 793</li>
                  <li>Dump clearance hingga 23,3 ft (angkat maksimum)</li>
                </ul>
              </>
            )}
            {showInfoBox === 'dumptruck' && (
              <>
                <h3 className="font-brand text-xl font-bold text-slate-800 mb-3">Dump Truck Caterpillar</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  Truk dump rigid off-highway Caterpillar untuk angkutan material berat di pertambangan dan konstruksi skala besar. Tersedia dalam berbagai kelas muatan.
                </p>
                <p className="font-semibold text-slate-800 text-sm mb-2">Spesifikasi:</p>
                <ul className="text-slate-600 text-sm leading-relaxed mb-4 list-disc list-inside space-y-1">
                  <li>CAT 777 — muatan 100 ton, mesin 953 hp, kapasitas munjung 60 m³</li>
                  <li>CAT 785 — kelas menengah, untuk operasi pertambangan</li>
                  <li>CAT 793 — muatan 229–240 ton, mesin 2.529 hp, 6 percepatan</li>
                  <li>Transmisi planetary powershift (7-speed pada 777)</li>
                  <li>Kecepatan maks. 37–42 mph tergantung model</li>
                </ul>
                <p className="font-semibold text-slate-800 text-sm mb-2">Fitur:</p>
                <ul className="text-slate-600 text-sm leading-relaxed mb-6 list-disc list-inside space-y-1">
                  <li>Mesin Cat C32B (777) / C175-16 (793)</li>
                  <li>Waktu angkat bak ±15 detik</li>
                  <li>Didesain untuk medan berat dan siklus loading tinggi</li>
                  <li>Integrasi dengan loader dan manajemen armada</li>
                </ul>
              </>
            )}
            {showInfoBox === 'excavator' && (
              <>
                <h3 className="font-brand text-xl font-bold text-slate-800 mb-3">Excavator + Different plug Bucket Request</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  Excavator hidraulik Caterpillar untuk penggalian, pembuatan parit, dan penanganan material. Tersedia berbagai attachment bucket (serbaguna, heavy duty, rock) sesuai kebutuhan proyek — dapat meminta bucket dengan plug/tipe berbeda.
                </p>
                <p className="font-semibold text-slate-800 text-sm mb-2">Spesifikasi:</p>
                <ul className="text-slate-600 text-sm leading-relaxed mb-4 list-disc list-inside space-y-1">
                  <li>CAT 320 — bobot operasi 19,9–22,7 ton, mesin 139–157 hp</li>
                  <li>Kapasitas bucket: 0,93–1,19 m³ (1,22–1,56 yd³) tergantung konfigurasi</li>
                  <li>Sistem hidraulik: aliran 429–442 L/min, tekanan maks. 5.075 psi</li>
                  <li>Putaran: 11–11,6 rpm, torsi maks. 74–82 kN·m</li>
                  <li>Lebar track 600–790 mm, kecepatan jalan 5,7–5,9 km/jam</li>
                </ul>
                <p className="font-semibold text-slate-800 text-sm mb-2">Fitur:</p>
                <ul className="text-slate-600 text-sm leading-relaxed mb-6 list-disc list-inside space-y-1">
                  <li>Pilihan bucket berbeda (general, heavy duty, rock) — dapat diminta sesuai kebutuhan</li>
                  <li>Mesin Cat C4.4 / C7.1, memenuhi standar Tier 4</li>
                  <li>Kemampuan tanjak hingga 35° / 70%</li>
                  <li>Kopler cepat untuk ganti attachment dengan cepat</li>
                </ul>
              </>
            )}
            {showInfoBox === 'drill' && (
              <>
                <h3 className="font-brand text-xl font-bold text-slate-800 mb-3">MD6640 Rotary Drill</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  Rotary drill terbesar Caterpillar untuk pertambangan, bertenaga listrik dengan daya tahan dan keandalan tinggi. Cocok untuk tambang batubara dan hard rock.
                </p>
                <p className="font-semibold text-slate-800 text-sm mb-2">Spesifikasi:</p>
                <ul className="text-slate-600 text-sm leading-relaxed mb-4 list-disc list-inside space-y-1">
                  <li>Bit load: hingga 64.000 kg (141.096 lb)</li>
                  <li>Diameter lubang: 244–406 mm (9,6–16 in)</li>
                  <li>Mesin: motor induksi AC dual shaft, 522–746 kW (600 hp)</li>
                  <li>Kedalaman single-pass: 18,3–21,3 m (60–70 ft); multi-pass hingga 85,3 m (280 ft)</li>
                  <li>Bobot operasi: 154.000 kg (340.000 lb)</li>
                  <li>Rotasi: 125 rpm, torsi 17.489 N·m (12.900 lb-ft)</li>
                  <li>Aliran udara kompresor: 85 m³/min @ 4,5 bar (standard); 108 m³/min (opsional)</li>
                </ul>
                <p className="font-semibold text-slate-800 text-sm mb-2">Fitur:</p>
                <ul className="text-slate-600 text-sm leading-relaxed mb-6 list-disc list-inside space-y-1">
                  <li>Undercarriage gaya excavator, sealed-for-life rollers dan idlers</li>
                  <li>Pengeboran sudut hingga 25° (kenaikan 5°)</li>
                  <li>Mast tubular, chainless rack-and-pinion drive</li>
                  <li>Drillstring Changeout System untuk ganti pipa dengan cepat</li>
                  <li>Programmed drill control (meminimalkan getaran dan kebisingan)</li>
                  <li>Kabin luas dengan pandangan panoramik</li>
                </ul>
              </>
            )}
            {showInfoBox === 'undertage' && (
              <>
                <h3 className="font-brand text-xl font-bold text-slate-800 mb-3">R1700 Undertage Caterpillar</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  R1700 Undertage cocok untuk ekspedisi bawah tanah. Loader tambang bawah tanah Caterpillar untuk hard rock dan operasi tambang dalam, dengan kapasitas muatan 15 ton dan pilihan bucket beragam.
                </p>
                <p className="font-semibold text-slate-800 text-sm mb-2">Spesifikasi:</p>
                <ul className="text-slate-600 text-sm leading-relaxed mb-4 list-disc list-inside space-y-1">
                  <li>Mesin Cat C13 — 257 kW (345 hp) Stage V / 269 kW (361 hp) Tier 3</li>
                  <li>Muatan terukur: 15.000 kg (33.069 lb)</li>
                  <li>Massa total unit (bermuatan): 62.739 kg (138.316 lb)</li>
                  <li>Gaya breakout: 24.190 kg (53.330 lb)</li>
                  <li>Bucket: 4,6–8,8 m³ (6–11,5 yd³), dump & ejector</li>
                  <li>Kecepatan maks.: 28,8 km/jam (17,9 mph), gigi 4 maju</li>
                  <li>Waktu angkat hidraulik: 6,8 detik; dump: 3,3 detik</li>
                </ul>
                <p className="font-semibold text-slate-800 text-sm mb-2">Fitur:</p>
                <ul className="text-slate-600 text-sm leading-relaxed mb-6 list-disc list-inside space-y-1">
                  <li>Didesain untuk pertambangan batuan keras bawah tanah</li>
                  <li>Dimensi kompak (panjang ~10,7–11,2 m, lebar 2,65–3,61 m)</li>
                  <li>Dudukan mesin dan center hitch diperkuat, sensor & filter ditingkatkan</li>
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
                Sewa
              </a>
            </div>
          </div>
        </div>
      </>
    )}
  </>
  );
}

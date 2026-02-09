import { useState, useRef, useEffect } from 'react';
import { IoPaperPlaneOutline, IoPersonCircle } from 'react-icons/io5';

type Message = { role: 'bot' | 'user'; text: string };

const BOT_REPLIES: Record<string, string> = {
  rental: 'Terima kasih atas minat Anda! Untuk rental equipment (articulated dump truck, loader, excavator, dll.) silakan kunjungi halaman Rent atau hubungi kami untuk penawaran khusus.',
  spare: 'Untuk spare part dan layanan perawatan alat berat, Anda dapat mengunjungi halaman Service atau menghubungi tim kami. Kami siap membantu kebutuhan parts dan maintenance Anda.',
  contact: 'Anda dapat menghubungi kami melalui email atau telepon. Tim customer service kami siap melayani pada jam kerja. Terima kasih!',
  hubungi: 'Anda dapat menghubungi kami melalui email atau telepon. Tim customer service kami siap melayani pada jam kerja. Terima kasih!',
  default: 'Terima kasih telah menghubungi kami. Tim Cakranegara akan segera merespons. Untuk pertanyaan mendesak, silakan hubungi langsung melalui telepon atau email.',
};

export default function Company() {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'bot', text: 'Halo! Selamat datang di Cakranegara. Ada yang bisa kami bantu? Ketik pertanyaan Anda di bawah.' },
  ]);
  const [inputValue, setInputValue] = useState('');
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const sendMessage = (text: string) => {
    const trimmed = text.trim();
    if (!trimmed) return;
    setMessages((prev) => [...prev, { role: 'user', text: trimmed }]);
    setInputValue('');
    const key = trimmed.toLowerCase().replace(/\s+/g, ' ');
    const replyKey = Object.keys(BOT_REPLIES).find((k) => key.includes(k)) || 'default';
    const botText = BOT_REPLIES[replyKey] || BOT_REPLIES.default;
    setTimeout(() => {
      setMessages((prev) => [...prev, { role: 'bot', text: botText }]);
    }, 600);
  };

  return (
    <>
    <section className="relative flex flex-col items-center bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white px-4 overflow-hidden pt-20 md:pt-24 pb-14 md:pb-20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(245,158,11,0.12)_0%,transparent_70%)]" />
      <div className="relative z-10 w-full max-w-3xl mx-auto text-center">
        <p className="text-amber-400 font-semibold tracking-widest uppercase text-sm md:text-base mb-5">
          Cakranegara Heavy Equipment&apos;s
        </p>
        <img
          src="/cakranegara-logo.png"
          alt="Cakranegara"
          className="h-32 sm:h-40 md:h-48 w-auto mx-auto mb-5 object-contain"
        />
        <p className="text-slate-300 text-base md:text-lg max-w-xl mx-auto leading-relaxed mb-8 md:mb-10">
          Solusi Rental dan Penyediaan Equipment Terpercaya
        </p>

        {/* Chatbot Customer Service - layout seperti ChatGPT, design & warna tetap */}
        <div className="max-w-2xl mx-auto mt-6 w-full">
          <div className="bg-slate-800/60 backdrop-blur-sm rounded-2xl border border-white/10 shadow-xl overflow-hidden flex flex-col min-h-[380px] max-h-[520px]">
            {/* Header chat - contact seperti room chat */}
            <div className="shrink-0 flex items-center gap-3 px-4 py-3 border-b border-white/10 bg-slate-800/80">
              <IoPersonCircle className="w-10 h-10 text-amber-400 shrink-0" aria-hidden />
              <div className="min-w-0">
                <p className="font-semibold text-white truncate">Customer Service-bot</p>
                <p className="text-xs text-slate-400 mt-0.5">Ada yang bisa kami bantu?</p>
              </div>
            </div>
            {/* Area pesan - scrollable, isi tengah saat kosong */}
            <div className="flex-1 overflow-y-auto flex flex-col">
              {messages.length <= 1 ? (
                /* Welcome state: judul di tengah */
                <div className="flex-1 flex flex-col items-center justify-center px-4 py-8 min-h-[240px]">
                  <p className="text-slate-400 text-sm text-center">
                    Ketik pertanyaan Anda di bawah.
                  </p>
                </div>
              ) : (
                /* Ada percakapan: tampilkan thread pesan */
                <div className="p-4 space-y-3">
                  {messages.map((msg, i) => (
                    <div
                      key={i}
                      className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-[85%] rounded-2xl px-4 py-2.5 ${
                          msg.role === 'bot'
                            ? 'bg-slate-700/80 text-slate-100 rounded-bl-md'
                            : 'bg-amber-500 text-white rounded-br-md'
                        }`}
                      >
                        <p className="text-sm leading-relaxed whitespace-pre-wrap">{msg.text}</p>
                      </div>
                    </div>
                  ))}
                  <div ref={chatEndRef} />
                </div>
              )}
            </div>

            {/* Input bar selalu di bawah (seperti ChatGPT) */}
            <div className="shrink-0 p-3 border-t border-white/10">
              <div className="flex gap-2 rounded-xl border border-white/20 bg-white/5 focus-within:border-amber-500/50 focus-within:ring-2 focus-within:ring-amber-500/20 transition-all">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && !e.shiftKey && sendMessage(inputValue)}
                  placeholder="Ketik pesan..."
                  className="flex-1 rounded-l-xl bg-slate-500/30 px-4 py-2.5 text-sm text-white placeholder:text-slate-400 focus:outline-none"
                />
                <button
                  type="button"
                  onClick={() => sendMessage(inputValue)}
                  className="shrink-0 rounded-r-xl p-2 text-slate-300 hover:text-amber-400 transition-colors disabled:opacity-50"
                  aria-label="Kirim"
                >
                  <IoPaperPlaneOutline className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
  );
}

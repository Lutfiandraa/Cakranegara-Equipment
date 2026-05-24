import { useState, useRef, useEffect } from 'react';
import { IoPaperPlaneOutline, IoArrowForward } from 'react-icons/io5';
import { MdEngineering } from 'react-icons/md';

type Message = { role: 'bot' | 'user'; text: string; isError?: boolean };

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

export default function Company() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [hasHovered, setHasHovered] = useState(false);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTo({
        top: chatContainerRef.current.scrollHeight,
        behavior: 'smooth'
      });
    }
  }, [messages]);

  const handleInputHover = () => {
    if (!hasHovered && messages.length === 0) {
      setHasHovered(true);
      setMessages([{ role: 'bot', text: 'Mas Cakra sedang mengetik...' }]);
      
      setTimeout(() => {
        setMessages((prev) => {
          const filtered = prev.filter(m => m.text !== 'Mas Cakra sedang mengetik...');
          return [
            { role: 'bot', text: 'Halo! Selamat datang di Cakranegara. Ada yang bisa kami bantu? Ketik pertanyaan Anda di bawah.' },
            ...filtered
          ];
        });
      }, 1000);
    }
  };

  const sendMessage = async (text: string) => {
    const trimmed = text.trim();
    if (!trimmed) return;
    
    const newUserMessage: Message = { role: 'user', text: trimmed };
    setMessages((prev) => [...prev, newUserMessage]);
    setInputValue('');
    
    const thinkingMessage: Message = { 
      role: 'bot', 
      text: 'Mas Cakra sedang mengetik...'
    };
    setMessages((prev) => [...prev, thinkingMessage]);

    try {
      const response = await fetch('http://localhost:3000/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          conversation: [{ role: 'user', text: trimmed }]
        }),
      });

      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Terjadi kesalahan sistem.');
      }

      setMessages((prev) => {
        const filtered = prev.filter(m => m.text !== 'Mas Cakra sedang mengetik...');
        return [...filtered, { role: 'bot', text: escapeHtml(String(data.data?.result || data.result || '')) }];
      });

    } catch (error: any) {
      console.error('Error:', error);
      setMessages((prev) => {
        const filtered = prev.filter(m => m.text !== 'Mas Cakra sedang mengetik...');
        return [...filtered, { 
          role: 'bot', 
          text: 'Halo sepertinya ada kendala dari Mas Cakra-bot tidak dapat menjawab pertanyaan anda, Kami alihkan email kami cakranegara@company.com',
          isError: true 
        }];
      });
    }
  };

  return (
    <section className="relative flex flex-col items-center justify-center bg-equipment-black text-equipment-text-primary px-4 overflow-hidden pt-36 md:pt-44 pb-16 md:pb-24 min-h-[80vh]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,146,42,0.08)_0%,transparent_70%)]" />
      <div className="relative z-10 w-full max-w-3xl mx-auto text-center">
        <div className="max-w-2xl mx-auto w-full">
          <div className="bg-[#111111] backdrop-blur-sm rounded-2xl border border-white/5 shadow-2xl overflow-hidden flex flex-col min-h-[380px] max-h-[520px]">
            {/* Chat header */}
            <div className="shrink-0 flex items-center gap-3 px-5 py-4 border-b border-white/5 bg-[#1A1A1A]">
              <div className="w-10 h-10 rounded-full bg-equipment-gold/10 flex items-center justify-center text-equipment-gold shrink-0">
                <MdEngineering className="w-6 h-6" aria-hidden />
              </div>
              <div className="min-w-0 flex flex-col items-start justify-center leading-tight text-left">
                <p className="font-display uppercase tracking-wider font-bold text-equipment-text-primary text-sm">Mas Cakra-bot</p>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  <p className="text-xs text-equipment-text-muted">Online</p>
                </div>
              </div>
            </div>

            {/* Message area */}
            <div ref={chatContainerRef} className="flex-1 overflow-y-auto flex flex-col">
              {messages.length === 0 ? (
                <div className="flex-1 flex flex-col items-center justify-center px-4 py-8 min-h-[240px]">
                  <p className="text-equipment-text-muted text-sm text-center">
                    Tanyakan pada Mas Cakra-bot Assistant kami!
                  </p>
                </div>
              ) : (
                <div className="p-4 space-y-3">
                  {messages.map((msg, i) => (
                    <div
                      key={i}
                      className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-left font-body ${
                          msg.role === 'bot'
                            ? 'bg-[#1A1A1A] text-equipment-text-primary border border-white/5 rounded-bl-none'
                            : 'bg-equipment-gold text-black font-semibold rounded-br-none'
                        }`}
                      >
                        <p className="text-sm leading-relaxed whitespace-pre-wrap">{msg.text}</p>
                        {msg.isError && (
                          <div className="mt-3 flex justify-start">
                            <a 
                              href="mailto:cakranegara@company.com"
                              className="inline-flex items-center justify-center w-8 h-8 bg-equipment-gold hover:bg-equipment-gold-light text-black rounded-full transition-all hover:translate-x-1 shadow-lg shadow-equipment-gold/20"
                              aria-label="Kirim Email"
                            >
                              <IoArrowForward className="w-5 h-5" />
                            </a>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Input area */}
            <div className="shrink-0 p-3 border-t border-white/5 bg-[#1A1A1A]" onMouseEnter={handleInputHover}>
              <div className="flex gap-2 rounded-xl border border-white/10 bg-[#0A0A0A] focus-within:border-equipment-gold/50 focus-within:ring-1 focus-within:ring-equipment-gold/20 transition-all duration-300">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && !e.shiftKey) {
                      e.preventDefault();
                      sendMessage(inputValue);
                    }
                  }}
                  placeholder="Ketik pesan..."
                  className="flex-1 bg-transparent px-4 py-2.5 text-sm text-equipment-text-primary placeholder:text-equipment-text-muted focus:outline-none"
                />
                <button
                  type="button"
                  onClick={() => sendMessage(inputValue)}
                  className="shrink-0 p-3 text-equipment-text-muted hover:text-equipment-gold transition-colors duration-200"
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
  );
}

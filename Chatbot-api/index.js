import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";

dotenv.config({ path: "../.env" });

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

// Simple request logger
app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.path}`);
    next();
});

const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY
});

// canonical equipment list (lowercase)
const AVAILABLE_EQUIPMENT = [
    "excavator",
    "bulldozer",
    "crane",
    "wheel loader",
    "motor grader",
    "dump truck",
    "vibro roller"
];

function normalizeText(text = "") {
    return String(text || "").toLowerCase().trim();
}

// --- Helper Extractors (fixed & robust) ---
function detectEquipment(text) {
    const normalized = normalizeText(text);
    const aliases = {
        "excavator": ["excavator", "exca", "beko", "eskavator", "ekskavator"],
        "bulldozer": ["bulldozer", "bull dozer", "dozer", "buldozer"],
        "crane": ["crane", "derekan", "kran", "tower crane"],
        "wheel loader": ["wheel loader", "loader", "wheel-loader", "wheelloader"],
        "motor grader": ["motor grader", "grader", "moton grader", "motor-grader"],
        "dump truck": ["dump truck", "dumptruck", "dump-truck", "truk"],
        "vibro roller": ["vibro roller", "roller", "vibrator roller", "vibro"]
    };

    for (const [canonical, words] of Object.entries(aliases)) {
        if (words.some(word => normalized.includes(word))) return canonical;
    }

    // fallback: direct substring match against canonical names
    for (const canonical of AVAILABLE_EQUIPMENT) {
        if (normalized.includes(canonical)) return canonical;
    }

    return null;
}

function detectDuration(text) {
    const normalized = normalizeText(text);
    if (/\b(?:satu|1)\s*bulan\b/.test(normalized)) return "1 bulan";
    const mBulan = normalized.match(/(\d+)\s*bulan/);
    if (mBulan) return `${mBulan[1]} bulan`;
    const mMinggu = normalized.match(/(\d+)\s*minggu/);
    if (mMinggu) return `${mMinggu[1]} minggu`;
    const mHari = normalized.match(/(\d+)\s*hari/);
    if (mHari) return `${mHari[1]} hari`;
    // compact forms
    const compact = normalized.match(/(\d+)bulan|(\d+)minggu|(\d+)hari/);
    if (compact) {
        const num = compact[1] || compact[2] || compact[3];
        if (/bulan/.test(normalizeText(text))) return `${num} bulan`;
        if (/minggu/.test(normalizeText(text))) return `${num} minggu`;
        if (/hari/.test(normalizeText(text))) return `${num} hari`;
    }
    return null;
}

function detectLocation(text) {
    const normalized = String(text || "");
    const patterns = [
        /lokasi proyek\s*[:\-]?\s*([a-zA-Z0-9\.,\-\s\/]+)/i,
        /lokasi\s*[:\-]?\s*([a-zA-Z0-9\.,\-\s\/]+)/i,
        /di\s+([A-Z0-9a-z\.\-\s\/,]+)/i,
        /area\s+([A-Z0-9a-z\.\-\s\/,]+)/i,
        /lokasi:\s*(.+)/i
    ];
    for (const p of patterns) {
        const m = normalized.match(p);
        if (m && m[1]) return m[1].trim();
    }
    // fallback: short free-text location (avoid pure numbers)
    const maybe = normalized.trim();
    if (maybe.length > 3 && /[a-zA-Z]/.test(maybe) && !/^\d+$/.test(maybe)) return maybe;
    return null;
}

function detectStartDate(text) {
    const normalized = normalizeText(text);
    // explicit long date Indonesian
    const explicitDate = text.match(/(\d{1,2}\s+(januari|februari|maret|april|mei|juni|juli|agustus|september|oktober|november|desember)\s*\d{0,4})/i);
    if (explicitDate) return explicitDate[0].trim();
    if (normalized.includes("besok")) return "besok";
    if (normalized.includes("lusa")) return "lusa";
    if (normalized.includes("minggu depan")) return "minggu depan";
    if (normalized.includes("bulan depan")) return "bulan depan";
    const dateMatch = text.match(/(\d{1,2}[\/\-]\d{1,2}[\/\-]\d{2,4})/);
    if (dateMatch) return dateMatch[1];
    const shortMatch = text.match(/(\d{1,2}\s+(jan|feb|mar|apr|mei|jun|jul|agt|sep|okt|nov|des)[a-z]*)/i);
    if (shortMatch) return shortMatch[0];
    return null;
}

// --- Extract booking state from conversation ---
function extractBookingData(conversation) {
    const state = {
        equipment: null,
        location: null,
        startDate: null,
        duration: null
    };

    // iterate messages in order (latest messages potentially override earlier)
    for (const msg of conversation) {
        if (!msg || msg.role !== "user" || !msg.text) continue;
        const text = msg.text;

        const eq = detectEquipment(text);
        if (eq) state.equipment = eq;

        const loc = detectLocation(text);
        if (loc) state.location = loc;

        const sd = detectStartDate(text);
        if (sd) state.startDate = sd;

        const dur = detectDuration(text);
        if (dur) state.duration = dur;

        // contextual short answers fallback
        const words = text.trim().split(/\s+/).length;
        if (words <= 4) {
            if (!state.equipment && AVAILABLE_EQUIPMENT.some(eq => normalizeText(text).includes(eq.split(" ")[0]))) {
                state.equipment = detectEquipment(text);
            }
            if (!state.location && /[a-zA-Z]/.test(text) && !/\d{4}/.test(text)) {
                state.location = text.trim();
            }
        }
    }

    return state;
}

function formatEquipmentName(name) {
    if (!name) return "";
    return name.split(" ").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
}

function isGreeting(text) {
    const normalized = normalizeText(text);
    const greetingPattern = /^(halo|hai|hello|hi|tes|test|ok|oke|ya|y|ping|p|selamat pagi|selamat siang|selamat sore|selamat malam)(?:[\s,.!]|$)/i;
    return greetingPattern.test(normalized);
}

// Standardized JSON response helpers
function ok(res, data) {
    return res.json({ success: true, data });
}
function badRequest(res, message) {
    return res.status(400).json({ success: false, error: message });
}
function serverError(res, message) {
    return res.status(500).json({ success: false, error: message });
}

// Health endpoint
app.get("/health", (_, res) => ok(res, { status: "ok", timestamp: new Date().toISOString() }));

app.post("/api/chat", async (req, res) => {
    try {
        // small debounce to simulate "thinking" and reduce spamming
        await new Promise(resolve => setTimeout(resolve, 350));

        const { conversation } = req.body;
        if (!conversation || !Array.isArray(conversation) || conversation.length === 0) {
            return badRequest(res, "Invalid conversation format");
        }

        const lastMessage = conversation[conversation.length - 1];

        // greeting shortcut for short greetings
        if (lastMessage && lastMessage.role === "user" && lastMessage.text && isGreeting(lastMessage.text) && conversation.length <= 2) {
            const greetingText = normalizeText(lastMessage.text);
            const isFormal = /^(halo|selamat)/i.test(greetingText);
            return ok(res, {
                result: isFormal
                    ? "Halo, selamat datang di layanan rental alat berat. Alat apa yang Anda butuhkan?"
                    : "Hai! Kami siap membantu. Alat apa yang Anda butuhkan?"
            });
        }

        const bookingData = extractBookingData(conversation);

        // sequential validation with helpful prompts
        if (!bookingData.equipment) {
            return ok(res, {
                result:
                    "Alat apa yang Anda butuhkan? Pilihan: Excavator, Bulldozer, Crane, Wheel Loader, Motor Grader, Dump Truck, Vibro Roller."
            });
        }

        // validate availability
        if (!AVAILABLE_EQUIPMENT.includes(bookingData.equipment)) {
            const suggestion = AVAILABLE_EQUIPMENT.find(eq => bookingData.equipment && eq.includes(bookingData.equipment.split(" ")[0]));
            return ok(res, {
                result: suggestion
                    ? `Mohon maaf, unit "${formatEquipmentName(bookingData.equipment)}" belum tersedia. Mungkin Anda bermaksud "${formatEquipmentName(suggestion)}"?`
                    : "Mohon maaf, unit tersebut belum tersedia di layanan kami. Apakah Anda ingin memilih alat berat lain?"
            });
        }

        if (!bookingData.location) {
            return ok(res, {
                result: `Baik, untuk ${formatEquipmentName(bookingData.equipment)} mohon info lokasi proyeknya di mana (kota / kabupaten / alamat singkat)?`
            });
        }

        if (!bookingData.startDate) {
            return ok(res, {
                result: `Baik, untuk ${formatEquipmentName(bookingData.equipment)} di ${bookingData.location}, kapan tanggal mulai sewanya? (misal: 12 Juli 2026 / besok / minggu depan)`
            });
        }

        if (!bookingData.duration) {
            return ok(res, {
                result: `Baik, untuk ${formatEquipmentName(bookingData.equipment)} di ${bookingData.location} mulai ${bookingData.startDate}, durasi sewanya berapa lama? (misal: 1 bulan / 3 minggu / 10 hari)`
            });
        }

        // All fields present -> ask Gemini to produce final confirmation
        const systemInstruction = `
You are a concise and professional Indonesian customer service agent for a heavy-equipment rental company.
Respond in Indonesian. Be polite, clear, and avoid repetition. Keep final confirmation to 1-3 short sentences (max 2 lines).
Always:
- Confirm the recorded booking details (equipment, location, start date, duration) exactly as given.
- Ask ONE follow-up question if you need additional contact information (name, phone, company), otherwise offer a short next step.
- Use natural CS phrasing and a friendly professional tone.
- Do NOT repeat previously provided instructions or ask unnecessary clarifying questions.
Return ONLY the confirmation text.
`;

        const userPrompt = `
Data penyewaan sudah lengkap:
- Alat: ${formatEquipmentName(bookingData.equipment)}
- Lokasi proyek: ${bookingData.location}
- Tanggal mulai: ${bookingData.startDate}
- Durasi: ${bookingData.duration}

Tolong buat:
1) Konfirmasi singkat bahwa permintaan sudah dicatat (1-3 kalimat pendek).
2) Sertakan ringkasan detail (alat, lokasi, tanggal, durasi).
3) Tanyakan Satu pertanyaan lanjutan: "Apakah kami dapat mengetahui nama kontak atau nomor telepon yang dapat dihubungi?" jika belum diberikan.
4) Jika kontak sudah disebutkan di percakapan sebelumnya, beri instruksi singkat untuk langkah selanjutnya (misal: "Tim kami akan menghubungi Anda dalam 1x24 jam").
`;

        const generation = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: `${systemInstruction}\n\n${userPrompt}`,
            config: {
                temperature: 0.2,
                topP: 0.95,
                topK: 40,
                maxOutputTokens: 220
            }
        });

        // Robust extraction of text from response (handle possible shapes)
        let finalText = "";
        if (generation) {
            // prefer .text, fallbacks for different SDK shapes
            finalText = generation.text || (generation.outputText && generation.outputText[0]) || "";
            if (!finalText && Array.isArray(generation.contents) && generation.contents[0]) {
                finalText = generation.contents[0].text || "";
            }
        }
        finalText = String(finalText || "").trim();

        // safe fallback if model returns nothing
        if (!finalText) {
            finalText = `Konfirmasi: Permintaan sewa untuk ${formatEquipmentName(bookingData.equipment)} di ${bookingData.location} mulai ${bookingData.startDate} selama ${bookingData.duration} telah kami catat. Mohon berikan nama kontak dan nomor telepon yang dapat dihubungi.`;
        }

        // remove excessive blank lines and ensure short response
        finalText = finalText.replace(/\n{2,}/g, "\n").split("\n").slice(0, 4).join(" ").trim();

        return ok(res, { result: finalText });
    } catch (err) {
        console.error("Error /api/chat:", err);
        return serverError(res, "Failed to generate response");
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
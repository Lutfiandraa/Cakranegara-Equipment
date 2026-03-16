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

const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY
});

app.post("/api/chat", async (req, res) => {
    try {
        const { conversation } = req.body;

        if (!conversation || !Array.isArray(conversation) || conversation.length === 0) {
            return res.status(400).json({
                error: "Invalid conversation format"
            });
        }

        const lastMessage = conversation[conversation.length - 1];

        if (lastMessage.role !== "user" || !lastMessage.text) {
            return res.status(400).json({
                error: "Last message must be from user and contain text"
            });
        }

        const userMessage = lastMessage.text;

        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: userMessage,
            config: {
                systemInstruction: `
You are a professional customer service assistant for a heavy equipment rental company.

Your job is to help customers who want to rent construction equipment.

Available equipment:
Excavator, Bulldozer, Crane, Wheel Loader, Motor Grader, Dump Truck, Vibro Roller.

Customer questions usually include:
- equipment availability
- rental duration
- price estimation
- machine specifications
- delivery to project sites

Communication rules:

1. Keep responses SHORT.
2. Maximum 2–3 sentences per reply.
3. Avoid long explanations.
4. Speak like a professional customer service agent.
5. Ask one short follow-up question when necessary.
6. Focus only on helping customers rent equipment.

If customers ask about price, explain briefly that rental price depends on:

- equipment type
- rental duration
- project location
- delivery requirements

Then ask the user for their project details.

Always prioritize clarity and brevity.
`,
                temperature: 0.9,
                topP: 0.9,
                topK: 40
            }
        });

        const text = response.text;

        res.json({
            result: text
        });

    } catch (error) {
        console.error("Error generating response:", error);

        res.status(500).json({
            error: "Failed to generate response"
        });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
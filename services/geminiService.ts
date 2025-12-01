import { GoogleGenAI, Chat } from "@google/genai";

// Initialize the client.
// Note: We rely on process.env.API_KEY.
// In a real scenario, this key must be present in the environment.
const apiKey = process.env.API_KEY || ''; 
const ai = new GoogleGenAI({ apiKey });

// System instruction to give the AI context about the portfolio owner.
const SYSTEM_INSTRUCTION = `
You are an AI assistant living on the portfolio website of Mohammed Hijazi, a Software Engineer.
Your goal is to answer questions about Mohammed's skills, experience, and work in a professional, concise, and slightly witty tech tone.

Here is Mohammed's background:
- **Role**: Software Engineer focused on backend, frontend, and AI.
- **Key Skills**: FastAPI, React, Python, C++, Linux, LangChain, LangGraph, Generative AI.
- **Focus Areas**: Building APIs, full-stack apps, and intelligent agents/orchestration on top of modern LLMs.

If asked about contact info, direct visitors to the contact section of the site.
Keep responses short (under 100 words) unless asked for detail.
Avoid inventing specific projects that are not described on the site.
`;

let chatSession: Chat | null = null;

export const getChatSession = (): Chat => {
  if (!chatSession) {
    chatSession = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
    });
  }
  return chatSession;
};

export const sendMessageToGemini = async (message: string): Promise<string> => {
  if (!apiKey) {
    return "I'm currently in demo mode without an API key. Please add a valid API_KEY to the environment variables to chat with me!";
  }

  try {
    const session = getChatSession();
    const response = await session.sendMessage({ message });
    return response.text || "I'm thinking...";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I seem to be having trouble connecting to my neural network right now. Try again later.";
  }
};
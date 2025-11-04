
import { GoogleGenAI, Type, GenerateContentResponse } from '@google/genai';
import type { AIAnalysis } from '../types';

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
    console.warn("API key not found. AI features will be disabled and mock data will be used.");
}

const ai = new GoogleGenAI({ apiKey: API_KEY || "DUMMY_KEY" });

const analysisSchema = {
    type: Type.OBJECT,
    properties: {
        summary: {
            type: Type.STRING,
            description: "A concise, one-paragraph summary of the dream, written in a gentle and insightful tone."
        },
        themes: {
            type: Type.ARRAY,
            items: { type: Type.STRING },
            description: "A list of 3-5 main themes or concepts present in the dream (e.g., 'Overcoming obstacles', 'Quest for knowledge')."
        },
        symbols: {
            type: Type.ARRAY,
            items: { type: Type.STRING },
            description: "A list of 3-5 key symbols (objects, places, characters) from the dream and a very brief potential meaning (e.g., 'Forest - The unknown')."
        },
        emotions: {
            type: Type.ARRAY,
            items: { type: Type.STRING },
            description: "A list of 3-5 dominant emotions felt or conveyed in the dream (e.g., 'Anxiety', 'Hope', 'Curiosity')."
        }
    },
    required: ["summary", "themes", "symbols", "emotions"]
};

const getMockAnalysis = (): AIAnalysis => ({
    summary: "This is a sample AI analysis because the API key is not configured. This dream appears to be about flying over a futuristic city, suggesting themes of freedom and ambition. The dreamer feels a sense of wonder and excitement as they navigate the glowing skyscrapers.",
    themes: ["Freedom", "Ambition", "Exploration", "Future"],
    symbols: ["Flying - Personal power", "Futuristic City - Aspirations", "Glowing Lights - Hope"],
    emotions: ["Wonder", "Excitement", "Confidence"]
});

export const analyzeDreamWithAI = async (dreamText: string): Promise<AIAnalysis> => {
    if (!API_KEY) {
        console.log("Using mock data for AI analysis.");
        return new Promise(resolve => setTimeout(() => resolve(getMockAnalysis()), 1500));
    }

    try {
        const response: GenerateContentResponse = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: `Analyze the following dream text. Identify the summary, main themes, key symbols (with brief meanings), and dominant emotions. Dream: "${dreamText}"`,
            config: {
                responseMimeType: "application/json",
                responseSchema: analysisSchema,
            },
        });
        
        const jsonText = response.text.trim();
        const analysisData = JSON.parse(jsonText);

        return analysisData as AIAnalysis;

    } catch (error) {
        console.error("Error analyzing dream with Gemini:", error);
        return getMockAnalysis();
    }
};

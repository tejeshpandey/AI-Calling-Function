import dotenv from 'dotenv';
import OpenAI from 'openai';

dotenv.config();

// Initialize OpenAI API client
const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

// Function to summarize text
export async function summarize(text: string): Promise<string> {
    const response = await openai.completions.create({
        model: 'text-davinci-003',
        prompt: `Summarize the following text: ${text}`,
        max_tokens: 50,
    });
    return response.choices[0].text.trim();
}

// Function to translate text
export async function translate(text: string, targetLang: string): Promise<string> {
    const response = await openai.completions.create({
        model: 'text-davinci-003',
        prompt: `Translate the following text to ${targetLang}: ${text}`,
        max_tokens: 100,
    });
    return response.choices[0].text.trim();
} 
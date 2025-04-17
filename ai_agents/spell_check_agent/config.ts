export const SpellCheckAgentConfig = {
    apiKey: process.env.OPENAI_API_KEY || process.env.SPELL_CHECK_API_KEY,
    apiUrl: "https://api.openai.com/v1/chat/completions",
    model: "gpt-3.5-turbo",
    temperature: 0.3,
    timeout: 5000,
    maxRetries: 3,
    systemPrompt: "You are a spell-checking assistant. Check the text for spelling errors and return only JSON with format {isCorrect: boolean, suggestions: string[]}."
};
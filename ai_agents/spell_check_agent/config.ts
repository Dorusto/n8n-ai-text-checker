export const SpellCheckAgentConfig = {
    apiKey: process.env.SPELL_CHECK_API_KEY,
    apiUrl: "https://api.spellcheckservice.com/check",
    timeout: 5000,
    maxRetries: 3,
};
import axios from 'axios';
import { SpellCheckAgentConfig } from './config';

class SpellCheckAgent {
    private config: typeof SpellCheckAgentConfig;

    constructor(config = SpellCheckAgentConfig) {
        this.config = config;
    }

    async checkSpelling(text: string): Promise<{isCorrect: boolean, suggestions: string[]}> {
        try {
            // For a quick solution, use a free spell check API or OpenAI
            const response = await axios.post(this.config.apiUrl, {
                model: this.config.model,
                messages: [
                    {
                        role: "system",
                        content: this.config.systemPrompt
                    },
                    {
                        role: "user",
                        content: `Check this text for spelling errors: "${text}"`
                    }
                ],
                temperature: this.config.temperature
            }, {
                headers: {
                    'Authorization': `Bearer ${this.config.apiKey}`,
                    'Content-Type': 'application/json'
                },
                timeout: this.config.timeout
            });
            
            // Parse the JSON from the response content
            const content = response.data.choices[0].message.content;
            return JSON.parse(content);
        } catch (error) {
            console.error('Spell check error:', error);
            return {isCorrect: false, suggestions: ["Error checking spelling"]};
        }
    }
}

export default SpellCheckAgent;
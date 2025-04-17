export interface TextValidationResult {
    isSpelledCorrectly: boolean;
    startsWithCapital: boolean;
    originalText: string;
}

export interface AgentConfig {
    apiKey: string;
    endpointUrl: string;
}

import 'dotenv/config';
const apiKey = process.env.OPENAI_API_KEY;
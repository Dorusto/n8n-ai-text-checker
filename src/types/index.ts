export interface TextValidationResult {
    originalText: string;
    isSpelledCorrectly: boolean;
    spellingErrors: string[];
    startsWithCapital: boolean;
    fixedText: string;
    needsCorrection: boolean;
}

export interface AgentConfig {
    apiKey: string;
    endpointUrl: string;
}

import 'dotenv/config';
const apiKey = process.env.OPENAI_API_KEY;
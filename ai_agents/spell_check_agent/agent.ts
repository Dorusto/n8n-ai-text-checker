class SpellCheckAgent {
    private spellCheckService: any; // Replace with actual type for the spell check service

    constructor(spellCheckService: any) {
        this.spellCheckService = spellCheckService;
    }

    async checkSpelling(text: string): Promise<string[]> {
        // Call the external spell checking service
        const response = await this.spellCheckService.check(text);
        return response.correctedWords; // Adjust based on actual response structure
    }

    async validateText(text: string): Promise<{ isValid: boolean; errors: string[] }> {
        const spellingErrors = await this.checkSpelling(text);
        const capitalLetterError = !this.startsWithCapitalLetter(text);

        const errors = [...spellingErrors];
        if (capitalLetterError) {
            errors.push('Text does not start with a capital letter.');
        }

        return {
            isValid: errors.length === 0,
            errors,
        };
    }

    private startsWithCapitalLetter(text: string): boolean {
        return /^[A-Z]/.test(text);
    }
}

export default SpellCheckAgent;
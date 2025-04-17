class CapitalizationAgent {
    checkCapitalization(text: string): boolean {
        return text.length > 0 && text[0] === text[0].toUpperCase();
    }

    // Future method for additional capitalization checks can be added here
}

export default CapitalizationAgent;
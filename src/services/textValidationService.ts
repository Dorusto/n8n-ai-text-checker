import SpellCheckAgent from '../../ai_agents/spell_check_agent/agent';
import CapitalizationAgent from '../../ai_agents/capitalization_agent/agent';

export interface TextValidationResult {
  originalText: string;
  isSpelledCorrectly: boolean;
  spellingErrors: string[]; // Added this property
  startsWithCapital: boolean;
  fixedText: string;
  needsCorrection: boolean;
}

class TextValidationService {
  private spellCheckAgent: SpellCheckAgent;
  private capitalizationAgent: CapitalizationAgent;
  // You can add more agents here in the future
  
  constructor() {
    this.spellCheckAgent = new SpellCheckAgent();
    this.capitalizationAgent = new CapitalizationAgent();
  }
  
  async validateText(text: string): Promise<TextValidationResult> {
    // Run all checks in parallel for efficiency
    const [spellingResult, isCapitalized] = await Promise.all([
      this.spellCheckAgent.checkSpelling(text),
      Promise.resolve(this.capitalizationAgent.isCapitalized(text))
    ]);
    
    // Prepare corrections
    const fixedText = !isCapitalized ? 
      this.capitalizationAgent.fixCapitalization(text) : 
      text;
    
    return {
      originalText: text,
      isSpelledCorrectly: spellingResult.isCorrect,
      spellingErrors: spellingResult.suggestions,
      startsWithCapital: isCapitalized,
      fixedText,
      needsCorrection: !spellingResult.isCorrect || !isCapitalized
    };
  }
}

export default TextValidationService;
import { CapitalizationAgentConfig } from './config';
import { isCapitalized } from '../../src/utils/helpers';

class CapitalizationAgent {
    isCapitalized(text: string): boolean {
        return isCapitalized(text);
    }
    
    fixCapitalization(text: string): string {
        if (this.isCapitalized(text)) {
            return text;
        }
        
        return text.charAt(0).toUpperCase() + text.slice(1);
    }
}

export default CapitalizationAgent;
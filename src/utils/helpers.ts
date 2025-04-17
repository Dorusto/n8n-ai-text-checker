export function formatText(text: string): string {
    return text.trim();
}

export function isCapitalized(text: string): boolean {
    return text.length > 0 && text[0] === text[0].toUpperCase();
}

export function handleApiResponse(response: any): any {
    if (!response || response.error) {
        throw new Error('API response error: ' + (response.error || 'Unknown error'));
    }
    return response.data;
}
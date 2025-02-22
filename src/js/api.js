const API_URL = 'https://api.thecatapi.com/v1';

const getApiKey = () => {
    try {
        // For browser environment
        if (typeof window !== 'undefined' && window.ENV_VITE_CAT_API_KEY) {
            return window.ENV_VITE_CAT_API_KEY;
        }
        // For Node/test environment
        if (typeof process !== 'undefined' && process.env) {
            return process.env.VITE_CAT_API_KEY || '';
        }
    } catch (e) {
        console.warn('Error accessing environment:', e);
    }
    return '';
};

export async function fetchCats(limit = 6) {
    try {
        const apiKey = getApiKey();
        console.log('Using API key:', apiKey ? 'Key available' : 'No key found');
        
        const response = await fetch(`${API_URL}/images/search?limit=${limit}`, {
            headers: {
                'x-api-key': apiKey
            }
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log('Cat API response:', data);
        return data;
    } catch (error) {
        console.error('Error fetching cats:', error);
        return [];
    }
}
const API_URL = 'https://api.thecatapi.com/v1';

// Remove global API_KEY and compute it inside fetchCats to avoid static parsing of import.meta
export async function fetchCats(limit = 6) {
    let API_KEY = '';
    if (process.env.JEST_WORKER_ID !== undefined) {
        // Running in Jest
        API_KEY = process.env.VITE_CAT_API_KEY || '';
    } else if (typeof window !== 'undefined') {
        // Running in browser, safely access import.meta.env dynamically
        API_KEY = new Function('return import.meta.env.VITE_CAT_API_KEY')();
    }

    try {
        const response = await fetch(`${API_URL}/images/search?limit=${limit}`, {
            headers: {
                'x-api-key': API_KEY
            }
        });
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        return await response.json();
    } catch (error) {
        console.error('Error fetching cats:', error);
        return [];
    }
}
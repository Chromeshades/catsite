import { getConfig } from './config.js';

const API_URL = 'https://api.thecatapi.com/v1';

async function fetchCats(limit = 6) {
    try {
        const config = getConfig();
        console.log('Using API key:', config.apiKey ? 'Key available' : 'No key found');
        
        const response = await fetch(`${API_URL}/images/search?limit=${limit}`, {
            headers: {
                'x-api-key': config.apiKey
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

export { fetchCats };